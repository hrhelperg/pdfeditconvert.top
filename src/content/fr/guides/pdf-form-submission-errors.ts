import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-submission-errors",
  h1: "Erreurs d’envoi d’un formulaire PDF (quand le bouton Envoyer échoue)",
  description:
    "Le bouton d’envoi du formulaire échoue ou ne fait rien ? Pourquoi ces boutons dépendent du serveur de l’émetteur, ce que signifient les messages d’erreur, et la méthode manuelle fiable pour transmettre votre formulaire.",
  updated: "2026-06-01",
  intro: [
    "Certains formulaires PDF intègrent un bouton Envoyer — vous appuyez dessus et le formulaire est censé s’envoyer lui-même quelque part. Quand ça marche, c’est pratique ; quand ça ne marche pas, c’est déroutant, car le bouton échoue simplement, affiche une erreur cryptique, ou semble ne rien faire du tout. La raison : un bouton d’envoi n’envoie pas le formulaire par lui-même — il essaie de transmettre les données à une destination configurée par l’émetteur du formulaire, et c’est souvent ce lien-là qui casse.",
    "Ces boutons d’envoi transmettent en général les données du formulaire vers une adresse web ou un e-mail contrôlé par celui qui a créé le formulaire. Si ce serveur est hors service, si l’adresse a changé, ou si votre lecteur bloque l’action par sécurité, l’envoi échoue — et rien de tout cela n’est quelque chose que vous pouvez corriger de votre côté. La bonne nouvelle, c’est qu’il existe presque toujours une solution manuelle fiable de secours.",
    "Ce guide explique ce que fait réellement un bouton d’envoi, ce que signifient les échecs courants, et comment faire parvenir votre formulaire complété à destination quand le bouton refuse de coopérer. C’est distinct des erreurs d’envoi sur un portail web, qui constituent un problème différent.",
  ],
  steps: [
    {
      title: "Comprenez ce que fait le bouton Envoyer",
      body: "Le bouton Envoyer d’un formulaire transmet les données des champs vers une destination — une adresse web ou un e-mail — configurée par l’émetteur. Il n’est pas autonome ; il dépend du bon fonctionnement de cette destination et de l’autorisation de l’action par votre lecteur.",
    },
    {
      title: "Lisez le message d’erreur pour un indice",
      body: "Un message mentionnant un serveur, un réseau, ou une action bloquée pointe vers la destination ou une restriction de sécurité, pas vers votre fichier. « Rien ne s’est passé » signifie souvent que votre lecteur a silencieusement bloqué l’envoi par sécurité.",
    },
    {
      title: "Essayez une application PDF complète",
      body: "Les lecteurs basiques et de navigateur bloquent ou ignorent fréquemment les actions d’envoi. Ouvrir le formulaire complété dans une application PDF dédiée permet parfois au bouton de fonctionner comme prévu.",
    },
    {
      title: "Repliez-vous sur l’envoi manuel",
      body: "Si le bouton échoue toujours, enregistrez et aplatissez le formulaire complété, puis envoyez-le manuellement — par e-mail à l’adresse indiquée sur le formulaire, ou en le déposant sur le portail de l’émetteur. Cela contourne entièrement le bouton d’envoi défaillant.",
    },
    {
      title: "Confirmez l’envoi et gardez une copie",
      body: "Quand vous envoyez manuellement, gardez votre copie aplatie et guettez une confirmation. Si le formulaire devait arriver dans une boîte de réception ou un portail précis, les instructions de l’émetteur vous indiquent où.",
    },
  ],
  tips: [
    "Un bouton Envoyer défaillant est en général dû à la destination de l’émetteur, pas à votre fichier — l’envoi manuel est la solution de secours fiable.",
    "Enregistrez et aplatissez vos réponses avant d’envoyer manuellement, pour que le destinataire reçoive une copie verrouillée et complète.",
    "« Rien ne s’est passé » lors de l’envoi signifie souvent que votre lecteur a bloqué l’action par sécurité ; une application dédiée peut l’autoriser.",
    "Les erreurs d’envoi sont différentes des erreurs de dépôt sur un portail — si vous envoyez un fichier sur un site web, c’est une solution différente.",
    "Vérifiez si le formulaire mentionne un e-mail de contact ou des instructions ; les émetteurs prévoient souvent une voie manuelle pour exactement cette situation.",
  ],
  mobileNote:
    "Si le bouton Envoyer d’un formulaire échoue sur téléphone, l’application PDF Editor vous permet d’aplatir le formulaire complété et de l’envoyer manuellement depuis le menu de partage — e-mail ou dépôt sur un portail — pour qu’une action d’envoi défaillante ne piège jamais vos réponses. Tout cela fonctionne sur l’appareil.",
  faq: [
    {
      q: "Pourquoi le bouton Envoyer de mon formulaire PDF ne fonctionne-t-il pas ?",
      a: "Le bouton envoie vos données vers une destination configurée par l’émetteur — un serveur ou un e-mail. Si celle-ci est hors service, a changé, ou si votre lecteur bloque l’action par sécurité, l’envoi échoue. Cela échappe à votre contrôle ; envoyez plutôt le formulaire manuellement.",
    },
    {
      q: "Que signifie le fait que l’envoi ne fasse rien ?",
      a: "Votre lecteur a très probablement bloqué silencieusement l’action d’envoi par sécurité. Essayez une application PDF complète, ou ignorez le bouton et envoyez le formulaire complété manuellement.",
    },
    {
      q: "Comment envoyer le formulaire si le bouton est cassé ?",
      a: "Enregistrez et aplatissez le formulaire complété, puis envoyez-le manuellement : par e-mail à l’adresse indiquée sur le formulaire ou en le déposant sur le portail de l’émetteur. Cela contourne entièrement l’action d’envoi.",
    },
    {
      q: "Une erreur d’envoi est-elle la même chose qu’une erreur de dépôt ?",
      a: "Non. Une erreur d’envoi correspond à l’échec du bouton Envoyer intégré au formulaire. Une erreur de dépôt correspond à un site web qui rejette un fichier que vous déposez. Elles ont des causes et des solutions différentes.",
    },
    {
      q: "Les données du formulaire ont-elles pu être envoyées malgré une erreur affichée ?",
      a: "Probablement pas — si vous avez vu une erreur, présumez qu’elles ne sont pas arrivées. Envoyez manuellement, gardez votre propre copie, et guettez une confirmation pour savoir que l’envoi a atteint sa destination.",
    },
  ],
  related: [
    {
      label: "Comment renvoyer un formulaire PDF rempli",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "Comment corriger les erreurs d’envoi de PDF",
      path: "/guides/how-to-fix-pdf-upload-errors",
    },
    { label: "Formulaire PDF qui ne fonctionne pas ?", path: "/guides/pdf-form-not-working" },
    {
      label: "Problèmes de compatibilité des formulaires PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
