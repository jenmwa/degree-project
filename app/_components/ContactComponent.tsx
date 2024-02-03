"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import DialogComponent from "./Dialog/DialogComponent";
import { IContactEmail } from "../_models/IContactEmail";
import ContactForm from "./ContactForm";
import { IDialog } from "../_models/IDialog";
import { initialContactEmail } from "app/_helpers/initialContactEmail";
import { initialDialog } from "app/_helpers/initialDialog";
import {
  CONTACT_400_DIALOG,
  CONTACT_EMAILMISMATCH_DIALOG,
  CONTACT_SUCCESS_DIALOG,
} from "./Dialog/DialogMessage";

export default function Contact() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState<IContactEmail>(initialContactEmail);
  const [dialog, setDialog] = useState<IDialog>(initialDialog);

  const closeDialog = () => {
    setShowDialog(false);
  };

  const clearEmailFields = () => {
    setEmail(initialContactEmail);
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
      setDialog(CONTACT_EMAILMISMATCH_DIALOG);
      setShowDialog(true);
      return;
    }

    try {
      email.type = "contact";
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
        setDialog(CONTACT_SUCCESS_DIALOG);
        setShowDialog(true);
        clearEmailFields();
      }

      if (res.status === 400) {
        setDialog(CONTACT_400_DIALOG);
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
