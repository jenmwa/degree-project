import Image from "next/image";
import ContactComponent from "./ContactComponent";

export default function ContactSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-rust-500">
                Björby Blomster
              </h2>
              <span className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Kontakta mig
              </span>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <ContactComponent></ContactComponent>
              {/* <section className="flex flex-col">
                <div className="relative flex place-items-center bg-white"></div>

                <form
                  // onSubmit={handleSubmit}
                  className="mt-8 mb-2 max-w-screen-lg "
                >
                  <div className="mb-4 flex flex-col w-500 ">
                    <label className="mb-4" htmlFor="form-name">
                      Namn{" "}
                    </label>
                    <input
                      id="form-name"
                      autoComplete="name"
                      maxLength={50}
                      name="name"
                      className="mb-6 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300 dark:focus:ring-rust-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />

                    <label className="mb-4" htmlFor="form-email">
                      {" "}
                      Epost:
                    </label>
                    <input
                      id="form-email"
                      required
                      autoComplete="email"
                      maxLength={80}
                      name="email"
                      type="email"
                      className="mb-6 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300 dark:focus:ring-rust-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />

                    <label className="mb-4" htmlFor="form-message">
                      {" "}
                      Meddelande:{" "}
                    </label>
                    <textarea
                      id="form-message"
                      required
                      name="message"
                      rows={5}
                      className="mb-6 text-rust-500 bg-gray-100 border-gray-300 focus:ring-rust-300 dark:focus:ring-rust-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                  <p>Godkänner Spara uppgifter för svar</p>
                  <button className=" primary-button" type="submit">
                    Skicka
                  </button>
                </form>
              </section> */}
            </div>
          </div>
          <div className="mx-auto w-[24rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0">
            <Image
              src="/../img/logoisch.png"
              alt="Your Image"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
