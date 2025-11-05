import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cssyzyerkvdknbvcitqp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzc3l6eWVya3Zka25idmNpdHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNjIwODgsImV4cCI6MjA3NzkzODA4OH0.Dlh4EDFsJw857lcrM_sw8H0maxlCiRzGBVn0FKXXdn8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
