import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-a-completed-pdf-form",
  h1: "Comment renvoyer un formulaire PDF rempli (aplatir et transmettre)",
  description:
    "Le formulaire est rempli : reste à le renvoyer proprement. Comment l’aplatir pour que les réponses ne bougent plus, le joindre correctement, et s’assurer qu’il est bien arrivé sans perte de données.",
  updated: "2026-06-01",
  intro: [
    "Remplir un formulaire n’est que la moitié du travail ; le renvoyer intact à l’expéditeur en est l’autre moitié. C’est le trajet retour — vous avez rempli un formulaire que quelqu’un vous a envoyé et devez maintenant le transmettre pour que vos réponses arrivent exactement telles que vous les avez saisies, qu’elles ne puissent pas être effacées par accident, et qu’elles arrivent dans un format que le destinataire peut réellement ouvrir.",
    "Les deux choses qui tournent mal ici sont des réponses qui disparaissent en cours de route (parce que les données des champs n’ont pas été enregistrées ou aplaties) et des fichiers qui arrivent sous forme de photos maladroites d’un écran. Les deux s’évitent avec quelques gestes délibérés avant d’appuyer sur envoyer. Une pièce jointe PDF aplatie est presque toujours la bonne réponse.",
    "Ce guide couvre la préparation du formulaire rempli, le choix de la méthode d’envoi, et les petites vérifications qui vous épargnent une série d’e-mails du genre « le formulaire est revenu vide ».",
  ],
  steps: [
    {
      title: "Faites une dernière vérification de chaque réponse",
      body: "Parcourez tout le formulaire une dernière fois à la recherche de champs obligatoires vides, de la date, et de votre signature. Repérer une case manquante maintenant coûte bien moins cher qu’après un retour du formulaire.",
    },
    {
      title: "Enregistrez correctement la copie remplie",
      body: "Exportez ou enregistrez pour que les valeurs des champs soient écrites dans le fichier. Si vos réponses ne survivent pas à une fermeture puis réouverture, l’outil s’est contenté d’imprimer — passez à un outil qui enregistre les données de formulaire.",
    },
    {
      title: "Aplatissez pour verrouiller les réponses",
      body: "Aplatissez le formulaire rempli avant de l’envoyer. Cela fusionne vos réponses dans la page pour qu’elles ne puissent pas être modifiées ni effacées par le lecteur du destinataire, et qu’elles s’affichent de la même façon partout.",
    },
    {
      title: "Joignez le PDF directement",
      body: "Envoyez le PDF aplati en pièce jointe classique par e-mail, ou déposez-le sur le portail indiqué par l’expéditeur. Évitez d’envoyer une capture d’écran ou une photo du formulaire, sauf si c’est explicitement tout ce qui est demandé.",
    },
    {
      title: "Confirmez l’envoi et gardez une copie",
      body: "Notez que vous l’avez envoyé et conservez votre propre copie du fichier rempli. S’il part vers un portail, guettez une confirmation à l’écran ou par e-mail indiquant que l’envoi a réussi.",
    },
  ],
  tips: [
    "L’aplatissement est la meilleure habitude à prendre pour renvoyer un formulaire — il garantit que vos réponses apparaissent bien chez le destinataire.",
    "Donnez au fichier un nom utile, comme « dupont-candidature-remplie.pdf », pour que le destinataire puisse le classer sans le renommer.",
    "Si un portail rejette le fichier pour cause de taille, compressez-le plutôt que de refaire vos réponses — le contenu reste intact.",
    "Gardez votre propre copie remplie ; en cas de litige ou de suivi, vous voudrez retrouver la version exacte que vous avez envoyée.",
    "Les exigences administratives et professionnelles varient, donc suivez les instructions d’envoi spécifiques données par l’expéditeur plutôt que ces étapes générales.",
  ],
  mobileNote:
    "Sur téléphone, l’application PDF Editor exporte une copie remplie et aplatie que vous pouvez envoyer directement depuis le menu de partage — e-mail, dépôt sur un portail, ou message — avec vos réponses verrouillées dans la page. Elle fonctionne sur l’appareil, si bien que les informations personnelles du formulaire restent confidentielles pendant l’envoi.",
  faq: [
    {
      q: "Comment m’assurer que mes réponses ne disparaissent pas quand j’envoie un formulaire ?",
      a: "Enregistrez pour que les valeurs des champs soient écrites dans le fichier, puis aplatissez le formulaire avant l’envoi. L’aplatissement fusionne vos réponses dans la page pour qu’elles ne puissent pas être effacées et s’affichent de la même façon dans tous les lecteurs.",
    },
    {
      q: "Dois-je aplatir un formulaire rempli avant de l’envoyer par e-mail ?",
      a: "Oui, dans presque tous les cas. Une fois que vous avez fini de le modifier, l’aplatissement verrouille les réponses et empêche le lecteur du destinataire de les perdre ou de les altérer.",
    },
    {
      q: "Est-ce acceptable d’envoyer une photo du formulaire rempli ?",
      a: "Seulement si c’est spécifiquement ce qui est demandé. Un PDF aplati est plus propre, plus lisible et plus facile à classer. Les photos d’écrans ou de tirages papier arrivent souvent de travers ou en mauvaise qualité.",
    },
    {
      q: "Que faire si le portail de dépôt rejette mon formulaire ?",
      a: "C’est en général une limite de taille ou de format. Compressez le PDF ou vérifiez les formats acceptés — inutile de le remplir à nouveau. Le contenu reste identique après compression.",
    },
    {
      q: "Dois-je garder une copie de ce que j’ai envoyé ?",
      a: "Oui. Gardez votre propre copie remplie au cas où il y aurait des questions de suivi ou une demande de renvoi, pour pouvoir renvoyer exactement la version que vous aviez soumise.",
    },
  ],
  related: [
    {
      label: "Comment enregistrer un formulaire PDF rempli",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Comment remplir un formulaire PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Comment diffuser un formulaire PDF à faire remplir",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Erreurs d’envoi d’un formulaire PDF",
      path: "/guides/pdf-form-submission-errors",
    },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
