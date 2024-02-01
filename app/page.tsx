"use client";
import React from "react";
import { Hero } from "./_components/Hero";
import Emma from "./_components/Emma";
import Quote from "./_components/Quote";
import ContactSection from "./_components/ContactSection";
import About from "./_components/About";
import ProductSection from "./_components/ProductSection";
import { IProduct } from "./_models/IProduct";
import ProductPage from "./_components/ProductPage";
import ImgSection from "./_components/ImgSection";

export default function Home() {
  const showProduct = (product: IProduct) => {
    console.log("more about product on landingpage", product);
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
