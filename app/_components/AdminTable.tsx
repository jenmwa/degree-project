"use client";
import React from "react";
import { IBooking, IBookingWithCustomerEmail } from "../_models/IBooking";
import { getUserService } from "app/_services/getUserService";

interface IAdminOrderTableProps {
  bookings: IBookingWithCustomerEmail[];
  isLoading: boolean;
  handleReviewModal: (booking: IBooking) => void;
}

// interface ITableHeaders {
//   name: string;
// }

// export const tableHeader: ITableHeaders[] = [
//   {
//     name: "id",
//   },
//   {
//     name: "Datum",
//   },
//   {
//     name: "Produkter",
//   },
//   {
//     name: "från",
//   },
//   {
//     name: "önskat datum",
//   },
//   {
//     name: "status",
//   },
// ];

export default function AdminTable({
  bookings,
  isLoading,
  handleReviewModal,
}: IAdminOrderTableProps) {
  const userId = "4f7b657b-a75f-456b-b58b-823dc1f8310f";

  const fetchData = async (userId: string) => {
    try {
      const response = await getUserService(userId);

      console.log(response);
      return response;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <button onClick={() => fetchData(userId)}>CLICK TO GET USER</button>

      <section className="relative overflow-x-auto my-16">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3 hidden md:table-cell">
                Id
              </th>
              <th scope="col" className="px-4 py-3">
                Datum
              </th>
              <th scope="col" className="px-4 py-3 hidden md:table-cell">
                Produkter
              </th>
              <th scope="col" className="px-4 py-3">
                Från
              </th>
              <th scope="col" className="px-4 py-3 hidden md:table-cell">
                Önskat Datum
              </th>
              <th scope="col" className="px-4 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={4}>Laddar...</td>
              </tr>
            ) : (
              bookings?.map((booking) => (
                <tr
                  key={booking.bookingId}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer  hover:bg-gray-300 dark:hover:bg-gray-600 "
                  onClick={() => handleReviewModal(booking)}
                >
                  <td className="px-4 py-4 hidden md:table-cell">
                    {booking.bookingId}
                  </td>
                  <td className="px-4 py-4 ">
                    {booking.created_at
                      ? new Date(booking.created_at).toLocaleString()
                      : "N/A"}
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    {booking.productTitle}
                  </td>
                  <td className="px-4 py-4">{booking.customerEmail}</td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    {new Date(booking.requestedDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4">{booking.bookingStatus}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </>
  );
}
