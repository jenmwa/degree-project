import React from "react";
import Image from "next/image";
import logoisch from "/public/img/logoisch.png";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <form action="/auth/login" method="post">
        <label htmlFor="email">Email</label>
        <input value={process.env.NEXT_PUBLIC_ADMIN_EMAIL} name="email" />
        <label htmlFor="password">Password</label>
        <input
          value={process.env.NEXT_PUBLIC_ADMIN_PASSWORD}
          type="password"
          name="password"
        />
        <button>Sign in</button>
      </form>
      <>
        {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              className="mx-auto h-10 w-auto"
              src={logoisch}
              alt="Your Company"
              width={50}
              height={50}
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-rust-300 hover:text-rust-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button type="submit" className="primary-button">
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Admin?{" "}
              <Link
                href="#"
                className="font-semibold leading-6 text-rust-300 hover:text-rust-500"
              >
                Logga in utan lösenord
              </Link>
            </p>
          </div>
        </div>
      </>
      )
    </>
  );
}
