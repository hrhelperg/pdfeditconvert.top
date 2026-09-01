import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "add-watermark-to-pdf",
  hero: {
    eyebrow: "Přidat vodoznak",
    h1: "Přidej textový vodoznak na každou stránku PDF.",
    highlight: "každou stránku",
    lead: "Přidej jednoduchý textový vodoznak, než PDF sdílíš – zvol polohu, průhlednost, velikost písma a natočení.",
  },
  privacyNote:
    "Tvůj soubor se zpracovává lokálně v prohlížeči a neodesílá se na naše servery. Nic neopouští tvé zařízení.",
  howTo: {
    heading: "Jak přidat vodoznak",
    steps: [
      { title: "Přidat soubor", body: "Přetáhni jedno PDF do stránky, nebo klikni a vyber ho." },
      { title: "Zadat text vodoznaku", body: "Nejlépe funguje asi do 40 znaků. Příklady: DŮVĚRNÉ, KONCEPT, Ukázka." },
      { title: "Nastavit průhlednost a úhel", body: "Nižší průhlednost pro decentní efekt, vyšší pro výraznější. 45° se hodí pro většinu rozvržení." },
      { title: "Stáhnout výsledek", body: "PDF lokálně znovu sestavíme s vodoznakem na každé stránce." },
    ],
  },
  useCases: {
    heading: "Kdy jsou vodoznaky užitečné",
    items: [
      { title: "Koncepty v revizi", body: "Označ dokumenty jako KONCEPT, než je pošleš dál, aby nedošlo k záměně." },
      { title: "Důvěrné materiály", body: "Otiskni DŮVĚRNÉ, než sdílíš citlivé smlouvy nebo finanční údaje." },
      { title: "Ukázkové materiály", body: "Označ ukázky ze svého portfolia vodoznakem, aby je nikdo nemohl použít bez souhlasu." },
      { title: "Jen interní dokumenty", body: "Označ dokumenty, které nejsou určené k šíření mimo firmu." },
    ],
  },
  limitations: {
    heading: "Omezení",
    items: [
      { title: "Jen textové vodoznaky", body: "Tento nástroj otiskuje text. Pro vodoznaky s obrázkem nebo logem použij mobilní aplikaci PDF Editor." },
      { title: "Jen standardní písma", body: "Používáme vestavěné písmo Helvetica, aby výsledek zůstal přenositelný. Vlastní písma se nevkládají." },
      { title: "Vodoznak lze odstranit", body: "Vodoznak není právní ochrana. Odradí od náhodného zneužití, ne od cílené úpravy." },
    ],
  },
  related: [
    { label: "Sloučit soubory PDF", path: "/merge-pdf" },
    { label: "Rozdělit PDF", path: "/split-pdf" },
    { label: "Otočit PDF", path: "/rotate-pdf" },
    { label: "Všechny bezplatné nástroje pro PDF", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Odesílá se můj soubor na server?", a: "Ne. Přidání vodoznaku probíhá celé v tvém prohlížeči; nic neopouští tvé zařízení." },
    { q: "Můžu použít jiné písmo?", a: "V tomto nástroji ne – používáme Helvetica, aby výsledek zůstal přenositelný. Pro vlastní písma použij mobilní aplikaci PDF Editor." },
    { q: "Objeví se vodoznak na každé stránce?", a: "Ano. Stejný text se diagonálně vycentruje na každé stránce." },
    { q: "Dá se vodoznak odstranit?", a: "Někým se správnými nástroji ano. Vodoznak odradí od náhodného zneužití, ale není bezpečnostní opatření." },
  ],
  appCta: {
    heading: "Potřebuješ vodoznaky s obrázkem nebo logem?",
    sub: "PDF Editor pro iPhone a Android podporuje vlastní písma, obrázky a umístění pro každou stránku zvlášť.",
  },
};

export default content;
