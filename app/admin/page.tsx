"use client";
import React from "react";

export default function Admin() {
  // const [loading, setLoading] = useState(false);
  // const [email, setEmail] = useState("");

  // const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   setLoading(true);
  //   const { error } = await supabaseAuthClient.auth.signInWithOtp({
  //     email,
  //   });

  //   if (error) {
  //     alert(error.status || error.message);
  //   } else {
  //     alert("Check your email for the login link!");
  //   }
  //   setLoading(false);
  // };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <p>admin</p>
      {/* <form onSubmit={handleLogin}>
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
      </form> */}
    </>
  );
}
