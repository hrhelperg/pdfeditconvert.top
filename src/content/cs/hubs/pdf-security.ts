import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-security",
  hero: {
    eyebrow: "Zabezpečení PDF",
    h1: "Chraň citlivá PDF tím správným způsobem.",
    highlight: "správným způsobem",
    lead: "Hesla, šifrování AES-256, redakce (černění citlivých údajů) a omezení použití – na smlouvách, mzdových podkladech i skenech dokladů. Přesně taková ochrana, jakou citlivé dokumenty doopravdy potřebují.",
    primaryCta: { label: "Otevřít aplikaci", href: SITE.app.appStore },
  },
  problem: {
    heading: "Proč většina „chráněných“ PDF chráněná není",
    paragraphs: [
      "Překvapivě často lidé sdílejí skeny pasů, podepsané smlouvy a výplatní pásky jako obyčejná PDF – e-mailem, přes zprávové aplikace nebo jako přílohy k formulářům. Pokud dojde ke kompromitaci e-mailového účtu nebo historie zpráv, je vystavený každý jeden z těchto dokumentů.",
      "Někteří uživatelé přidají „ochranu“, která je jen heslem pro otevření nastaveným pomocí zdarma dostupného online nástroje. To je lepší než nic, ale heslo bývá často slabé, šifrování je někdy zastaralá 40bitová šifra, a nástroj navíc drží tvůj soubor dost dlouho na to, aby se stal rizikem sám o sobě.",
      "Opravdové zabezpečení PDF znamená silné šifrování (AES-256), silná hesla a v případě potřeby i oddělení oprávnění k úpravám a tisku od pouhého přístupu k otevření. Mělo by navíc probíhat přímo v zařízení – ve chvíli, kdy citlivý dokument nahraješ do webového nástroje, jsi bitvu o soukromí už prohrál.",
    ],
  },
  features: {
    heading: "Bezpečnostní nástroje, které odpovídají reálné hrozbě",
    items: [
      {
        icon: "Lock",
        title: "Ochrana heslem",
        body: "Nastav heslo pro otevření dokumentu. Bez něj se PDF nedá zobrazit.",
      },
      {
        icon: "ShieldCheck",
        title: "Šifrování AES-256",
        body: "Silné moderní šifrování, standard používaný v podnikových systémech.",
      },
      {
        icon: "Printer",
        title: "Omez kopírování a tisk",
        body: "Povol prohlížení, ale zablokuj kopírování textu, tisk nebo extrakci stránek.",
      },
      {
        icon: "EyeOff",
        title: "Redakce",
        body: "Před sdílením natrvalo začerni jména, čísla účtů nebo podpisy.",
      },
      {
        icon: "Stamp",
        title: "Vodoznaky",
        body: "Přidej vodoznak „důvěrné“ nebo vodoznak konkrétní pro příjemce, abys odradil od dalšího přeposílání.",
      },
      {
        icon: "Link",
        title: "Tipy pro sdílení hesla",
        body: "Zabudovaný návod, jak sdílet heslo přes jiný kanál než samotný dokument.",
      },
    ],
  },
  steps: {
    heading: "Jak zabezpečit PDF",
    items: [
      {
        title: "Otevři PDF",
        body: "Naimportuj dokument do PDF Editoru ze Souborů nebo libovolného cloudového úložiště.",
      },
      {
        title: "Ťukni na Chránit",
        body: "Najdeš ho v nabídce nástrojů pro dokument. Vyber úroveň ochrany, kterou potřebuješ.",
      },
      {
        title: "Nastav heslo",
        body: "Použij silné heslo – aspoň 12 znaků, kombinaci písmen, číslic a symbolů.",
      },
      {
        title: "(Volitelně) Zvol omezení",
        body: "Povol nebo zablokuj tisk, kopírování a úpravy. Užitečné u dokumentů, které sdílíš, ale mají zůstat jen pro čtení.",
      },
      {
        title: "Ulož chráněnou kopii",
        body: "Ulož jako nový soubor, aby zůstal originál dostupný, kdybys heslo zapomněl.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Ochrana citlivých dokumentů na cestách",
    body: "Většina bezpečnostních chyb se stane ve spěchu. Ochrana z telefonu znamená, že smlouvu zabezpečíš ještě před odesláním z letiště, nebo ochráníš PDF se mzdovými údaji před sdílením s externím dodavatelem – bez nutnosti hledat počítač.",
  },
  faq: [
    {
      q: "Jaké šifrování aplikace používá?",
      a: "AES-256, moderní standard. Vyhýbej se staršímu 40bitovému a 128bitovému šifrování RC4 – dají se prolomit hravě.",
    },
    {
      q: "Co když zapomenu heslo?",
      a: "Neexistuje žádná zadní vrátka. Silné šifrování znamená, že dokument bez hesla nejde obnovit. Ulož si ho do správce hesel.",
    },
    {
      q: "Jak bezpečně sdílet heslo?",
      a: "Použij jiný kanál než samotný dokument – pokud jsi PDF poslal e-mailem, heslo pošli SMSkou, nebo využij funkci bezpečného sdílení ve správci hesel.",
    },
    {
      q: "Je redakce trvalá?",
      a: "Ano. Správně provedená redakce odstraní podkladový text, ne že ho jen vizuálně zakryje. Ani zkopírování textu ze začerněného PDF neodhalí původní obsah.",
    },
    {
      q: "Můžu přidat vodoznak a heslo zároveň?",
      a: "Ano. Jsou na sobě nezávislé a dají se použít společně.",
    },
  ],
  related: [
    {
      label: "Krok za krokem: jak chránit PDF heslem",
      path: "/guides/how-to-protect-pdf-file",
    },
    { label: "Podepiš PDF, než ho uzamkneš", path: "/sign-pdf" },
    {
      label: "Pracovní postupy PDF pro firemní týmy",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Uzamkni citlivá PDF během pár sekund.",
    sub: "Zdarma na iOS a Androidu. Ochrana probíhá přímo v zařízení.",
  },
};

export default content;
