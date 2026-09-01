import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-png-to-pdf",
  h1: "PNG zu PDF konvertieren — scharfe Screenshots und Grafiken",
  description:
    "Verwandle PNG-Screenshots, Diagramme und Grafiken in ein PDF im Browser. Warum PNG Text scharf hält, und was mit Transparenz passiert.",
  updated: "2026-05-23",
  intro: [
    "PNG ist das Format, das entsteht, wenn du einen Screenshot machst, ein Diagramm exportierst oder eine Grafik mit scharfen Kanten speicherst. Anders als JPG ist es verlustfrei — Text und feine Linien bleiben also scharf, statt durch die Komprimierung zu verschwimmen. Damit ist PNG der richtige Ausgangspunkt, wenn Screenshots oder Diagramme in einem gut lesbaren PDF landen sollen.",
    "Diese Anleitung nutzt das kostenlose Bild-zu-PDF-Tool, um PNG-Dateien direkt im Browser zu einem Dokument zusammenzuführen — ohne dass etwas hochgeladen wird. Typische Anwendungsfälle: eine Reihe von UI-Screenshots für ein Review, exportierte Diagramme für einen Bericht, oder eine Grafik, die als druckbare, teilbare Datei gebraucht wird statt als loses Bild.",
    "Es gibt eine PNG-spezifische Eigenheit, die du kennen solltest — Transparenz — und wir zeigen, was mit ihr passiert, wenn aus einem PNG eine PDF-Seite wird.",
  ],
  steps: [
    {
      title: "Öffne das Bild-zu-PDF-Tool",
      body: "Ruf das Bild-zu-PDF-Tool im Browser auf. Es verarbeitet PNG, JPG und WebP und läuft komplett auf deinem Gerät, ganz ohne Hochladen oder Konto.",
    },
    {
      title: "Füge deine PNG-Dateien hinzu",
      body: "Zieh die Screenshots oder Grafiken in die Ablagefläche oder klicke, um sie auszuwählen. Jedes PNG wird zu einer Seite im fertigen PDF.",
    },
    {
      title: "Ordne die Seiten",
      body: "Bring die Screenshots mit den Pfeilen nach oben und unten in die Reihenfolge, die die Geschichte erzählt — Schritt eins vor Schritt zwei.",
    },
    {
      title: "Erzeuge das PDF",
      body: "Klicke auf PDF erstellen. Das Tool platziert jedes Bild auf einer eigenen Seite in den Maßen des Bildes und baut die zusammengeführte Datei lokal zusammen.",
    },
    {
      title: "Lade das Dokument herunter",
      body: "Das PDF wird automatisch heruntergeladen. Benenne es passend zum Inhalt um, damit es leicht wiederzufinden ist und für jeden, der es öffnet, sofort klar ist.",
    },
    {
      title: "Prüfe, ob die Seiten scharf dargestellt werden",
      body: "Öffne das PDF und zoom in einen beliebigen Text hinein. PNG hält Schrift scharf, Screenshots von Dashboards, Code oder Vertragstexten sollten also lesbar bleiben.",
    },
  ],
  tips: [
    "PNG ist immer dann die bessere Wahl als JPG, wenn das Bild Text, UI-Elemente oder scharfe Linien enthält — die JPG-Komprimierung weicht genau diese Kanten auf.",
    "Transparente Bereiche eines PNGs bleiben auf einer PDF-Seite nicht transparent, sondern werden auf Weiß dargestellt. Ein Logo mit transparentem Hintergrund landet also auf weißem Grund — meist kein Problem.",
    "Vollbild-Screenshots können sehr lang und schmal sein. Sie lassen sich problemlos konvertieren, aber ein Zuschnitt auf den relevanten Ausschnitt sorgt dafür, dass die Seite nicht größtenteils leer bleibt.",
    "PNG-Dateien sind für dasselbe Bild größer als JPGs. Viele hochauflösende Screenshots hintereinander können ein ordentlich schweres PDF ergeben — komprimiere es, wenn du das Ergebnis per E-Mail verschickst.",
    "Willst du eine einheitliche Seitengröße (alles auf A4 zugeschnitten) statt an jedes Bild angepasste Seiten, gibt dir die App PDF Editor genau diese Kontrolle.",
  ],
  mobileNote:
    "Auf dem Handy sammeln sich Screenshots schnell an. Die App PDF Editor macht aus einem Stapel davon mit wenigen Tipps ein einziges PDF und lässt dich vor dem Teilen den wichtigen Teil markieren oder hervorheben — praktisch für Bug-Reports und schnelle Reviews unterwegs.",
  faq: [
    {
      q: "Warum PNG statt JPG für ein PDF wählen?",
      a: "PNG ist verlustfrei, Text, Screenshots und Diagramme bleiben also scharf. JPG ist verlustbehaftet und weicht feine Kanten auf. Enthalten deine Bilder Schrift oder UI-Elemente, ergibt PNG das sauberere PDF.",
    },
    {
      q: "Was passiert mit transparenten Hintergründen?",
      a: "Eine PDF-Seite kennt keine Transparenz, transparente Bereiche werden also auf Weiß dargestellt. Ein Logo oder Icon mit transparentem Hintergrund landet einfach auf einer weißen Seite.",
    },
    {
      q: "Werden meine Dateien hochgeladen?",
      a: "Nein. Alles läuft in deinem Browser auf deinem Gerät. Deine Screenshots und Grafiken verlassen es nie.",
    },
    {
      q: "Kann ich PNG und JPG im selben PDF mischen?",
      a: "Ja. Das Tool akzeptiert PNG, JPG und WebP zusammen, du kannst also einen Screenshot, ein Foto und ein exportiertes Diagramm in einem Dokument kombinieren.",
    },
    {
      q: "Das PDF ist sehr groß geworden — was kann ich tun?",
      a: "PNG-Seiten sind schwer. Schick die Datei durchs Tool PDF komprimieren, um sie unter die Grenzen für E-Mail und Upload zu bringen — bei einem kleinen Qualitätskompromiss.",
    },
  ],
  related: [
    { label: "Bild zu PDF — PNGs im Browser zusammenfügen", path: "/image-to-pdf" },
    { label: "PDF zu Bildern — der umgekehrte Weg", path: "/pdf-to-images" },
    { label: "JPG zu PDF konvertieren", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "WebP zu PDF konvertieren", path: "/guides/how-to-convert-webp-to-pdf" },
  ],
  parentHub: { label: "PDF-Konverter", path: "/pdf-converter" },
};

export default content;
