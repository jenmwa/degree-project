"use client";
import { DateTime } from "next-auth/providers/kakao";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

interface IBooking {
  bookingId: string;
  customer: string;
  product: string;
  bookingMessage: string;
  requestedDate: DateTime;
  bookingStatus: string;
  created_at: DateTime;
  updated_at: DateTime | null;
}

export const Dashboard = () => {
  console.log("hello admin");

  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  const signoutAdmin = async () => {
    console.log("sign out please");
    try {
      const response = await fetch("/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        console.log("Sign-out successful");
        router.refresh();
      } else {
        // Handle sign-out error
        console.error("Sign-out failed");
      }
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <>
      {" "}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <button onClick={signoutAdmin}>LOGGA UT</button>
        <h1 className="mt-24 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Hello
          </span>{" "}
          Admin aka
        </h1>
        {loading ? (
          <p>Laddar...</p>
        ) : (
          <div>
            <p>Orders:</p>

            <ul>
              {bookings?.map((booking) => (
                <li key={booking.bookingId}>
                  Id:
                  {booking.bookingId}
                  <br></br>Requested Date:
                  {booking.requestedDate}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Dashboard;
