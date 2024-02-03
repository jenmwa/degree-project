"use client";
import React, { useState } from "react";
import { Nav } from "./Nav";
import MenuOpen from "./MenuOpen";
import { INavigation } from "app/_models/INavigation";

const navigation: INavigation[] = [
  { name: "Hem", href: "/" },
  { name: "Emma", href: "/#emma" },
  { name: "Kontakt", href: "/#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
