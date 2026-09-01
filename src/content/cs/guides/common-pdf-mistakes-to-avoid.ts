import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "common-pdf-mistakes-to-avoid",
  h1: "Časté chyby s PDF, kterým se vyhnout",
  description:
    "Chyby s PDF, které stojí čas nebo unikají citlivé informace – přehnaná komprese, posílání fotek, nahrávání citlivých souborů na neznámé weby, zapomenuté stránky – a jak se jim vyhnout.",
  updated: "2026-05-23",
  intro: [
    "Většina problémů s PDF není technická povahy – jsou to zlozvyky, kterým se dá vyhnout. Soubor, který se vrátil, protože ho nikdo nezkomprimoval, fotka poslaná místo dokumentu, smlouva nahraná na náhodný server, stránka, která tam neměla být, ale byla. Každý z těch prohřešků je malý, každý je běžný a každému se dá snadno předejít, jakmile víš, na co si dát pozor.",
    "Tenhle návod sbírá chyby, které lidé s PDF dělají nejčastěji, proč každá z nich škodí a jaké je rychlé řešení. Několik oprav používá bezplatné nástroje přímo v zařízení z tohoto webu; všechny jsou ale spíš zvyky než funkce.",
    "Přečti si to jednou a příště se zarazíš ještě před další zbytečnou nehodou – což se u dokumentů, které putují ke klientům, kolegům a úřadům, vyplatí víc, než to na první pohled zní.",
  ],
  steps: [
    {
      title: "Posílání fotky místo dokumentu",
      body: "JPG stránky je nakřivo, neprohledávatelné a nepříjemné na tisk nebo zakládání. Pokud je to dokument, převeď ho nejdřív do PDF nástrojem Obrázek do PDF, nebo ho pořádně naskenuj – nenech příjemce řešit rychlý snímek.",
    },
    {
      title: "Nahrávání citlivých souborů na neznámé nástroje",
      body: "Hodit smlouvu nebo doklad totožnosti do prvního „bezplatného online PDF“ nástroje znamená nahrát ho na server cizího člověka. Na cokoli, co bys nechtěl, aby si přečetl někdo jiný, používej nástroje přímo v zařízení, v prohlížeči.",
    },
    {
      title: "Přehnaná komprese ze zvyku",
      body: "Nastavit kompresi na maximum u každého souboru zničí dokumenty, které to vůbec nepotřebovaly. Použij nejjemnější úroveň, která splní tvůj cíl velikosti, a soubory, které jsou už malé, vůbec nekomprimuj.",
    },
    {
      title: "Zapomenutá kontrola stránek před odesláním",
      body: "Interní poznámky, údaje předchozího příjemce, prázdná stránka ze skeneru – tohle se veze v souboru bez povšimnutí. Projdi to stránku po stránce a to, co tam nemá být, odstraň nástrojem Extrahovat stránky z PDF.",
    },
    {
      title: "Posílání upravitelného souboru jako „finálního“",
      body: "Hotovou nabídku nebo smlouvu poslanou jako dokument Word lze upravit – ať už omylem, nebo ne. Finální verze převáděj do PDF, aby rozvržení i čísla zůstaly pevně dané.",
    },
    {
      title: "Přepsání jediného originálu",
      body: "Komprese, převod i úpravy jsou u kopie, kterou si necháváš, jednosměrné. Upravené verze vždycky ukládej pod novým názvem, aby netknutý originál přežil chybu.",
    },
  ],
  tips: [
    "První otázku si polož vždycky takhle: je to dokument, nebo obrázek? Dokumenty jdou jako PDF; jako JPG jdou jen skutečné fotky.",
    "Soukromí je zvyk, ne nastavení. Pro citlivé soubory automaticky sáhni po nástrojích přímo v zařízení, ať si nemusíš pokaždé pamatovat, že máš být opatrný.",
    "Komprimuj s cílem, ne z reflexu – přizpůsob úroveň účelu a přeskoč kompresi souborů, které mají už rozumnou velikost.",
    "Desetisekundová kontrola stránku po stránce před odesláním předchází těm nejtrapnějším chybám s PDF, co existují.",
    "Ponechávej si originály. Skoro každá operace s PDF je vratná jen tehdy, pokud jsi nepřepsal zdrojový soubor.",
  ],
  mobileNote:
    "Řada těchhle chyb se stane ve spěchu při posílání něčeho z telefonu. Aplikace PDF Editor ti umožní ostříhat přebytečnou stránku, komprimovat s rozmyslem, převést fotku a zamknout finální verzi – vše přímo v zařízení – takže se ukvapené sdílení nezmění v chybu, za kterou se musíš omlouvat.",
  faq: [
    {
      q: "Jaká je nejčastější chyba s PDF?",
      a: "Poslání fotky JPG ve chvíli, kdy příjemce potřeboval dokument. Je nakřivo, neprohledávatelná a špatně se tiskne nebo zakládá. Vyřeší to převod fotky do PDF ještě předtím.",
    },
    {
      q: "Proč je riskantní nahrávat PDF do bezplatných nástrojů?",
      a: "Řada „online“ nástrojů nahraje tvůj soubor na server, takže smlouva nebo doklad totožnosti na chvíli žijí na infrastruktuře, kterou neovládáš. Nástroje přímo v zařízení, v prohlížeči, se tomu úplně vyhnou.",
    },
    {
      q: "Je víc komprese vždycky lepší?",
      a: "Ne. Přehnaná komprese zničí dokumenty, které to vůbec nepotřebovaly, a u souborů, které jsou už malé, nic nezmění. Použij nejjemnější úroveň, která splní tvůj cíl velikosti.",
    },
    {
      q: "Jak se vyhnu odeslání špatných stránek?",
      a: "Projdi dokument stránku po stránce před odesláním a nástrojem Extrahovat stránky z PDF odstraň cokoli, co tam nemá být. Interní poznámky a přebytečné stránky bývají obvyklými viníky.",
    },
    {
      q: "Proč bych neměl přepisovat originální soubor?",
      a: "Komprese, převod i úpravy jsou u kopie, kterou si necháváš, jednosměrné. Uložení pod novým názvem zachová originál, takže je chybu snadné vzít zpět.",
    },
  ],
  related: [
    { label: "Všechny bezplatné PDF nástroje", path: "/pdf-tools" },
    { label: "Jak připravit PDF před sdílením", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "PDF nástroje s důrazem na soukromí", path: "/guides/privacy-first-pdf-tools" },
    { label: "PDF vs JPG pro dokumenty", path: "/guides/pdf-vs-jpg-for-documents" },
  ],
  parentHub: { label: "Všechny bezplatné PDF nástroje", path: "/pdf-tools" },
};

export default content;
