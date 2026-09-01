import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-files-privately",
  h1: "Jak sdílet PDF soubory soukromě (bez nahrávání cizím webům)",
  description:
    "Soukromý způsob sdílení PDF nevede přes veřejný web s „PDF nástroji“. Kanály, díky kterým dokument zůstane jen mezi tebou a příjemcem, s rozumným výchozím nastavením.",
  updated: "2026-05-29",
  intro: [
    "První věc, kterou spousta lidí udělá, když chce s někým sdílet PDF, je nahrát ho do nástroje, který slibuje „soukromé“ sdílení – a právě tenhle nástroj je často tím největším rizikem v celém řetězci. Bezplatné služby na sdílení souborů obvykle soubory nějakou dobu uchovávají, občas je indexují a závisí na serveru, ke kterému nemáš žádný vztah.",
    "Soukromé sdílení není složité; jde jen o výběr správného kanálu. Přímý přenos (AirDrop, USB), end-to-end šifrované zprávy, šifrovaný e-mail nebo soubory chráněné heslem posílané přes běžný e-mail. Každý funguje pro jinou situaci. Žádný z nich nevyžaduje nahrávání cizímu člověku.",
    "Tenhle návod projde reálné možnosti podle úrovně citlivosti a případu použití, včetně kompromisů u každé z nich. Cílem je, aby sdílený dokument zůstal jen mezi tebou a příjemcem, bez zbytné třetí strany jako prostředníka.",
  ],
  steps: [
    {
      title: "Pro přenos na stejném zařízení nebo v místnosti použij AirDrop nebo lokální sdílení",
      body: "iPhone na iPhone, iPhone na Mac: AirDrop. Android: Nearby Share. Stejný Mac, stejné PC: lokální AirDrop nebo sdílená složka. Soubor se internetu vůbec nedotkne.",
    },
    {
      title: "Pro důvěryhodné příjemce použij end-to-end šifrované zprávy",
      body: "Signal, WhatsApp (s výhradami), iMessage mezi uživateli Apple. Samotný přenos je šifrovaný; soubor se dešifruje jen na zařízení příjemce. Platformy vidí metadata, ne obsah.",
    },
    {
      title: "Pro málo citlivé soubory stačí běžný e-mail",
      body: "Standardní e-mail je nešifrovaný, ale pro většinu necitlivých dokumentů prakticky bezpečný. Rizikem je zachycení, což je u běžných dokumentů procházejících velkými poskytovateli e-mailu vzácné.",
    },
    {
      title: "Pro citlivé soubory přes běžný e-mail nejdřív chraň heslem",
      body: "Před přiložením nastav PDF heslo. E-mail je soubor; heslo jde jiným kanálem (telefonát, samostatná zpráva). I kdyby byl e-mail zachycen, soubor zůstane chráněný.",
    },
    {
      title: "Pro velmi citlivý materiál použij šifrovaný e-mail nebo bezpečné doručení",
      body: "ProtonMail, Tutanota, nebo bezpečná služba pro doručování dokumentů tvé organizace. Ty přidají skutečné šifrování přímo do kanálu a odstraní krok s heslem mimo hlavní kanál.",
    },
    {
      title: "U citlivého obsahu se vyhni nahrávání do bezplatných služeb na sdílení souborů",
      body: "Bezplatné nástroje, které tvůj soubor nahrávají (kompresory, slučovací nástroje, dělicí nástroje), drží soubor na svém serveru, byť třeba jen krátce. U citlivého materiálu použij nástroje v prohlížeči, které zpracovávají lokálně ještě před jakýmkoli sdílením.",
    },
  ],
  tips: [
    "Nedávej heslo do stejného e-mailu jako soubor chráněný heslem. Smysl hesla je bránit se proti zachycení e-mailu.",
    "Před sdílením potvrď identitu příjemce – phishingové podvody se občas vydávají za klienty, aby vylákaly citlivá PDF.",
    "Pro opakované sdílení se stejným příjemcem se domluv na jednom kanálu a drž se ho. Přepínání kanálů je místo, kde vznikají úniky.",
    "Nesdílej přes veřejné odkazy, pokud odkaz není jednorázový. Trvalé odkazy se dají objevit nebo dál sdílet.",
    "Po sdílení smaž soubor z jakéhokoli dočasného úložiště (složka Stažené, škrábací disk). Čím míň kopií citlivého materiálu, tím menší plocha rizika.",
  ],
  mobileNote:
    "Většina soukromého sdílení dnes začíná na telefonu. Aplikace PDF Editor připraví soubory (komprese, podpis, heslo) lokálně na iOS i Androidu a pak je předá do AirDropu, Signalu nebo tvého e-mailu – soubor zůstává na telefonu po celou přípravu a pak putuje přímo k příjemci.",
  faq: [
    {
      q: "Jaký je nejjednodušší způsob soukromého sdílení?",
      a: "AirDrop nebo Nearby Share, když jsi blízko příjemce. End-to-end šifrované zprávy, když blízko nejsi. Obojí drží soubor mimo dosah serveru třetí strany.",
    },
    {
      q: "Je WhatsApp dost soukromý pro citlivé dokumenty?",
      a: "End-to-end šifrování chrání obsah; WhatsApp vidí metadata (kdo komu co poslal). Pro většinu případů to stačí; u velmi citlivého materiálu je čistší volbou Signal.",
    },
    {
      q: "Mám používat službu na odkazy pro sdílení souborů?",
      a: "Jen s výslovnými závazky ohledně nakládání s daty a krátkou dobou uchovávání. Pro citlivé soubory jsou bezpečnější přímé kanály.",
    },
    {
      q: "Jak si stojí ochrana PDF heslem oproti šifrování kanálu?",
      a: "Heslo u PDF chrání samotný soubor; šifrování kanálu chrání přenos. Obojí má hodnotu; chrání proti různým typům útoku.",
    },
    {
      q: "Jaká je nejhorší běžná praxe?",
      a: "Nahrát citlivé PDF do bezplatného nástroje na „převod“ nebo „kompresi“ a pak výsledný soubor poslat e-mailem. Krok s nahráním je místo, kde data opouští tvoji kontrolu. Používej nástroje v prohlížeči, které nenahrávají.",
    },
  ],
  related: [
    { label: "Zabezpečení PDF — heslo a šifrování", path: "/pdf-security" },
    { label: "Jak chránit citlivé PDF soubory", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Jak se vyhnout nahrávání citlivých dokumentů", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
    { label: "Pracovní postupy s dokumenty s důrazem na soukromí", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "Zabezpečení PDF — heslo a šifrování", path: "/pdf-security" },
};

export default content;
