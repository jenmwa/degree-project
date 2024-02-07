import { IMailData } from 'app/_models/IMailData';
import { readFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const template = readFileSync('app/_components/orderConfirmationTemplate.html', 'utf-8');



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
  // const { emailData } = req.body;
  // console.log('emailData is:', emailData)
  const { emailData, bookingData, userData } = req.body;
  console.log(req.body)
  console.log('userData:', userData)
  console.log('bookingData', bookingData)
  console.log('emaildata:', emailData)

  if (!emailData.name || !emailData.email || !emailData.message || !emailData.type) {
    return res.status(400).json({ message: 'Invalid request' });
  }

  let mailData: IMailData;

  const htmlContent = template
    .replace('{{ email }}', `${emailData.email}`)
    .replace('{{ bookingData }}', `${bookingData.productId}`)
    .replace('{{ userData }}', `${userData.userFirstName}`)

  if (emailData.type === 'contact') {
    mailData = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER,
      subject: `${emailData.type} Message from ${emailData.name}`,
      text: `Website contact: ${emailData.message} | Sent from: ${emailData.email}`,
      html: `<div>${emailData.message}</div><p>Sent from: ${emailData.email}</p>`,
    };
  } else if (emailData.type === 'order_confirmation') {
    mailData = {
      from: process.env.EMAIL_FROM,
      to: `${emailData.email}`,
      bcc: process.env.EMAIL_SERVER_USER,
      subject: `${emailData.type}: Order Confirmation`,
      text: `Order Confirmation: ${emailData.message}`,
      html: htmlContent,
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
