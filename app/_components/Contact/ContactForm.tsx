import { ChangeEvent, FormEvent } from "react";
import { IContactEmail } from "../../_models/IContactEmail";
import { validateEmail } from "../../_validation/validation";
import ConfirmSwitch from "../Shared/ConfirmSwitch";
import { classNames } from "../Order/OrderForm";

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
            value={email.email}
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
                value={email.confirmEmail}
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
            value={email.message}
            rows={5}
            className="mb-6 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300 dark:focus:ring-rust-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
