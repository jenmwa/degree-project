
import { createRequestMailData } from "app/_utilities/createMailData";
import { sendEmail } from "app/_utilities/sendEmail";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { name, email, message, type, booking_created_at, booking_requestedDate, bookingId, productTitle } = req.body;

  if (!name || !email || !message || !type) {
    return res.status(400).json({ message: 'Invalid request' });
  }

  const htmlMessage = `
  <div>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
    <p>Type: ${type}</p>
    ${type === 'requestEmail' ? `
      <p>Booking ID: ${bookingId}</p>
      <p>Booking Requested Date: ${booking_requestedDate}</p>
      <p>Booking Created At: ${booking_created_at}</p>
      <p>Booking Product Title: ${productTitle}</p>
    ` : ''}
  </div>
`;
  try {
    const mailData = createRequestMailData(name, email, type, htmlMessage);
    await sendEmail(mailData, res);
  } catch (error) {
    const err = error as Error;
    return res.status(400).json({ error: err.message });
  }
}








// import { IMailData } from "app/_models/IMailData";
// import { createMailData2 } from "app/_utilities/createMailData";
// import { readFileSync } from "fs";
// import { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from 'nodemailer';

// const template = readFileSync('app/_email-templates/ADMIN_orderRequestTemplate.html', 'utf-8');


// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {

//   const { type, name, email, message, bookingDataId, booking_requestedDate, booking_created_at, productTitle } = req.body;

//   const htmlContent = template
//     .replace('{{ emailType }}', type)
//     .replace('{{ emailEmail }}', email)
//     .replace('{{ emailMessage }}', message)
//     .replace('{{ emailName }}', name)
//     .replace('{{ bookingDataId }}', bookingDataId)
//     .replace('{{ bookingDataRequestDate }}', booking_requestedDate)
//     .replace('{{ bookingDataCreated }}', booking_created_at)
//     .replace('{{ bookingDataProductTitle }}', productTitle);

//   try {
//     const mailData = createRequestMailData(type, name, email, htmlContent);
//     await sendEmail(mailData, res);
//   } catch (error) {
//     const err = error as Error;
//     return res.status(400).json({ error: err.message });
//   }
// }



// export async function sendEmail(mailData: IMailData, res: NextApiResponse): Promise<void> {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_SERVER_HOST,
//     auth: {
//       user: process.env.EMAIL_SERVER_USER,
//       pass: process.env.EMAIL_SERVER_PASSWORD,
//     },
//     secure: false,
//   });

//   await new Promise((resolve, reject) => {
//     transporter.sendMail(mailData, (err: Error | null, info: any) => {
//       if (err) {
//         reject(err);
//         return res
//           .status(500)
//           .json({ error: err.message || 'Something went wrong' });
//       } else {
//         resolve(info.accepted);
//         res.status(200).json({ message: 'Message sent!' });
//       }
//     });
//   });
// }
