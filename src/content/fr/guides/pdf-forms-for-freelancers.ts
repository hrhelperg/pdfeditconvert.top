import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-forms-for-freelancers",
  h1: "Les formulaires PDF du freelance (cadrage, contrats, acomptes)",
  description:
    "Fiche de cadrage de projet, contrat de prestation simple et autorisation d’acompte — le jeu minimal de formulaires PDF à remplir dont un freelance a besoin, sans abonnement et sans rien transférer.",
  updated: "2026-06-01",
  intro: [
    "Les freelances n’ont pas d’équipe opérationnelle, les bons formulaires doivent donc faire ce travail discrètement. Une courte fiche de cadrage de projet lance une nouvelle mission sans long appel. Un contrat de prestation simple pose les attentes avant que le travail commence. Une autorisation d’acompte règle la question de l’argent proprement. Trois PDF à remplir légers couvrent l’essentiel des besoins d’un indépendant.",
    "Tout l’attrait pour un freelance tient à l’absence de frais fixes : aucun abonnement à des formulaires, aucune connexion client, aucune plateforme à entretenir. Un formulaire n’est qu’un PDF que vous envoyez et qui vous revient. Le savoir-faire consiste à garder cet ensemble petit et les formulaires faciles à compléter, pour que le client fasse sa part sur téléphone en deux minutes plutôt que de remettre à plus tard.",
    "Ce guide couvre les formulaires essentiels du freelance et comment les gérer. C’est le volet formulaires du travail en solo — distinct du flux de travail allant de la proposition à la facture, qui gère vos livrables.",
  ],
  steps: [
    {
      title: "Gardez une fiche de cadrage de projet resserrée",
      body: "Ne recueillez que ce dont vous avez besoin pour démarrer : périmètre, échéance, livrables, contact. Un formulaire court et bien espacé revient vite et démarre le projet sur des bases claires.",
    },
    {
      title: "Utilisez un formulaire de contrat de prestation simple",
      body: "Un contrat court avec des champs pour les parties, le périmètre, le calendrier et les modalités de paiement pose les attentes dès le départ. Gardez les termes en texte verrouillé et ne mettez en champs que les détails variables.",
    },
    {
      title: "Gérez les acomptes avec un formulaire d’autorisation",
      body: "Un formulaire clair couvrant le montant, ce qu’il sécurise, et l’échéancier rend la conversation sur l’argent routinière plutôt que gênante. Le client le complète et le signe avant que le travail commence.",
    },
    {
      title: "Envoyez tout comme des PDF à remplir",
      body: "Joignez directement les formulaires vierges et dites au client qu’il peut les remplir dans une application PDF sur téléphone — toucher les champs ou ajouter du texte, signer, et renvoyer une copie aplatie.",
    },
    {
      title: "Classez les formulaires reçus par client",
      body: "Renommez les formulaires reçus par client et par date, stockez-les avec ce projet, et gardez les modèles vierges à part. Toute votre trace administrative vit dans des dossiers bien tenus, sans outil requis.",
    },
  ],
  tips: [
    "Limitez-vous à trois ou quatre formulaires ; un kit léger est plus facile à entretenir et plus rapide pour les clients qu’un ensemble tentaculaire.",
    "Rendez chaque formulaire remplissable sur téléphone — la plupart des clients compléteront le vôtre sur téléphone, et un formulaire facile revient plus vite.",
    "Verrouillez les termes et ne rendez remplissables que les détails variables, pour qu’un contrat de prestation ne puisse pas être discrètement modifié pendant qu’il est complété.",
    "Pour les accords à portée juridique, le PDF gère la mécanique ; confirmez toute question de validité auprès des parties ou d’un conseil, car les exigences varient.",
    "Les formulaires clients contiennent des informations personnelles et de paiement — réservez-les à des pièces jointes directes plutôt qu’à des sites publics à remplir.",
  ],
  mobileNote:
    "Les clients complètent vos fiches de cadrage, contrats et formulaires d’acompte sur téléphone avec l’application PDF Editor — en remplissant les champs ou en ajoutant du texte sur les formulaires non interactifs, en signant, et en renvoyant une copie aplatie. Elle fonctionne sur l’appareil, si bien que les informations personnelles et de paiement saisies ne sont envoyées sur aucun serveur.",
  faq: [
    {
      q: "De quels formulaires PDF un freelance a-t-il besoin ?",
      a: "Un ensemble léger : une fiche de cadrage de projet, un contrat de prestation simple, et un formulaire d’autorisation d’acompte ou de paiement. Trois ou quatre PDF à remplir couvrent l’essentiel du travail en solo sans abonnement.",
    },
    {
      q: "Ai-je besoin d’une plateforme de formulaires en tant que freelance ?",
      a: "Non. Un formulaire n’est qu’un PDF que vous envoyez et recevez. Une application PDF compétente les remplit et les signe, et un système de dossiers bien tenu gère le reste — aucune plateforme ni connexion client requise.",
    },
    {
      q: "Les contrats de prestation en PDF ont-ils force obligatoire ?",
      a: "Cela dépend de votre juridiction et de l’accord lui-même, ce qu’un outil PDF ne peut pas déterminer. Le PDF gère la mécanique — champs, signature, aplatissement ; confirmez les questions de validité auprès des parties ou d’un conseil.",
    },
    {
      q: "Comment les clients remplissent-ils mes formulaires sur téléphone ?",
      a: "Ils ouvrent le formulaire dans une application PDF, touchent les champs ou ajoutent du texte sur un formulaire non interactif, signent, et exportent une copie complétée. Recommander une application évite le problème de l’aperçu e-mail qui « ne laisse pas saisir de texte ».",
    },
    {
      q: "En quoi est-ce différent d’un flux de travail PDF pour freelance ?",
      a: "Ce guide porte sur les formulaires que les clients remplissent — cadrage, contrats, acomptes. Le guide sur le flux de travail du freelance couvre vos livrables : propositions, documents signés et factures.",
    },
  ],
  related: [
    {
      label: "Meilleur flux de travail PDF pour freelances",
      path: "/guides/best-pdf-workflow-for-freelancers",
    },
    {
      label: "Comment envoyer une fiche client à remplir",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Comment utiliser un formulaire PDF pour un contrat",
      path: "/guides/how-to-use-pdf-forms-for-contracts",
    },
    {
      label: "Les formulaires PDF dans une petite entreprise",
      path: "/guides/pdf-forms-for-small-business",
    },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
