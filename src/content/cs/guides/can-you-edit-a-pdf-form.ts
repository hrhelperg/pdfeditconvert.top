import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "can-you-edit-a-pdf-form",
  h1: "Dá se upravit formulář PDF? Co lze a co nelze změnit",
  description:
    "Úprava otázek ve formuláři PDF je něco jiného než jeho vyplnění. Co jde upravit, co je uzamčené a jak změnit formulář, který máš jen jako hotové PDF.",
  updated: "2026-06-01",
  intro: [
    "„Dá se upravit formulář PDF?“ obvykle skrývá dvě různé otázky. Jedna zní: dá se vyplnit – zadat odpovědi do polí? Skoro vždycky ano. Druhá zní: dá se změnit samotný formulář – přeformulovat otázku, přidat pole, opravit popisek? To závisí čistě na tom, jak formulář vznikl a jestli byl uzamčený.",
    "Vyplnění formuláře je běžný případ a málokdy dělá problém. Úprava jeho struktury je těžší úloha a to, jestli ji zvládneš, se odvíjí od tří věcí: jestli má soubor skutečný upravitelný text, nebo jde o neinteraktivní sken, jestli autor nasadil zabezpečení blokující změny, a jestli máš nástroj schopný upravovat pole formuláře, ne jen je vyplňovat.",
    "Tenhle návod obě otázky přehledně odděluje a pak projde, co je reálně možné, když máš k dispozici jen hotové PDF – včetně upřímných limitů, protože některé formuláře jsou záměrně postavené tak, aby úpravám odolávaly.",
  ],
  steps: [
    {
      title: "Rozhodni, jaký typ úpravy máš na mysli",
      body: "Doplnit odpovědi je jedna věc; změnit znění, rozvržení nebo pole formuláře je věc druhá. To první je snadné a očekávané; to druhé lidé obvykle myslí pod pojmem „upravit formulář“ a je to mnohem víc omezené.",
    },
    {
      title: "Zkontroluj, jestli je text upravitelný, nebo jde o neinteraktivní sken",
      body: "Zkus označit vlastní text formuláře. Pokud se označí, je obsah skutečný a potenciálně upravitelný. Pokud se neoznačí nic, jde o neinteraktivní sken – obrázek formuláře – a úprava znamená nejdřív OCR, nebo přebudování rozvržení od nuly.",
    },
    {
      title: "Zkontroluj bezpečnostní omezení",
      body: "Některé formuláře mají oprávnění, která dovolují vyplňování, ale blokují úpravy, nebo dokonce zakazují změny bez hesla. Pokud editor PDF zešedne nástroje pro úpravy, je soubor pravděpodobně záměrně omezený.",
    },
    {
      title: "Na skutečná pole použij editor, který umí formuláře",
      body: "Nástroje na vyplňování ti dovolí jen odpovídat v polích. Pokud chceš pole přidat, přesunout, přejmenovat nebo smazat, nebo změnit otázky, potřebuješ editor, který zpřístupní strukturu formuláře – to nezvládá každá aplikace.",
    },
    {
      title: "Věz, kdy si říct o zdrojový dokument",
      body: "Pokud potřebuješ zásadní změny, nejčistší cesta je často vyžádat si od tvůrce původní upravitelný dokument (soubor Word nebo zdroj formuláře), místo boje s uzamčeným PDF.",
    },
  ],
  tips: [
    "Pokud potřebuješ jen formulář vyplnit, vůbec ho nemusíš upravovat – stačí vyplnit pole nebo přidat text na neinteraktivní kopii.",
    "Úprava naskenovaného formuláře znamená pracovat s obrázkem: buď na něm spustíš OCR a získáš zpátky text, nebo přes původní text a políčka položíš nová.",
    "Přejmenování nebo přeuspořádání polí formuláře je opravdová úprava formuláře a vyžaduje nástroj na to stavěný – základní prohlížečky to neumí.",
    "Respektuj uzamčené formuláře: bezpečnostní nastavení blokující úpravy bývá obvykle záměrné rozhodnutí autora, ne chyba, kterou je potřeba obejít.",
    "Pokud počítáš s pozdější úpravou svých odpovědí, ponech si nezafixovanou kopii; jakmile je formulář zafixovaný, odpovědi se stanou pevným obsahem stránky.",
  ],
  mobileNote:
    "Na telefonu ti aplikace PDF Editor dovolí vyplnit jakýkoli formulář a upravit obsah dokumentu tam, kde to soubor umožňuje. U neinteraktivních formulářů přidáváš text přímo na stránku, místo abys upravoval pole. Vyplňování i drobné úpravy probíhají v zařízení, prázdný originál přitom zůstává nedotčený pro další použití.",
  faq: [
    {
      q: "Můžu změnit otázky ve formuláři PDF?",
      a: "Někdy. Pokud má formulář skutečný upravitelný text a není uzamčený, editor, který umí formuláře, dokáže změnit znění i pole. Pokud jde o neinteraktivní sken nebo je zabezpečený, úprava otázek je mnohem těžší, nebo úplně zablokovaná.",
    },
    {
      q: "Proč mi editor nedovolí formulář změnit?",
      a: "Buď je soubor neinteraktivní obrázek bez upravitelného textu, nebo má oprávnění, která dovolují vyplňování, ale ne úpravy. Obojí je běžné a obvykle záměrné.",
    },
    {
      q: "Můžu po vyplnění formuláře upravit své odpovědi?",
      a: "Ano, pokud jsi ho uložil jako interaktivní formulář a nezafixoval ho. Jakmile je zafixovaný, odpovědi se slijí se stránkou a stanou se pevnými.",
    },
    {
      q: "Jak upravím naskenovaný formulář bez polí?",
      a: "Nakládej s ním jako s obrázkem. Spusť OCR, abys získal upravitelný text zpátky, nebo prostě umísti vlastní text a zaškrtnutí navrch – pro vyplnění formuláře obvykle stačí ten druhý přístup.",
    },
    {
      q: "Je lepší upravit PDF, nebo si vyžádat originální soubor?",
      a: "Pro velké změny se pokud možno zeptej autora na zdrojový dokument. Úprava hotového, případně uzamčeného PDF je vždy omezenější než práce s originálem.",
    },
  ],
  related: [
    { label: "Co je formulář PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Upravitelné PDF vs vyplnitelné PDF",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    {
      label: "Jak vytvořit vyplnitelné PDF",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    { label: "Proč nemůžu upravit PDF?", path: "/guides/why-cant-i-edit-a-pdf" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
