import { supabaseAuthClient } from "lib/supabaseAuthClient";

export default async function getBookingsWithUsers(req: any, res: any) {
  if (req.method === 'GET') {
    try {
      let { data: Booking, error } = await supabaseAuthClient
        .from('Booking')
        .select('*');

      if (error) {
        throw error;
      }
      res.status(200).json({ data: Booking });
    } catch (error) {
      console.error('error', error)
      res.status(500).json({ error: 'An error occurred while fetching bookings.' });
    }
  }

}

// import { supabaseAuthClient } from "../../lib/supabaseAuthClient";

// export default async function getBookingsWithUsers(req: any, res: any) {
//   // const { entity } = req.query;

//   if (req.method === 'GET') {
//     try {
//       let { data, error } = await supabaseAuthClient
//         .from('Booking')
//         .select('*');

//       if (error) {
//         throw error;
//       }

//       if (data) {
//         const bookingsWithCustomerEmailAndTitle = [];
//         for (const booking of data) {
//           const { data: customerData, error: customerError } = await supabaseAuthClient
//             .from('User')
//             .select('userEmail')
//             .eq('userId', booking.customer);

//           if (customerError) {
//             throw customerError;
//           }

//           const { data: productData, error: productError } = await supabaseAuthClient
//             .from('Product')
//             .select('productTitle')
//             .eq('productId', booking.product);

//           if (productError) {
//             throw productError;
//           }

//           const bookingWithCustomerEmailAndTitle = {
//             ...booking,
//             customerEmail: customerData[0].userEmail,
//             productTitle: productData[0].productTitle
//           };
//           bookingsWithCustomerEmailAndTitle.push(bookingWithCustomerEmailAndTitle);
//         }

//         res.status(200).json({ data: bookingsWithCustomerEmailAndTitle });
//       } else {
//         res.status(200).json({ data });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Error fetching data' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// };

