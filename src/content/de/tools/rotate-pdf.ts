import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "rotate-pdf",
  hero: {
    eyebrow: "PDF drehen",
    h1: "Quer liegende PDF-Seiten korrigieren — direkt im Browser.",
    highlight: "direkt im Browser",
    lead: "Drehe alle Seiten oder nur ausgewählte und lade danach ein korrigiertes PDF herunter — alles direkt im Browser.",
  },
  privacyNote:
    "Deine Datei wird lokal in deinem Browser verarbeitet und nie auf einen Server geladen. Nichts verlässt dein Gerät.",
  howTo: {
    heading: "So drehst du ein PDF",
    steps: [
      {
        title: "PDF hinzufügen",
        body: "Ziehe ein einzelnes PDF per Drag-and-drop hierher oder klicke, um es auszuwählen.",
      },
      {
        title: "Winkel wählen",
        body: "Wähle 90°, 180° oder 270° (im Uhrzeigersinn).",
      },
      {
        title: "Seiten auswählen",
        body: "Drehe jede Seite oder gib Seitenzahlen ein (z. B. 1,3-5).",
      },
      {
        title: "Drehen und herunterladen",
        body: "Klicke auf PDF drehen. Wir erstellen das PDF lokal mit der neuen Ausrichtung neu.",
      },
    ],
  },
  useCases: {
    heading: "Wann Drehen die richtige Wahl ist",
    items: [
      {
        title: "Handyscans landen quer",
        body: "Scans aus der Kamerarolle werden oft im Querformat gespeichert — dreh sie mit einem Klick zurecht.",
      },
      {
        title: "Berichte mit gemischter Ausrichtung",
        body: "Breite Tabellen im Querformat mitten in einem Hochformat-Bericht? Korrigier sie, ohne neu zu scannen.",
      },
      {
        title: "Pässe und Ausweise",
        body: "Sorg dafür, dass jede Seite gleich herum liegt, bevor sich ein Behördenportal beschwert.",
      },
      {
        title: "Belege und Rechnungen",
        body: "Bring einen Stapel Belegfotos vor dem Zusammenführen in eine einheitliche Leserichtung.",
      },
    ],
  },
  limitations: {
    heading: "Grenzen",
    items: [
      {
        title: "Passwortgeschützte PDFs",
        body: "Gesperrte Dateien können im Browser nicht gedreht werden. Entsperre sie zuerst oder nutze die App PDF Editor.",
      },
      {
        title: "Individuelle Winkel pro Seite",
        body: "Dieses Tool wendet jeweils einen Winkel an. Für gemischte Winkel führe es zweimal mit unterschiedlicher Seitenauswahl aus.",
      },
      {
        title: "Anmerkungen und Formularfelder",
        body: "Die Drehung kann Overlays optisch verschieben. Die mobile App behandelt Anmerkungen sauberer.",
      },
    ],
  },
  related: [
    { label: "PDFs zusammenführen", path: "/merge-pdf" },
    { label: "PDF teilen", path: "/split-pdf" },
    { label: "Wasserzeichen zu PDF hinzufügen", path: "/add-watermark-to-pdf" },
    { label: "PDF-Seiten neu anordnen", path: "/reorder-pdf-pages" },
    { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Wird meine Datei an einen Server gesendet?",
      a: "Nein. Das Drehen läuft vollständig in deinem Browser; nichts verlässt dein Gerät.",
    },
    {
      q: "Kann ich nur einzelne Seiten drehen?",
      a: "Ja. Nutze das Feld für die Seitenauswahl, z. B. 1,3-5,9.",
    },
    {
      q: "Verschlechtert die Drehung die Qualität?",
      a: "Nein. Die Seiten bleiben Byte für Byte erhalten — wir setzen nur die Metadaten zur Drehung.",
    },
    {
      q: "Kann ich ein passwortgeschütztes PDF drehen?",
      a: "Im Browser nicht. Entferne zuerst das Passwort oder nutze die App PDF Editor.",
    },
  ],
  appCta: {
    heading: "Auch vom Handy aus drehen.",
    sub: "PDF Editor für iPhone und Android bearbeitet, dreht und unterschreibt PDFs offline.",
  },
};

export default content;
