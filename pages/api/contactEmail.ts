
import type { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    secure: false,
  });

  const { name, email, message } = req.body;

  if (!message || !name || !message) {
    return res
      .status(400)
      .json({ message: 'Please fill out the necessary fields' });
  }


  const mailData = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_SERVER_USER,
    subject: `Message from ${name}`,
    text: `website contact: ${message} | Sent from: ${email}`,
    html: `<div>${message}</div><p>Sent from: ${email}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: Error | null, info: any) => {
      if (err) {
        reject(err);
        return res
          .status(500)
          .json({ error: err.message || 'Something went wrong' });
      } else {
        resolve(info.accepted);
        res.status(200).json({ message: 'Message sent!' });
      }
    });
  });

  return;
}
