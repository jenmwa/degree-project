"use client";
import React, { useEffect, useState } from "react";
import { useProductContext } from "../../_context/ProductsContext";
import { useRouter } from "next/navigation";
import AdminOrderTable from "app/_components/AdminOrderTable";
import EditProduct from "app/_components/EditProduct";
import ProductSection from "app/_components/ProductSection";
import { IBooking } from "app/_models/IBooking";
import { IProduct } from "app/_models/IProduct";
import { initialProduct } from "app/initialProduct";
import { supabaseAuthClient } from "lib/supabaseAuthClient";

export default function Dashboard() {
  console.log("hello admin");
  const { products, isLoading, isError } = useProductContext();
  const [selectedProduct, setSelectedProduct] =
    useState<IProduct>(initialProduct);

  console.log(products);
  const router = useRouter();

  const signoutAdmin = async () => {
    console.log("sign out please");
    await supabaseAuthClient.auth.signOut();
    router.push("/admin");
  };

  const showProduct = (product: IProduct) => {
    console.log(product);
    setSelectedProduct(product);
  };

  const handleFormData = async (formData: IProduct) => {
    console.log("***update Product FORMDATA:", formData);
    try {
      console.log("***update Product:", formData);
      const response = await fetch("/api/updateProduct", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: formData.productId,
          productPrice: formData.productPrice,
          productTitle: formData.productTitle,
          productLongDescription: formData.productLongDescription,
          productShortDescription: formData.productShortDescription,
          productImagesUrl: formData.productImagesUrl,
          created_at: formData.created_at,
          updated_at: formData.created_at,
        }),
      });

      if (response.ok) {
        console.log("Product updated successfully");
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/handlers?entity=Booking");
        const data = await response.json();

        console.log("Bookings:", data.data);
        setBookings(data.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("bookings", bookings);

  return (
    <>
      <div className="flex flex-1 flex-col px-6 py-12 lg:px-8">
        <h1 className="mt-24 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Hello
          </span>{" "}
          Admin
        </h1>
        <button className="primary-button" onClick={signoutAdmin}>
          LOGGA UT
        </button>
        {isLoading ? (
          <p>Laddar...</p>
        ) : (
          <>
            <AdminOrderTable
              bookings={bookings}
              isLoading={isLoading}
            ></AdminOrderTable>
            <ProductSection
              // editedProduct={editedProduct}
              showProduct={showProduct}
            ></ProductSection>
            <EditProduct
              selectedProduct={selectedProduct}
              handleFormData={handleFormData}
            ></EditProduct>
            {/* <Images></Images> */}
          </>
        )}
      </div>
    </>
  );
}
