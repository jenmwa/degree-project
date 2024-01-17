"use client";
import React, { ChangeEvent, useState } from "react";
import { useProductContext } from "../../_context/ProductsContext";
import { useRouter } from "next/navigation";
import { IProduct } from "@/app/_models/IProduct";
import { supabase } from "@/lib/supabase";
import AdminOrderTable from "@/app/_components/AdminOrderTable";
import { Images } from "@/app/_components/Images";

export const Dashboard = () => {
  console.log("hello admin");
  const { products, isLoading, isError } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [editedprice, setEditedPrice] = useState<number>(0);
  console.log(products);
  const router = useRouter();

  const signoutAdmin = async () => {
    console.log("sign out please");
    await supabase.auth.signOut();
    router.push("/admin");
  };

  const showProduct = (product: IProduct) => {
    console.log(product);
    setSelectedProduct(product);
    setEditedPrice(product.productPrice);
  };

  const changePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedPrice(Number(e.target.value));
  };

  const updateProduct = async () => {
    console.log("update Product");
    try {
      const response = await fetch("/api/updateProduct", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: selectedProduct?.productId,
          productPrice: editedprice,
        }),
      });

      if (response.ok) {
        console.log(editedprice);
        console.log("Product updated successfully");
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
      {" "}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <button onClick={signoutAdmin}>LOGGA UT</button>
        <h1 className="mt-24 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Hello
          </span>{" "}
          Admin
        </h1>
        {isLoading ? (
          <p>Laddar...</p>
        ) : (
          <div>
            <p>Orders:</p>

            <ul>
              {products?.map((product) => (
                <li
                  key={product.productId}
                  onClick={() => showProduct(product)}
                >
                  Id:
                  {product.productShortDescription}
                  {product.productTitle}
                </li>
              ))}
            </ul>
            {selectedProduct && (
              <div className="border-double border-4 border-indigo-600">
                <p>Product Details:</p>
                <p>Id: {selectedProduct.productId}</p>
                <p>Title: {selectedProduct.productTitle}</p>
                <p>
                  Short Description: {selectedProduct.productShortDescription}
                </p>
                <p>
                  Long Description: {selectedProduct.productLongDescription}
                </p>
                <label>
                  Title:
                  <input
                    type="text"
                    value={editedprice}
                    onChange={changePrice}
                  />
                </label>
                {/* Add other details as needed */}
                {/* <button onClick={closeProductDetails}>Close Details</button> */}
                <button onClick={updateProduct}>UPPDATERA</button>
              </div>
            )}
          </div>
        )}
        <AdminOrderTable></AdminOrderTable>
        <Images></Images>
      </div>
    </>
  );
};
export default Dashboard;
