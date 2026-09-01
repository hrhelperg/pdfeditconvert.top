import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "rotate-pdf",
  hero: {
    eyebrow: "Otočit PDF",
    h1: "Oprav PDF stránky natočené na bok – přímo v prohlížeči.",
    highlight: "přímo v prohlížeči",
    lead: "Otoč všechny stránky nebo jen vybrané a stáhni opravené PDF – vše přímo v prohlížeči.",
  },
  privacyNote:
    "Tvůj soubor se zpracovává lokálně v prohlížeči a neodesílá se na naše servery. Nic neopouští tvé zařízení.",
  howTo: {
    heading: "Jak otočit PDF",
    steps: [
      { title: "Přidat soubor", body: "Přetáhni jedno PDF do stránky, nebo klikni a vyber ho." },
      { title: "Vybrat úhel", body: "Zvol 90°, 180° nebo 270° (po směru hodinových ručiček)." },
      { title: "Vybrat stránky", body: "Otoč všechny stránky, nebo zadej čísla stránek (např. 1,3-5)." },
      { title: "Otočit a stáhnout", body: "Klikni na Otočit. PDF lokálně sestavíme znovu s novou orientací." },
    ],
  },
  useCases: {
    heading: "Kdy je otočení správná volba",
    items: [
      { title: "Skeny z telefonu natočené na bok", body: "Skeny z fotoaparátu se často uloží na šířku – naprav to jedním kliknutím." },
      { title: "Zprávy se smíšenou orientací", body: "Široké tabulky na stránkách na šířku uprostřed zprávy na výšku? Oprav je bez nového skenování." },
      { title: "Pasy a průkazy totožnosti", body: "Zajisti, aby se každá stránka četla stejně, než dojde k problémům při nahrávání na portál úřadu." },
      { title: "Účtenky a faktury", body: "Před sloučením srovnej hromadu vyfocených účtenek tak, aby byly čitelné jedním směrem." },
    ],
  },
  limitations: {
    heading: "Omezení",
    items: [
      { title: "PDF chráněná heslem", body: "Uzamčené soubory se v prohlížeči otočit nedají. Nejdřív je odemkni, nebo použij mobilní aplikaci PDF Editor." },
      { title: "Vlastní úhel pro každou stránku zvlášť", body: "Tento nástroj aplikuje vždy jeden úhel najednou. Pro různé úhly ho spusť dvakrát s různým výběrem stránek." },
      { title: "Poznámky a pole formulářů", body: "Otočení může vizuálně posunout překryvné prvky. Mobilní aplikace zpracovává poznámky přesněji." },
    ],
  },
  related: [
    { label: "Sloučit soubory PDF", path: "/merge-pdf" },
    { label: "Rozdělit PDF", path: "/split-pdf" },
    { label: "Přidat vodoznak do PDF", path: "/add-watermark-to-pdf" },
    { label: "Změnit pořadí stránek PDF", path: "/reorder-pdf-pages" },
    { label: "Všechny bezplatné nástroje pro PDF", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Odesílá se můj soubor na server?", a: "Ne. Otočení probíhá celé v tvém prohlížeči; nic neopouští tvé zařízení." },
    { q: "Můžu otočit jen některé stránky?", a: "Ano. Použij pole pro výběr stránek, např. 1,3-5,9." },
    { q: "Sníží otočení kvalitu?", a: "Ne. Stránky zůstávají bajt po bajtu stejné – jen nastavíme metadata otočení." },
    { q: "Můžu otočit PDF chráněné heslem?", a: "V prohlížeči ne. Nejdřív odstraň heslo, nebo použij mobilní aplikaci PDF Editor." },
  ],
  appCta: {
    heading: "Otoč PDF i z telefonu.",
    sub: "PDF Editor pro iPhone a Android upravuje, otáčí a podepisuje PDF offline.",
  },
};

export default content;
