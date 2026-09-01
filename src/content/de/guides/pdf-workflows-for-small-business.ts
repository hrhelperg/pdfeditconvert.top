import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-small-business",
  h1: "PDF-Workflows für kleine Unternehmen (Angebote, Verträge, Ablage)",
  description:
    "Wie ein kleines Unternehmen seine Dokumente mit PDFs organisiert – Angebote raus, Verträge zurück, Ablage archiviert – ganz ohne teures Abo-Paket dafür.",
  updated: "2026-05-29",
  intro: [
    "Ein kleines Unternehmen hat mit mehr PDFs zu tun, als die Inhaberin erwartet. Angebote gehen raus, unterschriebene Verträge kommen zurück, Rechnungen werden verschickt, Kontoauszüge abgelegt, Steuerunterlagen sammeln sich an. Jede dieser Aufgaben ist für sich klein, aber ohne durchdachten Ablauf frisst jede einzelne Zeit.",
    "Teure PDF-Suiten lohnen sich, wenn eine eigene Rechtsabteilung dahintersteht. Für ein Fünf-Personen-Unternehmen mit ein paar Dutzend Dokumenten pro Woche erledigen kostenlose Browser-Tools und eine klare Konvention dieselbe Arbeit, ganz ohne zusätzlichen Posten im Abo. Der Trick: den Ablauf einmal festhalten und sich konsequent daran halten.",
    "Diese Anleitung beschreibt den Ablauf für die vier Dokumenttypen, die kleine Unternehmen am häufigsten als PDF bearbeiten: Angebote, Verträge, Rechnungen und Ablage. Jeder Abschnitt ist kurz, konkret, und keiner davon kostet etwas.",
  ],
  steps: [
    {
      title: "Angebote: Word-Vorlage → Word in PDF → Versand im Corporate Design",
      body: "Erstelle das Angebot aus einer Word-Vorlage, trage Kundendaten und Positionen ein und exportiere es mit Word in PDF. Gestalte das Deckblatt im eigenen Branding, benenne die Datei KundenName_Angebot_JJJJ-MM-TT.pdf und verschicke sie.",
    },
    {
      title: "Verträge: PDF → PDF unterschreiben → sperren → Gegenzeichnung",
      body: "Finalisiere den Text in der Quelldatei, exportiere als PDF, unterschreibe mit PDF unterschreiben, sperre die Datei, falls dein Tool das unterstützt, und schicke sie zur Gegenzeichnung. Bewahre sowohl die einfach als auch die vollständig unterschriebene Version auf.",
    },
    {
      title: "Rechnungen: fortlaufende Nummerierung, Wasserzeichen bei Zahlungseingang",
      body: "RE-2026-001, RE-2026-002. Führe eine Übersicht in einer Tabelle. Sobald die Zahlung eingeht, stempelt Wasserzeichen zu PDF hinzufügen ein „BEZAHLT“ auf die Rechnung, und die Datei wandert von /offen/ nach /bezahlt/.",
    },
    {
      title: "Ablage: empfangen, komprimieren, nach Jahr archivieren",
      body: "Kontoauszüge, Lieferantenrechnungen, Spesenbelege. Als PDF empfangen, fürs Archiv komprimieren, nach Jahr in /Ablage/2026/ einsortieren. Mindestens sieben Jahre aufbewahren.",
    },
    {
      title: "Nutze eine gemeinsame Ordnerstruktur",
      body: "Oberste Ordnerebene für /Kunden/, /Ablage/, /Intern/, /Vorlagen/, /Archiv/. Maximal zwei Verschachtelungsebenen. Das ganze Team arbeitet mit derselben Struktur.",
    },
    {
      title: "Gleiche monatlich ab",
      body: "Geh einmal im Monat den Ordner /offen/ für Rechnungen und die aktiven Projekte unter /kunden/ durch. Älter als 30 Tage: nachhaken. Älter als 90 Tage: eskalieren. Der Ordner ist deine To-do-Liste.",
    },
  ],
  tips: [
    "Erfinde die Vorlage nicht jedes Mal neu. Erstelle je eine Vorlage für Angebot, Vertrag und Rechnung und nutze sie immer wieder.",
    "Unterschreibe mit einer echten Unterschrift, nicht mit getipptem Namen. Handschriftliche Unterschriften halten im Streitfall besser stand.",
    "Komprimiere jedes Dokument direkt vor dem Versand — ausgehende Dateien sind immer kleiner als die internen Originale.",
    "Verschicke keine bearbeitbaren Word-Dateien an Kundinnen. Als PDF ist der Stand festgeschrieben.",
    "Räume das Archiv einmal im Quartal auf. Abgeschlossene Projekte wandern nach /Archiv/; die aktiven Ordner bleiben kurz und übersichtlich.",
  ],
  mobileNote:
    "Inhaberinnen kleiner Unternehmen erledigen die Hälfte ihrer PDF-Arbeit unterwegs — einen Vertrag zwischen zwei Terminen unterschreiben, eine Rechnung direkt von der Baustelle verschicken, einen Beleg tagsüber ablegen. Die PDF-Editor-App deckt alle vier Dokumenttypen mobil und offline ab, sodass die Arbeit nicht auf den Schreibtisch warten muss.",
  faq: [
    {
      q: "Brauche ich eine Buchhaltungssoftware für die Rechnungsstellung?",
      a: "Bei geringem Volumen nicht. Eine Word-Vorlage, eine Übersichtstabelle und ein Ordnersystem reichen für einige Dutzend Rechnungen im Monat völlig aus. Software lohnt sich erst mit wachsendem Umfang.",
    },
    {
      q: "Wie behalte ich den Überblick über offene Verträge?",
      a: "Über eine Ordnerstruktur: /Kunden/Aktiv/[Name]/vertraege/versendet/ und .../unterschrieben/. Der Ordnerstand ist der Status — eine Tabelle brauchst du dafür nicht.",
    },
    {
      q: "Wie sieht es mit Backups aus?",
      a: "Synchronisiere den Dokumentenordner mit mindestens einem Cloud-Speicher (Dropbox, iCloud, Google Drive). Lege für die Jahre mit Steuerunterlagen zusätzlich regelmäßig eine externe Sicherung an.",
    },
    {
      q: "Sollte ich pro Dokumenttyp nur eine Vorlage verwenden?",
      a: "Ja. Einheitliche Vorlagen machen Dokumente wiedererkennbar und reduzieren den Aufwand pro Dokument. Passe den Inhalt an, nicht die Struktur.",
    },
    {
      q: "Ab wann lohnt sich eine kostenpflichtige PDF-Suite?",
      a: "Wenn du automatisiertes Routing, Massen-Signaturen oder nachvollziehbare Prüfpfade brauchst — meist ab etwa 20 Mitarbeitenden oder bei regulierten Abläufen.",
    },
  ],
  related: [
    { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
    { label: "PDF unterschreiben — elektronische Signaturen", path: "/sign-pdf" },
    { label: "Wie du Rechnungen als PDF verwaltest", path: "/guides/how-to-manage-invoices-as-pdf" },
    { label: "Die besten kostenlosen PDF-Tools für kleine Unternehmen", path: "/guides/best-pdf-tools-for-small-business" },
  ],
  parentHub: { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
};

export default content;
