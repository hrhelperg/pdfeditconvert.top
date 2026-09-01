import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-study-materials-as-pdf",
  h1: "Jak organizovat studijní materiály jako PDF (složky, názvy, rejstřík)",
  description:
    "PDF z kurzů se hromadí rychle. Jednoduchá konvence pro složky, pojmenování a slučování, díky které zůstanou materiály za semestr prohledávatelné od prvního týdne až po zkoušky.",
  updated: "2026-05-29",
  intro: [
    "Do čtvrtého týdne semestru má tvá složka stažených souborů padesát PDF s názvy jako „lecture7.pdf“, „final-version-2.pdf“, „Slides_v3_corrected.pdf“ a „Document.pdf“. V desátém týdnu už nic nenajdeš. O zkouškovém hledáš tu samou přednášku potřetí, protože si nepamatuješ, ve které verzi kterého souboru je snímek, co potřebuješ.",
    "Řešením není software ani aplikace – je to konvence. Krátká struktura složek, jednotný název souboru a zvyk slučovat každý týden. Jakmile jsou tyhle tři věci zavedené, najít konkrétní přednášku o dva měsíce později zabere pět vteřin místo patnácti minut.",
    "Tenhle návod popisuje konvenci, která vydrží celý semestr: jak by měly vypadat složky, jak by se měly číst názvy souborů, kdy slučovat a co se stane na konci semestru.",
  ],
  steps: [
    {
      title: "Postav jednu složku nejvyšší úrovně na kurz",
      body: "/Kurzy/[KodKurzu]/. Uvnitř: /prednasky/, /ukoly/, /cetba/, /zkousky/. Čtyři složky pokryjí většinu toho, co přijde. Nevnořuj hlouběji než dvě úrovně.",
    },
    {
      title: "Standardizuj vzor pojmenování souboru",
      body: "TydenN_TypDokumentu_RRRR-MM-DD.pdf. Tedy Tyden3_Prednaska_2026-09-15.pdf, Ukol2_Odevzdani_2026-09-20.pdf. Datum na konci zajistí chronologické řazení; týden na začátku seskupí podle tématu.",
    },
    {
      title: "Slučuj po týdnech, ne po souborech",
      body: "Na konci každého týdne Sloučit PDF spojí poznámky z přednášek toho týdne, snímky a fotky tabule do jednoho Tyden3_Balik_prednasek_RRRR-MM-DD.pdf. Jeden soubor na týden se pak mnohem snáz otevírá zpětně.",
    },
    {
      title: "Přidávej titulní stránky do sloučených balíků",
      body: "Napsaná titulní stránka (kurz, týden, probraná témata) udělá balík srozumitelný i o zkouškovém. Budoucí ty, prolétávající dvanáct týdnů balíků, poděkuje tomu dnešnímu.",
    },
    {
      title: "Archivuj na konci semestru",
      body: "Po konci semestru přesuň /Kurzy/[Kurz]/ do /Archiv/[Rok]/[Kurz]/. Aktivní složky zůstávají útlé; archivy jsou prohledatelné pro pozdější zopakování prerekvizit.",
    },
    {
      title: "Komprimuj archivy, ne aktivní soubory",
      body: "Zkomprimovat PDF archivovaný materiál ušetří místo na disku. Nekomprimuj aktivní studijní soubory – během semestru záleží víc na čitelnosti než na velikosti.",
    },
  ],
  tips: [
    "Používej data ve formátu RRRR-MM-DD. V jakémkoli správci souborů se pak řadí správně. 15.9.26 se neřadí.",
    "Nedávej do studijních materiálů čísla verzí. Finální přednáška je přednáška; v2 znamená, že to vyučující znovu nahrál.",
    "Přípravu na zkoušku označuj zvlášť – /zkousky/pololetni/ a /zkousky/zaverecna/. Je to jiný studijní režim než týdenní revize.",
    "Neslučuj napříč kurzy. PDF přesahující kurzy se pak nedají najít.",
    "V každé složce kurzu si veď jednořádkový README.txt s poznámkou, co je v jaké podsložce. Pomůže, když se k materiálu vrátíš o semestr později.",
  ],
  mobileNote:
    "Většina studijních PDF přijde na telefon (přes portál předmětu, e-mail vyučujícího nebo vlastní sken). Aplikace PDF Editor ti umožní přejmenovat, zařadit a sloučit přímo na mobilu, takže soubor skončí na správném místě místo hromadění se ve staženém.",
  faq: [
    {
      q: "Jaký formát názvu souboru je pro studijní materiály nejlepší?",
      a: "TydenN_TypDokumentu_RRRR-MM-DD.pdf. Předpona s týdnem seskupí podle tématu, typ dokumentu vyjasní obsah, datum ve formátu ISO zajistí chronologické řazení.",
    },
    {
      q: "Mám slučovat týdně, nebo si nechat jednotlivé soubory?",
      a: "Slučuj týdně. Jedno PDF na týden na kurz je správná zrnitost – dost malé, aby se rychle načetlo, dost velké, aby bylo samostatně použitelné pro revizi.",
    },
    {
      q: "Jak hluboko mají jít složky?",
      a: "Dvě úrovně. /Kurzy/[Kurz]/[typ]/. Hlouběji už soubory ztrácíš.",
    },
    {
      q: "Potřebuju samostatnou archivní složku?",
      a: "Ano. Uzavřené semestry přesuň mimo /Kurzy/, aby zůstala aktivní složka přehledná.",
    },
    {
      q: "Co synchronizace do cloudu?",
      a: "Synchronizuj složku /Kurzy/ aspoň na jeden cloudový disk. Přístup z telefonu na notebook je o zkouškovém důležitý; synchronizace to vyřeší.",
    },
  ],
  related: [
    { label: "PDF pro studenty — poznámky a studijní materiály", path: "/pdf-for-students" },
    { label: "Sloučit PDF — sestav týdenní balíky", path: "/merge-pdf" },
    { label: "Jak organizovat PDF soubory", path: "/guides/how-to-organize-pdf-files" },
    { label: "Pracovní postup s PDF pro vysokoškoláky", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF pro studenty — poznámky a studijní materiály", path: "/pdf-for-students" },
};

export default content;
