"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import ConfirmSwitch from "./ConfirmSwitch";
import DialogComponent from "./DialogComponent";
import { classNames } from "./OrderForm";
import { IContactEmail } from "../_models/IContactEmail";
import { validateEmail } from "../_validation/validateEmail";
import ContactForm from "./ContactForm";
import { IDialog } from "../_models/IDialog";

export default function Contact() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
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
    setEmail({
      name: "",
      email: "",
      confirmEmail: "",
      message: "",
    });
    setIsAgreed(false);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleOnChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEmail({ ...email, message: e.target.value });
  };

  const handleSwitchOnChange = () => {
    setIsAgreed(!isAgreed);
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

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
      console.error("Something went wrong: ", err);
    }
  }

  return (
    <section className="flex flex-col">
      <div className="relative flex place-items-center bg-white"></div>
      <ContactForm
        handleSubmit={handleSubmit}
        email={email}
        handleOnChange={handleOnChange}
        handleOnChangeTextarea={handleOnChangeTextarea}
        handleSwitchOnChange={handleSwitchOnChange}
        isAgreed={isAgreed}
      ></ContactForm>

      {showDialog && (
        <DialogComponent
          dialog={dialog}
          closeDialog={closeDialog}
          showDialog={showDialog}
        />
      )}
    </section>
  );
}
