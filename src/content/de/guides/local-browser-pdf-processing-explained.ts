import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "local-browser-pdf-processing-explained",
  h1: "Lokale PDF-Verarbeitung im Browser erklärt (wie sie wirklich funktioniert)",
  description:
    "Wie ein PDF-Tool im Browser laufen kann, ohne deine Datei irgendwohin zu senden. Die Technik dahinter, die Kompromisse und wie du prüfst, ob ein Tool wirklich lokal arbeitet.",
  updated: "2026-05-29",
  intro: [
    "Es überrascht viele, dass ein Browser-Tab ein PDF komprimieren, zwei Dateien zusammenführen oder Seiten aus einem 200-seitigen Dokument extrahieren kann — alles, ohne irgendetwas auf einen Server hochzuladen. Der Browser fühlt sich wie ein Fenster zum Internet an, nicht wie ein Ort, an dem aufwendige Arbeit passiert. Aber moderne Browser können jede Menge Code direkt auf deinem Rechner ausführen, und PDF-Verarbeitung ist genau die Art von Arbeit, die dazu passt.",
    "Die Technik hinter lokalen PDF-Tools im Browser ist JavaScript und WebAssembly, die in deinem Browser laufen und direkt an der Datei arbeiten, die du bereitstellst. JavaScript liest die Datei ein, verändert sie im Arbeitsspeicher deines Browsers und schreibt sie als neue Datei zurück, die du herunterladen kannst — alles, ohne dass ein einziger Netzwerkaufruf den Inhalt deiner Datei transportiert.",
    "Diese Anleitung erklärt, wie das tatsächlich funktioniert, warum es von Haus aus sicher ist, wo die Grenzen liegen (es gibt ein paar echte) und wie du prüfst, ob ein Tool, das du in Betracht ziehst, wirklich lokal arbeitet. Nichts Exotisches — die Technik ist ausgereift.",
  ],
  steps: [
    {
      title: "Verstehe den grundlegenden Ablauf",
      body: "Du ziehst eine Datei auf die Seite. JavaScript liest sie in den Arbeitsspeicher des Browsers ein. JavaScript- oder WebAssembly-Code verändert sie (komprimiert, führt zusammen, teilt). Das Ergebnis wird als neue Datei zurückgeschrieben, die du herunterlädst. Kein Hochladen, kein Serverkontakt für die Datei selbst.",
    },
    {
      title: "Verstehe, was das privat macht",
      body: "Der Server liefert den JavaScript-Code (das Tool selbst), sieht aber nie die Daten, die der Code verarbeitet. Derselbe Browser-Tab, der das Tool herunterlädt, führt es dann lokal an deiner Datei aus. Die Architektur trennt die Auslieferung des Codes von der Datenverarbeitung.",
    },
    {
      title: "Überprüfe es mit den Browser-Entwicklertools",
      body: "Öffne die Entwicklertools, den Netzwerk-Tab, und lege deine Datei hinein. Ein echtes lokales Tool zeigt keine große ausgehende Anfrage, sobald du die Datei hinzufügst. Ein hochladendes Tool schickt die Datei als mehrere Megabyte große POST-Anfrage. Der Unterschied ist sichtbar.",
    },
    {
      title: "Erkenne die Grenzen ehrlich an",
      body: "Lokale Verarbeitung ist durch Arbeitsspeicher und Prozessor deines Browsers begrenzt. Sehr große Dateien (Hunderte Seiten, mehrere Gigabyte) können ins Stocken geraten; fortgeschrittene Vorgänge (vollständige OCR auf langen Dokumenten) brauchen manchmal Serverunterstützung. Browserbasierte Tools eignen sich am besten für den alltäglichen Gebrauch.",
    },
    {
      title: "Prüfe, dass keine Telemetrie Daten preisgibt",
      body: "Manche Tools protokollieren Analyseereignisse mit Metadaten (Seitenzahl, Dateigröße). Das ist etwas anderes als ein Leck beim Inhalt — und die Analyse-Aufrufe sind im selben Netzwerk-Tab sichtbar. Unterscheide Inhalt von Metadaten.",
    },
    {
      title: "Betrachte den Browser als Vertrauensgrenze",
      body: "Sobald deine Datei im Browser-Tab ist, befindet sie sich weiterhin auf deinem Gerät. Die Verarbeitungs-Tools auf dieser Website nutzen genau das: Sie erledigen ihre Arbeit im Tab und senden deine Datei nie hinaus — Datenschutz entsteht dadurch von selbst.",
    },
  ],
  tips: [
    "WebAssembly übernimmt in modernen Browsern die aufwendige Arbeit bei der PDF-Verarbeitung — mit nahezu nativer Geschwindigkeit. Deshalb haben lokale PDF-Tools bei der Leistung mit Desktop-Anwendungen gleichgezogen.",
    "Schließt du den Browser-Tab, wird die Datei aus dem Arbeitsspeicher gelöscht. Lokale Tools hinterlassen keine Kopie.",
    "Lokale Tools funktionieren offline, sobald die Seite geladen ist — eine nützliche Bestätigung dafür, dass die Datei nicht hochgeladen wird.",
    "Datenschutzaussagen sollten überprüfbar sein. Die Entwicklertools liefern diese Überprüfung — du musst Marketingtexten nicht einfach glauben.",
    "Browserbasiert ist nicht dasselbe wie serverlos. Manche „browserbasierten“ Tools laden deine Datei trotzdem hoch — nur die Oberfläche läuft im Browser. Prüfe den Netzwerkverkehr.",
  ],
  mobileNote:
    "Mobile Browser führen dieselben lokalen JavaScript- und WebAssembly-Tools aus wie Desktop-Browser. Die PDF-Editor-App nutzt eine ähnliche Architektur: Die gesamte Verarbeitung passiert direkt auf dem Gerät, ohne Hochladen — iPhone- und Android-Nutzerinnen bekommen dieselben Datenschutzgarantien.",
  faq: [
    {
      q: "Wie läuft PDF-Verarbeitung im Browser ab?",
      a: "JavaScript und WebAssembly lesen deine Datei in den Arbeitsspeicher des Browser-Tabs ein, verändern sie und schreiben das Ergebnis als Download zurück. Der Server liefert den Code, sieht die Datei aber nie.",
    },
    {
      q: "Ist lokale Browser-Verarbeitung wirklich privat?",
      a: "Ja, durch die Architektur selbst. Die Datei verlässt den Tab nicht. Ein lokales Tool könnte nur durch einen Fehler oder einen versteckten Upload etwas preisgeben — und das würden die Entwicklertools zeigen.",
    },
    {
      q: "Wie groß darf eine Datei sein?",
      a: "Moderne Browser kommen problemlos mit PDFs bis zu einigen Hundert Megabyte zurecht. Darüber hinaus stößt du je nach Gerät womöglich an Speichergrenzen.",
    },
    {
      q: "Funktioniert das offline?",
      a: "Ja, sobald die Seite geladen ist. Die Verarbeitung passiert lokal, ein Netzwerk wird nicht gebraucht. Das ist ein nützlicher Test, ob ein Tool wirklich lokal arbeitet.",
    },
    {
      q: "Warum funktioniert nicht jedes PDF-Tool so?",
      a: "Manche Vorgänge (echte OCR auf langen Dokumenten, bestimmte Komprimierungen) sind auf einem Server noch schneller. Viele Tools hängen außerdem von einem serverseitigen Geschäftsmodell ab. Browserbasierte Tools sind für die meisten Alltagsaufgaben inzwischen eine ernsthafte Alternative geworden.",
    },
  ],
  related: [
    { label: "PDF-Tools — browserbasiert, ohne Hochladen", path: "/pdf-tools" },
    { label: "Browserbasierte PDF-Tools im Vergleich zu Upload-Tools", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Vorteile der Dokumentenverarbeitung im Browser", path: "/guides/browser-based-document-processing-benefits" },
    { label: "Sind Online-PDF-Tools sicher?", path: "/guides/are-online-pdf-tools-safe" },
  ],
  parentHub: { label: "PDF-Tools — kostenlos, browserbasiert", path: "/pdf-tools" },
};

export default content;
