import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "remote-work",
  h1: "PDF Editor für Remote-Arbeit",
  description:
    "Dokumente unterwegs bearbeiten: PDFs scannen, unterschreiben und teilen — von jedem Gerät, an jedem Ort.",
  intro: [
    "Remote-Arbeit trennt dein Büro von deinem Job. Der Nachteil: Die Dokumentvorgänge, die früher am Drucker, Scanner oder gemeinsamen Laufwerk stattfanden, müssen jetzt auf welchem Gerät auch immer du gerade nutzt passieren — oft im Zug, im Café oder beim Kunden vor Ort. Ein nativer mobiler PDF-Editor schließt genau diese Lücke.",
    "Die Messlatte für jedes Remote-Work-Werkzeug: Es funktioniert bei schwachem WLAN, funktioniert bei Bedarf offline, verlangt kein Hochladen sensibler Dokumente zu einem Dritten und funktioniert auf jedem Gerät, das du gerade zur Hand hast. PDF Editor erfüllt alle vier Punkte, weil sämtliche aufwendigen Vorgänge direkt auf dem Gerät laufen.",
    "Das sind die konkreten Methoden, die aus einem Handy ein tragbares Dokumentenbüro machen — unabhängig von einem bestimmten Schreibtisch, Land oder einer bestimmten Internetverbindung.",
  ],
  workflows: [
    {
      title: "Dokumente unterwegs unterschreiben",
      body: "Unterschreibe einen Vertrag im Flugzeug oder im Zug. Die Unterschrift wird auf dem Gerät gespeichert; die Datei wird beim Speichern verschlüsselt.",
    },
    {
      title: "Scannen, wenn kein Scanner zur Hand ist",
      body: "Hotelzimmer, Konferenzzentren, Kundenbüros — die Handykamera mit automatischer Korrektur reicht für jedes geschäftliche Dokument aus.",
    },
    {
      title: "Dateien für eine Remote-Übergabe zusammenführen",
      body: "Führe die Dokumente, die dein Kollege braucht, zu einem PDF zusammen, teile es über Drive oder Slack, fertig.",
    },
    {
      title: "Vor dem Hochladen bei langsamen Netzen komprimieren",
      body: "Hotel-WLAN macht riesige Anhänge zur Qual. Erst komprimieren, dann hochladen — das spart eine Stunde.",
    },
    {
      title: "Kleine Korrekturen erledigen, ohne einen Laptop zu starten",
      body: "Tippfehler in einem Entwurf, falsches Datum in einem Angebot — korrigiere es in 60 Sekunden auf dem Handy und mach weiter.",
    },
  ],
  appPitch:
    "PDF Editor fügt sich natürlich in den Rest eines Remote-Work-Werkzeugkastens ein — Drive, iCloud, Notion, Slack, Linear, GitHub. Er ist die Ebene, die Dokumentvorgänge erledigt, ohne einen Schreibtisch oder eine stabile Verbindung vorauszusetzen.",
  related: [
    { label: "PDF für Unternehmen", path: "/pdf-for-business" },
    { label: "Anwendungsfälle: Selbstständige", path: "/use-cases/freelancers" },
    { label: "Scan to PDF", path: "/scan-to-pdf" },
  ],
};

export default content;
