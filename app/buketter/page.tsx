"use client";
import React from "react";
import { useProductContext } from "../_context/ProductsContext";
import ProductSection from "../_components/ProductSection";
import { IProduct } from "../_models/IProduct";
import ImageCarousel from "../_components/ImageCarousel";

import { useRouter } from "next/navigation";

export default function Buketter() {
  const { products, isLoading, isError } = useProductContext();
  const router = useRouter();

  const foundProduct = products?.find(
    (product) => product.productId === "e882cbce-fa72-43c9-af7d-dc631c927278"
  );

  const showProduct = (product: IProduct) => {
    router.push(`/buketter/${product.productId}`);
  };

  return (
    <>
      <section className="bg-cover bg-no-repeat sm:bg-center lg:bg-top relative bg-hero ">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <div className="bg-blob" />
        </div>

        <ImageCarousel foundProduct={foundProduct}></ImageCarousel>
        <div>
          <ProductSection showProduct={showProduct}></ProductSection>
        </div>
      </section>
    </>
  );
}
