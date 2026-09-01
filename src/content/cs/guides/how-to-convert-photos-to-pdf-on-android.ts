import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-android",
  h1: "Jak převést fotky do PDF na Androidu",
  description:
    "Proměň fotky z Androidu v jedno PDF pomocí nástroje v prohlížeči nebo vestavěné funkce Tisk do PDF. Plus rychlejší postup přímo v aplikaci se skenováním.",
  updated: "2026-05-23",
  intro: [
    "Android nabízí víc než jednu cestu, jak proměnit fotky v PDF, což je požehnání i zdroj zmatku zároveň – kroky se liší mezi Samsungem, Pixelem, Xiaomi a ostatními. Dobrá zpráva je, že existuje cesta, která funguje stejně na každém telefonu s Androidem: nástroj v prohlížeči, který běží na tvém zařízení a je mu jedno, kdo ho vyrobil.",
    "Tento návod ukazuje právě tuto univerzální cestu přes prohlížeč s bezplatným nástrojem Obrázek do PDF, vestavěný trik „Tisk do PDF“ schovaný v nabídce sdílení, a aplikaci PDF Editor pro chvíle, kdy chceš fotky, skenování i podepisování na jednom místě.",
    "Fotky z Androidu se obvykle ukládají jako JPG, takže se většinou vyhneš potížím s formátem, na které narážejí uživatelé iPhonu – jednu výjimku, kterou stojí za to znát, si ale ukážeme.",
  ],
  steps: [
    {
      title: "Otevřít nástroj Obrázek do PDF v prohlížeči",
      body: "Přejdi na nástroj Obrázek do PDF v Chromu nebo prohlížeči, který preferuješ. Funguje na jakémkoli telefonu s Androidem bez ohledu na značku a obrázky zpracovává na tvém zařízení – nic se nikam nenahrává.",
    },
    {
      title: "Přidat fotky",
      body: "Klepnutím vyber fotky z galerie nebo souborů. Funguje JPG i PNG; z každého obrázku vznikne jedna stránka.",
    },
    {
      title: "Seřadit stránky",
      body: "Pomocí šipek seřaď fotky. U vícestránkového dokumentu si pořadí ještě jednou zkontroluj, než soubor vytvoříš.",
    },
    {
      title: "Vytvořit a uložit PDF",
      body: "Klepni na Create PDF. Soubor se stáhne do telefonu; ulož ho do Souborů nebo preferovaného cloudového úložiště, nebo ho rovnou sdílej.",
    },
    {
      title: "Alternativa: použít Tisk do PDF",
      body: "Otevři fotky v Google Fotkách nebo galerii, klepni na Sdílet → Tisk, pak jako tiskárnu zvol „Uložit jako PDF“. Tohle spojí vybrané obrázky do PDF bez jakéhokoli nástroje, i když nad pořadím máš menší kontrolu.",
    },
    {
      title: "Nebo použít aplikaci PDF Editor",
      body: "Aplikace spojí fotky z galerie do PDF, naskenuje nové stránky s automatickým rozpoznáním okrajů a umožní podepsat – vše offline, vše v zařízení.",
    },
  ],
  tips: [
    "Postup přes prohlížeč se chová stejně na Samsungu, Pixelu, Xiaomi i dalších, takže je to ten, který si zapamatuj, pokud změníš telefon nebo pomáháš někomu s jinou značkou.",
    "Trik Tisk do PDF se hodí v nouzi, ale dává malou kontrolu nad pořadím stránek – když na pořadí záleží, použij nástroj Obrázek do PDF.",
    "Fotky nejdřív ořízni v galerii. Stránky se přizpůsobí velikosti obrázku, takže odstranění pozadí dá čistší dokument.",
    "Většina fotoaparátů na Androidu ukládá JPG, ale některé v režimu vysoké účinnosti ukládají HEIF/HEIC. Pokud se fotka nenačte, zkontroluj nastavení fotoaparátu nebo použij aplikaci PDF Editor.",
    "Rozsáhlé galerie fotek ve vysokém rozlišení dělají velká PDF. Před odesláním e-mailem výsledek zkomprimuj.",
  ],
  mobileNote:
    "Práce s dokumenty na Androidu probíhá na telefonu a aplikace PDF Editor ji tam udrží celou: spoj fotky z galerie, naskenuj papír s rozpoznáním okrajů, podepiš a sdílej – offline a bez jakéhokoli nahrávání. Pro opakované úlohy je pokaždé rychlejší než prohlížeč.",
  faq: [
    {
      q: "Funguje postup přes prohlížeč na každém telefonu s Androidem?",
      a: "Ano. Protože nástroj běží v prohlížeči, chová se stejně na Samsungu, Pixelu, Xiaomi i jakémkoli jiném zařízení s Androidem – na rozdíl od vestavěných funkcí, které se liší podle výrobce.",
    },
    {
      q: "Jaký je rozdíl mezi Tisk do PDF a nástrojem?",
      a: "Tisk do PDF je vestavěný v nabídce sdílení Androidu a nepotřebuje žádný nástroj, ale dává malou kontrolu nad pořadím stránek. Nástroj Obrázek do PDF ti umožní stránky přesně seřadit, což je důležité u vícestránkových dokumentů.",
    },
    {
      q: "Nahrávají se moje fotky někam?",
      a: "Ne. Nástroj Obrázek do PDF i aplikace PDF Editor zpracovávají fotky na tvém zařízení. Obrázky zůstávají v soukromí.",
    },
    {
      q: "Moje fotky se do nástroje nenačtou – proč?",
      a: "Některé telefony s Androidem ukládají v režimu vysoké účinnosti HEIF/HEIC, které nástroje v prohlížeči nemusí přečíst. Přepni fotoaparát na standardní JPG, nebo použij aplikaci PDF Editor.",
    },
    {
      q: "Můžu PDF udělat prohledávatelné?",
      a: "Obyčejná fotka nemá textovou vrstvu. Pro prohledávatelný text naskenuj dokument s rozpoznáním textu v aplikaci PDF Editor, místo abys ho jen vyfotil.",
    },
  ],
  related: [
    {
      label: "Obrázek do PDF — převeď fotky přímo v prohlížeči",
      path: "/image-to-pdf",
    },
    {
      label: "Sken do PDF — zachyť papír fotoaparátem",
      path: "/scan-to-pdf",
    },
    {
      label: "Jak převést fotky do PDF na iPhonu",
      path: "/guides/how-to-convert-photos-to-pdf-on-iphone",
    },
    {
      label: "Jak převést JPG do PDF",
      path: "/guides/how-to-convert-jpg-to-pdf",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
