import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-font-issues",
  h1: "PDF-Schriftartprobleme lösen (fehlend, ersetzt, verstümmelt)",
  description:
    "Wenn ein PDF die falsche Schriftart, Kästchen statt Zeichen oder ersetzten Text zeigt, fehlt meist eine eingebettete Schriftart. Wie das Einbetten funktioniert und was du beim Export ändern solltest.",
  updated: "2026-05-29",
  intro: [
    "Zeigt ein PDF Kästchen statt Zeichen, überall die falsche Schriftart oder merkwürdige Zeichenabstände, die im Original nicht da waren, liegt ein Schriftartproblem vor. PDFs verweisen auf Schriftarten per Name; der Betrachter muss diese Schriftart entweder auf dem System finden oder sie muss in der Datei eingebettet sein. Ist beides nicht der Fall, siehst du eine Ersatzschrift — bestenfalls eine ähnliche, schlimmstenfalls Kästchen.",
    "Die richtige Lösung ist fast immer, mit eingebetteten Schriftarten neu zu exportieren. Ist eine Schriftart eingebettet, trägt die Datei die Glyphendaten mit sich und sieht überall korrekt aus. Der Preis ist eine etwas größere Datei, aber bei den meisten Schriftarten ist der Unterschied im Vergleich zum Dokument vernachlässigbar.",
    "Diese Anleitung erklärt, wie das Einbetten von Schriftarten tatsächlich funktioniert, geht die häufigsten Symptome durch und zeigt die Lösungen — auch für den Fall, dass ein erneuter Export nicht möglich ist und du die Datei in Bilder umwandeln musst.",
  ],
  steps: [
    {
      title: "Bestätige, dass die Datei Ersatzschriften anzeigt",
      body: "Öffne die Datei in zwei verschiedenen Betrachtern. Zeigen beide dieselbe falsche Schriftart, sind die Schriftarten nicht eingebettet. Zeigt ein Betrachter sie richtig an und der andere nicht, fehlt dem falschen Betrachter die Schriftart, und er ersetzt sie.",
    },
    {
      title: "Mit allen eingebetteten Schriftarten neu exportieren",
      body: "In Word, Pages, Docs und den meisten Design-Tools enthalten die PDF-Exporteinstellungen die Option „Alle Schriftarten einbetten“. Sie zu aktivieren fügt die Schriftartdaten der Datei hinzu und sorgt dafür, dass sie überall gleich dargestellt wird.",
    },
    {
      title: "Drucken-als-PDF als Ausweichlösung nutzen",
      body: "Kannst du das Einbetten der Schriftarten in der Quell-App nicht umschalten, öffne das Dokument in einem Betrachter, der es korrekt anzeigt, und drucke es als PDF. Die neue Kopie brennt die gerenderten Glyphen als Rastergrafik ein — größer und nicht durchsuchbar, aber zuverlässig.",
    },
    {
      title: "Prüfe auf lizenzierte Schriftarten, die sich nicht einbetten lassen",
      body: "Manche kommerziellen Schriftarten haben Einbettungsbeschränkungen. Die Quell-App warnt dich davor. Die realistische Lösung ist, zu einer ähnlichen Schriftart zu wechseln, die das Einbetten erlaubt, oder den betroffenen Text als Bild zu rastern.",
    },
    {
      title: "In Word konvertieren, Text korrigieren, neu exportieren",
      body: "Hat die Ersetzung den Text bereits verstümmelt und du hast nur das PDF, holt PDF zu Word heraus, was sich retten lässt. Räume den Text auf, setze Schriftarten, die du hast, und exportiere neu zu einem frischen PDF.",
    },
    {
      title: "Als Bilder rendern, wenn nichts anderes hilft",
      body: "PDF zu Bildern exportiert jede Seite als hochauflösendes PNG. Setzt du das Ergebnis mit Bild zu PDF wieder zusammen, hat es keinen lebendigen Text mehr — nur Bilder —, aber die Schriftdarstellung ist für jeden Betrachter fest verankert.",
    },
  ],
  tips: [
    "Nutze bei wichtigen Dokumenten keine Schriftarten, die sich nicht einbetten lassen — die Datei bleibt sonst immer anfällig für eine Ersatzschrift.",
    "Webschriften und heruntergeladene Display-Schriftarten sind die häufigsten Übeltäter beim Einbetten. Systemschriftarten (Arial, Times, Helvetica, Calibri) lassen sich sauber einbetten.",
    "Nur einen „Teilsatz“ der Schriftart einzubetten (nur die verwendeten Zeichen) hält die Datei klein. Die meisten Export-Tools tun das standardmäßig, und das ist die richtige Wahl.",
    "Ist nur ein einzelnes Zeichen falsch (etwa ein Bruch oder ein Sonderzeichen), fehlt der Schriftart diese Glyphe. Ersetze das Ausgangszeichen durch ein Unicode-Äquivalent.",
    "Nach dem Umwandeln in Bilder verlierst du Kopieren-und-Einfügen sowie OCR-Fähigkeit. Nutze diesen Weg nur, wenn originalgetreue Darstellung wichtiger ist als Durchsuchbarkeit.",
  ],
  mobileNote:
    "Handy-Betrachter haben oft weniger Schriftarten installiert als Desktops, sodass Dateien ohne eingebettete Schriftarten am Handy am schlechtesten aussehen. Die PDF-Editor-App zeigt Warnungen bei Ersatzschriften an und lässt dich Dokumente mit fest eingebauten Schriftarten neu exportieren, was sie über iOS, Android und Desktop-Betrachter hinweg optisch konsistent hält.",
  faq: [
    {
      q: "Was macht „Schriftarten einbetten“ eigentlich?",
      a: "Es bündelt die Glyphendaten der Schriftart direkt im PDF, sodass jeder Betrachter den Text korrekt darstellen kann, ohne dass die Schriftart lokal installiert sein muss.",
    },
    {
      q: "Warum sehe ich Kästchen statt Buchstaben?",
      a: "Die Schriftart ist nicht auf dem System installiert und wurde nicht eingebettet. Der Betrachter kann sie nicht ersetzen, weil er nicht weiß, welche Glyphen er zeichnen soll, und zeigt daher das Kästchen für das fehlende Zeichen.",
    },
    {
      q: "Kann ich einem PDF nach dem Export eine Schriftart hinzufügen?",
      a: "Nicht sauber. Der richtige Weg ist der erneute Export aus der Quelle. Es gibt Tools, die behaupten, nachträglich einbetten zu können, aber die meisten erzeugen fehlerhafte Dateien.",
    },
    {
      q: "Warum wird mein exportiertes PDF größer, wenn ich Schriftarten einbette?",
      a: "Weil die Schriftartdaten jetzt in der Datei stecken. Die Zunahme ist meist gering, außer du bettest viele Schriftfamilien ein. Ein Teilsatz (nur die verwendeten Zeichen) hält die Größe niedrig.",
    },
    {
      q: "Entfernt Komprimierung eingebettete Schriftarten?",
      a: "Nein. PDF-Komprimierung setzt bei Bildern an, nicht bei Text oder Schriftarten. Ein PDF mit eingebetteten Schriftarten zu komprimieren beschädigt sie nicht.",
    },
  ],
  related: [
    { label: "PDF zu Word — Text aus Ersatzschriften retten", path: "/pdf-to-word" },
    { label: "PDF zu Bildern — als letzte Lösung in Bilder umwandeln", path: "/pdf-to-images" },
    { label: "PDF-Formatierungsprobleme lösen", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "PDF-Druckprobleme lösen", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "PDF Converter — Word, JPG, PNG und zurück", path: "/pdf-converter" },
};

export default content;
