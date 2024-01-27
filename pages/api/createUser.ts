import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAuthClient } from "@/lib/supabaseAuthClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      console.log('createUser:', req.body);
      const { userFirstName, userLastName, userEmail, userPhoneNumber } = req.body;

      const { data: existingUser, error: existingUserError } = await supabaseAuthClient
        .from('User')
        .select()
        .eq('userEmail', userEmail);

      if (existingUserError) {
        throw existingUserError;
      }

      if (existingUser && existingUser.length > 0) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }

      const { data: newUser, error: createUserError } = await supabaseAuthClient
        .from('User')
        .insert([
          { userEmail, userFirstName, userLastName, created_at: 'now()', userPhoneNumber },
        ])
        .select();

      if (createUserError) {
        throw createUserError;
      }

      res.status(200).json({ success: true, newUser });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Error updating user' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
