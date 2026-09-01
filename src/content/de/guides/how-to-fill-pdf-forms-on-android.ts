import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-android",
  h1: "PDF-Formulare auf Android ausfüllen (jedes Handy)",
  description:
    "Fülle interaktive und flache PDF-Formulare auf Android aus. Warum die vorinstallierte Anzeige oft nicht tippen lässt, der zuverlässige Weg über eine App, und wie sich Unterschiede zwischen Herstellern auf Formulare auswirken.",
  updated: "2026-06-01",
  intro: [
    "Android hat kein einheitliches eingebautes Werkzeug zum Ausfüllen von PDF-Formularen, und das ist die Wurzel der meisten Verwirrung. Die vorinstallierte PDF-Anzeige auf vielen Handys – oft in Google Drive oder Dateien integriert – zeigt ein Formular zwar an, lässt aber nicht immer in seine Felder tippen. Also denken viele, das Formular sei kaputt, obwohl eigentlich nur eine App fehlt, die Formularfelder richtig behandelt.",
    "Der zuverlässige Weg auf jedem Android-Handy ist eine eigene PDF-App, die interaktive Felder erkennt und dich Text auf nicht interaktiven Formularen platzieren lässt. Weil sich Android-Hardware und -Software zwischen den Herstellern stark unterscheiden, weichen die genauen eingebauten Optionen von Handy zu Handy ab – eine richtige PDF-App verhält sich dagegen überall gleich, und genau das willst du bei Formularen.",
    "Diese Anleitung erklärt, warum die Standardanzeige nicht ausreicht, zeigt den zuverlässigen App-Workflow und die Android-spezifischen Details – das Teilen über das System-Teilen-Menü, Formulare aus Gmail und Drive herausholen –, die das Ausfüllen von Formularen schnell machen.",
  ],
  steps: [
    {
      title: "Hol das Formular aus der Standardanzeige heraus",
      body: "Lässt dich ein Formular, das du aus Gmail oder Drive geöffnet hast, nicht tippen, ignoriert diese Anzeige die Felder. Lade die Datei stattdessen herunter und öffne sie in einer eigenen PDF-App – dort werden die Felder aktiv.",
    },
    {
      title: "Öffne es in der App PDF Editor",
      body: "Füge das PDF aus Dateien, Drive oder dem Teilen-Menü hinzu. Die App prüft auf interaktive Felder und macht sie antippbar, sodass du tippen, Kontrollkästchen ankreuzen und Dropdown-Menüs nutzen kannst.",
    },
    {
      title: "Nicht interaktive Formulare durch Hinzufügen von Text ausfüllen",
      body: "Hat das Formular keine Felder, nutze das Textwerkzeug, um Antworten direkt auf jede Zeile zu setzen. Zoome vorher hinein, damit der Text präzise landet – Android-Tastaturen und kleine Felder brauchen etwas Sorgfalt.",
    },
    {
      title: "Häkchen, Datumsangaben und eine Unterschrift hinzufügen",
      body: "Kreuze interaktive Kästchen an oder platziere ein Häkchen auf nicht interaktiven, trage Datumsangaben im angezeigten Format ein und ergänze deine Unterschrift mit dem Unterschreiben-Werkzeug im Unterschriftsfeld.",
    },
    {
      title: "Exportieren und zurückschicken",
      body: "Speichere eine fertige Kopie und verschicke sie über das Android-Teilen-Menü – Gmail, Drive, WhatsApp, was du willst. Bette sie vorher ein, wenn die Antworten fest sitzen sollen und sich nicht löschen lassen dürfen.",
    },
  ],
  tips: [
    "Kannst du auf Android nicht in ein Formular tippen, ist meist die Standardanzeige schuld – öffne die Datei in einer richtigen PDF-App.",
    "Weil Android-Hersteller unterschiedliche Software ausliefern, verlass dich nicht darauf, dass ein eingebautes Ausfüll-Werkzeug vorhanden ist – eine eigene App ist die verlässlichere Wahl.",
    "Zoome bei nicht interaktiven Formularen hinein, bevor du Text platzierst, damit kleine Felder eine passend große Antwort bekommen.",
    "Bewahre das leere Formular in einem bekannten Ordner auf, damit du eine saubere Kopie neu ausfüllen kannst, statt eine alte zu überschreiben.",
    "Das Verhalten von Formularen unterscheidet sich je nach App und Gerät, ein eingebetteter Export ist also der sicherste Weg, damit die Antworten bei der Empfängerin oder dem Empfänger auch wirklich angezeigt werden.",
  ],
  mobileNote:
    "Die App PDF Editor für Android erkennt interaktive Felder und lässt dich Text auf nicht interaktiven Formularen platzieren, danach unterschreibst und exportierst du – unabhängig von der Handymarke funktioniert das immer gleich. Alles läuft auf dem Gerät, die Angaben im Formular werden also nicht hochgeladen.",
  faq: [
    {
      q: "Warum kann ich auf Android nicht in ein PDF-Formular tippen?",
      a: "Die Standardanzeige – oft die von Google Drive oder der Dateien-Vorschau deines Handys – ignoriert häufig Formularfelder. Lade das Formular herunter und öffne es in einer eigenen PDF-App, dann werden die Felder beschreibbar. Bei nicht interaktiven Formularen musst du Text darüberlegen.",
    },
    {
      q: "Hat Android ein eingebautes Werkzeug zum Ausfüllen von PDF-Formularen?",
      a: "Kein einheitliches. Was verfügbar ist, hängt von Marke und Software deines Handys ab. Für zuverlässige Ergebnisse auf jedem Android-Gerät nutze eine eigene PDF-App.",
    },
    {
      q: "Wie fülle ich ein gescanntes Formular auf Android aus?",
      a: "Ein gescanntes Formular ist nicht interaktiv, füge also mit einem PDF-Editor eigenen Text und Häkchen auf der Seite hinzu und exportiere anschließend. Es gibt keine Felder zum Antippen.",
    },
    {
      q: "Ist das Ausfüllen eines PDF-Formulars auf Android privat?",
      a: "Mit der App PDF Editor läuft das Ausfüllen auf dem Gerät, deine Angaben werden also nirgendwohin gesendet. Browser-Tools, die die Datei hochladen, verarbeiten sie stattdessen auf einem Server.",
    },
    {
      q: "Wie schicke ich das ausgefüllte Formular zurück?",
      a: "Exportiere eine fertige Kopie und nutze das Android-Teilen-Menü, um sie per E-Mail, Drive oder einer Messaging-App zu senden. Bette sie vorher ein, um die Antworten fest zu verankern.",
    },
  ],
  related: [
    {
      label: "PDF-Formular ausfüllen",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "PDF-Formulare auf iPhone ausfüllen",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "PDF auf Android unterschreiben",
      path: "/guides/how-to-sign-pdf-on-android",
    },
    {
      label: "Beste PDF-Formular-App für Android",
      path: "/guides/best-pdf-form-app-for-android",
    },
    { label: "Der mobile Workflow für PDF-Formulare", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
