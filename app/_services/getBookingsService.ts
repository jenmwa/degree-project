

export async function getBookingsService() {
  try {
    const response = await fetch("/api/handlers?entity=Booking");
    console.log('response is', response)
    const data = await response.json();
    console.log('data is: ', data, data.data)
    return data.data
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
