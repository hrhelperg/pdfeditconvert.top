import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-consultants",
  h1: "PDF-Workflows für Berater (Angebote, Berichte, Rechnungen)",
  description:
    "Der PDF-Rhythmus eines Beraters: Angebote, die überzeugen, Berichte, die sich auf dem Smartphone sauber lesen lassen, und Rechnungen, die in Sekunden raus sind. Die browserbasierten Tools, die das schlank halten.",
  updated: "2026-05-29",
  intro: [
    "Beratungsarbeit dreht sich um drei Dokumente: das Angebot, das den Auftrag gewinnt, den Bericht, der ihn liefert, und die Rechnung, die den Kreis schließt. Alles andere — Kickoff-Decks, Interviewnotizen, Status-Updates — ist entweder ein Entwurf für eines dieser drei oder ein Arbeitsdokument, das das Projekt nie verlässt.",
    "Jedes der drei Dokumente hat seine eigenen PDF-Gewohnheiten. Angebote sollen fundiert wirken, ohne schwerfällig zu sein; Berichte müssen sich sauber auf dem Handy lesen lassen, wo die meisten Kundinnen sie zuerst öffnen; Rechnungen müssen am Tag des Projektabschlusses rausgehen. Die Tools für alle drei sind größtenteils kostenlos, und der Ablauf bleibt von Auftrag zu Auftrag gleich.",
    "Diese Anleitung beschreibt diesen Rhythmus — was jedes Dokument braucht, was jedes Tool leistet und wo die Zeit hingeht. Wer diesen Rhythmus über ein Jahr voller Aufträge hinweg strafft, spart spürbar viele Stunden.",
  ],
  steps: [
    {
      title: "Angebot: kompakt, im eigenen Branding, schnell",
      body: "Erstelle es in Word aus deiner Vorlage. Halte es unter 12 Seiten — Kundinnen überfliegen, sie lesen nicht Wort für Wort. Exportiere mit Word in PDF. Deckblatt, Problemstellung, Vorgehen, Ergebnisse, Zeitplan, Preise, Konditionen. Komprimiere auf unter 5 MB. Verschicke es noch am selben Tag.",
    },
    {
      title: "Auftragsbestätigung: signiertes PDF, gesperrt",
      body: "Sobald das Angebot angenommen ist, verschickst du eine unterschriebene Auftragsbestätigung mit PDF unterschreiben. Die Kundin gegenzeichnet und schickt sie zurück. Speichere beide unterschriebenen Fassungen unter /Kunden/[Name]/vertraege/.",
    },
    {
      title: "Zwischenberichte: wöchentlicher PDF-Status",
      body: "Ein kurzes PDF (eine Seite), wöchentlich verschickt. Status, Blockaden, anstehende Entscheidungen. Behandle es als Denkanstoß für klare Struktur, nicht als eigenständiges Ergebnis.",
    },
    {
      title: "Abschlussbericht: auf Überfliegen ausgelegt",
      body: "Management Summary auf Seite eins. Methodik und Details weiter hinten. Nummeriere jede Seite. Bette Schriftarten ein. Wähle Schriftgrößen, die sich auf dem Handy gut lesen lassen. Die meisten Kundinnen lesen zuerst auf dem Handy, erst danach am Laptop.",
    },
    {
      title: "Rechnung: am selben Tag nach Abschluss",
      body: "Rechnung aus Vorlage, fortlaufende Nummer, Export mit Word in PDF, Versand innerhalb von 24 Stunden nach Projektabschluss. Aus einer späten Rechnung wird meist auch eine späte Zahlung.",
    },
    {
      title: "Archiviere den Auftrag",
      body: "Verschiebe den gesamten Kundenordner nach /Archiv/[Jahr]/[Kunde]/, sobald bezahlt wurde. Der aktive Ordner bleibt schlank, das Archiv ist durchsuchbar für Fallstudien und Referenzen.",
    },
  ],
  tips: [
    "Passe die Vorlage nicht für jedes Angebot neu an. Passe den Inhalt an, halte die Struktur konstant — Kundinnen erkennen dich über mehrere Aufträge hinweg wieder.",
    "Führe jedes verschickte Angebot in einer Tabelle mit Datum, Kundin, Betrag und Ergebnis. Die Erfolgsquote zeigt dir, ob du am Angebot feilen solltest.",
    "Berichte, die sich mobil gut lesen, nutzen größere Schrift und kürzere Absätze als Berichte für den Druck. Optimiere für das Gerät, das die Kundin zuerst nutzt.",
    "Versieh Entwürfe während des Projekts mit einem „ENTWURF“-Wasserzeichen, nie die finale Version. Genau das Fehlen macht die finale Version als solche erkennbar.",
    "Pflege einen Ordner /fallstudien/ mit anonymisierten Beispielen aus früheren Projekten. Sie sind der stärkste Beleg in künftigen Angeboten.",
  ],
  mobileNote:
    "Berater sind ständig unterwegs. Die PDF-Editor-App übernimmt das Komprimieren eines Angebots in letzter Minute, das Unterschreiben der Auftragsbestätigung und den Rechnungsversand direkt vom Handy — praktisch, wenn ein Projekt aus dem Zug heraus abgeschlossen wird und die Rechnung noch am selben Tag raus muss.",
  faq: [
    {
      q: "Wie lang sollte ein Angebot sein?",
      a: "Für die meisten Aufträge unter 12 Seiten. Kundinnen überfliegen Angebote. Je kürzer das Angebot, desto eher wird es wirklich gelesen.",
    },
    {
      q: "Brauche ich eine unterschriebene Auftragsbestätigung?",
      a: "Ja. Das Angebot ist ein Verkaufsdokument, die Auftragsbestätigung ist der Vertrag. Beginne nie ohne sie mit der Arbeit.",
    },
    {
      q: "Wie oft sollte ich Zwischenberichte verschicken?",
      a: "Wöchentlich ist der Standard. Täglich bei kurzen, intensiven Projekten. Monatlich bei langen, ruhigeren. Der Rhythmus zählt mehr als das Format.",
    },
    {
      q: "Sollten Berichte gestalterisch aufwendig sein?",
      a: "So weit gestaltet, dass sie professionell wirken — aber nicht so aufwendig, dass sie dich ausbremsen. Eine saubere, typografische Vorlage altert besser als eine überladene.",
    },
    {
      q: "Wann sollte die Rechnung raus?",
      a: "Am selben Tag, an dem das Projekt abgeschlossen wird. Jeder Tag Verzögerung verschiebt die Zahlung auf der anderen Seite meist um mehr als einen Tag.",
    },
  ],
  related: [
    { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
    { label: "Word in PDF — Exporte für Angebote und Berichte", path: "/word-to-pdf" },
    { label: "Der beste PDF-Workflow für Freelancer", path: "/guides/best-pdf-workflow-for-freelancers" },
    { label: "Wie du Verträge als PDF verschickst", path: "/guides/how-to-send-contracts-as-pdf" },
  ],
  parentHub: { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
};

export default content;
