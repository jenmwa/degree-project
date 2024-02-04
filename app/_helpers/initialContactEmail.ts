import { IContactEmail } from "app/_models/IContactEmail";

export const initialContactEmail: IContactEmail = {
  type: "contact", //"contact | order_confirmation",
  name: "",
  email: "",
  confirmEmail: "",
  message: "",
};
