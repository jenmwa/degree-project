"use client";

import React, { ChangeEvent, useState } from "react";
// import Image from "next/image";
import LoginMagic from "../_components/LoginMagic";
// import logo from "../../public/img/logoisch.png";

export default function Login() {
  const [showLoginMagic, setShowLoginMagic] = useState(false);
  const [resetPassword, setResetPassword] = useState<boolean>(false);

  // const forgottenPassword = () => {
  //   setResetPassword(true);
  // };

  const emailadressOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleLoginMagicClick = () => {
    setShowLoginMagic(!showLoginMagic);
    setResetPassword(false);
  };
  return (
    <>
      <section className="flex min-h-full flex-1 flex-col justify-center sm:mt-16 mt-20 px-6 py-16 lg:px-8">
        {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src={logo}
            alt="Björby Blomster"
            width={50}
            height={50}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            {resetPassword ? "reset password" : "Logga in"}
          </h2>
        </div> */}
        {/* {!resetPassword ? ( */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* {!showLoginMagic ? ( */}
          <form className="space-y-6" action="/auth/login" method="POST">
            <div>
              <label htmlFor="email" className="block  font-medium leading-6 ">
                Epost
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-500 sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-medium leading-6 text-gray-900"
              >
                Lösenord
              </label>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-600 sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="primary-button sm:mb-8 lg:mb-24">
                Logga in
              </button>
            </div>
          </form>
          {/*) : (
             <LoginMagic />
           )}

           <div className="mt-10 text-center  text-gray-500">
            {!showLoginMagic ? "Admin" : ""}
            <div
              onClick={handleLoginMagicClick}
              className="font-semibold leading-6 text-rust-300 hover:text-rust-500 cursor-pointer ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-500 sm:leading-6"
            >
              {!showLoginMagic
                ? "Logga in utan lösenord"
                : "Logga in med lösenord"}
            </div>
          </div> */}
        </div>
        {/* ) : (
          <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <label
                  htmlFor="email"
                  className="block font-medium leading-6 text-gray-900"
                >
                  Epost
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={emailadressOnChange}
                  required
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-500 sm:leading-6"
                />
              </div>
            </div>
          </div>
        )} */}
      </section>
    </>
  );
}
