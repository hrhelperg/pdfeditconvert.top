import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-iphone",
  h1: "PDF auf dem iPhone bearbeiten (Anleitung 2026)",
  description:
    "Korrigiere Text, füge Bilder ein und ordne Seiten eines PDFs direkt auf dem iPhone neu an. Schritt-für-Schritt-Anleitung mit der PDF-Editor-App.",
  updated: "2026-05-11",
  intro: [
    "Ein PDF auf dem iPhone zu bearbeiten, bedeutete früher: die Datei auf eine Website hochladen, der du kaum vertraut hast, dich an einem Mac anmelden, oder die betreffende Stelle als Screenshot ausschneiden und wieder als Bild einfügen. Das alles ist 2026 nicht mehr nötig. Mit der richtigen nativen App änderst du Text, ersetzt Bilder, ordnest Seiten neu an, füllst Formulare aus und unterschreibst Dokumente — alles auf deinem Handy, in weniger als einer Minute.",
    "Diese Anleitung zeigt dir genau, wo du in der App PDF Editor tippen musst. Dieselben Abläufe funktionieren auf dem iPad und in den meisten modernen PDF-Editoren, die Schritte bleiben also auch dann nützlich, wenn du später ein anderes Tool nutzt. Du brauchst iOS 16 oder neuer sowie die App PDF Editor aus dem App Store.",
    "Du erfährst, wie du ein PDF aus jeder Quelle öffnest (Dateien, Mail, iCloud Drive, Google Drive), den Inhalt bearbeitest und das Ergebnis exportierst. Jeder Schritt beschreibt, was du tust, nicht warum — wirkt ein Schritt auf dem Bildschirm hakelig, findest du im Tipps-Abschnitt am Ende die schnelle Lösung.",
  ],
  steps: [
    {
      title: "Installiere PDF Editor und öffne die App",
      body: "Lade sie aus dem App Store, dann öffne sie. Für den Start brauchst du kein Konto.",
    },
    {
      title: "Füge das PDF hinzu",
      body: "Tippe auf der Startseite auf das Plus-Symbol. Wähle die Quelle — Dateien, iCloud Drive, deine Fotomediathek oder „Durchsuchen“, um Ordner in Google Drive oder OneDrive zu finden. Du kannst auch jedes PDF aus Mail oder Safari öffnen und im Teilen-Menü „In PDF Editor öffnen“ wählen.",
    },
    {
      title: "Text direkt bearbeiten",
      body: "Tippe auf einen Absatz oder ein Wort. Eine blaue Markierung erscheint. Bearbeite den Text direkt im Textfeld, das sich öffnet. Die App behält Schriftart, Größe und Farbe des Originals bei, sodass das Layout erhalten bleibt.",
    },
    {
      title: "Bild ersetzen oder hinzufügen",
      body: "Tippe auf ein vorhandenes Bild, um es durch eines aus deiner Fotomediathek zu ersetzen. Oder tippe auf das Bild-Werkzeug und platziere ein neues Bild an beliebiger Stelle auf der Seite. Ziehe an den Ecken, um die Größe anzupassen.",
    },
    {
      title: "Seiten neu anordnen, löschen oder duplizieren",
      body: "Tippe auf das Seiten-Symbol, um die Miniaturansicht zu öffnen. Halte eine Seite gedrückt, um sie zu verschieben. Tippe auf eine Miniatur, um sie zu duplizieren oder zu löschen.",
    },
    {
      title: "Dokument unterschreiben",
      body: "Tippe auf das Werkzeug Unterschreiben, zeichne deine Unterschrift (oder nutze eine gespeicherte) und platziere sie an der richtigen Stelle. Die Unterschrift ist ein normales PDF-Objekt, du kannst sie also nach dem Platzieren noch verschieben oder in der Größe ändern.",
    },
    {
      title: "Formularfelder ausfüllen",
      body: "Hat das PDF Formularfelder, tippe auf jedes einzelne, um es auszufüllen. Die App erkennt den Feldtyp automatisch — Text, Kontrollkästchen, Dropdown — und zeigt dir die passende Tastatur.",
    },
    {
      title: "Speichern und teilen",
      body: "Tippe auf Fertig. Wähle „Speichern“, um das Original zu überschreiben, oder „Speichern unter“, um beide Versionen zu behalten. Über das Teilen-Menü verschickst du das Ergebnis anschließend per Mail, Nachrichten, AirDrop oder jede installierte App.",
    },
  ],
  tips: [
    "Zoome mit zwei Fingern, bevor du kleinen Text bearbeitest — das verbessert die Treffergenauigkeit deutlich.",
    "Tippe doppelt auf ein Wort, um nur dieses Wort auszuwählen; dreifaches Tippen wählt die ganze Zeile.",
    "Nutze den Apple Pencil auf dem iPad für spürbar sauberere Unterschriften als mit dem Finger.",
    "Aktiviere die Dateien-Integration in den iOS-Einstellungen unter PDF Editor, damit die App in jedem Teilen-Menü erscheint.",
    "Halte den Zurück-Pfeil im Bearbeitungsbildschirm gedrückt, um mehrere Änderungen auf einmal zurückzunehmen, wenn ein einfaches Rückgängig nicht reicht.",
  ],
  mobileNote:
    "Die Dateien-Integration unter iOS lohnt sich: Aktiviere sie in den Einstellungen, damit PDF Editor in jedem Teilen-Menü anderer Apps auftaucht. Danach genügt ein Tippen, um ein PDF zu bearbeiten, das du per Mail oder Slack erhältst.",
  faq: [
    {
      q: "Kann ich ein gescanntes PDF auf dem iPhone bearbeiten?",
      a: "Du kannst es kommentieren, unterschreiben und die Seiten neu anordnen. Um den eigentlichen Text einer gescannten Seite zu bearbeiten, führst du vorher eine Texterkennung (OCR) aus — das erledigt die App in wenigen Sekunden.",
    },
    {
      q: "Ist die App kostenlos?",
      a: "Ja, für die alltägliche Bearbeitung. Einige erweiterte Funktionen schaltest du mit dem Pro-Upgrade frei.",
    },
    {
      q: "Funktioniert die App mit dem Apple Pencil?",
      a: "Ja. Der Pencil eignet sich für Unterschriften, handschriftliche Notizen und Markierungen und fühlt sich dabei spürbar besser an als die Eingabe mit dem Finger.",
    },
    {
      q: "Kann ich ein passwortgeschütztes PDF bearbeiten?",
      a: "Gib das Passwort ein, wenn du beim Öffnen dazu aufgefordert wirst. Danach funktioniert die Bearbeitung wie gewohnt. Beim Speichern kannst du den Passwortschutz wieder anwenden.",
    },
    {
      q: "Wo landet die bearbeitete Datei?",
      a: "Genau dort, wo du sie speicherst: in Dateien, iCloud Drive, Google Drive, deiner Fotomediathek oder direkt in einem E-Mail-Entwurf.",
    },
  ],
  related: [
    { label: "PDF Editor — die vollständige Übersicht", path: "/pdf-editor" },
    {
      label: "PDF auf Android bearbeiten",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "PDF am Handy unterschreiben", path: "/sign-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
