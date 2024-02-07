import Image from "next/image";
import React from "react";
import logo from "../../public/img/logoisch.png";
import flowers from "../../public/svg/flowers-bouquet-svgrepo-com.svg";
import leaves from "../../public/svg/four-leaves-svgrepo-com.svg";
import heart from "../../public/svg/heart-svgrepo-com.svg";
import ImageCarousel from "./ImageCarousel";
import { useProductContext } from "app/_context/ProductsContext";

const features = [
  {
    name: "Lokalt & småskaligt.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    img: flowers,
  },
  {
    name: "Kreativt efter säsong.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    img: leaves,
  },
  {
    name: "Personligt och Unikt.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    img: heart,
  },
];

export default function ContactSection() {
  const { products, isLoading, isError } = useProductContext();

  const foundProduct = products?.find(
    (product) => product.productId === "e882cbce-fa72-43c9-af7d-dc631c927278"
  );

  return (
    <section id="about" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-rust-500">
                Björby Blomster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
                Inga raka rosor
              </p>
              <p className="mt-6 text-lg leading-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold">
                      <Image
                        src={feature.img}
                        className="absolute left-1 top-1 h-5 w-5 text-rust-500"
                        aria-hidden="true"
                        alt={feature.name}
                        height={24}
                        width={24}
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="max-w-full w-full">
            <ImageCarousel foundProduct={foundProduct} />
          </div>
        </div>
      </div>
    </section>
  );
}
