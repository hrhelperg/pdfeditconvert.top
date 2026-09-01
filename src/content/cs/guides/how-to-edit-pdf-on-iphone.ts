import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-iphone",
  h1: "Jak upravit PDF na iPhonu (průvodce 2026)",
  description:
    "Oprav text, přidej obrázky a změň pořadí stránek PDF přímo na iPhonu. Postup krok za krokem s aplikací PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Úprava PDF na iPhonu ještě donedávna znamenala nahrát soubor na web, kterému jsi tak úplně nevěřil, přihlásit se na Macu, nebo si vyfotit potřebnou část obrazovky a vložit ji zpátky jako obrázek. V roce 2026 nic z toho není potřeba. Se správnou nativní aplikací můžeš upravit text, vyměnit obrázky, změnit pořadí stránek, vyplnit formuláře a podepsat dokumenty – a to celé z telefonu, za méně než minutu.",
    "Tento návod prochází přesně ty kroky, které uděláš v aplikaci PDF Editor. Stejné postupy fungují na iPadu i ve většině moderních editorů PDF, takže se ti budou hodit, i kdybys nástroj v budoucnu změnil. Budeš potřebovat iOS 16 nebo novější a aplikaci PDF Editor staženou z App Store.",
    "Projdeme si, jak otevřít PDF z libovolného zdroje (Soubory, Mail, iCloud Drive, Google Drive), upravit obsah a exportovat výsledek. Každý krok popisuje, co udělat, ne proč – ale pokud ti nějaký krok na obrazovce nepůjde snadno najít, v sekci s tipy na konci najdeš rychlá řešení.",
  ],
  steps: [
    {
      title: "Nainstalovat a otevřít PDF Editor",
      body: "Stáhni si aplikaci z App Store a otevři ji. Pro začátek úprav není potřeba žádný účet.",
    },
    {
      title: "Přidat PDF do aplikace",
      body: "Klepni na tlačítko + na domovské obrazovce. Vyber zdroj – Soubory, iCloud Drive, fotoalbum, nebo „Procházet“ pro přístup ke složkám v Google Drive či OneDrive. Kterýkoli PDF můžeš otevřít i z Mailu nebo Safari a v nabídce sdílení zvolit „Otevřít v PDF Editor“.",
    },
    {
      title: "Upravit text přímo v dokumentu",
      body: "Klepni na odstavec nebo slovo. Objeví se modré označení. Uprav text přímo v textovém poli, které se otevře. Aplikace zachová původní písmo, velikost i barvu, takže rozvržení zůstane neporušené.",
    },
    {
      title: "Nahradit nebo přidat obrázek",
      body: "Klepnutím na existující obrázek ho nahradíš jiným z fotoalba. Nebo klepni na nástroj pro obrázky a umísti nový kamkoli na stránku. Rohy přetáhni pro změnu velikosti.",
    },
    {
      title: "Změnit pořadí, smazat nebo duplikovat stránky",
      body: "Klepnutím na ikonu stránek otevřeš mřížku náhledů. Podržením stránky ji přesuneš na jiné místo. Klepnutím na náhled ji zduplikuješ nebo smažeš.",
    },
    {
      title: "Podepsat dokument",
      body: "Klepni na nástroj Podpis, nakresli svůj podpis (nebo použij uložený) a umísti ho na potřebné místo. Podpis je běžný objekt PDF, takže ho po umístění můžeš přesunout nebo zvětšit.",
    },
    {
      title: "Vyplnit pole formuláře",
      body: "Pokud má PDF pole formuláře, klepnutím na každé z nich ho vyplníš. Aplikace automaticky rozpozná typ pole – text, zaškrtávací pole, rozbalovací nabídku – a zobrazí odpovídající klávesnici.",
    },
    {
      title: "Uložit a sdílet",
      body: "Klepni na Hotovo. Zvol „Uložit“ pro přepsání originálu nebo „Uložit jako“ pro zachování obou verzí. V nabídce sdílení pak soubor pošleš přes Mail, Zprávy, AirDrop nebo jakoukoli nainstalovanou aplikaci.",
    },
  ],
  tips: [
    "Před úpravou drobného textu si obrázek přibliž dvěma prsty – přesnost úprav se tím výrazně zlepší.",
    "Dvojitým klepnutím na slovo vybereš jen jeho; trojitým klepnutím vybereš celý řádek.",
    "Na iPadu použij Apple Pencil – podpis bude znatelně plynulejší než kreslení prstem.",
    "Zapni integraci se Soubory v Nastavení → PDF Editor, aby se aplikace objevovala ve všech nabídkách sdílení.",
    "Podržením šipky zpět na obrazovce úprav se vrátíš o více kroků najednou, pokud samotné Zpět nestačí.",
  ],
  mobileNote:
    "Integrace se Soubory na iOS se vyplatí zapnout v Nastavení – díky ní se PDF Editor objeví v nabídce sdílení každé aplikace. Od té chvíle stačí na úpravu PDF, který přijde v Mailu nebo Slacku, jediné klepnutí.",
  faq: [
    {
      q: "Můžu na iPhonu upravit naskenované PDF?",
      a: "Můžeš ho okomentovat, podepsat a přeskládat stránky. Pro úpravu samotného textu na naskenované stránce nejdřív spusť OCR – aplikace to zvládne za pár sekund.",
    },
    {
      q: "Je aplikace zdarma?",
      a: "Ano, pro běžné úpravy. Některé pokročilé funkce se odemykají s upgradem Pro.",
    },
    {
      q: "Funguje s Apple Pencil?",
      a: "Ano. Pencil funguje pro podpisy, ruční poznámky i zvýrazňování a je znatelně příjemnější než ovládání prstem.",
    },
    {
      q: "Můžu upravit PDF chráněné heslem?",
      a: "Heslo zadej, když si ho aplikace vyžádá při otevírání. Po odemčení fungují úpravy normálně. Heslo můžeš znovu nastavit při ukládání.",
    },
    {
      q: "Kam se uloží upravený soubor?",
      a: "Tam, kam ho uložíš ty: do Souborů, iCloud Drive, Google Drive, fotoalba, nebo přímo do rozepsaného e-mailu.",
    },
  ],
  related: [
    { label: "PDF Editor — kompletní přehled", path: "/pdf-editor" },
    {
      label: "Jak upravit PDF na Androidu",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Jak podepsat PDF na telefonu", path: "/sign-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
