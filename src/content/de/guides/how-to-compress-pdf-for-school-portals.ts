import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-for-school-portals",
  h1: "PDF für Schulportale komprimieren (strenge Limits)",
  description:
    "Schul- und Uni-Portale setzen bei PDFs oft engere Grenzen als der E-Mail-Versand. So komprimierst du Abgaben, damit sie durchpassen, ohne die Lesbarkeit zu verlieren, auf die die Prüferin achtet.",
  updated: "2026-05-29",
  intro: [
    "Schulportale gehören im Alltag zu den strengsten PDF-Uploadern überhaupt. Wo E-Mail vielleicht 25 MB toleriert, liegt das Limit eines Kursportals oft bei 5 MB — und bei Schulportalen im K-12-Bereich manchmal bei 2 MB. Kommen zur getippten Aufgabe noch ein paar gescannte handschriftliche Seiten dazu, liegst du plötzlich über dem Limit, zwei Minuten vor der Deadline.",
    "Komprimierung ist die richtige Antwort, aber zu aggressives Komprimieren macht die Arbeit schwerer lesbar — und genau das kostet Punkte. Der Trick ist, gezielt zu komprimieren: stark bei den scan-lastigen Teilen, die die Dateigröße dominieren, sanft bei den getippten Teilen, die sich ohnehin kaum verkleinern lassen, und nur so viel, wie nötig ist, um unter das Portal-Limit zu kommen.",
    "Diese Anleitung zeigt den realistischen Ablauf: was du komprimieren solltest, was du in Ruhe lässt, und was du tust, wenn selbst maximale Komprimierung nicht reicht.",
  ],
  steps: [
    {
      title: "Prüfe zuerst das angegebene Limit des Portals",
      body: "Die meisten Portale listen das Limit; viele Studierende schauen nie nach. Die genaue Zahl zu kennen ändert die Strategie: Ein Limit von 2 MB ist eng, eines von 25 MB großzügig. Ziel: rund 80 % des Limits, damit du Puffer hast.",
    },
    {
      title: "Finde heraus, was die Datei groß macht",
      body: "Gescannte handschriftliche Seiten sind meist die Übeltäter. Jede gescannte Seite ist ein Bild in voller Auflösung. Eine 20-seitige getippte Aufgabe ist klein; mit fünf gescannten Seiten dazu kann sich die Größe verdreifachen.",
    },
    {
      title: "Komprimiere mit PDF komprimieren",
      body: "PDF komprimieren im Browser verkleinert die Datei direkt auf deinem Gerät. Probiere zuerst eine starke Komprimierung — moderne Komprimierer halten handschriftliche Arbeit auch bei starken Einstellungen noch lesbar.",
    },
    {
      title: "Prüfe die Lesbarkeit nach dem Komprimieren",
      body: "Öffne die komprimierte Datei und zoome dorthin, wo die Prüferin lesen wird. Wirken Text oder Diagramme zu unscharf, geh einen Schritt zurück auf mittlere Komprimierung und probiere erneut. Lesbarkeit schlägt Dateigröße.",
    },
    {
      title: "Bist du immer noch drüber, entferne überflüssige Seiten",
      body: "PDF-Seiten extrahieren behält nur die Seiten, die du brauchst. Ein leeres Rückblatt, ein doppeltes Aufgabenblatt, ein Platzhalter — entferne sie, und die Dateigröße sinkt gleich mit.",
    },
    {
      title: "Immer noch drüber? Teile in mehrere Uploads auf",
      body: "Manche Portale akzeptieren mehrere Dateien. PDF teilen oder PDF-Seiten extrahieren erzeugt Teile unter dem Limit. Benenne sie eindeutig (Aufgabe3_Teil1.pdf, Aufgabe3_Teil2.pdf).",
    },
  ],
  tips: [
    "Scanne in Graustufen, nicht in Farbe, noch bevor du überhaupt komprimierst. Diese Entscheidung vor dem Scan spart mehr als jede nachträgliche Komprimierung.",
    "Ein erneuter Scan mit niedrigerer Auflösung (200 statt 600 DPI) verkleinert die Datei um das 5- bis 10-Fache, ohne die Lesbarkeit handschriftlicher Arbeit zu beeinträchtigen.",
    "Komprimiere nicht zweimal. Wiederholte Komprimierung summiert den Qualitätsverlust. Bewahre eine unkomprimierte Masterdatei auf und komprimiere nur für den Upload.",
    "Packe ein PDF nicht in ein ZIP, um es „kleiner“ zu machen. Die meisten Portale lehnen ZIP-Dateien grundsätzlich ab; akzeptieren sie sie doch, entpacken sie oft mit demselben effektiven Limit.",
    "Lehnt das Portal die komprimierte Datei als ungültig ab, exportiere sie zuerst über Drucken als PDF erneut — das erzeugt ein einfaches Basis-PDF, das jedes Portal akzeptiert.",
  ],
  mobileNote:
    "Uploads von Schulportalen direkt vom Handy sind heute üblich, und das Handy ist meist auch dort, wo die scan-lastigen Teile der Aufgabe entstehen. Die PDF-Editor-App komprimiert Scans direkt auf dem Gerät, noch bevor sie hochgeladen werden — so ist die Datei portalfertig, bevor eine wackelige Mobilfunkverbindung ins Spiel kommt.",
  faq: [
    {
      q: "Welche Dateigröße akzeptieren die meisten Schulportale?",
      a: "Übliche Limits sind 2 MB (manche Schulportale), 5 MB (viele weiterführende Schulen und Uni-Portale) und 10–25 MB (großzügigere Uni-Portale). Prüfe die genauen Vorgaben deines Kurses.",
    },
    {
      q: "Macht aggressive Komprimierung Text unlesbar?",
      a: "Manchmal. Starke Komprimierung auf ohnehin niedrig aufgelösten Scans kann Zeichen verpixeln lassen. Probiere zuerst stark; geh auf mittel zurück, wenn der Text unscharf wird.",
    },
    {
      q: "Sollte ich leere Seiten löschen?",
      a: "Ja. PDF-Seiten extrahieren oder PDF teilen entfernt sie. Leere Seiten kosten echten Speicherplatz und gehören nicht zur eigentlichen Arbeit.",
    },
    {
      q: "Kann ich stattdessen ein ZIP einreichen?",
      a: "Die meisten Schulportale akzeptieren keine ZIP-Dateien. Die wenigen, die es doch tun, wenden trotzdem Größenlimits an und behandeln das ZIP oft als eine einzige Datei mit demselben Limit.",
    },
    {
      q: "Was, wenn meine komprimierte Datei immer noch zu groß ist?",
      a: "Entferne überflüssige Seiten, scanne mit niedrigerer Auflösung in Graustufen oder Schwarzweiß neu, oder teile in mehrere Uploads auf, falls das Portal das erlaubt. Manche Abgaben müssen schlicht kleiner ausfallen.",
    },
  ],
  related: [
    { label: "PDF komprimieren — Dateien im Browser verkleinern", path: "/compress-pdf" },
    { label: "PDF teilen — in akzeptierte Teile aufteilen", path: "/split-pdf" },
    { label: "Hausaufgaben als PDF abgeben", path: "/guides/how-to-submit-homework-as-pdf" },
    { label: "Wie du die PDF-Größe vor dem Hochladen reduzierst", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "PDF komprimieren — Größe im Browser reduzieren", path: "/compress-pdf" },
};

export default content;
