import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-a-corrupted-pdf",
  h1: "Beschädigtes PDF reparieren (was wirklich hilft)",
  description:
    "Die meisten „beschädigten“ PDFs sind gar nicht wirklich beschädigt – sie sind abgebrochene Downloads, falsche Anzeigeprogramme oder unvollständig geschriebene Dateien. Die ehrliche Checkliste, die die Datei rettet, und wann sie wirklich verloren ist.",
  updated: "2026-05-29",
  intro: [
    "Fast jedes PDF, das als „beschädigt“ bezeichnet wird, ist eigentlich etwas weniger Dramatisches: ein Download, der nicht fertig wurde, ein Anzeigeprogramm, das eine leicht abweichende Datei nicht lesen will, oder ein Schreibvorgang, der unterbrochen wurde, bevor die Datei abgeschlossen war. Echte Beschädigung – bei der die Bytes in der Datei tatsächlich zerstört sind – ist seltener, als viele denken, und wenn sie vorkommt, gelingt die Rettung bestenfalls teilweise.",
    "Das ist wichtig, weil die Lösungen für diese vier Ursachen völlig unterschiedlich sind. Erneutes Herunterladen dauert Sekunden, ein anderes Anzeigeprogramm zu probieren ebenso, ein erneuter Export dauert eine Minute – eine echte Wiederherstellung auf Byte-Ebene dagegen Stunden und ist oft gar nicht möglich. Zu wissen, in welche Kategorie deine Datei fällt, spart dir also wirklich Zeit.",
    "Diese Anleitung geht die Diagnosen in der Reihenfolge durch, die zuerst am wenigsten Aufwand macht, und erklärt dann, was zu tun ist, wenn die Datei nicht mehr zu retten ist. Die meisten Dateien lassen sich schon bis Schritt drei wiederbeleben.",
  ],
  steps: [
    {
      title: "Lade die Datei erneut herunter oder fordere sie neu an",
      body: "Ein abgebrochener Download sieht für das Anzeigeprogramm genauso aus wie eine Beschädigung. Hol dir die Datei noch einmal. Öffnet sich die zweite Kopie, war die erste unvollständig. Vergleiche, falls angegeben, die Bytegröße mit der Quelle.",
    },
    {
      title: "Probiere mindestens zwei andere Anzeigeprogramme",
      body: "Browser, Vorschau, mobile Reader und Desktop-Apps behandeln PDF jeweils unterschiedlich. Eine Datei, die Acrobat ablehnt, öffnet sich in Chrome manchmal problemlos. Liest auch nur ein Programm die Datei, ist sie nicht wirklich defekt.",
    },
    {
      title: "Öffne die Datei in einem funktionierenden Programm und exportiere neu",
      body: "„Drucken als PDF“ (macOS, Windows, Linux) oder „Als PDF sichern“ aus dem funktionierenden Anzeigeprogramm baut die Dateistruktur neu auf. Die neue Kopie öffnet sich oft auch in Programmen, die das Original abgelehnt haben.",
    },
    {
      title: "Zerlege die Seiten einzeln mit PDF zu Bildern",
      body: "Stellt kein Programm die ganze Datei dar, zeigt aber wenigstens eines teilweisen Inhalt, exportiere jede Seite über PDF zu Bildern als PNG. Aus diesen PNGs lässt sich mit Bild zu PDF ein neues PDF zusammensetzen – Durchsuchbarkeit und Bearbeitbarkeit gehen dabei verloren, aber der Inhalt ist gerettet.",
    },
    {
      title: "Prüfe den Dateikopf in einem einfachen Texteditor",
      body: "Öffne die Datei in TextEdit, Notepad oder VS Code. Ein echtes PDF beginnt mit %PDF- gefolgt von einer Versionsnummer. Steht dort etwas anderes, ist die Datei kein PDF – sie wurde umbenannt, falsch beschriftet oder ersetzt.",
    },
    {
      title: "Bitte die Quelle um eine neue Kopie",
      body: "Lässt sich die Datei durch nichts retten, hat die Quelle das Original noch. Exportiere erneut aus Word, Google Docs oder was auch immer die Datei erzeugt hat. Das ist der einzige Weg, der die volle Qualität zurückbringt.",
    },
  ],
  tips: [
    "Bearbeite oder kombiniere eine Datei nicht weiter, die sich merkwürdig verhält. Sonst schreibst du den Defekt in die neue Datei mit hinein.",
    "Sichere das defekte Original, bevor du einen Reparaturversuch startest. Manche Reparatur-Tools überschreiben die Datei, und die defekte Version könnte teilweisen Inhalt enthalten, den du sonst verlierst.",
    "Dateien, die direkt nach einem unterbrochenen Schreibvorgang (Stromausfall, erzwungenes Beenden beim Speichern) versagen, sind oft nicht mehr zu retten – der strukturelle Index am Ende der Datei wurde nie geschrieben.",
    "Meide „PDF-Reparatur“-Websites, die Wunder versprechen. Sie machen meist nur denselben Re-Export über „Drucken als PDF“, den du selbst erledigen kannst – und laden dabei deine Datei auf einen fremden Server hoch.",
    "Über Bilder gerettete PDFs verlieren jeglichen echten Text und die Durchsuchbarkeit. Nutze diesen Weg nur, wenn dir der Inhalt wichtiger ist als die originalgetreue Datei.",
  ],
  mobileNote:
    "Am Handy ist die übliche Ursache für ein „beschädigtes“ PDF ein instabiler Mobilfunk-Download. Die App PDF Editor speichert Dateien lokal und lässt dich sie erneut laden und öffnen – das behebt das Abbruchproblem, ohne dass du über einen Desktop-Umweg gehen musst.",
  faq: [
    {
      q: "Was ist die häufigste Ursache für ein beschädigtes PDF?",
      a: "Ein Download, der nicht fertig wurde. Die Datei ist genau genommen unvollständig, nicht beschädigt, aber Anzeigeprogramme unterscheiden das nicht. Erneutes Herunterladen löst die meisten Fälle.",
    },
    {
      q: "Gibt es echte PDF-Reparatur-Tools?",
      a: "Manche kommerziellen Tools werben mit „Reparatur“, machen aber meist genau den Re-Export über „Drucken als PDF“, den du kostenlos selbst erledigen kannst. Eine echte strukturelle Reparatur schwer beschädigter PDFs ist Spezialistenarbeit.",
    },
    {
      q: "Hilft Komprimieren bei einem beschädigten PDF?",
      a: "Nur, wenn das Komprimierungs-Tool die Datei überhaupt lesen kann. Kann dein Anzeigeprogramm sie nicht öffnen, kann es kein Komprimierungs-Tool auch nicht. Komprimierung ist keine Reparaturmethode.",
    },
    {
      q: "Warum verliert meine gerettete Datei die Formularfelder?",
      a: "„Drucken als PDF“ bettet interaktive Elemente fest als statische Pixel ein. Formularfelder, Anmerkungen und Unterschriften werden zu Bildern. Brauchst du sie zurück, fordere die Datei erneut von der Quelle an.",
    },
    {
      q: "Kann eine Bildextraktion den Inhalt immer retten?",
      a: "Nur, wenn irgendein Anzeigeprogramm die Seiten überhaupt darstellen kann. Ist die Datei wirklich nirgends lesbar, scheitert auch ein Extraktions-Tool.",
    },
  ],
  related: [
    { label: "PDF zu Bildern – rettbare Seiten extrahieren", path: "/pdf-to-images" },
    { label: "Bild zu PDF – Seiten nach der Rettung neu zusammensetzen", path: "/image-to-pdf" },
    { label: "Warum öffnet sich mein PDF nicht?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Warum ist mein PDF leer?", path: "/guides/why-is-my-pdf-blank" },
  ],
  parentHub: { label: "PDF-Werkzeuge – kostenlos, im Browser", path: "/pdf-tools" },
};

export default content;
