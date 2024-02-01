"use client";

import { supabaseAuthClient } from "lib/supabaseAuthClient";
import { ChangeEvent, FormEvent, useState } from "react";

export default function LoginMagic() {
  const [data, setData] = useState<{
    email: string;
  }>({
    email: "",
  });

  const [success, setSuccess] = useState<boolean>(false);

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("data", data);
    // if (data) {
    //   setSuccess(true);
    // }
    try {
      console.log("dataUser", data);
      await supabaseAuthClient.auth.signInWithOtp({
        email: data.email,
        options: {
          shouldCreateUser: false,
        },
      });

      if (data) {
        setSuccess(true); // router.push("/admin/dashboard");
      } else {
        console.log("no user found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleOnSubmit}>
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
            className="block w-full mb-6 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>

        {success && (
          <div
            className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              Ett epostmeddelande har skickats till {data.email} med
              inloggningsuppgifter.
            </div>
          </div>
        )}
        <div>
          <button className="primary-button" type="submit">
            Logga in
          </button>
        </div>
      </form>
    </div>
  );
}
