"use client";
import React, { useEffect, useState } from "react";
import { useProductContext } from "../../_context/ProductsContext";
import { useRouter } from "next/navigation";
import { initialProduct } from "../../_helpers/initialProduct";
import { supabaseAuthClient } from "../../../lib/supabaseAuthClient";
import EditProduct from "../../_components/EditProduct";
import ProductSection from "../../_components/ProductSection";
import { IBooking } from "../../_models/IBooking";
import { IProduct } from "../../_models/IProduct";
import AdminOrderTable from "../../_components/AdminOrderTable";
import EditProductModal from "../../_components/EditProductModal";
import DialogComponent from "app/_components/DialogComponent";
import { IDialog } from "app/_models/IDialog";
import { initialDialog } from "app/_helpers/initialDialog";

export default function Dashboard() {
  const { products, isLoading, isError } = useProductContext();
  const [selectedProduct, setSelectedProduct] =
    useState<IProduct>(initialProduct);
  const router = useRouter();

  // const [open, setOpen] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const close = () => {
    console.log("close this modal");
    setShowDialog(false);
  };

  const handleShowDialog = () => {
    setShowDialog(true);
    console.log("onClick, Modal is:", showDialog);
  };

  const signoutAdmin = async () => {
    console.log("sign out please");
    await supabaseAuthClient.auth.signOut();
    router.push("/admin");
  };

  const showProduct = (product: IProduct) => {
    setSelectedProduct(product);
    console.log("click on product:", product.productTitle);
  };

  const handleFormData = async (formData: IProduct) => {
    console.log(
      "***update Product FORMDATA:",
      formData,
      "imageURL:",
      formData.productImagesUrl
    );
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
        <h1 className="mt-24 text-3xl font-extraboldmd:text-5xl lg:text-6xl">
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
            {showDialog && (
              <EditProductModal
                close={close}
                showDialog={showDialog}
                selectedProduct={selectedProduct}
                handleFormData={handleFormData}
              ></EditProductModal>
            )}

            {/* {open && (
              <EditProductModal
                selectedProduct={selectedProduct}
                handleFormData={handleFormData}
                closeModal={closeModal}
                open={open}
              ></EditProductModal>
            )} */}
            <AdminOrderTable
              bookings={bookings}
              isLoading={isLoading}
            ></AdminOrderTable>
            <ProductSection
              showProduct={showProduct}
              handleShowDialog={handleShowDialog}
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
