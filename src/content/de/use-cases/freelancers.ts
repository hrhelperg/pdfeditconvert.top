import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "freelancers",
  h1: "PDF Editor für Selbstständige",
  description:
    "Methoden, die Selbstständige lieben: Angebote, unterschriebene Vereinbarungen und Rechnungen, alles vom Handy aus.",
  intro: [
    "Selbstständige erledigen den Großteil ihres Geschäfts vom Handy aus. Es gibt kein Büro, keine IT-Abteilung, keinen gemeinsamen Drucker. Derselbe PDF-Ablauf, für den ein Unternehmensteam drei Apps und ein E-Signatur-Abo braucht, muss hier oft in einer einzigen App passen — schnell, zwischen zwei abrechenbaren Aufträgen.",
    "Jede Minute, die mit Werkzeugen verschwendet wird, ist eine Minute, die nicht abgerechnet wird. Ein PDF-Editor, der einfach funktioniert — ohne Hochladen, ohne Konto anlegen, ohne monatliche Gebühr für ein Tool, das zweimal die Woche zum Einsatz kommt — ist eine dieser stillen Investitionen, die sich über die Monate auszahlt.",
    "Das sind die konkreten Vorgänge, die den Alltag als Selbstständiger vom Handy aus praktikabel machen: schnell, privat und ohne den Ballast eines Abos.",
  ],
  workflows: [
    {
      title: "Ein durchdachtes Angebot als PDF verschicken",
      body: "Exportiere dein Angebot aus Notion, Pages oder Google Docs als PDF. Unterschreibe es, hänge es an die E-Mail an, schick es ab. Der Empfänger sieht genau das, was du zeigen wolltest.",
    },
    {
      title: "Verträge deiner Kunden vom Handy aus unterschreiben",
      body: "Zeichne deine Unterschrift einmal und nutze sie für jeden künftigen Vertrag wieder. Schluss mit „ich melde mich, sobald ich am Rechner sitze“.",
    },
    {
      title: "Spesenbelege scannen, sobald sie anfallen",
      body: "Ein Kaffee mit Kunden, eine Taxifahrt, ein Ausrüstungskauf — scanne es im Moment. Die entstandenen PDFs sind durchsuchbar und kompatibel mit Buchhaltungssoftware.",
    },
    {
      title: "Immer als PDF fakturieren",
      body: "Egal welches Rechnungstool du nutzt — exportiere vor dem Versenden als PDF. Das senkt das Risiko nachträglicher Änderungen und wirkt professioneller als ein DOCX.",
    },
    {
      title: "Liefergegenstände beim Projektabschluss bündeln",
      body: "Führe das finale Briefing, die unterschriebene Vereinbarung und die ergänzenden Unterlagen zum Projektabschluss zu einem einzigen Archiv-PDF zusammen.",
    },
  ],
  appPitch:
    "PDF Editor ist das stille Arbeitspferd für Selbstständige: Er ersetzt weder deine Design- noch deine Rechnungstools, sondern macht nur die Dokumentebene mühelos. Kostenlos, nativ, auf dem Gerät. Verfügbar für iOS und Android.",
  related: [
    { label: "PDF auf dem Handy unterschreiben", path: "/sign-pdf" },
    { label: "PDF-Methoden für Unternehmen", path: "/pdf-for-business" },
    { label: "Anwendungsfälle: Remote-Arbeit", path: "/use-cases/remote-work" },
  ],
};

export default content;
