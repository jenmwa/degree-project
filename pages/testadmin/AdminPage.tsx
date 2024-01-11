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
  updated_at: string | null;
}

export const AdminPage = () => {
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
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Hello
        </span>{" "}
        Admin
      </h1>
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
