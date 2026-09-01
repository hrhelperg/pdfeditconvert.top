import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-save-a-filled-pdf-form",
  h1: "Ausgefülltes PDF-Formular speichern, damit die Antworten bleiben",
  description:
    "Formular ausgefüllt, und die Antworten verschwinden trotzdem? So speicherst du ausgefüllte Formulardaten zuverlässig, warum manche Programme das nicht tun, und wann du vor dem Versand einbetten solltest.",
  updated: "2026-06-01",
  intro: [
    "Kaum etwas ist bei PDFs ärgerlicher, als ein langes Formular auszufüllen, es zu schließen, wieder zu öffnen – und jedes Feld leer vorzufinden. Die Arbeit ist nicht verloren, weil du etwas falsch gemacht hast, sondern weil die Antworten in der Feldebene des Formulars liegen, und nicht jedes Programm schreibt diese Ebene beim Speichern tatsächlich zurück in die Datei.",
    "Ob ein ausgefülltes Formular zuverlässig gespeichert wird, hängt von zwei Dingen ab: einem Werkzeug, das die Feldwerte tatsächlich speichert (nicht nur druckt), und der Entscheidung, ob das Formular interaktiv bleiben oder eingebettet werden soll, damit die Antworten dauerhaft werden. Stimmen diese beiden Dinge, bleiben deine Antworten jedes Mal erhalten, auf jedem Gerät, das die Datei später öffnet.",
    "Diese Anleitung erklärt genau, wie du ausgefüllte Antworten speicherst, warum manche Anzeigeprogramme sie stillschweigend verwerfen, und wann Einbetten der richtige Schritt ist, bevor du ein Formular zurückschickst.",
  ],
  steps: [
    {
      title: "Fülle das Formular zuerst vollständig aus",
      body: "Trage alle Antworten ein, kreuze die Kontrollkästchen an und ergänze eine Unterschrift, bevor du speicherst. Zwischendurch zu speichern ist kein Problem, aber ein abschließender Durchgang sorgt dafür, dass du eine fertige statt einer halbfertigen Datei sicherst.",
    },
    {
      title: "Nutze Speichern oder Exportieren, nicht nur Drucken",
      body: "Wähle Speichern oder Exportieren, um die Feldwerte in das PDF zu schreiben. Manche einfachen Anzeigeprogramme bieten nur eine Druckfunktion, die Papier oder eine flache Kopie erzeugt, aber nie die bearbeitbaren Antworten speichert – der klassische Grund für verschwundene Daten.",
    },
    {
      title: "Speichere als neue Kopie",
      body: "Exportiere unter einem neuen Dateinamen wie „bewerbung-ausgefuellt.pdf“, statt das leere Original zu überschreiben. So behältst du ein sauberes Original und eine gespeicherte, ausgefüllte Version nebeneinander.",
    },
    {
      title: "Entscheide, ob du einbetten willst",
      body: "Musst du Antworten noch ändern können, lass das Formular interaktiv. Schickst du es endgültig weg, bette es ein, damit die Werte fest in die Seite übergehen und sich nicht mehr löschen oder bearbeiten lassen.",
    },
    {
      title: "Öffne die Datei erneut, um sicherzugehen",
      body: "Schließe die gespeicherte Datei und öffne sie vor dem Versand erneut. Sind deine Antworten noch da, wurden die Feldwerte korrekt geschrieben. Sind sie weg, hat das Programm nur gedruckt – wechsle zu einem, das Formulardaten wirklich speichert.",
    },
  ],
  tips: [
    "Verschwinden Antworten immer wieder, schreibt das Programm die Feldebene nicht. Nutze einen formularfähigen Editor, der Feldwerte wirklich speichert.",
    "Einbetten ist der zuverlässigste Weg, um sicherzustellen, dass Antworten überall angezeigt werden – ist ein Formular erst eingebettet, gibt es keine Feldebene mehr, die verloren gehen könnte.",
    "Bewahre das leere Original getrennt auf; das Einbetten deiner ausgefüllten Kopie sollte dich keine wiederverwendbare Vorlage kosten.",
    "Auf dem Handy speichert „Teilen“ oder „Exportieren“ meist die Daten; ein Als-PDF-drucken-Shortcut bettet unter Umständen ein, was in Ordnung ist, wenn du mit dem Bearbeiten fertig bist.",
    "Benenne Dateien eindeutig – leer, Entwurf, final –, damit du nie versehentlich das leere Formular per E-Mail verschickst.",
  ],
  mobileNote:
    "Die App PDF Editor speichert ausgefüllte Antworten in der Datei und exportiert auf Wunsch eine eingebettete Kopie, sobald du versandbereit bist, sodass beim Empfänger nichts gelöscht wird. Das geschieht alles auf dem Gerät, die eingegebenen Angaben werden also nirgendwohin hochgeladen.",
  faq: [
    {
      q: "Warum verschwinden meine PDF-Formularantworten nach dem Speichern?",
      a: "Weil das Programm das Formular gedruckt statt die Feldwerte gespeichert hat. Feldantworten liegen in einer eigenen Ebene; wird diese nicht in die Datei zurückgeschrieben, zeigt sich beim erneuten Öffnen wieder alles leer. Nutze ein Programm, das Formulardaten tatsächlich speichert.",
    },
    {
      q: "Sollte ich ein Formular vor dem Versand einbetten?",
      a: "Wenn du mit dem Bearbeiten fertig bist, ja. Einbetten verschmilzt deine Antworten mit der Seite, sodass sie sich nicht mehr löschen lassen und überall gleich angezeigt werden. Behalte eine nicht eingebettete Kopie nur, wenn du sie vielleicht noch überarbeiten musst.",
    },
    {
      q: "Wie halte ich das Formular bearbeitbar und speichere trotzdem meine Antworten?",
      a: "Speichere oder exportiere als interaktives PDF, ohne einzubetten. Ein formularfähiges Programm sichert die Feldwerte, sodass du sie später wieder öffnen und ändern kannst.",
    },
    {
      q: "Ist das Speichern eines ausgefüllten Formulars privat?",
      a: "Das hängt vom Programm ab. Die App PDF Editor und lokale Browser-Tools speichern auf deinem Gerät, sodass die eingegebenen persönlichen Daten nirgendwohin gesendet werden. Werkzeuge, die auf Hochladen setzen, verarbeiten deine Datei auf einem Server.",
    },
    {
      q: "Kann ich ein nicht interaktives Formular speichern, das ich mit Text darüber ausgefüllt habe?",
      a: "Ja. Da nicht interaktive Formulare keine Feldebene haben, ist dein hinzugefügter Text nach dem Export Teil der Seite und wird deshalb immer zuverlässig gespeichert und angezeigt.",
    },
  ],
  related: [
    {
      label: "PDF-Formular ausfüllen",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    { label: "Wie PDF-Formulare funktionieren", path: "/guides/how-pdf-forms-work" },
    {
      label: "Warum speichert mein PDF-Formular nicht?",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Ausgefülltes PDF-Formular versenden",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
