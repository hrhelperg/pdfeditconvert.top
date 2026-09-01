import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdfs-with-clients",
  h1: "PDFs mit Kunden teilen (professionell, privat)",
  description:
    "Ein kurzer Leitfaden, um PDFs an Kunden zu schicken – passende Größe für E-Mail, Passwortwahl, Branding der Datei, Empfangsbestätigung – ohne irgendetwas an Dritte hochzuladen.",
  updated: "2026-05-29",
  intro: [
    "Wie du ein PDF an einen Kunden schickst, verrät überraschend viel darüber, wie du arbeitest. Ein 40-MB-Anhang, der zurückprallt, ein generischer Dateiname wie „Dokument (1).pdf“, oder eine Datei, die sich mit dem falsch geschriebenen Kundennamen in der Titelleiste öffnet — das sind kleine Details, aber sie bleiben alle hängen.",
    "Eine professionelle Übergabe an Kunden besteht vor allem aus einer Handvoll Gewohnheiten: die Datei passend dimensionieren, sie wie eine Lieferung benennen, sie einheitlich mit deiner Marke versehen, bei Bedarf mit Passwort schützen und den Empfang bestätigen. Keins davon dauert lange, sobald es Routine ist; zusammen lassen sie die Datei fertig wirken.",
    "Diese Anleitung ist genau dieser kurze Leitfaden — was du vor dem Absenden tun solltest, und welche kostenlosen Tools jeden Schritt erledigen, ohne irgendetwas Sensibles an einen fremden Server zu übertragen.",
  ],
  steps: [
    {
      title: "Benenne die Datei für den Kunden, nicht für dich",
      body: "Kundenname_Projektname_Angebot_2026-05-29.pdf ist unmissverständlich. „final_v3_bearbeitet.pdf“ ist ein Geständnis. Der Empfänger sollte die Datei auch einen Monat später aus seinem Downloads-Ordner heraus identifizieren können.",
    },
    {
      title: "Setze den Dokumenttitel in den Metadaten passend",
      body: "PDF-Tab-Titel zeigen oft den ursprünglichen Dateinamen oder einen Rest aus Word. Exportiere aus der Quell-App neu mit gesetztem Metadaten-Titel, oder setze ihn mit einem PDF-Editor. Kleines Detail, professioneller Eindruck.",
    },
    {
      title: "Für den Posteingang des Kunden komprimieren",
      body: "Manche Kundenportale begrenzen bei 5 MB; die meisten E-Mail-Systeme bei 25. PDF komprimieren bringt eine typische Lieferung in deinem Browser bequem unter beide Grenzen. Mach das zum letzten Schritt, nicht zum ersten.",
    },
    {
      title: "Nur mit Passwort schützen, wenn es wirklich zählt",
      body: "Nutze Passwörter für wirklich sensibles Material — Finanzdetails, personenbezogene Daten, Vertragsentwürfe. Schütze das Angebot selbst nicht mit Passwort — die Reibung überwiegt den Sicherheitsgewinn.",
    },
    {
      title: "Schick eine Begleitnotiz, die auflistet, was enthalten ist",
      body: "Ein kurzer Satz: „Anbei: Angebot (12 Seiten), Konditionen (3 Seiten), Preisliste (1 Seite).“ Der Kunde weiß, was er öffnet, ohne die Datei erst durchblättern zu müssen.",
    },
    {
      title: "Hake mit einer Empfangsbestätigung nach",
      body: "Bitte entweder in der Begleitnotiz um eine Rückmeldung, ob alles angekommen ist, oder frag einen Tag später nach. Dateien landen tatsächlich im Spamfilter, besonders Anhänge mit Passwort.",
    },
  ],
  tips: [
    "Versieh Entwürfe mit einem Wasserzeichen (ENTWURF, INTERN), aber nie die finale Version. Die finale Version sollte keine Kennzeichnung brauchen.",
    "Passe deine Dateinamenskonvention an die des Kunden an, wenn du sie erkennen kannst — viele Firmenkunden haben einen Dokumenten-Namensstandard, den du spiegeln kannst.",
    "Vermeide es, mehr als drei Anhänge zu verschicken. Führe zusammen, was zusammengehört; schick den Rest bei Bedarf als Nachtrag.",
    "Brauchst du eine Unterschrift zurück, unterschreibe zuerst deinen Teil und fülle das Unterschriftsfeld für die Gegenseite schon vor. Das ist eine kleine Freundlichkeit, die schneller zurückkommt.",
    "Teste deine Datei vor dem Versenden in einem unbenutzten Betrachter — dein eigener Betrachter zeigt möglicherweise Layouts, die andere nicht zeigen.",
  ],
  mobileNote:
    "Kunden lesen Lieferungen zunehmend zuerst am Handy. Die PDF-Editor-App lässt dich PDFs am Handy in der Vorschau ansehen, komprimieren, unterschreiben und erneut teilen, sodass eine Last-Minute-Änderung eines Kunden nicht darauf warten muss, dass du zurück ins Büro kommst.",
  faq: [
    {
      q: "Was ist der häufigste Fehler beim Versenden von PDFs an Kunden?",
      a: "Der Dateiname. „Dokument (1).pdf“ sagt dem Kunden, dass es dir egal ist. Ein aussagekräftiger Name mit Projekt und Datum macht die Datei später auffindbar.",
    },
    {
      q: "Sollte ich alles, was ich verschicke, mit Passwort schützen?",
      a: "Nein. Hebe Passwörter für wirklich sensible Inhalte auf. Routinemäßige Lieferungen brauchen sie nicht, und zu häufiger Einsatz gewöhnt Kunden daran, sie zu ignorieren oder zu verlieren.",
    },
    {
      q: "Wie groß darf die Datei sein?",
      a: "E-Mail begrenzt bei 25 MB; viele Kundenportale bei 5. Komprimiere alles über 5 MB, außer du weißt, dass der Kunde größere Dateien akzeptiert. Kleiner ist immer sicherer.",
    },
    {
      q: "Sollte ich mehrere PDFs verschicken oder sie zusammenführen?",
      a: "Führe zusammen, wenn sie zusammengehören (Angebot + Konditionen + Preisliste). Halte sie getrennt, wenn es sich um wirklich unterschiedliche Lieferungen handelt. Drei Anhänge sind die praktische Grenze, bevor etwas verloren geht.",
    },
    {
      q: "Ist es in Ordnung, Online-PDF-Tools für Kundenarbeit zu nutzen?",
      a: "Nur wenn sie lokal in deinem Browser laufen. Ein sensibles Kundendokument auf einen fremden Server hochzuladen ist ein echtes Risiko. Browserbasierte Tools, die auf deinem Gerät arbeiten, vermeiden das vollständig.",
    },
  ],
  related: [
    { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
    { label: "PDF komprimieren — für Kundenportale verkleinern", path: "/compress-pdf" },
    { label: "PDF für den geschäftlichen Einsatz vorbereiten", path: "/guides/how-to-prepare-pdf-for-business-use" },
    { label: "PDF-Dateien kundenfertig gestalten", path: "/guides/how-to-create-client-ready-pdf-files" },
  ],
  parentHub: { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
};

export default content;
