"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IUser, Role } from "../_models/IUser";
import { IBooking } from "../_models/IBooking";
import { useProductContext } from "../_context/ProductsContext";
import UserForm from "./UserForm";
import ProductForm from "./ProductForm";
import ConfirmSwitch from "./ConfirmSwitch";

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function OrderForm() {
  const { products, isLoading, isError } = useProductContext();
  const [isAgreed, setIsAgreed] = useState(false);

  const [userData, setUserData] = useState<IUser>({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPhoneNumber: 0,
    role: Role.USER,
    userId: "",
    isDeleted: false,
    isNewsletter: false,
    created_at: null,
    updated_at: null,
  });

  const [selectedDate, setSelectedDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
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

  const handleUserOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    console.log(value);
    setUserData({ ...userData, [name]: value });
    console.log("userData:", userData);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDateString = e.target.value;
    setSelectedDate(selectedDateString);
    setBookingData({
      ...bookingData,
      requestedDate: new Date(selectedDateString).toLocaleString(),
    });
  };

  const handleProductChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedUserProduct = e.target.value;
    console.log(selectedUserProduct);
    setSelectedProduct(selectedUserProduct);
    setBookingData((prevBookingData) => ({
      ...prevBookingData,
      product: selectedUserProduct,
    }));
  };

  const handleUserMessageOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setBookingData({ ...bookingData, bookingMessage: e.target.value });
  };

  const handleSwitchOnChange = () => {
    setIsAgreed(!isAgreed);
  };

  const createUser = async (userData: IUser) => {
    try {
      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();

        const userId = data.newUser ? data.newUser.userId : data.userId;
        return userId;
      } else {
        const errorBody = await response.json();
        throw new Error(errorBody.error);
      }
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  const createBooking = async (bookingData: IBooking, userId: IUser) => {
    try {
      bookingData.customer = userId;
      console.log("before booking:", userId, bookingData);

      const response = await fetch("/api/createBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const data = await response.json();
        return data.bookingData;
      } else {
        const errorBody = await response.json();
        throw new Error(errorBody.error);
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const newUser = await createUser(userData);
      console.log("newuser", newUser);

      const createdBooking = await createBooking(bookingData, newUser);
      console.log("Booking created successfully:", createdBooking);
    } catch (error) {
      console.error("Error handling submission:", error);
    }
  };

  return (
    <>
      <div className="isolate bg-white px-6 py-8 sm:py-16 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div className="bg-blob" />
        </div>
        <div className="mx-auto max-w-2xl text-left">
          <h2 className="text-3xl font-bold tracking-tightsm:text-4xl">
            Beställningsförfrågan
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Fyll i formuläret nedan på det du önskar beställa så återkommer jag
            med en bekräftelse. När du gjort din beställning återkopplar jag
            till dig till den mejl du uppgett och du kommer därmed att få
            betalningsinstruktioner. Din bokning är komplett när jag mottagit
            din betalning.
          </p>
        </div>
        <form
          // action="/api/createBooking"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"></div> */}
            <ProductForm
              selectedProduct={selectedProduct}
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
              minDate={minDate}
              products={products}
              handleProductChange={handleProductChange}
              handleUserMessageOnChange={handleUserMessageOnChange}
            ></ProductForm>
            <p>ANVÄNDARE</p>
            <UserForm handleUserOnChange={handleUserOnChange}></UserForm>
            <ConfirmSwitch
              isAgreed={isAgreed}
              handleSwitchOnChange={handleSwitchOnChange}
            ></ConfirmSwitch>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className={classNames(
                "primary-button",
                isAgreed ? "primary-button" : "primary-button:disabled"
              )}
              disabled={!isAgreed}
            >
              Skicka beställning
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
