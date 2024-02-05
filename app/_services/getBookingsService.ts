
export async function getBookingsService() {
  {
    try {
      const response = await fetch("/api/handlers?entity=Booking");
      const data = await response.json();
      return data.data
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  }
}
