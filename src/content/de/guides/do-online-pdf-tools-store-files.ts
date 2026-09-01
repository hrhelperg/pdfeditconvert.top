import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "do-online-pdf-tools-store-files",
  h1: "Speichern Online-PDF-Tools deine Dateien? Worauf du achten solltest",
  description:
    "Manche Online-PDF-Tools löschen hochgeladene Dateien sofort, manche behalten sie stundenlang, manche unbegrenzt. So liest du eine Datenschutzerklärung schnell und weißt, worauf zu achten ist.",
  updated: "2026-05-29",
  intro: [
    "Wenn ein kostenloses PDF-Tool dich bittet, deine Datei hochzuladen, ist die ehrliche Frage: Was passiert danach mit dieser Datei? Die Antwort fällt sehr unterschiedlich aus. Manche Tools löschen den Upload, sobald die Umwandlung fertig ist. Manche behalten ihn eine Stunde „zu deiner Bequemlichkeit“. Manche bewahren ihn länger auf, mit vagen Formulierungen zur „Verbesserung des Dienstes“. Manche nutzen ihn, um Modelle zu trainieren, von denen du nichts weißt.",
    "Die Datenschutzerklärung verrät es — aber sie ist meist lang, oft vage und manchmal veraltet. Ein gezielter Blick dauert eine Minute und liefert genau das, was du wissen musst. Und bei Dateien, deren Speicherung wirklich eine Rolle spielt, ist es sicherer, gleich ein Tool zu wählen, das gar nichts hochlädt.",
    "Diese Anleitung zeigt den schnellen Blick in die Datenschutzerklärung, erklärt, worauf du achten solltest, und weist auf die sicherere Alternative hin, wenn schon der Upload selbst das Problem ist.",
  ],
  steps: [
    {
      title: "Finde die Erklärung und spring direkt zur Speicherfrist",
      body: "Die Datenschutzerklärung ist meist in der Fußzeile verlinkt. Durchsuche die Seite (Strg+F) nach „speichern“, „löschen“, „aufbewahren“, „Speicherung“. Diese Wörter führen dich direkt zum Abschnitt über die Speicherfrist.",
    },
    {
      title: "Lies die tatsächlichen Fristen",
      body: "„Dateien werden innerhalb einer Stunde gelöscht“ ist konkret und beruhigend. „Wir löschen Dateien, sobald sie nicht mehr benötigt werden“ ist vage und kann alles bedeuten. Zahlen zählen, Absichtserklärungen nicht.",
    },
    {
      title: "Prüfe, was über die Datei hinaus gespeichert wird",
      body: "Metadaten (Dateiname, Dateigröße, Typ, IP-Adresse) werden meist länger aufbewahrt als der eigentliche Dateiinhalt. In den meisten Fällen ist das unproblematisch; bei hochsensibler Arbeit ist auch das ein Warnsignal.",
    },
    {
      title: "Achte auf Klauseln zu Trainingsdaten",
      body: "Manche kostenlosen Tools erlauben sich, hochgeladene Dateien zur Verbesserung des Dienstes oder zum Training von Modellen zu nutzen. Suche nach „verbessern“, „trainieren“, „Analyse“. Findest du das, ist es bei sensiblen Inhalten ein stärkeres Warnsignal.",
    },
    {
      title: "Prüfe den Abschnitt zur Weitergabe an Dritte",
      body: "Selbst wenn das Tool deine Datei nicht behält, könnte es sie an Hosting-Anbieter, Auftragsverarbeiter oder Analyse-Dienstleister weitergeben. Jeder davon ist eine weitere Partei mit Zugriff. Achte auf „Dienstleister“, „Auftragsverarbeiter“, „Dritte“.",
    },
    {
      title: "Setze bei allem Sensiblen auf lokale Verarbeitung",
      body: "Läuft das Tool ohne Hochladen direkt in deinem Browser (überprüfbar mit den Entwicklertools), stellt sich die Frage der Speicherfrist gar nicht erst — es gibt nichts zu speichern. Nutze diesen Weg, wenn die Speicherung der Datei wirklich zählt.",
    },
  ],
  tips: [
    "Kostenlos + vage Speicherfrist + unklare Weitergabe an Dritte = meiden bei sensiblen Dateien. Diese Kombination ist das höchste Risiko.",
    "Auch eine saubere Speicherfrist ist keine Garantie. Server-Einbrüche passieren. Die einzige risikofreie Option ist, gar nicht erst hochzuladen.",
    "Betrachte hochgeladene Dateien für jeden Zweck, den du nicht überprüfen kannst, als kompromittiert. Würdest du die Datei nicht öffentlich posten, überleg zweimal, ob du sie hochlädst.",
    "Musst du hochladen, schütze die Datei vorher mit einem Passwort. Das Tool sieht dann nur einen verschlüsselten Datenblock; die Verschlüsselung schützt den Inhalt.",
    "Vertraue Aussagen wie „wir speichern nicht“ nicht ungeprüft — der Wortlaut der Datenschutzerklärung und das tatsächliche Verhalten können auseinanderklaffen.",
  ],
  mobileNote:
    "Mobile Apps haben oft eigene Datenschutzerklärungen im App Store oder in den Einstellungen. Die PDF-Editor-App verarbeitet lokal und lädt deine Dateien überhaupt nicht hoch, die Frage der Speicherfrist stellt sich also gar nicht. Für mobile Arbeit mit sensiblem Material ist rein lokal die sauberste Voreinstellung.",
  faq: [
    {
      q: "Wie lange behalten die meisten Online-PDF-Tools Dateien?",
      a: "Sehr unterschiedlich: von Minuten bis unbegrenzt. Große kommerzielle Tools löschen meist innerhalb einer Stunde; kleinere und kostenlose Tools sind uneinheitlich. Lies jede Datenschutzerklärung einzeln.",
    },
    {
      q: "Reicht eine kurze Speicherfrist aus?",
      a: "Kommt auf die Datei an. Bei gewöhnlichen Dokumenten ist eine Stunde in Ordnung. Bei wirklich sensiblem Material ist jede Aufbewahrung ein echtes Risikofenster.",
    },
    {
      q: "Sind gelöschte Dateien wirklich weg?",
      a: "Aus dem aktiven Speicher meist ja, aber Backups und Replikate können Kopien länger behalten. Wirklich sicheres Löschen ist technisch schwieriger, als es klingt.",
    },
    {
      q: "Behalten kostenlose Tools Dateien immer länger als kostenpflichtige?",
      a: "Eine Tendenz, keine Regel. Manche kostenlosen Tools haben saubere Speicherfristen; manche kostenpflichtigen haben überraschende Klauseln. Lies beide.",
    },
    {
      q: "Was ist der sicherste Weg für ein sensibles PDF?",
      a: "Browserbasierte Tools, die lokal verarbeiten (ohne Hochladen). Musst du hochladen, schütze die Datei vorher mit Passwort und wähle ein Tool mit ausdrücklicher Löschzusage.",
    },
  ],
  related: [
    { label: "PDF-Tools — browserbasiert, ohne Hochladen", path: "/pdf-tools" },
    { label: "Sind Online-PDF-Tools sicher?", path: "/guides/are-online-pdf-tools-safe" },
    { label: "Browserbasierte PDF-Tools im Vergleich zu Upload-Tools", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Sensible Dokumente nicht hochladen müssen", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "PDF-Tools — kostenlos, browserbasiert", path: "/pdf-tools" },
};

export default content;
