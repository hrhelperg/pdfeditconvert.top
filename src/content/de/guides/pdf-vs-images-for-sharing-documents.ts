import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-images-for-sharing-documents",
  h1: "PDF oder Bilder zum Teilen von Dokumenten (JPG, PNG, HEIC)",
  description:
    "Wann ein JPG, PNG oder HEIC eines Dokuments die falsche Wahl ist – und warum PDF das richtige Format für alles ist, was über einen schnellen Screenshot hinausgeht.",
  updated: "2026-05-29",
  intro: [
    "Überraschend viel geschäftliche und schulische Arbeit wird als Bilddatei verschickt — JPGs von Verträgen, HEIC-Fotos von Handouts, PNG-Screenshots von Belegen. Das fühlt sich schneller an als ein PDF zu erstellen, das Handy macht es leicht, und die Empfängerin kann es meist trotzdem lesen. Aber Bilder von Dokumenten sind für fast jeden echten Dokumenten-Workflow das falsche Format.",
    "PDFs und Bilder von Dokumenten dienen unterschiedlichen Zwecken. PDFs sind mehrseitig, durchsuchbar, druckbar, signierbar, archivierbar und brechen bei Drehung nicht. Bilder sind einseitig, nicht durchsuchbar, oft riesig in der Dateigröße und kommen häufig unscharf, seitenverkehrt oder mit falscher Farbe raus. Für alles, was über ein schnelles, einmaliges Teilen hinausgeht, erledigt PDF die Aufgabe besser.",
    "Diese Anleitung zeigt, warum das so ist, wann der Bild-statt-PDF-Ansatz tatsächlich funktioniert (manchmal schon), und den einfachen Umwandlungsweg, wenn du die PDF-Version willst.",
  ],
  steps: [
    {
      title: "Erkenne, wann ein Bild eines Dokuments falsch ist",
      body: "Mehrseitiges Dokument: falsches Format. Dokument, das gedruckt werden muss: falsches Format. Dokument, das durchsuchbar sein muss: falsches Format. Alles Formelle, das in einer Akte landet: falsches Format.",
    },
    {
      title: "Erkenne die wenigen Fälle, in denen ein Bild in Ordnung ist",
      body: "Einseitig, flüchtig, beiläufig. Ein schnelles Foto eines Belegs an eine Freundin, ein Screenshot einer Bestätigungsseite, ein Schnappschuss einer handschriftlichen Notiz für dich selbst. Das Bild ist das richtige Format, wenn es noch gar kein richtiges Dokument ist.",
    },
    {
      title: "Wandle mit Bild in PDF um, sobald aus dem Teilen ein Dokument wird",
      body: "Bild in PDF fügt JPG, PNG und WebP in deinem Browser zu einem PDF zusammen. Das Bild wird später durchsuchbar, wenn du OCR anwendest; es bleibt eine einzige Datei statt vieler.",
    },
    {
      title: "Nutze das passende Tool für die Quelle",
      body: "Fotos → Bild in PDF. Gescannte Seiten → PDF scannen. Word/Pages-Dokument → Word in PDF. Jedes Ausgangsformat hat seinen sauberen Umwandlungsweg.",
    },
    {
      title: "Behandle HEIC vom iPhone gesondert",
      body: "Das iPhone nutzt standardmäßig HEIC, das nicht jede Empfängerin öffnen kann. Wandle HEIC → JPG → PDF um, oder nutze ein Tool, das HEIC direkt verarbeitet. Der Scan-Modus der PDF-Editor-App verarbeitet HEIC nativ.",
    },
    {
      title: "Komprimiere mit Bedacht",
      body: "PDF komprimieren, wenn die entstandene Datei riesig ist. Foto-zu-PDF-Umwandlungen übernehmen die Auflösung des Fotos, die für ein Dokument oft mehr ist, als nötig.",
    },
  ],
  tips: [
    "Ein JPG eines Hochformat-Dokuments vom Handy ist das falsche Format. Dreh das Handy oder nutze eine Scan-App — das Ergebnis ist deutlich besser lesbar.",
    "PNG-Screenshots lassen sich sauber in PDF umwandeln, aber JPG-Fotos von Papierdokumenten fahren meist besser mit einer Scan-App wegen der Kantenerkennung.",
    "Verschicke mehrere JPGs nicht als mehrseitiges Dokument. Führe sie zu einem PDF zusammen; bei mehreren Anhängen verlieren Empfängerinnen leicht den Überblick.",
    "HEIC ist der iOS-Standard, wird aber von vielen Web-Portalen und E-Mail-Programmen abgelehnt. Wandle es vor dem Teilen um, wenn du das Setup der Empfängerin nicht kennst.",
    "Fotos von Laptop-Bildschirmen sind der schlechteste Fall — Moiré-Muster, Spiegelungen, geringe Auflösung. Nutze die PDF-Exportfunktion, statt den Bildschirm zu fotografieren.",
  ],
  mobileNote:
    "Auf dem Handy passieren Bild-statt-PDF-Fehler am häufigsten. Der Scan-Modus der PDF-Editor-App erkennt Seiten und erzeugt von Anfang an saubere PDFs, sodass ein schnelles Teilen ohne zusätzlichen Umwandlungsschritt zu einem richtigen Dokument wird.",
  faq: [
    {
      q: "Warum ist ein Foto eines Dokuments schlechter als ein PDF?",
      a: "Fotos sind einseitig, oft schief, nicht durchsuchbar, können riesig sein, und Dreh- oder Formatprobleme verdecken den Inhalt. PDF löst all das.",
    },
    {
      q: "Ist JPG bei einem Dokument je akzeptabel?",
      a: "Für einseitiges, beiläufiges Teilen ja — ein schneller Beleg an eine Freundin, ein Screenshot an eine Kollegin. Bei allem Formellen oder Mehrseitigen nein.",
    },
    {
      q: "Wie sieht es mit HEIC aus?",
      a: "Das Standardformat des iPhones, aber nicht überall unterstützt. Wandle es vor dem Teilen in JPG oder PDF um, wenn die Empfängerin kein Apple-Gerät nutzt.",
    },
    {
      q: "Wie führe ich mehrere Fotos zu einem PDF zusammen?",
      a: "Bild in PDF fügt JPG, PNG und WebP in deinem Browser zu einem einzigen PDF zusammen. Lege die Reihenfolge vor dem Hinzufügen fest; das entstehende PDF behält sie bei.",
    },
    {
      q: "Wird die Datei durch PDF größer?",
      a: "Kommt auf die Quelle an. Ein JPG eines Dokuments → PDF ohne erneute Komprimierung bleibt etwa gleich groß. PDF komprimieren verkleinert es bei Bedarf.",
    },
  ],
  related: [
    { label: "Bild in PDF — Fotos zu einer Datei zusammenführen", path: "/image-to-pdf" },
    { label: "PDF oder JPG für Dokumente", path: "/guides/pdf-vs-jpg-for-documents" },
    { label: "Wie du JPG in PDF umwandelst", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Wie du Fotos auf dem iPhone in PDF umwandelst", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Bild in PDF — Fotos zu PDF zusammenführen", path: "/image-to-pdf" },
};

export default content;
