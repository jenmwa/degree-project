// "use client";

// import { supabase } from "@/lib/supabase";
// import Image from "next/image";
// import { useState } from "react";
// // shouldCreateUser: false,

// export const Admin = () => {
//   const [data, setData] = useState<{
//     email: string;
//   }>({
//     email: "",
//   });

//   const [success, setSuccess] = useState<boolean>(false);

//   const login = async () => {
//     try {
//       let { data: dataUser, error } = await supabase.auth.signInWithOtp({
//         email: data.email,
//         options: {
//           shouldCreateUser: false,
//         },
//       });
//       console.log(data);

//       if (dataUser) {
//         setSuccess(true);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     console.log(e.target.value);
//     setData((prev: any) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <Image
//             className="mx-auto h-24 w-auto"
//             src="./bjorbyblomster_logo.svg"
//             alt="Björby Blomster"
//             width={50}
//             height={50}
//           />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Logga in på ditt konto
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           {/* <form className="space-y-6"> */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Epost
//             </label>
//             <div className="mt-2">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-visible:outline-rust-500 sm:text-sm sm:leading-6"
//                 value={data?.email}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="flex w-full justify-center  bg-rust-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rust-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-500"
//               onClick={login}
//             >
//               Logga in
//             </button>
//           </div>
//           {/* </form> */}
//           {success && (
//             <div className="my-4 bg-green-100 px-2 text-green-600">
//               Ett epostmeddelande har skickats till {data.email} för att logga
//               in.
//             </div>
//           )}
//           <p className="mt-10 text-center text-sm text-gray-500">
//             Hamnat fel?{" "}
//             <a
//               href="#"
//               className="font-semibold leading-6 text-rust-400 hover:text-rust-500"
//             >
//               Gå till Startsidan!
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Admin;
"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const login = async () => {
    try {
      let { data: dataUser, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      console.log(data);
      if (dataUser) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="pt-20 container mx-auto w-[400px] grid gap-4">
      <div className="grid">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={data?.email}
          onChange={handleChange}
        />
      </div>
      <div className="grid">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data?.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          className="px-4 py-2 bg-blue-500 rounded cursor-pointer"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
}
