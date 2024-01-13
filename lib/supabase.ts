
// import { createClient } from '@supabase/supabase-js';

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// // export const supabase = createClient(
// //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
// //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// // );
// // export const supabaseAdmin = createClient(
// //   process.env.NEXT_PUBLIC_SUPABASE_URL,
// //   process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE__KEY
// // );
// // const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
// // const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || '';

// // export const supabase = createClient(supabaseUrl, supabaseKey);
export const supabase = createClientComponentClient();
