import { IRequestEmail } from "app/_models/IContactEmail";
import { IMailData } from "app/_models/IMailData";
import { createRequestMailData } from "app/_utilities/createMailData";
import { readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

const template = readFileSync('app/_email-templates/ADMIN_orderRequestTemplate.html', 'utf-8');


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { type, name, email, message, bookingDataId, booking_requestedDate, booking_created_at, productTitle } = req.body;

  const htmlContent = template
    .replace('{{ emailType }}', type)
    .replace('{{ emailEmail }}', email)
    .replace('{{ emailMessage }}', message)
    .replace('{{ emailName }}', name)
    .replace('{{ bookingDataId }}', bookingDataId)
    .replace('{{ bookingDataRequestDate }}', booking_requestedDate)
    .replace('{{ bookingDataCreated }}', booking_created_at)
    .replace('{{ bookingDataProductTitle }}', productTitle);



  try {
    const mailData = createRequestMailData(type, name, email, htmlContent);
    await sendEmail(mailData, res);
  } catch (error) {
    const err = error as Error;
    return res.status(400).json({ error: err.message });
  }
}



export async function sendEmail(mailData: IMailData, res: NextApiResponse): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    secure: false,
  });

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
}
