import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "what-is-a-pdf-form",
  h1: "Was ist ein PDF-Formular? Interaktive und flache Formulare erklärt",
  description:
    "Ein PDF-Formular ist ein Dokument, das Antworten sammeln soll – manchmal mit echten Feldern zum Eintippen, manchmal als flache Seite, auf die du schreibst. Was das bedeutet und wie du es erkennst.",
  updated: "2026-06-01",
  intro: [
    "Ein PDF-Formular ist jedes PDF, das Informationen von der Person sammeln soll, die es öffnet – eine Bewerbung, ein Steuerdokument, eine Einverständniserklärung, ein Buchungsbogen. Was ein Formular von einem gewöhnlichen PDF unterscheidet, ist die Absicht dahinter: Es erwartet, dass du Antworten einträgst, statt es nur zu lesen. Verwirrend wird es, weil zwei Formulare auf dem Bildschirm völlig gleich aussehen und sich beim Ausfüllen trotzdem komplett unterschiedlich verhalten können.",
    "Der entscheidende Unterschied ist, ob das Formular interaktive Felder hat. Ein interaktives Formular besitzt Felder, die schon beim Erstellen der Datei angelegt wurden – du tippst hinein, und ein Cursor erscheint, bereit zum Eintippen. Ein nicht interaktives Formular hat das nicht; es ist im Grunde nur ein Bild der Seite, oft ein eingescanntes Papieroriginal, bei dem Linien und Beschriftungen Teil des Bildes sind und keine aktiven Bereiche. Beide Varianten sind Formulare, und beide lassen sich ausfüllen – nur eben auf unterschiedliche Weise.",
    "Zu erkennen, mit welcher Art du es zu tun hast, dauert etwa zwei Sekunden und erspart eine Menge Frust. Diese Anleitung erklärt, was ein PDF-Formular eigentlich ist, welche zwei Typen dir begegnen und wie du sie auseinanderhältst, bevor du mit dem Ausfüllen beginnst.",
  ],
  steps: [
    {
      title: "Erkenne, dass ein Formular zum Ausfüllen gedacht ist",
      body: "Anders als ein Bericht oder ein Vertrag, den du nur liest, hat ein Formular Leerstellen, die auf Antworten warten – Namenszeilen, Kontrollkästchen, Unterschriftsfelder. Genau diese Absicht macht es zu einem Formular, unabhängig davon, wie es erstellt wurde.",
    },
    {
      title: "Ein interaktives Formular erkennen",
      body: "Öffne das PDF und tippe oder klicke dort, wo eine Antwort hingehört. Erscheint ein Textcursor, hebt sich ein Feld hervor, oder lässt sich ein Kontrollkästchen ankreuzen, hat das Formular interaktive Felder, die bewusst so angelegt wurden.",
    },
    {
      title: "Ein nicht interaktives Formular erkennen",
      body: "Passiert beim Antippen einer Leerstelle nichts – kein Cursor, keine Hervorhebung –, ist das Formular nicht interaktiv. Linien und Beschriftungen sind fest im Seitenbild enthalten, es gibt also nichts, in das du direkt hineintippen kannst.",
    },
    {
      title: "Prüfe, wie das Formular entstanden ist",
      body: "Formulare, die aus einer Formular-Design-Software exportiert wurden, sind meist interaktiv. Formulare, die gedruckt, von Hand unterschrieben und anschließend eingescannt wurden, sind fast immer nicht interaktiv. Kennst du die Herkunft, kannst du den Typ meist schon erahnen.",
    },
    {
      title: "Wähle die passende Methode zum Ausfüllen",
      body: "Bei interaktiven Formularen tippst du direkt in die Felder. Bei nicht interaktiven Formularen platzierst du eigene Textfelder und Häkchen auf der Seite. Ein guter PDF-Editor beherrscht beides – in derselben Datei.",
    },
  ],
  tips: [
    "Der schnellste Test ist der Antipp-Test: Tippe auf eine leere Zeile. Erscheint ein Cursor, ist das Formular interaktiv; passiert nichts, ist es nicht interaktiv.",
    "Ein Formular kann auch teilweise interaktiv sein: Manche Felder sind echt, andere fehlen. Fülle die echten Felder aus und ergänze die Lücken manuell mit eigenem Text.",
    "Interaktive Formulare lassen sich sauberer ausfüllen, aber auch nicht interaktive Formulare sind problemlos machbar – du platzierst den Text nur selbst.",
    "Erstellst du selbst ein Formular für andere, baue es wenn möglich interaktiv – das macht das Ausfüllen für die Empfänger deutlich einfacher.",
    "Das Erscheinungsbild eines Formulars kann sich zwischen verschiedenen PDF-Anzeigeprogrammen unterscheiden – ein Feld, das auf deinem Handy so aussieht, kann auf dem Computer einer anderen Person leicht anders dargestellt werden.",
  ],
  mobileNote:
    "Auf dem Handy prüft die App PDF Editor beim Öffnen automatisch, ob ein Formular interaktive Felder hat: Wo es sie gibt, tippst du einfach hinein; wo nicht, platzierst du Text und Häkchen frei auf der Seite. So oder so kannst du unterschreiben und eine ausgefüllte Kopie exportieren, ganz ohne zu drucken.",
  faq: [
    {
      q: "Ist jedes PDF ein Formular?",
      a: "Nein. Ein PDF gilt nur dann als Formular, wenn es Antworten sammeln soll – mit Feldern, Kontrollkästchen oder Unterschriftszeilen. Ein Bericht oder Artikel ist zwar ein PDF, aber kein Formular.",
    },
    {
      q: "Woran erkenne ich, ob mein PDF-Formular interaktiv oder nicht interaktiv ist?",
      a: "Tippe oder klicke auf eine Leerstelle, an der eine Antwort hingehört. Erscheint ein Cursor und du kannst tippen, ist es interaktiv. Passiert nichts, ist es ein nicht interaktives Formular, und du fügst den Text selbst hinzu.",
    },
    {
      q: "Kann ich ein nicht interaktives PDF-Formular ausfüllen?",
      a: "Ja. Ein nicht interaktives Formular hat keine Felder, aber mit einem PDF-Editor kannst du eigenen Text und Häkchen frei auf der Seite platzieren und die ausgefüllte Datei anschließend exportieren.",
    },
    {
      q: "Warum verschickt jemand ein nicht interaktives statt eines interaktiven Formulars?",
      a: "Meist, weil es ursprünglich auf Papier existierte und eingescannt wurde, oder weil das verwendete Programm keine Felder hinzufügt. Das ist kein Fehler, sondern erfordert nur eine leicht andere Methode beim Ausfüllen.",
    },
    {
      q: "Sind interaktive Formulare immer besser?",
      a: "Sie lassen sich leichter ausfüllen und wirken ordentlicher, können aber auch Funktionen nutzen, die manche Anzeigeprogramme nicht unterstützen. Ein gut gemachtes nicht interaktives Formular funktioniert dafür überall zuverlässig, auch wenn das Ausfüllen etwas mehr Aufwand bedeutet.",
    },
  ],
  related: [
    {
      label: "Bearbeitbares PDF oder ausfüllbares PDF",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    { label: "Wie PDF-Formulare funktionieren", path: "/guides/how-pdf-forms-work" },
    {
      label: "PDF-Formular ausfüllen",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Bearbeitbares PDF oder flaches PDF",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
