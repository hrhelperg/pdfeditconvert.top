import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "image-to-pdf",
  hero: {
    eyebrow: "Bild zu PDF",
    h1: "JPG-, PNG- und WebP-Bilder in ein einziges PDF verwandeln.",
    highlight: "ein einziges PDF",
    lead: "Füge JPG-, PNG- oder WebP-Bilder hinzu und kombiniere sie zu einem PDF. Ordne die Seiten neu an und lade dann herunter — deine Bilder bleiben auf deinem Gerät.",
  },
  privacyNote:
    "Deine Dateien werden lokal in deinem Browser verarbeitet und nie auf einen Server geladen. Nichts verlässt dein Gerät.",
  howTo: {
    heading: "So nutzt du das Tool Bild zu PDF",
    steps: [
      {
        title: "Bilder hinzufügen",
        body: "Ziehe JPG-, PNG- oder WebP-Dateien per Drag-and-drop hierher oder klicke, um sie von deinem Gerät auszuwählen.",
      },
      {
        title: "Bei Bedarf neu anordnen",
        body: "Nutze die Auf- und Ab-Pfeile an jeder Zeile, um die Seiten in die richtige Reihenfolge zu bringen.",
      },
      {
        title: "PDF erstellen",
        body: "Klicke auf In PDF umwandeln. Deine Bilder werden zu Seiten eines einzigen Dokuments, jeweils passend zur Bildgröße.",
      },
      {
        title: "Herunterladen",
        body: "Das erstellte PDF wird automatisch heruntergeladen. Du kannst es nach dem Speichern umbenennen.",
      },
    ],
  },
  useCases: {
    heading: "Wann dieses Tool nützlich ist",
    items: [
      {
        title: "Fotobelege und Ausgaben",
        body: "Bündle einen Monat an Belegen in einem PDF, bevor du es an die Buchhaltung schickst.",
      },
      {
        title: "Ausweis- und Passscans",
        body: "Kombiniere Vorder- und Rückseite zu einem Dokument, das ein Behördenportal akzeptiert.",
      },
      {
        title: "Screenshots in einen Bericht",
        body: "Bündle eine Reihe von UI-Screenshots zu einem übersichtlichen Review-Dokument.",
      },
      {
        title: "Whiteboard-Fotos",
        body: "Verwandle eine Fotoserie aus einem Meeting in ein Dokument, das das Team durchblättern kann.",
      },
    ],
  },
  limitations: {
    heading: "Grenzen",
    items: [
      {
        title: "Nur JPG, PNG und WebP",
        body: "HEIC, AVIF, GIF und TIFF werden im Browser nicht unterstützt. Konvertiere sie zuerst oder nutze die mobile App.",
      },
      {
        title: "Browser-Speicher",
        body: "Sehr große Stapel (Hunderte hochauflösende Fotos) können ältere Geräte ausbremsen.",
      },
      {
        title: "Kein OCR",
        body: "Text in Bildern wird nicht extrahiert. Für durchsuchbare PDFs scanne mit der App PDF Editor.",
      },
    ],
  },
  related: [
    { label: "PDFs zusammenführen", path: "/merge-pdf" },
    { label: "PDF zu Bildern", path: "/pdf-to-images" },
    { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Werden meine Bilder an einen Server gesendet?",
      a: "Nein. Alles läuft in deinem Browser. Deine Bilder verlassen dein Gerät nie.",
    },
    {
      q: "Gibt es ein Limit für die Dateigröße?",
      a: "Ja — jede Datei ist auf 100 MB begrenzt, damit dein Browser reaktionsschnell bleibt. Die mobile App PDF Editor verarbeitet größere Stapel mit Hardwarebeschleunigung.",
    },
    {
      q: "Kann ich die Seitengröße ändern?",
      a: "Jede Seite entspricht den Pixelmaßen ihres Bildes, damit das Seitenverhältnis stimmt. Für einheitliche A4-Ausgabe nutze die App PDF Editor.",
    },
    {
      q: "Funktioniert das auf iPhone und Android?",
      a: "Ja, in jedem modernen mobilen Browser. Bei häufiger Nutzung ist die App PDF Editor schneller und unterstützt HEIC-Fotos direkt aus der Kamerarolle.",
    },
  ],
  appCta: {
    heading: "Brauchst du das jede Woche auf dem Handy?",
    sub: "PDF Editor für iPhone und Android scannt, organisiert und unterschreibt PDFs offline.",
  },
};

export default content;
