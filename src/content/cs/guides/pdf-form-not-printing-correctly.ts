import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-printing-correctly",
  h1: "Formulář PDF se netiskne správně? Oprav prázdná pole",
  description:
    "Formulář se tiskne s prázdnými poli, posunutým textem nebo oříznutými okraji? Problémy s tiskem typické právě pro formuláře – hlavně chybějící hodnoty polí – a nastavení, které každý z nich vyřeší.",
  updated: "2026-06-01",
  intro: [
    "Formuláře se tisknou špatně způsoby, jaké obyčejná PDF nemají. Nejčastější a nejmatoucí je, že vyplněná pole vyjdou prázdná – všechno jsi dokončil na obrazovce, ale papír ukáže jen prázdný formulář. Hned za tím jde text pole, který se posune mimo řádek, zaškrtávací pole, která se nevytisknou, a okraje, které se ořežou. Každý z toho má konkrétní, opravitelnou příčinu zakořeněnou v tom, že se pole formuláře tisknou jinak než obsah stránky.",
    "Hlavní problém – prázdná pole na papíře – se děje proto, že vyplněné odpovědi žijí ve vrstvě polí formuláře a některé tiskové cesty tuhle vrstvu úplně přeskočí. Řešením je buď nastavení tisku, které pole formuláře zahrne, nebo zafixování formuláře, aby se odpovědi staly součástí stránky. Ostatní problémy se týkají měřítka a vykreslování polí, každý s vlastním nastavením.",
    "Tenhle návod se soustředí na problémy s tiskem typické právě pro formuláře. Pro obecné problémy s tiskem PDF, jako je špatná velikost stránky u jakéhokoli dokumentu, jde šířeji obecný návod o tisku.",
  ],
  steps: [
    {
      title: "Oprav prázdná pole: tiskni hodnoty polí, nebo zafixuj",
      body: "Pokud se vyplněná pole tisknou prázdná, zapni možnost tisku polí formuláře (někdy „dokument a poznámky“), nebo formulář nejdřív zafixuj, ať se odpovědi slijí se stránkou a tisknou se vždy.",
    },
    {
      title: "Oprav posunutý text pole",
      body: "Pokud se text pole tiskne mimo místo nebo jiným písmem, vykresluje prohlížeč pole pro tisk jinak. Zafixování uzamkne vzhled, který vidíš na obrazovce, ať se tiskne stejně.",
    },
    {
      title: "Oprav chybějící zaškrtnutí a značky",
      body: "Zaškrtnutí, která na papíře zmizí, mají stejný problém s vrstvou polí jako prázdný text. Nastavení tisku polí formuláře nebo krok se zafixováním je vrátí zpátky spolu se zbytkem tvých odpovědí.",
    },
    {
      title: "Oprav oříznuté okraje",
      body: "Nastav měřítko na „přizpůsobit“ nebo 100 % místo vlastního přiblížení a sjednoť velikost papíru s formulářem. Tohle je problém s měřítkem, oddělený od problému s vrstvou polí, ale běžný u hustých formulářů.",
    },
    {
      title: "Vytiskni jednu stránku pro ověření",
      body: "Po změně nastavení nejdřív vytiskni jednu stránku. Ověř, že odpovědi, zarovnání i okraje vypadají správně, než celý vícestránkový formulář svěříš papíru.",
    },
  ],
  tips: [
    "Zafixování před tiskem je univerzální oprava pro prázdná nebo posunutá pole – zafixovaný formulář vytiskne odpovědi všude bez zvláštního nastavení.",
    "Pokud se odpovědi zobrazují na obrazovce, ale na papíře ne, jde o nastavení tisku, ne o soubor – hledej možnost pro pole formuláře.",
    "Problémy s měřítkem a velikostí papíru jsou oddělené od problému s prázdnými poli; oprav je pomocí „přizpůsobit“/100 % a odpovídajícího papíru.",
    "Naskenované neinteraktivní formuláře problém s prázdnými poli nemají, protože jejich odpovědi jsou už součástí stránky.",
    "Názvy možností tisku se liší podle aplikace a tiskárny, takže hledej cokoli zmiňujícího pole formuláře, poznámky nebo komentáře.",
  ],
  mobileNote:
    "Zkratky tisku na telefonu dokážou hodnoty polí vynechat stejně jako ty na počítači. V aplikaci PDF Editor vyplněný formulář před tiskem nebo odesláním na tiskárnu zafixuj, ať se každá odpověď natrvalo zapíše do stránky a spolehlivě se vytiskne.",
  faq: [
    {
      q: "Proč se mi formulář tiskne s prázdnými poli?",
      a: "Vyplněné odpovědi jsou ve vrstvě polí formuláře a tvá tisková cesta ji přeskakuje. Zapni možnost tisknout pole formuláře, nebo formulář zafixuj, ať se odpovědi stanou součástí stránky a vždy se vytisknou.",
    },
    {
      q: "Proč se text pole tiskne na špatném místě nebo jiným písmem?",
      a: "Prohlížeč vykresluje pole pro tisk jinak. Formulář nejdřív zafixuj – zafixování ustálí vzhled na ten, který vidíš na obrazovce, ať se vytiskne identicky.",
    },
    {
      q: "Nevytisknou se mi zaškrtnutí – proč?",
      a: "Stejná příčina jako u prázdného textu: zaškrtávací pole jsou součástí vrstvy polí. Nastavení tisku polí formuláře nebo krok se zafixováním je vytiskne spolu s ostatními odpověďmi.",
    },
    {
      q: "Proč je můj vytištěný formulář uříznutý na okrajích?",
      a: "To je neshoda měřítka nebo velikosti papíru, ne problém s poli. Nastav měřítko na přizpůsobit nebo 100 % a sjednoť velikost papíru s velikostí stránky formuláře.",
    },
    {
      q: "Čím se to liší od obecných problémů s tiskem PDF?",
      a: "Tohle pokrývá problémy typické pro formuláře – hlavně chybějící hodnoty polí. Obecný návod o tisku PDF řeší problémy napříč celým dokumentem, jako je špatná velikost nebo ořezání u jakéhokoli PDF.",
    },
  ],
  related: [
    {
      label: "Jak vytisknout vyplněný formulář PDF",
      path: "/guides/how-to-print-a-filled-pdf-form",
    },
    {
      label: "Jak vyřešit problémy s tiskem PDF",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    { label: "Formulář PDF nefunguje", path: "/guides/pdf-form-not-working" },
    { label: "Oprav chyby ve formuláři PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
