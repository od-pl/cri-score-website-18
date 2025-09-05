-- Create leads table for storing contact form enquiries
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  organization TEXT NOT NULL,
  role TEXT,
  enquiry_type TEXT,
  message TEXT,
  source_page TEXT,
  campaign_id TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referrer_url TEXT,
  user_agent TEXT,
  device_type TEXT,
  browser TEXT,
  ip_address TEXT,
  location_city TEXT,
  location_country TEXT,
  clarity_session_id TEXT,
  is_high_intent BOOLEAN DEFAULT false,
  source_type TEXT,
  tags TEXT[],
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'closed')),
  assigned_to TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to view all leads
CREATE POLICY "Authenticated users can view all leads" 
ON public.leads 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create policy for authenticated users to insert leads
CREATE POLICY "Authenticated users can insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

-- Create policy for authenticated users to update leads
CREATE POLICY "Authenticated users can update leads" 
ON public.leads 
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- Create policy for authenticated users to delete leads
CREATE POLICY "Authenticated users can delete leads" 
ON public.leads 
FOR DELETE 
USING (auth.role() = 'authenticated');

-- Create policy to allow anonymous inserts (for contact form submissions)
CREATE POLICY "Anonymous users can insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_leads_updated_at
BEFORE UPDATE ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_leads_email ON public.leads(email);
CREATE INDEX idx_leads_created_at ON public.leads(created_at);
CREATE INDEX idx_leads_status ON public.leads(status);
CREATE INDEX idx_leads_is_high_intent ON public.leads(is_high_intent);

-- Create admin_users table for authentication
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for admin_users
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policy for admin users table (only system can access)
CREATE POLICY "Only system can access admin users" 
ON public.admin_users 
FOR ALL 
USING (false);

-- Insert the admin user with the provided credentials
-- Password is hashed using a simple method (in production, use bcrypt)
INSERT INTO public.admin_users (username, password_hash)
VALUES ('amitshah@offee.in', encode(sha256('amitshah@offee.in'::bytea), 'hex'));