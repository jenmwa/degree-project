"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import ConfirmSwitch from "./ConfirmSwitch";
import DialogComponent, { IDialog } from "./DialogComponent";
import { classNames } from "./OrderForm";

export interface IContactEmail {
  name: string;
  email: string;
  confirmEmail: string;
  message: string;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default function Contact() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  console.log("switch is:", isAgreed, "in Landing");
  const [email, setEmail] = useState<IContactEmail>({
    name: "",
    email: "",
    confirmEmail: "",
    message: "",
  });

  const [dialog, setDialog] = useState<IDialog>({
    type: "",
    title: "",
    message: "",
    primaryButton: "",
  });

  const closeDialog = () => {
    setShowDialog(false);
  };

  const clearEmailFields = () => {
    console.log("empty fields please!");
    setEmail({
      name: "",
      email: "",
      confirmEmail: "",
      message: "",
    });
  };

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

    if (email.email !== email.confirmEmail) {
      setDialog({
        type: "warning",
        title: "E-postadresserna matchar inte",
        message:
          "De angivna e-postadresserna matchar inte. Var vänlig kontrollera att de är desamma.",
        primaryButton: "Ok",
      });
      setShowDialog(true);
      return;
    }

    try {
      const res = await fetch("/api/contactEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });

      const body = await res.json();
      console.log(body);

      if (res.ok) {
        setDialog({
          type: "ok",
          title: "Epost är skickat!",
          message:
            "Vi återkommer med svar till adressen du angett så snart vi kan.",
          primaryButton: "Ok",
        });
        setShowDialog(true);
        clearEmailFields();
        console.log("success", email);
      }

      if (res.status === 400) {
        setDialog({
          type: "warning",
          title: "Något gick fel",
          message: "Vänligen försök igen.",
          primaryButton: "Ok",
        });
        setShowDialog(true);
      }
    } catch (err) {
      console.log("Something went wrong: ", err);
    }
  }

  return (
    <section className="flex flex-col">
      <div className="relative flex place-items-center bg-white"></div>

      <form onSubmit={handleSubmit} className="mt-8 mb-2 max-w-screen-lg ">
        <div className="mb-4 flex flex-col w-500 ">
          <label className="mb-4" htmlFor="name">
            Namn{" "}
          </label>
          <input
            id="name"
            autoComplete="name"
            maxLength={50}
            name="name"
            className="mb-6 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300 dark:focus:ring-rust-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            onChange={handleOnChange}
          />

          <label className="mb-4" htmlFor="email">
            {" "}
            Epost:
          </label>
          <input
            id="email"
            required
            autoComplete="email"
            maxLength={80}
            name="email"
            type="email"
            className="mb-6 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300 dark:focus:ring-rust-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            onChange={handleOnChange}
          />
          {validateEmail(email.email) && (
            <>
              <label className="mb-4" htmlFor="confirm-email">
                Confirm Email
              </label>
              <input
                id="confirm-email"
                required
                autoComplete="email"
                maxLength={80}
                name="confirmEmail"
                type="email"
                className="mb-6 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300 dark:focus:ring-rust-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={handleOnChange}
              />
            </>
          )}

          <label className="mb-4" htmlFor="message">
            {" "}
            Meddelande:{" "}
          </label>
          <textarea
            id="message"
            required
            name="message"
            rows={5}
            className="mb-6 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300 dark:focus:ring-rust-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            onChange={handleOnChangeTextarea}
          />
        </div>
        <ConfirmSwitch
          isAgreed={isAgreed}
          setIsAgreed={setIsAgreed}
        ></ConfirmSwitch>
        <button
          type="submit"
          className={classNames(
            "primary-button",
            isAgreed ? "primary-button" : "primary-button:disabled"
          )}
          disabled={!isAgreed}
        >
          Skicka
        </button>
      </form>
      {showDialog && (
        <DialogComponent
          dialog={dialog}
          closeDialog={closeDialog}
          showDialog={showDialog}
          clearEmailFields={clearEmailFields}
        />
      )}
    </section>
  );
}
