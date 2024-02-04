"use client";
import React from "react";
import { IBooking } from "../../_models/IBooking";

interface IAdminOrderTableProps {
  bookings: IBooking[];
  isLoading: boolean;
}

export default function AdminOrderTable({
  bookings,
  isLoading,
}: IAdminOrderTableProps) {
  return (
    <>
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
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {booking.bookingId}
                  </th>
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
