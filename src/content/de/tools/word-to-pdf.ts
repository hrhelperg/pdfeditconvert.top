import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "word-to-pdf",
  hero: {
    eyebrow: "Word zu PDF",
    h1: "Word in PDF umwandeln — direkt im Browser.",
    highlight: "direkt im Browser",
    lead: "Verwandle eine .docx- oder .txt-Datei in ein sauberes, teilbares PDF. Läuft vollständig auf deinem Gerät — dein Dokument wird nie an einen Server gesendet.",
  },
  privacyNote:
    "Deine Datei wird lokal in deinem Browser verarbeitet und nie auf einen Server geladen. Nichts verlässt dein Gerät.",
  howTo: {
    heading: "So wandelst du Word in PDF um",
    steps: [
      {
        title: "Dokument hinzufügen",
        body: "Ziehe eine .docx- oder .txt-Datei per Drag-and-drop hierher oder klicke, um eine auszuwählen.",
      },
      {
        title: "Umwandeln",
        body: "Klicke auf In PDF umwandeln. Der Text wird gelesen und lokal in deinem Browser in ein PDF gesetzt.",
      },
      {
        title: "Herunterladen",
        body: "Ein sauberes A4-PDF wird automatisch heruntergeladen.",
      },
      {
        title: "Teilen",
        body: "Verschick ein Format, das überall gleich aussieht und sich nicht versehentlich bearbeiten lässt.",
      },
    ],
  },
  useCases: {
    heading: "Wann dies das richtige Tool ist",
    items: [
      {
        title: "Eine nicht bearbeitbare Kopie verschicken",
        body: "Teile einen Entwurf als PDF, damit Empfänger ihn nicht versehentlich verändern können.",
      },
      {
        title: "Eine Bewerbung einreichen",
        body: "Viele Portale verlangen PDF statt .docx — wandle die Datei vor dem Hochladen um.",
      },
      {
        title: "Reine Notizen archivieren",
        body: "Verwandle .txt-Protokolle oder Notizen in ein übersichtliches, paginiertes PDF für deine Unterlagen.",
      },
      {
        title: "Druckfertige Übergabe",
        body: "Erzeuge aus einem einfachen Dokument ein einheitliches A4-PDF.",
      },
    ],
  },
  limitations: {
    heading: "Ehrliche Grenzen",
    items: [
      {
        title: "Textorientierte Umwandlung",
        body: "Wir extrahieren den Dokumenttext und setzen ihn neu in ein sauberes PDF. Ursprüngliche Schriftarten, Bilder, Tabellen und die exakten Abstände des .docx werden nicht wiedergegeben.",
      },
      {
        title: "Kein altes .doc",
        body: "Alte binäre .doc-Dateien können im Browser nicht gelesen werden. Speichere die Datei zuerst als .docx.",
      },
      {
        title: "Ungewöhnliche Zeichen werden vereinfacht",
        body: "Die eingebaute PDF-Schriftart deckt lateinischen Text ab; manche Sonderzeichen werden vereinfacht, damit die Umwandlung nie fehlschlägt.",
      },
    ],
  },
  related: [
    { label: "PDF zu Word — der umgekehrte Weg", path: "/pdf-to-word" },
    { label: "Bild zu PDF", path: "/image-to-pdf" },
    { label: "PDFs zusammenführen", path: "/merge-pdf" },
    { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
    {
      label: "Anleitung: So wandelst du Word in ein PDF um",
      path: "/guides/how-to-convert-word-to-pdf",
    },
  ],
  faq: [
    {
      q: "Wird meine Datei an einen Server gesendet?",
      a: "Nein. Die Umwandlung läuft vollständig in deinem Browser. Dein Dokument verlässt dein Gerät nie.",
    },
    {
      q: "Sieht das PDF genauso aus wie meine Word-Datei?",
      a: "Nein — das behaupten wir auch nicht. Das ist eine saubere, textorientierte Umwandlung: Schriftarten, Bilder, Tabellen und die exakten Abstände aus dem .docx werden nicht wiedergegeben.",
    },
    {
      q: "Welche Dateien werden unterstützt?",
      a: "Modernes Word .docx und reines .txt. Das alte binäre .doc-Format wird nicht unterstützt — speichere es zuerst als .docx.",
    },
    {
      q: "Gibt es ein Größenlimit?",
      a: "Bis zu 100 MB pro Datei, weil alles im Arbeitsspeicher deines Browsers verarbeitet wird.",
    },
    {
      q: "Kann ich das PDF zurück in Word umwandeln?",
      a: "Ja — nutze PDF zu Word, um den Text wieder in ein bearbeitbares .docx zu extrahieren.",
    },
  ],
  appCta: {
    heading: "PDF-Tools für unterwegs gesucht?",
    sub: "PDF Editor für iPhone und Android wandelt, unterschreibt und teilt Dokumente direkt vom Handy aus.",
  },
};

export default content;
