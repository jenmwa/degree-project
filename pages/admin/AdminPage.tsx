import { UUID } from "crypto";
import { DateTime } from "next-auth/providers/kakao";
import { useEffect, useState } from "react";

interface IBooking {
  created_at: DateTime;
  customer: String;
  requestId: UUID;
  requestMessage: String;
  requestStatus: String;
  requestedDate: DateTime;
  requestedProduct: String;
  updated_at: null;
}

const AdminPage = () => {
  console.log("hello admin");
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/handlers?entity=Booking");
        const data = await response.json();

        console.log("Bookings:", data.data);
        setBookings(data.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(bookings.map((booking) => booking));
  return (
    <>
      {" "}
      <h1>Admin</h1>
      {loading ? (
        <p>Laddar...</p>
      ) : (
        <ul>
          {bookings?.map((booking) => (
            <li key={booking.requestId}>
              Id:
              {booking.requestId}
              <br></br>Typ:
              {booking.requestStatus}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default AdminPage;
