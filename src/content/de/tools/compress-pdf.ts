import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "compress-pdf",
  hero: {
    eyebrow: "PDF komprimieren",
    h1: "PDF verkleinern — direkt im Browser.",
    highlight: "direkt im Browser",
    lead: "Verkleinere ein PDF, damit es das Limit für E-Mail-Anhänge einhält oder von Formularen akzeptiert wird, die nur kleine Dateien annehmen. Wähle eine Kompressionsstufe, sieh genau, wie viel du gespart hast, und lade die Datei herunter — sie verlässt dein Gerät nie.",
  },
  privacyNote:
    "Deine Datei wird lokal in deinem Browser verarbeitet und nie auf einen Server geladen. Nichts verlässt dein Gerät.",
  howTo: {
    heading: "So komprimierst du ein PDF",
    steps: [
      {
        title: "PDF hinzufügen",
        body: "Ziehe ein PDF per Drag-and-drop hierher oder klicke, um eine Datei von deinem Gerät auszuwählen.",
      },
      {
        title: "Stufe wählen",
        body: "Niedrig erhält die meisten Details, Empfohlen bringt Größe und Qualität ins Gleichgewicht, Stark liefert die kleinste Datei.",
      },
      {
        title: "Komprimieren",
        body: "Klicke auf PDF komprimieren. Die Seiten werden lokal in deinem Browser neu gerendert und neu codiert.",
      },
      {
        title: "Herunterladen",
        body: "Vergleiche die Größe vorher und nachher samt Reduktion in Prozent und lade die kleinere Datei herunter.",
      },
    ],
  },
  useCases: {
    heading: "Wann Komprimierung am meisten bringt",
    items: [
      {
        title: "Größenlimit für E-Mail-Anhänge",
        body: "Bring einen gescannten Vertrag oder eine Broschüre unter das 10-MB- oder 25-MB-Limit eines Anhangs.",
      },
      {
        title: "Formulare und Behördenportale",
        body: "Portale von Behörden und Personalabteilungen lehnen Dateien über wenige Megabyte oft ab — das schafft hier Abhilfe.",
      },
      {
        title: "Gescannte Dokumente",
        body: "Handyscans sind riesig. Bildlastige PDFs schrumpfen mit starker Komprimierung drastisch.",
      },
      {
        title: "Speicherung und Versand",
        body: "Halte dein Archiv schlank und sorg dafür, dass Links für den Empfänger schneller herunterladen.",
      },
    ],
  },
  limitations: {
    heading: "Ehrliche Grenzen",
    items: [
      {
        title: "Text wird zu einem Bild",
        body: "Die Komprimierung rendert jede Seite als Bild neu, daher ist der Text im Ergebnis nicht mehr markierbar oder durchsuchbar. Bewahre das Original auf, falls du das brauchst.",
      },
      {
        title: "Reine Text-PDFs schrumpfen kaum",
        body: "Besteht ein PDF schon fast nur aus Text oder Vektorgrafik, gibt es wenig zu komprimieren — wir lassen dein Original unverändert, statt dir eine größere Datei zurückzugeben.",
      },
      {
        title: "Sehr große oder gesperrte PDFs",
        body: "Dem Browser geht der Speicher deutlich früher aus als einer nativen App. Passwortgeschützte PDFs können nicht im Browser verarbeitet werden — nutze die App PDF Editor.",
      },
    ],
  },
  related: [
    { label: "PDF zusammenführen", path: "/merge-pdf" },
    { label: "Ein PDF teilen", path: "/split-pdf" },
    { label: "PDF-Seiten extrahieren", path: "/extract-pdf-pages" },
    { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
    { label: "Anleitung: So komprimierst du ein PDF", path: "/guides/how-to-compress-pdf" },
  ],
  faq: [
    {
      q: "Wird meine Datei an einen Server gesendet?",
      a: "Nein. Die Komprimierung läuft vollständig in deinem Browser und nutzt den Prozessor deines Geräts. Deine Datei verlässt dein Gerät nie.",
    },
    {
      q: "Wie viel kleiner wird mein PDF?",
      a: "Das hängt vom Inhalt ab. Gescannte und bildlastige PDFs schrumpfen oft um 50 bis 90 %. Reine Text-PDFs schrumpfen möglicherweise gar nicht — dann behalten wir dein Original.",
    },
    {
      q: "Sinkt die Qualität?",
      a: "Ja, etwas — es handelt sich um verlustbehaftete Komprimierung. Niedrigere Stufen erhalten mehr Details. Wir versprechen nie „keinen Qualitätsverlust“ — wähl die Stufe, die für deinen Zweck passt.",
    },
    {
      q: "Warum ist der Text nach der Komprimierung nicht mehr markierbar?",
      a: "Um im Browser echte Größenersparnis zu erzielen, wird jede Seite in ein Bild umgewandelt. Brauchst du markierbaren Text, bewahre das Original auf oder wähle eine niedrigere Stufe.",
    },
    {
      q: "Kann ich ein passwortgeschütztes PDF komprimieren?",
      a: "Im Browser nicht. Entferne zuerst das Passwort oder nutze die App PDF Editor, die auch geschützte Dateien verarbeitet.",
    },
  ],
  appCta: {
    heading: "PDF-Tools für unterwegs gesucht?",
    sub: "PDF Editor für iPhone und Android komprimiert, unterschreibt und teilt PDFs direkt vom Handy aus.",
  },
};

export default content;
