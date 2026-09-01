import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-file-size-for-email",
  h1: "PDF-Dateigröße für E-Mail reduzieren",
  description:
    "Bring ein PDF unter die Anhanggrenzen von Gmail und Outlook. Die echten Obergrenzen, warum Scans sie sprengen, und wie du eine Datei so verkleinerst, dass sie versendet werden kann.",
  updated: "2026-05-23",
  intro: [
    "Die Anhanggrenzen bei E-Mails haben sich seit Jahren kaum verändert, die Dokumente, die wir verschicken, werden aber immer größer. Bei Gmail ist bei 25 MB Schluss, Outlook zieht die Grenze bei etwa 20 MB. Der Mailserver der Empfängerin oder des Empfängers setzt womöglich noch niedriger an. Also hängst du einen gescannten Vertrag oder einen Bericht voller Fotos an, klickst auf Senden – und die Mail kommt zurück, oder schlimmer: Sie verschwindet einfach kommentarlos.",
    "In dieser Anleitung geht es darum, ein PDF so klein zu bekommen, dass es tatsächlich verschickt werden kann. Wir nutzen dafür das kostenlose Tool PDF komprimieren, das direkt in deinem Browser läuft, ohne dass etwas hochgeladen wird, und behandeln die praktischen Entscheidungen: welche Komprimierungsstufe, wann Komprimieren statt Teilen die bessere Wahl ist, und was du tust, wenn selbst Komprimieren nicht reicht.",
    "Die gute Nachricht: Ausgerechnet die Dateien, die am ehesten abprallen – Scans und bildlastige PDFs – lassen sich am stärksten komprimieren.",
  ],
  steps: [
    {
      title: "Prüfe, wie weit du über dem Limit liegst",
      body: "Notiere dir die Dateigröße und dein Ziel. Gmail deckelt bei 25 MB, Outlook bei etwa 20 MB, manche Firmenserver setzen die Grenze noch niedriger an. Wenn du den Abstand kennst, weißt du, wie stark du komprimieren musst.",
    },
    {
      title: "Öffne das Tool PDF komprimieren",
      body: "Öffne das Tool PDF komprimieren in deinem Browser. Es verarbeitet die Datei direkt auf deinem Gerät – nichts wird hochgeladen, was gerade bei Dokumenten wichtig ist, die du per E-Mail verschickst.",
    },
    {
      title: "Füge das PDF hinzu und wähle eine Stufe",
      body: "Beginne mit Empfohlen. Diese Stufe balanciert Größe und Qualität und reicht für die meisten Dateien. Wechsle nur zu Stark, wenn du danach immer noch über dem Limit liegst.",
    },
    {
      title: "Komprimiere und sieh dir die neue Größe an",
      body: "Starte den Vorgang und vergleiche die Größe vorher und nachher. Gescannte Dokumente landen oft schon nach einem Durchgang deutlich unter 25 MB.",
    },
    {
      title: "Ist die Datei immer noch zu groß, teile sie",
      body: "Wird ein einzelnes Dokument nicht klein genug, nutze das Tool PDF teilen, um es als zwei oder drei kleinere Dateien zu verschicken – oft praktischer, als die Qualität noch weiter zu opfern.",
    },
    {
      title: "Anhängen und senden",
      body: "Hänge die komprimierte (oder geteilte) Datei an. Öffne sie vorher einmal, um sicherzugehen, dass sie bei der gewählten Stufe noch sauber lesbar ist.",
    },
  ],
  tips: [
    "Die Stufe Empfohlen unterschreitet die meisten E-Mail-Limits, ohne merklich an Qualität zu verlieren. Hebe dir Stark für Dateien auf, die nach dem ersten Durchgang immer noch zu groß sind.",
    "Scans und fotolastige PDFs schrumpfen am stärksten; ein reines Textdokument ist ohnehin schon klein – ist es trotzdem riesig, liegt die Ursache meist an eingebetteten Bildern oder Schriftarten.",
    "Reicht Komprimieren allein nicht aus, ist Teilen die bessere Wahl, statt das Dokument bis zur Unleserlichkeit zu verschlechtern – zwei gut lesbare Hälften sind besser als ein grobkörniges Ganzes.",
    "Die Komprimierung rastert die Seiten, die versendete Kopie hat also keinen markierbaren Text mehr. Braucht die Empfängerin oder der Empfänger den Text zum Kopieren, schick das Original auf einem anderen Weg und die komprimierte Version nur als Vorschau per E-Mail.",
    "Ist selbst eine komprimierte Datei noch zu groß, ist ein geteilter Cloud-Link die ehrlichste Lösung – mehr dazu in der Anleitung zum Versenden großer PDF-Dateien.",
  ],
  mobileNote:
    "Die meisten zurückgewiesenen Anhänge passieren, wenn du nebenbei am Handy schnell ein Dokument verschicken willst. Die PDF-Editor-App komprimiert offline und teilt das Ergebnis direkt in deine Mail-App, sodass aus einem zu großen Scan ohne Umweg über dein Postfach eine versandfertige Datei wird.",
  faq: [
    {
      q: "Wie groß darf ein E-Mail-Anhang tatsächlich sein?",
      a: "Gmail deckelt bei 25 MB, Outlook bei etwa 20 MB, und manche Firmenserver setzen die Grenze noch niedriger an. Ziel ist, deutlich unter dem Limit der Empfängerin oder des Empfängers zu bleiben, nicht nur unter deinem eigenen.",
    },
    {
      q: "Warum ist mein PDF überhaupt zu groß für den E-Mail-Versand?",
      a: "Fast immer wegen gescannter Seiten oder eingebetteter Fotos. Jede gescannte Seite ist im Grunde ein hochauflösendes Bild, und schon eine Handvoll davon sprengt schnell die 25-MB-Grenze.",
    },
    {
      q: "Welche Komprimierungsstufe eignet sich für E-Mails?",
      a: "Starte mit Empfohlen – diese Stufe unterschreitet die meisten Limits und hält das Dokument gut lesbar. Wechsle nur zu Stark, wenn du danach immer noch drüber liegst.",
    },
    {
      q: "Wird meine Datei beim Komprimieren hochgeladen?",
      a: "Nein. Das Tool PDF komprimieren läuft in deinem Browser auf deinem Gerät, das Dokument bleibt also privat, selbst während du es zum Versenden vorbereitest.",
    },
    {
      q: "Was, wenn Komprimieren allein nicht reicht?",
      a: "Teile das PDF in kleinere Dateien auf, oder teile stattdessen einen Cloud-Link statt eines Anhangs. Beides ist besser, als ein Dokument bis zur Unleserlichkeit zu komprimieren.",
    },
  ],
  related: [
    {
      label: "PDF komprimieren – kleiner für den E-Mail-Versand",
      path: "/compress-pdf",
    },
    {
      label: "Große PDF-Dateien versenden",
      path: "/guides/how-to-send-large-pdf-files",
    },
    {
      label: "PDF online komprimieren, ohne es hochzuladen",
      path: "/guides/how-to-compress-pdf-online",
    },
    {
      label: "PDF in einzelne Dateien teilen",
      path: "/guides/how-to-split-pdf-files",
    },
  ],
  parentHub: { label: "PDF komprimieren", path: "/compress-pdf" },
};

export default content;
