"use client";
import React from "react";
import { IBooking, IBookingCreated } from "../_models/IBooking";

interface IAdminOrderTableProps {
  bookings: IBookingCreated[];
  isLoading: boolean;
  handleReviewModal: (booking: IBookingCreated) => void;
}

export default function AdminTable({
  bookings,
  isLoading,
  handleReviewModal,
}: IAdminOrderTableProps) {
  const getBackgroundColor = (bookingStatus: string) => {
    if (bookingStatus === "Confirmed") {
      return "bg-green-100 bg-opacity-50";
    } else if (bookingStatus === "Payed") {
      return "bg-yellow-100 bg-opacity-50";
    } else if (bookingStatus === "Delivered") {
      return "bg-rust-50 bg-opacity-50";
    } else {
      return "bg-white";
    }
  };

  return (
    <>
      <section className="relative overflow-x-auto my-16">
        <table className="w-full text-left rtl:text-right">
          <thead className="text-xs text-gray-100 uppercase bg-gray-700 ">
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
                  tabIndex={0}
                  className={` border-b border-gray-700 cursor-pointer hover:bg-gray-300 ${getBackgroundColor(
                    booking.bookingStatus
                  )}`}
                  onClick={(e) => {
                    e.currentTarget.focus();
                    handleReviewModal(booking);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleReviewModal(booking);
                    }
                  }}
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
                    {booking.requestedDate
                      ? new Date(booking.requestedDate).toLocaleDateString()
                      : ""}
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
