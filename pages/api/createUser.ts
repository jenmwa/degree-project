import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAuthClient } from "@/lib/supabaseAuthClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      console.log('createUser:', req.body);
      const { userFirstName, userLastName, userEmail, userPhoneNumber } = req.body;

      const { data: existingUser, error: existingUserError } = await supabaseAuthClient
        .from('User')
        .select('userId')
        .eq('userEmail', userEmail);

      if (existingUserError) {
        throw existingUserError;
      }

      let userId;

      if (existingUser && existingUser.length > 0) {
        userId = existingUser[0]?.userId;
        console.log('existing:', userId)
      } else {
        const { data: newUser, error: createUserError } = await supabaseAuthClient
          .from('User')
          .insert([
            { userEmail, userFirstName, userLastName, created_at: 'now()', userPhoneNumber },
          ])
          .select('userId');

        if (createUserError) {
          throw createUserError;
        }

        userId = newUser[0]?.userId;
        console.log('new:', userId)
      }
      console.log('createUser:', req.body);
      res.status(200).json({ success: true, userId });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Error updating user' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
