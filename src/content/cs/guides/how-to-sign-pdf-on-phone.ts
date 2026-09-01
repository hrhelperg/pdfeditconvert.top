import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-phone",
  h1: "Jak podepsat PDF na telefonu",
  description:
    "Přidej právně platný elektronický podpis do PDF z iPhonu nebo Androidu. Praktický návod s aplikací PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Tisknout PDF jen proto, abys ho podepsal a naskenoval zpátky, je dnes zbytečné. Většina jurisdikcí přijímá elektronické podpisy pro běžné obchodní smlouvy, NDA, nabídky i potvrzení. Tvůj telefon bez problémů zvládne vytvořit čistý, právně použitelný podpis za méně než minutu.",
    "Tento návod ukazuje podepisování PDF na iPhonu nebo Androidu v aplikaci PDF Editor. Podpis, který uložíš, můžeš znovu použít pro každý budoucí dokument – nakreslíš ho jen jednou. Poté je podepsání jakékoli smlouvy otázkou čtyř klepnutí: otevřít, klepnout na Podpis, umístit, exportovat.",
    "Probereme i případy, kdy je podepisování na telefonu *lepší* než u stolu: smlouvy, které je potřeba rychle vrátit, podepisování na cestách a vícenásobné podepisování, kdy dokument putuje mezi telefony. Na konci budeš mít uložený podpis připravený na každý budoucí dokument.",
  ],
  steps: [
    {
      title: "Otevřít PDF",
      body: "Dokument přidej do aplikace PDF Editor přes Soubory, cloudové úložiště, e-mail nebo jakoukoli aplikaci pro sdílení. Postup podepisování funguje bez ohledu na to, odkud PDF pochází.",
    },
    {
      title: "Klepnout na nástroj Podpis",
      body: "Najdeš ho na panelu nástrojů pro úpravy. Zvol vlastnoruční podpis, psaný podpis nebo iniciály. Pokud byl PDF navržený pro podepisování, nástroj automaticky rozpozná existující pole pro podpis.",
    },
    {
      title: "Nakreslit nebo napsat svůj podpis",
      body: "Jen napoprvé. Použij prst, Apple Pencil nebo S Pen. Výsledek se uloží do zařízení. Kdykoli ho můžeš upravit nebo nahradit v Nastavení.",
    },
    {
      title: "Umístit podpis",
      body: "Přetáhni ho na správné místo na stránce. Velikost uprav pomocí úchytů v rozích. Podpis se stane běžným objektem PDF, takže ho po umístění můžeš přesunout.",
    },
    {
      title: "Podle potřeby přidat datum a iniciály",
      body: "Mnoho smluv vyžaduje datum vedle podpisu a iniciály na každé stránce. Datum přidáš jedním klepnutím a uložená varianta iniciál pokryje oba případy.",
    },
    {
      title: "Exportovat podepsanou kopii",
      body: "Ulož jako nový soubor (doporučeno – originál bez podpisu ti zůstane) nebo originál přepiš. Exportované PDF obsahuje metadata podpisu pro evidenci. Sdílej e-mailem, přes AirDrop, Drive nebo jakoukoli komunikační aplikaci.",
    },
  ],
  tips: [
    "Pokud dokument projde vizuální kontrolou, použij místo prstu stylus. Čistší tah je u smluv pro klienty znát.",
    "Podpis si ulož jednou a používej ho na každém dalším dokumentu – aplikace ho ukládá lokálně do zařízení, nikdy ho nikam nenahrává.",
    "Pro běžná interní potvrzení použij psaný podpis, pro externí smlouvy vlastnoruční.",
    "Na obzvlášť citlivé podepsané dokumenty před sdílením přidej heslo – nástroj Ochrana funguje i po podepsání.",
    "Nepodepsaný originál PDF si ponech ve složce vedle podepsané verze. Pokud si druhá strana vyžádá „čistou“ kopii nebo budeš potřebovat podepsat znovu s opravami, budeš ho mít po ruce.",
  ],
  mobileNote:
    "Podepisování na telefonu znamená, že se smlouva vrátí druhé straně do hodiny – někdy během pár minut. Tahle výhoda rychlosti se počítá obzvlášť tehdy, když pracuješ mimo stůl: u zákazníka, mezi schůzkami nebo na cestách. Celý postup od přijetí smlouvy po odeslání podepsané verze se pohodlně vejde do přestávky na kávu.",
  faq: [
    {
      q: "Je elektronický podpis právně platný?",
      a: "Ve většině jurisdikcí ano, pro běžné obchodní smlouvy. Evropské nařízení eIDAS i americký zákon ESIGN standardní elektronické podpisy uznávají. U vysoké hodnoty nebo právně regulovaných dokumentů si ověř místní pravidla – může být vyžadován kvalifikovaný elektronický podpis, což je jiný, formálnější proces.",
    },
    {
      q: "Může stejné PDF podepsat víc lidí?",
      a: "Ano. Soubor mezi podepisujícími pošli přes nabídku sdílení, AirDrop, e-mail nebo jakoukoli komunikační aplikaci. Každý podpis se přidá na místo a předchozí podpisy zůstanou zachované. Výsledný soubor zobrazuje podpis každého na správné pozici.",
    },
    {
      q: "Bude podpis na obrazovce telefonu vypadat hladce?",
      a: "Na moderních telefonech ano. Stylus dává znatelně hladší tah než prst, což je u smluv procházejících vizuální kontrolou důležité. Pro běžná potvrzení je podepisování prstem naprosto v pořádku.",
    },
    {
      q: "Ukládá se můj podpis někde na serveru?",
      a: "Ne. Uložené podpisy žijí jen v tvém zařízení. Do dokumentů se přidávají lokálně a nikdy se nenahrávají do naší infrastruktury ani k žádné třetí straně.",
    },
    {
      q: "Co když má PDF už existující pole pro podpis?",
      a: "Aplikace rozpozná existující pole formuláře určená pro podpis a umožní ti klepnout přímo do nich. Podpis se automaticky přichytí ve správné velikosti a poloze – bez ruční úpravy.",
    },
  ],
  related: [
    { label: "Podepsat PDF — kompletní přehled", path: "/sign-pdf" },
    {
      label: "Ochrana podepsaných PDF heslem",
      path: "/guides/how-to-protect-pdf-file",
    },
    {
      label: "Jak upravit PDF na iPhonu",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
  ],
  parentHub: { label: "Podepsat PDF", path: "/sign-pdf" },
};

export default content;
