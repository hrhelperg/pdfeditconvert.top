import type {
  ContactContent,
  GuidesIndexContent,
  LegalContent,
  ToolsIndexContent,
} from "@/types/content";
import { PRIVACY_UPDATED } from "@/content/legal/privacy";
import { TERMS_UPDATED } from "@/content/legal/terms";

export const TOOLS_INDEX_FR: ToolsIndexContent = {
  crumbLabel: "Outils PDF gratuits",
  heroEyebrow: "Outils PDF gratuits",
  heroH1: "Des outils PDF dans le navigateur — vos fichiers ne quittent jamais votre appareil.",
  heroHighlight: "ne quittent jamais",
  heroLead:
    "Fusionnez, divisez, faites pivoter, marquez et convertissez vos PDF sans rien envoyer. Tout le traitement se fait localement dans votre navigateur, gratuitement et sans inscription.",
  privacyNote:
    "Tous les outils de cette page traitent vos fichiers localement, dans votre navigateur. Rien n'est envoyé à nos serveurs et rien n'est conservé.",
  clusterHeading: "{count} guides sur le travail avec un PDF dans le navigateur",
  goingFurtherHeading: "Aller plus loin avec les PDF",
  goingFurtherBody:
    "Ces outils règlent des tâches ponctuelles dans le navigateur. Pour les méthodes de travail qui les entourent — modifier, convertir, signer, protéger et numériser — commencez par les rubriques ci-dessous.",
  hubs: [
    { id: "pdf-editor", label: "Éditeur PDF" },
    { id: "pdf-converter", label: "Convertisseur PDF" },
    { id: "pdf-forms", label: "Formulaires PDF" },
    { id: "sign-pdf", label: "Signer un PDF" },
    { id: "pdf-security", label: "Sécurité des PDF" },
    { id: "scan-to-pdf", label: "Numériser en PDF" },
    {
      id: "compare/pdf-app-vs-online-pdf-tools",
      label: "Application PDF ou outils en ligne",
    },
  ],
  appCtaHeading: "Besoin d'outils PDF sur votre téléphone ?",
  appCtaSub: "Téléchargez l'application PDF Editor pour iPhone et Android — gratuitement.",
};

export const GUIDES_INDEX_FR: GuidesIndexContent = {
  h1: "Guides PDF",
  lead: "{count} tutoriels concrets, pensés pour le mobile, sur la modification, la conversion, la compression, la signature et la protection de vos PDF — regroupés par outil ou par thème.",
};

export const CONTACT_FR: ContactContent = {
  h1: "Nous contacter",
  lead: "Question, partenariat, presse ou avis sur l'application PDF Editor — nous lisons tous les e-mails.",
  emailLabel: "E-mail",
  officeLabel: "Siège social",
  sections: [
    {
      heading: "À quoi vous attendre",
      body: "L'e-mail est notre seul canal de contact : pas de système de tickets, pas de chatbot devant. Les réponses viennent de la même petite équipe qui fait l'application, en général sous deux jours ouvrés. Pour une question sur l'application, précisez l'appareil et la version du système ; pour un problème sur un document précis, décrivez ce que vous étiez en train de faire plutôt que de joindre le fichier — nous ne voulons ni n'avons besoin de vos documents.",
    },
    {
      heading: "Ce que nous ne pouvons pas faire",
      body: "Les outils de ce site fonctionnent entièrement sur votre appareil, donc rien de ce que vous traitez ne nous parvient. Cela signifie aussi que nous ne pouvons ni récupérer un fichier que vous avez converti, ni renvoyer un téléchargement, ni consulter quoi que ce soit en votre nom : il n'existe aucune copie de notre côté. Si un outil a échoué sur un PDF précis, indiquez de quel type de fichier il s'agissait (numérisé, protégé par mot de passe, un formulaire rempli) et ce que l'outil a fait.",
    },
    {
      heading: "Confidentialité et demandes juridiques",
      body: "Les questions sur la protection des données, les demandes de suppression et les notifications juridiques passent par la même adresse et arrivent chez hrhelperg s.r.o., au siège social indiqué ci-dessus.",
    },
  ],
  legalSentence:
    "Notre {privacy} explique ce qui est collecté et ce qui ne l'est pas, et nos {terms} encadrent l'utilisation du site et des outils.",
  privacyLinkLabel: "politique de confidentialité",
  termsLinkLabel: "conditions d'utilisation",
  tryAppHeading: "Découvrir l'application",
};

/**
 * French privacy policy.
 *
 * A translation, not a separate policy: the operator, the registered
 * office, the contact address, the analytics vendor and the legal basis are
 * the same facts the English version states, because the same company
 * processes the same data under the same law.
 *
 * "RGPD" replaces "GDPR" deliberately, not "PDF ou GDPR" left untranslated
 * as pt-BR does: the regulation applies because the controller is
 * established in the EU, and RGPD (Règlement Général sur la Protection des
 * Données) is the term a French reader — themselves inside the EU — already
 * uses for the same regulation. It is the same law under its French name,
 * not a different or invented one.
 */
export const PRIVACY_FR: LegalContent = {
  h1: "Politique de confidentialité",
  updated: PRIVACY_UPDATED,
  sections: [
    {
      heading: "Qui nous sommes",
      body: [
        "pdfeditconvert.top est exploité par hrhelperg s.r.o., une société à responsabilité limitée tchèque dont le siège social est enregistré à Husitská 502/36, Žižkov, 130 00 Prague 3, République tchèque. Vous pouvez nous écrire à info@hrhelperg.com.",
      ],
    },
    {
      heading: "Ce que ce site collecte",
      body: [
        "Ce site est un site d'information. Il ne vous demande de créer aucun compte, d'envoyer aucun document ni de partager aucune donnée personnelle pour consulter une page.",
        "Nous utilisons un outil d'analyse respectueux de la confidentialité (WebmasterID) pour comprendre quelles pages sont consultées et comment les lecteurs nous trouvent. Il enregistre l'adresse de la page visitée, votre région approximative, le type d'appareil et le site d'origine. Il n'utilise pas de cookies publicitaires et ne constitue pas de profil vous concernant sur d'autres sites.",
      ],
    },
    {
      heading: "Ce que l'application mobile collecte",
      body: [
        "L'application PDF Editor peut conserver des données localement sur votre appareil (fichiers ouverts, vos réglages) et peut synchroniser des fichiers avec le service cloud de votre choix (iCloud, Google Drive et autres) si vous activez cette option. Consultez les informations de confidentialité de l'application sur l'App Store et sur Google Play pour la liste officielle.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "Nous utilisons un petit nombre de cookies et de technologies de stockage similaires pour le fonctionnement de base du site et pour les mesures d'audience. Nous n'utilisons pas de cookies publicitaires.",
      ],
    },
    {
      heading: "Vos droits",
      body: [
        "Si vous résidez dans l'Union européenne ou dans l'Espace économique européen, vous disposez de droits prévus par le RGPD, notamment d'accès, de rectification, d'effacement, de limitation et de portabilité. Écrivez à info@hrhelperg.com pour les exercer.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Les questions sur cette politique peuvent être adressées à info@hrhelperg.com.",
      ],
    },
    {
      heading: "Modifications",
      body: [
        "Nous pouvons mettre à jour cette politique. Les changements significatifs seront signalés sur cette page, avec une nouvelle date de mise à jour.",
      ],
    },
  ],
};

/** French terms of service — a translation of the same terms. */
export const TERMS_FR: LegalContent = {
  h1: "Conditions d'utilisation",
  updated: TERMS_UPDATED,
  sections: [
    {
      heading: "À propos de ces conditions",
      body: [
        "Ces conditions régissent l'utilisation de pdfeditconvert.top, exploité par hrhelperg s.r.o. (Husitská 502/36, Žižkov, 130 00 Prague 3, République tchèque).",
      ],
    },
    {
      heading: "Utilisation du site",
      body: [
        "Vous pouvez lire, créer des liens vers les pages de ce site et les partager. Vous ne pouvez pas extraire de larges portions du contenu pour les republier, ni utiliser le site d'une façon qui gênerait d'autres personnes.",
      ],
    },
    {
      heading: "À propos de l'application PDF Editor",
      body: [
        "PDF Editor est une application mobile distribuée par l'App Store d'Apple et par Google Play. Son utilisation est régie par les conditions propres à l'application, présentées lors de l'installation.",
      ],
    },
    {
      heading: "Absence de garantie",
      body: [
        "Le contenu de pdfeditconvert.top est fourni à titre d'information générale et ne constitue pas un conseil juridique, fiscal ou financier. Nous faisons des efforts raisonnables pour qu'il reste exact, mais nous ne garantissons ni son exhaustivité ni son adéquation à un usage particulier.",
      ],
    },
    {
      heading: "Responsabilité",
      body: [
        "Dans la mesure permise par le droit tchèque et le droit de l'Union européenne, hrhelperg s.r.o. décline toute responsabilité pour les préjudices indirects ou consécutifs résultant de l'utilisation de ce site.",
      ],
    },
    {
      heading: "Droit applicable",
      body: [
        "Ces conditions sont régies par le droit de la République tchèque. Tout litige relève de la compétence des tribunaux tchèques.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Les questions sur ces conditions peuvent être adressées à info@hrhelperg.com.",
      ],
    },
  ],
};
