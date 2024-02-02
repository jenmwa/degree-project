"use client";
import React, { useState } from "react";
import { Nav } from "./Nav";
import MenuOpen from "./MenuOpen";
import router from "next/router";
import { usePathname } from "next/navigation";

export interface INavigation {
  name: string;
  href: string;
}

const navigation: INavigation[] = [
  { name: "Hem", href: "/" },
  { name: "Emma", href: "/#Emma" },
  { name: "Kontakt", href: "/#Kontakt" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  const menuOpenClose = () => {
    console.log("click menu");
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <>
          <Nav menuOpenClose={menuOpenClose} navigation={navigation}></Nav>

          <MenuOpen
            navigation={navigation}
            menuOpenClose={menuOpenClose}
            mobileMenuOpen={mobileMenuOpen}
          ></MenuOpen>
        </>
      </header>
    </>
  );
}
