import { supabaseAuthClient } from "../../lib/supabaseAuthClient";

export default async function getUser(req: any, res: any) {
  const { userId } = req.query;
  console.log(req.query)


  if (req.method === 'GET') {
    try {
      let { data, error } = await supabaseAuthClient
        .from('User')
        .select('*')
        .eq('userId', userId);
      if (error) {
        throw error;
      }

      if (data && data.length > 0) {
        const user = data[0];
        res.status(200).json({ user });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}


// export default async function getUserEmail(req: any, res: any) {
//   const { userId } = req.query;
//   console.log(req.query)


//   if (req.method === 'GET') {
//     try {
//       let { data, error } = await supabaseAuthClient
//         .from('User')
//         .select('userEmail')
//         .filter('userId', 'eq', userId);
//       if (error) {
//         throw error;
//       }

//       if (data && data.length > 0) {
//         const userEmail = data[0].userEmail;
//         res.status(200).json({ userEmail });
//       } else {
//         res.status(404).json({ error: 'User not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Error fetching data' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }
