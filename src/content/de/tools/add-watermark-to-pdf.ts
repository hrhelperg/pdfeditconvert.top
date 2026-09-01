import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "add-watermark-to-pdf",
  hero: {
    eyebrow: "Wasserzeichen hinzufügen",
    h1: "Ein Text-Wasserzeichen auf jede Seite eines PDFs setzen.",
    highlight: "jede Seite",
    lead: "Füge vor dem Teilen deines PDFs ein einfaches Text-Wasserzeichen hinzu — wähle Position, Deckkraft, Schriftgröße und Winkel.",
  },
  privacyNote:
    "Deine Datei wird lokal in deinem Browser verarbeitet und nie auf einen Server geladen. Nichts verlässt dein Gerät.",
  howTo: {
    heading: "So fügst du ein Wasserzeichen hinzu",
    steps: [
      {
        title: "PDF hinzufügen",
        body: "Ziehe ein einzelnes PDF per Drag-and-drop hierher oder klicke, um es auszuwählen.",
      },
      {
        title: "Wasserzeichentext eingeben",
        body: "Bis zu rund 40 Zeichen funktionieren am besten. Beispiele: VERTRAULICH, ENTWURF, Muster.",
      },
      {
        title: "Deckkraft und Winkel anpassen",
        body: "Niedrigere Deckkraft für dezent, höhere für auffällig. 45° passt für die meisten Layouts.",
      },
      {
        title: "Herunterladen",
        body: "Wir erstellen das PDF lokal mit dem Wasserzeichen auf jeder Seite neu.",
      },
    ],
  },
  useCases: {
    heading: "Wann Wasserzeichen nützlich sind",
    items: [
      {
        title: "Entwürfe in der Prüfung",
        body: "Markiere Dokumente als ENTWURF, bevor du sie verteilst, um Missverständnisse zu vermeiden.",
      },
      {
        title: "Vertrauliche Inhalte",
        body: "Stemple VERTRAULICH auf sensible Verträge oder Finanzunterlagen, bevor du sie teilst.",
      },
      {
        title: "Musterunterlagen",
        body: "Versieh Portfolio-Muster mit einem Wasserzeichen, damit sie nicht ohne Erlaubnis weiterverwendet werden.",
      },
      {
        title: "Nur interne Dokumente",
        body: "Markiere Dokumente, die nicht für die externe Weitergabe gedacht sind.",
      },
    ],
  },
  limitations: {
    heading: "Grenzen",
    items: [
      {
        title: "Nur Text-Wasserzeichen",
        body: "Dieses Tool stempelt Text. Für Bild- oder Logo-Wasserzeichen nutze die App PDF Editor.",
      },
      {
        title: "Nur Standardschriftarten",
        body: "Wir verwenden die eingebaute Schriftart Helvetica, damit das Ergebnis portabel bleibt. Eigene Schriftarten werden nicht eingebettet.",
      },
      {
        title: "Wasserzeichen lassen sich entfernen",
        body: "Ein Wasserzeichen ist kein rechtlicher Schutz. Es hält von beiläufigem Missbrauch ab, nicht von gezielter Bearbeitung.",
      },
    ],
  },
  related: [
    { label: "PDFs zusammenführen", path: "/merge-pdf" },
    { label: "PDF teilen", path: "/split-pdf" },
    { label: "PDF drehen", path: "/rotate-pdf" },
    { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Wird meine Datei an einen Server gesendet?",
      a: "Nein. Das Wasserzeichen wird vollständig in deinem Browser gesetzt; nichts verlässt dein Gerät.",
    },
    {
      q: "Kann ich eine andere Schriftart verwenden?",
      a: "In diesem Tool nicht — wir nutzen Helvetica, damit das Ergebnis portabel bleibt. Für eigene Schriftarten nutze die App PDF Editor.",
    },
    {
      q: "Erscheint das Wasserzeichen auf jeder Seite?",
      a: "Ja. Derselbe Text wird diagonal zentriert auf jeder Seite platziert.",
    },
    {
      q: "Kann ein Wasserzeichen entfernt werden?",
      a: "Von jemandem mit den richtigen Werkzeugen schon. Ein Wasserzeichen hält von beiläufigem Missbrauch ab, ist aber kein Sicherheitsmerkmal.",
    },
  ],
  appCta: {
    heading: "Brauchst du Bild- oder Logo-Wasserzeichen?",
    sub: "PDF Editor für iPhone und Android unterstützt eigene Schriftarten, Bilder und Platzierung pro Seite.",
  },
};

export default content;
