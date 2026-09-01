import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-flat-pdf",
  h1: "Bearbeitbares PDF oder flaches PDF – der eigentliche Unterschied",
  description:
    "Manche PDFs haben echten, markierbaren Text und eine bearbeitbare Struktur, manche sind nur Bilder von Seiten ohne zugrunde liegenden Text. So erkennst du, welches du hast, und wann welches richtig ist.",
  updated: "2026-05-29",
  intro: [
    "Zwei Dateien können beide PDFs sein und sich trotzdem völlig unterschiedlich verhalten. Bei der einen kannst du Text markieren, Zitate kopieren, nach Wörtern suchen und den Inhalt bearbeiten. Die andere sieht auf dem Bildschirm identisch aus, ist im Kern aber ein Bild eines Dokuments — der Text ist Teil des Bildes, nicht davon getrennt. Die erste ist ein bearbeitbares PDF; die zweite ist ein nicht bearbeitbares PDF, manchmal auch flaches PDF oder Bild-PDF genannt.",
    "Zu wissen, welche Art von PDF du hast, ist wichtig, weil die Werkzeuge dafür unterschiedlich sind. Bearbeitbare PDFs reagieren auf PDF-Editoren, Konvertierungs-Tools und Suche. Nicht bearbeitbare PDFs brauchen OCR, um durchsuchbar zu werden, und Bearbeitung bedeutet entweder erst OCR und dann bearbeiten oder das Bild komplett zu ersetzen. Editor-Tools für bearbeitbare PDFs auf ein flaches PDF anzuwenden führt meist nur zu Frust.",
    "Diese Anleitung erklärt den Unterschied, zeigt den Zwei-Sekunden-Test, der dir sofort sagt, welche Art du hast, und zeigt, wann welche Art richtig ist. Manchmal ist flach Absicht — manchmal ein Zufall der Entstehung.",
  ],
  steps: [
    {
      title: "Der Zwei-Sekunden-Test: versuche, Text zu markieren",
      body: "Öffne das PDF, klicke und ziehe über etwas Text. Lässt sich der Text markieren (hervorgehoben, kopierbar), ist es ein bearbeitbares PDF. Zeichnet dein Cursor nur einen Auswahlrahmen, ohne dass Text hervorgehoben wird, ist es nicht bearbeitbar — der „Text“ ist Bilddaten.",
    },
    {
      title: "Bearbeitbares PDF: Text ist markierbar, durchsuchbar, kopierbar",
      body: "Direkte Exporte aus Word, Pages, Docs oder Design-Tools erzeugen bearbeitbare PDFs. Der Text ist strukturierte Daten innerhalb der Datei; Suche und Kopieren-Einfügen funktionieren; PDF-Editoren können ihn verändern.",
    },
    {
      title: "Nicht bearbeitbares PDF: Bild einer Seite, ohne zugrunde liegenden Text",
      body: "Gescannte Dokumente sind die häufigsten flachen PDFs. Der Text existiert nur als Pixel; es gibt keine zugrunde liegenden Zeichendaten. Die Suche findet nichts; Kopieren-Einfügen liefert nichts.",
    },
    {
      title: "OCR macht flach durchsuchbar (aber nicht perfekt bearbeitbar)",
      body: "OCR analysiert das Seitenbild und fügt eine Textebene unter den Pixeln hinzu. Die Suche funktioniert danach; Kopieren-Einfügen liefert einen ungefähren Text. Bearbeiten erfordert weiterhin, Bildelemente manuell zu ersetzen.",
    },
    {
      title: "Wenn flach Absicht ist: Sperren, bildgenaue Treue",
      body: "Manche Workflows machen ein PDF absichtlich flach — die Datei lässt sich nicht leicht bearbeiten, Unterschriften und Stempel stören keinen darunterliegenden Text. PDF in Bilder gefolgt von Bild in PDF erzeugt auf diesem Weg eine flache Kopie.",
    },
    {
      title: "Wenn bearbeitbar Absicht ist: jeder andere Workflow",
      body: "Zum Teilen, Unterschreiben, Bearbeiten, Archivieren, Weiterverwenden — ein bearbeitbares PDF ist die richtige Wahl. Mach es nur flach, wenn du das gezielt brauchst.",
    },
  ],
  tips: [
    "Kannst du in einem PDF, das du selbst erstellt hast, keinen Text markieren, hat der Export die Textebene verloren. Exportiere erneut mit aktivierter Option „Text erhalten“.",
    "Gescannte PDFs von älteren Scannern sind meist flach. Wende OCR beim Scannen oder nachträglich mit einem Tool an, damit sie langfristig nützlich bleiben.",
    "Flache PDFs sind größer als vergleichbare bearbeitbare PDFs — Bilddaten brauchen mehr Platz als Zeichendaten.",
    "Mach ein PDF nicht flach, um es zu „sperren“ — richtige Bearbeitungseinschränkungen funktionieren besser und erhalten die Durchsuchbarkeit.",
    "Manche vermeintlich „bearbeitbaren“ PDFs exportieren jedes Zeichen als winzige Form statt als Text. Die Markierung sieht richtig aus, aber Kopieren-Einfügen liefert Unsinn. Das ist der schlimmste Fall fürs Bearbeiten.",
  ],
  mobileNote:
    "Auf dem Handy sehen flache und bearbeitbare PDFs in einem Viewer identisch aus. Die PDF-Editor-App zeigt den Unterschied im Bearbeitungsmodus an — du siehst, welche Dateien echten Text haben und welche nur Bilder sind, und kannst sie entsprechend zu OCR schicken oder direkt bearbeiten.",
  faq: [
    {
      q: "Wie erkenne ich auf einen Blick, welche Art ich habe?",
      a: "Versuch, Text zu markieren. Funktioniert die Markierung und liefert das Kopieren sauberen Text, ist es bearbeitbar. Wenn nicht, ist es flach.",
    },
    {
      q: "Sind gescannte PDFs immer flach?",
      a: "Direkt aus dem Scanner ja. Viele Scan-Apps wenden heute automatisch OCR an und erzeugen ein durchsuchbares flaches PDF — der Text bleibt als Bild dargestellt, aber darunter liegt eine durchsuchbare Ebene.",
    },
    {
      q: "Kann ich ein flaches PDF bearbeiten?",
      a: "Nur, indem du das Bild veränderst (drehen, zuschneiden, Text darüberlegen). Echte Textbearbeitung braucht zuerst OCR, und selbst dann ist das Ergebnis ungefähr.",
    },
    {
      q: "Warum sollte ich ein flaches PDF wollen?",
      a: "Um Textänderungen zu verhindern, um Unterschriften und Stempel so festzuschreiben, dass sie sich nicht verschieben lassen, oder um eine bildgenaue Fassung zu liefern. Selten, aber echte Anwendungsfälle.",
    },
    {
      q: "Beeinflusst das Dateiformat, welche Art ich bekomme?",
      a: "Ja — direkte Exporte aus Textverarbeitungen erzeugen bearbeitbare PDFs, gescannte und gespeicherte Dateien erzeugen flache PDFs. Die Quelle bestimmt die Art.",
    },
  ],
  related: [
    { label: "PDF Editor — Text und Bilder mobil bearbeiten", path: "/pdf-editor" },
    { label: "Warum kann ich ein PDF nicht bearbeiten?", path: "/guides/why-cant-i-edit-a-pdf" },
    { label: "PDF in Word — bearbeitbaren Text zurückgewinnen", path: "/pdf-to-word" },
    { label: "Wann ein gescanntes PDF sinnvoll ist", path: "/guides/when-to-use-scanned-pdf" },
  ],
  parentHub: { label: "PDF Editor — Text, Bilder und Seiten bearbeiten", path: "/pdf-editor" },
};

export default content;
