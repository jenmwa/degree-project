export interface IMailData {
  from?: string,
  to?: string | string[],
  subject: string,
  text: string,
  html: string,

}
