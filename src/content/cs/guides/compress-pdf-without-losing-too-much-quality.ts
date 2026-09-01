import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "compress-pdf-without-losing-too-much-quality",
  h1: "Jak zkomprimovat PDF bez velké ztráty kvality",
  description:
    "Najdi rovnováhu mezi velikostí souboru a kvalitou. Jak úrovně komprese vyměňují detail za velikost a jak vybrat tu nejnižší, která ještě funguje.",
  updated: "2026-05-23",
  intro: [
    "V jádru komprese PDF je poctivé napětí: menší soubory znamenají méně detailů. Jakýkoli nástroj, který slibuje velkou úsporu bez jakékoli ztráty kvality, ti něco prodává. Reálný cíl není „žádná ztráta“ – je to „žádná ztráta, které si pro tenhle účel všimneš“. Dokument určený ke čtení na obrazovce unese ztrátu detailů, kterou tisková zakázka neunese.",
    "Tento návod je o hledání téhle rovnováhy pomocí bezplatného nástroje Zkomprimovat PDF, který běží v tvém prohlížeči, nic se nikam nenahrává a u každé úrovně ukazuje úsporu velikosti. Místo automatického sahání po maximální kompresi se naučíš vybrat tu nejjemnější úroveň, která pořád vypadá dobře.",
    "Trefit tuhle rovnováhu znamená soubory, které se odešlou a nahrají bez potíží a přitom vypadají tak, jak chceš, když je někdo skutečně otevře.",
  ],
  steps: [
    {
      title: "Definovat, co je pro tento dokument „dost dobré“",
      body: "Rozhodni, jak se soubor bude používat. Čtení na obrazovce snese víc komprese než tisk; portfoliová ukázka potřebuje víc detailů než účtenka na výdaje. Účel nastavuje tvou hranici kvality.",
    },
    {
      title: "Otevřít nástroj Zkomprimovat PDF",
      body: "Přejdi na nástroj Zkomprimovat PDF. Soubor zpracuje na tvém zařízení a ukáže úsporu velikosti, takže kompromis posoudíš přímo.",
    },
    {
      title: "Začít nejjemnější úrovní",
      body: "Nejdřív zkus Nízkou nebo Doporučenou, ne Silnou. Instinkt maximalizovat kompresi obvykle přestřelí – svého cíle ve velikosti často dosáhneš s rezervou detailů.",
    },
    {
      title: "Porovnat kvalitu a velikost",
      body: "Otevři výsledek a podívej se na stránky, zejména obrázky a jemný text. Poznamenej si ušetřenou velikost. Pokud je kvalita v pořádku a jsi pod svým limitem, máš hotovo.",
    },
    {
      title: "Přejít o úroveň výš jen v případě potřeby",
      body: "Pořád moc velké? Posuň se o jednu úroveň silnější a zkontroluj znovu. Postupné zvyšování najde nejjemnější nastavení, které splní tvůj cíl bez zbytečné degradace.",
    },
    {
      title: "Ponechat originál",
      body: "Komprimovanou kopii ulož pod novým názvem. Komprese je jednosměrná – detail, který odstraní, je pryč – takže nedotčený originál je tvá pojistka.",
    },
  ],
  tips: [
    "Sáhni nejdřív po nejjemnější úrovni a zvyšuj ji jen v nutném případě. Většina lidí komprimuje víc, než velikostní cíl vyžadoval, a soubory tím zbytečně zhorší.",
    "Přizpůsob kvalitu účelu: dokumenty jen pro obrazovku přežijí silnou kompresi, která by zničila něco určeného k tisku.",
    "Komprese stránky zploští na obrázky, takže výstup ztratí vybíratelný text. Pokud potřebuješ prohledávatelný text víc než menší soubor, je to důvod ponechat si originál nebo komprimovat míň.",
    "Textově náročná PDF se skoro nezmenší bez ohledu na úroveň, protože v nich je málo obrazových dat – nepřetáčej úroveň v očekávání úspory, která tam není.",
    "Komprimuj jen jednou. Komprimování už komprimovaného souboru jen hromadí ztrátu bez smysluplného zisku ve velikosti.",
  ],
  mobileNote:
    "Posoudit kompromis mezi velikostí a kvalitou je na telefonu snadné s aplikací PDF Editor: komprimuj offline, prohlédni si stránky a před sdílením uprav úroveň nahoru nebo dolů – žádné nahrávání, a podporované jsou i chráněné soubory.",
  faq: [
    {
      q: "Můžu zkomprimovat PDF úplně bez ztráty kvality?",
      a: "Ne smysluplně – užitečná komprese je ztrátová. Reálným cílem je žádná ztráta, které si pro účel dokumentu všimneš. Jemnější úrovně zachovají víc detailů; vyber tu nejjemnější, která pořád vypadá dobře.",
    },
    {
      q: "Která úroveň zachová nejvíc kvality?",
      a: "Nízká zachová nejvíc detailů, pak Doporučená, se Silnou jako nejmenší a nejhrubší. Začni jemně a přejdi výš jen tehdy, pokud jsi pořád nad svým cílem ve velikosti.",
    },
    {
      q: "Proč obrázky po kompresi vypadají rozmazaně?",
      a: "Komprese obrázků zahazuje jemné detaily, aby ušetřila místo, a silnější úrovně zahodí víc. Pokud je rozmazání pro tvůj účel znatelné, vrať se o úroveň zpátky.",
    },
    {
      q: "Odstraní komprese prohledávatelný text?",
      a: "Ano – stránky se znovu vykreslí jako obrázky, čímž zmizí vybíratelná textová vrstva. Pokud je prohledávatelný text důležitější než velikost, ponech si originál nebo komprimuj méně agresivně.",
    },
    {
      q: "Mám soubor komprimovat víckrát?",
      a: "Ne. Druhý průchod přidá ztrátu kvality za minimální další úsporu. Komprimuj jednou na správné úrovni a originál si ponech.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF — ovládni úroveň", path: "/compress-pdf" },
    {
      label: "Nejlepší nastavení komprese PDF",
      path: "/guides/best-pdf-compression-settings",
    },
    {
      label: "Jak zkomprimovat PDF bez ztráty kvality",
      path: "/guides/how-to-compress-pdf",
    },
    { label: "Proč je moje PDF tak velké?", path: "/guides/why-is-my-pdf-so-large" },
  ],
  parentHub: { label: "Zkomprimovat PDF", path: "/compress-pdf" },
};

export default content;
