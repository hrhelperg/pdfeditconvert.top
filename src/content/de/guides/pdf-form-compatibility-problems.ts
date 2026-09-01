import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-compatibility-problems",
  h1: "Kompatibilitätsprobleme bei PDF-Formularen (XFA und dynamische Formulare)",
  description:
    "Ein Formular, das in einem Programm funktioniert und in einem anderen zerbricht, nutzt meist Funktionen, die nicht jede Anzeige unterstützt. Wie du dynamische Formulare erkennst, was die Unterschiede verursacht, und welche Optionen du hast.",
  updated: "2026-06-01",
  intro: [
    "Manchmal funktioniert ein Formular in einem Programm einwandfrei und zerfällt in einem anderen – Felder erscheinen nicht, eine Warnung sagt „bitte in einem anderen Anzeigeprogramm öffnen“, oder die Seite ist leer und zeigt nur eine Fehlermeldung. Das ist ein Kompatibilitätsproblem, und es bedeutet fast immer, dass das Formular Funktionen nutzt, die nicht jedes PDF-Anzeigeprogramm unterstützt. Das Formular ist nicht kaputt; es ist nur wählerischer dabei, wo es geöffnet wird, als ein Standardformular.",
    "Die übliche Ursache ist ein fortgeschrittenes oder dynamisches Formular, gebaut mit einer Technologie (oft XFA oder LiveCycle genannt), die nur bestimmte Software richtig darstellt. Standard-interaktive Formulare werden breit unterstützt, aber diese dynamischen Formulare können ein bestimmtes Programm verlangen, und viele moderne Anzeigeprogramme – besonders auf dem Handy und im Browser – öffnen sie überhaupt nicht korrekt.",
    "Diese Anleitung hilft dir, ein Kompatibilitätsproblem zu erkennen, zu verstehen, warum es auftritt, und deine realistischen Optionen abzuwägen – einschließlich der ehrlichen Tatsache, dass manche Formulare schlicht die Software brauchen, für die sie entwickelt wurden, oder ein anderes Format vom Herausgeber.",
  ],
  steps: [
    {
      title: "Erkenne die verräterischen Anzeichen",
      body: "Ein Hinweis wie „bitte warten“ oder „in einem kompatiblen Anzeigeprogramm öffnen“, eine leere Seite, wo ein Formular sein sollte, oder Felder, die in einem Programm erscheinen und im nächsten verschwinden – alles Anzeichen für nicht unterstützte Funktionen.",
    },
    {
      title: "Erkenne ein dynamisches (XFA-)Formular",
      body: "Formulare, die eine Warnung zeigen, dass sie bestimmte Software brauchen, sind meist dynamische XFA-Formulare. Das sind keine Standard-interaktiven Formulare, und viele Anzeigeprogramme – besonders auf dem Handy und im Browser – können sie nicht darstellen.",
    },
    {
      title: "Probiere ein anderes, vollwertiges Anzeigeprogramm",
      body: "Öffne das Formular in ein paar geeigneten PDF-Programmen. Ein Standard-interaktives Formular, das in einem einfachen Anzeigeprogramm zerbrach, funktioniert oft in einem vollwertigen. Ein dynamisches Formular braucht möglicherweise weiterhin seine bestimmte Software.",
    },
    {
      title: "Bitte den Herausgeber um eine kompatible Version",
      body: "Öffnet sich ein Formular wirklich nirgends, was du nutzen kannst, bitte die absendende Person um ein Standard-PDF, eine flache druckbare Version, oder Hinweise, welche Software gebraucht wird. Herausgeber haben meist eine Alternative."
    },
    {
      title: "Weiche notfalls auf Drucken und Ausfüllen aus",
      body: "Als letzter Ausweg bei einem Formular, das du nicht interaktiv öffnen kannst, fordere eine flache druckbare Kopie an oder erstelle sie und fülle sie aus, indem du Text auf der Seite platzierst oder von Hand schreibst. Nicht elegant, aber es funktioniert immer.",
    },
  ],
  tips: [
    "Eine Warnung zu einem „kompatiblen Anzeigeprogramm“ ist das klassische Zeichen für ein dynamisches XFA-Formular, das bestimmte Software braucht.",
    "Standard-interaktive Formulare werden breit unterstützt; zerbricht eines nur in einem einfachen Anzeigeprogramm, behebt das meist eine vollwertige App.",
    "Manche Formulare brauchen schlicht das Programm, für das sie gebaut wurden – das ist eine echte Grenze, keine Sache, die man erzwingen sollte.",
    "Öffnet sich ein Formular nirgends brauchbar, kann der Herausgeber fast immer eine Standard- oder druckbare Alternative liefern.",
    "Manche PDF-Formulare nutzen nicht unterstützte Funktionen, „es öffnet sich hier nicht“ kann also am Design des Formulars liegen, nicht an einem Fehler deinerseits.",
  ],
  mobileNote:
    "Auf dem Handy treffen Kompatibilitätsprobleme am härtesten – dynamische XFA-Formulare lassen sich in mobilen Anzeigeprogrammen oft überhaupt nicht darstellen. Die App PDF Editor öffnet und füllt Standard-interaktive und nicht interaktive Formulare zuverlässig; brauchst du für ein dynamisches Formular bestimmte Desktop-Software, bitte den Herausgeber stattdessen um eine Standard-PDF-Version.",
  faq: [
    {
      q: "Warum funktioniert mein PDF-Formular in einem Programm, aber nicht in einem anderen?",
      a: "Es nutzt wahrscheinlich Funktionen, die nicht jedes Anzeigeprogramm unterstützt – oft ein dynamisches XFA-Formular. Standardformulare sind breit kompatibel; dynamische können bestimmte Software verlangen und lassen sich in vielen Anzeigeprogrammen, besonders auf dem Handy und im Browser, nicht darstellen.",
    },
    {
      q: "Was ist ein dynamisches oder XFA-Formular?",
      a: "Das ist ein fortgeschrittener Formulartyp, der sich eher wie ein kleines Programm verhält als wie eine statische Seite. Nur bestimmte Software stellt es korrekt dar, deshalb zeigt es anderswo möglicherweise eine Warnung oder eine leere Seite.",
    },
    {
      q: "Wie öffne ich ein Formular, das „kompatibles Anzeigeprogramm verwenden“ sagt?",
      a: "Probiere ein vollwertiges PDF-Programm. Öffnet sich ein dynamisches Formular weiterhin nicht, bitte den Herausgeber um ein Standard-PDF oder eine druckbare Version – viele Anzeigeprogramme können dynamische Formulare wirklich nicht darstellen.",
    },
    {
      q: "Kann ich ein dynamisches Formular selbst in ein Standardformular umwandeln?",
      a: "Aus der fertigen Datei nicht zuverlässig. Der verlässliche Weg ist, den Herausgeber um eine Standard- oder flache Version zu bitten. Eine erzwungene Umwandlung verliert oft Felder oder Daten.",
    },
    {
      q: "Ist ein Kompatibilitätsproblem dasselbe wie fehlende Felder?",
      a: "Sie überschneiden sich – ein Kompatibilitätsproblem kann dazu führen, dass Felder in einem nicht unterstützten Anzeigeprogramm fehlen. Aber fehlende Felder liegen oft nur daran, dass ein einfaches Anzeigeprogramm ein Standardformular nicht darstellt, was eine geeignete App behebt.",
    },
  ],
  related: [
    {
      label: "PDF-Formularfelder fehlen?",
      path: "/guides/pdf-form-fields-missing",
    },
    { label: "PDF-Formular funktioniert nicht?", path: "/guides/pdf-form-not-working" },
    { label: "Wie PDF-Formulare funktionieren", path: "/guides/how-pdf-forms-work" },
    { label: "PDF-Formularfehler beheben", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
