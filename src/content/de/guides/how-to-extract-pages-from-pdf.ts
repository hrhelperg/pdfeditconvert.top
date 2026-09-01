import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-extract-pages-from-pdf",
  h1: "Seiten aus einem PDF extrahieren (kostenlos, ohne Upload)",
  description:
    "Hol bestimmte Seiten oder Bereiche aus einem PDF in eine neue Datei, im Browser. Perfekt, um genau die Seiten zu verschicken, die jemand braucht.",
  updated: "2026-05-23",
  intro: [
    "Seiten extrahieren löst ein ganz bestimmtes Problem: Jemand braucht einen Teil eines Dokuments, nicht das Ganze. Die Bank will Seite 3, beim Formular zählt nur die Unterschriftsseite, bei der Angebotsprüfung geht es nur um den Preisabschnitt. Die komplette 40-seitige Datei weiterzuleiten und „siehe Seite 12“ zu sagen, ist bequem — und bei allem Vertraulichen leichtsinnig.",
    "Diese Anleitung nutzt das kostenlose Tool PDF-Seiten extrahieren: Du wählst die gewünschten Seiten aus und speicherst sie als brandneues PDF — alles im Browser, ohne dass etwas hochgeladen wird. Das Original bleibt unangetastet; du bekommst nur eine saubere Datei mit genau dem, was du ausgewählt hast.",
    "Es ist einer der nützlichsten PDF-Handgriffe überhaupt, weil er nebenbei auch ein Datenschutz-Tool ist: Du verschickst genau die geforderten Seiten — und sonst nichts.",
  ],
  steps: [
    {
      title: "Öffne PDF-Seiten extrahieren",
      body: "Ruf PDF-Seiten extrahieren in deinem Browser auf. Es läuft vollständig auf deinem Gerät — kein Hochladen, kein Konto nötig.",
    },
    {
      title: "Füge dein PDF hinzu",
      body: "Zieh die Datei in die Ablagefläche oder klicke, um sie auszuwählen. Das Tool lädt die Seitenzahl, damit du präzise auswählen kannst.",
    },
    {
      title: "Wähle die gewünschten Seiten aus",
      body: "Gib einzelne Seiten oder Bereiche ein — zum Beispiel 3, dann 8–10. Nur die aufgelisteten Seiten landen in der neuen Datei.",
    },
    {
      title: "Erstelle das neue PDF",
      body: "Starte die Extraktion. Das Tool baut ein neues PDF nur mit den ausgewählten Seiten, in der von dir gewählten Reihenfolge.",
    },
    {
      title: "Lade sie herunter und benenne sie",
      body: "Speichere die extrahierte Datei mit einem Namen, der zeigt, was sie enthält — „Unterschriftsseite.pdf“ oder „Preisabschnitt.pdf“.",
    },
    {
      title: "Prüfe die Datei vor dem Versand",
      body: "Öffne das neue PDF und kontrolliere, dass wirklich nur die gewünschten Seiten enthalten sind. Genau jetzt fällt eine falsch gezählte Seitenzahl auf — bevor sie bei jemandem landet.",
    },
  ],
  tips: [
    "Extrahiere, wenn du ein paar Seiten in einer neuen Datei sammeln willst; teile, wenn du ein Dokument in mehrere Dateien zerlegen willst. Wähle das Tool passend zum Ziel.",
    "Extrahieren ist ein stiller Gewinn für den Datenschutz: Wer nur die relevanten Seiten verschickt, gibt nicht versehentlich den Rest des Dokuments preis.",
    "Prüfe Seitenzahlen anhand des Dokuments, nicht anhand der Zählung im PDF-Betrachter — Deckblätter und Einlagen können die Zahl um eins verschieben.",
    "Das Original wird nie verändert, du kannst also beliebig oft unterschiedliche Seitenauswahlen aus derselben Datei extrahieren.",
    "Willst du Seiten entfernen und den Rest behalten, extrahiere einfach die Seiten, die bleiben sollen — der sauberste Weg, um ein paar unerwünschte Seiten loszuwerden.",
  ],
  mobileNote:
    "Musst du vom Handy aus nur die unterschriebene Seite zurückschicken? Die PDF-Editor-App extrahiert und verschickt einzelne Seiten mit wenigen Fingertipps, offline — so geht genau die richtige Seite raus, ohne die ganze vertrauliche Datei weiterzuleiten.",
  faq: [
    {
      q: "Wie unterscheidet sich Extrahieren von Teilen?",
      a: "Extrahieren sammelt die gewählten Seiten in einer einzigen neuen Datei. Teilen zerlegt ein PDF in mehrere eigenständige Dateien. Nutze Extrahieren, um bestimmte Seiten zu sammeln, und Teilen, um ein Dokument zu zerlegen.",
    },
    {
      q: "Kann ich nicht aufeinanderfolgende Seiten auswählen?",
      a: "Ja. Liste einzelne Seiten und Bereiche gemeinsam auf, etwa 1, 4, 9–12 — das neue PDF enthält genau diese Seiten in dieser Reihenfolge.",
    },
    {
      q: "Verändert das Extrahieren das Original?",
      a: "Nein. Die Quelldatei bleibt unverändert; das Tool erzeugt eine neue Datei. Du kannst beliebig viele Extraktionen aus demselben Original vornehmen.",
    },
    {
      q: "Wird meine Datei hochgeladen?",
      a: "Nein. Die Extraktion läuft in deinem Browser auf deinem Gerät, vertrauliche Dokumente bleiben also privat.",
    },
    {
      q: "Wie entferne ich Seiten, statt sie zu behalten?",
      a: "Extrahiere einfach die Seiten, die bleiben sollen — die unerwünschten werden dabei schlicht nicht mit übernommen. Das ist der einfachste Weg, ein paar Seiten aus einem PDF loszuwerden.",
    },
  ],
  related: [
    { label: "PDF-Seiten extrahieren — Seiten im Browser herausziehen", path: "/extract-pdf-pages" },
    { label: "PDF teilen — eine Datei nach Bereich aufteilen", path: "/split-pdf" },
    { label: "Wie du ein PDF in einzelne Dateien teilst", path: "/guides/how-to-split-pdf-files" },
    { label: "Wie du unerwünschte Seiten aus einem PDF entfernst", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "PDF-Seiten extrahieren", path: "/extract-pdf-pages" },
};

export default content;
