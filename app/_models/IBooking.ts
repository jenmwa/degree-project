import { IUser } from "./IUser";

export interface IBooking {
  bookingId: string,
  // customer: IUser;
  customer: string,
  product: string;
  bookingMessage: string;
  requestedDate: Date | null;
  bookingStatus: bookingStatus;
  created_at: Date | null;
  updated_at?: Date | null;
}

export interface IBookingCreated extends IBooking {
  customerEmail: string;
  customerPhoneNumber: number | null;
  customerName: string;
  productTitle: string;
}

export enum bookingStatus {
  Request = 'Request',
  Confirmed = 'Confirmed',
  Payed = "Payed",
  Delivered = "Delivered"
}
