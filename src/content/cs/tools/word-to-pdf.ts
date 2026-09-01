import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "word-to-pdf",
  hero: {
    eyebrow: "Word do PDF",
    h1: "Převeď Word do PDF – přímo v prohlížeči.",
    highlight: "přímo v prohlížeči",
    lead: "Proměň soubor .docx nebo .txt v čistý PDF připravený ke sdílení. Vše běží přímo na tvém zařízení – tvůj dokument se nikam neodesílá.",
  },
  privacyNote:
    "Tvůj soubor se zpracovává lokálně v prohlížeči a neodesílá se na naše servery. Nic neopouští tvé zařízení.",
  howTo: {
    heading: "Jak převést Word do PDF",
    steps: [
      { title: "Přidat dokument", body: "Přetáhni soubor .docx nebo .txt do stránky, nebo klikni a vyber ho." },
      { title: "Převést", body: "Klikni na Převést do PDF. Text se přečte a lokálně, přímo v prohlížeči, zalomí do PDF." },
      { title: "Stáhnout výsledek", body: "Čisté PDF ve formátu A4 se stáhne automaticky." },
      { title: "Sdílet", body: "Pošli formát, který vypadá všude stejně a nejde ho omylem upravit." },
    ],
  },
  useCases: {
    heading: "Kdy je tohle správný nástroj",
    items: [
      { title: "Poslat neupravitelnou kopii", body: "Sdílej koncept jako PDF, aby ho příjemce nemohl omylem změnit." },
      { title: "Odeslat přihlášku", body: "Řada portálů vyžaduje PDF, ne .docx – převeď dokument, než ho nahraješ." },
      { title: "Uložit prosté poznámky", body: "Proměň deníky nebo poznámky .txt v přehledné stránkované PDF pro archiv." },
      { title: "Předání připravené k tisku", body: "Z jednoduchého dokumentu vytvoř jednotné PDF ve formátu A4." },
    ],
  },
  limitations: {
    heading: "Poctivá omezení",
    items: [
      { title: "Převod zaměřený na text", body: "Text dokumentu extrahujeme a znovu zalomíme do čistého PDF. Původní písma, obrázky, tabulky a přesné rozestupy z .docx se nepřenášejí." },
      { title: "Starý formát .doc nepodporujeme", body: "Staré binární soubory .doc se v prohlížeči přečíst nedají. Nejdřív ulož jako .docx." },
      { title: "Neobvyklé znaky se zjednoduší", body: "Vestavěné písmo pokrývá latinku; některé speciální znaky se zjednoduší, aby převod nikdy neselhal." },
    ],
  },
  related: [
    { label: "PDF do Wordu – opačný směr", path: "/pdf-to-word" },
    { label: "Obrázek do PDF", path: "/image-to-pdf" },
    { label: "Sloučit PDF", path: "/merge-pdf" },
    { label: "Všechny bezplatné nástroje pro PDF", path: "/pdf-tools" },
    {
      label: "Jak převést Word do PDF",
      path: "/guides/how-to-convert-word-to-pdf",
    },
  ],
  faq: [
    { q: "Odesílá se můj soubor na server?", a: "Ne. Převod probíhá celý v tvém prohlížeči. Tvůj dokument tvé zařízení nikdy neopustí." },
    { q: "Bude PDF vypadat úplně stejně jako můj soubor Word?", a: "Ne – a netvrdíme opak. Jde o čistý převod zaměřený na text: písma, obrázky, tabulky a přesné rozestupy z .docx se nepřenášejí." },
    { q: "Jaké soubory jsou podporované?", a: "Moderní Word .docx a prostý text .txt. Starý binární formát .doc podporovaný není – nejdřív ho ulož jako .docx." },
    { q: "Existuje limit velikosti?", a: "Až 100 MB na soubor, protože vše se zpracovává v paměti tvého prohlížeče." },
    { q: "Můžu PDF převést zpátky do Wordu?", a: "Ano – použij PDF do Wordu a text extrahuj zpátky do upravitelného souboru .docx." },
  ],
  appCta: {
    heading: "Potřebuješ nástroje pro PDF i na cestách?",
    sub: "PDF Editor pro iPhone a Android převádí, podepisuje a sdílí dokumenty přímo z telefonu.",
  },
};

export default content;
