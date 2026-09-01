import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-fillable-pdf",
  h1: "Bearbeitbares PDF oder ausfüllbares PDF – wo liegt der Unterschied?",
  description:
    "Ein PDF zu bearbeiten verändert seinen Inhalt; ein PDF auszufüllen bedeutet, Antworten in Formularfelder einzutragen. Warum das zwei unterschiedliche Aufgaben sind – und welche du wirklich brauchst.",
  updated: "2026-06-01",
  intro: [
    "„Bearbeitbar“ und „ausfüllbar“ klingen nach demselben, und viele verwenden die Begriffe auch synonym – dabei beschreiben sie zwei unterschiedliche Aufgaben. Ein PDF zu bearbeiten bedeutet, das Dokument selbst zu verändern: einen Satz umformulieren, ein Logo austauschen, einen Absatz verschieben. Ein PDF auszufüllen bedeutet, das Dokument so zu lassen, wie es gedacht war, und nur an den dafür vorgesehenen Stellen Antworten einzutragen. Ein Formular ist zum Ausfüllen gedacht, nicht zum Bearbeiten.",
    "Der Unterschied ist wichtig, weil sich Werkzeuge und Berechtigungen unterscheiden. Ein bearbeitbares PDF lässt dich den zugrunde liegenden Inhalt verändern. Ein ausfüllbares PDF schränkt dich bewusst auf seine Formularfelder ein, damit Fragen und Layout gleich bleiben, während du nur die Antworten lieferst. Viele Formulare sind absichtlich nicht bearbeitbar – die Person, die sie erstellt hat, will, dass jede Kopie dieselben Fragen an derselben Stelle stellt.",
    "Ein dritter Begriff sorgt für zusätzliche Verwirrung – „flach“ beziehungsweise „nicht interaktiv“ –, der beschreibt, ob der Text eines PDF echt ist oder nur ein Bild. Diese Anleitung konzentriert sich auf bearbeitbar gegenüber ausfüllbar: was beides bedeutet, wann du welches brauchst und wie du erkennst, was eine bestimmte Datei erlaubt.",
  ],
  steps: [
    {
      title: "Bearbeiten definieren: das Dokument verändern",
      body: "Bearbeiten verändert den Inhalt, den die Autorin oder der Autor erstellt hat – Text, Bilder, Seitenreihenfolge. Du bearbeitest ein PDF zum Beispiel, um einen Tippfehler in einem Vertrag zu korrigieren oder einen Preis in einer Broschüre zu aktualisieren. Es ändert, was im Dokument steht.",
    },
    {
      title: "Ausfüllen definieren: innerhalb der Felder antworten",
      body: "Beim Ausfüllen bleibt das Dokument unverändert, du ergänzt nur deine Antworten in den dafür vorgesehenen Feldern oder Freiräumen. Du füllst ein Bewerbungsformular aus – du schreibst seine Fragen nicht um.",
    },
    {
      title: "Prüfe, ob eine Datei ausfüllbar ist",
      body: "Tippe dort, wo eine Antwort hingehört. Erscheinen ein Cursor oder ein hervorgehobenes Feld, lässt sich das Formular über interaktive Felder ausfüllen. Gibt es keine Felder, kannst du trotzdem Text darüberlegen – ein manuelles Ausfüllen statt eines eingebauten.",
    },
    {
      title: "Prüfe, ob eine Datei bearbeitbar ist",
      body: "Versuche, eine Textzeile des Dokuments zu markieren. Lässt sie sich markieren und in einem PDF-Editor verändern, ist der Inhalt bearbeitbar. Bei gescannten Seiten und gesperrten Dateien funktioniert das oft nicht.",
    },
    {
      title: "Wähle das passende Werkzeug für die Aufgabe",
      body: "Willst du ändern, was im Dokument steht? Nutze einen PDF-Editor. Musst du ein Formular ausfüllen, das dir jemand geschickt hat? Nutze die Formularfunktion – tippe in Felder oder platziere Text an der richtigen Stelle, und exportiere anschließend.",
    },
  ],
  tips: [
    "Eine Datei kann ausfüllbar sein, ohne bearbeitbar zu sein: Du kannst die Felder beantworten, aber die Fragen nicht ändern. Das ist bei den meisten Formularen so gewollt.",
    "Passt deine Antwort nicht in den vorgesehenen Platz, versuch nicht, das Formular zu bearbeiten – ergänze wo erlaubt eine klärende Anmerkung oder frag bei der absendenden Person nach.",
    "Nachträglich Antworten eines fertigen Formulars zu ändern ist möglich, wenn du eine bearbeitbare Kopie behältst – eingebettete oder gescannte Versionen lassen sich dagegen kaum noch anpassen.",
    "Erstellst du selbst ein Formular, entscheide von Anfang an: Sollen andere es nur ausfüllen (Inhalt sperren, Felder anlegen) oder gemeinsam daran arbeiten (bearbeitbar lassen)?",
    "Manche PDFs nutzen Sicherheitseinstellungen, die das Bearbeiten blockieren, das Ausfüllen von Formularfeldern aber weiterhin erlauben – eine bewusste Kombination, kein Fehler.",
  ],
  mobileNote:
    "Die App PDF Editor beherrscht beide Aufgaben auf dem Handy: Bearbeite Text und Bilder eines Dokuments, wenn du den Inhalt ändern willst, oder tippe in Formularfelder – und platziere Text auf nicht interaktiven Formularen –, wenn du es nur ausfüllen musst. Interaktive Felder erkennt die App automatisch, und alles bleibt auf deinem Gerät.",
  faq: [
    {
      q: "Ist ein ausfüllbares PDF dasselbe wie ein bearbeitbares PDF?",
      a: "Nein. Ausfüllbar bedeutet, dass du Antworten in Formularfelder eintragen kannst, ohne das Dokument zu verändern. Bearbeitbar bedeutet, dass du den eigentlichen Inhalt des Dokuments ändern kannst. Ein Formular ist meist ausfüllbar, aber bewusst nicht bearbeitbar.",
    },
    {
      q: "Kann ein PDF gleichzeitig bearbeitbar und ausfüllbar sein?",
      a: "Ja, wenn die Sicherheitseinstellungen beides zulassen. Viele Formulare sind aber gesperrt, damit sich Fragen und Layout nicht verändern lassen, während die Felder weiterhin Antworten annehmen.",
    },
    {
      q: "Ich kann die Fragen eines Formulars nicht bearbeiten – ist es defekt?",
      a: "So gut wie sicher nicht. Formulare sind häufig geschützt, damit jede Kopie dieselben Fragen stellt. Du sollst die Felder ausfüllen, nicht das Formular umschreiben.",
    },
    {
      q: "Was brauche ich, um eine Bewerbung auszufüllen, die mir jemand geschickt hat?",
      a: "Ausfüllen, nicht Bearbeiten. Trage deine Antworten in die Felder ein oder platziere Text auf der Seite, falls sie nicht interaktiv ist, unterschreibe und exportiere dann. Das Formular selbst musst du dabei normalerweise nicht ändern.",
    },
    {
      q: "Worin unterscheidet sich das von bearbeitbar gegenüber flach?",
      a: "Bei bearbeitbar gegenüber flach geht es darum, ob der Text eines PDF echt ist oder nur ein Bild. Bei bearbeitbar gegenüber ausfüllbar geht es darum, ob du das Dokument veränderst oder nur beantwortest. Beide Fragen hängen zusammen, sind aber nicht dasselbe.",
    },
  ],
  related: [
    { label: "Was ist ein PDF-Formular?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Bearbeitbares PDF oder flaches PDF",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
    {
      label: "Kann man ein PDF-Formular bearbeiten?",
      path: "/guides/can-you-edit-a-pdf-form",
    },
    { label: "PDF Editor – bearbeiten und ausfüllen", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
