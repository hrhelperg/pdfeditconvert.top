import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf",
  h1: "PDF komprimieren, ohne an Qualität zu verlieren",
  description:
    "Reduziere die PDF-Dateigröße für E-Mail oder Upload, ohne Qualitätsverlust. Mobilfreundliches Tutorial mit der PDF-Editor-App.",
  updated: "2026-05-11",
  intro: [
    "Jeder E-Mail-Dienst hat noch immer ein Limit für Anhänge. Bei Gmail liegt die Grenze bei 25 MB, bei Outlook etwa bei 20 MB. Slack und die meisten Messaging-Apps machen bei rund 25 MB ebenfalls dicht. Reale PDFs — Angebote mit Fotos, gescannte Verträge, Berichte mit Diagrammen — sprengen diese Grenzen mühelos.",
    "Es gibt zwei Wege, ein PDF kleiner zu machen. Der falsche Weg: über eine niedrigere Qualitätsstufe erneut als PDF drucken — dabei verschlechtern sich Text und Unterschriften dauerhaft. Der richtige Weg: die Bilder im Inneren der Datei neu komprimieren und die Schriftarten neu kodieren. So bleibt der Text scharf, während die Dateigröße um 60–90 % schrumpft.",
    "Diese Anleitung zeigt dir den richtigen Weg mit der App PDF Editor auf iPhone oder Android. Die Schritte sind auf beiden Plattformen identisch. Am Ende hast du eine Datei, die klein genug zum Verschicken ist und bei jeder Zoomstufe genauso aussieht wie das Original.",
  ],
  steps: [
    {
      title: "Öffne die App PDF Editor",
      body: "Starte die App über den Startbildschirm. Tippe dort auf die Kachel Komprimieren.",
    },
    {
      title: "Füge das PDF hinzu",
      body: "Tippe auf „Datei hinzufügen“. Wähle es aus Dateien / iCloud (iPhone) oder über die Dateiauswahl (Android) aus. Du kannst ein PDF auch aus jeder beliebigen App heraus mit PDF Editor teilen.",
    },
    {
      title: "Wähle eine Qualitätsstufe",
      body: "Drei Voreinstellungen decken fast jeden Fall ab. Ausgewogen passt für die meisten Dateien. Wähle Klein für Dateien, die du per E-Mail verschickst oder hochlädst. Wähle Hoch, wenn das Ergebnis druckfertig sein muss.",
    },
    {
      title: "Sieh dir das komprimierte Ergebnis an",
      body: "Tippe auf Vorschau. Die App zeigt die Dateigröße von Original und komprimierter Version nebeneinander sowie Miniaturansichten der ersten Seiten. Zoome hinein, um die Schärfe des Texts zu prüfen.",
    },
    {
      title: "Mit dem Original vergleichen",
      body: "Wechsle zwischen den Seiten von Original und komprimierter Version hin und her. Wirkt etwas schlechter (bei Ausgewogen selten der Fall), probiere eine andere Voreinstellung.",
    },
    {
      title: "Speichern oder teilen",
      body: "Speichere die komprimierte Datei unter einem neuen Namen (damit das Original erhalten bleibt) oder teile sie direkt per E-Mail, Drive oder einer beliebigen Messaging-App.",
    },
  ],
  tips: [
    "Besteht eine Datei überwiegend aus gescannten Seiten, erreicht die Voreinstellung Klein Reduzierungen von über 90 % ohne sichtbaren Qualitätsverlust.",
    "Bei PDFs mit überwiegend Text fällt die Ersparnis kleiner aus (10–30 %) — die Datei ist bereits recht effizient.",
    "Ein sehr großes PDF vor dem Komprimieren zu teilen, beschleunigt den Vorgang auf älteren Handys und gibt dir beim Versenden mehr Flexibilität.",
    "Behalte das Original, bis du geprüft hast, dass die komprimierte Datei gut aussieht — die ursprüngliche Qualität lässt sich nach dem Komprimieren nicht wiederherstellen.",
    "Komprimierte PDFs behalten durchsuchbaren Text und Unterschriften bei. Die Komprimierung wirkt auf Bilder und Schrifttabellen, nicht auf die inhaltliche Ebene.",
  ],
  mobileNote:
    "Die Komprimierung läuft vollständig auf dem Gerät. Du kannst einen sensiblen Vertrag im Flugzeug komprimieren, bei aktiviertem Flugmodus — kein einziges Byte verlässt dabei dein Handy.",
  faq: [
    {
      q: "Wie viel kleiner wird mein PDF?",
      a: "Bildlastige oder gescannte PDFs schrumpfen typischerweise um 60–90 %. Textlastige PDFs verlieren weniger, oft 10–30 %. Die App zeigt dir die genaue Größe vor und nach der Komprimierung.",
    },
    {
      q: "Werden Bilder unscharf?",
      a: "Ausgewogen und Hoch halten Bilder bei normaler Zoomstufe scharf. Klein komprimiert Bilder stärker — für E-Mails völlig ausreichend, beim starken Hineinzoomen bemerkst du aber eine leichte Weichzeichnung.",
    },
    {
      q: "Kann ich ein passwortgeschütztes PDF komprimieren?",
      a: "Ja, sobald du das Passwort eingegeben hast. Die App übernimmt die Entschlüsselung, komprimiert den Inhalt und kann den Passwortschutz beim Speichern wieder anwenden.",
    },
    {
      q: "Was ist der Unterschied zwischen Komprimieren und Zippen?",
      a: "Beim Zippen wird das PDF nur in einen weiteren Container verpackt, wird dabei aber kaum kleiner — PDFs nutzen bereits eine interne Komprimierung. Echte PDF-Komprimierung schreibt die Bilder und Schriftarten innerhalb der Datei neu, nur so erzielst du eine spürbare Größenersparnis.",
    },
    {
      q: "Kann ich mehrere PDFs auf einmal komprimieren?",
      a: "Ja. Füge mehrere Dateien in einem Durchgang hinzu — die App verarbeitet sie nacheinander mit derselben Voreinstellung.",
    },
  ],
  related: [
    {
      label: "PDF komprimieren — die vollständige Übersicht",
      path: "/compress-pdf",
    },
    { label: "PDF Converter", path: "/pdf-converter" },
    {
      label: "PDF-Dateien zusammenführen",
      path: "/guides/how-to-merge-pdf-files",
    },
  ],
  parentHub: { label: "PDF komprimieren", path: "/compress-pdf" },
};

export default content;
