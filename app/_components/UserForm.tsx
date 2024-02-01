import { ChangeEvent } from "react";

interface IUserFormProps {
  handleUserOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function UserForm({ handleUserOnChange }: IUserFormProps) {
  return (
    <>
      <div className="sm:col-span-2"></div>
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Förnamn
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="userFirstName"
            id="first-name"
            autoComplete="given-name"
            className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insetfocus:ring-2 focus:ring-inset focus:ring-rust-500 sm:text-sm sm:leading-6"
            onChange={handleUserOnChange}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Efternamn
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="userLastName"
            id="last-name"
            autoComplete="family-name"
            className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-500 sm:text-sm sm:leading-6"
            onChange={handleUserOnChange}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="userEmail"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Epost
        </label>
        <div className="mt-2.5">
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            autoComplete="userEmail"
            className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-500 sm:text-sm sm:leading-6"
            onChange={handleUserOnChange}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="phone-number"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Telefonnummer
        </label>
        <div className="relative mt-2.5">
          <input
            type="tel"
            name="userPhoneNumber"
            id="phone-number"
            placeholder="070..."
            autoComplete="tel"
            className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-500 sm:text-sm sm:leading-6"
            onChange={handleUserOnChange}
          />
        </div>
      </div>
    </>
  );
}
