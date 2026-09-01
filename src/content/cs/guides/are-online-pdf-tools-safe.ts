import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "are-online-pdf-tools-safe",
  h1: "Jsou online PDF nástroje bezpečné? Upřímný pohled na rizika",
  description:
    "Většina „online“ PDF nástrojů nahraje tvůj soubor na server. Některé to nedělají. Skutečná rizika, kategorie nástrojů, které pracují s daty odlišně, a jak je od sebe rozeznat.",
  updated: "2026-05-29",
  intro: [
    "„Online PDF nástroj“ je fráze, která skrývá zásadní rozdíl. Některé z těchto nástrojů tvůj soubor stáhnou na svůj server, zpracují ho tam a výsledek pošlou zpátky. Jiné běží celé v tvém prohlížeči – soubor neopustí tvé zařízení. Oběma se občas říká „online“ a rozdíl je pro cokoli citlivého docela zásadní.",
    "Upřímná odpověď na otázku „jsou bezpečné“ zní: záleží na tom, jaký typ používáš a co je v souboru. Bankovní výpis procházející nástrojem, který nahrává, je skutečné riziko, i s uvedenými zásadami uchovávání. Stejný výpis u nástroje, který zpracovává lokálně, se jejich sítě nikdy nedotkne, takže je profil rizika zásadně jiný.",
    "Tenhle návod rozděluje kategorie bez strašení. Vysvětluje, kde jsou skutečná rizika, jak rychle přečíst zásady ochrany osobních údajů a jak poznat, jestli nástroj, o kterém uvažuješ, nahrává, nebo běží lokálně – bez toho, abys marketingovému textu bral slovo za slovo.",
  ],
  steps: [
    {
      title: "Zjisti, do které kategorie nástroj patří",
      body: "Tři kategorie: (1) plné nahrání – soubor jde na server, tam se zpracuje. (2) V prohlížeči s volitelnou synchronizací – běží lokálně, ale nabízí cloudové funkce navíc. (3) Jen prohlížeč – nikdy nic nenahrává. Kategorie určuje skutečné riziko.",
    },
    {
      title: "Zkontroluj zásady ochrany osobních údajů kvůli uchovávání",
      body: "Hledej slova jako „uchovává“, „ukládá“, „smaže po“. Zásady, které říkají „soubory se mažou do jedné hodiny“, tě řadí do kategorie (1). Zásady, které říkají „soubory neopustí tvé zařízení“, ukazují na kategorii (3). Vágní zásady jsou varovný signál.",
    },
    {
      title: "Ověř to sledováním síťového provozu",
      body: "Otevři vývojářské nástroje, panel Síť (network), přetáhni tam svoje PDF. Pokud vidíš nahrávání (velký odchozí požadavek při přidání souboru), nástroj nahrává. Pokud ho nevidíš, zpracovává lokálně. Tohle je nejpřímější ověření.",
    },
    {
      title: "Přizpůsob nástroj citlivosti souboru",
      body: "Běžné soubory (dovolenkové fotky jako PDF) můžou jít přes jakoukoli kategorii. Citlivé soubory (finanční, právní, zdravotní, osobní) patří ke kategorii (3), nebo k placenému nástroji s výslovnými zárukami ohledně nakládání s daty.",
    },
    {
      title: "Zvaž, co „bezpečné“ pro tvůj případ vlastně znamená",
      body: "Někdy je riziko firemní (neuniknout data klienta). Někdy regulatorní (GDPR). Někdy osobní (vyhnout se krádeži identity). Správný nástroj závisí na hrozbě, které skutečně čelíš.",
    },
    {
      title: "V nejistotě zvol výchozí nástroje v prohlížeči",
      body: "Nástroje v prohlížeči, které nenahrávají, jsou bezpečné svou podstatou – soubor nemůže uniknout ze serveru, který ho nikdy nedostal. Nástroje na tomto webu patří přesně do téhle kategorie.",
    },
  ],
  tips: [
    "Zdarma + nahrává + žádné jasné zásady ochrany osobních údajů = pro cokoli citlivého se vyhni. Tahle kombinace je nejrizikovější profil.",
    "I nahrávající nástroje se silnými zásadami ochrany osobních údajů mají reálnou útočnou plochu – narušení serveru, selhání při uchovávání, přístup zaměstnanců. Lokální zpracování tuhle plochu odstraní.",
    "Nevěř tvrzením „neukládáme“ bez ověření. Sledování síťového provozu je jediný spolehlivý způsob, jak se ujistit.",
    "Nástroje v prohlížeči mají svoje vlastní limity – náročné operace a OCR občas potřebují pomoc serveru. Znej ten limit; neslibuj si víc, než nástroj skutečně dá.",
    "Pokud pracovní postup vyžaduje nahrání (vzácné), vyber nástroj s uvedenou dobou uchovávání a použij čerstvý soubor chráněný heslem.",
  ],
  mobileNote:
    "Mobilní PDF nástroje se také dělí na nahrávající a čistě lokální. Aplikace PDF Editor zpracovává všechno přímo na zařízení na iOS i Androidu – žádné nahrávání, žádný účet, žádná synchronizace, pokud ji sám nezapneš. Pro citlivé dokumenty na telefonu je tohle správná výchozí volba.",
  faq: [
    {
      q: "Je nahrání mého PDF do online nástroje opravdu rizikové?",
      a: "Záleží na souboru. U itineráře na dovolenou je riziko velmi nízké. U finančních záznamů nebo smluv je riziko skutečné – narušení serveru i selhání v uchovávání se stávají. Vyber nástroj podle souboru.",
    },
    {
      q: "Jak poznám, jestli nástroj nahrává, nebo zpracovává lokálně?",
      a: "Otevři vývojářské nástroje prohlížeče, panel Síť, přetáhni tam soubor. Pokud při přidání souboru vystřelí velký odchozí síťový požadavek, nahrává. Pokud ne, zpracovává lokálně.",
    },
    {
      q: "Jsou placené nástroje bezpečnější než ty zdarma?",
      a: "Někdy. Placené nástroje mívají výslovné závazky ohledně uchovávání a nakládání s daty. Některé nástroje zdarma (ty na tomhle webu) běží lokálně a takové závazky ani nepotřebují, protože tvůj soubor nikdy nedostanou.",
    },
    {
      q: "Co end-to-end šifrování?",
      a: "Užitečné pro sdílení, ale nepomůže při zpracování. Pokud musí server přečíst tvůj soubor, aby ho zkomprimoval, šifrování při přenosu na tom nic nemění – server obsah stejně vidí.",
    },
    {
      q: "Mám PDF před nahráním zašifrovat?",
      a: "Pokud musíš nahrát, ano. PDF chráněné heslem dorazí na server už chráněné. Ale lepší je nahrání u citlivého materiálu úplně obejít.",
    },
  ],
  related: [
    { label: "PDF nástroje — v prohlížeči, bez nahrávání", path: "/pdf-tools" },
    { label: "PDF nástroje s důrazem na soukromí", path: "/guides/privacy-first-pdf-tools" },
    { label: "PDF nástroje v prohlížeči vs nástroje s nahráváním", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Ukládají si online PDF nástroje tvé soubory?", path: "/guides/do-online-pdf-tools-store-files" },
  ],
  parentHub: { label: "PDF nástroje — bezplatně, v prohlížeči", path: "/pdf-tools" },
};

export default content;
