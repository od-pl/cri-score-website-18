// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://trturdopdemrkfzwkubf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydHVyZG9wZGVtcmtmendrdWJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2NjA3MzcsImV4cCI6MjA2NjIzNjczN30.oRThw5vvCcCH9HTgzEbUcMNLMPTb_wD7uqLbMZ37jQg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);