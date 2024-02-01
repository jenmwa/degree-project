"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import logoisch from "/public/img/logoisch.png";
import { useProductContext } from "app/_context/ProductsContext";

export default function ProductPage() {
  const params = useParams<{ productId: string }>();
  const { products, isLoading, isError } = useProductContext();

  const foundProduct = products?.find(
    (product) => product.productId === params?.productId
  );

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-rust-500">
                Buketter
              </h2>
              <span className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {foundProduct?.productTitle}
              </span>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
            </div>
            <div>
              <h1>Product Page</h1>
              <div>My Post: {params?.productId}</div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                facere eius, quae tenetur impedit ad architecto, repellendus
                repellat, laudantium doloremque quibusdam nulla. Quidem atque
                ducimus nam ipsum corporis nihil ipsa?
              </p>
              <p>Product ID: {params?.productId}</p>
            </div>
          </div>

          <div className="two-column-img ">
            <div className="max-w-full w-full">
              <Image
                src={logoisch}
                alt="Björnby blomster"
                layout="responsive"
                width={400}
                height={400}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>
        <h1>Product Page</h1>
        <div>My Post: {params?.productId}</div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa facere
          eius, quae tenetur impedit ad architecto, repellendus repellat,
          laudantium doloremque quibusdam nulla. Quidem atque ducimus nam ipsum
          corporis nihil ipsa?
        </p>
        {/* <p>Product ID: {productId}</p>
  
      </div> */
}
