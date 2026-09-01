import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-iphone",
  h1: "Jak podepsat PDF na iPhonu (průvodce 2026)",
  description:
    "Podepiš PDF na iPhonu pomocí nástroje Markup nebo aplikace PDF Editor. Limity vestavěného řešení a kdy je lepší volbou samostatná aplikace na podepisování.",
  updated: "2026-05-23",
  intro: [
    "Podepsat PDF na iPhonu je jeden z těch úkolů, který za tebe iOS skoro vyřeší samo. Vestavěný nástroj Markup umí v nouzi přidat podpis, a pro rychlý, jednorázový podpis je to opravdu v pořádku. Ale v okamžiku, kdy podepisuješ pravidelně – smlouvy, formuláře, dohody, které se vracejí týden co týden – jeho limity začnou být znát a specializovaná aplikace ušetří skutečný čas.",
    "Tenhle návod pokrývá obě cesty. Nejdřív nativní přístup přes Markup v aplikaci Soubory, s upřímným pohledem na to, kde nestačí. Pak aplikaci PDF Editor, která uloží podpis k opakovanému použití, rozpozná pole pro podpis a vše drží přímo v zařízení.",
    "Elektronický podpis je pro běžné obchodní dokumenty přijímán ve většině míst, takže podepisování na iPhonu je jen málokdy pouhá pohodlnost – často je samo o sobě naprosto dostačující.",
  ],
  steps: [
    {
      title: "Rychlá cesta: otevři PDF v aplikaci Soubory",
      body: "Klepni na PDF v aplikaci Soubory, čímž ho otevřeš, a pak klepni na ikonu Markup (hrot pera). Je to vestavěný editor iOS – šikovný pro jednorázový podpis bez instalace čehokoli.",
    },
    {
      title: "Přidej podpis pomocí nástroje Markup",
      body: "Klepni na tlačítko plus, zvol Podpis a nakresli ho prstem, nebo ulož nový. Umísti ho na stránku a změň velikost. Pro příležitostný dokument to stačí.",
    },
    {
      title: "Věz, kde Markup naráží na limity",
      body: "Markup neumí rozpoznat pole pro podpis ve formuláři, se zápisem data a iniciál si moc neporadí a znovu kreslit nebo znovu hledat svůj podpis pokaždé přestane brzy bavit. Pro časté podepisování přejdi na specializovaný nástroj.",
    },
    {
      title: "Lepší cesta: otevři ho v aplikaci PDF Editor",
      body: "Importuj PDF do aplikace ze Souborů, Mailu nebo z jakékoli nabídky sdílení. Nástroj Podepsat nabízí vlastnoruční podpis, napsaný podpis i iniciály.",
    },
    {
      title: "Nakresli svůj podpis jednou, používej ho napořád",
      body: "Vytvoř svůj podpis poprvé – prstem nebo Apple Pencil – a zůstane uložený v zařízení pro každý budoucí dokument. Podepisování se pak scvrkne na otevřít, klepnout, umístit, exportovat.",
    },
    {
      title: "Umísti, orazítkuj datem a exportuj",
      body: "Umísti podpis tam, kam patří, přidej datum nebo iniciály, pokud je dokument potřebuje, a exportuj podepsanou kopii. Ulož ji jako nový soubor, aby nepodepsaný originál zůstal netknutý.",
    },
  ],
  tips: [
    "Pokud ho máš, použij Apple Pencil – tah je znatelně čistší než prstem, což se hodí u smluv pro klienty.",
    "Markup je správný nástroj pro opravdu jednorázový případ. Pokud podepisuješ víc než jednou měsíčně, uložený, opakovaně použitelný podpis se rychle vyplatí.",
    "Nepodepsaný originál si nech vedle podepsané kopie. Pokud protistrana chce čistou verzi nebo musíš podepsat znovu kvůli opravě, budeš ho mít po ruce.",
    "U citlivého podepsaného dokumentu přidej před sdílením heslo – podepisování a ochrana jsou dva samostatné kroky.",
    "Elektronický podpis se hodí pro běžné obchodní dokumenty, ale vysoce hodnotné nebo regulované dohody mohou vyžadovat formálnější kvalifikovaný podpis – ověř si pravidla pro svůj případ.",
  ],
  mobileNote:
    "Podepisování na iPhonu znamená, že se smlouva vrátí do hodiny, často během pár minut. Aplikace PDF Editor drží uložený podpis přímo v zařízení, rozpozná existující pole pro podpis a dokument nikdy nenahraje na server – takže i citlivé dohody zůstanou v soukromí, zatímco podepisuješ na cestách.",
  faq: [
    {
      q: "Můžu podepsat PDF na iPhonu bez aplikace?",
      a: "Ano – otevři ho v aplikaci Soubory a použij Markup k přidání podpisu. To je ideální pro jednorázový případ. Pro pravidelné podepisování je specializovaný nástroj s uloženým, opakovaně použitelným podpisem mnohem rychlejší.",
    },
    {
      q: "Co vestavěný nástroj Markup neumí?",
      a: "Neumí rozpoznat pole pro podpis ve formuláři, nemotorně zvládá data a iniciály a nutí tě podpis pokaždé znovu umísťovat. Právě tyhle mezery vedou lidi, kteří podepisují často, k přechodu na specializovanou aplikaci.",
    },
    {
      q: "Je elektronický podpis na mém iPhonu právně platný?",
      a: "Pro běžné obchodní smlouvy ve většině jurisdikcí ano. Vysoce hodnotné nebo regulované dokumenty mohou vyžadovat formálnější kvalifikovaný podpis – ověř si pravidla platná pro tvůj případ.",
    },
    {
      q: "Nahrává se můj podepsaný dokument někam?",
      a: "S aplikací PDF Editor ne – tvůj uložený podpis i dokument zůstávají v zařízení. Na server se nic neposílá.",
    },
    {
      q: "Jak podepíšu místo toho na Androidu?",
      a: "Postup je podobný, ale nativní nástroje se liší. Podívej se na samostatný návod, jak podepsat PDF na Androidu.",
    },
  ],
  related: [
    { label: "Podepsat PDF – elektronický podpis na mobilu", path: "/sign-pdf" },
    { label: "Jak podepsat PDF na Androidu", path: "/guides/how-to-sign-pdf-on-android" },
    { label: "Jak podepsat PDF na telefonu", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Jak upravit PDF na iPhonu", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Podepsat PDF", path: "/sign-pdf" },
};

export default content;
