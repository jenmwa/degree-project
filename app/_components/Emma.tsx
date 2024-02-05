import Image from "next/image";
import ProductInfo from "./ProductInfo";
import emma from "../../public/img/emma.jpg";

import React from "react";

export default function Emma() {
  return (
    <>
      <section id="emma" className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="">
              <Image
                src={emma}
                alt="alt"
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="lg:pl-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-rust-500">
                  Det är jag som är Björby Blomster
                </h2>
                <span className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Emma
                </span>

                <ProductInfo></ProductInfo>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
