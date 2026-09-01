import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "extract-pdf-pages",
  hero: {
    eyebrow: "PDF-Seiten extrahieren",
    h1: "Seiten aus einem PDF extrahieren — direkt im Browser.",
    highlight: "direkt im Browser",
    lead: "Füge ein PDF hinzu, gib die Seiten oder Bereiche ein, die du brauchst, und lade ein neues PDF nur mit diesen Seiten herunter. Alles läuft auf deinem Gerät.",
  },
  privacyNote:
    "Deine Datei wird lokal in deinem Browser verarbeitet und nie auf einen Server geladen. Nichts verlässt dein Gerät.",
  howTo: {
    heading: "So extrahierst du PDF-Seiten",
    steps: [
      {
        title: "PDF hinzufügen",
        body: "Ziehe ein PDF per Drag-and-drop hierher oder klicke, um eines auszuwählen. Wir zeigen dir die Gesamtseitenzahl.",
      },
      {
        title: "Seiten eingeben",
        body: "Gib einzelne Seiten und Bereiche ein, z. B. 1-3,5,8-10. Die Anzahl der ausgewählten Seiten aktualisiert sich beim Tippen.",
      },
      {
        title: "Extrahieren",
        body: "Klicke auf Seiten extrahieren. Ein neues PDF nur mit diesen Seiten wird lokal erstellt.",
      },
      {
        title: "Herunterladen",
        body: "Das extrahierte PDF wird automatisch heruntergeladen.",
      },
    ],
  },
  useCases: {
    heading: "Wann Extrahieren hilft",
    items: [
      {
        title: "Nur das Nötige teilen",
        body: "Verschick nur einen Abschnitt, ein Kapitel oder eine unterschriebene Seite statt des gesamten Dokuments.",
      },
      {
        title: "Ein Formular oder einen Beleg herausziehen",
        body: "Hol dir genau die eine Seite, die ein Portal verlangt, ohne den Rest preiszugeben.",
      },
      {
        title: "Ein Kapitel heraustrennen",
        body: "Erstelle aus einem langen Bericht oder Buch ein fokussiertes PDF zum Lernen oder Prüfen.",
      },
      {
        title: "Ein individuelles Paket zusammenstellen",
        body: "Ordne eine Auswahl neu an, indem du die Seiten in der gewünschten Reihenfolge aufzählst.",
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
        title: "Seiten außerhalb des Bereichs",
        body: "Seitenzahlen über der Dokumentlänge werden ignoriert; ist keine gültige Auswahl übrig, bekommst du eine klare Fehlermeldung.",
      },
      {
        title: "Sehr große PDFs",
        body: "Dem Browser geht der Speicher deutlich früher aus als einer nativen App. Nutze für riesige Dateien die App PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Ein PDF teilen", path: "/split-pdf" },
    { label: "PDF-Seiten neu anordnen", path: "/reorder-pdf-pages" },
    { label: "Ein PDF komprimieren", path: "/compress-pdf" },
    { label: "PDFs zusammenführen", path: "/merge-pdf" },
  ],
  faq: [
    {
      q: "Wird meine Datei an einen Server gesendet?",
      a: "Nein. Die Extraktion läuft vollständig in deinem Browser. Deine Datei verlässt dein Gerät nie.",
    },
    {
      q: "Welche Seitenformate kann ich eingeben?",
      a: "Einzelne Seiten und durch Kommas getrennte Bereiche: 1-3, 2,4,6 oder 1-2,5,8-10. Leerzeichen sind kein Problem.",
    },
    {
      q: "Was passiert bei einem ungültigen Bereich?",
      a: "Ungültige Angaben werden mit einer klaren Meldung abgelehnt; Zahlen außerhalb des Bereichs werden ignoriert. Bleibt nichts Gültiges übrig, wird dir gesagt, warum.",
    },
    {
      q: "Kann ich Seiten wiederholen oder neu anordnen?",
      a: "Ja. Zähl die Seiten in der gewünschten Reihenfolge auf — eine wiederholte Seite erscheint dann mehrfach.",
    },
    {
      q: "Ändert das Extrahieren die Qualität?",
      a: "Nein. Die ausgewählten Seiten werden exakt unverändert kopiert — der Text bleibt markierbar, und nichts wird neu komprimiert.",
    },
  ],
  appCta: {
    heading: "PDF-Tools für unterwegs gesucht?",
    sub: "PDF Editor für iPhone und Android extrahiert und teilt PDF-Seiten ebenfalls und unterschreibt sie direkt vom Handy aus.",
  },
};

export default content;
