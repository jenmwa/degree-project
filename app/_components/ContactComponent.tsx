"use client";
import { ChangeEvent, FormEvent, useState } from "react";

import { IContactEmail } from "../_models/IContactEmail";
import ContactForm from "./ContactForm";
import { initialContactEmail } from "../_helpers/initialContactEmail";
import { initialDialog } from "../_helpers/initialDialog";
import { IDialog } from "../_models/IDialog";
import { contactEmailService } from "../_services/contactEmailService";

import {
  CONTACT_ERROR_DIALOG,
  CONTACT_EMAILMISMATCH_DIALOG,
  CONTACT_SUCCESS_DIALOG,
} from "./DialogMessage";
import DialogComponent from "./DialogComponent";
import React from "react";

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

    const result = await contactEmailService(email);

    if (!result?.success) {
      if (result?.error === "Email addresses do not match") {
        setDialog(CONTACT_EMAILMISMATCH_DIALOG);
      } else {
        setDialog(CONTACT_ERROR_DIALOG);
      }
      setShowDialog(true);
    } else {
      setDialog(CONTACT_SUCCESS_DIALOG);
      setShowDialog(true);
      clearEmailFields();
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
