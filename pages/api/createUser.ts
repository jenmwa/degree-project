import { IUser } from "app/_models/IUser";
import { supabaseAuthClient } from "lib/supabaseAuthClient";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {

      const { userFirstName, userLastName, userEmail, userPhoneNumber } = req.body;

      if (!userEmail) {
        return res.status(400).json({ error: 'userEmail is required' });
      }

      let user: IUser | null = null;

      const { data: existingUser, error: existingUserError } = await supabaseAuthClient
        .from('User')
        // .select('userId')
        .select('*')
        .eq('userEmail', userEmail);

      if (existingUserError) {
        throw existingUserError;
      }

      // let userId;

      if (existingUser && existingUser.length > 0) {
        // userId = existingUser[0]?.userId;
        user = existingUser[0];
      } else {
        const { data: newUser, error: createUserError } = await supabaseAuthClient
          .from('User')
          .insert([
            { userEmail, userFirstName, userLastName, created_at: 'now()', userPhoneNumber },
          ])
          // .select('userId');
          .select('*');

        if (createUserError) {
          throw createUserError;
        }

        user = newUser[0];
        // userId = newUser[0]?.userId;
        console.log('user is created', user)
      }

      res.status(200).json({ user });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Error updating user' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
