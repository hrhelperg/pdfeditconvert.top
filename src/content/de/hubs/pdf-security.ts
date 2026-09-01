import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-security",
  hero: {
    eyebrow: "PDF Security",
    h1: "Schütze sensible PDFs richtig.",
    highlight: "richtig",
    lead: "Passwörter, AES-256-Verschlüsselung, Schwärzung und Nutzungseinschränkungen — für Verträge, Gehaltsabrechnungen und gescannte Ausweise. Genau der Schutz, den sensible Dokumente verdienen.",
    primaryCta: { label: "App öffnen", href: SITE.app.appStore },
  },
  problem: {
    heading: "Warum die meisten „geschützten“ PDFs es gar nicht sind",
    paragraphs: [
      "Erstaunlich viele Menschen teilen Passscans, unterschriebene Verträge und Gehaltsabrechnungen als ganz normale PDFs — per E-Mail, über Messaging-Apps oder als Anhang an Formulare. Wird das E-Mail-Konto oder der Chatverlauf kompromittiert, liegt jedes einzelne dieser Dokumente offen.",
      "Manche Nutzer fügen einen „Schutz“ hinzu, der nur ein von einem kostenlosen Online-Tool gesetztes Öffnen-Passwort ist. Das ist besser als nichts, aber das Passwort ist oft schwach, die Verschlüsselung manchmal noch der veraltete 40-Bit-Algorithmus, und das Tool behält die Datei lange genug, um selbst zu einem Risiko zu werden.",
      "Echte PDF-Sicherheit bedeutet starke Verschlüsselung (AES-256), starke Passwörter und — wo nötig — die Trennung von Bearbeitungs-/Druckrechten und Zugriffsrecht. Das Ganze sollte außerdem auf dem Gerät passieren, denn sobald du ein sensibles Dokument auf ein Web-Tool hochlädst, hast du den Datenschutz bereits verloren.",
    ],
  },
  features: {
    heading: "Sicherheitswerkzeuge, die zum Bedrohungsmodell passen",
    items: [
      {
        icon: "Lock",
        title: "Passwortschutz",
        body: "Lege ein Passwort zum Öffnen des Dokuments fest. Ohne Passwort lässt sich das PDF nicht ansehen.",
      },
      {
        icon: "ShieldCheck",
        title: "AES-256-Verschlüsselung",
        body: "Starke, moderne Verschlüsselung — der Standard, der auch in Unternehmenssystemen eingesetzt wird.",
      },
      {
        icon: "Printer",
        title: "Kopieren und Drucken einschränken",
        body: "Erlaube das Ansehen, blockiere aber das Kopieren von Text, das Drucken oder das Extrahieren von Seiten.",
      },
      {
        icon: "EyeOff",
        title: "Schwärzung",
        body: "Schwärze Namen, Kontonummern oder Unterschriften dauerhaft, bevor du das Dokument teilst.",
      },
      {
        icon: "Stamp",
        title: "Wasserzeichen",
        body: "Füge ein „Vertraulich“- oder empfängerspezifisches Wasserzeichen hinzu, um Weiterleitungen zu erschweren.",
      },
      {
        icon: "Link",
        title: "Tipps zum sicheren Teilen von Passwörtern",
        body: "Integrierte Hinweise dazu, wie du ein Passwort über einen anderen Kanal als das Dokument selbst teilst.",
      },
    ],
  },
  steps: {
    heading: "So schützt du ein PDF",
    items: [
      {
        title: "Öffne das PDF",
        body: "Importiere das Dokument in PDF Editor aus Dateien oder einem beliebigen Cloud-Speicher.",
      },
      {
        title: "Tippe auf Schützen",
        body: "Zu finden im Menü der Dokumentwerkzeuge. Wähle die Schutzstufe, die du brauchst.",
      },
      {
        title: "Lege das Passwort fest",
        body: "Verwende ein starkes Passwort — mindestens 12 Zeichen, eine Mischung aus Buchstaben, Zahlen und Symbolen.",
      },
      {
        title: "(Optional) Wähle Einschränkungen",
        body: "Erlaube oder blockiere Drucken, Kopieren und Bearbeiten. Nützlich für Dokumente, die geteilt werden, aber nur lesbar sein sollen.",
      },
      {
        title: "Speichere die geschützte Kopie",
        body: "Speichere als neue Datei, damit das Original zugänglich bleibt, falls du das Passwort vergisst.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Sensible Dokumente unterwegs schützen",
    body: "Die meisten Sicherheitsfehler passieren, wenn es schnell gehen muss. Schutz direkt vom Handy aus bedeutet, dass du einen Vertrag noch am Flughafen verschlüsseln oder eine Gehaltsabrechnung schützen kannst, bevor du sie an einen Auftragnehmer weitergibst — ohne erst einen Desktop-Rechner zu suchen.",
  },
  faq: [
    {
      q: "Welche Verschlüsselung verwendet die App?",
      a: "AES-256, der moderne Standard. Verzichte auf ältere 40-Bit- und 128-Bit-RC4-Verschlüsselung — sie lassen sich mit wenig Aufwand knacken.",
    },
    {
      q: "Was, wenn ich das Passwort vergesse?",
      a: "Es gibt keine Hintertür. Starke Verschlüsselung bedeutet, dass das Dokument ohne Passwort nicht wiederhergestellt werden kann. Bewahre es in einem Passwort-Manager auf.",
    },
    {
      q: "Wie teile ich das Passwort sicher?",
      a: "Nutze einen anderen Kanal als das Dokument selbst — schick das Passwort per SMS, wenn du das PDF gemailt hast, oder nutze die sichere Teilen-Funktion eines Passwort-Managers.",
    },
    {
      q: "Ist eine Schwärzung dauerhaft?",
      a: "Ja. Eine korrekte Schwärzung entfernt den zugrunde liegenden Text, statt ihn nur optisch zu überdecken. Selbst Kopieren-und-Einfügen aus dem geschwärzten PDF gibt das Original nicht preis.",
    },
    {
      q: "Kann ich gleichzeitig ein Wasserzeichen und ein Passwort hinzufügen?",
      a: "Ja. Beides ist unabhängig voneinander und lässt sich zusammen anwenden.",
    },
  ],
  related: [
    {
      label: "Schritt für Schritt: PDF mit Passwort schützen",
      path: "/guides/how-to-protect-pdf-file",
    },
    { label: "PDFs unterschreiben, bevor du sie sperrst", path: "/sign-pdf" },
    {
      label: "PDF-Methoden für Unternehmensteams",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Sichere sensible PDFs in Sekunden.",
    sub: "Kostenlos für iOS und Android. Der Schutz läuft auf dem Gerät.",
  },
};

export default content;
