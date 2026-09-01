import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-avoid-uploading-sensitive-documents",
  h1: "Sensible Dokumente nicht hochladen müssen (praktische Alternativen)",
  description:
    "Wenn ein Workflow dich dazu verleitet, ein sensibles PDF hochzuladen, gibt es fast immer eine rein lokale Alternative. Die Aufgabenarten und das passende Tool ohne Hochladen für jede davon.",
  updated: "2026-05-29",
  intro: [
    "Bei jeder PDF-Aufgabe gibt es den Moment, in dem der erste Treffer in der Suche dich bittet, deine Datei hochzuladen. Komprimieren, zusammenführen, teilen, konvertieren, unterschreiben — zu jeder dieser Aufgaben gibt es Hunderte von Websites, die auf dem Hochladen-und-verarbeiten-Modell aufbauen. Bei gewöhnlichen Dateien ist das kein Problem. Bei sensiblen (Finanzunterlagen, Ausweisdokumente, Verträge, medizinische Unterlagen) ist es ein vermeidbares Risiko.",
    "Auf das Hochladen zu verzichten bedeutet nicht, auf moderne Tools zu verzichten. Es bedeutet, Tools zu wählen, die auf deinem Gerät laufen — in deinem Browser, in einer mobilen App, auf deinem Rechner. Für jede gängige PDF-Aufgabe gibt es mindestens eine rein lokale Option, die die Arbeit erledigt, ohne dass die Datei je einen fremden Server berührt.",
    "Diese Anleitung ist der praktische Ersatz: die Aufgabenarten, das rein lokale Tool für jede davon, und die wenigen Fälle, in denen lokale Verarbeitung den Bedarf noch nicht wirklich abdeckt.",
  ],
  steps: [
    {
      title: "Zum Komprimieren: ein browserbasiertes Tool nutzen",
      body: "PDF komprimieren aus dem Werkzeugkasten dieser Website läuft lokal. Es verarbeitet auch scan- oder fotolastige Dateien, ohne etwas hochzuladen. Prüfe das mit den Entwicklertools — keine große ausgehende Anfrage, sobald du die Datei hinzufügst.",
    },
    {
      title: "Zum Zusammenführen: ein browserbasiertes Tool nutzen",
      body: "PDF zusammenführen fügt Dateien lokal zusammen. Die zusammengeführte Datei landet in deinen Downloads; keine Kopie liegt auf einem Server. Dieselbe Architektur wie beim Komprimieren — lokal zuerst.",
    },
    {
      title: "Zum Teilen und Extrahieren: ein browserbasiertes Tool nutzen",
      body: "PDF teilen und PDF-Seiten extrahieren laufen auf deinem Gerät. Vorgänge auf Seitenebene sind mechanisch und passen perfekt zur lokalen Verarbeitung.",
    },
    {
      title: "Zum Konvertieren: ein browserbasiertes Tool nutzen",
      body: "PDF in Word, Word in PDF, Bild in PDF, PDF in Bilder — alle als browserbasierte Versionen verfügbar, die nichts hochladen. Die Umwandlung passiert direkt in deinem Browser-Tab.",
    },
    {
      title: "Zum Unterschreiben: eine lokale App nutzen",
      body: "PDF unterschreiben im Browser oder die PDF-Editor-App auf dem Handy. Eine gezeichnete Unterschrift, ohne Cloud-Signaturplattform. Die unterschriebene Datei bleibt auf deinem Gerät, bis du sie teilen möchtest.",
    },
    {
      title: "Bei Aufgaben, die wirklich Serverhilfe brauchen: ein kostenpflichtiges Tool mit klaren Zusagen",
      body: "Manche Abläufe (umfangreiche OCR auf langen Dokumenten, fortgeschrittene Schwärzung) profitieren noch von Serververarbeitung. Wähle dafür ein kostenpflichtiges Tool mit ausdrücklichen Zusagen zu Speicherfrist und Datenumgang — nicht ein kostenloses Tool mit vagen Formulierungen.",
    },
  ],
  tips: [
    "Suchergebnisse bevorzugen Tools, die für ihre Platzierung bezahlen. Der erste Treffer ist selten der datenschutzfreundlichste — prüfe, was du wirklich bekommst.",
    "Rein lokale Tools funktionieren offline. Ein Test ohne Internetverbindung ist eine schnelle Kontrolle, ob das Tool wirklich keinen Netzwerkzugriff für deine Datei braucht.",
    "Lass dich nicht von Tools täuschen, die „deine Datei nicht speichern“, zum Verarbeiten aber trotzdem einen Upload verlangen. Auch ein kurzes Zeitfenster ist bei hochsensiblem Material ein echtes Risiko.",
    "Mobile Apps, die lokal verarbeiten, erkennst du meist leicht — sie funktionieren nach der Installation auch ohne Internet. Die PDF-Editor-App folgt diesem Muster.",
    "Mach es dir zur Gewohnheit. Sobald rein lokale Tools deine Standardwahl sind, bleibt sensibles Material geschützt, ohne dass du jedes Mal neu darüber nachdenken musst.",
  ],
  mobileNote:
    "Auf dem Handy liegt die Versuchung nahe, einfach das PDF-Tool zu nutzen, das der App Store vorschlägt — viele davon laden hoch. Die PDF-Editor-App verarbeitet alles direkt auf dem Gerät, unter iOS und Android, sodass ein sensibles Dokument von der Kameraaufnahme bis zum unterschriebenen Ergebnis kommt, ohne je einen Server zu berühren.",
  faq: [
    {
      q: "Kann ich wirklich alle gängigen PDF-Aufgaben ohne Hochladen erledigen?",
      a: "Ja, für die alltäglichen Aufgaben: Komprimieren, Zusammenführen, Teilen, Konvertieren, Unterschreiben, Wasserzeichen, Neuanordnen, Extrahieren. Die Tools auf dieser Website decken das alles lokal ab. Manche fortgeschrittenen Vorgänge (vollständige OCR bei langen Dokumenten) brauchen manchmal noch Serverhilfe.",
    },
    {
      q: "Wie überprüfe ich, dass ein Tool nichts hochlädt?",
      a: "Browser-Entwicklertools, Netzwerk-Tab, Datei hineinlegen. Siehst du eine große ausgehende POST-Anfrage, lädt das Tool hoch. Wenn nicht, arbeitet es lokal. Der Unterschied ist sichtbar.",
    },
    {
      q: "Sind lokale Tools langsamer?",
      a: "Manchmal. Modernes WebAssembly macht lokale Verarbeitung bei den meisten Aufgaben konkurrenzfähig zu Serververarbeitung. Aufwendige Vorgänge bei großen Dateien können lokal länger dauern, aber bei sensiblem Material lohnt sich der Datenschutzgewinn meist trotzdem.",
    },
    {
      q: "Wie sieht es mit OCR aus — kann das lokal laufen?",
      a: "Einfache OCR ja; hochgenaue OCR bei langen Dokumenten nutzt oft noch Serververarbeitung. Wenn dir OCR wichtig ist, wähle Tools, die ausdrücklich angeben, wo die Verarbeitung stattfindet.",
    },
    {
      q: "Ist das übertrieben vorsichtig?",
      a: "Nicht bei sensiblem Material. Das Standardmodell „alles wird hochgeladen“ funktionierte, als Dokumente weniger sensibel und Datenpannen seltener waren. Beides hat sich geändert. Lokal zuerst ist heute eine sinnvolle Grundhaltung.",
    },
  ],
  related: [
    {
      label: "PDF-Apps im Vergleich zu Online-PDF-Tools",
      path: "/compare/pdf-app-vs-online-pdf-tools",
    },
    { label: "PDF-Sicherheit — mit Passwort schützen und verschlüsseln", path: "/pdf-security" },
    { label: "Sensible PDF-Dateien schützen", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "PDF-Dateien privat teilen", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Dokumenten-Workflows mit Datenschutz an erster Stelle", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "PDF-Sicherheit — mit Passwort schützen und verschlüsseln", path: "/pdf-security" },
};

export default content;
