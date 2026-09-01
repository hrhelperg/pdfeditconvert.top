import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-images-for-sharing-documents",
  h1: "PDF vs obrázky pro sdílení dokumentů (JPG, PNG, HEIC)",
  description:
    "Kdy je fotka nebo obrázek dokumentu ve formátu JPG, PNG nebo HEIC špatná volba – a co dělá z PDF ten správný formát pro cokoli víc než rychlý snímek obrazovky.",
  updated: "2026-05-29",
  intro: [
    "Překvapivé množství pracovní i školní agendy se posílá jako obrázkové soubory – JPG smluv, HEIC fotky podkladů, PNG screenshoty účtenek. Působí to rychleji, než vyrobit PDF, telefon to usnadňuje a příjemce si to obvykle stejně přečte. Jenže obrázky dokumentů jsou špatný formát pro skoro každý skutečný pracovní postup s dokumenty.",
    "PDF a obrázky dokumentů slouží jinému účelu. PDF jsou vícestránková, prohledávatelná, tisknutelná, podepsatelná, archivovatelná a nerozbijí se při otočení. Obrázky jsou jednostránkové, neprohledávatelné, často mají obří velikost souboru a často vyjdou rozmazané, na bok nebo se špatnou barvou. Pro cokoli víc než jedno rychlé sdílení odvede PDF práci lépe.",
    "Tenhle návod projde proč, kdy přístup přes obrázek dokumentu skutečně funguje (občas ano) a jednoduchou cestu k převodu, když chceš verzi v PDF.",
  ],
  steps: [
    {
      title: "Poznej, kdy je obrázek dokumentu špatná volba",
      body: "Vícestránkový dokument: špatný formát. Dokument, který se má tisknout: špatný formát. Dokument, který má být prohledávatelný: špatný formát. Cokoli formálního, co skončí v nějaké složce: špatný formát.",
    },
    {
      title: "Poznej tu malou skupinu případů, kde je obrázek v pořádku",
      body: "Jednostránkové, prchavé, neformální. Rychlá fotka účtenky kamarádovi, screenshot potvrzovací stránky, snímek ručně psané poznámky pro sebe. Obrázek je správný formát ve chvíli, kdy to ještě opravdu není dokument.",
    },
    {
      title: "Převeď pomocí Obrázek do PDF, jakmile se sdílení promění v dokument",
      body: "Obrázek do PDF spojí JPG, PNG a WebP do PDF přímo v prohlížeči. Obrázek se pak později stane prohledávatelným po OCR; zůstává jedním souborem místo mnoha.",
    },
    {
      title: "Použij správný nástroj pro zdroj",
      body: "Fotky → Obrázek do PDF. Naskenované stránky → Naskenovat do PDF. Dokument z Wordu/Pages → Word do PDF. Každý zdrojový formát má svou nejčistší cestu převodu.",
    },
    {
      title: "Vyřeš specificky HEIC z iPhonu",
      body: "iPhone má ve výchozím stavu HEIC, který ne každý příjemce dokáže otevřít. Převeď HEIC → JPG → PDF, nebo použij nástroj, který zvládá HEIC přímo. Skenovací postup v aplikaci PDF Editor zvládá HEIC nativně.",
    },
    {
      title: "Komprimuj s rozmyslem",
      body: "Zkomprimovat PDF, pokud je výsledný soubor obří. Převody fotky na PDF zdědí rozlišení fotky, které bývá vyšší, než dokument skutečně potřebuje.",
    },
  ],
  tips: [
    "JPG dokumentu na výšku pořízený telefonem je špatný formát. Otoč telefon nebo použij skenovací aplikaci – výsledek je dramaticky čitelnější.",
    "PNG screenshoty se dají čistě převést na PDF, ale JPG fotky papírových dokumentů obvykle projdou lépe skrz skenovací aplikaci s detekcí hran.",
    "Neposílej víc JPG jako vícestránkový dokument. Slouč je do jednoho PDF; příjemci ztrácejí přehled ve vláknech s víc přílohami.",
    "HEIC je výchozí na iOS, ale řada webových portálů a e-mailových klientů ho odmítá. Pokud neznáš nastavení příjemce, převeď ho před sdílením.",
    "Fotky obrazovky notebooku jsou nejhorší případ – moaré, odlesk, nízké rozlišení. Místo focení obrazovky použij funkci exportu do PDF.",
  ],
  mobileNote:
    "Telefony jsou místo, kde se chyba s obrázkem dokumentu stává nejčastěji. Skenovací postup v aplikaci PDF Editor detekuje stránky a hned od začátku vyrobí čisté PDF, takže se z rychlého sdílení stane rovnou pořádný dokument bez extra kroku převodu.",
  faq: [
    {
      q: "Proč je fotka dokumentu horší než PDF?",
      a: "Fotky jsou jednostránkové, často zkosené, neprohledávatelné, mohou mít obří velikost souboru a problémy s otočením nebo formátem skrývají obsah. PDF řeší všechno z toho.",
    },
    {
      q: "Je JPG někdy přijatelné pro dokument?",
      a: "Pro jednostránková neformální sdílení ano – rychlá účtenka kamarádovi, screenshot kolegovi. Pro cokoli formálního nebo vícestránkového ne.",
    },
    {
      q: "Co HEIC?",
      a: "Výchozí formát iPhonu, ale ne všude podporovaný. Před sdílením ho převeď na JPG nebo PDF, pokud příjemce nepoužívá zařízení Apple.",
    },
    {
      q: "Jak spojím víc fotek do jednoho PDF?",
      a: "Obrázek do PDF spojí JPG, PNG a WebP do jednoho PDF přímo v prohlížeči. Nastav pořadí před přidáním; výsledné PDF ho zachová.",
    },
    {
      q: "Zvětší PDF soubor?",
      a: "Záleží na zdroji. JPG dokumentu → PDF bez rekomprese je zhruba stejně velké. Zkomprimovat PDF ho zmenší, pokud je potřeba.",
    },
  ],
  related: [
    { label: "Obrázek do PDF — spoj fotky do jednoho souboru", path: "/image-to-pdf" },
    { label: "PDF vs JPG pro dokumenty", path: "/guides/pdf-vs-jpg-for-documents" },
    { label: "Jak převést JPG do PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Jak převést fotky do PDF na iPhonu", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Obrázek do PDF — sloučení fotek do PDF", path: "/image-to-pdf" },
};

export default content;
