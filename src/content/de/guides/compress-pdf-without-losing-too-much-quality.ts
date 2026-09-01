import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "compress-pdf-without-losing-too-much-quality",
  h1: "PDF komprimieren, ohne zu viel Qualität zu verlieren",
  description:
    "Finde den richtigen Punkt zwischen Dateigröße und Qualität. Wie Komprimierungsstufen Detail gegen Größe tauschen, und wie du die leichteste wählst, die noch funktioniert.",
  updated: "2026-05-23",
  intro: [
    "Im Kern der PDF-Komprimierung steckt ein ehrlicher Zielkonflikt: Kleinere Dateien bedeuten weniger Detail. Jedes Tool, das große Ersparnis ohne jeden Qualitätsverlust verspricht, verkauft dir etwas, das nicht stimmt. Das realistische Ziel heißt nicht „kein Verlust“, sondern „kein Verlust, den du für diesen Zweck bemerkst“. Ein Dokument, das nur am Bildschirm gelesen wird, verträgt Detailverlust, den ein Druckauftrag nicht verträgt.",
    "In dieser Anleitung geht es darum, genau diesen Punkt mit dem kostenlosen Tool PDF komprimieren zu finden. Es läuft in deinem Browser, ohne dass etwas hochgeladen wird, und zeigt dir die Ersparnis für jede Stufe an. Statt reflexartig zur maximalen Komprimierung zu greifen, lernst du, die leichteste Stufe zu wählen, die noch gut aussieht.",
    "Stimmt diese Balance, bekommst du Dateien, die sich problemlos verschicken und hochladen lassen und trotzdem so aussehen, wie du es willst, wenn sie jemand tatsächlich öffnet.",
  ],
  steps: [
    {
      title: "Definiere „gut genug“ für dieses Dokument",
      body: "Entscheide, wofür die Datei gebraucht wird. Lesen am Bildschirm verträgt mehr Komprimierung als Drucken; ein Portfolio-Stück braucht mehr Detail als ein Spesenbeleg. Der Verwendungszweck bestimmt deine Qualitätsuntergrenze.",
    },
    {
      title: "Öffne das Tool PDF komprimieren",
      body: "Rufe das Tool PDF komprimieren auf. Es verarbeitet die Datei auf deinem Gerät und zeigt dir die Ersparnis an, sodass du den Kompromiss direkt einschätzen kannst.",
    },
    {
      title: "Beginne mit der leichtesten Stufe",
      body: "Probiere zuerst Niedrig oder Empfohlen, nicht Stark. Der Instinkt, die Komprimierung zu maximieren, schießt meist übers Ziel hinaus – oft erreichst du dein Größenziel schon mit Detail übrig.",
    },
    {
      title: "Vergleiche Qualität und Größe",
      body: "Öffne das Ergebnis und sieh dir die Seiten an, besonders Bilder und feinen Text. Notiere dir die gesparte Größe. Passt die Qualität und liegst du unter deinem Limit, bist du fertig.",
    },
    {
      title: "Erhöhe die Stufe nur bei Bedarf",
      body: "Immer noch zu groß? Gehe eine Stufe stärker und prüfe erneut. Schrittweises Erhöhen findet die leichteste Einstellung, die dein Größenziel erreicht, ohne unnötig an Qualität zu verlieren.",
    },
    {
      title: "Behalte das Original",
      body: "Speichere die komprimierte Kopie unter einem neuen Namen. Komprimierung ist eine Einbahnstraße – das entfernte Detail ist weg –, das unangetastete Original ist also dein Sicherheitsnetz.",
    },
  ],
  tips: [
    "Greife zuerst zur leichtesten Stufe und erhöhe nur, wenn es nötig ist. Die meisten komprimieren zu stark und verschlechtern Dateien mehr, als für das Größenziel nötig wäre.",
    "Passe die Qualität an den Zweck an: reine Bildschirmdokumente überstehen starke Komprimierung, die etwas für den Druck ruinieren würde.",
    "Komprimierung rastert die Seiten, das Ergebnis verliert also markierbaren Text. Brauchst du durchsuchbaren Text mehr als eine kleinere Datei, ist das ein Grund, das Original zu behalten oder weniger stark zu komprimieren.",
    "Textlastige PDFs werden bei keiner Stufe merklich kleiner, weil kaum Bilddaten enthalten sind – dreh die Stufe nicht hoch in der Erwartung einer Ersparnis, die es gar nicht gibt.",
    "Komprimiere nur einmal. Ein bereits komprimiertes PDF erneut zu komprimieren, summiert nur den Verlust, ohne nennenswerte Größenersparnis zu bringen.",
  ],
  mobileNote:
    "Den Kompromiss zwischen Größe und Qualität einzuschätzen fällt am Handy mit der PDF-Editor-App leicht: offline komprimieren, die Seiten in der Vorschau ansehen und die Stufe vor dem Teilen nach oben oder unten regeln – kein Hochladen, und auch geschützte Dateien werden unterstützt.",
  faq: [
    {
      q: "Kann ich ein PDF ganz ohne Qualitätsverlust komprimieren?",
      a: "Nicht wirklich – sinnvolle Komprimierung ist verlustbehaftet. Das realistische Ziel ist kein Verlust, den du für den Zweck des Dokuments bemerkst. Leichtere Stufen erhalten mehr Detail; wähle die leichteste, die noch gut aussieht.",
    },
    {
      q: "Welche Stufe erhält die meiste Qualität?",
      a: "Niedrig erhält das meiste Detail, danach Empfohlen, Stark ist am kleinsten und gröbsten. Starte leicht und erhöhe nur, wenn du dein Größenziel danach immer noch nicht erreicht hast.",
    },
    {
      q: "Warum wirken meine Bilder nach dem Komprimieren weichgezeichnet?",
      a: "Bildkomprimierung verwirft feines Detail, um Platz zu sparen, stärkere Stufen verwerfen mehr davon. Geh zu einer leichteren Stufe zurück, wenn die Weichzeichnung für deinen Zweck auffällt.",
    },
    {
      q: "Entfernt Komprimieren durchsuchbaren Text?",
      a: "Ja – die Seiten werden als Bilder neu gerendert, wodurch die markierbare Textebene verloren geht. Ist dir durchsuchbarer Text wichtiger als die Größe, behalte das Original oder komprimiere schwächer.",
    },
    {
      q: "Sollte ich eine Datei mehrmals komprimieren?",
      a: "Nein. Ein zweiter Durchgang bringt zusätzlichen Qualitätsverlust bei kaum zusätzlicher Ersparnis. Komprimiere einmal auf der richtigen Stufe und behalte das Original.",
    },
  ],
  related: [
    {
      label: "PDF komprimieren – die Stufe selbst bestimmen",
      path: "/compress-pdf",
    },
    {
      label: "Die besten PDF-Komprimierungseinstellungen",
      path: "/guides/best-pdf-compression-settings",
    },
    {
      label: "PDF komprimieren, ohne an Qualität zu verlieren",
      path: "/guides/how-to-compress-pdf",
    },
    {
      label: "Warum ist mein PDF so groß?",
      path: "/guides/why-is-my-pdf-so-large",
    },
  ],
  parentHub: { label: "PDF komprimieren", path: "/compress-pdf" },
};

export default content;
