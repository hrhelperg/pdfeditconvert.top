import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-submit-homework-as-pdf",
  h1: "Jak odevzdat domácí úkol jako PDF (bez dramatu s portálem)",
  description:
    "Školní portály odmítají domácí úkoly ze stejných důvodů dokola – velikost souboru, počet stránek, formát. Nejjednodušší cesta od hotového úkolu k úspěšně nahranému PDF.",
  updated: "2026-05-29",
  intro: [
    "Dvě minuty před termínem je špatná chvíle na to zjistit, že školní portál tvůj úkol odmítá. Chybová hláška bývá obecná – „neplatný soubor“, „nahrání selhalo“, „příliš velké“ – a skutečná příčina je jedna ze čtyř předvídatelných věcí: soubor je nad limit velikosti, formát úplně nesedí tomu, co portál čeká, počet stránek je nad stropem, nebo to, co jsi vyfotil telefonem, ještě vlastně není PDF.",
    "Oprava je v každém případě krátká a zvládneš ji z telefonu nebo z notebooku v záložce prohlížeče, aniž bys cokoli posílal třetí straně. Trik je vědět, co portál skutečně čeká, a hned napoprvé vyrobit přesně takový soubor.",
    "Tenhle návod tě provede cestou od hotového úkolu k přijatému PDF – včetně správného postupu pro skeny ručně psané práce, sady úloh a kombinované odevzdávky typu „dokument Wordu plus tři ručně psané stránky“.",
  ],
  steps: [
    {
      title: "Ověř skutečné požadavky portálu",
      body: "Většina školních portálů limit tiše uvádí – obvykle 5–25 MB, někdy maximální počet stránek, výjimečně konkrétně PDF/A. Zkontroluj to před nahráním, ne až po odmítnutí.",
    },
    {
      title: "Nejdřív převeď všechny části do PDF",
      body: "Dokument Wordu → Word do PDF. Ručně psané stránky → Naskenovat do PDF na telefonu. Screenshoty nebo fotky tabule → Obrázek do PDF. Než se stane cokoli dalšího, všechno se promění v PDF.",
    },
    {
      title: "Slouč do jednoho souboru v pořadí odevzdání",
      body: "Sloučit PDF spojí napsanou práci, naskenovanou práci a případné poznámky do jednoho seřazeného souboru. Hodnotitelé dávají přednost jednomu souboru před třemi.",
    },
    {
      title: "Zkontroluj orientaci a pořadí",
      body: "Změň pořadí stránek PDF, pokud sloučení něco přehodilo. Otoč PDF, pokud sken vyšel na bok. Hodnotitel by nemusel ručně otáčet displej, aby si přečetl tvoji práci.",
    },
    {
      title: "Zkomprimuj, aby se vešel pod strop portálu",
      body: "Zkomprimovat PDF v prohlížeči soubor zmenší. Náročné skeny se zmenší dramaticky, napsaný obsah se skoro nezmění. Miř pod limit portálu s malou rezervou.",
    },
    {
      title: "Pojmenuj soubor tak, jak to škola čeká",
      body: "Řada tříd určuje konvenci pojmenování: Prijmeni_Jmeno_Ukol3.pdf. Dodrž ji přesně. Špatné názvy stojí body nebo způsobí zmatek při třídění.",
    },
  ],
  tips: [
    "Neodevzdávej dokumenty Wordu do portálu, který přijímá PDF. Word se na počítači hodnotitele zobrazí jinak; PDF uzamkne, jak to vypadá.",
    "Ručně psané skeny by měly být černobílé nebo ve stupních šedi, ne barevné. Menší, ostřejší a čitelnější.",
    "Komprimuj razantně u náročných skenů, ne u napsané práce. Napsané stránky se moc nezmenší; skeny se zmenší hodně.",
    "Zkušebně nahraj rozpracovanou verzi, aby sis před termínem ověřil, že portál soubor přijímá.",
    "Ulož si odevzdaný soubor i lokálně. Kopie na portálu nejde vždy zpětně stáhnout a možná se budeš potřebovat podívat, co jsi vlastně odevzdal.",
  ],
  mobileNote:
    "Odevzdávání jen z telefonu je dnes běžné. Aplikace PDF Editor zvládne celý řetězec na telefonu – naskenuje ručně psané stránky, sloučí je s napsanou prací, zkomprimuje, pojmenuje a připraví k nahrání – bez nutnosti přeskakovat na notebook.",
  faq: [
    {
      q: "Jakou velikost většina školních portálů povoluje?",
      a: "Obvykle 5–25 MB. Některé portály základních a středních škol mají strop na 2 MB. Vysokoškolské portály bývají velkorysejší. Zkontroluj specifika konkrétního předmětu.",
    },
    {
      q: "Můžu odevzdat Word místo PDF?",
      a: "Jen pokud to portál výslovně povoluje. Většina žádá přímo PDF, aby zamkla formátování; odevzdání Wordu může stát body nebo být automaticky odmítnuto.",
    },
    {
      q: "Musím všechno sloučit do jednoho souboru?",
      a: "Ano, pokud portál nepodporuje více nahrání najednou. Hodnotitelé preferují jeden soubor; mnoho portálů stejně přijme jen jeden.",
    },
    {
      q: "Jaký je nejčastější důvod odmítnutí?",
      a: "Velikost souboru. Skeny rychle protlačí soubor přes limit portálu. Zkomprimuj před odevzdáním a odmítnutí většinou zmizí.",
    },
    {
      q: "Můžu nahrávat z telefonu?",
      a: "Ano. Většina moderních školních portálů funguje v mobilních prohlížečích a přijímá PDF z nabídky sdílení. Nástroje na telefonu pokryjí celý řetězec.",
    },
  ],
  related: [
    { label: "PDF pro studenty — poznámky a studijní materiály", path: "/pdf-for-students" },
    { label: "Skenovat do PDF — zachyť ručně psané stránky", path: "/scan-to-pdf" },
    { label: "Jak zkomprimovat PDF pro školní portály", path: "/guides/how-to-compress-pdf-for-school-portals" },
    { label: "Jak naskenovat ručně psané poznámky do PDF", path: "/guides/how-to-scan-notes-to-pdf" },
  ],
  parentHub: { label: "PDF pro studenty — poznámky a studijní materiály", path: "/pdf-for-students" },
};

export default content;
