import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdfs-on-phone",
  h1: "PDFs am Handy verwalten",
  description:
    "Verhindere, dass die PDFs auf deinem Handy zum Chaos werden: umbenennen, in Ordner sortieren, mit der Cloud synchronisieren und Speicher freigeben. Eine praktische Wartungsroutine.",
  updated: "2026-05-23",
  intro: [
    "Auf dem Handy sammeln sich PDFs schneller an als überall sonst. E-Mail-Anhänge, Scans, Downloads, konvertierte Fotos — sie stapeln sich in Downloads oder der Dateien-App mit Namen wie „Dokument(3).pdf“, bis du die eine Datei, die du brauchst, im entscheidenden Moment nicht mehr findest. Sie zu verwalten ist nicht spektakulär, aber zehn Minuten Routine ersparen dir später eine Stunde verzweifelter Suche.",
    "Diese Anleitung ist eine praktische Wartungsroutine für die PDFs auf deinem iPhone oder Android-Handy: sie so benennen, dass du sie findest, sie in sinnvolle Ordner sortieren, die wichtigen synchronisieren und die Speicherfresser aussortieren. Sie stützt sich auf die Dateien-App deines Handys plus die PDF-Editor-App für die eigentliche Dokumentarbeit.",
    "Das Ziel ist ein Handy, auf dem du jedes Dokument in Sekunden findest und auf dem der Speicher nicht heimlich in vergessenen 40-MB-Scans verschwindet.",
  ],
  steps: [
    {
      title: "Benenne Dateien um, sobald sie ankommen",
      body: "Sobald du ein PDF speicherst, gib ihm einen echten Namen — „Mietvertrag-unterschrieben-2026-05.pdf“, nicht „scan_0007.pdf“. Ein aussagekräftiger Name ist es, der eine Datei Wochen später wieder auffindbar macht.",
    },
    {
      title: "Richte ein paar sinnvolle Ordner ein",
      body: "Leg in der Dateien-App Ordner an, die zu deiner Denkweise passen — Quittungen, Verträge, Formulare, Arbeit. Eine Handvoll klarer Ordner ist besser als ein einziger riesiger Haufen.",
    },
    {
      title: "Synchronisiere die wichtigen mit der Cloud",
      body: "Verschiebe Dokumente, die du dir nicht leisten kannst zu verlieren, in iCloud Drive, Google Drive oder OneDrive, damit sie ein verlorenes oder ersetztes Handy überstehen — und sich auf deinen anderen Geräten öffnen lassen.",
    },
    {
      title: "Bring die Dokumente selbst in Ordnung",
      body: "Nutze die PDF-Editor-App, um zusammengehörige Dateien zusammenzuführen, leere Seiten zu entfernen und schräg gescannte Seiten zu korrigieren, damit jedes gespeicherte Dokument sauber ist statt ein roher Datenhaufen.",
    },
    {
      title: "Komprimiere die Speicherfresser",
      body: "Große Scans fressen Speicherplatz. Komprimiere die, die du behältst, aber nicht in voller Auflösung brauchst, und dein Speicher hört auf, sich mysteriös zu füllen.",
    },
    {
      title: "Räume aus, was du nicht mehr brauchst",
      body: "Lösche Duplikate und Einmal-Dateien, die du schon verschickt hast. Leere den Ordner „Kürzlich gelöscht“ regelmäßig, damit der freigegebene Speicher auch tatsächlich zurückkommt.",
    },
  ],
  tips: [
    "Benenne bei Ankunft um, nicht „später“. Später kommt nie, und das Ergebnis ist ein Ordner voller „Dokument(n).pdf“.",
    "Wähle ein einziges Namensschema — „Typ-Wer-Datum“ funktioniert gut — und deine Dateien sortieren und durchsuchen sich fast von selbst.",
    "Synchronisiere alles, dessen Verlust dich ärgern würde. Ein Handy geht viel leichter verloren als ein Cloud-Konto, und synchronisierte Dateien öffnen sich auch auf deinem Laptop.",
    "Behaltene, aber selten geöffnete Scans zu komprimieren gibt mehr Speicher frei, als kleine Dateien zu löschen es je könnte.",
    "Ein kurzes monatliches Aufräumen schlägt eine jährliche Ausgrabung. Zehn Minuten regelmäßig verhindern, dass der Stapel zum Projekt wird.",
  ],
  mobileNote:
    "Die PDF-Editor-App ist die dokumentseitige Hälfte der PDF-Verwaltung am Handy: zusammenführen, zuschneiden, drehen, komprimieren und umbenennen an einem Ort, offline, bevor du alles ablegst. Kombiniert mit der Dateien-App für Ordner und Cloud-Synchronisierung bleibt der Stapel unter Kontrolle.",
  faq: [
    {
      q: "Wo liegen PDFs auf meinem Handy?",
      a: "Auf dem iPhone in der Dateien-App (oft in Downloads oder iCloud Drive); auf Android meist in Downloads über die Dateien-App. Ordner anzulegen hält sie in beiden Fällen organisiert.",
    },
    {
      q: "Wie sollte ich meine PDF-Dateien benennen?",
      a: "Nutze ein einheitliches, aussagekräftiges Schema mit Datum, etwa „Typ-Wer-Datum.pdf“. Es gleich bei Ankunft zu tun ist es, was sie später auffindbar hält.",
    },
    {
      q: "Wie verhindere ich, dass PDFs meinen Speicher auffressen?",
      a: "Komprimiere große Scans, die du behältst, lösche Duplikate und bereits verschickte Einmal-Dateien, und leere den Ordner „Kürzlich gelöscht“, damit Speicher tatsächlich freigegeben wird.",
    },
    {
      q: "Sollte ich PDFs in der Cloud oder auf dem Gerät behalten?",
      a: "Behalte wichtige in der Cloud, damit sie ein verlorenes Handy überstehen und sich mit deinen anderen Geräten synchronisieren. Reine Gerätespeicherung eignet sich für flüchtige Dateien, die du bald löschst.",
    },
    {
      q: "Kann ich die Dokumente selbst organisieren, nicht nur die Dateien?",
      a: "Ja. Die PDF-Editor-App führt Dokumente zusammen, schneidet sie zu und korrigiert sie, damit das, was du speicherst, sauber ist — die Anleitung zum Organisieren von PDF-Dateien zeigt den vollständigen Ablauf.",
    },
  ],
  related: [
    { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
    { label: "PDF-Dateien organisieren", path: "/guides/how-to-organize-pdf-files" },
    { label: "PDF auf dem iPhone verkleinern", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "PDF vom Handy aus teilen", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
