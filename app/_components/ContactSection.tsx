import Image from "next/image";
import ContactComponent from "./ContactComponent";
import logoisch from "/public/img/logoisch.png";

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
            </div>
          </div>
          <div className="mx-auto w-[24rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0">
            <Image
              src={logoisch}
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
