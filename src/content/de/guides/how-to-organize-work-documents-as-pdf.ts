import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-work-documents-as-pdf",
  h1: "Arbeitsdokumente als PDF organisieren (Ordner, Namen, Versionen)",
  description:
    "Eine praktische Namens- und Ordnerkonvention für Arbeits-PDFs – Angebote, Briefings, Ergebnisse, Archive – die Versionschaos verhindert und jedem erlaubt, alles schnell zu finden.",
  updated: "2026-05-29",
  intro: [
    "Das Problem mit Arbeits-PDFs sind meist nicht die PDFs selbst. Es ist die Spur: dreißig Dateien mit ähnlichen Namen in einem Downloads-Ordner, Versionen, die nicht zusammenpassen, Finalversionen, die nicht final sind, Entwürfe, die genauso aussehen wie fertige Lieferungen. Das Format ist in Ordnung; die Konvention rund um das Format ist es, die zusammenbricht.",
    "Eine funktionierende Konvention ist kurz — eine Ordnerstruktur, ein Namensschema und eine Gewohnheit, wo finale Versionen landen. Ist sie erst mal etabliert, dauert es zehn Sekunden statt zehn Minuten, „den Vertrag, den wir im März verschickt haben“ zu finden, und Versionskonflikte hören größtenteils auf.",
    "Diese Anleitung beschreibt die Konvention, die wir bei kleinen Teams beobachtet haben, die sie übernehmen und dabei bleiben. Es ist nicht die einzige funktionierende Konvention; es ist eine, die robust genug ist, ein arbeitsreiches Quartal zu überstehen, ohne auseinanderzufallen.",
  ],
  steps: [
    {
      title: "Lege einmal eine oberste Ordnerstruktur fest",
      body: "Kunden/Vertragsname/, Intern/, Vorlagen/, Archiv/. Vier Ordner decken das meiste ab. Verschachtle anfangs nicht mehr als zwei Ebenen tief — zu viel Tiefe führt dazu, dass man sich verirrt.",
    },
    {
      title: "Standardisiere das Dateinamensschema",
      body: "Kundenname_Dokumenttyp_vN_JJJJ-MM-TT.pdf liest sich in jedem Dateibrowser sauber. Das Datum steht zuletzt, damit Dateien chronologisch sortieren; die Version steht direkt drin, damit du die neueste auf einen Blick erkennst.",
    },
    {
      title: "Trenne /entwuerfe und /final innerhalb jedes Projekts",
      body: "Entwürfe kommen in den Unterordner /entwuerfe des Projekts; finale Versionen werden zu FINAL umbenannt und nach /final oder /lieferungen verschoben. Der Ordner /final sollte nur ausgelieferte Versionen enthalten.",
    },
    {
      title: "Nutze PDF zusammenführen zur Konsolidierung bei der Übergabe",
      body: "Ist eine Lieferung eigentlich drei PDFs (Angebot + Konditionen + Preisliste), führe sie für die Lieferung zu einem zusammen und bewahre die Ausgangsdateien im Projektordner auf. Der Empfänger bekommt eine einzige saubere Datei.",
    },
    {
      title: "Erst bei der Lieferung komprimieren und umbenennen",
      body: "Nutze PDF komprimieren für die ausgehende Kopie; bewahre die unkomprimierte Quelle auf. Die gelieferte Datei kommt nach /final/, die Quelle bleibt in /entwuerfe/. Es sind zwei unterschiedliche Artefakte.",
    },
    {
      title: "Archiviere abgeschlossene Projekte nach einem Zeitplan",
      body: "Verschiebe abgeschlossene Projekte vierteljährlich nach /Archiv/. Aktive Ordner bleiben überschaubar; das Archiv ist durchsuchbar, wenn du später etwas finden musst.",
    },
  ],
  tips: [
    "Vermeide Leerzeichen in Dateinamen, wenn möglich — Unterstriche oder Bindestriche sind einfacher in URLs, weitergeleiteten E-Mails und Shell-Befehlen.",
    "Das Datumsformat JJJJ-MM-TT sortiert in jedem Tool chronologisch. 29.5.26 nicht.",
    "Setze keine Versionsnummern in den FINAL-Dateinamen. FINAL ist FINAL. Ändert sich danach etwas, ist es FINAL-2 — und das ist ein Warnsignal, dass der Prozess ausgehebelt wurde.",
    "Scheue dich nicht vor dem Umbenennen. Ein klarer Dateiname ist eine Minute Arbeit wert, besonders vor dem Versenden.",
    "Bewahre bei großen Projekten eine kurze Indexdatei (README.txt) auf, die auflistet, was in jedem Unterordner steckt. Hilft dem zukünftigen Du, das sechs Monate später wiederkommt.",
  ],
  mobileNote:
    "Am Handy wird Organisation schwieriger, weil das Bearbeiten von Dateinamen fummelig ist. Die PDF-Editor-App lässt dich PDFs am Handy umbenennen, kennzeichnen und ablegen, damit sich am Handy ankommende Dateien nicht unbenannt im Downloads-Ordner stapeln.",
  faq: [
    {
      q: "Was ist das beste Dateinamensformat?",
      a: "Kundenname_Dokumenttyp_vN_JJJJ-MM-TT.pdf. Das Datum am Ende sortiert chronologisch; die Version direkt drin unterscheidet Entwürfe; Kunde und Dokumenttyp machen die Datei selbsterklärend.",
    },
    {
      q: "Sollte ich Ordner oder Schlagwörter nutzen?",
      a: "Ordner. Schlagwort-Systeme gibt es, aber sie zersplittern über Geräte und Apps hinweg. Ordner sind universell.",
    },
    {
      q: "Was mache ich mit alten Entwürfen?",
      a: "Bewahre sie in /entwuerfe/ innerhalb des Projektordners auf, bis das Projekt abgeschlossen ist, und archiviere dann alles zusammen. Lösche nicht — du brauchst vielleicht eine Zahl aus einem früheren Entwurf zurück.",
    },
    {
      q: "Braucht die FINAL-Datei eine Versionsnummer?",
      a: "Nein. Sobald eine Datei FINAL ist, ist sie die maßgebliche Version. Ändert sich danach etwas, bist du in einem neuen Vorgang, der seine eigene FINAL-Version bekommt.",
    },
    {
      q: "Wie gehe ich mit Dateien von Kunden mit uneinheitlicher Benennung um?",
      a: "Benenne sie bei Erhalt gemäß deiner Konvention um. Die Minute, die das Umbenennen kostet, spart die Zeit, die du später beim Suchen verlieren würdest.",
    },
  ],
  related: [
    { label: "PDF-Tools — vollständige Liste der Browser-Tools", path: "/pdf-tools" },
    { label: "PDF zusammenführen — Lieferungen bei der Übergabe kombinieren", path: "/merge-pdf" },
    { label: "PDF-Dateien organisieren", path: "/guides/how-to-organize-pdf-files" },
    { label: "PDF-Workflows für kleine Unternehmen", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF-Tools — kostenlos, browserbasiert", path: "/pdf-tools" },
};

export default content;
