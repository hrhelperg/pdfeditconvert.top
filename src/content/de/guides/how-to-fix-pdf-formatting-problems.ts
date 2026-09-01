import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-formatting-problems",
  h1: "PDF-Formatierungsprobleme lösen (Umbrüche, Ränder, Abstände)",
  description:
    "Wenn das Layout eines PDFs kaputt aussieht – Text verschiebt sich, Ränder stimmen nicht, Abstände sind durcheinander – liegt die Lösung meist im Ausgangsdokument, nicht im PDF. Der sauberste Weg zu einem guten Export.",
  updated: "2026-05-29",
  intro: [
    "Schlechte PDF-Formatierung lässt sich fast immer auf den Moment des Exports zurückführen. Das PDF selbst fließt nichts neu – es friert die Seite exakt so ein, wie sie beim Speichern war. Stimmen also Abstände nicht, sind Ränder falsch, oder bricht eine Tabelle über mehrere Seiten, hat schon die Quelldatei genau dieses Ergebnis erzeugt.",
    "Die Lösung besteht fast immer darin, zurück zur Quelle zu gehen – Word, Pages, Google Docs, ein Design-Tool –, das Layout anzupassen und erneut zu exportieren. Frustrierend, wenn die Quelle nicht dir gehört, aber der sauberste Weg. Die Alternativen – Umwandlung in Word, direkte Bearbeitung des PDFs oder ein „Reparieren“ mit einem anderen Anzeigeprogramm – verlieren jeweils etwas, das das Original noch hatte.",
    "Diese Anleitung geht die häufigen Formatierungssymptome durch und zeigt die realistische Lösung für jedes – inklusive der Arbeitsabläufe, die schon beim ersten Versuch ein sauberes PDF erzeugen.",
  ],
  steps: [
    {
      title: "Kläre, ob es ein Inhalts- oder ein Darstellungsproblem ist",
      body: "Öffne das PDF in zwei verschiedenen Anzeigeprogrammen. Zeigen beide dasselbe kaputte Layout, liegt das Problem in der Datei. Stellt eines es korrekt dar, hast du ein Anzeigeproblem, kein Formatierungsproblem.",
    },
    {
      title: "Korrigiere das Layout im Ausgangsdokument, nicht im PDF",
      body: "Öffne die Word-, Pages- oder Docs-Datei, korrigiere Ränder, Abstände oder Tabelle, und exportiere dann erneut als PDF. Die korrigierte Quelle erzeugt direkt ein korrektes PDF. Ein PDF zur Layout-Korrektur zu bearbeiten, arbeitet gegen das Format.",
    },
    {
      title: "Exportiere erneut mit explizit festgelegtem Papierformat",
      body: "Automatische Anpassungseinstellungen führen oft zu Überraschungen. Lege Papierformat (A4 oder Letter), Ränder (25 mm) und Ausrichtung schon in der Quellanwendung explizit fest, bevor du exportierst.",
    },
    {
      title: "Konvertiere nur bei umfangreichen Textänderungen in Word",
      body: "PDF zu Word holt den Text in deinem Browser zur erneuten Bearbeitung heraus. Die Umwandlung kostet etwas Layout – akzeptiere das als Preis für die zurückgewonnene Textbearbeitung. Exportiere nach dem Aufräumen wieder als PDF zum Teilen.",
    },
    {
      title: "Nutze Tools auf Seitenebene für strukturelle Korrekturen",
      body: "Stimmt nur bei einzelnen Seiten etwas nicht – ein falsch sortierter Scan, ein doppeltes Deckblatt, eine quer eingefügte Seite –, korrigieren PDF-Seiten neu anordnen, PDF-Seiten extrahieren und PDF drehen die Struktur, ohne die Textformatierung anzurühren.",
    },
    {
      title: "Exportiere vor dem Teilen erneut als PDF",
      body: "Ist das Layout in der Quelle korrigiert, exportiere frisch, statt ein bestehendes PDF nur erneut zu speichern. Der sauberste Export kommt direkt aus der Anwendung, die das Dokument erstellt hat.",
    },
  ],
  tips: [
    "Die Druckvorschau in Word oder Pages zeigt dasselbe Seitenumbruch-Verhalten wie später das PDF. Korrigiere schlechte Umbrüche vor dem Export, nicht danach.",
    "Ungünstig geteilte Tabellen sind ein Absatzformatierungs-Problem in der Quelle, kein PDF-Problem. Nutze „Zusammenhalten mit nächstem Absatz“, um die Kopfzeile an ihren Inhalt zu binden.",
    "Öffne ein PDF nicht zum Bearbeiten direkt in Word – Word wandelt es um, oft nicht gut. Nutze die ursprüngliche Quelle, wenn du sie hast, oder PDF zu Word nur, wenn nicht.",
    "Aus dem Web eingefügter Inhalt bringt oft versteckte Formatierung mit. Entferne sie vor dem Export (als reinen Text einfügen), um überraschende Rahmen und Farben im PDF zu vermeiden.",
    "Hast du nur das PDF und kannst nicht zur Quelle zurück, akzeptiere, dass die Layout-Korrektur nur teilweise gelingt. Priorisiere die Änderungen, die der Leserin oder dem Leser zuerst auffallen.",
  ],
  mobileNote:
    "Formatierungsprobleme am Handy stammen oft von Dokumenten, die am Desktop erstellt und mit dem falschen Zielpapierformat exportiert wurden. Die App PDF Editor lässt dich Seiten am Handy drehen, neu anordnen und zuschneiden – praktisch, um strukturelle Probleme zu beheben, auch wenn du die Quelle nicht korrigieren kannst.",
  faq: [
    {
      q: "Warum sieht mein PDF anders aus als die Word-Version?",
      a: "Meist wegen Schriftarten, Papierformat oder Druckbereich-Einstellungen beim Export. Ein erneuter Export mit explizit festgelegtem Papierformat und eingebetteten Schriftarten erzeugt ein PDF, das der Quelle entspricht.",
    },
    {
      q: "Kann ich Text im PDF bearbeiten, um Abstände zu korrigieren?",
      a: "Du kannst einzelne Zeichen und Wörter bearbeiten, aber ganze Absätze neu fließen zu lassen ist schwierig, weil PDFs Text als positionierte Blöcke behandeln. Korrigiere es nach Möglichkeit in der Quelle.",
    },
    {
      q: "Warum sieht meine PDF-zu-Word-Konvertierung kaputt aus?",
      a: "PDFs speichern Layout, keinen Fließtext. Die Konvertierung wandelt sie zurück in Fließtext, aber die strukturellen Hinweise fehlen dann. Rechne bei einer konvertierten Datei mit echtem Aufräumaufwand.",
    },
    {
      q: "Warum teilen sich meine Tabellen ungünstig über mehrere Seiten?",
      a: "Fast immer ein Absatzformatierungs-Problem in der Quelle. Die Einstellungen „Zusammenhalten mit nächstem Absatz“ und „Nicht trennen“ in Word beheben die meisten dieser Fälle schon vor dem Export.",
    },
    {
      q: "Beeinflusst Komprimieren die Formatierung?",
      a: "Nein. Komprimierung betrifft Bilder, nicht das Layout. Ein komprimiertes PDF hat dieselbe Formatierung wie das Original – nur kleinere eingebettete Bilder.",
    },
  ],
  related: [
    { label: "PDF zu Word – konvertieren für umfangreiche Textkorrekturen", path: "/pdf-to-word" },
    { label: "Word zu PDF – sauber neu exportieren", path: "/word-to-pdf" },
    { label: "PDF-Schriftartprobleme lösen", path: "/guides/how-to-fix-pdf-font-issues" },
    { label: "PDF-Druckprobleme lösen", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "PDF-Konverter – Word, JPG, PNG und zurück", path: "/pdf-converter" },
};

export default content;
