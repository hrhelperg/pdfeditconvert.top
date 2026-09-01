import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-client-ready-pdf-files",
  h1: "PDF-Dateien kundenfertig gestalten (aufgeräumt, mit Corporate Design)",
  description:
    "Was ein internes PDF von einer kundenfertigen Version unterscheidet: Deckblatt, Seitennummerierung, Branding, Dateigröße, Dateiname. Der schnelle Feinschliff, der ein Dokument fertig wirken lässt.",
  updated: "2026-05-29",
  intro: [
    "Zwischen einem funktionalen PDF und einem kundenfertigen liegt vor allem ein Blick fürs Detail. Die interne Version hat ein Platzhalter-Deckblatt, keine Seitenzahl, 14 MB Dateigröße und einen Namen wie „final-final-v2.pdf“. Die kundenfertige Version hat ein sauberes Deckblatt, Schrift im Corporate Design, nummerierte Seiten, 2 MB Dateigröße und einen Namen, der professionell wirkt. Beide enthalten dieselbe Information — nur eine wirkt fertig.",
    "Die kundenfertige Version zu erstellen, braucht keine Designerin. Es ist eine kurze Abfolge aus Standardschritten — Quelle anpassen, sauber neu exportieren, PDF verfeinern, sinnvoll beschriften, angemessen komprimieren, bewusst umbenennen. In dieser Reihenfolge dauert der Feinschliff nur wenige Minuten pro Dokument.",
    "Diese Anleitung geht die Abfolge Schritt für Schritt durch. Keiner der Schritte braucht teure Software; die meisten lassen sich direkt im Browser erledigen, ohne etwas Sensibles hochladen zu müssen.",
  ],
  steps: [
    {
      title: "Beginne mit einer sauber gestalteten Quelldatei",
      body: "Wenn das Quelldokument nach Platzhalter aussieht, sieht das PDF genauso aus. Korrigiere Ränder, Schriftwahl und Überschriftenhierarchie in Word, Pages oder Docs, bevor du exportierst. Das PDF kann keinen Feinschliff hinzufügen, der in der Quelle fehlt.",
    },
    {
      title: "Füge ein Deckblatt hinzu, das das Ergebnis benennt",
      body: "Kundenname, Projektname, Dokumenttitel, Datum, dein Firmenname. Eine Seite. Das liefert Kontext, den das eigentliche Dokument nicht in jeder Kopfzeile wiederholen muss.",
    },
    {
      title: "Nummeriere die Seiten ab der zweiten Seite",
      body: "Das Format „X von Y“ ist eindeutig und bestätigt Vollständigkeit — die Leserin weiß, dass nichts fehlt. Das Deckblatt bleibt unnummeriert; die Zählung beginnt auf Seite 2.",
    },
    {
      title: "Setze durchgängiges Branding um (Typografie, Farbe, Logo)",
      body: "Ein kleines Logo und ein einheitliches Schriftsystem signalisieren Sorgfalt. Das Branding sollte zurückhaltend wirken, nicht aufdringlich. Wenn die Kundin ein Brand Book hat, orientiere dich genau daran.",
    },
    {
      title: "Exportiere erneut mit eingebetteten Schriftarten",
      body: "Eingebettete Schriftarten sorgen dafür, dass das Dokument bei der Kundin genauso aussieht wie bei dir. Exportiere aus der Quelle erneut mit aktivierter Option „alle Schriftarten einbetten“.",
    },
    {
      title: "Komprimiere, benenne um und prüfe vor dem Versand",
      body: "Komprimiere das PDF auf das übliche E-Mail-Limit. Benenne die Datei nach dem Schema KundenName_Dokumenttyp_JJJJ-MM-TT.pdf um. Öffne die fertige Datei noch einmal und lies die erste und letzte Seite, bevor du sie verschickst — Tippfehler fallen beim erneuten Lesen auf.",
    },
  ],
  tips: [
    "Verzichte auf Stock-Hintergründe und Titelseiten, die wie Screenshots wirken. Ein sauberes, typografisch reduziertes Deckblatt altert besser als ein überladen gestaltetes.",
    "Setze auf der finalen Version kein „ENTWURF“-Wasserzeichen. Genau das Fehlen des Wasserzeichens signalisiert, dass es sich um die finale Version handelt.",
    "Tabellen, die sich über mehrere Seiten erstrecken, brauchen eine wiederholte Kopfzeile. In Word ist „Kopfzeile wiederholen“ ein einziger Klick, der Lesbarkeitsprobleme beim Drucken verhindert.",
    "Als Vektor exportierte Diagramme (PDF) bleiben scharf. Als Bild eingefügte Diagramme verschwimmen bei starkem Zoom — behebe das an der Quelle.",
    "Wenn du dieselbe Vorlage für mehrere Kundinnen wiederverwendest, aktualisiere jedes Mal die Metadaten — sonst steht im Dokumenttitel noch „Angebot für Acme“, obwohl es an Beta GmbH geht.",
  ],
  mobileNote:
    "Kundinnen öffnen Ergebnisse oft zuerst auf dem Handy. Mit der PDF-Editor-App kannst du das fertige PDF genauso auf dem Handy ansehen wie später die Kundin — so fällt ein Deckblatt, das auf einem 27-Zoll-Monitor gut aussieht, auf dem Handy aber gedrängt wirkt, schon vor dem Versand auf.",
  faq: [
    {
      q: "Was ist das deutlichste Zeichen, dass ein PDF noch nicht kundenfertig ist?",
      a: "Ein unbearbeiteter Dateiname. „final_v3_revised.pdf“ verrät der Kundin, dass es sich um eine von vielen Versionen handelt. Ein benannter, datierter Dateiname signalisiert ein fertiges Ergebnis.",
    },
    {
      q: "Brauche ich auf jeder Seite ein Logo?",
      a: "Nein. Ein Logo auf dem Deckblatt und ein dezenter Hinweis in der Fußzeile reichen aus. Große Logos auf jeder Seite wirken eher wie eine Verkaufspräsentation als wie ein Dokument.",
    },
    {
      q: "Sollte ich ein Inhaltsverzeichnis einfügen?",
      a: "Ab etwa zehn Seiten: ja. Das ist eine kleine Geste, die das Dokument fertiger wirken lässt und der Leserin bei der Orientierung hilft.",
    },
    {
      q: "Welches Seitennummerierungsformat ist am besten?",
      a: "X von Y. Das Y bestätigt die Vollständigkeit. Nur X reicht bei kürzeren Dokumenten aus, verliert dabei aber dieses Signal.",
    },
    {
      q: "Lohnt sich ein individuell gestaltetes Deckblatt?",
      a: "Bei wiederkehrenden Ergebnissen: ja — eine Vorlage im eigenen Branding zahlt sich über viele Dokumente hinweg aus. Bei Einzelstücken reicht ein sauberes, typografisches Deckblatt.",
    },
  ],
  related: [
    { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
    { label: "Word in PDF — saubere Exporte für die Verteilung", path: "/word-to-pdf" },
    { label: "Wie du PDFs mit Kundinnen teilst", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Wie du ein PDF für den geschäftlichen Einsatz vorbereitest", path: "/guides/how-to-prepare-pdf-for-business-use" },
  ],
  parentHub: { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
};

export default content;
