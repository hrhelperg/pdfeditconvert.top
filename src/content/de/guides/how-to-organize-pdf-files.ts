import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-pdf-files",
  h1: "PDF-Dateien organisieren — eine praktische Methode",
  description:
    "Bring Ordnung in unübersichtliche PDFs: verwandte Dateien zusammenführen, Seiten neu anordnen, Unnötiges entfernen und richtig benennen. Ein wiederholbarer Ablauf mit kostenlosen Browser-Tools.",
  updated: "2026-05-23",
  intro: [
    "„Meine PDFs organisieren“ meint meistens eines von zwei Dingen: ein einzelnes unübersichtliches Dokument aufräumen oder einen Ordner voller zusammengehöriger Dateien in etwas Stimmiges verwandeln. Beides läuft auf dieselbe Handvoll Handgriffe hinaus — zusammenführen, was zusammengehört, Seiten in die richtige Reihenfolge bringen, entfernen, was nicht dazugehört, und alles so benennen, dass du es später wiederfindest.",
    "Diese Anleitung beschreibt einen wiederholbaren Ablauf aus kostenlosen Browser-Tools, die alle auf deinem Gerät laufen, ohne dass etwas hochgeladen wird. Keiner der einzelnen Schritte ist kompliziert — der Wert liegt in der richtigen Reihenfolge, damit du keine Arbeit doppelt machst.",
    "Verstehe es weniger als einzelnes Werkzeug, sondern als Routine, die sich auf jeden Stapel Dokumente anwenden lässt — einen Steuerordner, die Unterlagen eines Projekts, einen Stapel Scans — und aus Chaos etwas macht, das du guten Gewissens weitergeben kannst.",
  ],
  steps: [
    {
      title: "Verschaff dir einen Überblick",
      body: "Liste die Dateien auf und notiere, was jede davon enthält. Lege fest, wie das fertige Ergebnis aussehen soll — ein einziges zusammengeführtes Dokument oder mehrere saubere Einzeldateien — bevor du irgendetwas veränderst.",
    },
    {
      title: "Führe zusammengehörige Dateien zusammen",
      body: "Nutze das Werkzeug PDF zusammenführen, um zusammengehörige Dokumente in der gewünschten Reihenfolge zu einem einzigen zu vereinen. Ein Vertrag mit seinen Anlagen, ein Bericht mit seinem Anhang — jeweils eine Datei.",
    },
    {
      title: "Bring die Seiten in die richtige Reihenfolge",
      body: "Setze das Werkzeug Seiten in PDF neu anordnen bei allem ein, was durcheinandergeraten ist — rückwärts eingescannte Seiten, Abschnitte am falschen Platz —, bis sich jedes Dokument stimmig lesen lässt.",
    },
    {
      title: "Entferne den Ballast",
      body: "Wirf leere Seiten, Deckblätter und Duplikate raus, indem du mit dem Werkzeug Seiten aus PDF extrahieren nur die gewünschten Seiten behältst.",
    },
    {
      title: "Richte quer liegende Seiten aus",
      body: "Setze das Werkzeug PDF drehen bei Seiten ein, die quer oder auf dem Kopf eingescannt wurden, damit sich das ganze Dokument aufrecht lesen lässt.",
    },
    {
      title: "Einheitlich benennen und ablegen",
      body: "Gib jeder Datei einen aussagekräftigen, datierten Namen — „Rechnung-Acme-2026-05.pdf“ — und lege sie in einem sinnvollen Ordner ab. Einheitliche Namen sind es, die eine Sammlung Monate später noch durchsuchbar machen.",
    },
  ],
  tips: [
    "Halte die Reihenfolge ein: zusammenführen, neu anordnen, entfernen, drehen, benennen. Wer zuerst benennt und dann zusammenführt, benennt doppelt; wer vor dem Entfernen neu anordnet, verschwendet Aufwand an Seiten, die ohnehin rausfliegen.",
    "Leg dich auf ein Namensschema fest und bleib dabei. „Typ-Wer-Datum“ (Rechnung-Acme-2026-05) lässt sich weit besser sortieren und durchsuchen als spontan vergebene Namen.",
    "Bewahre die Originale in einem eigenen Ordner auf, bis die organisierten Versionen erwiesenermaßen in Ordnung sind. Aufräumen lässt sich nur rückgängig machen, wenn die Quelle nicht überschrieben wurde.",
    "Komprimiere erst ganz am Ende, wenn die Dateien per E-Mail oder über ein Portal verschickt werden sollen — ein Dokument zu komprimieren, das du gleich noch umstrukturierst, bringt nichts.",
    "Bei sehr großen Mengen stößt der Browser an Speichergrenzen. Für Hunderte Seiten oder Dateien übernimmt die App PDF Editor die Schwerstarbeit deutlich komfortabler.",
  ],
  mobileNote:
    "Viel Dokumentenchaos entsteht schon auf dem Handy — Scans, Screenshots, E-Mail-Anhänge. Die App PDF Editor lässt dich an einem Ort zusammenführen, neu anordnen, kürzen und umbenennen, offline — so bleibt alles ordentlich, sobald es reinkommt, statt sich später zu einem Berg aufzutürmen.",
  faq: [
    {
      q: "Was ist die richtige Reihenfolge, um ein unübersichtliches PDF zu organisieren?",
      a: "Führe zuerst zusammengehörige Dateien zusammen, ordne dann die Seiten neu an, entferne den Ballast, korrigiere die Ausrichtung und benenne und lege die Datei zuletzt ab. In dieser Reihenfolge musst du keinen Schritt wiederholen.",
    },
    {
      q: "Sind diese Werkzeuge privat?",
      a: "Ja. Die Werkzeuge zum Zusammenführen, Neuanordnen, Extrahieren und Drehen laufen alle im Browser auf deinem Gerät — es wird nichts hochgeladen, was bei persönlichen oder finanziellen Unterlagen entscheidend ist.",
    },
    {
      q: "Wie sollte ich PDF-Dateien benennen?",
      a: "Verwende ein einheitliches, aussagekräftiges Muster mit Datum, etwa „Typ-Wer-Datum.pdf“. Erst diese Einheitlichkeit macht einen Ordner später durchsuch- und sortierbar.",
    },
    {
      q: "Kann ich eine große Menge auf einmal organisieren?",
      a: "Browser-Tools kommen mit alltäglichen Mengen gut zurecht, aber sehr große Stapel können den Arbeitsspeicher belasten. Die App PDF Editor ist für größere Aufgaben gebaut und funktioniert offline.",
    },
    {
      q: "Sollte ich beim Organisieren auch komprimieren?",
      a: "Komprimiere zuletzt, sobald das Dokument fertig ist, und auch nur, wenn es ein Größenlimit für E-Mail oder Portal einhalten muss. Wer mittendrin komprimiert, macht das durch spätere Bearbeitungsschritte ohnehin wieder zunichte.",
    },
  ],
  related: [
    { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
    { label: "PDF zusammenführen — Dateien kombinieren", path: "/merge-pdf" },
    { label: "Wie du Seiten in einem PDF neu anordnest", path: "/guides/how-to-reorder-pdf-pages" },
    { label: "Unerwünschte Seiten aus einem PDF entfernen", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
};

export default content;
