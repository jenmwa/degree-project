import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import React from "react";
import { ProductProvider } from "./_context/ProductsContext";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Björby Blomster",
  description: "Jag älskar att få andras dagar att blomstra.",
  applicationName:
    "Björby Blomster: Jag älskar att få andras dagar att blomstra",
  authors: {
    name: "Emma Hagelin",
  },
  keywords: "",
  themeColor: "#A8491F",
  openGraph: {
    type: "website",
    url: "https://bjorbyblomster.se",
    title: "Björby Blomster",
    description: "Björby Blomster: Jag älskar att få andras dagar att blomstra",
    siteName: "Björby Blomster",
    images: [{ url: "" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={cormorant.className}>
        <ProductProvider>
          <Header />
          {children}
          <Footer />
        </ProductProvider>
      </body>
    </html>
  );
}
