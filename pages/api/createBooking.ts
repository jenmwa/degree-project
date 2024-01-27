import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAuthClient } from "@/lib/supabaseAuthClient";
// import { createUser } from "./createUser";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      console.log('createBooking:', req.body);
      const { productId, bookingMessage, requestedDate, bookingStatus } = req.body;

      const { data, error } = await supabaseAuthClient
        .from('Booking')
        .insert([
          { product: productId, bookingMessage, requestedDate, bookingStatus, created_at: 'now()' },
        ])
        .select();

      if (error) {
        throw error;
      }

      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error('Error updating booking:', error);
      res.status(500).json({ error: 'Error updating booking' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
