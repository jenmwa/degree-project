"use client";
import React from "react";
import { useProductContext } from "../_context/ProductsContext";
import { IProduct } from "../_models/IProduct";
import ImageCarousel from "./ImageCarousel";
import Spinner from "./Spinner";

interface IProductsSectionProps {
  showProduct: (product: IProduct) => void;
  // handleShowDialog: () => void;
}

export default function ProductSection({
  showProduct,
}: // handleShowDialog,
IProductsSectionProps) {
  const { products, isLoading, isError } = useProductContext();

  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            {isLoading ? (
              <Spinner></Spinner>
            ) : (
              <>
                <h2 className="text-2xl font-bold">Buketter</h2>
                <p>Lorem ipsum dolar</p>
                <p>Klicka för att läsa mer.</p>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:space-y-0 ">
                  {products?.map((foundProduct) => (
                    <div key={foundProduct.productId} className=" relative">
                      <div className="relative h-80 w-full overflow-hidden bg-black sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-96">
                        <ImageCarousel foundProduct={foundProduct} />
                      </div>
                      <div
                        className="cursor-pointer bg-gray-200 w-4/5 mx-auto relative p-10 z-10 text-center -mt-16 lg:-mt-12 sm:-mt-16"
                        // onClick={() => showProduct(foundProduct)}
                        onClick={() => {
                          showProduct(foundProduct);
                        }}
                      >
                        <h3 className="mt-6 text-sm text-gray-500">
                          <span className="absolute inset-0" />
                          {foundProduct.productTitle}
                        </h3>
                        <p className="text-base font-semibold">
                          {foundProduct.productShortDescription}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
