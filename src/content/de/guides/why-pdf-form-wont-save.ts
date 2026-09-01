import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-wont-save",
  h1: "Warum speichert mein PDF-Formular nicht? Und wie du es reparierst",
  description:
    "Formular ausgefüllt, und die Antworten sind beim erneuten Öffnen weg? Warum manche Programme Formulardaten nur drucken statt sie zu speichern – und die zuverlässigen Wege, deine Antworten dauerhaft zu sichern.",
  updated: "2026-06-01",
  intro: [
    "Du verbringst zehn Minuten mit dem Ausfüllen eines Formulars, speicherst, öffnest es später erneut, und jedes Feld ist wieder leer. Das ist zum Verzweifeln, und es ist nicht dein Fehler – Formularfeldwerte liegen in einer eigenen Ebene getrennt von der Seite, und nicht jedes Programm schreibt diese Ebene beim Speichern tatsächlich zurück in die Datei. Manche können das Formular nur drucken, deine Eingaben aber nie speichern.",
    "Es gibt zwei zuverlässige Lösungen: ein Programm nutzen, das Formulardaten tatsächlich speichert, oder das Formular einbetten, damit deine Antworten dauerhafter Seiteninhalt werden, den nichts mehr verwerfen kann. Welche du wählst, hängt davon ab, ob du die Antworten später noch bearbeiten musst. So oder so ist das Problem der verschwindenden Antworten vollständig lösbar.",
    "Diese Anleitung erklärt, warum das Speichern fehlschlägt, wie du prüfst, ob dein Programm die Ursache ist, und die beiden verlässlichen Wege, damit ausgefüllte Antworten wirklich bleiben.",
  ],
  steps: [
    {
      title: "Bestätige, dass die Antworten wirklich nicht speichern",
      body: "Fülle ein Feld aus, speichere, schließe die Datei vollständig und öffne sie erneut. Ist die Antwort weg, werden die Feldwerte nicht geschrieben – das ist ein Speicherproblem, kein Fehler von dir.",
    },
    {
      title: "Nutze Speichern oder Exportieren, niemals nur Drucken",
      body: "Wähle Speichern oder Exportieren, um Feldwerte in das PDF zu schreiben. Ein reiner Druckweg (häufig bei einfachen Anzeigeprogrammen) erzeugt Ausgabe, speichert aber nie die bearbeitbaren Antworten – die klassische Ursache für verschwundene Daten.",
    },
    {
      title: "Wechsle zu einem formularfähigen Programm",
      body: "Druckt deine aktuelle App das Formular nur, verschiebe es in eine eigene PDF-App oder ein Browser-Tool, das Formulardaten speichert. Öffne die gespeicherte Datei erneut, um zu bestätigen, dass die Antworten geblieben sind.",
    },
    {
      title: "Bette ein, um Antworten dauerhaft zu machen",
      body: "Bist du mit dem Bearbeiten fertig, bette das Formular ein. Einbetten verschmilzt die Werte mit der Seite, sodass keine separate Ebene mehr übrig bleibt, die verloren gehen könnte, und die Antworten überall erhalten bleiben.",
    },
    {
      title: "Speichere als neue Kopie",
      body: "Exportiere unter einem neuen Dateinamen, damit du sowohl ein sauberes leeres Original als auch eine gespeicherte, ausgefüllte Version behältst – und nie versehentlich die Vorlage mit einem leeren Formular überschreibst.",
    },
  ],
  tips: [
    "Verschwinden Antworten, druckt dein Programm nur, statt die Feldebene zu speichern – wechsle zu einem, das Formulardaten schreibt.",
    "Einbetten ist die sicherste Lösung: Ist ein Formular erst eingebettet, gibt es keine Feldebene mehr, die verloren gehen könnte.",
    "Öffne ein gespeichertes Formular immer erneut, bevor du dich darauf verlässt; der Schließen-und-erneut-öffnen-Test entlarvt das Problem sofort.",
    "Bewahre das leere Original getrennt auf, damit dich das Einbetten deiner ausgefüllten Kopie nie die wiederverwendbare Vorlage kostet.",
    "Auf dem Handy bettet ein „Als PDF drucken“-Shortcut meist ein – in Ordnung, wenn du fertig bist, aber es hält das Formular nicht bearbeitbar.",
  ],
  mobileNote:
    "Die App PDF Editor schreibt ausgefüllte Antworten in die Datei und exportiert auf Wunsch eine eingebettete Kopie, sobald du fertig bist, sodass beim erneuten Öffnen oder auf der Empfängerseite nichts verschwindet. Sie speichert auf dem Gerät, die eingegebenen Angaben bleiben also privat.",
  faq: [
    {
      q: "Warum speichert mein PDF-Formular immer wieder leer?",
      a: "Weil dein Anzeigeprogramm das Formular druckt, statt seine Feldwerte zu speichern. Die Antworten liegen in einer eigenen Feldebene; wird diese nicht in die Datei geschrieben, zeigt sich beim erneuten Öffnen wieder alles leer. Nutze ein Programm, das Formulardaten speichert, oder bette das Formular ein.",
    },
    {
      q: "Wie sorge ich dafür, dass meine Formularantworten bleiben?",
      a: "Speichere oder exportiere mit einem formularfähigen Programm, damit die Feldwerte in die Datei geschrieben werden, und öffne die Datei danach erneut zur Kontrolle. Für ein dauerhaftes Ergebnis bette das Formular ein, damit die Antworten mit der Seite verschmelzen.",
    },
    {
      q: "Was bewirkt Einbetten beim Speichern?",
      a: "Es verschmilzt deine ausgefüllten Werte mit der Seite selbst, sodass keine separate Feldebene mehr übrig bleibt, die verloren gehen könnte. Nach dem Einbetten speichern und zeigen sich die Antworten in jedem Anzeigeprogramm zuverlässig an.",
    },
    {
      q: "Sollte ich das Original überschreiben oder eine Kopie speichern?",
      a: "Speichere eine Kopie unter neuem Namen. So bleiben eine saubere leere Vorlage und deine ausgefüllte Version getrennt, und du verlierst nie die wiederverwendbare Vorlage oder verschickst aus Versehen ein leeres Formular.",
    },
    {
      q: "Ist das dasselbe wie ein schreibgeschütztes Formular?",
      a: "Nein. Ein Speicherproblem bedeutet, dass dein Programm Feldwerte nicht speichert. Ein schreibgeschütztes Formular blockiert das Bearbeiten aktiv. Kannst du tippen, aber die Antworten bleiben nicht erhalten, ist es ein Speicherproblem, kein Sicherheitsproblem.",
    },
  ],
  related: [
    {
      label: "Ausgefülltes PDF-Formular speichern",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "PDF-Formular funktioniert nicht?", path: "/guides/pdf-form-not-working" },
    {
      label: "Warum ist mein PDF-Formular schreibgeschützt?",
      path: "/guides/why-pdf-form-is-read-only",
    },
    { label: "Wie PDF-Formulare funktionieren", path: "/guides/how-pdf-forms-work" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
