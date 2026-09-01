import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "privacy-first-document-workflows",
  h1: "Dokumenten-Workflows mit Datenschutz an erster Stelle (durchgehend ohne Hochladen)",
  description:
    "Ein kompletter Dokumenten-Workflow – erfassen, bearbeiten, unterschreiben, senden, archivieren –, der Dateien auf deinen Geräten hält und aus fremden Servern heraus. Die realistische Umsetzung und die passenden Tools.",
  updated: "2026-05-29",
  intro: [
    "Die meisten Dokumenten-Workflows lecken. Du scannst ein sensibles Papier mit einer App, lädst es bei einer Website zum Komprimieren hoch, schickst es durch ein „Verbesserungs“-Tool eines Drittanbieters — und am Ende halten drei oder vier Server Kopien von etwas, das eigentlich nur dir gehören sollte. Jeder Schritt für sich ist bequem; die Datenschutzkosten summieren sich unsichtbar zu etwas Großem.",
    "Ein Workflow mit Datenschutz an erster Stelle lehnt moderne Tools nicht ab — er wählt einfach die aus, die deine Dateien nicht bewegen. Die Erfassung passiert auf deiner Kamera. Komprimierung und Bearbeitung passieren in deinem Browser. Das Unterschreiben passiert in einer App auf deinem Handy. Die Übertragung läuft über einen Kanal, dem du vertraust. Zu keinem Zeitpunkt liegt das Dokument auf dem Server eines Fremden.",
    "Diese Anleitung beschreibt die Struktur von Anfang bis Ende, die passenden Tools für jeden Schritt, und wo lokale Verarbeitung wirklich an ihre Grenzen stößt (das sind weniger Fälle, als die meisten denken). Es ist der realistische Workflow mit Datenschutz an erster Stelle, nicht der absolutistische.",
  ],
  steps: [
    {
      title: "Erfassung: lokal mit dem Handy scannen",
      body: "PDF scannen auf dem Handy führt Kamera und Seitenerkennung direkt auf dem Gerät aus. Kein Hochladen, keine Cloud-Verarbeitung. Das PDF, das du erstellst, bleibt lokal, bis du dich zum Teilen entscheidest.",
    },
    {
      title: "Bearbeiten und aufräumen im Browser-Tab",
      body: "PDF komprimieren, PDF-Seiten neu anordnen, PDF-Seiten extrahieren, PDF drehen, Wasserzeichen zu PDF hinzufügen — alle laufen im Browser. JavaScript auf deinem Rechner liest die Datei; der Server sieht den Inhalt nie.",
    },
    {
      title: "Mit echter Unterschrift lokal unterschreiben",
      body: "PDF unterschreiben oder die PDF-Editor-App erfassen eine gezeichnete Unterschrift direkt auf deinem Gerät und betten sie in die Datei ein. Keine Signaturplattform eines Drittanbieters sieht das Dokument.",
    },
    {
      title: "Über einen vertrauenswürdigen Kanal teilen",
      body: "AirDrop, Signal, verschlüsselte E-Mail, Ende-zu-Ende-verschlüsselte Nachrichtendienste. Der Kanal verschlüsselt die Übertragung; die Empfängerin erhält die Datei, ohne dass sie durch einen Mittler läuft, der mitlesen könnte.",
    },
    {
      title: "Auf verschlüsseltem Speicher archivieren",
      body: "Lokale Festplatte mit vollständiger Verschlüsselung oder ein Zero-Knowledge-Cloud-Backup. Speichere sensible PDFs nicht in gewöhnlichem Cloud-Speicher — dort liest ein Server deine Dateien mit.",
    },
    {
      title: "Regelmäßig prüfen und löschen",
      body: "Geh vierteljährlich deine sensiblen PDFs durch. Lösche, was du nicht mehr brauchst. Jede aufbewahrte sensible Datei ist ein kleines fortlaufendes Risiko; ein kleinerer Bestand verkleinert die Angriffsfläche.",
    },
  ],
  tips: [
    "Erfassen, Bearbeiten und Unterschreiben können alle auf einem einzigen Gerät passieren. Je weniger Gerätewechsel, desto kleiner die Angriffsfläche.",
    "Prüfe, ob ein „browserbasiertes“ Tool wirklich lokal läuft, bevor du ihm vertraust. Der Netzwerk-Tab der Entwicklertools ist die schnellste Kontrolle.",
    "Verschlüssele sensible PDFs mit Passwort, selbst wenn du über verschlüsselte Kanäle teilst. Mehrere Schutzschichten schaden nie.",
    "Vermeide „Link versenden“-Filesharing-Dienste bei sensiblem Material. Der Link ist nur ein Verweis auf den Server; die Datei liegt auf der Festplatte eines Fremden.",
    "Drucke sensible PDFs nur, wenn es sein muss. Die Druckerwarteschlange und das Papier sind beides zusätzliche Kopien, die du im Blick behalten musst.",
  ],
  mobileNote:
    "Workflows mit Datenschutz an erster Stelle sind auf dem Handy einfacher, als viele denken. Die PDF-Editor-App übernimmt Erfassen, Bearbeiten, Unterschreiben und Teilen lokal unter iOS und Android, sodass ein sensibles Dokument vom Papier bis zur Empfängerin gelangt, ohne je einen fremden Server zu berühren.",
  faq: [
    {
      q: "Kann ein echter Workflow wirklich komplett lokal bleiben?",
      a: "Für die meisten Schritte ja. Erfassen, Komprimieren, Bearbeiten, Unterschreiben und gewöhnliche Übertragung können alle ohne Hochladen passieren. Manche Vorgänge (hochwertige OCR, fortgeschrittene Schwärzung) brauchen manchmal Serverunterstützung — wähle solche Tools sorgfältig, falls du sie brauchst.",
    },
    {
      q: "Ist das nicht alles übervorsichtig?",
      a: "Nicht bei sensiblem Material. Der Alles-hochladen-Workflow funktionierte, als Dokumente weniger sensibel und Datenpannen seltener waren. Beides hat sich geändert. Der Workflow mit Datenschutz an erster Stelle braucht nicht mehr Zeit, sobald er zur Gewohnheit geworden ist.",
    },
    {
      q: "Woran erkenne ich, dass ein Browser-Tool wirklich lokal läuft?",
      a: "Öffne die Entwicklertools, den Netzwerk-Tab, und füge eine Datei hinzu. Siehst du keinen großen ausgehenden Upload, verarbeitet das Tool lokal. Die Tools auf dieser Website folgen diesem Muster.",
    },
    {
      q: "Wie sieht es mit Backups aus?",
      a: "Ein Zero-Knowledge-Cloud-Backup (der Anbieter kann deine Dateien nicht lesen) ist in Ordnung. Ein gewöhnliches Cloud-Backup sensibler PDFs ist nicht privat — der Anbieter kann alles lesen.",
    },
    {
      q: "Wo bricht dieser Workflow?",
      a: "An zwei Stellen: wenn ein Workflow eine bestimmte kostenpflichtige Plattform verlangt (etwa in regulierten Branchen), und wenn die Empfängerin auf ihrer Seite einen hochladenden Workflow nutzt. Datenschutz hängt von beiden Seiten ab.",
    },
  ],
  related: [
    { label: "PDF-Tools — browserbasiert, ohne Hochladen", path: "/pdf-tools" },
    { label: "PDF-Tools mit Datenschutz an erster Stelle", path: "/guides/privacy-first-pdf-tools" },
    { label: "Lokale PDF-Verarbeitung im Browser erklärt", path: "/guides/local-browser-pdf-processing-explained" },
    { label: "Vorteile der Dokumentenverarbeitung im Browser", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "PDF-Tools — kostenlos, browserbasiert", path: "/pdf-tools" },
};

export default content;
