import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-from-phone",
  h1: "Comment partager un PDF depuis son téléphone",
  description:
    "Partagez un PDF depuis iPhone ou Android comme il faut — e-mail, AirDrop, messagerie ou lien — et préparez-le pour qu’il arrive vraiment.",
  updated: "2026-05-23",
  intro: [
    "Partager un PDF depuis un téléphone est une action en un geste, jusqu’au moment où ça coince — le fichier est trop lourd pour l’e-mail, le destinataire ne peut pas ouvrir le lien, ou vous réalisez trop tard que vous avez envoyé la version avec une page qui n’aurait pas dû sortir. Bien faire les choses tient moins au bouton de partage qu’au choix du canal et à la préparation du fichier avant de le toucher.",
    "Ce guide couvre les principales façons de partager depuis un iPhone ou un téléphone Android — e-mail, AirDrop ou Partage à proximité, applications de messagerie et liens cloud — et le moment où chacune est le bon choix. Il couvre aussi la préparation rapide qui empêche un partage de rebondir ou de vous mettre dans l’embarras.",
    "Tout l’intérêt d’un téléphone, c’est d’envoyer des choses d’où que vous soyez. Un peu de soin transforme ça d’un geste plein d’espoir en un document qui arrive de façon fiable, à la bonne taille, sans rien d’ajouté.",
  ],
  steps: [
    {
      title: "Préparez le fichier avant de le partager",
      body: "Confirmez que c’est la bonne version, retirez les pages qui ne doivent pas sortir, et vérifiez que la taille est raisonnable. Trente secondes ici évitent la plupart des mésaventures de partage.",
    },
    {
      title: "Ouvrez le menu de partage",
      body: "Touchez Partager sur le PDF — depuis Fichiers, votre application de mail ou l’application PDF Editor. iOS et Android font tous deux apparaître chaque destination pertinente à partir de là.",
    },
    {
      title: "L’e-mail pour les documents formels",
      body: "Joignez-le à un e-mail quand il faut garder une trace écrite — contrats, factures, candidatures. Attention à la limite d’environ 25 Mo ; compressez d’abord si le fichier est lourd.",
    },
    {
      title: "AirDrop ou Partage à proximité pour quelqu’un de proche",
      body: "Vous envoyez à un appareil dans la pièce ? AirDrop (iPhone) ou Partage à proximité (Android) déplace le fichier directement, rapidement, sans limite de taille et sans besoin d’internet.",
    },
    {
      title: "Les applications de messagerie pour un partage rapide et informel",
      body: "WhatsApp, Messages et les autres conviennent pour des envois occasionnels, mais certaines recompressent ou plafonnent les fichiers. Pour tout ce qui doit arriver intact, préférez l’e-mail ou un lien.",
    },
    {
      title: "Un lien cloud pour un fichier volumineux ou de nombreux destinataires",
      body: "Pour un gros fichier ou un large public, partagez un lien depuis un service cloud que vous contrôlez. Cela contourne les limites de taille et vous permet de révoquer l’accès plus tard.",
    },
  ],
  tips: [
    "Compressez avant de partager si le fichier est riche en numérisations — un e-mail qui rebondit est pire qu’un fichier légèrement plus petit.",
    "Vérifiez les pages avant de toucher partager. Le regret le plus courant est d’envoyer une version avec une note interne ou une page destinée à quelqu’un d’autre.",
    "AirDrop et Partage à proximité sont les héros méconnus du partage en personne : instantané, taille illimitée, pas d’internet, rien envoyé sur un serveur.",
    "Les applications de messagerie peuvent recompresser des documents en silence. Pour les fichiers où la qualité ou la fidélité compte, utilisez plutôt l’e-mail ou un lien cloud.",
    "Pour les documents sensibles envoyés via un lien, utilisez un service de confiance et coupez l’accès une fois que le destinataire a le fichier.",
  ],
  mobileNote:
    "L’application PDF Editor partage directement depuis le menu de partage une fois le fichier préparé — compresser, retirer une page, signer — pour que le document qui quitte votre téléphone soit celui que vous vouliez envoyer, à une taille qui arrive. Tout ce qui précède le partage se fait sur l’appareil.",
  faq: [
    {
      q: "Quelle est la meilleure façon de partager un PDF depuis mon téléphone ?",
      a: "Cela dépend du destinataire : l’e-mail pour les documents formels, AirDrop ou Partage à proximité pour quelqu’un de proche, les applications de messagerie pour un envoi rapide et informel, et un lien cloud pour les gros fichiers ou de nombreux destinataires.",
    },
    {
      q: "Pourquoi mon PDF ne s’envoie-t-il pas par e-mail ?",
      a: "Il dépasse probablement la limite de pièce jointe d’environ 25 Mo, souvent parce qu’il est riche en numérisations. Compressez-le d’abord, ou partagez plutôt un lien cloud.",
    },
    {
      q: "Les applications de messagerie modifient-elles mon PDF ?",
      a: "Certaines recompressent ou plafonnent les pièces jointes, ce qui peut affecter la qualité. Pour les documents qui doivent arriver exactement comme envoyés, utilisez l’e-mail ou un lien cloud plutôt qu’une application de chat.",
    },
    {
      q: "AirDrop ou Partage à proximité sont-ils privés ?",
      a: "Oui — le fichier se transfère directement entre appareils sans passer par un serveur ni par internet, ce qui en fait un bon choix pour les documents sensibles partagés en personne.",
    },
    {
      q: "Comment éviter de partager les mauvaises pages ?",
      a: "Relisez le document avant de toucher partager, et retirez toute page qui ne doit pas sortir. Voir le guide sur la préparation d’un PDF avant partage pour une check-list complète avant envoi.",
    },
  ],
  related: [
    { label: "PDF Editor — préparer et partager sur mobile", path: "/pdf-editor" },
    { label: "Comment préparer un PDF avant de le partager", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Comment envoyer un PDF trop lourd", path: "/guides/how-to-send-large-pdf-files" },
    { label: "Comment réduire un PDF sur Android", path: "/guides/how-to-make-pdf-smaller-on-android" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
