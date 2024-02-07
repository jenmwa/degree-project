
export async function getUserService(userId: string) {
  {
    try {
      const response = await fetch(`/api/getUser?userId=${userId}`);
      const data = await response.json();
      return data.user;
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  }
}

