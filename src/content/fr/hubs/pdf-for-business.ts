import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-business",
  hero: {
    eyebrow: "PDF en entreprise",
    h1: "PDF en entreprise — contrats, factures et circuits de validation",
    highlight: "circuits de validation",
    lead: "Contrats, factures, devis, accords signés, reçus numérisés — tous les documents qui font tourner une petite entreprise, gérés depuis un téléphone, sans licence par utilisateur ni logiciel SaaS pour grands groupes.",
    primaryCta: { label: "Ouvrir l’application", href: SITE.app.appStore },
  },
  problem: {
    heading: "Pourquoi les petites équipes continuent de galérer avec le PDF",
    paragraphs: [
      "Les petites entreprises vivent au rythme du PDF. Le devis part en PDF, le contrat revient signé en PDF, la facture est un PDF, les reçus sont numérisés en PDF, l’accord de confidentialité est un PDF. Et pourtant, les outils censés les gérer sont soit tarifés pour les grandes entreprises, soit web et peu fiables.",
      "Les logiciels PDF pour grandes entreprises supposent que vous disposez d’un service informatique et d’un processus d’achat. Les outils web gratuits supposent que vous n’avez aucun problème à envoyer les contrats de vos clients sur un serveur tiers. Aucun des deux modèles ne convient à une agence de cinq personnes, à un freelance ou à une petite entreprise en ligne qui doit traiter ses documents rapidement, sans lourdeur administrative.",
      "Une boîte à outils PDF native, pensée pour le mobile, convient mieux aux petites équipes. Aucune licence à gérer, aucune file d’envoi à coordonner, aucun abonnement mensuel pour un outil utilisé quelques fois par semaine. Chaque membre de l’équipe installe l’application sur son téléphone et devient opérationnel dès le premier jour.",
    ],
  },
  features: {
    heading: "Les opérations qui comptent pour les petites équipes",
    items: [
      {
        icon: "FileSignature",
        title: "Devis → contrat → signature",
        body: "Envoyez un devis en PDF, recevez l’acceptation signée, archivez le résultat. Toute la boucle tient dans un téléphone.",
      },
      {
        icon: "Receipt",
        title: "Numérisation des reçus sur le terrain",
        body: "Numérisez les reçus papier dès que vous les recevez. Le nommage automatique et l’OCR les rendent directement exploitables par votre outil comptable.",
      },
      {
        icon: "ShieldCheck",
        title: "Protéger les documents sensibles",
        body: "Protégez par mot de passe les contrats, les PDF de paie et les copies d’accords de confidentialité avant de les partager à l’extérieur. AES-256, sur l’appareil.",
      },
      {
        icon: "Combine",
        title: "Assembler et diviser vos livrables",
        body: "Fusionnez un devis avec son cahier des charges ; divisez un long export par client. Les deux opérations se font en trois gestes.",
      },
      {
        icon: "Wand",
        title: "Des retouches rapides, sans ordinateur portable",
        body: "Corrigez une faute sur un devis, mettez à jour une date sur une facture, remplacez un logo sur une plaquette — tout depuis le téléphone.",
      },
      {
        icon: "Globe",
        title: "Compatible avec votre cloud actuel",
        body: "Drive, iCloud, OneDrive, Dropbox — l’application lit et enregistre où que votre équipe stocke déjà ses fichiers.",
      },
    ],
  },
  steps: {
    heading: "Un flux de travail typique pour une petite entreprise",
    items: [
      {
        title: "Recevez une demande",
        body: "Un client demande un devis. Vous le rédigez dans votre outil de facturation et l’exportez en PDF.",
      },
      {
        title: "Signez et datez",
        body: "Ouvrez le PDF dans PDF Editor, signez avec votre signature enregistrée, ajoutez un cachet de date.",
      },
      {
        title: "Envoyez par e-mail ou messagerie",
        body: "Partagez le devis signé directement depuis l’application, via le menu de partage de la messagerie ou l’outil de votre équipe.",
      },
      {
        title: "Recevez la version contresignée",
        body: "Quand le client la retourne, ouvrez le fichier, archivez-le sur votre cloud et protégez-le par mot de passe s’il contient des clauses sensibles.",
      },
      {
        title: "Générez la facture et regroupez-la avec le contrat",
        body: "Exportez la facture depuis votre outil comptable, puis utilisez Fusionner pour réunir facture et contrat signé en un seul PDF d’archive.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Diriger une entreprise depuis un téléphone",
    body: "Une grande partie du travail documentaire d’une petite entreprise se fait entre deux autres tâches — chez un client, dans un taxi, entre deux allers-retours à l’école. Un outil pensé pour le mobile signifie que le flux de travail ne dépend plus d’être assis à un bureau. Les contrats qui attendaient autrefois la soirée et l’ordinateur portable partent désormais dans l’heure qui suit la demande.",
  },
  faq: [
    {
      q: "L’application convient-elle à une équipe de 5 à 20 personnes ?",
      a: "Oui, pour des utilisateurs individuels au sein d’une petite équipe — chaque personne l’installe sur son propre téléphone. Il n’existe pas de console d’administration centralisée : c’est un outil par appareil. Pour des organisations plus grandes, un système de gestion documentaire d’entreprise sera sans doute plus adapté.",
    },
    {
      q: "Puis-je l’utiliser pour des contrats juridiquement contraignants ?",
      a: "La plupart des juridictions acceptent les PDF signés pour des contrats commerciaux courants. Le règlement eIDAS de l’Union européenne et l’ESIGN Act américain reconnaissent tous deux la signature électronique. Pour des accords à forts enjeux, réglementés ou transfrontaliers, vérifiez la réglementation locale et envisagez une signature électronique qualifiée.",
    },
    {
      q: "S’intègre-t-elle aux outils comptables ?",
      a: "PDF Editor produit des PDF standard, acceptés par tous les outils comptables (Xero, QuickBooks, FreeAgent, Pleo, etc.). Aucune intégration particulière n’est nécessaire — il suffit d’enregistrer le PDF sur votre cloud pour que l’outil comptable le récupère.",
    },
    {
      q: "Comment garder les fichiers clients confidentiels ?",
      a: "Toutes les opérations s’exécutent sur l’appareil. Les fichiers ne quittent votre téléphone que lorsque vous les partagez volontairement. Appliquez une protection par mot de passe aux documents particulièrement sensibles avant de les partager à l’extérieur.",
    },
    {
      q: "Qu’en est-il des pistes d’audit ?",
      a: "Les PDF signés incluent des métadonnées de signature (horodatage, nom du signataire). Pour les secteurs réglementés qui exigent une piste d’audit complète, complétez avec une plateforme dédiée de signature électronique — PDF Editor gère les contrats du quotidien, pas les flux réglementés.",
    },
  ],
  related: [
    { label: "Sécurité et chiffrement des PDF", path: "/pdf-security" },
    {
      label: "Flux de PDF sécurisés pour l’entreprise",
      path: "/guides/secure-pdf-workflows-for-business",
    },
    { label: "Signer un PDF depuis son téléphone", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Gérez vos documents professionnels depuis votre téléphone.",
    sub: "Gratuit pour un usage professionnel courant. Aucune licence par utilisateur.",
  },
};

export default content;
