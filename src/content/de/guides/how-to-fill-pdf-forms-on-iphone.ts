import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-iphone",
  h1: "PDF-Formulare auf iPhone ausfüllen (Dateien, Markup und Apps)",
  description:
    "Fülle interaktive und flache PDF-Formulare auf dem iPhone aus – mit Dateien und Markup oder einer eigenen PDF-App. Die iOS-spezifischen Schritte, der Weg über das Teilen-Menü, und wo Markup an seine Grenzen stößt.",
  updated: "2026-06-01",
  intro: [
    "Das iPhone eignet sich richtig gut für PDF-Formulare, sobald du die beiden iOS-Wege kennst. Der eingebaute Weg nutzt die App Dateien und Markup, die nicht interaktive Formulare ausfüllen und notfalls eine Unterschrift ergänzen kann. Der leistungsfähigere Weg ist eine eigene PDF-App, die interaktive Felder erkennt, sauber hineintippt und eine fertige, ausgefüllte Kopie exportiert – besser, sobald ein Formular mehr als ein paar Zeilen hat.",
    "Die iOS-spezifischen Details sind es, an denen es meistens hakt: Ein Formular, das aus der Vorschau von Mail geöffnet wird, zeigt seine Felder oft nicht, das Teilen-Menü ist der Weg, um ein Formular zwischen Apps zu bewegen, und Markup behandelt alles wie eine flache Seite, selbst wenn echte Felder vorhanden sind. Kennst du diese Eigenheiten, wird das Ausfüllen eines Formulars auf dem iPhone zur Sache von 30 Sekunden.",
    "Diese Anleitung deckt beide Wege ab – den nativen Ansatz über Dateien und Markup mit seinen ehrlichen Grenzen sowie die App PDF Editor für interaktive Formulare –, damit du den richtigen für das Formular vor dir wählen kannst.",
  ],
  steps: [
    {
      title: "Hol das Formular aus der Mail-Vorschau heraus",
      body: "Kam ein Formular per E-Mail an, speichere es zuerst in Dateien, oder öffne es über das Teilen-Menü in einer richtigen PDF-App. Die Schnellvorschau von Mail ignoriert Formularfelder häufig, weshalb Tippen dort unmöglich erscheint.",
    },
    {
      title: "Probiere Dateien und Markup für nicht interaktive Formulare",
      body: "Öffne das PDF in Dateien und tippe auf den Markup-Stift. Du kannst Textfelder und eine Unterschrift überall auf der Seite hinzufügen – gut für nicht interaktive Formulare und schnelle Eingaben, allerdings tippt Markup nicht in echte interaktive Felder.",
    },
    {
      title: "Nutze eine PDF-App für interaktive Felder",
      body: "Bei Formularen mit echten Feldern öffne die Datei in der App PDF Editor. Sie erkennt die Felder, sodass du hineintippen, Kontrollkästchen ankreuzen und sauber zwischen den Feldern wechseln kannst.",
    },
    {
      title: "Nicht interaktive Formulare durch Platzieren von Text erledigen",
      body: "Hat ein Formular keine Felder, nutze das Textwerkzeug der App, um Antworten genau auf jede Zeile zu setzen. Zoome mit zwei Fingern hinein, damit der Text präzise landet und nicht über der Linie schwebt.",
    },
    {
      title: "Unterschreibe und exportiere über das Teilen-Menü",
      body: "Ergänze deine Unterschrift im Unterschriftsfeld, exportiere dann eine fertige Kopie und verschicke sie direkt über das Teilen-Menü – an Mail, Nachrichten oder zurück an die absendende Person.",
    },
  ],
  tips: [
    "Kannst du auf dem iPhone nicht in ein Formular tippen, befindest du dich fast immer in der Mail-Vorschau – speichere es zuerst in Dateien oder öffne es in einer PDF-App.",
    "Markup eignet sich hervorragend für eine schnelle Unterschrift oder ein nicht interaktives Formular, füllt aber echte interaktive Felder nicht so aus wie eine eigene App.",
    "Zoome hinein, bevor du Text auf ein nicht interaktives Formular setzt; Daumen sind ungenau, und herangezoomter Text landet genau auf der Linie.",
    "Behalte das leere Original in Dateien, damit du beim nächsten Mal eine frische Kopie ausfüllen kannst, statt eine alte zu überschreiben.",
    "iOS geht gut mit HEIC und PDF um, aber das Verhalten von Formularen unterscheidet sich je nach App – eine eigene PDF-App ist am zuverlässigsten.",
  ],
  mobileNote:
    "Die App PDF Editor für iPhone erkennt interaktive Felder, wo es sie gibt, und lässt dich bei nicht interaktiven Formularen Text und Häkchen platzieren, wo es keine gibt – dann unterschreibst und exportierst du. Alles läuft auf dem Gerät, die persönlichen Angaben im Formular werden also nicht hochgeladen. So umgehst du die Sackgasse der Mail-Vorschau.",
  faq: [
    {
      q: "Warum kann ich auf meinem iPhone nicht in ein PDF-Formular tippen?",
      a: "Höchstwahrscheinlich siehst du es in der Mail-Vorschau, die Formularfelder ignoriert. Speichere die Datei in Dateien, oder öffne sie in einer eigenen PDF-App, dann werden die Felder aktiv. Bei nicht interaktiven Formularen musst du stattdessen Text darüberlegen.",
    },
    {
      q: "Kann ich ein PDF-Formular mit dem eingebauten Markup-Werkzeug ausfüllen?",
      a: "Ja, für nicht interaktive Formulare und schnelle Eingaben – Markup fügt Text und eine Unterschrift überall auf der Seite hinzu. Es behandelt das Formular aber wie ein flaches Bild und tippt deshalb nicht in echte interaktive Felder. Nutze dafür eine PDF-App.",
    },
    {
      q: "Wie fülle ich ein gescanntes Formular auf dem iPhone aus?",
      a: "Ein gescanntes Formular ist nicht interaktiv, platziere also eigenen Text und Häkchen mit Markup oder der App PDF Editor auf der Seite und exportiere anschließend. Es gibt keine Felder zum Hineintippen.",
    },
    {
      q: "Ist das Ausfüllen eines Formulars auf dem iPhone privat?",
      a: "Mit der App PDF Editor wird das Formular auf dem Gerät ausgefüllt, die eingegebenen Angaben werden also nirgendwohin gesendet. Auch Markup arbeitet lokal. Webbasierte Ausfüll-Tools laden die Datei mitunter auf einen Server hoch.",
    },
    {
      q: "Wie schicke ich das ausgefüllte Formular zurück?",
      a: "Exportiere eine fertige Kopie und nutze das Teilen-Menü von iOS, um sie per Mail, Nachrichten oder einer anderen App zu senden. Bette sie vorher ein, wenn die Antworten fest sitzen sollen.",
    },
  ],
  related: [
    {
      label: "PDF-Formular ausfüllen",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "PDF-Formulare auf Android ausfüllen",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "PDF auf iPhone unterschreiben",
      path: "/guides/how-to-sign-pdf-on-iphone",
    },
    {
      label: "Beste PDF-Formular-App für iPhone",
      path: "/guides/best-pdf-form-app-for-iphone",
    },
    { label: "Der mobile Workflow für PDF-Formulare", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
