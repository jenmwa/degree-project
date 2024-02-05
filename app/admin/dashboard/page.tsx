"use client";
import React, { useEffect, useState } from "react";
import { useProductContext } from "../../_context/ProductsContext";
import { initialProduct } from "../../_helpers/initialProduct";
import ProductSection from "../../_components/ProductSection";
import { IBooking } from "../../_models/IBooking";
import { IProduct } from "../../_models/IProduct";
import AdminOrderTable from "../../_components/AdminOrderTable";
import EditProductModal from "../../_components/EditProductModal";
import { getBookingsService } from "app/_services/getBookingsService";
import { updateProductService } from "app/_services/updateProductService";

export default function Dashboard() {
  const { products, isLoading, isError } = useProductContext();
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [selectedProduct, setSelectedProduct] =
    useState<IProduct>(initialProduct);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBookingsService();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchData();
  }, []);

  const close = () => {
    console.log("close this modal");
    setShowDialog(false);
  };

  const handleShowDialog = () => {
    setShowDialog(true);
    console.log("onClick, Modal is:", showDialog);
  };

  const showProduct = (product: IProduct) => {
    setSelectedProduct(product);
    handleShowDialog();
    console.log("click on product:", product.productTitle);
  };

  const handleFormData = async (formData: IProduct) => {
    try {
      await updateProductService(formData);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
      <div className="flex flex-1 flex-col px-6 py-12 lg:px-8">
        <h1 className="mt-24 text-3xl font-extraboldmd:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Hello
          </span>{" "}
          Admin
        </h1>

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
            <AdminOrderTable
              bookings={bookings}
              isLoading={isLoading}
            ></AdminOrderTable>
            <ProductSection showProduct={showProduct}></ProductSection>
          </>
        )}
      </div>
    </>
  );
}
