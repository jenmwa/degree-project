"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { INavigation } from "../_models/INavigation";

interface INavProps {
  menuOpenClose: () => void;
  navigation: INavigation[];
  linkText: string;
  href: string;
  signoutAdmin: () => void;
}

export function Nav({
  menuOpenClose,
  navigation,
  href,
  linkText,
  signoutAdmin,
}: INavProps) {
  return (
    <>
      <nav
        data-testid="nav-component"
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Björby Blomster</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center p-2.5 "
            onClick={menuOpenClose}
          >
            <span className="sr-only">Öppna menyn</span>
            <Bars3Icon className="h-12 w-12" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-semibold leading-6"
            >
              <span> {item.name}</span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={href}
            className="link-button"
            onClick={() => {
              if (linkText === "Logga ut") {
                signoutAdmin();
              }
            }}
          >
            {linkText} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
