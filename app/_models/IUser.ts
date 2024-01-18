

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
