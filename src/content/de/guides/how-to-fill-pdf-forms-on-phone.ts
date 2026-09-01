import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-phone",
  h1: "PDF-Formulare am Handy ausfüllen",
  description:
    "Fülle PDF-Formulare auf iPhone oder Android aus, egal ob sie echte Formularfelder haben oder nur gescannt sind. Antippen und tippen, Textfelder hinzufügen und an einem Ort unterschreiben.",
  updated: "2026-05-23",
  intro: [
    "PDF-Formulare gibt es in zwei Varianten, und zu wissen, welche du vor dir hast, bestimmt, wie du sie ausfüllst. Manche sind interaktiv — du tippst ein Feld an und schreibst hinein, mit sauberen Boxen, die der Formularersteller eingebaut hat. Andere sind nicht interaktiv: ein gescanntes oder gedrucktes und dann als PDF gespeichertes Formular ganz ohne Felder, bei dem du deinen eigenen Text darüberlegen musst — im Grunde nur ein Bild der Seite. Beide lassen sich am Handy problemlos ausfüllen, sie brauchen nur eine leicht andere Vorgehensweise.",
    "Diese Anleitung zeigt, wie du beide Arten auf iPhone und Android mit der PDF-Editor-App ausfüllst. Sie erkennt interaktive Felder, wo es sie gibt, und lässt dich Text und Häkchen frei platzieren, wo es keine gibt. Viele Formulare brauchen außerdem eine Unterschrift, die dieselbe App in einem Durchgang mit erledigt.",
    "Das Ergebnis ist ein ausgefülltes Formular, das du direkt zurückschicken kannst — kein Ausdrucken, kein Scannen, keine Suche nach einem funktionierenden Drucker im ungünstigsten Moment.",
  ],
  steps: [
    {
      title: "Öffne das Formular in der PDF-Editor-App",
      body: "Importiere das PDF aus Dateien, Mail, Drive oder einem beliebigen Teilen-Menü. Die App prüft, ob das Formular interaktive Felder hat.",
    },
    {
      title: "Hat es Felder, tippe hinein und schreib",
      body: "Bei interaktiven Formularen tippst du direkt in jedes Feld und schreibst hinein. Wechsle mit Tab oder Scrollen zwischen den Feldern und tippe Kontrollkästchen an, um sie anzukreuzen.",
    },
    {
      title: "Ist es nicht interaktiv, füge deinen eigenen Text hinzu",
      body: "Bei einem gescannten oder feldlosen Formular platzierst du mit dem Textwerkzeug Text dort, wo jede Antwort hingehört. Passe Größe und Position so an, dass er sauber auf der Linie sitzt.",
    },
    {
      title: "Kontrollkästchen und Datumsangaben erledigen",
      body: "Setze ein Häkchen oder X auf Ankreuzfelder und füge das Datum ein, wo verlangt. Bei nicht interaktiven Formularen sind das einfach Text- oder Markierungsobjekte, die du selbst positionierst.",
    },
    {
      title: "Unterschreibe, wenn das Formular es verlangt",
      body: "Nutze das Unterschreiben-Werkzeug, um deine gespeicherte Unterschrift im Unterschriftsbereich einzufügen — der gleiche Ablauf, egal ob das Formular interaktiv oder nicht interaktiv ist.",
    },
    {
      title: "Exportieren und versenden",
      body: "Speichere eine ausgefüllte Kopie als neue Datei und schick sie per E-Mail oder einer beliebigen App zurück. Bewahre das leere Original auf, falls du es noch einmal ausfüllen musst.",
    },
  ],
  tips: [
    "Prüfe zuerst, ob die Felder interaktiv sind — tippe dort, wo eine Antwort hingehört. Erscheint ein Cursor, schreib hinein; passiert nichts, ist es ein nicht interaktives Formular, und du legst Text darüber.",
    "Zoome bei nicht interaktiven Formularen hinein, bevor du Text platzierst, damit er genau auf der Linie landet statt darüber oder darunter zu schweben.",
    "Bewahre eine leere Kopie von Formularen auf, die du wiederholt ausfüllst. Ein frisches Original neu auszufüllen ist sauberer, als die Antworten vom letzten Mal zu bearbeiten.",
    "Fülle aus und unterschreibe in derselben Sitzung, damit du nicht exportierst, wieder öffnest und alles neu platzierst — die App erledigt das in einem Durchgang.",
    "Prüfe Pflichtfelder noch einmal, bevor du versendest. Ein Formular, das wegen eines fehlenden Datums zurückkommt, kostet mehr Zeit als die Kontrolle vorher gekostet hätte.",
  ],
  mobileNote:
    "Formulare auszufüllen ist eine der Aufgaben, die sich am Handy wirklich am natürlichsten anfühlen — das Formular kommt per E-Mail an und geht auf demselben Weg zurück. Die PDF-Editor-App füllt interaktive wie nicht interaktive Formulare aus, fügt deine Unterschrift hinzu und exportiert eine ausgefüllte Kopie — alles auf dem Gerät, ohne dass irgendetwas hochgeladen wird.",
  faq: [
    {
      q: "Woran erkenne ich, ob ein PDF-Formular interaktiv ist?",
      a: "Tippe dort, wo eine Antwort hingehört. Erscheint ein Textcursor und du kannst schreiben, hat es interaktive Felder. Passiert nichts, ist es nicht interaktiv, und du legst Text darüber.",
    },
    {
      q: "Kann ich ein gescanntes Formular ohne Felder ausfüllen?",
      a: "Ja. Platziere deine Antworten mit dem Textwerkzeug direkt auf der Seite und füge bei Bedarf Häkchen hinzu. Die App behandelt sie als Objekte, die du selbst positionierst.",
    },
    {
      q: "Kann ich das Formular in derselben App unterschreiben?",
      a: "Ja. Das Unterschreiben-Werkzeug fügt deine gespeicherte Unterschrift in derselben Sitzung hinzu, sodass du ausfüllst und unterschreibst, ohne die App zu wechseln.",
    },
    {
      q: "Wird das ausgefüllte Formular irgendwohin hochgeladen?",
      a: "Nein. Die PDF-Editor-App füllt Formulare auf deinem Gerät aus, sodass die persönlichen Angaben darauf privat bleiben.",
    },
    {
      q: "Kann ich ein Formular wiederverwenden, das ich oft ausfülle?",
      a: "Bewahre das leere Original auf und fülle jedes Mal eine frische Kopie aus. Das ist sauberer, als eine bereits ausgefüllte Version zu bearbeiten.",
    },
  ],
  related: [
    { label: "PDF Editor — am Handy bearbeiten und ausfüllen", path: "/pdf-editor" },
    { label: "PDF am Handy unterschreiben", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "PDF am Handy kommentieren", path: "/guides/how-to-annotate-pdf-on-mobile" },
    { label: "PDF auf dem iPhone bearbeiten", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
