import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-word",
  hero: {
    eyebrow: "PDF zu Word",
    h1: "Ein PDF in bearbeitbares Word umwandeln — direkt im Browser.",
    highlight: "direkt im Browser",
    lead: "Hol den Text aus einem PDF in ein bearbeitbares .docx-Dokument, das du in Word, Google Docs oder Pages weiterbearbeiten kannst. Ehrliche Textumwandlung — kein falsches Versprechen von „perfektem Layout“.",
  },
  privacyNote:
    "Deine Datei wird lokal in deinem Browser verarbeitet und nie auf einen Server geladen. Nichts verlässt dein Gerät.",
  howTo: {
    heading: "So wandelst du ein PDF in Word um",
    steps: [
      {
        title: "PDF hinzufügen",
        body: "Ziehe ein textbasiertes PDF per Drag-and-drop hierher oder klicke, um eines auszuwählen.",
      },
      {
        title: "Umwandeln",
        body: "Klicke auf In Word umwandeln. Der markierbare Text wird lokal in deinem Browser extrahiert.",
      },
      {
        title: "Herunterladen",
        body: "Eine .docx-Datei wird automatisch heruntergeladen — öffne und bearbeite sie überall.",
      },
      {
        title: "Nachbearbeiten",
        body: "Wende Überschriften und Layout in deinem Editor erneut an. Der Text gehört dir und lässt sich frei umstrukturieren.",
      },
    ],
  },
  useCases: {
    heading: "Wann dies das richtige Tool ist",
    items: [
      {
        title: "Vertragstext weiterverwenden",
        body: "Übernimm Klauseln aus einem PDF-Vertrag in einen bearbeitbaren Entwurf, statt sie abzutippen.",
      },
      {
        title: "Einen Bericht weiterverwerten",
        body: "Übertrage den Fließtext eines PDF-Berichts in ein Dokument, das du umstrukturieren kannst.",
      },
      {
        title: "Zitieren und belegen",
        body: "Extrahiere Passagen für Notizen, Zusammenfassungen oder Zitate ohne manuelles Abtippen.",
      },
      {
        title: "Ein PDF ohne Quelldatei reparieren",
        body: "Stell bearbeitbaren Text wieder her, wenn das ursprüngliche .docx längst verloren ist.",
      },
    ],
  },
  limitations: {
    heading: "Ehrliche Grenzen",
    items: [
      {
        title: "Kein Layout-Erhalt",
        body: "Dieses Tool extrahiert nur Text. Spalten, Tabellen, exakte Abstände, Schriftarten und Bilder werden nicht wiedergegeben — du wendest die Formatierung in deinem Editor neu an.",
      },
      {
        title: "Gescannte PDFs funktionieren nicht",
        body: "Reine Bild- bzw. gescannte PDFs haben keine Textebene. OCR steht im Browser nicht zur Verfügung — nutze für Scans die App PDF Editor.",
      },
      {
        title: "Komplexe Dokumente brauchen Nacharbeit",
        body: "Aufwendig gestaltete PDFs (mehrspaltig, Fußnoten) werden als lesbarer Textstrom extrahiert, den du noch aufräumen solltest.",
      },
    ],
  },
  related: [
    { label: "Word zu PDF — der umgekehrte Weg", path: "/word-to-pdf" },
    { label: "PDF zu Bildern", path: "/pdf-to-images" },
    { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
    { label: "PDF vs. DOCX — was du wann nutzt", path: "/compare/pdf-vs-docx" },
    {
      label: "Anleitung: So wandelst du ein PDF in Word um",
      path: "/guides/how-to-convert-pdf-to-word",
    },
  ],
  faq: [
    {
      q: "Wird meine Datei an einen Server gesendet?",
      a: "Nein. Die Textextraktion läuft vollständig in deinem Browser. Dein PDF verlässt dein Gerät nie.",
    },
    {
      q: "Sieht die Word-Datei genauso aus wie das PDF?",
      a: "Nein — und das behaupten wir auch nicht. Das ist eine praktische Textumwandlung. Layout, Schriftarten, Spalten und Bilder bleiben nicht erhalten; du wendest die Formatierung in deinem Editor neu an.",
    },
    {
      q: "Es heißt, es wurde kein Text gefunden — warum?",
      a: "Dein PDF ist wahrscheinlich ein Scan oder eine reine Bilddatei ohne Textebene. Browser-Tools können das nicht per OCR lesen — die App PDF Editor kann es.",
    },
    {
      q: "Welches Format bekomme ich?",
      a: "Eine Standard-.docx-Datei, die sich in Microsoft Word, Google Docs, Pages und LibreOffice öffnen lässt.",
    },
    {
      q: "Kann ich es wieder zurückwandeln?",
      a: "Ja — nutze Word zu PDF, um dein bearbeitetes .docx wieder in ein PDF zu verwandeln.",
    },
  ],
  appCta: {
    heading: "PDF-Tools für unterwegs gesucht?",
    sub: "PDF Editor für iPhone und Android wandelt, bearbeitet und unterschreibt Dokumente direkt vom Handy aus.",
  },
};

export default content;
