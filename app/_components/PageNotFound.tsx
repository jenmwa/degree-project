import React from "react";

export default function PageNotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-rust-500">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Sidan kan inte visas
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Något verkar ha gått fel, sidan du försöker besöka kan inte visas.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="primary-button">
              Tillbaka till startsidan
            </a>
            <a
              href={`mailto:${process.env.EMAIL_SERVER_USER}`}
              className="text-sm font-semibold"
            >
              Kontakta oss <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
