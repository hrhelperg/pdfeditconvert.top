import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "sign-pdf",
  hero: {
    eyebrow: "Signer un PDF",
    h1: "Signer un PDF — ajouter une signature électronique depuis son téléphone",
    highlight: "depuis son téléphone",
    lead: "Ajoutez une vraie signature manuscrite, un nom saisi au clavier ou un paraphe à n’importe quel PDF. Placez-la, redimensionnez-la et exportez le résultat — sans imprimer, sans numériser, sans vous envoyer un fichier par e-mail à vous-même.",
    primaryCta: { label: "Ouvrir l’application", href: SITE.app.appStore },
  },
  problem: {
    heading: "Pourquoi imprimer et numériser, c’est enfin terminé",
    paragraphs: [
      "L’ancienne routine de signature — imprimer le PDF, le signer, le numériser, le renvoyer par e-mail — a mystérieusement survécu jusqu’en 2026. La plupart des entreprises acceptent la signature électronique, mais beaucoup de contrats arrivent encore avec un « merci de signer et de retourner », comme si tout le monde possédait une imprimante et un scanner.",
      "Les services publics de signature électronique règlent une partie du problème, mais introduisent une connexion contraignante, l’envoi du document, la gestion d’un compte et des formules payantes. Pour une seule signature sur un seul document, c’est disproportionné et cela ajoute une lenteur inutile.",
      "Un parcours de signature natif sur votre téléphone est exactement à la bonne échelle pour la tâche : ouvrir le PDF, dessiner ou saisir sa signature, la placer, envoyer. L’ensemble prend moins d’une minute et fonctionne sans compte, dans un avion ou sur un parking.",
    ],
  },
  features: {
    heading: "Signez selon ce que demande le document",
    items: [
      {
        icon: "Pencil",
        title: "Signature manuscrite",
        body: "Dessinez avec le doigt ou avec un stylet. Enregistrez-la une fois, puis réutilisez-la sur tous les documents suivants.",
      },
      {
        icon: "Type",
        title: "Signature saisie",
        body: "Tapez votre nom et choisissez une police de style manuscrit pour une signature nette et lisible.",
      },
      {
        icon: "User",
        title: "Paraphe",
        body: "Enregistrez votre paraphe séparément pour les documents qui l’exigent sur chaque page.",
      },
      {
        icon: "Calendar",
        title: "Cachet de date",
        body: "Insérez la date en un geste, à côté de votre signature, quand le contrat le demande.",
      },
      {
        icon: "Users",
        title: "Circuit à plusieurs signataires",
        body: "Faites circuler un PDF entre les signataires via le menu de partage. Chaque signature reste en place.",
      },
      {
        icon: "ShieldCheck",
        title: "Export avec informations de traçabilité",
        body: "La copie signée inclut un horodatage et des métadonnées de signature à des fins d’archivage.",
      },
    ],
  },
  steps: {
    heading: "Comment signer un PDF depuis votre téléphone",
    items: [
      {
        title: "Ouvrez le PDF",
        body: "Importez le document dans l’application PDF Editor depuis Fichiers, votre messagerie ou toute application de partage.",
      },
      {
        title: "Touchez l’outil Signer",
        body: "Il se trouve dans la barre d’outils d’édition. Choisissez signature manuscrite, saisie ou paraphe.",
      },
      {
        title: "Dessinez ou saisissez votre signature",
        body: "Uniquement la première fois — elle est ensuite enregistrée pour les prochains usages. Vous pouvez la modifier ou la remplacer à tout moment dans les paramètres.",
      },
      {
        title: "Placez-la et redimensionnez-la",
        body: "Faites glisser la signature au bon endroit. Redimensionnez-la avec les poignées d’angle. Ajoutez un cachet de date si nécessaire.",
      },
      {
        title: "Exportez la copie signée",
        body: "Enregistrez par-dessus l’original ou sous forme de nouvelle copie. Partagez directement par Mail ou par toute application de messagerie.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Signer sans perturber la journée",
    body: "La signature elle-même est rarement le vrai goulot d’étranglement — c’est le temps qu’il faut pour trouver une imprimante. Signer depuis un téléphone permet à un contrat de repartir vers l’autre partie dans l’heure, et non dans la journée. Particulièrement utile pour les freelances, les dirigeants de petites entreprises et toute personne qui travaille loin d’un bureau.",
  },
  faq: [
    {
      q: "Une signature électronique a-t-elle une valeur juridique ?",
      a: "Dans la plupart des juridictions, oui, pour la majorité des documents professionnels. Le règlement eIDAS de l’Union européenne et l’ESIGN Act américain reconnaissent tous deux la signature électronique. Pour des documents à forts enjeux ou juridiquement sensibles, vérifiez la réglementation locale et envisagez une signature électronique qualifiée.",
    },
    {
      q: "Ma signature est-elle stockée sur un serveur ?",
      a: "Non. Les signatures enregistrées restent sur votre appareil. Elles sont appliquées aux documents localement et ne sont jamais envoyées vers notre infrastructure.",
    },
    {
      q: "Plusieurs personnes peuvent-elles signer le même PDF ?",
      a: "Oui. Faites circuler le fichier entre les signataires via le menu de partage, AirDrop, l’e-mail ou toute application de messagerie. Chaque signature est ajoutée et enregistrée en place.",
    },
    {
      q: "Que se passe-t-il si le PDF contient déjà des champs de signature ?",
      a: "L’application détecte les champs de signature existants et vous permet de toucher directement dedans. Votre signature s’ajuste automatiquement à la bonne taille et à la bonne position.",
    },
    {
      q: "Puis-je utiliser l’Apple Pencil ou le S Pen ?",
      a: "Oui. Les deux offrent un tracé plus fluide qu’une signature du bout du doigt, ce qui fait une vraie différence sur des contrats soumis à une vérification visuelle.",
    },
  ],
  related: [
    {
      label: "Étapes détaillées : comment signer un PDF depuis son téléphone",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "Protéger les PDF signés par mot de passe", path: "/pdf-security" },
    { label: "Méthodes pour les freelances", path: "/use-cases/freelancers" },
  ],
  appCta: {
    heading: "Signez vos PDF depuis n’importe où.",
    sub: "Gratuit sur iOS et Android. Aucun compte requis.",
  },
};

export default content;
