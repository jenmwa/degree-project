export interface IContactEmail {
  type: 'contact' | 'order_confirmation' | 'requestEmail',
  name: string;
  email: string;
  confirmEmail: string;
  message: string;
}

