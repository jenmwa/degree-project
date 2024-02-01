import { ChangeEvent } from "react";
import { IProduct } from "../_models/IProduct";

interface IProductFormProps {
  selectedDate: string;
  handleDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  minDate: string;
  products: IProduct[] | null;
  handleProductChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleUserMessageOnChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function ProductForm({
  selectedDate,
  handleDateChange,
  minDate,
  products,
  handleProductChange,
  handleUserMessageOnChange,
}: IProductFormProps) {
  return (
    <>
      <div className="sm:col-span-2">
        <fieldset>
          <legend className="mb-2 font-semibold text-gray-900">
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Val av tjänst:
            </h3>
          </legend>

          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200  sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {products?.map((product) => (
              <li
                key={product.productId}
                className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
              >
                {/* <div className="flex items-center ps-3  "> */}
                <label
                  htmlFor={`horizontal-list-radio-license-${product.productId}`}
                  className="flex items-center py-3 ps-3 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                >
                  <input
                    id={`horizontal-list-radio-license-${product.productId}`}
                    type="radio"
                    name="product"
                    value={product.productId}
                    onChange={handleProductChange}
                    className="w-4 h-4 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300 dark:focus:ring-rust-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <span className="ml-2">{product.productTitle}</span>
                </label>
                {/* </div> */}
              </li>
            ))}
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <label
                htmlFor="horizontal-list-radio-license-other"
                className="flex items-center py-3 ps-3 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
              >
                <input
                  id="horizontal-list-radio-license-other"
                  type="radio"
                  name="product"
                  value={"Others"}
                  onChange={handleProductChange}
                  className="w-4 h-4 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300 dark:focus:ring-rust-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <span className="ml-2">Annat</span>
              </label>
            </li>
          </ul>
        </fieldset>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="date"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Till vilket datum?
        </label>

        <input
          type="date"
          name="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          min={minDate}
          autoComplete="date"
          className=" block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-500 sm:text-sm sm:leading-6"
        />
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Meddelande
        </label>
        <div className="mt-2.5">
          <textarea
            name="message"
            id="message"
            rows={4}
            onChange={handleUserMessageOnChange}
            className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-500 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
      </div>
    </>
  );
}
