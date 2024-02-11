
import { IMailData } from "app/_models/IMailData";

export function createMailData(name: string, email: string, message: string, type: string): IMailData {
  if (type === 'contact') {
    return {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER,
      subject: `${type} Message from ${name}`,
      text: `Website contact: ${type} | Sent from: ${email}`,
      html: `<div> ${message} </div><p>Sent from: ${email}</p>`,
    };
  } else {
    throw new Error('Invalid request type');
  }
}


export function createRequestMailData(name: string, email: string, type: string, htmlMessage: string): IMailData {
  if (type === 'requestEmail') {
    return {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER,
      subject: `${type} Message from ${name}`,
      text: `Website contact:  | Sent from: ${email}`,
      html: htmlMessage,
    };
  } else {
    throw new Error('Invalid request type');
  }
}
