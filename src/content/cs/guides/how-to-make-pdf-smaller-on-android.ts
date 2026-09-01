import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-android",
  h1: "Jak zmenšit PDF na Androidu",
  description:
    "Zkomprimuj PDF na jakémkoli Androidu pomocí nástroje v prohlížeči bez instalace, nebo aplikace PDF Editor. Dostaň skeny pod limity pro e-mail a nahrávání.",
  updated: "2026-05-23",
  intro: [
    "Android pracuje s PDF různě podle telefonu – Samsung, Pixel i Xiaomi schovávají relevantní nastavení na různá místa – ale potřeba je univerzální: naskenované nebo fotkami nabité PDF je moc velké na e-mail nebo nahrání a ty ho chceš zmenšit. Nejspolehlivější řešení přitom vůbec nezávisí na značce telefonu.",
    "Tento návod používá bezplatný nástroj Zkomprimovat PDF, který běží v prohlížeči na jakémkoli zařízení s Androidem a soubor zpracuje lokálně – nic se nikam nenahrává. Popisuje i aplikaci PDF Editor pro offline použití a pro soubory chráněné heslem, na které si prohlížeč netroufne.",
    "Protože je postup přes prohlížeč stejný na každém telefonu s Androidem, je to metoda, kterou stojí za to si zapamatovat, pokud změníš zařízení nebo pomáháš někomu s jinou značkou.",
  ],
  steps: [
    {
      title: "Najít PDF",
      body: "Vyhledej dokument v aplikaci Soubory, ve Staženém, nebo kdekoli byl uložen – sken, uloženou přílohu, převedenou sadu fotek.",
    },
    {
      title: "Otevřít nástroj Zkomprimovat PDF",
      body: "Přejdi na nástroj Zkomprimovat PDF v Chromu nebo svém prohlížeči. Chová se stejně na každém telefonu s Androidem a soubor zpracuje na tvém zařízení – žádné nahrávání, žádný účet.",
    },
    {
      title: "Přidat PDF a zvolit úroveň",
      body: "Vyber soubor a zvol úroveň: Doporučená pro většinu případů, Silná, když ho potřebuješ menší. Nízká zachová nejvíc detailů.",
    },
    {
      title: "Zkomprimovat a zkontrolovat",
      body: "Spusť to a ověř velikost před a po. PDF plná obrázků a skeny obvykle na jeden zátah dramaticky zmenší.",
    },
    {
      title: "Uložit nebo sdílet výsledek",
      body: "Ulož menší soubor do zařízení, nebo ho rovnou sdílej e-mailem či do chatové aplikace. Originál si ponech, dokud neověříš, že se kopie čte dobře.",
    },
    {
      title: "Pro chráněné nebo velké soubory použít aplikaci",
      body: "Prohlížeč neumí komprimovat PDF chráněná heslem a s velmi rozsáhlými si může nevědět rady. Aplikace PDF Editor zvládá obojí offline.",
    },
  ],
  tips: [
    "Postup přes prohlížeč se chová stejně na Samsungu, Pixelu, Xiaomi i ostatních, takže je to metoda, kterou stojí za to napříč zařízeními znát.",
    "Pokud je PDF obří, skoro jistě za to můžou naskenované nebo vyfocené stránky. Přesně ty se komprimují nejlépe.",
    "Komprese stránky zploští na obrázky, takže menší kopie ztratí vybíratelný text. Pokud z ní potřebuješ vyhledávat nebo kopírovat, ponech si originál.",
    "Některé fotoaparáty na Androidu ukládají v režimu vysoké účinnosti HEIF; standardní skeny v JPG se komprimují a sdílí snadněji.",
    "Komprimované PDF ulož pod novým názvem, aby na zařízení zůstal ostrý originál.",
  ],
  mobileNote:
    "Komprese přímo na telefonu je to, co uživatelé Androidu ve skutečnosti chtějí, a aplikace PDF Editor to dělá offline bez jakéhokoli nahrávání, podporuje soubory chráněné heslem a sdílí rovnou do tvých aplikací. U dokumentů, které zmenšuješ často, je rychlejší než pokaždé znovu otevírat prohlížeč.",
  faq: [
    {
      q: "Funguje postup přes prohlížeč na každém telefonu s Androidem?",
      a: "Ano. Protože nástroj Zkomprimovat PDF běží v prohlížeči, chová se stejně na Samsungu, Pixelu, Xiaomi i jakémkoli jiném zařízení s Androidem – na rozdíl od vestavěných funkcí, které se liší podle značky.",
    },
    {
      q: "Můžu zkomprimovat PDF na Androidu bez instalace čehokoli?",
      a: "Ano. Nástroj Zkomprimovat PDF běží v prohlížeči a soubor zpracuje na tvém zařízení, takže žádná instalace není potřeba.",
    },
    {
      q: "Nahrává se můj soubor někam?",
      a: "Ne. Komprese probíhá lokálně na tvém telefonu; nic se neposílá na server, což je důležité u osobních dokumentů.",
    },
    {
      q: "Zůstane text vybíratelný?",
      a: "Ne. Stránky se během komprese znovu vykreslí jako obrázky, čímž zmizí vybíratelná textová vrstva. Pokud ho potřebuješ, ponech si originál.",
    },
    {
      q: "Jak zkomprimuju PDF chráněné heslem na Androidu?",
      a: "Prohlížeč chráněné soubory zpracovat neumí. Použij aplikaci PDF Editor, která je otevře i zkomprimuje offline.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF — zmenši přímo v prohlížeči", path: "/compress-pdf" },
    {
      label: "Jak zmenšit PDF na iPhonu",
      path: "/guides/how-to-make-pdf-smaller-on-iphone",
    },
    {
      label: "Jak zmenšit velikost PDF pro e-mail",
      path: "/guides/how-to-reduce-pdf-file-size-for-email",
    },
    {
      label: "Jak upravit PDF na Androidu",
      path: "/guides/how-to-edit-pdf-on-android",
    },
  ],
  parentHub: { label: "Zkomprimovat PDF", path: "/compress-pdf" },
};

export default content;
