"use client";
import React, { useEffect, useState } from "react";
import { useProductContext } from "../_context/ProductsContext";
import { IProduct } from "../_models/IProduct";
import ImageCarousel from "./ImageCarousel";
import Spinner from "./Spinner";
import { usePathname } from "next/navigation";

interface IProductsSectionProps {
  showProduct: (product: IProduct) => void;
}

export default function ProductSection({ showProduct }: IProductsSectionProps) {
  const { products, isLoading } = useProductContext();
  const [isAdmin, setIsAdmin] = useState<boolean>(true);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/admin/dashboard") setIsAdmin(true);
    else {
      setIsAdmin(false);
    }
  }, [pathname]);
  //
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            {isLoading ? (
              <Spinner></Spinner>
            ) : (
              <>
                {isAdmin ? (
                  <>
                    <h2 className="text-2xl font-bold">Ändra produkt</h2>
                    <p>
                      Här ändrar du texter och bilder som hör till produkter som
                      syns på hemsidan.
                    </p>{" "}
                    <p>
                      Klicka på den artikel du vill ändra så får du tillgång
                      till redigeringspanelen.
                    </p>
                    <p className="italic mt-4">
                      Tänk på att du uppdaterar i realtid och det syns på
                      hemsidan med en gång.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold">Buketter</h2>
                    <p>Blomsterarrangemang för livets alla tillfällen.</p>
                    <p>Klicka för att läsa mer.</p>
                  </>
                )}
                <div className=" mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:space-y-0 ">
                  {products?.map((foundProduct) => (
                    <div key={foundProduct.productId} className=" relative">
                      <div className="relative h-88 w-full overflow-hidden bg-black sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-96">
                        <ImageCarousel foundProduct={foundProduct} />
                      </div>
                      <div
                        tabIndex={0}
                        aria-label={`Läs mer om ${foundProduct.productTitle}`}
                        className="cursor-pointer sm:min-h-none md:min-h-64 bg-greyish-100 w-4/5 mx-auto relative p-10 z-10 text-center -mt-16 lg:-mt-12 sm:-mt-16 hover:bg-gray-200"
                        onClick={(e) => {
                          e.currentTarget.focus();
                          showProduct(foundProduct);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            showProduct(foundProduct);
                          }
                        }}
                      >
                        <h3 className="mt-6 text-rust-500  sm:text-base md:text-base ">
                          <span className="absolute inset-0" />
                          {foundProduct.productTitle}
                        </h3>
                        <p className="text-lg font-semibold">
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
