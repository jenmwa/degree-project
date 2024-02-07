import Link from "next/link";
import React from "react";

export default function ProductInfo() {
  return (
    <>
      <p className="mt-6 text-lg leading-8">
        Emma heter jag som driver Björby Blomster utanför Karlstad. Det var dags
        att följa mitt hjärta och att satsa på det jag verkligen älskar -
        blomsterarrangemang - för livets alla tillfällen. Jag älskar arbeten som
        får vara vilda, med mycket grönt och med många naturliga inslag.
      </p>
      <p className="mt-6 text-lg leading-8 ">
        Att få skapa olika blomsterarrangemang som kan lyfta ett helt rum är för
        mig det bästa som finns. Jag skapar blommor till livets alla tillfällen
        och hjälper dig gärna att få din speciella dag att blomstra, bröllop som
        begravning.
      </p>
      <p className="mt-6 text-lg leading-8">
        Jag försöker alltid att jobba med blommor i säsong, och samarbetar med
        flera odlare i Karlstad med omnejd. Alla beställningar hämtas upp
        alternativt levereras enligt överenskommelse.
      </p>
      <p className="mt-6 text-lg leading-8">
        Följ gärna min resa på{" "}
        <Link
          href="https://www.instagram.com/bjorbyblomster/"
          target="_blank"
          passHref
          className=" font-semibold leading-6"
        >
          Instagram
        </Link>{" "}
        och tveka inte att kontakta mig för att bolla idéer och event vidare.
      </p>
    </>
  );
}
