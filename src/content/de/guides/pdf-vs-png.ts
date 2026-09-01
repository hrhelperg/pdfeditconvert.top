import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-png",
  h1: "PDF oder PNG – mehrseitige Dokumente gegen ein scharfes Einzelbild",
  description:
    "PDF gewinnt bei mehrseitigen Dokumenten, PNG bei einem einzelnen, scharfen Bild mit transparentem Hintergrund. Die klaren Regeln und wie du zwischen beiden umwandelst.",
  updated: "2026-05-29",
  intro: [
    "PDF und PNG sind beide hervorragend in dem, wofür sie gedacht sind — nur eben für unterschiedliche Dinge. PDF hält mehrseitige Dokumente mit markierbarem Text, eingebetteten Schriftarten, Unterschriften und Struktur. PNG hält einzelne Rasterbilder mit verlustfreier Komprimierung und Transparenzunterstützung. Jedes ist das falsche Werkzeug für die Aufgabe des anderen, und die Verwirrung entsteht meist, wenn jemand PNG nutzt, um etwas zu verschicken, das eigentlich ein Dokument ist.",
    "PNG glänzt, wenn du ein scharfes, exaktes Einzelbild brauchst — ein Logo mit transparentem Hintergrund, einen Screenshot, ein Diagramm, eine Grafik. Die Pixel sind die Daten; es gibt keinen zugrunde liegenden Text. PDF glänzt, wenn du Seiten, Schriftarten, Textmarkierung oder irgendeine mehrstufige Struktur brauchst.",
    "Diese Anleitung gibt klare Regeln, wann du welches nutzt, die Umwandlung zwischen beiden in beide Richtungen, und die Fälle, in denen die Wahl wirklich Ermessenssache ist.",
  ],
  steps: [
    {
      title: "Nutze PDF für alles Mehrseitige",
      body: "Jedes Dokument mit zwei oder mehr Seiten sollte ein PDF sein, keine Abfolge von PNGs. PDF hält die Seiten zusammen, bewahrt die Reihenfolge und tritt als eine einzige Datei auf, die die Empfängerin der Reihe nach lesen kann.",
    },
    {
      title: "Nutze PNG für scharfe Einzelbilder mit Transparenz",
      body: "Logos mit transparentem Hintergrund, Diagramme, Screenshots — PNG ist das richtige Format. Verlustfreie Komprimierung hält Text und Linien scharf; der Alphakanal unterstützt Transparenz.",
    },
    {
      title: "Nutze PNG nicht für fotografische Inhalte",
      body: "Fotos werden als PNG groß und profitieren nicht von der verlustfreien Komprimierung. JPG verarbeitet Fotos mit ähnlicher visueller Qualität bei einem Bruchteil der Größe.",
    },
    {
      title: "Wandle PDF in PNG um, um Seiten als Bilder zu extrahieren",
      body: "PDF in Bilder exportiert jede PDF-Seite als hochauflösendes PNG. Praktisch, wenn du eine Seite als Einzelbild für Folien, Webseiten oder Design-Tools brauchst.",
    },
    {
      title: "Wandle PNG in PDF um, um Screenshots zu einem Dokument zu bündeln",
      body: "PNG in PDF oder Bild in PDF fügt PNG-Screenshots zu einem einzigen PDF zusammen. Praktisch, wenn du viele Screenshots gemacht hast und sie als eine geordnete Datei teilen willst.",
    },
    {
      title: "Bei textlastigen Einzelseiten ist PDF immer noch besser",
      body: "Selbst eine einzelne Seite mit Textinhalt profitiert von PDF gegenüber PNG — der Text bleibt markierbar, die Dateigröße ist kleiner, und die Empfängerin kann aus der Datei kopieren.",
    },
  ],
  tips: [
    "PNG für einen Screenshot ist in Ordnung; PNG für ein mehrseitiges Dokument ist falsch. Mehrseitiges gehört ins PDF.",
    "Enthält dein PNG Fotos, wechsle zu JPG — gleiche visuelle Qualität, viel kleinere Datei.",
    "Die Umwandlung von PNG zu PDF erhält das Bild in voller Auflösung; kein Qualitätsverlust.",
    "Bei der Umwandlung von PDF zu PNG kannst du die Auflösung festlegen. Höher ist schärfer, aber größer; der Faktor 2× ist meist die richtige Balance.",
    "Exportiere ein Dokument, das du als PDF hast, nicht einfach „nach PNG“, außer du brauchst gezielt das Bildformat. Das PDF ist meist nützlicher.",
  ],
  mobileNote:
    "Handys erfassen Inhalte oft als PNG-Screenshots, die eigentlich ein PDF sein sollten. Die PDF-Editor-App fügt PNG-Screenshots direkt auf dem Gerät zu einem einzigen PDF zusammen — praktisch, um mehrere Aufnahmen als eine geordnete Datei statt als verstreute Sammlung zu teilen.",
  faq: [
    {
      q: "Wann sollte ich PNG statt PDF nutzen?",
      a: "Wenn du ein einzelnes, scharfes Bild brauchst, besonders mit Transparenz. Logos, Diagramme, Screenshots, Grafiken, die in andere Dokumente eingehen.",
    },
    {
      q: "Ist PDF oder PNG bei einer einzelnen Seite kleiner?",
      a: "Kommt auf den Inhalt an. Textlastige Einzelseite: PDF gewinnt. Bildlastige Einzelseite: ähnlich, oder PNG etwas größer wegen der verlustfreien Komprimierung.",
    },
    {
      q: "Kann ich ein PNG innerhalb eines PDFs bearbeiten?",
      a: "Ja — das PDF enthält das PNG, und du kannst das Bild mit PDF-Bearbeitungstools verändern. Praktisch, um Logos oder Screenshots in ein Dokument einzufügen.",
    },
    {
      q: "Warum unterstützt PNG keine mehreren Seiten?",
      a: "PNG ist im Kern ein Bildformat. Mehrseitige Dokumentformate (PDF, TIFF) sind genau dafür gedacht. PNG nicht.",
    },
    {
      q: "Was, wenn ich viele PNGs teilen möchte?",
      a: "Bild in PDF fügt sie zu einem geordneten PDF zusammen. Empfängerinnen bekommen eine einzelne Datei statt eines Ordners voller Anhänge.",
    },
  ],
  related: [
    { label: "PDF in Bilder — Seiten als PNG oder JPG exportieren", path: "/pdf-to-images" },
    { label: "Bild in PDF — PNGs zu einem einzigen PDF zusammenführen", path: "/image-to-pdf" },
    { label: "Wie du PNG in PDF umwandelst", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Wie du PDF in PNG umwandelst", path: "/guides/how-to-convert-pdf-to-png" },
  ],
  parentHub: { label: "PDF in Bilder — Seiten als PNG oder JPG exportieren", path: "/pdf-to-images" },
};

export default content;
