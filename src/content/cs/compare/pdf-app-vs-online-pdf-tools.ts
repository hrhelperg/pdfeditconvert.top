import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-app-vs-online-pdf-tools",
  h1: "Aplikace PDF nebo online nástroje — co je lepší?",
  description:
    "Nativní aplikace pro PDF proti nástrojům v prohlížeči: srovnání rychlosti, soukromí a dostupnosti offline.",
  intro: [
    "S PDF můžeš z telefonu nebo počítače pracovat dvěma způsoby: nainstalovat nativní aplikaci, nebo použít jeden z mnoha nástrojů pro PDF v prohlížeči. Obě možnosti fungují – ale kompromisy jsou velmi odlišné a nejvíc záleží právě u citlivých dokumentů.",
    "Nástroje v prohlížeči vyhrávají na pohodlí: jeden klik a pracuješ. Nativní aplikace vyhrávají na rychlosti, soukromí a dostupnosti offline. Pro jednorázovou konverzi veřejných dokumentů jsou nástroje v prohlížeči v pořádku. Pro každodenní práci s dokumenty – hlavně smlouvami, doklady totožnosti a soubory klientů – je lepší výchozí volbou nativní aplikace.",
    "Tohle srovnání se věnuje rychlosti, soukromí, dostupnosti offline, ceně a typům souborů, se kterými si každá z možností poradí nejlíp, abys mohl vybrat vědomě, a ne skončit tam, kam tě zavedl první výsledek na Googlu.",
  ],
  leftLabel: "Nativní aplikace PDF",
  rightLabel: "Online nástroj PDF",
  rows: [
    { feature: "Funguje offline", left: "ano", right: "ne" },
    { feature: "Soubory zůstávají v zařízení", left: "ano", right: "ne" },
    { feature: "Rychlost (bez čekání na nahrání/stažení)", left: "ano", right: "ne" },
    { feature: "Žádný limit velikosti souboru", left: "ano", right: "Omezeně" },
    { feature: "Účet není potřeba", left: "ano", right: "Někdy" },
    { feature: "Funguje na uzamčených firemních sítích", left: "ano", right: "Možná" },
    { feature: "Pohodlné pro každodenní použití", left: "ano", right: "Omezeně" },
    { feature: "Vyžaduje první instalaci", left: "ano", right: "ne" },
    { feature: "Odkazy pro spolupráci mezi zařízeními", left: "Omezeně", right: "ano" },
  ],
  whenLeft: [
    "Pracuješ s citlivými dokumenty (smlouvy, doklady totožnosti, mzdy)",
    "Pracuješ v místech se slabým internetem",
    "Upravuješ PDF dost často na to, aby se instalace vyplatila",
    "Chceš, aby stejný nástroj fungoval i v režimu letadlo",
    "Na soukromí dokumentů, se kterými pracuješ, záleží",
  ],
  whenRight: [
    "Jednorázová konverze nebo sloučení na veřejném počítači",
    "Nechceš nic instalovat",
    "Dokument není citlivý",
    "Potřebuješ odkaz na náhled, který můžeš sdílet",
    "Jsi na zařízení, kam nejde instalovat aplikace",
  ],
  faq: [
    {
      q: "Jsou online nástroje PDF bezpečné?",
      a: "Některé ano. Většina má zásady ochrany osobních údajů, které jim dovolují krátce si tvůj soubor ponechat kvůli zpracování. U necitlivých dokumentů je to v pořádku; u smluv nebo dokladů totožnosti je bezpečnější nativní aplikace.",
    },
    {
      q: "Proč je nativní aplikace rychlejší?",
      a: "Žádné nahrávání souboru, žádná fronta na serveru, žádné stahování výsledku. Celá operace probíhá lokálně.",
    },
    {
      q: "Můžu používat obojí?",
      a: "Ano. Spousta lidí běžně používá nativní aplikaci pro každodenní práci a sáhne po webovém nástroji jen ve vzácných případech, kdy kolega potřebuje odkaz na náhled ke sdílení.",
    },
  ],
  related: [
    { label: "PDF Editor — kompletní přehled", path: "/pdf-editor" },
    { label: "Zabezpečení PDF", path: "/pdf-security" },
    { label: "PDF pro firmy", path: "/pdf-for-business" },
  ],
};

export default content;
