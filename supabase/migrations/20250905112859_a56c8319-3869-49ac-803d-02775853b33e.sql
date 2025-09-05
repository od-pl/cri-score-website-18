-- Remove the dangerous anonymous insert policy
DROP POLICY IF EXISTS "Anonymous users can insert leads" ON public.leads;

-- Ensure only authenticated users can access leads data
-- Recreate policies to be more explicit and secure

-- Drop existing policies to recreate them properly
DROP POLICY IF EXISTS "Authenticated users can view all leads" ON public.leads;
DROP POLICY IF EXISTS "Authenticated users can insert leads" ON public.leads;  
DROP POLICY IF EXISTS "Authenticated users can update leads" ON public.leads;
DROP POLICY IF EXISTS "Authenticated users can delete leads" ON public.leads;

-- Create secure policies that only allow authenticated admin access
CREATE POLICY "Admin users can view all leads" 
ON public.leads 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Admin users can update leads" 
ON public.leads 
FOR UPDATE 
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Admin users can delete leads" 
ON public.leads 
FOR DELETE 
TO authenticated
USING (true);

-- Note: No INSERT policy for regular authenticated users
-- Inserts will only happen via edge functions using service role