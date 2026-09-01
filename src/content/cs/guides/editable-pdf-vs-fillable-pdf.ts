import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-fillable-pdf",
  h1: "Upravitelné PDF vs vyplnitelné PDF – v čem je rozdíl?",
  description:
    "Úprava PDF mění jeho obsah, vyplnění PDF znamená zadání odpovědí do polí formuláře. Proč jde o dvě různé úlohy a kterou z nich vlastně potřebuješ.",
  updated: "2026-06-01",
  intro: [
    "„Upravitelné“ a „vyplnitelné“ znějí jako to samé a lidi je běžně zaměňují – přitom popisují dvě různé úlohy. Úprava PDF znamená měnit samotný dokument: přeformulovat větu, vyměnit logo, přesunout odstavec. Vyplnění PDF znamená nechat dokument tak, jak ho zamýšlel autor, a jen doplnit odpovědi do míst, která jsou pro ně vyhrazená. Formulář je stavěný na to, aby se vyplňoval, ne aby se upravoval.",
    "Ten rozdíl je důležitý, protože se liší nástroje i oprávnění. Upravitelné PDF ti dovolí měnit samotný obsah. Vyplnitelné PDF tě záměrně omezuje jen na pole formuláře, takže otázky a rozvržení zůstávají pevně dané, zatímco ty jen dodáváš odpovědi. Řada formulářů je záměrně neupravitelná – autor chce, aby kopie u všech kladla stejné otázky na stejném místě.",
    "Věci dál komplikuje třetí pojem – „neinteraktivní“ (v angličtině „flat“) – který se týká toho, jestli je text v PDF skutečný, nebo jde jen o obrázek. Tenhle návod se soustředí na dvojici upravitelné vs vyplnitelné: co každé z toho znamená, kdy potřebuješ které, a jak poznat, co konkrétní soubor dovoluje.",
  ],
  steps: [
    {
      title: "Definuj úpravu: měníš dokument",
      body: "Úprava mění obsah, který vytvořil autor – text, obrázky, pořadí stránek. PDF bys upravoval třeba proto, abys opravil překlep ve smlouvě nebo aktualizoval cenu v letáku. Mění se tím to, co dokument říká.",
    },
    {
      title: "Definuj vyplnění: odpovídáš v polích",
      body: "Vyplnění nechává dokument nedotčený a jen do vyhrazených polí nebo míst doplní tvé odpovědi. Vyplníš přihlašovací formulář, ale jeho otázky nepřepisuješ.",
    },
    {
      title: "Zkontroluj, jestli je soubor vyplnitelný",
      body: "Klepni tam, kam by měla přijít odpověď. Kurzor nebo zvýrazněné pole znamená, že se formulář vyplňuje přes interaktivní pole. Pokud žádná pole nejsou, můžeš stále přidat text navrch – jde o ruční vyplnění místo vestavěného.",
    },
    {
      title: "Zkontroluj, jestli je soubor upravitelný",
      body: "Zkus označit řádek dokumentova vlastního textu. Pokud jde označit a editor PDF ti dovolí ho změnit, obsah je upravitelný. Naskenované stránky a uzamčené soubory se tomu často brání.",
    },
    {
      title: "Vyber nástroj podle úkolu",
      body: "Potřebuješ změnit, co dokument říká? Použij editor PDF. Potřebuješ dokončit formulář, který ti někdo poslal? Použij vyplňování – klepej na pole nebo umísti text tam, kam odpovědi patří, a pak exportuj.",
    },
  ],
  tips: [
    "Soubor může být vyplnitelný, ale ne upravitelný: odpovíš v polích, ale otázky změnit nemůžeš. U většiny formulářů je to záměr.",
    "Pokud se tě formulář ptá na něco, na co se do vyhrazeného prostoru nevejdeš, formulář neuprav – přidej upřesňující poznámku, kde je to dovolené, nebo se zeptej odesílatele.",
    "Pozdější úpravu odpovědí v hotovém formuláři umožní jen zachovaná neuzamčená kopie – zafixovanou nebo naskenovanou verzi je mnohem těžší měnit.",
    "Pokud jsi autor, rozhodni se předem: chceš, aby lidé formulář vyplňovali (uzamkni obsah, přidej pole), nebo na něm spolupracovali (nech ho upravitelný)?",
    "Některá PDF používají bezpečnostní nastavení, které blokuje úpravy, a přitom pořád dovoluje vyplňování – je to záměrná kombinace, ne chyba.",
  ],
  mobileNote:
    "Aplikace PDF Editor zvládá na telefonu oba úkoly: uprav text a obrázky dokumentu, když potřebuješ změnit obsah, nebo klepej do polí formuláře – a umísťuj text na neinteraktivní formuláře – když potřebuješ jen něco vyplnit. Interaktivní pole rozpozná automaticky a vše zůstává v zařízení.",
  faq: [
    {
      q: "Je vyplnitelné PDF to samé co upravitelné PDF?",
      a: "Ne. Vyplnitelné znamená, že můžeš zadat odpovědi do polí formuláře, aniž bys měnil dokument. Upravitelné znamená, že můžeš změnit samotný obsah dokumentu. Formulář bývá obvykle vyplnitelný, ale záměrně neupravitelný.",
    },
    {
      q: "Může být PDF zároveň upravitelné i vyplnitelné?",
      a: "Ano, pokud to dovolí jeho bezpečnostní nastavení. Řada formulářů je ale uzamčená tak, aby se otázky a rozvržení nedaly změnit, zatímco pole pořád přijímají odpovědi.",
    },
    {
      q: "Nejdou mi upravit otázky ve formuláři – je to rozbité?",
      a: "Skoro určitě ne. Formuláře bývají běžně chráněné, aby se každá kopie ptala na totéž. Máš vyplnit pole, ne přepsat formulář.",
    },
    {
      q: "Co potřebuji k vyplnění přihlášky, kterou mi někdo poslal?",
      a: "Vyplnění, ne úpravu. Zadej odpovědi do polí, nebo umísti text na stránku, pokud je neinteraktivní, pak podepiš a exportuj. Samotný formulář bys měnit neměl potřebovat.",
    },
    {
      q: "Čím se to liší od dvojice upravitelné vs neinteraktivní?",
      a: "Upravitelné vs neinteraktivní se týká toho, jestli je text v PDF skutečný, nebo jen obrázek. Upravitelné vs vyplnitelné se týká toho, jestli měníš dokument, nebo na něj jen odpovídáš. Jde o související, ale oddělené otázky.",
    },
  ],
  related: [
    { label: "Co je formulář PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Upravitelné PDF vs PDF jako obrázek",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
    {
      label: "Dá se upravit formulář PDF?",
      path: "/guides/can-you-edit-a-pdf-form",
    },
    { label: "PDF Editor – upravit a vyplnit", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
