import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-images",
  hero: {
    eyebrow: "PDF do obrázků",
    h1: "Exportuj každou stránku PDF jako PNG nebo JPG.",
    highlight: "PNG nebo JPG",
    lead: "Proměň stránky PDF ve stažitelné soubory PNG nebo JPEG – vykreslené lokálně, přímo v prohlížeči.",
  },
  privacyNote:
    "Tvůj soubor se vykresluje lokálně v prohlížeči a neodesílá se na naše servery. Nic neopouští tvé zařízení.",
  howTo: {
    heading: "Jak převést PDF do obrázků",
    steps: [
      { title: "Přidat soubor", body: "Přetáhni jedno PDF do stránky, nebo klikni a vyber ho." },
      { title: "Vybrat formát", body: "Zvol PNG pro čistý text a průhlednost, nebo JPG pro menší soubory." },
      { title: "Vybrat měřítko", body: "Vyšší měřítko = ostřejší obrázky, větší soubory. 2× je obvykle správná volba." },
      { title: "Stáhnout výsledek", body: "Každá stránka se stáhne jako samostatný obrázek." },
    ],
  },
  useCases: {
    heading: "Kdy je tento nástroj užitečný",
    items: [
      { title: "Vložit stránku do Slacku", body: "Náhledy obrázků se zobrazí přímo v textu, což u PDF nefunguje." },
      { title: "Znovu použít graf v prezentaci", body: "Vytáhni jednu stránku a vlož ji do snímku." },
      { title: "Vytvořit miniatury", body: "Sestav kontaktní list stránek PDF pro rychlou kontrolu." },
      { title: "Náhledy na web", body: "Použij vykreslené obrázky jako odlehčené náhledy na webu." },
    ],
  },
  limitations: {
    heading: "Omezení",
    items: [
      { title: "Paměť prohlížeče", body: "Velmi velká PDF ve vysokém měřítku můžou vyčerpat paměť. Zkus měřítko 1,5×, nebo PDF nejdřív rozděl." },
      { title: "PDF chráněná heslem", body: "Šifrované soubory se nedají vykreslit. Nejdřív je odemkni, nebo použij mobilní aplikaci PDF Editor." },
      { title: "Vektorový obsah se změní na rastr", body: "Obrázky nezachovávají prohledávatelný text. Pro to si ponech originální PDF." },
    ],
  },
  related: [
    { label: "Obrázek do PDF – opačný směr", path: "/image-to-pdf" },
    { label: "Rozdělit PDF", path: "/split-pdf" },
    { label: "Všechny bezplatné nástroje pro PDF", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Odesílá se můj soubor na server?", a: "Ne. Vykreslování probíhá celé v tvém prohlížeči; nic neopouští tvé zařízení." },
    { q: "PNG, nebo JPG – co vybrat?", a: "PNG je ostřejší pro text a podporuje průhlednost. JPG je menší a vhodný pro fotky a snímky celé stránky." },
    { q: "Co znamená měřítko?", a: "Kolik obrazových pixelů připadá na bod PDF. 2× dá ostré výsledky na displejích retina. 3× je velké, ale velmi ostré." },
    { q: "Můžu získat jeden ZIP archiv se všemi stránkami?", a: "Zatím ne – stránky se stahují jedna po druhé. Pro hromadný export je rychlejší mobilní aplikace PDF Editor." },
  ],
  appCta: {
    heading: "Potřebuješ nástroje pro PDF i offline?",
    sub: "PDF Editor pro iPhone a Android vykresluje stránky okamžitě díky hardwarové akceleraci.",
  },
};

export default content;
