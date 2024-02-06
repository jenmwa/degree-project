"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/img/logoisch.png";
import hero from "/public/img/hero.webp";

export function Hero() {
  const imageSizeSM = 200;

  return (
    <div
      className="relative px-6 pt-24 lg:px-16"
      style={{
        backgroundImage: `url('/img/hero.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto sm:max-w-2xl md:max-w-full md:px-32 xl:max-w-7xl lg:px-8  py-32 text-white sm:py-36 grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-1">
        <div className="lg:w-full lg:max-w-2xl lg:pt-4">
          <h1 className="custom-shadow  text-4xl font-bold tracking-tight sm:text-6xl text-shadow-lg">
            <span className="text-rust-100">Blommor</span> för <br />
            livets alla tillfällen
          </h1>
          <p className="custom-shadow mt-6 text-lg leading-8 ">
            Jag älskar att få andras dagar att blomstra.<br></br> Alltifrån
            bröllop till begravning och alla vardagsdagar däremellan. Jag har en
            förkärlek för yviga och vilda blomsterarrangemang och att få skapa
            något personligt till just dig är något jag skulle kunna göra hela
            dagarna långa. Hör av dig om du vill ha min hjälp. Ingen fråga är
            för stor eller för liten.
          </p>

          <div className="mt-10 flex items-center lg:justify-start gap-x-6">
            <Link href="/buketter" className="primary-button">
              Buketter
            </Link>
            <Link
              href="/#kontakt"
              passHref
              className="custom-shadow  text-sm font-semibold leading-6"
            >
              Kontakta mig <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div> */}
    </div>
  );
}
