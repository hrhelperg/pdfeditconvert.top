import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-jpg-to-pdf",
  h1: "JPG zu PDF konvertieren — kostenlos, Bild zu PDF",
  description:
    "Füge ein oder mehrere JPG-Fotos zu einem PDF im Browser zusammen. Ideal für Belege, Ausweise und fotografierte Dokumente – mit ehrlichen Hinweisen zu Qualität und iPhone-HEIC.",
  updated: "2026-05-23",
  intro: [
    "JPG ist das Format, das dir deine Kamera und die meisten Websites liefern — und damit der häufigste Ausgangspunkt für „das muss noch ein PDF werden“. Der Grund fürs Konvertieren ist fast immer derselbe: Ein einzelnes JPG lässt sich schlecht als Dokument verschicken. Mehrere JPGs sind noch schlimmer — fünf einzelne Belegfotos in einer E-Mail nervt jede Buchhaltung im Stillen. Ein PDF mit Seiten in der richtigen Reihenfolge ist das, was am Ende wirklich ankommen soll.",
    "Diese Anleitung nutzt das kostenlose Bild-zu-PDF-Tool, das JPG-Dateien direkt im Browser zu einem PDF zusammenfügt — ohne dass etwas auf einen Server geladen wird. Ideal für Belege, Ausweisfotos, Screenshots und Aufnahmen von Papierdokumenten, die du bündeln und verschicken musst.",
    "JPG ist ein verlustbehaftetes Fotoformat. Bevor du dich bei etwas Wichtigem darauf verlässt, lohnt sich ein Blick darauf, was beim Konvertieren sauber erhalten bleibt und was nicht.",
  ],
  steps: [
    {
      title: "Öffne das Bild-zu-PDF-Tool",
      body: "Ruf das Bild-zu-PDF-Tool im Browser auf. Es akzeptiert JPG, PNG und WebP und läuft komplett auf deinem Gerät — kein Hochladen, kein Konto nötig.",
    },
    {
      title: "Füge deine JPG-Dateien hinzu",
      body: "Zieh deine Fotos in die Ablagefläche oder klicke, um sie auszuwählen. Füge so viele hinzu, wie du brauchst — jedes Bild wird zu einer Seite im PDF.",
    },
    {
      title: "Bring sie in die richtige Reihenfolge",
      body: "Nutze die Pfeile nach oben und unten bei jeder Zeile, um die Seitenfolge festzulegen. Bei einem mehrseitigen Dokument ist das der wichtigste Schritt — Seite zwei eines Vertrags gehört hinter Seite eins.",
    },
    {
      title: "Erstelle das PDF",
      body: "Klicke auf PDF erstellen. Jedes Bild landet auf einer eigenen, an das Foto angepassten Seite, und die Datei wird lokal zusammengesetzt.",
    },
    {
      title: "Lade es herunter und benenne es um",
      body: "Das PDF wird automatisch heruntergeladen. Gib ihm vor dem Versand einen aussagekräftigen Namen — „Belege-März.pdf“ wirkt im Posteingang seriöser als „IMG_4821.pdf“.",
    },
    {
      title: "Komprimiere es, falls es per E-Mail rausgeht",
      body: "PDFs aus Fotos werden schnell groß. Liegt die Datei über dem üblichen Anhanglimit von 25 MB, schick sie vorher durchs Tool PDF komprimieren.",
    },
  ],
  tips: [
    "Beschneide und richte jedes Foto vor der Konvertierung gerade aus. Das Tool passt die Seite an das Bild an — ein schiefes Foto ergibt also eine schiefe Seite.",
    "Gutes, gleichmäßiges Licht schlägt bei Dokumentfotos jeden Filter. Vermeide Schatten, die deine Hand oder dein Handy auf die Seite werfen.",
    "JPG komprimiert Fotos gut, verwischt aber feinen Text und scharfe Kanten. Bei Screenshots oder allem mit klarer Schrift hält PNG den Text sauberer — siehe die Anleitung PNG zu PDF.",
    "iPhone-Fotos werden oft als HEIC statt als JPG gespeichert. Das Browser-Tool braucht JPG, PNG oder WebP — stell die Kamera in den Einstellungen entweder auf „Kompatibelste“ um, oder nutze die App PDF Editor, die HEIC direkt liest.",
    "Ein Foto eines Dokuments ist kein durchsuchbarer Scan — es gibt keine Textebene, du kannst also nichts suchen oder kopieren. Nutze bei Bedarf eine Scan-Methode.",
  ],
  mobileNote:
    "Die meisten JPGs entstehen ohnehin auf dem Handy — genau da spielt die App PDF Editor ihre Stärken aus: Sie holt Fotos direkt aus deiner Kamerarolle (auch HEIC), macht daraus ein PDF und kann neue Seiten mit Kantenerkennung scannen — ganz ohne Umweg über den Computer.",
  faq: [
    {
      q: "Kann ich mehrere JPGs zu einem PDF zusammenfügen?",
      a: "Ja — genau dafür ist das Tool gemacht. Füge alle deine Bilder hinzu, zieh sie in die richtige Reihenfolge, und sie werden zu aufeinanderfolgenden Seiten eines einzigen PDFs.",
    },
    {
      q: "Werden meine Fotos irgendwohin hochgeladen?",
      a: "Nein. Die Konvertierung läuft in deinem Browser auf deinem eigenen Gerät. Deine Bilder verlassen es nie — wichtig bei Ausweisen und persönlichen Dokumenten.",
    },
    {
      q: "Meine iPhone-Fotos lassen sich nicht laden — warum?",
      a: "Es handelt sich wahrscheinlich um HEIC-Dateien, die das Browser-Tool nicht liest. Stell das Kameraformat unter Einstellungen → Kamera → Formate auf „Kompatibelste“ um, oder nutze die App PDF Editor, die HEIC verarbeitet.",
    },
    {
      q: "Wird das PDF durchsuchbar sein?",
      a: "Nein. Ein konvertiertes Foto ist ein Bild ohne Textebene, die Wörter lassen sich also nicht suchen oder markieren. Für ein durchsuchbares Dokument scanne mit Texterkennung in der App PDF Editor.",
    },
    {
      q: "Warum ist mein PDF so groß?",
      a: "Fotos vom Handy in hoher Auflösung sind groß, und mehrere davon summieren sich schnell. Schick das Ergebnis durchs Tool PDF komprimieren, um unter die Grenzen für E-Mail und Upload zu kommen.",
    },
  ],
  related: [
    { label: "Bild zu PDF — JPGs im Browser zusammenfügen", path: "/image-to-pdf" },
    { label: "PDF komprimieren — das Ergebnis für die E-Mail verkleinern", path: "/compress-pdf" },
    { label: "PNG zu PDF konvertieren", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Fotos auf dem iPhone zu PDF konvertieren", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "PDF-Konverter", path: "/pdf-converter" },
};

export default content;
