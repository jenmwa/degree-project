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
        <input value="jen@jenwaller.com" name="email" />
        <label htmlFor="password">Password</label>
        <input value="hejNEJ" type="password" name="password" />
        <button>Sign in</button>
      </form>
    </>
  );
}
