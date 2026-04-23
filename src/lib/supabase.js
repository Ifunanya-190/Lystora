import { createClient } from '@supabase/supabase-js'

// These come from your .env file
// VITE_ prefix makes them available in frontend code
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a single Supabase client instance for the whole app
// This handles: database queries, auth, file storage
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
