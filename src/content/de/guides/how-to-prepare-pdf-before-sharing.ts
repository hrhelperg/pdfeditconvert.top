import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-before-sharing",
  h1: "PDF vor dem Teilen vorbereiten (Checkliste)",
  description:
    "Die Checkliste vor dem Versand für PDFs: verirrte Seiten entfernen, Ausrichtung korrigieren, Größe verkleinern und Entwürfe kennzeichnen. Ein sauberes, passend großes, bewusst fertiges Dokument versenden.",
  updated: "2026-05-23",
  intro: [
    "Die Minute vor dem Absenden ist der günstigste Moment, um ein Problem im PDF noch zu erwischen. Ist die Datei erst einmal im Posteingang von jemand anderem gelandet, wird die leere Seite, der quer eingescannte Anhang, die 40 MB Größe oder die vergessene interne Notiz auch zu dessen Problem — und zu deiner Entschuldigung. Ein kurzer, bewusster Check vor dem Versand verhindert fast all das.",
    "Diese Anleitung ist genau dieser Check: eine praktische Checkliste, die ein paar Minuten dauert und kostenlose Browser-Tools nutzt, die alle auf deinem Gerät laufen, ohne dass etwas hochgeladen wird. Sie richtet sich an Dokumente, die tatsächlich an andere rausgehen — Angebote, Verträge, Bewerbungen, Berichte.",
    "Dabei geht es nicht um Feinschliff um seiner selbst willen. Es geht darum, dass der Empfänger die Datei öffnet und genau das vorfindet, was er erwartet — in einer Größe, die tatsächlich ankommt, ohne unnötigen Anhang.",
  ],
  steps: [
    {
      title: "Bestätige, dass es die richtige, finale Version ist",
      body: "Öffne die Datei und prüfe, ob es sich um den neuesten, vollständig bearbeiteten Stand handelt. Ein PDF ist eine Momentaufnahme — einen Tippfehler nach dem Versand zu korrigieren bedeutet, noch einmal zu verschicken.",
    },
    {
      title: "Entferne alles, was nicht raus soll",
      body: "Wirf leere Seiten, Deckblätter, interne Notizen und für andere bestimmte Seiten raus, indem du mit dem Werkzeug Seiten aus PDF extrahieren nur das Nötige behältst.",
    },
    {
      title: "Korrigiere Ausrichtung und Reihenfolge",
      body: "Setze das Werkzeug PDF drehen bei quer liegenden Seiten ein und das Werkzeug Seiten in PDF neu anordnen bei allem, was durcheinandergeraten ist, damit sich das Dokument von vorn bis hinten sauber lesen lässt.",
    },
    {
      title: "Bring die Größe unter das Limit",
      body: "Ist die Datei zu schwer — meist wegen Scans oder Fotos —, schick sie durch das Werkzeug PDF komprimieren, damit sie unter die üblichen 10 bis 25 MB Limits von E-Mail-Postfächern und Portalen passt.",
    },
    {
      title: "Kennzeichne den Status, falls es kein Endstand ist",
      body: "Teilst du einen Entwurf zur Durchsicht, füge mit dem Werkzeug Wasserzeichen zu PDF hinzufügen ein ENTWURF-Wasserzeichen ein, damit niemand ihn mit der unterschriebenen Fassung verwechselt.",
    },
    {
      title: "Benenne es eindeutig und verschicke es",
      body: "Gib der Datei einen aussagekräftigen, datierten Namen, damit sie im Posteingang des Empfängers sofort erkennbar und später leicht wiederzufinden ist, und hänge sie dann an oder lade sie hoch.",
    },
  ],
  tips: [
    "Der häufigste Fehler vor dem Versand ist eine Seite, die eigentlich nicht dabei sein sollte — eine leere, eine doppelte oder eine mit Angaben für jemand anderen. Geh das Dokument Seite für Seite durch.",
    "Pass die Größe an den Übertragungsweg an: E-Mail-Postfächer deckeln meist bei rund 25 MB, viele Upload-Portale deutlich niedriger. Bei scanlastigen Dateien hilft in der Regel die Komprimierung.",
    "Ein ENTWURF- oder VERTRAULICH-Wasserzeichen setzt die richtigen Erwartungen und verhindert, dass eine Arbeitsversion für die finale Fassung gehalten wird — eine günstige Absicherung für alles, was noch nicht unterschrieben ist.",
    "Ein klarer Dateiname gehört zur Vorbereitung dazu. Er ist das Erste, was der Empfänger sieht, und das, wonach du später suchst.",
    "Bei wirklich sensiblen Inhalten solltest du zusätzlich ein Passwort in Betracht ziehen — Vorbereitung heißt nicht nur Ordnung, sondern auch, nicht mehr preiszugeben als nötig.",
  ],
  mobileNote:
    "Genau beim Versand direkt vom Handy zahlt sich ein kurzer Check vorher aus. Mit der App PDF Editor kannst du Seiten kürzen, drehen, komprimieren, mit Wasserzeichen versehen und umbenennen — alles an einem Ort, bevor es rausgeht, offline und ohne dass etwas hochgeladen wird.",
  faq: [
    {
      q: "Was sollte ich vor dem Versand eines PDFs prüfen?",
      a: "Ob es die finale Version ist, frei von überflüssigen oder sensiblen Seiten, richtig ausgerichtet und sortiert, klein genug für den Übertragungsweg, bei Bedarf als Entwurf gekennzeichnet und eindeutig benannt. Ein zweiminütiger Check deckt das alles ab.",
    },
    {
      q: "Wie stelle ich sicher, dass ich nicht die falschen Seiten teile?",
      a: "Behalte mit dem Werkzeug Seiten aus PDF extrahieren nur die dazugehörigen Seiten und prüfe das Ergebnis Seite für Seite. Interne Notizen oder die Daten anderer Empfänger verstecken sich oft auf Seiten, die gar nicht mitverschickt werden müssen.",
    },
    {
      q: "Warum ist die Dateigröße so wichtig?",
      a: "E-Mail-Dienste weisen Anhänge über etwa 25 MB zurück, und viele Upload-Portale setzen die Grenze deutlich niedriger. Ein scanlastiges PDF überschreitet das leicht — Komprimieren verhindert, dass die Mail abgelehnt oder der Upload verweigert wird.",
    },
    {
      q: "Sind diese Vorbereitungswerkzeuge privat?",
      a: "Ja. Die Werkzeuge zum Extrahieren, Drehen, Neuanordnen, Komprimieren und für Wasserzeichen laufen alle im Browser auf deinem Gerät — es wird nichts hochgeladen.",
    },
    {
      q: "Sollte jedes geteilte PDF passwortgeschützt sein?",
      a: "Nein — nur wirklich sensible. Ein Passwort erschwert dem Empfänger den Zugriff, also hebe es dir für Dokumente auf, deren Inhalt tatsächlich geschützt werden muss.",
    },
  ],
  related: [
    { label: "PDF komprimieren — kleiner für E-Mails", path: "/compress-pdf" },
    { label: "Wasserzeichen zu PDF hinzufügen — Entwürfe kennzeichnen", path: "/add-watermark-to-pdf" },
    { label: "Wie du die Dateigröße eines PDFs für E-Mails verringerst", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Wie du ein PDF vom Handy aus teilst", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
};

export default content;
