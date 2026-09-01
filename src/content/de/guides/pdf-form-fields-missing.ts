import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-fields-missing",
  h1: "PDF-Formularfelder fehlen? Warum und wie du sie wiederherstellst",
  description:
    "Formular geöffnet, und die Felder sind nicht da? Warum interaktive Felder in manchen Anzeigen verschwinden, wie du sie zurückbekommst, und was du tust, wenn es von Anfang an keine gab.",
  updated: "2026-06-01",
  intro: [
    "Du öffnest ein Formular und erwartest Felder zum Hineintippen, aber da ist nichts – nur eine flach wirkende Seite, oder Felder, die als leere Umrisse angezeigt werden, mit denen du nicht interagieren kannst. Fehlende Formularfelder wirken alarmierend, sind aber meist harmlos: Die Felder sind noch in der Datei, dein Anzeigeprogramm stellt sie nur nicht dar. Gelegentlich hatte das Formular nie Felder und war von Anfang an dafür gedacht, von Hand ausgefüllt zu werden.",
    "Zwei Szenarien decken fast jeden Fall ab. Im ersten ist das Formular interaktiv, aber du hast es irgendwo geöffnet, das die Feldebene ignoriert – eine Browser-Vorschau, ein E-Mail-Anzeigeprogramm, ein einfaches, bildähnliches PDF-Leseprogramm. Im zweiten ist das Formular tatsächlich nicht interaktiv, es gibt also keine Felder zu finden, und du füllst es aus, indem du Text darüberlegst.",
    "Diese Anleitung hilft dir, die beiden Fälle auseinanderzuhalten und die Felder zurückzubekommen, wenn es sie gibt – ohne davon auszugehen, dass die Datei beschädigt ist, denn das ist so gut wie nie der Fall.",
  ],
  steps: [
    {
      title: "Schließe zuerst das Anzeigeprogramm als Ursache aus",
      body: "Öffne dieselbe Datei in einer richtigen PDF-App statt in einem Browser-Tab oder einer E-Mail-Vorschau. Erscheinen die Felder wieder, waren sie immer da – das vorherige Anzeigeprogramm hat die Feldebene einfach nicht dargestellt.",
    },
    {
      title: "Prüfe, ob es überhaupt jemals Felder gab",
      body: "Zeigt keine geeignete App irgendwo auf der Seite Felder, ist das Formular nicht interaktiv – es wurde ohne Feldebene gescannt oder exportiert. Es fehlt nichts; es war einfach nie interaktiv.",
    },
    {
      title: "Aktualisiere oder wechsle deine PDF-App",
      body: "Ein veraltetes oder minimalistisches Anzeigeprogramm stellt die Seite vielleicht dar, überspringt aber Felder. Eine aktuelle, vollwertige PDF-App zeigt und nutzt interaktive Felder am zuverlässigsten.",
    },
    {
      title: "Lade die Datei erneut herunter, wenn sie unvollständig wirkt",
      body: "Ein unvollständiger oder unterbrochener Download kann Inhalte verlieren. Lade das Formular erneut von der Quelle herunter und öffne es neu – eine frische, vollständige Kopie stellt manchmal Felder wieder her, die fehlend wirkten.",
    },
    {
      title: "Fülle ein nicht interaktives Formular durch Hinzufügen von Text aus",
      body: "Hat das Formular tatsächlich keine Felder, fülle es auf die nicht interaktive Art aus: Platziere Text und Häkchen mit einem PDF-Editor auf der Seite und exportiere anschließend. Du brauchst die Felder nicht, um es fertigzustellen.",
    },
  ],
  tips: [
    "Bevor du von einer Beschädigung ausgehst, wechsle das Anzeigeprogramm – eine andere App ist der schnellste Test, ob Felder überhaupt existieren.",
    "Browser-Vorschauen und E-Mail-Anzeigeprogramme sind die üblichen Verdächtigen für „verschwundene“ Felder; eine richtige PDF-App löst die meisten Fälle.",
    "Zeigen sich Felder als leere Umrisse, die du nicht anklicken kannst, zeichnet das Anzeigeprogramm sie oft nur, ohne sie zu aktivieren – wechsle die App.",
    "Ein wirklich nicht interaktives Formular fehlt nichts – Text darüberzulegen ist der vorgesehene Weg, es auszufüllen.",
    "Fortgeschrittene dynamische Formulare zeigen ihre Felder manchmal nur in bestimmter Software; braucht das Formular dieses Programm oder ein alternatives Format, ist das der Grund.",
  ],
  mobileNote:
    "Auf dem Handy liegt es bei fehlenden Feldern meist an einer Vorschau, die sie nicht darstellt. Öffne das Formular in der App PDF Editor: Sie aktiviert interaktive Felder, wo es sie gibt, und lässt dich Text auf der Seite platzieren, wo es keine gibt – so wird ein Formular ausfüllbar, das in der E-Mail feldlos wirkte.",
  faq: [
    {
      q: "Warum fehlen die Formularfelder in meinem PDF?",
      a: "Meist stellt dein Anzeigeprogramm die Feldebene nicht dar – häufig bei Browser-Vorschauen und E-Mail-Anzeigeprogrammen. Öffne die Datei in einer richtigen PDF-App, dann tauchen die Felder meist wieder auf. Zeigt sie keine App, ist das Formular schlicht nicht interaktiv.",
    },
    {
      q: "Habe ich die Felder verloren, oder gab es nie welche?",
      a: "Öffne es in einer geeigneten PDF-App. Erscheinen Felder, waren sie immer da, und das alte Anzeigeprogramm hat sie versteckt. Erscheint nirgends etwas, ist das Formular nicht interaktiv und hatte nie eine interaktive Feldebene.",
    },
    {
      q: "Kann ein beschädigter Download fehlende Felder verursachen?",
      a: "Gelegentlich. Ein unvollständiger Download kann Inhalte verlieren. Lade das Formular erneut von der Quelle herunter und öffne es, bevor du davon ausgehst, dass die Felder wirklich weg sind.",
    },
    {
      q: "Wie fülle ich ein Formular ohne Felder aus?",
      a: "Platziere mit einem PDF-Editor eigenen Text und Häkchen direkt auf der Seite und exportiere anschließend. Nicht interaktive Formulare werden so ausgefüllt – ganz ohne Felder.",
    },
    {
      q: "Warum werden Felder als Umrisse angezeigt, die ich nicht anklicken kann?",
      a: "Dein Anzeigeprogramm zeichnet die Feldkästen, macht sie aber nicht interaktiv. Wechsle zu einer vollwertigen PDF-App, die die Felder sowohl darstellt als auch aktiviert.",
    },
  ],
  related: [
    { label: "PDF-Formular funktioniert nicht?", path: "/guides/pdf-form-not-working" },
    {
      label: "Warum kann ich in diesem PDF-Formular nicht tippen?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "Kompatibilitätsprobleme bei PDF-Formularen",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Was ist ein PDF-Formular?", path: "/guides/what-is-a-pdf-form" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
