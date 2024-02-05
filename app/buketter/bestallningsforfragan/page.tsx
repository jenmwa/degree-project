"use client";
import DialogComponent from "../../_components/DialogComponent";
import {
  CONTACT_400_DIALOG,
  CONTACT_SUCCESS_DIALOG,
  REQUEST_MISSINGFIELDS_DIALOG,
  REQUEST_SUCCESS_DIALOG,
} from "../../_components/DialogMessage";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import React from "react";
import OrderForm from "../../_components/OrderForm";
import { useProductContext } from "../../_context/ProductsContext";
import { initialUser } from "../../_helpers/initialUser";
import { initialDialog } from "../../_helpers/initialDialog";
import { IBooking } from "../../_models/IBooking";
import { IDialog } from "../../_models/IDialog";
import { IUser } from "../../_models/IUser";
import { validatePhone } from "../../_utilities/validation";
import { IOrderMailData } from "../../_models/IOrderMailData";
import Stepper from "../../_components/Stepper";
import { sendEmailService } from "app/_services/sendEmailService";
import { createUserService } from "app/_services/createUserService";
import { createBookingService } from "app/_services/createBookingService";

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
    customer: userData,
    product: selectedProduct,
    bookingMessage: "",
    requestedDate: "",
    bookingStatus: "Request",
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
    console.log("date:", e.target.value, "bookingdata:", bookingData);
    console.log("product:", e.target.value, "bookingdata:", bookingData);
  };

  const handleUserOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "userPhoneNumber" && (validatePhone(value) || value === "")) {
      setUserPhoneNumber(value);
    }
    setUserData({ ...userData, [name]: value });
  };

  const handleUserMessageOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setBookingData({ ...bookingData, bookingMessage: e.target.value });
  };

  const handleSwitchOnChange = () => {
    setIsAgreed(!isAgreed);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const clearInputFields = () => {
    setUserData(initialUser);
    setBookingData({
      bookingId: "",
      customer: userData,
      product: selectedProduct,
      bookingMessage: "",
      requestedDate: "",
      bookingStatus: "Request",
      created_at: null,
      updated_at: null,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!userData.userEmail) {
      setDialog(REQUEST_MISSINGFIELDS_DIALOG);
      setShowDialog(true);
      return;
    }
    try {
      const user = await createUserService(userData);
      const createdBooking = await createBookingService(bookingData, user);

      const userEmail = userData.userEmail;
      const emailData = {
        type: "order_confirmation",
        name: userData.userFirstName,
        email: userEmail,
        message: "Your order has been confirmed. Details: ",
      };

      await sendEmailService(emailData, bookingData, userData);
      setDialog(CONTACT_SUCCESS_DIALOG);
      setShowDialog(true);

      clearInputFields();

      console.log("Booking created successfully:", createdBooking);
    } catch (error) {
      console.error("Error handling submission:", error);
    }
  };

  // const createUser = async (userData: IUser) => {
  //   try {
  //     const response = await fetch("/api/createUser", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userData),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       const userId = data.newUser ? data.newUser.userId : data.userId;
  //       return userId;
  //     }
  //     if (response.status === 400) {
  //       setDialog(CONTACT_400_DIALOG);
  //       setShowDialog(true);
  //     } else {
  //       const errorBody = await response.json();
  //       throw new Error(errorBody.error);
  //     }
  //   } catch (error) {
  //     console.error("Error creating user:", error);
  //     throw error;
  //   }
  // };

  // const createBooking = async (bookingData: IBooking, userId: IUser) => {
  //   try {
  //     bookingData.customer = userId;
  //     console.log("before booking:", userId, bookingData);

  //     const response = await fetch("/api/createBooking", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(bookingData),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setDialog(REQUEST_SUCCESS_DIALOG);
  //       setShowDialog(true);
  //       return data.bookingData;
  //     } else {
  //       const errorBody = await response.json();
  //       throw new Error(errorBody.error);
  //     }
  //   } catch (error) {
  //     console.error("Error creating booking:", error);
  //     throw error;
  //   }
  // };

  //  const sendEmail = async (
  //     emailData: IOrderMailData,
  //     bookingData: IBooking,
  //     userData: IUser
  //   ) => {
  //     const values = { emailData, bookingData, userData };
  //     console.log(values);
  //     try {
  //       emailData.type = "order_confirmation";
  //       const res = await fetch("/api/contactEmail", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(values),
  //       });

  //       const body = await res.json();

  //       console.log(body);

  //       if (res.ok) {
  //         // setDialog(CONTACT_SUCCESS_DIALOG);
  //         // setShowDialog(true);
  //         // clearEmailFields();
  //       } else if (res.status === 400) {
  //         // setDialog(CONTACT_400_DIALOG);
  //         // setShowDialog(true);
  //       } else {
  //         throw new Error(body.error);
  //       }
  //     } catch (error) {
  //       console.error("Error sending email", error);
  //       throw error;
  //     }
  //   };
  // try {
  //   emailData.type = "order_confirmation";

  //   const res = await fetch("/api/contactEmail", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(values),
  //   });

  //   const body = await res.json();

  //   console.log(body);

  //     if (res.ok) {
  //       // setDialog(CONTACT_SUCCESS_DIALOG);
  //       // setShowDialog(true);
  //       // clearEmailFields();
  //     } else if (res.status === 400) {
  //       // setDialog(CONTACT_400_DIALOG);
  //       // setShowDialog(true);
  //     } else {
  //       throw new Error(body.error);
  //     }
  //   } catch (error) {
  //     console.error("Error sending email", error);
  //     throw error;
  //   }
  // };

  return (
    <>
      {/* <ReqestOfferComponent></ReqestOfferComponent> */}
      <section className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Stepper></Stepper>

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
