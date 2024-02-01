import EmailProvider from "next-auth/providers/email";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
  ],
};
