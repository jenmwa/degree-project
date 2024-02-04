"use Client";

import { useRouter } from "next/router";
import Image from "next/image";

import { useState, ChangeEvent } from "react";
import LoginMagic from "./LoginMagic";
import React from "react";
import { supabaseAuthClient } from "../../lib/supabaseAuthClient";

export default function ResetPasswordLoginTest() {
  const [showLoginMagic, setShowLoginMagic] = useState(false);
  const [resetPassword, setResetPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const forgottenPassword = () => {
    setResetPassword(true);
  };

  const emailadressOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const sendResetPassword = async (emailValue: string) => {
    console.log(emailValue);
    try {
      const { error } = await supabaseAuthClient.auth.resetPasswordForEmail(
        emailValue,
        {
          redirectTo: `/reset`,
        }
      );

      if (!error) {
        console.log("Password reset request successful");
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const router = useRouter(); // Move the useRouter call inside the function
        router.push("/reset"); // R// Redirect programmatically
      } else {
        console.error("Error resetting password:", error.message);
        // Handle error, such as displaying an error message to the user
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      // Handle unexpected errors, such as network issues
    }
  };

  const handleLoginMagicClick = () => {
    setShowLoginMagic(!showLoginMagic);
    setResetPassword(false);
  };
  return (
    <>
      <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src={"/public/img/logoisch.png"}
            alt="Björby Blomster"
            width={50}
            height={50}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {resetPassword ? "reset password" : "Logga in"}
          </h2>
        </div>
        {!resetPassword ? (
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {!showLoginMagic ? (
              <form className="space-y-6" action="/auth/login" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Epost
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Lösenord
                    </label>
                    <div className="text-sm">
                      <div
                        onClick={forgottenPassword}
                        className="font-semibold text-rust-300 hover:text-rust-500 cursor-pointer"
                      >
                        Glömt lösenord?
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button type="submit" className="primary-button">
                    Logga in
                  </button>
                </div>
              </form>
            ) : (
              <LoginMagic />
            )}

            <div className="mt-10 text-center text-sm text-gray-500">
              {!showLoginMagic ? "Admin" : ""}
              <div
                onClick={handleLoginMagicClick}
                className="font-semibold leading-6 text-rust-300 hover:text-rust-500 cursor-pointer ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-600 sm:text-sm sm:leading-6"
              >
                {!showLoginMagic
                  ? "Logga in utan lösenord"
                  : "Logga in med lösenord"}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
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
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <button
              className="primary-button"
              onClick={() => sendResetPassword(email)}
            >
              Skicka återställningslänk
            </button>
          </div>
        )}
      </section>
    </>
  );
}
