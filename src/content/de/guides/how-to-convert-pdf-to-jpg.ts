import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-jpg",
  h1: "PDF zu JPG konvertieren — Seiten als Bilder exportieren",
  description:
    "Exportiere PDF-Seiten als JPG-Bilder im Browser. Wann JPG die bessere Wahl gegenüber PNG ist, wie die Skalierung die Qualität beeinflusst, und wann eine Bildvorschau ein PDF schlägt.",
  updated: "2026-05-23",
  intro: [
    "Manchmal ist ein PDF einfach der falsche Behälter. Du willst eine einzelne Seite in eine Slack-Nachricht werfen, wo sie als Vorschau erscheint, ein Diagramm in eine Folie einfügen oder eine Seite irgendwo posten, wo nur Bilder erlaubt sind. Dafür brauchst du die Seiten als JPGs, nicht als PDF.",
    "Diese Anleitung nutzt das kostenlose Tool PDF zu Bildern, das jede Seite eines PDFs als herunterladbares Bild rendert — komplett in deinem Browser, ohne dass etwas hochgeladen wird. JPG ist eines der beiden angebotenen Formate und die richtige Wahl, wenn die Dateigröße wichtiger ist als messerscharfer Text.",
    "Wir zeigen, wie du die Skalierung wählst (die die Schärfe steuert), wann JPG die bessere Wahl gegenüber PNG ist, und die Einschränkung, die du dir merken solltest: Ein JPG einer Seite ist ein flaches Bild, kein Dokument.",
  ],
  steps: [
    {
      title: "Öffne das Tool PDF zu Bildern",
      body: "Ruf das Tool PDF zu Bildern im Browser auf. Es rendert die Seiten lokal auf deinem Gerät — kein Hochladen, kein Konto nötig.",
    },
    {
      title: "Füge dein PDF hinzu",
      body: "Zieh ein einzelnes PDF in die Ablagefläche oder klicke, um es auszuwählen. Das Tool liest jede Seite ein, um sie als Bild exportieren zu können.",
    },
    {
      title: "Wähle JPG als Format",
      body: "Entscheide dich für JPG. Es erzeugt kleinere Dateien als PNG und ist die richtige Wahl für Fotos, Vollbild-Screenshots und überall dort, wo die Dateigröße wichtiger ist als perfekt scharfer Text.",
    },
    {
      title: "Stelle die Skalierung ein",
      body: "Die Skalierung bestimmt, mit wie vielen Pixeln jede Seite gerendert wird. 2× wirkt auf den meisten Bildschirmen scharf; geh für kleinere Dateien auf 1,5× runter, oder wähle 3×, wenn du ein sehr scharfes Ergebnis brauchst und die Dateigröße egal ist.",
    },
    {
      title: "Exportiere die Seiten",
      body: "Starte die Konvertierung. Jede Seite wird als eigene JPG-Datei heruntergeladen — bereit für eine Nachricht, eine Präsentation oder ein Upload-Formular.",
    },
    {
      title: "Wähle die Seite aus, die du brauchst",
      body: "Wolltest du nur eine Seite, schnapp dir das passende JPG und lösche den Rest. Bei einem langen PDF bedeutet vorheriges Teilen weniger Bilder zum Durchsortieren.",
    },
  ],
  tips: [
    "Wähle JPG, wenn die Seite fotolastig ist oder du auf Dateigröße optimierst; wähle PNG, wenn die Seite hauptsächlich aus Text oder Strichzeichnungen besteht, die scharf bleiben müssen.",
    "Höhere Skalierung bedeutet schärfere Bilder und größere Dateien. 3× bringt nichts, wenn das Bild sowieso immer nur klein angezeigt wird.",
    "Ein JPG einer Seite hat keine Textebene — die Wörter lassen sich weder suchen noch markieren noch kopieren. Heb das Original-PDF auf, falls du den Text später wieder brauchst.",
    "Sehr große PDFs bei hoher Skalierung können den Arbeitsspeicher des Browsers überlasten. Streikt das Tool, geh auf 1,5× runter oder teile das PDF vorher.",
    "Passwortgeschützte PDFs lassen sich im Browser nicht rendern. Entferne zuerst das Passwort, oder nutze die App PDF Editor.",
  ],
  mobileNote:
    "Auf dem Handy geht es beim Export einer Seite als Bild meist ums Teilen: Bildvorschauen erscheinen direkt im Chat, während ein PDF-Anhang nur als Icon herumliegt. Die App PDF Editor rendert und exportiert Seiten sofort mit Hardwarebeschleunigung und übergibt sie direkt ans Teilen-Menü.",
  faq: [
    {
      q: "JPG oder PNG — was sollte ich exportieren?",
      a: "JPG für kleinere Dateien und fotolastige Seiten; PNG, wenn die Seite hauptsächlich aus Text oder Diagrammen besteht, die scharf bleiben müssen. Die JPG-Komprimierung weicht feine Kanten auf, was bei Schrift auffällt.",
    },
    {
      q: "Bekomme ich ein Bild pro Seite?",
      a: "Ja. Jede PDF-Seite wird gerendert und als eigenes JPG heruntergeladen. Brauchst du nur eine Seite, behalte diese Datei und lösche die anderen.",
    },
    {
      q: "Wird mein PDF hochgeladen?",
      a: "Nein. Das Rendering läuft komplett in deinem Browser, die Datei verlässt dein Gerät also nie.",
    },
    {
      q: "Kann ich den Text im JPG danach durchsuchen?",
      a: "Nein. Eine konvertierte Seite ist ein flaches Bild ohne Textebene. Willst du durchsuchbaren Text behalten, heb das Original-PDF auf.",
    },
    {
      q: "Was bewirkt die Skalierungseinstellung?",
      a: "Sie legt fest, wie viele Bildpixel pro PDF-Punkt gerendert werden. 2× wirkt auf den meisten Displays scharf; 3× ist sehr knackig, erzeugt aber große Dateien.",
    },
  ],
  related: [
    { label: "PDF zu Bildern — Seiten im Browser exportieren", path: "/pdf-to-images" },
    { label: "Bild zu PDF — der umgekehrte Weg", path: "/image-to-pdf" },
    { label: "PDF zu PNG konvertieren", path: "/guides/how-to-convert-pdf-to-png" },
    { label: "PDF in einzelne Dateien teilen", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "PDF-Konverter", path: "/pdf-converter" },
};

export default content;
