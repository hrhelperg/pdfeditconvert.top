import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-scanned-pdf",
  h1: "Gescanntes PDF komprimieren (große Ersparnis)",
  description:
    "Gescannte PDFs lassen sich am leichtesten verkleinern und sind die größten Platzfresser. Wie du sie drastisch komprimierst, und was mit durchsuchbarem Text passiert.",
  updated: "2026-05-23",
  intro: [
    "Gescannte PDFs sind die Schwergewichte unter den Dokumenten. Jede Seite ist ein Bild in voller Auflösung, ein kurzer gescannter Vertrag kann also mehr wiegen als ein hundertseitiger Textbericht. Die gute Nachricht: Weil Scans fast nur aus Bilddaten bestehen, lassen sie sich drastischer komprimieren als jede andere Art von PDF – oft um 70 % oder mehr.",
    "Diese Anleitung konzentriert sich gezielt auf das Komprimieren von Scans mit dem kostenlosen Tool PDF komprimieren, das in deinem Browser läuft, ohne dass etwas hochgeladen wird. Genau bei Scans zeigt die Komprimierung im Browser ihre Stärke, und genau hier lohnt sich die Ersparnis am meisten.",
    "Wir gehen außerdem auf den einen Punkt ein, auf den du bei gescannten Dokumenten achten solltest – durchsuchbaren Text –, damit du nicht versehentlich eine Textebene verlierst, die du dir mühsam erarbeitet hast.",
  ],
  steps: [
    {
      title: "Öffne das Tool PDF komprimieren",
      body: "Rufe das Tool PDF komprimieren in deinem Browser auf. Es verarbeitet die Datei auf deinem Gerät, sodass selbst ein gescannter Vertrag privat bleibt.",
    },
    {
      title: "Füge dein gescanntes PDF hinzu",
      body: "Ziehe den Scan in den Ablagebereich oder klicke, um ihn auszuwählen. Das Tool liest ihn lokal ein – nichts wird hochgeladen.",
    },
    {
      title: "Wähle eine Stufe – hier darfst du ruhig stark komprimieren",
      body: "Scans vertragen starke Komprimierung gut, weil sie Bilder sind und kein gestochen scharfer Vektortext. Empfohlen reicht oft aus; selbst Stark sieht bei alltäglichen Dokumenten meist noch völlig lesbar aus.",
    },
    {
      title: "Komprimiere und prüfe die Lesbarkeit",
      body: "Starte den Vorgang und öffne das Ergebnis. Der entscheidende Test bei einem Scan ist die Lesbarkeit – kannst du den Text bequem lesen? Wenn ja, selbst bei einer starken Stufe, nimm die größere Ersparnis mit.",
    },
    {
      title: "Achte auf die durchsuchbare Textebene",
      body: "Wurde dein Scan per OCR durchsuchbar gemacht, entfernt das Komprimieren im Browser diese Ebene, weil die Seiten dabei als Bilder neu gerendert werden. Behalte das durchsuchbare Original, wenn du es brauchst.",
    },
    {
      title: "Speichere die kleinere Kopie",
      body: "Speichere sie unter einem neuen Namen. Gescannte Dateien fallen meist schon in einem Durchgang deutlich unter die Grenzen für E-Mail und Upload.",
    },
  ],
  tips: [
    "Scans lassen sich besser komprimieren als jedes andere PDF – ist ein Dokument riesig, weil es gescannt wurde, hast du bei der Größe Glück.",
    "Weil Scans Bilder sind, kannst du meist eine stärkere Stufe wählen, als du es bei einem gestalteten Dokument wagen würdest, und trotzdem lesbar bleiben.",
    "Hatte dein Scan eine durchsuchbare Textebene aus einer Texterkennung, entfernt die Komprimierung im Browser sie. Führe die Texterkennung danach erneut aus, oder bewahre das durchsuchbare Original separat auf.",
    "Scannst du bereits mit niedrigerer Auflösung (200–300 DPI), sind die Dateien von Anfang an kleiner, und du musst später weniger stark komprimieren.",
    "Farbscans sind größer als Graustufen-Scans. Bringt Farbe dem Dokument nichts, macht ein Scan in Graustufen die Datei schon kleiner, bevor die Komprimierung überhaupt beginnt.",
  ],
  mobileNote:
    "Scans entstehen meist zuerst am Handy, und die PDF-Editor-App hält den gesamten Ablauf auf dem Gerät: in sinnvoller Qualität scannen, offline komprimieren und – anders als Browser-Tools – eine Texterkennung durchführen, sodass die kleinere Datei trotzdem durchsuchbar bleibt. Bei keinem Schritt wird etwas hochgeladen.",
  faq: [
    {
      q: "Um wie viel kleiner kann ein gescanntes PDF werden?",
      a: "Oft um 70 % oder mehr. Scans bestehen fast nur aus Bilddaten, genau da setzt die Komprimierung an, deshalb schrumpfen sie weit stärker als textbasierte PDFs.",
    },
    {
      q: "Bleibt der Scan nach starker Komprimierung noch lesbar?",
      a: "Bei alltäglichen Dokumenten meist ja – Scans vertragen starke Komprimierung, weil sie Bilder sind und kein gestochen scharfer Vektortext. Öffne das Ergebnis trotzdem immer und prüfe die Lesbarkeit.",
    },
    {
      q: "Entfernt Komprimieren den durchsuchbaren Text eines Scans?",
      a: "Wurde der Scan per OCR durchsuchbar gemacht, entfernt die Komprimierung im Browser diese Ebene, weil die Seiten als Bilder neu gerendert werden. Behalte das durchsuchbare Original oder führe die Texterkennung danach erneut aus.",
    },
    {
      q: "Wird mein gescanntes Dokument hochgeladen?",
      a: "Nein. Das Tool PDF komprimieren läuft in deinem Browser auf deinem Gerät, sensible Scans wie Verträge oder Kontoauszüge bleiben also privat.",
    },
    {
      q: "Kann ich einen passwortgeschützten Scan komprimieren?",
      a: "Im Browser nicht. Entferne zuerst das Passwort, oder nutze die mobile PDF-Editor-App, die geschützte Dateien offline komprimiert.",
    },
  ],
  related: [
    {
      label: "PDF komprimieren – Scans direkt im Browser verkleinern",
      path: "/compress-pdf",
    },
    {
      label: "Gescannte Dokumente zu PDF konvertieren",
      path: "/guides/how-to-convert-scanned-documents-to-pdf",
    },
    {
      label: "Warum ist mein PDF so groß?",
      path: "/guides/why-is-my-pdf-so-large",
    },
    {
      label: "Dokumente am Handy zu PDF scannen",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
  ],
  parentHub: { label: "PDF komprimieren", path: "/compress-pdf" },
};

export default content;
