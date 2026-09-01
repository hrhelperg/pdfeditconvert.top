import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-remove-unwanted-pages-from-pdf",
  h1: "Unerwünschte Seiten aus einem PDF entfernen",
  description:
    "Entferne leere Seiten, Deckblätter oder unwichtige Abschnitte aus einem PDF im Browser, indem du nur die gewünschten Seiten behältst. Saubere Dateien, privater Ablauf.",
  updated: "2026-05-23",
  intro: [
    "Viele PDFs kommen mit Seiten an, die niemand braucht: ein Faxdeckblatt, eine leere Seite, die der Scanner eingefügt hat, ein AGB-Anhang, den keiner angefordert hat, oder doppelte Seiten aus einer schlampigen Zusammenführung. Wer ein Dokument mit diesem Ballast verschickt, wirkt nachlässig — und gibt gelegentlich Informationen preis, die eigentlich nicht für andere bestimmt waren.",
    "Der sauberste Weg, im Browser Seiten zu entfernen, ist, die gewünschten zu behalten. Diese Anleitung nutzt das kostenlose Werkzeug Seiten aus PDF extrahieren: Statt unerwünschte Seiten einzeln zu löschen, gibst du an, welche Seiten erhalten bleiben sollen — alles andere fällt bei der neuen Datei einfach weg. Der gesamte Vorgang läuft auf deinem Gerät, ohne dass etwas hochgeladen wird.",
    "Das Ergebnis ist ein aufgeräumtes PDF mit ausschließlich den Seiten, die dazugehören — und dein Original bleibt unangetastet, falls du dich bei einer Seitenzahl vertan hast.",
  ],
  steps: [
    {
      title: "Bestimme, welche Seiten weg sollen",
      body: "Öffne das PDF und notiere dir, welche Seiten unerwünscht sind — die leere Seite 2, das Deckblatt, das doppelte Exemplar am Ende. Überlege dann, welche Seiten übrig bleiben sollen.",
    },
    {
      title: "Öffne das Werkzeug Seiten aus PDF extrahieren",
      body: "Rufe das Werkzeug Seiten aus PDF extrahieren im Browser auf. Es läuft auf deinem Gerät, ganz ohne Hochladen oder Konto.",
    },
    {
      title: "Füge dein PDF hinzu",
      body: "Ziehe die Datei in die Ablagefläche oder klicke, um sie auszuwählen. Das Werkzeug zeigt die Seitenzahl an, damit du präzise arbeiten kannst.",
    },
    {
      title: "Gib die Seiten an, die erhalten bleiben sollen",
      body: "Trage die Seiten und Seitenbereiche ein, die du behalten willst — zum Beispiel 1, 3–7, 9. Nicht aufgeführte Seiten tauchen im Ergebnis nicht mehr auf.",
    },
    {
      title: "Erstelle das bereinigte PDF",
      body: "Starte die Extraktion. Das Werkzeug erstellt eine neue Datei, die nur die behaltenen Seiten enthält — in der richtigen Reihenfolge.",
    },
    {
      title: "Prüfen und speichern",
      body: "Öffne das neue PDF, prüfe, dass die unerwünschten Seiten wirklich fehlen und nichts Wichtiges versehentlich mit verschwunden ist, und speichere es dann unter einem eindeutigen Namen.",
    },
  ],
  tips: [
    "Seiten zu entfernen, indem du den Rest behältst, ist im Browser die zuverlässigere Methode — du beschreibst, was du willst, nicht was gelöscht werden soll, und vermeidest so Verzähler bei den Seitenzahlen.",
    "Achte auf leere Seiten vom Scanner. Ein automatischer Einzug fügt zwischen doppelseitig gescannten Originalen oft eine leere Seite ein — genau diese werden am leichtesten übersehen.",
    "Seiten zu entfernen ist auch ein Stück Datenschutz. Interne Notizen, Preise, die eigentlich nicht nach außen sollten, oder die Daten eines früheren Empfängers verstecken sich manchmal auf Seiten, die gar nicht mitgeschickt werden müssen.",
    "Gleiche Seitenzahlen immer mit dem Dokument selbst ab. Ein Deckblatt verschiebt die Zählung leicht — „Seite 5“ im Kopf kann in der Datei bereits Seite 6 sein.",
    "Bewahre das Original auf. Fällt versehentlich eine Seite weg, die du doch gebraucht hättest, kannst du mit der unveränderten Quelldatei einfach von vorn beginnen.",
  ],
  mobileNote:
    "Eine überflüssige Seite loszuwerden, bevor du ein Dokument vom Handy aus weiterleitest, sind in der App PDF Editor nur wenige Fingertipps. Sie löscht Seiten direkt und funktioniert offline — das Deckblatt oder die leere Seite landet so gar nicht erst in der verschickten Kopie.",
  faq: [
    {
      q: "Wie lösche ich Seiten mit einem Browser-Werkzeug?",
      a: "Behalte mit dem Werkzeug Seiten aus PDF extrahieren die Seiten, die du willst. Weil du nur die zu behaltenden Seiten angibst, fallen die unerwünschten in der neuen Datei automatisch weg — eine saubere Methode, um Seiten zu entfernen, ohne sie einzeln zu löschen.",
    },
    {
      q: "Wird meine Originaldatei verändert?",
      a: "Nein. Das Werkzeug erstellt ein neues PDF und lässt die Quelldatei unangetastet — ein Fehler lässt sich also einfach durch einen neuen Versuch korrigieren.",
    },
    {
      q: "Wird die Datei irgendwohin hochgeladen?",
      a: "Nein. Alles läuft im Browser auf deinem Gerät — wichtig, wenn die entfernten Seiten sensible Informationen enthalten.",
    },
    {
      q: "Kann ich nicht zusammenhängende Seiten entfernen?",
      a: "Ja. Behalte eine Mischung aus einzelnen Seiten und Seitenbereichen, etwa 1, 4, 8–10 — jede nicht aufgeführte Seite entfällt.",
    },
    {
      q: "Was, wenn ich Seiten stattdessen direkt löschen möchte?",
      a: "In der mobilen App PDF Editor kannst du einzelne Seiten antippen und direkt löschen — manche finden das intuitiver als den Ansatz, nur die gewünschten Seiten zu behalten.",
    },
  ],
  related: [
    { label: "Seiten aus PDF extrahieren — nur behalten, was du brauchst", path: "/extract-pdf-pages" },
    { label: "PDF teilen — eine Datei nach Seitenbereich aufteilen", path: "/split-pdf" },
    { label: "Wie du Seiten aus einem PDF extrahierst", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "PDF-Dateien organisieren", path: "/guides/how-to-organize-pdf-files" },
  ],
  parentHub: { label: "Seiten aus PDF extrahieren", path: "/extract-pdf-pages" },
};

export default content;
