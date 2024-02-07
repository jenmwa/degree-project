
import { IBooking } from "app/_models/IBooking";
import { IUser } from "app/_models/IUser";

export async function createBookingService(bookingData: IBooking, userId: IUser) {
  try {
    bookingData.customer = userId;
    console.log('createbookingservice:', bookingData, userId)

    const response = await fetch("/api/createBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await response.json();

    if (data) {
      return data.bookingData;
    } else {
      const errorBody = await response.json();
      throw new Error(errorBody.error);
    }
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};
