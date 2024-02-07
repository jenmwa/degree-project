import { supabaseAuthClient } from "lib/supabaseAuthClient";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { product, bookingMessage, requestedDate, bookingStatus } = req.body;

      const userId = req.body.customer;

      const bookingObject: any = {
        product: product,
        bookingMessage: bookingMessage,
        bookingStatus: bookingStatus,
        customer: userId,
      };

      if (requestedDate) {
        bookingObject.requestedDate = requestedDate;
      }

      const { data: bookingData, error: bookingError } = await supabaseAuthClient
        .from('Booking')
        .insert([bookingObject])
        .select();

      if (bookingError) {
        throw bookingError;
      }

      res.status(200).json({ success: true, bookingData });
    } catch (error) {
      console.error('Error creating booking:', error);
      res.status(500).json({ error: 'Error creating booking' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
