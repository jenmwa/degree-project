"use client";
import React from "react";
import { useProductContext } from "../_context/ProductsContext";
import ProductSection from "../_components/ProductSection";
import { IProduct } from "../_models/IProduct";

import { useRouter } from "next/navigation";
import { Hero } from "app/_components/Hero";

export default function Buketter() {
  const router = useRouter();
  const showProduct = (product: IProduct) => {
    router.push(`/buketter/${product.productId}`);
  };

  return (
    <>
      <section className="bg-cover bg-no-repeat sm:bg-center lg:bg-top relative bg-hero ">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <div className="bg-blob" />
        </div>

        <Hero></Hero>
        <div>
          <ProductSection showProduct={showProduct}></ProductSection>
        </div>
      </section>
    </>
  );
}
