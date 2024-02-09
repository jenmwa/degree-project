import { IBookingWithCustomerEmail } from "app/_models/IBooking";
import { IMailData } from "app/_models/IMailData";
import { IOrderMailData } from "app/_models/IOrderMailData";

import { sendEmail } from "app/_utilities/sendEmail";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  const { booking } = req.body;
  if (!booking || !booking.customerEmail || !booking.bookingId || !booking.bookingMessage) {
    return res.status(400).json({ message: 'Invalid request' });
  }

  try {
    const orderMailData: IOrderMailData = {
      type: 'requestEmail',
      name: booking.bookingId,
      email: booking.customerEmail,
      message: 'I have a request!',
    };

    // Create the mail data object
    const mailData: IMailData = {
      from: process.env.EMAIL_SERVER_USER,
      to: 'jenmwa@gmail.com',
      subject: `${booking.type} Message from ${booking.name}`,
      text: `Website contact: ${booking.bookingMessage} | Sent from: ${booking.customerEmail}`,
      html: `<div>${booking.bookingMessage}</div><p>Sent from: ${booking.customerEmail}</p>`,
    };

    // Send the email using sendEmail utility function
    await sendEmail(mailData, res);

    // If you want to return something, you can return the orderMailData
    return res.status(200).json(orderMailData);
  } catch (error) {
    const err = error as Error;
    return res.status(400).json({ error: err.message });
  }
}


// import { IMailData } from "app/_models/IMailData";

// export function createMailData(name: string, email: string, message: string, type: string): IMailData {
//   if (type === 'contact') {
//     return {
//       from: process.env.EMAIL_FROM,
//       to: process.env.EMAIL_SERVER_USER,
//       subject: `${type} Message from ${name}`,
//       text: `Website contact: ${message} | Sent from: ${email}`,
//       html: `<div>${message}</div><p>Sent from: ${email}</p>`,
//     };
//   } else {
//     throw new Error('Invalid request type');
//   }
// }


// import { IMailData } from 'app/_models/IMailData';
// import { getTodaysDate } from 'app/_utilities/getTodaysDate';
// import { readFileSync } from 'fs';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// const template = readFileSync('app/email-templates/orderRequestTemplate.html', 'utf-8');

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {

//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_SERVER_HOST,
//     auth: {
//       user: process.env.EMAIL_SERVER_USER,
//       pass: process.env.EMAIL_SERVER_PASSWORD,
//     },
//     secure: false,
//   });

//   const { emailData, bookingData, userData } = req.body;
//   console.log(req.body)
//   console.log('userData:', userData)
//   console.log('bookingData', bookingData)
//   console.log('emaildata:', emailData)

//   if (!emailData.name || !emailData.email || !emailData.message || !emailData.type) {
//     return res.status(400).json({ message: 'Invalid request' });
//   }

//   let mailData: IMailData;
//   // const requestedDate = bookingData.requestedDate;
//   // const formattedRequestDate = requestedDate ? new Date(requestedDate).toLocaleDateString('sv-SE') : '';
//   // const requestedDateListItem = formattedRequestDate !== '' ? `${formattedRequestDate}` : 'Inget specifikt datum angivet';

//   const formattedCreatedDate = getTodaysDate();

//   const phoneNumber = userData.userPhoneNumber;
//   const phoneListItem = phoneNumber !== '' ? `${phoneNumber}` : 'Inget telefonnummer angett';


//   const htmlContent = template
//     .replace('{{ email-type }}', `${emailData.type}`)
//     .replace('{{ email-email }}', `${emailData.email}`)
//     .replace('{{ email-message }}', `${emailData.message}`)
//     .replace('{{ email-name }}', `${emailData.name}`)
//     .replace('{{ bookingDataId }}', `${bookingData.bookingId}`)
//     .replace('{{ bookingDataBookingmessage }}', `${bookingData.bookingMessage}`)
//     // .replace('{{ bookingDataRequestedDate }}', requestedDateListItem)
//     .replace('{{ bookingDataCreated }}', formattedCreatedDate)
//     .replace('{{ bookingData-customerEmail }}', `${bookingData.customerEmail}`)
//     .replace('{{ bookingDataProductTitle }}', `${bookingData.productTitle}`)
//     .replace('{{ userDataFirstname }}', `${userData.userFirstName}`)
//     .replace('{{ userData-lastname }}', `${userData.userLastName}`)
//     .replace('{{ userDataPhone }}', phoneListItem)

//   if (emailData.type === 'order_confirmation') {
//     mailData = {
//       from: process.env.EMAIL_FROM,
//       to: `${emailData.email}`,
//       bcc: process.env.EMAIL_SERVER_USER,
//       subject: `${emailData.type}: Order Confirmation`,
//       text: `Order Confirmation: ${emailData.message}`,
//       html: htmlContent,
//     };
//   } else {
//     return res.status(400).json({ message: 'Invalid request type' });
//   }

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

//   return;
// }
