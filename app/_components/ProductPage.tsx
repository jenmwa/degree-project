import ProductInfo from "./ProductInfo";
import ImageCarousel from "./ImageCarousel";

import React, { useEffect, useState } from "react";
import { useProductContext } from "../_context/ProductsContext";
import { fetchAndLogImages } from "app/_services/fetchAndLogImages";

export default function ProductPage() {
  const { products, isLoading, isError } = useProductContext();

  const foundProduct = products?.find(
    (product) => product.productId === "e882cbce-fa72-43c9-af7d-dc631c927278"
  );

  // const [imageArray, setImageArray] = useState<any[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetchAndLogImages();

  //     if (result && "data" in result) {
  //       const modifiedImages = result.data.map((img: any) => ({
  //         ...img,src: `${URL}${img.name}`,}));
  //       setImageArray(modifiedImages);
  //       console.log("imgsection", result.data, result);
  //     } else if (result && "error" in result) {
  //       console.log(result);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const URL =
    "https://itbhssqwjunahaltkmza.supabase.co/storage/v1/object/public/images/";

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="">
            <ImageCarousel foundProduct={foundProduct} />
          </div>

          <div className="lg:pl-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-rust-500">
                Björby Blomster
              </h2>
              <span className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Bukettinfo
              </span>
              <ProductInfo></ProductInfo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
