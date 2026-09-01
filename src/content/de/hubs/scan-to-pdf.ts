import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "scan-to-pdf",
  hero: {
    eyebrow: "Scan to PDF",
    h1: "Verwandle Papier in saubere, durchsuchbare PDFs.",
    highlight: "saubere",
    lead: "Nutze die Handykamera, um Kassenbelege, Ausweise, Verträge und mehrseitige Dokumente zu scannen. Automatische Kantenerkennung, Perspektivkorrektur und OCR — in Sekunden, direkt auf dem Gerät.",
    primaryCta: { label: "App öffnen", href: SITE.app.appStore },
  },
  problem: {
    heading: "Warum Handyfotos von Dokumenten schlecht aussehen",
    paragraphs: [
      "Ein Foto eines Vertrags mit der Standardkamera ergibt ein JPG, das von der Deckenbeleuchtung überstrahlt, durch den Winkel deines Handys verzerrt ist und die Unterlage hinter der Seite mit zeigt. Falsche Form, falscher Kontrast, nicht durchsuchbar. Wer es von dir bekommt, muss die Augen zusammenkneifen.",
      "Schick so ein JPG an eine Buchhaltung, und du bekommst höflich die Bitte um „ein richtiges PDF“ zurück. Der Grund ist real: JPG-Kassenbelege lassen sich nicht indizieren, ihre Buchhaltungssoftware kann sie nicht per OCR erfassen, und sie bestehen oft nicht einmal die Validierung beim Hochladen von Dokumenten.",
      "Eine Dokumentenscanner-App baut das Foto so um, wie es aussehen sollte: rechteckig, kontrastkorrigiert, entzerrt und als PDF mit unsichtbarem Text im Hintergrund gespeichert. Aus mehrseitigen Dokumenten wird eine einzige Datei — nicht zwölf JPGs in der Fotogalerie.",
    ],
  },
  features: {
    heading: "Scanne wie mit einem echten Scanner",
    items: [
      {
        icon: "ScanLine",
        title: "Automatische Kantenerkennung",
        body: "Die App findet die Ränder des Dokuments automatisch und löst den Scan aus, sobald der Ausschnitt stimmt.",
      },
      {
        icon: "Maximize",
        title: "Perspektivkorrektur",
        body: "Schiefe Winkel werden geradegerückt. Das Ergebnis sieht aus, als wäre es direkt von oben fotografiert.",
      },
      {
        icon: "Layers",
        title: "Mehrseitige Scans",
        body: "Erfasse Seite für Seite nacheinander. Die App fügt sie zu einem einzigen PDF zusammen.",
      },
      {
        icon: "ScanText",
        title: "OCR (durchsuchbarer Text)",
        body: "Erkenne die Wörter in gescannten Seiten, sodass das entstandene PDF durchsuchbar und kopierbar ist.",
      },
      {
        icon: "Sun",
        title: "Intelligente Filter",
        body: "Farb-, Schwarz-Weiß- oder dokumentenoptimierte Filter gleichen Lichtprobleme aus.",
      },
      {
        icon: "Tag",
        title: "Automatische Benennung",
        body: "Die App schlägt Dateinamen anhand des Dokumentinhalts vor — Kassenbelege, Verträge, Ausweise.",
      },
    ],
  },
  steps: {
    heading: "So scannst du ein Dokument als PDF",
    items: [
      {
        title: "Öffne den Scanner",
        body: "Tippe auf die Kachel Scannen auf dem Startbildschirm der App PDF Editor.",
      },
      {
        title: "Richte das Handy auf das Dokument",
        body: "Halte das Handy ungefähr über die Seite. Die App findet die Kanten und pulsiert, sobald sie bereit ist.",
      },
      {
        title: "Lass die App automatisch auslösen",
        body: "Oder tippe manuell aus. Die Aufnahme ist sofort da.",
      },
      {
        title: "Passe die Ecken bei Bedarf an",
        body: "Feinjustiere die erkannten Kanten, bevor die Perspektive korrigiert wird.",
      },
      {
        title: "Füge weitere Seiten hinzu",
        body: "Tippe auf den Seitenzähler, um fortzufahren. Die App fügt sie in der richtigen Reihenfolge zusammen.",
      },
      {
        title: "Speichere als PDF",
        body: "Wähle einen Dateinamen (oder übernimm den Vorschlag) und speichere. OCR läuft im Hintergrund.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Scannen, wo du gerade bist",
    body: "Kassenbelege werden am Tisch gescannt, Verträge im Besprechungsraum, Ausweise beim Check-in am Flughafen. Der ganze Sinn dahinter: Du trägst keinen Flachbettscanner in der Tasche mit dir herum. Ein Dokumentenscanner auf dem Handy ist der nächstbeste Ersatz und reicht für die alltäglichen geschäftlichen Anforderungen völlig aus.",
  },
  faq: [
    {
      q: "Ist die Scanqualität so gut wie bei einem Flachbettscanner?",
      a: "Bei alltäglichen geschäftlichen Dokumenten — Kassenbelegen, Verträgen, Ausweisen, Formularen — ja. Für die archivarische Fotodigitalisierung oder feinen Druck auf Hochglanzpapier ist ein Flachbettscanner noch immer im Vorteil.",
    },
    {
      q: "Wie zuverlässig ist das mehrseitige Scannen?",
      a: "Sehr zuverlässig. Die App erfasst weiter, bis du aufhörst, und du kannst Seiten vor dem Speichern neu anordnen oder löschen.",
    },
    {
      q: "Welche Sprachen unterstützt die OCR?",
      a: "Alle wichtigen lateinschriftlichen Sprachen sowie Kyrillisch, Griechisch, Arabisch, Chinesisch, Japanisch und Koreanisch. Die Erkennungsqualität hängt von Beleuchtung und Zustand der Seite ab.",
    },
    {
      q: "Kann ich Ausweise und Reisepässe scannen?",
      a: "Ja. Die App erstellt einen sauberen, entzerrten Scan, den du speichern oder teilen kannst. Aus Sicherheitsgründen solltest du Ausweisscans in einem geschützten Ordner aufbewahren oder das entstandene PDF mit einem Passwort versehen.",
    },
    {
      q: "Funktioniert das offline?",
      a: "Scannen und Kantenerkennung laufen auf dem Gerät. Die OCR für einige seltenere Sprachen benötigt beim ersten Einsatz eventuell eine Verbindung, um das Modell herunterzuladen.",
    },
  ],
  related: [
    {
      label: "Schritt für Schritt: Dokumente als PDF scannen",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    { label: "Das gescannte PDF im Nachhinein bearbeiten", path: "/pdf-editor" },
    {
      label: "PDF für Unternehmen",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Scanne Dokumente direkt mit der Kamera.",
    sub: "Kostenlos für iOS und Android. Scans bleiben auf deinem Gerät.",
  },
};

export default content;
