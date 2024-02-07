import Image from "next/image";

import React from "react";
import ContactComponent from "./ContactComponent";
import bukett from "../../public/img/bukett_13.jpg";

export default function ContactSection() {
  return (
    <section id="contact" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-rust-500">
                Björby Blomster
              </h2>
              <span className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Kontakta mig
              </span>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Vare sig det är förfrågningar, bokningar, intresseanmälan, hör
                av dig till mig så fortsätter vi prata!
              </p>
              <ContactComponent></ContactComponent>
            </div>
          </div>
          <div className="mx-auto sm:my-8 md:mt-32 max-w-7xl ">
            <div
              className="max-w-full w-full"
              style={{ height: "500px", maxWidth: "500px" }}
            >
              <Image
                src={bukett}
                alt="Björnby blomster"
                layout="responsive"
                width={500}
                height={500}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
