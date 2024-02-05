"use client";
import { supabaseClient } from "lib/supabase";
// import PageNotFound from "../../app/_components/PageNotFound";

// import React from "react";
// import { supabaseAuthClient } from "../../lib/supabaseAuthClient";

// export default function Admin() {
//   async function signInWithEmail() {
//     const { data, error } = await supabaseAuthClient.auth.signInWithOtp({
//       email: "jenmwa@gmail.com",
//       options: {
//         shouldCreateUser: false,
//         emailRedirectTo: "https://localhost:3000/admin/dashboard",
//       },
//     });
//   }

//   return (
//     <>
//       <PageNotFound></PageNotFound>
//       <form onSubmit={signInWithEmail}>
//         <input type="email"></input>
//         <button type="submit">LOGGA IN</button>
//       </form>
//     </>
//   );
// }

// import PageNotFound from "../../app/_components/PageNotFound";
// import React from "react";
// import { supabaseAuthClient } from "../../lib/supabaseAuthClient";

// export default function Admin() {
//   async function signInWithMagicLink(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     const email = event.currentTarget.email.value;
//     const { data, error } = await supabaseAuthClient.auth.signInWithOtp({
//       email,
//       options: {
//         shouldCreateUser: false,
//         emailRedirectTo: "https://localhost:3000/admin/dashboard",
//       },
//     });
//     if (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <>
//       <PageNotFound></PageNotFound>
//       <form onSubmit={signInWithMagicLink}>
//         <input type="email" name="email" required />
//         <button type="submit">LOGGA IN</button>
//       </form>
//     </>
//   );
// }
import { useState } from "react";
import PageNotFound from "../../app/_components/PageNotFound";
import React from "react";
export default function Admin() {
  const [data, setData] = useState<string>("");

  async function signInWithMagicLink(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("data:", data);
    try {
      let { data: dataUser, error } = await supabaseClient.auth.signInWithOtp({
        email: data,
        options: {
          shouldCreateUser: false,
        },
      });

      if (dataUser) {
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e: any) => {
    const name = e.target.value;
    console.log(e.target.value);
    setData(name);
  };

  return (
    <>
      <form onSubmit={signInWithMagicLink}>
        <input type="email" name="email" onChange={handleChange} required />
        <button type="submit">LOGGA IN</button>
      </form>
    </>
  );
}
