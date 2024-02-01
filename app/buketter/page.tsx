"use client";
import React from "react";
import Image from "next/image";
import img from "../../public/img/hero.png";

import { useProductContext } from "../_context/ProductsContext";
import OrderForm from "../_components/OrderForm";
import ProductSection from "../_components/ProductSection";
import { IProduct } from "../_models/IProduct";
import logo from "../../public/bjorbyblomster_logo.svg";
import ImageCarousel from "app/_components/ImageCarousel";
import Link from "next/link";
import PageNotFound from "app/_components/PageNotFound";
import { useRouter } from "next/navigation";

export default function Buketter() {
  const { products, isLoading, isError } = useProductContext();
  const router = useRouter();
  const imageSizeSM = 200;

  const foundProduct = products?.find(
    (product) => product.productId === "e882cbce-fa72-43c9-af7d-dc631c927278"
  );

  const showProduct = (product: IProduct) => {
    console.log("more about product on buketter", product);
    console.log("Clicked on product:", product.productId);
    router.push(`/buketter/${product.productId}`);
  };

  return (
    <>
      <div className="bg-cover bg-no-repeat sm:bg-center lg:bg-top relative bg-hero ">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <div className="bg-blob" />
        </div>

        <ImageCarousel foundProduct={foundProduct}></ImageCarousel>
        <div>
          <ProductSection showProduct={showProduct}></ProductSection>
          {/* <OrderForm></OrderForm> */}
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
      </div>
    </>
  );
}
