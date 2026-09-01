import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blurry",
  h1: "Warum ist mein PDF unscharf? Auflösung, Komprimierung und Scan-Ursachen",
  description:
    "Unscharfe PDFs entstehen durch niedrig aufgelöste Scans, aggressive Komprimierung oder einen missglückten Export – nicht durch das Format selbst. Wie du die Ursache erkennst und die Schärfe zurückbekommst.",
  updated: "2026-05-29",
  intro: [
    "Das PDF-Format selbst macht nichts unscharf. Es speichert glasklaren Vektortext und hochauflösende Bilder ganz problemlos. Wirkt ein PDF also weich, verwaschen oder pixelig, hat die Unschärfe eine konkrete Ursache: eine niedrig aufgelöste Aufnahme, eine zu starke Komprimierung oder eine Export-Einstellung, die scharfen Inhalt in Bitmaps umgewandelt hat.",
    "Zu wissen, welche dieser Ursachen bei deiner Datei zutrifft, ist wichtig, weil die Lösungen völlig unterschiedlich sind. Eine bereits komprimierte Datei lässt sich nicht wieder „entkomprimieren“, aber du kannst aus der Quelle neu exportieren, mit besserer Auflösung neu scannen oder ein anderes Konvertierungstool wählen. Bei manchen Dateien ist die Unschärfe zudem nur ein Anzeigeproblem – das Original liegt weiterhin in voller Qualität vor, wird vom Anzeigeprogramm nur kleiner dargestellt.",
    "Diese Anleitung trennt die Ursachen und zeigt die praktische Lösung für jede – auch für die Fälle, in denen nur der Weg zurück zur Quelle wirklich hilft.",
  ],
  steps: [
    {
      title: "Zoome hinein und schau dir die Kanten an",
      body: "Sind die Kanten von Text scharf, Bilder aber unscharf, ist der Text Vektortext (sauber) und nur die Fotos sind verschlechtert – meist durch Komprimierung. Ist der ganze Text unscharf, ist die gesamte Seite ein Rasterbild, was auf einen Scan oder einen Export als Bild hindeutet.",
    },
    {
      title: "Prüfe die ursprüngliche Aufnahmeauflösung",
      body: "Scans unter 150 DPI wirken immer unscharf. 200 bis 300 DPI sind der sichere Bereich für Dokumente, die am Bildschirm gelesen werden; 600 DPI ist außer für Archivzwecke und den Fotodruck übertrieben.",
    },
    {
      title: "Prüfe, ob die Komprimierung zu stark war",
      body: "Dateien mit der Einstellung „extrem“ komprimiert sehen bei 100 % Zoom oft noch gut aus, bei 200 % dagegen schlecht. Hast du das unkomprimierte Original noch, kannst du mit einer milderen Einstellung neu komprimieren – das Tool PDF komprimieren lässt dich Dateigröße gegen Schärfe abwägen.",
    },
    {
      title: "Exportiere erneut aus der Quelle, wenn du sie hast",
      body: "Dokumente aus Word, Pages, Google Docs oder Design-Tools solltest du direkt aus der Quelle als PDF exportieren – nicht über einen Screenshot als PDF drucken. Der direkte Export hält Text als Vektor und damit scharf.",
    },
    {
      title: "Scanne mit schärferen Einstellungen neu",
      body: "Liegt das Problem am Scan und du hast das Papier noch, wiederhole den Scan mit 300 DPI und gutem Licht. Handy-Scans profitieren enorm davon, wenn eine einzelne Seite flach liegt und gleichmäßig beleuchtet ist – eine saubere Aufnahme schlägt jede Nachbearbeitung.",
    },
    {
      title: "Prüfe, ob die Datei nur am Bildschirm verkleinert dargestellt wird",
      body: "Manche Anzeigeprogramme verkleinern aus Performance-Gründen und wirken erst beim Hineinzoomen scharf. Exportiere eine Seite mit PDF zu Bildern bei 2- oder 3-facher Auflösung als PNG – ist das PNG scharf, hat dich nur dein Anzeigeprogramm getäuscht.",
    },
  ],
  tips: [
    "Text, der sich mit dem Cursor markieren lässt, ist Vektortext und sollte nicht unscharf sein. Ist er es doch, verkleinert nur dein Anzeigeprogramm die Darstellung – probiere ein anderes, bevor du neu exportierst.",
    "Handy-Screenshots, die in ein Dokument eingefügt werden, sind bereits niedrig aufgelöst. Sie wirken im PDF immer weich – die einzige Lösung ist eine neue Aufnahme in höherer Auflösung.",
    "Komprimiere eine Datei nicht zweimal. Wiederholte Komprimierung addiert die Unschärfe. Behalte das Original, komprimiere einmal zum Teilen und archiviere die Quelle.",
    "PDFs mit vielen JPEG-Bildern werden bei gleicher Komprimierung unschärfer als solche mit PNG-Bildern – JPEG ist von Haus aus verlustbehaftet. PNG-Screenshots bleiben länger scharf.",
    "Hast du nur eine unscharfe Version, kann OCR manchmal lesbaren Text zurückgewinnen, selbst wenn das Bild verwaschen wirkt. Der Text wird dann sauber, auch wenn das Bild es nicht ist.",
  ],
  mobileNote:
    "Am Handy aufgenommene PDFs werden meist durch zittrige Hände, schlechtes Licht oder einen ungünstigen Bildausschnitt unscharf. Der Scan-Ablauf der App PDF Editor umfasst automatische Kantenerkennung und Stabilisierung, sodass eine einzige ruhige Aufnahme pro Seite schon beim ersten Versuch ein scharfes Dokument ergibt.",
  faq: [
    {
      q: "Verursacht das PDF-Format selbst die Unschärfe?",
      a: "Nein. PDF speichert Text als Vektoren und Bilder in ihrer ursprünglichen Auflösung. Die Unschärfe kommt aus der Quelle – niedriger DPI-Wert, zu starke Komprimierung oder ein Export über einen Bildschirmausschnitt.",
    },
    {
      q: "Kann ich ein unscharfes PDF nachträglich schärfen?",
      a: "Nur sehr begrenzt. Manche Bildbearbeitung kann bei Fotos Schärfe vortäuschen, aber Details, die nie aufgenommen wurden, lassen sich nicht hinzufügen. Die ehrliche Lösung ist, den Ursprungsschritt zu wiederholen.",
    },
    {
      q: "Warum ist mein komprimiertes PDF nur auf manchen Seiten unscharf?",
      a: "Komprimierung trifft bildlastige Seiten am stärksten. Reine Textseiten bleiben scharf. Sind nur manche Seiten unscharf, sind das die mit Fotos, Diagrammen oder Scans.",
    },
    {
      q: "Welche Scan-Auflösung sollte ich verwenden?",
      a: "200 bis 300 DPI für Dokumente, die am Bildschirm gelesen werden. 300 DPI für alles, was auch gedruckt werden könnte. 600 DPI nur für Fotos und Archivzwecke.",
    },
    {
      q: "Warum sieht das PDF bei 100 % gut aus, bei 200 % aber unscharf?",
      a: "Entweder wurde es mit niedriger Auflösung rasterisiert, oder es wurde so stark komprimiert, dass Zoomen den Verlust sichtbar macht. Ohne erneuten Export lässt sich das Detail nicht zurückholen.",
    },
  ],
  related: [
    { label: "PDF komprimieren – mildere Einstellungen für schärfere Ergebnisse", path: "/compress-pdf" },
    { label: "PDF zu Bildern – Seiten in hoher Auflösung exportieren", path: "/pdf-to-images" },
    { label: "Die besten Einstellungen für PDF-Komprimierung", path: "/guides/best-pdf-compression-settings" },
    { label: "Qualität eines gescannten PDFs verbessern", path: "/guides/how-to-fix-scanned-pdf-quality" },
  ],
  parentHub: { label: "PDF zu Bildern – scharfe Seitenexporte", path: "/pdf-to-images" },
};

export default content;
