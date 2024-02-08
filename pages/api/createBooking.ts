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
      console.log('booking is createde :', bookingData)
      const created_at = bookingData[0]?.created_at;

      const { data: newBookingData, error: getError } = await supabaseAuthClient
        .from('Booking')
        .select('*')
        .eq('created_at', created_at)
        .single();

      if (getError) {
        throw getError;
      }
      console.log('bookingId is:', newBookingData)

      const productId = bookingData[0]?.product;

      const { data: productData, error: getProductError } = await supabaseAuthClient
        .from('Product')
        .select('productTitle')
        .eq('productId', productId)
        .single();

      if (getProductError) {
        throw getProductError;
      }
      console.log('getting productTitle is:', productData)
      const completeBookingData = { ...bookingData[0], productTitle: productData.productTitle };

      res.status(200).json({ success: true, bookingData: completeBookingData });
    } catch (error) {
      console.error('Error creating booking:', error);
      res.status(500).json({ error: 'Error creating booking' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
