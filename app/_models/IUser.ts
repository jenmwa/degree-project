export interface IBooking {
  bookingId: string;
  customer: string;
  product: IProduct;
  bookingMessage: string;
  requestedDate: Date;
  bookingStatus: string;
  created_at: Date;
  updated_at: Date | null;
}

export interface IUser {
  userId: string;
  userEmail: string,
  userPassword: string,
  userFirstName: string,
  userLastName: string,
  role: Role;
  isDeleted: boolean,
  isNewsletter: boolean,
  created_at: Date,
  updated_at: Date | null,
}

export enum Role {
  Admin = 'ADMIN',
  USER = 'USER',
}

export interface IProduct {
  productId: string,
  productTitle: string,
  productLongDescription: string,
  productShortDescription: string,
  productImage: string[],
  productPrice: number,
  created_at: Date,
  updated_at: Date | null,
}
