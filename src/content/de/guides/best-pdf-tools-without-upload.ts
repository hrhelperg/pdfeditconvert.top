import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-tools-without-upload",
  h1: "Die besten PDF-Tools ohne Hochladen (Dateien bleiben auf deinem Gerät)",
  description:
    "Wenn dein PDF dein Gerät nicht verlassen soll, erledigen diese Tools die Arbeit lokal. Komprimieren, Zusammenführen, Konvertieren – alles, während die Datei auf deinem Rechner bleibt.",
  updated: "2026-05-29",
  intro: [
    "Es gibt diesen Moment, in dem du ein PDF komprimieren, zusammenführen oder konvertieren willst und innehältst. Die Datei ist sensibel — ein Vertrag, ein Kontoauszug, ein gescannter Ausweis — und die ersten drei Suchergebnisse wollen alle, dass du sie auf ihre Server hochlädst. Das Risiko wirkt im Einzelfall klein, summiert sich aber über ein Jahr beiläufiger Dokumentenarbeit.",
    "PDF-Tools ohne Hochladen nehmen dieses Risiko allein durch ihre Architektur vom Tisch. Die Verarbeitung passiert auf deinem Gerät — in deinem Browser-Tab oder in einer mobilen App —, und die Datei erreicht nie einen fremden Server. Der Datenschutz ist automatisch gegeben, statt von einer angegebenen Löschfrist abzuhängen.",
    "Diese Anleitung listet die Empfehlungen ohne Hochladen für die gängigen PDF-Aufgaben. Die Ausrichtung geht zu browserbasierten Tools, weil sie ohne jede Installation funktionieren; mobile App-Empfehlungen ergänzen dort, wo das Handy das bessere Gerät für die Aufgabe ist.",
  ],
  steps: [
    {
      title: "Komprimieren ohne Hochladen: PDF komprimieren im Browser",
      body: "Seite öffnen, PDF hineinlegen, Komprimierungsstufe wählen, herunterladen. Der Komprimierungsalgorithmus läuft in deinem Browser; die Datei wird lokal gelesen, im Arbeitsspeicher verarbeitet und als neuer Download zurückgeschrieben.",
    },
    {
      title: "Zusammenführen ohne Hochladen: PDF zusammenführen im Browser",
      body: "Mehrere PDFs hineinlegen, zum Sortieren ziehen, die kombinierte Datei herunterladen. Das Zusammenführen passiert lokal — deine Dateien werden im Arbeitsspeicher des Browsers verbunden, nie an einen Server geschickt.",
    },
    {
      title: "Teilen und Extrahieren ohne Hochladen",
      body: "PDF teilen und PDF-Seiten extrahieren erledigen Vorgänge auf Seitenebene in deinem Browser. Seiten festlegen, Ergebnis herunterladen. Praktisch, wenn du nur bestimmte Seiten eines sensiblen Dokuments verschicken musst.",
    },
    {
      title: "Konvertieren ohne Hochladen",
      body: "PDF in Word, Word in PDF, Bild in PDF, PDF in Bilder laufen alle im Browser. Die Umwandlung passiert lokal; die umgewandelte Datei landet in deinen Downloads.",
    },
    {
      title: "Unterschreiben ohne Hochladen",
      body: "PDF unterschreiben oder die PDF-Editor-App erfassen eine Unterschrift auf deinem Gerät. Die unterschriebene Datei bleibt lokal, bis du sie teilst. Keine Signaturplattform beteiligt.",
    },
    {
      title: "Überprüfe kein Hochladen mit den Browser-Entwicklertools",
      body: "Entwicklertools öffnen, Netzwerk-Tab, Datei hineinlegen. Ein echtes Tool ohne Hochladen zeigt keine große ausgehende POST-Anfrage. Siehst du eine, lädt das Tool trotz der Bezeichnung hoch.",
    },
  ],
  tips: [
    "Tools ohne Hochladen funktionieren offline, sobald die Seite geladen ist. Probier das aus — teste das Tool nach dem Laden mit ausgeschaltetem WLAN. Echte lokale Tools funktionieren trotzdem weiter.",
    "Sensible Dateien (finanziell, rechtlich, medizinisch) sollten standardmäßig Tools ohne Hochladen nutzen. Die Risikominderung ist real, auch wenn sie im Einzelfall gering wirkt.",
    "Vertrau Aussagen wie „wir speichern deine Datei nicht“ von hochladenden Tools nicht ungeprüft. Architektur schlägt Richtlinie.",
    "Mobile Apps, die lokal verarbeiten, sind meist die richtige Wahl ohne Hochladen auf dem Handy. Die PDF-Editor-App folgt diesem Muster unter iOS und Android.",
    "Browserbasierte Tools ohne Hochladen lassen sich automatisch überprüfen, weil ihre Verarbeitung in den Entwicklertools sichtbar ist. Nutze das, wenn du neue Tools bewertest.",
  ],
  mobileNote:
    "Die PDF-Editor-App ist das iOS/Android-Gegenstück zum browserbasierten Muster ohne Hochladen — die gesamte Verarbeitung passiert auf dem Gerät, kein Hochladen, kein Konto. Praktisch, wenn das Handy das naheliegende Gerät für den Ablauf ist (Unterschreiben, Scannen, schnelle Bearbeitungen).",
  faq: [
    {
      q: "Warum zählt „ohne Hochladen“?",
      a: "Weil Uploads Kopien deiner Datei auf Servern erzeugen, die du nicht kontrollierst. Selbst mit strengen Richtlinien passieren Server-Einbrüche. Tools ohne Hochladen beseitigen dieses Risiko allein durch ihre Architektur.",
    },
    {
      q: "Können Tools ohne Hochladen wirklich große PDFs komprimieren?",
      a: "Ja. Moderne Browser kommen mit Hunderten Megabyte problemlos zurecht. Die Verarbeitung übernimmt WebAssembly mit nahezu nativer Geschwindigkeit.",
    },
    {
      q: "Wie bestätige ich, dass ein Tool nichts hochlädt?",
      a: "Browser-Entwicklertools, Netzwerk-Tab, Datei hineinziehen. Keine große ausgehende Anfrage = kein Hochladen. Die Kontrolle ist direkt und sichtbar.",
    },
    {
      q: "Sind Tools ohne Hochladen kostenlos?",
      a: "Meist ja. Die Wirtschaftlichkeit von Tools ohne Hochladen unterscheidet sich von serverbasierten — minimale Hosting-Kosten —, sodass sie kostenlos bleiben können, ohne deine Daten zu Geld zu machen.",
    },
    {
      q: "Was, wenn ein Workflow doch einen Upload verlangt?",
      a: "Manche spezialisierten Aufgaben (hochgenaue OCR bei langen Dateien) brauchen weiterhin Serververarbeitung. Wähle dafür kostenpflichtige Tools mit ausdrücklichen Löschzusagen und schütze die Datei vorher mit einem Passwort.",
    },
  ],
  related: [
    { label: "PDF-Tools — browserbasiert, ohne Hochladen", path: "/pdf-tools" },
    { label: "Die besten kostenlosen PDF-Tools", path: "/guides/best-free-pdf-tools" },
    { label: "Kostenlose PDF-Tools im Browser", path: "/guides/free-browser-based-pdf-tools" },
    { label: "Sensible Dokumente nicht hochladen müssen", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "PDF-Tools — kostenlos, browserbasiert", path: "/pdf-tools" },
};

export default content;
