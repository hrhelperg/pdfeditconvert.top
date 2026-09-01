import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-client-ready-pdf-files",
  h1: "Jak vytvořit PDF soubory připravené pro klienta (upravené, na značku)",
  description:
    "Co odlišuje interní PDF od toho, které je připravené pro klienta: titulní strana, číslování stránek, branding, velikost souboru, název souboru. Rychlé doladění, díky kterému dokument působí hotově.",
  updated: "2026-05-29",
  intro: [
    "Mezi pracovním PDF a tím, které je připravené pro klienta, je jasný rozdíl – a většinou se schovává v detailech. Interní verze má zástupnou titulní stránku, chybějící číslování, 14 MB a název jako „final-final-v2.pdf“. Verze pro klienta má čistou titulní stránku, typografii podle značky, očíslované stránky, 2 MB a název, který působí profesionálně. Obě nesou stejné informace – jenže jen jedna z nich vypadá hotově.",
    "K verzi pro klienta se nedostaneš přes grafika. Stačí krátká řada standardních kroků – uprav zdrojový soubor, znovu ho čistě exportuj, dolaď PDF, správně ho označ, rozumně zkomprimuj, pečlivě přejmenuj. Když to uděláš v tomhle pořadí, doladění zabere jen pár minut na dokument.",
    "Tenhle návod tě provede celou posloupností krok za krokem. Žádný z těchto kroků nepotřebuje drahé nástroje – většinu zvládneš v záložce prohlížeče, aniž bys cokoliv citlivého poslal na cizí server.",
  ],
  steps: [
    {
      title: "Začni u pořádně zalomeného zdroje",
      body: "Pokud zdrojový dokument vypadá jako rozpracovaný návrh, PDF, které z něj vznikne, bude vypadat stejně. Uprav okraje, volbu písma a hierarchii nadpisů ve Wordu, Pages nebo Docs ještě před exportem. PDF nedokáže přidat úroveň, která ve zdroji chybí.",
    },
    {
      title: "Přidej titulní stránku, která pojmenuje výstup",
      body: "Jméno klienta, název projektu, název dokumentu, datum, jméno tvé firmy. Jedna stránka. Dá kontext, který se pak nemusí opakovat v každém záhlaví.",
    },
    {
      title: "Čísluj stránky od druhé strany",
      body: "Formát „X z Y“ nepůsobí nejednoznačně a potvrzuje úplnost – čtenář ví, že nic nechybí. Titulní stránku vynech a začni číslovat od stránky 2.",
    },
    {
      title: "Použij jednotný branding (typografie, barvy, logo)",
      body: "Malé logo a jednotný typografický systém signalizují péči. Branding by měl působit tiše, ne křiklavě. Pokud má klient brand manuál, drž se ho.",
    },
    {
      title: "Znovu exportuj s vloženými písmy",
      body: "Vložená písma zajistí, že dokument vypadá u klienta stejně jako u tebe. Znovu exportuj ze zdroje se zapnutou volbou „vložit všechna písma“.",
    },
    {
      title: "Zkomprimuj, přejmenuj a zkontroluj před odesláním",
      body: "Pomocí nástroje Zkomprimovat PDF se vejdeš pod typický limit e-mailové přílohy. Přejmenuj soubor na JménoKlienta_TypDokumentu_RRRR-MM-DD.pdf. Otevři finální soubor a před odesláním si přečti první a poslední stránku – překlepy se nejlíp odhalí při opětovném čtení.",
    },
  ],
  tips: [
    "Vyhni se stock pozadím a titulním stránkám, které vypadají jako screenshot. Čistá typografická obálka stárne lépe než přeplácaná.",
    "Nenechávej na finální verzi vodoznak „NÁVRH“. Právě jeho absence signalizuje, že jde o finální dokument.",
    "Tabulky přesahující přes více stránek musí opakovat záhlaví řádku. Ve Wordu je „opakovat záhlaví řádku“ jedno kliknutí, které zabrání problémům s čitelností při tisku.",
    "Grafy exportované jako vektor (PDF) zůstanou ostré. Grafy vložené jako obrázek se při velkém přiblížení rozmažou – oprav to už u zdroje.",
    "Pokud stejnou šablonu používáš pro víc klientů, pokaždé aktualizuj metadata, aby název dokumentu neříkal pořád „Nabídka Acme“, i když jde ve skutečnosti k Beta Co.",
  ],
  mobileNote:
    "Klienti dokumenty často otevírají nejdřív na telefonu. S aplikací PDF Editor si finální PDF necháš zobrazit přesně tak, jak ho uvidí klient – takže si titulní stránku, která na 27palcovém monitoru vypadá skvěle, ale na telefonu působí natěsno, všimneš dřív, než dokument odešleš.",
  faq: [
    {
      q: "Co nejvíc prozradí, že PDF není připravené pro klienta?",
      a: "Neupravený název souboru. „final_v3_revised.pdf“ klientovi říká, že jde o jednu z mnoha verzí. Pojmenovaný, datovaný název souboru signalizuje hotový výstup.",
    },
    {
      q: "Potřebuju logo na každé stránce?",
      a: "Ne. Stačí logo na titulní stránce a nenápadná zmínka v patě. Velké logo na každé stránce působí spíš jako obchodní prezentace než jako dokument.",
    },
    {
      q: "Vyplatí se přidat obsah?",
      a: "Nad deset stránek ano. Je to drobnost, díky které dokument působí hotověji a čtenáři pomůže se v něm zorientovat.",
    },
    {
      q: "Jaký formát číslování stránek je nejlepší?",
      a: "„X z Y“. Y potvrzuje úplnost. Samotné X stačí u kratších dokumentů, ale ztrácí tenhle signál úplnosti.",
    },
    {
      q: "Vyplatí se navrhnout vlastní titulní stránku?",
      a: "Pro opakované výstupy ano – šablona podle tvé značky se vyplatí na mnoha dokumentech. Pro jednorázový dokument stačí čistá typografická obálka.",
    },
  ],
  related: [
    { label: "PDF pro firmy — smlouvy a pracovní postupy", path: "/pdf-for-business" },
    { label: "Word do PDF — čisté exporty pro distribuci", path: "/word-to-pdf" },
    { label: "Jak sdílet PDF s klienty", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Jak připravit PDF pro firemní použití", path: "/guides/how-to-prepare-pdf-for-business-use" },
  ],
  parentHub: { label: "PDF pro firmy — smlouvy a pracovní postupy", path: "/pdf-for-business" },
};

export default content;
