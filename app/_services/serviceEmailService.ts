import { IBookingWithCustomerEmail } from "app/_models/IBooking";
import { IRequestEmail } from "app/_models/IContactEmail";
import { IOrderMailData } from "app/_models/IOrderMailData";
import { IUser } from "app/_models/IUser";

export async function serviceEmailService(emailData: IRequestEmail) {
  if (!emailData.bookingId) {
    return { success: false, error: "BookingId cant be found" };
  }

  try {
    const response = await fetch("/api/requestEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
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
