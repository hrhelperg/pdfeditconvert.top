import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx-for-business",
  h1: "PDF oder DOCX im Unternehmen (Verträge, Berichte, Verteilung)",
  description:
    "Warum Geschäftsdokumente fast immer als PDF verschickt werden, aber als DOCX weiterleben. Das richtige Format in jeder Phase im Leben eines Vertrags, Berichts oder einer Rechnung.",
  updated: "2026-05-29",
  intro: [
    "Geschäftsdokumente durchlaufen einen recht vorhersehbaren Lebenszyklus. Sie werden in Word (DOCX) entworfen, in Word überprüft und bearbeitet, in Word finalisiert und dann als PDF exportiert für Auslieferung, Unterschrift, Archiv und Verteilung. Dieselbe Datei existiert in verschiedenen Phasen in zwei Formaten, und das falsche Format zur falschen Phase zu nutzen ist die Quelle der meisten Reibung.",
    "DOCX ist das Arbeitsformat, weil es bearbeitbar, kollaborationsfreundlich ist und Änderungen gut nachverfolgt. PDF ist das Auslieferungsformat, weil es das Layout festschreibt, auf jedem Gerät identisch aussieht, elektronische Unterschriften unterstützt und der universelle Standard für archivierte Geschäftsdokumente ist.",
    "Diese Anleitung geht den Lebenszyklus Phase für Phase durch — wann welches Format, wie du sauber zwischen ihnen wechselst, und die häufigen Fehler, die Unternehmen machen, wenn sie das falsche Format zum falschen Zeitpunkt verschicken.",
  ],
  steps: [
    {
      title: "Entwirf in DOCX, wo die Bearbeitung passiert",
      body: "Microsoft Word, Google Docs (DOCX-Export), Pages → DOCX. Das Format unterstützt echte Bearbeitung, Kommentare, Änderungsverfolgung, Arbeit mit mehreren Autorinnen. PDF kann das nicht, auch wenn manche Tools es vortäuschen.",
    },
    {
      title: "Verhandle Verträge in DOCX mit Änderungsverfolgung",
      body: "Vertragsänderungen gehören ins DOCX-Format. Die Gegenseite sieht, was du geändert hast, kommentiert jede Stelle und liefert einen Gegenvorschlag. Es gibt zwar Tools zur Änderungsverfolgung in PDF, sie sind aber langsamer und weniger kollaborativ.",
    },
    {
      title: "Exportiere als PDF, sobald die Version final ist",
      body: "Word in PDF in deinem Browser erzeugt einen sauberen Export mit eingebetteten Schriftarten und stabilem Layout. Das ist die Version, die an die Kundin geht, unterschrieben wird und im Archiv landet.",
    },
    {
      title: "Unterschreibe und liefere als PDF",
      body: "Unterschriften gehören ans PDF, nicht ans DOCX. PDF unterschreiben oder die PDF-Editor-App erfassen die Unterschrift auf dem gesperrten PDF; die DOCX-Quelle bleibt als bearbeitbarer Nachweis erhalten.",
    },
    {
      title: "Archiviere das PDF, behalte das DOCX",
      body: "PDF ist der verbindliche Nachweis dessen, was ausgeliefert oder unterschrieben wurde. DOCX bewahrst du auf, falls du später ein verwandtes Dokument brauchst. Beide haben ihren Platz — verwechsle sie nicht.",
    },
    {
      title: "Wandle PDF nur zurück in DOCX, wenn es sein muss",
      body: "PDF in Word gewinnt Text aus einem PDF zurück, wenn du die Quelldatei nicht hast. Das Ergebnis ist ungefähr — rechne mit Layout-Nacharbeit. Behandle es als Notlösung, nicht als Workflow.",
    },
  ],
  tips: [
    "Verschicke das DOCX nicht an eine Kundin, außer sie will es ausdrücklich. Die PDF-Version ist das, worauf sich die Vereinbarung bezieht; das DOCX ist deine Arbeitsquelle.",
    "Verfolge Änderungen nur im DOCX. Es gibt zwar Anmerkungs-Tools für PDF, sie ersetzen aber keine echte Änderungsverfolgung.",
    "Bette Schriftarten beim PDF-Export ein. Ein PDF, das auf dem Rechner der Kundin anders aussieht, wirkt unprofessionell.",
    "Komprimiere das PDF für E-Mail oder Portal-Upload. Die DOCX-Quelle braucht meist keine Komprimierung, sie ist klein. Das PDF oft schon.",
    "Bewahre beide Formate im Projektordner auf. Das PDF in /final/, das DOCX in /entwuerfe/ oder /quelle/.",
  ],
  mobileNote:
    "Handys übernehmen oft die späten Momente der Geschäfts-PDF-Arbeit — einen Vertrag unterschreiben, einen Bericht komprimieren, die finale Version verschicken. Die PDF-Editor-App deckt das alles unter iOS und Android ab und ergänzt so die vorherige DOCX-Arbeit am Desktop.",
  faq: [
    {
      q: "Warum nicht einfach PDF für alles verwenden?",
      a: "PDF unterstützt keine echte Bearbeitung, Änderungsverfolgung oder Zusammenarbeit mehrerer Autorinnen. Für den Entwurf ist DOCX schlicht besser geeignet.",
    },
    {
      q: "Warum nicht einfach auch DOCX zur Auslieferung nutzen?",
      a: "DOCX wird je nach Version und Gerät unterschiedlich dargestellt. Kundinnen sehen dann ein anderes Layout, als du beabsichtigt hast. PDF friert das Erscheinungsbild fest.",
    },
    {
      q: "Sollten Verträge als PDF oder DOCX verschickt werden?",
      a: "Finale Verträge: unterschriebenes PDF. Verhandlungsentwürfe: DOCX mit Änderungsverfolgung. Unterschiedliche Werkzeuge für unterschiedliche Phasen.",
    },
    {
      q: "Wie sieht es mit Archiven aus — DOCX oder PDF?",
      a: "PDF, als Nachweis dessen, was ausgeliefert oder unterschrieben wurde. Behalte auch das DOCX zur Referenz, aber das PDF ist die verbindliche Archivkopie.",
    },
    {
      q: "Wann ergibt PDF in Word Sinn?",
      a: "Wenn du ein PDF bearbeiten musst und die Quelldatei nicht hast. Rechne mit Layout-Nacharbeit — die Umwandlung ist ungefähr.",
    },
  ],
  related: [
    { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
    { label: "Word in PDF — saubere Exporte für die Verteilung", path: "/word-to-pdf" },
    { label: "PDF in Word — bearbeitbaren Text zurückgewinnen", path: "/pdf-to-word" },
    { label: "PDF oder DOCX — vollständiger Funktionsvergleich", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
};

export default content;
