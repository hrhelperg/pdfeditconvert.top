import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "sign-pdf",
  hero: {
    eyebrow: "Sign PDF",
    h1: "PDFs in Sekunden vom Handy aus unterschreiben.",
    highlight: "Sekunden",
    lead: "Füge jedem PDF eine echte handschriftliche Unterschrift, einen getippten Namen oder Initialen hinzu. Platzieren, Größe anpassen, exportieren — ohne drucken, scannen oder dir selbst eine Datei zu mailen.",
    primaryCta: { label: "App öffnen", href: SITE.app.appStore },
  },
  problem: {
    heading: "Warum Drucken und Scannen endlich der Vergangenheit angehört",
    paragraphs: [
      "Die alte Unterschriften-Routine — PDF ausdrucken, unterschreiben, scannen, per Mail zurückschicken — hat sich irgendwie bis ins Jahr 2026 gehalten. Die meisten Unternehmen akzeptieren elektronische Unterschriften, trotzdem kommen viele Verträge noch immer mit „bitte unterschrieben zurücksenden“ an, als hätte selbstverständlich jeder einen Drucker und einen Scanner.",
      "Öffentliche Dienste für elektronische Unterschriften lösen einen Teil des Problems, bringen aber Login-Hürden, Datei-Uploads, Kontoverwaltung und Preisstufen mit sich. Für eine einzige Unterschrift auf einem einzigen Dokument ist das völlig überdimensioniert und kostet unnötig Zeit.",
      "Ein nativer Unterschriften-Ablauf auf dem Handy hat genau die richtige Größe für die Aufgabe: PDF öffnen, Unterschrift zeichnen oder tippen, platzieren, senden. Der ganze Vorgang dauert weniger als eine Minute und funktioniert ohne Konto, im Flugzeug oder auf dem Parkplatz.",
    ],
  },
  features: {
    heading: "Unterschreibe so, wie es zum Dokument passt",
    items: [
      {
        icon: "Pencil",
        title: "Handschriftliche Unterschrift",
        body: "Zeichne mit dem Finger oder einem Stift. Einmal speichern, für jedes künftige Dokument wiederverwenden.",
      },
      {
        icon: "Type",
        title: "Getippte Unterschrift",
        body: "Tippe deinen Namen ein und wähle eine schreibschriftähnliche Schriftart für eine saubere, lesbare Unterschrift.",
      },
      {
        icon: "User",
        title: "Initialen-Stempel",
        body: "Speichere deine Initialen separat für Dokumente, die sie auf jeder Seite benötigen.",
      },
      {
        icon: "Calendar",
        title: "Datumsstempel",
        body: "Füge das Datum mit einem Tippen neben deiner Unterschrift ein, wenn Verträge das verlangen.",
      },
      {
        icon: "Users",
        title: "Ablauf für mehrere Unterzeichner",
        body: "Reiche ein PDF über das Teilen-Menü zwischen Unterzeichnern weiter. Jede Unterschrift bleibt an ihrem Platz.",
      },
      {
        icon: "ShieldCheck",
        title: "Export mit Prüfinformationen",
        body: "Die unterschriebene Kopie enthält einen Zeitstempel und Signaturmetadaten für deine Unterlagen.",
      },
    ],
  },
  steps: {
    heading: "So unterschreibst du ein PDF auf dem Handy",
    items: [
      {
        title: "Öffne das PDF",
        body: "Importiere das Dokument in die App PDF Editor aus Dateien, E-Mail oder einer beliebigen Sharing-App.",
      },
      {
        title: "Tippe auf das Werkzeug Unterschreiben",
        body: "Zu finden in der Bearbeitungsleiste. Wähle handschriftlich, getippt oder Initialen.",
      },
      {
        title: "Zeichne oder tippe deine Unterschrift",
        body: "Nur beim ersten Mal — die Unterschrift wird für die künftige Nutzung gespeichert. In den Einstellungen kannst du sie jederzeit bearbeiten oder ersetzen.",
      },
      {
        title: "Platzieren und Größe anpassen",
        body: "Ziehe die Unterschrift an die richtige Stelle. Passe die Größe mit den Eckgriffen an. Füge bei Bedarf einen Datumsstempel hinzu.",
      },
      {
        title: "Exportiere die unterschriebene Kopie",
        body: "Speichere über das Original oder als neue Kopie. Teile sie direkt per Mail oder einer beliebigen Messaging-App.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Unterschreiben, ohne den Tag zu unterbrechen",
    body: "Eine Unterschrift ist selten der eigentliche Engpass — es ist die Zeit, einen Drucker zu finden. Auf dem Handy zu unterschreiben bedeutet, dass Verträge innerhalb einer Stunde zurück sind, nicht erst am nächsten Tag. Besonders hilfreich für Selbstständige, Kleinunternehmer und alle, die abseits eines Schreibtischs arbeiten.",
  },
  faq: [
    {
      q: "Ist eine elektronische Unterschrift rechtlich gültig?",
      a: "In den meisten Rechtsordnungen ja — für die meisten geschäftlichen Dokumente. Die eIDAS-Verordnung der EU und der US-amerikanische ESIGN Act erkennen elektronische Unterschriften an. Bei besonders wertvollen oder rechtlich heiklen Dokumenten solltest du die lokalen Regeln prüfen und eine qualifizierte elektronische Signatur in Betracht ziehen.",
    },
    {
      q: "Wird meine Unterschrift auf einem Server gespeichert?",
      a: "Nein. Gespeicherte Unterschriften liegen auf deinem Gerät. Sie werden lokal auf Dokumente angewendet und nie auf unsere Infrastruktur hochgeladen.",
    },
    {
      q: "Können mehrere Personen dasselbe PDF unterschreiben?",
      a: "Ja. Reiche die Datei über das Teilen-Menü, AirDrop, E-Mail oder eine beliebige Messaging-App zwischen den Unterzeichnern weiter. Jede Unterschrift wird an Ort und Stelle hinzugefügt und gespeichert.",
    },
    {
      q: "Was, wenn das PDF bereits Unterschriftenfelder hat?",
      a: "Die App erkennt vorhandene Unterschriftenfelder und lässt dich direkt hineintippen. Deine Unterschrift rastet automatisch in der richtigen Größe und Position ein.",
    },
    {
      q: "Kann ich das mit dem Apple Pencil oder S Pen nutzen?",
      a: "Ja. Beide liefern deutlich flüssigere Striche als das Unterschreiben mit der Fingerspitze, was bei Verträgen, die eine optische Prüfung durchlaufen, einen echten Unterschied macht.",
    },
  ],
  related: [
    {
      label: "Schritt für Schritt: PDF auf dem Handy unterschreiben",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "Unterschriebene PDFs mit Passwort schützen", path: "/pdf-security" },
    { label: "Methoden für Selbstständige", path: "/use-cases/freelancers" },
  ],
  appCta: {
    heading: "Unterschreibe PDFs von überall aus.",
    sub: "Kostenlos für iOS und Android. Kein Konto nötig.",
  },
};

export default content;
