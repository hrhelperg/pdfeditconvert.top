import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-size-before-uploading",
  h1: "PDF-Größe vor dem Upload reduzieren",
  description:
    "Upload-Portale lehnen große Dateien noch strenger ab als E-Mail. Wie du ein PDF unter enge Portal-Grenzen bringst, ohne die geprüfte Lesbarkeit zu verlieren.",
  updated: "2026-05-23",
  intro: [
    "Upload-Portale sind strenger als E-Mail. Ein Behördenformular, ein Bewerbungssystem, ein Steuer- oder Personalportal setzt einem PDF oft eine Grenze von 2, 4 oder 5 MB — und lehnt alles Größere mit einer knappen Fehlermeldung ab, ohne zweite Chance. Erschwerend kommt hinzu: Meist handelt es sich um gescannte Dokumente — genau die Dateien, die am ehesten zu groß sind.",
    "In dieser Anleitung geht es darum, diese Grenzen mit dem kostenlosen Tool PDF komprimieren zu unterschreiten, das direkt in deinem Browser läuft, ohne dass etwas hochgeladen wird. Der Haken bei Portalen: Das Dokument muss dabei lesbar bleiben — ein abgelehnter Upload und ein unleserliches Dokument scheitern beide. Es ist also eine Gratwanderung.",
    "Wir zeigen dir, wie du eine bestimmte Zielgröße erreichst, was du tust, wenn das Limit eines Portals brutal niedrig ist, und wie du das Dokument lesbar genug hältst, um jede Prüfung auf der anderen Seite zu bestehen.",
  ],
  steps: [
    {
      title: "Finde die genaue Grenze des Portals heraus",
      body: "Lies das Kleingedruckte beim Upload-Feld. Portale nennen ein festes Limit — oft 2–5 MB — und lehnen alles darüber ab. Diese Zahl ist dein Ziel.",
    },
    {
      title: "Öffne das Tool PDF komprimieren",
      body: "Rufe das Tool PDF komprimieren auf. Es verarbeitet die Datei auf deinem Gerät — wichtig, denn Portal-Uploads sind meist persönliche oder offizielle Dokumente.",
    },
    {
      title: "Komprimiere in Richtung der Grenze",
      body: "Beginne mit Empfohlen; bei einer engen Grenze wechsle zu Stark. Das Tool zeigt dir die resultierende Größe, sodass du siehst, ob du das Limit unterschritten hast.",
    },
    {
      title: "Bestätige, dass es noch lesbar ist",
      body: "Öffne die komprimierte Datei. Portale lehnen zu große Dateien ab, Prüfer lehnen unleserliche ab — das Dokument muss beide Seiten zufriedenstellen. Prüfe, ob der Text gut lesbar ist.",
    },
    {
      title: "Kommst du nicht unter die Grenze, reduziere die Seitenzahl",
      body: "Wenn Komprimierung allein bei einem sehr niedrigen Limit nicht ausreicht, entferne unnötige Seiten mit dem Tool PDF-Seiten extrahieren, oder lade erforderliche Abschnitte getrennt hoch, falls das Portal das zulässt.",
    },
    {
      title: "Lade die passend große Datei hoch",
      body: "Reiche die komprimierte Version ein. Bewahre dein Original in voller Qualität auf, falls das Portal später eine klarere Kopie verlangt.",
    },
  ],
  tips: [
    "Finde die genaue Grenze heraus, bevor du komprimierst. Blind zu komprimieren verschwendet Mühe; ein angegebenes Limit von 4 MB sagt dir genau, wie stark du drangehen musst.",
    "Portale verlangen einen doppelten Test: klein genug zum Hochladen und klar genug zum Lesen. Eine so starke Komprimierung, dass ein Formular zu Matsch wird, scheitert bei der Prüfung, selbst wenn der Upload klappt.",
    "Gescannte Bewerbungsunterlagen lassen sich drastisch komprimieren, sodass selbst eine 2-MB-Grenze meist erreichbar ist — sie bestehen fast nur aus Bilddaten.",
    "Ist eine Grenze für einen mehrseitigen Scan unmöglich niedrig, verkleinert das vorherige Entfernen leerer oder irrelevanter Seiten die Größe, ohne die Qualität anzutasten.",
    "Bewahre das Original auf. Kann ein Prüfer ein Detail nicht lesen, verlangt er womöglich eine klarere Kopie — und dann willst du die Datei in voller Qualität bereithaben.",
  ],
  mobileNote:
    "Viele Portal-Uploads passieren vom Handy aus — ein Dokument fotografieren und direkt einreichen. Die PDF-Editor-App komprimiert offline und lässt dich die Lesbarkeit vorab prüfen, sodass du keine Datei einreichst, die zu groß oder zu unscharf ist, um durchzukommen.",
  faq: [
    {
      q: "Warum lehnt ein Upload-Portal mein PDF ab, obwohl E-Mail es akzeptiert?",
      a: "Portale setzen deutlich engere Grenzen — oft 2–5 MB gegenüber rund 25 MB bei E-Mail — und setzen sie strikt durch. Eine Datei, die problemlos per E-Mail geht, kann für ein Portal locker zu groß sein.",
    },
    {
      q: "Wie erreiche ich eine bestimmte Zielgröße?",
      a: "Komprimiere und lies die resultierende Größe ab, erhöhe die Stufe schrittweise, bis du unter der Grenze liegst. Das Tool zeigt dir Vorher-Nachher-Werte, sodass du präzise zielen kannst.",
    },
    {
      q: "Was, wenn selbst Stark nicht ausreicht?",
      a: "Entferne unnötige Seiten mit dem Tool PDF-Seiten extrahieren, oder lade erforderliche Abschnitte getrennt hoch, falls das Portal das erlaubt. Das verringert die Größe, ohne die verbleibenden Seiten weiter zu verschlechtern.",
    },
    {
      q: "Wird mein Dokument beim Komprimieren auf eure Server hochgeladen?",
      a: "Nein. Das Tool PDF komprimieren läuft in deinem Browser auf deinem Gerät — wichtig, da Portal-Dokumente meist persönlich oder offiziell sind.",
    },
    {
      q: "Kann starke Komprimierung dazu führen, dass das Portal die Datei wegen Unlesbarkeit ablehnt?",
      a: "Ja, das kann passieren. Portale brauchen die Datei klein genug zum Hochladen und klar genug zum Lesen. Prüfe die Lesbarkeit nach dem Komprimieren und bewahre dein Original für eventuelle Nachfragen auf.",
    },
  ],
  related: [
    { label: "PDF komprimieren — die Portal-Grenze erreichen", path: "/compress-pdf" },
    { label: "PDF-Seiten extrahieren — Seiten weglassen, um Größe zu sparen", path: "/extract-pdf-pages" },
    { label: "Beste PDF-Komprimierungseinstellungen", path: "/guides/best-pdf-compression-settings" },
    { label: "PDF-Dateigröße für E-Mail reduzieren", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "PDF komprimieren", path: "/compress-pdf" },
};

export default content;
