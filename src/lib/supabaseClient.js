import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.warn(
    "Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY - blog content will not load. See .env.example."
  );
}

// Anon key only, read-only: RLS on the CMS project only allows this key to
// select published posts / active categories / tags. Never put the
// service-role key here. Null when unconfigured so importing pages don't
// crash before .env is set up - src/services/blog.js checks for this.
export const supabase = url && anonKey ? createClient(url, anonKey, { auth: { persistSession: false } }) : null;
