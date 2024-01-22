"use client";
import React, { useEffect, useState } from "react";
import { useProductContext } from "../../_context/ProductsContext";
import { useRouter } from "next/navigation";
import { IProduct } from "@/app/_models/IProduct";
import { supabase } from "@/lib/supabase";
import AdminOrderTable from "@/app/_components/AdminOrderTable";
import Images from "@/app/_components/Images";
import ProductSection from "@/app/_components/ProductSection";
import { IBooking } from "@/app/_models/IBooking";
import EditProduct from "@/app/_components/EditProduct";
import { initialProduct } from "@/app/initialProduct";

export const Dashboard: React.FC = () => {
  console.log("hello admin");
  const { products, isLoading, isError } = useProductContext();
  const [selectedProduct, setSelectedProduct] =
    useState<IProduct>(initialProduct);
  const [editedprice, setEditedPrice] = useState<number>(0);
  // const [editedProduct, setEditedProduct] = useState<IProduct>(initialProduct);

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
  };

  // const showProduct = (product: IProduct) => {
  //   console.log(product);
  //   setSelectedProduct(product);

  //   setEditedProduct(product);
  // };

  // const changePrice = (e: ChangeEvent<HTMLInputElement>) => {
  //   setEditedPrice(Number(e.target.value));
  // };

  const handleFormData = async (formData: IProduct) => {
    console.log("***update Product:", formData);
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
        console.log(editedprice);
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
      {" "}
      <div className="flex flex-1 flex-col px-6 py-12 lg:px-8">
        <button
          className=" bg-rust-300 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rust-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-500"
          onClick={signoutAdmin}
        >
          LOGGA UT
        </button>
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

            {/* <ul>
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
            </ul> */}

            {/* {selectedProduct && (
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
                {/* <button onClick={closeProductDetails}>Close Details</button> */}
            {/* <button onClick={updateProduct}>UPPDATERA</button>
              </div> */}
            {/* )} */}
          </div>
        )}
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
        <Images></Images>
      </div>
    </>
  );
};
export default Dashboard;
