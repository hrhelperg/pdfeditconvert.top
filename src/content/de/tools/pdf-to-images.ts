import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-images",
  hero: {
    eyebrow: "PDF zu Bildern",
    h1: "Jede PDF-Seite als PNG oder JPG exportieren.",
    highlight: "PNG oder JPG",
    lead: "Verwandle PDF-Seiten in herunterladbare PNG- oder JPEG-Bilddateien — gerendert direkt in deinem Browser.",
  },
  privacyNote:
    "Deine Datei wird lokal in deinem Browser gerendert und nie auf einen Server geladen. Nichts verlässt dein Gerät.",
  howTo: {
    heading: "So wandelst du ein PDF in Bilder um",
    steps: [
      {
        title: "PDF hinzufügen",
        body: "Ziehe ein einzelnes PDF per Drag-and-drop hierher oder klicke, um es auszuwählen.",
      },
      {
        title: "Format wählen",
        body: "Wähle PNG für sauberen Text und Transparenz oder JPG für kleinere Dateien.",
      },
      {
        title: "Skalierung wählen",
        body: "Höhere Skalierung bedeutet schärfere Bilder, aber größere Dateien. 2× passt meistens.",
      },
      {
        title: "Herunterladen",
        body: "Jede Seite wird als eigenes Bild heruntergeladen.",
      },
    ],
  },
  useCases: {
    heading: "Wann dieses Tool nützlich ist",
    items: [
      {
        title: "Eine Seite in Slack teilen",
        body: "Bildvorschauen werden dort inline dargestellt, wo PDFs es nicht werden.",
      },
      {
        title: "Ein Diagramm in einer Präsentation weiterverwenden",
        body: "Zieh eine Seite heraus und füge sie in eine Folie ein.",
      },
      {
        title: "Miniaturansichten erstellen",
        body: "Erstelle ein Kontaktblatt aus PDF-Seiten für einen schnellen Überblick.",
      },
      {
        title: "Webvorschauen",
        body: "Nutze gerenderte Bilder als leichte Vorschau auf einer Website.",
      },
    ],
  },
  limitations: {
    heading: "Grenzen",
    items: [
      {
        title: "Browser-Speicher",
        body: "Sehr große PDFs bei hoher Skalierung können den Speicher erschöpfen. Versuch es mit 1,5× Skalierung oder teile das PDF vorher.",
      },
      {
        title: "Passwortgeschützte PDFs",
        body: "Verschlüsselte Dateien können nicht gerendert werden. Entsperre sie zuerst oder nutze die App PDF Editor.",
      },
      {
        title: "Vektorinhalt wird zu Rastergrafik",
        body: "Bilder erhalten keinen durchsuchbaren Text. Bewahre dafür das ursprüngliche PDF auf.",
      },
    ],
  },
  related: [
    { label: "Bild zu PDF — der umgekehrte Weg", path: "/image-to-pdf" },
    { label: "PDF teilen", path: "/split-pdf" },
    { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Wird meine Datei an einen Server gesendet?",
      a: "Nein. Das Rendern läuft vollständig in deinem Browser; nichts verlässt dein Gerät.",
    },
    {
      q: "PNG oder JPG — was soll ich wählen?",
      a: "PNG ist schärfer für Text und unterstützt Transparenz. JPG ist kleiner und eignet sich gut für Fotos und ganzseitige Screenshots.",
    },
    {
      q: "Was bedeutet Skalierung?",
      a: "Wie viele Bildpixel pro PDF-Punkt entstehen. 2× liefert scharfe Ergebnisse auf Retina-Bildschirmen. 3× ist groß, aber sehr klar.",
    },
    {
      q: "Kann ich alle Seiten als ein ZIP-Archiv bekommen?",
      a: "Noch nicht — die Seiten werden einzeln heruntergeladen. Für Sammelexporte ist die mobile App PDF Editor schneller.",
    },
  ],
  appCta: {
    heading: "PDF-Tools offline gesucht?",
    sub: "PDF Editor für iPhone und Android rendert Seiten sofort mit Hardwarebeschleunigung.",
  },
};

export default content;
