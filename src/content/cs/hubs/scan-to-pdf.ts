import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "scan-to-pdf",
  hero: {
    eyebrow: "Skenovat do PDF",
    h1: "Proměň papír v čistá, prohledávatelná PDF.",
    highlight: "čistá",
    lead: "Fotoaparátem telefonu skenuj účtenky, doklady totožnosti, smlouvy i vícestránkové dokumenty. Automatické rozpoznání okrajů, korekce perspektivy a OCR – hotovo za pár sekund, přímo v zařízení.",
    primaryCta: { label: "Otevřít aplikaci", href: SITE.app.appStore },
  },
  problem: {
    heading: "Proč fotky dokumentů z telefonu vypadají špatně",
    paragraphs: [
      "Když vyfotíš smlouvu běžným fotoaparátem, vznikne JPG přepálený stropním osvětlením, zdeformovaný úhlem, pod jakým jsi telefon držel, a navíc na něm bude vidět i podložka pod stránkou. Má špatný tvar, špatný kontrast a není prohledávatelný. Kdokoli, komu ho pošleš, musí nad ním mžourat, aby něco přečetl.",
      "Pošli takový JPG e-mailem účetní a dostaneš zpátky zdvořilou žádost o „pořádné PDF“. Důvod je konkrétní: JPG účtenek se nedají indexovat, účetní software u nich neumí spustit OCR a často neprojdou validací při nahrávání dokumentů.",
      "Aplikace pro skenování dokumentů přebuduje fotku do podoby, jakou by měla mít: obdélníkovou, s opraveným kontrastem, narovnanou a uloženou jako PDF se skrytou textovou vrstvou. Vícestránkové dokumenty se stanou jedním souborem, ne dvanácti JPG rozházenými ve fotoalbu.",
    ],
  },
  features: {
    heading: "Skenuj, jako by šlo o pořádný skener",
    items: [
      {
        icon: "ScanLine",
        title: "Automatické rozpoznání okrajů",
        body: "Aplikace sama najde okraje dokumentu a snímek pořídí ve chvíli, kdy je záběr správný.",
      },
      {
        icon: "Maximize",
        title: "Korekce perspektivy",
        body: "Šikmé úhly se narovnají. Výsledek vypadá, jako by byl vyfocený přímo shora.",
      },
      {
        icon: "Layers",
        title: "Vícestránkové skeny",
        body: "Snímej stránku po stránce v řadě za sebou. Aplikace je spojí do jednoho PDF.",
      },
      {
        icon: "ScanText",
        title: "OCR (prohledávatelný text)",
        body: "Rozpoznej slova uvnitř naskenovaných stránek, aby bylo výsledné PDF prohledávatelné a text šlo kopírovat.",
      },
      {
        icon: "Sun",
        title: "Chytré filtry",
        body: "Barevný, černobílý nebo dokumentový filtr optimalizovaný tak, aby si poradil se špatným osvětlením.",
      },
      {
        icon: "Tag",
        title: "Automatické pojmenování",
        body: "Aplikace navrhne název souboru podle obsahu dokumentu – účtenka, smlouva, doklad totožnosti.",
      },
    ],
  },
  steps: {
    heading: "Jak naskenovat dokument do PDF",
    items: [
      {
        title: "Otevři skener",
        body: "Ťukni na dlaždici Skenovat na domovské obrazovce aplikace PDF Editor.",
      },
      {
        title: "Zaměř dokument",
        body: "Drž telefon zhruba nad stránkou. Aplikace najde okraje a jakmile je připravená, pulzuje.",
      },
      {
        title: "Nech ho zachytit automaticky",
        body: "Nebo spusť snímání ručně. Zachycení proběhne okamžitě.",
      },
      {
        title: "Uprav rohy, pokud je potřeba",
        body: "Detekované okraje můžeš před opravou perspektivy doladit ručně.",
      },
      {
        title: "Přidej další stránky",
        body: "Pokračuj ťuknutím na počítadlo stránek. Aplikace je spojí ve správném pořadí.",
      },
      {
        title: "Ulož jako PDF",
        body: "Zvol název souboru (nebo přijmi automatický návrh) a ulož. OCR poběží na pozadí.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Skenování tam, kde zrovna jsi",
    body: "Účtenky se skenují u stolu, smlouvy v zasedačce, doklady totožnosti u odbavovací přepážky na letišti. Celý smysl je v tom, že si v tašce nenosíš stolní skener. Skener dokumentů v telefonu je tomu nejbližší náhradou a pro běžné pracovní potřeby naprosto dostačující.",
  },
  faq: [
    {
      q: "Je kvalita skenu stejně dobrá jako u stolního skeneru?",
      a: "U běžných pracovních dokumentů – účtenek, smluv, dokladů totožnosti, formulářů – ano. Pro archivní skenování fotografií nebo drobný tisk na lesklém papíru je stolní skener pořád lepší.",
    },
    {
      q: "Jak spolehlivé je vícestránkové skenování?",
      a: "Velmi spolehlivé. Aplikace snímá stránku za stránkou, dokud sám neskončíš, a před uložením můžeš pořadí stránek změnit nebo je smazat.",
    },
    {
      q: "Jaké jazyky OCR podporuje?",
      a: "Všechny hlavní jazyky s latinkou, navíc azbuku, řečtinu, arabštinu, čínštinu, japonštinu a korejštinu. Kvalita rozpoznání se liší podle osvětlení a stavu stránky.",
    },
    {
      q: "Můžu skenovat doklady totožnosti a pasy?",
      a: "Ano. Aplikace vytvoří čistý, narovnaný sken, který můžeš uložit nebo sdílet. Kvůli bezpečnosti drž skeny dokladů v chráněné složce nebo na výsledné PDF nastav heslo.",
    },
    {
      q: "Funguje offline?",
      a: "Skenování a rozpoznávání okrajů běží přímo v zařízení. OCR pro některé méně běžné jazyky může při prvním použití vyžadovat připojení kvůli stažení modelu.",
    },
  ],
  related: [
    {
      label: "Krok za krokem: jak naskenovat dokumenty do PDF",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    { label: "Uprav naskenované PDF dodatečně", path: "/pdf-editor" },
    {
      label: "PDF pro firmy",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Skenuj dokumenty rovnou z fotoaparátu.",
    sub: "Zdarma na iOS a Androidu. Skeny zůstávají v tvém zařízení.",
  },
};

export default content;
