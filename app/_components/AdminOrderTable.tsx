"use client";
import React from "react";
import { IBooking } from "../_models/IBooking";
import { getUserService } from "app/_services/getUserService";

interface IAdminOrderTableProps {
  bookings: IBooking[];
  isLoading: boolean;
}

export default function AdminOrderTable({
  bookings,
  isLoading,
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
              <th scope="col" className="px-4 py-3">
                Order
              </th>
              <th scope="col" className="px-4 py-3">
                Produkter
              </th>
              <th scope="col" className="px-4 py-3">
                Datum
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
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-4 py-4">{booking.product}</td>
                  <td className="px-4 py-4">
                    {booking.requestedDate.toLocaleString()}
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
