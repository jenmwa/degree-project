
import { IMailData } from "app/_models/IMailData";

export function createMailData(name: string, email: string, message: string, type: string): IMailData {
  if (type === 'contact') {
    return {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER,
      subject: `${type} Från: ${name}`,
      text: `Kontakt via hemsida ${type} | Från: ${email}`,
      html: `<div> ${message} </div><p>Från: ${email}</p>`,
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
      subject: `${type} Från: ${name}`,
      text: `Bokningsförfrågan via hemsida:  | Från: ${email}`,
      html: htmlMessage,
    };
  } else {
    throw new Error('Invalid request type');
  }
}
