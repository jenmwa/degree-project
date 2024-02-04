"use client";
import React, { useState } from "react";
import { Nav } from "./Nav";
import MenuOpen from "./MenuOpen";
import { INavigation } from "app/_models/INavigation";
import { usePathname, useRouter } from "next/navigation";
import { useMenuOptions } from "app/_hooks/useMenuOptions";
import { supabaseAuthClient } from "lib/supabaseAuthClient";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigation, linkText, href } = useMenuOptions();
  const router = useRouter();

  const signoutAdmin = async () => {
    console.log("sign out please");
    await supabaseAuthClient.auth.signOut();
    router.push("/admin");
  };

  const menuOpenClose = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <>
          <Nav
            menuOpenClose={menuOpenClose}
            navigation={navigation}
            linkText={linkText}
            href={href}
            signoutAdmin={signoutAdmin}
          ></Nav>

          <MenuOpen
            linkText={linkText}
            href={href}
            navigation={navigation}
            menuOpenClose={menuOpenClose}
            mobileMenuOpen={mobileMenuOpen}
            signoutAdmin={signoutAdmin}
          ></MenuOpen>
        </>
      </header>
    </>
  );
}
