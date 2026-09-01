import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-compression-settings",
  h1: "Beste PDF-Komprimierungseinstellungen — eine Entscheidungshilfe",
  description:
    "Welche Komprimierungsstufe für E-Mail, Druck, Archivierung oder Web? Eine praktische Übersicht, die Einstellungen dem Zweck zuordnet, mit ehrlichen Kompromissen.",
  updated: "2026-05-23",
  intro: [
    "Die eine „beste“ Komprimierungseinstellung gibt es nicht — es gibt nur die beste Einstellung für das, was mit der Datei als Nächstes passiert. Die Stufe, die perfekt für einen per E-Mail verschickten Kassenbon ist, würde ein Dokument ruinieren, das zur Druckerei geht. Statt einer Zauberzahl brauchst du also eine schnelle Methode, um die Einstellung dem Zweck zuzuordnen.",
    "Diese Anleitung ist genau diese Entscheidungshilfe. Sie ordnet die Stufen im kostenlosen Tool PDF komprimieren — Niedrig, Empfohlen und Stark — den Situationen zu, in denen sie jeweils sinnvoll sind, und erklärt den Kompromiss hinter jeder Wahl. Das Tool läuft direkt in deinem Browser, ohne dass die Datei irgendwohin übertragen wird, und zeigt dir die Größenersparnis, damit du deine Wahl bestätigen kannst.",
    "Einmal gelesen, rätst du nicht mehr — du weißt in dem Moment, in dem du siehst, wofür das Dokument gedacht ist, welche Stufe die richtige ist.",
  ],
  steps: [
    {
      title: "Für E-Mail-Anhänge: Empfohlen",
      body: "Der Standard-Sweetspot. Diese Stufe unterschreitet bei den meisten Dateien Gmails Grenze von 25 MB und Outlooks rund 20 MB, während das Dokument am Bildschirm angenehm lesbar bleibt.",
    },
    {
      title: "Für Upload-Portale mit engen Grenzen: Stark",
      body: "Behörden- und Bewerbungsportale setzen die Grenze oft bei wenigen Megabyte an. Mit Stark kommst du meist darunter. Scans stecken das gut weg; bei gestalteten Dokumenten solltest du danach prüfen, ob sie noch akzeptabel aussehen.",
    },
    {
      title: "Für den Druck oder offizielle Unterlagen: Niedrig",
      body: "Wenn die Datei gedruckt oder als hochwertiges Referenzdokument aufbewahrt wird, nutze Niedrig, um möglichst viele Details zu erhalten. Komprimiere überhaupt nur, wenn die Datei wirklich kleiner werden muss.",
    },
    {
      title: "Für die Langzeitarchivierung: minimal oder gar nicht",
      body: "Archive sollten Originaltreue über Dateigröße stellen. Komprimiere höchstens leicht und bewahre ein unkomprimiertes Original auf — eine Kopie kannst du später jederzeit verkleinern, verlorene Details bekommst du nie zurück.",
    },
    {
      title: "Für das Web und die reine Bildschirmansicht: Empfohlen bis Stark",
      body: "Dokumente, die ausschließlich am Bildschirm gelesen werden, vertragen eine stärkere Komprimierung. Tendiere zu Stark, wenn es um schnell ladende Web-Downloads geht, bei denen Druckqualität keine Rolle spielt.",
    },
    {
      title: "Mit der Vorher-Nachher-Größe bestätigen",
      body: "Egal welche Stufe du wählst, das Tool zeigt dir die Ersparnis. Reicht schon eine leichtere Stufe für dein Ziel, nimm sie — für übertriebenes Komprimieren gibt es keinen Bonus.",
    },
  ],
  tips: [
    "Erst der Zweck, dann die Einstellung. Entscheide zuerst, was mit der Datei passiert, und wähle danach die Stufe — nicht umgekehrt.",
    "Scans vertragen stärkere Einstellungen als gestaltete Dokumente. Dieselbe Stufe Stark, die bei einem gescannten Formular unproblematisch ist, kann eine bilderreiche Broschüre zu stark weichzeichnen.",
    "Jede Stufe rastert die Seiten und entfernt markierbaren Text. Muss das Dokument durchsuchbar bleiben, beeinflusst das deine Wahl genauso stark wie die Dateigröße.",
    "Text- und vektorlastige PDFs schrumpfen bei keiner Einstellung nennenswert — es gibt kaum Bilddaten zu komprimieren, also erwarte von Stark keine Wunder.",
    "Bewahre für alles Wichtige ein unkomprimiertes Original auf. Komprimierung ist eine Einbahnstraße — mit dem Original kannst du später jede benötigte Größe neu erzeugen.",
  ],
  mobileNote:
    "Mit der PDF-Editor-App fällt es unterwegs leicht, die Einstellung dem Zweck anzupassen: Komprimiere offline, sieh dir das Ergebnis in der Vorschau an und passe die Stufe an, bevor du teilst. Sie funktioniert auch mit passwortgeschützten Dateien und bleibt dabei vollständig auf dem Gerät.",
  faq: [
    {
      q: "Was ist die beste Komprimierungseinstellung insgesamt?",
      a: "Die gibt es nicht — es kommt auf den Zweck an. Empfohlen passt für E-Mail, Stark für enge Upload-Grenzen und reine Bildschirmdateien, und Niedrig (oder gar keine Komprimierung) für Druck und Archivierung.",
    },
    {
      q: "Welche Einstellung eignet sich am besten, um ein PDF per E-Mail zu verschicken?",
      a: "Empfohlen. Sie unterschreitet bei den meisten Dateien die typischen 20–25-MB-Grenzen von E-Mail-Anbietern und hält das Dokument dabei lesbar. Wechsle nur dann zu Stark, wenn du danach immer noch darüber liegst.",
    },
    {
      q: "Was sollte ich für ein Dokument nutzen, das ich drucken werde?",
      a: "Niedrig, oder gar keine Komprimierung. Beim Drucken zählt Detailtreue — bewahre die Qualität und verkleinere die Datei nur, wenn sie wirklich zu groß zum Handhaben ist.",
    },
    {
      q: "Entfernen stärkere Einstellungen durchsuchbaren Text?",
      a: "Alle Stufen rendern die Seiten als Bilder neu, wodurch markierbarer Text verloren geht. Muss das Dokument durchsuchbar bleiben, bewahre unabhängig von der gewählten Stufe das Original auf.",
    },
    {
      q: "Warum hat Stark mein Text-PDF kaum verkleinert?",
      a: "Komprimierung wirkt vor allem auf Bilddaten. Ein reines Text- oder Vektor-PDF bietet wenig zu komprimieren, sodass selbst Stark nur eine kleine Ersparnis bringt. Diese Datei ist aus einem anderen Grund groß.",
    },
  ],
  related: [
    { label: "PDF komprimieren — Stufe wählen", path: "/compress-pdf" },
    { label: "PDF komprimieren, ohne zu viel Qualität zu verlieren", path: "/guides/compress-pdf-without-losing-too-much-quality" },
    { label: "Ein gescanntes PDF komprimieren", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "PDF-Größe vor dem Upload reduzieren", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "PDF komprimieren", path: "/compress-pdf" },
};

export default content;
