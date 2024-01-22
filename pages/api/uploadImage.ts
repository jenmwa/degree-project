// import { NextApiRequest, NextApiResponse } from 'next';// Import v4 from the 'uuid' package
// import { supabase } from '@/lib/supabase';
// import { randomUUID } from 'crypto';
// import { supabaseServer } from '@/lib/supabaseServer';

// import { supabase } from "@/lib/supabase";
// import { supabaseServer } from "@/lib/supabaseServer";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { productId } = req.body;
//       const fileBuffer = req.body.file.buffer; // Use buffer instead of file directly
//       const { data, error } = await supabaseServer.storage
//         .from('images')
//         .upload(`/${productId}/${randomUUID()}`, fileBuffer); // Use fileBuffer here

//       if (error) {
//         console.error('Error uploading image:', error.message);
//         return res.status(500).json({ error: 'Error uploading image' });
//       }

//       if (data) {
//         console.log('Image uploaded successfully:', data);
//         return res.status(200).json({ success: true, data });
//       }
//     } catch (error) {
//       console.error('Unexpected error:', error);
//       return res.status(500).json({ error: 'Unexpected error' });
//     }
//   } else {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }
