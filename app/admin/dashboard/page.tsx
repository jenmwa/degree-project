"use client";
import React, { useEffect, useState } from "react";
import { useProductContext } from "../../_context/ProductsContext";
import { initialProduct } from "../../_helpers/initialProduct";
import ProductSection from "../../_components/ProductSection";
import {
  IBooking,
  IBookingWithCustomerEmail,
  bookingStatus,
} from "../../_models/IBooking";
import { IProduct } from "../../_models/IProduct";
import EditProductModal from "../../_components/EditProductModal";
import { getBookingsService } from "app/_services/getBookingsService";
import { updateProductService } from "app/_services/updateProductService";
import ReviewRequestModal from "app/_components/ReviewRequestModal";
import AdminTable from "../../_components/AdminTable";
import DialogComponent from "app/_components/DialogComponent";
import { IDialog } from "app/_models/IDialog";
import { initialDialog } from "app/_helpers/initialDialog";
import {
  BOOKINGUPDATE_ERROR_DIALOG,
  BOOKINGUPDATE_SUCCESS_DIALOG,
  CONTACT_SUCCESS_DIALOG,
} from "app/_components/DialogMessage";
import { updateBookingService } from "app/_services/updateBookingStatusService";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBookingsService();
        const updatedBookings = data.map(
          (booking: {
            bookingId: string;
            customerEmail: string;
            product: string;
          }) => {
            return booking;
          }
        );
        setBookings(updatedBookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchData();
  }, []);

  const updateBooking = async (status: bookingStatus, booking: IBooking) => {
    try {
      const response = await updateBookingService(status, booking);
      if (response.ok) {
        console.log("Booking updated successfully");
        setShowDialog(true);
        setDialog(BOOKINGUPDATE_SUCCESS_DIALOG);
        const updatedBookings = bookings.map((book) => {
          if (book.bookingId === booking.bookingId) {
            return { ...book, bookingStatus: status };
          } else {
            return book;
          }
        });
        setBookings(updatedBookings);
        close();
      } else {
        console.error("Failed to update product");
        setShowDialog(true);
        setDialog(BOOKINGUPDATE_ERROR_DIALOG);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  };

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
      await updateProductService(formData);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleReviewModal = (booking: IBooking) => {
    console.log("click on:", booking.bookingId);
    setShowTableModal(true);
    if (booking) {
      setSelectedBooking(booking);
    }
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      <div className="flex flex-1 flex-col px-6 py-12 lg:px-8">
        <span className="mt-24">Dagens datum:</span>
        {/* <h1 className=" text-3xl font-extraboldmd:text-5xl lg:text-6xl">
          {new Date().toLocaleDateString()}
        </h1> */}
        <br></br>
        jag vill: Ändra produkt eller kolla förfrågningar
        {/* {isLoading ? ( */}
        {/* <p>Laddar...</p> */}
        {/* ) : ( */}
        <>
          {showModal && (
            <EditProductModal
              close={close}
              showModal={showModal}
              selectedProduct={selectedProduct}
              handleFormData={handleFormData}
            ></EditProductModal>
          )}
          {/* <AdminTableSection
            handleReviewModal={handleReviewModal}
            bookings={bookings}
            isLoading={false}
          ></AdminTableSection> */}
          <p>GÖM TABELLEN MED EN KNAPP /EXPAND/DECREASE</p>
          <AdminTable
            bookings={bookings}
            handleReviewModal={handleReviewModal}
            isLoading={isLoading}
          ></AdminTable>

          <ProductSection showProduct={showProduct}></ProductSection>
          {showTableModal && selectedBooking && (
            <ReviewRequestModal
              updateBooking={updateBooking}
              selectedBooking={selectedBooking}
              showTableModal={showTableModal}
              close={close}
            ></ReviewRequestModal>
          )}
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
