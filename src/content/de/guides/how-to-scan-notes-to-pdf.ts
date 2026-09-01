import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-notes-to-pdf",
  h1: "Handschriftliche Notizen als PDF scannen (sauber, durchsuchbar)",
  description:
    "Verwandle handschriftliche Vorlesungsnotizen mit der Handykamera in saubere, mehrseitige PDFs. Die Einstellungen, mit denen die Scans schon beim ersten Versuch lesbar werden.",
  updated: "2026-05-29",
  intro: [
    "Handschriftliche Vorlesungsnotizen sind immer noch der schnellste Weg, eine Vorlesung mitzuschreiben — und die meisten Studierenden lassen sie im Heft, statt sie zu digitalisieren, weil die Scans meist schlecht werden. Schiefe Seiten, ausgewaschene Grauscans, aufgeblähte Dateigrößen und die Zeit, die es kostet, misslungene Scans neu zu machen. Über ein Semester summiert sich das — und genau deshalb bleiben Notizen im Heft.",
    "Saubere Scans vom Handy hängen vor allem an Technik und Einstellungen, kaum an der App. Gleichmäßiges Licht, gerader Bildausschnitt, Kontrast hochgedreht, Graustufen statt Farbe, und Kantenerkennung, falls dein Tool das kann. Eine gut aufgenommene Seite sieht eher wie von einem Flachbettscanner aus als wie ein Schnappschuss.",
    "Diese Anleitung geht die Technik von Anfang bis Ende durch — die Lichtbedingungen im Raum, die zu guten Scans führen, das Vorgehen pro Seite, den Workflow für mehrere Seiten und was du mit dem fertigen PDF machst. Vorausgesetzt wird nur ein Handy und der Wunsch nach einem sauberen, mehrseitigen PDF, ohne einen Scanner zu kaufen.",
  ],
  steps: [
    {
      title: "Lege die Seite auf einen kontrastreichen Hintergrund",
      body: "Liniertes Papier auf einer dunklen Schreibtischplatte. Reinweißes Papier auf einem dunklen Tuch. Alles, was den Seitenrand für Kamera und automatischen Zuschnitt deutlich erkennbar macht. Vermeide Blendlicht — gleichmäßiges Licht schlägt helles Licht.",
    },
    {
      title: "Halte das Handy parallel zur Seite",
      body: "Die Kamera sollte gerade über der Seite stehen, nicht schräg. Eine Schräglage erzeugt eine trapezförmige Verzerrung, die die automatische Korrektur zwar ausgleichen kann, aber nie so gut wie ein gerade aufgenommenes Bild.",
    },
    {
      title: "Nutze eine Scan-App mit Kantenerkennung",
      body: "PDF scannen oder der Scan-Modus der PDF-Editor-App erkennt den Seitenrand und schneidet automatisch zu. Normale Handyfotos können das nicht — eine Scan-App liefert ein Ergebnis, das einem Flachbettscanner nahekommt.",
    },
    {
      title: "Wechsle in den Graustufen- oder Schwarzweiß-Modus",
      body: "Farbscans von schwarzer Tinte auf weißem Papier sind größer, verrauschter und unschärfer. Graustufen liefern schärfere, kleinere und besser lesbare Scans. Schwarzweiß ist noch kleiner, aber später weniger flexibel.",
    },
    {
      title: "Fotografiere jede Seite, führe sie dann zusammen",
      body: "Scan-Abläufe für mehrere Seiten fotografieren Seite für Seite und fügen sie automatisch zu einem PDF zusammen. Hast du einzeln fotografiert, bringt PDF zusammenführen alles in der richtigen Reihenfolge zusammen.",
    },
    {
      title: "Zuschneiden, drehen und neu anordnen beim Aufräumen",
      body: "PDF-Seiten neu anordnen, falls eine Seite in der falschen Reihenfolge aufgenommen wurde. PDF drehen bei quer aufgenommenen Fotos. Investiere eine Minute ins Aufräumen — dein zukünftiges Ich wird es dir danken.",
    },
  ],
  tips: [
    "Mach erst alle Aufnahmen, bevor du mit dem Aufräumen beginnst — ständiges Umschalten zwischen den Modi bremst den Ablauf.",
    "Bei ungleichmäßigem Licht verbessert ein einfaches weißes Blatt Papier, als Reflektor über die Seite gehalten, den Kontrast deutlich.",
    "Schneide nicht zu knapp zu. Ein kleiner Rand um die Seite lässt das Dokument weniger nach Amateurarbeit aussehen.",
    "Komprimiere das fertige PDF vor dem Archivieren. Scan-lastige Notizen sind groß; komprimierte Versionen lassen sich später leichter teilen.",
    "Füge vor dem Zusammenführen ein Deckblatt hinzu (getippt, mit Kursname und Datum). So erklärt sich die Sammlung in deinem Archiv von selbst.",
  ],
  mobileNote:
    "Notizen scannen ist eine der Aufgaben, bei denen ein Handy im Alltag einem Flachbettscanner tatsächlich überlegen ist. Der Scan-Modus der PDF-Editor-App läuft komplett auf dem Handy — Aufnahme, Kantenerkennung, Kontrast, Zusammenführen mehrerer Seiten — und erzeugt ein sauberes PDF, ohne den Umweg über einen Server.",
  faq: [
    {
      q: "Werden gescannte handschriftliche Notizen durchsuchbar?",
      a: "Nur, wenn das Tool eine Texterkennung (OCR) darauf anwendet — sie wandelt das Bild der Handschrift in durchsuchbaren Text um. OCR ist bei Handschrift weniger zuverlässig als bei gedrucktem Text; die Qualität hängt von der Handschrift und dem Scan ab.",
    },
    {
      q: "Welche Kameraeinstellung eignet sich am besten für Notizen-Scans?",
      a: "Nutze den Graustufen- oder Schwarzweiß-Modus der Scan-App mit automatischem Kontrast. Verlass dich nicht auf die Standard-Kamera-App — ihre Fotos sind größer, kontrastärmer und schlechter lesbar.",
    },
    {
      q: "Wie viele Seiten pro Scan-Durchgang?",
      a: "So viele, wie du in einer Sitzung geschrieben hast. Wöchentlich oder nach jeder Vorlesung zu scannen ist einfacher, als ein ganzes Semester anzuhäufen.",
    },
    {
      q: "Sollte ich in Farbe scannen?",
      a: "Nur, wenn deine Notizen Farbe nutzen (Textmarker, Diagramme). Sonst sind Graustufen oder Schwarzweiß schärfer und kleiner.",
    },
    {
      q: "Was, wenn die Seite geknickt oder fleckig ist?",
      a: "Automatischer Kontrast gleicht die meisten Alterungsspuren des Papiers aus. Starke Knicke sind meist trotzdem sichtbar; erwäge, neu zu fotografieren, oder akzeptiere es für dein persönliches Lernmaterial.",
    },
  ],
  related: [
    { label: "PDF scannen — Handykamera-Scans mit Kantenerkennung", path: "/scan-to-pdf" },
    { label: "PDF zusammenführen — mehrseitige Scans kombinieren", path: "/merge-pdf" },
    { label: "Wie du Dokumente mit dem Handy als PDF scannst", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "PDF-Workflow für Studierende", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF scannen — Scannen mit der Handykamera", path: "/scan-to-pdf" },
};

export default content;
