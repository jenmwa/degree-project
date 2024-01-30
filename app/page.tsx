"use client";
import React from "react";
import { Hero } from "./_components/Hero";
import ContactComponent from "./_components/ContactComponent";
import ImageCarousel from "./_components/ImageCarousel";
import Emma from "./_components/Emma";
import Quote from "./_components/Quote";
import ContactSection from "./_components/ContactSection";
import About from "./_components/About";
import ProductSection from "./_components/ProductSection";
import { IProduct } from "./_models/IProduct";

export default function Home() {
  const showProduct = (product: IProduct) => {
    console.log("more about product on landingpage", product);
  };

  return (
    <>
      <Hero></Hero>
      <main className="">
        <About></About>
        <Emma></Emma>
        <ProductSection showProduct={showProduct}></ProductSection>
        <Quote></Quote>

        <ImageCarousel></ImageCarousel>
        <ContactSection></ContactSection>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      </main>
    </>
  );
}
