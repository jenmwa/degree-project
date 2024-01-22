"use client";
import React from "react";
import { useProductContext } from "../_context/ProductsContext";
import OrderForm from "../_components/OrderForm";

export default function Butiken() {
  const { products, isLoading, isError } = useProductContext();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h1 className="mt-24 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Butiken
        </span>{" "}
        produkter
      </h1>
      <ul>
        {products?.map((booking) => (
          <li key={booking.productId}>
            Title:
            {booking.productTitle}
            <br></br>Price:
            {booking.productPrice}
          </li>
        ))}
      </ul>
      <OrderForm></OrderForm>
    </div>
  );
}
