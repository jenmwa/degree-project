"use client";

import AdminTable from "app/_components/AdminTable";
import DialogComponent from "app/_components/DialogComponent";
import {
  BOOKINGUPDATE_SUCCESS_DIALOG,
  BOOKINGUPDATE_ERROR_DIALOG,
} from "app/_components/DialogMessage";
import ReviewRequestModal from "app/_components/ReviewRequestModal";
import { useProductContext } from "app/_context/ProductsContext";
import { initialDialog } from "app/_helpers/initialDialog";
import {
  IBooking,
  IBookingWithCustomerEmail,
  bookingStatus,
} from "app/_models/IBooking";
import { IDialog } from "app/_models/IDialog";
import { getBookingsService } from "app/_services/getBookingsService";
import { updateBookingService } from "app/_services/updateBookingStatusService";
import { getTodaysDate } from "app/_utilities/getTodaysDate";
import updateBooking from "pages/api/updateBooking";
import { useEffect, useState } from "react";

export default function Requests() {
  const { isLoading } = useProductContext();
  const [bookings, setBookings] = useState<IBookingWithCustomerEmail[]>([]);
  const [showTableModal, setShowTableModal] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<
    IBookingWithCustomerEmail | undefined
  >();
  const [dialog, setDialog] = useState<IDialog>(initialDialog);
  const [showDialog, setShowDialog] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBookingsService();
        setBookings(data);
        const sortedBookings = [...data].sort((a, b) => {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        });
        setBookings(sortedBookings);
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

  const handleReviewModal = (booking: IBooking) => {
    setShowTableModal(true);
    if (booking) {
      setSelectedBooking(booking);
    }
  };

  const closeDialog = () => {
    // setShowModal(false);
    setShowDialog(false);
    close();
  };

  const close = () => {
    // setShowModal(false);
    setShowTableModal(false);
  };

  return (
    <>
      <div className="flex flex-1 flex-col px-6 py-12 lg:px-8">
        <span className="mt-20">Dagens datum:</span>
        <h1 className=" text-3xl mb-12 font-extraboldmd:text-5xl lg:text-6xl">
          {getTodaysDate()}
        </h1>
        <>
          <AdminTable
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
