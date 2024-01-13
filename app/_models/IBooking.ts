export interface IBooking {
  data: {}
  bookingId: string;
  customer: string;
  product: string;
  bookingMessage: string;
  requestedDate: Date;
  bookingStatus: string;
  created_at: Date;
  updated_at: Date | null;
}
