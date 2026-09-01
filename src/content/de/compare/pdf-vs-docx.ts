import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-docx",
  h1: "PDF oder DOCX — der Vergleich Punkt für Punkt",
  description:
    "PDF und DOCX im Vergleich: Bearbeitbarkeit, Layouttreue, Unterschreiben, Sicherheit und Weitergabe. Finde das richtige Format für jede Aufgabe.",
  intro: [
    "PDF und DOCX sind die zwei Formate, in denen die meisten Dokumente enden. Beide haben ihre Aufgabe — und wer für jede Aufgabe das richtige Format wählt, umgeht die meisten Formatierungs- und Weitergabeprobleme, die man sonst mit Dokumenten allgemein verbindet.",
    "Dieser Vergleich ist praktisch gedacht, nicht akademisch. Jede Zeile zeigt, wie sich die beiden Formate im echten Arbeitsalltag verhalten — nicht, wie sie in einem Standarddokument definiert sind. Der Fokus liegt auf dem, was dir innerhalb des ersten Monats intensiver Nutzung tatsächlich auffällt.",
    "Kurz gesagt: PDF gewinnt, wenn das Dokument fertig ist, beim Leser gleich aussehen muss oder eine Unterschrift enthält. DOCX gewinnt, wenn das Dokument noch ein Arbeitsentwurf ist, mehrere Personen es überarbeiten oder du den Inhalt später weiterverwenden willst. Die meisten Dokumente durchlaufen im Laufe ihres Lebens beide Formate.",
  ],
  leftLabel: "PDF",
  rightLabel: "DOCX",
  rows: [
    { feature: "Pixelgenaues Layout", left: "ja", right: "nein" },
    { feature: "Einfache Textbearbeitung", left: "Eingeschränkt", right: "ja" },
    { feature: "Universelles Anzeigen", left: "ja", right: "nein" },
    { feature: "Änderungsverfolgung und Kommentare", left: "Eingeschränkt", right: "ja" },
    { feature: "Passwortschutz (AES-256)", left: "ja", right: "ja" },
    { feature: "Zuverlässige Darstellung nach 10 Jahren", left: "ja", right: "nein" },
    { feature: "Anzeige auf dem Handy ohne Zusatz-App", left: "ja", right: "nein" },
    { feature: "Formularfelder", left: "ja", right: "Eingeschränkt" },
    { feature: "Integrierte Unterschriftenfunktion", left: "ja", right: "Zusatzfunktion" },
  ],
  whenLeft: [
    "Das Dokument ist fertiggestellt und sollte nicht mehr bearbeitet werden",
    "Es muss auf jedem Gerät identisch aussehen",
    "Der Empfänger hat vielleicht kein Microsoft Word",
    "Das Dokument wird über Jahre archiviert",
    "Du brauchst ein druckbares, unterschriftsbereites Format",
  ],
  whenRight: [
    "Das Dokument wird noch verfasst",
    "Mehrere Personen überarbeiten oder schreiben mit",
    "Änderungsverfolgung und Kommentare sind wichtig",
    "Du willst den Inhalt weiterverwenden oder neu gestalten",
    "Das Dokument wird zu einer Vorlage",
  ],
  faq: [
    {
      q: "Kann ich zwischen PDF und DOCX konvertieren?",
      a: "Ja. Gute PDF-Tools konvertieren in beide Richtungen mit hoher Genauigkeit bei textbasierten Dokumenten.",
    },
    {
      q: "Welches Format ist sicherer?",
      a: "Beide unterstützen AES-256-Verschlüsselung. Nicht das Format selbst entscheidet über die Sicherheit, sondern das Passwort und wie du es teilst.",
    },
    {
      q: "Bleiben meine Schriftarten bei der Konvertierung erhalten?",
      a: "Meistens ja. Ist eine Schriftart auf dem Zielgerät nicht verfügbar, wird eine ähnliche verwendet. Verwende gängige Schriftarten (Calibri, Inter, Helvetica), um Ersetzungen möglichst zu vermeiden.",
    },
  ],
  related: [
    { label: "Anleitung: PDF oder DOCX", path: "/guides/pdf-vs-docx" },
    { label: "PDF Converter", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
};

export default content;
