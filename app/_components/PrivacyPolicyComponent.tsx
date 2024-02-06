import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const NAME = "Björby Blomster";
const TITLE = "Personuppgiftspolicy";
const SUBTITLE =
  'Denna personuppgiftspolicy förklarar hur vi på Björby Blomster (nedan kallat "vi", "oss" eller "vår") samlar in, använder, lagrar och skyddar dina personuppgifter i samband med din användning av vår webbplats för beställningsförfrågningar av blombuketter.';
const SUBHEADING_1 = "Vilka personuppgifter samlar vi in?";
const PARAGRAPH_1 =
  "Vi samlar in följande personuppgifter när du skickar in en beställningsförfrågan för en blombukett:";
export default function PrivacyPolicyComponent() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-rust-500">
                  {NAME}
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
                  {TITLE}
                </h1>
                <p className="mt-6 text-xl leading-8">{SUBTITLE}</p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none  bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://itbhssqwjunahaltkmza.supabase.co/storage/v1/object/public/productImages/e882cbce-fa72-43c9-af7d-dc631c927278/pink%20(3).png"
              alt=""
              width={200}
              height={400}
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <span className="font-bold text-base">{SUBHEADING_1}</span>
                <p>{PARAGRAPH_1}</p>
                <ul role="list" className="mt-8 space-y-8 ">
                  <li className="flex gap-x-3">
                    <HeartIcon className="icon-list" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold ">Namn.</strong> För att
                      vi ska kunna identifiera dig och behandla din beställning.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <HeartIcon className="icon-list" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold ">E-postadress:</strong>{" "}
                      För att vi ska kunna kontakta dig angående din beställning
                      och skicka bekräftelser och aviseringar.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <HeartIcon className="icon-list" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold ">
                        Telefonnummer (frivilligt).
                      </strong>{" "}
                      Om du väljer att lämna ditt telefonnummer kan det
                      underlätta kommunikationen om din beställning, men det är
                      frivilligt att ange det.
                    </span>
                  </li>
                </ul>
                <span className="mt-8 block font-bold text-base">
                  Hur använder vi dina personuppgifter?
                </span>
                <p>Vi använder dina personuppgifter för följande ändamål:</p>
                <ul role="list" className="mt-8 space-y-8 ">
                  <li className="flex gap-x-3">
                    <HeartIcon className="icon-list" aria-hidden="true" />
                    <span>
                      För att behandla och administrera din beställning av
                      blombuketter.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <HeartIcon className="icon-list" aria-hidden="true" />
                    <span>
                      För att kommunicera med dig angående din beställning,
                      inklusive skicka bekräftelser, aviseringar och eventuella
                      frågor eller problem som kan uppstå.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <HeartIcon className="icon-list" aria-hidden="true" />
                    <span>
                      För att uppfylla våra lagliga skyldigheter, t.ex.
                      bokföringskrav.
                    </span>
                  </li>
                </ul>
                <span className="mt-8 block font-bold text-base">
                  Hur lagrar och skyddar vi dina personuppgifter?
                </span>
                <p className="">
                  Vi vidtar lämpliga tekniska och organisatoriska åtgärder för
                  att skydda dina personuppgifter mot oavsiktlig förlust,
                  olaglig åtkomst, förändring eller förstörelse. Dina
                  personuppgifter lagras säkert och endast under den tid som är
                  nödvändig för att uppfylla de ändamål som anges ovan.
                </p>
                <span className="mt-8 block font-bold text-base">
                  Dela vi dina personuppgifter med tredje part?
                </span>
                <p className="">
                  Vi delar inte dina personuppgifter med tredje part utan ditt
                  samtycke, förutom i de fall där det krävs enligt lag eller för
                  att utföra våra tjänster till dig (t.ex. vid leverans av
                  blombuketter).
                </p>
                <span className="mt-8 block font-bold text-base">
                  Dina rättigheter
                </span>
                <p className="">
                  Du har rätt att begära tillgång till, rättelse av eller
                  radering av dina personuppgifter som vi hanterar. Du har även
                  rätt att invända mot eller begränsa vår behandling av dina
                  personuppgifter. Om du har frågor eller vill utöva dina
                  rättigheter, kontakta oss via kontaktinformationen nedan.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight ">
                  Kontakta oss
                </h2>
                <p className="mt-6">
                  Om du har frågor, kommentarer eller klagomål angående vår
                  personuppgiftspolicy eller vår hantering av dina
                  personuppgifter, kontakta oss via följande kontaktinformation:
                  <span className="block font-semibold">
                    Emma Hagelin,{" "}
                    <a
                      className="text-rust-300"
                      href="mailto:emma@bjorbyblomster.se"
                      target="_blank"
                    >
                      emma@bjorbyblomster.se
                    </a>
                  </span>
                </p>
                <span className="mt-8 block font-bold text-base">
                  Ändringar i denna policy
                </span>
                <p className="">
                  Vi förbehåller oss rätten att uppdatera eller ändra denna
                  personuppgiftspolicy när som helst. Eventuella ändringar
                  kommer att publiceras på vår webbplats. Vi uppmanar dig att
                  regelbundet granska denna policy för att hålla dig informerad
                  om hur vi hanterar och skyddar dina personuppgifter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
