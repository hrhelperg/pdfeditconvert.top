import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";

/**
 * Czech route manifest for the guide library.
 *
 * Slugs follow natural Czech search phrasing under the fixed "navody/"
 * section prefix, ASCII-normalized (diacritics stripped). Terminology
 * policy: docs/localization/cs-terminology.md.
 */
export const CS_GUIDE_ROUTES: readonly LocaleRouteEntry[] = [
  {
    id: "guides/how-to-edit-pdf-on-iphone",
    slug: "navody/jak-upravit-pdf-na-iphonu",
    title: "Jak upravit PDF na iPhonu (průvodce 2026)",
    description:
      "Oprav text, přidej obrázky a změň pořadí stránek PDF přímo na iPhonu. Postup krok za krokem s aplikací PDF Editor.",
  },
  {
    id: "guides/how-to-edit-pdf-on-android",
    slug: "navody/jak-upravit-pdf-na-androidu",
    title: "Jak upravit PDF na Androidu (průvodce 2026)",
    description:
      "Uprav PDF na Androidu: změň text, vlož stránky a podepiš dokumenty. Jasný postup krok za krokem s aplikací PDF Editor.",
  },
  {
    id: "guides/how-to-compress-pdf",
    slug: "navody/jak-zkomprimovat-pdf",
    title: "Jak zkomprimovat PDF (bez ztráty kvality)",
    description:
      "Zmenši velikost PDF pro e-mail nebo nahrání bez ztráty kvality. Návod vhodný pro mobil s aplikací PDF Editor.",
  },
  {
    id: "guides/how-to-merge-pdf-files",
    slug: "navody/jak-sloucit-pdf-soubory",
    title: "Jak sloučit PDF soubory na telefonu nebo počítači",
    description:
      "Spoj více PDF do jednoho dokumentu. Mobilní postup krok za krokem s aplikací PDF Editor.",
  },
  {
    id: "guides/how-to-sign-pdf-on-phone",
    slug: "navody/jak-podepsat-pdf-na-telefonu",
    title: "Jak podepsat PDF na telefonu",
    description:
      "Přidej právně platný elektronický podpis do PDF z iPhonu nebo Androidu. Praktický návod s aplikací PDF Editor.",
  },
  {
    id: "guides/how-to-scan-documents-to-pdf",
    slug: "navody/jak-naskenovat-dokumenty-do-pdf",
    title: "Jak naskenovat dokumenty do PDF telefonem",
    description:
      "Naskenuj telefonem vícestránkové dokumenty do čistých PDF. Mobilní postup s automatickým rozpoznáním okrajů a OCR.",
  },
  {
    id: "guides/best-pdf-app-for-students",
    slug: "navody/nejlepsi-pdf-aplikace-pro-studenty",
    title: "Nejlepší PDF aplikace pro studenty (2026)",
    description:
      "Co studenti od PDF aplikace skutečně potřebují: poznámky, zvýrazňování, podpisy a bezplatné převody. Poctivá kritéria hodnocení.",
  },
  {
    id: "guides/best-pdf-app-for-business",
    slug: "navody/nejlepsi-pdf-aplikace-pro-firmy",
    title: "Nejlepší PDF aplikace pro firmy (2026)",
    description:
      "Na co by si malé týmy měly dát pozor u PDF aplikace: podpisy, smlouvy, zabezpečení a spolupráce na mobilu.",
  },
  {
    id: "guides/pdf-vs-docx",
    slug: "navody/pdf-vs-docx-jaky-format-pouzit",
    title: "PDF vs DOCX – jaký formát použít?",
    description:
      "Kdy zvolit PDF místo DOCX a naopak. Přehledné srovnání upravitelnosti, věrnosti zobrazení, podepisování a sdílení.",
  },
  {
    id: "guides/how-to-protect-pdf-file",
    slug: "navody/jak-chranit-pdf-heslem",
    title: "Jak chránit PDF soubor heslem",
    description:
      "Přidej PDF souboru ochranu heslem a šifrování na mobilu i počítači. Praktický návod s aplikací PDF Editor.",
  },
  {
    id: "guides/how-to-convert-pdf-to-word",
    slug: "navody/jak-prevest-pdf-do-wordu",
    title: "Jak převést PDF do Wordu – zdarma, přímo v prohlížeči",
    description:
      "Získej text z PDF do upravitelného dokumentu Word přímo v prohlížeči. Co se převede bez problémů, co bude potřeba doladit a kdy naskenované soubory nefungují.",
  },
  {
    id: "guides/how-to-convert-word-to-pdf",
    slug: "navody/jak-prevest-word-do-pdf",
    title: "Jak převést Word do PDF – zdarma, bez nahrávání",
    description:
      "Proměň soubor .docx nebo .txt v čisté PDF ke sdílení přímo v prohlížeči, bez odesílání na server. Proč je PDF pro odeslání ten správný formát a co zkontrolovat před exportem.",
  },
  {
    id: "guides/how-to-convert-jpg-to-pdf",
    slug: "navody/jak-prevest-jpg-do-pdf",
    title: "Jak převést JPG do PDF – bezplatný převod obrázků",
    description:
      "Spoj jednu nebo více fotek JPG do jednoho PDF přímo v prohlížeči. Ideální pro účtenky, doklady a vyfotografované dokumenty – s upřímnými poznámkami ke kvalitě a formátu HEIC na iPhonu.",
  },
  {
    id: "guides/how-to-convert-png-to-pdf",
    slug: "navody/jak-prevest-png-do-pdf",
    title: "Jak převést PNG do PDF – ostré snímky obrazovky a grafika",
    description:
      "Proměň snímky obrazovky, diagramy a grafiku ve formátu PNG v jedno PDF přímo v prohlížeči. Proč PNG udrží text ostrý a co se stane s průhledností.",
  },
  {
    id: "guides/how-to-convert-webp-to-pdf",
    slug: "navody/jak-prevest-webp-do-pdf",
    title: "Jak převést WebP do PDF – webové obrázky jako dokument",
    description:
      "Proměň obrázky WebP stažené z webu v jedno PDF přímo v prohlížeči. Proč WebP jiné aplikace odmítají a jak převod vyřeší kompatibilitu.",
  },
  {
    id: "guides/how-to-convert-pdf-to-jpg",
    slug: "navody/jak-prevest-pdf-do-jpg",
    title: "Jak převést PDF do JPG – export stránek jako obrázků",
    description:
      "Exportuj stránky PDF jako obrázky JPG přímo v prohlížeči. Kdy je JPG lepší volba než PNG, jak měřítko ovlivňuje kvalitu a kdy je náhled obrázku lepší než PDF.",
  },
  {
    id: "guides/how-to-convert-pdf-to-png",
    slug: "navody/jak-prevest-pdf-do-png",
    title: "Jak převést PDF do PNG – ostré obrázky stránek bez ztráty kvality",
    description:
      "Exportuj stránky PDF jako kvalitní obrázky PNG přímo v prohlížeči. Proč PNG udrží text a diagramy ostré, plus poznámky k měřítku a průhlednosti.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-iphone",
    slug: "navody/jak-prevest-fotky-do-pdf-na-iphonu",
    title: "Jak převést fotky do PDF na iPhonu (řešení formátu HEIC)",
    description:
      "Proměň fotky z iPhonu v jedno PDF – včetně řešení nástrahy formátu HEIC, která leckoho zaskočí. Postup v prohlížeči i rychlejší cesta přímo v aplikaci.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-android",
    slug: "navody/jak-prevest-fotky-do-pdf-na-androidu",
    title: "Jak převést fotky do PDF na Androidu",
    description:
      "Proměň fotky z Androidu v jedno PDF pomocí nástroje v prohlížeči nebo vestavěné funkce Tisk do PDF. Plus rychlejší postup přímo v aplikaci se skenováním.",
  },
  {
    id: "guides/how-to-convert-scanned-documents-to-pdf",
    slug: "navody/jak-prevest-naskenovane-dokumenty-do-pdf",
    title: "Jak převést naskenované dokumenty do PDF",
    description:
      "Máš už obrázky ze skeneru nebo vyfocené papíry? Spoj je v prohlížeči do jednoho PDF – a zjisti, co dělá OCR a proč ho naskenované dokumenty potřebují, aby v nich šlo vyhledávat.",
  },
  {
    id: "guides/how-to-split-pdf-files",
    slug: "navody/jak-rozdelit-pdf-na-soubory",
    title: "Jak rozdělit PDF na samostatné soubory (zdarma)",
    description:
      "Rozděl jedno velké PDF na menší soubory podle rozsahu stránek přímo v prohlížeči. Kdy rozdělit a kdy raději extrahovat stránky a jak přitom zachovat originál v bezpečí.",
  },
  {
    id: "guides/how-to-extract-pages-from-pdf",
    slug: "navody/jak-extrahovat-stranky-z-pdf",
    title: "Jak extrahovat stránky z PDF (zdarma, bez nahrávání)",
    description:
      "Vyjmi konkrétní stránky nebo rozsahy z PDF do nového souboru přímo v prohlížeči, bez odesílání na server. Ideální, když chceš poslat jen stránky, které někdo skutečně potřebuje.",
  },
  {
    id: "guides/how-to-reorder-pdf-pages",
    slug: "navody/jak-zmenit-poradi-stranek-v-pdf",
    title: "Jak změnit pořadí stránek v PDF (zdarma, v prohlížeči)",
    description:
      "Seřaď stránky PDF do správného pořadí přímo v prohlížeči. Oprav sken, který vyšel pozpátku, nebo sloučený soubor, jehož stránky skončily v nesprávném pořadí.",
  },
  {
    id: "guides/how-to-rotate-pdf-pages",
    slug: "navody/jak-otocit-stranky-v-pdf",
    title: "Jak otočit stránky v PDF (zdarma, bez nahrávání)",
    description:
      "Otoč všechny nebo vybrané stránky PDF o 90°, 180° nebo 270° přímo v prohlížeči, bez odesílání na server. Oprav naskenované stránky na šířku nebo vzhůru nohama, aby se dokument dal normálně číst.",
  },
  {
    id: "guides/how-to-add-watermark-to-pdf",
    slug: "navody/jak-pridat-vodoznak-do-pdf",
    title: "Jak přidat vodoznak do PDF (zdarma)",
    description:
      "Otiskni text jako „NÁVRH“ nebo „DŮVĚRNÉ“ na každou stránku PDF přímo v prohlížeči. Co vodoznak skutečně ochrání a co ne, na rovinu.",
  },
  {
    id: "guides/how-to-remove-unwanted-pages-from-pdf",
    slug: "navody/jak-odstranit-nechtene-stranky-z-pdf",
    title: "Jak odstranit nechtěné stránky z PDF",
    description:
      "Zbav se prázdných stránek, titulních listů nebo nepotřebných částí PDF přímo v prohlížeči – necháš jen stránky, které chceš. Čisté soubory, soukromý proces.",
  },
  {
    id: "guides/how-to-organize-pdf-files",
    slug: "navody/jak-organizovat-pdf-soubory",
    title: "Jak organizovat PDF soubory – praktický pracovní postup",
    description:
      "Ukliď si v nepřehledných PDF: slouč související soubory, změň pořadí stránek, zbav se balastu a pojmenuj věci pořádně. Opakovatelný postup s bezplatnými nástroji v prohlížeči.",
  },
  {
    id: "guides/how-to-prepare-pdf-before-sharing",
    slug: "navody/jak-pripravit-pdf-pred-sdilenim",
    title: "Jak připravit PDF před sdílením (checklist)",
    description:
      "Kontrolní seznam před odesláním PDF: odstraň přebytečné stránky, oprav orientaci, zmenši velikost a označ návrhy. Pošli čistý, správně velký a promyšlený dokument.",
  },
  {
    id: "guides/how-to-fix-sideways-pdf-pages",
    slug: "navody/jak-opravit-stranky-pdf-na-bok",
    title: "Jak opravit stránky PDF otočené na bok nebo vzhůru nohama",
    description:
      "Natrvalo narovnej stránky PDF, které se otevírají na bok nebo vzhůru nohama, přímo v prohlížeči. Proč nepomůže otočit displej a co problém skutečně vyřeší.",
  },
  {
    id: "guides/how-to-compress-pdf-online",
    slug: "navody/jak-zkomprimovat-pdf-online-bez-nahravani",
    title: "Jak zkomprimovat PDF online bez nahrávání",
    description:
      "Zmenši PDF přímo v prohlížeči – bez nahrávání na server, bez účtu. Jak se komprese na zařízení liší od typických online nástrojů a jaký je kompromis v kvalitě.",
  },
  {
    id: "guides/how-to-reduce-pdf-file-size-for-email",
    slug: "navody/jak-zmensit-velikost-pdf-pro-email",
    title: "Jak zmenšit velikost PDF pro e-mail",
    description:
      "Dostaň PDF pod limity příloh v Gmailu a Outlooku. Skutečné limity, proč je naskenované dokumenty snadno překročí a jak soubor zmenšit, aby se dal odeslat.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-iphone",
    slug: "navody/jak-zmensit-pdf-na-iphonu",
    title: "Jak zmenšit PDF na iPhonu",
    description:
      "Zmenši PDF na iPhonu pomocí nástroje v prohlížeči nebo aplikace PDF Editor. Proč jsou skeny z iPhonu tak velké a jak je dostat pod limity pro odesílání.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-android",
    slug: "navody/jak-zmensit-pdf-na-androidu",
    title: "Jak zmenšit PDF na Androidu",
    description:
      "Zkomprimuj PDF na jakémkoli Androidu pomocí nástroje v prohlížeči bez instalace, nebo aplikace PDF Editor. Dostaň skeny pod limity pro e-mail a nahrávání.",
  },
  {
    id: "guides/why-is-my-pdf-so-large",
    slug: "navody/proc-je-pdf-tak-velke",
    title: "Proč je moje PDF tak velké? Příčiny a řešení",
    description:
      "Skutečné důvody, proč PDF nabobtná do obřích rozměrů – skeny, vložené fotky, písma a další – a správné řešení pro každý z nich, s bezplatnými nástroji v prohlížeči.",
  },
  {
    id: "guides/compress-pdf-without-losing-too-much-quality",
    slug: "navody/zkomprimovat-pdf-bez-ztraty-kvality",
    title: "Jak zkomprimovat PDF bez velké ztráty kvality",
    description:
      "Najdi rovnováhu mezi velikostí souboru a kvalitou. Jak úrovně komprese vyměňují detail za velikost a jak vybrat tu nejnižší, která ještě funguje.",
  },
  {
    id: "guides/how-to-compress-scanned-pdf",
    slug: "navody/jak-zkomprimovat-naskenovane-pdf",
    title: "Jak zkomprimovat naskenované PDF (velká úspora)",
    description:
      "Naskenovaná PDF se zmenšují nejsnáz a bývají největšími viníky velikosti. Jak je výrazně zkomprimovat a co se přitom stane s prohledávatelným textem.",
  },
  {
    id: "guides/best-pdf-compression-settings",
    slug: "navody/nejlepsi-nastaveni-komprese-pdf",
    title: "Nejlepší nastavení komprese PDF – průvodce rozhodováním",
    description:
      "Jakou úroveň komprese zvolit pro e-mail, tisk, archivaci nebo web? Praktický přehled, který spáruje nastavení s účelem, včetně upřímných kompromisů.",
  },
  {
    id: "guides/how-to-send-large-pdf-files",
    slug: "navody/jak-odeslat-velke-pdf-soubory",
    title: "Jak odeslat velké PDF soubory (5 spolehlivých způsobů)",
    description:
      "Pět spolehlivých způsobů, jak poslat PDF, které je na e-mail příliš velké – komprese, rozdělení, odkaz na cloud a další – a jak si mezi nimi vybrat.",
  },
  {
    id: "guides/how-to-reduce-pdf-size-before-uploading",
    slug: "navody/jak-zmensit-pdf-pred-nahranim",
    title: "Jak zmenšit PDF před nahráním na portál",
    description:
      "Nahrávací portály odmítají velké soubory ještě přísněji než e-mail. Jak dostat PDF pod přísné limity portálu, aniž bys přišel o čitelnost, kterou kontrolují.",
  },
  {
    id: "guides/how-to-sign-pdf-on-iphone",
    slug: "navody/jak-podepsat-pdf-na-iphonu",
    title: "Jak podepsat PDF na iPhonu (průvodce 2026)",
    description:
      "Podepiš PDF na iPhonu pomocí nástroje Markup nebo aplikace PDF Editor. Limity vestavěného řešení a kdy je lepší volbou samostatná aplikace na podepisování.",
  },
  {
    id: "guides/how-to-sign-pdf-on-android",
    slug: "navody/jak-podepsat-pdf-na-androidu",
    title: "Jak podepsat PDF na Androidu (průvodce 2026)",
    description:
      "Podepiš PDF na Androidu, kde neexistuje jednotný vestavěný nástroj na podepisování. Spolehlivá cesta přes aplikaci, různé možnosti podle výrobce telefonu a právní základy.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-phone",
    slug: "navody/jak-vyplnit-pdf-formulare-na-telefonu",
    title: "Jak vyplnit formuláře PDF na telefonu",
    description:
      "Vyplň formuláře PDF na iPhonu i Androidu, ať už mají skutečná pole formuláře, nebo jde o neinteraktivní sken. Klepni a piš, přidej textová pole a podepiš na jednom místě.",
  },
  {
    id: "guides/how-to-annotate-pdf-on-mobile",
    slug: "navody/jak-anotovat-pdf-na-mobilu",
    title: "Jak psát poznámky do PDF na mobilu",
    description:
      "Zvýrazňuj, komentuj a kresli do PDF z telefonu nebo tabletu. Nástroje pro poznámky, na kterých skutečně záleží, a jak udržet zápisky čitelné.",
  },
  {
    id: "guides/how-to-manage-pdfs-on-phone",
    slug: "navody/jak-spravovat-pdf-v-telefonu",
    title: "Jak spravovat PDF v telefonu",
    description:
      "Nedovol, aby se PDF v telefonu proměnila v chaos: přejmenuj je, roztřiď do složek, synchronizuj do cloudu a uvolni úložiště. Praktická rutina údržby.",
  },
  {
    id: "guides/how-to-create-pdf-from-camera",
    slug: "navody/jak-vytvorit-pdf-z-fotoaparatu",
    title: "Jak vytvořit PDF z fotoaparátu",
    description:
      "Proměň fotku z fotoaparátu v PDF – a zjisti, proč pořádný sken předčí obyčejnou fotku. Rychlé zachycení účtenek a tabulí, skenování pro dokumenty.",
  },
  {
    id: "guides/how-to-share-pdf-from-phone",
    slug: "navody/jak-sdilet-pdf-z-telefonu",
    title: "Jak sdílet PDF z telefonu",
    description:
      "Sdílej PDF z iPhonu nebo Androidu správně – e-mailem, přes AirDrop, zprávou nebo odkazem – a nauč se soubor připravit a zmenšit tak, aby doopravdy dorazil.",
  },
  {
    id: "guides/best-pdf-tools-for-students",
    slug: "navody/nejlepsi-pdf-nastroje-pro-studenty",
    title: "Nejlepší bezplatné PDF nástroje pro studenty (2026)",
    description:
      "Bezplatné PDF nástroje bez registrace, které pokryjí skutečné potřeby studenta – slučování podkladů, komprese odevzdávaných prací, převody a psaní poznámek – bez placené verze.",
  },
  {
    id: "guides/best-pdf-workflow-for-freelancers",
    slug: "navody/pdf-pracovni-postup-pro-freelancery",
    title: "Nejlepší pracovní postup s PDF pro freelancery",
    description:
      "Opakovatelný pracovní postup s PDF pro freelancery: nabídka ven, smlouva podepsaná, faktura odeslaná. Bezplatné nástroje a mobilní aplikace, díky kterým je to rychlé a soukromé.",
  },
  {
    id: "guides/best-pdf-tools-for-small-business",
    slug: "navody/nejlepsi-pdf-nastroje-pro-male-firmy",
    title: "Nejlepší bezplatné PDF nástroje pro malé firmy",
    description:
      "Faktury, smlouvy i evidenci zvládneš na bezplatných a soukromých PDF nástrojích – bez předplatného na uživatele. Který nástroj na kterou úlohu a kde se hodí aplikace.",
  },
  {
    id: "guides/pdf-vs-jpg-for-documents",
    slug: "navody/pdf-vs-jpg-pro-dokumenty",
    title: "PDF vs JPG pro dokumenty – přestaň posílat fotky",
    description:
      "Proč je fotka dokumentu ve formátu JPG špatná volba k odeslání, kdy je správně PDF a jak fotku převést na pořádný dokument.",
  },
  {
    id: "guides/when-to-use-pdf-instead-of-docx",
    slug: "navody/kdy-pouzit-pdf-misto-docx",
    title: "Kdy použít PDF místo DOCX (checklist)",
    description:
      "Máš dokument ve Wordu – poslat ho radši jako PDF? Rychlý kontrolní seznam chvil, kdy je PDF správná volba, a jak na převod.",
  },
  {
    id: "guides/browser-based-pdf-tools-vs-upload-tools",
    slug: "navody/pdf-nastroje-v-prohlizeci-vs-s-nahravanim",
    title: "PDF nástroje v prohlížeči vs nástroje s nahráváním na server",
    description:
      "Ne všechny „online“ PDF nástroje jsou stejné. Rozdíl mezi nástroji, které běží přímo v prohlížeči, a těmi, které tvůj soubor nahrají na server – a jak je od sebe poznat.",
  },
  {
    id: "guides/privacy-first-pdf-tools",
    slug: "navody/pdf-nastroje-s-durazem-na-soukromi",
    title: "PDF nástroje s důrazem na soukromí – dokumenty zůstanou v zařízení",
    description:
      "PDF často obsahují jedny z tvých nejcitlivějších dat. Jak s nimi pracovat bez nahrávání čehokoli na server a co „důraz na soukromí“ ve skutečnosti znamená.",
  },
  {
    id: "guides/common-pdf-mistakes-to-avoid",
    slug: "navody/caste-chyby-s-pdf",
    title: "Časté chyby s PDF, kterým se vyhnout",
    description:
      "Chyby s PDF, které stojí čas nebo unikají citlivé informace – přehnaná komprese, posílání fotek, nahrávání citlivých souborů na neznámé weby, zapomenuté stránky – a jak se jim vyhnout.",
  },
  {
    id: "guides/why-wont-my-pdf-open",
    slug: "navody/proc-se-neotevre-pdf",
    title: "Proč se mi neotevře PDF? Příčiny a praktická řešení",
    description:
      "PDF, které se odmítá otevřít, má skoro vždy jednu z pěti příčin. Jak rozpoznat poškozené stažení, zámek heslem, chybu prohlížeče nebo zastaralý soubor – a co na každou z nich zabírá.",
  },
  {
    id: "guides/why-is-my-pdf-blank",
    slug: "navody/proc-je-pdf-prazdne",
    title: "Proč je moje PDF prázdné? Skutečné příčiny a jak ho obnovit",
    description:
      "Když se PDF otevře s prázdnými stránkami, obsah tam většinou pořád je – jen ho skrývá chyba vykreslení, chybějící písmo nebo chyba skenu. Jak zjistit, co se stalo, a dokument obnovit.",
  },
  {
    id: "guides/why-cant-i-edit-a-pdf",
    slug: "navody/proc-nemuzu-upravit-pdf",
    title: "Proč nemůžu upravit PDF? Skutečné důvody a co pomáhá",
    description:
      "PDF byl navržen tak, aby se úpravám bránil, ale konkrétní věci – skeny, bezpečnostní příznaky, limity prohlížeče – dělají některé soubory těžší než jiné. Co blokuje ten tvůj a co skutečně funguje.",
  },
  {
    id: "guides/why-is-my-pdf-blurry",
    slug: "navody/proc-je-pdf-rozmazane",
    title: "Proč je moje PDF rozmazané? Rozlišení, komprese a chyby skenu",
    description:
      "Rozmazané PDF vzniká kvůli nízkému rozlišení skenu, agresivní kompresi nebo špatnému exportu – ne kvůli samotnému formátu. Jak zjistit, o kterou příčinu jde, a jak vrátit ostrost.",
  },
  {
    id: "guides/how-to-fix-a-corrupted-pdf",
    slug: "navody/jak-opravit-poskozene-pdf",
    title: "Jak opravit poškozené PDF (co skutečně funguje)",
    description:
      "Většina „poškozených“ PDF ve skutečnosti poškozená není – jde o přerušené stažení, neshodu prohlížečů nebo neúplný zápis. Upřímný kontrolní seznam řešení, která soubor zachrání, a kdy je opravdu ztracený.",
  },
  {
    id: "guides/how-to-fix-pdf-printing-issues",
    slug: "navody/problemy-s-tiskem-pdf",
    title: "Jak vyřešit problémy s tiskem PDF (oříznuté stránky, špatná velikost, chybějící text)",
    description:
      "Když se PDF vytiskne oříznuté, ve špatném měřítku nebo s chybějícím textem, řešení závisí na příznaku. Krátký přehled, který spáruje každý problém s tiskem se správným nastavením nebo úpravou před tiskem.",
  },
  {
    id: "guides/how-to-fix-pdf-upload-errors",
    slug: "navody/chyby-pri-nahravani-pdf",
    title: "Jak vyřešit chyby při nahrávání PDF (příliš velké, odmítnuté, zaseklé)",
    description:
      "Portály odmítají PDF z pár typických důvodů: velikost souboru, počet stránek, přísnost formátu nebo nestabilní nahrávání. Jak zjistit, který z nich tě potkal, a dostat soubor přijatý napodruhé.",
  },
  {
    id: "guides/how-to-fix-pdf-formatting-problems",
    slug: "navody/problemy-s-formatovanim-pdf",
    title: "Jak vyřešit problémy s formátováním PDF (zalamování, okraje, mezery)",
    description:
      "Když rozvržení PDF vypadá rozbité – přeteklý text, posunuté okraje, pomíchané mezery – řešení obvykle leží ve zdrojovém dokumentu, ne v PDF. Nejčistší postup, jak dosáhnout hezky vypadajícího exportu.",
  },
  {
    id: "guides/how-to-fix-scanned-pdf-quality",
    slug: "navody/kvalita-naskenovaneho-pdf",
    title: "Jak zlepšit kvalitu naskenovaného PDF (doostřit, narovnat, opravit barvy)",
    description:
      "Naskenovaná PDF selhávají předvídatelně: našikmo, vybledlý kontrast, tečkované pozadí, obří soubory. Úpravy před skenováním i nástroje po naskenování, které je skutečně vyčistí.",
  },
  {
    id: "guides/how-to-fix-pdf-font-issues",
    slug: "navody/problemy-s-pismem-v-pdf",
    title: "Jak vyřešit problémy s písmem v PDF (chybějící, nahrazené, poškozené)",
    description:
      "Když PDF zobrazuje špatné písmo, čtverečky místo znaků nebo nahrazený text, obvykle mu chybí vložené písmo. Jak vkládání písem funguje a co změnit už při exportu.",
  },
  {
    id: "guides/best-pdf-tools-for-remote-work",
    slug: "navody/pdf-nastroje-pro-praci-na-dalku",
    title: "Nejlepší PDF nástroje pro práci na dálku (zdarma, v prohlížeči)",
    description:
      "PDF nástroje, které obstojí, i když je tvou kanceláří notebook a telefon – podepisování, komprese, slučování, skenování, sdílení – bez instalace a bez licencí na uživatele.",
  },
  {
    id: "guides/best-pdf-tools-for-office-documents",
    slug: "navody/pdf-nastroje-pro-firemni-dokumenty",
    title: "Nejlepší PDF nástroje pro firemní dokumenty (Word, Excel, reporty)",
    description:
      "Sada PDF nástrojů, kterou kancelářská práce skutečně potřebuje: čistý převod mezi Wordem a PDF oběma směry, slučování více dokumentů, změna pořadí stránek a spolehlivá komprese pro e-mailové přílohy.",
  },
  {
    id: "guides/best-pdf-workflow-for-teams",
    slug: "navody/pdf-pracovni-postup-pro-tymy",
    title: "Nejlepší pracovní postup s PDF pro týmy (sdílené soubory, revize, schvalování)",
    description:
      "Jak malé týmy posouvají dokumenty dál bez placeného předplatného na PDF: opakovatelné předávání návrhů, revizí a podepsaných schválení pomocí bezplatných nástrojů v prohlížeči.",
  },
  {
    id: "guides/how-to-share-pdfs-with-clients",
    slug: "navody/jak-sdilet-pdf-s-klienty",
    title: "Jak sdílet PDF s klienty (profesionálně a soukromě)",
    description:
      "Stručný postup pro posílání PDF klientům – správná velikost pro e-mail, volba hesla, branding souboru, potvrzení doručení – bez nahrávání čehokoli na servery třetích stran.",
  },
  {
    id: "guides/how-to-prepare-pdf-for-business-use",
    slug: "navody/jak-pripravit-pdf-pro-firemni-pouziti",
    title: "Jak připravit PDF pro firemní použití (checklist úprav)",
    description:
      "Než PDF opustí firmu: odstraň návrhy, zkontroluj číslování stránek, oprav orientaci, vlož písma a zmenši soubor. Kontrolní seznam před odesláním dokumentů, které reprezentují tvou firmu.",
  },
  {
    id: "guides/how-to-send-contracts-as-pdf",
    slug: "navody/jak-poslat-smlouvu-jako-pdf",
    title: "Jak posílat smlouvy jako PDF (podepsat, zamknout, doručit)",
    description:
      "Smlouvy vyžadují přísnější postup s PDF: uzamčení obsahu, připojení podpisu, označení návrhů vodoznakem a finální soubor, který druhá strana bez zbytečného pinkání spolupodepíše.",
  },
  {
    id: "guides/how-to-organize-work-documents-as-pdf",
    slug: "navody/jak-organizovat-pracovni-pdf",
    title: "Jak organizovat pracovní dokumenty jako PDF (složky, názvy, verze)",
    description:
      "Praktická konvence pojmenování a složek pro pracovní PDF – nabídky, zadání, výstupy, archivy – která zamezí zmatku ve verzích a umožní komukoli rychle cokoli najít.",
  },
  {
    id: "guides/how-to-manage-invoices-as-pdf",
    slug: "navody/jak-spravovat-faktury-jako-pdf",
    title: "Jak spravovat faktury jako PDF (vystavit, sledovat, archivovat)",
    description:
      "Postup pro fakturaci v PDF, který nepotřebuje účetní software: vytvoření, číslování, odeslání, sledování a archivace – jen s bezplatnými nástroji v prohlížeči a přehledným systémem složek.",
  },
  {
    id: "guides/how-to-create-client-ready-pdf-files",
    slug: "navody/pdf-pripravene-pro-klienta",
    title: "Jak vytvořit PDF soubory připravené pro klienta (upravené, na značku)",
    description:
      "Co odlišuje interní PDF od toho, které je připravené pro klienta: titulní strana, číslování stránek, branding, velikost souboru, název souboru. Rychlé doladění, díky kterému dokument působí hotově.",
  },
  {
    id: "guides/pdf-workflows-for-small-business",
    slug: "navody/pdf-postupy-pro-male-firmy",
    title: "Pracovní postupy s PDF pro malé firmy (nabídky, smlouvy, evidence)",
    description:
      "Jak malá firma řídí tok dokumentů v PDF – nabídka ven, smlouva zpátky, evidence archivovaná – bez nákupu balíčku předplatných.",
  },
  {
    id: "guides/pdf-workflows-for-consultants",
    slug: "navody/pdf-postupy-pro-konzultanty",
    title: "Pracovní postupy s PDF pro konzultanty (nabídky, reporty, faktury)",
    description:
      "Rytmus konzultanta s PDF: nabídky, které uzavřou obchod, reporty, které se dobře čtou na telefonu, faktury odeslané během pár vteřin. Nástroje v prohlížeči, díky kterým to zůstane jednoduché.",
  },
  {
    id: "guides/pdf-workflows-for-agencies",
    slug: "navody/pdf-postupy-pro-agentury",
    title: "Pracovní postupy s PDF pro agentury (prezentace, zadání, schvalování)",
    description:
      "Řetězec agentury v PDF – prezentace pro klienta, kreativní zadání, klientská schválení, výstupy – udržovaný rychlý a předvídatelný pomocí bezplatných, soukromých nástrojů v prohlížeči.",
  },
  {
    id: "guides/how-to-submit-homework-as-pdf",
    slug: "navody/jak-odevzdat-ukol-jako-pdf",
    title: "Jak odevzdat domácí úkol jako PDF (bez dramatu s portálem)",
    description:
      "Školní portály odmítají domácí úkoly ze stejných důvodů dokola – velikost souboru, počet stránek, formát. Nejjednodušší cesta od hotového úkolu k úspěšně nahranému PDF.",
  },
  {
    id: "guides/how-to-scan-notes-to-pdf",
    slug: "navody/jak-naskenovat-poznamky-do-pdf",
    title: "Jak naskenovat ručně psané poznámky do PDF (čisté, prohledávatelné)",
    description:
      "Proměň stránky ručně psaných poznámek z přednášek ve vícestránkové PDF pomocí fotoaparátu telefonu. Nastavení, díky kterým sken vyjde čitelný už napoprvé.",
  },
  {
    id: "guides/how-to-compress-pdf-for-school-portals",
    slug: "navody/jak-zkomprimovat-pdf-pro-skolni-portaly",
    title: "Jak zkomprimovat PDF pro školní portály (přísné limity)",
    description:
      "Nahrávací portály škol a univerzit omezují velikost PDF ještě přísněji než e-mail. Jak zkomprimovat úkoly, aby se vešly, aniž bys zničil čitelnost, kterou hodnotitel kontroluje.",
  },
  {
    id: "guides/how-to-convert-lecture-notes-to-pdf",
    slug: "navody/jak-prevest-poznamky-z-prednasek-do-pdf",
    title: "Jak převést poznámky z přednášek do PDF (Word, fotky, prezentace)",
    description:
      "Poznámky z přednášek přicházejí v každém možném formátu – dokument Wordu, prezentace, snímek obrazovky, fotka tabule. Jak z každého z nich udělat jedno čitelné PDF beze ztráty struktury.",
  },
  {
    id: "guides/how-to-organize-study-materials-as-pdf",
    slug: "navody/jak-organizovat-studijni-materialy",
    title: "Jak organizovat studijní materiály jako PDF (složky, názvy, rejstřík)",
    description:
      "PDF z kurzů se hromadí rychle. Jednoduchá konvence pro složky, pojmenování a slučování, díky které zůstanou materiály za semestr prohledávatelné od prvního týdne až po zkoušky.",
  },
  {
    id: "guides/how-to-share-study-notes-as-pdf",
    slug: "navody/jak-sdilet-studijni-poznamky-jako-pdf",
    title: "Jak sdílet studijní poznámky jako PDF (skupina, chat, cloud)",
    description:
      "Sdílej poznámky se studijní skupinou, aniž bys přišel o formátování nebo přehled o verzích. Návyky s PDF, díky kterým se společné studium nezvrhne v chaos screenshotů.",
  },
  {
    id: "guides/how-to-edit-class-documents-as-pdf",
    slug: "navody/jak-upravovat-skolni-dokumenty-jako-pdf",
    title: "Jak upravovat školní dokumenty jako PDF (poznámky, zvýraznění, podpis)",
    description:
      "Podklady z výuky, zadání úloh a souhlasy od rodičů často přicházejí jako PDF. Jak do nich zapisovat, vyplnit je a vrátit zpět bez tisku – vše na telefonu nebo notebooku.",
  },
  {
    id: "guides/pdf-workflow-for-university-students",
    slug: "navody/pdf-postup-pro-vysokoskolaky",
    title: "Pracovní postup s PDF pro vysokoškoláky (poznámky, úkoly, odevzdávání)",
    description:
      "Semestrální rytmus s PDF, který přežije i zkouškové: naskenované poznámky z přednášek, odevzdané úkoly, sdílené studijní materiály. Bezplatně a přímo v prohlížeči.",
  },
  {
    id: "guides/how-to-create-digital-study-pdfs",
    slug: "navody/jak-vytvorit-digitalni-studijni-pdf",
    title: "Jak vytvořit digitální studijní PDF (kartičky, shrnutí, balíčky)",
    description:
      "Vytvoř si vlastní studijní PDF z poznámek, prezentací a zvýrazněných pasáží – prohledávatelné, přenosné, připravené na psaní poznámek v tabletu. Struktura, díky které jsou u zkoušky skutečně k užitku.",
  },
  {
    id: "guides/are-online-pdf-tools-safe",
    slug: "navody/jsou-online-pdf-nastroje-bezpecne",
    title: "Jsou online PDF nástroje bezpečné? Upřímný pohled na rizika",
    description:
      "Většina „online“ PDF nástrojů nahraje tvůj soubor na server. Některé to nedělají. Skutečná rizika, kategorie nástrojů, které pracují s daty odlišně, a jak je od sebe rozeznat.",
  },
  {
    id: "guides/how-to-protect-sensitive-pdf-files",
    slug: "navody/jak-chranit-citlive-pdf-soubory",
    title: "Jak chránit citlivé PDF soubory (úložiště, sdílení, životní cyklus)",
    description:
      "Citlivá PDF potřebují ochranu ve třech bodech: při uložení, při sdílení a poté, co s nimi příjemce skončí. Praktický postup, který pokryje všechny tři.",
  },
  {
    id: "guides/how-to-share-pdf-files-privately",
    slug: "navody/jak-sdilet-pdf-soukrome",
    title: "Jak sdílet PDF soubory soukromě (bez nahrávání cizím webům)",
    description:
      "Soukromý způsob sdílení PDF nevede přes veřejný web s „PDF nástroji“. Kanály, díky kterým dokument zůstane jen mezi tebou a příjemcem, s rozumným výchozím nastavením.",
  },
  {
    id: "guides/privacy-first-document-workflows",
    slug: "navody/pracovni-postup-s-dokumenty-bez-nahravani",
    title: "Pracovní postupy s dokumenty s důrazem na soukromí (od začátku do konce bez nahrávání)",
    description:
      "Celý pracovní postup s dokumenty – pořízení, úprava, podpis, odeslání, archivace – který drží soubory na tvých zařízeních a mimo servery třetích stran. Reálná podoba a konkrétní nástroje.",
  },
  {
    id: "guides/local-browser-pdf-processing-explained",
    slug: "navody/lokalni-zpracovani-pdf-v-prohlizeci",
    title: "Jak funguje lokální zpracování PDF v prohlížeči",
    description:
      "Jak může PDF nástroj běžet v prohlížeči, aniž by tvůj soubor kamkoli posílal. Technologie, kompromisy a jak si ověřit, že nástroj je opravdu lokální.",
  },
  {
    id: "guides/do-online-pdf-tools-store-files",
    slug: "navody/ukladaji-si-online-pdf-nastroje-soubory",
    title: "Ukládají si online PDF nástroje tvé soubory? Co zkontrolovat",
    description:
      "Některé online PDF nástroje smažou nahrané soubory okamžitě, jiné je drží hodiny a některé napořád. Jak rychle přečíst zásady ochrany osobních údajů a na co se zaměřit.",
  },
  {
    id: "guides/how-to-avoid-uploading-sensitive-documents",
    slug: "navody/jak-se-vyhnout-nahravani-citlivych-dokumentu",
    title: "Jak se vyhnout nahrávání citlivých dokumentů (praktické alternativy)",
    description:
      "Když tě postup láká nahrát citlivé PDF na server, skoro vždy existuje alternativa, která zůstane jen v zařízení. Kategorie úloh a nástroj bez nahrávání pro každou z nich.",
  },
  {
    id: "guides/secure-pdf-workflows-for-business",
    slug: "navody/zabezpecene-pdf-postupy-pro-firmy",
    title: "Zabezpečené pracovní postupy s PDF pro firmy (bez enterprise řešení)",
    description:
      "Malá firma nepotřebuje trezor na PDF s certifikací SOC 2, aby fungovala bezpečně. Reálný základ – šifrované úložiště, podepsané přenosy, lokální zpracování – který odpovídá skutečnému riziku.",
  },
  {
    id: "guides/browser-based-document-processing-benefits",
    slug: "navody/vyhody-zpracovani-dokumentu-v-prohlizeci",
    title: "Výhody zpracování dokumentů v prohlížeči (rychlost, soukromí, cena)",
    description:
      "Proč zpracování PDF v prohlížeči mění poměr rychlosti, soukromí a ceny oproti klasickým cloudovým nástrojům a kde skutečně leží limity lokálního zpracování.",
  },
  {
    id: "guides/pdf-vs-google-docs",
    slug: "navody/pdf-vs-google-docs",
    title: "PDF vs Google Docs – kdy použít který (úpravy, sdílení, uzamčení)",
    description:
      "Google Docs je na spolupráci, PDF na doručení výsledku. Reálný návod, kdy použít který, a jak mezi nimi čistě převádět ve správnou chvíli.",
  },
  {
    id: "guides/pdf-vs-docx-for-business",
    slug: "navody/pdf-vs-docx-pro-firmy",
    title: "PDF vs DOCX pro firmy (smlouvy, reporty, distribuce)",
    description:
      "Proč firemní dokumenty skoro vždy odcházejí ven jako PDF, ale žijí jako DOCX. Správný nástroj pro každou fázi života smlouvy, reportu nebo faktury.",
  },
  {
    id: "guides/pdf-vs-images-for-sharing-documents",
    slug: "navody/pdf-vs-obrazky-pro-sdileni-dokumentu",
    title: "PDF vs obrázky pro sdílení dokumentů (JPG, PNG, HEIC)",
    description:
      "Kdy je fotka nebo obrázek dokumentu ve formátu JPG, PNG nebo HEIC špatná volba – a co dělá z PDF ten správný formát pro cokoli víc než rychlý snímek obrazovky.",
  },
  {
    id: "guides/pdf-vs-png",
    slug: "navody/pdf-vs-png",
    title: "PDF vs PNG – vícestránkové dokumenty vs jednotlivé ostré obrázky",
    description:
      "Pro vícestránkové dokumenty vyhrává PDF, pro jednotlivé ostré obrázky s průhledným pozadím zase PNG. Jasná pravidla a převod mezi oběma formáty.",
  },
  {
    id: "guides/best-format-for-sharing-documents",
    slug: "navody/nejlepsi-format-pro-sdileni-dokumentu",
    title: "Nejlepší formát pro sdílení dokumentů (PDF, DOCX, obrázky ve srovnání)",
    description:
      "Kdy je PDF ten správný formát ke sdílení, kdy ne, a jak si reálné alternativy (DOCX, obrázky, HTML, Markdown) skutečně stojí v běžných situacích.",
  },
  {
    id: "guides/why-pdf-is-still-popular",
    slug: "navody/proc-je-pdf-porad-vychozi-format",
    title: "Proč je PDF pořád výchozím formátem pro dokumenty v roce 2026",
    description:
      "Po desetiletích PDF pořád vládne sdílení dokumentů. Důvody, proč vydrželo – věrnost zobrazení, univerzálnost, možnost podepisování, vhodnost pro archivaci – a kde jsou jeho slabiny.",
  },
  {
    id: "guides/when-to-use-scanned-pdf",
    slug: "navody/kdy-pouzit-naskenovane-pdf",
    title: "Kdy použít naskenované PDF (a kdy ne)",
    description:
      "Naskenované PDF řeší konkrétní problém – převod papíru do digitální podoby. Zároveň jsou větší, hůř prohledávatelná a hůř se upravují. Kdy se ten kompromis vyplatí.",
  },
  {
    id: "guides/editable-pdf-vs-flat-pdf",
    slug: "navody/upravitelne-pdf-vs-pdf-jako-obrazek",
    title: "Upravitelné PDF vs PDF jako obrázek – v čem je skutečný rozdíl",
    description:
      "Některá PDF mají skutečný vybratelný text a upravitelnou strukturu, jiná jsou jen obrázky stránek bez textové vrstvy. Jak poznat, které máš, a kdy je vhodné které.",
  },
  {
    id: "guides/best-free-pdf-tools",
    slug: "navody/nejlepsi-bezplatne-pdf-nastroje-2026",
    title: "Nejlepší bezplatné PDF nástroje v roce 2026 (upřímný výběr bez registrace)",
    description:
      "Bezplatné PDF nástroje, které stojí za používání – komprese, slučování, podepisování, převody, skenování – vybrané podle skutečné kvality a soukromí, ne podle počtu reklam nebo délky zkušební verze.",
  },
  {
    id: "guides/free-browser-based-pdf-tools",
    slug: "navody/bezplatne-pdf-nastroje-v-prohlizeci",
    title: "Bezplatné PDF nástroje v prohlížeči (bez instalace, bez nahrávání)",
    description:
      "PDF nástroje, které běží celé přímo v prohlížeči – bez instalace, bez účtu, bez nahrávání na server. Co je k dispozici, co pokrývají a jak si ověřit, že běží opravdu lokálně.",
  },
  {
    id: "guides/best-pdf-tools-without-upload",
    slug: "navody/pdf-nastroje-bez-nahravani",
    title: "Nejlepší PDF nástroje bez nahrávání (soubory zůstanou v zařízení)",
    description:
      "Když nechceš, aby PDF opustilo tvé zařízení, tohle jsou nástroje, které pracují lokálně. Komprese, slučování, převody – a soubory přitom zůstávají v počítači.",
  },
  {
    id: "guides/best-private-pdf-tools",
    slug: "navody/nejlepsi-soukrome-pdf-nastroje",
    title: "Nejlepší soukromé PDF nástroje (když na důvěrnosti opravdu záleží)",
    description:
      "Pro smlouvy, finanční záznamy a další citlivá PDF jsou tohle nástroje, které respektují soukromí už svou konstrukcí – ne jen prohlášením v zásadách.",
  },
  {
    id: "guides/free-pdf-tools-for-iphone",
    slug: "navody/bezplatne-pdf-nastroje-pro-iphone",
    title: "Bezplatné PDF nástroje pro iPhone (výběr z prohlížeče i aplikací)",
    description:
      "Bezplatné PDF nástroje pro iPhone, které skutečně fungují bez předplatného – komprese, podepisování, skenování, převody. Nástroje v prohlížeči i aplikace PDF Editor pro práci bez připojení.",
  },
  {
    id: "guides/free-pdf-tools-for-android",
    slug: "navody/bezplatne-pdf-nastroje-pro-android",
    title: "Bezplatné PDF nástroje pro Android (výběr z prohlížeče i aplikací)",
    description:
      "Bezplatné PDF nástroje pro Android vybrané pro každodenní úlohy – komprese, podepisování, skenování, převody. Postupy v mobilním prohlížeči i aplikace PDF Editor pro práci bez připojení.",
  },
  {
    id: "guides/what-is-a-pdf-form",
    slug: "navody/co-je-pdf-formular",
    title: "Co je formulář PDF? Interaktivní vs neinteraktivní formuláře",
    description:
      "Formulář PDF je dokument navržený tak, aby sbíral odpovědi – někdy má skutečná pole, do kterých píšeš, jindy je to neinteraktivní stránka, na kterou jen dopisuješ. Co to znamená a jak to poznat.",
  },
  {
    id: "guides/editable-pdf-vs-fillable-pdf",
    slug: "navody/upravitelne-pdf-vs-vyplnitelne-pdf",
    title: "Upravitelné PDF vs vyplnitelné PDF – v čem je rozdíl?",
    description:
      "Úprava PDF mění jeho obsah, vyplnění PDF znamená zadání odpovědí do polí formuláře. Proč jde o dvě různé úlohy a kterou z nich vlastně potřebuješ.",
  },
  {
    id: "guides/how-pdf-forms-work",
    slug: "navody/jak-funguji-pdf-formulare",
    title: "Jak fungují formuláře PDF – pole, AcroForms a neinteraktivní skeny",
    description:
      "Formulář PDF je uvnitř buď sada interaktivních polí položených na stránce, nebo neinteraktivní obrázek bez jediného pole. Jak je každý z nich postavený a proč na tom záleží při vyplňování.",
  },
  {
    id: "guides/can-you-edit-a-pdf-form",
    slug: "navody/da-se-upravit-pdf-formular",
    title: "Dá se upravit formulář PDF? Co lze a co nelze změnit",
    description:
      "Úprava otázek ve formuláři PDF je něco jiného než jeho vyplnění. Co jde upravit, co je uzamčené a jak změnit formulář, který máš jen jako hotové PDF.",
  },
  {
    id: "guides/how-to-fill-out-a-pdf-form",
    slug: "navody/jak-vyplnit-pdf-formular",
    title: "Jak vyplnit formulář PDF (interaktivní i neinteraktivní)",
    description:
      "Vyplň jakýkoli formulář PDF, ať má skutečná pole, nebo je to neinteraktivní sken, na který jen dopisuješ. Kompletní postup pro počítač i telefon, včetně podepsání a uložení.",
  },
  {
    id: "guides/how-to-save-a-filled-pdf-form",
    slug: "navody/jak-ulozit-vyplneny-pdf-formular",
    title: "Jak uložit vyplněný formulář PDF, aby odpovědi zůstaly",
    description:
      "Vyplníš formulář a odpovědi ti pak zmizí? Jak spolehlivě uložit vyplněná data formuláře, proč to některé prohlížeče neumí a kdy formulář před odesláním zafixovat.",
  },
  {
    id: "guides/why-cant-i-type-in-a-pdf-form",
    slug: "navody/proc-nemuzu-psat-do-pdf-formulare",
    title: "Proč nemůžu psát do formuláře PDF? Příčiny a řešení",
    description:
      "Klikneš na pole a nic se nestane. Tři obvyklé příčiny – neinteraktivní formulář, špatný prohlížeč, nebo uzamčený soubor – a přesně co udělat s každou z nich.",
  },
  {
    id: "guides/how-to-create-a-fillable-pdf",
    slug: "navody/jak-vytvorit-vyplnitelne-pdf",
    title: "Jak vytvořit vyplnitelné PDF – poctivé možnosti a jejich limity",
    description:
      "Co je skutečně potřeba k tomu, aby lidé mohli PDF vyplnit – interaktivní pole, nebo jednoduchá neinteraktivní šablona – a který přístup se hodí k nástrojům, které máš po ruce.",
  },
  {
    id: "guides/how-to-share-a-pdf-form",
    slug: "navody/jak-sdilet-pdf-formular",
    title: "Jak sdílet formulář PDF, aby ho ostatní mohli vyplnit",
    description:
      "Poslat prázdný formulář k vyplnění je něco jiného než poslat hotový dokument. Jak formulář sdílet tak, aby ho příjemci skutečně mohli vyplnit, a jak pak sesbírat výsledky.",
  },
  {
    id: "guides/how-to-print-a-filled-pdf-form",
    slug: "navody/jak-vytisknout-vyplneny-pdf-formular",
    title: "Jak vytisknout vyplněný formulář PDF se všemi odpověďmi",
    description:
      "Vytiskl jsi formulář a pole vyšla prázdná? Proč se vyplněné hodnoty někdy netisknou a jak dosáhnout čisté papírové kopie, na které je vidět každá odpověď.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-iphone",
    slug: "navody/jak-vyplnit-pdf-formulare-na-iphonu",
    title: "Jak vyplnit formuláře PDF na iPhonu (Files, Markup a aplikace)",
    description:
      "Vyplň interaktivní i neinteraktivní formuláře PDF na iPhonu – pomocí aplikace Files a nástroje Markup, nebo specializované PDF aplikace. Postup specifický pro iOS, cesta přes nabídku sdílení a kde Markup nestačí.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-android",
    slug: "navody/jak-vyplnit-pdf-formulare-na-androidu",
    title: "Jak vyplnit formuláře PDF na Androidu (na jakémkoli telefonu)",
    description:
      "Vyplň interaktivní i neinteraktivní formuláře PDF na Androidu. Proč vestavěná prohlížečka často neumí psát do polí, spolehlivá cesta přes aplikaci a jak se rozdíly mezi výrobci telefonů projeví na formulářích.",
  },
  {
    id: "guides/how-to-send-a-completed-pdf-form",
    slug: "navody/jak-odeslat-vyplneny-pdf-formular",
    title: "Jak odeslat vyplněný formulář PDF (zafixovat a doručit)",
    description:
      "Formulář máš vyplněný – teď ho vrať čistě. Jak ho zafixovat, aby se odpovědi nedaly změnit, jak ho správně přiložit a jak si potvrdit, že dorazil bez ztráty dat.",
  },
  {
    id: "guides/how-to-fill-government-pdf-forms-on-phone",
    slug: "navody/jak-vyplnit-uredni-pdf-formulare",
    title: "Jak vyplnit úřední formuláře PDF na telefonu",
    description:
      "Úřední formuláře bývají neinteraktivní skeny s přísným formátováním. Jak je vyplnit na telefonu, poradit si s nepohodlnými poli a dodržet přesné pokyny úřadu.",
  },
  {
    id: "guides/mobile-pdf-form-workflow",
    slug: "navody/pdf-formulare-postup-na-mobilu",
    title: "Pracovní postup s formuláři PDF na mobilu (od přijetí po odeslání)",
    description:
      "Opakovatelná rutina pro formuláře, kterou zvládneš celou na telefonu: přijetí, otevření ve správné aplikaci, vyplnění, podpis, zafixování, odeslání. Kompletní postup, na který nepotřebuješ počítač.",
  },
  {
    id: "guides/best-pdf-form-app-for-iphone",
    slug: "navody/nejlepsi-aplikace-na-pdf-formulare-iphone",
    title: "Nejlepší aplikace na formuláře PDF pro iPhone (na co se zaměřit)",
    description:
      "Na čem u aplikace na formuláře PDF pro iPhone skutečně záleží – rozpoznání polí, psaní do neinteraktivních formulářů, podepisování, soukromí přímo v zařízení – a jak si takovou aplikaci vybrat pro vlastní formuláře.",
  },
  {
    id: "guides/best-pdf-form-app-for-android",
    slug: "navody/nejlepsi-aplikace-na-pdf-formulare-android",
    title: "Nejlepší aplikace na formuláře PDF pro Android (jak vybrat)",
    description:
      "Jak vybrat aplikaci na formuláře PDF pro Android: rozpoznání polí, psaní do neinteraktivních formulářů, podepisování a soukromí přímo v zařízení – a proč specializovaná aplikace u formulářů předčí výchozí prohlížečku.",
  },
  {
    id: "guides/pdf-forms-for-small-business",
    slug: "navody/pdf-formulare-pro-male-firmy",
    title: "Formuláře PDF pro malé firmy (příjem klientů, objednávky, HR)",
    description:
      "Formuláře, na kterých malá firma běžně stojí – příjem nových klientů, objednávky, rezervace, jednoduché HR – a jak je jako PDF vyplňovat, sbírat a spravovat bez nákupu formulářové platformy.",
  },
  {
    id: "guides/how-to-send-client-intake-forms",
    slug: "navody/vstupni-formulare-pro-klienty",
    title: "Jak posílat vstupní formuláře pro klienty (čistě a soukromě)",
    description:
      "Získej údaje o novém klientovi na jeden zátah. Jak poslat vstupní formulář PDF tak, aby se snadno vyplňoval, vrátil se kompletní a informace o klientovi zůstaly v soukromí.",
  },
  {
    id: "guides/how-to-use-pdf-forms-for-contracts",
    slug: "navody/pdf-formulare-pro-smlouvy",
    title: "Jak použít formuláře PDF pro smlouvy (pole a podepisování)",
    description:
      "Proměň smlouvu ve vyplnitelné PDF: pole pro jména, data a iniciály, prostor na podpis a krok se zafixováním, díky kterému se podepsaná verze nedá pozměnit. Včetně poctivých limitů.",
  },
  {
    id: "guides/how-to-manage-pdf-application-forms",
    slug: "navody/spravovat-prihlaskove-pdf-formulare",
    title: "Jak spravovat přihláškové formuláře PDF (sběr a posouzení)",
    description:
      "Dostáváš přihlášky jako PDF? Jak je sbírat, procházet, porovnávat a archivovat, aniž bys ztratil přehled – jednoduchý systém pro práci s hromadou vyplněných formulářů.",
  },
  {
    id: "guides/pdf-forms-for-consultants",
    slug: "navody/pdf-formulare-pro-konzultanty",
    title: "Formuláře PDF pro konzultanty (dotazníky a vymezení zakázky)",
    description:
      "Úvodní dotazníky, formuláře pro vymezení rozsahu zakázky a zpětnou vazbu – formulářová stránka konzultantské práce vyřešená jako vyplnitelná PDF, která klient zvládne na jakémkoli zařízení.",
  },
  {
    id: "guides/pdf-forms-for-agencies",
    slug: "navody/pdf-formulare-pro-agentury",
    title: "Formuláře PDF pro agentury (onboarding, zadání, schvalování)",
    description:
      "Balíčky pro nástup klienta, formuláře kreativního zadání a schvalovací listy – formuláře pro více zúčastněných stran, které agentura řeší jako vyplnitelná PDF, jež zvládne vyplnit kdokoli.",
  },
  {
    id: "guides/pdf-forms-for-freelancers",
    slug: "navody/pdf-formulare-pro-freelancery",
    title: "Formuláře PDF pro freelancery (příjem zakázky, smlouvy, zálohy)",
    description:
      "Příjem nové zakázky, jednoduché smlouvy o poskytování služeb a souhlasy se zálohou – úsporná sada vyplnitelných formulářů PDF, kterou freelancer potřebuje, bez předplatného a bez nahrávání čehokoli na server.",
  },
  {
    id: "guides/document-collection-workflows-with-pdf",
    slug: "navody/sber-dokumentu-pomoci-pdf",
    title: "Pracovní postupy pro sběr dokumentů pomocí PDF",
    description:
      "Sháníš od klientů soubory a podepsané formuláře? Postav si opakovatelný postup pro sběr PDF – kontrolní seznam, jednotný formát a přehledný způsob, jak sledovat, co ještě chybí.",
  },
  {
    id: "guides/pdf-form-best-practices",
    slug: "navody/osvedcene-postupy-pro-pdf-formulare",
    title: "Osvědčené postupy pro formuláře PDF (formuláře, které lidé dokončí)",
    description:
      "Navrhni formuláře, které lidé skutečně dokončí: jasné popisky, dostatek prostoru, smysluplná pole, zřetelný prostor na podpis a krok se zafixováním. Praktická pravidla pro tvůrce i odesílatele.",
  },
  {
    id: "guides/pdf-form-not-working",
    slug: "navody/pdf-formular-nefunguje",
    title: "Formulář PDF nefunguje? Rychlá diagnostika a řešení",
    description:
      "Formulář PDF, který zlobí, má obvykle jednu z několika typických příčin. Rychlá diagnostika, jak zjistit, o kterou jde – chybějící pole, nejde psát, neukládá se, jen pro čtení – a kde to opravit.",
  },
  {
    id: "guides/pdf-form-fields-missing",
    slug: "navody/chybi-pole-ve-pdf-formulari",
    title: "Chybí pole ve formuláři PDF? Proč a jak je obnovit",
    description:
      "Otevřel jsi formulář a pole tam nejsou? Proč interaktivní pole v některých prohlížečích mizí, jak je obnovit a co dělat, když žádná ve skutečnosti nikdy nebyla.",
  },
  {
    id: "guides/why-pdf-form-wont-save",
    slug: "navody/proc-se-pdf-formular-neuklada",
    title: "Proč se formulář PDF neukládá (a jak to opravit)",
    description:
      "Vyplnil jsi formulář a při dalším otevření odpovědi zmizí? Proč některé prohlížeče umí data z polí jen vytisknout, ne uložit, a spolehlivé způsoby, jak zajistit, že odpovědi zůstanou.",
  },
  {
    id: "guides/why-pdf-form-is-read-only",
    slug: "navody/proc-je-pdf-formular-jen-pro-cteni",
    title: "Proč je formulář PDF jen pro čtení (a co s tím)",
    description:
      "Formulář se otevře uzamčený a šedý? Proč jsou formuláře nastavené jen pro čtení, jak rozeznat záměrné zabezpečení od chyby prohlížeče a poctivé možnosti, jak ho přesto vyplnit.",
  },
  {
    id: "guides/pdf-form-not-printing-correctly",
    slug: "navody/pdf-formular-se-netiskne-spravne",
    title: "Formulář PDF se netiskne správně? Oprav prázdná pole",
    description:
      "Formulář se tiskne s prázdnými poli, posunutým textem nebo oříznutými okraji? Problémy s tiskem typické právě pro formuláře – hlavně chybějící hodnoty polí – a nastavení, které každý z nich vyřeší.",
  },
  {
    id: "guides/pdf-form-font-problems",
    slug: "navody/problemy-s-pismem-ve-pdf-formulari",
    title: "Problémy s písmem ve formuláři PDF (automatická velikost, oříznutí, náhrada)",
    description:
      "Text v poli je moc velký, moc malý, nebo se za psaní sám zmenšuje? Zvláštnosti písma typické právě pro pole formulářů – automatická velikost, náhrada, oříznutí – a jak dosáhnout čistých a čitelných odpovědí.",
  },
  {
    id: "guides/pdf-form-formatting-issues",
    slug: "navody/problemy-s-formatovanim-pdf-formulare",
    title: "Problémy s formátováním formuláře PDF (zarovnání a přetečení)",
    description:
      "Pole nejsou zarovnaná, odpovědi přetékají, formulář vypadá na cizí obrazovce jinak? Problémy s rozvržením formuláře, které se liší podle prohlížeče, a jak dosáhnout stejného výsledku všude.",
  },
  {
    id: "guides/pdf-form-submission-errors",
    slug: "navody/chyby-pri-odeslani-pdf-formulare",
    title: "Chyby při odeslání formuláře PDF (když tlačítko Odeslat selže)",
    description:
      "Tlačítko Odeslat ve formuláři selže nebo nic neudělá? Proč vestavěná tlačítka pro odeslání závisí na serveru vydavatele, co jednotlivé chyby znamenají a spolehlivý ruční způsob, jak formulář přesto poslat.",
  },
  {
    id: "guides/pdf-form-compatibility-problems",
    slug: "navody/kompatibilita-pdf-formulare",
    title: "Problémy s kompatibilitou formuláře PDF (XFA a dynamické formuláře)",
    description:
      "Formulář, který funguje v jednom programu a rozbije se v jiném, obvykle používá funkce, které nepodporuje každý prohlížeč. Jak poznat dynamický formulář, co způsobuje neshodu a jaké máš možnosti.",
  },
  {
    id: "guides/fix-pdf-form-errors",
    slug: "navody/rychla-pomoc-pro-pdf-formular",
    title: "Oprav chyby ve formuláři PDF – rychlá první pomoc",
    description:
      "Univerzální první pomoc pro formulář PDF, který zlobí: zkus jiný prohlížeč, stáhni soubor znovu, aktualizuj aplikaci, přidej text navrch, zafixuj. Projdi tyto kroky, než se pustíš do konkrétní příčiny.",
  },
];
