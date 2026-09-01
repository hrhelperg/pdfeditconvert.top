import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "split-pdf",
  hero: {
    eyebrow: "PDF teilen",
    h1: "Seiten aus einem PDF extrahieren — privat, direkt im Browser.",
    highlight: "direkt im Browser",
    lead: "Füge ein PDF hinzu und wähle den Seitenbereich, den du exportieren möchtest. Nutze Bereiche wie 1-3,5,8-10 — deine Datei bleibt auf deinem Gerät.",
  },
  privacyNote:
    "Deine Datei wird lokal in deinem Browser verarbeitet und nie auf einen Server geladen. Nichts verlässt dein Gerät.",
  howTo: {
    heading: "So teilst du ein PDF",
    steps: [
      {
        title: "PDF hinzufügen",
        body: "Ziehe ein einzelnes PDF per Drag-and-drop hierher oder klicke, um es auszuwählen.",
      },
      {
        title: "Seitenbereiche eingeben",
        body: "Gib Seiten und Bereiche durch Kommas getrennt ein. Beispiel: 1-3,5,8-10.",
      },
      {
        title: "Teilen",
        body: "Klicke auf PDF teilen. Wir erstellen lokal ein neues PDF nur mit den gewählten Seiten.",
      },
      {
        title: "Herunterladen",
        body: "Das neue PDF wird automatisch heruntergeladen. Benenne es nach dem Speichern um.",
      },
    ],
  },
  useCases: {
    heading: "Wann Teilen die richtige Wahl ist",
    items: [
      {
        title: "Nur die relevanten Seiten verschicken",
        body: "Teile nur die Vertragsklausel, auf die es ankommt, statt des gesamten Dokuments.",
      },
      {
        title: "Einen gescannten Stapel trennen",
        body: "Trenne einen Multi-Dokument-Scan wieder in einzelne Dateien auf.",
      },
      {
        title: "Eine einzelne Seite aus einem Bericht ziehen",
        body: "Extrahiere ein Diagramm oder eine Tabelle, ohne den Rest der Datei preiszugeben.",
      },
      {
        title: "Einen saubereren Anhang erstellen",
        body: "Entferne Deckblätter, leere Seiten oder Anhänge, bevor du die Datei per E-Mail verschickst.",
      },
    ],
  },
  limitations: {
    heading: "Grenzen",
    items: [
      {
        title: "Passwortgeschützte PDFs",
        body: "Gesperrte Dateien können im Browser nicht geteilt werden. Entsperre sie zuerst oder nutze die App PDF Editor.",
      },
      {
        title: "Sehr große Dateien",
        body: "Bei Dokumenten über einige Hundert Megabyte kann dem Browser der Speicher ausgehen.",
      },
      {
        title: "Keine Ausgabe pro Bereich",
        body: "Dieses Tool exportiert ein kombiniertes PDF mit den gewählten Seiten. Für mehrere Ausgabedateien führe es zweimal aus.",
      },
    ],
  },
  related: [
    { label: "PDF zusammenführen — der umgekehrte Weg", path: "/merge-pdf" },
    { label: "PDF-Seiten drehen", path: "/rotate-pdf" },
    { label: "PDF zu Bildern", path: "/pdf-to-images" },
    { label: "Ein PDF komprimieren", path: "/compress-pdf" },
    { label: "PDF-Seiten extrahieren", path: "/extract-pdf-pages" },
    { label: "PDF-Seiten neu anordnen", path: "/reorder-pdf-pages" },
    { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Wird meine Datei an einen Server gesendet?",
      a: "Nein. Das Teilen läuft vollständig in deinem Browser; deine Datei verlässt dein Gerät nie.",
    },
    {
      q: "Wie funktioniert die Syntax für Seitenbereiche?",
      a: "Durch Kommas getrennte Seiten und Bereiche. Beispiel: 1-3,5,8-10 behält die Seiten 1, 2, 3, 5, 8, 9 und 10.",
    },
    {
      q: "Kann ich ein passwortgeschütztes PDF teilen?",
      a: "Im Browser nicht. Entferne zuerst das Passwort oder nutze die App PDF Editor.",
    },
    {
      q: "Bleibt die Ausgabequalität erhalten?",
      a: "Ja — die Seiten werden Byte für Byte kopiert. Kein erneutes Rendern, kein Qualitätsverlust.",
    },
  ],
  appCta: {
    heading: "Unterwegs teilen?",
    sub: "PDF Editor für iPhone und Android teilt PDFs und führt sie direkt auf dem Handy zusammen.",
  },
};

export default content;
