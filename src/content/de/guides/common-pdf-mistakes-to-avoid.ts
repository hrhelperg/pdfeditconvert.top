import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "common-pdf-mistakes-to-avoid",
  h1: "Häufige PDF-Fehler vermeiden",
  description:
    "Die PDF-Fehler, die Zeit kosten oder Daten preisgeben – zu stark komprimieren, Fotos verschicken, sensible Dateien hochladen, Seiten vergessen – und wie du sie umgehst.",
  updated: "2026-05-23",
  intro: [
    "Die meisten PDF-Probleme sind nicht technischer Natur — es sind vermeidbare Gewohnheiten. Die E-Mail, die zurückkam, weil niemand komprimiert hat, das Foto, das statt eines Dokuments verschickt wurde, der Vertrag, der auf irgendeinen x-beliebigen Server hochgeladen wurde, die Seite, die nicht raus sollte und es trotzdem tat. Jeder dieser Fehler ist klein, jeder ist häufig, und jeder lässt sich leicht vermeiden, sobald man weiß, worauf man achten muss.",
    "Diese Anleitung sammelt die Fehler, die Menschen am häufigsten mit PDFs machen, warum jeder davon wehtut, und die schnelle Lösung dafür. Mehrere Lösungen nutzen die kostenlosen Tools auf dieser Seite, die direkt auf dem Gerät arbeiten; im Kern sind es aber alles eher Gewohnheiten als Funktionen.",
    "Lies sie einmal, und du erwischst dich beim nächsten vermeidbaren Missgeschick, bevor es passiert — was bei Dokumenten, die an Kundinnen, Kolleginnen und Behörden gehen, mehr wert ist, als es klingt.",
  ],
  steps: [
    {
      title: "Ein Foto statt eines Dokuments verschicken",
      body: "Ein JPG einer Seite ist schief, nicht durchsuchbar und lässt sich schlecht drucken oder ablegen. Ist es ein Dokument, wandle es zuerst mit dem Tool Bild zu PDF um oder scanne es richtig — lass den Empfänger nicht mit einem Schnappschuss allein.",
    },
    {
      title: "Sensible Dateien bei unbekannten Tools hochladen",
      body: "Einen Vertrag oder Ausweis in den erstbesten „kostenlosen Online-PDF“-Dienst zu werfen, lädt ihn auf den Server einer fremden Firma hoch. Nutze für alles, bei dem es dich stören würde, wenn es jemand liest, Tools, die direkt auf dem Gerät im Browser arbeiten.",
    },
    {
      title: "Aus Gewohnheit zu stark komprimieren",
      body: "Die Komprimierung bei jeder Datei auf das Maximum zu stellen, verschlechtert Dokumente, die das gar nicht nötig hatten. Nutze die schwächste Stufe, die dein Größenziel erreicht, und komprimiere keine Dateien, die schon klein genug sind.",
    },
    {
      title: "Vergessen, die Seiten vor dem Versand zu prüfen",
      body: "Interne Notizen, die Daten eines früheren Empfängers, eine leere Scanner-Seite — das schleicht sich unbemerkt mit ein. Geh Seite für Seite durch und entferne mit dem Tool PDF-Seiten extrahieren alles, was nicht raus sollte.",
    },
    {
      title: "Eine bearbeitbare Datei als „final“ verschicken",
      body: "Ein fertiges Angebot oder ein Vertrag, als Word-Datei verschickt, lässt sich bearbeiten — versehentlich oder absichtlich. Wandle Finalversionen in PDF um, damit Layout und Zahlen feststehen.",
    },
    {
      title: "Das einzige Original überschreiben",
      body: "Komprimierung, Konvertierung und Bearbeitung sind für die Kopie, die du behältst, eine Einbahnstraße. Speichere bearbeitete Versionen immer unter einem neuen Namen, damit das unangetastete Original einen Fehler übersteht.",
    },
  ],
  tips: [
    "Stell dir zuerst die Frage „Ist das ein Dokument oder ein Bild?“. Dokumente gehen als PDF raus; nur echte Fotos als JPG.",
    "Datenschutz ist eine Gewohnheit, keine Einstellung. Nutze standardmäßig Tools, die direkt auf dem Gerät arbeiten, für sensible Dateien, dann musst du dich nie extra daran erinnern, vorsichtig zu sein.",
    "Komprimiere bewusst, nicht reflexartig — passe die Stufe an den Zweck an und lass Dateien in Ruhe, die schon eine sinnvolle Größe haben.",
    "Eine zehnsekündige Kontrolle Seite für Seite vor dem Versand verhindert die peinlichsten PDF-Fehler überhaupt.",
    "Bewahre Originale auf. Fast jede PDF-Operation lässt sich nur rückgängig machen, wenn du die Quelldatei nicht überschrieben hast.",
  ],
  mobileNote:
    "Viele dieser Patzer passieren in der Eile, wenn man etwas schnell vom Handy aus verschickt. Die PDF-Editor-App lässt dich eine überzählige Seite entfernen, sinnvoll komprimieren, ein Foto umwandeln und eine Finalversion festschreiben — alles direkt auf dem Gerät —, damit aus einem hastigen Teilen keine Panne wird, für die du dich hinterher entschuldigen musst.",
  faq: [
    {
      q: "Was ist der häufigste PDF-Fehler?",
      a: "Ein JPG-Foto zu verschicken, obwohl der Empfänger ein Dokument brauchte. Es ist schief, nicht durchsuchbar und schwer zu drucken oder abzulegen. Wandelst du das Foto vorher in ein PDF um, ist das Problem gelöst.",
    },
    {
      q: "Warum ist es riskant, PDFs bei kostenlosen Tools hochzuladen?",
      a: "Viele „Online“-Tools laden deine Datei auf einen Server, sodass ein Vertrag oder Ausweis kurzzeitig auf einer Infrastruktur liegt, die du nicht kontrollierst. Tools, die direkt auf dem Gerät im Browser arbeiten, vermeiden das vollständig.",
    },
    {
      q: "Ist mehr Komprimierung immer besser?",
      a: "Nein. Zu starkes Komprimieren verschlechtert Dokumente, die das gar nicht nötig hatten, und bringt bei bereits kleinen Dateien nichts. Nutze die schwächste Stufe, die dein Größenziel erreicht.",
    },
    {
      q: "Wie vermeide ich es, die falschen Seiten zu verschicken?",
      a: "Geh das Dokument vor dem Versand Seite für Seite durch und entferne mit dem Tool PDF-Seiten extrahieren alles, was nicht raus sollte. Interne Notizen und überzählige Seiten sind meist die Übeltäter.",
    },
    {
      q: "Warum sollte ich die Originaldatei nicht überschreiben?",
      a: "Komprimierung, Konvertierung und Bearbeitung sind für die Kopie, die du behältst, eine Einbahnstraße. Speicherst du unter einem neuen Namen, bleibt das Original erhalten, und ein Fehler lässt sich leicht rückgängig machen.",
    },
  ],
  related: [
    { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
    { label: "PDF vor dem Teilen vorbereiten (Checkliste)", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "PDF-Tools mit Datenschutz im Fokus — Dokumente auf deinem Gerät behalten", path: "/guides/privacy-first-pdf-tools" },
    { label: "PDF oder JPG für Dokumente — hör auf, Fotos zu verschicken", path: "/guides/pdf-vs-jpg-for-documents" },
  ],
  parentHub: { label: "Alle kostenlosen PDF-Tools", path: "/pdf-tools" },
};

export default content;
