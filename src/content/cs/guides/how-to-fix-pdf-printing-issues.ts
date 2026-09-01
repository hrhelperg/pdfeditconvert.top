import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-printing-issues",
  h1: "Jak vyřešit problémy s tiskem PDF (oříznuté stránky, špatná velikost, chybějící text)",
  description:
    "Když se PDF vytiskne oříznuté, ve špatném měřítku nebo s chybějícím textem, řešení závisí na příznaku. Krátký přehled, který spáruje každý problém s tiskem se správným nastavením nebo úpravou před tiskem.",
  updated: "2026-05-29",
  intro: [
    "PDF vzniklo, aby dokument vypadal všude stejně – i na papíře. Takže když se jedno vytiskne špatně, je to skoro vždycky problém tiskové úlohy, ne souboru. Stránka je větší než papír, tiskárna zmenšuje měřítko, písmo není vložené, bezpečnostní příznak blokuje tisk, nebo byl dokument navržený pro jiný region, než ve kterém jsi ty.",
    "Každá z těchhle příčin vytvoří jiný příznak: oříznuté okraje, drobný text, prázdné stránky, chybová okna nebo divná náhradní písma. Brát to všechno jako „tiskárna je rozbitá“ plýtvá spoustou papíru. Brát to jako konkrétní problémy s konkrétními řešeními šetří čas.",
    "Tenhle návod je krátký přehled: co vidíš versus nejpravděpodobnější příčina a správné řešení. Většina řešení jsou nastavení v tiskovém dialogu nebo rychlý krok před tiskem.",
  ],
  steps: [
    {
      title: "Pokud se okraje oříznou, nastav „Přizpůsobit tisknutelné oblasti“",
      body: "Řada PDF je navržená na celý spad papíru; tiskárny netisknou až na okraj. V tiskovém dialogu zvol „Přizpůsobit“ nebo „Zmenšit na tisknutelnou oblast“ místo „Skutečná velikost“. Stránka se lehce zmenší a přestane přicházet o okraje.",
    },
    {
      title: "Pokud je text drobný, zkontroluj neshodu velikosti papíru",
      body: "Dokument navržený pro tisk na A3, vytištěný na Letter, se zmenší, aby se vešel. Znovu exportuj zdroj v cílové velikosti papíru, nebo před opětovným tiskem rozděl dvoustranu na dvě stránky nástrojem Extrahovat stránky z PDF.",
    },
    {
      title: "U stránek, které se tisknou prázdné nebo bez textu, vlož písma",
      body: "Dokumenty používající písma, která tvá tiskárna nemá, mohou zobrazit chybějící znaky. Znovu exportuj se zapnutým „vložit všechna písma“ ve zdrojové aplikaci, nebo nejdřív použij tisk do PDF, čímž se vše zploští do rasterizovaných pixelů.",
    },
    {
      title: "U chyb „dokument je zabezpečený“ zkontroluj oprávnění úprav",
      body: "Některá PDF se exportují s příznaky blokujícími tisk. Odstranit je může jen autor. Pokud je to tvůj soubor, znovu ho exportuj bez omezení tisku. Pokud ne, vyžádej si kopii s povoleným tiskem.",
    },
    {
      title: "Než budeš tisknout, otoč stránky, pokud je orientace špatně",
      body: "Pokud jsou stránky na bok nebo vzhůru nohama, oprav je nástrojem Otočit PDF ještě před odesláním na tiskárnu. Otáčení na straně tiskárny často zavleče vlastní problémy s měřítkem – oprava v souboru je čistší.",
    },
    {
      title: "Vytiskni zkušební stránku z jednostránkového výtahu",
      body: "Neplýtvej 50stránkovým dokumentem na odhalení problému s tiskem. Extrahovat stránky z PDF umí uložit jednu stránku jako samostatné PDF; vytiskni tu, potvrď nastavení a pak spusť celou úlohu.",
    },
  ],
  tips: [
    "Vždycky zkontroluj, jestli velikost papíru zvolená v tiskovém dialogu odpovídá velikosti stránky v PDF – neshoda mezi Letter a A4 způsobuje většinu příznaků „moc malé“.",
    "Pokud se soubor chová divně, zkus nejdřív tisk do PDF. Zploštěná kopie se často vytiskne čistě tam, kde originál ne.",
    "Nastavení pro brožury a sešitovou vazbu způsobí víc problémů s tiskem, než kolik jich vyřeší – vytiskni nejdřív rovné stránky a fyzicky je přerovnej, pokud je to potřeba.",
    "Barevné profily z grafického softwaru mohou na domácích tiskárnách vytvořit tmavé nebo kalné výtisky. Opětovný export v sRGB to obvykle vyřeší.",
    "Pokud je ovladač tiskárny starý, opětovný export přes tisk do PDF může skrýt funkce, které ovladač neumí zpracovat.",
  ],
  mobileNote:
    "Tisk z telefonu obvykle vede přes AirPrint, Google Print nebo aplikaci výrobce, a každý zachází s PDF trochu jinak. Aplikace PDF Editor ti umožní upravit velikost, otočit a ořezat stránky ještě před odesláním – opravit PDF místo boje s tiskovým dialogem bývá na mobilu spolehlivější.",
  faq: [
    {
      q: "Proč se moje PDF vytiskne menší, než jak vypadá na obrazovce?",
      a: "Skoro vždycky proto, že velikost dokumentu neodpovídá velikosti papíru. Tiskárna zmenší měřítko, aby se vešla. Exportuj znovu v cílové velikosti papíru, nebo použij „Skutečná velikost“ s odpovídajícím papírem.",
    },
    {
      q: "Proč v tisku chybí některé znaky?",
      a: "Písma nebyla vložená a tvá tiskárna je nemá. Exportuj znovu s vloženými písmy, nebo nejdřív použij tisk do PDF, čímž se vše zploští.",
    },
    {
      q: "Proč tiskový dialog hlásí, že je moje PDF zabezpečené?",
      a: "Má příznak oprávnění, který blokuje tisk. Odstranit ho může jen autor. Bezpečný způsob, jak to obejít ze strany příjemce, neexistuje.",
    },
    {
      q: "Mám otáčet stránky v tiskárně, nebo v souboru?",
      a: "V souboru. Otáčení na tiskárně může zavléct problémy s měřítkem, zatímco Otočit PDF zapeče orientaci přímo do dokumentu.",
    },
    {
      q: "Jak se vyhnu plýtvání papírem při diagnostice problémů s tiskem?",
      a: "Nejdřív extrahuj jedinou stránku, vytiskni ji, potvrď nastavení a pak spusť celou úlohu. Extrahovat stránky z PDF to zvládne přímo v tvém prohlížeči.",
    },
  ],
  related: [
    { label: "Otočit PDF – oprav orientaci před tiskem", path: "/rotate-pdf" },
    { label: "Extrahovat stránky z PDF – nejdřív vyzkoušej tisk jedné stránky", path: "/extract-pdf-pages" },
    { label: "Jak vyřešit problémy s formátováním PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Jak vyřešit problémy s písmem v PDF", path: "/guides/how-to-fix-pdf-font-issues" },
  ],
  parentHub: { label: "PDF nástroje – bezplatné, v prohlížeči", path: "/pdf-tools" },
};

export default content;
