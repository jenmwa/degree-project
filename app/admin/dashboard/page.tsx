"use client";
import { DateTime } from "next-auth/providers/kakao";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { IProduct } from "../../_models/IProduct";
import { IBooking } from "../../_models/IBooking";

interface FetchDataOptions {
  entity: string;
}

export async function fetchyData(entity: any) {
  const response = await fetch(`/api/handlers?entity=${entity}`);
  const data = await response.json();
  return data.data;
}

export const Dashboard = () => {
  const { data: bookings, error: bookingerror } = useSWR(
    "/api/handlers?entity=Booking",
    fetchyData
  );
  console.log("Type of bookings:", typeof bookings, bookings);

  const { data: products, error: productserror } = useSWR(
    "/api/handlers?entity=Product",
    fetchyData
  );
  console.log("Type of produkts:", typeof products, products);

  if (bookingerror) {
    return <div>Error fetching data</div>;
  }

  if (!bookings) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {" "}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="mt-24 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Hello
          </span>{" "}
          Admin aka
        </h1>

        <div>
          <p>Orders:</p>

          <ul>
            {Array.isArray(bookings) ? (
              bookings.map((booking) => (
                <li key={booking.bookingId}>
                  Id: {booking.bookingId}
                  <br />
                  Requested Date: {booking.requestedDate.toLocaleDateString()}
                </li>
              ))
            ) : (
              <div>Data is not an array</div>
            )}
          </ul>
          {/* <ul>
            {products?.map((product) => (
              <li key={product.productId}></li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
