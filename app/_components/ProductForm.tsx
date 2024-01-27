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
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Val av tjänst:
        </h3>

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
                  value={product.productTitle}
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
      </div>

      {/* <div className=" sm:col-span-2">
              <label
                htmlFor="deliveryalternative"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Leveransmetod<br></br> (fri utkörning vid beställningar över
                599kr)
              </label>
              <select
                id="deliveryalternative"
                value={selectedDeliveryMethod}
                onChange={(e) => setSelectedDeliveryMethod(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Leveransmetod</option>
                <option value="getHome">Hämta i studion hos Emma</option>
                <option value="getStore">Hämta hos butik x (gatuadress)</option>
                <option value="DeliveryKD">
                  Utkörning för 69kr (gäller i Karlstad)
                </option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                (if selected utkörning)<br></br>Adress Värmland? *
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="zip"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Postnummer
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Stad
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

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
