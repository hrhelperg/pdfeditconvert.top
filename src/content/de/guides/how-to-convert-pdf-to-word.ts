import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-word",
  h1: "PDF zu Word konvertieren — kostenlos, im Browser",
  description:
    "Hol den Text aus einem PDF in ein bearbeitbares Word-Dokument im Browser. Was sauber konvertiert, was Nacharbeit braucht, und wann Scans nicht funktionieren.",
  updated: "2026-05-23",
  intro: [
    "Wer ein PDF „in Word umwandeln“ will, will meistens nur eines: den Text zurück, in einem Dokument, das sich bearbeiten lässt. Vielleicht ist die ursprüngliche .docx-Datei längst verschwunden, vielleicht hat eine Kollegin nur das PDF geschickt, vielleicht willst du auch nur ein paar Klauseln aus einem Vertrag übernehmen, ohne sie neu abzutippen. Das ist eine Textextraktion — und die geht schneller, als es klingt.",
    "Diese Anleitung nutzt das kostenlose PDF-zu-Word-Tool, das vollständig in deinem Browser läuft — deine Datei wird nie auf einen Server geladen. Es liest die Textebene aus einem PDF aus und liefert dir eine .docx-Datei, die du in Word, Google Docs, Pages oder LibreOffice öffnen kannst. Was es nicht tut: das ursprüngliche Layout pixelgenau nachbauen. Das solltest du vorher wissen, damit dich das Ergebnis nicht überrascht.",
    "Im Folgenden findest du den praktischen Ablauf, welche Art von PDF sich gut konvertieren lässt, und die ehrlichen Fälle, in denen du entweder nachbearbeiten musst oder besser gleich einen anderen Weg wählst.",
  ],
  steps: [
    {
      title: "Öffne das PDF-zu-Word-Tool",
      body: "Rufe das PDF-zu-Word-Tool auf. Nichts zu installieren, kein Konto nötig — der Konverter lädt in deinem Browser und verarbeitet die Datei direkt auf deinem eigenen Gerät.",
    },
    {
      title: "Füge dein PDF hinzu",
      body: "Zieh das PDF in den markierten Bereich oder klick, um es auszuwählen. Verwende ein textbasiertes PDF — eines, in dem sich Text in jedem Anzeigeprogramm markieren und kopieren lässt. Lässt sich beim Versuch kein Text markieren, handelt es sich um einen Scan, der sich nicht konvertieren lässt (siehe die Einschränkungen weiter unten).",
    },
    {
      title: "Starte die Konvertierung",
      body: "Klick auf „In Word konvertieren“. Das Tool liest die Textebene des PDF aus und baut sie als fließenden .docx-Text neu auf. Bei einem typischen mehrseitigen Dokument dauert das nur wenige Sekunden.",
    },
    {
      title: "Lade die .docx-Datei herunter",
      body: "Die Word-Datei wird automatisch heruntergeladen. Öffne sie in deinem bevorzugten Editor — der Text kommt als bearbeitbare Absätze an, die du frei umstrukturieren kannst.",
    },
    {
      title: "Formatierung neu anwenden",
      body: "Überschriften, Fettdruck, Spalten und Abstände brauchen meist einen manuellen Durchgang. Markiere Überschriften erneut mit den Überschriftenformaten deines Editors, stelle Tabellen wieder her — und das Dokument gehört wieder ganz dir.",
    },
    {
      title: "Bilder bei Bedarf neu einfügen",
      body: "Bei der Textextraktion gehen Bilder verloren. Enthielt das Original ein Logo, ein Diagramm oder ein Foto, das du brauchst, füge es aus dem Ausgangs-PDF wieder ein — exportiere die Seite bei Bedarf zunächst als Bild.",
    },
  ],
  tips: [
    "Prüfe zuerst, ob sich der Text markieren lässt: Geht das im PDF nicht, handelt es sich um ein gescanntes Bild, und die Textextraktion liefert nichts Brauchbares.",
    "Einfache, einspaltige Dokumente (Briefe, Vermerke, schlichte Berichte) konvertieren am saubersten. Stark gestaltete PDFs mit mehreren Spalten und Fußnoten kommen als ein durchgehender, lesbarer Textfluss heraus, den du noch aufräumen solltest.",
    "Erwarte nicht, dass Tabellen unbeschadet ankommen — meist landen sie als reine Textabfolge. Baue wichtige Tabellen lieber in deinem Editor neu auf, statt mit der extrahierten Version zu kämpfen.",
    "Halte das Original-PDF beim Nachformatieren parallel geöffnet. Ein Blick auf die Quelle ist deutlich schneller, als die ursprüngliche Struktur zu erraten.",
    "Brauchst du nur ein paar Sätze, kopiere sie direkt aus dem PDF-Anzeigeprogramm, statt die ganze Datei zu konvertieren — die Konvertierung lohnt sich erst, wenn du den Großteil des Dokuments zurückbrauchst.",
  ],
  mobileNote:
    "Arbeitest du vom Handy aus? Die PDF-Editor-App konvertiert und bearbeitet Dokumente unterwegs und kann anders als der Browser auch eine Texterkennung auf gescannten Seiten durchführen — praktisch, wenn das erhaltene PDF eigentlich nur das Foto eines Ausdrucks ist und kein echtes digitales Dokument.",
  faq: [
    {
      q: "Sieht die Word-Datei genauso aus wie das PDF?",
      a: "Nein, und kein seriöses Tool sollte das versprechen. Es handelt sich um eine Textkonvertierung: Schriftarten, Spalten, exakte Abstände und Bilder werden nicht übernommen. Du bekommst den Text als bearbeitbare Absätze zurück und wendest die Formatierung in deinem Editor neu an.",
    },
    {
      q: "Es heißt, es wurde kein Text gefunden — was ist da schiefgelaufen?",
      a: "Dein PDF ist mit ziemlicher Sicherheit ein Scan oder eine reine Bilddatei ohne Textebene. Browser-Tools können aus einem Bild keinen Text auslesen. Die mobile PDF-Editor-App kann bei Scans eine Texterkennung durchführen — das ist in diesem Fall der richtige Weg.",
    },
    {
      q: "Wird mein Dokument auf einen Server hochgeladen?",
      a: "Nein. Die Extraktion läuft lokal in deinem Browser ab, sodass das PDF dein Gerät nie verlässt. Deshalb kannst du das Tool bedenkenlos für Verträge und andere sensible Dateien nutzen.",
    },
    {
      q: "Welches Dateiformat bekomme ich zurück?",
      a: "Eine gewöhnliche .docx-Datei, die sich in Microsoft Word, Google Docs, Apple Pages und LibreOffice öffnen lässt. Bei Bedarf kannst du sie später wieder als PDF exportieren.",
    },
    {
      q: "Kann ich es nach der Bearbeitung wieder zu PDF konvertieren?",
      a: "Ja — nutze das Word-zu-PDF-Tool, um die fertige .docx-Datei wieder in ein sauberes, teilbares PDF umzuwandeln.",
    },
  ],
  related: [
    { label: "PDF zu Word — im Browser konvertieren", path: "/pdf-to-word" },
    { label: "Word zu PDF — die umgekehrte Konvertierung", path: "/word-to-pdf" },
    { label: "Word zu PDF konvertieren — die Anleitung", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF oder DOCX — welches Format nutzen", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF-Konverter", path: "/pdf-converter" },
};

export default content;
