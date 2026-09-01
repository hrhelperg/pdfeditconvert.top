import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-iphone",
  h1: "PDF auf dem iPhone verkleinern",
  description:
    "Verkleinere ein PDF auf deinem iPhone mit einem Browser-Tool oder der PDF-Editor-App. Warum iPhone-Scans so riesig werden und wie du sie unter die Versandgrenzen bringst.",
  updated: "2026-05-23",
  intro: [
    "iPhones erzeugen wunderschöne, aber riesige Dateien. Dieselbe hochauflösende Kamera und Scan-Funktion, die deine Dokumente scharf aussehen lässt, macht die PDFs auch schwer – schon ein paar gescannte Seiten können ein E-Mail-Limit sprengen, bevor überhaupt etwas anderes dazukommt. „Mach dieses PDF auf meinem iPhone kleiner“ ist deshalb ein sehr häufiges, sehr konkretes Anliegen.",
    "Diese Anleitung zeigt dir zwei zuverlässige Wege, die beide auf dem iPhone funktionieren. Der erste ist das kostenlose Tool PDF komprimieren in Safari, das direkt auf deinem Gerät läuft, ohne dass etwas hochgeladen wird. Der zweite ist die PDF-Editor-App, die offline komprimiert und auch passwortgeschützte Dateien verarbeitet, an denen der Browser scheitert.",
    "So oder so bleibt das Ziel gleich: eine Datei, die klein genug für E-Mail oder Upload ist und trotzdem sauber lesbar bleibt – ohne dass dein Dokument dafür auf den Server von irgendjemand anderem wandert.",
  ],
  steps: [
    {
      title: "Finde das PDF in Dateien",
      body: "Suche das Dokument in der App Dateien oder wo auch immer es liegt – ein selbst gemachter Scan, ein gespeicherter Anhang oder ein umgewandeltes Fotopaket.",
    },
    {
      title: "Öffne das Tool PDF komprimieren in Safari",
      body: "Rufe das Tool PDF komprimieren auf. Es läuft im Browser auf deinem iPhone und verarbeitet die Datei direkt auf dem Gerät – nichts wird hochgeladen.",
    },
    {
      title: "Füge das PDF hinzu und wähle eine Stufe",
      body: "Tippe, um die Datei auszuwählen, und wähle dann eine Stufe. Empfohlen passt für die meisten Fälle; wähle Stark nur, wenn die Datei noch kleiner werden muss.",
    },
    {
      title: "Komprimiere und prüfe die Größe",
      body: "Starte den Vorgang und vergleiche die Größe vorher und nachher. iPhone-Scans werden meist schon in einem Durchgang deutlich kleiner, weil sie bildlastig sind.",
    },
    {
      title: "Speichere es zurück in Dateien oder teile es",
      body: "Nutze das Teilen-Symbol, um das kleinere PDF in Dateien zu speichern oder direkt weiterzuschicken. Behalte das Original, bis du geprüft hast, dass das Ergebnis gut lesbar ist.",
    },
    {
      title: "Für geschützte Dateien nutze die App",
      body: "Der Browser kann passwortgeschützte PDFs nicht komprimieren. Die PDF-Editor-App verarbeitet sie offline und ist schneller, wenn du häufig Dateien komprimierst.",
    },
  ],
  tips: [
    "iPhone-Scans sind groß, weil sie aus hochauflösenden Bildern bestehen. Genau deshalb lassen sie sich auch so gut komprimieren – die größte Ersparnis gibt es ausgerechnet bei diesen Dateien.",
    "Fotografierst du Dokumente im Format „Größte Kompatibilität“ (Einstellungen → Kamera → Formate), entstehen JPGs, die sich leichter komprimieren und teilen lassen als HEIC.",
    "Die Komprimierung rastert die Seiten, die kleinere Kopie hat also keinen markierbaren Text mehr. Behalte das Original, wenn du darin suchen oder daraus kopieren musst.",
    "Der Arbeitsspeicher, den der Browser auf dem Handy nutzen kann, ist begrenzter als auf einem Laptop. Bei sehr großen PDFs ist die PDF-Editor-App der zuverlässigere Weg.",
    "Speichere die komprimierte Datei immer unter einem neuen Namen, damit dein scharfes Original auf dem Gerät erhalten bleibt.",
  ],
  mobileNote:
    "Das ist eine Aufgabe, die zuerst am Handy passiert, und genau dafür ist die PDF-Editor-App gebaut: offline komprimieren, kein Hochladen, Unterstützung für geschützte Dateien und die direkte Übergabe an Mail, Nachrichten oder das Teilen-Menü. Für Dokumente, die du regelmäßig verkleinerst, geht das jedes Mal schneller als über den Browser.",
  faq: [
    {
      q: "Warum sind meine iPhone-PDFs so groß?",
      a: "iPhone-Scans und -Fotos sind hochauflösende Bilder, und ein PDF aus mehreren davon ist im Grunde ein Stapel großer Bilder. Deshalb sprengen sie E-Mail-Limits – und deshalb lassen sie sich auch so wirksam komprimieren.",
    },
    {
      q: "Kann ich ein PDF auf dem iPhone ohne App komprimieren?",
      a: "Ja. Das Tool PDF komprimieren läuft in Safari und verarbeitet die Datei auf deinem Gerät, du kannst ein PDF also verkleinern, ohne irgendetwas zu installieren.",
    },
    {
      q: "Wird mein Dokument hochgeladen, wenn ich das Browser-Tool nutze?",
      a: "Nein. Es wird lokal auf deinem iPhone verarbeitet. Nichts wird an einen Server geschickt, was besonders bei persönlichen oder finanziellen Dokumenten zählt.",
    },
    {
      q: "Bleibt der Text danach noch markierbar?",
      a: "Nein. Die Komprimierung wandelt die Seiten in Bilder um und entfernt dabei die markierbare Textebene. Behalte das Original, wenn du durchsuchbaren Text brauchst.",
    },
    {
      q: "Was ist mit passwortgeschützten PDFs?",
      a: "Die kann der Browser nicht verarbeiten. Nutze die PDF-Editor-App, die geschützte Dateien offline öffnet und komprimiert.",
    },
  ],
  related: [
    { label: "PDF komprimieren – direkt im Browser", path: "/compress-pdf" },
    {
      label: "PDF auf Android verkleinern",
      path: "/guides/how-to-make-pdf-smaller-on-android",
    },
    {
      label: "PDF-Dateigröße für E-Mail reduzieren",
      path: "/guides/how-to-reduce-pdf-file-size-for-email",
    },
    {
      label: "PDF auf dem iPhone bearbeiten",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
  ],
  parentHub: { label: "PDF komprimieren", path: "/compress-pdf" },
};

export default content;
