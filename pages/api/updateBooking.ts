import { supabaseClient } from "lib/supabase";


export default async function handler(req: any, res: any) {
  if (req.method === 'PUT') {
    console.log(req.body)
    try {
      const { bookingId, bookingStatus } = req.body;

      if (!bookingId) {
        return res.status(400).json({ error: 'bookingId required' });
      }

      const { data, error } = await supabaseClient
        .from('Booking')
        .update({ bookingStatus: bookingStatus, updated_at: 'now()' })
        .eq('bookingId', bookingId)
        .select('*');

      if (error) {
        throw error;
      }

      res.status(200).json({ updatedBooking: data[0] });
    } catch (error) {
      console.error('Error updating booking:', error);
      res.status(500).json({ error: 'Error updating booking' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
