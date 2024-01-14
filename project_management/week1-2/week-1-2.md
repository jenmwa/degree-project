# RETROPERSPECTIVE

MAD:

- hänger inte med min egna planering, jag håller fortfarande på med logik och enligt planering var vecka 2 componenter. jag har påbörjat en del, jag har en del logik kvar men jag tror på riktigt att jag kommer fixa detta. kommer köra en ny sprint på fredag där jag stämmer av med mig själv och kommer utvärdera vad som kommer få omprioriteras.
- **dags att jobba med branches utifrån dev & min planering!**
  slarvstart.
- förska ta igen med att sitta uppe hela nätterna? inte en hållbar strategi. Inte alls faktiskt.

SAD:

- mindre bra självförtroende, och resulterat i en del tvivel. igår heldag med klur och jag fixar ju det jag vill! SÅ jag måste steppa upp det här med att TRO PÅ MIG SJÄLV!
- effektiviteten och att vara mer strukturerad hade def kunnat hja bättre fokus
- som vanligt väldigt mycket personliga reflektioner och mindre reflektioner på papper gentemot tekniken. ska se om jagkan lägga in en punkt i min dagbok som berör något tekniskt så jag får utveckla mitt språk och mina tankar kring något specifikt gällande just det.

GLAD:

- jag gör verkligen ett eget projekt! från start till finish med mina egna premisser (typ, med kund förstås).
- SÅ NÖJD med revanch för att sätta upp en session cookie för inlogg. så GLAD! och att inlogg och redirects fungerar. lite mer avancerat än vad jag eg tänkt att jag skulle göra, men jag har fått till det!
  och jag har en plan.context och admin dashboard UI imorn (rendera ut produkter, klicka redigera, redigeringsfält). och lista med orders: möjlighet att ändra status.PUT och redigerings logik admin tisdag. onsdag bokningar. torsdag och fredag fokus huvudsida och massa UI så att det ser bra ut. Ev jobb i helgen för att komma i fas sen mina sjukdagar.
- Jag vet att jag inte är bra på backend och logik på rak arm, så varit en väldig utmaning att grotta ner mig i databashanering… vanliga API och fetcha, kul och lagomt klur, men detta med server vs klient och routes, och middlewares och allt? jag är inte bekväm alls, jag drar mitt hår MEN DET GÅR! då glad för att jag ändå inte tar den lätta vägen utan vågar utmana mig.
- jag är lite stressad men samtidigt pepp så det går åt rätt håll! fredag som sagt, ny sprint, utvärdering, och se hur jag ligger till.
- OCH! konsekventa commitmeddelanden!

![boardw1-2.png](RETROPERSPECTIVE%200e67d4c307494b2d8e2f6b137a935e2f/boardw1-2.png)

# 240114

Created time: January 14, 2024 9:01 AM

**Yesterday I…**

fick ihop inlogg helt och hållet!

**today I will…**

göra annat! hah!

**I need help with…**

…

**I'm stuck with…**

…

**TIL…**

var noga med dina mappar!

Reflektion:

Gårdagens panik i min projektstruktur: jag kör app-router och jag gör rätt! så det så! (Puhh.. ibland så… panik-natt med tankar om att behöva göra om hela projektet? haha! märks att jag göra nya saker och att jag gör det som fungerar med den info jag kommer över.)

Även FRUSTRATIONEN VARFÖR min middleware med autodirigering inte fungerar? tog mig halva dagen att gå igenom kod, testa på annat och till slut bara testa att lägga den på rot-nivå istället för i app/ och vips så fungerar allt? 🫠

\*ANDAS

även;

FAAAAAANTASTISKT att jobba med något nytt där:

- pakets versioner inte matchar projektets standard
- och där det sen visar sig att paketet är depreciated.

Efter många om och med har jag i alla fall fått ihop ett login, där användaren blir autenticated på serversidan och där redirect går till rätt url till klient. Och att urlen visar min struktur och inte koden från supabase som svar. Och att urlen redirectar andra användare om de inte är behöriga!

HURRA!

och började med det här med datahämtning, jag behöerv produkter både i admin samt butiken, men jag vill bara hämta en gång i klienten. Vanligt context?n något specat för next.js? testade SWR och det verkar smidigt, enda är att du får deras objekt data med min array, så inte bara att rendera ut. Går men tänker att vanligt context är smidigare så kommer nog köra på det!

tagit lång tid men det går, men ligger efter. jobbar det jag kan i veckan som kommer och så får vi se vad som ev behöver strykas.

kommer göra dte lätt för mig att använda tailwind UI som baskomponenter, men att jag gör om dem så att de passar mina behov.

Remember:
**3 things to focus on and actually finish today.**

Nothing more, nothing less. 1 thing that is funny. 1 good habit.

- Idag noll kod, för jag ska skicka in detta och göra annat! haha!
- är det måtro dags för årets första semla?
- UT och mindre data idag trots hets och stress.

———

# 240113

mood: 🥰🦹🏼‍♂️🥱

**Yesterday I…**

gjorde jag allt men producerade ingenting? från att fundera på server vs klient för inlog, till URL:en som ser ut som hashat lösenord, till autodirigering? många delar just nu som inte fallit på plats. Vad håller jag på med?

**today I will…**

en sak i taget. steg för steg. se över mappstruktur. sen: Logga in - autentiera - autodirigera - lås sidan för andra.

**I need help with…**

fullständig panik om jag gjort hela projektet fel? jag har fått för mig att jag ska göra alla mina mappar i app, för att i dem göra page.tsx? alla exempel jag hittar nu är att man gör index i mappar i pages-mappen? jag kommer ta en timma nu och se över detta.

**I'm stuck with…**

se ovan. fast men hanterbart och tidsbestämt.

**TIL…**

(eller kanske mer YIL)

ta paus och gå ifrån, frisk luft, det kan faktiskt göra en effektivare… \*hinthint

Reflektion:

från fungerande inlog och magic link till det här med auto-omdirigering efter klick, URL:EN som ser ut som ett hashat lösenord, låsa /admin?

kan jag få lite revanch måtro?
i vår backendkurs fixade jag aldrig göra en sessionkaka och stämma av denna för inlog, och just nu ~~tror~~ ~~jag~~ att jag tagit beslut om att jag vill göra detta… om jag borde iom att jag ligger lite efter? förmodligen inte, men för min egen skull? JA!

men som nämnt innan, jag hade panik inatt om att jag gjort hela projektet fel, att jag har fel struktur och inte riktigt vet vad jag gör? Måste jag starta om? men å andra sidan, det fungerar ju?

jag VET att jag gett mig ut på okänd mark. Next.js har vi gått igenom snabbt en gång typ? inga direkta genomgångar hur struktur eller liknande ska se ut, så jag testar mig fram, och googlar en massa. Men jag vill samtidigt utmana mig, då just det här är något jag måste träna på, att sätta en struktur själv, avgränsa mig själv och, TRO PÅ MIG SJÄLV.

Remember, :
**3 things to focus on and actually finish today.**

Nothing more, nothing less. 1 thing that is funny. 1 good habit.

🧌 Mappstrukturen, se exempel, bevisa för mig själv att jag är rätt ute!

🧌 dte vore extremt kul att få ihop alla delarna till inlogget… hehe. just saying!

🧌 fokusera på en god vana idag? LAGA riktigt mat!

—-

# 240112

mood: pepp

**Yesterday I…**

- Magic Link funkar fint, ska låsas för enbart admin! och en påbörjad header!

**today I will…**

- ska jag få till sessionCookie för admin, en logga ut och en dashboard.

**I need help with…**

- få tiden att räcka till? När själv förtroendet tryter har jag svårt att vara effektiv… men bit ihop, gör bara gör och vi kommer dit!

**I'm stuck with…**

- just nu inget spec, men funderar mycket kring serverside s clientside gällande cookies och routing.

**TIL…**

- Youtube kan vara väldig effektiv hjälp!

Reflektion:

jag är inte i fas men det går framåt! tankar igår, magic link omöjligt. Tankar efter ett par timmar, det fungerar?
Nu det här med kakor? skulle behövt mer verklighets-anknytning om hur jag kan tänka här, för noll koll.
men vi testar! jag är oerhört nyfiken på mer gällande säkerhet online, men där känner jag att jag har kunskapsluckor.

Let’s do this!

Remember:
**3 things to focus on and actually finish today.** Nothing more, nothing less. 1 thing that is funny. 1 good habit.

**SKA:** Admin - logga in - kaka- dashboard - logga ut

**GOD VANA:** ta breaks!

**KUL:** sitta och klura är ändå kul, men att begränsa sig, komma vidare och inse att 70% är bra nog? Jag lär mig!

————

# 240111

**Yesterday I…**

lite bakslag men lärdomar 🙏

**today I will…**

backa ett steg, gör om , gör rätt.

**I need help with…**

Motivation! Får bli en bollning med Sussie idag, måste få inspiration samt motivation att jag faktiskt klarar det här.

**I'm stuck with…**

… allt och inget.

**TIL…**

klicka inte på sånt som inte känns helt 100 🧠

Reflektion:

How to not klicka-på-allt-oh-testa….
igår raderade jag alltså hela databasen för jag skulle ‘testa prisma\* 😅 oh lord.

“tur” att jag inte gjort mer än connections och scheman.
(och jättekul att jag bekräfta det hela när jag fick en varning i konsollen.. JOOORÅÅÅSÅÅÅATTTEEEEE).

testade prisma vid jul i ett projekt, men då lade vi ju till det i initieringen av projektet.
Smidigt att synka Scheman, få versioner, men varför jag gjorde det i mitt projekt nu är ett frågeteken, men det gjorde jag. Och lärde mig minst sagt något…

Återställning av Scheman i SupabaseDB, har även lagt till service-fil för db-anslutningen, och för att motivera mig själv lite, lagt till heroIcons , test av lite tailwind-styling samt lagt in egna färger!

Ändå tacksam för detta idag:

- Att jag trots vissa tvivel faktiskt ser möjligheter att få ihop detta.
- Tailwind CSS, vissa saker är ju helt fantastiskt smidiga med lite referenser? (sa jag detta ens? jag som älskar att sitta och pilla med små-css-skit-saker? att använda moduler kan ändå gå ganska snabbt…)

lånat modul från tailwind UI som jag tänkte göra om till min egna, men bara för att ha en mall och något att utgå ifrån. Får se om det är något att ha.

Även

och dagens mantra:

> “HAPPY CODING”

Remember:
**3 things to focus on and actually finish today.**
Nothing more, nothing less. 1 thing that is funny. 1 good habit.

- [ ] login ska fungera
- [ ] strukturera upp endpointsen
- [ ] “Gör, bara gör”.

——

————

# 240109

**Yesterday I…**

koppling crud och db, hurra!

**today I will…**

admin

**I need help with…**

…

**I'm stuck with…**

…

**TIL…**

var ödmjuk! nya grejjer går ibland jättesnabbt att ta till sig, och ibland tar det längre tid. det är ok.

Reflektion:

haft världens svacka senaste veckan och dags att bara köra!

Nästan i fas med det jag är efter med, och dagen kommer spenderas med att försöka komma ikapp! Hjärnspöken är inte min bästa vän just nu, som märkes tvivlar jag på allt och lite till, men en sak i taget och vi kommer komma fram 💫

Idag admin!

- inloggsida
- logga in admin
- autensiera
- (logga ut)

och för att göra det lättare för mig, jag ger mig på supabase egna auth. det får gå som det går!
men de har iaf magic link och det vill jag testa!

Remember:
**3 things to focus on and actually finish today.**

Nothing more, nothing less. 1 thing that is funny. 1 good habit.

- bestämma och köra på supabase egna auth!
- fokus på en kul sak? det är kul att lära sig nytt! skrämmande , men mest kul!
- fokus på en bra vana? GÅ UT på dagen! få dagsljus! Skärmpaus!

————

# 240108

mood: 🥱🥰

**Yesterday I…**

- databasstruktur är ändå hyffsad. Vi har produkter, användare och kopplingarna däremellan till bokningar, och jag får fatt i att både skapa och ändra befintliga produkter via test.rest. Hurra!

**today I will…**

- Endpoints, kika på inlog med länk via auth.js

**I need help with…**

just nu, inget specifikt utan jag behöver komma igång! Mycket nytt, motivation som tryter och tvivel.

**I'm stuck with…**

se ovan.

**TIL…**

strukturen i Supabase mer än innan! och hur jag kopplar [test.rest](http://test.rest) till det, varit spännande att lära sig att jag måste sätta tabell- policys för säkerhet, kunde inte förstå varför alla mina tabeller gav ifrån dig Anautorized… men till sist så!

Reflektion:

När verkligen hinner ikapp en. Dagar av både sjuka, tvivel, imposter syndrom x100. Inte effektivt arbete utan en del försök till sömn och försök till att hänga ihop. Det har varit minst sagt intensiv år och det känns.

otroligt tacksam för KAFFE idag. herregud, utan det hade jag förmodligen inte varit stående just nu, insomnia-period, stress, och en skalle som inte är tyst. ❤️

Remember:
**3 things to focus on and actually finish today.**

Nothing more, nothing less. 1 thing that is funny. 1 good habit.

- [ ] endpoints
- [ ] figma
- [ ] andas (kanske inte slutföra, men fokusera på!)

————

# 240105

**Yesterday I…**

Tagit 2 dagar till att läsa på och få hum om hur jag kan få till Next.js och supabase och det verkar vara en ganska vanlig kombo så det ska allt gå.

**today I will…**

se hur länge jag pallar, inte helt 100. men upp med databasstrukturen på supabase! och [test.rest](http://test.rest) därefter.

**I need help with…**

…

**I'm stuck with…**

…

**TIL…**

just nu känns det som att allt är nytt? så aha-känsla i allt som görs 😅

Reflektion:

Vakna med en sprängande skalle, så ev halvdag idag pga inte pigg så är det bara att hålla tummarna!

Som skrivet ovan, mycket nytt, mycket nya intryck, och lite tagen på sängen att jag känner såhär?

tänkte att det “baaaaaara” är att köra.

som tur är har jag lagt upp min planering med lite luft v4+5 så det finns möjlighet till lite omstrukturering.

Remember:
**3 things to focus on and actually finish today.** Nothing more, nothing less. 1 thing that is funny. 1 good habit.

- Måste: databasstruktur
- Kul: om [test.rest](http://test.rest) fungerar?
- Bra? frukost-lunch- middag!

————

# 240103

**Yesterday I…**

installerat en jäkla massa nödvändigheter (och eventuella onödigheter), och vi har ett repo!

**today I will…**

fokusera på supabase och databasstruktur, endpoints, och hur jag ska lägga upp arbetet med inlog.

**I need help with…**

just nu, inget

**I'm stuck with…**

just nu, inget

**TIL…**

var ödmjuk, läs dokumentation och testa mig fram.

Reflektion:

man tycker ju att man borde ha lärt sig detta vid detta laget, men det är så mycket nytt! herregud, undrar lite vad jag gett mig in på? VARFÖÖÖÖÖR next.js som vi inte riktigt jobbat med? varför supabase som jag enbart gjort 1 julprojekt i, varför varför varför?

men det är väl lite charmen med, att ge sig ut på ganska okända marker?
jag är feg, jag är hemmavan, och jag behöver utmana mig för att inte få panik i framtiden. vi kör.

Remember:
**3 things to focus on and actually finish today.** Nothing more, nothing less. 1 thing that is funny. 1 good habit.

- ett måste att att fokusera och slutföra idag? jag tänker att detta kommer ta imorn med egentligen? att läsa på och sätta struktur då mycket är nytt.
- kul vana att fokusera och slutföra idag? alltså, jag gillar ju att läsa på och jämföra saker och ting, så dagens roliga vana får vara att kolla upp och jämföra inlog.
- Bra vana att fokusera och slutföra idag?? LÄS DOKUMENTATION för supabase :)

————

# 240102

mood: 🎉

Hej hej dagboken,

so we meet again!

uppstart idag, testat kika, klickat, allt.

lära känna lite teknik.

Detta är gjort:

- Next .js och repo initierat
- dotenv installerat och fungerar
- nodemailer + typer installerat
- next-auth och typer installerat
- beslut taget att kunna logga in via epost och single-login via next-auth
- skapat en rad i databas, fått kontakt med front! Hurra! long time no see!
- Behöver jag schema? prisma installerat än så länge utifall att.
- fick till test.rest via vs-code extension!dokumentationer hit och dit...och såklart....
- mappstruktur! 🎉

Prio imorn:

- databasstruktur
- **alla endpoints**
- få till inlog med länk

3 saker att fokusera på och faktiskt avsluta idag. Inget mer, inget mindre.

1 fokusområde: Få igång repo och lite kopplingar ✅

1 sak som är rolig: Komma igång med något utan massa måsten... Kod Är KUL!

1 bra vana: jag kom upp imorse!
