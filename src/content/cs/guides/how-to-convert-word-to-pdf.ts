import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-word-to-pdf",
  h1: "Jak převést Word do PDF – zdarma, bez nahrávání",
  description:
    "Proměň soubor .docx nebo .txt v čisté PDF ke sdílení přímo v prohlížeči, bez odesílání na server. Proč je PDF pro odeslání ten správný formát a co zkontrolovat před exportem.",
  updated: "2026-05-23",
  intro: [
    "Poslat dokument Word někomu mimo tvé vlastní prostředí je malá sázka do loterie. Může ho otevřít v jiné verzi Wordu, v Google Docs, nebo na telefonu bez jakékoli kancelářské aplikace – a rozvržení, které jsi pečlivě poskládal, se může posunout, přeuspořádat nebo se prostě odmítne otevřít. Převod do PDF tuhle sázku ruší. PDF vypadá všude stejně a nejde ho nechtěně upravit.",
    "Tento návod ukazuje, jak proměnit soubor .docx nebo .txt v PDF pomocí bezplatného nástroje Word do PDF, který běží přímo v prohlížeči a nic se přitom nikam neodesílá. Je to správný krok vždy, když je dokument hotový a míří k někomu jinému: nabídka, průvodní dopis, faktura, podepsaný formulář, report pro klienta.",
    "Projdeme si i pár věcí, které se vyplatí zkontrolovat před exportem, aby PDF, které pošleš, bylo přesně to, které jsi chtěl poslat.",
  ],
  steps: [
    {
      title: "Nejdřív dokončit úpravy ve Wordu",
      body: "PDF je snímek, ne pracovní dokument. Všechny změny, které chceš udělat, proveď ve Wordu, Google Docs nebo Pages ještě před převodem – oprava překlepu po exportu znamená znovu celý dokument převádět.",
    },
    {
      title: "Otevřít nástroj Word do PDF",
      body: "Přejdi na nástroj Word do PDF v prohlížeči. Nic se neinstaluje a není potřeba registrace; převod probíhá přímo na tvém zařízení.",
    },
    {
      title: "Přidat soubor .docx nebo .txt",
      body: "Přetáhni soubor do plochy pro přidání souboru nebo klikni pro jeho výběr. Převádí se i obyčejné .txt soubory – šikovné pro proměnu poznámek nebo logů v přehledný dokument.",
    },
    {
      title: "Převést a stáhnout",
      body: "Klikni na Převést do PDF. Nástroj vykreslí dokument a PDF se automaticky stáhne, připravené k přiložení nebo nahrání jinam.",
    },
    {
      title: "Otevřít PDF a zkontrolovat text",
      body: "Výsledek si vždy otevři ještě před odesláním. Ověř, že zalomení stránek dává smysl, nadpisy jsou tam, kde mají být, a nic se neuřízlo u okraje.",
    },
    {
      title: "Přejmenovat na výstižný název",
      body: "„Faktura-Acme-2026-05.pdf“ řekne příjemci, co má před sebou; „Document1.pdf“ ne. Jasný název souboru navíc pomůže, až ho budeš později hledat.",
    },
  ],
  tips: [
    "Drž se běžných písem (Calibri, Arial, Times New Roman, Inter). Exotická písma se při převodu můžou nahradit jiným a posunout rozvržení.",
    "Pokud dokument spoléhá na konkrétní velikost stránky, nastav ji ve Wordu ještě před převodem, místo aby ji nástroj musel odhadovat.",
    "Převod do PDF soubor nešifruje ani ho nezamyká proti kopírování – jen zastaví běžné úpravy. Pro skutečnou ochranu přidej heslo zvlášť.",
    "Pokročilé funkce Wordu jako vložené komentáře, sledované změny a makra nejsou součástí PDF. Sledované změny nejdřív přijmi nebo odstraň, aby se neobjevily ve výstupu.",
    "Pokud budeš dokument ještě potřebovat upravovat, ponech si .docx. PDF je kopie k odeslání, ne tvůj hlavní soubor.",
  ],
  mobileNote:
    "Potřebuješ poslat hotový dokument z telefonu? Aplikace PDF Editor proměňuje dokumenty v PDF, podepisuje je a sdílí přímo z nabídky sdílení – užitečné, když se smlouva musí vrátit dřív, než budeš u stolu.",
  faq: [
    {
      q: "Přežije formátování převod?",
      a: "U běžných dokumentů s obvyklými písmy ano – to je celý smysl PDF. Jediné, na co si dát pozor, jsou neobvyklá písma, která se můžou nahradit. Před odesláním PDF otevři a zkontroluj.",
    },
    {
      q: "Můžu převést i soubor .txt?",
      a: "Ano. Obyčejné textové soubory se převedou do čistého, čitelného PDF, což je rychlý způsob, jak dát prezentovatelnou podobu poznámkám, logům nebo exportovaným datům.",
    },
    {
      q: "Nahrává se můj dokument někam?",
      a: "Ne. Převod probíhá v prohlížeči na tvém vlastním zařízení, takže soubor z něj nikdy neodejde. To je důležité pro smlouvy, faktury a cokoli s osobními údaji.",
    },
    {
      q: "Ochrání převod do PDF dokument?",
      a: "Zabrání běžným úpravám a zafixuje rozvržení, ale nejde o šifrování. Pokud potřebuješ zabránit otevření nebo kopírování souboru, přidej heslo – samotný převod to nezajistí.",
    },
    {
      q: "Můžu PDF pak ještě upravit?",
      a: "PDF slouží na opravy a podpisy, ne na rozsáhlé přepisy. Pokud potřebuješ velké změny, uprav původní .docx a znovu ho exportuj, nebo PDF převeď zpátky na Word.",
    },
  ],
  related: [
    { label: "Word do PDF — převod přímo v prohlížeči", path: "/word-to-pdf" },
    { label: "PDF do Wordu — opačný převod", path: "/pdf-to-word" },
    {
      label: "Jak převést PDF do Wordu",
      path: "/guides/how-to-convert-pdf-to-word",
    },
    {
      label: "Kdy použít PDF místo DOCX",
      path: "/guides/when-to-use-pdf-instead-of-docx",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
