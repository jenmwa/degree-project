import { IUser } from "./IUser";

export interface IBooking {
  bookingId: string;
  customer: IUser;
  product: string;
  bookingMessage: string;
  requestedDate?: string | undefined;
  bookingStatus: bookingStatus;
  created_at: Date | null;
  updated_at?: Date | null;
}

export interface IBookingWithCustomerEmail extends IBooking {
  customerEmail?: string;
  productTitle?: string;
}

export enum bookingStatus {
  Request = 'Request',
  Confirmed = 'Confirmed',
  Payed = "Payed",
  Delivered = "Delivered"
}
