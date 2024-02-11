import { IBooking, IBookingCreated } from "app/_models/IBooking";
import { supabaseAuthClient } from "lib/supabaseAuthClient";
import { NextApiRequest, NextApiResponse } from "next";


export default async function createBooking(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { product, bookingMessage, requestedDate, bookingStatus, customer } = req.body;

      const bookingObject: IBooking = {
        bookingId: '',
        product: product,
        bookingMessage: bookingMessage,
        requestedDate: requestedDate,
        bookingStatus: bookingStatus,
        customer: customer,
        created_at: new Date(),
        updated_at: null,
      };
      console.log('bookingObject is:', bookingObject)

      // if (requestedDate) {
      //   bookingObject.requestedDate = requestedDate;
      // }

      // const { data: bookingData, error: bookingError } = await supabaseAuthClient
      //   .from('Booking')
      //   .insert([bookingObject])
      //   .select();

      // if (bookingError) {
      //   throw bookingError;
      // }

      // const bookingId = bookingData[0]?.bookingId;


      // if (!bookingId) {
      //   throw new Error('BookingId not found in response');
      // }

      // const created_at = bookingData[0]?.created_at;

      // const { data: newBookingData, error: getError } = await supabaseAuthClient
      //   .from('Booking')
      //   .select('*')
      //   .eq('created_at', created_at)
      //   .single();

      // if (getError) {
      //   throw getError;
      // }

      // console.log('New booking data:', newBookingData);

      // const productId = bookingData[0]?.product;

      // const { data: productData, error: getProductError } = await supabaseAuthClient
      //   .from('Product')
      //   .select('productTitle')
      //   .eq('productId', productId)
      //   .single();

      // if (getProductError) {
      //   throw getProductError;
      // }

      // const completeBookingData: IBookingCreated = {
      //   ...bookingData[0],
      //   productTitle: productData.productTitle,
      //   booking_created_at: bookingData[0]?.created_at
      // }

      // res.status(200).json({ success: true, bookingData: completeBookingData });
    } catch (error) {
      console.error('Error creating booking:', error);
      res.status(500).json({ error: 'Error creating booking' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
