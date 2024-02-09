"use client";
import DialogComponent from "../../_components/DialogComponent";
import {
  REQUEST_ERROR_DIALOG,
  REQUEST_MISSINGFIELDS_DIALOG,
  REQUEST_SUCCESS_DIALOG,
} from "../../_components/DialogMessage";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import React from "react";
import OrderForm from "../../_components/OrderForm";
import { useProductContext } from "../../_context/ProductsContext";
import { initialUser } from "../../_helpers/initialUser";
import { initialDialog } from "../../_helpers/initialDialog";
import {
  IBooking,
  IBookingWithCustomerEmail,
  bookingStatus,
} from "../../_models/IBooking";
import { IDialog } from "../../_models/IDialog";
import { IUser } from "../../_models/IUser";
import { validatePhone } from "../../_utilities/validation";
import { serviceEmailService } from "app/_services/serviceEmailService";
import { createUserService } from "app/_services/createUserService";
import { createBookingService } from "app/_services/createBookingService";
import { useRouter } from "next/navigation";
import { contactEmailService } from "app/_services/contactEmailService";
import { IContactEmail } from "app/_models/IContactEmail";

export default function Page() {
  const [showDialog, setShowDialog] = useState(false);
  const [dialog, setDialog] = useState<IDialog>(initialDialog);
  const { products, isLoading, isError } = useProductContext();
  const [isAgreed, setIsAgreed] = useState(false);
  const [userData, setUserData] = useState<IUser>(initialUser);
  const [selectedDate, setSelectedDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [bookingData, setBookingData] = useState<IBooking>({
    bookingId: "",
    customer: {} as IUser,
    product: selectedProduct,
    bookingMessage: "",
    requestedDate: undefined,
    bookingStatus: bookingStatus.Request,
    created_at: null,
    updated_at: null,
  });

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
  const router = useRouter();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "date") {
      setSelectedDate(value);
      setBookingData((prevBookingData) => ({
        ...prevBookingData,
        requestedDate: new Date(value).toLocaleString(),
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
  console.log("****setUSERDATA", userData);
  const handleUserMessageOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setBookingData({ ...bookingData, bookingMessage: e.target.value });
  };
  console.log("****setBOOKINGDATAMESSAGE", bookingData);
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
      customer: userData,
      product: selectedProduct,
      bookingMessage: "",
      requestedDate: "",
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
      console.log("**** USER", user);
      const createdBooking = await createBookingService(bookingData, user);
      console.log("**** createdBooking", createdBooking);

      const userEmail = userData.userEmail;
      console.log("**** userEmail", userEmail);
      const emailData = {
        type: "requestEmail",
        name: userData.userFirstName,
        email: userEmail,
        message: "msg",
      };
      console.log("**** emailData", emailData);
      const serviceEmail = await serviceEmailService(
        emailData,
        createdBooking,
        userData
      );
      console.log("**** serviceEmail", serviceEmail);

      setDialog(REQUEST_SUCCESS_DIALOG);
      setShowDialog(true);

      clearInputFields();

      console.log("Booking created successfully:", createdBooking);
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
