import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "reorder-pdf-pages",
  hero: {
    eyebrow: "Změnit pořadí stránek PDF",
    h1: "Změň pořadí stránek PDF – přímo v prohlížeči.",
    highlight: "přímo v prohlížeči",
    lead: "Přidej PDF, prohlédni si náhled každé stránky, přesuň stránky do pořadí, jaké chceš, a stáhni přeuspořádaný soubor. Nic se neodesílá na server.",
  },
  privacyNote:
    "Tvůj soubor se zpracovává lokálně v prohlížeči a neodesílá se na naše servery. Nic neopouští tvé zařízení.",
  howTo: {
    heading: "Jak změnit pořadí stránek PDF",
    steps: [
      { title: "Přidat soubor", body: "Přetáhni PDF do stránky, nebo klikni a vyber ho ze svého zařízení." },
      { title: "Zkontrolovat náhledy", body: "Každá stránka se vykreslí jako miniatura, takže přesně vidíš, co přesouváš." },
      { title: "Přesunout stránky", body: "Šipkami nahoru/dolů u každé stránky ji posuň dřív nebo později v dokumentu." },
      { title: "Vytvořit a stáhnout", body: "Klikni na Změnit pořadí PDF. Přeuspořádané PDF se sestaví lokálně a automaticky se stáhne." },
    ],
  },
  useCases: {
    heading: "Kdy změna pořadí pomůže",
    items: [
      { title: "Opravit pořadí ze skenu", body: "Aplikace telefonu a skeneru často zachytí stránky mimo pořadí – naprav to ještě před sdílením." },
      { title: "Přesunout titulní stránku nebo přílohu", body: "Přesuň titulní stránku dopředu, nebo posuň podpůrné materiály na konec." },
      { title: "Sestavit sloučený soubor znovu", body: "Po sloučení dokumentů srovnej stránky přesně do pořadí, v jakém je potřebuješ číst." },
      { title: "Připravit na tisk", body: "Uspořádej stránky pro brožury, podklady nebo oboustranný tisk." },
    ],
  },
  limitations: {
    heading: "Poctivá omezení",
    items: [
      { title: "PDF chráněná heslem", body: "Šifrované soubory se v prohlížeči otevřít nedají. Nejdřív je odemkni, nebo použij mobilní aplikaci PDF Editor." },
      { title: "Velmi velká PDF", body: "Vykreslení miniatury pro každou stránku zabírá paměť. Stovky stránek můžou být pomalé nebo narazit na limity prohlížeče." },
      { title: "Miniatury chvíli trvají", body: "Náhledy se vykreslují stránku po stránce přímo na tvém zařízení, takže u velkých PDF počkej pár sekund, než začneš měnit pořadí." },
    ],
  },
  related: [
    { label: "Sloučit PDF", path: "/merge-pdf" },
    { label: "Rozdělit PDF", path: "/split-pdf" },
    { label: "Otočit stránky PDF", path: "/rotate-pdf" },
    { label: "Extrahovat stránky PDF", path: "/extract-pdf-pages" },
  ],
  faq: [
    { q: "Odesílají se mé soubory na server?", a: "Ne. PDF se celé vykresluje a znovu sestavuje v tvém prohlížeči. Tvůj soubor tvé zařízení nikdy neopustí." },
    { q: "Můžu stránky přesouvat přetažením?", a: "Změna pořadí funguje přes jasná tlačítka nahoru/dolů u každé stránky. Spolehlivě funguje na mobilu i na počítači, bez malých úchytů pro přetahování, které by se špatně ovládaly." },
    { q: "Změní se obsah nebo kvalita stránek?", a: "Ne. Stránky se kopírují přesně tak, jak jsou – mění se jen jejich pořadí. Text zůstává vybratelný." },
    { q: "Proč to po přidání souboru chvíli trvá?", a: "Každá stránka se lokálně vykreslí do náhledové miniatury, aby bylo vidět, co přesouváš. Větší PDF trvají o něco déle." },
    { q: "Můžu změnit pořadí u PDF chráněného heslem?", a: "V prohlížeči ne. Nejdřív odstraň heslo, nebo použij mobilní aplikaci PDF Editor, která chráněné soubory podporuje." },
  ],
  appCta: {
    heading: "Potřebuješ nástroje pro PDF i na cestách?",
    sub: "PDF Editor pro iPhone a Android mění pořadí stránek, slučuje a podepisuje PDF přímo z telefonu.",
  },
};

export default content;
