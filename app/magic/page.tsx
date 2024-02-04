"use client";
import PageNotFound from "app/_components/PageNotFound";
import { supabaseAuthClient } from "lib/supabaseAuthClient";
import React from "react";

export default function Admin() {
  async function signInWithEmail() {
    const { data, error } = await supabaseAuthClient.auth.signInWithOtp({
      email: "jenmwa@gmail.com",
      options: {
        shouldCreateUser: false,
        emailRedirectTo: "https://localhost:3000/admin/dashboard",
      },
    });
  }

  return (
    <>
      <PageNotFound></PageNotFound>
      <form onSubmit={signInWithEmail}>
        <input type="email"></input>
        <button type="submit">LOGGA IN</button>
      </form>
    </>
  );
}
