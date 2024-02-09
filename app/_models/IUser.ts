

export interface IUser {
  userId: string;
  userEmail: string,
  userFirstName: string,
  userLastName: string,
  userPhoneNumber: number,
  role: Role;
  isDeleted: boolean,
  isNewsletter: boolean,
  created_at: Date | null,
  updated_at: Date | null,
}

export enum Role {
  Admin = 'ADMIN',
  USER = 'USER',
}
