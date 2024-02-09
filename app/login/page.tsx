"use client";

import React from "react";

export default function Login() {
  return (
    <>
      <section className="flex min-h-full flex-1 flex-col justify-center sm:mt-16 mt-20 px-6 py-16 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
        </div>
      </section>
    </>
  );
}
