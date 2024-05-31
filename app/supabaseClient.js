import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rmxqybjgofbejsjdbdsz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJteHF5Ympnb2ZiZWpzamRiZHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNjcxODcsImV4cCI6MjAyNTk0MzE4N30.sFhOgn98E42R7oktJTf1I7SB0ApORy0q4yD9w_MCTrw";
export const supabase = createClient(supabaseUrl, supabaseKey);
