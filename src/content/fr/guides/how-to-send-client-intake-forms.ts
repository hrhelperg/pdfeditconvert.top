import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-client-intake-forms",
  h1: "Comment envoyer une fiche client à remplir (proprement et discrètement)",
  description:
    "Obtenez les informations d’un nouveau client en une seule fois. Comment envoyer une fiche en PDF facile à remplir, qui revient complète et qui garde ses informations confidentielles.",
  updated: "2026-06-01",
  intro: [
    "Une fiche client est souvent la première vraie interaction qu’un client a avec votre façon de travailler, autant donc bien la soigner. Bien conçue, une seule fiche client en PDF recueille tout ce dont vous avez besoin pour démarrer — coordonnées, spécificités du projet, préférences — en un seul passage, sans aller-retour du genre « pouvez-vous aussi m’envoyer… ». Mal conçue, elle revient et repart à moitié remplie et donne d’emblée une impression négligée.",
    "Le principe est simple mais les détails comptent : le formulaire doit être facile à remplir sur téléphone (où la plupart des clients l’ouvriront), il doit revenir complet et dans un format exploitable, et comme il contient des informations personnelles, il ne devrait pas transiter par un site public quelconque en chemin.",
    "Ce guide détaille la préparation de la fiche client, son envoi pour que les clients puissent réellement la compléter, et la collecte propre des réponses — la version pratique, pas théorique.",
  ],
  steps: [
    {
      title: "Construisez une fiche client qui ne demande que le nécessaire",
      body: "Chaque champ superflu réduit le taux de remplissage. Demandez ce dont vous avez réellement besoin pour démarrer, regroupez logiquement les informations, et laissez un espace réel pour les réponses. Gardez un modèle vierge que vous réutilisez pour chaque nouveau client.",
    },
    {
      title: "Envoyez le formulaire vierge, pas une version aplatie",
      body: "Joignez directement le PDF à remplir ou partagez-le via un espace de stockage que le client utilise. N’aplatissez pas le formulaire vierge — cela supprime les champs. Ajoutez une note d’une ligne expliquant comment le remplir et le renvoyer.",
    },
    {
      title: "Rendez le remplissage sans effort sur téléphone",
      body: "Dites aux clients qu’ils peuvent le compléter dans une application PDF — toucher les champs ou ajouter du texte sur un formulaire non interactif — signer si nécessaire, et exporter. La plupart le feront sur téléphone, facilitez donc ce chemin.",
    },
    {
      title: "Demandez qu’on vous renvoie une copie aplatie",
      body: "Demandez un PDF enregistré ou aplati plutôt qu’une photo. Les formulaires aplatis se lisent de façon cohérente, ne peuvent pas être effacés, et s’intègrent directement au dossier du client.",
    },
    {
      title: "Classez-la et confirmez la réception",
      body: "Renommez le formulaire reçu par client et par date, stockez-le avec les dossiers de ce client, et envoyez une confirmation rapide. Relancez une fois si un formulaire revient avec des champs obligatoires vides.",
    },
  ],
  tips: [
    "Les fiches client courtes sont mieux remplies ; supprimez tout champ qui n’est pas réellement nécessaire au démarrage.",
    "Comme les fiches client contiennent des données personnelles, préférez les pièces jointes directes ou un espace de stockage privé aux services publics « à remplir en ligne ».",
    "Un modèle vierge réutilisable garantit que chaque nouveau client reçoit un formulaire propre et identique, sans informations résiduelles.",
    "Recommandez une application PDF précise dans votre note pour que les clients sur téléphone ne restent pas coincés dans un aperçu e-mail qui refuse la saisie.",
    "Gardez un schéma de nommage de fichiers cohérent pour que la fiche client soit toujours facile à retrouver plus tard.",
  ],
  mobileNote:
    "Les clients peuvent compléter votre fiche sur téléphone avec l’application PDF Editor — en remplissant les champs ou en ajoutant du texte sur un formulaire non interactif, en signant, et en exportant une copie aplatie à vous renvoyer directement. Elle fonctionne sur l’appareil, si bien que les informations personnelles saisies ne sont envoyées sur aucun serveur en chemin vers vous.",
  faq: [
    {
      q: "Comment envoyer une fiche client en PDF ?",
      a: "Joignez directement le PDF à remplir à un e-mail ou partagez-le via un espace de stockage que le client utilise, sans aplatir le formulaire vierge. Ajoutez une courte note expliquant comment le remplir dans une application PDF et renvoyer une copie complétée.",
    },
    {
      q: "Pourquoi ma fiche client revient-elle vide ou à moitié remplie ?",
      a: "Les clients l’ouvrent souvent dans un aperçu e-mail qui ignore les champs, ou le formulaire demande trop d’informations. Recommandez une application PDF, supprimez les champs inutiles, et demandez qu’on vous renvoie une copie aplatie.",
    },
    {
      q: "Comment garder les informations des clients confidentielles lors de la collecte des fiches ?",
      a: "Envoyez et recevez le formulaire en pièce jointe directe ou via un espace de stockage privé plutôt que via un site public à remplir. L’application PDF Editor remplit sur l’appareil, si bien que les informations du client ne sont envoyées nulle part.",
    },
    {
      q: "Les fiches client doivent-elles être interactives ou non interactives ?",
      a: "L’interactif est plus soigné si vous pouvez le créer, mais un modèle non interactif propre fonctionne partout. Les deux conviennent tant que les champs sont clairement étiquetés et disposent d’assez d’espace.",
    },
    {
      q: "Comment garder les fiches client reçues organisées ?",
      a: "Renommez chacune par client et par date, stockez-la avec les dossiers de ce client, et gardez le modèle vierge à part pour que chaque nouveau client reçoive un exemplaire neuf.",
    },
  ],
  related: [
    {
      label: "Les formulaires PDF dans une petite entreprise",
      path: "/guides/pdf-forms-for-small-business",
    },
    {
      label: "Collecter des documents en PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Comment diffuser un formulaire PDF à faire remplir",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Comment partager des PDF avec des clients",
      path: "/guides/how-to-share-pdfs-with-clients",
    },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
