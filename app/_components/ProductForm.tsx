import { ChangeEvent } from "react";
import { IProduct } from "../_models/IProduct";
import React from "react";

interface IProductFormProps {
  selectedProduct: string;
  selectedDate: string;
  minDate: string;
  products: IProduct[] | null;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleUserMessageOnChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function ProductForm({
  selectedProduct,
  selectedDate,
  minDate,
  products,
  handleOnChange,
  handleUserMessageOnChange,
}: IProductFormProps) {
  return (
    <>
      <div className="sm:col-span-2">
        <fieldset>
          <legend className="mb-2 font-semibold">
            <h3 className="mb-4 font-semibold ">Val av tjänst:</h3>
          </legend>

          <ul className="items-center w-full font-medium bg-white border border-gray-200  sm:flex">
            {products?.map((product) => (
              <li
                key={product.productId}
                className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r "
              >
                <label
                  htmlFor={`horizontal-list-radio-license-${product.productId}`}
                  className="flex items-center py-3 ps-3 font-medium  cursor-pointer"
                >
                  <input
                    required
                    id={`horizontal-list-radio-license-${product.productId}`}
                    type="radio"
                    name="product"
                    value={product.productId}
                    checked={
                      selectedProduct === product.productId ||
                      (localStorage.getItem("product") ===
                        product.productTitle &&
                        selectedProduct !== "Others")
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      localStorage.setItem("product", product.productId);
                    }}
                    className="w-4 h-4 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-3000 focus:ring-2 "
                  />
                  <span className="ml-2">{product.productTitle}</span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="date" className="block font-semibold leading-6">
          Till vilket datum?{" "}
          <span className="font-normal ">
            ( frivilligt fält, kan lämnas tomt )
          </span>
        </label>
        <div className="mt-2.5">
          <input
            type="date"
            name="date"
            id="date"
            value={selectedDate}
            onChange={handleOnChange}
            min={minDate}
            autoComplete="date"
            className="block w-full input-base"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="block font-semibold leading-6">
          Meddelande
        </label>
        <div className="mt-2.5">
          <textarea
            required
            name="message"
            id="message"
            rows={4}
            onChange={handleUserMessageOnChange}
            className=" block w-full input-base bg-white"
            defaultValue={""}
          />
        </div>
      </div>
    </>
  );
}
