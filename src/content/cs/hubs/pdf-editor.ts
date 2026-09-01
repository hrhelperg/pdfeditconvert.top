import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-editor",
  hero: {
    eyebrow: "Editor PDF",
    h1: "Upravuj PDF kdekoli, na jakémkoli telefonu.",
    highlight: "PDF",
    lead: "Oprav text, vyměň obrázky, změň pořadí stránek a podepiš dokumenty – přímo na iPhonu nebo Androidu. PDF Editor promění telefon ve skutečný editor dokumentů, ne jen v prohlížeč.",
    primaryCta: { label: "Otevřít aplikaci", href: SITE.app.appStore },
  },
  problem: {
    heading: "Proč byla úprava PDF vždy komplikovaná",
    paragraphs: [
      "PDF byly navržené tak, aby vypadaly všude stejně – a právě proto se tak špatně upravují. Většina aplikací v telefonu ti dovolí je jen prohlížet nebo do nich přidávat poznámky. Ve chvíli, kdy potřebuješ opravit překlep, změnit jméno nebo přesunout stránku, tě to pošle zpátky k počítači, nebo tě to donutí nahrát soubor na nějaký neznámý web.",
      "Tyhle weby, kam soubor nahraješ a doufáš, jsou z pohledu soukromí problém. Uchovávají tvůj soubor celé hodiny, často jsou pomalé a nemáš žádnou záruku, co dělají s citlivými smlouvami, fakturami nebo doklady totožnosti. Výsledkem je, že si většina lidí prostě udělá screenshot té části, kterou chce opravit, upraví ji jako obrázek a e-mailem pošle verzi, která vypadá hůř než originál.",
      "Nativní editor pro telefon to řeší bez kompromisů. Úpravy probíhají přímo v zařízení. Původní rozvržení zůstává zachované. Výsledek můžeš e-mailem poslat minutu po tom, co jsi začal – bez nahrávání čehokoli na cizí server.",
    ],
  },
  features: {
    heading: "Co s ním doopravdy zvládneš",
    items: [
      {
        icon: "Type",
        title: "Uprav text přímo v dokumentu",
        body: "Oprav překlepy, změň jména, uprav data – aniž bys rozbil rozvržení stránky. Funguje u PDF s textovou vrstvou.",
      },
      {
        icon: "ImagePlus",
        title: "Vlož a nahraď obrázky",
        body: "Přidej nové logo nebo fotku. Změň velikost a pozici, aniž bys opustil stránku.",
      },
      {
        icon: "Move",
        title: "Změň pořadí stránek",
        body: "Přetahuj miniatury a měň jejich pořadí. Stránky můžeš mazat, duplikovat nebo vkládat nové prázdné.",
      },
      {
        icon: "Pencil",
        title: "Podpisy a iniciály",
        body: "Přidej skutečný vlastnoruční podpis nebo napsaný podpis. Umísti ho kamkoli jediným ťuknutím.",
      },
      {
        icon: "Highlighter",
        title: "Poznámky a zvýraznění",
        body: "Zvýrazňuj, podtrhávej, přeškrtávej. Přidávej poznámky od ruky nebo komentáře.",
      },
      {
        icon: "FileText",
        title: "Vyplň formuláře",
        body: "Ťukni na pole a vyplň je. Vyplněný formulář ulož jako nové PDF.",
      },
    ],
  },
  steps: {
    heading: "Jak upravit PDF z telefonu",
    items: [
      {
        title: "Otevři aplikaci PDF Editor",
        body: "Spusť aplikaci z plochy telefonu. Pro začátek nepotřebuješ účet.",
      },
      {
        title: "Vyber PDF, které chceš upravit",
        body: "Naimportuj ho ze Souborů, iCloud Drive, Google Drive nebo z e-mailu. Nebo ťukni na PDF kdekoli a jako aplikaci pro otevření zvol PDF Editor.",
      },
      {
        title: "Ťukni na část, kterou chceš změnit",
        body: "Ťukni na odstavec, pokud chceš upravit text, na obrázek, pokud ho chceš nahradit, nebo na miniaturu stránky, pokud chceš změnit její pořadí.",
      },
      {
        title: "Proveď úpravy",
        body: "Úpravy se na stránce projeví okamžitě. Pro přesnost si přibliž stránku sevřením prstů. Zpět a Znovu fungují, jak čekáš.",
      },
      {
        title: "Ulož výsledek",
        body: "Ulož přes originál, jako novou kopii, nebo výsledek rovnou sdílej přes Mail, AirDrop nebo libovolnou zprávovou aplikaci.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Úpravy na cestách",
    body: "Většina úprav PDF přijde v tu nejhorší možnou chvíli – pět minut před schůzkou, ve vlaku, mezi přednáškami. Editor navržený primárně pro telefon ti dovolí opravit špatně napsané jméno ve smlouvě cestou do kanceláře nebo připojit podpis k nabídce během pauzy na kávu. Bez notebooku, bez stolního počítače, bez čekání, až budeš doma.",
  },
  faq: [
    {
      q: "Je aplikace PDF Editor zdarma?",
      a: "Ano. Základní úpravy – text, obrázky, změna pořadí stránek, podpisy a export – jsou zdarma. Některé pokročilé funkce se odemykají po přechodu na Pro.",
    },
    {
      q: "Funguje offline?",
      a: "Ano. Úpravy probíhají celé v zařízení. Připojení potřebuješ jen tehdy, když stahuješ soubory z cloudu nebo je sdílíš přes online služby.",
    },
    {
      q: "Můžu upravovat naskenované PDF?",
      a: "Naskenované PDF je technicky vzato obrázek. I tak ho můžeš okomentovat, podepsat a měnit pořadí stránek. K úpravě samotného textu je potřeba nejdřív OCR, které aplikace umí spustit u většiny dokumentů.",
    },
    {
      q: "Existuje limit velikosti souboru?",
      a: "Žádný umělý limit neexistuje. Velmi velké PDF (stovky MB se složitou grafikou) mohou být na starších telefonech pomalejší, ale aplikace je stavěná na reálné dokumenty.",
    },
    {
      q: "Nerozbijí mé úpravy původní rozvržení?",
      a: "Ne. Úpravy se provádí přímo v dokumentu. Písma, okraje a stávající formátování zůstávají u PDF s textovou vrstvou zachované.",
    },
    {
      q: "Můžu exportovat do Wordu?",
      a: "Ano. Upravené PDF můžeš ve stejné aplikaci převést do Wordu nebo dalších formátů.",
    },
  ],
  related: [
    {
      label: "Jak upravit PDF na iPhonu",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    {
      label: "Jak upravit PDF na Androidu",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Podepiš PDF z telefonu", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Uprav své PDF z telefonu během pár sekund.",
    sub: "Zdarma na iOS a Androidu. Pro začátek nepotřebuješ účet.",
  },
};

export default content;
