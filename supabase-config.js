const SUPABASE_URL = "https://towezwfweopuvsfhtltp.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_IzimpwyAxiz8VwxsKy8UIw_ldefjU6a";

const uneraSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
        }
    }
);