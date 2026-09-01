import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "extract-pdf-pages",
  hero: {
    eyebrow: "Extrahovat stránky z PDF",
    h1: "Extrahuj stránky z PDF – přímo v prohlížeči.",
    highlight: "přímo v prohlížeči",
    lead: "Přidej PDF, zadej stránky nebo rozsahy, které chceš, a stáhni nové PDF jen s těmito stránkami. Vše běží na tvém zařízení.",
  },
  privacyNote:
    "Tvůj soubor se zpracovává lokálně v prohlížeči a neodesílá se na naše servery. Nic neopouští tvé zařízení.",
  howTo: {
    heading: "Jak extrahovat stránky z PDF",
    steps: [
      { title: "Přidat soubor", body: "Přetáhni PDF do stránky, nebo klikni a vyber ho. Zobrazíme celkový počet stránek." },
      { title: "Zadat stránky", body: "Napiš jednotlivé stránky a rozsahy, např. 1-3,5,8-10. Počet vybraných stránek se aktualizuje za psaní." },
      { title: "Extrahovat", body: "Klikni na Extrahovat stránky. Nové PDF jen s těmito stránkami se sestaví lokálně." },
      { title: "Stáhnout výsledek", body: "Extrahované PDF se stáhne automaticky." },
    ],
  },
  useCases: {
    heading: "Kdy extrakce pomůže",
    items: [
      { title: "Sdílet jen to potřebné", body: "Pošli jen jednu sekci, kapitolu nebo podepsanou stránku místo celého dokumentu." },
      { title: "Vytáhnout formulář nebo účtenku", body: "Vezmi jen tu jednu stránku, kterou portál vyžaduje, a zbytek dokumentu nezveřejňuj." },
      { title: "Oddělit kapitolu", body: "Vytvoř zaměřené PDF z dlouhé zprávy nebo knihy pro studium nebo revizi." },
      { title: "Sestavit vlastní balíček", body: "Přeuspořádej výběr tím, že stránky vypíšeš v pořadí, v jakém je chceš." },
    ],
  },
  limitations: {
    heading: "Poctivá omezení",
    items: [
      { title: "PDF chráněná heslem", body: "Šifrované soubory se v prohlížeči otevřít nedají. Nejdřív je odemkni, nebo použij mobilní aplikaci PDF Editor." },
      { title: "Stránky mimo rozsah", body: "Čísla stránek nad délku dokumentu se ignorují; pokud nezůstane vybraná žádná platná stránka, dostaneš jasnou chybovou hlášku." },
      { title: "Velmi velká PDF", body: "Prohlížečům dojde paměť dávno předtím, než nativním aplikacím. U obřích souborů použij aplikaci PDF Editor." },
    ],
  },
  related: [
    { label: "Rozdělit PDF", path: "/split-pdf" },
    { label: "Změnit pořadí stránek PDF", path: "/reorder-pdf-pages" },
    { label: "Komprimovat PDF", path: "/compress-pdf" },
    { label: "Sloučit PDF", path: "/merge-pdf" },
  ],
  faq: [
    { q: "Odesílají se mé soubory na server?", a: "Ne. Extrakce probíhá celá v tvém prohlížeči. Tvůj soubor tvé zařízení nikdy neopustí." },
    { q: "Jaké formáty stránek můžu zadat?", a: "Jednotlivé stránky a rozsahy oddělené čárkami: 1-3, 2,4,6 nebo 1-2,5,8-10. Mezery nevadí." },
    { q: "Co se stane u neplatného rozsahu?", a: "Neplatné hodnoty se odmítnou s jasnou zprávou; čísla mimo rozsah se ignorují. Pokud nezůstane nic platného, dozvíš se proč." },
    { q: "Můžu stránky opakovat nebo měnit jejich pořadí?", a: "Ano. Vypiš stránky v pořadí, v jakém je chceš; opakování stránky ji ve výsledku vytvoří vícekrát." },
    { q: "Mění extrakce kvalitu?", a: "Ne. Vybrané stránky se kopírují přesně tak, jak jsou – text zůstává vybratelný a nic se znovu nekomprimuje." },
  ],
  appCta: {
    heading: "Potřebuješ nástroje pro PDF i na cestách?",
    sub: "PDF Editor pro iPhone a Android extrahuje, rozděluje a podepisuje PDF přímo z telefonu.",
  },
};

export default content;
