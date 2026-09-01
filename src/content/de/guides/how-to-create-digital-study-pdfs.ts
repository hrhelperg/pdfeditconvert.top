import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-digital-study-pdfs",
  h1: "Digitale Lern-PDFs erstellen (Karteikarten, Zusammenfassungen, Pakete)",
  description:
    "Baue eigene Lern-PDFs aus Notizen, Folien und Markierungen – durchsuchbar, portabel, bereit für Annotationen auf dem Tablet. Die Struktur, die sie zur Prüfungszeit wirklich nützlich macht.",
  updated: "2026-05-29",
  intro: [
    "Ein selbst erstelltes Lern-PDF ist eines der besten Werkzeuge, die du zur Prüfung haben kannst. Es ist kleiner als der komplette Satz Wochennotizen, strukturierter als ein Chatverlauf voller Wiederholungstipps und portabler als physische Karteikarten. Öffne es auf dem Tablet in einer Lernpause, im Café, auf dem Laptop in der Bibliothek — dieselbe Datei, dieselben Anmerkungen, dieselbe Durchsuchbarkeit.",
    "Aber ein Lern-PDF lohnt sich nur, wenn es strukturiert ist. Alle Vorlesungen einfach in eine Datei zu kippen ist unbrauchbar; ein sorgfältig zusammengestelltes Zusammenfassungspaket ist das Dokument, das du vor der Abschlussprüfung wirklich dreimal pro Woche öffnest. Der Unterschied liegt darin, wie du es aufbaust.",
    "Diese Anleitung zeigt die Struktur, die funktioniert: was rein sollte, was draußen bleibt, wie du für Überfliegen versus intensives Lesen organisierst, und wie du die Dateigröße auf dem Tablet handhabbar hältst. Vorausgesetzt wird, dass du aus vorhandenen Wochennotizen, Folien und Markierungen aufbaust — nicht von null.",
  ],
  steps: [
    {
      title: "Lege den Umfang fest, bevor du beginnst",
      body: "Ein Lern-PDF pro Kurs, eines pro großer Prüfung (Zwischen-, Abschlussprüfung) oder eines pro Thema — wähle die Granularität, die zu deiner tatsächlichen Lernweise passt. Kleinere, fokussierte PDFs schlagen ein einziges riesiges Paket.",
    },
    {
      title: "Erstelle ein klares Deckblatt und Inhaltsverzeichnis",
      body: "Kurskürzel, Prüfungsname, Datum, behandelte Themen. Ein einseitiges Inhaltsverzeichnis vorne. Beides ist kurz — fünf Minuten Arbeit, die die Navigierbarkeit verdreifachen.",
    },
    {
      title: "Extrahiere die wichtigsten Folien und Notizen",
      body: "PDF-Seiten extrahieren zieht nur die Folien und Notizseiten heraus, die du wirklich brauchst, aus den größeren Wochenpaketen. Nimm nicht das ganze Semester auf — nur die Teile, die für diese Prüfung zählen.",
    },
    {
      title: "Führe alles in einer stimmigen Reihenfolge zusammen",
      body: "PDF zusammenführen bringt die Auszüge in Lernreihenfolge zusammen: chronologisch, nach Konzepten, oder gewichtet nach Prüfungsschwerpunkt. Nutze die Reihenfolge, in der du auch wiederholen wirst.",
    },
    {
      title: "Versieh es im Voraus mit Anmerkungen",
      body: "Markiere die wichtigsten Begriffe, Formeln und Konzepte schon vorab. Anmerkungen funktionieren beim Wiederholen besser, wenn du nicht gleichzeitig noch markieren musst.",
    },
    {
      title: "Komprimiere für die mobile Nutzung auf dem Tablet",
      body: "PDF komprimieren bringt das Lernpaket auf eine tabletfreundliche Größe — meist unter 20 MB. Kleinere Dateien laden schnell, scrollen flüssig und schonen den Akku bei langen Lernsessions.",
    },
  ],
  tips: [
    "Ziele nicht auf Vollständigkeit. Das Lern-PDF ergänzt die vollständigen Notizen, es ersetzt sie nicht. Lass Details in den Wochenpaketen.",
    "Füge am Ende ein oder zwei Spickzettel-Seiten mit Formeln, Daten, Namen ein — alles, was du am Prüfungstag ohne Nachdenken parat haben musst.",
    "Spiegle den Prüfungsaufbau. Besteht die Prüfung aus Kurzantworten und Aufsatz, strukturiere das Lernpaket genauso, damit das Üben zum Prüfungsformat passt.",
    "Komprimiere nicht zu stark. Manche Textartefakte bei starker Komprimierung stören die Lesbarkeit bei langen Lernsessions. Mittlere Komprimierung ist meist die richtige Balance.",
    "Exportiere nach einer größeren Anmerkungssession erneut, damit die Markierungen als lesbarer Inhalt erhalten bleiben und nicht nur als lose Overlays.",
  ],
  mobileNote:
    "Tablets und Handys sind der Ort, an dem Lern-PDFs tatsächlich genutzt werden. Die PDF-Editor-App unterstützt Anmerkungen, Markierungen und Suche in der Datei, die du erstellt hast — so wird das Lernpaket überall zum interaktiven Wiederholungswerkzeug, egal wo du lernst.",
  faq: [
    {
      q: "Wie lang sollte ein Lern-PDF sein?",
      a: "So lang, wie du es in zwei oder drei Sitzungen tatsächlich noch mal durchlesen kannst. Bei den meisten Kursen sind das 30–80 Seiten. Über 100 Seiten überspringst du ohnehin die Hälfte.",
    },
    {
      q: "Sollte ich alle Folien aufnehmen oder nur die wichtigsten?",
      a: "Nur die wichtigsten. Alles aufzunehmen verwässert den Nutzen. Wähle die Folien, die die Konzepte erklären, bei denen du am unsichersten bist.",
    },
    {
      q: "Sind digitale Karteikarten besser als Papier?",
      a: "Für die meisten Studierenden ja. Sie sind durchsuchbar, portabel und überstehen es, fallen gelassen oder bekleckert zu werden. Apps mit Spaced-Repetition-Methode legen noch eine Ebene obendrauf.",
    },
    {
      q: "Sollte ich mein Lern-PDF mit der Gruppe teilen?",
      a: "Optional. Manche lernen besser mit eigenen Paketen, andere profitieren von einem gemeinsamen. Probiere beides aus und schau, was sich besser einprägt.",
    },
    {
      q: "Wie früh sollte ich es erstellen?",
      a: "Zwei bis drei Wochen vor der Prüfung. Früher fehlt noch Inhalt; später bleibt keine Zeit mehr, es durchzuarbeiten.",
    },
  ],
  related: [
    { label: "PDF für Studierende — Notizen und Lernhilfen", path: "/pdf-for-students" },
    { label: "PDF zusammenführen — Lernpakete zusammenstellen", path: "/merge-pdf" },
    { label: "Lernmaterial als PDF organisieren", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "PDF-Workflow für Studierende", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF für Studierende — Notizen, Markierungen, Lernhilfen", path: "/pdf-for-students" },
};

export default content;
