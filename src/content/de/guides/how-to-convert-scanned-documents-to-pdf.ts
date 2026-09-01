import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-scanned-documents-to-pdf",
  h1: "Gescannte Dokumente zu PDF konvertieren",
  description:
    "Du hast schon Scan-Bilder oder Fotos von Papierdokumenten? Füge sie im Browser zu einem PDF zusammen – und erfahre, was OCR macht und warum Scans es für Durchsuchbarkeit brauchen.",
  updated: "2026-05-23",
  intro: [
    "Zwischen einem Dokument scannen und einen bereits vorhandenen Scan konvertieren liegt ein wichtiger Unterschied. Liegt ein frischer Stapel Papier vor dir, brauchst du einen Scan-Workflow. Oft aber existieren die Bilder schon — ein Flachbettscanner hat einen Ordner voller JPEGs ausgespuckt, eine Kollegin hat Fotos eines unterschriebenen Formulars gemailt, oder die Handygalerie quillt über vor Bildern von Schriftstücken. Die Aufgabe besteht jetzt darin, diese Bilder zu einem einzigen, ordentlichen PDF zusammenzufassen.",
    "Genau darum geht es in dieser Anleitung: vorhandene Scan-Bilder mit dem kostenlosen Bild-zu-PDF-Tool zu einem PDF zusammenzuführen — es läuft direkt im Browser, ohne dass etwas hochgeladen wird. Außerdem klären wir den Punkt, den die meisten falsch verstehen: Ein konvertierter Scan ist ein Bild von Text, kein durchsuchbarer Text — und was du tun kannst, wenn du die Wörter wieder brauchst.",
    "Musst du das Papier erst noch erfassen, wirf einen Blick in die eigene Scan-Anleitung; diese hier geht davon aus, dass die Bilder bereits vorliegen.",
  ],
  steps: [
    {
      title: "Sammle deine Scan-Bilder",
      body: "Trage die JPG- oder PNG-Dateien aus Scanner, E-Mail oder Kamerarolle an einem Ort zusammen, damit du sie in einem Rutsch hinzufügen kannst.",
    },
    {
      title: "Öffne das Bild-zu-PDF-Tool",
      body: "Ruf das Bild-zu-PDF-Tool in deinem Browser auf. Es akzeptiert JPG, PNG und WebP und verarbeitet alles auf deinem Gerät — kein Hochladen, kein Konto nötig.",
    },
    {
      title: "Füge die Bilder in der richtigen Reihenfolge hinzu",
      body: "Zieh die Scans in die Ablagefläche. Nutze die Pfeile, um die Seiten in die richtige Reihenfolge zu bringen — Seite eins des Formulars vor Seite zwei.",
    },
    {
      title: "Erstelle das PDF",
      body: "Klicke auf „PDF erstellen“. Aus jedem Scan wird eine Seite, und das Tool fügt sie lokal zu einem Dokument zusammen.",
    },
    {
      title: "Komprimiere bei Bedarf",
      body: "Scans bestehen fast nur aus Bildern, das PDF kann also groß ausfallen. Schick es durchs Tool PDF komprimieren, um unter die Grenzen für E-Mail und Upload zu kommen — gescannter Inhalt schrumpft dabei deutlich, ohne sichtbar an Qualität zu verlieren.",
    },
    {
      title: "Füge bei Bedarf durchsuchbaren Text hinzu",
      body: "Ein konvertierter Scan ist ein Bild, der Text lässt sich also nicht durchsuchen. Für durchsuchbaren Text nutzt du die Texterkennung (OCR) der PDF-Editor-App, die eine unsichtbare Textebene über den Scan legt.",
    },
  ],
  tips: [
    "Richte jeden Scan gerade aus und schneide ihn zu, bevor du ihn hinzufügst — eine schiefe Seite bleibt im PDF schief.",
    "Einheitliche Auflösung über alle Seiten hinweg ergibt ein ordentlicheres Dokument. Stark unterschiedliche Bildgrößen lassen die Seiten im Maßstab springen.",
    "Browser-Tools können Scans zusammenführen, aber nicht den Text darin lesen. Willst du Wörter durchsuchen oder kopieren, ist das eine Aufgabe für OCR, die die PDF-Editor-App übernimmt.",
    "Behalte Farbscans für alles mit Stempeln, Markierungen oder Unterschriften; wechsle nur dann zu Graustufen, wenn Farbe nichts zur Sache tut — das verkleinert die Datei.",
    "Benenne die Datei nach Inhalt und Datum. „Mietvertrag-unterschrieben-2026-05.pdf“ findest du später viel leichter wieder als eine Zahlenkette vom Scanner.",
  ],
  mobileNote:
    "Sind die „Scans“ eigentlich Fotos auf deinem Handy, ist die PDF-Editor-App die Abkürzung: Sie verwandelt Bilder aus der Kamerarolle in ein PDF, kann neue Seiten mit Kantenerkennung erfassen und per Texterkennung durchsuchbar machen — alles, ohne dass etwas hochgeladen wird.",
  faq: [
    {
      q: "Was ist der Unterschied zu „richtigem“ Scannen?",
      a: "Scannen erfasst Papier überhaupt erst als Bilder. Diese Anleitung geht davon aus, dass die Scan-Bilder schon existieren und nur noch zu einem PDF zusammengeführt werden müssen. Musst du das Papier erst noch erfassen, nutze einen Scan-Workflow.",
    },
    {
      q: "Wird der Text in meinem gescannten PDF durchsuchbar sein?",
      a: "Durch die Konvertierung allein nicht — ein Scan ist ein Bild, es gibt also keine Textebene. Lass die PDF-Editor-App eine OCR-Texterkennung durchlaufen, um eine durchsuchbare Ebene über den Scan zu legen.",
    },
    {
      q: "Werden meine Scans hochgeladen?",
      a: "Nein. Das Bild-zu-PDF-Tool verarbeitet die Dateien direkt in deinem Browser auf deinem Gerät, sensible Dokumente bleiben also privat.",
    },
    {
      q: "Warum ist mein gescanntes PDF so groß?",
      a: "Scans sind im Grunde Fotos, und mehrere hochauflösende Seiten summieren sich schnell. Komprimiere das PDF — bildlastige Scans schrumpfen dabei meist deutlich, ohne sichtbar an Qualität zu verlieren.",
    },
    {
      q: "Kann ich eine seitlich eingescannte Seite korrigieren?",
      a: "Ja. Nutze PDF drehen, um die betroffenen Seiten nach dem Zusammenführen aufzurichten, oder korrigiere die Ausrichtung schon im Ausgangsbild, bevor du konvertierst.",
    },
  ],
  related: [
    { label: "Bild zu PDF — Scans im Browser zusammenführen", path: "/image-to-pdf" },
    { label: "In PDF scannen — Papier mit der Kamera erfassen", path: "/scan-to-pdf" },
    { label: "Wie du Dokumente mit dem Handy in PDF scannst", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Wie du ein gescanntes PDF komprimierst", path: "/guides/how-to-compress-scanned-pdf" },
  ],
  parentHub: { label: "In PDF scannen", path: "/scan-to-pdf" },
};

export default content;
