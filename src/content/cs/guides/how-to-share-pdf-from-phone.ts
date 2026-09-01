import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-from-phone",
  h1: "Jak sdílet PDF z telefonu",
  description:
    "Sdílej PDF z iPhonu nebo Androidu správně – e-mailem, přes AirDrop, zprávou nebo odkazem – a nauč se soubor připravit a zmenšit tak, aby doopravdy dorazil.",
  updated: "2026-05-23",
  intro: [
    "Sdílet PDF z telefonu je akce na jedno klepnutí – dokud najednou není. Soubor je moc velký na e-mail, příjemce nedokáže otevřít odkaz, nebo si příliš pozdě uvědomíš, že jsi poslal verzi se stránkou, která tam neměla být. Udělat to správně nezávisí ani tak na tlačítku sdílet, jako spíš na výběru správného kanálu a přípravě souboru, než ho vůbec klepneš.",
    "Tenhle návod pokrývá hlavní způsoby sdílení z iPhonu nebo telefonu s Androidem – e-mail, AirDrop nebo Nearby Share, zprávové aplikace a odkazy do cloudu – a kdy je který z nich správnou volbou. Pokrývá i rychlou přípravu, která zabrání tomu, aby se sdílení vrátilo jako neúspěšné nebo tě uvedlo do rozpaků.",
    "Celý smysl telefonu je posílat věci odkudkoli zrovna jsi. Trocha péče promění klepnutí plné naděje v dokument, který spolehlivě dorazí, má správnou velikost a nic navíc k němu není přiložené.",
  ],
  steps: [
    {
      title: "Připrav soubor, než ho sdílíš",
      body: "Ověř, že je to správná verze, odstraň všechny stránky, které tam nemají být, a zkontroluj rozumnou velikost. Třicet vteřin tady zabrání většině nehod při sdílení.",
    },
    {
      title: "Otevři nabídku sdílení",
      body: "Klepni na Sdílet u PDF – ze Souborů, z tvé e-mailové aplikace nebo z aplikace PDF Editor. iOS i Android odsud zobrazí každý relevantní cíl.",
    },
    {
      title: "E-mail pro formální dokumenty",
      body: "Přilož ho k e-mailu, když má zůstat papírová stopa – smlouvy, faktury, přihlášky. Dávej pozor na limit kolem 25 MB; pokud je soubor velký, nejdřív ho zkomprimuj.",
    },
    {
      title: "AirDrop nebo Nearby Share pro někoho poblíž",
      body: "Posíláš to na zařízení v místnosti? AirDrop (iPhone) nebo Nearby Share (Android) přesune soubor přímo, rychle, bez limitu velikosti a bez potřeby internetu.",
    },
    {
      title: "Zprávové aplikace pro rychlé, neformální sdílení",
      body: "WhatsApp, Zprávy a podobné jsou v pořádku pro běžné posílání, ale některé soubory znovu komprimují nebo omezují. Pro cokoli, co musí dorazit bez úhony, dej přednost e-mailu nebo odkazu.",
    },
    {
      title: "Odkaz do cloudu pro velké soubory nebo víc příjemců",
      body: "U velkého souboru nebo širšího publika sdílej odkaz z cloudového úložiště, které ovládáš ty. Tím obejdeš limity velikosti a přístup můžeš později kdykoli zrušit.",
    },
  ],
  tips: [
    "Pokud je soubor plný skenů, zkomprimuj ho ještě před sdílením – vrácený e-mail je horší výsledek než trochu menší soubor.",
    "Než klepneš na sdílet, zkontroluj stránky. Nejčastější lítost je odeslání verze s interní poznámkou nebo stránkou určenou pro někoho jiného.",
    "AirDrop a Nearby Share jsou nedocenění hrdinové osobního sdílení: okamžité, bez limitu velikosti, bez internetu, nic se nikam nenahrává.",
    "Zprávové aplikace umí dokumenty potichu znovu zkomprimovat. U souborů, kde záleží na kvalitě nebo věrnosti, použij radši e-mail nebo odkaz do cloudu.",
    "U citlivých dokumentů přes odkaz použij službu, které důvěřuješ, a přístup vypni, jakmile má příjemce soubor u sebe.",
  ],
  mobileNote:
    "Aplikace PDF Editor sdílí přímo z nabídky sdílení poté, co soubor připravíš – zkomprimuješ, ostříháš stránku, podepíšeš – takže dokument, který opustí tvůj telefon, je přesně ten, který jsi chtěl poslat, a má velikost, se kterou dorazí. Všechno, co proběhne před sdílením, se odehraje přímo v zařízení.",
  faq: [
    {
      q: "Jaký je nejlepší způsob, jak sdílet PDF z telefonu?",
      a: "Záleží na příjemci: e-mail pro formální dokumenty, AirDrop nebo Nearby Share pro někoho poblíž, zprávové aplikace pro rychlé neformální posílání a odkaz do cloudu pro velké soubory nebo víc příjemců.",
    },
    {
      q: "Proč se moje PDF nedá poslat e-mailem?",
      a: "Nejspíš je přes limit přílohy kolem 25 MB, obvykle proto, že je plné skenů. Zkomprimuj ho nejdřív, nebo sdílej odkaz do cloudu.",
    },
    {
      q: "Mění zprávové aplikace moje PDF?",
      a: "Některé přílohy znovu komprimují nebo omezují, což může ovlivnit kvalitu. Pro dokumenty, které musí dorazit přesně tak, jak byly odeslány, použij e-mail nebo odkaz do cloudu místo chatovací aplikace.",
    },
    {
      q: "Je AirDrop nebo Nearby Share soukromé?",
      a: "Ano – soubor se přenáší přímo mezi zařízeními, aniž by prošel serverem nebo internetem, což z nich dělá dobrou volbu pro citlivé dokumenty sdílené osobně.",
    },
    {
      q: "Jak se vyhnu sdílení nesprávných stránek?",
      a: "Projdi dokument, než klepneš na sdílet, a odstraň stránky, které tam nemají být. Kompletní kontrolní seznam před odesláním najdeš v návodu, jak připravit PDF před sdílením.",
    },
  ],
  related: [
    { label: "Editor PDF – připrav a sdílej z telefonu", path: "/pdf-editor" },
    { label: "Jak připravit PDF před sdílením", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Jak odeslat velké PDF soubory", path: "/guides/how-to-send-large-pdf-files" },
    { label: "Jak zmenšit PDF na Androidu", path: "/guides/how-to-make-pdf-smaller-on-android" },
  ],
  parentHub: { label: "Editor PDF", path: "/pdf-editor" },
};

export default content;
