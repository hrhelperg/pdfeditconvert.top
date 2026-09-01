import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blank",
  h1: "Warum ist mein PDF leer? Echte Ursachen und wie du es rettest",
  description:
    "Ein PDF zu öffnen und leere Seiten vorzufinden ist beunruhigend. Die gute Nachricht: Der Inhalt ist fast immer noch da. Die schlechte: Die Ursache lässt sich nicht sofort erraten.",
  updated: "2026-05-29",
  intro: [
    "Ein PDF zu öffnen und eine leere Seite vor sich zu haben, ist beunruhigend. Du erwartest Text, Diagramme, unterschriebene Verträge – und bekommst nichts. Die gute Nachricht: Der Inhalt steckt fast immer noch in der Datei. Die schlechte: Die Ursache kann mehrere Gründe haben, und du musst erst herausfinden, welcher zutrifft, bevor du sie beheben kannst.",
    "Leere PDFs entstehen meist durch einen Darstellungsfehler (das Anzeigeprogramm stolpert über ein bestimmtes Element), einen Schriftartfehler (der Text ist technisch vorhanden, verweist aber auf ein Zeichen, das niemand darstellen kann), einen Scan- oder Aufnahmefehler (die Quelle hat leere Seiten erzeugt) oder ein Problem mit versteckten Ebenen. Nur in seltenen Fällen ist die Datei wirklich leer.",
    "Diese Anleitung geht die Diagnosen in der Reihenfolge durch, in der sie sich am schnellsten prüfen lassen, und führt dich dann zur passenden Lösung. Die meisten leeren PDFs werden mit einem erneuten Export oder einem anderen Anzeigeprogramm wieder lesbar.",
  ],
  steps: [
    {
      title: "Öffne die Datei zuerst in einem anderen Anzeigeprogramm",
      body: "Probiere den integrierten Viewer von Chrome, Vorschau unter macOS oder einen mobilen Reader. Zeigt einer davon den Inhalt, liegt das Problem an deinem ursprünglichen Anzeigeprogramm – und die Datei ist in Ordnung.",
    },
    {
      title: "Vergleiche die Dateigröße mit deiner Erwartung",
      body: "Ein wirklich leeres PDF ist winzig – nur wenige KB groß. Ein scheinbar leeres PDF mit mehreren Megabyte enthält so gut wie sicher Inhalt, der bei dir nur nicht dargestellt wird.",
    },
    {
      title: "Achte auf Sicherheits- oder Berechtigungsmarkierungen",
      body: "Manche PDFs werden mit einer Markierung für „geschützte Ansicht“ oder Signatur exportiert, die bestimmte Anzeigeprogramme dazu bringt, Inhalte zu verbergen, bis eine Berechtigung erteilt wird. Speicherst du eine ungeschützte Kopie aus einem weniger strengen Anzeigeprogramm, ist das Problem meist behoben.",
    },
    {
      title: "Exportiere die Datei erneut über „Drucken als PDF“",
      body: "Öffne die Datei in einem beliebigen Anzeigeprogramm, das den Inhalt zeigt, und nutze „Drucken → Als PDF sichern“ (unter Windows: Microsoft Print to PDF). Das baut die Seitendarstellung neu auf und behebt die meisten schriftartbedingten Leerseiten.",
    },
    {
      title: "Bei einem Scan: mit anderen Einstellungen erneut scannen",
      body: "Leere gescannte Seiten entstehen meist durch einen Einzug, der zwei Seiten gleichzeitig gezogen hat, eine zu geringe Kontrasteinstellung oder einen Handy-Scan, der auf die falsche Ebene fokussiert hat. Der Ablauf In PDF scannen mit automatischer Kantenerkennung vermeidet die meisten dieser Fehler.",
    },
    {
      title: "Exportiere einzelne Seiten als Bilder, um es zu bestätigen",
      body: "PDF zu Bildern exportiert jede Seite als PNG direkt in deinem Browser. Zeigen die exportierten PNGs Inhalt, liegt das Problem an deinem Anzeigeprogramm. Sind sie wirklich leer, ist die Seite in der Datei tatsächlich leer.",
    },
  ],
  tips: [
    "Ein leeres PDF mit mehreren Megabyte hat irgendwo Inhalt – probiere weiter verschiedene Anzeigeprogramme und Re-Exporte, bevor du davon ausgehst, dass er verloren ist.",
    "Hellgrauer Text auf Weiß kann auf dem Handy-Display bei direktem Sonnenlicht wie „leer“ wirken. Erhöhe die Helligkeit oder kehre die Farben um, bevor du annimmst, die Seite sei tatsächlich leer.",
    "Dateien aus Apps mit eingeschränkter Barrierefreiheit betten manchmal alles in eine einzige Ebene ein, die neuere Anzeigeprogramme ignorieren. „Drucken als PDF“ bettet die Ebene fest in die Seite ein.",
    "Kommt ein Vertrag mit leeren Unterschriftsseiten zurück, hat die unterzeichnende Person wahrscheinlich ein Signatur-Tool benutzt, das echte Felder durch leere Anmerkungen ersetzt hat – bitte um eine neu unterschriebene Kopie mit einem anderen Tool.",
    "Bearbeite oder kombiniere eine leer dargestellte Datei nicht weiter, bevor du die Ursache kennst. Wenn du auf einer fehlerhaften Darstellung aufbaust, wird die neue Datei nur noch kaputter.",
  ],
  mobileNote:
    "Mobile Anzeigeprogramme sind manchmal strenger als Desktop-Programme. Die App PDF Editor verwendet eine tolerantere Darstellungs-Engine, die Inhalte oft auch dann zeigt, wenn andere mobile Viewer nur eine leere Seite anzeigen – und lässt dich das Dokument als saubere Kopie wieder speichern.",
  faq: [
    {
      q: "Ist ein leeres PDF für immer verloren?",
      a: "Selten. Ist die Dateigröße mehr als ein paar KB, steckt der Inhalt so gut wie sicher noch drin – probiere ein anderes Anzeigeprogramm, einen Re-Export über „Drucken als PDF“ oder eine Bildextraktion zur Bestätigung.",
    },
    {
      q: "Warum erzeugt mein Scanner manchmal leere PDFs?",
      a: "Meistens hat der Einzug zwei zusammenklebende Seiten gleichzeitig gezogen und nur die zweite erfasst, oder der Kontrast war zu niedrig eingestellt. Ein erneuter Scan mit automatischem Kontrast behebt das meist.",
    },
    {
      q: "Kann es an der Schriftart liegen?",
      a: "Ja. Verweist ein PDF auf eine Schriftart, die nicht eingebettet ist, und dein Anzeigeprogramm kann sie nicht ersetzen, verschwindet der Text – obwohl er noch in der Datei steckt. Ein erneuter Export bettet eine nutzbare Schriftart ein.",
    },
    {
      q: "Geht der Inhalt verloren, wenn ich ein leeres PDF komprimiere oder kombiniere?",
      a: "Das kann passieren – beide Vorgänge arbeiten mit dem, was dein Anzeigeprogramm sieht. Verarbeite eine leer dargestellte Datei erst weiter, wenn du bestätigt hast, dass der Inhalt wirklich da ist.",
    },
    {
      q: "Warum wirkt die Datei in Acrobat leer, aber in Chrome in Ordnung?",
      a: "Unterschiedliche Interpretation. Der Chrome-Viewer ist oft am tolerantesten, ältere Acrobat-Versionen sind strenger. Nicht die Datei ist defekt – das Anzeigeprogramm ist es.",
    },
  ],
  related: [
    { label: "PDF zu Bildern – prüfen, ob Seiten wirklich leer sind", path: "/pdf-to-images" },
    { label: "In PDF scannen – saubere Scans ohne leere Seiten", path: "/scan-to-pdf" },
    { label: "Warum öffnet sich mein PDF nicht?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Beschädigtes PDF reparieren", path: "/guides/how-to-fix-a-corrupted-pdf" },
  ],
  parentHub: { label: "PDF-Werkzeuge – kostenlos, im Browser", path: "/pdf-tools" },
};

export default content;
