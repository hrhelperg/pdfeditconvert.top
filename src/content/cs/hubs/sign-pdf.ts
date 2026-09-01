import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "sign-pdf",
  hero: {
    eyebrow: "Podepsat PDF",
    h1: "Podepiš PDF z telefonu během pár sekund.",
    highlight: "sekund",
    lead: "Přidej do libovolného PDF skutečný vlastnoruční podpis, napsané jméno nebo iniciály. Umísti ho, změň velikost a exportuj – bez tisknutí, skenování nebo posílání souboru sám sobě e-mailem.",
    primaryCta: { label: "Otevřít aplikaci", href: SITE.app.appStore },
  },
  problem: {
    heading: "Proč je tisknutí a skenování konečně minulostí",
    paragraphs: [
      "Stará rutina podepisování – vytiskni PDF, podepiš ho, naskenuj a pošli zpátky e-mailem – nějakým způsobem přežila až do roku 2026. Většina firem elektronické podpisy uznává, přesto pořád chodí spousta smluv s poznámkou „prosím podepište a vraťte“, jako by měl každý doma tiskárnu i skener.",
      "Veřejné služby pro elektronický podpis část problému vyřeší, ale přidají potíže s přihlašováním, nahráváním dokumentu, správou účtu a cenovými tarify. Pro jediný podpis na jediném dokumentu je to zbytečně složité a přidá to čekání, které nepotřebuješ.",
      "Nativní podepisování v telefonu je přesně tak akorát velké na tuhle práci: otevři PDF, nakresli nebo napiš podpis, umísti ho, odešli. Celý postup zabere necelou minutu a funguje bez účtu, v letadle i na parkovišti.",
    ],
  },
  features: {
    heading: "Podepisuj způsobem, který sedí k dokumentu",
    items: [
      {
        icon: "Pencil",
        title: "Vlastnoruční podpis",
        body: "Nakresli ho prstem nebo stylusem. Ulož si ho jednou a používej znovu na každém dalším dokumentu.",
      },
      {
        icon: "Type",
        title: "Napsaný podpis",
        body: "Napiš své jméno a vyber si kurzívní styl písma pro čisté, čitelné podpisy.",
      },
      {
        icon: "User",
        title: "Razítko s iniciálami",
        body: "Ulož si iniciály zvlášť pro dokumenty, které je vyžadují na každé stránce.",
      },
      {
        icon: "Calendar",
        title: "Razítko s datem",
        body: "Datum vlož jedním ťuknutím vedle podpisu, pokud to smlouva vyžaduje.",
      },
      {
        icon: "Users",
        title: "Postup pro víc podepisujících",
        body: "Předávej PDF mezi podepisujícími přes nabídku sdílení. Každý podpis zůstane na svém místě.",
      },
      {
        icon: "ShieldCheck",
        title: "Export s informacemi pro audit",
        body: "Podepsaná kopie obsahuje časové razítko a metadata podpisu pro vedení evidence.",
      },
    ],
  },
  steps: {
    heading: "Jak podepsat PDF z telefonu",
    items: [
      {
        title: "Otevři PDF",
        body: "Naimportuj dokument do aplikace PDF Editor ze Souborů, e-mailu nebo jiné aplikace pro sdílení.",
      },
      {
        title: "Ťukni na nástroj Podepsat",
        body: "Najdeš ho na panelu nástrojů pro úpravy. Zvol vlastnoruční, napsaný podpis nebo iniciály.",
      },
      {
        title: "Nakresli nebo napiš svůj podpis",
        body: "Jen napoprvé – podpis se uloží pro příště. Kdykoli ho můžeš upravit nebo nahradit v Nastavení.",
      },
      {
        title: "Umísti a změň velikost",
        body: "Přetáhni podpis na správné místo. Velikost uprav pomocí úchytů v rozích. Podle potřeby přidej razítko s datem.",
      },
      {
        title: "Exportuj podepsanou kopii",
        body: "Ulož přes originál nebo jako novou kopii. Sdílej rovnou přes Mail nebo libovolnou zprávovou aplikaci.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Podepisování, které nenaruší den",
    body: "Samotný podpis málokdy bývá tím, co celou věc brzdí – je to spíš čas strávený hledáním tiskárny. Podepisování z telefonu znamená, že se smlouva vrátí druhé straně do hodiny, ne až za den. Obzvlášť užitečné pro freelancery, majitele malých firem a kohokoli, kdo pracuje mimo kancelář.",
  },
  faq: [
    {
      q: "Je elektronický podpis právně platný?",
      a: "Ve většině jurisdikcí ano – u většiny obchodních dokumentů. Nařízení eIDAS Evropské unie i americký zákon ESIGN elektronické podpisy uznávají. U dokumentů s vysokou hodnotou nebo právně citlivých se vyplatí ověřit místní pravidla a zvážit kvalifikovaný elektronický podpis.",
    },
    {
      q: "Bude můj podpis uložený na serveru?",
      a: "Ne. Uložené podpisy zůstávají v tvém zařízení. Do dokumentů se vkládají lokálně a nikdy se nenahrávají na naši infrastrukturu.",
    },
    {
      q: "Může stejné PDF podepsat víc lidí?",
      a: "Ano. Soubor předávej mezi podepisujícími přes nabídku sdílení, AirDrop, e-mail nebo libovolnou zprávovou aplikaci. Každý podpis se přidá a uloží na svém místě.",
    },
    {
      q: "Co když má PDF pole pro podpis?",
      a: "Aplikace existující pole pro podpis rozpozná a umožní ti na ně ťuknout přímo. Podpis se automaticky přizpůsobí správné velikosti a pozici.",
    },
    {
      q: "Můžu ho použít s Apple Pencil nebo S Pen?",
      a: "Ano. Oba nabízí plynulejší tahy než podpis prstem, což je znát hlavně u smluv, které procházejí vizuální kontrolou.",
    },
  ],
  related: [
    {
      label: "Krok za krokem: jak podepsat PDF z telefonu",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "Chraň podepsaná PDF heslem", path: "/pdf-security" },
    { label: "Pracovní postupy pro freelancery", path: "/use-cases/freelancers" },
  ],
  appCta: {
    heading: "Podepisuj PDF odkudkoli.",
    sub: "Zdarma na iOS a Androidu. Účet není potřeba.",
  },
};

export default content;
