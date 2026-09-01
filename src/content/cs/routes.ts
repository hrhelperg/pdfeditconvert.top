import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";
import { CS_GUIDE_ROUTES } from "@/content/cs/routes.guides";

/**
 * Czech route manifest — the localization manifest for cs.
 *
 * One entry per English route this locale publishes. `id` is the English
 * route id; `slug` is the permanent Czech URL after the `/cs` prefix.
 * Category, priority, change frequency and lastmod policy are inherited —
 * see buildLocaleRoutes.
 *
 * Slug conventions (also recorded in docs/localization/cs-terminology.md):
 *
 * - ASCII-normalized, diacritics stripped: "zkomprimovat-pdf". Prose keeps
 *   every diacritic (á č ď é ě í ň ó ř š ť ú ů ý ž); slugs do not.
 * - Infinitive form for tool slugs, matching Czech UI button-label
 *   convention ("zkomprimovat-pdf" for "Zkomprimovat PDF").
 * - Translated section prefixes: navody/, srovnani/, pripady-uziti/.
 */
export const CS_ROUTE_MANIFEST: readonly LocaleRouteEntry[] = [
  {
    id: "",
    slug: "",
    title: "PDF Editor — úprava, konverze, podpis a skenování PDF na telefonu",
    description:
      "Kompletní řešení pro PDF do práce, školy i běžného života. Upravuj, konvertuj, komprimuj, slučuj, podepisuj a skenuj PDF přímo z telefonu s aplikací PDF Editor pro iOS a Android.",
  },

  // Hubs
  {
    id: "pdf-editor",
    slug: "editor-pdf",
    title: "Editor PDF — úprava textu, obrázků a stránek na telefonu",
    description:
      "Upravuj PDF na iPhonu nebo Androidu: měň text, přidávej obrázky, měň pořadí stránek a podepisuj dokumenty. Zjisti, jak aplikace PDF Editor zjednodušuje úpravy na telefonu.",
  },
  {
    id: "pdf-converter",
    slug: "konvertor-pdf",
    title: "Konvertor PDF — převod do Word, JPG, PNG a dalších formátů",
    description:
      "Převáděj PDF do Wordu, Excelu, JPG, PNG a zpět. Poznej nejjednodušší způsob práce na telefonu s aplikací PDF Editor pro iOS a Android.",
  },
  {
    id: "sign-pdf",
    slug: "podepsat-pdf",
    title: "Podepsat PDF — elektronický podpis na telefonu",
    description:
      "Podepisuj PDF z telefonu vlastnoručním nebo napsaným podpisem. Přijímaný ve většině pracovních postupů. Vyzkoušej aplikaci PDF Editor.",
  },
  {
    id: "scan-to-pdf",
    slug: "skenovat-do-pdf",
    title: "Skenovat do PDF — proměň papírové dokumenty v čistá PDF",
    description:
      "Naskenuj dokumenty, doklady a účtenky fotoaparátem telefonu do čistých, prohledávatelných PDF souborů. Aplikace PDF Editor automaticky rozpozná okraje stránky.",
  },
  {
    id: "pdf-security",
    slug: "zabezpeceni-pdf",
    title: "Zabezpečení PDF — heslo a šifrování PDF souborů",
    description:
      "Chraň citlivé PDF soubory hesly a šifrováním. Praktický průvodce zabezpečením dokumentů na iPhonu a Androidu.",
  },
  {
    id: "pdf-for-business",
    slug: "pdf-pro-firmy",
    title: "PDF pro firmy — smlouvy, faktury a pracovní postupy",
    description:
      "Jak malé týmy využívají PDF pro smlouvy, faktury a schvalování. Moderní pracovní postupy zaměřené na mobil s aplikací PDF Editor.",
  },
  {
    id: "pdf-for-students",
    slug: "pdf-pro-studenty",
    title: "PDF pro studenty — poznámky, zvýrazňování a studijní materiály",
    description:
      "Využij PDF pro poznámky z přednášek, zvýrazňování a studijní materiály. Chytré pracovní postupy na telefonu s aplikací PDF Editor pro iOS a Android.",
  },
  {
    id: "pdf-forms",
    slug: "formulare-pdf",
    title: "Formuláře PDF — vyplňování, podepisování a správa PDF formulářů",
    description:
      "Zjisti, jak fungují PDF formuláře a jak je vyplňovat, podepisovat, vytvářet a opravovat. Přehled interaktivních i neinteraktivních vyplnitelných PDF na počítači i na mobilu.",
  },

  // Guides
  {
    id: "guides",
    slug: "navody",
    title: "Návody k PDF — postupy krok za krokem a tutoriály",
    description:
      "Praktické návody k PDF zaměřené na mobil: upravuj, konvertuj, komprimuj, slučuj, podepisuj a chraň dokumenty na iPhonu a Androidu.",
  },

  // Compare
  {
    id: "compare/pdf-vs-docx",
    slug: "srovnani/pdf-nebo-docx",
    title: "PDF nebo DOCX — srovnání funkce po funkci",
    description:
      "Porovnej PDF a DOCX z hlediska editovatelnosti, věrnosti, podepisování, zabezpečení a sdílení. Vyber správný formát pro daný úkol.",
  },
  {
    id: "compare/pdf-vs-jpg",
    slug: "srovnani/pdf-nebo-jpg",
    title: "PDF nebo JPG — kdy použít který formát",
    description:
      "PDF nebo JPG: kdy skenovat, kdy fotografovat. Srovnání kvality, velikosti souboru, OCR a vhodnosti pro práci s dokumenty.",
  },
  {
    id: "compare/pdf-app-vs-online-pdf-tools",
    slug: "srovnani/aplikace-pdf-nebo-online-nastroje",
    title: "Aplikace PDF nebo online nástroje — co je lepší?",
    description:
      "Nativní aplikace pro PDF proti nástrojům v prohlížeči: srovnání rychlosti, soukromí a dostupnosti offline.",
  },

  // Use cases
  {
    id: "use-cases/freelancers",
    slug: "pripady-uziti/freelanceri",
    title: "PDF Editor pro freelancery — nabídky a podepsané dokumenty",
    description:
      "Pracovní postupy, které freelanceři milují: nabídky, podepsané smlouvy a faktury — vše z telefonu.",
  },
  {
    id: "use-cases/remote-work",
    slug: "pripady-uziti/prace-na-dalku",
    title: "PDF Editor pro práci na dálku — dokumenty odkudkoli",
    description:
      "Pracuj s dokumenty na cestách: skenuj, podepisuj a sdílej PDF z libovolného zařízení a odkudkoli.",
  },

  // Tools (browser-based, free, no upload)
  {
    id: "pdf-tools",
    slug: "nastroje-pdf",
    title: "Bezplatné nástroje pro PDF — v prohlížeči, bez nahrávání",
    description:
      "Bezplatné nástroje pro PDF, které běží celé v prohlížeči. Slučuj, děl, otáčej, přidávej vodoznak, převáděj obrázky na PDF i PDF na obrázky — soubory nikdy neopustí tvé zařízení.",
  },
  {
    id: "compress-pdf",
    slug: "zkomprimovat-pdf",
    title: "Zkomprimovat PDF — zmenšit velikost souboru v prohlížeči (zdarma, bez nahrávání)",
    description:
      "Zmenši velikost PDF přímo v prohlížeči, s nastavitelnou úrovní komprese. Zdarma, bez registrace, bez nahrávání — soubor neopustí tvé zařízení.",
  },
  {
    id: "pdf-to-word",
    slug: "pdf-do-wordu",
    title: "PDF do Wordu — převod PDF na editovatelný DOCX v prohlížeči",
    description:
      "Extrahuj text z PDF do editovatelného dokumentu Word (.docx) přímo v prohlížeči. Zdarma, bez nahrávání — poctivá textová konverze, ne falešný slib zachování rozvržení.",
  },
  {
    id: "word-to-pdf",
    slug: "word-do-pdf",
    title: "Word do PDF — převod DOCX nebo TXT na PDF v prohlížeči",
    description:
      "Proměň soubor Word .docx nebo .txt v čisté PDF přímo v prohlížeči. Zdarma, bez registrace, bez nahrávání — dokument neopustí tvé zařízení.",
  },
  {
    id: "reorder-pdf-pages",
    slug: "zmenit-poradi-stranek-pdf",
    title: "Změnit pořadí stránek PDF — v prohlížeči (zdarma, bez nahrávání)",
    description:
      "Prohlédni si každou stránku a přeuspořádej PDF jednoduchým ovládáním, pak stáhni přeuspořádaný soubor. Zdarma, bez registrace, bez nahrávání — soubory zůstávají na tvém zařízení.",
  },
  {
    id: "extract-pdf-pages",
    slug: "extrahovat-stranky-pdf",
    title: "Extrahovat stránky z PDF — uložit vybrané stránky jako nové PDF (zdarma, bez nahrávání)",
    description:
      "Vyber konkrétní stránky nebo rozsahy a stáhni nové PDF jen s nimi, přímo v prohlížeči. Zdarma, bez registrace, bez nahrávání — soubory nikdy neopustí tvé zařízení.",
  },
  {
    id: "merge-pdf",
    slug: "sloucit-pdf",
    title: "Sloučit PDF — spoj soubory v prohlížeči (zdarma, bez nahrávání)",
    description:
      "Spoj více PDF souborů do jednoho dokumentu přímo v prohlížeči. Zdarma, bez registrace, bez nahrávání — tvé soubory nikdy neopustí tvé zařízení.",
  },
  {
    id: "split-pdf",
    slug: "rozdelit-pdf",
    title: "Rozdělit PDF — extrahuj stránky v prohlížeči (zdarma, bez nahrávání)",
    description:
      "Rozděl PDF podle rozsahu stránek přímo v prohlížeči. Zdarma, bez registrace, bez nahrávání — soubory zůstávají na tvém zařízení.",
  },
  {
    id: "image-to-pdf",
    slug: "obrazek-do-pdf",
    title: "Obrázek do PDF — převod JPG, PNG, WebP na PDF v prohlížeči",
    description:
      "Spoj fotky JPG, PNG a WebP do jednoho PDF přímo v prohlížeči. Zdarma, bez nahrávání, bez registrace — soubory zůstávají na tvém zařízení.",
  },
  {
    id: "rotate-pdf",
    slug: "otocit-pdf",
    title: "Otočit PDF — oprava orientace stránek v prohlížeči",
    description:
      "Otoč všechny nebo vybrané stránky PDF o 90°, 180° nebo 270° přímo v prohlížeči. Zdarma a soukromě — soubory nikdy neopustí tvé zařízení.",
  },
  {
    id: "pdf-to-images",
    slug: "pdf-do-obrazku",
    title: "PDF do obrázků — export stránek PDF jako PNG nebo JPG",
    description:
      "Proměň libovolné PDF na obrázky PNG nebo JPG, stránku po stránce, v prohlížeči. Zdarma, bez nahrávání, bez účtu — vše běží na tvém zařízení.",
  },
  {
    id: "add-watermark-to-pdf",
    slug: "pridat-vodoznak-do-pdf",
    title: "Přidat vodoznak do PDF — zdarma, soukromě, v prohlížeči",
    description:
      "Přidej textový vodoznak na každou stránku PDF přímo v prohlížeči. Zdarma, bez nahrávání, bez registrace — soubory zůstávají na tvém zařízení.",
  },

  // Legal & meta
  {
    id: "privacy-policy",
    slug: "zasady-ochrany-osobnich-udaju",
    title: "Zásady ochrany osobních údajů",
    description:
      "Jak pdfeditconvert.top a hrhelperg s.r.o. nakládají s tvými daty.",
  },
  {
    id: "terms",
    slug: "podminky-pouzivani",
    title: "Podmínky používání",
    description: "Podmínky, kterými se řídí používání pdfeditconvert.top.",
  },
  {
    id: "contact",
    slug: "kontakt",
    title: "Kontakt — PDF Editor od hrhelperg s.r.o.",
    description:
      "Spoj se s týmem PDF Editor. E-mail: info@hrhelperg.com.",
  },

  ...CS_GUIDE_ROUTES,
];
