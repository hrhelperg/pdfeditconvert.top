import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-pdf-from-camera",
  h1: "Jak vytvořit PDF z fotoaparátu",
  description:
    "Proměň fotku z fotoaparátu v PDF – a zjisti, proč pořádný sken předčí obyčejnou fotku. Rychlé zachycení účtenek a tabulí, skenování pro dokumenty.",
  updated: "2026-05-23",
  intro: [
    "Namířit fotoaparát na něco a dostat z toho PDF je nejrychlejší způsob, jak zachytit fyzický svět jako dokument – účtenku, tabuli po poradě, stránku z knihy, oznámení na zdi. Existuje ale skutečný rozdíl mezi obyčejnou fotkou zabalenou do PDF a pořádným skenem, a vědět, který z nich potřebuješ, tě ušetří křivého výsledku plného odlesků.",
    "Tenhle návod pokrývá obojí: rychlé zachycení, kdy se fotka z fotoaparátu stane stránkou PDF pomocí bezplatného nástroje Obrázek do PDF, a pořádné skenování, kdy aplikace PDF Editor rozpozná okraje dokumentu, opraví úhel a umí rozpoznat text. Obojí běží v tvém zařízení a nic se nikam nenahrává.",
    "Pro rychlý záznam, který jen potřebuješ mít uložený, rychlé zachycení stačí. Pro cokoli, co má vypadat jako pořádný dokument – rovné, čtvercové, čitelné – se skenování vyplatí i za tu chvilku navíc.",
  ],
  steps: [
    {
      title: "Rozhodni se: rychlé zachycení, nebo pořádný sken",
      body: "Účtenka pro vlastní záznamy může být rychlá fotka. Dokument, který pošleš dál nebo musíš dobře přečíst, si zaslouží pořádný sken s rozpoznáním okrajů a opravou úhlu.",
    },
    {
      title: "Rychlé zachycení: vyfoť to pořádně",
      body: "Foť kolmo shora v rovnoměrném světle, ať stránka vyplní celý záběr, a vyhni se stínům od ruky nebo telefonu. Dobrá fotka udělá dobrou stránku PDF.",
    },
    {
      title: "Proměň fotku v PDF",
      body: "Otevři nástroj Obrázek do PDF, přidej fotku (nebo víc fotek), seřaď je a vytvoř PDF. Z každého záběru vznikne jedna stránka.",
    },
    {
      title: "Pořádný sken: použij skener aplikace",
      body: "V aplikaci PDF Editor použij funkci skenování. Automaticky najde okraje dokumentu, narovná perspektivu a vyčistí stránku, aby vypadala jako sken, ne jako rychlý snímek.",
    },
    {
      title: "Zachyť víc stránek po sobě",
      body: "U vícestránkového dokumentu ti skener dovolí fotit stránku za stránkou do jednoho PDF a udržet je při tom v pořadí.",
    },
    {
      title: "Podle potřeby ho udělej prohledávatelný",
      body: "Obyčejná fotka nemá textovou vrstvu. Aplikace umí spustit rozpoznání textu, takže se naskenované stránky stanou prohledávatelné – užitečné pro cokoli, co budeš později hledat podle obsahu.",
    },
  ],
  tips: [
    "Obyčejná fotka je snímek dokumentu; sken je opravená, zplostěná, čitelná verze. Přizpůsob úsilí tomu, k čemu výsledek použiješ.",
    "Rovnoměrné světlo a kolmý úhel udělají pro zachycenou stránku víc než jakýkoli filtr. Odlesku a stínu se snáz vyhneš, než je opravíš.",
    "Tmavé, jednoduché pozadí za stránkou pomůže rozpoznání okrajů najít dokument čistě.",
    "Zachycené fotky i skeny mohou být velké – pokud PDF míří do e-mailu nebo na nahrávací portál, zkomprimuj ho.",
    "Rychlé zachycení nemá prohledávatelný text. Pokud v dokumentu budeš později hledat, nasnímej ho radši skenováním s rozpoznáním textu, než abys ho jen vyfotil.",
  ],
  mobileNote:
    "Fotoaparát už máš v ruce, a proto je zachycování dokumentů úkol, který na telefon přímo patří. Aplikace PDF Editor skenuje s automatickým rozpoznáním okrajů, vícestránkovým zachycením a rozpoznáním textu – vše offline – a promění to, co máš zrovna před sebou, hned na místě v čisté PDF připravené ke sdílení.",
  faq: [
    {
      q: "Jaký je rozdíl mezi vyfocením a naskenováním dokumentu?",
      a: "Fotka je surový obrázek zabalený do PDF – v pořádku pro rychlý záznam. Sken rozpozná okraje stránky, opraví úhel a zplostí ji, takže vypadá jako skutečný dokument. Naskenuj cokoli, co pošleš dál nebo musíš dobře přečíst.",
    },
    {
      q: "Můžu udělat PDF z jediné fotky z fotoaparátu?",
      a: "Ano. Vyfoť ji a pak pomocí nástroje Obrázek do PDF proměň ji (nebo víc fotek) v PDF, jednu stránku na jeden záběr.",
    },
    {
      q: "Bude PDF vytvořené fotoaparátem prohledávatelné?",
      a: "Ne z obyčejné fotky – tam žádná textová vrstva není. Aplikace PDF Editor umí při skenování spustit rozpoznání textu, takže je výsledek prohledávatelný.",
    },
    {
      q: "Nahrávají se moje zachycené dokumenty někam?",
      a: "Ne. Nástroj Obrázek do PDF i skener aplikace pracují přímo v tvém zařízení, takže zachycené dokumenty zůstávají v soukromí.",
    },
    {
      q: "Jak zachytím víc stránek do jednoho PDF?",
      a: "Použij skener aplikace, který ti dovolí fotit stránku za stránkou do jednoho dokumentu a udrží je v pořadí. Nástroj Obrázek do PDF navíc spojí víc fotek do jednoho souboru.",
    },
  ],
  related: [
    { label: "Skenovat do PDF – zachyť papír fotoaparátem", path: "/scan-to-pdf" },
    { label: "Obrázek do PDF – proměň fotky v PDF", path: "/image-to-pdf" },
    { label: "Jak naskenovat dokumenty do PDF telefonem", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Jak převést fotky do PDF na iPhonu", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Skenovat do PDF", path: "/scan-to-pdf" },
};

export default content;
