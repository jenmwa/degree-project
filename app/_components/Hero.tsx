"use client";

import Image from "next/image";
import logo from "../../public/bjorbyblomster_logo.svg";
import Link from "next/link";

export function Hero() {
  const imageSizeSM = 200;

  return (
    <div className="bg-cover bg-no-repeat sm:bg-center lg:bg-top relative bg-hero ">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <div className="bg-blob" />
      </div>

      <div className="relative isolate px-6 pt-14 lg:px-8 text-dark">
        <div className="mx-auto max-w-2xl py-32 sm:py-36 lg:py-56 flex flex-col lg:max-w-4xl lg:flex-row-reverse justify-between lg:gap-10">
          <div className="hidden lg:flex sm:mb-8 sm:flex sm:justify-center m:w-1/4 lg:w-1/2 relative ">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={logo}
              alt="logo"
            />

            <Image
              src={logo}
              alt="logo"
              width={imageSizeSM}
              height={imageSizeSM}
              className="lg:hidden xl:hidden lg:w-200 lg:h-200 xl:w-400 xl:h-400 object-contain"
            />
          </div>

          <div className="text-center sm:text-left lg:w-1/2">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
              Blommor för <br></br>livets alla tillfällen
            </h1>
            <p className="mt-6 text-lg leading-8">
              Jag älskar att få andras dagar att blomstra. Alltifrån bröllop
              till begravning och alla vardagsdagar däremellan. Jag har en
              förkärlek för yviga och vilda blomsterarrangemang och att få skapa
              något personligt till just dig är något jag skulle kunna göra hela
              dagarna långa. Hör av dig om du vill ha min hjälp. Ingen fråga är
              för stor eller för liten.
            </p>

            <div className="mt-10 flex items-center justify-center sm:justify-start gap-x-6">
              <Link href="/buketter" className="primary-button ">
                Buketter
              </Link>
              <Link
                href="/#kontakt"
                passHref
                className="text-sm font-semibold leading-6"
              >
                Kontakta mig <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}
