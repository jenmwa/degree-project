"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { supabaseAuthClient } from "../../lib/supabaseAuthClient";
import React from "react";

export default function Reset() {
  const [data, setData] = useState<{
    password: string;
    confirmPassword: string;
  }>({
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const confirmPasswords = async (e: FormEvent) => {
    e.preventDefault();
    const { password, confirmPassword } = data;
    if (password !== confirmPassword)
      return alert(`Lösenord stämmer inte överens`);

    const { data: resetData, error } = await supabaseAuthClient.auth.updateUser(
      {
        password: data.password,
      }
    );

    if (resetData) {
      router.push("/reset");
    }
    if (error) console.log(error);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={confirmPasswords} className="mt-8 mb-2 max-w-screen-lg ">
      <div className="mb-4 flex flex-col w-500 ">
        <label className="mb-4" htmlFor="password">
          {" "}
          Lösenord:
        </label>
        <input
          id="password"
          required
          value={data.password}
          maxLength={80}
          name="password"
          type={showPassword ? "text" : "password"}
          className="mb-6 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300  focus:ring-2"
          onChange={handleChange}
        />

        <label className="mb-4" htmlFor="confirmPassword">
          Bekräfta Lösenord
        </label>
        <input
          id="confirmPassword"
          required
          autoComplete="confirmPassword"
          value={data.confirmPassword}
          maxLength={80}
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          className="mb-6 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300  focus:ring-2"
          onChange={handleChange}
        />

        <div
          className="cursor-pointer hover:underline"
          onClick={() => setShowPassword(!showPassword)}
        >
          <p className="">{showPassword ? "Göm Lösenord" : "Visa Lösenord"}</p>
        </div>
        <div>
          <button className="primary-button" onClick={confirmPasswords}>
            Bekräfta lösenord
          </button>
        </div>
      </div>
    </form>
  );
}
