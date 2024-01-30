import React from "react";
import { Hero } from "./_components/Hero";
import ContactComponent from "./_components/ContactComponent";
import ImageCarousel from "./_components/ImageCarousel";
import Emma from "./_components/Emma";
import Quote from "./_components/Quote";
import ContactSection from "./_components/ContactSection";
import About from "./_components/About";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <main className="">
        {/* <h1 className="mt-24 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Startsida
        </span>{" "}
        & presentation
      </h1> */}
        <About></About>
        <Emma></Emma>
        <Quote></Quote>

        <ImageCarousel></ImageCarousel>
        <ContactSection></ContactSection>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      </main>
    </>
  );
}
