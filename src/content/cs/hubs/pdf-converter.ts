import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-converter",
  hero: {
    eyebrow: "Konvertor PDF",
    h1: "Převeď PDF do formátu, který doopravdy potřebuješ.",
    highlight: "doopravdy",
    lead: "PDF do Wordu pro úpravy. PDF do JPG pro zprávové aplikace. Word a obrázky zpátky do PDF pro archivaci. Jedna aplikace, rychlé výsledky, žádné nahrávání na neznámé servery.",
    primaryCta: { label: "Otevřít aplikaci", href: SITE.app.appStore },
  },
  problem: {
    heading: "Chaos s konverzemi, do kterého narazí skoro každý",
    paragraphs: [
      "PDF jsou skvělé, dokud tě někdo nepožádá o soubor ve Wordu. Nebo dokud zprávová aplikace neodmítne přijmout cokoli jiného než JPG. Nebo dokud nepotřebuješ spojit účtenky (což jsou obrázky) s nabídkou (což je PDF) do jednoho souboru, který se dá odeslat.",
      "Veřejné weby pro konverzi PDF tohle sice zvládnou, ale zároveň vytvoří nové problémy. Nahrají tvůj soubor na server, někdy ho drží celé hodiny, konverze nad určitou velikost si často nechávají zaplatit a jen zřídka z nich vzejde čistý DOCX. Formátování se posouvá, písma se nahrazují, tabulky se rozpadají.",
      "Nativní konvertor odvede práci přímo v zařízení. Stejný engine, který PDF vysází, ho zpětně sestaví do cílového formátu. Tabulky zůstávají zarovnané, písma se chytře přiřazují a citlivou smlouvu nikdy nesvěříš zdarma webu, který se živí reklamou.",
    ],
  },
  features: {
    heading: "Konvertuj oběma směry",
    items: [
      {
        icon: "FileText",
        title: "PDF → Word (DOCX)",
        body: "Editovatelné dokumenty Word, které zachovávají rozvržení, písma, tabulky i obrázky.",
      },
      {
        icon: "Image",
        title: "PDF → JPG a PNG",
        body: "Exportuj jednotlivé stránky nebo všechny stránky jako samostatné obrázky, připravené do zpráv nebo prezentací.",
      },
      {
        icon: "Sheet",
        title: "PDF → Excel",
        body: "Extrahuj tabulky do skutečných buněk XLSX, místo aby ses spoléhal na vkládání screenshotů.",
      },
      {
        icon: "FilePlus",
        title: "Word a obrázky → PDF",
        body: "Proměň DOCX, fotku účtenky nebo screenshot v čisté PDF během pár sekund.",
      },
      {
        icon: "ScanText",
        title: "OCR pro naskenovaná PDF",
        body: "Spusť rozpoznávání textu u naskenovaných dokumentů, aby byl výsledek označitelný a prohledávatelný.",
      },
      {
        icon: "Layers",
        title: "Dávková konverze",
        body: "Zařaď do fronty víc souborů najednou. Aplikace je zpracuje lokálně na pozadí.",
      },
    ],
  },
  steps: {
    heading: "Jak převést PDF z telefonu",
    items: [
      {
        title: "Otevři aplikaci PDF Editor",
        body: "Ťukni na dlaždici Převést na domovské obrazovce.",
      },
      {
        title: "Vyber zdrojový soubor",
        body: "Zvol PDF, DOCX, obrázek nebo jakýkoli jiný dokument, který aplikace podporuje.",
      },
      {
        title: "Zvol výstupní formát",
        body: "Word, Excel, JPG, PNG, PowerPoint – podle toho, co potřebuje druhá strana.",
      },
      {
        title: "Ťukni na Převést",
        body: "Konverze probíhá přímo v zařízení. Většina souborů je hotová během pár sekund.",
      },
      {
        title: "Ulož nebo sdílej",
        body: "Ulož do Souborů, synchronizuj s Drive nebo iCloud, nebo sdílej rovnou přes Mail či zprávovou aplikaci.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Konverze za pochodu",
    body: "Reálný konverzní úkol nezní „proměň tuhle výroční zprávu v dokument Word“. Zní spíš „proměň fotku téhle hotelové účtenky v PDF, které přiložím k výkazu výdajů“ nebo „vytáhni tyhle tři tabulky z nabídky, ať je vložím do tabulkového procesoru“. Obojí se odehrává na telefonu, mezi jinými věcmi, a je potřeba to vyřešit hned teď.",
  },
  faq: [
    {
      q: "Které formáty jsou podporované?",
      a: "Oběma směry: Word (DOCX), Excel (XLSX), PowerPoint (PPTX), JPG, PNG a prostý text. Do PDF lze převést Word, obrázky a několik dalších běžných formátů.",
    },
    {
      q: "Jak přesný je převod z PDF do Wordu?",
      a: "U PDF s textovou vrstvou velmi přesný – tabulky, seznamy i nadpisy se přenesou beze změny. Složitá vícesloupcová rozvržení si možná vyžádají drobné dočištění. Naskenovaná PDF potřebují nejdřív OCR.",
    },
    {
      q: "Probíhá konverze offline?",
      a: "Standardní konverze běží lokálně. Některé pokročilé funkce (kvalitní OCR pro některé jazyky) mohou využívat cloud – aplikace tě na to upozorní ještě předtím, než cokoli odešle.",
    },
    {
      q: "Přežijí konverzi moje písma?",
      a: "Aplikace písma chytře přiřazuje. Pokud dané písmo není v cílovém zařízení nainstalované, použije se nejbližší náhrada, aby dokument zůstal čitelný správně.",
    },
    {
      q: "Můžu převést chráněná PDF?",
      a: "Pokud je PDF chráněné heslem, budeš ho muset před konverzí zadat. PDF s omezením úprav se obvykle převedou, pokud znáš heslo pro otevření.",
    },
  ],
  related: [
    { label: "PDF, nebo DOCX – co použít", path: "/guides/pdf-vs-docx" },
    { label: "Srovnání PDF a JPG", path: "/compare/pdf-vs-jpg" },
    { label: "Uprav PDF po konverzi", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Převáděj PDF bez nahrávání na cizí servery.",
    sub: "Zdarma na iOS a Androidu. Konverze probíhá přímo v zařízení.",
  },
};

export default content;
