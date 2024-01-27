import { IUser, Role } from "@/app/_models/IUser";
import { supabaseServer } from "../../lib/supabaseServer";
import { supabaseAuthClient } from "@/lib/supabaseAuthClient";

export default async function handler(req: any, res: any, userData: IUser) {
  if (req.method === 'POST') {
    try {
      const { data: existingUsers, error } = await supabaseAuthClient
        .from('User')
        .select('userId')
        .eq('userEmail', userData.userEmail);

      if (error) {
        throw error;
      }

      if (existingUsers && existingUsers.length > 0) {
        // User with the same email already exists, return their userId
        console.log('User already exists:', existingUsers[0]);
        return existingUsers[0].userId;
      }
      // Create a new user since no user with the same email exists
      const { data: newUser, error: creationError } = await supabaseAuthClient
        .from('User')
        .insert([
          {
            userEmail: userData.userEmail,
            userFirstName: userData.userFirstName,
            userLastName: userData.userLastName,
            userPhoneNumber: userData.userPhoneNumber,
            role: userData.role || Role.USER,
            isDeleted: userData.isDeleted || false,
            isNewsletter: userData.isNewsletter || false,
            created_at: 'now()',
          },
        ]);

      if (creationError) {
        throw creationError;
      }

      console.log('User created successfully:', newUser);
      console.log('newUser', newUser)
      return (newUser as any).userId as string;
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Error updating product' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
