import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-png",
  h1: "PDF zu PNG konvertieren — scharfe, verlustfreie Seitenbilder",
  description:
    "Exportiere PDF-Seiten als hochwertige PNG-Bilder im Browser. Warum PNG Text und Diagramme scharf hält, plus Hinweise zu Skalierung und Transparenz.",
  updated: "2026-05-23",
  intro: [
    "Brauchst du eine PDF-Seite als Bild, und die Seite ist voller Text, einer Tabelle oder eines Diagramms, ist PNG das Format der Wahl. Es ist verlustfrei, die Schrift bleibt also scharf statt unscharfe Kanten zu bekommen — der Unterschied fällt sofort auf, sobald du in eine konvertierte Rechnung oder einen Plan hineinzoomst.",
    "Diese Anleitung nutzt das kostenlose Tool PDF zu Bildern, das jede PDF-Seite als herunterladbares Bild in deinem Browser rendert, ohne dass etwas hochgeladen wird. PNG ist eines der beiden Ausgabeformate und die richtige Wahl, wann immer Klarheit wichtiger ist als Dateigröße.",
    "Im Folgenden: wie du das schärfste Ergebnis bekommst, ohne die Datei aufzublähen, wann sich PNG gegenüber JPG lohnt, und was du bei Seitenbildern generell im Hinterkopf behalten solltest.",
  ],
  steps: [
    {
      title: "Öffne das Tool PDF zu Bildern",
      body: "Ruf das Tool PDF zu Bildern auf. Es rendert die Seiten lokal in deinem Browser — kein Hochladen, kein Konto.",
    },
    {
      title: "Füge dein PDF hinzu",
      body: "Zieh das PDF in die Ablagefläche oder klicke, um es auszuwählen. Das Tool bereitet jede Seite für den Export vor.",
    },
    {
      title: "Wähle PNG als Format",
      body: "Wähle PNG. Es ist verlustfrei und hält Text, Tabellen und Strichzeichnungen scharf — die richtige Wahl für Dokumente, Diagramme und alles, wo du reinzoomen wirst.",
    },
    {
      title: "Stelle die Skalierung für Schärfe ein",
      body: "Wähle eine Skalierung: 2× wirkt auf den meisten Bildschirmen scharf, 3× ist extra knackig für Druck oder große Anzeigen, erzeugt aber große Dateien. Richte die Skalierung danach, wie das Bild tatsächlich betrachtet wird.",
    },
    {
      title: "Exportiere die Seiten",
      body: "Starte die Konvertierung. Jede Seite wird als eigenes PNG heruntergeladen — bereit zum Einbetten in ein Dokument, eine Präsentation oder eine Webseite.",
    },
    {
      title: "Nutze die Seite, die du brauchst",
      body: "Behalte das gewünschte PNG und lösche den Rest. Bei einem langen PDF bleiben nach vorherigem Teilen weniger Dateien zu verwalten übrig.",
    },
  ],
  tips: [
    "Wähle PNG statt JPG, wann immer die Seite Text, Tabellen oder scharfe Linien enthält — die JPG-Komprimierung weicht diese Kanten sichtbar auf.",
    "PNG-Dateien sind größer als JPGs. Exportierst du viele Seiten und ist die Größe wichtiger als Schärfe, ist JPG die pragmatische Wahl.",
    "Eine PDF-Seite kennt keine Transparenz, das exportierte PNG landet also auf einem durchgehend weißen Hintergrund, obwohl PNG Transparenz eigentlich unterstützt.",
    "Höhere Skalierung verbessert keine schlechte Quelle. Enthält das PDF selbst einen unscharfen Scan, rendert ein 3×-PNG die Unschärfe einfach in höherer Auflösung.",
    "Seitenbilder sind nicht durchsuchbar — es gibt keine Textebene. Heb das Original-PDF auf, falls du die Wörter später suchen oder kopieren musst.",
  ],
  mobileNote:
    "Ein scharfes Seitenbild aus einem PDF auf dem Handy zu holen, ist praktisch für Folien, Design-Referenzen und Bug-Reports. Die App PDF Editor rendert Seiten mit Hardwarebeschleunigung und lässt dich das Bild vor dem Teilen markieren — schneller, als sich die Datei selbst zu mailen und später zu bearbeiten.",
  faq: [
    {
      q: "Warum PNG statt JPG wählen?",
      a: "PNG ist verlustfrei, Text, Tabellen und Diagramme bleiben also scharf. JPG ist kleiner, weicht aber feine Kanten auf. Für Dokumentseiten, in die du hineinzoomst, ist PNG die bessere Wahl.",
    },
    {
      q: "Bekomme ich ein PNG pro Seite?",
      a: "Ja. Jede Seite wird gerendert und als eigene PNG-Datei heruntergeladen. Behalte die, die du brauchst, und lösche den Rest.",
    },
    {
      q: "Wird mein PDF irgendwohin hochgeladen?",
      a: "Nein. Das Rendering läuft komplett in deinem Browser, die Datei bleibt also auf deinem Gerät.",
    },
    {
      q: "Warum ist mein PNG so groß?",
      a: "PNG ist verlustfrei, und eine hohe Skalierung vervielfacht die Pixelzahl. Reduzier die Skalierung oder wechsle zu JPG, wenn die Dateigröße ein Problem ist.",
    },
    {
      q: "Kann ich ein passwortgeschütztes PDF exportieren?",
      a: "Nicht im Browser — verschlüsselte Dateien lassen sich nicht rendern. Entferne zuerst das Passwort, oder nutze die mobile App PDF Editor.",
    },
  ],
  related: [
    { label: "PDF zu Bildern — Seiten im Browser exportieren", path: "/pdf-to-images" },
    { label: "Bild zu PDF — der umgekehrte Weg", path: "/image-to-pdf" },
    { label: "PDF zu JPG konvertieren", path: "/guides/how-to-convert-pdf-to-jpg" },
    { label: "Seiten aus einem PDF extrahieren", path: "/guides/how-to-extract-pages-from-pdf" },
  ],
  parentHub: { label: "PDF-Konverter", path: "/pdf-converter" },
};

export default content;
