import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-lecture-notes-to-pdf",
  h1: "Vorlesungsnotizen in PDF umwandeln (Word, Fotos, Folien)",
  description:
    "Vorlesungsnotizen kommen in jedem erdenklichen Format – Word-Dokument, Folien-Deck, Screenshot, Foto der Tafel. So wird aus jedem ein einziges, lesbares PDF, ohne dass die Struktur verloren geht.",
  updated: "2026-05-29",
  intro: [
    "Am Ende einer Woche können die Notizen zu einer einzigen Vorlesung in fünf verschiedenen Formaten vorliegen: ein Word-Dokument, das du während der Vorlesung getippt hast, eine PowerPoint-Präsentation der Professorin, ein Foto der Tafel, Screenshots aus einer Aufzeichnung und ein paar handschriftliche Seiten von dem Moment, als dein Laptop-Akku leer war.",
    "All das kann — und sollte — am Ende in einem PDF pro Thema oder pro Woche landen. PDFs kommen mit jedem Format gut zurecht, lassen sich auf jedem Gerät lesen und gehen nicht so leicht verloren wie verstreute Einzeldateien. Der Trick ist, das PDF zu erstellen, ohne die Struktur der jeweiligen Quelle zu verlieren.",
    "Diese Anleitung zeigt den Umwandlungsweg für jedes Format und danach die Zusammenführungsstrategie, die daraus eine stimmige Gesamtdatei macht. Ziel ist Lernmaterial, das du zur Prüfungszeit wirklich nutzen kannst.",
  ],
  steps: [
    {
      title: "Wandle Word-Notizen mit Word in PDF um",
      body: "Getippte Notizen im Word-Dokument → mit Word in PDF direkt im Browser. Überschriften, Formatierung und eingebettete Screenshots bleiben erhalten. Exportiere zunächst in voller Größe, komprimiere später.",
    },
    {
      title: "Exportiere Foliendecks als PDF",
      body: "PowerPoint und Keynote exportieren direkt als PDF. Nutze das Exportmenü, keine Screenshots. Die PDF-Version behält auswählbaren Text und bleibt bei jedem Zoomlevel scharf.",
    },
    {
      title: "Wandle Fotos und Screenshots mit Bild in PDF um",
      body: "Fotos der Tafel, Screenshots aus Aufzeichnungen → Bild in PDF fügt sie zu einem PDF zusammen. Lege die Reihenfolge schon vor dem Hinzufügen fest; nachträgliches Umsortieren ist mehr Aufwand.",
    },
    {
      title: "Scanne handschriftliche Seiten",
      body: "PDF scannen auf dem Handy liefert mit Graustufen und Kantenerkennung saubere, mehrseitige Scans — schärfer und kleiner als beliebige Fotos.",
    },
    {
      title: "Führe alles zu einem PDF pro Thema zusammen",
      body: "PDF zusammenführen bündelt alle Formate in einer geordneten Datei. Die Reihenfolge zählt: chronologisch nach Vorlesungstag oder logisch aufgebaut (Einstiegsfolien → Vorlesungsnotizen → Tafelfotos → Zusammenfassung). Entscheide dich für eine Variante und bleib dabei.",
    },
    {
      title: "Füge Deckblatt und Inhaltsverzeichnis hinzu",
      body: "Ein getipptes Deckblatt (Kurs, Woche, Thema) macht die Datei auch sechs Monate später selbsterklärend. Bei langen zusammengestellten PDFs (über 30 Seiten) lohnt sich ein einseitiges Inhaltsverzeichnis.",
    },
  ],
  tips: [
    "Widerstehe der Versuchung, Foliendecks per Screenshot zu erfassen. Nutze den PDF-Export des Decks — schärfer, und der Text bleibt für die Suche auswählbar.",
    "Fotografiere die Tafel gerade von vorn, nicht schräg. Die automatische Korrektur kann leichte Schräglagen ausgleichen, aber ein gerades Foto ist immer sauberer.",
    "Hat eine Aufzeichnung wichtige Momente, fotografiere gezielt diese Einzelbilder statt das ganze Video mitzuschneiden. So bleibt das PDF überschaubar.",
    "Führe nichts über mehrere Wochen hinweg zusammen. Ein PDF pro Woche bleibt navigierbar; ein PDF pro Semester ist unlesbar.",
    "Komprimiere das fertig zusammengeführte PDF erst nach Semesterende. Während des Semesters behältst du die gut lesbare Version fürs aktive Lernen.",
  ],
  mobileNote:
    "Die halbe Umwandlung von Vorlesungsnotizen passiert auf dem Handy — die Tafel fotografieren, eine handschriftliche Seite scannen, Folien per Screenshot festhalten. Die PDF-Editor-App übernimmt die gesamte Umwandlungs- und Zusammenführungskette mobil und erzeugt ein sauberes PDF pro Woche, bevor die Datei das Handy überhaupt verlässt.",
  faq: [
    {
      q: "Sollte ich Notizen im Originalformat behalten oder umwandeln?",
      a: "Beides. Behalte die bearbeitbaren Originale für spätere Überarbeitungen; erstelle für jedes Thema zusätzlich eine PDF-Kopie zum Lernen. Das PDF ersetzt nicht die Quelle — es ist ein Lernmaterial.",
    },
    {
      q: "Wie führt man am besten zusammen?",
      a: "Mit PDF zusammenführen im Browser. Lege die Reihenfolge vor dem Zusammenführen fest; ein nachträgliches Umsortieren geht zwar auch, dauert aber länger.",
    },
    {
      q: "Sollte ich handschriftliche Scans mit OCR bearbeiten?",
      a: "Wenn dein Tool das anbietet: ja — durchsuchbare handschriftliche Notizen sind zur Prüfungszeit deutlich nützlicher. OCR bei Handschrift ist nicht perfekt; betrachte den durchsuchbaren Text als Annäherung.",
    },
    {
      q: "Wie groß sollten wöchentliche Notiz-PDFs sein?",
      a: "So groß, wie die Woche eben ist. Komprimiere fürs Archiv erst am Semesterende; während des Semesters hat Lesbarkeit Vorrang vor Dateigröße.",
    },
    {
      q: "Kann ich das alles auf dem Handy erledigen?",
      a: "Ja. Die PDF-Editor-App verarbeitet jedes Format und führt alles direkt auf dem Gerät zusammen — praktisch, wenn deine Notizen nicht auf den nächsten Laptop-Moment warten sollen.",
    },
  ],
  related: [
    { label: "PDF-Konverter — Umwandlungen für Word, JPG, PNG", path: "/pdf-converter" },
    { label: "Bild in PDF — Tafelfotos und Screenshots", path: "/image-to-pdf" },
    { label: "Handschriftliche Notizen als PDF scannen", path: "/guides/how-to-scan-notes-to-pdf" },
    { label: "Lernmaterial als PDF organisieren", path: "/guides/how-to-organize-study-materials-as-pdf" },
  ],
  parentHub: { label: "PDF-Konverter — Word, JPG, PNG und zurück", path: "/pdf-converter" },
};

export default content;
