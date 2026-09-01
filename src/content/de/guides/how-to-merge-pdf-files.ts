import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-merge-pdf-files",
  h1: "PDF-Dateien am Handy oder Computer zusammenführen",
  description:
    "Kombiniere mehrere PDFs zu einem Dokument. Schritt-für-Schritt-Anleitung fürs Handy mit der PDF-Editor-App.",
  updated: "2026-05-11",
  intro: [
    "PDFs zusammenzuführen gehört zu den häufigsten Dokumentaufgaben für Kleinunternehmen und Studierende gleichermaßen. Ob gescannte Belege für die Buchhalterin, Fachartikel, die für eine Deadline gebündelt werden, oder ein Angebot samt Anlagen — eine einzige, aufgeräumte Datei zu verschicken schlägt das Jonglieren mit fünf Anhängen.",
    "Diese Anleitung zeigt, wie du PDFs auf dem Handy mit der App PDF Editor für iPhone oder Android zusammenführst. Der Ablauf ist auf beiden Plattformen gleich: Dateien hinzufügen, in die gewünschte Reihenfolge ziehen und ein zusammengeführtes PDF exportieren. Der gesamte Vorgang dauert meist unter einer Minute.",
    "Bevorzugst du den Desktop, lassen sich dieselben Prinzipien auf die meisten modernen PDF-Tools übertragen. Der Fokus liegt hier auf dem mobilen Ablauf, weil dort die meisten Zusammenführungen im echten Alltag stattfinden — zwischen Meetings, beim Kunden vor Ort oder unterwegs.",
  ],
  steps: [
    {
      title: "Öffne die App PDF Editor",
      body: "Starte die App und tippe auf die Kachel Zusammenführen. Für den Start brauchst du kein Konto.",
    },
    {
      title: "Füge die Dateien hinzu, die du kombinieren willst",
      body: "Tippe auf das Plus-Symbol. Füge jedes PDF aus Dateien, iCloud Drive, Google Drive oder OneDrive hinzu, oder teile es aus einer anderen App heraus. Du kannst die Quellen beliebig mischen.",
    },
    {
      title: "Reihenfolge festlegen",
      body: "Halte ein Element in der Liste gedrückt und ziehe es an die richtige Position. Die Reihenfolge in der Liste entspricht der Reihenfolge in der fertigen Datei. Prüfe die Abfolge noch einmal, bevor du zusammenführst.",
    },
    {
      title: "Quer eingescannte Seiten drehen",
      body: "Wurden einzelne Quelldateien quer eingescannt, tippe neben dem jeweiligen Element auf das Dreh-Symbol, damit das zusammengeführte Dokument richtig herum lesbar ist.",
    },
    {
      title: "(Optional) Deckblatt hinzufügen",
      body: "Tippe auf „Deckblatt hinzufügen“, um eine einfache Titelseite mit Datum und einer kurzen Überschrift einzufügen. Sinnvoll, wenn das zusammengeführte Dokument an eine Kundin geht.",
    },
    {
      title: "Tippe auf Zusammenführen",
      body: "Die App fügt alle Dateien zu einem einzigen PDF zusammen und zeigt dir das Ergebnis zur Kontrolle. Das Zusammenführen geschieht auf dem Gerät, sodass selbst passwortgeschützte Quellen privat bleiben.",
    },
    {
      title: "Zusammengeführte Datei prüfen",
      body: "Scrolle durch das Dokument, um Reihenfolge und Ausrichtung der Seiten zu prüfen. Die Miniaturansicht Seiten hilft dir dabei, das schnell zu kontrollieren.",
    },
    {
      title: "Speichern oder teilen",
      body: "Speichere in Dateien, synchronisiere mit einem Cloud-Speicher oder teile direkt per E-Mail, AirDrop oder einer beliebigen Messaging-App. Wähle einen aussagekräftigen Dateinamen — „Vertrag-mit-Anhang-2026-05.pdf“ wirkt im Posteingang deutlich professioneller als „Dokument(3).pdf“.",
    },
  ],
  tips: [
    "Füge ein Deckblatt hinzu, wenn das zusammengeführte Dokument an externe Empfänger geht — das wirkt bewusst gestaltet statt improvisiert.",
    "Drehe quer gescannte Seiten vor dem Zusammenführen, nicht danach — die Ausrichtung im Nachhinein zu korrigieren bedeutet, die ganze Datei neu zu exportieren.",
    "Soll das zusammengeführte PDF per E-Mail verschickt werden, nutze anschließend das Werkzeug Komprimieren, damit die Datei unter das übliche 25-MB-Limit für Anhänge passt.",
    "Markiere Abschnitte in der zusammengeführten Datei über die Ansicht Seiten, damit die Empfängerin bei einem längeren Dokument direkt zum relevanten Teil springen kann.",
    "Behalte die ursprünglichen Quelldateien, bis du geprüft hast, dass das Ergebnis stimmt — lösche die Originale niemals direkt in derselben Sitzung.",
  ],
  mobileNote:
    "Das mobile Zusammenführen zahlt sich besonders aus, wenn Scans und digitale PDFs kombiniert werden müssen — die App verarbeitet beides in derselben Liste, und du kannst direkt vor Ort einen neuen Scan aufnehmen und hinzufügen. Am Desktop ist das umständlich, auf dem Handy ein einziges Antippen.",
  faq: [
    {
      q: "Gibt es eine Höchstzahl an Dateien, die ich zusammenführen kann?",
      a: "Es gibt kein festes Limit. Sehr große Stapel (50+ Dateien) dauern auf älteren Handys länger, aber die App kommt mit realistischen Zusammenführungen problemlos zurecht. Bei Leistungsproblemen teilst du den Vorgang einfach in zwei Durchgänge auf und führst die Ergebnisse anschließend zusammen.",
    },
    {
      q: "Kann ich ein Word-Dokument mit einem PDF zusammenführen?",
      a: "Ja, indirekt. Wandle das Word-Dokument zuerst über die Kachel Konvertieren in ein PDF um und füge das Ergebnis dann zusammen mit deinen anderen PDFs zur Liste hinzu.",
    },
    {
      q: "Was passiert bei passwortgeschützten Quelldateien?",
      a: "Gib das Passwort ein, wenn du dazu aufgefordert wirst. Die App entschlüsselt die Datei lokal; das zusammengeführte Ergebnis kann ungeschützt bleiben oder mit einem Passwort deiner Wahl erneut geschützt werden.",
    },
    {
      q: "Ändert sich die ursprüngliche Formatierung beim Zusammenführen?",
      a: "Nein. Jede Quellseite bleibt exakt erhalten. Es ändert sich nur die Reihenfolge, und die Seiten werden in ein gemeinsames PDF eingebettet.",
    },
    {
      q: "Kann ich ein Zusammenführen rückgängig machen?",
      a: "Ja. Mit der Funktion PDF teilen zerlegst du jedes PDF — ob zusammengeführt oder original — wieder in einzelne Seiten oder Seitenbereiche. Die Originale werden beim Zusammenführen ohnehin nie verändert.",
    },
  ],
  related: [
    {
      label: "PDF zusammenführen — kostenlos, direkt im Browser",
      path: "/merge-pdf",
    },
    {
      label: "PDF teilen — Seiten extrahieren im Browser",
      path: "/split-pdf",
    },
    { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
    {
      label: "PDF nach dem Zusammenführen komprimieren",
      path: "/guides/how-to-compress-pdf",
    },
  ],
  parentHub: { label: "PDF zusammenführen", path: "/merge-pdf" },
};

export default content;
