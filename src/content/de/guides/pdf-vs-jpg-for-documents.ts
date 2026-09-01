import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-jpg-for-documents",
  h1: "PDF oder JPG für Dokumente — hör auf, Fotos zu verschicken",
  description:
    "Warum ein JPG-Foto eines Dokuments das falsche Format zum Verschicken ist, wann PDF richtig ist, und wie du ein Foto in ein richtiges Dokument umwandelst.",
  updated: "2026-05-23",
  intro: [
    "Jemand bittet dich um ein Dokument, und das Naheliegendste ist, es zu fotografieren und das JPG zu schicken. Fühlt sich effizient an. Genau deshalb landet die andere Person am Ende mit einem schiefen, verwaschenen Bild, das sie nicht sauber ausdrucken, durchsuchen oder mit anderen Dateien ablegen kann. Für ein echtes Dokument ist ein JPG-Foto fast immer das falsche Format — und ein PDF fast immer das richtige.",
    "Diese Anleitung erklärt den Unterschied dort, wo er zählt: bei Dokumenten. Sie ist keine neutrale Funktionstabelle — sie ist ein Plädoyer dafür, das Foto vor dem Versand in ein PDF umzuwandeln, und zeigt, wie das mit dem kostenlosen Tool Bild zu PDF geht, das direkt auf deinem Gerät läuft, ohne dass irgendetwas auf einen Server geladen wird.",
    "Wenn du schon mal fünf JPGs bekommen hast, die eigentlich ein einziges ordentliches PDF hätten sein sollen — das ist die Anleitung, die du zurückschicken solltest.",
  ],
  steps: [
    {
      title: "Verstehe, was ein JPG-Foto verliert",
      body: "Ein fotografiertes Dokument ist ein einzelnes Bild: keine mehreren Seiten in einer Datei, kein durchsuchbarer Text, oft schief und ungleichmäßig beleuchtet. Es ist ein Bild von einem Dokument, kein Dokument.",
    },
    {
      title: "Sieh, was PDF einem Dokument gibt",
      body: "PDF fasst viele Seiten in einer Datei zusammen, druckt in vorhersehbarer Größe, öffnet sich überall identisch und fügt sich problemlos neben andere Dokumente. Es ist das Format, in dem der Rest der Welt ablegt und archiviert.",
    },
    {
      title: "Entscheide nach Zweck",
      body: "Wird der Empfänger es lesen, drucken, ablegen oder mit anderen Dokumenten kombinieren, schick PDF. Ein einzelnes JPG ist nur dann in Ordnung, wenn das Bild selbst die Sache ist — ein Foto, kein Papierkram.",
    },
    {
      title: "Wandle das Foto in ein PDF um",
      body: "Öffne das Tool Bild zu PDF, füge deine JPGs hinzu, ordne sie und erstelle ein PDF. Mehrere fotografierte Seiten werden so zu einem einzigen Dokument statt zu einem Haufen verstreuter Bilder.",
    },
    {
      title: "Lass es wie ein Dokument aussehen",
      body: "Schneide die Fotos zu und richte sie zuerst gerade, damit die Seiten sauber sitzen. Bei allem Wichtigen schlägt ein richtiger Scan mit Kantenerkennung ein rohes Foto.",
    },
    {
      title: "Auf die richtige Größe bringen und verschicken",
      body: "Komprimiere das PDF, wenn die fotografierten Seiten es schwer gemacht haben, und verschicke dann eine saubere Datei, mit der der Empfänger auch wirklich etwas anfangen kann.",
    },
  ],
  tips: [
    "Das sichere Zeichen, dass du ein PDF hättest schicken sollen: Der Empfänger bittet dich, es „als richtiges Dokument“ zu schicken, oder kann es nicht sauber ausdrucken.",
    "Mehrere Seiten sind das entscheidende Argument. Zwei JPGs eines zweiseitigen Formulars sind Chaos; ein PDF ist ein Dokument.",
    "Ein JPG von Text ist nicht durchsuchbar. PDFs aus echtem Text sind es, und sogar gescannte PDFs lassen sich mit Texterkennung durchsuchbar machen.",
    "JPG ist die richtige Wahl, wenn das Bild selbst der Inhalt ist — ein Produktfoto, ein Screenshot, den du als Bild teilst. Falsch ist es, wenn der Inhalt ein Dokument ist.",
    "Umwandeln repariert kein schlechtes Foto. Richte die Seite gerade aus und sorge für gutes Licht, bevor du konvertierst, oder scanne sie richtig.",
  ],
  mobileNote:
    "Da das lästige JPG fast immer als Handyfoto entsteht, gehört die Lösung auch aufs Handy. Die PDF-Editor-App macht aus Fotos in deiner Kamerarolle ein PDF oder scannt die Seite gleich richtig, mit Kantenerkennung und Texterkennung — sodass du am Ende ein Dokument verschickst, keinen Schnappschuss.",
  faq: [
    {
      q: "Warum sollte ich nicht einfach ein JPG eines Dokuments verschicken?",
      a: "Ein JPG-Foto ist ein einzelnes, oft schiefes Bild ohne durchsuchbaren Text, ohne Unterstützung für mehrere Seiten und mit unvorhersehbarer Druckgröße. Bei einem Dokument bedeutet das zusätzliche Arbeit für den Empfänger. Ein PDF vermeidet all das.",
    },
    {
      q: "Wann ist JPG tatsächlich die richtige Wahl?",
      a: "Wenn das Bild selbst der Inhalt ist — ein Foto, ein Screenshot, den du als Bild teilst. JPG ist speziell dann falsch, wenn der Inhalt ein Dokument ist, das jemand lesen, drucken oder ablegen muss.",
    },
    {
      q: "Wie mache ich aus einem Foto ein PDF-Dokument?",
      a: "Nutze das Tool Bild zu PDF: Füge deine JPGs hinzu, ordne sie und erstelle ein PDF. Für das beste Ergebnis richte die Fotos vorher gerade aus oder scanne die Seite gleich richtig.",
    },
    {
      q: "Wird das umgewandelte PDF durchsuchbar sein?",
      a: "Nicht aus einem einfachen Foto — es bleibt ein Bild. Für durchsuchbaren Text scanne das Dokument mit der PDF-Editor-App und ihrer Texterkennung, statt es nur zu fotografieren.",
    },
    {
      q: "Gibt es einen neutralen Funktionsvergleich der beiden Formate?",
      a: "Ja. Für einen direkten Vergleich von PDF und JPG bei Qualität, Größe und Einsatzzweck sieh dir die Vergleichsseite PDF oder JPG an.",
    },
  ],
  related: [
    { label: "Bild zu PDF — aus Fotos ein Dokument machen", path: "/image-to-pdf" },
    { label: "PDF oder JPG — wann welches Format", path: "/compare/pdf-vs-jpg" },
    { label: "JPG zu PDF konvertieren — kostenlos, Bild zu PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "PDF mit der Handykamera erstellen", path: "/guides/how-to-create-pdf-from-camera" },
  ],
  parentHub: { label: "PDF-Konverter", path: "/pdf-converter" },
};

export default content;
