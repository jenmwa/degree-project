# 240123

Created time: January 14, 2024 5:23 PM

**Yesterday I…**

felsökning a-ö!!! herrejäklar!

- nästlad css och selektorer tillsammans med tailwind och Next.js? Till slut rätt config!
- Test med jest och supertest? det tog minsann sina timmar att få till configs. haha. men setup redo och tester kan skrivas!
- och sist men inte minst, deploy-error gällande Next.js, Typescript & Vercel… efter uteslutningsmetoden och tillslut en bättre goggling: Radera 3 filer i pages och SWOOOOSCH så funka allt 🫠

**today I will…**

logik bokning

**I need help with…**

kör bara kör!

**I'm stuck with…**

det tar tid, men det mesta går att fixa! Sen om det är best practice eller ej, det är en annan fråga…

**TIL…**

Inga filer som inte returnerar något i pages-mappen! Simple as that 🎉

Reflektion:

Felsökningsdag minst sagt!
Skulle bara lite snabbt se till att fixa varningen gällande nästlade CSS-klasser tillsammans med Next och tailwind. En timme senare, test med olika packages för att tillslut inse att det var config som behövdes… Ja.
men det fungerar felfritt nu och visserligen borde min. nästlade input-file-css gå att göra med tailwind, men nu funhgerar det som det fungerar :)
Får se om det ska refaktoreras när tid finnes.

Nästa felsök var inför test! Jag är ltie stressad om hur allt ska fungera. så tänkte att jag lite snabbt kunde sätta upp basen. Lite snabbt blev 4h senare men det fungerar!
Det är alla dessa config-grejjer som gör det svårt för mig. Jag gissar, iom att du kan köra både app-roter och pages-router att alla paket och liknande behöver configeras utefter vad man kör? ytterst få paket (förutom de som hängde med vid inställningen som bara körs, utan det behövs mer. Kul att felsöka och få det att fungera men tidskrävande! Å andra sidan tar jag verkligen emd det och vet mer vart jag ska felsöka nästa gång…

Hursomhelst! en bas är uppsatt, skrev ett snabbt test om min startsida har en heading, och det fungerar 🙂

3:e feslsöker igår var gällande vercel och deploy. Jag ska få upp sidan vid sitt domän, men kände att jag vill dels ha en mellankoll, och dels ha en reserv om det skulle krångla!
sagt och gjort, CLI med Vercel installerat och alla .env inlagda, men error.
Uteslutningsmetoden och tog bort del för del som varnades för och till slut en stycke felrad (se nedan i kodrutan) som gixk att googla på och få fram ett stackoverflow-svar….

```jsx
dagens Kodhighlight: **Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.[missing argument]**
```

SE TILL ATT INGA FILER I PAGES-MAPPEN INTE RETURNERAR NÅGOT! raderade filer utan return och SWOOOOOSH så fungerade allt.
Tack.

Hann därefter även med att sätta upp ett formulär bara med html och tailwind, logik är det nästa!

Fortfarande lite stressad, men å andra sidan, bokningslogiken påminner om ändra produktlogiken, bara att vi skapar ny, och bygga in skicka mail på det, vilket inte borde vara några problem.
En sak i taget, ett steg fram och sen en helhet 🙂

Remember:
**3 things to focus on and actually finish today.**
Nothing more, nothing less. 1 thing that is funny. 1 good habit.

- dagens fokus få-klart Måste: logik bokning
- dagens fokus få-klart Roligt: stämma av tavlan! det är kul att se progress!
- dagens fokus få-klart God vana: lång dag igår, ok med sovmorgon idag, nu på G! :)

# 240122

Created time: January 14, 2024 5:22 PM

**Yesterday I…**

blev inte mycket gjort i fredags… migrän och sjuk-helg :/ nya tag!

**today I will…**

- bokning
- påbörja test-script

**I need help with…**

inget specifikt just nu, utan kör.

**I'm stuck with…**

se ovan.

**TIL…**

Kikade snabbt på vercel igår-kväll ga lite panik, men hur smidigt? 2min och deploy gick bra? Nödlösning iaf!

Reflektion:

Haha, minst sagt ödmjuk, hur mycket jag än vill bara köra på så h’änder livet och förkylningstider är ett faktum.
Men vi löser detta. Kör en avstämning ikväll igen och uppdaterar.

pratade med Robin i fredags, så kul att stämma av med någon mer som kör Next.js (och att jag inte är ensam med klient/server -funderingarna). kul att få höra och se vad andra gör :)

```jsx
dagens Kodhighlight:
```

Remember:
**3 things to focus on and actually finish today.** Nothing more, nothing less. 1 thing that is funny. 1 good habit.

- dagens fokus Måste: bokningsformulär.
- dagens måste fokus Roligt: snabb recap test! så längesen men ska bli kul!

- dagens fokus God vana: upp, plugga, lunch, plugga, inte glömma raster, sitta vettig tid!

# 240119

Created time: January 19, 2024 7:54 AM

**Yesterday I…**

buggfix formulär men nu med att kuna ändra produkter, alla eller enskilda fält, och använda som kan ladda upp bilder där bildernas URL hamnar i produktobjektet!

**today I will…**

köra på med bokningsformuläret

**I need help with…**

…

**I'm stuck with…**

…

**TIL…**

släpp “borde” och kör på med det som fungerar! refaktorering finns det tid för sen.

Reflektion:

efter några dagars superfokus kommer jag sänka tempot lite idag… dels för att orka resterande veckor och dels för att jag kan bli lite hyper och sen krascha.
och imorn får bli lite snabbgenomgång av boarden.

och något jag grunner på:
praxis när mna ladda upp bilder på en databas?
du får tillbaka ett URL på andra ställen med? är det url:en man sparar i relation till bilden för att rendera bild med artikel?
Jag har verkligen inte reflekterat kring det då vi alltid kört bilder direkt från public alt hämtat online… och vid api:er och annat vi använt, så är det bildURL.
och då borde det logiskt sätt vara- uppladdning , få svar om URL, spara URL.

övrigt, pratade med Robin idag, kul att se vad han gjort och hur och att man inte är ensam i alla tankar.

dagens kod:

```jsx
input::file-selector-button {
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-style: normal;
  background-color: #A8491F;
  color: #f3f4f6;
  padding: 0.7em 1.4em;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  outline: none;
  border: 2px solid transparent;

  &:hover,
  &:focus {
    background-color: #A0522D;
    outline-offset: 2px;
    border-color: #CD853F;
    border-radius: 0;
  }
}
```

Next.js och input-selector-button-kod i vanlig css? milslånga varningsmeddelande i konsollen? 🤣
jag förstår som sagt inte riktigt hur Next.js fungerar, men en varning som får refaktoreras bort genom att göra en egen klass av den (det borde gå, vet bara inte hur än).
Men ändå smidigt att använda bas-ladda upp fil, då namnet på elementet presentera filen sjysst. (och min preview såklart, men viktigast är att få ut bildnamnet för användaren).

Remember:
**3 things to focus on and actually finish today.** Nothing more, nothing less. 1 thing that is funny. 1 good habit.

- dagens fokus Måste: få klart? formulär för bokning!
- dagens fokus Roligt: det är något visst med att klicka SKICKA och saker fungerar? Målbild!
- dagens fokus God vana: Klarar jag att upp å gå från datorn minst 1 gång i timmen?

---

# 240117

Created time: January 18, 2024 8:17 AM

**Yesterday I…**

hade jag världens flyt! kontakt med storage, ladda upp bild, hämta bild, rendera bild i html! och struktur och tailwind på det.

**today I will…**

försöka förstå varfööööööööööör onChange i formulär enbart tar 2 fält av 4?

**I need help with…**

jag tror jag kan klura ut ovan själv

**I'm stuck with…**

…

**TIL…**

Google is your friend ❤️

Reflektion:

alltså ibland, vilket fokus igår!
och vad det gör mycket att få ihop nn slags enklare interface med logik! vilken grejj!

kan dock inte riktigt förstå textareas i formulär? varför vill fältet inte visas med onChange?

(känns ju dock som en typescriptgrej?)

så kul ändå med att ladda upp bild till storage från användaren!
lite bekymmer (såklart) med policy och security, men till sist så! och det här med FileData format?
jag måste ha missat något? så krångligt! eller är det med en TypeScriptgrej?

ska kollas upp oavsett!

dagens kod:

```jsx
const handleUpload = async () => {
  const id = uuidv4();
  if (!file) {
    console.error("No file selected.");
    return;
  }
  try {
    const { data, error } = await supabase.storage
      .from("productImages")
      .upload(`/${productID}/${id}`, file);

    if (error) {
      console.error("Error uploading image:", error.message);
      return;
    }

    if (data) {
      console.log("Image uploaded successfully:", data);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};
```

ladda-upp-fil-klient-kod!

med supabase kan du redan när du skickar in filen “lägga” dina filer i mappar i databasen, med att markera ‘/’ emellan. Hur smidigt?
Här mappar vi dem helt enkelt istorage: productImages, där varje productID får en egen mapp med bilder?

Här för att testa har jag satt UUID so bildnamn, inte det smartaste för jag kan ladda upp samma bild flera gånger… får se över detta senare.
huvudsaken, det fungerar :)

Remember:
**3 things to focus on and actually finish today.** Nothing more, nothing less. 1 thing that is funny. 1 good habit.

- dagens fokus Måste: bygg ihop ändra-formulär med logik
- dagens fokus Roligt: bryta ner ovan i lite komponenter? mer ordning och reda ❤️
- dagens fokus God vana: starta dagen med 15 min morgonmöte med mig själv

---

# 240116

Created time: January 15, 2024 9:56 AM

**Yesterday I…**

- ProduktContext på plats! Hurra! och…
- REALTIDSUPPDATERINGAR gällande ändra data/hämta data i databasen! Hur gick det till?
  Och..
- första-utkast för Hero-section?
  bra flyt igår!

**today I will…**

ska jag komma ikapp med lite livet, ikväll försöka få till spara bilder till databas/hämta bilder/direktuppdatering.

**I need help with…**

alltså Next.js och bilder gentemot skärmstorlek? gav lite upp och satte villkor för storlekar istället. Det som funkar, funkar…

**I'm stuck with…**

fortarande lite stress kring att jag ligger efter men en sak i taget.

**TIL…**

Supabase har det mesta som stöd? bara man läser dokumentationen? Både autentiering, realtidsuppdateringar, lagring? visserligen att jag lär mig en hel del om just supabase, men mycket nytt. kul och klurigt.

Reflektion:

just nu, få bitarna på plats OCH INTE tänka så mycket snygg kod.

Jag försöker få ihop projektet och kommer sen få lägga inån dag för refaktorering och städa… för let’s face it, just nu väldigt stora filer, väldigt rörigt, och en del kommentarer/utkommenterat.

Jag försökte snabbt igår med SWR igen, men tyckte inte om det så gick över till vanlig react Context, och det funka fint! därefter test att redigera priser bara , vilket till en början gick inte alls, och när jag ändrade policies så funka det fint. Det är något nytt, som jag fattar är lite spec för postgreSQL? att man kan sätta olika behörigheter gällande olika tabeller och delar?
Hursom, till slut funka det och så kul att se att det jag ändrade i admin slog igenom till både databas och övriga routes direkt! 😀

Dagens kodhighlight:

```jsx
export default async function handler(req: any, res: any) {
  const { entity } = req.query;

  if (req.method === "GET") {
    try {
      let { data, error } = await supabaseServer.from(entity).select("*");
      console.log("get:", data);

      if (error) {
        throw error;
      }
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error: "Error fetching data" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
```

Visst får man Highlighta något även från tidigare vecka?
När jag gjorde mina endpoints insåg jag att både hämta produkter samt hämta bokningar i princip var samma , förutom tabellen de hänvisade till. Sagt och gjort, och med google som min vän så gick det ju hur bra som helst att göra en variabel av req.body, och därmed använda en och samma endpoint till 2 olika utgångar!

Smidigt! så när vi kallas vår get från klient, så gör vi det med anrop till ‘api/handler’ och skickar med antingen ‘**?entity=Product**’ eller ‘**?entity=Booking**’ så får vi de svar vi vill ha 🙂

Remember:
**3 things to focus on and actually finish today.**
Nothing more, nothing less. 1 thing that is funny. 1 good habit.

- dagens fokus Måste: Skicka vidare handlingsplan och måste-heter inför LIA2
- dagens fokus Roligt: bilder-till-databas, det ska bli kul!
- dagens fokus God vana: Ut på luchen!

---

# 240115

**Yesterday I…**

exporterade och skickade in loggboken. no more, no less.

**today I will…**

1; snabbt testa SWR igen och att använda destructuring

2; annars: produkter i context

3; hero

**I need help with…**

KBK

**I'm stuck with…**

KBK

**TIL…**

lärdom/insikt från gårdagens retroperspective?
Jag kan inte göra allt samtidigt, ta en sak i taget!

Reflektion:

mycket reflektion och funderande igår vid retro, och en dag lite off kodning!

Idag kör jag på! inte så mycket att fundera på :)

Remember:
**3 things to focus on and actually finish today.** Nothing more, nothing less. 1 thing that is funny. 1 good habit.

- dagens fokus Måste: context
- dagens fokus Roligt: hero!
- dagens fokus God vana: 45min intervaller satta!
