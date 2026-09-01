import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-large-pdf-files",
  h1: "Große PDF-Dateien versenden (5 zuverlässige Wege)",
  description:
    "Fünf zuverlässige Wege, ein PDF zu versenden, das zu groß für die E-Mail ist – komprimieren, teilen, Cloud-Links und mehr – und wie du dich entscheidest.",
  updated: "2026-05-23",
  intro: [
    "E-Mail ist der Ort, an dem große PDFs abprallen. Die Limits sind real und gnadenlos — 25 MB bei Gmail, rund 20 MB bei Outlook, beim Empfänger manchmal noch weniger — und ein scanlastiges Dokument sprengt sie mühelos. Die Lösung ist kein einzelner Trick, sondern das Wissen um die Handvoll zuverlässiger Optionen und welche davon zu deiner Datei und deinem Empfänger passt.",
    "Diese Anleitung zeigt die praktischen Wege, ungefähr in der Reihenfolge, in der die meisten sie ausprobieren sollten: verkleinern, teilen oder einen Link versenden. Zwei davon nutzen kostenlose Browser-Tools, die direkt auf deinem Gerät laufen, ohne dass etwas hochgeladen wird; beim dritten geht es darum, eine Weitergabemethode zu wählen, die der Sensibilität des Dokuments gerecht wird.",
    "Das Ziel ist eine Datei, die intakt und lesbar ankommt, ohne dass du ihre Qualität ruinierst oder sie versehentlich über einen Dienst weitergibst, dem du nicht vertraust.",
  ],
  steps: [
    {
      title: "Versuch es zuerst mit Komprimieren",
      body: "Lass die Datei durch das Tool PDF komprimieren laufen. Scans und bildlastige PDFs rutschen dabei oft schon in einem Durchgang unter die E-Mail-Limits — die einfachste denkbare Lösung.",
    },
    {
      title: "Immer noch zu groß? Teile die Datei",
      body: "Nutze das Tool PDF teilen, um das Dokument als zwei oder drei kleinere Dateien zu versenden. Zwei lesbare Hälften sind besser als eine zu Matsch komprimierte Datei.",
    },
    {
      title: "Bei sehr großen Dateien: einen Cloud-Link teilen",
      body: "Lade die Datei in einen Cloud-Speicher, den du selbst kontrollierst, und verschicke einen Link. Das umgeht E-Mail-Limits komplett, und du kannst den Zugriff später wieder entziehen — bei sensiblen Dokumenten solltest du dabei einen Dienst wählen, dem du vertraust.",
    },
    {
      title: "Prüfe das Limit des Empfängers, nicht nur dein eigenes",
      body: "Dein Anbieter erlaubt vielleicht den Versand von 25 MB, während der des Empfängers alles über 10 MB ablehnt. Im Zweifel lieber kleiner ansetzen oder einen Link nutzen.",
    },
    {
      title: "Bestätige, dass die Datei die richtige Größe hat und sauber ist",
      body: "Egal für welchen Weg du dich entscheidest: Öffne die fertige Datei zuerst — richtige Seiten, lesbare Qualität, nichts, was da nicht hingehört.",
    },
  ],
  tips: [
    "Arbeite der Reihe nach: erst komprimieren, dann teilen, dann verlinken. Jeder Schritt ist aufwendiger als der vorherige, also hör auf, sobald die Datei verschickt werden kann.",
    "Ein Cloud-Link ist bei wirklich riesigen Dateien meist die ehrlichste Lösung — bei vertraulichen Dokumenten solltest du aber einen Dienst wählen, dem du vertraust, und den Zugriff entziehen, sobald er nicht mehr gebraucht wird.",
    "Komprimierung rastert Seiten und entfernt den auswählbaren Text. Muss der Empfänger Text kopieren können, verschick lieber das Original per Link als einen stark komprimierten Anhang.",
    "Teile entlang natürlicher Grenzen (Kapitel, Abschnitte, unterschrieben oder nicht) — das ist für den Empfänger hilfreicher als eine Teilung an einer beliebigen Seite.",
    "Schick sensible Dokumente nicht an einen dir unbekannten kostenlosen Drittanbieter-Dienst für „große Dateien“, nur um ein Größenlimit zu umgehen — das tauscht eine kleine Unannehmlichkeit gegen ein echtes Datenschutzrisiko.",
  ],
  mobileNote:
    "Liegt die übergroße Datei auf deinem Handy, komprimiert und teilt die PDF-Editor-App sie offline und übergibt das Ergebnis direkt an deine Mail- oder Messaging-App — so bekommst du einen großen Scan von überall aus verschickt, ohne ihn vorher bei einem unbekannten Dienst hochzuladen.",
  faq: [
    {
      q: "Was ist der einfachste Weg, ein zu großes PDF zu versenden?",
      a: "Komprimiere es zuerst. Scans und bildlastige PDFs rutschen oft schon in einem Durchgang unter die E-Mail-Limits, sodass sich Teilen oder Links ganz erübrigen.",
    },
    {
      q: "Wann sollte ich teilen statt komprimieren?",
      a: "Wenn Komprimierung allein die Datei nicht klein genug bekommt, ohne die Qualität zu ruinieren. Zwei oder drei lesbare Dateien sind besser als eine verschlechterte.",
    },
    {
      q: "Sind Cloud-Links sicher für sensible Dokumente?",
      a: "Das können sie sein, wenn du einen vertrauenswürdigen Dienst nutzt und den Zugriff nach Gebrauch entziehst. Meide unbekannte kostenlose „Große Dateien“-Dienste für alles Vertrauliche.",
    },
    {
      q: "Woher weiß ich, dass der Empfänger die Datei erhalten kann?",
      a: "Sein Limit kann niedriger sein als deins. Bist du unsicher, komprimiere deutlich unter 10 MB oder verschick einen Link, statt einen stillen Zustellfehler zu riskieren.",
    },
    {
      q: "Schadet Komprimieren vor dem Versand dem Dokument?",
      a: "Sie ist verlustbehaftet und entfernt den auswählbaren Text. Bei Dokumenten, bei denen Qualität oder durchsuchbarer Text wichtig sind, teile lieber das Original per Link, statt es zu einem Anhang zu quetschen.",
    },
  ],
  related: [
    { label: "PDF komprimieren — zum Versand verkleinern", path: "/compress-pdf" },
    { label: "PDF teilen — in Teilen versenden", path: "/split-pdf" },
    { label: "PDF-Dateigröße für E-Mail reduzieren", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "PDF vom Handy aus teilen", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF komprimieren", path: "/compress-pdf" },
};

export default content;
