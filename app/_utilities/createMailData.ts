
import { IMailData } from "app/_models/IMailData";

export function createMailData(name: string, email: string, htmlContent: string, type: string): IMailData {
  if (type === 'contact') {
    return {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER,
      subject: `${type} Message from ${name}`,
      text: `Website contact:  | Sent from: ${email}`,
      html: `<div></div><p>Sent from: ${email}</p>`,
    };
  } else if (type === 'requestEmail') {
    return {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER,
      subject: `${type} Message from ${name}`,
      text: `Website contact:  | Sent from: ${email}`,
      html: htmlContent,
    };
  } else {
    throw new Error('Invalid request type');
  }
}

// export function createMailData2(name: string, email: string, message: string, type: string): IMailData {
//   if (type === 'requestEmail') {
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

// export function createRequestMailData(type: string, name: string, email: string, htmlContent: string): IMailData {
//   if (type === 'requestEmail') {
//     return {
//       from: process.env.EMAIL_FROM,
//       to: process.env.EMAIL_SERVER_USER,
//       subject: `${type} Förfrågan via hemsida`,
//       text: '',
//       html: htmlContent,
//     };

//   } else {
//     throw new Error('Invalid request type');
//   }
// }
