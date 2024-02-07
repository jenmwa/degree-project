"use client";

import { useParams } from "next/navigation";
import React from "react";
import { useProductContext } from "../../_context/ProductsContext";
import ProductIdSection from "../../productId/ProductIdSection";

export default function ProductPage() {
  const params = useParams<{ productId: string }>();
  const { products } = useProductContext();

  const foundProduct = products?.find(
    (product) => product.productId === params?.productId
  );

  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ProductIdSection foundProduct={foundProduct}></ProductIdSection>
      </div>
    </section>
  );
}
