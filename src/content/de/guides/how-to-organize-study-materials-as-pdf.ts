import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-study-materials-as-pdf",
  h1: "Lernmaterial als PDF organisieren (Ordner, Namen, Register)",
  description:
    "Kurs-PDFs stapeln sich schnell. Eine einfache Ordner-, Namens- und Zusammenführungslogik, die Semesterunterlagen von der ersten Woche bis zur Prüfungsphase durchsuchbar hält.",
  updated: "2026-05-29",
  intro: [
    "Bis zur vierten Semesterwoche liegen im Downloads-Ordner fünfzig PDFs mit Namen wie „vorlesung7.pdf“, „final-version-2.pdf“, „Folien_v3_korrigiert.pdf“ und „Dokument.pdf“. Ab Woche zehn findest du nichts mehr. In der Prüfungsphase durchsuchst du dieselbe Vorlesung dreimal, weil du nicht mehr weißt, welche Version welcher Datei die Folie enthält, die du brauchst.",
    "Die Lösung ist keine Software oder App — es ist eine Konvention. Eine kurze Ordnerstruktur, ein einheitliches Namensschema und die Gewohnheit, wöchentlich zusammenzuführen. Sobald diese drei Dinge stehen, dauert es zwei Monate später fünf Sekunden statt fünfzehn Minuten, eine bestimmte Vorlesung wiederzufinden.",
    "Diese Anleitung beschreibt die Konvention, die ein ganzes Semester durchhält: wie die Ordner aussehen sollten, wie Dateinamen aufgebaut sind, wann du zusammenführst und was am Ende des Semesters passiert.",
  ],
  steps: [
    {
      title: "Lege pro Kurs einen Hauptordner an",
      body: "/Kurse/[Kurskürzel]/. Darin: /vorlesungen/, /aufgaben/, /lektuere/, /pruefungen/. Vier Unterordner decken das meiste ab, was ankommt. Verschachtele nicht tiefer als zwei Ebenen.",
    },
    {
      title: "Vereinheitliche das Namensschema",
      body: "WocheN_Dokumenttyp_JJJJ-MM-TT.pdf. Also Woche3_Vorlesung_2026-09-15.pdf, Aufgabe2_Abgabe_2026-09-20.pdf. Das Datum am Ende sortiert chronologisch; die Woche am Anfang gruppiert nach Thema.",
    },
    {
      title: "Führe wochenweise zusammen, nicht dateiweise",
      body: "Am Ende jeder Woche fügt PDF zusammenführen die Vorlesungsnotizen, Folien und Tafelfotos dieser Woche zu einer Datei Woche3_Vorlesungspaket_JJJJ-MM-TT.pdf zusammen. Eine einzige Datei pro Woche lässt sich später viel leichter wiederfinden.",
    },
    {
      title: "Füge zusammengeführten Paketen Deckblätter hinzu",
      body: "Ein getipptes Deckblatt (Kurs, Woche, behandelte Themen) macht das Paket zur Prüfungszeit selbsterklärend. Dein zukünftiges Ich, das zwölf Wochenpakete überfliegt, wird es dir danken.",
    },
    {
      title: "Archiviere am Semesterende",
      body: "Verschiebe /Kurse/[Kurs]/ am Semesterende nach /Archiv/[Jahr]/[Kurs]/. Die aktiven Ordner bleiben schlank, das Archiv bleibt durchsuchbar, falls du später auf Vorwissen zurückgreifen musst.",
    },
    {
      title: "Komprimiere Archive, nicht aktive Dateien",
      body: "Komprimiere das archivierte Material mit PDF komprimieren, um Speicherplatz zu sparen. Komprimiere nicht die aktiven Lerndateien — während des Semesters zählt Lesbarkeit mehr als Dateigröße.",
    },
  ],
  tips: [
    "Nutze Daten im Format JJJJ-MM-TT. Sie sortieren sich in jedem Dateibrowser korrekt. 15.9.26 tut das nicht.",
    "Setze keine Versionsnummern in Lernmaterial. Die finale Vorlesung ist einfach die Vorlesung; ein v2 bedeutet, dass die Professorin neu hochgeladen hat.",
    "Markiere Prüfungsvorbereitung separat — /pruefungen/zwischenpruefung/ und /pruefungen/abschlusspruefung/. Das ist ein anderer Lernmodus als die wöchentliche Wiederholung.",
    "Führe nichts über Kurse hinweg zusammen. Kursübergreifende PDFs findet man nie wieder.",
    "Lege in jedem Kursordner eine kurze README.txt an, die beschreibt, was in jedem Unterordner liegt. Hilft, wenn du das Material erst ein Semester später wieder brauchst.",
  ],
  mobileNote:
    "Die meisten Lern-PDFs kommen zuerst auf dem Handy an (über das Kursportal, per E-Mail der Professorin oder durch einen eigenen Scan). Mit der PDF-Editor-App kannst du direkt mobil umbenennen, ablegen und zusammenführen, sodass die Datei gleich am richtigen Ort landet, statt sich im Downloads-Ordner zu stapeln.",
  faq: [
    {
      q: "Welches Dateinamensformat eignet sich am besten für Lernmaterial?",
      a: "WocheN_Dokumenttyp_JJJJ-MM-TT.pdf. Das Wochenpräfix gruppiert nach Thema, der Dokumenttyp klärt den Inhalt, das ISO-Datum sortiert chronologisch.",
    },
    {
      q: "Sollte ich wöchentlich zusammenführen oder Einzeldateien behalten?",
      a: "Führe wöchentlich zusammen. Ein PDF pro Woche und Kurs ist die richtige Größe — klein genug, um schnell zu laden, groß genug, um für sich allein zur Wiederholung zu genügen.",
    },
    {
      q: "Wie tief sollten Ordner verschachtelt sein?",
      a: "Zwei Ebenen. /Kurse/[Kurs]/[Typ]/. Tiefer als das, und Dateien gehen verloren.",
    },
    {
      q: "Brauche ich einen eigenen Archivordner?",
      a: "Ja. Verschiebe abgeschlossene Semester aus /Kurse/ heraus, damit der aktive Ordner übersichtlich bleibt.",
    },
    {
      q: "Wie sieht es mit Cloud-Synchronisierung aus?",
      a: "Synchronisiere den Ordner /Kurse/ mit mindestens einem Cloud-Speicher. Gerade in der Prüfungsphase zählt der Zugriff vom Handy auf den Laptop — die Synchronisierung übernimmt das.",
    },
  ],
  related: [
    { label: "PDF für Studierende — Notizen und Lernhilfen", path: "/pdf-for-students" },
    { label: "PDF zusammenführen — Wochenpakete bündeln", path: "/merge-pdf" },
    { label: "Wie du PDF-Dateien organisierst", path: "/guides/how-to-organize-pdf-files" },
    { label: "PDF-Workflow für Studierende", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF für Studierende — Notizen, Markierungen, Lernhilfen", path: "/pdf-for-students" },
};

export default content;
