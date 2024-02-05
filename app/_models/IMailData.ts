export interface IMailData {
  from?: string,
  to?: string | string[],
  bcc?: string,
  subject: string,
  text: string,
  html: string,

}
