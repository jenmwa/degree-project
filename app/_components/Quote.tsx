import Image from "next/image";
import React from "react";
import logo from "../../public/img/logoisch.png";

export default function Quote() {
  return (
    <>
      <section
        id="quote"
        className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="absolute inset-x-0 top-[5rem] -z-10 transform-gpu overflow-hidden blur-2xl sm:top-[-20rem]"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Jag vill bort från raka rosor och buketter som ser exakt
                likadana ut. Att kunna jobba med lokala återförsäljare och kunna
                skapa något riktigt unikt och personligt för kund.&quot;
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image
                className="mx-auto h-40 w-48"
                src={logo}
                alt=""
                width={300}
                height={300}
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Emma Hagelin</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Grundare Björby Blomster</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
