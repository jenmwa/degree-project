

import { supabaseAuthClient } from "../../lib/supabaseAuthClient";

//hämtar alla produkter eller alla bokningar
export default async function handler(req: any, res: any) {
  const { entity } = req.query;

  if (req.method === 'GET') {
    try {
      let { data, error } = await supabaseAuthClient
        .from(entity)
        .select('*');
      console.log('get:', data)

      if (error) {
        throw error;
      }
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

