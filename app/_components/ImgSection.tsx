import Image from "next/image";
import React from "react";
import logo from "/img/logoisch.png";

const products = [
  {
    id: 1,
    name: "Fira",
    href: "#",
    imageSrc: { logo },
    imageAlt: "Bukett av tema Fira",
    price: "{productprice}",
  },
  {
    id: 2,
    name: "Fira",
    href: "#",
    imageSrc: { logo },
    imageAlt: "Bukett av tema Fira",
    price: "{productprice}",
  },
  {
    id: 3,
    name: "Fira",
    href: "#",
    imageSrc: { logo },
    imageAlt: "Bukett av tema Fira",
    price: "{productprice}",
  },
  {
    id: 4,
    name: "Fira",
    href: "#",
    imageSrc: { logo },
    imageAlt: "Bukett av tema Fira",
    price: "{productprice}",
  },
  // More products...
];

export default function ImgSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight">Urval av buketter</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="flex justify-center items-center mx-auto shadow-xl ring-1 ring-gray-400/10 ">
                <div className="max-w-full w-full">
                  <Image
                    src={logo}
                    alt="Björnby blomster"
                    layout="responsive"
                    width={100}
                    height={100}
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.imageAlt}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
