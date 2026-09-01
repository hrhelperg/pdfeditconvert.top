import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-add-watermark-to-pdf",
  h1: "Jak přidat vodoznak do PDF (zdarma)",
  description:
    "Otiskni text jako „NÁVRH“ nebo „DŮVĚRNÉ“ na každou stránku PDF přímo v prohlížeči. Co vodoznak skutečně ochrání a co ne, na rovinu.",
  updated: "2026-05-23",
  intro: [
    "Vodoznak je označení napsané napříč stránkou – NÁVRH, DŮVĚRNÉ, název firmy, e-mail příjemce. Lidé po něm sahají, aby naznačili stav („tohle ještě není finální“), označili vlastnictví, nebo odradili od ledabylého šíření tím, že orazítkují, komu byla kopie určená.",
    "Tento návod používá bezplatný nástroj Přidat vodoznak do PDF, který položí textový vodoznak přes každou stránku přímo v tvém prohlížeči – nic se nikam nenahrává. Je rychlý a soukromý a hodí se přesně pro tyhle signalizační úlohy.",
    "Stejně důležité je ujasnit si, čím vodoznak není: není to zabezpečení. Projdeme si, kde vodoznaky skutečně pomáhají a kde místo nich potřebuješ opravdovou ochranu, aby ses na ně nespoléhal u něčeho, co nezvládnou.",
  ],
  steps: [
    {
      title: "Otevřít nástroj Přidat vodoznak do PDF",
      body: "Přejdi na nástroj Přidat vodoznak do PDF v prohlížeči. Běží na tvém zařízení – žádné nahrávání, žádný účet.",
    },
    {
      title: "Přidat PDF",
      body: "Přetáhni soubor do plochy pro přidání souboru nebo klikni pro jeho výběr. Vodoznak se použije na každou stránku dokumentu.",
    },
    {
      title: "Napsat text vodoznaku",
      body: "Zadej označení, které chceš – NÁVRH, DŮVĚRNÉ, název firmy nebo identifikátor příjemce. Drž ho krátký, aby se přes stránku četl čistě.",
    },
    {
      title: "Použít vodoznak",
      body: "Spusť nástroj. Tvůj text se otiskne přes každou stránku nové kopie dokumentu.",
    },
    {
      title: "Zkontrolovat čitelnost oběma směry",
      body: "Ověř, že je vodoznak dost výrazný na svůj účel, ale zároveň dost jemný, aby zůstal čitelný i text pod ním. Vodoznak, který zakrývá obsah, míjí svůj smysl.",
    },
    {
      title: "Stáhnout okomentovanou kopii",
      body: "Výsledek ulož jako nový soubor, aby ti pro vlastní záznamy zůstal čistý originál bez označení.",
    },
  ],
  tips: [
    "Vodoznak je vizuální označení, ne ochrana. Kdokoli může stránku vyfotit, vytisknout nebo znovu zpracovat – ber ho jako signál, ne jako zámek.",
    "Na kopie, které sdílíš, použij vodoznak specifický pro příjemce (jeho jméno nebo e-mail), aby to odradilo od přeposílání – lidé jsou opatrnější s dokumentem, který je viditelně orazítkovaný právě pro ně.",
    "Text vodoznaku drž krátký. Dlouhá fráze zalomená přes stránku soupeří s obsahem a působí jako nepořádek.",
    "Vodoznak vždy přidávej na kopii, nikdy na svůj hlavní soubor. Celý smysl je v tom, že originál zůstane čistý.",
    "Pokud opravdu potřebuješ zabránit otevření, kopírování nebo úpravám, jde o úlohu pro heslo a šifrování – viz návod na ochranu PDF, ne vodoznak.",
  ],
  mobileNote:
    "Označit dokument jako NÁVRH nebo DŮVĚRNÉ ještě před odesláním z telefonu zabere pár vteřin v aplikaci PDF Editor, která vodoznaky přidává offline a ve stejné relaci umožní i podepsat nebo chránit heslem – užitečné, když nabídka odchází ven ještě před dokončením.",
  faq: [
    {
      q: "Ochrání vodoznak můj dokument?",
      a: "Ne. Vodoznak je viditelné označení, ne zabezpečení. Signalizuje stav nebo vlastnictví, ale nezabrání kopírování, tisku ani úpravám. Pro to použij ochranu heslem a šifrování.",
    },
    {
      q: "Objeví se vodoznak na každé stránce?",
      a: "Ano. Nástroj otiskne tvůj text přes všechny stránky dokumentu, takže je označení jednotné v celém souboru.",
    },
    {
      q: "Dá se vodoznak odstranit?",
      a: "Odhodlaný člověk se dokáže vyhnout jakémukoli viditelnému vodoznaku, a proto jde spíš o odstrašení než o ochranu. Svůj neoznačený originál si drž zvlášť.",
    },
    {
      q: "Nahrává se moje PDF někam?",
      a: "Ne. Vodoznak se přidává v prohlížeči na tvém zařízení, takže soubor zůstává v soukromí.",
    },
    {
      q: "Můžu přidat vodoznak s obrázkem nebo logem?",
      a: "Nástroj v prohlížeči přidává textový vodoznak. Pro překrytí obrázkem nebo logem nabízí víc možností mobilní aplikace PDF Editor.",
    },
  ],
  related: [
    {
      label: "Přidat vodoznak do PDF — přímo v prohlížeči",
      path: "/add-watermark-to-pdf",
    },
    {
      label: "Jak chránit PDF soubor heslem",
      path: "/guides/how-to-protect-pdf-file",
    },
    {
      label: "Jak připravit PDF před sdílením",
      path: "/guides/how-to-prepare-pdf-before-sharing",
    },
    { label: "PDF Security — chraň dokumenty", path: "/pdf-security" },
  ],
  parentHub: { label: "Přidat vodoznak do PDF", path: "/add-watermark-to-pdf" },
};

export default content;
