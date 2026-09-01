import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-phone",
  h1: "PDF am Handy unterschreiben",
  description:
    "Füge PDFs von deinem iPhone oder Android aus rechtsgültige elektronische Unterschriften hinzu. Praktische Anleitung mit der PDF-Editor-App.",
  updated: "2026-05-11",
  intro: [
    "Ein PDF nur zum Unterschreiben auszudrucken und wieder einzuscannen, ist aus der Zeit gefallen. In den meisten Rechtsordnungen sind elektronische Unterschriften für gewöhnliche Geschäftsverträge, NDAs, Angebote und Bestätigungen anerkannt. Dein Handy erzeugt in unter einer Minute eine saubere, rechtlich verwendbare Unterschrift.",
    "Diese Anleitung zeigt, wie du ein PDF auf iPhone oder Android mit der App PDF Editor unterschreibst. Die gespeicherte Unterschrift nutzt du für alle künftigen Dokumente wieder — du zeichnest sie nur einmal. Danach besteht das Unterschreiben eines Vertrags aus vier Tipps: öffnen, auf Unterschreiben tippen, platzieren, exportieren.",
    "Außerdem geht es um die Fälle, in denen das Unterschreiben am Handy sogar besser ist als am Schreibtisch: Verträge, die schnell zurückmüssen, Unterschriften unterwegs und Abläufe mit mehreren Unterzeichnenden, bei denen das Dokument zwischen Handys wandert. Am Ende hast du eine gespeicherte Unterschrift, bereit für jedes künftige Dokument.",
  ],
  steps: [
    {
      title: "Öffne das PDF",
      body: "Füge das Dokument über Dateien, deinen Cloud-Speicher, E-Mail oder eine beliebige Teilen-Funktion zur App PDF Editor hinzu. Der Ablauf zum Unterschreiben funktioniert unabhängig davon, woher das PDF stammt.",
    },
    {
      title: "Tippe auf das Werkzeug Unterschreiben",
      body: "Du findest es in der Bearbeitungsleiste. Wähle zwischen handschriftlicher Unterschrift, getippter Unterschrift oder Initialen. Enthält das PDF bereits Unterschriftfelder, erkennt das Werkzeug sie automatisch.",
    },
    {
      title: "Zeichne oder tippe deine Unterschrift",
      body: "Das machst du nur beim ersten Mal. Nutze deinen Finger, den Apple Pencil oder einen S Pen. Das Ergebnis wird auf deinem Gerät gespeichert. In den Einstellungen kannst du sie jederzeit bearbeiten oder ersetzen.",
    },
    {
      title: "Platziere die Unterschrift",
      body: "Ziehe sie an die richtige Stelle auf der Seite. Über die Eckpunkte änderst du die Größe. Die Unterschrift wird zu einem normalen PDF-Objekt, du kannst sie also auch nach dem Platzieren noch verschieben.",
    },
    {
      title: "Datum und Initialen ergänzen, falls nötig",
      body: "Viele Verträge verlangen ein Datum neben der Unterschrift und Initialen auf jeder Seite. Ein Datumsstempel mit einem Tipp und eine gespeicherte Initialen-Variante decken beide Fälle ab.",
    },
    {
      title: "Unterschriebene Kopie exportieren",
      body: "Speichere als neue Datei (empfohlen — so bleibt das unsignierte Original erhalten) oder überschreibe das Original. Das exportierte PDF enthält Metadaten zur Unterschrift für die eigene Dokumentation. Teile es per E-Mail, AirDrop, Drive oder einer beliebigen Messaging-App.",
    },
  ],
  tips: [
    "Nutze bei Dokumenten, die eine optische Prüfung durchlaufen, lieber einen Stylus als den Finger. Der sauberere Strich macht bei kundenseitigen Verträgen einen echten Unterschied.",
    "Speichere deine Unterschrift einmal und nutze sie danach für jedes weitere Dokument — die App speichert sie ausschließlich lokal auf deinem Gerät, ohne sie irgendwohin zu übertragen.",
    "Nutze eine getippte Unterschrift für routinemäßige interne Bestätigungen und eine handschriftliche für externe Verträge.",
    "Schütze besonders sensible unterschriebene Dokumente vor dem Teilen mit einem Passwort — das Werkzeug Schützen setzt du nach dem Unterschreiben ein.",
    "Bewahre das unsignierte Original zusammen mit der unterschriebenen Version in einem Ordner auf. Fragt eine Gegenpartei nach einer „sauberen“ Kopie, oder musst du mit Korrekturen neu unterschreiben, hast du sie zur Hand.",
  ],
  mobileNote:
    "Am Handy zu unterschreiben bedeutet, dass Verträge innerhalb einer Stunde zurück sind — manchmal innerhalb von Minuten. Dieser Geschwindigkeitsvorteil zählt besonders dann, wenn du nicht am Schreibtisch arbeitest: beim Kunden vor Ort, zwischen Meetings oder unterwegs. Der gesamte Ablauf, vom Erhalt des Vertrags bis zum Zurückschicken der unterschriebenen Version, passt bequem in eine Kaffeepause.",
  faq: [
    {
      q: "Ist eine elektronische Unterschrift rechtsgültig?",
      a: "In den meisten Rechtsordnungen ja, für gewöhnliche Geschäftsverträge. Sowohl die eIDAS-Verordnung der EU als auch der US-amerikanische ESIGN Act erkennen einfache elektronische Unterschriften an. Bei besonders wertvollen oder gesetzlich regulierten Dokumenten solltest du die jeweils geltenden Regeln prüfen — dort kann eine qualifizierte elektronische Signatur verlangt sein, ein anderer, deutlich formellerer Prozess.",
    },
    {
      q: "Können mehrere Personen dasselbe PDF unterschreiben?",
      a: "Ja. Gib die Datei über das Teilen-Menü, AirDrop, E-Mail oder eine beliebige Messaging-App an die nächste unterzeichnende Person weiter. Jede Unterschrift wird an ihrer Stelle hinzugefügt, vorherige Unterschriften bleiben erhalten. Die fertige Datei zeigt am Ende alle Unterschriften an der richtigen Position.",
    },
    {
      q: "Sieht die Unterschrift auf einem Handybildschirm sauber aus?",
      a: "Auf modernen Handys ja. Ein Stylus erzeugt einen deutlich saubereren Strich als der Finger, was bei Verträgen mit optischer Prüfung eine Rolle spielt. Für routinemäßige Bestätigungen reicht eine Unterschrift mit dem Finger völlig aus.",
    },
    {
      q: "Wird meine Unterschrift irgendwo auf einem Server gespeichert?",
      a: "Nein. Gespeicherte Unterschriften liegen ausschließlich auf deinem Gerät. Sie werden lokal in Dokumente eingefügt und niemals an unsere Infrastruktur oder Dritte übertragen.",
    },
    {
      q: "Was, wenn das PDF bereits Unterschriftfelder enthält?",
      a: "Die App erkennt vorhandene Unterschriftfelder im Formular und lässt dich direkt hineintippen. Deine Unterschrift passt sich automatisch an Größe und Position an — eine manuelle Anpassung ist nicht nötig.",
    },
  ],
  related: [
    { label: "PDF unterschreiben — die vollständige Übersicht", path: "/sign-pdf" },
    {
      label: "Unterschriebene PDFs mit Passwort schützen",
      path: "/guides/how-to-protect-pdf-file",
    },
    {
      label: "PDF auf dem iPhone bearbeiten",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
  ],
  parentHub: { label: "PDF unterschreiben", path: "/sign-pdf" },
};

export default content;
