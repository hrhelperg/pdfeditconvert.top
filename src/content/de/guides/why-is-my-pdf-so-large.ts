import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-so-large",
  h1: "Warum ist mein PDF so groß? Ursachen und Lösungen",
  description:
    "Die echten Gründe, warum ein PDF aus dem Ruder läuft – Scans, eingebettete Fotos, Schriftarten und mehr – und die richtige Lösung für jeden, mit kostenlosen Browser-Tools.",
  updated: "2026-05-23",
  intro: [
    "Ein zehnseitiges Dokument hat eigentlich nichts verloren bei 60 MB, trotzdem laufen PDFs ständig aus dem Ruder. Bevor du zum Komprimieren-Werkzeug greifst, lohnt es sich zu verstehen, warum eine Datei so groß geworden ist – denn die richtige Lösung hängt von der Ursache ab, und die falsche kann ein Dokument beschädigen, das gar keine Komprimierung gebraucht hätte.",
    "Diese Anleitung ist eine kurze Diagnose. Sie führt dich durch die üblichen Verursacher eines aufgeblähten PDFs, zeigt dir, wie du erkennst, mit welchem du es zu tun hast, und nennt die wirksamste Lösung für jeden Fall. Die meisten Lösungen nutzen die kostenlosen Browser-Tools dieser Seite, die alle direkt auf deinem Gerät laufen, ohne dass etwas hochgeladen wird.",
    "Am Ende weißt du, ob deine Datei Komprimierung, das Entfernen von Seiten oder einfach einen erneuten Export aus dem Ursprungsprogramm braucht – und du hörst auf, Dokumente aus reiner Gewohnheit zu stark zu komprimieren.",
  ],
  steps: [
    {
      title: "Verdächtige zuerst gescannte Seiten",
      body: "Scans sind die häufigste Ursache. Jede gescannte Seite ist ein Bild in voller Auflösung, schon wenige davon übertreffen ein Textdokument um Längen. Stammt dein PDF von einem Scanner oder einer Handykamera, liegt es fast sicher daran.",
    },
    {
      title: "Prüfe auf eingebettete Fotos und Grafiken",
      body: "Hochauflösende Fotos, Screenshots und Diagramme in einem Dokument bringen ihre vollständigen Bilddaten mit. Ein Bericht mit einem Dutzend großer Bilder kann riesig sein, selbst wenn der Text kurz ist.",
    },
    {
      title: "Denk an eingebettete Schriftarten und Design-Elemente",
      body: "Dokumente, die mehrere vollständige Schriftfamilien einbetten oder aus aufwendiger Design-Software exportiert wurden, tragen zusätzliches Gewicht durch Schriftarten und Vektorelemente, das der Inhalt sichtbar gar nicht braucht.",
    },
    {
      title: "Halte Ausschau nach übrig gebliebenem oder verstecktem Inhalt",
      body: "Doppelte Seiten aus einer schlampigen Zusammenführung, leere Scanner-Einschübe oder Versionsverläufe können eine Datei aufblähen. Nicht benötigte Seiten zu entfernen ist manchmal der einfachste Weg, Größe zu sparen.",
    },
    {
      title: "Wende die passende Lösung an",
      body: "Bei Scans und Fotos komprimierst du mit dem Tool PDF komprimieren. Bei überflüssigem Ballast entfernst du Seiten mit dem Tool PDF-Seiten extrahieren. Ist ein Textdokument rätselhaft groß, exportiere es erneut aus dem Ursprungsprogramm.",
    },
    {
      title: "Prüfe die Größe erneut",
      body: "Kontrolliere, ob die Datei dort gelandet ist, wo du sie brauchst. Ist sie nach dem Komprimieren einer scanlastigen Datei immer noch groß, ist eine stärkere Stufe oder das Teilen des Dokuments der nächste Schritt.",
    },
  ],
  tips: [
    "Passe die Lösung an die Ursache an: Komprimierung hilft bei bildlastigen Dateien, bei einem reinen Textdokument, das aus einem anderen Grund groß ist, bringt sie fast nichts.",
    "Ein überraschend großes reines Textdokument hat meist eingebettete Schriftarten oder versteckte Objekte – ein erneuter Export aus dem Ursprungsprogramm verkleinert es oft sauberer als Komprimierung.",
    "Mit 600 DPI zu scannen, obwohl 200–300 reichen würden, ist eine häufige, vermeidbare Ursache für riesige Dateien. Reduziere die Scan-Auflösung schon beim Scannen, wenn du das Dokument teilen willst.",
    "Nicht benötigte Seiten zu entfernen kann die Größe reduzieren, ohne die Qualität überhaupt anzutasten – lohnt sich, das vor dem Komprimieren zu prüfen.",
    "Komprimiere nicht aus reiner Gewohnheit. Ist eine Datei ohnehin schon angemessen groß, verschlechtert Komprimieren sie nur, ohne einen echten Vorteil zu bringen.",
  ],
  mobileNote:
    "Handyscans sind der klassische Übeltäter – hochauflösende Bilder, gespeichert als PDF. Mit der PDF-Editor-App scannst du von Anfang an in einer sinnvollen Auflösung und komprimierst offline, sodass Dokumente gar nicht erst aus dem Ruder laufen und sich leicht verkleinern lassen, wenn es doch passiert.",
  faq: [
    {
      q: "Was macht ein PDF meistens groß?",
      a: "Gescannte Seiten und eingebettete Fotos. Beides sind Bilder in voller Auflösung, schon eine Handvoll davon wiegt um ein Vielfaches mehr als ein langes Textdokument.",
    },
    {
      q: "Warum ist mein reines Textdokument trotzdem groß?",
      a: "Wahrscheinlich wegen eingebetteter Schriftarten, versteckter Objekte oder Resten aus Bearbeitungen und Zusammenführungen. Ein erneuter Export aus dem Ursprungsprogramm oder das Entfernen unnötiger Seiten hilft dabei oft mehr als Komprimierung.",
    },
    {
      q: "Verkleinert Komprimierung mein PDF immer?",
      a: "Nein. Komprimierung setzt bei Bilddaten an, deshalb schrumpfen scan- und fotolastige PDFs stark, während reine Text- oder Vektordateien sich kaum verändern. Ist eine Textdatei riesig, liegt die Ursache woanders.",
    },
    {
      q: "Verkleinert das Entfernen von Seiten die Datei?",
      a: "Ja, besonders wenn die entfernten Seiten Scans oder Bilder sind. Überflüssigen Ballast mit dem Tool PDF-Seiten extrahieren zu entfernen kann die Größe senken, ohne die Qualität der verbleibenden Seiten zu beeinträchtigen.",
    },
    {
      q: "Wie verhindere ich, dass Scans so groß werden?",
      a: "Scanne mit 200–300 statt mit 600 DPI, wenn du das Dokument teilen willst, dann sind die Dateien von Anfang an deutlich kleiner. Mit der PDF-Editor-App legst du die Scan-Qualität schon vorab fest.",
    },
  ],
  related: [
    {
      label: "PDF komprimieren – bildlastige Dateien verkleinern",
      path: "/compress-pdf",
    },
    {
      label: "PDF-Seiten extrahieren – Ballast entfernen",
      path: "/extract-pdf-pages",
    },
    {
      label: "Gescanntes PDF komprimieren",
      path: "/guides/how-to-compress-scanned-pdf",
    },
    {
      label: "Die besten PDF-Komprimierungseinstellungen",
      path: "/guides/best-pdf-compression-settings",
    },
  ],
  parentHub: { label: "PDF komprimieren", path: "/compress-pdf" },
};

export default content;
