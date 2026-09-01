import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-use-pdf-forms-for-contracts",
  h1: "PDF-Formulare für Verträge nutzen (Felder und Unterschrift)",
  description:
    "Verwandle einen Vertrag in ein ausfüllbares PDF: Felder für Namen, Daten und Kürzel, ein Unterschriftsfeld und ein Einbetten-Schritt, damit sich die unterschriebene Version nicht mehr verändern lässt. Inklusive der ehrlichen Grenzen.",
  updated: "2026-06-01",
  intro: [
    "Viele Verträge wiederholen dasselbe Grundgerüst und ändern nur wenige Details – Namen der Parteien, Daten, Beträge, eine Unterschrift. Baust du diese variablen Teile als Formularfelder, wird aus einem statischen Vertrag ein ausfüllbares PDF, das die andere Partei ausfüllen und unterschreiben kann, ohne irgendetwas neu abzutippen – schneller und sauberer, als eine Word-Datei hin und her zu mailen.",
    "Es geht hier konkret um die Formular-Mechanik von Verträgen: wo Felder helfen, wie du Kürzel und Unterschriftsfelder handhabst, und den entscheidenden Einbetten-Schritt, der eine unterschriebene Vereinbarung so sperrt, dass sie sich nicht mehr unbemerkt ändern lässt. Es ist die Formularfeld-Perspektive, getrennt von der breiteren Aufgabe, Verträge zu versenden und zuzustellen.",
    "Ein ehrlicher Hinweis zieht sich durch die ganze Anleitung: Sie behandelt die Dokument-Mechanik, nicht die rechtliche Gültigkeit. Ob ein bestimmter Vertrag oder eine Unterschriftsmethode rechtlich ausreicht, hängt von deiner Rechtsordnung und der Vereinbarung ab – das ist eine Frage für die Parteien oder ihre Berater, nicht für ein PDF-Werkzeug.",
  ],
  steps: [
    {
      title: "Identifiziere die variablen Teile",
      body: "Markiere die Angaben, die sich jedes Mal ändern – Namen, Adressen, Daten, Beträge, Laufzeiten. Daraus werden deine Formularfelder; die festen Klauseln bleiben als gesperrter Dokumenttext bestehen.",
    },
    {
      title: "Füge Felder für die auszufüllenden Angaben hinzu",
      body: "Platziere klar beschriftete Felder (oder bei einem flachen Template klare Linien) für jede Variable. Gib Daten und Beträgen genug Platz, und halte das Layout eindeutig, damit nichts übersehen wird.",
    },
    {
      title: "Handhabe Kürzel und Unterschriftsfelder",
      body: "Füge ein Unterschriftsfeld oder eine klare Unterschriftszeile hinzu, dazu Felder für Kürzel, wo Seiten sie brauchen. Die andere Partei unterschreibt mit einer getippten oder handschriftlichen Unterschrift in diesen Bereichen.",
    },
    {
      title: "Bette die unterschriebene Vereinbarung ein",
      body: "Sobald beide Parteien ausgefüllt und unterschrieben haben, bette das PDF ein. Dabei verschmelzen die eingetragenen Angaben und die Unterschrift mit der Seite, sodass sich der finale Vertrag nicht mehr bearbeiten oder seine Felder löschen lassen.",
    },
    {
      title: "Stelle die finale Version zu und archiviere sie",
      body: "Verschicke den eingebetteten, unterschriebenen Vertrag an alle Parteien und behalte deine eigene Kopie. Ein einheitlicher Dateiname und ein einziger Vertragsordner machen die unterschriebene Version leicht auffindbar.",
    },
  ],
  tips: [
    "Sperre die Klauseln und lass nur die variablen Felder ausfüllbar – so lassen sich die Vertragsbedingungen während des Ausfüllens nicht verändern.",
    "Einbetten nach dem Unterschreiben ist der entscheidende Schritt – er friert die unterschriebene Version ein, sodass sich danach nichts mehr verschiebt.",
    "Bewahre eine leere, unausgefüllte Vorlage getrennt von unterschriebenen Kopien auf, damit du das Grundgerüst sauber wiederverwenden kannst.",
    "Behandle das PDF bei rechtlich relevanten Angelegenheiten nur als Mechanik und kläre Anforderungen mit den Parteien oder einer Rechtsberatung.",
    "Anforderungen an Verträge und Unterschriften unterscheiden sich je nach Ort und Situation – geh nicht davon aus, dass ein Ansatz für jede Vereinbarung passt.",
  ],
  mobileNote:
    "Die andere Partei kann dein Vertragsformular auf dem Handy mit der App PDF Editor ausfüllen und unterschreiben – die variablen Felder ergänzen, eine Unterschrift hinzufügen und eine Kopie zurückschicken. Anschließend kannst du die unterschriebene Vereinbarung einbetten und sperren, alles auf dem Gerät, ohne den Vertrag an Dritte hochzuladen.",
  faq: [
    {
      q: "Kann ich einen Vertrag in ein ausfüllbares PDF-Formular verwandeln?",
      a: "Ja. Verwandle die variablen Teile – Namen, Daten, Beträge – in Formularfelder oder klare Linien, lass die Klauseln als gesperrten Text bestehen, und füge ein Unterschriftsfeld hinzu. Die andere Partei füllt aus und unterschreibt, danach bettest du die finale Version ein.",
    },
    {
      q: "Wie verhindere ich, dass der Vertrag nach dem Unterschreiben bearbeitet wird?",
      a: "Bette das unterschriebene PDF ein. Einbetten verschmilzt die ausgefüllten Felder und die Unterschrift mit der Seite, sodass sie zu festem Inhalt werden, der sich nicht mehr verändern oder löschen lässt.",
    },
    {
      q: "Sind PDF-Formularunterschriften auf Verträgen rechtlich gültig?",
      a: "Das hängt von deiner Rechtsordnung und der Vereinbarung ab und lässt sich mit einem PDF-Werkzeug nicht bestimmen. Diese Anleitung behandelt die Dokument-Mechanik; kläre die rechtliche Ausreichung mit den Parteien oder einer Rechtsberatung.",
    },
    {
      q: "Sollten Vertragsfelder interaktiv sein oder reichen Linien?",
      a: "Interaktive Felder wirken ordentlicher und verringern Fehler, aber klare Linien auf einem flachen Template funktionieren überall. Beides ist in Ordnung, solange jede Variable offensichtlichen, gut bemessenen Platz hat.",
    },
    {
      q: "Worin unterscheidet sich das vom Versenden von Verträgen als PDF?",
      a: "Hier geht es darum, den Vertrag als ausfüllbares Formular zu bauen – Felder, Kürzel, Unterschriftsbereiche. Das Versenden von Verträgen als PDF behandelt breiter das Sperren, Zustellen und Gegenzeichnen.",
    },
  ],
  related: [
    {
      label: "Verträge als PDF versenden",
      path: "/guides/how-to-send-contracts-as-pdf",
    },
    {
      label: "Ausfüllbares PDF erstellen",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "Ausgefülltes PDF-Formular speichern",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "PDF auf dem Handy unterschreiben", path: "/sign-pdf" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
