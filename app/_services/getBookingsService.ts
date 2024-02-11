
export async function getBookingsService() {
  {
    try {
      const response = await fetch("/api/getBookingsWithUsers");
      const data = await response.json();
      console.log(data.data)
      return data.data
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  }
}
