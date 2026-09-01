import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "free-browser-based-pdf-tools",
  h1: "Kostenlose PDF-Tools im Browser (keine Installation, kein Hochladen)",
  description:
    "Die PDF-Tools, die komplett in deinem Browser laufen – ohne Installation, ohne Konto, ohne Hochladen. Was verfügbar ist, was es abdeckt, und wie du prüfst, ob es wirklich lokal arbeitet.",
  updated: "2026-05-29",
  intro: [
    "Browserbasierte PDF-Tools haben verändert, was „online“ bedeutet. Das alte Modell war: Datei hochladen, Server verarbeitet sie, Ergebnis herunterladen. Das neue Modell ist: Seite besuchen, dein Browser verarbeitet die Datei lokal, du lädst das Ergebnis herunter. Der Unterschied zählt — Tempo, Datenschutz, und die Tatsache, dass das Tool wirklich kostenlos bleiben kann.",
    "Browserbasiert ist keine Marketingbehauptung, sondern eine Architektur. Die Verarbeitung passiert in JavaScript oder WebAssembly auf deinem Rechner, im Browser-Tab. Kein Server ist am Umgang mit deiner Datei beteiligt. Datenschutz und Kostenlosigkeit kommen aus der Architektur, nicht aus einer angegebenen Richtlinie.",
    "Diese Anleitung zeigt, was heute an browserbasierten PDF-Tools verfügbar ist, welche Aufgaben sie gut abdecken, welche noch nicht, und wie du überprüfst, ob ein Tool wirklich lokal arbeitet, bevor du ihm vertraust.",
  ],
  steps: [
    {
      title: "Weißt du, was es in browserbasierter Form gibt",
      body: "Komprimieren, Zusammenführen, Teilen, Seiten extrahieren, Seiten neu anordnen, Drehen, Wasserzeichen, Bild-zu-PDF, PDF-zu-Bildern, Word-zu-PDF, PDF-zu-Word, Unterschreiben. Das browserbasierte Angebot deckt den größten Teil der alltäglichen PDF-Arbeit ab.",
    },
    {
      title: "Überprüfe, dass das Tool wirklich lokal arbeitet",
      body: "Browser-Entwicklertools, Netzwerk-Tab, Datei hineinlegen. Ein echtes browserbasiertes Tool zeigt keine große ausgehende Anfrage, sobald du die Datei hinzufügst. Die Kontrolle dauert Sekunden.",
    },
    {
      title: "Nutze PDF komprimieren zur Größenreduzierung",
      body: "PDF hineinlegen, Komprimierungsstufe wählen, herunterladen. Der ganze Vorgang läuft in deinem Browser. Scan-lastige Dateien schrumpfen deutlich; reine Textdateien ändern sich kaum.",
    },
    {
      title: "Nutze PDF zusammenführen zum Kombinieren von Dateien",
      body: "Mehrere PDFs hineinlegen, zum Umsortieren ziehen, die zusammengeführte Datei herunterladen. Das Zusammenführen passiert lokal; die kombinierte Datei entsteht im Arbeitsspeicher deines Browsers.",
    },
    {
      title: "Nutze Bild in PDF und PDF in Bilder für Umwandlungen zwischen Bild und Dokument",
      body: "Bild in PDF fügt JPG, PNG und WebP zu einem PDF zusammen. PDF in Bilder extrahiert jede Seite als PNG oder JPG. Beide laufen lokal.",
    },
    {
      title: "Nutze die PDF-Editor-App für mobil geprägte Abläufe",
      body: "Manche Abläufe (Unterschreiben, Scannen, Bearbeiten auf dem Handy) funktionieren in einer eigenen mobilen App besser als im Browser. Die PDF-Editor-App ist die Ergänzung für iOS und Android zum browserbasierten Angebot — gleiches Datenschutzniveau, besser passend für mobile Anwendungsfälle.",
    },
  ],
  tips: [
    "Browserbasierte Tools funktionieren offline, sobald die Seite geladen ist. Eine nützliche Bestätigung dafür, dass sie wirklich lokal arbeiten.",
    "Aufwendige Vorgänge bei sehr großen Dateien können den Prozessor des Browser-Tabs für ein paar Sekunden auslasten — das ist normal, kein Hänger.",
    "Vorgänge mit mehreren Seiten laufen in modernen Browsern gestreamt — du musst nicht warten, bis die ganze Datei hochgeladen ist, weil nichts hochgeladen wird.",
    "Speichere die URL des Tools — browserbasierte Tools funktionieren ohne Konto, die URL ist also dein Lesezeichen-Ersatz.",
    "Vertrau der Bezeichnung „browserbasiert“ nicht ohne Kontrolle mit den Entwicklertools. Manche Tools haben eine Browser-Oberfläche, laden die Datei aber trotzdem hoch.",
  ],
  mobileNote:
    "Mobile Browser führen browserbasierte PDF-Tools ebenfalls aus. Die PDF-Editor-App nutzt dieselbe Architektur in einer nativen Hülle, mit derselben Verarbeitung auf dem Gerät — iPhone- und Android-Nutzerinnen bekommen dieselbe Garantie: kostenlos und ohne Hochladen.",
  faq: [
    {
      q: "Welche PDF-Aufgaben können im Browser laufen?",
      a: "Komprimieren, Zusammenführen, Teilen, Seiten extrahieren, Neuanordnen, Drehen, Wasserzeichen, Umwandlung Bild ↔ PDF, Word ↔ PDF, Unterschreiben. Der größte Teil der alltäglichen PDF-Arbeit passt hier hinein.",
    },
    {
      q: "Was kann noch nicht im Browser laufen?",
      a: "Hochgenaue OCR bei langen Dokumenten, fortgeschrittene Schwärzung und manche spezialisierten Druckvorstufen-Workflows profitieren noch von Serververarbeitung.",
    },
    {
      q: "Wie erkenne ich, ob ein Tool wirklich browserbasiert ist?",
      a: "Browser-Entwicklertools, Netzwerk-Tab. Datei hineinlegen. Siehst du keine große ausgehende Anfrage, verarbeitet es lokal. Siehst du eine mehrere Megabyte große POST-Anfrage, lädt es hoch.",
    },
    {
      q: "Ist browserbasiert langsamer als serverbasiert?",
      a: "Bei den meisten Aufgaben vergleichbar. Moderne Browser und WebAssembly sind schnell. Sehr große Dateien können lokal länger dauern, dafür sparst du die Zeit fürs Hoch- und Herunterladen.",
    },
    {
      q: "Warum sind browserbasierte Tools meist kostenlos?",
      a: "Weil die eigentliche Arbeit auf deinem Gerät passiert, nicht auf den Servern des Tools. Die Hosting-Kosten sind winzig; das Tool kann kostenlos bleiben, ohne auf Abos angewiesen zu sein.",
    },
  ],
  related: [
    { label: "PDF-Tools — vollständige Liste der browserbasierten Tools", path: "/pdf-tools" },
    { label: "Die besten kostenlosen PDF-Tools", path: "/guides/best-free-pdf-tools" },
    { label: "Die besten PDF-Tools ohne Hochladen", path: "/guides/best-pdf-tools-without-upload" },
    { label: "Vorteile der Dokumentenverarbeitung im Browser", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "PDF-Tools — kostenlos, browserbasiert", path: "/pdf-tools" },
};

export default content;
