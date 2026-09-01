import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-business",
  hero: {
    eyebrow: "PDF for Business",
    h1: "PDF-Methoden für kleine Teams.",
    highlight: "kleine Teams",
    lead: "Verträge, Rechnungen, Angebote, unterschriebene Vereinbarungen, gescannte Kassenbelege — alle Dokumente, auf denen ein kleines Unternehmen läuft, erledigt vom Handy aus, ohne Lizenzen pro Nutzer oder Enterprise-SaaS.",
    primaryCta: { label: "App öffnen", href: SITE.app.appStore },
  },
  problem: {
    heading: "Warum kleine Teams sich immer wieder mit PDFs abmühen",
    paragraphs: [
      "Kleine Unternehmen leben in PDFs. Angebote gehen als PDF raus, Verträge kommen unterschrieben als PDF zurück, Rechnungen sind PDFs, Kassenbelege werden zu PDFs gescannt, Geheimhaltungsvereinbarungen sind PDFs. Trotzdem sind die Werkzeuge dafür entweder auf Unternehmensniveau bepreist oder webbasiert und störanfällig.",
      "PDF-Software für Unternehmen setzt eine IT-Abteilung und einen Beschaffungsprozess voraus. Kostenlose Web-Tools setzen voraus, dass es dir nichts ausmacht, Kundenverträge auf den Server eines Dritten zu laden. Keines der beiden Modelle passt zu einer Fünf-Personen-Agentur, einem Freelancer oder einem kleinen Onlineunternehmen, das Dokumente schnell und ohne Bürokratie verarbeiten muss.",
      "Ein natives, mobil-first gedachtes PDF-Werkzeug passt besser zu kleinen Teams. Keine Lizenzplätze zu verwalten, keine Upload-Warteschlangen zu koordinieren, keine monatlichen Gebühren für ein Tool, das ein paar Mal die Woche genutzt wird. Jedes Teammitglied installiert die App auf dem eigenen Handy und ist ab dem ersten Tag produktiv.",
    ],
  },
  features: {
    heading: "Die Vorgänge, auf die es kleinen Teams ankommt",
    items: [
      {
        icon: "FileSignature",
        title: "Angebot → Vertrag → Unterschrift",
        body: "Ein PDF-Angebot verschicken, die unterschriebene Annahme entgegennehmen, das Ergebnis ablegen. Der ganze Ablauf passt aufs Handy.",
      },
      {
        icon: "Receipt",
        title: "Kassenbelege direkt an der Theke scannen",
        body: "Scanne Papierbelege in dem Moment, in dem du sie bekommst. Automatische Benennung und OCR machen sie fit für die Buchhaltungssoftware.",
      },
      {
        icon: "ShieldCheck",
        title: "Sensible Dokumente schützen",
        body: "Schütze Verträge, Gehaltsabrechnungen und Kopien von Geheimhaltungsvereinbarungen mit einem Passwort, bevor du sie extern teilst. AES-256, auf dem Gerät.",
      },
      {
        icon: "Combine",
        title: "Liefergegenstände zusammenführen und aufteilen",
        body: "Führe ein Angebot mit dem zugehörigen Leistungsumfang zusammen; teile einen langen Export pro Kunde auf. Beides sind Vorgänge mit drei Tipps.",
      },
      {
        icon: "Wand",
        title: "Schnelle Korrekturen, kein Laptop nötig",
        body: "Korrigiere einen Tippfehler in einem Angebot, aktualisiere ein Datum auf einer Rechnung, tausche das Logo auf einer Broschüre aus — alles vom Handy aus.",
      },
      {
        icon: "Globe",
        title: "Funktioniert mit deiner bestehenden Cloud",
        body: "Drive, iCloud, OneDrive, Dropbox — die App liest und schreibt dort, wo dein Team seine Dateien ohnehin schon speichert.",
      },
    ],
  },
  steps: {
    heading: "Ein typischer Ablauf für ein kleines Unternehmen",
    items: [
      {
        title: "Eine Anfrage geht ein",
        body: "Ein Kunde bittet um ein Angebot. Du erstellst es in deinem Rechnungstool und exportierst es als PDF.",
      },
      {
        title: "Unterschreiben und mit Datum versehen",
        body: "Öffne das PDF in PDF Editor, unterschreibe mit deiner gespeicherten Unterschrift, füge einen Datumsstempel hinzu.",
      },
      {
        title: "Per E-Mail oder Messaging versenden",
        body: "Teile das unterschriebene Angebot direkt aus der App über das E-Mail-Teilen-Menü oder das Messaging-Tool deines Teams.",
      },
      {
        title: "Die gegengezeichnete Version entgegennehmen",
        body: "Wenn der Kunde die Datei zurückschickt, öffne sie, archiviere sie in deiner Cloud und schütze sie mit einem Passwort, falls sie sensible Bedingungen enthält.",
      },
      {
        title: "Rechnung erstellen und mit dem Vertrag zusammenführen",
        body: "Exportiere die Rechnung aus deinem Buchhaltungstool und nutze dann Zusammenführen, um Rechnung und unterschriebenen Vertrag zu einem ordentlichen Archiv-PDF zu bündeln.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Ein Unternehmen vom Handy aus führen",
    body: "Ein Großteil der Dokumentarbeit in kleinen Unternehmen passiert zwischen anderen Dingen — beim Kunden vor Ort, im Taxi, zwischen zwei Terminen. Mobil-nativ zu arbeiten bedeutet, dass der Ablauf nicht an einen Schreibtisch gebunden ist. Verträge, auf die man früher bis zum abendlichen Laptop-Termin gewartet hat, gehen jetzt in derselben Stunde raus, in der sie angefragt wurden.",
  },
  faq: [
    {
      q: "Eignet sich die App für ein Team von 5 bis 20 Personen?",
      a: "Ja, für einzelne Nutzer in einem kleinen Team — jede Person installiert die App auf ihrem Handy. Es gibt keine zentrale Verwaltungskonsole; es ist ein Werkzeug pro Gerät. Für größere Organisationen ist ein Enterprise-Dokumentenmanagementsystem eventuell besser geeignet.",
    },
    {
      q: "Kann ich das für rechtsverbindliche Verträge nutzen?",
      a: "In den meisten Rechtsordnungen werden unterschriebene PDFs für gängige Geschäftsverträge akzeptiert. Die eIDAS-Verordnung der EU und der US-amerikanische ESIGN Act erkennen elektronische Unterschriften an. Bei besonders wertvollen, regulierten oder grenzüberschreitenden Vereinbarungen solltest du die lokalen Regeln prüfen und eine qualifizierte elektronische Signatur in Betracht ziehen.",
    },
    {
      q: "Lässt sich die App mit Buchhaltungstools verbinden?",
      a: "PDF Editor erzeugt Standard-PDFs, die jedes Buchhaltungstool akzeptiert (Xero, QuickBooks, FreeAgent, Pleo und andere). Keine besondere Integration nötig — speichere das PDF einfach in deiner Cloud, und das Buchhaltungstool übernimmt es von dort.",
    },
    {
      q: "Wie halte ich Kundendateien privat?",
      a: "Alle Vorgänge laufen auf dem Gerät. Dateien verlassen dein Handy nur, wenn du sie aktiv teilst. Versieh besonders sensible Dokumente vor dem externen Teilen mit einem Passwortschutz.",
    },
    {
      q: "Wie sieht es mit Prüfpfaden aus?",
      a: "Unterschriebene PDFs enthalten Signaturmetadaten (Zeitstempel, Name des Unterzeichners). Für regulierte Branchen mit vollständigen Prüfpfaden solltest du zusätzlich eine dedizierte E-Signatur-Plattform nutzen — PDF Editor deckt den alltäglichen Geschäftsvertrag ab, nicht regulierte Arbeitsabläufe.",
    },
  ],
  related: [
    { label: "PDF-Sicherheit und Verschlüsselung", path: "/pdf-security" },
    {
      label: "Sichere PDF-Methoden für Unternehmen",
      path: "/guides/secure-pdf-workflows-for-business",
    },
    { label: "PDF auf dem Handy unterschreiben", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Erledige Dokumentvorgänge vom Handy aus.",
    sub: "Kostenlos für den alltäglichen Geschäftsgebrauch. Keine Lizenzen pro Nutzer.",
  },
};

export default content;
