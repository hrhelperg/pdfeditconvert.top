import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-forms",
  hero: {
    eyebrow: "PDF Forms",
    h1: "PDF-Formulare überall ausfüllen, unterschreiben und verwalten.",
    highlight: "PDF-Formulare",
    lead: "Steuerformulare, Anträge, Aufnahmebögen, Einwilligungserklärungen — die meisten davon kommen als PDF. Erfahre, wie PDF-Formulare wirklich funktionieren, wie du interaktive und nicht interaktive Formulare ausfüllst und wie du die häufigsten Probleme löst — ganz ohne eine einzige Seite auszudrucken.",
    primaryCta: { label: "App öffnen", href: SITE.app.appStore },
  },
  problem: {
    heading: "Warum PDF-Formulare für Verwirrung sorgen",
    paragraphs: [
      "Ein PDF-Formular sieht aus wie eine Sache, ist aber oft zwei. Manche sind interaktiv — der Ersteller hat echte Felder eingebaut, in die du tippen und tippen kannst. Andere sind nicht interaktiv: ein gescanntes oder gedruckt-und-dann-gespeichertes Formular ganz ohne Felder, bei dem du deinen eigenen Text über das Bild legen musst. Beide verhalten sich völlig unterschiedlich, und der größte Teil des Frusts rund um Formulare entsteht schlicht daraus, nicht zu wissen, welche Art man gerade vor sich hat.",
      "Zusätzlich machen Formulare Probleme, die gewöhnliche PDFs nicht haben. Felder verschwinden im falschen Viewer, eingetippte Antworten weigern sich zu speichern, ein Formular öffnet sich schreibgeschützt, oder die eingetragenen Werte tauchen beim Drucken nicht auf. Nichts davon bedeutet, dass das Formular kaputt ist — es sind vorhersehbare Probleme mit vorhersehbaren Lösungen, sobald man weiß, was im Hintergrund passiert.",
      "Dieser Hub sammelt alles an einem Ort: die Grundlagen dazu, wie Formulare funktionieren, die Schritt-für-Schritt-Anleitung zum Ausfüllen am Computer oder auf dem Handy, die geschäftlichen Methoden zum Einsammeln von Informationen von Kunden und eine Fehlerbehebung für den Fall, dass ein Formular nicht mitspielt. Aussehen und Verhalten von Formularen können zwischen PDF-Viewern variieren, daher bleiben die Anleitungen ehrlich darüber, was überall funktioniert und was vom jeweils genutzten Tool abhängt.",
    ],
  },
  features: {
    heading: "Was du mit PDF-Formularen machen kannst",
    items: [
      {
        icon: "FileText",
        title: "Interaktive Felder ausfüllen",
        body: "Tippe auf ein echtes Formularfeld und schreib los. Wechsle zwischen Feldern, kreuze Kontrollkästchen an und wähle aus Dropdown-Listen, wo der Ersteller sie eingebaut hat.",
      },
      {
        icon: "TextCursorInput",
        title: "Nicht interaktive Formulare ausfüllen",
        body: "Keine Felder vorhanden? Platziere deinen eigenen Text und Häkchen genau dort auf der Seite, wo jede Antwort auf einem gescannten oder gedruckten Formular hingehört.",
      },
      {
        icon: "PenLine",
        title: "Unterschreiben, wo es nötig ist",
        body: "Füge im Unterschriftsbereich eine getippte oder handschriftliche Unterschrift hinzu — egal ob das Feld interaktiv ist oder nur eine Linie auf einem nicht interaktiven Formular.",
      },
      {
        icon: "Save",
        title: "Eine ausgefüllte Kopie speichern",
        body: "Exportiere eine fertige Version, die du direkt zurückschicken kannst, und behalte das leere Original für das nächste Mal.",
      },
      {
        icon: "Lock",
        title: "Vor dem Versenden fest einbetten",
        body: "Bette deine Antworten fest in die Seite ein, damit sie im Viewer des Empfängers nicht mehr verändert oder versehentlich gelöscht werden können.",
      },
      {
        icon: "Smartphone",
        title: "Alles vom Handy aus erledigen",
        body: "Formulare kommen per E-Mail an und gehen genauso wieder zurück — Ausfüllen und Unterschreiben auf dem Handy ist eine der wirklich mobilen PDF-Aufgaben schlechthin.",
      },
    ],
  },
  steps: {
    heading: "Ein PDF-Formular ausfüllen, von Anfang bis Ende",
    items: [
      {
        title: "Öffne das Formular und prüfe den Typ",
        body: "Öffne das PDF und tippe dort, wo eine Antwort hin soll. Erscheint ein Cursor, hat es interaktive Felder. Tut sich nichts, ist es ein nicht interaktives Formular, und du fügst Text darüber ein.",
      },
      {
        title: "Fülle die Felder aus",
        body: "Bei interaktiven Formularen tippst und schreibst du, wechselst zwischen den Feldern. Bei nicht interaktiven Formularen platzierst du mit dem Textwerkzeug die Antworten genau auf jeder Zeile.",
      },
      {
        title: "Kontrollkästchen, Daten und Unterschriften erledigen",
        body: "Kreuze Kästchen an oder setze ein Häkchen, trage das Datum ein, wo verlangt, und nutze das Unterschreiben-Werkzeug für jeden Unterschriftsbereich.",
      },
      {
        title: "Prüfe jedes Pflichtfeld",
        body: "Geh das Formular noch einmal auf leere Stellen durch. Ein Formular, das wegen eines fehlenden Datums abgelehnt wird, kostet mehr Zeit, als die Kontrolle gekostet hätte.",
      },
      {
        title: "Speichern, fest einbetten und senden",
        body: "Exportiere eine ausgefüllte Kopie, bette die Antworten fest ein und schick sie per E-Mail oder Upload zurück. Behalte das leere Original.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Formulare auf dem Handy",
    body: "Ein Formular landet in deinem Posteingang, während du nicht am Schreibtisch bist. Mit dem Handy kannst du es öffnen, die Felder ausfüllen oder Text auf einen nicht interaktiven Scan setzen, unterschreiben und zurückschicken, bevor du überhaupt einen Stuhl gefunden hast — kein Drucker, kein Scanner, kein Warten, bis du zu Hause bist. Die App PDF Editor erkennt interaktive Felder, wo es sie gibt, lässt dich Text und Häkchen überall platzieren, wo es sie nicht gibt, und behält die persönlichen Angaben auf dem Formular auf deinem Gerät.",
  },
  faq: [
    {
      q: "Was ist der Unterschied zwischen einem interaktiven und einem nicht interaktiven PDF-Formular?",
      a: "Ein interaktives Formular hat Felder, die der Ersteller eingebaut hat — tippe auf eines, und ein Cursor erscheint, damit du schreiben kannst. Ein nicht interaktives Formular ist im Grunde nur ein Bild eines Formulars ohne Felder, sodass du deinen eigenen Text darüberlegst. Beide lassen sich ausfüllen, sie brauchen nur eine etwas andere Vorgehensweise.",
    },
    {
      q: "Muss ich ein PDF-Formular ausdrucken, um es auszufüllen?",
      a: "So gut wie nie. Sowohl interaktive als auch nicht interaktive Formulare lassen sich digital ausfüllen — in Felder tippen oder Text auf die Seite setzen, dann unterschreiben und exportieren. Drucken lohnt sich nur, wenn ein Empfänger ausdrücklich eine Unterschrift mit echter Tinte auf Papier verlangt.",
    },
    {
      q: "Warum kann ich in manche PDF-Formulare nicht tippen?",
      a: "Meist liegt es an einem von drei Dingen: Das Formular ist nicht interaktiv (keine Felder zum Tippen), dein Viewer unterstützt keine Formularfelder, oder das Formular ist schreibgeschützt oder gesperrt. Die Anleitungen zur Fehlerbehebung in diesem Hub gehen jede Ursache einzeln durch.",
    },
    {
      q: "Sieht ein von mir ausgefülltes Formular beim Empfänger genauso aus?",
      a: "Meistens, aber nicht immer — das Aussehen von Formularen kann zwischen PDF-Viewern variieren. Wenn du dein ausgefülltes Formular vor dem Senden fest einbettest, werden die Antworten in der Seite verankert und werden überall gleich angezeigt.",
    },
    {
      q: "Ist das Ausfüllen eines Formulars online privat?",
      a: "Das hängt vom Tool ab. Die App PDF Editor füllt Formulare auf deinem Gerät aus, sodass die persönlichen Angaben, die du einträgst, nirgendwo hochgeladen werden. Auch browserbasierte Tools, die lokal laufen, behalten die Datei auf deinem Rechner.",
    },
  ],
  related: [
    { label: "Was ist ein PDF-Formular?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "So füllst du ein PDF-Formular aus",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "So erstellst du ein ausfüllbares PDF",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "PDF-Formular funktioniert nicht? Hier ansetzen",
      path: "/guides/pdf-form-not-working",
    },
    { label: "PDF Editor — Ausfüllen und Unterschreiben auf dem Handy", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Fülle und unterschreibe PDF-Formulare auf deinem Handy.",
    sub: "Kostenlos für iOS und Android. Nichts hochzuladen.",
  },
};

export default content;
