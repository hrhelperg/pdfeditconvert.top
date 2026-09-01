import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "image-to-pdf",
  hero: {
    eyebrow: "Obrázek do PDF",
    h1: "Proměň obrázky JPG, PNG a WebP v jedno PDF.",
    highlight: "jedno PDF",
    lead: "Přidej obrázky JPG, PNG nebo WebP a spoj je do jednoho PDF. Změň pořadí stránek a stáhni – tvé obrázky zůstávají na tvém zařízení.",
  },
  privacyNote:
    "Tvé soubory se zpracovávají lokálně v prohlížeči a neodesílají se na naše servery. Nic neopouští tvé zařízení.",
  howTo: {
    heading: "Jak použít nástroj Obrázek do PDF",
    steps: [
      { title: "Přidat obrázky", body: "Přetáhni soubory JPG, PNG nebo WebP do stránky, nebo klikni a vyber je ze svého zařízení." },
      { title: "Změnit pořadí (podle potřeby)", body: "Šipkami nahoru a dolů u každého řádku srovnej stránky do správného pořadí." },
      { title: "Vytvořit PDF", body: "Klikni na Vytvořit PDF. Tvé obrázky se stanou stránkami jednoho dokumentu, každá v rozměru podle svého obrázku." },
      { title: "Stáhnout výsledek", body: "Vytvořené PDF se stáhne automaticky. Po uložení ho můžeš přejmenovat." },
    ],
  },
  useCases: {
    heading: "Kdy je tento nástroj užitečný",
    items: [
      { title: "Vyfocené účtenky a výdaje", body: "Slož měsíc účtenek do jednoho PDF, než ho pošleš účetní." },
      { title: "Skeny dokladů a pasů", body: "Spoj přední a zadní stranu do jednoho dokumentu, který přijme portál úřadu." },
      { title: "Snímky obrazovky do zprávy", body: "Slož řadu snímků obrazovky rozhraní do přehledného dokumentu k revizi." },
      { title: "Fotky z tabule", body: "Proměň sérii fotek z porady v jeden dokument, kterým tým může snadno listovat." },
    ],
  },
  limitations: {
    heading: "Omezení",
    items: [
      { title: "Jen JPG, PNG a WebP", body: "HEIC, AVIF, GIF a TIFF nejsou v prohlížeči podporované. Nejdřív je převeď, nebo použij mobilní aplikaci." },
      { title: "Paměť prohlížeče", body: "Velmi velké dávky (stovky fotek ve vysokém rozlišení) mohou zpomalit starší zařízení." },
      { title: "Žádné OCR", body: "Text uvnitř obrázků se neextrahuje. Pro prohledávatelné PDF skenuj aplikací PDF Editor." },
    ],
  },
  related: [
    { label: "Sloučit soubory PDF", path: "/merge-pdf" },
    { label: "PDF do obrázků", path: "/pdf-to-images" },
    { label: "Všechny bezplatné nástroje pro PDF", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Odesílají se mé obrázky někam?", a: "Ne. Vše běží v tvém prohlížeči. Tvé obrázky tvé zařízení nikdy neopustí." },
    { q: "Existuje limit velikosti souboru?", a: "Ano – každý soubor je omezen na 100 MB, aby prohlížeč zůstal responzivní. Mobilní aplikace PDF Editor zvládne větší dávky díky hardwarové akceleraci." },
    { q: "Můžu změnit velikost stránky?", a: "Každá stránka odpovídá rozměrům obrázku v pixelech, takže poměr stran zůstává správný. Pro jednotný výstup ve formátu A4 použij aplikaci PDF Editor." },
    { q: "Funguje to na iPhonu a Androidu?", a: "Ano, v jakémkoli moderním mobilním prohlížeči. Při častém používání je aplikace PDF Editor rychlejší a podporuje fotky HEIC přímo z fotoaparátu." },
  ],
  appCta: {
    heading: "Potřebuješ tohle na telefonu každý týden?",
    sub: "PDF Editor pro iPhone a Android skenuje, třídí a podepisuje PDF offline.",
  },
};

export default content;
