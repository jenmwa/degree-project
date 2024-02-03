
import { IMailData } from 'app/_models/IMailData';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';


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

  const { name, email, message, type } = req.body;

  if (!name || !email || !message || !type) {
    return res.status(400).json({ message: 'Invalid request' });
  }

  let mailData: IMailData;

  if (type === 'contact') {
    mailData = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER,
      subject: `${type} Message from ${name}`,
      text: `Website contact: ${message} | Sent from: ${email}`,
      html: `<div>${message}</div><p>Sent from: ${email}</p>`,
    };
  } else if (type === 'order_confirmation') {
    // Construct the order confirmation email content based on the message field
    mailData = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `${type}: Order Confirmation`,
      text: `Order Confirmation: ${message}`,
      html: `<div>${message}</div>`,
    };
  } else {
    return res.status(400).json({ message: 'Invalid request type' });
  }

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
