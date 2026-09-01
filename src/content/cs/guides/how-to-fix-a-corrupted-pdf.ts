import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-a-corrupted-pdf",
  h1: "Jak opravit poškozené PDF (co skutečně funguje)",
  description:
    "Většina „poškozených“ PDF ve skutečnosti poškozená není – jde o přerušené stažení, neshodu prohlížečů nebo neúplný zápis. Upřímný kontrolní seznam řešení, která soubor zachrání, a kdy je opravdu ztracený.",
  updated: "2026-05-29",
  intro: [
    "Skoro každé PDF, které se označí za „poškozené“, je ve skutečnosti něco méně dramatického: stažení, které se nedokončilo, prohlížeč, který odmítá číst mírně odlišný soubor, nebo zápis přerušený dřív, než se soubor uzavřel. Skutečné poškození – kdy jsou bajty uvnitř souboru opravdu zničené – je vzácnější, než si lidé myslí, a když se stane, obnova je nanejvýš částečná.",
    "Důvod, proč na tom záleží, je ten, že řešení pro těchhle čtyři příčiny jsou úplně odlišná. Nové stažení zabere pár vteřin; výměna prohlížeče pár vteřin; zpětný export minutu; skutečná obnova na úrovni bajtů hodiny práce a často je nemožná. Vědět, do které kategorie tvůj soubor patří, ušetří skutečný čas.",
    "Tenhle návod projde diagnózy od nejlevnějších po nejdražší a pak vysvětlí, co dělat, když je soubor nenávratný. Většina souborů ožije už do třetího kroku.",
  ],
  steps: [
    {
      title: "Stáhni nebo si nech znovu poslat soubor",
      body: "Přerušené stažení vypadá z pohledu prohlížeče identicky jako poškození. Stáhni soubor znovu. Pokud se druhá kopie otevře, ta první byla neúplná. Pokud je uvedená, zkontroluj velikost v bajtech vůči zdroji.",
    },
    {
      title: "Vyzkoušej aspoň dva další prohlížeče",
      body: "Prohlížeče, Náhled, mobilní čtečky a desktopové aplikace zacházejí s PDF každý trochu jinak. Soubor, který Acrobat odmítá, se v Chrome někdy otevře bez problémů. Pokud ho přečte i jen jeden prohlížeč, soubor není doopravdy rozbitý.",
    },
    {
      title: "Otevři soubor ve funkčním prohlížeči a exportuj ho znovu",
      body: "Tisk do PDF (macOS, Windows, Linux) nebo „Uložit jako PDF“ z funkčního prohlížeče přestaví strukturu souboru. Nová kopie se často otevře i v prohlížečích, které originál odmítly.",
    },
    {
      title: "Vytáhni stránky jednotlivě přes PDF do obrázků",
      body: "Pokud žádný prohlížeč nevykreslí celý soubor, ale některý zobrazí aspoň část obsahu, exportuj každou stránku jako PNG přes PDF do obrázků. Z těch PNG pak můžeš nástrojem Obrázek do PDF sestavit čerstvé PDF – přijdeš o prohledávatelnost a upravitelnost, ale obsah zachráníš.",
    },
    {
      title: "Zkontroluj hlavičku souboru v obyčejném editoru",
      body: "Otevři soubor v TextEditu, Poznámkovém bloku nebo VS Code. Skutečné PDF začíná %PDF- a za tím číslem verze. Pokud jsou první bajty cokoli jiného, soubor není PDF – byl přejmenovaný, špatně označený nebo nahrazený.",
    },
    {
      title: "Požádej zdroj o čerstvou kopii",
      body: "Pokud nic soubor neobnoví, zdroj má pořád originál. Exportuj znovu z Wordu, Google Docs nebo z čehokoli, co ho vytvořilo. Je to jediná cesta, která vrátí plnou kvalitu.",
    },
  ],
  tips: [
    "Nepokračuj v úpravách nebo slučování souboru, který se chová podivně. Poškození tím zabuduješ do nového souboru.",
    "Před jakýmkoli pokusem o opravu ulož rozbitý originál na bezpečné místo. Opravné nástroje ho někdy přepíšou a rozbitý soubor může obsahovat částečný obsah, o který bys jinak přišel.",
    "Soubory, které selžou hned po přerušeném zápisu (výpadek napájení, násilné ukončení během ukládání), bývají často nezachranitelné – strukturální index na konci souboru se nikdy nezapsal.",
    "Vyhýbej se webům na „opravu PDF“, které slibují zázraky. Většinou dělají stejný zpětný export přes tisk do PDF, který zvládneš sám, a navíc tvůj soubor nahrají.",
    "PDF obnovená přes obrázky ztratí veškerý skutečný text a prohledávatelnost. Použij tuhle cestu jen u souborů, kde záleží víc na obsahu než na věrnosti souboru.",
  ],
  mobileNote:
    "Na telefonu bývá obvyklou příčinou „poškozeného“ PDF nestabilní stažení přes mobilní data. Aplikace PDF Editor ukládá soubory lokálně a umožní ti je znovu stáhnout a otevřít, čímž problém s přerušením vyřeší bez nutnosti obcházet to přes počítač.",
  faq: [
    {
      q: "Jaká je nejčastější příčina poškozeného PDF?",
      a: "Stažení, které se nedokončilo. Soubor je technicky neúplný, ne poškozený, ale prohlížeče ten rozdíl nepoznají. Nové stažení vyřeší většinu případů.",
    },
    {
      q: "Existují skutečné nástroje na opravu PDF?",
      a: "Některé komerční nástroje opravu tvrdí, ale většinou dělají stejný zpětný export přes tisk do PDF, který zvládneš sám a zdarma. Skutečná strukturální oprava vážně poškozených PDF je práce pro specialisty.",
    },
    {
      q: "Pomůže komprese poškozeného PDF?",
      a: "Jen pokud ho kompresní nástroj dokáže přečíst. Pokud ho neotevře tvůj prohlížeč, nezvládne to ani žádný kompresor. Komprese není opravná technika.",
    },
    {
      q: "Proč můj obnovený soubor ztratí pole formuláře?",
      a: "Tisk do PDF zploští interaktivní prvky do statických pixelů. Pole formuláře, anotace a podpisy se stanou obrázky. Pokud je potřebuješ zpátky, vyžádej si soubor znovu od zdroje.",
    },
    {
      q: "Dokáže extrakce obrázků obsah zachránit vždycky?",
      a: "Jen pokud aspoň nějaký prohlížeč dokáže stránky vůbec vykreslit. Pokud je soubor nečitelný úplně všude, selže i nástroj na extrakci obrázků.",
    },
  ],
  related: [
    { label: "PDF do obrázků – extrahuj zachranitelné stránky", path: "/pdf-to-images" },
    { label: "Obrázek do PDF – po záchraně sestav stránky znovu", path: "/image-to-pdf" },
    { label: "Proč se mi neotevře PDF?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Proč je moje PDF prázdné?", path: "/guides/why-is-my-pdf-blank" },
  ],
  parentHub: { label: "PDF nástroje – bezplatné, v prohlížeči", path: "/pdf-tools" },
};

export default content;
