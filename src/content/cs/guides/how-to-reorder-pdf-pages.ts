import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reorder-pdf-pages",
  h1: "Jak změnit pořadí stránek v PDF (zdarma, v prohlížeči)",
  description:
    "Seřaď stránky PDF do správného pořadí přímo v prohlížeči. Oprav sken, který vyšel pozpátku, nebo sloučený soubor, jehož stránky skončily v nesprávném pořadí.",
  updated: "2026-05-23",
  intro: [
    "Stránky skončí ve špatném pořadí častěji, než by si člověk myslel. Podavač dokumentů vezme hromadu a naskenuje ji odzadu. Sloučení spojí dva soubory, ale ve špatném sledu. Příloha, která má být na konci, skončí uprostřed. Ať je příčina jakákoli, oprava je stejná: stránky přeskládat, dokud dokument nedává smysl.",
    "Tento návod používá bezplatný nástroj Změnit pořadí stránek PDF, který zobrazí náhled každé stránky a umožní je přesouvat jednoduchým ovládáním přímo v prohlížeči – nic se nikam nenahrává. Vidíš náhledy, přeskládáš je na místo a stáhneš opravený soubor.",
    "Je to drobná operace s velkým dopadem: dokument ve správném pořadí působí záměrně, zatímco ten ve špatném pořadí vypadá u všeho nedbale.",
  ],
  steps: [
    {
      title: "Otevřít nástroj Změnit pořadí stránek PDF",
      body: "Přejdi na nástroj Změnit pořadí stránek PDF v prohlížeči. Běží na tvém zařízení – žádné nahrávání, žádný účet.",
    },
    {
      title: "Přidat PDF",
      body: "Přetáhni soubor do plochy pro přidání souboru nebo klikni pro jeho výběr. Nástroj vykreslí náhled každé stránky, takže hned uvidíš aktuální pořadí.",
    },
    {
      title: "Najít, co je špatně",
      body: "Projdi náhledy a hledej stránky, které jsou obrácené, na špatném místě nebo zdvojené. Znalost cílového pořadí předem ti přesuny výrazně zrychlí.",
    },
    {
      title: "Přesunout stránky do správného pořadí",
      body: "Ovládacími prvky posuň každou stránku na její správnou pozici. Postupuj od začátku dokumentu ke konci, aby pozice zůstávaly předvídatelné.",
    },
    {
      title: "Zkontrolovat nové pořadí",
      body: "Projdi si náhledy ještě jednou odshora dolů. Pořadí, které vidíš, je pořadí, které dostaneš v souboru.",
    },
    {
      title: "Stáhnout opravené PDF",
      body: "Exportuj přeskládaný soubor a ulož ho pod jasným názvem. Originál si ponech, dokud nezkontroluješ, že nové pořadí je správně.",
    },
  ],
  tips: [
    "Pokud celý sken vyšel obráceně, změna pořadí to opraví – ale stránka na šířku je problém s otočením, který řeší nástroj Otočit PDF.",
    "Pořadí uprav ještě před kompresí nebo převodem. Je snazší nejdřív dostat strukturu do pořádku a náročnější operace pustit až na hotový dokument.",
    "Při přesouvání stránek postupuj odpředu dozadu, aby se nepletly pozice, které jsi už nastavil.",
    "U dokumentů spojených z víc zdrojů uprav pořadí hned po sloučení, dokud máš zamýšlenou strukturu čerstvě v hlavě.",
    "Ponech si původní soubor. Pokud se přeskládání nepovede, je mnohem rychlejší začít znovu z nedotčeného zdroje.",
  ],
  mobileNote:
    "Přeskládávání na telefonu je práce s přetahováním náhledů a aplikace PDF Editor to dělá hmatatelně: stiskni, přetáhni, pusť, hotovo – offline a bez jakéhokoli nahrávání souboru. Hodí se hned po skenování, kdy stránky často potřebují rychlé přeuspořádání.",
  faq: [
    {
      q: "Můžu opravit sken, který vyšel v obráceném pořadí?",
      a: "Ano. Změna pořadí ti umožní sled otočit, aby se naposledy naskenovaná stránka vrátila na začátek. Pokud jsou stránky navíc otočené, orientaci oprav nástrojem Otočit PDF.",
    },
    {
      q: "Změní přeskládání obsah stránek?",
      a: "Ne. Mění se jen sled – obsah a orientace každé stránky zůstávají přesně takové, jaké byly.",
    },
    {
      q: "Nahrává se moje PDF někam?",
      a: "Ne. Přeskládání probíhá v prohlížeči na tvém zařízení, takže soubor zůstává v soukromí.",
    },
    {
      q: "Můžu při přeskládávání i mazat stránky?",
      a: "Přeskládání se týká jen pořadí. Chceš-li stránky vyřadit, extrahuj ty, které chceš zachovat, nástrojem Extrahovat stránky z PDF – nechtěné tak zůstanou mimo.",
    },
    {
      q: "Ovlivní to původní soubor?",
      a: "Ne. Nástroj vytvoří nové, přeskládané PDF a tvůj zdroj nechá nedotčený, takže v případě potřeby můžeš zkusit znovu z originálu.",
    },
  ],
  related: [
    {
      label: "Změnit pořadí stránek PDF — přeskládej stránky přímo v prohlížeči",
      path: "/reorder-pdf-pages",
    },
    { label: "Otočit PDF — oprav otočené stránky", path: "/rotate-pdf" },
    {
      label: "Jak organizovat PDF soubory",
      path: "/guides/how-to-organize-pdf-files",
    },
    { label: "Jak sloučit PDF soubory", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Změnit pořadí stránek PDF", path: "/reorder-pdf-pages" },
};

export default content;
