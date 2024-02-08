import { IMailData } from "app/_models/IMailData";

export function createMailData(name: string, email: string, message: string, type: string): IMailData {
  if (type === 'contact') {
    return {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER,
      subject: `${type} Message from ${name}`,
      text: `Website contact: ${message} | Sent from: ${email}`,
      html: `<div>${message}</div><p>Sent from: ${email}</p>`,
    };
  } else {
    throw new Error('Invalid request type');
  }
}
