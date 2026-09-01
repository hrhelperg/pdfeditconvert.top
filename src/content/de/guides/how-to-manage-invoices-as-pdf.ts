import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-invoices-as-pdf",
  h1: "Rechnungen als PDF verwalten (ausstellen, verfolgen, archivieren)",
  description:
    "Eine Rechnungsmethode mit PDF, die keine Buchhaltungssoftware braucht: erstellen, nummerieren, versenden, verfolgen und archivieren – nur mit kostenlosen Browser-Tools und einem sauberen Ordnersystem.",
  updated: "2026-05-29",
  intro: [
    "Die meisten Kleinunternehmen brauchen für Rechnungen eigentlich keine Buchhaltungssoftware. Sie brauchen einen sauberen Weg, ein PDF zu erstellen, es einheitlich zu nummerieren, zu versenden, den Zahlungseingang zu verfolgen und es für die Steuersaison zu archivieren. Die Arbeit ist mechanisch, die Tools sind einfach; das Chaos entsteht dadurch, dass man die Konvention überspringt.",
    "Eine Rechnungsmethode hat vier Teile: Ausstellung (wo das PDF herkommt), Verfolgung (wo du festhältst, was verschickt wurde), Zahlung (wann sie eingeht) und Archiv (wo die bezahlten Kopien liegen). Jeder Teil ist kurz, und keiner davon braucht ein Abo, wenn du keins willst.",
    "Diese Anleitung zeigt den Arbeitsablauf so, wie ihn ein Freiberufler oder ein kleines Team tatsächlich umsetzen kann — mit PDF-Erstellung aus einer Word-Vorlage, einer Nummerierung, die du selbst kontrollierst, und einem Archiv, das eine Steuerprüfung übersteht. Es ist nicht der einzige Weg; es ist der, der nicht zusammenbricht.",
  ],
  steps: [
    {
      title: "Erstelle die Rechnung in Word oder Pages aus einer Vorlage",
      body: "Eine Rechnungsvorlage in Word gibt dir ein bewährtes Layout mit Platzhaltern für Kunde, Datum, Posten, Gesamtsumme. Fülle die Variablen aus und exportiere mit Word zu PDF. Bearbeite die finale Zahl nirgendwo außer in der Quelle.",
    },
    {
      title: "Nutze eine fortlaufende Rechnungsnummer",
      body: "RE-2026-001, RE-2026-002 und so weiter. Setze sie jährlich zurück. Die Nummern müssen eindeutig und lückenlos sein — Finanzbehörden markieren Lücken. Führe eine laufende Liste in einer Tabelle oder Textdatei.",
    },
    {
      title: "Speichere mit einem vorhersehbaren Dateinamen",
      body: "Kundenname_Rechnung_RE-2026-001_2026-05-29.pdf. Die Rechnungsnummer im Dateinamen stimmt mit der Nummer auf dem Dokument überein. Der Kundenordner macht das Auffinden pro Kunde einfach.",
    },
    {
      title: "Sofort versenden und protokollieren",
      body: "Verschicke das PDF mit einer kurzen Begleitnotiz per E-Mail und trage den Versand in deiner Verfolgungstabelle ein. Versanddatum, Rechnungsnummer, Betrag, Fälligkeitsdatum. Die eine Minute, die du nicht protokollierst, ist die, die du vergisst.",
    },
    {
      title: "Versieh die Rechnung mit dem Wasserzeichen BEZAHLT, sobald die Zahlung eingeht",
      body: "Wasserzeichen zu PDF hinzufügen stempelt BEZAHLT samt Datum über die Datei. Die bezahlte Kopie kommt nach /rechnungen/bezahlt/; die unbezahlte bleibt in /rechnungen/offen/. Der sichtbare Status schlägt den Status in einer Tabelle.",
    },
    {
      title: "Nach Jahr archivieren",
      body: "Verschiebe zum Jahresende /rechnungen/bezahlt/ nach /Archiv/Rechnungen/2026/. Bewahre mindestens sieben Jahre auf (je nach Rechtsordnung unterschiedlich). Das Archiv sollte in fünf Jahren noch selbsterklärend sein, wenn du die ursprüngliche Ablagelogik längst vergessen hast.",
    },
  ],
  tips: [
    "Bearbeite eine verschickte Rechnung nie. Ist der Betrag falsch, stelle eine Gutschrift oder eine neue Rechnung aus — der Prüfpfad muss intakt bleiben.",
    "Gleiche die Rechnungsnummer der Datei mit der Rechnungsnummer im Dokument und der Zeile in deiner Verfolgungstabelle ab. Drei Stellen, die dasselbe sagen.",
    "PDF/A ist das Archivformat, das manche Finanzbehörden bevorzugen. Reichst du in einer solchen Rechtsordnung ein, exportiere den Jahresabschluss-Satz erneut als PDF/A.",
    "Komprimiere Rechnungen fürs Archiv — sie bestehen aus reinem Text, aber Archive summieren sich. Komprimierte Kopien sparen über die Jahre echten Speicherplatz.",
    "Schütze Rechnungen nicht mit Passwort, außer der Kunde verlangt es. Reibung ohne Nutzen bei einem Dokument, das nur aus Zahlen und Namen besteht.",
  ],
  mobileNote:
    "Rechnungen entstehen zunehmend am Handy — ein schneller Versand aus dem Café nach einem Auftrag. Die PDF-Editor-App lässt dich die Vorlage ausfüllen, die Rechnungsnummer einstempeln und das PDF vom Handy aus per E-Mail verschicken, mit einer lokal gespeicherten Kopie für deine Unterlagen.",
  faq: [
    {
      q: "Brauche ich eine Rechnungssoftware?",
      a: "Nicht bei geringem Volumen. Eine Word-Vorlage, eine Verfolgungstabelle und ein Ordnersystem bewältigen dutzende Rechnungen im Monat sauber. Software lohnt sich, wenn du wiederkehrende Abrechnung, mehrere Währungen oder viele Kunden brauchst.",
    },
    {
      q: "Welches Rechnungsnummernformat sollte ich nutzen?",
      a: "Fortlaufend, ohne Lücken, idealerweise mit Jahresprefix. RE-2026-001 ist menschenlesbar und prüfungsfreundlich.",
    },
    {
      q: "Wie lange sollte ich Rechnungen aufbewahren?",
      a: "Das hängt von der Rechtsordnung ab; sieben Jahre sind ein sicherer Standardwert. Prüfe die tatsächliche Vorgabe für dein Land.",
    },
    {
      q: "Sollte ich Rechnungen als Word oder PDF verschicken?",
      a: "Immer als PDF. PDFs legen Format und Betrag fest; Word-Dokumente laden wohlmeinende Kunden dazu ein, etwas zu „korrigieren“.",
    },
    {
      q: "Was ist mit Umsatzsteuer- oder Mehrwertsteuerrechnungen?",
      a: "Manche Rechtsordnungen verlangen ein bestimmtes Layout, fortlaufende Nummerierung und Archivierung im Originalformat. Halte dich an die lokalen Vorgaben; der obige Arbeitsablauf berücksichtigt sie.",
    },
  ],
  related: [
    { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
    { label: "Word zu PDF — saubere Rechnungsexporte", path: "/word-to-pdf" },
    { label: "Wasserzeichen zu PDF hinzufügen — BEZAHLT auf abgeschlossene Rechnungen stempeln", path: "/add-watermark-to-pdf" },
    { label: "PDF-Workflows für kleine Unternehmen", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
};

export default content;
