
-- Create the Enquiries table with all the specified columns
CREATE TABLE public.enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT,
  role TEXT,
  organization TEXT NOT NULL,
  enquiry_type TEXT,
  message TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
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
  lead_score INTEGER,
  is_high_intent BOOLEAN DEFAULT FALSE,
  source_type TEXT,
  is_client_account_created BOOLEAN DEFAULT FALSE,
  tags TEXT[]
);

-- Enable Row Level Security (RLS) for the enquiries table
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Create a permissive policy to allow inserts from the public (for form submissions)
-- This allows anonymous users to submit enquiries
CREATE POLICY "Allow public enquiry submissions" 
  ON public.enquiries 
  FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Create a policy for authenticated users to view all enquiries (for admin purposes)
CREATE POLICY "Allow authenticated users to view enquiries" 
  ON public.enquiries 
  FOR SELECT 
  TO authenticated
  USING (true);
