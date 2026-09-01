import type {
  ContactContent,
  GuidesIndexContent,
  LegalContent,
  ToolsIndexContent,
} from "@/types/content";
import { PRIVACY_UPDATED } from "@/content/legal/privacy";
import { TERMS_UPDATED } from "@/content/legal/terms";

export const TOOLS_INDEX_CS: ToolsIndexContent = {
  crumbLabel: "Bezplatné PDF nástroje",
  heroEyebrow: "Bezplatné PDF nástroje",
  heroH1: "PDF nástroje v prohlížeči — tvoje soubory nikdy neopustí tvoje zařízení.",
  heroHighlight: "nikdy neopustí",
  heroLead:
    "Sluč, rozděl, otoč, přidej vodoznak a převeď PDF, a to bez nahrávání čehokoliv na server. Všechno zpracování probíhá lokálně, přímo ve tvém prohlížeči, zdarma a bez registrace.",
  privacyNote:
    "Každý nástroj na této stránce zpracovává tvoje soubory lokálně, přímo v prohlížeči. Nic se nenahrává na naše servery a nic se neukládá.",
  clusterHeading: "{count} návodů na práci s PDF v prohlížeči",
  goingFurtherHeading: "Jak dál s PDF",
  goingFurtherBody:
    "Tyto nástroje pokrývají jednorázové úkoly přímo v prohlížeči. Pro ucelené pracovní postupy, které za nimi stojí — úpravy, převody, podepisování, zabezpečení a skenování — začni u tematických rozcestníků.",
  hubs: [
    { id: "pdf-editor", label: "PDF Editor" },
    { id: "pdf-converter", label: "PDF konvertor" },
    { id: "pdf-forms", label: "PDF formuláře" },
    { id: "sign-pdf", label: "Podepsat PDF" },
    { id: "pdf-security", label: "Zabezpečení PDF" },
    { id: "scan-to-pdf", label: "Skenovat do PDF" },
    {
      id: "compare/pdf-app-vs-online-pdf-tools",
      label: "Aplikace pro PDF, nebo online nástroje?",
    },
  ],
  appCtaHeading: "Potřebuješ PDF nástroje v mobilu?",
  appCtaSub: "Stáhni si aplikaci PDF Editor pro iPhone a Android — zdarma.",
};

export const GUIDES_INDEX_CS: GuidesIndexContent = {
  h1: "Návody na PDF",
  lead: "{count} praktických návodů zaměřených především na mobil — na úpravy, převody, kompresi, podepisování a ochranu PDF — roztříděných podle nástroje nebo tématu, ke kterému patří.",
};

export const CONTACT_CS: ContactContent = {
  h1: "Spoj se s námi",
  lead: "Dotazy, spolupráce, média nebo zpětná vazba k aplikaci PDF Editor — každý e-mail si přečteme.",
  emailLabel: "E-mail",
  officeLabel: "Sídlo společnosti",
  sections: [
    {
      heading: "Co očekávat",
      body: "E-mail je jediný kanál podpory — žádný systém tiketů, žádný chatbot mezi tebou a odpovědí. Odpovídá stejný malý tým, který aplikaci vyvíjí, obvykle do dvou pracovních dnů. U čehokoliv souvisejícího s aplikací uveď zařízení a verzi systému; u problému s konkrétním dokumentem popiš, co se stalo, a soubor neposílej — tvoje dokumenty nechceme ani nepotřebujeme.",
    },
    {
      heading: "S čím ti nepomůžeme",
      body: "Nástroje v prohlížeči na tomto webu běží celé v tvém zařízení, takže se k nám nikdy nedostane nic z toho, co zpracováváš. Znamená to také, že nemůžeme obnovit tvůj převedený soubor, znovu poslat stažení ani cokoliv za tebe dohledat — na naší straně žádná kopie k nahlédnutí neexistuje. Pokud nástroj u konkrétního PDF selhal, napiš nám, o jaký soubor šlo (naskenovaný, chráněný heslem, vyplněný formulář) a co přesně nástroj udělal.",
    },
    {
      heading: "Soukromí a právní žádosti",
      body: "Dotazy na ochranu údajů, žádosti o smazání a právní oznámení směřuj na stejnou adresu — doručí se společnosti hrhelperg s.r.o. na výše uvedené sídlo.",
    },
  ],
  legalSentence:
    "Naše {privacy} popisují, co sbíráme a co ne, a naše {terms} upravují používání webu a nástrojů.",
  privacyLinkLabel: "zásady ochrany osobních údajů",
  termsLinkLabel: "podmínky používání",
  tryAppHeading: "Vyzkoušej aplikaci",
};

/**
 * Czech privacy policy.
 *
 * A translation, not a separate policy: the operator, the registered
 * office, the contact address, the analytics vendor and the legal basis are
 * the same facts the English version states, because the same company
 * processes the same data under the same law. The operator's identity,
 * registered address and email are reproduced exactly as in the English
 * source — never translated.
 *
 * Czech has no single native acronym for GDPR as established in everyday
 * use as German's DSGVO or French's RGPD. Czech consumer and legal writing
 * overwhelmingly keeps "GDPR" itself, so this keeps "GDPR" with a one-time
 * Czech-language gloss on first mention, the same treatment as Arabic and
 * Russian — never a narrower Czech domestic statute.
 */
export const PRIVACY_CS: LegalContent = {
  h1: "Zásady ochrany osobních údajů",
  updated: PRIVACY_UPDATED,
  sections: [
    {
      heading: "Kdo jsme",
      body: [
        "pdfeditconvert.top provozuje společnost hrhelperg s.r.o., česká společnost s ručením omezeným se sídlem Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic. Napsat nám můžeš na info@hrhelperg.com.",
      ],
    },
    {
      heading: "Co tento web sbírá",
      body: [
        "Tento web slouží pouze k informačním účelům. Ke čtení žádné stránky nepotřebuješ vytvářet účet, nahrávat dokumenty ani sdílet osobní údaje.",
        "Používáme analytický nástroj respektující soukromí (WebmasterID), abychom zjistili, které stránky se navštěvují a jak nás čtenáři najdou. Zaznamenává adresu URL navštívené stránky, tvou přibližnou oblast, typ zařízení a odkazující stránku. Nepoužívá reklamní cookies a nevytváří tvůj profil napříč jinými weby.",
      ],
    },
    {
      heading: "Co sbírá mobilní aplikace",
      body: [
        "Mobilní aplikace PDF Editor může ukládat data lokálně ve tvém zařízení (otevřené soubory, tvoje nastavení) a pokud to povolíš, může synchronizovat soubory s cloudovou službou, kterou si zvolíš (iCloud, Google Drive a další). Závazný seznam najdeš v údajích o ochraně soukromí aplikace na App Store a Google Play.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "Používáme malé množství cookies a podobných technologií pro základní fungování webu a analytiku. Reklamní cookies nepoužíváme.",
      ],
    },
    {
      heading: "Tvá práva",
      body: [
        "Pokud žiješ v EU/EHP, vztahuje se na tebe GDPR, obecné nařízení o ochraně osobních údajů. Díky němu máš práva na přístup, opravu, výmaz, omezení zpracování a přenositelnost údajů. Pro jejich uplatnění napiš na info@hrhelperg.com.",
      ],
    },
    {
      heading: "Kontakt",
      body: ["Dotazy k těmto zásadám můžeš poslat na info@hrhelperg.com."],
    },
    {
      heading: "Změny",
      body: [
        "Tyto zásady můžeme čas od času aktualizovat. Významné změny na této stránce zvýrazníme spolu s novým datem aktualizace.",
      ],
    },
  ],
};

/** Czech terms of service — a translation of the same terms. */
export const TERMS_CS: LegalContent = {
  h1: "Podmínky používání",
  updated: TERMS_UPDATED,
  sections: [
    {
      heading: "O těchto podmínkách",
      body: [
        "Tyto podmínky upravují používání webu pdfeditconvert.top, který provozuje společnost hrhelperg s.r.o. (Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic).",
      ],
    },
    {
      heading: "Používání webu",
      body: [
        "Stránky tohoto webu můžeš číst, odkazovat na ně a sdílet je. Nesmíš strojově stahovat rozsáhlé části obsahu za účelem jejich dalšího zveřejnění ani používat web způsobem, který narušuje ostatní uživatele.",
      ],
    },
    {
      heading: "O mobilní aplikaci PDF Editor",
      body: [
        "PDF Editor je samostatná mobilní aplikace distribuovaná přes Apple App Store a Google Play. Její používání se řídí vlastními podmínkami aplikace, které se zobrazí při instalaci.",
      ],
    },
    {
      heading: "Bez záruky",
      body: [
        "Obsah na pdfeditconvert.top slouží pouze pro obecné informační účely a nejde o právní, daňové ani finanční poradenství. Přiměřeně se snažíme udržovat ho přesný, ale neposkytujeme žádnou záruku ohledně jeho úplnosti nebo vhodnosti pro konkrétní účel.",
      ],
    },
    {
      heading: "Odpovědnost",
      body: [
        "V maximálním rozsahu povoleném českým právem a právem EU neodpovídá hrhelperg s.r.o. za žádnou nepřímou nebo následnou újmu vzniklou v souvislosti s používáním tohoto webu.",
      ],
    },
    {
      heading: "Rozhodné právo",
      body: [
        "Tyto podmínky se řídí právním řádem České republiky. Spory budou řešeny příslušnými českými soudy.",
      ],
    },
    {
      heading: "Kontakt",
      body: ["Dotazy k těmto podmínkám můžeš poslat na info@hrhelperg.com."],
    },
  ],
};
