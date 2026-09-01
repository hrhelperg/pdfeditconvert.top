import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflow-for-university-students",
  h1: "PDF-Workflow für Studierende (Notizen, Aufgaben, Abgaben)",
  description:
    "Ein PDF-Rhythmus für das ganze Semester, der auch die Prüfungsphase übersteht: Vorlesungsnotizen gescannt, Aufgaben abgegeben, Lernpakete geteilt. Browserbasiert und kostenlos.",
  updated: "2026-05-29",
  intro: [
    "Ein Unisemester erzeugt Hunderte von PDFs. Vorlesungsfolien, gescannte handschriftliche Notizen, Aufgabenblätter, fertige Abgaben, ergänzende Lektüre, Lernpakete für Prüfungen. Die meisten Studierenden häufen sie einfach im Downloads-Ordner an und wühlen bei Bedarf durch. In Woche drei funktioniert das noch; in Woche zehn bricht es zusammen; zur Prüfungsphase ist es schlimmer, als die Dateien gar nicht erst zu haben.",
    "Ein PDF-Rhythmus für das ganze Semester ist kurz und leicht durchzuhalten: wöchentliche Notizpakete pro Kurs, einheitlich benannte Aufgabenabgaben, vor Prüfungen zusammengestellte Lernpakete, Archivierung am Semesterende. Nichts davon braucht teure Tools oder Apps, die du nicht ohnehin schon hast, und das meiste lässt sich vom Handy aus erledigen.",
    "Diese Anleitung beschreibt diesen Rhythmus — was du wöchentlich tust, was pro Aufgabe, was zur Zwischen- und zur Abschlussprüfung. Ziel ist, jedes Dokument in fünf Sekunden wiederzufinden, nicht ein perfektes persönliches Wissenssystem aufzubauen.",
  ],
  steps: [
    {
      title: "Wöchentlich: Vorlesungsmaterial erfassen und zusammenführen",
      body: "Am Ende jeder Woche pro Kurs: getippte Notizen, Folien-PDFs, Tafelfotos und gescannte handschriftliche Seiten sammeln. PDF zusammenführen bündelt sie zu Woche3_Paket_JJJJ-MM-TT.pdf in /Kurse/[Kurs]/vorlesungen/.",
    },
    {
      title: "Pro Aufgabe: erstellen, benennen, abgeben, archivieren",
      body: "Word in PDF für getippte Arbeit, PDF scannen für handschriftliche Seiten, PDF zusammenführen zum Bündeln, PDF komprimieren, falls das Portal ein Limit hat. Abgeben, eine Kopie in /Kurse/[Kurs]/aufgaben/abgegeben/ behalten.",
    },
    {
      title: "Semestermitte: aufräumen",
      body: "Um Woche 7 herum die Kursordner durchgehen. Duplikate entfernen, falsch benannte Dateien korrigieren, bereits Erledigtes archivieren. Zwanzig Minuten in der Semestermitte sparen Stunden in der Prüfungsphase.",
    },
    {
      title: "Vor der Prüfung: ein Lernpaket zusammenstellen",
      body: "Die relevanten Wochenpakete zu einer einzigen Datei Kurs_Abschluss_Lernpaket.pdf zusammenführen. Ein Deckblatt mit den Themen ergänzen. Für die mobile Nutzung auf Tablet oder Handy während der Wiederholung komprimieren.",
    },
    {
      title: "Das Lernpaket auf Tablet oder Handy mit Anmerkungen versehen",
      body: "PDF-Anmerkungen auf einem Tablet funktionieren für manche Studierende besser als Papier. Nutze Markieren, Kommentieren und Unterstreichen; die Markierungen bleiben für spätere Wiederholung erhalten.",
    },
    {
      title: "Semesterende: den Kurs archivieren",
      body: "Verschiebe /Kurse/[Kurs]/ nach /Archiv/[Jahr]/[Kurs]/. Komprimiere alles im Archiv. Der aktive Ordner bleibt sauber fürs nächste Semester.",
    },
  ],
  tips: [
    "Führe nichts über Kurse oder Wochen hinweg zusammen. Die kleinste sinnvolle Einheit ist ein PDF pro Woche und Kurs.",
    "Reiche Abgaben exakt nach der Namenskonvention ein, die der Kurs vorgibt. „Nachname_Vorname_Aufgabe3.pdf“ ist Standard; halte dich genau daran.",
    "Versieh Lernpakete digital mit Anmerkungen. Durchsuchbare, kommentierte PDFs schlagen Papier bei der Wiederholung — du findest bestimmte Themen schnell wieder.",
    "Komprimiere nur bei der Abgabe und beim Archivieren. Während der aktiven Nutzung zählt Lesbarkeit mehr.",
    "Synchronisiere den Ordner Kurse mit einem Cloud-Speicher. Der Zugriff vom Handy auf den Laptop während der Prüfungsphase ist wertvoller als der gesparte Speicherplatz.",
  ],
  mobileNote:
    "Der größte Teil des PDF-Alltags einer Studentin spielt sich auf dem Handy ab — eine handschriftliche Seite scannen, eine Folie fotografieren, eine Aufgabe abgeben. Die PDF-Editor-App übernimmt die gesamte Kette (Scannen, Zusammenführen, Komprimieren, Unterschreiben, Teilen) offline auf iOS und Android, sodass der Workflow nicht vom Zugang zu einem Laptop abhängt.",
  faq: [
    {
      q: "Wie viel Zeit kostet dieser Rhythmus?",
      a: "Zehn Minuten pro Woche und Kurs für das Wochenpaket. Zwei Minuten pro Aufgabe. Zwanzig Minuten in der Semestermitte. Zusammengenommen spart das in der Prüfungsphase Stunden.",
    },
    {
      q: "Was, wenn ich viele Kurse habe?",
      a: "Der Rhythmus skaliert — dieselbe Konvention gilt für jeden Kurs. Zwei parallele Kurse verdoppeln den Zeitaufwand, die Struktur bleibt aber gleich.",
    },
    {
      q: "Lohnt es sich, Papier trotzdem zu behalten?",
      a: "Originale handschriftliche Notizen ja, als Sicherung. Sobald sie gescannt und im Wochenpaket sind, dient das Papier nur noch als Referenz.",
    },
    {
      q: "Sollte ich Scans mit OCR durchsuchbar machen?",
      a: "Wenn dein Tool das anbietet: ja. Durchsuchbares Lernmaterial ist zur Prüfungszeit deutlich wertvoller als nicht durchsuchbares.",
    },
    {
      q: "Wie sieht es mit weiterführender Lektüre aus?",
      a: "Ein eigener Ordner /lektuere/ pro Kurs. Führe Lektüre nicht mit Vorlesungspaketen zusammen; sie wachsen getrennt und erfüllen einen anderen Zweck.",
    },
  ],
  related: [
    { label: "PDF für Studierende — Notizen und Lernhilfen", path: "/pdf-for-students" },
    { label: "Die besten kostenlosen PDF-Tools für Studierende", path: "/guides/best-pdf-tools-for-students" },
    { label: "Lernmaterial als PDF organisieren", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Hausaufgaben als PDF abgeben", path: "/guides/how-to-submit-homework-as-pdf" },
  ],
  parentHub: { label: "PDF für Studierende — Notizen, Markierungen, Lernhilfen", path: "/pdf-for-students" },
};

export default content;
