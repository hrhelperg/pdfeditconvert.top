import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-converter",
  hero: {
    eyebrow: "PDF Converter",
    h1: "Konvertiere PDFs in das Format, das du wirklich brauchst.",
    highlight: "wirklich",
    lead: "PDF zu Word zum Bearbeiten. PDF zu JPG für Messaging-Apps. Word und Bilder zurück zu PDF fürs Archiv. Eine App, schnelle Ergebnisse, kein Hochladen auf irgendwelche Server.",
    primaryCta: { label: "App öffnen", href: SITE.app.appStore },
  },
  problem: {
    heading: "Das Konvertierungs-Chaos, in das die meisten geraten",
    paragraphs: [
      "PDFs sind großartig, bis jemand die Datei als Word haben will. Oder bis eine Messaging-App nichts außer JPG akzeptiert. Oder bis du Kassenbelege (Bilder) mit einem Angebot (ein PDF) zu einem einzigen, versendbaren Dokument zusammenführen musst.",
      "Öffentliche PDF-Konverter-Websites erledigen diese Aufgabe — und schaffen dabei neue Probleme. Sie laden deine Datei hoch, speichern sie manchmal stundenlang, verlangen ab einer bestimmten Größe oft Geld und liefern selten ein sauberes DOCX. Das Layout verrutscht, Schriftarten werden ersetzt, Tabellen brechen auseinander.",
      "Ein nativer Konverter erledigt die Arbeit auf deinem Gerät. Dieselbe Engine, die das PDF layoutet, baut es auch im Zielformat wieder auf. Tabellen bleiben ausgerichtet, Schriftarten werden intelligent zugeordnet, und du gibst nie einen sensiblen Vertrag an eine kostenlose Website weiter, die sich über Werbenetzwerke finanziert.",
    ],
  },
  features: {
    heading: "Konvertiere in beide Richtungen",
    items: [
      {
        icon: "FileText",
        title: "PDF → Word (DOCX)",
        body: "Bearbeitbare Word-Dokumente, die Layout, Schriftarten, Tabellen und Bilder erhalten.",
      },
      {
        icon: "Image",
        title: "PDF → JPG und PNG",
        body: "Exportiere einzelne Seiten oder jede Seite als separates Bild, bereit für Messaging oder Präsentationen.",
      },
      {
        icon: "Sheet",
        title: "PDF → Excel",
        body: "Extrahiere Tabellen in echte XLSX-Zellen, statt Screenshots einzufügen.",
      },
      {
        icon: "FilePlus",
        title: "Word und Bilder → PDF",
        body: "Verwandle ein DOCX, das Foto eines Kassenbelegs oder einen Screenshot in Sekunden in ein sauberes PDF.",
      },
      {
        icon: "ScanText",
        title: "OCR für gescannte PDFs",
        body: "Führe eine Texterkennung bei gescannten Dokumenten durch, damit das Ergebnis markierbar und durchsuchbar ist.",
      },
      {
        icon: "Layers",
        title: "Stapelverarbeitung",
        body: "Reihe mehrere Dateien auf einmal ein. Die App verarbeitet sie lokal im Hintergrund.",
      },
    ],
  },
  steps: {
    heading: "So konvertierst du ein PDF auf dem Handy",
    items: [
      {
        title: "Öffne die App PDF Editor",
        body: "Tippe auf dem Startbildschirm auf die Kachel Konvertieren.",
      },
      {
        title: "Wähle die Ausgangsdatei",
        body: "Wähle ein PDF, DOCX, Bild oder ein beliebiges anderes Dokument, das die App unterstützt.",
      },
      {
        title: "Wähle das Zielformat",
        body: "Word, Excel, JPG, PNG, PowerPoint — was auch immer die Gegenseite braucht.",
      },
      {
        title: "Tippe auf Konvertieren",
        body: "Die Konvertierung läuft auf dem Gerät. Die meisten Dateien sind in wenigen Sekunden fertig.",
      },
      {
        title: "Speichern oder teilen",
        body: "Speichere in Dateien, synchronisiere mit Drive oder iCloud, oder teile direkt per Mail oder Messaging.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Konvertieren, während du unterwegs bist",
    body: "Die realistische Konvertierungsaufgabe lautet nicht „diesen Jahresbericht in ein Word-Dokument verwandeln“. Sie lautet eher „das Foto dieses Hotel-Kassenbelegs in ein PDF verwandeln, das ich an ein Spesenformular anhängen kann“ oder „diese drei Tabellen aus einem Angebot herausziehen, um sie in eine Tabellenkalkulation einzufügen“. Beides passiert auf dem Handy, zwischen anderen Dingen, und muss jetzt sofort erledigt werden.",
  },
  faq: [
    {
      q: "Welche Formate werden unterstützt?",
      a: "In beide Richtungen: Word (DOCX), Excel (XLSX), PowerPoint (PPTX), JPG, PNG und reiner Text. Word, Bilder und einige weitere gängige Formate lassen sich in PDF umwandeln.",
    },
    {
      q: "Wie genau ist die Umwandlung von PDF zu Word?",
      a: "Bei textbasierten PDFs sehr genau — Tabellen, Listen und Überschriften werden übernommen. Komplexe mehrspaltige Layouts brauchen manchmal eine kleine Nacharbeit. Gescannte PDFs benötigen vorher eine Texterkennung (OCR).",
    },
    {
      q: "Läuft die Konvertierung offline?",
      a: "Standardkonvertierungen laufen lokal. Einige erweiterte Funktionen (hochwertige OCR für manche Sprachen) nutzen unter Umständen die Cloud — die App teilt dir das mit, bevor irgendetwas gesendet wird.",
    },
    {
      q: "Bleiben meine Schriftarten bei der Konvertierung erhalten?",
      a: "Die App ordnet Schriftarten intelligent zu. Ist eine Schriftart auf dem Zielgerät nicht installiert, wird die nächstähnliche verwendet, sodass das Dokument trotzdem korrekt lesbar bleibt.",
    },
    {
      q: "Kann ich geschützte PDFs konvertieren?",
      a: "Ist das PDF passwortgeschützt, musst du das Passwort vor der Konvertierung eingeben. PDFs mit Bearbeitungseinschränkungen lassen sich meist konvertieren, sofern das Öffnen-Passwort bekannt ist.",
    },
  ],
  related: [
    { label: "PDF oder DOCX — was ist die richtige Wahl", path: "/guides/pdf-vs-docx" },
    { label: "PDF-vs-JPG-Vergleich", path: "/compare/pdf-vs-jpg" },
    { label: "PDFs nach der Konvertierung bearbeiten", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Konvertiere PDFs, ohne sie hochzuladen.",
    sub: "Kostenlos für iOS und Android. Konvertierungen laufen auf dem Gerät.",
  },
};

export default content;
