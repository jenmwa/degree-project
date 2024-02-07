"use Client";

import React from "react";
import ImageCarousel from "../../app/_components/ImageCarousel";

import { IProduct } from "../../app/_models/IProduct";
import { useRouter } from "next/navigation";
import Spinner from "../_components/Spinner";

interface IProductsectionProps {
  foundProduct: IProduct | undefined;
}

export default function ProductIdSection({
  foundProduct,
}: IProductsectionProps) {
  const router = useRouter();

  const handleRequestOffer = (product: string) => {
    if (product) {
      localStorage.setItem("product", product);
      router.push("/buketter/bestallningsforfragan");
    } else {
      console.error("Product not found");
    }
  };
  return (
    <>
      {foundProduct ? (
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="two-column-img ">
            <div className="max-w-full w-full">
              <ImageCarousel foundProduct={foundProduct}></ImageCarousel>
            </div>
          </div>
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-rust-500">
                Buketter
              </h2>
              <span className="mt-4 text-3xl font-bold tracking-tight text-rust-500 sm:text-4xl">
                {foundProduct?.productTitle}
              </span>
              <p className="mt-6 text-lg leading-8 text-gray-600 italic">
                {foundProduct?.productShortDescription}
              </p>
            </div>
            <div>
              <p className="my-8 text-lg">
                {foundProduct?.productLongDescription}
              </p>
              <p>
                Pris från <span>{foundProduct?.productPrice}</span> sek
              </p>
            </div>
            <button
              className="primary-button mt-4"
              onClick={() => handleRequestOffer(foundProduct?.productId)}
            >
              Gör en Beställningsförfrågan
            </button>
          </div>
        </div>
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
}
