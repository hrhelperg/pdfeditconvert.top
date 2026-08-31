import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-security",
  hero: {
    eyebrow: "Sécurité des PDF",
    h1: "Sécurité des PDF — protéger et chiffrer un document par mot de passe",
    highlight: "protéger et chiffrer",
    lead: "Mots de passe, chiffrement AES-256, caviardage et restrictions d’usage — sur vos contrats, vos bulletins de salaire et vos pièces d’identité numérisées. Le niveau de protection que méritent vraiment les documents sensibles.",
    primaryCta: { label: "Ouvrir l’application", href: SITE.app.appStore },
  },
  problem: {
    heading: "Pourquoi la plupart des PDF « protégés » ne le sont pas vraiment",
    paragraphs: [
      "Il est étonnamment courant de partager des scans de passeport, des contrats signés ou des bulletins de salaire sous forme de simples PDF — par e-mail, par messagerie ou en pièce jointe d’un formulaire. Si le compte e-mail ou l’historique de messagerie est compromis, chacun de ces documents se retrouve exposé.",
      "Certains ajoutent une « protection » qui n’est qu’un mot de passe d’ouverture défini par un outil gratuit en ligne. C’est mieux que rien, mais le mot de passe est souvent faible, le chiffrement est parfois l’ancien algorithme 40 bits, et l’outil conserve le fichier assez longtemps pour devenir lui-même un risque.",
      "Une vraie sécurité PDF passe par un chiffrement fort (AES-256), des mots de passe robustes et, si besoin, une séparation entre le droit d’ouvrir le document et les droits de le modifier ou de l’imprimer. Elle doit aussi se faire directement sur l’appareil, car dès qu’un document sensible est envoyé sur un outil web, la bataille de la confidentialité est déjà perdue.",
    ],
  },
  features: {
    heading: "Des outils de sécurité à la hauteur du risque",
    items: [
      {
        icon: "Lock",
        title: "Protection par mot de passe",
        body: "Définissez un mot de passe pour ouvrir le document. Le PDF ne peut pas être consulté sans lui.",
      },
      {
        icon: "ShieldCheck",
        title: "Chiffrement AES-256",
        body: "Un chiffrement moderne et robuste, le standard utilisé par les systèmes d’entreprise.",
      },
      {
        icon: "Printer",
        title: "Restreindre la copie et l’impression",
        body: "Autorisez la lecture tout en bloquant la copie du texte, l’impression ou l’extraction de pages.",
      },
      {
        icon: "EyeOff",
        title: "Caviardage",
        body: "Masquez définitivement des noms, des numéros de compte ou des signatures avant de partager le document.",
      },
      {
        icon: "Stamp",
        title: "Filigranes",
        body: "Ajoutez un filigrane « confidentiel » ou propre à un destinataire pour dissuader la retransmission.",
      },
      {
        icon: "Link",
        title: "Conseils pour partager un mot de passe",
        body: "Des conseils intégrés pour transmettre un mot de passe par un canal différent de celui du document lui-même.",
      },
    ],
  },
  steps: {
    heading: "Comment protéger un PDF",
    items: [
      {
        title: "Ouvrez le PDF",
        body: "Importez le document dans PDF Editor depuis Fichiers ou n’importe quel service cloud.",
      },
      {
        title: "Touchez Protéger",
        body: "Cette option se trouve dans le menu des outils du document. Choisissez le niveau de protection dont vous avez besoin.",
      },
      {
        title: "Définissez le mot de passe",
        body: "Utilisez un mot de passe robuste — au moins 12 caractères, en mélangeant lettres, chiffres et symboles.",
      },
      {
        title: "(Facultatif) Choisissez les restrictions",
        body: "Autorisez ou bloquez l’impression, la copie et la modification. Utile pour les documents partagés en lecture seule.",
      },
      {
        title: "Enregistrez la copie protégée",
        body: "Enregistrez-la comme un nouveau fichier, pour que l’original reste accessible si vous oubliez le mot de passe.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Protéger des documents sensibles en déplacement",
    body: "La plupart des erreurs de sécurité surviennent dans la précipitation. Protéger un document depuis son téléphone permet de verrouiller un contrat avant de l’envoyer depuis l’aéroport, ou de protéger un PDF de bulletins de salaire avant de le partager avec un prestataire — sans avoir à trouver un ordinateur.",
  },
  faq: [
    {
      q: "Quel chiffrement l’application utilise-t-elle ?",
      a: "AES-256, le standard moderne. Évitez les anciens chiffrements 40 bits et RC4 128 bits — ils se cassent très facilement.",
    },
    {
      q: "Que se passe-t-il si j’oublie le mot de passe ?",
      a: "Il n’existe aucune porte dérobée. Un chiffrement fort signifie que le document est irrécupérable sans le mot de passe. Conservez-le dans un gestionnaire de mots de passe.",
    },
    {
      q: "Comment partager le mot de passe en toute sécurité ?",
      a: "Utilisez un canal différent de celui du document lui-même — envoyez le mot de passe par SMS si le PDF a été envoyé par e-mail, ou utilisez la fonction de partage sécurisé d’un gestionnaire de mots de passe.",
    },
    {
      q: "Le caviardage est-il permanent ?",
      a: "Oui. Un caviardage correctement effectué supprime le texte sous-jacent, il ne se contente pas de le recouvrir visuellement. Même un copier-coller depuis le PDF caviardé ne révèle pas le contenu original.",
    },
    {
      q: "Puis-je ajouter un filigrane et un mot de passe en même temps ?",
      a: "Oui. Ce sont deux fonctions indépendantes qui peuvent être appliquées ensemble.",
    },
  ],
  related: [
    {
      label: "Étapes détaillées : comment protéger un PDF par mot de passe",
      path: "/guides/how-to-protect-pdf-file",
    },
    { label: "Signez vos PDF avant de les verrouiller", path: "/sign-pdf" },
    {
      label: "Flux de PDF pour les équipes en entreprise",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Verrouillez vos PDF sensibles en quelques secondes.",
    sub: "Gratuit sur iOS et Android. La protection s’effectue sur l’appareil.",
  },
};

export default content;
