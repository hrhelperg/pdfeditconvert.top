import type { HomeContent } from "@/types/content";

/**
 * Czech homepage copy. Terminology policy: docs/localization/cs-terminology.md.
 */
export const HOME_CS: HomeContent = {
  heroEyebrow: "Bezplatné PDF nástroje v prohlížeči",
  heroH1Before: "Převeď, sluč a uprav PDF ",
  heroH1Highlight: "za pár sekund",
  heroH1After: "",
  heroLead:
    "Bezplatné PDF nástroje v prohlížeči se soukromým, lokálním zpracováním — nic se nenahrává na server.",
  trust: [
    "Soubory se zpracovávají lokálně, přímo ve tvém prohlížeči",
    "Bez nahrávání na server, bez účtu, bez vodoznaku",
    "Zdarma – funguje na mobilu i počítači",
  ],
  browseAllToolsLabel: "Projít všechny PDF nástroje →",
  toolsEyebrow: "Zdarma, přímo v prohlížeči",
  toolsHeading: "Všechny PDF nástroje, které potřebuješ — bez nahrávání na server.",
  toolsLead:
    "Sluč, rozděl, otoč, přidej vodoznak a převeď PDF přímo na téhle stránce. Každý nástroj běží lokálně, přímo ve tvém prohlížeči.",
  toolBadge: "Bezplatný nástroj",
  tools: [
    { id: "image-to-pdf", label: "Obrázek do PDF", desc: "Spoj JPG, PNG a WebP do jednoho PDF." },
    { id: "merge-pdf", label: "Sloučit PDF", desc: "Spoj PDF soubory do jednoho dokumentu." },
    { id: "split-pdf", label: "Rozdělit PDF", desc: "Vyber stránky podle rozsahu." },
    { id: "rotate-pdf", label: "Otočit PDF", desc: "Naprav stránky otočené na bok." },
    { id: "pdf-to-images", label: "PDF do obrázků", desc: "Exportuj stránky jako PNG nebo JPG." },
    {
      id: "add-watermark-to-pdf",
      label: "Přidat vodoznak",
      desc: "Otiskni text na každou stránku.",
    },
    {
      id: "compress-pdf",
      label: "Komprimovat PDF",
      desc: "Zmenši velikost souboru pro e-mail a nahrání na web.",
    },
    { id: "pdf-to-word", label: "PDF do Wordu", desc: "Extrahuj text do upravitelného .docx." },
    { id: "word-to-pdf", label: "Word do PDF", desc: "Proměň .docx nebo .txt v přehledné PDF." },
    {
      id: "reorder-pdf-pages",
      label: "Změnit pořadí stránek PDF",
      desc: "Prohlédni si a přeuspořádej stránky, pak si výsledek stáhni.",
    },
    {
      id: "extract-pdf-pages",
      label: "Extrahovat stránky z PDF",
      desc: "Ulož vybrané stránky nebo rozsahy jako nové PDF.",
    },
  ],
  appBandEyebrow: "Také na iPhonu a Androidu · pět nástrojů pro každý den",
  featureBand: [
    { key: "edit", label: "Upravit", sub: "Text, obrázky, stránky" },
    { key: "convert", label: "Převést", sub: "Word, JPG, PNG" },
    { key: "secure", label: "Zabezpečit", sub: "Ochrana heslem" },
    { key: "scan", label: "Skenovat", sub: "Papír do PDF" },
    { key: "organize", label: "Organizovat", sub: "Změna pořadí, rozdělení" },
  ],
  hubsHeading: "Všechno, co děláš s PDF — jednoduše vysvětlené.",
  hubsLead:
    "Praktické návody a postupy pro věci, které lidé s PDF řeší každý den.",
  hubs: [
    { id: "pdf-editor", label: "PDF Editor", desc: "Uprav text, obrázky a stránky." },
    {
      id: "pdf-converter",
      label: "PDF konvertor",
      desc: "Převeď do Wordu, JPG, PNG a dalších formátů.",
    },
    {
      id: "compress-pdf",
      label: "Komprimovat PDF",
      desc: "Zmenši soubory bez ztráty kvality.",
    },
    { id: "sign-pdf", label: "Podepsat PDF", desc: "Přidej podpis přímo z telefonu." },
    { id: "scan-to-pdf", label: "Skenovat do PDF", desc: "Proměň papír v přehledná PDF." },
    {
      id: "pdf-security",
      label: "Zabezpečení PDF",
      desc: "Chraň dokumenty heslem.",
    },
    {
      id: "pdf-for-business",
      label: "PDF pro firmy",
      desc: "Smlouvy a faktury odkudkoliv.",
    },
    {
      id: "pdf-for-students",
      label: "PDF pro studenty",
      desc: "Poznámky, zvýrazňování a studijní materiály.",
    },
    {
      id: "pdf-forms",
      label: "PDF formuláře",
      desc: "Vyplň, podepiš a ulož vyplnitelné PDF formuláře.",
    },
  ],
  guidesHeading: "Nejčtenější návody",
  guideBadge: "Návod",
  featuredGuides: [
    { id: "guides/how-to-edit-pdf-on-iphone", label: "Jak upravit PDF na iPhonu" },
    { id: "guides/how-to-edit-pdf-on-android", label: "Jak upravit PDF na Androidu" },
    { id: "guides/how-to-compress-pdf", label: "Jak komprimovat PDF" },
    { id: "guides/how-to-sign-pdf-on-phone", label: "Jak podepsat PDF v telefonu" },
  ],
  browseAllGuidesLabel: "Projít všech {count} návodů na PDF →",
  finalCtaHeading: "Vezmi si PDF Editor s sebou.",
  finalCtaSub: "Zdarma pro iOS i Android. Pro začátek nepotřebuješ účet.",
  faq: [
    {
      q: "Je PDF Editor zdarma?",
      a: "Ano. Základní funkce pro úpravy, skenování, kompresi a podepisování jsou zdarma. Některé pokročilé funkce se odemknou v PDF Editor Pro.",
    },
    {
      q: "Funguje to i bez připojení k internetu?",
      a: "Základní úpravy, práce se stránkami, podepisování i komprese fungují offline. Synchronizace s cloudem a OCR mohou vyžadovat připojení.",
    },
    {
      q: "Na jakých zařízeních to funguje?",
      a: "PDF Editor je dostupný na iPhonu a iPadu (iOS 16 a novější) a na telefonech a tabletech s Androidem (Android 9 a novější).",
    },
    {
      q: "Jsou moje soubory v soukromí?",
      a: "Ano. Soubory zůstávají v tvém zařízení, dokud se sám nerozhodneš je sdílet. Tvoje dokumenty nikam na naše servery nenahráváme.",
    },
    {
      q: "Můžu to použít pro právní dokumenty?",
      a: "Řada uživatelů podepisuje a sdílí smlouvy pomocí PDF Editoru. Neposkytujeme právní poradenství — než se u důležitého dokumentu spolehneš na elektronický podpis, ověř si místní pravidla.",
    },
  ],
};
