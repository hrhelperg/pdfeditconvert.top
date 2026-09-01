import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-font-problems",
  h1: "Problémy s písmem ve formuláři PDF (automatická velikost, oříznutí, náhrada)",
  description:
    "Text v poli je moc velký, moc malý, nebo se za psaní sám zmenšuje? Zvláštnosti písma typické právě pro pole formulářů – automatická velikost, náhrada, oříznutí – a jak dosáhnout čistých a čitelných odpovědí.",
  updated: "2026-06-01",
  intro: [
    "Pole formuláře mají své vlastní chování písma, oddělené od zbytku PDF, a vyrábí to konkrétní sadu bolestí hlavy. Text, který se s dalším psaním zmenšuje, odpovědi, které v jednom poli vypadají obrovské a ve vedlejším drobné, znaky oříznuté nahoře nebo dole v poli, nebo jiné písmo, než jaké mají popisky formuláře. Tohle jsou zvláštnosti písma typické pro pole formulářů, ne obecné problémy s písmem v PDF – a většina z nich souvisí s tím, jak bylo pole nastavené.",
    "Největším viníkem je automatická velikost. Řada polí je nastavená tak, aby text automaticky zmenšovala, ať se delší odpovědi pořád vejdou, a proto se ti text zmenšuje čím dál víc, čím víc píšeš. Další problémy pramení z toho, že písmo pole není vložené, takže ho některé prohlížeče nahradí, nebo je pole prostě moc krátké na svou velikost písma a znaky ořezává.",
    "Tenhle návod pokrývá problémy s písmem typické právě pro pole formulářů, jak každý z nich rozpoznat a co změnit, aby byly odpovědi čisté a konzistentní. Pro problémy s písmem napříč celým dokumentem, ne jen jeho poli, jde šířeji obecný návod o písmu v PDF.",
  ],
  steps: [
    {
      title: "Rozpoznej zmenšování kvůli automatické velikosti",
      body: "Pokud se text pole zmenšuje s tím, jak přidáváš znaky, pole používá automatickou velikost, aby se všechno vešlo. Je to záměr, ale dlouhé odpovědi kvůli tomu mohou vyjít drobounké. Drž odpovědi stručné, nebo si, pokud formulář ovládáš ty, nastav pevnou velikost.",
    },
    {
      title: "Oprav nekonzistentní velikosti napříč poli",
      body: "Odpovědi, které v jednom poli vypadají velké a v jiném malé, obvykle znamenají, že má každé pole nastavenou jinou velikost písma. Pokud je formulář tvůj, sjednoť velikost písma polí, ať si každá odpověď odpovídá.",
    },
    {
      title: "Vyřeš oříznuté znaky",
      body: "Pokud jsou písmena useknutá nahoře nebo dole, je pole na svou velikost písma moc krátké. Zvětši pole nebo zmenši velikost písma (u formuláře, který ovládáš ty), nebo u cizího akceptuj menší velikost při vyplňování.",
    },
    {
      title: "Vyřeš nahrazené písmo",
      body: "Pokud se text pole objeví jiným písmem, než jsi čekal, není zamýšlené písmo vložené a prohlížeč nějaké nahradil. Vložení písma pole při stavbě formuláře udrží vzhled konzistentní napříč prohlížeči.",
    },
    {
      title: "Zafixuj, ať se vzhled uzamkne",
      body: "Jakmile odpovědi vypadají správně, formulář zafixuj. Zafixování zapíše text pole natrvalo do stránky, takže se jeho velikost a písmo zobrazí všude stejně, bez ohledu na prohlížeč příjemce.",
    },
  ],
  tips: [
    "Automatická velikost je obvyklý důvod, proč se text pole s psaním zmenšuje – stručné odpovědi zůstanou čitelné, nebo si u formulářů, které stavíš sám, nastav pevnou velikost.",
    "Pokud formulář navrhuješ, sjednoť velikosti písma polí, ať odpovědi nevyjdou jako mozaika velkého a malého textu.",
    "Oříznuté znaky znamenají, že je pole na své písmo moc krátké; u formuláře, který ovládáš, uprav velikost pole nebo písma.",
    "Před odesláním zafixuj, ať se ti písmo a velikost polí na obrazovce příjemce neposunou.",
    "Vzhled polí se může mezi prohlížeči lišit, takže nejkonzistentnější je pevný, vložený, zafixovaný výsledek.",
  ],
  mobileNote:
    "Na telefonu ti aplikace PDF Editor dovolí umístit text na neinteraktivní formuláře ve velikosti, kterou zvolíš, čímž se automatické velikosti polí úplně vyhneš, a výsledek zafixovat, ať jsou písmo i velikost uzamčené. U interaktivních polí stručné odpovědi zabrání automatickému zmenšování, kvůli kterému bývá dlouhý text hůř čitelný.",
  faq: [
    {
      q: "Proč se mi text ve formuláři zmenšuje, jak píšu?",
      a: "Pole používá automatickou velikost, která text zmenšuje, ať se delší odpovědi pořád vejdou. Je to zamýšlené chování. Drž odpovědi stručné, ať zůstanou čitelné, nebo si, pokud formulář ovládáš, nastav pevnou velikost písma.",
    },
    {
      q: "Proč se mi odpovědi zobrazují v různých velikostech?",
      a: "Každé pole má pravděpodobně nastavenou vlastní velikost písma. U formuláře, který jsi vytvořil sám, sjednoť velikost písma polí, ať si každá odpověď odpovídá. U cizího jsou velikosti zapečené v polích.",
    },
    {
      q: "Proč jsou znaky v mých polích formuláře oříznuté?",
      a: "Pole je na svou velikost písma moc krátké a písmena ořezává. Zvětši pole nebo zmenši velikost písma u formuláře, který ovládáš, nebo u cizího použij při vyplňování menší velikost.",
    },
    {
      q: "Proč vypadá písmo pole jinak než popisky?",
      a: "Zamýšlené písmo pole není vložené, takže ho tvůj prohlížeč nahradil jiným. Vložení písma pole při tvorbě formuláře udrží vzhled konzistentní napříč různými prohlížeči.",
    },
    {
      q: "Čím se to liší od obecných problémů s písmem v PDF?",
      a: "Tohle je o písmu uvnitř polí formuláře – automatická velikost, velikost na úrovni pole, oříznutí. Obecný návod o písmu v PDF pokrývá chybějící nebo nahrazené písmo napříč celým dokumentem.",
    },
  ],
  related: [
    {
      label: "Jak vyřešit problémy s písmem v PDF",
      path: "/guides/how-to-fix-pdf-font-issues",
    },
    {
      label: "Problémy s formátováním formuláře PDF",
      path: "/guides/pdf-form-formatting-issues",
    },
    { label: "Osvědčené postupy pro formuláře PDF", path: "/guides/pdf-form-best-practices" },
    { label: "Oprav chyby ve formuláři PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
