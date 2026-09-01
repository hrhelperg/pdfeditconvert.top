import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx",
  h1: "PDF vs DOCX – jaký formát použít?",
  description:
    "Kdy zvolit PDF místo DOCX a naopak. Přehledné srovnání upravitelnosti, věrnosti zobrazení, podepisování a sdílení.",
  updated: "2026-05-11",
  intro: [
    "PDF a DOCX řeší různé problémy. PDF je uzamčený, tisknutelný formát, který vypadá stejně na každém zařízení. DOCX je upravitelný pracovní formát, který může kdokoli s Wordem, Google Docs nebo jiným kancelářským balíkem přetvořit, přestylovat a přeformátovat.",
    "Volba správného formátu pro danou úlohu předejde většině problémů, které si lidé s oběma formáty spojují. Poslání finální smlouvy jako DOCX zve k nechtěným úpravám. Poslání pracovního konceptu jako PDF ztěžuje revizi. Ta volba není o estetice – jde o to, k čemu dokument slouží.",
    "Tento návod rozebírá, kdy vítězí který formát, na konkrétních příkladech smluv, konceptů, faktur, reportů a typů dokumentů, se kterými se malé firmy i jednotlivci potýkají každý týden.",
  ],
  steps: [
    {
      title: "PDF použij, když je dokument hotový",
      body: "Smlouvy, podepsané dohody, faktury, brožury, reporty putující ke klientům nebo zainteresovaným stranám. Cokoli, kde by měl příjemce vidět přesně to, co jsi viděl ty, a nemělo by jít bez upozornění upravit.",
    },
    {
      title: "DOCX použij, když se dokument ještě píše",
      body: "Koncepty, dokumenty na spolupráci, cokoli v revizi, šablony, které se budou opakovaně používat a upravovat. Komentáře a sledování změn pořádně fungují jen v DOCX – to je celý smysl formátu.",
    },
    {
      title: "PDF použij pro archivaci",
      body: "PDF je navržené pro dlouhodobé uchovávání. Formát se stejně zobrazí i za 10 let. Soubory DOCX se mohou nepatrně rozbít mezi verzemi Wordu a operačními systémy – pro pracovní dokumenty to nevadí, pro archiv je to riziko.",
    },
    {
      title: "DOCX použij, když je potřeba obsah extrahovat",
      body: "Přenesení textu do jiného nástroje, přepracování části do blogového příspěvku, přepsání jiným stylem – to všechno je snazší z DOCX, kde je obsah už strukturovaný a upravitelný.",
    },
    {
      title: "Podle potřeby mezi formáty převádět",
      body: "Dobré nástroje na PDF převádějí oběma směry s vysokou věrností u textových dokumentů. Obvyklý postup: uprav v DOCX, při sdílení navenek exportuj do PDF. Přijmeš PDF, pro další zpracování ho převeď na DOCX.",
    },
    {
      title: "PDF použij, když dokument přijímáš od někoho neznámého",
      body: "Soubory DOCX mohou obsahovat makra a vložené objekty, které představují bezpečnostní riziko. PDF je bezpečnější otevírat z nedůvěryhodných zdrojů, i tak by ale tvá čtečka PDF měla být aktuální.",
    },
  ],
  tips: [
    "Nikdy neposílej koncept smlouvy jako DOCX externí straně, pokud přímo nezveš ke změnám – druhá strana ho může upravit, aniž bys o tom věděl, a rozdíly objevíš jen při pečlivém porovnání.",
    "Nikdy neposílej finální fakturu jako DOCX – měla by být needitovatelná. PDF je v tomhle případě vždy správná volba.",
    "Pokud příjemce žádá o „upravitelné PDF“, obvykle tím myslí DOCX. Než to předpokládáš, radši se zeptej a pak převeď.",
    "PDF s podpisy by mělo zůstat PDF. Zpětný převod do DOCX podpis odstraní.",
    "U dokumentů s poli formuláře je obvykle lepší volbou PDF – pole formuláře v DOCX bývají neohrabaná a v různých editorech se chovají nekonzistentně.",
  ],
  mobileNote:
    "Na mobilu DOCX vyžaduje Word, Google Docs nebo jinou kancelářskou aplikaci, aby se zobrazil správně. PDF se v iOS i Androidu otevírá nativně přes vestavěné prohlížečky. To samo o sobě dělá z PDF správnou volbu pro většinu sdílených dokumentů – příjemce si kvůli přečtení nemusí nic instalovat.",
  faq: [
    {
      q: "Můžu upravit PDF přímo, bez převodu?",
      a: "Ano, s pořádným editorem PDF. Úpravy PDF jsou omezenější než úpravy DOCX – jsou navržené na opravy, podpisy a drobné změny, ne na zásadní přepisy. Pro rozsáhlejší úpravy obvykle dává větší smysl nejdřív převést na DOCX.",
    },
    {
      q: "Který formát vytváří menší soubory?",
      a: "Záleží na obsahu. Textově náročný DOCX bývá menší než odpovídající PDF. PDF s hodně obrázky může být při dobré kompresi menší než DOCX, protože komprese obrázků v PDF je flexibilnější.",
    },
    {
      q: "Přežijí písma převod?",
      a: "Většinou ano. Pokud písmo není na cílovém zařízení dostupné, automaticky se nahradí podobným. Drž se běžných písem (Inter, Helvetica, Calibri, Arial), aby bylo viditelné nahrazení co nejmenší.",
    },
    {
      q: "Liší se PDF/A od běžného PDF?",
      a: "Ano. PDF/A je přísný archivní podtyp, který vkládá všechna písma a zakazuje externí závislosti. Vyžadují ho některé vládní a právní archivy. Standardní PDF stačí pro téměř všechno ostatní.",
    },
    {
      q: "Může DOCX obsahovat podpis?",
      a: "Může obsahovat obrázek podpisu, ale ten nemá žádnou kryptografickou platnost. PDF podporuje skutečné digitální podpisy, které podpis svážou s dokumentem. Pro cokoli, co je potřeba právně podepsat, je PDF správný formát.",
    },
  ],
  related: [
    { label: "PDF vs DOCX — kompletní srovnání", path: "/compare/pdf-vs-docx" },
    { label: "PDF Converter", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
