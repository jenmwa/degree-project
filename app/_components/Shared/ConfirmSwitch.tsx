"use client";
import { Switch } from "@headlessui/react";
import { classNames } from "../order/OrderForm";
import { useRouter } from "next/navigation";
import React from "react";

interface IConfirmSwitchProps {
  isAgreed: boolean;
  handleSwitchOnChange: () => void;
}

export default function ConfirmSwitch({
  isAgreed,
  handleSwitchOnChange,
}: IConfirmSwitchProps) {
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open("/personuppgiftspolicy", "_blank");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleLinkClick(e as unknown as React.MouseEvent<HTMLAnchorElement>);
    }
  };
  return (
    <>
      <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
        <div className="flex h-6 items-center">
          <Switch
            checked={isAgreed}
            onChange={handleSwitchOnChange}
            className={classNames(
              isAgreed ? "bg-rust-300" : "bg-gray-200",
              "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-500"
            )}
          >
            <span className="sr-only">Godkänner personuppgiftspolicy</span>
            <span
              aria-hidden="true"
              className={classNames(
                isAgreed ? "translate-x-3.5" : "translate-x-0",
                "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
        </div>
        <Switch.Label className="text-sm leading-6">
          Genom att klicka i här godkänner du vår
          <a
            onClick={(e) => handleLinkClick(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            className=" cursor-pointer font-semibold text-rust-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-rust-500"
            tabIndex={0}
          >
            &nbsp;personuppgiftspolicy&nbsp;
          </a>
          {""}
          och att bli kontaktad gällande beställningen.
        </Switch.Label>
      </Switch.Group>
    </>
  );
}
