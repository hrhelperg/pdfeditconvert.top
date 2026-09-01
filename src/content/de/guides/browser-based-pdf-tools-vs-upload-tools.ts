import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "browser-based-pdf-tools-vs-upload-tools",
  h1: "Browserbasierte PDF-Tools oder Upload-Tools",
  description:
    "Nicht alle „Online“-PDF-Tools sind gleich. Der Unterschied zwischen Tools, die in deinem Browser laufen, und solchen, die deine Datei hochladen – und wie du das erkennst.",
  updated: "2026-05-23",
  intro: [
    "Zwei PDF-Tools können identisch aussehen — dieselbe Webseite, dasselbe Drag-and-drop-Feld, derselbe Download-Button — und trotzdem völlig unterschiedlich mit deiner Datei umgehen. Das eine verarbeitet sie direkt in deinem Browser, auf deinem eigenen Gerät. Das andere lädt sie auf einen Server hoch, erledigt die Arbeit dort und schickt das Ergebnis zurück. Von außen ist das oft nicht zu erkennen, aber bei allem Sensiblen entscheidet genau dieser Unterschied über alles.",
    "Diese Anleitung erklärt diesen Unterschied, warum er wichtig ist, und wie du erkennst, mit welcher Art von Tool du es zu tun hast. Die Tools auf dieser Seite gehören zur ersten Art: Sie laufen in deinem Browser, und deine Datei verlässt nie dein Gerät. Viele beliebte „Online-PDF“-Dienste gehören zur zweiten Art, auch wenn sie das nicht immer offen zeigen.",
    "Upload-Tools sind nicht nutzlos — aber du solltest wissen, welcher Art von Tool du dein Dokument gerade anvertraust, und das bewusst entscheiden.",
  ],
  steps: [
    {
      title: "Verstehe, was „browserbasiert“ wirklich bedeutet",
      body: "Ein echtes browserbasiertes Tool erledigt die Verarbeitung direkt auf der Seite, mit dem Prozessor deines Geräts. Deine Datei wird lokal gelesen und nie übertragen — die Arbeit passiert genau dort, wo die Datei bereits liegt.",
    },
    {
      title: "Verstehe, was ein Upload-Tool macht",
      body: "Ein Upload-Tool schickt deine Datei auf einen entfernten Server, verarbeitet sie dort und schickt das Ergebnis zurück. Dein Dokument liegt dabei kurzzeitig auf der Infrastruktur einer fremden Firma, unterworfen deren Aufbewahrungs- und Datenschutzregeln.",
    },
    {
      title: "Achte auf die verräterischen Zeichen",
      body: "Ein Upload-Tool zeigt meist einen Fortschrittsbalken, der von deiner Internetgeschwindigkeit abhängt, funktioniert offline oft gar nicht und erwähnt häufig, dass Dateien „nach einer Stunde gelöscht“ werden — ein Satz, der nur Sinn ergibt, wenn sie deine Datei überhaupt erst hatten.",
    },
    {
      title: "Teste es offline",
      body: "Lade das Tool, schalte dann deine Internetverbindung aus und versuch es zu benutzen. Ein echtes browserbasiertes Tool funktioniert weiter; ein Upload-Tool kann das nicht, weil es die Datei nirgendwohin schicken kann.",
    },
    {
      title: "Wähle passend zum Dokument",
      body: "Für öffentliche, unbedenkliche Dateien ist beides in Ordnung. Bei Verträgen, Ausweisen, Kontoauszügen und Kundenarbeit wähle ein browserbasiertes Tool, damit das Dokument dein Gerät nie verlässt.",
    },
    {
      title: "Nutze Tools, die direkt auf dem Gerät arbeiten, für die sensiblen Aufgaben",
      body: "Die Tools auf dieser Seite — Zusammenführen, Teilen, Komprimieren, Konvertieren, Drehen und der Rest — laufen in deinem Browser. Greif zu ihnen, wenn Datenschutz wirklich zählt.",
    },
  ],
  tips: [
    "„Online“ sagt dir nicht, ob eine Datei hochgeladen wird. Die eigentliche Frage ist, wo die Verarbeitung passiert — auf deinem Gerät oder auf deren Server.",
    "Der Offline-Test ist die zuverlässigste Prüfung: Ein browserbasiertes Tool funktioniert auch ohne Verbindung weiter, ein Upload-Tool nicht.",
    "„Wir löschen deine Dateien nach einer Stunde“ ist nur dann beruhigend, wenn du überhaupt wolltest, dass sie hochgeladen werden. Ein Tool, das nie etwas hochlädt, hat auch nichts zu löschen.",
    "Geschwindigkeit ist ein Hinweis: Browserbasierte Tools haben keine Wartezeit fürs Hoch- oder Herunterladen, deshalb sind große Dateien lokal oft schneller fertig, als wenn sie erst zu einem Server und zurück reisen müssen.",
    "Upload-Tools sind nicht böse — für einen öffentlichen Flyer ist das völlig in Ordnung. Gib ihnen nur keinen Vertrag oder Ausweis, ohne kurz nachzudenken.",
  ],
  mobileNote:
    "Am Handy verbraucht ein Upload-Tool zusätzlich dein Datenvolumen und stockt bei schwacher Verbindung. Die PDF-Editor-App verarbeitet alles direkt auf dem Gerät und funktioniert vollständig offline — du kannst also im Zug ohne Empfang ein sensibles Dokument zusammenführen oder komprimieren, und nichts verlässt dabei dein Handy.",
  faq: [
    {
      q: "Sind alle Online-PDF-Tools gleich?",
      a: "Nein. Manche verarbeiten deine Datei im Browser auf deinem Gerät, andere laden sie auf einen Server hoch. Sie können identisch aussehen, deshalb übersieht man den Unterschied leicht — aber genau er entscheidet, ob dein Dokument dein Gerät verlässt.",
    },
    {
      q: "Wie erkenne ich, ob ein Tool meine Datei hochlädt?",
      a: "Probier es offline aus. Ein browserbasiertes Tool funktioniert auch ohne Verbindung weiter; ein Upload-Tool kann das nicht, weil es die Datei nirgendwohin schicken kann. Upload-Tools zeigen außerdem meist Fortschrittsbalken, die von der Netzwerkgeschwindigkeit abhängen.",
    },
    {
      q: "Sind die Tools auf dieser Seite browserbasiert?",
      a: "Ja. Zusammenführen, Teilen, Komprimieren, Konvertieren, Drehen und die anderen laufen in deinem Browser, mit dem Prozessor deines Geräts. Deine Dateien werden nie hochgeladen.",
    },
    {
      q: "Ist es jemals in Ordnung, ein Upload-Tool zu nutzen?",
      a: "Bei öffentlichen, unbedenklichen Dokumenten ja. Vorsicht ist bei Verträgen, Ausweisen, Kontoauszügen und Kundenarbeit geboten — dort hält ein browserbasiertes Tool die Datei auf deinem Gerät.",
    },
    {
      q: "Warum sind browserbasierte Tools manchmal schneller?",
      a: "Es gibt keine Wartezeit fürs Hoch- oder Herunterladen. Die Datei ist bereits auf deinem Gerät, deshalb schlägt die lokale Verarbeitung bei großen Dokumenten oft den Umweg über einen Server.",
    },
  ],
  related: [
    { label: "Alle kostenlosen PDF-Tools — browserbasiert, ohne Upload", path: "/pdf-tools" },
    { label: "PDF-Tools mit Datenschutz im Fokus — Dokumente auf deinem Gerät behalten", path: "/guides/privacy-first-pdf-tools" },
    { label: "PDF-App oder Online-PDF-Tools — was ist besser?", path: "/compare/pdf-app-vs-online-pdf-tools" },
    { label: "PDF online komprimieren, ohne es hochzuladen", path: "/guides/how-to-compress-pdf-online" },
  ],
  parentHub: { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
};

export default content;
