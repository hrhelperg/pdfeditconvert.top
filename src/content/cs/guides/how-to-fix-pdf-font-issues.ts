import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-font-issues",
  h1: "Jak vyřešit problémy s písmem v PDF (chybějící, nahrazené, poškozené)",
  description:
    "Když PDF zobrazuje špatné písmo, čtverečky místo znaků nebo nahrazený text, obvykle mu chybí vložené písmo. Jak vkládání písem funguje a co změnit už při exportu.",
  updated: "2026-05-29",
  intro: [
    "Když PDF zobrazuje čtverečky místo znaků, nebo všude špatné písmo, nebo podivné mezery, které v originále nebyly, jde o problém s písmem. PDF odkazují na písma podle názvu; prohlížeč musí buď to písmo najít v systému, nebo mít písmo vložené přímo v souboru. Pokud neplatí ani jedno, uvidíš náhradu – v lepším případě podobnou alternativu, v horším čtverečky.",
    "Správná oprava je skoro vždycky znovu exportovat s vloženými písmy. Jakmile je písmo vložené, soubor s sebou nese data znaků a vypadá správně všude. Cenou je mírně větší soubor, ale u většiny písem je ten rozdíl vůči celému dokumentu zanedbatelný.",
    "Tenhle návod vysvětluje, jak vkládání písem doopravdy funguje, projde nejběžnější příznaky a ukáže řešení – včetně případu, kdy opětovný export nejde a musíš soubor zploštit do obrázků.",
  ],
  steps: [
    {
      title: "Potvrď, že soubor vykresluje nahrazená písma",
      body: "Otevři soubor ve dvou různých prohlížečích. Pokud oba ukazují stejné špatné písmo, písma nejsou vložená. Pokud je jeden prohlížeč v pořádku a druhý ne, chybí písmo právě tomu druhému a on ho nahrazuje.",
    },
    {
      title: "Znovu exportuj se všemi vloženými písmy",
      body: "Ve Wordu, Pages, Docs i většině grafických nástrojů zahrnuje nastavení exportu PDF „vložit všechna písma“. Zapnutí přidá data písma do souboru a zobrazí se konzistentně všude.",
    },
    {
      title: "Jako záchranu použij tisk do PDF",
      body: "Pokud nemůžeš zapnout vkládání písem ve zdrojové aplikaci, otevři dokument v prohlížeči, který ho zobrazuje správně, a použij tisk do PDF. Nová kopie zapeče vykreslené znaky jako rastr – větší a neprohledávatelné, ale spolehlivé.",
    },
    {
      title: "Zkontroluj licencovaná písma, která se nedají vložit",
      body: "Některá komerční písma mají omezení na vkládání. Zdrojová aplikace tě na to upozorní. Reálná oprava je přejít na podobné písmo, které vkládání dovoluje, nebo postižený text rasterizovat do obrázků.",
    },
    {
      title: "Převeď do Wordu, oprav text, znovu exportuj",
      body: "Pokud náhrada už text pokazila a máš jen PDF, PDF do Wordu vytáhne to, co se dá zachránit. Vyčisti to, nastav písma, která máš, a znovu exportuj do čerstvého PDF.",
    },
    {
      title: "Když nic jiného nefunguje, zploštit do obrázků",
      body: "PDF do obrázků exportuje každou stránku jako PNG ve vysokém rozlišení. Pokud je pak sestavíš zpátky nástrojem Obrázek do PDF, výsledek nemá žádný živý text – jen obrázky – ale vykreslení písma je zafixované pro každý prohlížeč.",
    },
  ],
  tips: [
    "Nepoužívej u důležitých dokumentů písma, která se nedají vložit – soubor bude vždycky náchylný k náhradě.",
    "Webová písma a stažená ozdobná písma bývají nejčastějšími viníky problémů s vkládáním. Systémová písma (Arial, Times, Helvetica, Calibri) se vkládají bez problémů.",
    "Vkládání písem jako „podmnožiny“ (jen použité znaky) udrží soubor malý. Většina exportních nástrojů to dělá jako výchozí a je to správná volba.",
    "Pokud je špatně jen jeden znak (třeba zlomek nebo speciální symbol), písmu chybí ten glyf. Nahraď zdrojový znak ekvivalentem v Unicode.",
    "Po zploštění do obrázků počítej se ztrátou kopírování textu i OCR. Tuhle cestu použij jen tehdy, když víc záleží na věrnosti vykreslení než na prohledávatelnosti.",
  ],
  mobileNote:
    "Telefonní prohlížeče mívají nainstalovaných méně písem než desktopy, takže soubory bez vložených písem vypadají na mobilu nejhůř. Aplikace PDF Editor zobrazuje upozornění na nahrazená písma a umožní ti dokumenty znovu exportovat s vloženými písmy, takže zůstanou vizuálně konzistentní napříč iOS, Androidem i desktopovými prohlížeči.",
  faq: [
    {
      q: "Co přesně dělá „vložit písma“?",
      a: "Zabalí data znaků písma přímo do PDF, takže kterýkoli prohlížeč umí text správně zobrazit, aniž by potřeboval mít písmo nainstalované lokálně.",
    },
    {
      q: "Proč vidím čtverečky místo písmen?",
      a: "Písmo není v systému nainstalované a nebylo vložené. Prohlížeč ho nemůže nahradit, protože neví, které znaky vykreslit, takže zobrazí čtvereček chybějícího znaku.",
    },
    {
      q: "Můžu do PDF přidat písmo po exportu?",
      a: "Ne čistě. Správná cesta je znovu exportovat ze zdroje. Existují nástroje, které slibují vložení dodatečně, ale většina z nich vytvoří chybové soubory.",
    },
    {
      q: "Proč je moje exportované PDF větší, když vložím písma?",
      a: "Protože data písma jsou teď v souboru. Nárůst bývá obvykle malý, pokud nevkládáš spoustu rodin písem. Podmnožina (jen použité znaky) drží velikost dole.",
    },
    {
      q: "Odstraní komprese vložená písma?",
      a: "Ne. Komprese PDF cílí na obrázky, ne na text nebo písma. Komprimace PDF s vloženými písmy ho nepoškodí.",
    },
  ],
  related: [
    { label: "PDF do Wordu – obnov text z nahrazených písem", path: "/pdf-to-word" },
    { label: "PDF do obrázků – zploštit jako poslední možnost", path: "/pdf-to-images" },
    { label: "Jak vyřešit problémy s formátováním PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Jak vyřešit problémy s tiskem PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Konvertor PDF – Word, JPG, PNG a zpátky", path: "/pdf-converter" },
};

export default content;
