import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-avoid-uploading-sensitive-documents",
  h1: "Jak se vyhnout nahrávání citlivých dokumentů (praktické alternativy)",
  description:
    "Když tě postup láká nahrát citlivé PDF na server, skoro vždy existuje alternativa, která zůstane jen v zařízení. Kategorie úloh a nástroj bez nahrávání pro každou z nich.",
  updated: "2026-05-29",
  intro: [
    "Každá úloha s PDF má chvíli, kdy první odkaz ve výsledku vyhledávání chce, abys nahrál soubor. Komprese, sloučení, rozdělení, převod, podpis – ke každé z nich existují stovky webů postavených na principu nahraj-a-zpracuj. U běžných souborů je to v pořádku. U citlivých (finanční záznamy, doklady totožnosti, smlouvy, zdravotnická dokumentace) je to zbytné riziko.",
    "Vyhýbat se nahrávání neznamená vyhýbat se moderním nástrojům. Znamená to vybírat nástroje, které běží na tvém zařízení – v prohlížeči, v mobilní aplikaci, na počítači. Ke každé běžné úloze s PDF existuje aspoň jedna čistě lokální možnost, která svou práci odvede, aniž by se soubor kdy dotkl serveru třetí strany.",
    "Tenhle návod je praktická náhrada: kategorie úloh, lokální nástroj pro každou z nich a malá skupina případů, kde lokální zpracování skutečně ještě potřebu nepokrývá.",
  ],
  steps: [
    {
      title: "Pro kompresi použij kompresor v prohlížeči",
      body: "Zkomprimovat PDF v nástrojích tohoto webu běží lokálně. Zvládne typický soubor plný skenů nebo fotek bez nahrávání. Ověř přes vývojářské nástroje – žádný velký odchozí požadavek při přidání souboru.",
    },
    {
      title: "Pro slučování použij slučovač v prohlížeči",
      body: "Sloučit PDF spojí soubory lokálně. Sloučený soubor se zapíše zpátky do tvých stažených; žádná kopie neleží na serveru. Stejná architektura jako u komprese – nejdřív lokálně.",
    },
    {
      title: "Pro rozdělování a extrakci použij dělič v prohlížeči",
      body: "Rozdělit PDF a Extrahovat stránky z PDF běží na tvém zařízení. Operace na úrovni stránek jsou mechanické a lokálnímu zpracování dokonale sedí.",
    },
    {
      title: "Pro převod použij konvertor v prohlížeči",
      body: "PDF do Wordu, Word do PDF, Obrázek do PDF, PDF do obrázků – všechno dostupné jako verze v prohlížeči, které nenahrávají. Převod proběhne přímo v tvé záložce prohlížeče.",
    },
    {
      title: "Pro podepisování použij lokální nástroj na podpis",
      body: "Podepsat PDF v prohlížeči nebo aplikace PDF Editor na telefonu. Nakreslený podpis, žádná cloudová platforma na podepisování. Podepsaný soubor zůstává na tvém zařízení, dokud se sám nerozhodneš ho sdílet.",
    },
    {
      title: "Pro úlohy, které opravdu potřebují pomoc serveru, použij placený nástroj s výslovnými zárukami",
      body: "Některé postupy (náročné OCR na dlouhých dokumentech, pokročilé začernění) pořád těží ze zpracování na serveru. Pro ty vyber placený nástroj s výslovnými závazky ohledně uchovávání a nakládání s daty – ne bezplatný nástroj s vágní formulací.",
    },
  ],
  tips: [
    "Výsledky vyhledávání zvýhodňují nástroje, které si platí za umístění. První výsledek zřídkakdy bývá ten nejsoukromější; zkontroluj, co skutečně dostáváš.",
    "Čistě lokální nástroje fungují offline. Vyzkoušet nástroj offline je rychlé ověření, že soubor nepotřebuje síťový přístup.",
    "Nenaleť na nástroje, které „neukládají tvůj soubor“, ale ke zpracování stejně vyžadují nahrání. Krátké okno uchovávání je pořád reálná expozice u vysoce citlivého materiálu.",
    "Mobilní aplikace, které zpracovávají lokálně, bývají zřejmé – po instalaci fungují bez internetu. Aplikace PDF Editor tomuhle vzoru odpovídá.",
    "Vypěstuj si zvyk. Jakmile budeš standardně sahat po čistě lokálních nástrojích, citlivý materiál zůstane bezpečnější, aniž bys nad tím musel pokaždé přemýšlet.",
  ],
  mobileNote:
    "Na telefonu láká použít, ať App Store doporučí jakýkoli PDF nástroj – a řada z nich nahrává. Aplikace PDF Editor zpracovává všechno přímo na zařízení na iOS i Androidu, takže citlivý dokument může projít od zachycení fotoaparátem po podepsaný výstup, aniž by se dotkl serveru.",
  faq: [
    {
      q: "Dá se opravdu udělat všechny běžné úlohy s PDF bez nahrávání?",
      a: "Ano, u každodenních úloh: komprese, slučování, rozdělování, převod, podpis, vodoznak, přeřazení, extrakce. Nástroje na tomto webu je pokrývají lokálně. Některé pokročilé operace (plné OCR na dlouhých dokumentech) občas pořád potřebují pomoc serveru.",
    },
    {
      q: "Jak ověřím, že nástroj nenahrává?",
      a: "Vývojářské nástroje prohlížeče, panel Síť, přetáhni tam soubor. Pokud vidíš velký odchozí POST požadavek, nahrává. Pokud ne, je lokální. Rozdíl je vidět.",
    },
    {
      q: "Jsou lokální nástroje pomalejší?",
      a: "Někdy. Moderní WebAssembly dělá lokální zpracování konkurenceschopné se zpracováním na serveru u většiny úloh. Náročné operace na velkých souborech mohou lokálně trvat déle, ale u citlivého materiálu se ten kompromis obvykle vyplatí.",
    },
    {
      q: "Co OCR — dá se to spustit lokálně?",
      a: "Lehké OCR ano; přesné OCR na dlouhých dokumentech často pořád využívá zpracování na serveru. Pokud na OCR záleží, vyber nástroje, které výslovně uvádějí, kde zpracování probíhá.",
    },
    {
      q: "Není to přehnaně opatrné?",
      a: "Ne u citlivého materiálu. Model „všechno se nahrává jako výchozí“ fungoval, dokud byly dokumenty méně citlivé a narušení vzácnější. Obojí se změnilo. Přednost lokálnímu zpracování je teď rozumný základ.",
    },
  ],
  related: [
    { label: "Aplikace PDF vs online PDF nástroje", path: "/compare/pdf-app-vs-online-pdf-tools" },
    { label: "Zabezpečení PDF — heslo a šifrování", path: "/pdf-security" },
    { label: "Jak chránit citlivé PDF soubory", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Jak sdílet PDF soubory soukromě", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Pracovní postupy s dokumenty s důrazem na soukromí", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "Zabezpečení PDF — heslo a šifrování", path: "/pdf-security" },
};

export default content;
