import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAuthClient } from "@/lib/supabaseAuthClient";
// import { createUser } from "./createUser";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // console.log('createBooking:', req.body);
      const { product, bookingMessage, requestedDate, bookingStatus } = req.body;
      // console.log('produktId:', JSON.stringify(product))
      // const { data: productData, error: productError } = await supabaseAuthClient
      //   .from('Product')
      //   .select('*')
      //   .eq('productId', product)
      //   .single();

      // if (productError) {
      //   throw productError;
      // }

      // if (!productData) {
      //   throw new Error('Product not found');
      // }

      const { data: bookingData, error: bookingError } = await supabaseAuthClient
        .from('Booking')
        .insert([
          { product: product, bookingMessage, requestedDate, bookingStatus, created_at: 'now()' },
        ])
        .select();

      if (bookingError) {
        throw bookingError;
      }

      res.status(200).json({ success: true, bookingData });
    } catch (error) {
      console.error('Error updating booking:', error);
      res.status(500).json({ error: 'Error updating booking' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
