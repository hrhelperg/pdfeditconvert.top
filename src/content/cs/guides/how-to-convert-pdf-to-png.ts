import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-png",
  h1: "Jak převést PDF do PNG – ostré obrázky stránek bez ztráty kvality",
  description:
    "Exportuj stránky PDF jako kvalitní obrázky PNG přímo v prohlížeči. Proč PNG udrží text a diagramy ostré, plus poznámky k měřítku a průhlednosti.",
  updated: "2026-05-23",
  intro: [
    "Když potřebuješ stránku PDF jako obrázek a je plná textu, tabulky nebo diagramu, PNG je formát, po kterém sáhnout. Je bezztrátový, takže písmo zůstane ostré místo toho, aby dostalo rozmazané hrany – rozdíl je vidět, jakmile si přiblížíš převedenou fakturu nebo schéma.",
    "Tento návod používá bezplatný nástroj PDF do obrázků, který vykreslí každou stránku PDF jako obrázek ke stažení přímo v prohlížeči, bez jakéhokoli nahrávání. PNG je jeden ze dvou výstupních formátů a ten, který zvolit, kdykoli je čitelnost důležitější než velikost souboru.",
    "Níže: jak dosáhnout co nejostřejšího výsledku bez zbytečně nafouklého souboru, kdy se PNG vyplatí zvolit místo JPG, a co si obecně pamatovat o obrázcích stránek.",
  ],
  steps: [
    {
      title: "Otevřít nástroj PDF do obrázků",
      body: "Přejdi na nástroj PDF do obrázků. Stránky vykresluje lokálně v prohlížeči – žádné nahrávání, žádný účet.",
    },
    {
      title: "Přidat PDF",
      body: "Přetáhni PDF do plochy pro přidání souboru nebo klikni pro jeho výběr. Nástroj připraví každou stránku k exportu.",
    },
    {
      title: "Zvolit formát PNG",
      body: "Vyber PNG. Je bezztrátový a udrží text, tabulky i čárovou grafiku ostré – správná volba pro dokumenty, diagramy a cokoli, do čeho budeš přibližovat.",
    },
    {
      title: "Nastavit měřítko pro ostrost",
      body: "Zvol měřítko: 2× je ostré na většině obrazovek, 3× je extra ostré pro tisk nebo velký displej, ale vytváří velké soubory. Přizpůsob měřítko tomu, jak se obrázek doopravdy bude zobrazovat.",
    },
    {
      title: "Exportovat stránky",
      body: "Spusť převod. Každá stránka se stáhne jako vlastní PNG, připravené k vložení do dokumentu, prezentace nebo webové stránky.",
    },
    {
      title: "Použít stránku, kterou potřebuješ",
      body: "Ponech si PNG, který jsi chtěl, a zbytek zahoď. U dlouhého PDF ti jeho rozdělení předem ušetří spravování řady souborů.",
    },
  ],
  tips: [
    "PNG zvol místo JPG vždy, když má stránka text, tabulky nebo ostré linky – komprese JPG tyhle hrany viditelně rozmazává.",
    "Soubory PNG jsou větší než JPG. Pokud exportuješ hodně stránek a na velikosti záleží víc než na ostrosti, JPG je praktičtější volba.",
    "Stránka PDF nemá průhlednost, takže exportovaný PNG sedí na plném bílém pozadí, i když PNG průhlednost jinak podporuje.",
    "Vyšší měřítko nezlepší nekvalitní zdroj. Pokud samotné PDF obsahuje rozmazaný sken, PNG na 3× jen vykreslí to rozmazání ve vyšším rozlišení.",
    "Obrázky stránek nejsou prohledávatelné – chybí jim textová vrstva. Pokud budeš slova potřebovat později najít nebo zkopírovat, ponech si původní PDF.",
  ],
  mobileNote:
    "Vytáhnout ostrý obrázek stránky z PDF na telefonu se hodí pro prezentace, designové reference i hlášení chyb. Aplikace PDF Editor vykresluje stránky s hardwarovou akcelerací a před sdílením ti dovolí obrázek okomentovat – rychlejší než posílat si soubor e-mailem na později.",
  faq: [
    {
      q: "Proč zvolit PNG místo JPG?",
      a: "PNG je bezztrátový, takže text, tabulky a diagramy zůstávají ostré. JPG je menší, ale rozmazává jemné hrany. Pro stránky dokumentu, do kterých budeš přibližovat, je PNG lepší volba.",
    },
    {
      q: "Dostanu jeden PNG na stránku?",
      a: "Ano. Každá stránka se vykreslí a stáhne jako samostatný soubor PNG. Ponech si ty, které potřebuješ, a zbytek zahoď.",
    },
    {
      q: "Nahrává se moje PDF někam?",
      a: "Ne. Vykreslování probíhá celé v prohlížeči, takže soubor zůstává na tvém zařízení.",
    },
    {
      q: "Proč je můj PNG tak velký?",
      a: "PNG je bezztrátový a vysoké měřítko násobí počet pixelů. Pokud je velikost problém, sniž měřítko nebo přepni na JPG.",
    },
    {
      q: "Můžu exportovat PDF chráněné heslem?",
      a: "V prohlížeči ne – zašifrované soubory nelze vykreslit. Heslo nejdřív odstraň, nebo použij mobilní aplikaci PDF Editor.",
    },
  ],
  related: [
    {
      label: "PDF do obrázků — exportuj stránky přímo v prohlížeči",
      path: "/pdf-to-images",
    },
    { label: "Obrázek do PDF — opačný postup", path: "/image-to-pdf" },
    {
      label: "Jak převést PDF do JPG",
      path: "/guides/how-to-convert-pdf-to-jpg",
    },
    {
      label: "Jak extrahovat stránky z PDF",
      path: "/guides/how-to-extract-pages-from-pdf",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
