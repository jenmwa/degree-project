import { IBooking } from "app/_models/IBooking";


export async function createBookingService(bookingData: IBooking, userId: string) {
  try {
    bookingData.customer = userId;
    bookingData.created_at = new Date();
    const response = await fetch("/api/createBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await response.json();

    if (response.ok) {
      return data;


    } else {
      const errorBody = await response.json();
      throw new Error(errorBody.error);
    }
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

