import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-print-a-filled-pdf-form",
  h1: "Jak vytisknout vyplněný formulář PDF se všemi odpověďmi",
  description:
    "Vytiskl jsi formulář a pole vyšla prázdná? Proč se vyplněné hodnoty někdy netisknou a jak dosáhnout čisté papírové kopie, na které je vidět každá odpověď.",
  updated: "2026-06-01",
  intro: [
    "Vyplníš formulář na obrazovce, pošleš ho na tiskárnu a papír vyjede se všemi chybějícími odpověďmi – jen prázdný formulář. Je to jeden z nejčastějších a nejzáhadnějších problémů s formuláři a má konkrétní příčinu: odpovědi žijí ve vrstvě polí formuláře a některé cesty tisku tuhle vrstvu přeskočí a vytisknou jen stránku pod ní.",
    "Řešením bývá obvykle jedna ze dvou věcí – zapnout nastavení, které tiskne hodnoty polí formuláře, nebo formulář nejdřív zafixovat, aby se odpovědi staly součástí stránky a nedaly se vynechat. Ať tak či tak, dosáhnout čistého výtisku s viditelnou každou odpovědí je jednoduché, jakmile víš, proč se to děje.",
    "Tenhle návod pokrývá problém prázdných polí, nastavení tisku, která ho ovlivňují, a širší kontroly tisku (okraje, měřítko), díky kterým vyplněný formulář na papíře vypadá správně.",
  ],
  steps: [
    {
      title: "Zopakuj problém v náhledu tisku",
      body: "Otevři dialog tisku a podívej se na náhled ještě před odesláním čehokoli na tiskárnu. Pokud odpovědi chybí i tam, jde o problém s tiskem polí, ne o závadu tiskárny.",
    },
    {
      title: "Zapni tisk hodnot polí formuláře",
      body: "Hledej možnost tisku typu „tisknout pole formuláře“ nebo nastavení komentářů a formulářů přepnuté na „dokument a poznámky“. Zapnutím řekneš tiskové cestě, ať do výstupu zahrne vrstvu polí s tvými odpověďmi.",
    },
    {
      title: "Pokud tahle možnost chybí, formulář nejdřív zafixuj",
      body: "Zafixování slije tvé vyplněné odpovědi přímo do stránky. Jakmile je formulář zafixovaný, neexistuje samostatná vrstva polí, kterou by šlo vynechat, takže odpovědi obsahuje každá cesta tisku. Tohle je nejspolehlivější řešení.",
    },
    {
      title: "Zkontroluj měřítko a okraje",
      body: "Nastav měřítko na „přizpůsobit“ nebo 100 % místo vlastního přiblížení, ať se formulář neořízne ani nezmenší. Ověř, že velikost papíru sedí formuláři, ať nic nezůstane mimo stránku.",
    },
    {
      title: "Vytiskni jednu zkušební stránku",
      body: "Nejdřív vytiskni jednu stránku, ať před spuštěním celého dokumentu potvrdíš, že odpovědi, rozvržení i okraje vypadají správně – zvlášť u vícestránkových formulářů.",
    },
  ],
  tips: [
    "Nejrychlejší univerzální oprava je formulář zafixovat a pak vytisknout – zafixovaný formulář vytiskne odpovědi vždy, bez zvláštního nastavení.",
    "Pokud náhled odpovědi ukazuje, ale papír ne, problém je v nastavení tisku, ne v souboru – znovu zkontroluj možnost pro pole formuláře.",
    "Naskenovaný neinteraktivní formulář tenhle problém nikdy nemá: jeho „pole“ jsou už součástí stránky, takže se vytisknou vždy.",
    "U tmavých nebo stínovaných formulářů zkontroluj, že se text v poli tiskne barvou, která zůstane čitelná na pozadí.",
    "Nastavení tisku se mezi aplikacemi a tiskárnami liší, takže se přesný název možnosti mění – hledej cokoli zmiňujícího pole formuláře nebo poznámky.",
  ],
  mobileNote:
    "Tisk z telefonu má stejnou past – některé zkratky tisku hodnoty polí vynechávají. V aplikaci PDF Editor můžeš vyplněný formulář před tiskem nebo odesláním na tiskárnu zafixovat, takže se odpovědi natrvalo zapíšou do stránky a vyjdou pokaždé.",
  faq: [
    {
      q: "Proč mám při tisku prázdné odpovědi ve formuláři?",
      a: "Protože jsou odpovědi uložené ve vrstvě polí formuláře a tvá tisková cesta ji přeskakuje. Zapni možnost tisknout hodnoty polí formuláře, nebo formulář zafixuj, ať se odpovědi stanou součástí stránky.",
    },
    {
      q: "Co udělá zafixování pro tisk?",
      a: "Zafixování slije tvé vyplněné hodnoty přímo do stránky. Poté neexistuje samostatná vrstva polí, kterou by šlo vynechat, takže se odpovědi spolehlivě vytisknou z jakékoli aplikace nebo tiskárny.",
    },
    {
      q: "Odpovědi se zobrazují na obrazovce, ale na papíře ne – proč?",
      a: "Tvůj prohlížeč zobrazuje vrstvu polí, ale nastavení tisku ji vylučuje. Hledej možnost tisku týkající se polí formuláře nebo „dokument a poznámky“ a zapni ji, nebo formulář před tiskem zafixuj.",
    },
    {
      q: "Proč je můj vytištěný formulář uříznutý na okrajích?",
      a: "To je neshoda měřítka nebo velikosti papíru, nezávislá na problému s prázdnými poli. Nastav měřítko na přizpůsobit nebo 100 % a sjednoť velikost papíru s formulářem.",
    },
    {
      q: "Mají tenhle problém i naskenované neinteraktivní formuláře?",
      a: "Ne. Odpovědi neinteraktivního formuláře jsou součástí obrázku stránky, takže se vytisknou vždy. Problém s prázdnými poli postihuje jen interaktivní formuláře se samostatnou vrstvou polí.",
    },
  ],
  related: [
    {
      label: "Jak uložit vyplněný formulář PDF",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Formulář PDF se netiskne správně",
      path: "/guides/pdf-form-not-printing-correctly",
    },
    {
      label: "Jak vyřešit problémy s tiskem PDF",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    {
      label: "Jak odeslat vyplněný formulář PDF",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
