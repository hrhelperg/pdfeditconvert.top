import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-android",
  h1: "PDF auf Android verkleinern",
  description:
    "Komprimiere ein PDF auf jedem Android-Handy mit einem Browser-Tool ohne Installation oder mit der PDF-Editor-App. Bring Scans unter die Grenzen für E-Mail und Upload.",
  updated: "2026-05-23",
  intro: [
    "Android geht je nach Hersteller unterschiedlich mit PDFs um – Samsung, Pixel und Xiaomi verstecken die relevanten Einstellungen jeweils an anderer Stelle –, aber das Grundbedürfnis ist überall gleich: Ein gescanntes oder bildlastiges PDF ist zu groß für E-Mail oder Upload, und es soll kleiner werden. Die verlässlichste Lösung hängt dabei überhaupt nicht von der Handymarke ab.",
    "Diese Anleitung nutzt das kostenlose Tool PDF komprimieren, das im Browser auf jedem Android-Gerät läuft und die Datei lokal verarbeitet – nichts wird hochgeladen. Außerdem zeigen wir dir die PDF-Editor-App für die Offline-Nutzung und für passwortgeschützte Dateien, an denen der Browser scheitert.",
    "Weil der Weg über den Browser auf jedem Android-Handy identisch ist, lohnt es sich, genau diese Methode im Kopf zu behalten – egal ob du das Gerät wechselst oder jemandem mit einer anderen Marke hilfst.",
  ],
  steps: [
    {
      title: "Finde das PDF",
      body: "Suche das Dokument in deiner Dateien-App, im Downloads-Ordner oder wo auch immer es gespeichert wurde – ein Scan, ein gespeicherter Anhang oder ein umgewandeltes Fotoset.",
    },
    {
      title: "Öffne das Tool PDF komprimieren",
      body: "Rufe das Tool PDF komprimieren in Chrome oder deinem Browser auf. Es funktioniert auf jedem Android-Handy gleich und verarbeitet die Datei auf deinem Gerät – kein Hochladen, kein Konto nötig.",
    },
    {
      title: "Füge das PDF hinzu und wähle eine Stufe",
      body: "Wähle die Datei aus und lege eine Stufe fest: Empfohlen für die meisten Fälle, Stark, wenn es noch kleiner werden muss. Niedrig erhält die meisten Details.",
    },
    {
      title: "Komprimiere und prüfe das Ergebnis",
      body: "Starte den Vorgang und vergleiche die Größe vorher und nachher. Bildlastige und gescannte PDFs werden meist schon in einem Durchgang deutlich kleiner.",
    },
    {
      title: "Speichere oder teile das Ergebnis",
      body: "Speichere die kleinere Datei auf deinem Gerät oder teile sie direkt per E-Mail oder Messaging-App. Behalte das Original, bis du geprüft hast, dass die Kopie gut lesbar ist.",
    },
    {
      title: "Nutze die App für geschützte oder große Dateien",
      body: "Der Browser kann passwortgeschützte PDFs nicht komprimieren und tut sich bei sehr großen Dateien schwer. Die PDF-Editor-App verarbeitet beides offline.",
    },
  ],
  tips: [
    "Die Browser-Methode funktioniert auf Samsung, Pixel, Xiaomi und allen anderen Marken identisch, deshalb lohnt es sich, genau diese über Geräte hinweg im Kopf zu behalten.",
    "Ist ein PDF riesig, liegt es fast immer an den gescannten oder fotografierten Seiten. Genau die lassen sich am besten komprimieren.",
    "Die Komprimierung rastert die Seiten, die kleinere Kopie verliert also den markierbaren Text. Behalte das Original, wenn du darin suchen oder daraus kopieren musst.",
    "Manche Android-Kameras speichern im hocheffizienten HEIF-Format; klassische JPG-Scans lassen sich leichter komprimieren und überall teilen.",
    "Speichere das komprimierte PDF unter einem neuen Namen, damit das scharfe Original auf dem Gerät erhalten bleibt.",
  ],
  mobileNote:
    "Direkt am Handy zu komprimieren ist genau das, was Android-Nutzerinnen und -Nutzer wollen, und die PDF-Editor-App erledigt das offline, ohne Hochladen, unterstützt passwortgeschützte Dateien und teilt das Ergebnis direkt in deine Apps. Für Dokumente, die du häufig verkleinerst, ist das schneller, als jedes Mal den Browser neu zu öffnen.",
  faq: [
    {
      q: "Funktioniert die Browser-Methode auf jedem Android-Handy?",
      a: "Ja. Weil das Tool PDF komprimieren im Browser läuft, funktioniert es auf Samsung, Pixel, Xiaomi und jedem anderen Android-Gerät gleich – anders als eingebaute Funktionen, die je nach Marke unterschiedlich sind.",
    },
    {
      q: "Kann ich ein PDF auf Android komprimieren, ohne etwas zu installieren?",
      a: "Ja. Das Tool PDF komprimieren läuft in deinem Browser und verarbeitet die Datei auf deinem Gerät, eine Installation ist also nicht nötig.",
    },
    {
      q: "Wird meine Datei hochgeladen?",
      a: "Nein. Die Komprimierung läuft lokal auf deinem Handy; nichts wird an einen Server geschickt, was besonders bei persönlichen Dokumenten zählt.",
    },
    {
      q: "Bleibt der Text markierbar?",
      a: "Nein. Beim Komprimieren werden die Seiten in Bilder umgewandelt, wodurch die markierbare Textebene verloren geht. Behalte das Original, wenn du sie brauchst.",
    },
    {
      q: "Wie komprimiere ich ein passwortgeschütztes PDF auf Android?",
      a: "Der Browser kann geschützte Dateien nicht verarbeiten. Nutze die PDF-Editor-App, die sie offline öffnet und komprimiert.",
    },
  ],
  related: [
    { label: "PDF komprimieren – direkt im Browser", path: "/compress-pdf" },
    {
      label: "PDF auf dem iPhone verkleinern",
      path: "/guides/how-to-make-pdf-smaller-on-iphone",
    },
    {
      label: "PDF-Dateigröße für E-Mail reduzieren",
      path: "/guides/how-to-reduce-pdf-file-size-for-email",
    },
    {
      label: "PDF auf Android bearbeiten",
      path: "/guides/how-to-edit-pdf-on-android",
    },
  ],
  parentHub: { label: "PDF komprimieren", path: "/compress-pdf" },
};

export default content;
