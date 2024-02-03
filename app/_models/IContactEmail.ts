export interface IContactEmail {
  type: 'contact' | 'order_confirmation',
  name: string;
  email: string;
  confirmEmail: string;
  message: string;
}
