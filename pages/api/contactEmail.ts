
import { createMailData } from "app/_utilities/createMailData";
import { sendEmail } from "app/_utilities/sendEmail";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message, type } = req.body;

  if (!name || !email || !message || !type) {
    return res.status(400).json({ message: 'Invalid request' });
  }

  try {
    const mailData = createMailData(name, email, message, type);
    await sendEmail(mailData, res);
  } catch (error) {
    const err = error as Error;
    return res.status(400).json({ error: err.message });
  }
}
