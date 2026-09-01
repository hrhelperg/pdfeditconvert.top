import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-android",
  h1: "Jak upravit PDF na Androidu (průvodce 2026)",
  description:
    "Uprav PDF na Androidu: změň text, vlož stránky a podepiš dokumenty. Jasný postup krok za krokem s aplikací PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Android zvládá PDF hned po instalaci docela dobře – ale jen pro prohlížení. Ve chvíli, kdy potřebuješ opravit překlep, vyměnit obrázek nebo přeskládat stránky, vestavěná prohlížečka narazí na svůj limit a obvyklým řešením bývá nahrání souboru na nějaký web. Existuje ale rychlejší cesta: nativní editor přímo v telefonu.",
    "Tento návod používá aplikaci PDF Editor pro Android. Stejný postup funguje i na tabletech a Chromebookech s Android runtime. Budeš potřebovat Android 9 nebo novější. Většina kroků je totožná s postupem pro iPhone, ale Storage Access Framework Androidu mění způsob, jakým soubory importuješ a ukládáš.",
    "Každý krok ukazuje, kam přesně klepnout, včetně drobných rozdílů mezi telefony a tablety. Tam, kde se Android liší od iOS – výběr souborů, integrace s Drive, tlačítko zpět – to zmíníme.",
  ],
  steps: [
    {
      title: "Nainstalovat PDF Editor z Google Play",
      body: "Vyhledej „PDF Editor“ a vyber aplikaci od vydavatele hrhelperg. Nainstaluj a otevři ji. Účet není potřeba.",
    },
    {
      title: "Otevřít PDF",
      body: "Klepni na tlačítko + na domovské obrazovce. Objeví se dialog Storage Access Framework Androidu – vyber PDF ze Souborů, Google Drive, OneDrive, Dropboxu nebo jakéhokoli jiného připojeného cloudového úložiště. PDF můžeš klepnutím otevřít i přímo v Gmailu nebo jiné aplikaci a zvolit PDF Editor jako výchozí nástroj pro otevření.",
    },
    {
      title: "Upravit text",
      body: "Klepni na odstavec. Objeví se modré editační pole. Psaním text nahradíš nebo vložíš nový. Aplikace zachová stávající písmo i barvu, takže se rozvržení nerozbije.",
    },
    {
      title: "Nahradit obrázek",
      body: "Klepnutím na obrázek ho označíš. Klepni na ikonu výměny a vyber náhradu z galerie nebo souborů. Rohy přetáhni pro změnu velikosti bez zkreslení poměru stran.",
    },
    {
      title: "Vložit novou stránku",
      body: "Klepni na ikonu stránek pro zobrazení náhledů. Tlačítkem + mezi náhledy vložíš prázdnou stránku nebo naimportuješ obrázek jako novou stránku.",
    },
    {
      title: "Vyplnit pole formuláře",
      body: "PDF s interaktivními poli se zvýrazní automaticky. Klepni na pole, napiš text a klepni na Hotovo. Klávesnice se přizpůsobí typu pole (text, číslo, datum).",
    },
    {
      title: "Podepsat dokument",
      body: "Klepni na nástroj Podpis, nakresli podpis prstem nebo stylusem a umísti ho na stránku. Ulož si ho pro příště – nebudeš ho muset kreslit znovu.",
    },
    {
      title: "Uložit jako nový soubor",
      body: "Klepni na Hotovo a poté na „Uložit jako“, aby ti zůstal originál i upravená kopie. Výběr souborů v Androidu umožňuje uložit do Souborů, Drive nebo jiného připojeného cloudového úložiště.",
    },
  ],
  tips: [
    "Na velkých tabletech zapni rozdělenou obrazovku a zobraz si dvě PDF vedle sebe pro rychlé porovnávání.",
    "Pokud máš S Pen, přepni v režimu úprav vstup na „pouze pero“ – odmítání dlaně tak funguje mnohem lépe.",
    "Před uložením použij výstižný název souboru – „Smlouva-Podepsana-2026-05-11.pdf“ je při pozdějším hledání mnohem užitečnější než „Dokument(1).pdf“.",
    "Po prvním použití podrž PDF Editor v nabídce sdílení – příště se ti zobrazí na prvním místě.",
    "Pokud jsou úpravy na starším zařízení pomalé, zavři aplikace běžící na pozadí – vykreslování PDF si polepší s volnou RAM.",
  ],
  mobileNote:
    "Storage Access Framework Androidu je správný způsob otevírání souborů – uděluje trvalý přístup, aniž by se soubor kopíroval do úložiště samotné aplikace. To znamená, že se úpravy ukládají přímo zpět do Drive nebo OneDrive, ne do duplicitní kopie.",
  faq: [
    {
      q: "Funguje aplikace na starších verzích Androidu?",
      a: "Oficiálně na Androidu 9 a novějším. Na starších zařízeních se aplikace možná nainstaluje, ale nepodporují nejnovější funkce (vylepšené OCR, filtry pro sken).",
    },
    {
      q: "Můžu otevřít PDF chráněné heslem?",
      a: "Ano. Heslo zadej, když si ho aplikace vyžádá. Během úprav zůstává dokument zašifrovaný a při ukládání ho můžeš znovu zašifrovat.",
    },
    {
      q: "A co integrace s Google Drive?",
      a: "Soubory otevíráš i ukládáš přímo z Drive přes systémový výběr souborů. Uložené úpravy přepíšou originál v Drive (nebo je uložíš jako nový soubor, podle volby).",
    },
    {
      q: "Projeví se úpravy i na počítači?",
      a: "Pokud jsi soubor uložil do cloudového úložiště (Drive, OneDrive, Dropbox), upravený soubor se automaticky synchronizuje na ostatní zařízení. Lokálně uložené soubory zůstávají jen v telefonu.",
    },
    {
      q: "Funguje aplikace offline?",
      a: "Ano. Úpravy probíhají celé v zařízení. Synchronizace s cloudem se spustí, jen když ukládáš do cloudové cesty.",
    },
  ],
  related: [
    { label: "PDF Editor — kompletní přehled", path: "/pdf-editor" },
    {
      label: "Jak upravit PDF na iPhonu",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "Jak zkomprimovat PDF", path: "/guides/how-to-compress-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
