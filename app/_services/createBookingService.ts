
import { IBooking } from "app/_models/IBooking";
import { IUser } from "app/_models/IUser";

export async function createBookingService(bookingData: IBooking, userId: IUser) {
  console.log('*** BOOKINGDATA AND USERID:', bookingData, userId)
  try {
    bookingData.customer = userId;
    console.log('createbookingservice:', bookingData, userId)
    console.log('*** BOOKINGDATA:', bookingData.customer)
    const response = await fetch("/api/createBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    console.log('*** RESPONSE:', response)
    const data = await response.json();
    console.log('*** DATA:', data)
    if (data) {
      console.log('*** DATA.bookingData:', data.bookingData)
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

