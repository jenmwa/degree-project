"use client";
import React, { FormEvent } from "react";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
    });

    if (error) {
      alert(error.status || error.message);
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button disabled={loading}>
          {loading ? "Sending magic link..." : "Send magic link"}
        </button>
      </form>
    </>
  );
}
