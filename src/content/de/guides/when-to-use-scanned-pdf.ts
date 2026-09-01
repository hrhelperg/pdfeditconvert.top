import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-scanned-pdf",
  h1: "Wann ein gescanntes PDF sinnvoll ist (und wann nicht)",
  description:
    "Gescannte PDFs lösen ein bestimmtes Problem – Papier wird digital. Sie sind aber auch größer, schlechter durchsuchbar und schwerer zu bearbeiten. Wann sich der Tausch lohnt.",
  updated: "2026-05-29",
  intro: [
    "Gescannte PDFs lösen ein bestimmtes Problem: Papier in eine digitale Datei zu verwandeln, die sich teilen, archivieren und auf jedem Gerät ansehen lässt. Das gelingt ihnen gut. Aber sie sind auch größer als vergleichbare getippte PDFs, ohne OCR nicht durchsuchbar, schwerer zu bearbeiten und oft niedriger aufgelöst als die Quelle. Ein Dokument zu scannen, das bereits digital existiert, ist fast immer der falsche Schritt.",
    "Die richtige Regel ist kurz. Scanne Papier, das keine digitale Quelle hat. Scanne nichts, was du bereits als Word-Dokument, Screenshot oder PDF-Export hast. Die Versuchung, ein Dokument erst auszudrucken und dann zu scannen, um es zu „sperren“, ist verständlich, aber meist unnötig — ein direkter PDF-Export erledigt dasselbe besser.",
    "Diese Anleitung geht durch, wann du scannen solltest und wann nicht. Das meiste davon ist naheliegend, sobald man es ausspricht — das Problem ist nur, dass die Versuchung zu scannen oft stärker ist als der tatsächliche Bedarf.",
  ],
  steps: [
    {
      title: "Nutze ein gescanntes PDF, wenn Papier die einzige Quelle ist",
      body: "Alte Verträge, handschriftliche Notizen, Papierbelege, per Post erhaltene Dokumente, handschriftlich unterschriebene Formulare. Alles, was physisch existiert und digital werden muss. PDF scannen auf dem Handy oder ein Flachbettscanner erzeugt ein sauberes PDF.",
    },
    {
      title: "Scanne keine Dokumente, die du schon digital hast",
      body: "Hast du das Word-Dokument, die Quell-PDF-Datei oder den Export, nutze diese. Erst ausdrucken und dann scannen verliert an Genauigkeit, macht die Datei größer und entfernt die Durchsuchbarkeit. Es gibt keinen Vorteil.",
    },
    {
      title: "Scanne nicht, um ein Dokument zu „sperren“",
      body: "Ein erneuter Export aus der Quelle als PDF schreibt den Inhalt fest. Scannen fügt keine Sicherheit hinzu; es entfernt Durchsuchbarkeit und Textqualität, ohne die Datei schwerer veränderbar zu machen.",
    },
    {
      title: "Nutze OCR, wenn du scannst und Durchsuchbarkeit brauchst",
      body: "OCR wandelt die gescannten Bilder von Text in durchsuchbaren, zugrunde liegenden Text um. Ohne OCR sind gescannte PDFs Bilder von Wörtern — lesbar, aber nicht durchsuchbar.",
    },
    {
      title: "Komprimiere Scans vor dem Teilen",
      body: "Gescannte PDFs gehören zu den größten PDFs, die dir im Alltag begegnen. PDF komprimieren in deinem Browser verkleinert sie deutlich, ohne dass ein Qualitätsverlust auffällt — besonders bei reinen Textdokumenten.",
    },
    {
      title: "Scanne mit der richtigen Auflösung",
      body: "200–300 DPI für Dokumente, die am Bildschirm gelesen werden. 300 DPI für alles, was eventuell gedruckt wird. 600 DPI ist Fotoqualität und verschwendet bei Text nur Speicherplatz.",
    },
  ],
  tips: [
    "Die meisten Momente von „das muss ich scannen“ entpuppen sich als „ich hab das digital und hab’s vergessen“. Such zuerst nach der Quelle.",
    "Ein direkter PDF-Export ist in jeder messbaren Hinsicht sauberer als ein gescannter Ausdruck: schärfer, kleiner, durchsuchbar, bearbeitbar.",
    "Handy-Scans erreichen bei gewöhnlichen Dokumenten dank Kantenerkennung und Kontrastanpassung heute Flachbett-Qualität.",
    "Scans mit OCR sind durchsuchbar, aber nicht textperfekt. Behandle das OCR-Ergebnis als ungefähr, nicht als verbindlich.",
    "Scanne nicht, um eine neue Datei „offizieller wirken“ zu lassen. Das Format ist dasselbe; es interessiert niemanden, ob sie gescannt oder exportiert wurde.",
  ],
  mobileNote:
    "Das Handy ist das richtige Werkzeug fürs alltägliche Scannen — die Kamera ist immer dabei, Kantenerkennung liefert saubere Ergebnisse, und das entstehende PDF ist sofort nutzbar. Der Scan-Modus der PDF-Editor-App ist genau dafür gebaut, mit mehrseitiger Aufnahme und Aufräumen direkt auf dem Gerät.",
  faq: [
    {
      q: "Sollte ich ein Dokument scannen, das ich als Word-Datei habe?",
      a: "Nein. Exportiere es direkt als PDF. Scannen verliert Auflösung, macht die Datei größer und entfernt die Durchsuchbarkeit.",
    },
    {
      q: "Ist ein gescanntes PDF „offizieller“ als ein exportiertes?",
      a: "Nein. Beide sind PDFs. Offizieller Charakter kommt von Unterschriften und Inhalt, nicht davon, ob gescannt wurde.",
    },
    {
      q: "Wann hilft Scannen wirklich?",
      a: "Wenn die Quelle Papier ist. Per Post erhaltene Verträge, handschriftliche Notizen, Papierformulare mit Handschrift. Scannen ist der einzige Weg, diese zu digitalisieren.",
    },
    {
      q: "Sollte ich jeden Scan mit OCR bearbeiten?",
      a: "Ja, wenn dein Tool das unterstützt. Durchsuchbare Scans sind langfristig deutlich nützlicher, und OCR ändert nichts am sichtbaren Erscheinungsbild.",
    },
    {
      q: "Wie groß sollte ein gescanntes PDF sein?",
      a: "Ein paar Hundert KB bis wenige MB bei typischen Dokumenten. Scans, die deutlich größer sind, profitieren von Komprimierung.",
    },
  ],
  related: [
    { label: "PDF scannen — Scannen mit der Handykamera", path: "/scan-to-pdf" },
    { label: "Wie du Dokumente mit dem Handy als PDF scannst", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Wie du die Qualität eines gescannten PDFs verbesserst", path: "/guides/how-to-fix-scanned-pdf-quality" },
    { label: "Bearbeitbares PDF oder flaches PDF", path: "/guides/editable-pdf-vs-flat-pdf" },
  ],
  parentHub: { label: "PDF scannen — Scannen mit der Handykamera", path: "/scan-to-pdf" },
};

export default content;
