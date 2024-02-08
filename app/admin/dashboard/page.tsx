"use client";
import React, { useState } from "react";
import { useProductContext } from "../../_context/ProductsContext";
import { initialProduct } from "../../_helpers/initialProduct";
import ProductSection from "../../_components/ProductSection";
import { IBookingWithCustomerEmail } from "../../_models/IBooking";
import { IProduct } from "../../_models/IProduct";
import EditProductModal from "../../_components/EditProductModal";
import { updateProductService } from "app/_services/updateProductService";
import DialogComponent from "app/_components/DialogComponent";
import { IDialog } from "app/_models/IDialog";
import { initialDialog } from "app/_helpers/initialDialog";
import {
  PRODUCTUPDATE_ERROR_DIALOG,
  PRODUCTUPDATE_SUCCESS_DIALOG,
} from "app/_components/DialogMessage";

import { getTodaysDate } from "app/_utilities/getTodaysDate";

export default function Dashboard() {
  const { isLoading } = useProductContext();
  const [bookings, setBookings] = useState<IBookingWithCustomerEmail[]>([]);
  const [selectedProduct, setSelectedProduct] =
    useState<IProduct>(initialProduct);
  const [showModal, setShowModal] = useState(false);
  const [showTableModal, setShowTableModal] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<
    IBookingWithCustomerEmail | undefined
  >();
  const [dialog, setDialog] = useState<IDialog>(initialDialog);
  const [showDialog, setShowDialog] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getBookingsService();
  //       const updatedBookings = data.map(
  //         (booking: {
  //           bookingId: string;
  //           customerEmail: string;
  //           product: string;
  //         }) => {
  //           return booking;
  //         }
  //       );
  //       setBookings(updatedBookings);
  //     } catch (error) {
  //       console.error("Error fetching bookings:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const updateBooking = async (status: bookingStatus, booking: IBooking) => {
  //   try {
  //     const response = await updateBookingService(status, booking);
  //     if (response.ok) {
  //       setShowDialog(true);
  //       setDialog(BOOKINGUPDATE_SUCCESS_DIALOG);
  //       const updatedBookings = bookings.map((book) => {
  //         if (book.bookingId === booking.bookingId) {
  //           return { ...book, bookingStatus: status };
  //         } else {
  //           return book;
  //         }
  //       });
  //       setBookings(updatedBookings);
  //       close();
  //     } else {
  //       console.error("Failed to update product");
  //       setShowDialog(true);
  //       setDialog(BOOKINGUPDATE_ERROR_DIALOG);
  //     }
  //   } catch (error) {
  //     console.error("Error updating product:", error);
  //     throw error;
  //   }
  // };

  const close = () => {
    setShowModal(false);
    setShowTableModal(false);
  };

  const showProduct = (product: IProduct) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleFormData = async (formData: IProduct) => {
    try {
      const response = await updateProductService(formData);
      if (response.ok) {
        console.log("success");
        setDialog(PRODUCTUPDATE_SUCCESS_DIALOG);
        setShowDialog(true);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      setDialog(PRODUCTUPDATE_ERROR_DIALOG);
      setShowDialog(true);
    }
  };

  // const handleReviewModal = (booking: IBooking) => {
  //   setShowTableModal(true);
  //   if (booking) {
  //     setSelectedBooking(booking);
  //   }
  // };

  const closeDialog = () => {
    setShowModal(false);
    setShowDialog(false);
    close();
  };

  return (
    <>
      <div className="flex flex-1 flex-col px-6 py-12 lg:px-8 ">
        <span className="mt-20">Dagens datum:</span>
        <h1 className=" text-3xl mb-12 font-extraboldmd:text-5xl lg:text-6xl">
          {getTodaysDate()}
        </h1>

        <>
          {showModal && (
            <EditProductModal
              close={close}
              showModal={showModal}
              selectedProduct={selectedProduct}
              handleFormData={handleFormData}
            ></EditProductModal>
          )}
          <ProductSection showProduct={showProduct}></ProductSection>

          {/* <AdminTable
            bookings={bookings}
            handleReviewModal={handleReviewModal}
            isLoading={isLoading}
          ></AdminTable>

          {showTableModal && selectedBooking && (
            <ReviewRequestModal
              updateBooking={updateBooking}
              selectedBooking={selectedBooking}
              showTableModal={showTableModal}
              close={close}
            ></ReviewRequestModal>
          )} */}
          {showDialog && (
            <DialogComponent
              dialog={dialog}
              closeDialog={closeDialog}
              showDialog={showDialog}
            ></DialogComponent>
          )}
        </>
      </div>
    </>
  );
}
