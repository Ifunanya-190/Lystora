import { createClient } from '@supabase/supabase-js'

// These come from your .env file
// VITE_ prefix makes them available in frontend code
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env file or deployment settings.')
}

// Create a single Supabase client instance for the whole app
// This handles: database queries, auth, file storage
export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null
