import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-study-notes-as-pdf",
  h1: "Jak sdílet studijní poznámky jako PDF (skupina, chat, cloud)",
  description:
    "Sdílej poznámky se studijní skupinou, aniž bys přišel o formátování nebo přehled o verzích. Návyky s PDF, díky kterým se společné studium nezvrhne v chaos screenshotů.",
  updated: "2026-05-29",
  intro: [
    "Sdílení poznámek se studijní skupinou by mělo být jednoduché, ale v praxi se to obvykle zvrhne ve vlákno chatu s třiceti screenshoty a třemi různými verzemi téže přednášky. Večer před zkouškou nikdo nemůže najít verzi s vyřešeným příkladem, na který se pořád všichni odkazují, a někdo poslal fotku svých okrajových poznámek psaných rukou, kterou nikdo nepřečte.",
    "PDF většinu z tohohle vyřeší. Zamknou formátování, fungují na jakémkoli zařízení, vejdou se do nabídky sdílení na každé platformě a nejsou vázané na jeden cloudový účet. Pár zvyků při sdílení – konzistentní pojmenování souboru, promyšlené verzování, správný kanál – udrží společné studium souvislé, aniž by to musel někdo řídit jako projekt.",
    "Tenhle návod popisuje tyhle zvyky. Žádný z nich není nástroj – všechny jsou to konvence, na kterých se skupina jednou domluví. Pak už to prostě funguje.",
  ],
  steps: [
    {
      title: "Nejdřív se domluv na sdíleném kanálu",
      body: "Vyber jedno místo – skupinový chat, sdílenou cloudovou složku, vyhrazený Discord – a drž se ho. Poznámky roztroušené mezi dvěma kanály se nedají najít. Na kanálu záleží míň než na důslednosti.",
    },
    {
      title: "Sdílej vždy jako PDF, nikdy jako fotky dokumentu",
      body: "Screenshot PDF je horší než samotné PDF. Pošli soubor přímo. Telefony to usnadňují – nabídka sdílení → soubor, ne screenshot.",
    },
    {
      title: "Pojmenuj soubor pro skupinu, ne pro sebe",
      body: "KodKurzu_Tyden3_Prednaska_Poznamky_TveJmeno.pdf. Skupina vidí, kdo co sdílel a za jaký týden. „Poznamky.pdf“ je ve vlákně s patnácti přílohami Poznamky.pdf k ničemu.",
    },
    {
      title: "Rozpracované poznámky označ vodoznakem",
      body: "Pokud jsou tvoje poznámky teprve první verzí a čeká se, že se budou revidovat, vodoznak NÁVRH nebo ROZPRACOVANÉ přidaný pomocí nástroje Přidat vodoznak do PDF orazí každou stránku. Skupina pak ví, že přijde revize.",
    },
    {
      title: "Před sdílením zkomprimuj",
      body: "Zkomprimovat PDF zmenší velikost souboru pro chatovací platformy s limity příloh. Ušetří čas při odesílání přes mobilní data a zabrání odmítnutí kvůli „příliš velkému souboru“.",
    },
    {
      title: "Sleduj verze v názvu souboru, ne v chatu",
      body: "Tyden3_Prednaska_Poznamky_v2.pdf je jednoznačné. „Upravil jsem poznámky, viz příloha“ ve vlákně chatu není. Název souboru je záznam verzí.",
    },
  ],
  tips: [
    "Nesdílej dokumenty Wordu ve skupině. Na každém zařízení se zobrazí jinak, jsou vázané na jednoho editora najednou a hned se rozjedou na verze. PDF zamkne všechno.",
    "Kde je to možné, používej PDF s ručně psanými poznámkami po OCR – prohledávatelný text pomůže skupině rychle najít konkrétní téma.",
    "Nezveřejňuj fotky obrazovky notebooku. Artefakty (moaré, odlesk, nízké rozlišení) dělají poznámky hůř čitelnými, ne líp.",
    "Pokud tvoje skupina sdílí pravidelně, připrav si předem sdílenou šablonu pro PDF s poznámkami. Jednotné titulní stránky pomůžou poznat, kdo co sdílel.",
    "Vyhni se e-mailu pro skupinové poznámky. Vlákna chatu sledují, kdo co viděl; e-mail rozptýlí stejnou konverzaci do mnoha schránek.",
  ],
  mobileNote:
    "Většinu skupinového sdílení odbaví telefony – rychlé vyfocení, okamžité sdílení do chatu, rychlé potvrzení. Aplikace PDF Editor zvládne řetězec sken–sloučení–komprese–přejmenování na mobilu, takže soubor, který přijde do skupinového chatu, je čistý místo nezpracovaného výpisu z fotogalerie.",
  faq: [
    {
      q: "Jaký je nejhorší způsob sdílení studijních poznámek?",
      a: "Screenshoty dokumentu nebo poznámky jen v chatu. Obojí je neprohledávatelné a nepřežije to, když konverzace jede dál.",
    },
    {
      q: "Má sdílet poznámky každý, nebo jen jeden člověk?",
      a: "Ať sdílí každý, ale s dohodou: předem domluvené týdny na osobu, nebo „já udělám tenhle týden, ty další“. Rotace snižuje zátěž na osobu a přináší poznámky z víc úhlů pohledu.",
    },
    {
      q: "Kde by měly žít kanonické poznámky?",
      a: "Sdílená cloudová složka je nejlepší pro dlouhodobé uložení. Skupinový chat je dobrý na rychlé rozeslání; složka je archiv.",
    },
    {
      q: "Jak verzujeme poznámky?",
      a: "Jen v názvu souboru. v1, v2, v3. Když se skupina shodne na FINAL, přejmenuj a přesuň do /final/. Verze nesleduj v chatu.",
    },
    {
      q: "Co když jsou poznámky ručně psané?",
      a: "Nejdřív Naskenovat do PDF. Černobílé skeny ručně psaných poznámek jsou ostřejší a menší než fotky. Přidej OCR, pokud to tvůj nástroj podporuje.",
    },
  ],
  related: [
    { label: "PDF pro studenty — poznámky a studijní materiály", path: "/pdf-for-students" },
    { label: "Zkomprimovat PDF — zmenšení pro limity příloh v chatu", path: "/compress-pdf" },
    { label: "Jak organizovat studijní materiály jako PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Jak sdílet PDF z telefonu", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF pro studenty — poznámky a studijní materiály", path: "/pdf-for-students" },
};

export default content;
