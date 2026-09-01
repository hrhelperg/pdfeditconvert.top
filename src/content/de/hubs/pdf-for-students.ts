import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-students",
  hero: {
    eyebrow: "PDF for Students",
    h1: "PDF-Werkzeuge, die zum echten Lernalltag passen.",
    highlight: "echten",
    lead: "Vorlesungsfolien kommentieren, Lektüre markieren, Fachartikel zusammenführen, Lehrbuchseiten scannen und Formulare unterschreiben — vom Handy oder Tablet, das du sowieso schon hast.",
    primaryCta: { label: "App öffnen", href: SITE.app.appStore },
  },
  problem: {
    heading: "Warum PDFs im Studienalltag immer im Mittelpunkt stehen",
    paragraphs: [
      "Dozenten stellen Foliensätze als PDF bereit. Lektüresammlungen kommen als PDF. Aufgabenstellungen sind PDFs. Modulhandbücher sind PDFs. Trotzdem lässt der Standard-Viewer auf dem Handy weder Markierungen noch Kommentare noch eine ordentliche Organisation zu — und viele Studierende weichen stattdessen darauf aus, Seiten in die Notizen-App zu fotografieren, wobei Durchsuchbarkeit, Struktur und der Weg zurück zur Quelle verloren gehen.",
      "Ein richtiger mobiler PDF-Editor lässt Studierende mit Lektüre so umgehen wie mit einem gedruckten Lehrbuch — Markierungen, Randnotizen, Lesezeichen — aber durchsuchbar und teilbar. Dieselben kommentierten Texte öffnen sich auf jedem Gerät, sodass die Arbeit vom Bus auch in der Bibliothek noch da ist.",
      "Kombiniert mit einem Stift auf einem Tablet kann dieser Aufbau den größten Teil der handschriftlichen Notizen zu Studienmaterial ersetzen. Der Preis: die Kosten der App (für die Grundfunktionen kostenlos) und die Zeit für die einmalige Einrichtung.",
    ],
  },
  features: {
    heading: "Gemacht für Lernsessions",
    items: [
      {
        icon: "Highlighter",
        title: "Markieren und kommentieren",
        body: "Gelbe Markierungen, handgeschriebene Notizen, Kommentare, Unterstreichungen — genau das, was du auf Papier machen würdest, nur durchsuchbar.",
      },
      {
        icon: "Bookmark",
        title: "Lesezeichen und Gliederung",
        body: "Markiere Kapitel oder Abschnitte, zu denen du zurückkehren willst. Springe beim Schreiben einer Hausarbeit mit einem Tippen dazwischen hin und her.",
      },
      {
        icon: "Combine",
        title: "Lektüre zusammenführen",
        body: "Führe die Artikel der Woche zu einem Dokument zusammen, zum Offline-Lesen im Zug, im Flugzeug oder auf dem Arbeitsweg.",
      },
      {
        icon: "ScanLine",
        title: "Lehrbuchseiten scannen",
        body: "Erfasse Seiten aus physischen Büchern als durchsuchbare PDFs. Nützlich, um in Hausarbeiten aus Büchern zu zitieren, die es nur gedruckt gibt.",
      },
      {
        icon: "FileSignature",
        title: "Formulare sofort unterschreiben",
        body: "BAföG-Anträge, Anwesenheitslisten, Einschreibebestätigungen — unterschreiben und zurückschicken, ohne zu drucken.",
      },
      {
        icon: "Layers",
        title: "Nach Fach organisieren",
        body: "Gruppiere Dokumente nach Veranstaltung. Verschiebe sie über das Semester hinweg, ohne deine Markierungen zu verlieren.",
      },
    ],
  },
  steps: {
    heading: "Ein einfacher Lernablauf",
    items: [
      {
        title: "Sammle die Lektüre der Woche",
        body: "Lade jedes PDF aus dem Portal deiner Hochschule, aus Canvas, Moodle oder per E-Mail herunter oder teile es direkt mit PDF Editor.",
      },
      {
        title: "Führe sie zu einer Datei pro Semesterwoche zusammen",
        body: "Nutze das Werkzeug Zusammenführen, um sie zu „Woche 3 Lektüre — Mikroökonomie.pdf“ zu kombinieren, für die Offline-Nutzung.",
      },
      {
        title: "Kommentiere beim Lesen",
        body: "Markiere wichtige Passagen, füge Randnotizen hinzu, setze Kommentare an Stellen mit offenen Fragen. Notizen speichern sich direkt an Ort und Stelle.",
      },
      {
        title: "Nutze deine Markierungen beim Schreiben von Hausarbeiten",
        body: "Springe über das Lesezeichen-Panel zurück zu markierten Abschnitten, wenn du Quellen zitierst. Der Text unter der Markierung ist markierbar und kopierbar.",
      },
      {
        title: "Scanne und kombiniere handschriftliche Notizen",
        body: "Wenn du auf Papier Notizen gemacht hast, scanne sie in dieselbe PDF-Editor-Bibliothek, damit alles an einem durchsuchbaren Ort liegt.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Lernen, wo auch immer du bist",
    body: "Vorlesung, Bibliothek, Zug, Café — der Ort, an dem Studierende lesen, ist selten ein Schreibtisch. Ein für das Handy gedachter PDF-Editor bedeutet, dass dieselbe kommentierte Version dabei ist, wo auch immer du gerade bist. Die Stunde, die du sonst beim Warten auf den Bus verloren hättest, wird zu produktiver Lesezeit.",
  },
  faq: [
    {
      q: "Ist die App für Studierende kostenlos?",
      a: "Ja. Grundlegendes Kommentieren, Zusammenführen, Scannen und Unterschreiben ist kostenlos, ohne Tageslimit. Einige Pro-Funktionen (Stapel-OCR, erweiterte Verschlüsselung) sind kostenpflichtig, aber die kostenlose Stufe deckt alles ab, was Studierende typischerweise brauchen.",
    },
    {
      q: "Synchronisieren sich meine Markierungen zwischen Geräten?",
      a: "Wenn du die Datei in iCloud Drive, Google Drive oder einem beliebigen Cloud-Anbieter speicherst, synchronisieren sich Änderungen überall, wo dieselbe Datei geöffnet wird. Rein lokale Dateien bleiben auf dem Gerät, auf dem sie bearbeitet wurden.",
    },
    {
      q: "Darf ich eine Lehrbuchseite legal scannen?",
      a: "Für den persönlichen Gebrauch beim Lernen ist das in den meisten Rechtsordnungen erlaubt (Regeln zum Zitatrecht gestatten in der Regel kurze Auszüge zu Studienzwecken). Beim Weiterverbreiten gescannter Kopien ist Vorsicht geboten — das ist eine andere Frage und oft nicht zulässig.",
    },
    {
      q: "Funktioniert die App gut auf iPads und Android-Tablets?",
      a: "Ja. Tablets mit Stifteingabe (Apple Pencil, S Pen) fühlen sich beim Kommentieren deutlich näher an Papier an als reine Fingereingabe auf dem Handy. Wenn du ein Tablet hast, nutze es für Lesesessions.",
    },
    {
      q: "Kann ich meine kommentierten Notizen exportieren?",
      a: "Ja. Das kommentierte PDF lässt sich unverändert teilen (mit fest eingebauten Kommentaren) oder zu einem finalen PDF mit fest eingebetteten Kommentaren speichern. Du kannst auch nur den markierten Text für Zitate extrahieren.",
    },
  ],
  related: [
    {
      label: "So teilst du Lernnotizen als PDF",
      path: "/guides/how-to-share-study-notes-as-pdf",
    },
    {
      label: "Die beste PDF-App für Studierende",
      path: "/guides/best-pdf-app-for-students",
    },
    { label: "Scan to PDF", path: "/scan-to-pdf" },
  ],
  appCta: {
    heading: "Lerne mit einem echten PDF-Werkzeugkasten.",
    sub: "Kostenlos für iOS und Android. Markierungen synchronisieren über iCloud oder Drive.",
  },
};

export default content;
