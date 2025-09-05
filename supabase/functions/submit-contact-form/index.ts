import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Input validation functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

const sanitizeString = (str: string, maxLength: number = 255): string => {
  if (!str) return '';
  return str.trim().substring(0, maxLength);
};

const validateLeadData = (data: any): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Required fields validation
  if (!data.full_name || data.full_name.trim().length < 2) {
    errors.push('Full name is required and must be at least 2 characters');
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push('Valid email address is required');
  }

  if (!data.organization || data.organization.trim().length < 2) {
    errors.push('Organization is required and must be at least 2 characters');
  }

  // Optional fields validation
  if (data.phone && !validatePhone(data.phone)) {
    errors.push('Invalid phone number format');
  }

  if (data.message && data.message.length > 1000) {
    errors.push('Message must be less than 1000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    // Initialize Supabase client with service role key for secure operations
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const requestData = await req.json();
    
    // Validate input data
    const validation = validateLeadData(requestData);
    if (!validation.isValid) {
      return new Response(
        JSON.stringify({ 
          error: 'Validation failed', 
          details: validation.errors 
        }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Sanitize and prepare lead data
    const leadData = {
      full_name: sanitizeString(requestData.full_name, 100),
      email: sanitizeString(requestData.email, 255),
      phone: requestData.phone ? sanitizeString(requestData.phone, 20) : null,
      organization: sanitizeString(requestData.organization, 200),
      role: requestData.role ? sanitizeString(requestData.role, 100) : null,
      enquiry_type: requestData.enquiry_type ? sanitizeString(requestData.enquiry_type, 50) : null,
      message: requestData.message ? sanitizeString(requestData.message, 1000) : null,
      
      // Tracking data (sanitized)
      source_page: requestData.source_page ? sanitizeString(requestData.source_page, 500) : null,
      campaign_id: requestData.campaign_id ? sanitizeString(requestData.campaign_id, 100) : null,
      utm_source: requestData.utm_source ? sanitizeString(requestData.utm_source, 100) : null,
      utm_medium: requestData.utm_medium ? sanitizeString(requestData.utm_medium, 100) : null,
      utm_campaign: requestData.utm_campaign ? sanitizeString(requestData.utm_campaign, 100) : null,
      referrer_url: requestData.referrer_url ? sanitizeString(requestData.referrer_url, 500) : null,
      user_agent: requestData.user_agent ? sanitizeString(requestData.user_agent, 500) : null,
      device_type: requestData.device_type ? sanitizeString(requestData.device_type, 50) : null,
      browser: requestData.browser ? sanitizeString(requestData.browser, 100) : null,
      ip_address: requestData.ip_address ? sanitizeString(requestData.ip_address, 45) : null,
      location_city: requestData.location_city ? sanitizeString(requestData.location_city, 100) : null,
      location_country: requestData.location_country ? sanitizeString(requestData.location_country, 100) : null,
      clarity_session_id: requestData.clarity_session_id ? sanitizeString(requestData.clarity_session_id, 100) : null,
      source_type: requestData.source_type ? sanitizeString(requestData.source_type, 50) : null,
      
      // High intent detection
      is_high_intent: Boolean(requestData.is_high_intent),
      
      // Tags (sanitized array)
      tags: Array.isArray(requestData.tags) 
        ? requestData.tags.map((tag: string) => sanitizeString(tag, 50)).filter(Boolean)
        : null,
      
      // Default status
      status: 'new'
    };

    console.log('Inserting lead data:', { email: leadData.email, organization: leadData.organization });

    // Insert into database using service role (bypasses RLS)
    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select('id')
      .single();

    if (error) {
      console.error('Database insertion error:', error);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to save lead data',
          details: error.message 
        }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Lead successfully created with ID:', data.id);

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true,
        leadId: data.id,
        message: 'Thank you for your interest. Our team will contact you within 24 hours.'
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: 'Please try again later or contact support if the issue persists.'
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
})