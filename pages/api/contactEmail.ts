
import { createMailData } from "app/_utilities/createMailData";
import { sendEmail } from "app/_utilities/sendEmail";
import { readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message, type } = req.body;

  const template = readFileSync('app/_email-templates/ADMIN_orderRequestTemplate.html', 'utf-8');

  if (!name || !email || !message || !type) {
    return res.status(400).json({ message: 'Invalid request' });
  }


  const htmlContent = template
    .replace('{{ emailType }}', type)
    .replace('{{ emailEmail }}', email)
    .replace('{{ emailMessage }}', message)
    .replace('{{ emailName }}', name)
    // .replace('{{ bookingDataId }}', bookingDataId)
    // .replace('{{ bookingDataRequestDate }}', booking_requestedDate)
    // .replace('{{ bookingDataCreated }}', booking_created_at)
    // .replace('{{ bookingDataProductTitle }}', productTitle);

  try {
    const mailData = createMailData(name, email, htmlContent, type);
    await sendEmail(mailData, res);
  } catch (error) {
    const err = error as Error;
    return res.status(400).json({ error: err.message });
  }
}




// import { createMailData } from "app/_utilities/createMailData";
// import { sendEmail } from "app/_utilities/sendEmail";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { name, email, message, type } = req.body;

  

//   if (!name || !email || !message || !type) {
//     return res.status(400).json({ message: 'Invalid request' });
//   }

//   try {
//     const mailData = createMailData(name, email, message, type);
//     await sendEmail(mailData, res);
//   } catch (error) {
//     const err = error as Error;
//     return res.status(400).json({ error: err.message });
//   }
// }
