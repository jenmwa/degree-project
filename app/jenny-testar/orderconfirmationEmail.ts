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
