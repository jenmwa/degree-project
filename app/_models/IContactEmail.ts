export interface IContactEmail {
  type: 'contact' | 'order_confirmation' | 'requestEmail',
  name: string;
  email: string;
  confirmEmail?: string;
  message: string;
}

export interface IRequestEmail extends IContactEmail {

  bookingId: string,
  booking_requestedDate: Date | null,
  booking_created_at: Date | null;
  productTitle: string | undefined,
  phone: number | null;
}

// export interface IRequestEmail {
//   type: 'requestEmail',
//   name: string;
//   email: string;
//   message: string;
//   bookingId: string,
//   booking_requestedDate?: string | undefined,
//   booking_created_at: Date | null;
//   productTitle: string,
// }
