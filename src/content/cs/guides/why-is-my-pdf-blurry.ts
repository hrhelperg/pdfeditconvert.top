import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blurry",
  h1: "Proč je moje PDF rozmazané? Rozlišení, komprese a chyby skenu",
  description:
    "Rozmazané PDF vzniká kvůli nízkému rozlišení skenu, agresivní kompresi nebo špatnému exportu – ne kvůli samotnému formátu. Jak zjistit, o kterou příčinu jde, a jak vrátit ostrost.",
  updated: "2026-05-29",
  intro: [
    "Samotné PDF nic nerozmazává. Formát v pohodě uchová ostrý jako břitva vektorový text i obrázky ve vysokém rozlišení. Takže když PDF vypadá měkce, neostře nebo pixelovaně, rozmazání pochází z něčeho konkrétního: ze snímku s nízkým rozlišením, z kompresního průchodu, který zašel příliš daleko, nebo z nastavení exportu, které ostrý obsah zploštilo do bitmap.",
    "Vědět, která z těchhle příčin za tvým souborem stojí, je důležité, protože řešení jsou úplně jiná. Soubor, který už byl zmáčknutý, „nerozkomprimuješ“, ale můžeš ho znovu exportovat ze zdroje, znovu naskenovat v lepším rozlišení, nebo zvolit jiný nástroj na převod. A u některých souborů je rozmazání jen na obrazovce – originál je pořád v plné kvalitě, jen ho prohlížeč zobrazuje ve zmenšeném rozlišení.",
    "Tenhle návod odděluje jednotlivé příčiny a provede tě praktickým řešením pro každou z nich, včetně případu, kdy se nedá dělat nic víc než vrátit se ke zdroji.",
  ],
  steps: [
    {
      title: "Přibliž si pohled a podívej se na hrany",
      body: "Ostré hrany na textu, ale rozmazané na obrázcích znamená, že text je vektorový (čistý) a degradované jsou jen fotky – obvykle kvůli kompresi. Rozmazaný text znamená, že celá stránka je rastrový obrázek, což ukazuje na sken nebo export přes tisk do obrázku.",
    },
    {
      title: "Zkontroluj původní rozlišení snímání",
      body: "Skeny pod 150 DPI vypadají rozmazaně, ať děláš cokoli. 200–300 DPI je bezpečné rozmezí pro dokumenty, které budeš číst na obrazovce; 600 je přehnané pro všechno kromě archivace a tisku fotek.",
    },
    {
      title: "Prošetři, jestli nebyla komprese přehnaná",
      body: "Soubory zmenšené na „extrémní“ kompresi často při přiblížení 100 % vypadají v pořádku a při 200 % hrozně. Pokud máš originál před kompresí, můžeš ho znovu zkomprimovat s jemnějším nastavením – nástroj Zkomprimovat PDF ti umožní vyměnit velikost za ostrost.",
    },
    {
      title: "Pokud ho máš, exportuj znovu ze zdroje",
      body: "Dokumenty vytvořené ve Wordu, Pages, Google Docs nebo grafických nástrojích by se měly exportovat jako PDF přímo ze zdroje, ne tiskem do PDF ze snímku obrazovky. Přímý export udrží text vektorový a ostrý.",
    },
    {
      title: "Naskenuj znovu s ostřejším nastavením",
      body: "Pokud je problémem sken a papír pořád máš, udělej ho znovu při 300 DPI s dobrým osvětlením. Skenům telefonem obrovsky pomůže jedna stránka položená naplocho s rovnoměrným světlem – čisté snímání předčí jakékoli dodatečné úpravy.",
    },
    {
      title: "Ověř, že se soubor jen nezobrazuje ve zmenšeném rozlišení",
      body: "Některé prohlížeče kvůli výkonu zobrazují ve sníženém rozlišení a vypadají měkce, dokud nepřiblížíš. Exportuj stránku do PNG nástrojem PDF do obrázků v měřítku 2× nebo 3× – pokud je PNG ostré, tvůj prohlížeč tě klamal.",
    },
  ],
  tips: [
    "Text, který jde vybrat kurzorem, je vektorový text a neměl by být rozmazaný. Pokud je, tvůj prohlížeč ho zobrazuje ve zmenšeném rozlišení – než ho znovu exportuješ, zkus jiný prohlížeč.",
    "Snímky obrazovky z telefonu vložené do dokumentu jsou už v nízkém rozlišení. V PDF budou vždycky vypadat měkce; jediná oprava je znovu je zachytit ve větší velikosti.",
    "Soubor nekomprimuj dvakrát. Opakovaná komprese rozmazání sčítá. Ponech si originál, komprimuj jednou kvůli sdílení a zdroj archivuj.",
    "PDF plná JPEG se při stejné kompresi rozmažou hůř než ta plná PNG – JPEG je ze své podstaty ztrátová komprese. Snímky obrazovky v PNG zůstávají ostré déle.",
    "Pokud máš jen rozmazanou verzi, OCR dokáže někdy obnovit čitelný text, i když obrázek vypadá rozostřeně. Text bude čistý, i když obrázek ne.",
  ],
  mobileNote:
    "PDF vyfocená telefonem se rozmažou nejčastěji kvůli chvějící se ruce, slabému světlu nebo špatnému rámování. Skenovací postup v aplikaci PDF Editor zahrnuje automatické rozpoznání okrajů a stabilizaci, takže jediné stabilní zachycení na stránku vytvoří ostrý dokument hned napoprvé.",
  faq: [
    {
      q: "Způsobuje rozmazání samotný formát PDF?",
      a: "Ne. PDF ukládá text jako vektory a obrázky v jejich zdrojovém rozlišení. Rozmazání pochází ze zdroje – nízké DPI, agresivní komprese nebo export ze snímku obrazovky.",
    },
    {
      q: "Můžu rozmazané PDF dodatečně zaostřit?",
      a: "Jen sotva. Některé zpracování obrázků dokáže na fotkách předstírat ostrost, ale nejde přidat detail, který nikdy nebyl zachycen. Poctivé řešení je zopakovat zdrojový krok.",
    },
    {
      q: "Proč je moje zkomprimované PDF rozmazané jen na některých stránkách?",
      a: "Komprese nejtvrději zasáhne stránky plné obrázků. Stránky jen s textem zůstanou ostré. Pokud jsou rozmazané jen některé stránky, jsou to ty s fotkami, grafy nebo skeny.",
    },
    {
      q: "Jaké rozlišení skenu bych měl použít?",
      a: "200–300 DPI pro dokumenty, které budeš číst na obrazovce. 300 DPI pro cokoli, co bys mohl vytisknout. 600 DPI jen pro fotky a archivaci.",
    },
    {
      q: "Proč PDF vypadá v pořádku při 100 %, ale rozmazaně při 200 %?",
      a: "Buď bylo rasterizováno v nízkém rozlišení, nebo zkomprimováno za bod, kdy přiblížení odhalí ztrátu. Bez opětovného exportu se detail vrátit nedá.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF – vyber jemnější nastavení pro ostřejší výsledek", path: "/compress-pdf" },
    { label: "PDF do obrázků – exportuj stránky ve vysokém rozlišení", path: "/pdf-to-images" },
    { label: "Nejlepší nastavení komprese PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Jak zlepšit kvalitu naskenovaného PDF", path: "/guides/how-to-fix-scanned-pdf-quality" },
  ],
  parentHub: { label: "PDF do obrázků – ostré exporty stránek", path: "/pdf-to-images" },
};

export default content;
