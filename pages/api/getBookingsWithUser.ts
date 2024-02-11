
import { supabaseAuthClient } from "../../lib/supabaseAuthClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getBookingsWithUsers(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      let { data: Booking, error } = await supabaseAuthClient
        .from('Booking')
        .select('*');

      if (error) {
        throw error;
      }

      if (Booking) {
        const bookingsWithCustomerEmailAndTitle = [];
        for (const booking of Booking) {
          const { data: customerData, error: customerError } = await supabaseAuthClient
            .from('User')
            .select('userEmail')
            .eq('userId', booking.customer);

          if (customerError) {
            throw customerError;
          }

          const { data: productData, error: productError } = await supabaseAuthClient
            .from('Product')
            .select('productTitle')
            .eq('productId', booking.product);

          if (productError) {
            throw productError;
          }

          const bookingWithCustomerEmailAndTitle = {
            ...booking,
            customerEmail: customerData[0].userEmail,
            productTitle: productData[0].productTitle
          };
          bookingsWithCustomerEmailAndTitle.push(bookingWithCustomerEmailAndTitle);
        }

        res.status(200).json({ data: bookingsWithCustomerEmailAndTitle });
      } else {
        res.status(200).json({ Booking });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
