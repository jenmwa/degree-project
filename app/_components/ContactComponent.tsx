"use client";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

interface IContactEmail {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [email, setEmail] = useState<IContactEmail>({
    name: "",
    email: "",
    message: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleOnChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setEmail({ ...email, message: e.target.value });
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(email);

    try {
      const res = await fetch("/api/contactEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });

      const body = await res.json();

      if (res.ok) {
        alert(`${body.message} 🚀`);
      }

      if (res.status === 400) {
        alert(`${body.message} 😢`);
      }
    } catch (err) {
      console.log("Something went wrong: ", err);
    }
  }

  return (
    // <main className="flex min-h-screen flex-col items-center">
    //   <div className="relative flex place-items-center bg-white">
    //     <Link href="/">Test</Link>
    //   </div>

    //   <form
    //     onSubmit={handleSubmit}
    //     className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
    //   >
    //     <div className="mb-4 flex flex-col w-500">
    //       <label htmlFor="form-name">Namn </label>
    //       <input
    //         id="form-name"
    //         autoComplete="name"
    //         maxLength={50}
    //         name="name"
    //         className="text-black"
    //         onChange={handleOnChange}
    //       />

    //       <label htmlFor="form-email"> Epost:</label>
    //       <input
    //         id="form-email"
    //         required
    //         autoComplete="email"
    //         maxLength={80}
    //         name="email"
    //         type="email"
    //         className="text-black"
    //         onChange={handleOnChange}
    //       />

    //       <label htmlFor="form-message"> Meddelande: </label>
    //       <textarea
    //         id="form-message"
    //         required
    //         name="message"
    //         rows={5}
    //         className="text-black"
    //         onChange={handleOnChangeTextarea}
    //       />
    //     </div>
    //     <button className=" primary-button" type="submit">
    //       Skicka
    //     </button>
    //   </form>
    // </main>
    <section className="flex flex-col">
      <div className="relative flex place-items-center bg-white"></div>

      <form onSubmit={handleSubmit} className="mt-8 mb-2 max-w-screen-lg ">
        <div className="mb-4 flex flex-col w-500 ">
          <label className="mb-4" htmlFor="form-name">
            Namn{" "}
          </label>
          <input
            id="form-name"
            autoComplete="name"
            maxLength={50}
            name="name"
            className="mb-6 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300 dark:focus:ring-rust-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            onChange={handleOnChange}
          />

          <label className="mb-4" htmlFor="form-email">
            {" "}
            Epost:
          </label>
          <input
            id="form-email"
            required
            autoComplete="email"
            maxLength={80}
            name="email"
            type="email"
            className="mb-6 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300 dark:focus:ring-rust-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            onChange={handleOnChange}
          />

          <label className="mb-4" htmlFor="form-message">
            {" "}
            Meddelande:{" "}
          </label>
          <textarea
            id="form-message"
            required
            name="message"
            rows={5}
            className="mb-6 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300 dark:focus:ring-rust-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            onChange={handleOnChangeTextarea}
          />
        </div>
        <p>Godkänner Spara uppgifter för svar</p>
        <button className=" primary-button" type="submit">
          Skicka
        </button>
      </form>
    </section>
  );
}
