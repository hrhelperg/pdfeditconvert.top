import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-type-in-a-pdf-form",
  h1: "Warum kann ich in diesem PDF-Formular nicht tippen? Ursachen und Lösungen",
  description:
    "Du klickst in ein Feld, und nichts passiert. Die drei üblichen Gründe – ein flaches Formular, das falsche Programm oder eine gesperrte Datei – und was du in jedem Fall tun kannst.",
  updated: "2026-06-01",
  intro: [
    "Du öffnest ein Formular, klickst dort, wo dein Name hingehört, und … nichts passiert. Kein Cursor, kein Feld, keine Möglichkeit zu tippen. Es fühlt sich an, als wäre das Formular kaputt, ist es aber fast nie. Dass du nicht tippen kannst, hat einen von drei konkreten Gründen, für jeden gibt es eine klare Lösung, sobald du ihn benennen kannst.",
    "Der erste und häufigste Grund: Das Formular ist nicht interaktiv – es gibt keine Felder zum Hineintippen, nur ein Bild eines Formulars. Der zweite: Du öffnest es in einem Anzeigeprogramm, das Formularfelder nicht richtig unterstützt. Der dritte: Das Formular ist gesperrt oder schreibgeschützt und verhindert Eingaben absichtlich. Sie auseinanderzuhalten braucht nur ein paar kurze Checks.",
    "Diese Anleitung geht die drei Ursachen der Reihe nach durch, zeigt, wie du herausfindest, welche bei dir zutrifft, und liefert für jede die passende Lösung, damit deine Antworten auf die Seite kommen.",
  ],
  steps: [
    {
      title: "Prüfe, ob das Formular überhaupt Felder hat",
      body: "Tippe mehrere verschiedene Leerstellen an. Erscheint an keiner einzigen ein Cursor oder eine Hervorhebung, ist das Formular so gut wie sicher nicht interaktiv – es gibt keine Felder zum Hineintippen, entweder von vornherein so gestaltet oder weil es gescannt wurde.",
    },
    {
      title: "Ist es nicht interaktiv, füge Text darüber hinzu",
      body: "In nicht interaktive Formulare kannst du nicht hineintippen, aber du kannst mit dem Textwerkzeug eines PDF-Editors eigenen Text und Häkchen über die Seite legen. Genau so ist es vorgesehen, ein gescanntes oder feldloses Formular auszufüllen.",
    },
    {
      title: "Schließe das Anzeigeprogramm als Ursache aus",
      body: "Manche Browser und einfache Vorschauprogramme zeigen ein Formular an, ignorieren aber seine Felder. Öffne dieselbe Datei in einer richtigen PDF-App. Funktionieren die Felder plötzlich, lag es am ursprünglichen Anzeigeprogramm.",
    },
    {
      title: "Prüfe auf ein gesperrtes oder schreibgeschütztes Formular",
      body: "Gibt es Felder, nehmen sie aber nirgends Eingaben an, ist das Formular möglicherweise gesichert oder als schreibgeschützt markiert. Achte auf ein Schloss-Symbol oder einen Hinweis wie „geschützt“. Ein schreibgeschütztes Formular blockiert Eingaben absichtlich.",
    },
    {
      title: "Umgehe ein gesperrtes Formular",
      body: "Bei einem schreibgeschützten Formular kannst du meist trotzdem Text darüberlegen, so wie bei einem nicht interaktiven Formular, oder die absendende Person um eine entsperrte Version bitten. Versuch nicht, den Schutz eines Formulars zu umgehen, das nicht dir gehört.",
    },
  ],
  tips: [
    "Die schnellste Diagnose: Öffne dieselbe Datei in einer richtigen PDF-App. Das trennt sofort „nicht interaktives Formular“ von „ungeeignetes Anzeigeprogramm“.",
    "Text darüberzulegen funktioniert bei fast jedem Formular, ob nicht interaktiv oder gesperrt, und ist oft der schnellste Weg zu einer fertig ausgefüllten Seite.",
    "Lässt sich ein Formular am Computer problemlos ausfüllen, aber nicht in der E-Mail-Vorschau des Handys, liegt es am Anzeigeprogramm – öffne es stattdessen in einer richtigen PDF-App.",
    "Nehmen nur manche Felder keine Eingaben an, sind genau diese Felder vielleicht berechnet oder gesperrt, während der Rest offen bleibt.",
    "Aussehen und Verhalten eines Formulars können sich zwischen PDF-Anzeigeprogrammen unterscheiden – „hier funktioniert es nicht“ heißt selten „es ist überall kaputt“.",
  ],
  mobileNote:
    "Auf dem Handy tippt die App PDF Editor dort in interaktive Felder, wo es sie gibt, und lässt dich bei nicht interaktiven oder gesperrten Formularen Text direkt platzieren, wo es keine gibt – so wird ein Formular ausfüllbar, das in deiner E-Mail-Vorschau keine Eingabe zuließ. Das läuft auf dem Gerät, ohne dass etwas hochgeladen wird.",
  faq: [
    {
      q: "Warum kann ich in meinem PDF-Formular nicht tippen?",
      a: "Meist einer von drei Gründen: Das Formular ist nicht interaktiv und hat keine Felder, dein Anzeigeprogramm unterstützt Formularfelder nicht, oder das Formular ist gesperrt beziehungsweise schreibgeschützt. Finde heraus, welcher zutrifft, und lege dann entweder Text darüber, wechsle das Anzeigeprogramm, oder bitte um eine entsperrte Kopie.",
    },
    {
      q: "Wie tippe ich in ein nicht interaktives PDF-Formular?",
      a: "Das geht nicht, weil es keine Felder gibt. Nutze stattdessen einen PDF-Editor, um Text und Häkchen direkt an der richtigen Stelle auf der Seite zu platzieren, und exportiere die Datei anschließend.",
    },
    {
      q: "Warum funktioniert das Formular am Computer, aber nicht auf meinem Handy?",
      a: "Dein Handy zeigt es wahrscheinlich in einer App an, die Formularfelder ignoriert. Öffne die Datei in einer richtigen PDF-App, dann sollten die Felder aktiv werden.",
    },
    {
      q: "Was bedeutet ein schreibgeschütztes PDF-Formular?",
      a: "Es ist ein Formular, das von der erstellenden Person so gesichert wurde, dass sich Felder nicht bearbeiten oder beschreiben lassen. Häufig kannst du trotzdem Text darüberlegen, oder du bittest die absendende Person um eine Version, die Eingaben erlaubt.",
    },
    {
      q: "Kann ein Formular teilweise beschreibbar sein?",
      a: "Ja. Manche Felder können gesperrt oder automatisch berechnet sein, während andere Eingaben annehmen. Fülle die offenen Felder aus und ergänze für den Rest Text von Hand.",
    },
  ],
  related: [
    {
      label: "PDF-Formular ausfüllen",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Warum ist mein PDF-Formular schreibgeschützt?",
      path: "/guides/why-pdf-form-is-read-only",
    },
    {
      label: "PDF-Formularfelder fehlen?",
      path: "/guides/pdf-form-fields-missing",
    },
    { label: "PDF-Formular funktioniert nicht?", path: "/guides/pdf-form-not-working" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
