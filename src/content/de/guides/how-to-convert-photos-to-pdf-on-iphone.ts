import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-iphone",
  h1: "Fotos auf dem iPhone zu PDF konvertieren (HEIC-Problem lösen)",
  description:
    "Verwandle iPhone-Fotos in ein einziges PDF – inklusive der HEIC-Eigenheit, die viele stolpern lässt. Der Weg über den Browser und der schnellere Weg über die App.",
  updated: "2026-05-23",
  intro: [
    "Fotos auf dem iPhone in ein PDF zu verwandeln, brauchen die meisten ständig — ein fotografierter Vertrag, ein Stapel Belege für eine Spesenabrechnung, beide Seiten eines Ausweises für ein Formular. Die Aufgabe ist einfach, aber es gibt einen iPhone-spezifischen Haken, der für die meiste Frustration sorgt: Das iPhone speichert Fotos standardmäßig als HEIC, nicht als JPG, und viele Tools können mit HEIC nichts anfangen.",
    "Diese Anleitung zeigt zwei zuverlässige Wege. Der erste nutzt das kostenlose Bild-zu-PDF-Tool in Safari, das funktioniert, sobald deine Fotos in einem unterstützten Format vorliegen. Der zweite nutzt die App PDF Editor, die HEIC direkt aus deiner Kamerarolle liest und dir den Formatwechsel komplett erspart.",
    "Wähle, was gerade passt — aber kenn das HEIC-Detail vorher, denn genau das macht aus einer 30-Sekunden-Aufgabe eine verwirrende.",
  ],
  steps: [
    {
      title: "Entscheide dich für ein Fotoformat",
      body: "Öffne Einstellungen → Kamera → Formate. „Hohe Effizienz“ speichert HEIC, „Kompatibelste“ speichert JPG. Mit „Kompatibelste“ funktionieren neue Fotos überall, auch mit Browser-Tools.",
    },
    {
      title: "Konvertiere vorhandene HEIC-Fotos bei Bedarf",
      body: "Schon als HEIC aufgenommen? Exportiere sie entweder erneut als JPG (in Fotos öffnen, teilen, eine JPG-erzeugende Option wählen), oder spring direkt zum App-Weg weiter unten, der HEIC direkt liest.",
    },
    {
      title: "Öffne das Bild-zu-PDF-Tool in Safari",
      body: "Ruf das Bild-zu-PDF-Tool auf. Es akzeptiert JPG, PNG und WebP und läuft komplett auf deinem Gerät — ohne dass etwas hochgeladen wird.",
    },
    {
      title: "Füge deine Fotos hinzu und ordne sie",
      body: "Tippe, um Fotos aus deiner Mediathek auszuwählen, und nutze dann die Pfeile, um sie zu sortieren. Bei mehrseitigen Dokumenten wie einem zweiseitigen Vertrag zählt die Seitenreihenfolge.",
    },
    {
      title: "Erstelle und speichere das PDF",
      body: "Tippe auf PDF erstellen. Sobald es heruntergeladen ist, nutze das Teilen-Symbol, um es in der App Dateien zu speichern oder direkt weiterzuschicken.",
    },
    {
      title: "Oder nutze die App PDF Editor für HEIC und Scannen",
      body: "Die App liest HEIC-Fotos direkt aus deiner Kamerarolle, macht daraus ein PDF und kann zusätzlich neue Seiten mit Kantenerkennung erfassen — ganz ohne Formatkonvertierung.",
    },
  ],
  tips: [
    "Der mit Abstand häufigste Grund für „meine Fotos lassen sich nicht konvertieren“ auf dem iPhone ist HEIC. Stell auf „Kompatibelste“ um oder nutze die App, und das Problem verschwindet.",
    "Beschneide jedes Foto vor der Konvertierung in der App Fotos — die Seite wird an das Bild angepasst, ein entfernter Hintergrund ergibt also ein aufgeräumteres Dokument.",
    "Fotografiere Belege und Ausweise auf einer dunklen, flachen Unterlage bei gleichmäßigem Licht. Reflexionen und Schatten lassen sich hinterher schwerer korrigieren als von vornherein vermeiden.",
    "Ein zu PDF gewordenes Foto ist kein durchsuchbarer Scan. Musst du den Text durchsuchen können, nutze die Scan-Funktion der App, die Text erkennen kann.",
    "Ist das fertige PDF zu groß für die E-Mail, schick es durchs Tool PDF komprimieren — Handyfotos ergeben schwere Seiten.",
  ],
  mobileNote:
    "Dieser ganze Ablauf spielt sich auf deinem Handy ab — genau dafür ist die App PDF Editor gebaut: HEIC direkt aus der Kamerarolle, Konvertierung auf dem Gerät ohne Hochladen, dazu Scannen und Unterschreiben an einem Ort. Für alles, was du öfter machst, ist das der schnellere Weg.",
  faq: [
    {
      q: "Warum lassen sich meine iPhone-Fotos nicht in den Konverter laden?",
      a: "Sie sind als HEIC gespeichert, was die meisten Browser-Tools nicht lesen. Stell für neue Fotos unter Einstellungen → Kamera → Formate auf „Kompatibelste“ um, oder nutze die App PDF Editor, die HEIC direkt liest.",
    },
    {
      q: "Kann ich mehrere Fotos zu einem PDF zusammenfügen?",
      a: "Ja. Füge sie alle hinzu, zieh sie in die richtige Reihenfolge, und jedes Foto wird zu einer Seite eines einzigen PDFs.",
    },
    {
      q: "Werden meine Fotos auf einen Server hochgeladen?",
      a: "Nein. Das Browser-Tool verarbeitet alles auf deinem Gerät, und die App macht das genauso. Deine Fotos bleiben privat — wichtig bei Ausweisen und persönlichen Dokumenten.",
    },
    {
      q: "Wird das PDF durchsuchbar sein?",
      a: "Nicht aus einem einfachen Foto — es gibt keine Textebene. Nutze die Scan-Funktion in der App PDF Editor, um ein Dokument mit erkanntem, durchsuchbarem Text zu erzeugen.",
    },
    {
      q: "Das PDF ist zu groß für die E-Mail — was mache ich?",
      a: "Hochauflösende iPhone-Fotos ergeben große Seiten. Schick die Datei durchs Tool PDF komprimieren, um sie unter das Anhanglimit zu bringen.",
    },
  ],
  related: [
    { label: "Bild zu PDF — Fotos im Browser konvertieren", path: "/image-to-pdf" },
    { label: "In PDF scannen — Papier mit der Kamera erfassen", path: "/scan-to-pdf" },
    { label: "Fotos auf Android zu PDF konvertieren", path: "/guides/how-to-convert-photos-to-pdf-on-android" },
    { label: "JPG zu PDF konvertieren", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "PDF-Konverter", path: "/pdf-converter" },
};

export default content;
