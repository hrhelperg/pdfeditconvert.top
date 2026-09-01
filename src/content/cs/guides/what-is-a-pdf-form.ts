import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "what-is-a-pdf-form",
  h1: "Co je formulář PDF? Interaktivní vs neinteraktivní formuláře",
  description:
    "Formulář PDF je dokument navržený tak, aby sbíral odpovědi – někdy má skutečná pole, do kterých píšeš, jindy je to neinteraktivní stránka, na kterou jen dopisuješ. Co to znamená a jak to poznat.",
  updated: "2026-06-01",
  intro: [
    "Formulář PDF je jakékoli PDF navržené tak, aby od člověka, který ho otevře, získalo informace: žádost o práci, daňový dokument, souhlas rodičů, rezervační formulář. Od běžného PDF ho odlišuje záměr – očekává, že do něj doplníš odpovědi, ne že ho jen přečteš. Matoucí na tom je, že dva formuláře mohou na obrazovce vypadat úplně stejně, a přitom se při vyplňování chovat naprosto odlišně.",
    "Rozdíl je v tom, jestli formulář obsahuje interaktivní pole. Interaktivní formulář má políčka, která do souboru vložil jeho tvůrce – klepneš na jedno z nich a objeví se kurzor, připravený na psaní. Neinteraktivní formulář žádná taková pole nemá; je to v podstatě obrázek formuláře, často naskenovaný z papírové předlohy, kde jsou čáry a popisky součástí obrázku, ne aktivními plochami. Oba typy jsou formuláře a oba se dají vyplnit, ale každý vyžaduje jiný postup.",
    "Poznat, který typ máš před sebou, zabere pár vteřin a ušetří spoustu frustrace. Tenhle návod vysvětlí, co formulář PDF vlastně je, jaké dva typy potkáš a jak je od sebe rozeznat ještě předtím, než se pustíš do vyplňování.",
  ],
  steps: [
    {
      title: "Uvědom si, že formulář je určený k vyplnění",
      body: "Na rozdíl od zprávy nebo smlouvy, kterou jen čteš, má formulář prázdná místa čekající na odpovědi – řádky na jméno, zaškrtávací pole, prostor na podpis. Právě tenhle záměr z něj dělá formulář, bez ohledu na to, jak vznikl.",
    },
    {
      title: "Rozpoznej interaktivní formulář",
      body: "Otevři PDF a klepni nebo klikni tam, kam patří odpověď. Pokud se objeví textový kurzor, pole se zvýrazní nebo se přepne zaškrtávací pole, formulář má interaktivní pole, která tam tvůrce záměrně přidal.",
    },
    {
      title: "Rozpoznej neinteraktivní formulář",
      body: "Pokud klepnutí na prázdné místo nic neudělá – žádný kurzor, žádné zvýraznění – je formulář neinteraktivní. Čáry a popisky jsou součástí obrázku stránky, takže do nich přímo nejde nic napsat.",
    },
    {
      title: "Zjisti, jak formulář vznikl",
      body: "Formuláře exportované ze softwaru na tvorbu formulářů bývají interaktivní. Formuláře, které se vytiskly, podepsaly rukou a pak znovu naskenovaly, jsou téměř vždy neinteraktivní. Podle původu formuláře tak dokážeš odhadnout jeho typ.",
    },
    {
      title: "Zvol správný způsob vyplnění",
      body: "Interaktivní formuláře: klepni a piš. Neinteraktivní formuláře: přidej si vlastní textová pole a zaškrtnutí přímo na stránku. Šikovný editor PDF zvládne oba případy v jednom souboru.",
    },
  ],
  tips: [
    "Nejrychlejší test je klepnutí na prázdný řádek. Objeví-li se kurzor, je formulář interaktivní; když se nic nestane, je neinteraktivní.",
    "Formulář může být interaktivní jen zčásti: některá pole jsou skutečná, jiná chybí. Skutečná pole vyplň normálně a do mezer doplň text ručně.",
    "Interaktivní formuláře se vyplňují úhledněji, ale i neinteraktivní jsou naprosto zvládnutelné – jen si text musíš umístit sám.",
    "Pokud navrhuješ formulář pro ostatní, udělej ho tam, kde to jde, interaktivní – příjemci to vyplňování hodně usnadní.",
    "Vzhled formuláře se může mezi prohlížeči PDF lišit, takže pole, které na tvém telefonu vypadá určitým způsobem, se na cizím počítači může zobrazit trochu jinak.",
  ],
  mobileNote:
    "Na telefonu aplikace PDF Editor při otevření zkontroluje, jestli formulář obsahuje interaktivní pole: tam, kde jsou, klepneš a píšeš; tam, kde nejsou, umístíš text a zaškrtnutí kamkoli na stránku. V obou případech dokument podepíšeš a vyexportuješ vyplněnou kopii bez tisku.",
  faq: [
    {
      q: "Je každé PDF formulář?",
      a: "Ne. Za formulář se PDF považuje jen tehdy, když má sbírat odpovědi – pole, zaškrtávací políčka, řádky na podpis. Zpráva nebo článek je taky PDF, ale formulář to není.",
    },
    {
      q: "Jak poznám, jestli je můj formulář PDF interaktivní, nebo neinteraktivní?",
      a: "Klepni nebo klikni na prázdné místo, kam patří odpověď. Pokud se objeví kurzor a můžeš psát, je interaktivní. Pokud se nic nestane, jde o neinteraktivní formulář a text přidáš navrch.",
    },
    {
      q: "Dá se vyplnit neinteraktivní formulář PDF?",
      a: "Ano. Neinteraktivní formulář nemá žádná pole, ale v editoru PDF si můžeš umístit vlastní text a zaškrtnutí kamkoli na stránku a pak vyexportovat vyplněný soubor.",
    },
    {
      q: "Proč by někdo posílal neinteraktivní formulář místo interaktivního?",
      a: "Většinou proto, že formulář vznikl na papíře a byl naskenovaný, nebo protože nástroj, kterým ho vytvořili, pole nepřidává. Není to chyba – jen to vyžaduje trochu jiný způsob vyplnění.",
    },
    {
      q: "Jsou interaktivní formuláře vždycky lepší?",
      a: "Vyplňují se snáz a vypadají uhlazeněji, ale mohou používat funkce, které některé prohlížeče nepodporují. Dobře udělaný neinteraktivní formulář funguje spolehlivě všude, i když jeho vyplnění zabere trochu víc práce.",
    },
  ],
  related: [
    {
      label: "Upravitelné PDF vs vyplnitelné PDF",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    { label: "Jak fungují formuláře PDF", path: "/guides/how-pdf-forms-work" },
    {
      label: "Jak vyplnit formulář PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Upravitelné PDF vs PDF jako obrázek",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
