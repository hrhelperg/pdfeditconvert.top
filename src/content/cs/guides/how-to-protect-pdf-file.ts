import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-pdf-file",
  h1: "Jak chránit PDF soubor heslem",
  description:
    "Přidej PDF souboru ochranu heslem a šifrování na mobilu i počítači. Praktický návod s aplikací PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Řada dokumentů by neměla putovat jako obyčejné PDF: výplatní pásky, podepsané smlouvy, skeny dokladů, kopie NDA, zdravotní záznamy, finanční výkazy. Heslo a pořádné šifrování udělají ze souboru něco, co dokáže otevřít jen zamýšlený příjemce – i kdyby se e-mail přeposlal dál, zachytil, nebo navždy zůstal ve firemní schránce.",
    "Tento návod ukazuje, jak přidat heslo k PDF v aplikaci PDF Editor na iPhonu nebo Androidu. Probere také to, čemu se vyhnout: slabá hesla, zastaralé šifrovací algoritmy a běžnou chybu sdílet heslo stejným kanálem jako samotný dokument.",
    "Na konci budeš mít opakovatelný postup ochrany, který na citlivé dokumenty aplikuješ za méně než minutu, se silným šifrováním AES-256, které přijímají i podnikové bezpečnostní politiky.",
  ],
  steps: [
    {
      title: "Otevřít PDF, který chceš chránit",
      body: "Přidej dokument do PDF Editor ze Souborů, iCloud Drive, Google Drive nebo jakékoli aplikace pro sdílení. Celý postup probíhá lokálně – soubor z tvého zařízení nikdy neodejde.",
    },
    {
      title: "Klepnout na Ochrana v nabídce nástrojů",
      body: "Najdeš ji mezi nástroji dokumentu. Zvol „Chránit heslem“, pokud má být pro otevření souboru potřeba heslo, nebo „Omezit oprávnění“ pro přístup jen ke čtení.",
    },
    {
      title: "Vybrat silné heslo",
      body: "Alespoň 12 znaků, kombinace písmen, číslic a symbolů. Vyhni se běžným slovům a osobním údajům (data narození, jména). Pokud máš správce hesel, nech si v něm heslo vygenerovat – to je správný postup.",
    },
    {
      title: "Potvrdit heslo",
      body: "Zadej ho znovu, aby ses vyhnul překlepu. Jakmile je soubor zašifrovaný, při chybně zadaném heslu neexistuje obnovení.",
    },
    {
      title: "Zvolit omezení (volitelné)",
      body: "Povol prohlížení, ale zablokuj tisk, kopírování textu nebo extrahování stránek. Hodí se, když příjemce potřebuje dokument přečíst, ale nechceš, aby z něj dál šířil jednotlivé části.",
    },
    {
      title: "Uložit jako nový soubor",
      body: "Původní nechráněnou verzi si ponech na bezpečném místě – pokud někdy heslo zapomeneš, budeš k dokumentu přesto mít přístup. Chráněnou kopii ulož pod zřetelně odlišným názvem.",
    },
    {
      title: "Poslat heslo jiným kanálem",
      body: "Zašifrované PDF pošli e-mailem; heslo sděl SMS zprávou nebo telefonicky. Nikdy oboje nedávej do stejného e-mailu – pokud je e-mailový účet napadený, unikne obojí najednou. Malý zvyk, který zabrání většině reálných incidentů.",
    },
  ],
  tips: [
    "AES-256 je správné šifrování – aplikace ho používá jako výchozí. Pokud nějaký nástroj nabízí „kompatibilní“ nebo „starší“ šifrování, obvykle jde o prolomitelné varianty; vyhni se jim.",
    "Nepoužívej stejné heslo pro víc dokumentů. Pokud jedno unikne, nechceš, aby to strhlo lavinu.",
    "Pokud je příjemce netechnický, stačí jednoduchá instrukce: „K otevření souboru budeš potřebovat tohle heslo: XYZ.“",
    "Kde je to možné, sdílej hesla bezpečně přes správce hesel – většina má funkci „sdílet“, která nevyžaduje účet na obou stranách.",
    "U obzvlášť citlivých souborů (právní, zdravotní, finanční) zvaž bezpečné sdílené odkazy z 1Password nebo Bitwarden místo posílání hesla SMS zprávou.",
  ],
  mobileNote:
    "Ochrana PDF probíhá celá v zařízení. I v režimu letadlo dokážeš smlouvu zabezpečit ještě předtím, než se znovu připojíš a pošleš ji dál. To se hodí lidem na cestách, kteří řeší citlivé dokumenty z hotelové haly nebo letiště – ochrana proběhne lokálně a připojení potřebuješ jen pro samotné odeslání.",
  faq: [
    {
      q: "Co když heslo zapomenu?",
      a: "Neexistují žádná zadní vrátka. Silné šifrování znamená, že bez hesla není obnovení možné. Hesla vždy ukládej do správce hesel, ne do paměti.",
    },
    {
      q: "Zpomalí heslo otevírání souboru?",
      a: "Žádné znatelné zpomalení. Dešifrování proběhne jednou při otevření a trvá milisekundy i na starších zařízeních.",
    },
    {
      q: "Můžu heslo později odstranit?",
      a: "Ano, pokud heslo znáš. Otevři chráněné PDF, zadej heslo a v nabídce Ochrana použij „Odstranit ochranu“.",
    },
    {
      q: "Je to heslo skutečně bezpečné, nebo jen zdání bezpečnosti?",
      a: "Skutečná bezpečnost. AES-256 se silným heslem je stejné šifrování, jaké používají podnikové systémy, správci hesel i řada bankovních aplikací. Slabým místem je vždy samotné heslo – vyber si silné.",
    },
    {
      q: "A co redakce (začernění) obsahu?",
      a: "Redakce je něco jiného než ochrana heslem. Redakce natrvalo odstraní obsah (třeba začerní jméno); ochrana heslem obsah zachová, ale vyžaduje k zobrazení ověření. U citlivých dokumentů může být na místě obojí – redakcí odstranit, co v souboru nemá být, a zbytek chránit heslem.",
    },
  ],
  related: [
    { label: "Zabezpečení PDF — kompletní přehled", path: "/pdf-security" },
    { label: "Podepiš PDF ještě před uzamčením", path: "/sign-pdf" },
    { label: "Postupy PDF pro firmy", path: "/pdf-for-business" },
  ],
  parentHub: { label: "Zabezpečení PDF", path: "/pdf-security" },
};

export default content;
