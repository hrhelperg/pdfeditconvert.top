import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-android",
  h1: "Fotos auf Android zu PDF konvertieren",
  description:
    "Verwandle Android-Fotos mit einem Browser-Tool oder der eingebauten Drucken-als-PDF-Funktion in ein PDF. Plus der schnellere Weg über die App mit Scan-Funktion.",
  updated: "2026-05-23",
  intro: [
    "Auf Android führen mehrere Wege zum Ziel, Fotos in ein PDF zu verwandeln – praktisch, aber auch verwirrend, denn die genauen Schritte unterscheiden sich zwischen Samsung, Pixel, Xiaomi und den übrigen Herstellern. Die gute Nachricht: Ein Weg funktioniert auf jedem Android-Handy identisch – ein Browser-Tool, das direkt auf deinem Gerät läuft und sich nicht darum kümmert, welcher Hersteller draufsteht.",
    "Diese Anleitung zeigt drei Varianten: den universellen Browser-Weg mit dem kostenlosen Bild-zu-PDF-Tool, den eingebauten Trick „Als PDF drucken“, der sich im Teilen-Menü versteckt, und die PDF-Editor-App für alle, die Fotos, Scannen und Unterschreiben an einem Ort erledigen wollen.",
    "Android-Fotos werden meist als JPG gespeichert, sodass die Formatprobleme, mit denen iPhone-Nutzer zu kämpfen haben, in der Regel ausbleiben – aber eine Ausnahme solltest du kennen, und die zeigen wir dir ebenfalls.",
  ],
  steps: [
    {
      title: "Öffne das Bild-zu-PDF-Tool",
      body: "Ruf das Bild-zu-PDF-Tool in Chrome oder deinem bevorzugten Browser auf. Es funktioniert auf jedem Android-Handy, unabhängig von der Marke, und verarbeitet die Bilder direkt auf deinem Gerät — nichts wird hochgeladen.",
    },
    {
      title: "Füge deine Fotos hinzu",
      body: "Tippe, um Fotos aus der Galerie oder den Dateien auszuwählen. JPG und PNG funktionieren beide; aus jedem Bild wird eine Seite.",
    },
    {
      title: "Bring die Seiten in die richtige Reihenfolge",
      body: "Nutze die Pfeile, um die Fotos anzuordnen. Bei einem mehrseitigen Dokument lohnt sich ein zweiter Blick auf die Reihenfolge, bevor du die Datei erstellst.",
    },
    {
      title: "Erstelle und speichere das PDF",
      body: "Tippe auf „PDF erstellen“. Die Datei wird auf dein Handy heruntergeladen; speichere sie in Dateien oder deinem bevorzugten Cloud-Speicher, oder teile sie direkt.",
    },
    {
      title: "Alternative: Als PDF drucken nutzen",
      body: "Öffne die Fotos in Google Fotos oder deiner Galerie, tippe auf Teilen → Drucken und wähle dann „Als PDF speichern“ als Drucker. So bündelst du ausgewählte Bilder ganz ohne Tool zu einem PDF — allerdings mit weniger Kontrolle über die Reihenfolge.",
    },
    {
      title: "Oder nutze die PDF-Editor-App",
      body: "Die App kombiniert Galeriefotos zu einem PDF, scannt neue Seiten mit automatischer Kantenerkennung und lässt dich unterschreiben — alles offline, alles direkt auf dem Gerät.",
    },
  ],
  tips: [
    "Der Browser-Weg verhält sich bei Samsung, Pixel, Xiaomi und anderen Marken identisch — die richtige Wahl, wenn du das Handy wechselst oder jemandem mit einer anderen Marke hilfst.",
    "Der Trick „Als PDF drucken“ ist praktisch für den Notfall, lässt dir aber kaum Kontrolle über die Seitenreihenfolge — wenn die Reihenfolge wichtig ist, nimm das Bild-zu-PDF-Tool.",
    "Schneide die Fotos zuerst in der Galerie zu. Die Seitengröße richtet sich nach dem Bild, ein sauberer Zuschnitt ergibt also ein aufgeräumteres Dokument.",
    "Die meisten Android-Kameras speichern als JPG, manche aber im Hocheffizienzmodus als HEIF/HEIC. Lädt ein Foto nicht, prüfe die Kameraeinstellungen oder nutze die PDF-Editor-App.",
    "Viele hochauflösende Fotos ergeben ein großes PDF. Komprimiere das Ergebnis, bevor du es per E-Mail verschickst.",
  ],
  mobileNote:
    "Dokumentenarbeit auf Android findet ohnehin auf dem Handy statt, und die PDF-Editor-App hält sie genau dort: Galeriefotos kombinieren, Papier mit Kantenerkennung scannen, unterschreiben und teilen — offline und ohne dass etwas hochgeladen wird. Für wiederkehrende Aufgaben geht das jedes Mal schneller als der Umweg über den Browser.",
  faq: [
    {
      q: "Funktioniert die Browser-Methode auf jedem Android-Handy?",
      a: "Ja. Weil das Tool im Browser läuft, verhält es sich auf Samsung, Pixel, Xiaomi und jedem anderen Android-Gerät gleich — anders als eingebaute Funktionen, die je nach Hersteller variieren.",
    },
    {
      q: "Was ist der Unterschied zwischen „Als PDF drucken“ und dem Tool?",
      a: "„Als PDF drucken“ ist fest im Teilen-Menü von Android eingebaut und braucht kein zusätzliches Tool, bietet aber kaum Kontrolle über die Seitenreihenfolge. Mit dem Bild-zu-PDF-Tool legst du die Reihenfolge dagegen genau fest — wichtig bei mehrseitigen Dokumenten.",
    },
    {
      q: "Werden meine Fotos irgendwohin hochgeladen?",
      a: "Nein. Sowohl das Bild-zu-PDF-Tool als auch die PDF-Editor-App verarbeiten die Fotos auf deinem Gerät. Deine Bilder bleiben privat.",
    },
    {
      q: "Meine Fotos lassen sich nicht in das Tool laden — woran liegt das?",
      a: "Manche Android-Handys speichern im Hocheffizienzmodus als HEIF/HEIC, was Browser-Tools mitunter nicht lesen können. Stell deine Kamera auf normales JPG um, oder nutze die PDF-Editor-App.",
    },
    {
      q: "Kann ich das PDF durchsuchbar machen?",
      a: "Ein einfaches Foto hat keine Textebene. Für durchsuchbaren Text scannst du das Dokument mit der Texterkennung der PDF-Editor-App, statt es nur zu fotografieren.",
    },
  ],
  related: [
    { label: "Bild zu PDF — Fotos im Browser umwandeln", path: "/image-to-pdf" },
    { label: "In PDF scannen — Papier mit der Kamera erfassen", path: "/scan-to-pdf" },
    { label: "Wie du Fotos auf dem iPhone in PDF umwandelst", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
    { label: "Wie du JPG in PDF umwandelst", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "PDF-Konverter", path: "/pdf-converter" },
};

export default content;
