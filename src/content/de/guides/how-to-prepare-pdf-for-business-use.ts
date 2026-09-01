import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-for-business-use",
  h1: "PDF für den geschäftlichen Einsatz vorbereiten (Checkliste)",
  description:
    "Bevor ein PDF das Büro verlässt: Entwürfe entfernen, Seitenzahlen prüfen, Ausrichtung korrigieren, Schriftarten einbetten und die Datei verkleinern. Die Checkliste vor dem Versand für Dokumente, die dein Unternehmen repräsentieren.",
  updated: "2026-05-29",
  intro: [
    "Ein PDF, das dein Unternehmen verlässt, ist ein kleiner Botschafter. Es trägt deinen Namen, dein Corporate Design, deine typografischen Entscheidungen — und viel zu oft den ursprünglichen Dateinamen wie „Unbenanntes Dokument (4).pdf“ von wer auch immer es letzte Woche angefangen hat. Der Unterschied zwischen einem amateurhaften und einem professionellen PDF ist selten dramatisch, aber fast immer auf den ersten Blick sichtbar.",
    "Ein PDF für den geschäftlichen Einsatz vorzubereiten ist kein einzelner Schritt, sondern eine kurze Checkliste. Entwürfe entfernen, richtige Seitenzahlen setzen, Ausrichtung korrigieren, Einbetten der Schriftarten bestätigen, sauber beschriften, sinnvoll komprimieren, einen brauchbaren Dateinamen vergeben. Jeder Schritt dauert Sekunden, das Ganze eine Minute, und das Dokument kommt so an, als hättest du es bewusst so gemacht.",
    "Diese Anleitung geht die Checkliste in der Reihenfolge durch, die die meisten Probleme zuerst auffängt — so, wie du es für eine echte Lieferung an einem echten Dienstagnachmittag tun würdest.",
  ],
  steps: [
    {
      title: "Ungenutzte Seiten und Entwürfe entfernen",
      body: "PDF-Seiten extrahieren behält nur die Seiten, die du wirklich verschicken willst. Deckblätter, die nur Platzhalter waren, leere Dankesseiten, alte Anhänge — all das gehört nicht in die finale Version.",
    },
    {
      title: "Seitenreihenfolge und Seitenzahlen prüfen",
      body: "Nutze PDF-Seiten neu anordnen, falls nach einem Zusammenführen oder einer Überarbeitung etwas durcheinandergeraten ist. Prüfe, ob die sichtbaren Seitenzahlen zur Reihenfolge passen — Leser bemerken falsche Nummerierung schnell.",
    },
    {
      title: "Ausrichtung korrigieren",
      body: "Breite Seiten (Tabellen, Diagramme) gehören ins Querformat; alles andere aufrecht. PDF drehen richtet Scans oder Importe gerade, die schräg hereingekommen sind. Ein Dokument mit gemischter Ausrichtung wirkt kaputt, selbst wenn es das nicht ist.",
    },
    {
      title: "Sicherstellen, dass Schriftarten eingebettet sind",
      body: "Nicht eingebettete Schriftarten werden auf der Leserseite ersetzt, manchmal schlecht. Exportiere aus der Quelle mit aktivierter Option „Alle Schriftarten einbetten“ neu, oder drucke als PDF, um die Darstellung fest zu verankern.",
    },
    {
      title: "Den Dateititel in den Metadaten setzen",
      body: "Der Text, der in Browser-Tabs und Titelleisten von Betrachtern angezeigt wird, weicht oft vom Dateinamen ab. Setze beides bewusst — Kunden bemerken es, wenn ein „Angebot“-Tab „Unbenannt.docx“ anzeigt.",
    },
    {
      title: "Für die Lieferung komprimieren und benennen",
      body: "PDF komprimieren bringt die Datei unter die üblichen Mail- und Portal-Limits. Benenne sie in Kundenname_Dokumenttyp_JJJJ-MM-TT.pdf um, damit der Empfänger die Datei auch noch ein Jahr später aus seinem Downloads-Ordner heraus identifizieren kann.",
    },
  ],
  tips: [
    "Geh das Dokument vor dem Versenden einmal bei 100 % Zoom durch. Das Auge erwischt Überraschungen, die beim Scrollen durchrutschen.",
    "Versieh Entwürfe mit einem Wasserzeichen, aber nie die finale Version — das Fehlen eines Wasserzeichens ist selbst das Signal, dass es sich um die finale Version handelt.",
    "Entferne alte Metadaten. Sowohl PDF Editor als auch ein erneuter Export lassen dich Autor, Firma und Bearbeitungsverlauf ersetzen, die sonst aus Entwürfen durchsickern können.",
    "Hat das Dokument Formularfelder zum Ausfüllen, teste sie auf dem Gerät, an das du sie schickst. Viele Felder funktionieren in Acrobat, aber nicht in Browsern.",
    "Sieh dir die Druckvorschau des Dokuments ein letztes Mal an. Druckt es falsch, wird der Empfänger auf dasselbe Problem stoßen.",
  ],
  mobileNote:
    "Der letzte Feinschliff — einen schräg gescannten Bogen korrigieren, eine überflüssige Entwurfsseite entfernen, für ein E-Mail-Limit neu komprimieren — passiert öfter am Handy, als die meisten zugeben. Die PDF-Editor-App erledigt das alles offline, sodass die Lieferung selbst vom WLAN eines Cafés aus sauber rausgeht.",
  faq: [
    {
      q: "Welcher Schritt wird am häufigsten übersprungen?",
      a: "Das Setzen der Metadaten. Der Dateiname und der Dokumenttitel, die in Tabs und Betrachter-Kopfzeilen angezeigt werden, sind oft Überbleibsel aus der Entwurfsphase. Korrigiere beides vor dem Versenden.",
    },
    {
      q: "Wie wichtig ist Komprimierung?",
      a: "Sehr wichtig, wenn der Empfänger ein strenges Portal oder eine langsame Verbindung nutzt. Weniger wichtig bei einem beiläufigen internen Teilen. Komprimiere im Zweifel standardmäßig — es schadet fast nie.",
    },
    {
      q: "Muss ich bei jedem PDF Schriftarten einbetten?",
      a: "Bei allem, was an Kunden geht, ja. Bei internen Entwürfen, wo alle dieselben Schriftarten installiert haben, weniger kritisch. Der Preis des Einbettens ist gering.",
    },
    {
      q: "Sollte ich immer Seitenzahlen einfügen?",
      a: "Bei mehrseitigen Lieferungen ja. Bei einseitigen Dokumenten nicht. Seitenzahlen helfen dem Leser bei der Navigation und bestätigen die Vollständigkeit.",
    },
    {
      q: "Gibt es ein Tool, das das alles in einem Durchgang erledigt?",
      a: "Nein, und das mit Absicht — jeder Schritt ist eine bewusste Entscheidung, keine automatisierte Umwandlung. Die browserbasierten Tools auf dieser Seite lassen dich jeden Schritt in Sekunden erledigen, ohne sie in eine Blackbox zu packen.",
    },
  ],
  related: [
    { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
    { label: "PDF-Seiten extrahieren — finale Lieferungen zuschneiden", path: "/extract-pdf-pages" },
    { label: "PDFs mit Kunden teilen", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "PDF vor dem Teilen vorbereiten", path: "/guides/how-to-prepare-pdf-before-sharing" },
  ],
  parentHub: { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
};

export default content;
