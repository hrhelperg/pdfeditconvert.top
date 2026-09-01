import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-png-to-pdf",
  h1: "Jak převést PNG do PDF – ostré snímky obrazovky a grafika",
  description:
    "Proměň snímky obrazovky, diagramy a grafiku ve formátu PNG v jedno PDF přímo v prohlížeči. Proč PNG udrží text ostrý a co se stane s průhledností.",
  updated: "2026-05-23",
  intro: [
    "PNG je formát, který dostaneš při pořízení snímku obrazovky, exportu grafu nebo uložení grafiky s ostrými hranami. Na rozdíl od JPG je bezztrátový, takže text a jemné linky zůstávají ostré místo toho, aby je komprese rozmazala. Díky tomu je PNG správným výchozím bodem, když chceš snímky obrazovky nebo diagramy spojit do PDF, které zůstane čitelné.",
    "Tento návod používá bezplatný nástroj Obrázek do PDF ke spojení souborů PNG do jednoho dokumentu, přímo v prohlížeči a nic se přitom nikam nenahrává. Typické použití: sada snímků obrazovky rozhraní pro revizi, exportované grafy pro report, nebo grafika, kterou někdo potřebuje jako tisknutelný, sdílitelný soubor místo volného obrázku.",
    "Stojí za to znát jednu vlastnost specifickou pro PNG – průhlednost – a projdeme si, co se s ní stane, když se z PNG stane stránka PDF.",
  ],
  steps: [
    {
      title: "Otevřít nástroj Obrázek do PDF",
      body: "Přejdi na nástroj Obrázek do PDF v prohlížeči. Zvládá PNG, JPG i WebP a běží celý na tvém zařízení, bez nahrávání souborů a bez účtu.",
    },
    {
      title: "Přidat soubory PNG",
      body: "Přetáhni snímky obrazovky nebo grafiku do plochy pro přidání souboru, nebo klikni pro jejich výběr. Z každého PNG vznikne jedna stránka výsledného PDF.",
    },
    {
      title: "Seřadit stránky",
      body: "Šipkami nahoru a dolů seskládej snímky obrazovky do pořadí, které vypráví příběh – krok jedna před krokem dva.",
    },
    {
      title: "Vygenerovat PDF",
      body: "Klikni na Create PDF. Nástroj umístí každý obrázek na vlastní stránku podle jeho rozměrů a spojený soubor sestaví lokálně.",
    },
    {
      title: "Stáhnout dokument",
      body: "PDF se stáhne automaticky. Přejmenuj ho podle obsahu, aby se snadno hledal a bylo hned jasné, o co jde tomu, kdo ho otevře.",
    },
    {
      title: "Zkontrolovat ostrost stránek",
      body: "Otevři PDF a přibliž libovolný text. PNG udrží písmo ostré, takže snímky obrazovky nástěnek, kódu nebo podmínek by měly zůstat čitelné.",
    },
  ],
  tips: [
    "PNG je lepší volba než JPG vždy, když obrázek obsahuje text, rozhraní nebo ostré linky – komprese JPG právě tyhle hrany rozmazává.",
    "Průhledné oblasti PNG v PDF stránce nezůstanou průhledné; vykreslí se na bílém pozadí. Pokud máš logo navržené na průhledném pozadí, skončí na bílé ploše, což většinou nevadí.",
    "Snímky celé obrazovky bývají vysoké a úzké. Převedou se v pořádku, ale zvaž oříznutí na část, na které záleží, aby stránka nebyla z větší části prázdná.",
    "Soubory PNG jsou pro stejný obrázek větší než JPG. Delší řada snímků obrazovky ve vysokém rozlišení může vytvořit objemné PDF – pokud výsledek pošleš e-mailem, zkomprimuj ho.",
    "Pro jednotnou velikost stránky (vše upravené na A4) místo stránek podle velikosti jednotlivých obrázků ti tuhle kontrolu dá aplikace PDF Editor.",
  ],
  mobileNote:
    "Snímky obrazovky se na telefonu hromadí. Aplikace PDF Editor je proměnní v jedno PDF na pár klepnutí a před sdílením ti dovolí okomentovat nebo zvýraznit důležitou část – hodí se pro hlášení chyb a rychlé revize na cestách.",
  faq: [
    {
      q: "Proč zvolit PNG místo JPG pro PDF?",
      a: "PNG je bezztrátový, takže text, snímky obrazovky i diagramy zůstávají ostré. JPG je ztrátový a jemné hrany rozmazává. Pokud tvé obrázky obsahují písmo nebo rozhraní, PNG vytvoří čistší PDF.",
    },
    {
      q: "Co se stane s průhledným pozadím?",
      a: "Stránka PDF není průhledná, takže se průhledné oblasti vykreslí na bílém pozadí. Logo nebo ikona s průhledným pozadím prostě skončí na bílé stránce.",
    },
    {
      q: "Nahrávají se moje soubory někam?",
      a: "Ne. Vše probíhá v prohlížeči na tvém zařízení. Snímky obrazovky a grafika z něj nikdy neodejdou.",
    },
    {
      q: "Můžu v jednom PDF kombinovat PNG a JPG?",
      a: "Ano. Nástroj přijímá PNG, JPG i WebP dohromady, takže můžeš spojit snímek obrazovky, fotku a exportovaný graf do jednoho dokumentu.",
    },
    {
      q: "PDF vyšlo velké – co s tím?",
      a: "Stránky z PNG jsou objemné. Prožeň soubor nástrojem Zkomprimovat PDF, aby se vešel pod limity pro e-mail a nahrávání, s malým kompromisem v kvalitě.",
    },
  ],
  related: [
    { label: "Obrázek do PDF — spoj PNG přímo v prohlížeči", path: "/image-to-pdf" },
    { label: "PDF to images — opačný postup", path: "/pdf-to-images" },
    {
      label: "Jak převést JPG do PDF",
      path: "/guides/how-to-convert-jpg-to-pdf",
    },
    {
      label: "Jak převést WebP do PDF",
      path: "/guides/how-to-convert-webp-to-pdf",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
