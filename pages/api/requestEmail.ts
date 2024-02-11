
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
  <body>
<p><small>Detta är en automatisk mailkopia på en beställningsförfrågan som är gjord på <a
      href="https://www.bjorbyblomster.se" target="_blank">Björby Blomster</a>. Observera att du kan inte svara på
    detta mail.</small></p>
<div>
  <h1>Ny förfrågan via hemsidan!</h1>
  <p>Här är information om beställningsförfrågan:</p>
  <ul>
    <li>Från ${name}</li>
    <li>Beställningsdatum: ${booking_created_at}</li>
    <li>Beställningsreferens: ${bookingId}</li>
    <li>Produkt: ${productTitle}</li>

    <li>Ev datum för leverans: ${booking_requestedDate}</li>

    <li>Meddelande:<br> ${message}</li>
  </ul>
  <br>
  <p>Kundens kontaktuppgifter som angetts:</p>
  <ul>
    <li>Epostadress: ${email}</li>

    <li>Telefonnummer: ${email}</li>

  </ul><br><br></br>

  <br>
  <p> Mvh noreply@bjorbyblomster.se</p>

  <footer> <small>Du får detta mail för att någon gjort en beställningsförfrågan på <a
        href="https://www.bjorbyblomster.se" target="_blank">Björby Blomster</a>.<br>
    </small>
    <p>

    </p>
  </footer>
</body>

`;


  try {
    const mailData = createRequestMailData(name, email, type, htmlMessage);
    await sendEmail(mailData, res);
  } catch (error) {
    const err = error as Error;
    return res.status(400).json({ error: err.message });
  }
}

