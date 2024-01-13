// import NextAuth from "next-auth";
// import EmailProvider from "next-auth/providers/email";

// export default NextAuth({
//   providers: [
//     EmailProvider({
//       server: {
//         host: process.env.EMAIL_SERVER_HOST,
//         port: process.env.EMAIL_SERVER_PORT,
//         auth: {
//           user: process.env.EMAIL_SERVER_USER,
//           pass: process.env.EMAIL_SERVER_PASSWORD
//         }
//       },
//       from: process.env.EMAIL_FROM
//     }),
//   ],
// });

// //3. Do not forget to setup one of the database adapters for storing the Email verification token.


// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"

// export const authOptions = {
//   secret: process.env.NextAuth_SECRET,

//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID || "",
//       clientSecret: process.env.GITHUB_SECRET || "",
//     }),

//   ],
// }

// export default NextAuth(authOptions);


import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { SupabaseAdapter } from "@auth/supabase-adapter"

export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
  ],
  // adapter: SupabaseAdapter({
  //   url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  //   secret: process.env.NEXT_PUBLIC_SUPABASE_KEY,
  // }),
});

// export interface AdapterUser extends User {
//   /** A unique identifier for the user. */
//   id: string;
//   /** The user's email address. */
//   email: string;
//   /**
//    * Whether the user has verified their email address via an [Email provider](https://authjs.dev/reference/core/providers/email).
//    * It is `null` if the user has not signed in with the Email provider yet, or the date of the first successful signin.
//    */
//   emailVerified: Date | null;
// }
// /**
