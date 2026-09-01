import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-editor",
  hero: {
    eyebrow: "PDF Editor",
    h1: "PDFs bearbeiten, überall, auf jedem Handy.",
    highlight: "jedem Handy",
    lead: "Text ändern, Bilder austauschen, Seiten neu anordnen und Dokumente unterschreiben — direkt auf dem iPhone oder unter Android. PDF Editor macht aus deinem Handy einen echten Dokumenteneditor statt nur einen Betrachter.",
    primaryCta: { label: "App öffnen", href: SITE.app.appStore },
  },
  problem: {
    heading: "Warum das Bearbeiten von PDFs schon immer mühsam war",
    paragraphs: [
      "PDFs wurden so entwickelt, dass sie überall gleich aussehen — genau das macht sie so schwer zu bearbeiten. Die meisten Apps auf dem Handy erlauben nur das Anzeigen oder Kommentieren. Sobald du einen Tippfehler korrigieren, einen Namen ändern oder eine Seite verschieben willst, wirst du an den Desktop verwiesen oder aufgefordert, deine Datei auf eine x-beliebige Website hochzuladen.",
      "Diese „Hochladen-und-hoffen“-Websites sind ein Datenschutzproblem. Sie speichern deine Datei oft stundenlang, sind häufig langsam, und niemand garantiert dir, was mit sensiblen Verträgen, Rechnungen oder Ausweisdokumenten dort passiert. Das Ergebnis: Die meisten Menschen machen einen Screenshot der Stelle, die sie ändern wollen, bearbeiten ihn wie ein Bild und verschicken am Ende eine Version, die schlechter aussieht als das Original.",
      "Ein nativer Editor fürs Handy löst das ohne Kompromisse. Die Bearbeitung findet direkt auf dem Gerät statt. Das ursprüngliche Layout bleibt erhalten. Du kannst das Ergebnis eine Minute nach dem Start per E-Mail verschicken — ohne irgendetwas auf den Server eines Fremden zu laden.",
    ],
  },
  features: {
    heading: "Was du wirklich damit machen kannst",
    items: [
      {
        icon: "Type",
        title: "Text direkt bearbeiten",
        body: "Tippfehler korrigieren, Namen ändern, Daten aktualisieren — ohne das Layout zu zerstören. Funktioniert bei PDFs mit echtem Text.",
      },
      {
        icon: "ImagePlus",
        title: "Bilder einfügen und ersetzen",
        body: "Füge ein neues Logo oder Foto ein. Größe und Position änderst du, ohne die Seite zu verlassen.",
      },
      {
        icon: "Move",
        title: "Seiten neu anordnen",
        body: "Ziehe Miniaturansichten, um die Reihenfolge zu ändern. Lösche Seiten, dupliziere sie oder füge eine neue leere Seite ein.",
      },
      {
        icon: "Pencil",
        title: "Unterschrift und Initialen",
        body: "Füge eine echte handschriftliche Unterschrift oder eine getippte hinzu. Platziere sie mit einem einzigen Tippen genau dort, wo du sie brauchst.",
      },
      {
        icon: "Highlighter",
        title: "Markierungen und Hervorhebungen",
        body: "Markiere, unterstreiche, streiche durch. Füge handgeschriebene Notizen oder Kommentare hinzu.",
      },
      {
        icon: "FileText",
        title: "Formulare ausfüllen",
        body: "Tippe auf Felder, um sie auszufüllen. Speichere das ausgefüllte Formular als neues PDF.",
      },
    ],
  },
  steps: {
    heading: "So bearbeitest du ein PDF auf dem Handy",
    items: [
      {
        title: "Öffne die App PDF Editor",
        body: "Starte die App über den Startbildschirm. Für den Anfang brauchst du kein Konto.",
      },
      {
        title: "Wähle das PDF, das du bearbeiten willst",
        body: "Importiere es aus Dateien, iCloud Drive, Google Drive oder deiner E-Mail. Oder tippe einfach irgendwo auf ein PDF und wähle PDF Editor zum Öffnen.",
      },
      {
        title: "Tippe auf die Stelle, die du ändern willst",
        body: "Tippe auf einen Absatz, um den Text zu bearbeiten, auf ein Bild, um es zu ersetzen, oder auf die Miniaturansicht einer Seite, um sie neu anzuordnen.",
      },
      {
        title: "Nimm deine Änderungen vor",
        body: "Die Änderungen erscheinen in Echtzeit auf der Seite. Zoome mit zwei Fingern für mehr Präzision. Rückgängig machen und Wiederholen funktionieren wie erwartet.",
      },
      {
        title: "Speichere das Ergebnis",
        body: "Speichere über das Original, als neue Kopie oder teile es direkt über Mail, AirDrop oder eine beliebige Messaging-App.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Bearbeiten unterwegs",
    body: "Die meisten PDF-Änderungen fallen im ungünstigsten Moment an — fünf Minuten vor einem Meeting, im Zug, zwischen zwei Vorlesungen. Ein Editor, der fürs Handy gemacht ist, lässt dich den falsch geschriebenen Namen in einem Vertrag korrigieren, während du zum Büro läufst, oder deine Unterschrift in der Kaffeepause auf ein Angebot setzen. Kein Laptop, kein Desktop-Rechner, kein Warten, bis du zu Hause bist.",
  },
  faq: [
    {
      q: "Ist die App PDF Editor kostenlos?",
      a: "Ja. Die grundlegenden Bearbeitungsfunktionen — Text, Bilder, Seiten neu anordnen, Unterschriften und Exportieren — sind kostenlos. Einige erweiterte Funktionen schaltest du mit dem Pro-Upgrade frei.",
    },
    {
      q: "Funktioniert die App offline?",
      a: "Ja. Die Bearbeitung findet vollständig auf dem Gerät statt. Eine Internetverbindung brauchst du nur, wenn du Dateien aus einem Cloud-Speicher lädst oder über Online-Dienste teilst.",
    },
    {
      q: "Kann ich gescannte PDFs bearbeiten?",
      a: "Ein gescanntes PDF ist technisch gesehen ein Bild. Du kannst es trotzdem kommentieren, unterschreiben und die Seiten neu anordnen. Um den eigentlichen Text zu bearbeiten, ist vorher eine Texterkennung (OCR) nötig, die die App bei den meisten Dokumenten durchführen kann.",
    },
    {
      q: "Gibt es ein Limit für die Dateigröße?",
      a: "Es gibt kein künstliches Limit. Sehr große PDFs (mehrere hundert MB mit komplexen Grafiken) können auf älteren Handys langsamer laufen, aber die App ist für reale Dokumente ausgelegt.",
    },
    {
      q: "Zerstören meine Änderungen das ursprüngliche Layout?",
      a: "Nein. Die Bearbeitung erfolgt direkt an Ort und Stelle. Schriftarten, Ränder und die bestehende Formatierung bleiben bei PDFs mit echtem Text erhalten.",
    },
    {
      q: "Kann ich als Word exportieren?",
      a: "Ja. Du kannst das bearbeitete PDF direkt in derselben App in Word oder andere Formate umwandeln.",
    },
  ],
  related: [
    {
      label: "So bearbeitest du ein PDF auf dem iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    {
      label: "So bearbeitest du ein PDF auf Android",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "PDF auf dem Handy unterschreiben", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Bearbeite PDFs in Sekunden auf deinem Handy.",
    sub: "Kostenlos für iOS und Android. Für den Start brauchst du kein Konto.",
  },
};

export default content;
