"use client";

import React from "react";
import { supabaseAuthClient } from "../../lib/supabaseAuthClient";
import PageNotFound from "../_components/PageNotFound";

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
    </>
  );
}
