import { IBooking } from "app/_models/IBooking";
import { IOrderMailData } from "app/_models/IOrderMailData";
import { IUser } from "app/_models/IUser";

export async function serviceEmailService(emailData: IOrderMailData, bookingData: IBooking, userData: IUser) {
  try {
    const values = { emailData, bookingData, userData };
    emailData.type = "order_confirmation";

    const response = await fetch("/api/orderconfirmationEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const body = await response.json();

    if (response.ok) {
      console.log('success sending email')
    } else if (response.status === 400) {
      throw new Error("Bad Request: " + body.error);

    } else {
      throw new Error(body.error);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }


}
