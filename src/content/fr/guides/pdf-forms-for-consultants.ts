import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-forms-for-consultants",
  h1: "Les formulaires PDF du consultant (questionnaires et cadrage)",
  description:
    "Questionnaires de découverte, fiches de cadrage de mission et formulaires de retour — le versant formulaires du conseil, traité en PDF à remplir que le client complète sur n’importe quel appareil.",
  updated: "2026-06-01",
  intro: [
    "Le conseil fonctionne à coups de questions. Avant une mission, il faut comprendre la situation du client ; pendant, cadrer ce qui entre et ce qui n’entre pas dans le périmètre ; après, recueillir un retour honnête. Chacune de ces étapes correspond à un formulaire — un questionnaire de découverte, une fiche de cadrage, une demande de retour — et les traiter comme des PDF à remplir garde le processus net sans traîner les clients vers encore une connexion à créer.",
    "Ces formulaires sont différents des livrables d’un consultant. Propositions, rapports et factures sont des documents que vous produisez ; questionnaires et fiches de cadrage sont des formulaires que les clients complètent. Ce guide porte spécifiquement sur le volet formulaires — les concevoir pour que les clients répondent pleinement, et collecter les réponses pour qu’elles nourrissent réellement le travail.",
    "Le bénéfice est un démarrage plus fluide et des limites plus claires. Un bon questionnaire de découverte fait remonter le vrai problème avant le premier appel ; une fiche de cadrage claire évite la dérive lente vers du travail non convenu. Les deux se gèrent facilement en PDF.",
  ],
  steps: [
    {
      title: "Concevez un questionnaire de découverte qui justifie sa longueur",
      body: "Posez les questions qui changeraient votre approche de la mission, pas tout ce qui est imaginable. Regroupez-les, laissez de la place pour de vraies réponses, et gardez un modèle vierge réutilisable par service.",
    },
    {
      title: "Construisez une fiche de cadrage qui pose des limites",
      body: "Transformez le périmètre en formulaire : livrables, ce qui en est explicitement exclu, échéances, hypothèses. Des champs que le client confirme rendent la limite mutuelle plutôt que quelque chose que vous affirmez après coup.",
    },
    {
      title: "Envoyez les formulaires pour que les clients les complètent sur n’importe quel appareil",
      body: "Joignez directement le PDF à remplir et précisez que les clients peuvent le remplir dans une application PDF — toucher les champs ou ajouter du texte sur un formulaire non interactif, puis renvoyer une copie complétée. La plupart le feront sur téléphone.",
    },
    {
      title: "Recueillez un formulaire de retour à la fin",
      body: "Un formulaire de retour court et bien espacé a plus de chances d’être rempli qu’un long. Envoyez-le à la clôture de la mission, pendant que l’expérience est encore fraîche, et demandez qu’on vous renvoie une copie aplatie.",
    },
    {
      title: "Classez les réponses par mission",
      body: "Renommez les formulaires reçus par client et par date, et stockez-les avec les dossiers de cette mission. Gardez les modèles vierges à part pour que chaque nouveau client reçoive un formulaire propre.",
    },
  ],
  tips: [
    "Un questionnaire de découverte bien affûté fait remonter le vrai problème avant la première réunion et fait gagner le temps d’un appel.",
    "Faites de la fiche de cadrage quelque chose que le client confirme dans des champs, pour que le « hors périmètre » soit mutuel, pas un argument après coup.",
    "Gardez les formulaires de retour courts ; le taux de réponse compte plus que le nombre de questions.",
    "Les réponses des clients sont sensibles — envoyez et collectez via des pièces jointes directes ou un espace de stockage privé, pas des sites publics à remplir.",
    "C’est le volet formulaires du conseil ; combinez-le à votre flux de travail sur les propositions, rapports et factures pour une vue d’ensemble.",
  ],
  mobileNote:
    "Les clients remplissent vos questionnaires et fiches de cadrage sur téléphone avec l’application PDF Editor — en touchant les champs ou en ajoutant du texte sur les formulaires non interactifs, puis en exportant une copie aplatie. Elle fonctionne sur l’appareil, si bien que les informations qu’ils partagent sur leur activité ne transitent par aucun serveur tiers.",
  faq: [
    {
      q: "Quels formulaires PDF les consultants utilisent-ils le plus ?",
      a: "Les questionnaires de découverte avant une mission, les fiches de cadrage pour poser les limites, et les formulaires de retour à la fin. Gérés comme des PDF à remplir, ils gardent le processus clair sans ajouter une plateforme de plus sur laquelle les clients devraient se connecter.",
    },
    {
      q: "Comment amener les clients à compléter un questionnaire de découverte ?",
      a: "Concentrez-le sur les questions qui changeraient votre approche, laissez un vrai espace pour les réponses, et envoyez-le comme un PDF à remplir avec une note indiquant qu’ils peuvent le compléter dans une application PDF sur n’importe quel appareil.",
    },
    {
      q: "En quoi est-ce différent des flux de travail PDF pour le conseil ?",
      a: "Ce guide porte sur les formulaires que les clients remplissent — questionnaires, cadrage, retour. Le guide sur les flux de travail PDF pour le conseil couvre vos propres livrables : propositions, rapports et factures.",
    },
    {
      q: "Comment garder confidentielles les réponses des clients aux questionnaires ?",
      a: "Envoyez et recevez via des pièces jointes directes ou un espace de stockage privé plutôt que des sites publics à remplir. L’application PDF Editor remplit sur l’appareil, si bien que les réponses des clients ne sont envoyées nulle part.",
    },
    {
      q: "Une fiche de cadrage doit-elle être un formulaire ou un document ?",
      a: "Faites-en un formulaire que le client confirme — des champs pour les livrables, les exclusions, les échéances et les hypothèses. Un formulaire confirmé rend le périmètre mutuel d’une façon qu’un document à sens unique ne permet pas.",
    },
  ],
  related: [
    {
      label: "Flux de travail PDF pour consultants",
      path: "/guides/pdf-workflows-for-consultants",
    },
    {
      label: "Comment envoyer une fiche client à remplir",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Les formulaires PDF en agence",
      path: "/guides/pdf-forms-for-agencies",
    },
    {
      label: "Collecter des documents en PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
