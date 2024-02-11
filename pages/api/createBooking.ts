import { IBooking } from "app/_models/IBooking";
import { randomUUID } from "crypto";
import { supabaseAuthClient } from "lib/supabaseAuthClient";
import { NextApiRequest, NextApiResponse } from "next";


export default async function createBooking(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { product, bookingMessage, requestedDate, bookingStatus, customer } = req.body;

      let booking: IBooking | null = null;

      const bookingObject: IBooking = {
        bookingId: randomUUID(),
        product: product,
        bookingMessage: bookingMessage,
        requestedDate: requestedDate,
        bookingStatus: bookingStatus,
        customer: customer,
        created_at: new Date(),
        updated_at: null,
      };

      const { data: bookingCreateData, error: bookingError } = await supabaseAuthClient
        .from('Booking')
        .insert([bookingObject])
        .select();

      if (bookingError) {
        throw bookingError;
      }

      booking = bookingCreateData[0];

      res.status(201).json({ booking });
    } catch (error) {
      console.error('Error creating booking:', error);
      res.status(500).json({ error: 'Error creating booking' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
