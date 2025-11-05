import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gdnbrdtwkzfccetynylr.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkbmJyZHR3a3pmY2NldHlueWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxNDEyMTAsImV4cCI6MjA3MTcxNzIxMH0.dgx4XRq7CX4d0hDPbIG3fuax60Ft0B4KAMxEKsz9OMM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
