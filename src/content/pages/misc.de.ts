import type {
  ContactContent,
  GuidesIndexContent,
  LegalContent,
  ToolsIndexContent,
} from "@/types/content";
import { PRIVACY_UPDATED } from "@/content/legal/privacy";
import { TERMS_UPDATED } from "@/content/legal/terms";

export const TOOLS_INDEX_DE: ToolsIndexContent = {
  crumbLabel: "Kostenlose PDF-Tools",
  heroEyebrow: "Kostenlose PDF-Tools",
  heroH1: "PDF-Tools im Browser — deine Dateien verlassen dein Gerät nie.",
  heroHighlight: "verlassen dein Gerät nie",
  heroLead:
    "Führe deine PDFs zusammen, teile, drehe, markiere und konvertiere sie, ohne etwas hochzuladen. Die gesamte Verarbeitung findet lokal in deinem Browser statt, kostenlos und ohne Registrierung.",
  privacyNote:
    "Alle Tools auf dieser Seite verarbeiten deine Dateien lokal in deinem Browser. Es wird nichts an unsere Server gesendet und nichts gespeichert.",
  clusterHeading: "{count} Anleitungen zur Arbeit mit PDFs im Browser",
  goingFurtherHeading: "Mehr rund um PDFs",
  goingFurtherBody:
    "Diese Tools lösen einzelne Aufgaben im Browser. Für die Methoden dahinter — bearbeiten, konvertieren, unterschreiben, schützen und scannen — starte mit den Bereichen unten.",
  hubs: [
    { id: "pdf-editor", label: "PDF-Editor" },
    { id: "pdf-converter", label: "PDF-Konverter" },
    { id: "pdf-forms", label: "PDF-Formulare" },
    { id: "sign-pdf", label: "PDF unterschreiben" },
    { id: "pdf-security", label: "PDF-Sicherheit" },
    { id: "scan-to-pdf", label: "Scannen zu PDF" },
    {
      id: "compare/pdf-app-vs-online-pdf-tools",
      label: "PDF-App oder Online-Tools",
    },
  ],
  appCtaHeading: "PDF-Tools für unterwegs?",
  appCtaSub: "Lade die PDF-Editor-App für iPhone und Android herunter — kostenlos.",
};

export const GUIDES_INDEX_DE: GuidesIndexContent = {
  h1: "PDF-Anleitungen",
  lead: "{count} praktische, handyfreundliche Anleitungen zum Bearbeiten, Konvertieren, Komprimieren, Unterschreiben und Schützen deiner PDFs — nach Tool oder Thema sortiert.",
};

export const CONTACT_DE: ContactContent = {
  h1: "Kontakt",
  lead: "Fragen, Kooperationen, Presseanfragen oder Feedback zur PDF-Editor-App — wir lesen jede E-Mail.",
  emailLabel: "E-Mail",
  officeLabel: "Sitz des Unternehmens",
  sections: [
    {
      heading: "Was dich erwartet",
      body: "E-Mail ist unser einziger Kontaktweg: kein Ticketsystem, kein Chatbot davor. Die Antworten kommen vom selben kleinen Team, das die App macht, meist innerhalb von zwei Werktagen. Bei einer Frage zur App gib bitte Gerät und Systemversion an; bei einem Problem mit einem bestimmten Dokument beschreib, was du gemacht hast, statt die Datei anzuhängen — wir wollen und brauchen deine Dokumente nicht.",
    },
    {
      heading: "Wobei wir nicht helfen können",
      body: "Die Tools auf dieser Seite laufen vollständig auf deinem Gerät, also erreicht uns nichts von dem, was du verarbeitest. Das heißt auch: Wir können keine Datei wiederherstellen, die du umgewandelt hast, keinen Download erneut zuschicken und nichts in deinem Namen nachschlagen — bei uns liegt keine Kopie vor. Wenn ein Tool bei einem bestimmten PDF fehlgeschlagen ist, sag uns, um welche Art Datei es sich handelte (gescannt, passwortgeschützt, ein ausgefülltes Formular) und was das Tool getan hat.",
    },
    {
      heading: "Datenschutz und rechtliche Anfragen",
      body: "Fragen zum Datenschutz, Löschanträge und rechtliche Mitteilungen gehen an dieselbe Adresse und erreichen die hrhelperg s.r.o. am oben genannten Sitz.",
    },
  ],
  legalSentence:
    "Unsere {privacy} erklärt, was erfasst wird und was nicht, und unsere {terms} regeln die Nutzung der Website und der Tools.",
  privacyLinkLabel: "Datenschutzerklärung",
  termsLinkLabel: "Nutzungsbedingungen",
  tryAppHeading: "Entdecke die App",
};

/**
 * German privacy policy.
 *
 * A translation, not a separate policy: the operator, the registered
 * office, the contact address, the analytics vendor and the legal basis are
 * the same facts the English version states, because the same company
 * processes the same data under the same law.
 *
 * "DSGVO" replaces "GDPR" deliberately, for the same reason it does in the
 * French and Spanish versions: the regulation applies because the
 * controller is established in the EU, and DSGVO (Datenschutz-Grundverordnung)
 * is the term a German reader — themselves inside the EU — already uses for
 * the same regulation.
 */
export const PRIVACY_DE: LegalContent = {
  h1: "Datenschutzerklärung",
  updated: PRIVACY_UPDATED,
  sections: [
    {
      heading: "Wer wir sind",
      body: [
        "pdfeditconvert.top wird betrieben von hrhelperg s.r.o., einer tschechischen Gesellschaft mit beschränkter Haftung mit eingetragenem Sitz in Husitská 502/36, Žižkov, 130 00 Prag 3, Tschechische Republik. Du erreichst uns unter info@hrhelperg.com.",
      ],
    },
    {
      heading: "Was diese Website erfasst",
      body: [
        "Diese Website dient der Information. Sie verlangt weder ein Konto noch das Hochladen von Dokumenten oder die Angabe personenbezogener Daten, um irgendeine Seite zu lesen.",
        "Wir nutzen ein datenschutzfreundliches Analysetool (WebmasterID), um zu verstehen, welche Seiten besucht werden und wie Leser uns finden. Es erfasst die Adresse der besuchten Seite, deine ungefähre Region, den Gerätetyp und die verweisende Website. Es verwendet keine Werbe-Cookies und erstellt kein Profil von dir auf anderen Websites.",
      ],
    },
    {
      heading: "Was die mobile App erfasst",
      body: [
        "Die PDF-Editor-App kann Daten lokal auf deinem Gerät speichern (geöffnete Dateien, deine Einstellungen) und kann Dateien mit dem von dir gewählten Cloud-Dienst synchronisieren (iCloud, Google Drive und andere), wenn du diese Option aktivierst. Die offizielle Liste findest du in den Datenschutzangaben der App im App Store und bei Google Play.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "Wir verwenden eine kleine Zahl von Cookies und ähnlichen Speichertechnologien für die Grundfunktionen der Website und für die Reichweitenmessung. Wir verwenden keine Werbe-Cookies.",
      ],
    },
    {
      heading: "Deine Rechte",
      body: [
        "Wenn du in der Europäischen Union oder im Europäischen Wirtschaftsraum wohnst, hast du Rechte nach der DSGVO, darunter Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Schreibe an info@hrhelperg.com, um sie auszuüben.",
      ],
    },
    {
      heading: "Kontakt",
      body: [
        "Fragen zu dieser Erklärung kannst du an info@hrhelperg.com senden.",
      ],
    },
    {
      heading: "Änderungen",
      body: [
        "Wir können diese Erklärung aktualisieren. Wesentliche Änderungen werden auf dieser Seite zusammen mit einem neuen Aktualisierungsdatum angegeben.",
      ],
    },
  ],
};

/** German terms of service — a translation of the same terms. */
export const TERMS_DE: LegalContent = {
  h1: "Nutzungsbedingungen",
  updated: TERMS_UPDATED,
  sections: [
    {
      heading: "Über diese Bedingungen",
      body: [
        "Diese Bedingungen regeln die Nutzung von pdfeditconvert.top, betrieben von hrhelperg s.r.o. (Husitská 502/36, Žižkov, 130 00 Prag 3, Tschechische Republik).",
      ],
    },
    {
      heading: "Nutzung der Website",
      body: [
        "Du darfst die Seiten dieser Website lesen, verlinken und teilen. Du darfst keine umfangreichen Inhalte entnehmen, um sie erneut zu veröffentlichen, und die Website nicht in einer Weise nutzen, die andere Personen stört.",
      ],
    },
    {
      heading: "Über die PDF-Editor-App",
      body: [
        "PDF Editor ist eine mobile App, die über den Apple App Store und Google Play vertrieben wird. Für ihre Nutzung gelten die eigenen Bedingungen der App, die während der Installation angezeigt werden.",
      ],
    },
    {
      heading: "Keine Gewährleistung",
      body: [
        "Die Inhalte von pdfeditconvert.top dienen allgemeinen Informationszwecken und stellen keine Rechts-, Steuer- oder Finanzberatung dar. Wir bemühen uns angemessen um Richtigkeit, garantieren aber nicht, dass sie vollständig oder für einen bestimmten Zweck geeignet sind.",
      ],
    },
    {
      heading: "Haftung",
      body: [
        "Soweit nach tschechischem und EU-Recht zulässig, haftet hrhelperg s.r.o. nicht für mittelbare oder Folgeschäden aus der Nutzung dieser Website.",
      ],
    },
    {
      heading: "Anwendbares Recht",
      body: [
        "Diese Bedingungen unterliegen dem Recht der Tschechischen Republik. Streitigkeiten werden vor den zuständigen tschechischen Gerichten ausgetragen.",
      ],
    },
    {
      heading: "Kontakt",
      body: [
        "Fragen zu diesen Bedingungen kannst du an info@hrhelperg.com senden.",
      ],
    },
  ],
};
