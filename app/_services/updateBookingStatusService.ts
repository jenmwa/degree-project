import { IBooking, IBookingCreated, bookingStatus } from "app/_models/IBooking";

export async function updateBookingService(status: bookingStatus, booking: IBookingCreated) {
  try {
    const response = await fetch("/api/updateBooking", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookingId: booking.bookingId,
        bookingStatus: status,
      }),
    });
    if (response.ok) {
      console.log("Booking updated successfully");
    } else {
      console.error("Failed to update booking");
    }
    return response;
  } catch (error) {
    console.error("Error updating booking:", error);
    throw error;
  }
}
