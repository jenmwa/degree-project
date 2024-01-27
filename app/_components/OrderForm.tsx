"use client";

import { Switch } from "@headlessui/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IUser, Role } from "../_models/IUser";
import { IBooking } from "../_models/IBooking";
import { useProductContext } from "../_context/ProductsContext";
import UserForm from "./UserForm";
import ProductForm from "./ProductForm";

function classNames(...classes: any) {
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
  // const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  const [bookingData, setBookingData] = useState<IBooking>({
    bookingId: "",
    // customer: userData,
    product: selectedProduct,
    bookingMessage: "",
    requestedDate: "",
    // deliveryalternative: "",
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
  console.log("Booking:", bookingData, selectedDate);

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("handlesubmit", bookingData);
    console.log("handlesubmit", userData);
    try {
      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("User created successfully");
      } else {
        const responseBody = await response.json();
        console.error("Error creating user:", responseBody.error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  console.log(selectedProduct);
  console.log("Bookingdata:", bookingData);

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("handlesubmit", bookingData);
  //   console.log("handlesubmit", userData);

  //   try {
  //     // First, create the user
  //     const createUserResponse = await fetch("/api/createUser", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userData),
  //     });

  //     if (!createUserResponse.ok) {
  //       throw new Error(`Error creating user: ${createUserResponse.statusText}`);
  //     }

  //     // User created successfully, now proceed to create the booking
  //     const response = await fetch("/api/createBooking", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(bookingData),
  //     });

  //     if (response.ok) {
  //       // Booking created successfully
  //       console.log("Booking created successfully");
  //       // Proceed to submit booking data or perform other actions
  //     } else {
  //       // Handle error response
  //       console.error("Error creating booking:", response.statusText);
  //     }
  //   } catch (error) {
  //     // Handle fetch error
  //     console.error("Fetch error:", error);
  //   }
  // };

  return (
    <>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Beställning
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
            <p>BESTÄLLNING</p>
            {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"></div> */}
            <ProductForm
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
              minDate={minDate}
              products={products}
              handleProductChange={handleProductChange}
              handleUserMessageOnChange={handleUserMessageOnChange}
            ></ProductForm>
            <p>ANVÄNDARE</p>
            <UserForm handleUserOnChange={handleUserOnChange}></UserForm>

            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={isAgreed}
                  onChange={setIsAgreed}
                  className={classNames(
                    isAgreed ? "bg-rust-300" : "bg-gray-200",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-500"
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      isAgreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-gray-600">
                Genom att klicka i här godkänner du vår
                <a
                  href="#"
                  className="font-semibold text-rust-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-rust-500"
                >
                  &nbsp;personuppgiftspolicy
                </a>{" "}
                och att bli kontaktad gällande beställningen.
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className={classNames(
                " block w-full bg-rust-300 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rust-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-500",
                isAgreed
                  ? "bg-rust-300 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed  hover:bg-gray-300"
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
