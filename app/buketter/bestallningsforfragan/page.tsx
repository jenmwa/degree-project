"use client";
import DialogComponent from "../../_components/DialogComponent";
import {
  REQUEST_ERROR_DIALOG,
  REQUEST_MISSINGFIELDS_DIALOG,
  REQUEST_SUCCESS_DIALOG,
} from "../../_components/DialogMessage";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import React from "react";
import OrderForm from "../../_components/RequestForm";
import { useProductContext } from "../../_context/ProductsContext";
import { initialUser } from "../../_helpers/initialUser";
import { initialDialog } from "../../_helpers/initialDialog";
import {
  IBooking,
  IBookingCreated,
  bookingStatus,
} from "../../_models/IBooking";
import { IDialog } from "../../_models/IDialog";
import { IUser } from "../../_models/IUser";
import { validatePhone } from "../../_utilities/validation";
import { createUserService } from "app/_services/createUserService";
import { useRouter } from "next/navigation";
import { createBookingService } from "app/_services/createBookingService";
import { requestEmailService } from "app/_services/requestEmailService";
import { IRequestEmail } from "app/_models/IContactEmail";

export default function Page() {
  const [showDialog, setShowDialog] = useState(false);
  const [dialog, setDialog] = useState<IDialog>(initialDialog);
  const { products } = useProductContext();
  const [isAgreed, setIsAgreed] = useState(false);
  const [userData, setUserData] = useState<IUser>(initialUser);
  const [selectedDate, setSelectedDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [bookingData, setBookingData] = useState<IBooking>({
    bookingId: "",
    customer: "",
    product: selectedProduct,
    bookingMessage: "",
    requestedDate: null,
    bookingStatus: bookingStatus.Request,
    created_at: null,
    updated_at: null,
  });
  const router = useRouter();

  useEffect(() => {
    const today = new Date();
    const twoDaysFromNow = new Date(today);
    twoDaysFromNow.setDate(today.getDate() + 3);
    const minDateString = twoDaysFromNow.toISOString().split("T")[0];
    setMinDate(minDateString);

    const produkt = localStorage.getItem("product");
    if (produkt) {
      setSelectedProduct(produkt);
      setBookingData((prevBookingData) => ({
        ...prevBookingData,
        product: produkt,
      }));
    }
  }, []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "date") {
      setSelectedDate(value);
      const formattedDate = new Date(value);
      setBookingData((prevBookingData) => ({
        ...prevBookingData,
        // requestedDate: value,
        requestedDate: formattedDate,
      }));
    } else if (name === "product") {
      setSelectedProduct(value);
      setBookingData((prevBookingData) => ({
        ...prevBookingData,
        product: value,
      }));
    }
  };

  const handleUserOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "userPhoneNumber" && (validatePhone(value) || value === "")) {
      setUserPhoneNumber(value);
    }
    setUserData({ ...userData, [name]: value });
  };

  const handleUserMessageOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBookingData({ ...bookingData, bookingMessage: e.target.value });
  };

  const handleSwitchOnChange = () => {
    setIsAgreed(!isAgreed);
  };

  const closeDialog = () => {
    setShowDialog(false);
    if (dialog.redirectLink) {
      router.push(dialog.redirectLink);
    }
  };

  const clearInputFields = () => {
    setUserData(initialUser);
    setBookingData({
      bookingId: "",
      customer: "",
      product: selectedProduct,
      bookingMessage: "",
      requestedDate: null,
      bookingStatus: bookingStatus.Request,
      created_at: null,
      updated_at: null,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !userData.userEmail ||
      !userData.userFirstName ||
      !bookingData.bookingMessage
    ) {
      setDialog(REQUEST_MISSINGFIELDS_DIALOG);
      setShowDialog(true);
      return;
    }
    try {
      const user = await createUserService(userData);
      const userId = user.user.userId;
      const bookingObject = await createBookingService(bookingData, userId);
      const booking: IBooking = bookingObject.booking;

      const bookingCreated: IBookingCreated = {
        bookingId: booking.bookingId,
        customer: userId,
        product: booking.product,
        bookingMessage: booking.bookingMessage,
        requestedDate: booking.requestedDate,
        bookingStatus: booking.bookingStatus,
        created_at: booking.created_at,
        updated_at: booking.updated_at,
        customerEmail: user.user.userEmail,
        customerPhoneNumber: user.user.userPhoneNumber,
        customerName: user.user.userFirstName,
        productTitle: selectedProduct,
      };

      const email: IRequestEmail = {
        type: "requestEmail",
        name: bookingCreated.customerName,
        email: bookingCreated.customerEmail,
        phone: bookingCreated.customerPhoneNumber,
        confirmEmail: bookingCreated.customerEmail,
        message: bookingCreated.bookingMessage,
        bookingId: bookingCreated.bookingId,
        booking_requestedDate: bookingCreated.requestedDate,
        booking_created_at: bookingData.created_at,
        productTitle: bookingCreated.productTitle,
      };

      await requestEmailService(email);

      setDialog(REQUEST_SUCCESS_DIALOG);
      setShowDialog(true);

      clearInputFields();
    } catch (error) {
      console.error("Error handling submission:", error);
      setDialog(REQUEST_ERROR_DIALOG);
      setShowDialog(true);
    }
  };

  return (
    <>
      <section className="overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <OrderForm
            handleSubmit={handleSubmit}
            selectedProduct={selectedProduct}
            selectedDate={selectedDate}
            minDate={minDate}
            products={products}
            handleOnChange={handleOnChange}
            handleUserMessageOnChange={handleUserMessageOnChange}
            handleUserOnChange={handleUserOnChange}
            isAgreed={isAgreed}
            handleSwitchOnChange={handleSwitchOnChange}
          ></OrderForm>
        </div>
        <DialogComponent
          dialog={dialog}
          closeDialog={closeDialog}
          showDialog={showDialog}
        />
      </section>
    </>
  );
}
