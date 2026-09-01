import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-webp-to-pdf",
  h1: "WebP zu PDF konvertieren — Webbilder zu einem Dokument",
  description:
    "Verwandle aus dem Web gespeicherte WebP-Bilder in ein PDF im Browser. Warum WebP von anderen Apps abgelehnt wird, und wie die Konvertierung die Kompatibilität herstellt.",
  updated: "2026-05-23",
  intro: [
    "WebP ist das Bildformat, das du bekommst, wenn du ein Bild von einer modernen Website speicherst. Bei ähnlicher Qualität ist es kleiner als JPG oder PNG, weshalb Websites es so gerne nutzen — aber es ist auch das Format, das andere Apps klammheimlich ablehnen. Lädst du ein WebP auf ein älteres Portal hoch, fügst es in manche Dokumenteneditoren ein oder schickst es an eine Kollegin mit älterer Software, bekommst du oft nur ein nüchternes „Dateityp nicht unterstützt“.",
    "Die Konvertierung von WebP zu PDF umgeht dieses Problem. Ein PDF öffnet sich überall — steckst du deine WebP-Bilder also in eines, werden sie universell teilbar. Diese Anleitung nutzt das kostenlose Bild-zu-PDF-Tool, das WebP akzeptiert und komplett in deinem Browser läuft, ohne dass etwas hochgeladen wird.",
    "Das ist der richtige Weg, wenn du Bilder aus dem Web gesammelt hast — Produktfotos, Referenzbilder, gespeicherte Infografiken — und sie in einem Format brauchst, das wirklich jeder Empfänger und jedes System akzeptiert.",
  ],
  steps: [
    {
      title: "Öffne das Bild-zu-PDF-Tool",
      body: "Ruf das Bild-zu-PDF-Tool im Browser auf. Es akzeptiert WebP neben JPG und PNG und verarbeitet alles auf deinem Gerät, ohne Hochladen und ohne Anmeldung.",
    },
    {
      title: "Füge deine WebP-Dateien hinzu",
      body: "Zieh die gespeicherten WebP-Bilder in die Ablagefläche oder klicke, um sie auszuwählen. Jedes Bild wird zu einer Seite im fertigen PDF.",
    },
    {
      title: "Lege die Reihenfolge fest",
      body: "Nutze die Pfeile nach oben und unten, um die Bilder zu sortieren. Bei Referenzbildern oder einer Schritt-für-Schritt-Serie ist genau hier der Ort, um die Reihenfolge festzulegen.",
    },
    {
      title: "Erstelle das PDF",
      body: "Klicke auf PDF erstellen. Deine WebP-Bilder werden auf PDF-Seiten platziert und lokal auf deinem Gerät zu einer Datei zusammengeführt.",
    },
    {
      title: "Herunterladen und teilen",
      body: "Das PDF wird automatisch heruntergeladen. Jetzt öffnet es sich auf jedem Gerät und jedem Portal, das an den rohen WebP-Dateien gescheitert ist.",
    },
    {
      title: "Komprimiere bei Bedarf",
      body: "WebP ist effizient, aber ein Stapel hochauflösender Bilder summiert sich trotzdem. Schick das Ergebnis durchs Tool PDF komprimieren, wenn es unter ein Anhang- oder Upload-Limit passen muss.",
    },
  ],
  tips: [
    "Der ganze Sinn der Konvertierung von WebP zu PDF ist Kompatibilität — ein PDF wird dort akzeptiert, wo ein WebP durchfällt. Du tauschst also ein zickiges Format gegen ein universelles.",
    "Brauchst du nur die Bilder selbst in einem gängigeren Format (kein Dokument), ist ein reiner Bildkonverter vielleicht die bessere Wahl. Entscheide dich für PDF, wenn das Ziel eine teilbare, druckbare Datei ist.",
    "WebP kann je nach Speicherung verlustbehaftet oder verlustfrei sein — so oder so stellt die Konvertierung zu PDF keine Details wieder her, die die Website schon beim Speichern verworfen hat.",
    "Transparenz in einem WebP wird, genau wie bei PNG, auf einer PDF-Seite auf Weiß dargestellt.",
    "Manche sehr alten Browser können WebP gar nicht decodieren. Liest das Tool deine Datei nicht, öffne sie in einem aktuellen Browser oder nutze die App PDF Editor.",
  ],
  mobileNote:
    "Wenn du beim Surfen auf dem Handy Bilder speicherst, landen oft WebP-Dateien auf dem Gerät, die der Rest deiner Apps ablehnt. Die App PDF Editor macht daraus sofort ein teilbares PDF — ein im Web gefundenes Bild ist so versandfertig, ganz ohne Umweg über den Laptop.",
  faq: [
    {
      q: "Warum muss ich WebP überhaupt konvertieren?",
      a: "Viele Apps, Portale und ältere Systeme akzeptieren kein WebP. Die Konvertierung zu PDF ergibt eine Datei, die sich überall öffnet — genau deshalb wollen die meisten die Konvertierung überhaupt erst.",
    },
    {
      q: "Geht bei der Konvertierung Bildqualität verloren?",
      a: "Die Konvertierung zu PDF fügt keinen zusätzlichen Verlust hinzu, kann aber keine Details wiederherstellen, die die Website beim Speichern des WebP schon entfernt hat. Das PDF sieht so gut aus wie das Ausgangsbild.",
    },
    {
      q: "Werden meine Bilder hochgeladen?",
      a: "Nein. Die Konvertierung läuft in deinem Browser auf deinem eigenen Gerät, deine Bilder bleiben also privat.",
    },
    {
      q: "Kann ich WebP mit JPG und PNG kombinieren?",
      a: "Ja. Das Tool akzeptiert alle drei zusammen, du kannst also ein einziges PDF aus gemischten Bildquellen erstellen.",
    },
    {
      q: "Das Tool liest mein WebP nicht — was jetzt?",
      a: "Nutze einen aktuellen Browser, denn ältere können WebP nicht decodieren. Alternativ übernimmt die mobile App PDF Editor die Konvertierung.",
    },
  ],
  related: [
    { label: "Bild zu PDF — WebP-Dateien im Browser zusammenfügen", path: "/image-to-pdf" },
    { label: "PDF komprimieren — das Ergebnis verkleinern", path: "/compress-pdf" },
    { label: "PNG zu PDF konvertieren", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "JPG zu PDF konvertieren", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "PDF-Konverter", path: "/pdf-converter" },
};

export default content;
