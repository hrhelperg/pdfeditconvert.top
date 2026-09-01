import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-scanned-pdf-quality",
  h1: "Qualität eines gescannten PDFs verbessern (schärfen, ausrichten, Farbe korrigieren)",
  description:
    "Gescannte PDFs gehen auf vorhersehbare Weise schief: schief liegend, ausgewaschener Kontrast, fleckiger Hintergrund, riesige Dateien. Die Einstellungen vor dem Scannen und die Tools danach, die wirklich helfen.",
  updated: "2026-05-29",
  intro: [
    "Ein schlechter Scan ruiniert ein an sich unkompliziertes Dokument. Schiefe Zeilen, ausgewaschener Kontrast, durchscheinende Staubflecken, riesige Dateigröße – und der Inhalt ist schwer lesbar oder lässt sich kaum noch weiter komprimieren. Ärgerlich daran: Die meisten dieser Probleme entstehen bei der Einrichtung, nicht durch das PDF-Format selbst, und sie bei der Aufnahme zu vermeiden ist deutlich einfacher, als sie im Nachhinein zu beheben.",
    "Musst du einen schlechten Scan doch reparieren, sind die realistischen Optionen: Schiefes ausrichten, falsch gerahmtes zuschneiden, übergroße Dateien verkleinern – und akzeptieren, dass bei der Aufnahme verlorene Auflösung nicht zurückkommt. Manche Bildbearbeitungs-Tools versprechen Schärfung; in der Praxis sehen die Ergebnisse dabei nur anders aus, nicht besser.",
    "Diese Anleitung trennt Vorbeugung (gleich richtig scannen) von Rettung (was du mit der Datei tust, die du schon hast). Die Vorbeugung ist dabei die wichtigere.",
  ],
  steps: [
    {
      title: "Vermeide Schräglage durch korrekten Papiereinzug",
      body: "Scanner mit automatischem Einzug erzeugen Schräglage, wenn die Seiten nicht gerade im Einzug liegen. Handy-Scans werden schief, wenn du die Kamera schräg hältst. Beides lässt sich vermeiden: Lege die Seite gerade ein, halte das Handy parallel zum Papier – und der Scan wird gerade.",
    },
    {
      title: "Stelle die Scan-Auflösung auf 200 bis 300 DPI für Dokumente",
      body: "600 DPI ist Fotoqualität und erzeugt riesige Dateien, ohne bei einer getippten Seite einen Vorteil zu bringen. 150 DPI ist zu niedrig – Text wirkt weich. Der Bereich 200 bis 300 DPI ist der Sweet Spot für Dokumente, die du teilst, archivierst oder druckst.",
    },
    {
      title: "Wähle für Text Graustufen oder Schwarz-Weiß statt Farbe",
      body: "Der Farbmodus verdreifacht bei einem Textdokument die Dateigröße und bringt Bildrauschen mit sich, das sich schlecht komprimieren lässt. Graustufen oder Schwarz-Weiß liefern für alles außer Fotos oder Farbgrafiken schärfere, kleinere und sauberere Scans.",
    },
    {
      title: "Nutze automatischen Kontrast und automatischen Zuschnitt, wenn verfügbar",
      body: "Die meisten Scan-Apps bieten automatischen Kontrast und Kantenerkennung. Beides macht einen echten Unterschied: Der Kontrast entfernt den grauen Schleier, die Kantenerkennung schneidet exakt auf die Seite zu, sodass die Ränder sauber sind.",
    },
    {
      title: "Komprimiere vorhandene Scans mit Bedacht",
      body: "Ist ein gescanntes PDF bereits riesig, kann PDF komprimieren es direkt in deinem Browser drastisch verkleinern. Wähle bei Text nicht die Extremstufe – sie kann Zeichen verpixeln. Stark, aber nicht extrem ist die sichere Wahl.",
    },
    {
      title: "Richte schiefe Seiten mit PDF drehen aus",
      body: "Liegen nur wenige Seiten seitlich oder auf dem Kopf, richtet PDF drehen sie direkt aus. Kleine Winkelabweichungen kann es nicht korrigieren, aber es übernimmt die 90-, 180- und 270-Grad-Drehungen, die die meisten Einzugsfehler verursachen.",
    },
  ],
  tips: [
    "Helles, gleichmäßiges Licht ist bei Handy-Scans wichtiger als die Kameraqualität. Ein gut beleuchteter Handy-Scan schlägt einen schlecht beleuchteten Büroscanner-Output.",
    "Scanne nicht in hoher DPI-Zahl und Farbe, um dann stark zu komprimieren. Scanne von Anfang an mit den richtigen Einstellungen – die Datei wird kleiner, schärfer und lässt sich schneller handhaben.",
    "Durchscheinender Text von der Rückseite dünnen Papiers ist ein Papierproblem, kein Scan-Problem. Lege ein dunkles Blatt Papier hinter die Seite.",
    "Erneutes Scannen ist fast immer schneller als Nachbearbeiten. Hast du das Papier noch, behebe das Problem bei der Aufnahme, statt das Bild nachträglich zu bearbeiten.",
    "Scan-Apps, die „Verbessern“ versprechen, fügen oft eine künstliche Schärfung hinzu, die bei genauem Hinsehen schlechter wirkt. Ein sauberer Rohscan schlägt einen nachbearbeiteten schlechten.",
  ],
  mobileNote:
    "Handy-Scans gehen auf vorhersehbare Weise schief – Winkel, Licht und Fokus liegen alle in deiner Hand. Der Scan-Ablauf der App PDF Editor nutzt Kantenerkennung und Kontrastanpassung in Echtzeit, sodass jede Aufnahme schon beim ersten Versuch näher an ein Flachbett-Scan-Ergebnis herankommt.",
  faq: [
    {
      q: "Warum ist mein gescanntes PDF so ausgewaschen?",
      a: "Der Kontrast war bei der Aufnahme zu niedrig eingestellt. Scanne mit aktiviertem automatischem Kontrast neu, oder passe Helligkeit und Kontrast manuell an. Nachbearbeitung hilft nur geringfügig.",
    },
    {
      q: "Kann ich einen unscharfen Scan schärfen?",
      a: "Nur dem Anschein nach. Echte, bei der Aufnahme verlorene Details lassen sich nicht zurückholen. Schärfungsfilter verändern Kanten, fügen aber keine Information hinzu.",
    },
    {
      q: "Welche Scan-Auflösung sollte ich verwenden?",
      a: "200 bis 300 DPI für Dokumente. 300 DPI, wenn du eventuell drucken möchtest. Alles darüber ist bei Text verschwendet und bläht nur die Datei auf.",
    },
    {
      q: "Sollte ich in Farbe oder Graustufen scannen?",
      a: "Graustufen oder Schwarz-Weiß für Text. Farbe nur für Fotos und Farbgrafiken. Graustufen sind schärfer und deutlich kleiner.",
    },
    {
      q: "Warum sind meine Scans so riesig in der Dateigröße?",
      a: "Meist wegen zu hoher DPI-Zahl in Kombination mit Farbmodus. Reduziere beides schon bei der Aufnahme, oder komprimiere die vorhandene Datei. Gescannte PDFs profitieren am stärksten von Komprimierung.",
    },
  ],
  related: [
    { label: "In PDF scannen – saubere Aufnahmen mit Kantenerkennung", path: "/scan-to-pdf" },
    { label: "PDF komprimieren – schwere Scans verkleinern", path: "/compress-pdf" },
    { label: "Wie du ein gescanntes PDF komprimierst", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Warum ist mein PDF unscharf?", path: "/guides/why-is-my-pdf-blurry" },
  ],
  parentHub: { label: "In PDF scannen – Scannen mit der Handykamera", path: "/scan-to-pdf" },
};

export default content;
