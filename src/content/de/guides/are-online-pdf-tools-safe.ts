import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "are-online-pdf-tools-safe",
  h1: "Sind Online-PDF-Tools sicher? Ein ehrlicher Blick auf das Risiko",
  description:
    "Die meisten „Online“-PDF-Tools laden deine Datei auf einen Server. Manche nicht. Die realen Risiken, die Kategorien von Tools, die mit Daten unterschiedlich umgehen, und wie du erkennst, welches welches ist.",
  updated: "2026-05-29",
  intro: [
    "„Online-PDF-Tool“ ist ein Begriff, der eine wichtige Unterscheidung verschleiert. Manche dieser Tools laden deine Datei auf ihren Server, verarbeiten sie dort und schicken das Ergebnis zurück. Andere laufen komplett in deinem Browser — deine Datei verlässt dein Gerät nie. Beide werden manchmal „online“ genannt, und der Unterschied zählt bei allem Sensiblen ziemlich deutlich.",
    "Die ehrliche Antwort auf „sind sie sicher“ lautet: Das kommt darauf an, welche Art von Tool du nutzt und was in der Datei steht. Ein Kontoauszug, der durch ein Tool läuft, das hochlädt, ist ein echtes Risiko — selbst mit angegebener Löschfrist. Derselbe Auszug bei einem Tool, das lokal verarbeitet, berührt deren Netzwerk nie, das Risikoprofil ist also grundlegend anders.",
    "Diese Anleitung trennt die Kategorien, ohne Panik zu schüren. Sie erklärt, wo die tatsächlichen Risiken liegen, wie du eine Datenschutzerklärung schnell liest, und wie du erkennst, ob ein Tool, das du in Betracht ziehst, hochlädt oder lokal läuft — ohne die Marketingtexte einfach zu glauben.",
  ],
  steps: [
    {
      title: "Bestimme, in welche Kategorie das Tool fällt",
      body: "Drei Kategorien: (1) vollständiger Upload — die Datei geht auf einen Server und wird dort verarbeitet. (2) Browserbasiert mit optionaler Synchronisierung — läuft lokal, bietet aber Cloud-Funktionen an. (3) Nur Browser — lädt nie etwas hoch. Die Kategorie bestimmt das tatsächliche Risiko.",
    },
    {
      title: "Prüfe die Datenschutzerklärung auf Speicherfristen",
      body: "Achte auf Formulierungen wie „speichern“, „aufbewahren“, „löschen nach“. Eine Erklärung, die sagt „Dateien werden innerhalb einer Stunde gelöscht“, zeigt Kategorie (1). Eine Erklärung, die sagt „Dateien verlassen dein Gerät nicht“, zeigt Kategorie (3). Vage Formulierungen sind ein Warnsignal.",
    },
    {
      title: "Beobachte den Netzwerkverkehr zur Kontrolle",
      body: "Öffne die Entwicklertools, den Netzwerk-Tab, und ziehe dein PDF hinein. Siehst du einen Upload (eine große ausgehende Anfrage, sobald du die Datei hinzufügst), lädt das Tool hoch. Siehst du nichts, verarbeitet es lokal. Das ist die direkteste Kontrolle.",
    },
    {
      title: "Wähle das Tool passend zur Sensibilität der Datei",
      body: "Unkritische Dateien (Urlaubsfotos als PDF) können durch jede Kategorie laufen. Sensible Dateien (finanziell, rechtlich, medizinisch, persönlich) gehören zu Kategorie (3) oder zu einem kostenpflichtigen Tool mit ausdrücklichen Zusagen zum Umgang mit Daten.",
    },
    {
      title: "Überlege, was „sicher“ für deinen Fall bedeutet",
      body: "Manchmal ist das Risiko unternehmerisch (keine Kundendaten preisgeben). Manchmal regulatorisch (etwa DSGVO in Europa oder HIPAA in den USA). Manchmal persönlich (Identitätsdiebstahl vermeiden). Das richtige Tool hängt davon ab, welcher Gefahr du tatsächlich gegenüberstehst.",
    },
    {
      title: "Im Zweifel: browserbasierte Tools bevorzugen",
      body: "Browserbasierte Tools, die nichts hochladen, sind von Haus aus sicher — die Datei kann nicht von einem Server durchsickern, der sie nie erhalten hat. Die Tools auf dieser Website gehören zu dieser Kategorie.",
    },
  ],
  tips: [
    "Kostenlos + lädt hoch + unklare Datenschutzerklärung = meiden bei allem Sensiblen. Diese Kombination ist das höchste Risikoprofil.",
    "Auch hochladende Tools mit strengen Datenschutzerklärungen haben eine reale Angriffsfläche — Server-Einbrüche, fehlerhafte Löschung, Zugriff durch Mitarbeitende. Lokale Verarbeitung beseitigt diese Angriffsfläche.",
    "Vertraue Aussagen wie „wir speichern nichts“ nicht ungeprüft. Den Netzwerkverkehr zu beobachten ist der einzige Weg, es wirklich sicher zu wissen.",
    "Browserbasierte Tools haben ihre eigenen Grenzen — aufwendige Vorgänge und OCR brauchen manchmal Serverunterstützung. Kenne die Grenze, versprich nicht zu viel.",
    "Verlangt ein Workflow ausnahmsweise doch einen Upload, wähle ein Tool mit klar angegebener Löschfrist und nutze eine frische, passwortgeschützte Datei.",
  ],
  mobileNote:
    "Auch mobile PDF-Tools teilen sich in hochladende und rein lokale auf. Die PDF-Editor-App verarbeitet alles direkt auf dem Gerät, unter iOS und Android — kein Hochladen, kein Konto, keine Synchronisierung, es sei denn, du aktivierst sie. Für sensible Dokumente auf dem Handy ist das die richtige Voreinstellung.",
  faq: [
    {
      q: "Ist es tatsächlich riskant, mein PDF bei einem Online-Tool hochzuladen?",
      a: "Kommt auf die Datei an. Bei einem Urlaubsreiseplan sehr geringes Risiko. Bei Finanzunterlagen oder Verträgen ein echtes Risiko — Server-Einbrüche und fehlerhafte Löschung kommen vor. Wähle das Tool passend zur Datei.",
    },
    {
      q: "Wie erkenne ich, ob ein Tool hochlädt oder lokal verarbeitet?",
      a: "Öffne die Entwicklertools des Browsers, den Netzwerk-Tab, und lege eine Datei hinein. Feuert eine große ausgehende Netzwerkanfrage, sobald du die Datei hinzufügst, lädt das Tool hoch. Wenn nicht, verarbeitet es lokal.",
    },
    {
      q: "Sind kostenpflichtige Tools sicherer als kostenlose?",
      a: "Manchmal. Kostenpflichtige Tools haben oft ausdrückliche Zusagen zu Speicherfristen und Datenumgang. Manche kostenlosen Tools (wie die auf dieser Website) laufen lokal und brauchen diese Zusagen gar nicht, weil sie deine Datei nie erhalten.",
    },
    {
      q: "Wie sieht es mit Ende-zu-Ende-Verschlüsselung aus?",
      a: "Nützlich beim Teilen, hilft aber nicht bei der Verarbeitung. Muss ein Server deine Datei lesen, um sie zu komprimieren, ändert eine Verschlüsselung während der Übertragung nichts daran, dass der Server den Inhalt sieht.",
    },
    {
      q: "Sollte ich mein PDF vor dem Hochladen verschlüsseln?",
      a: "Wenn du hochladen musst: ja. Ein passwortgeschütztes PDF kommt bereits geschützt beim Server an. Besser ist es aber, bei sensiblem Material den Upload ganz zu vermeiden.",
    },
  ],
  related: [
    { label: "PDF-Tools — browserbasiert, ohne Hochladen", path: "/pdf-tools" },
    { label: "PDF-Tools mit Datenschutz an erster Stelle", path: "/guides/privacy-first-pdf-tools" },
    { label: "Browserbasierte PDF-Tools im Vergleich zu Upload-Tools", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Speichern Online-PDF-Tools deine Dateien?", path: "/guides/do-online-pdf-tools-store-files" },
  ],
  parentHub: { label: "PDF-Tools — kostenlos, browserbasiert", path: "/pdf-tools" },
};

export default content;
