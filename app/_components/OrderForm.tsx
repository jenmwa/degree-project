"use client";

import { ChangeEvent, FormEvent } from "react";

import UserForm from "./UserForm";
import ProductForm from "./ProductForm";
import ConfirmSwitch from "./ConfirmSwitch";
import OrderInfo from "./OrderInfo";

import React from "react";
import { IProduct } from "../_models/IProduct";

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface IOrderFormProps {
  handleSubmit: (e: FormEvent) => void;
  selectedProduct: string;
  selectedDate: string;
  minDate: string;
  products: IProduct[] | null;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleUserMessageOnChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleUserOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isAgreed: boolean;
  handleSwitchOnChange: () => void;
}

export default function OrderForm({
  handleSubmit,
  selectedProduct,
  selectedDate,
  minDate,
  products,
  handleOnChange,
  handleUserMessageOnChange,
  handleUserOnChange,
  isAgreed,
  handleSwitchOnChange,
}: IOrderFormProps) {
  return (
    <>
      <div className="isolate px-6 py-8 sm:py-16 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div className="bg-blob" />
        </div>
        <OrderInfo></OrderInfo>
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
              minDate={minDate}
              products={products}
              handleOnChange={handleOnChange}
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
