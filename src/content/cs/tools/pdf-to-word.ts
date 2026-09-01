import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-word",
  hero: {
    eyebrow: "PDF do Wordu",
    h1: "Převeď PDF do upravitelného Wordu – přímo v prohlížeči.",
    highlight: "přímo v prohlížeči",
    lead: "Vytáhni text z PDF do upravitelného souboru .docx, který můžeš dál zpracovat ve Wordu, Google Docs nebo Pages. Poctivý převod textu – žádné falešné sliby o „dokonalém rozvržení“.",
  },
  privacyNote:
    "Tvůj soubor se zpracovává lokálně v prohlížeči a neodesílá se na naše servery. Nic neopouští tvé zařízení.",
  howTo: {
    heading: "Jak převést PDF do Wordu",
    steps: [
      { title: "Přidat soubor", body: "Přetáhni PDF s textem do stránky, nebo klikni a vyber ho." },
      { title: "Převést", body: "Klikni na Převést do Wordu. Vybratelný text se extrahuje lokálně, přímo v prohlížeči." },
      { title: "Stáhnout výsledek", body: "Soubor .docx se stáhne automaticky – otevři a uprav ho kdekoliv." },
      { title: "Dokončit úpravy", body: "V editoru znovu nastav nadpisy a rozvržení. Text je tvůj, můžeš si ho přeuspořádat, jak potřebuješ." },
    ],
  },
  useCases: {
    heading: "Kdy je tohle správný nástroj",
    items: [
      { title: "Znovu použít znění smlouvy", body: "Vytáhni ustanovení ze smlouvy v PDF do upravitelného konceptu místo ručního přepisování." },
      { title: "Zpracovat zprávu dál", body: "Přenes text zprávy z PDF do dokumentu, který si můžeš přeuspořádat." },
      { title: "Citovat a vypisovat úryvky", body: "Vytáhni pasáže pro poznámky, shrnutí nebo citace bez ručního přepisování." },
      { title: "Zachránit PDF, ke kterému už nemáš zdroj", body: "Získej zpět upravitelný text, i když je původní .docx dávno pryč." },
    ],
  },
  limitations: {
    heading: "Poctivá omezení",
    items: [
      { title: "Rozvržení se nezachovává", body: "Tento nástroj extrahuje jen text. Sloupce, tabulky, přesné rozestupy, písma a obrázky se nepřenášejí – formátování si v editoru nastavíš znovu." },
      { title: "Naskenovaná PDF nefungují", body: "PDF, která jsou jen obrázek (naskenovaná), nemají textovou vrstvu. OCR v prohlížeči k dispozici není – pro skeny použij mobilní aplikaci PDF Editor." },
      { title: "Složité dokumenty potřebují úpravu", body: "Silně formátovaná PDF (více sloupců, poznámky pod čarou) se extrahují jako čitelný proud textu, který budeš chtít trochu učesat." },
    ],
  },
  related: [
    { label: "Word do PDF – opačný směr", path: "/word-to-pdf" },
    { label: "PDF do obrázků", path: "/pdf-to-images" },
    { label: "Všechny bezplatné nástroje pro PDF", path: "/pdf-tools" },
    { label: "PDF vs. DOCX – co použít", path: "/compare/pdf-vs-docx" },
    {
      label: "Jak převést PDF do Wordu",
      path: "/guides/how-to-convert-pdf-to-word",
    },
  ],
  faq: [
    { q: "Odesílá se můj soubor na server?", a: "Ne. Extrakce textu probíhá celá v tvém prohlížeči. Tvé PDF tvé zařízení nikdy neopustí." },
    { q: "Bude soubor Word vypadat úplně stejně jako PDF?", a: "Ne – a nebudeme tvrdit opak. Jde o praktický převod textu. Rozvržení, písma, sloupce a obrázky se nezachovávají; formátování si v editoru nastavíš znovu." },
    { q: "Píše to, že nebyl nalezen žádný text – proč?", a: "Tvé PDF je nejspíš sken nebo soubor jen s obrázkem bez textové vrstvy. Nástroje v prohlížeči neumí OCR – mobilní aplikace PDF Editor ano." },
    { q: "Jaký formát dostanu?", a: "Běžný soubor .docx, který se otevře v Microsoft Wordu, Google Docs, Pages i LibreOffice." },
    { q: "Můžu ho převést zpátky?", a: "Ano – použij Word do PDF a upravený .docx převeď zpátky na PDF." },
  ],
  appCta: {
    heading: "Potřebuješ nástroje pro PDF i na cestách?",
    sub: "PDF Editor pro iPhone a Android převádí, upravuje a podepisuje dokumenty přímo z telefonu.",
  },
};

export default content;
