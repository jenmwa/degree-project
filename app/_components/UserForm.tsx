import React from "react";
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
          className="block text-sm font-semibold leading-6"
        >
          Förnamn
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="userFirstName"
            id="first-name"
            autoComplete="given-name"
            className="block w-full  input-base"
            onChange={handleUserOnChange}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="block text-sm font-semibold leading-6"
        >
          Efternamn
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="userLastName"
            id="last-name"
            autoComplete="family-name"
            className="block w-full input-base"
            onChange={handleUserOnChange}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="userEmail"
          className="block text-sm font-semibold leading-6 "
        >
          Epost
        </label>
        <div className="mt-2.5">
          <input
            required
            type="email"
            name="userEmail"
            id="userEmail"
            autoComplete="userEmail"
            className="block w-full input-base"
            onChange={handleUserOnChange}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="phone-number"
          className="block text-sm font-semibold leading-6"
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
            className="block w-full input-base"
            onChange={handleUserOnChange}
          />
        </div>
      </div>
    </>
  );
}
