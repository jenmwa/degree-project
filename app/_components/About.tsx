import Image from "next/image";
import React from "react";
import flowers from "../../public/svg/flowers-bouquet-svgrepo-com.svg";
import leaves from "../../public/svg/four-leaves-svgrepo-com.svg";
import heart from "../../public/svg/heart-svgrepo-com.svg";
import ImageCarousel from "./ImageCarousel";
import { useProductContext } from "app/_context/ProductsContext";

const features = [
  {
    name: "Lokalt & småskaligt.",
    description:
      "Jag strävar efter att stödja lokala blomsterodlare och småskaliga leverantörer för mer levande arrangemang",
    img: flowers,
  },
  {
    name: "Kreativt efter säsong.",
    description:
      "Dina önskemål men med säsongens utbud coh inspiration att utgå ifrån.",
    img: leaves,
  },
  {
    name: "Personligt och Unikt.",
    description:
      "Jag förstår att varje tillfälle är speciellt och vi strävar efter att skapa blomsterarrangemang som är helt anpassade efter dina önskemål och behov. ",
    img: heart,
  },
];

export default function ContactSection() {
  const { products } = useProductContext();

  const foundProduct = products?.find(
    (product) => product.productId === "e882cbce-fa72-43c9-af7d-dc631c927278"
  );

  return (
    <section id="about" className="overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 ">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-rust-500">
                Björby Blomster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
                Inga raka rosor
              </p>
              <p className="mt-6 text-lg leading-8">
                Björby Blomsters signaturbuketter kännetecknas av vilda och
                yviga buketter. De består ofta av en grön bas där jag gärna
                skapar med inslag från naturen i form av grenar och kvistar. Jag
                gör aldrig någon bukett halvdan utan varje bukett är viktigt för
                mig och mitt skapande. Jag vill såklart att du som mottagare av
                buketten ska bli överraskad och känna att de var skapade med
                kärlek.
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
