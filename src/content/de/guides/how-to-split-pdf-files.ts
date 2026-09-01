import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-split-pdf-files",
  h1: "PDF in einzelne Dateien teilen (kostenlos)",
  description:
    "Teile ein großes PDF nach Seitenbereich in kleinere Dateien, im Browser. Wann teilen statt extrahieren sinnvoll ist, und wie du die Originale sicher aufbewahrst.",
  updated: "2026-05-23",
  intro: [
    "Ein PDF teilst du, wenn eine einzelne Datei eigentlich mehrere Dokumente auf einmal sein will: ein gescanntes Bündel, das im Grunde ein Vertrag plus Anhänge ist, ein 200-seitiger Bericht, von dem du nur ein Kapitel brauchst, oder ein zusammengeführter Stapel, der wieder als einzelne Dateien rausgehen muss. Statt das Ganze zu verschicken und alle ihren Teil suchen zu lassen, teilst du die Datei.",
    "Diese Anleitung nutzt das kostenlose Tool PDF teilen, das ein PDF direkt in deinem Browser nach Seitenbereich aufteilt — es wird nichts hochgeladen. Ein schneller, privater Weg, um aus einer Datei genau die kleineren Stücke zu machen, die du wirklich verschicken oder ablegen musst.",
    "Außerdem klären wir einen häufigen Verwechslungspunkt: den Unterschied zwischen einem PDF teilen und Seiten extrahieren — denn welches Tool das richtige ist, hängt davon ab, was am Ende dabei herauskommen soll.",
  ],
  steps: [
    {
      title: "Öffne PDF teilen",
      body: "Ruf PDF teilen in deinem Browser auf. Es läuft auf deinem Gerät — kein Hochladen, kein Konto nötig.",
    },
    {
      title: "Füge dein PDF hinzu",
      body: "Zieh die Datei in die Ablagefläche oder klicke, um sie auszuwählen. Das Tool liest die Seitenzahl aus, damit du nach Bereich teilen kannst.",
    },
    {
      title: "Lege die Trennstellen im Dokument fest",
      body: "Sieh dir die Seitenzahlen an und bestimme die Grenzen — zum Beispiel Seite 1–10 der Vertrag, 11–24 der Anhang. Plane die Bereiche, bevor du teilst.",
    },
    {
      title: "Gib den herauszutrennenden Seitenbereich ein",
      body: "Gib den Bereich an, der als eigene Datei entstehen soll. Wiederhole das für jeden Abschnitt, den du abtrennen willst.",
    },
    {
      title: "Lade jedes Teilstück herunter",
      body: "Das Tool erzeugt für jeden gewählten Bereich ein neues PDF. Speichere jede Datei mit einem klaren, abschnittsspezifischen Namen.",
    },
    {
      title: "Bewahre das Original unverändert auf",
      body: "Teilen verändert die Quelldatei nicht — dein Original bleibt vollständig auf deinem Gerät. Heb es auf, bis du geprüft hast, dass jede Teildatei stimmt.",
    },
  ],
  tips: [
    "Teile, wenn du mehrere eigenständige Dokumente willst; extrahiere, wenn du ein paar Seiten in eine neue Datei ziehen willst. Klingt ähnlich, führt aber zu unterschiedlichen Ergebnissen.",
    "Notiere dir die Seitengrenzen, bevor du anfängst. Einen langen Bericht zu teilen geht deutlich schneller, wenn du schon weißt, dass die Methodik auf Seite 31 beginnt.",
    "Benenne jede Teildatei nach ihrem Inhalt, nicht nach ihrem Bereich — „Anhang-B.pdf“ ist für Empfängerinnen nützlicher als „Seiten-25-40.pdf“.",
    "Ein riesiges PDF zuerst zu teilen beschleunigt auch andere Arbeitsschritte: einen 15-seitigen Abschnitt zu komprimieren oder zu konvertieren ist einfacher, als sich mit der kompletten 300-seitigen Datei abzumühen.",
    "Passwortgeschützte PDFs lassen sich im Browser nicht verarbeiten. Entferne zuerst das Passwort, oder nutze die PDF-Editor-App, die auch geschützte Dateien öffnet.",
  ],
  mobileNote:
    "Auf dem Handy geht es beim Teilen oft darum, unterwegs genau das richtige Teilstück an die richtige Person zu schicken. Die PDF-Editor-App teilt, extrahiert und verschickt Dateien mit ein paar Fingertipps — und funktioniert offline. Praktisch, wenn du vor Ort bist und nur die unterschriebenen Seiten zurückschicken musst.",
  faq: [
    {
      q: "Was ist der Unterschied zwischen Teilen und Extrahieren?",
      a: "Teilen zerlegt ein PDF nach Bereich in mehrere eigenständige Dateien. Extrahieren zieht ausgewählte Seiten in eine einzige neue Datei. Nutze Teilen, um ein Dokument zu zerlegen, und Extrahieren, um bestimmte Seiten zu sammeln.",
    },
    {
      q: "Verändert das Teilen meine Originaldatei?",
      a: "Nein. Die Quelldatei bleibt unangetastet — das Tool erzeugt neue Dateien für die gewählten Bereiche. Bewahre das Original auf, bis du die Ergebnisse geprüft hast.",
    },
    {
      q: "Wird mein PDF hochgeladen?",
      a: "Nein. Das Teilen läuft in deinem Browser auf deinem Gerät, die Datei verlässt es also nie — sicher auch für Verträge und vertrauliche Berichte.",
    },
    {
      q: "In wie viele Teile kann ich ein PDF teilen?",
      a: "So viele wie du brauchst — wiederhole die Bereichsauswahl für jeden Abschnitt. Bei sehr großen PDFs kann der Arbeitsspeicher des Browsers an seine Grenzen kommen; dann ist die PDF-Editor-App die bessere Wahl.",
    },
    {
      q: "Kann ich ein passwortgeschütztes PDF teilen?",
      a: "Im Browser nicht. Entferne zuerst das Passwort, oder nutze die mobile PDF-Editor-App, die geschützte Dateien öffnen kann.",
    },
  ],
  related: [
    { label: "PDF teilen — eine Datei im Browser aufteilen", path: "/split-pdf" },
    { label: "PDF-Seiten extrahieren — Seiten in eine neue Datei holen", path: "/extract-pdf-pages" },
    { label: "Wie du Seiten aus einem PDF extrahierst", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "Wie du PDF-Dateien zusammenführst", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "PDF teilen", path: "/split-pdf" },
};

export default content;
