import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-word",
  h1: "Jak převést PDF do Wordu – zdarma, přímo v prohlížeči",
  description:
    "Získej text z PDF do upravitelného dokumentu Word přímo v prohlížeči. Co se převede bez problémů, co bude potřeba doladit a kdy naskenované soubory nefungují.",
  updated: "2026-05-23",
  intro: [
    "Většina lidí, kteří chtějí „převést PDF do Wordu“, chce ve skutečnosti jedno: text zpátky, v dokumentu, který můžou upravovat. Možná se původní .docx dávno ztratil, možná ti kolega poslal jen PDF, nebo možná potřebuješ vytáhnout pár klauzulí ze smlouvy, aniž bys je přepisoval. Jde o extrakci textu a je to rychlejší, než to zní.",
    "Tento návod používá bezplatný nástroj PDF do Wordu, který běží celý v tvém prohlížeči – tvůj soubor se nikam nenahrává. Přečte textovou vrstvu PDF a vytvoří ti .docx, který otevřeš ve Wordu, Google Docs, Pages nebo LibreOffice. Neumí ale znovu sestavit původní rozvržení pixel po pixelu, a je dobré to vědět předem, aby tě výsledek nepřekvapil.",
    "Níže najdeš praktický postup, druhy PDF, které se převádí dobře, a poctivé případy, kdy budeš muset výsledek dočistit nebo sáhnout po úplně jiném přístupu.",
  ],
  steps: [
    {
      title: "Otevřít nástroj PDF do Wordu",
      body: "Přejdi na nástroj PDF do Wordu. Nic se neinstaluje, žádný účet – převodník se načte v prohlížeči a soubor zpracuje přímo na tvém zařízení.",
    },
    {
      title: "Přidat PDF",
      body: "Přetáhni PDF do plochy pro přidání souboru nebo klikni pro jeho výběr. Použij textové PDF – takové, ve kterém jde v jakémkoli prohlížeči text vybrat a zkopírovat. Pokud se text při pokusu o výběr nezvýrazní, jde o sken a převod nebude fungovat (viz omezení níže).",
    },
    {
      title: "Spustit převod",
      body: "Klikni na Převést do Wordu. Nástroj projde textovou vrstvu PDF a znovu ji sestaví jako plynulý .docx. U typického vícestránkového dokumentu to trvá pár vteřin.",
    },
    {
      title: "Stáhnout .docx",
      body: "Soubor Word se stáhne automaticky. Otevři ho v editoru, který preferuješ – text přijde jako upravitelné odstavce, které můžeš volně přeskládat.",
    },
    {
      title: "Znovu použít formátování",
      body: "Nadpisy, tučné písmo, sloupce a rozestupy obvykle potřebují ruční dopracování. Nadpisy si znovu označ styly svého editoru, obnov případné tabulky a dokument je zase tvůj.",
    },
    {
      title: "V případě potřeby vrátit zpět obrázky",
      body: "Extrakce textu nepřenáší obrázky. Pokud originál obsahoval logo, graf nebo fotku, kterou potřebuješ, vlož ji zpátky z původního PDF – v případě potřeby nejdřív exportuj stránku jako obrázek.",
    },
  ],
  tips: [
    "Nejdřív zkontroluj vybíratelnost: pokud v PDF nejde text zvýraznit, jde o naskenovaný obrázek a extrakce textu nevrátí nic použitelného.",
    "Jednoduché jednosloupcové dokumenty (dopisy, memoranda, obyčejné reporty) se převádí nejčistěji. Graficky náročná PDF s více sloupci a poznámkami pod čarou se extrahují jako jeden čitelný proud textu, který bude potřeba dát do pořádku.",
    "Nečekej, že tabulky přežijí neporušené – obvykle dorazí jako řady textu. Důležité tabulky raději v editoru znovu sestav, než abys bojoval s extrahovanou verzí.",
    "Zatímco přeformátováváš, měj vedle sebe otevřené i původní PDF. Je mnohem rychlejší mrknout na zdroj, než odhadovat zamýšlenou strukturu.",
    "Pokud potřebuješ jen pár vět, zkopíruj je rovnou z prohlížečky PDF místo převodu celého souboru – převod se hodí, když potřebuješ zpátky většinu dokumentu.",
  ],
  mobileNote:
    "Pracuješ z telefonu? Aplikace PDF Editor převádí a upravuje dokumenty na cestách a na rozdíl od prohlížeče umí spustit rozpoznávání textu i na naskenovaných stránkách – užitečné, když je PDF, které jsi dostal, ve skutečnosti fotka výtisku, ne digitální dokument.",
  faq: [
    {
      q: "Bude soubor Word vypadat přesně jako PDF?",
      a: "Ne, a žádný poctivý nástroj by to neměl slibovat. Jde o textový převod: písma, sloupce, přesné rozestupy a obrázky se nepřenáší. Dostaneš zpátky slova jako upravitelné odstavce a formátování znovu použiješ ve svém editoru.",
    },
    {
      q: "Nástroj hlásí, že se nenašel žádný text – co se stalo?",
      a: "Tvé PDF je téměř jistě sken nebo soubor tvořený jen obrázkem, bez textové vrstvy. Nástroje v prohlížeči neumí přečíst text z obrázku. Mobilní aplikace PDF Editor umí na skenech spustit rozpoznávání textu – to je cesta, kterou se v tomhle případě vydat.",
    },
    {
      q: "Nahrává se můj dokument na server?",
      a: "Ne. Extrakce probíhá lokálně v tvém prohlížeči, takže PDF z tvého zařízení nikdy neodejde. To ho dělá bezpečným pro smlouvy a další citlivé soubory.",
    },
    {
      q: "Jaký formát souboru dostanu zpátky?",
      a: "Standardní .docx, který se otevře v Microsoft Word, Google Docs, Apple Pages i LibreOffice. Pokud budeš potřebovat, můžeš ho později znovu exportovat do PDF.",
    },
    {
      q: "Můžu ho po dokončení úprav převést zpátky na PDF?",
      a: "Ano – použij nástroj Word do PDF a proměň hotový .docx zpátky v čisté PDF připravené ke sdílení.",
    },
  ],
  related: [
    { label: "PDF do Wordu — převod přímo v prohlížeči", path: "/pdf-to-word" },
    { label: "Word do PDF — opačný převod", path: "/word-to-pdf" },
    {
      label: "Jak převést Word do PDF",
      path: "/guides/how-to-convert-word-to-pdf",
    },
    { label: "PDF vs DOCX — jaký formát použít", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
