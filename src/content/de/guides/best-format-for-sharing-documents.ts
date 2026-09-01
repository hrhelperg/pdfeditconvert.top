import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-format-for-sharing-documents",
  h1: "Bestes Format zum Teilen von Dokumenten (PDF, DOCX, Bilder im Vergleich)",
  description:
    "Wann PDF das richtige Format zum Teilen ist, wann nicht, und wie die realistischen Alternativen (DOCX, Bilder, HTML, Markdown) in den alltäglichen Situationen wirklich abschneiden.",
  updated: "2026-05-29",
  intro: [
    "Es gibt nicht das eine beste Format zum Teilen von Dokumenten — es gibt das beste Format für jede einzelne Teilen-Situation. PDF ist meistens richtig, aber nicht immer. DOCX ist richtig für Dokumente, die noch bearbeitet werden. Bilder sind richtig für einzelne visuelle Inhalte. HTML ist richtig fürs Web. Markdown ist richtig für einfachen Text mit leichter Struktur. Jedes glänzt bei einer Sache und wirkt woanders unpassend.",
    "Die richtige Entscheidungsgrundlage ist, zu überlegen, was die Empfängerin mit der Datei machen wird. Lesen und ablegen? PDF. Bearbeiten? DOCX. Im Web ansehen? HTML. Im Chat zitieren? Markdown. Ein einzelnes Bild ansehen? PNG oder JPG. Jedes Teilen zwanghaft über PDF laufen zu lassen ist bequem, erzeugt aber Reibung, wenn die Empfängerin eigentlich bearbeiten wollte.",
    "Diese Anleitung geht die Wahl Szenario für Szenario durch. Ziel ist, das Format zu verschicken, das die Empfängerin tatsächlich nutzen wird, nicht das, das für dich am einfachsten zu erstellen ist.",
  ],
  steps: [
    {
      title: "Wird gelesen und archiviert: schick PDF",
      body: "Festgeschriebenes Layout, identisch auf jedem Gerät, signierbar, archivierbar. PDF ist der Standard für geteilte Dokumente und meistens die richtige Wahl.",
    },
    {
      title: "Wird bearbeitet: schick DOCX oder Google Docs",
      body: "Echte Bearbeitung passiert in DOCX oder Docs. Schickst du PDF, obwohl die Empfängerin bearbeiten will, zwingst du sie zur Rückumwandlung — sie bekommt dann eine ungefähre Version dessen, was du geschickt hast.",
    },
    {
      title: "Wird im Web angesehen: schick einen Link oder HTML",
      body: "Webseiten zeigen sich im Browser, ohne dass ein Download nötig ist. Für Inhalte, die webnativ gedacht sind, schlägt HTML PDF.",
    },
    {
      title: "Bei einfachem Text mit leichter Struktur: schick Markdown",
      body: "Notizen, technische Inhalte, leichte Dokumentation. Markdown ist in jedem Kontext als Text lesbar und wird dort, wo unterstützt, ansprechend dargestellt.",
    },
    {
      title: "Bei einem einzelnen Bild: schick PNG oder JPG",
      body: "Ein einzelnes Bild, kein Text darunter, keine Seiten zu verwalten. PNG für scharf/transparent, JPG für Fotos. PDF verpackt ein einzelnes Bild unnötig.",
    },
    {
      title: "Greife zu PDF, wenn die richtige Antwort unklar ist",
      body: "Wenn du nicht vorhersagen kannst, was die Empfängerin mit der Datei machen wird, ist PDF die sicherste Grundeinstellung. Es kann jeder lesen, es ändert sich nach dem Versand nicht, und es lässt sich bei Bedarf in andere Formate umwandeln.",
    },
  ],
  tips: [
    "Frag die Empfängerin, ob sie bearbeiten muss. Die Antwort ändert das richtige Format.",
    "Schick nicht beides, PDF und DOCX, außer es wird verlangt. Das wirkt unentschlossen.",
    "Mehrseitiger Inhalt in einem anderen Format als PDF ist meist falsch.",
    "Interne Tools (Chat, Wiki, Docs-Plattformen) haben oft eigene Formate, die im jeweiligen Kontext besser sind als PDF. Exportiere nicht reflexartig zu PDF für ein internes Teilen.",
    "Im Zweifelsfall beim Format: verschick PDF — Empfängerinnen können bei Bedarf selbst umwandeln.",
  ],
  mobileNote:
    "Handys empfangen heute die meisten geteilten Dokumente, und PDF funktioniert auf kleinen Bildschirmen am besten, weil das Layout festgeschrieben ist. Die PDF-Editor-App liest, unterschreibt und teilt PDFs unter iOS und Android, ohne Überraschungen dabei, wie die Datei auf jedem Gerät aussieht.",
  faq: [
    {
      q: "Ist PDF wirklich die beste Standardwahl?",
      a: "Zum Teilen fertiger Dokumente ja. Bei Arbeitsentwürfen ist DOCX besser. Bei einzelnen Bildern PNG oder JPG. Wähle nach dem, was die Empfängerin damit machen wird.",
    },
    {
      q: "Wann ist DOCX besser als PDF?",
      a: "Wenn die Empfängerin das Dokument bearbeiten wird. PDF lässt sich schwer bearbeiten, DOCX leicht. Zwing sie nicht zum Umwandeln.",
    },
    {
      q: "Sollte ich beide verschicken?",
      a: "Nur, wenn ausdrücklich danach gefragt wird. Zwei Formate zu verschicken wirkt unsicher, und die Empfängerin muss selbst wählen.",
    },
    {
      q: "Wie sieht es mit Links zu Cloud-Dokumenten aus?",
      a: "Nützlich für gemeinsam bearbeitete Dokumente (Docs, Sheets). Bei einseitigem Teilen fertiger Dokumente sind Downloads einfacher als Freigabeeinstellungen bei Links.",
    },
    {
      q: "Spielt das Gerät der Empfängerin eine Rolle?",
      a: "Ein wenig — ältere Geräte öffnen neuere DOCX-Funktionen manchmal nicht. PDF ist das universell kompatibelste Format.",
    },
  ],
  related: [
    { label: "PDF-Tools — vollständige Liste der Browser-Tools", path: "/pdf-tools" },
    { label: "PDF oder DOCX — Funktionsvergleich", path: "/guides/pdf-vs-docx" },
    { label: "PDF oder Google Docs", path: "/guides/pdf-vs-google-docs" },
    { label: "PDF oder Bilder zum Teilen von Dokumenten", path: "/guides/pdf-vs-images-for-sharing-documents" },
  ],
  parentHub: { label: "PDF-Tools — kostenlos, browserbasiert", path: "/pdf-tools" },
};

export default content;
