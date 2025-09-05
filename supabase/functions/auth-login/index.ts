import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { username, password } = await req.json()

    if (!username || !password) {
      return new Response(
        JSON.stringify({ error: 'Username and password are required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Hash the provided password using the same method as stored
    const passwordHash = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(password)
    )
    const hashHex = Array.from(new Uint8Array(passwordHash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')

    // Check credentials against admin_users table
    const { data: adminUser, error } = await supabase
      .from('admin_users')
      .select('id, username')
      .eq('username', username)
      .eq('password_hash', hashHex)
      .single()

    if (error || !adminUser) {
      console.log('Login failed for user:', username, error)
      return new Response(
        JSON.stringify({ error: 'Invalid credentials' }),
        { 
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Create a simple JWT-like token (in production, use proper JWT)
    const token = btoa(JSON.stringify({
      userId: adminUser.id,
      username: adminUser.username,
      exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
    }))

    console.log('Login successful for user:', username)

    return new Response(
      JSON.stringify({ 
        success: true, 
        token,
        user: {
          id: adminUser.id,
          username: adminUser.username
        }
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Auth login error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})