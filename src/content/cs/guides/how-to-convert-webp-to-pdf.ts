import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-webp-to-pdf",
  h1: "Jak převést WebP do PDF – webové obrázky jako dokument",
  description:
    "Proměň obrázky WebP stažené z webu v jedno PDF přímo v prohlížeči. Proč WebP jiné aplikace odmítají a jak převod vyřeší kompatibilitu.",
  updated: "2026-05-23",
  intro: [
    "WebP je obrazový formát, ve kterém skončíš, když si uložíš obrázek z moderního webu. Při podobné kvalitě je menší než JPG nebo PNG, a proto ho weby milují – je to ale zároveň formát, který jiné aplikace tiše odmítají. Nahraj WebP na starší portál, vlož ho do některých editorů dokumentů nebo ho pošli kolegovi se zastaralým softwarem, a často dostaneš jen strohé „nepodporovaný typ souboru“.",
    "Převod WebP do PDF tenhle problém obejde. PDF se otevře všude, takže spojením obrázků WebP do jednoho z nich uděláš univerzálně sdílitelný soubor. Tento návod používá bezplatný nástroj Obrázek do PDF, který přijímá WebP a běží celý v tvém prohlížeči – nic se nikam nenahrává.",
    "Je to správný krok, když jsi z webu nasbíral obrázky – fotky produktů, referenční snímky, uložené infografiky – a potřebuješ je ve formátu, který skutečně přijme každý příjemce i každý systém.",
  ],
  steps: [
    {
      title: "Otevřít nástroj Obrázek do PDF",
      body: "Přejdi na nástroj Obrázek do PDF v prohlížeči. Přijímá WebP vedle JPG a PNG a vše zpracovává na tvém zařízení, bez nahrávání a bez registrace.",
    },
    {
      title: "Přidat soubory WebP",
      body: "Přetáhni uložené obrázky WebP do plochy pro přidání souboru nebo klikni pro jejich výběr. Z každého obrázku vznikne jedna stránka výsledného PDF.",
    },
    {
      title: "Seřadit pořadí",
      body: "Šipkami nahoru a dolů seřaď obrázky. Pokud jde o referenční snímky nebo sérii kroků, pořadí je potřeba nastavit správně už tady.",
    },
    {
      title: "Vytvořit PDF",
      body: "Klikni na Create PDF. Tvé obrázky WebP se umístí na stránky PDF a spojí do jednoho souboru přímo na tvém zařízení.",
    },
    {
      title: "Stáhnout a sdílet",
      body: "PDF se stáhne automaticky. Teď se otevře na jakémkoli zařízení nebo portálu, který si se surovým WebP nevěděl rady.",
    },
    {
      title: "Zkomprimovat, pokud je soubor velký",
      body: "WebP je úsporný formát, ale hromada obrázků ve vysokém rozlišení se přesto sečte. Pokud se výsledek musí vejít do limitu pro přílohu nebo nahrání, prožeň ho nástrojem Zkomprimovat PDF.",
    },
  ],
  tips: [
    "Celý důvod pro převod WebP do PDF je kompatibilita – PDF přijmou i místa, kde WebP neprojde, takže vyměňuješ vrtošivý formát za univerzální.",
    "Pokud potřebuješ jen samotné obrázky v běžnějším formátu (ne dokument), možná bude lepší obyčejný převodník obrázků. PDF zvol, když je cílem jeden sdílitelný, tisknutelný soubor.",
    "WebP může být ztrátový nebo bezztrátový podle toho, jak byl uložený; v obou případech převod do PDF nevrátí detaily, které web už při ukládání zahodil.",
    "Průhlednost ve WebP se – stejně jako u PNG – po převodu na stránku PDF vykreslí na bílém pozadí.",
    "Některé velmi staré prohlížeče WebP vůbec nedekódují. Pokud nástroj tvůj soubor nepřečte, otevři ho v aktuálním prohlížeči nebo použij aplikaci PDF Editor.",
  ],
  mobileNote:
    "Ukládání obrázků při prohlížení na telefonu ti často zanechá soubory WebP, které ostatní aplikace odmítají. Aplikace PDF Editor je na místě promění ve sdílitelné PDF, takže obrázek, který jsi našel na webu, je připravený k odeslání bez zajížďky přes notebook.",
  faq: [
    {
      q: "Proč vůbec musím WebP převádět?",
      a: "Řada aplikací, portálů a starších systémů WebP nepřijímá. Převod do PDF ti dá soubor, který se otevře všude, což bývá hlavní důvod, proč o převod lidé stojí.",
    },
    {
      q: "Ztratí se při převodu kvalita obrázku?",
      a: "Převod do PDF sám o sobě žádnou ztrátu nepřidá, ale nedokáže obnovit detaily, které web při ukládání WebP už odstranil. PDF bude vypadat stejně dobře jako zdrojový obrázek.",
    },
    {
      q: "Nahrávají se moje obrázky někam?",
      a: "Ne. Převod probíhá v prohlížeči na tvém vlastním zařízení, takže obrázky zůstávají v soukromí.",
    },
    {
      q: "Můžu kombinovat WebP s JPG a PNG?",
      a: "Ano. Nástroj přijímá všechny tři formáty dohromady, takže můžeš sestavit jedno PDF z různých zdrojů obrázků.",
    },
    {
      q: "Nástroj můj WebP nepřečte – co teď?",
      a: "Použij aktuální prohlížeč, protože starší WebP dekódovat neumí. Případně převod zvládne i mobilní aplikace PDF Editor.",
    },
  ],
  related: [
    {
      label: "Obrázek do PDF — spoj soubory WebP přímo v prohlížeči",
      path: "/image-to-pdf",
    },
    { label: "Zkomprimovat PDF — zmenši výsledek", path: "/compress-pdf" },
    {
      label: "Jak převést PNG do PDF",
      path: "/guides/how-to-convert-png-to-pdf",
    },
    {
      label: "Jak převést JPG do PDF",
      path: "/guides/how-to-convert-jpg-to-pdf",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
