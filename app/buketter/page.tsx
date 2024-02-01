"use client";
import React from "react";
import { useProductContext } from "../_context/ProductsContext";
import OrderForm from "../_components/OrderForm";
import ProductSection from "../_components/ProductSection";
import { IProduct } from "../_models/IProduct";

export default function Buketter() {
  const { products, isLoading, isError } = useProductContext();

  const showProduct = (product: IProduct) => {
    console.log("more about product on buketter", product);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h1 className="mt-24 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Buketter
        </span>{" "}
        Tema:
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
      <ProductSection showProduct={showProduct}></ProductSection>
      <OrderForm></OrderForm>
    </div>
  );
}
