"use client";
import React from "react";
import Image from "next/image";

import { useProductContext } from "../_context/ProductsContext";
import OrderForm from "../_components/OrderForm";
import ProductSection from "../_components/ProductSection";
import { IProduct } from "../_models/IProduct";
import logo from "../../public/bjorbyblomster_logo.svg";
import ImageCarousel from "app/_components/ImageCarousel";
import Link from "next/link";
import PageNotFound from "app/_components/PageNotFound";

export default function Buketter() {
  const { products, isLoading, isError } = useProductContext();
  const imageSizeSM = 200;

  const showProduct = (product: IProduct) => {
    console.log("more about product on buketter", product);
  };

  return (
    <>
      <div className="bg-cover bg-no-repeat sm:bg-center lg:bg-top relative bg-hero ">
        <div className="relative isolate px-6 pt-14 lg:px-8 text-dark">
          <div className="mx-auto  py-8 sm:py-18  flex flex-col  ljustify-between lg:gap-10">
            {/* <div className=" lg:flex sm:mb-8 sm:flex sm:justify-center relative "> */}
            <ImageCarousel></ImageCarousel>
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* <ImageCarousel></ImageCarousel> */}
      <div>
        <ProductSection showProduct={showProduct}></ProductSection>
        <OrderForm></OrderForm>
      </div>
      {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
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
      </div> */}
    </>
  );
}
