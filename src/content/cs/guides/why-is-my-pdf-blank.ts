import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blank",
  h1: "Proč je moje PDF prázdné? Skutečné příčiny a jak ho obnovit",
  description:
    "Když se PDF otevře s prázdnými stránkami, obsah tam většinou pořád je – jen ho skrývá chyba vykreslení, chybějící písmo nebo chyba skenu. Jak zjistit, co se stalo, a dokument obnovit.",
  updated: "2026-05-29",
  intro: [
    "Otevřít PDF a narazit na prázdnou stránku je znepokojivé. Čekáš text, grafy, podepsané smlouvy – a nedostaneš nic. Dobrá zpráva je, že obsah v souboru skoro vždycky pořád je. Špatná zpráva je, že příčina může být jedna z několika a nejdřív musíš zjistit která, než ji vyřešíš.",
    "Prázdná PDF obvykle vznikají z chyby vykreslení (tvůj prohlížeč se zasekl na něčem konkrétním), chyby písma (text tam technicky je, ale odkazuje na znak, který nikdo neumí vykreslit), chyby skenu nebo snímání (zdroj vytvořil prázdné stránky), nebo problému s vrstveným či skrytým obsahem. Ve vzácných případech je soubor skutečně prázdný.",
    "Tenhle návod projde diagnózy v pořadí, ve kterém je nejlevnější je kontrolovat, a pak tě nasměruje na správné řešení. Většina prázdných PDF se stane znovu čitelnou po opětovném exportu nebo výměně prohlížeče.",
  ],
  steps: [
    {
      title: "Nejdřív otevři soubor v jiném prohlížeči",
      body: "Zkus vestavěný prohlížeč Chrome, Náhled na macOS nebo mobilní čtečku. Pokud jeden z nich obsah ukáže, izoloval jsi problém na svůj původní prohlížeč – a soubor je v pořádku.",
    },
    {
      title: "Zkontroluj velikost souboru vůči očekávání",
      body: "Skutečně prázdné PDF je maličké – pár KB. PDF, které vypadá prázdně, ale váží několik megabajtů, skoro jistě obsah uvnitř má, jen se ti nevykresluje.",
    },
    {
      title: "Podívej se po příznacích zabezpečení nebo oprávnění",
      body: "Některá PDF se exportují s příznakem „chráněného zobrazení“ nebo podpisu, který způsobí, že určité prohlížeče skryjí obsah, dokud nezískají oprávnění. Uložení nechráněné kopie z benevolentnějšího prohlížeče tohle obvykle vyřeší.",
    },
    {
      title: "Znovu exportuj soubor přes tisk do PDF",
      body: "Otevři soubor v jakémkoli prohlížeči, který obsah zobrazí, a použij „Tisk → Uložit jako PDF“ (nebo Microsoft Print to PDF ve Windows). Tím se přestaví vykreslení stránky a opraví se většina prázdných míst kvůli písmu.",
    },
    {
      title: "Pokud jde o sken, naskenuj znovu s jiným nastavením",
      body: "Prázdné naskenované stránky obvykle vznikají z podavače, který natáhl dva listy najednou, ze slabě nastaveného kontrastu, nebo ze skenu telefonem, který zaostřil na špatnou rovinu. Postup Skenovat do PDF s rozpoznáním okrajů se většině z toho vyhne.",
    },
    {
      title: "Pro ověření extrahuj jednotlivé stránky jako obrázky",
      body: "PDF do obrázků umí exportovat každou stránku jako PNG přímo v tvém prohlížeči. Pokud exportované PNG obsah ukazují, problém je tvůj prohlížeč. Pokud jsou opravdu prázdné, je prázdná i stránka v souboru.",
    },
  ],
  tips: [
    "Prázdné PDF, které váží několik megabajtů, má obsah někde uvnitř – zkoušej další prohlížeče a opětovné exporty, než usoudíš, že je ztracený.",
    "Světle šedý text na bílém pozadí může na displeji telefonu na přímém slunci vypadat jako „prázdný“. Než usoudíš, že je stránka prázdná, zvyš jas nebo invertuj barvy.",
    "Soubory exportované z aplikací s omezenou přístupností někdy zabalí všechno do jedné vrstvy, kterou novější prohlížeče ignorují. Tisk do PDF ji zploští.",
    "Pokud ti přišla zpátky smlouva s prázdnými stránkami podpisu, ten, kdo podepisoval, měl pravděpodobně nástroj, který přepsal skutečná pole prázdnými anotacemi – požádej o znovu podepsanou kopii s jiným nástrojem na podepisování.",
    "Nepokračuj v úpravách nebo slučování souboru, který se vykresluje prázdný, dokud nevíš proč. Stavba na rozbitém vykreslení vytvoří ještě rozbitější soubor.",
  ],
  mobileNote:
    "Telefonní prohlížeče bývají někdy přísnější než ty desktopové. Aplikace PDF Editor používá benevolentnější vykreslovač, který má tendenci obsah zobrazit i tehdy, když jiné mobilní prohlížeče ukážou prázdno, a umožní ti dokument uložit zpátky jako čistší kopii.",
  faq: [
    {
      q: "Je prázdné PDF navždy ztracené?",
      a: "Zřídka. Pokud je velikost souboru víc než pár KB, obsah je skoro jistě pořád uvnitř – pro ověření zkus jiný prohlížeč, opětovný export přes tisk do PDF, nebo extrakci obrázků.",
    },
    {
      q: "Proč můj skener občas vytváří prázdná PDF?",
      a: "Nejčastěji podavač natáhl dva k sobě přilepené listy a zaznamenal jen ten druhý, nebo byl kontrast nastavený příliš nízko. Nové naskenování s automatickým kontrastem to obvykle vyřeší.",
    },
    {
      q: "Mohl by za tím být problém s písmem?",
      a: "Ano. Když PDF odkazuje na písmo, které není vložené, a tvůj prohlížeč ho neumí nahradit, text zmizí, přestože pořád je v souboru. Opětovný export vloží použitelné písmo.",
    },
    {
      q: "Ztratí se obsah, pokud prázdné PDF zkomprimuji nebo sloučím?",
      a: "Může se to stát – obě operace pracují s tím, co tvůj prohlížeč vidí. Nezpracovávej soubor, který se vykresluje prázdný, dokud si nepotvrdíš, že obsah skutečně je uvnitř.",
    },
    {
      q: "Proč to vypadá prázdné v Acrobatu, ale v Chrome je to v pořádku?",
      a: "Jiné zpracování. Prohlížeč Chrome bývá nejshovívavější; starší verze Acrobatu jsou přísnější. Soubor není rozbitý – je to tvůj prohlížeč.",
    },
  ],
  related: [
    { label: "PDF do obrázků – ověř, že stránky nejsou opravdu prázdné", path: "/pdf-to-images" },
    { label: "Skenovat do PDF – čisté skeny bez prázdných stránek", path: "/scan-to-pdf" },
    { label: "Proč se mi neotevře PDF?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Jak opravit poškozené PDF", path: "/guides/how-to-fix-a-corrupted-pdf" },
  ],
  parentHub: { label: "PDF nástroje – bezplatné, v prohlížeči", path: "/pdf-tools" },
};

export default content;
