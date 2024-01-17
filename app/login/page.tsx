import React from "react";

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
    </>
  );
}
