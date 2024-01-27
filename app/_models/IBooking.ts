import { IProduct } from "./IProduct";
import { IUser } from "./IUser";

export interface IBooking {
  // data: {}
  bookingId: string;
  customer: IUser;
  product: string;
  bookingMessage: string;
  requestedDate: string;
  deliveryalternative: string;
  bookingStatus: string;
  created_at: Date | null;
  updated_at: Date | null;
}
