import { IContactEmail } from "app/_models/IContactEmail";

export const initialContactEmail: IContactEmail = {
  type: "contact", //"contact | orderconfirmaiton",
  name: "",
  email: "",
  confirmEmail: "",
  message: "",
};
