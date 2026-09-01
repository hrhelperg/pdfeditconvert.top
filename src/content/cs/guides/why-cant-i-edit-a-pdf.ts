import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-edit-a-pdf",
  h1: "Proč nemůžu upravit PDF? Skutečné důvody a co pomáhá",
  description:
    "PDF byl navržen tak, aby se úpravám bránil, ale konkrétní věci – skeny, bezpečnostní příznaky, limity prohlížeče – dělají některé soubory těžší než jiné. Co blokuje ten tvůj a co skutečně funguje.",
  updated: "2026-05-29",
  intro: [
    "PDF byl navržen tak, aby vypadal všude stejně, a přesně proto se jeho úprava zdá těžší než úprava dokumentu Word. Formát zachází s textem spíš jako s vytištěnou stránkou než jako s proudem znaků – užitečné, když chceš sdílet s dokonalou přesností na pixel, frustrující, když potřebuješ změnit jméno ve smlouvě.",
    "Ne každé PDF je ale uzamčené stejně. Existují čtyři běžné důvody, proč nejde upravit: je to naskenovaný obrázek dokumentu bez skutečného textu pod ním, soubor má bezpečnostní příznak, který blokuje úpravy, tvůj prohlížeč je záměrně jen pro čtení, nebo byl originál exportovaný způsobem, který rozdrobil text na tvary. Každý z nich má jinou cestu vpřed.",
    "Tenhle návod projde každou příčinu srozumitelně, se správným nástrojem na každou. Žádná nevyžaduje drahý software a většina řešení funguje přímo v záložce prohlížeče.",
  ],
  steps: [
    {
      title: "Ověř, jestli má PDF skutečný text, nebo naskenované obrázky",
      body: "Zkus vybrat text kurzorem nebo prstem. Pokud výběr funguje, PDF má skutečný text a úprava je proveditelná. Pokud nejde vybrat nic, jde o sken – obrázky textu, ne skutečný text.",
    },
    {
      title: "Zkontroluj příznak omezující úpravy",
      body: "PDF mohou nést oprávnění, která dovolují prohlížení, ale blokují úpravy, tisk nebo kopírování. Většina prohlížečů v tomhle případě ukáže malou ikonu zámku nebo upozornění na „ochranu“. Autor omezení může zrušit; příjemci ho bezpečně obejít nemůžou.",
    },
    {
      title: "Na skutečné úpravy použij pořádný editor PDF",
      body: "Prohlížeče a základní čtečky text neupravují – jen ho zobrazují. Aplikace PDF Editor provádí strukturální úpravy textu, obrázků i stránek, aniž by soubor převedla mimo formát PDF, takže zachová rozvržení.",
    },
    {
      title: "Když potřebuješ zásadní přepis, převeď do Wordu",
      body: "Pokud potřebuješ přepsat odstavce, ne jen doladit slova, PDF do Wordu vytáhne text do skutečného editoru. Ztratíš přesné rozvržení, ale získáš plynulou úpravu textu – lepší pro dokumenty, které se stejně budou znovu publikovat.",
    },
    {
      title: "U naskenovaných PDF počítej s limity OCR",
      body: "Úprava skenu znamená nejdřív převést obrázky na text (OCR). Některé nástroje to dělají online, jiné ne, a kvalita se s rozlišením skenu výrazně mění. Výstup OCR ber jako výchozí bod, ne hotovou úpravu.",
    },
    {
      title: "Změny na úrovni stránek „úpravu“ nepotřebují",
      body: "Pokud potřebuješ jen odstranit, přeuspořádat, otočit nebo přidat stránky, textový editor vůbec nepotřebuješ – nástroje Extrahovat, Změnit pořadí a Otočit PDF zvládnou strukturální úpravy, aniž by odemkly textovou vrstvu.",
    },
  ],
  tips: [
    "Pokud potřebuješ jen přidat podpis nebo vyplnit formulář, soubor pravděpodobně žádnou „úpravu“ nepotřebuje – Podepsat PDF a vyplňování formulářů nechávají původní text netknutý.",
    "Některá PDF exportují každý znak jako drobný tvar místo textu. Výběr vypadá v pořádku, ale kopírování a vkládání vyprodukuje nesmysl. Tohle je nejhorší případ pro úpravu; jedinou reálnou cestou zpátky je zdrojový dokument.",
    "Nedůvěřuj webům na lámání hesel, které slibují odstranění omezení úprav. Buď nefungují, nebo jsou škodlivé, nebo obojí.",
    "Pokud jsi autor a chceš povolit úpravu souboru, který jsi dřív poslal, nejčistší cesta je exportovat ho znovu bez omezení.",
    "U opakovaných úprav stejného dokumentu uprav zdroj (Word, Pages, grafický nástroj) a exportuj znovu, místo abys pokaždé záplatoval PDF.",
  ],
  mobileNote:
    "Na telefonu jsou nativní prohlížeče většinou záměrně jen pro čtení. Aplikace PDF Editor zvládá úpravy textu, výměnu obrázků i přeuspořádání stránek na iOS i Androidu bez zploštění souboru, takže rychlá oprava nemusí čekat, až se dostaneš k notebooku.",
  faq: [
    {
      q: "Proč vidím text, ale nejde mi do něj kliknout?",
      a: "Buď je PDF sken (obrázek textu, žádné skutečné znaky pod ním), nebo je tvůj prohlížeč jen pro čtení. Skutečný editor PDF – jako aplikace PDF Editor – ti umožní kliknout do textu, který je opravdu upravitelný.",
    },
    {
      q: "Existuje způsob, jak odstranit omezení úprav?",
      a: "Omezení oprávnění čistě zruší jen původní autor. Nástroje, které slibují jejich odstranění, buď nefungují, nebo soubor poškodí. Požádej odesílatele o kopii bez omezení.",
    },
    {
      q: "Co je OCR a kdy ho potřebuji?",
      a: "OCR je proces, který promění obrázky textu ve skutečný text – potřebný při úpravě naskenovaného PDF. Kvalita závisí na skenu; čisté skeny ve vysokém rozlišení dopadnou u OCR mnohem líp než rozmazané fotky z telefonu.",
    },
    {
      q: "Mám ho pro úpravu převést do Wordu?",
      a: "Jen pokud potřebuješ zásadní změny textu. Převod ztratí věrnost rozvržení. Pro malé úpravy toho víc zachová skutečný editor PDF.",
    },
    {
      q: "Můžu upravovat stránky, aniž bych se dotkl textu?",
      a: "Ano. Změna pořadí, otáčení, extrakce a odstraňování stránek jsou strukturální úpravy a textový editor nevyžadují. Nástroje v prohlížeči na tomhle webu je zvládnou bez nahrávání.",
    },
  ],
  related: [
    { label: "Editor PDF – uprav text a obrázky na mobilu", path: "/pdf-editor" },
    { label: "PDF do Wordu – převeď pro rozsáhlé úpravy", path: "/pdf-to-word" },
    { label: "Jak upravit PDF na iPhonu", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "Jak upravit PDF na Androidu", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "Editor PDF – uprav text, obrázky a stránky", path: "/pdf-editor" },
};

export default content;
