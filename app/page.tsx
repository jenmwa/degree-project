"use client";
import React from "react";
import { Hero } from "./_components/Hero";
import Emma from "./_components/Emma";
import Quote from "./_components/Quote";

import About from "./_components/About";
import ProductSection from "./_components/ProductSection";
import { IProduct } from "./_models/IProduct";
import ProductPage from "./_components/ProductPage";
import ImgSection from "./_components/ImgSection";
import { useRouter } from "next/navigation";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  const router = useRouter();
  const showProduct = (product: IProduct) => {
    router.push(`/buketter/${product.productId}`);
  };

  return (
    <>
      <Hero></Hero>
      <main className="main">
        <Emma></Emma>
        <ProductSection showProduct={showProduct}></ProductSection>
        <ProductPage></ProductPage>
        <About></About>
        <Quote></Quote>
        <ImgSection></ImgSection>
        <ContactSection></ContactSection>
      </main>
    </>
  );
}
