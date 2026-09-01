import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "reorder-pdf-pages",
  hero: {
    eyebrow: "PDF-Seiten neu anordnen",
    h1: "PDF-Seiten neu anordnen — direkt im Browser.",
    highlight: "direkt im Browser",
    lead: "Füge ein PDF hinzu, sieh dir jede Seite in der Vorschau an, bring sie in die gewünschte Reihenfolge und lade die neu angeordnete Datei herunter. Nichts wird auf einen Server geladen.",
  },
  privacyNote:
    "Deine Datei wird lokal in deinem Browser verarbeitet und nie auf einen Server geladen. Nichts verlässt dein Gerät.",
  howTo: {
    heading: "So ordnest du PDF-Seiten neu an",
    steps: [
      {
        title: "PDF hinzufügen",
        body: "Ziehe ein PDF per Drag-and-drop hierher oder klicke, um eines von deinem Gerät auszuwählen.",
      },
      {
        title: "Vorschauen prüfen",
        body: "Jede Seite wird als Miniaturansicht gerendert, damit du genau siehst, was du verschiebst.",
      },
      {
        title: "Seiten verschieben",
        body: "Nutze die Auf-/Ab-Pfeile an jeder Seite, um sie im Dokument nach vorn oder hinten zu verschieben.",
      },
      {
        title: "Erstellen und herunterladen",
        body: "Klicke auf PDF neu anordnen. Das neu angeordnete PDF wird lokal erstellt und automatisch heruntergeladen.",
      },
    ],
  },
  useCases: {
    heading: "Wann Neuanordnen hilft",
    items: [
      {
        title: "Scan-Reihenfolge korrigieren",
        body: "Handy- und Scanner-Apps erfassen Seiten oft in der falschen Reihenfolge — bring sie vor dem Teilen in Ordnung.",
      },
      {
        title: "Deckblatt oder Anhang verschieben",
        body: "Zieh ein Deckblatt nach vorn oder schiebe ergänzendes Material ans Ende.",
      },
      {
        title: "Eine zusammengeführte Datei neu zusammensetzen",
        body: "Bring die Seiten nach dem Kombinieren von Dokumenten genau in die gewünschte Lesereihenfolge.",
      },
      {
        title: "Für den Druck vorbereiten",
        body: "Ordne Seiten für Broschüren, Handouts oder doppelseitigen Druck an.",
      },
    ],
  },
  limitations: {
    heading: "Ehrliche Grenzen",
    items: [
      {
        title: "Passwortgeschützte PDFs",
        body: "Verschlüsselte Dateien können im Browser nicht geöffnet werden. Entsperre sie zuerst oder nutze die App PDF Editor.",
      },
      {
        title: "Sehr große PDFs",
        body: "Das Rendern einer Miniaturansicht für jede Seite braucht Arbeitsspeicher. Bei Hunderten Seiten kann es langsam sein oder an Browsergrenzen stoßen.",
      },
      {
        title: "Miniaturansichten brauchen einen Moment",
        body: "Die Vorschauen werden Seite für Seite auf deinem Gerät gerendert, daher brauchen große PDFs ein paar Sekunden, bevor du sie neu anordnen kannst.",
      },
    ],
  },
  related: [
    { label: "PDFs zusammenführen", path: "/merge-pdf" },
    { label: "Ein PDF teilen", path: "/split-pdf" },
    { label: "PDF-Seiten drehen", path: "/rotate-pdf" },
    { label: "PDF-Seiten extrahieren", path: "/extract-pdf-pages" },
  ],
  faq: [
    {
      q: "Wird meine Datei an einen Server gesendet?",
      a: "Nein. Das PDF wird vollständig in deinem Browser gerendert und neu erstellt. Deine Datei verlässt dein Gerät nie.",
    },
    {
      q: "Kann ich Seiten per Drag-and-drop neu anordnen?",
      a: "Das Neuanordnen erfolgt über klare Auf-/Ab-Buttons an jeder Seite. Das funktioniert zuverlässig auf Handy und Desktop, ohne winzige Zieh-Griffe.",
    },
    {
      q: "Ändern sich Seiteninhalt oder Qualität?",
      a: "Nein. Die Seiten werden exakt unverändert kopiert — nur ihre Reihenfolge ändert sich. Der Text bleibt markierbar.",
    },
    {
      q: "Warum dauert es nach dem Hinzufügen einen Moment?",
      a: "Jede Seite wird lokal als Vorschau-Miniaturansicht gerendert, damit du siehst, was du verschiebst. Größere PDFs brauchen etwas länger.",
    },
    {
      q: "Kann ich ein passwortgeschütztes PDF neu anordnen?",
      a: "Im Browser nicht. Entferne zuerst das Passwort oder nutze die App PDF Editor, die auch geschützte Dateien verarbeitet.",
    },
  ],
  appCta: {
    heading: "PDF-Tools für unterwegs gesucht?",
    sub: "PDF Editor für iPhone und Android ordnet Seiten ebenfalls neu an, führt sie zusammen und unterschreibt sie direkt vom Handy aus.",
  },
};

export default content;
