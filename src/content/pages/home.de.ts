import type { HomeContent } from "@/types/content";

/**
 * German homepage copy. Terminology policy: docs/localization/de-terminology.md.
 */
export const HOME_DE: HomeContent = {
  heroEyebrow: "Kostenlose PDF-Tools im Browser",
  heroH1Before: "Konvertiere, führe zusammen und bearbeite deine PDFs ",
  heroH1Highlight: "in Sekunden",
  heroH1After: "",
  heroLead:
    "Kostenlose PDF-Tools, die direkt in deinem Browser laufen — lokal und privat verarbeitet, nie an einen Server gesendet.",
  trust: [
    "Dateien werden lokal in deinem Browser verarbeitet",
    "Kein Hochladen, kein Konto, kein Wasserzeichen",
    "Kostenlos: funktioniert auf Handy und Computer",
  ],
  browseAllToolsLabel: "Alle PDF-Tools ansehen →",
  toolsEyebrow: "Kostenlos, in deinem Browser",
  toolsHeading: "Alle PDF-Tools, die du brauchst — ohne Hochladen.",
  toolsLead:
    "Führe deine PDFs zusammen, teile, drehe, markiere und konvertiere sie, ohne die Seite zu verlassen. Jedes Tool läuft lokal in deinem Browser.",
  toolBadge: "Kostenloses Tool",
  tools: [
    { id: "image-to-pdf", label: "Bild zu PDF", desc: "Füge JPG, PNG und WebP zu einem PDF zusammen." },
    { id: "merge-pdf", label: "PDF zusammenführen", desc: "Kombiniere mehrere PDFs zu einem Dokument." },
    { id: "split-pdf", label: "PDF teilen", desc: "Trenne Seiten nach Bereich." },
    { id: "rotate-pdf", label: "PDF drehen", desc: "Richte verdrehte Seiten gerade." },
    { id: "pdf-to-images", label: "PDF zu Bildern", desc: "Exportiere Seiten als PNG oder JPG." },
    {
      id: "add-watermark-to-pdf",
      label: "Wasserzeichen",
      desc: "Stempel einen Text auf alle Seiten.",
    },
    {
      id: "compress-pdf",
      label: "PDF komprimieren",
      desc: "Verkleinere die Datei für E-Mail und Versand.",
    },
    { id: "pdf-to-word", label: "PDF zu Word", desc: "Extrahiere den Text in ein bearbeitbares .docx." },
    { id: "word-to-pdf", label: "Word zu PDF", desc: "Wandle ein .docx oder .txt in ein sauberes PDF um." },
    {
      id: "reorder-pdf-pages",
      label: "Seiten neu anordnen",
      desc: "Vorschau ansehen, neu anordnen, herunterladen.",
    },
    {
      id: "extract-pdf-pages",
      label: "Seiten extrahieren",
      desc: "Speichere gewählte Seiten in einem neuen PDF.",
    },
  ],
  appBandEyebrow: "Auch für iPhone und Android · fünf Tools für den Alltag",
  featureBand: [
    { key: "edit", label: "Bearbeiten", sub: "Text, Bilder, Seiten" },
    { key: "convert", label: "Konvertieren", sub: "Word, JPG, PNG" },
    { key: "secure", label: "Schützen", sub: "Passwort für die Datei" },
    { key: "scan", label: "Scannen", sub: "Von Papier zu PDF" },
    { key: "organize", label: "Organisieren", sub: "Neu anordnen, teilen" },
  ],
  hubsHeading: "Alles, was man mit einem PDF macht — erklärt.",
  hubsLead:
    "Praktische Anleitungen und konkrete Methoden für das, was Menschen jeden Tag wirklich mit einem PDF machen.",
  hubs: [
    { id: "pdf-editor", label: "PDF-Editor", desc: "Bearbeite Text, Bilder und Seiten." },
    {
      id: "pdf-converter",
      label: "PDF-Konverter",
      desc: "Konvertiere zu Word, JPG, PNG und mehr.",
    },
    {
      id: "compress-pdf",
      label: "PDF komprimieren",
      desc: "Verkleinere die Datei ohne Qualitätsverlust.",
    },
    { id: "sign-pdf", label: "PDF unterschreiben", desc: "Unterschreibe direkt vom Handy aus." },
    { id: "scan-to-pdf", label: "Scannen zu PDF", desc: "Verwandle Papier in scharfe PDFs." },
    {
      id: "pdf-security",
      label: "PDF-Sicherheit",
      desc: "Schütze Dokumente mit einem Passwort.",
    },
    {
      id: "pdf-for-business",
      label: "PDF für Unternehmen",
      desc: "Verträge und Rechnungen von überall aus.",
    },
    {
      id: "pdf-for-students",
      label: "PDF für Studierende",
      desc: "Notizen, Markierungen und Zusammenfassungen.",
    },
    {
      id: "pdf-forms",
      label: "PDF-Formulare",
      desc: "Fülle, unterschreibe und speichere deine PDFs.",
    },
  ],
  guidesHeading: "Die meistgelesenen Anleitungen",
  guideBadge: "Anleitung",
  featuredGuides: [
    { id: "guides/how-to-edit-pdf-on-iphone", label: "PDF auf iPhone bearbeiten" },
    { id: "guides/how-to-edit-pdf-on-android", label: "PDF auf Android bearbeiten" },
    { id: "guides/how-to-compress-pdf", label: "PDF komprimieren" },
    { id: "guides/how-to-sign-pdf-on-phone", label: "PDF vom Handy aus unterschreiben" },
  ],
  browseAllGuidesLabel: "Alle {count} PDF-Anleitungen ansehen →",
  finalCtaHeading: "Nimm PDF Editor überallhin mit.",
  finalCtaSub: "Kostenlos für iOS und Android. Kein Konto nötig, um loszulegen.",
  faq: [
    {
      q: "Ist PDF Editor kostenlos?",
      a: "Ja. Die wichtigsten Funktionen zum Bearbeiten, Scannen, Komprimieren und Unterschreiben sind kostenlos. Einige erweiterte Funktionen gibt es in PDF Editor Pro.",
    },
    {
      q: "Funktioniert die App ohne Internetverbindung?",
      a: "Bearbeiten, Seiten organisieren, Unterschreiben und Komprimieren funktionieren offline. Cloud-Synchronisierung und OCR brauchen möglicherweise eine Verbindung.",
    },
    {
      q: "Mit welchen Geräten ist PDF Editor kompatibel?",
      a: "PDF Editor ist für iPhone und iPad (ab iOS 16) sowie für Android-Handys und -Tablets (ab Android 9) verfügbar.",
    },
    {
      q: "Sind meine Dateien privat?",
      a: "Ja. Deine Dateien bleiben auf deinem Gerät, außer du entscheidest dich, sie zu teilen. Wir senden deine Dokumente nicht an unsere Server.",
    },
    {
      q: "Kann ich die App für rechtliche Dokumente nutzen?",
      a: "Viele Menschen unterschreiben und versenden Verträge mit PDF Editor. Wir geben keine Rechtsberatung — prüfe vor einem wichtigen Dokument die örtlichen Vorschriften zur elektronischen Signatur.",
    },
  ],
};
