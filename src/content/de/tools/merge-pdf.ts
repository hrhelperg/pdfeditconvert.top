import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "merge-pdf",
  hero: {
    eyebrow: "PDF zusammenführen",
    h1: "PDFs zu einem Dokument zusammenführen — direkt im Browser.",
    highlight: "direkt im Browser",
    lead: "Füge zwei oder mehr PDF-Dateien hinzu und kombiniere sie zu einem Dokument. Ordne sie vor dem Zusammenführen neu an — deine Dateien bleiben auf deinem Gerät.",
  },
  privacyNote:
    "Deine Dateien werden lokal in deinem Browser verarbeitet und nie auf einen Server geladen. Nichts verlässt dein Gerät.",
  howTo: {
    heading: "So führst du PDFs zusammen",
    steps: [
      {
        title: "PDFs hinzufügen",
        body: "Ziehe zwei oder mehr PDFs per Drag-and-drop hierher oder klicke, um sie von deinem Gerät auszuwählen.",
      },
      {
        title: "Bei Bedarf neu anordnen",
        body: "Nutze die Pfeile an jeder Zeile, um die Seiten vor dem Zusammenführen in die richtige Reihenfolge zu bringen.",
      },
      {
        title: "Zusammenführen",
        body: "Klicke auf PDFs zusammenführen. Deine Dateien werden lokal in deinem Browser kombiniert.",
      },
      {
        title: "Herunterladen",
        body: "Das kombinierte PDF wird automatisch heruntergeladen. Benenne es nach dem Speichern um.",
      },
    ],
  },
  useCases: {
    heading: "Wann Zusammenführen die richtige Wahl ist",
    items: [
      {
        title: "Eine Datei statt fünf verschicken",
        body: "Kunden, Steuerberater und Anwälte bevorzugen ein Dokument gegenüber einer ganzen Kette von Anhängen.",
      },
      {
        title: "Angebot, Vertrag und Rechnung bündeln",
        body: "Erstelle aus Dokumenten verschiedener Tools eine einzige, prüfungssichere Datei.",
      },
      {
        title: "Gescannte Seiten zusammenpacken",
        body: "Kombiniere seitenweise Scans eines Passes, Ausweises oder Vertrags zu einem Dokument, das ein Portal akzeptiert.",
      },
      {
        title: "Einen Bericht zusammenstellen",
        body: "Füge Deckblatt, Haupt-PDF und Anhänge zu einem fertigen Dokument zusammen.",
      },
    ],
  },
  limitations: {
    heading: "Grenzen",
    items: [
      {
        title: "Passwortgeschützte PDFs",
        body: "Gesperrte Dateien können im Browser nicht zusammengeführt werden. Entsperre sie zuerst mit der Ursprungs-App oder nutze die App PDF Editor.",
      },
      {
        title: "Sehr große Sammlungen",
        body: "Dem Browser geht der Speicher deutlich früher aus als einer nativen App. Bei 50 oder mehr Dateien oder riesigen Scans nutze die App PDF Editor.",
      },
      {
        title: "Lesezeichen und Formularfelder",
        body: "Manche eingebettete Strukturen (Formularfelder, Anmerkungen) werden beim Zusammenführen möglicherweise fest in die Seite eingebettet. Die mobile App erhält sie zuverlässiger.",
      },
    ],
  },
  related: [
    { label: "PDF teilen — der umgekehrte Weg", path: "/split-pdf" },
    { label: "PDF-Seiten drehen", path: "/rotate-pdf" },
    { label: "Ein PDF komprimieren", path: "/compress-pdf" },
    { label: "PDF-Seiten neu anordnen", path: "/reorder-pdf-pages" },
    { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
    { label: "Anleitung: So führst du PDFs zusammen", path: "/guides/how-to-merge-pdf-files" },
  ],
  faq: [
    {
      q: "Werden meine Dateien an einen Server gesendet?",
      a: "Nein. Das Zusammenführen läuft vollständig in deinem Browser. Deine Dateien verlassen dein Gerät nie.",
    },
    {
      q: "Gibt es ein Limit, wie viele PDFs ich zusammenführen kann?",
      a: "Es gibt kein festes Limit, aber wir empfehlen, einen einzelnen Durchgang unter 30 Dateien oder rund 500 MB insgesamt zu halten, damit der Browser reaktionsschnell bleibt.",
    },
    {
      q: "Kann ich passwortgeschützte PDFs zusammenführen?",
      a: "Im Browser nicht. Entferne zuerst das Passwort oder nutze die App PDF Editor, die auch geschützte Dateien verarbeitet.",
    },
    {
      q: "Ändert sich die ursprüngliche Formatierung?",
      a: "Nein. Jede Ausgangsseite bleibt exakt erhalten. Nur die Seitenreihenfolge und das umschließende Dokument ändern sich.",
    },
    {
      q: "Kann ich es später wieder trennen?",
      a: "Ja. Nutze das Tool PDF teilen, um jede zusammengeführte Datei wieder in Seiten oder Bereiche aufzuteilen.",
    },
  ],
  appCta: {
    heading: "PDF-Tools für unterwegs gesucht?",
    sub: "PDF Editor für iPhone und Android führt PDFs zusammen, unterschreibt und scannt sie direkt vom Handy aus.",
  },
};

export default content;
