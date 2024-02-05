import { ChangeEvent, FormEvent } from "react";
import { IContactEmail } from "../_models/IContactEmail";
import { validateEmail } from "../_utilities/validation";
import ConfirmSwitch from "./ConfirmSwitch";
import { classNames } from "./OrderForm";
import React from "react";

interface IContactFormProps {
  handleSubmit: (event: FormEvent) => void;
  email: IContactEmail;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSwitchOnChange: () => void;
  isAgreed: boolean;
}

export default function ContactForm({
  handleSubmit,
  email,
  handleOnChange,
  handleOnChangeTextarea,
  handleSwitchOnChange,
  isAgreed,
}: IContactFormProps) {
  return (
    <>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 max-w-screen-lg ">
        <div className="mb-4 flex flex-col w-500 ">
          <label className="mb-4" htmlFor="name">
            Namn{" "}
          </label>
          <input
            required
            id="name"
            autoComplete="name"
            value={email.name}
            maxLength={50}
            name="name"
            className="mb-6 input-base"
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
            value={email.email}
            maxLength={80}
            name="email"
            type="email"
            className="mb-6 input-base"
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
                value={email.confirmEmail}
                maxLength={80}
                name="confirmEmail"
                type="email"
                className="mb-6 input-base"
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
            value={email.message}
            rows={5}
            className="mb-6 block w-full input-base bg-white"
            onChange={handleOnChangeTextarea}
          />
        </div>
        <ConfirmSwitch
          isAgreed={isAgreed}
          handleSwitchOnChange={handleSwitchOnChange}
        ></ConfirmSwitch>
        <button
          type="submit"
          className={classNames(
            "primary-button mt-4",
            isAgreed ? "primary-button" : "primary-button:disabled"
          )}
          disabled={!isAgreed}
        >
          Skicka
        </button>
      </form>
    </>
  );
}
