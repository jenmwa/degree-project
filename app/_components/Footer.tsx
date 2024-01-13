import Image from "next/image";
import React from "react";
export const Footer = () => {
  return (
    <>
      <div className="lg:bottom-0 lg:left-0 lg:flex lg:w-full lg:justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </>
  );
};
