import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-pdf-instead-of-docx",
  h1: "Kdy použít PDF místo DOCX (checklist)",
  description:
    "Máš dokument ve Wordu – poslat ho radši jako PDF? Rychlý kontrolní seznam chvil, kdy je PDF správná volba, a jak na převod.",
  updated: "2026-05-23",
  intro: [
    "Dokončil jsi dokument ve Wordu, a teď je tu malé rozhodnutí: poslat .docx tak, jak je, nebo ho nejdřív převést do PDF? Je snadné zůstat u toho, co zrovna máš před sebou, ale špatná volba má následky – rozvržení, které se rozsype na cizí obrazovce, cena, kterou klient potichu upraví, návrh zaměněný za finální verzi. Tenhle návod je o tom, jak rozpoznat chvíle, kdy je PDF jasně lepší volba k odeslání.",
    "Místo širokého srovnání formátů jde o zacílený kontrolní seznam: soubor signálů, které znamenají „převeď do PDF, než to pošleš“. Když neplatí žádný z nich, tvůj DOCX je v pořádku tak, jak je. Když platí jeden, bezplatný nástroj Word do PDF ho převede přímo v tvém zařízení během pár vteřin.",
    "Projdi si kontrolní seznam párkrát a stane se z toho instinkt – na první pohled poznáš, jestli má dokument odejít jako Word, nebo jako PDF.",
  ],
  steps: [
    {
      title: "Je dokument finální?",
      body: "Pokud je hotový a nemá se dál upravovat – podepsaný dopis, dokončená zpráva, odevzdaná práce – pošli PDF. DOCX zve k úpravám, které u hotového dokumentu nechceš.",
    },
    {
      title: "Musí rozvržení zůstat přesně tak, jak jsi ho navrhl?",
      body: "Brožury, životopisy, cokoli, kde záleží na mezerách a písmu, by mělo odejít jako PDF. DOCX se může přeuspořádat na jiné verzi Wordu nebo v Google Docs a zničit tvé pečlivé rozvržení.",
    },
    {
      title: "Mohl by ho příjemce upravit v tvůj neprospěch?",
      body: "Nabídky, faktury, smlouvy – všude, kde by šlo pozměnit číslo nebo podmínku – patří do PDF. Zabrání to náhodným úpravám a udrží pevný záznam toho, cos poslal.",
    },
    {
      title: "Nemusí mít Word?",
      body: "PDF se nativně otevře na každém telefonu, tabletu i počítači. Pokud si nejsi jistý, že má příjemce kancelářskou aplikaci, PDF zaručí, že si ho přečte bez instalace čehokoli.",
    },
    {
      title: "Míří to do archivu?",
      body: "Pro dlouhodobé uložení vypadá PDF za deset let stejně; DOCX se může mezi verzemi Wordu posouvat. Archivuj jako PDF, DOCX si ponech jako svůj upravitelný master.",
    },
    {
      title: "Pokud je odpověď ano na cokoli z toho, převeď to",
      body: "Otevři nástroj Word do PDF, přidej svůj .docx a stáhni PDF – přímo v tvém zařízení, nic se nenahrává. Původní soubor Word si ponech pro budoucí úpravy.",
    },
  ],
  tips: [
    "DOCX si ponech, když se na dokumentu ještě pracuje, potřebuje komentáře nebo sledování změn, nebo ho má příjemce upravovat. PDF je pro hotové, pevné dokumenty.",
    "Upravitelný .docx si vždycky ponech. PDF je kopie k odeslání; soubor Word je tvůj master pro příští revizi.",
    "Před převodem přijmi nebo odstraň sledované změny, jinak se mohou objevit v PDF, viditelné pro každého.",
    "Převod do PDF uzamkne rozvržení, ale soubor nezašifruje. Pokud potřebuje skutečnou ochranu, přidej heslo jako samostatný krok.",
    "Pokud příjemce žádá o „upravitelné PDF“, obvykle tím myslí DOCX – ověř si to, než to předpokládáš, a pak pošli to správné.",
  ],
  mobileNote:
    "Rozhodnutí poslat PDF často přichází mimo tvůj stůl, ve chvíli, kdy hotový dokument musí odejít hned teď. Aplikace PDF Editor převádí a odesílá z telefonu, takže dokument uzamkneš a pošleš e-mailem, aniž bys čekal, až se vrátíš k počítači.",
  faq: [
    {
      q: "Kdy mám poslat PDF místo souboru Word?",
      a: "Když je dokument finální, rozvržení musí zůstat pevné, příjemce by ho mohl upravit v tvůj neprospěch, nemusí mít Word, nebo míří do archivu. Kterýkoli z toho znamená převést do PDF.",
    },
    {
      q: "Kdy je lepší nechat si DOCX?",
      a: "Když se dokument ještě píše, potřebuje komentáře nebo sledování změn, nebo ho má příjemce upravovat. DOCX je pracovní formát; PDF je hotový.",
    },
    {
      q: "Změní převod z Wordu do PDF moje rozvržení?",
      a: "U dokumentů s běžnými písmy ne – to je celý smysl PDF. Pozor jen na neobvyklá písma, která se mohou nahradit. Před odesláním PDF otevři a zkontroluj.",
    },
    {
      q: "Chrání odeslání PDF dokument?",
      a: "Zabrání náhodným úpravám a zafixuje rozvržení, ale není to šifrování. Pro skutečnou ochranu proti otevření nebo kopírování přidej heslo zvlášť.",
    },
    {
      q: "Kde najdu podrobnější srovnání PDF a DOCX?",
      a: "Podívej se na návod a srovnání PDF vs DOCX pro širší pohled na to, jak se oba formáty liší v úpravách, věrnosti a podepisování.",
    },
  ],
  related: [
    { label: "Word do PDF – převeď v prohlížeči", path: "/word-to-pdf" },
    { label: "PDF vs DOCX – jaký formát použít", path: "/guides/pdf-vs-docx" },
    { label: "Jak převést Word do PDF", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF nebo DOCX – srovnání funkcí", path: "/compare/pdf-vs-docx" },
  ],
  parentHub: { label: "Konvertor PDF", path: "/pdf-converter" },
};

export default content;
