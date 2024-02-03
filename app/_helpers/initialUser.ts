import { IUser, Role } from "app/_models/IUser";

export const initialUser: IUser = {
  userFirstName: "",
  userLastName: "",
  userEmail: "",
  userPhoneNumber: 0,
  role: Role.USER,
  userId: "",
  isDeleted: false,
  isNewsletter: false,
  created_at: null,
  updated_at: null,
}
