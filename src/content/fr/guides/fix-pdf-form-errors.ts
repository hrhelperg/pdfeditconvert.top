import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "fix-pdf-form-errors",
  h1: "Corriger les erreurs d’un formulaire PDF — la check-list de premiers secours",
  description:
    "Les gestes de premiers secours pour un formulaire PDF récalcitrant : changer de lecteur, retélécharger, mettre à jour, écrire par-dessus, aplatir. À faire avant de chercher une cause précise.",
  updated: "2026-06-01",
  intro: [
    "Quand un formulaire se comporte mal et que vous voulez simplement en finir, il existe une courte séquence de solutions qui résout la majorité des problèmes quelle que soit la cause exacte. C’est la check-list de premiers secours — les choses à essayer dans l’ordre avant de diagnostiquer un problème précis. La plupart des erreurs de formulaire cèdent à l’un de ces cinq gestes, qui prennent quelques minutes à parcourir.",
    "Considérez-la comme le complément du diagnostic précis du symptôme. Si vous préférez identifier s’il s’agit de champs manquants, d’un problème d’enregistrement, ou d’un verrouillage en lecture seule, le guide de diagnostic vous y oriente. Mais souvent, le chemin le plus rapide consiste simplement à exécuter ces étapes universelles, et le formulaire se remet à bien se comporter.",
    "Chaque étape cible une large catégorie de problème — incompatibilités de lecteur, fichiers incomplets, logiciel obsolète, formulaires verrouillés ou non interactifs, et enregistrement inconstant. Exécutez-les de haut en bas et arrêtez-vous dès que le formulaire fonctionne.",
  ],
  steps: [
    {
      title: "Ouvrez-le dans une application PDF dédiée",
      body: "La solution la plus rentable à elle seule. Les aperçus e-mail, les onglets de navigateur et les lecteurs basiques causent la plupart des erreurs de formulaire en ignorant la couche de champs. Une application PDF complète résout à elle seule une grande part des problèmes.",
    },
    {
      title: "Retéléchargez un exemplaire neuf",
      body: "Un téléchargement partiel ou interrompu peut produire des champs manquants, des pages vides, ou des erreurs de « fichier endommagé ». Retéléchargez le formulaire depuis la source et rouvrez l’exemplaire complet avant de présumer un défaut plus profond.",
    },
    {
      title: "Mettez à jour votre logiciel PDF",
      body: "Un lecteur obsolète peut ne pas afficher les fonctions de formulaire récentes. Passer à une version à jour, ou à une application PDF bien entretenue, élimine les erreurs de type compatibilité qui ne concernent pas réellement le fichier.",
    },
    {
      title: "Ajoutez votre texte par-dessus",
      body: "Si le formulaire est non interactif, verrouillé, ou refuse simplement de coopérer, placez votre propre texte et vos coches directement sur la page avec un éditeur de PDF. Cette solution universelle permet de compléter presque n’importe quel formulaire, quel que soit le problème sous-jacent.",
    },
    {
      title: "Enregistrez correctement et aplatissez",
      body: "Pour arrêter la disparition des réponses, enregistrez avec un outil qui écrit les données de champs, puis aplatissez le formulaire complété. L’aplatissement verrouille vos réponses dans la page pour qu’elles s’affichent, s’impriment et s’envoient de façon fiable partout.",
    },
  ],
  tips: [
    "Exécutez les étapes dans l’ordre et arrêtez-vous dès que ça fonctionne — la plupart des formulaires se corrigent dès l’étape un ou deux.",
    "Ouvrir le fichier dans une vraie application PDF est le geste unique le plus rentable pour presque toute erreur de formulaire.",
    "Ajouter du texte par-dessus est l’échappatoire universelle quand un formulaire refuse de coopérer et que vous avez juste besoin d’en finir.",
    "Aplatir à la fin évite les problèmes les plus courants après coup : réponses disparues et impressions vides.",
    "Si rien de tout cela ne fonctionne, le formulaire utilise peut-être des fonctions non prises en charge — consultez le guide sur la compatibilité ou demandez à l’émetteur une version standard.",
  ],
  mobileNote:
    "Sur téléphone, cette check-list est rapide : ouvrez le formulaire dans l’application PDF Editor plutôt que dans l’aperçu e-mail, remplissez les champs ou ajoutez du texte par-dessus, puis aplatissez et exportez. Ces gestes seuls éliminent la plupart des erreurs de formulaire sur mobile, le tout sur l’appareil sans rien envoyer sur un serveur.",
  faq: [
    {
      q: "Quel est le moyen le plus rapide de corriger un formulaire PDF récalcitrant ?",
      a: "Ouvrez-le dans une application PDF dédiée plutôt que dans un aperçu e-mail ou un navigateur. Cela résout la plus grande part des erreurs de formulaire, qui sont généralement des incompatibilités de lecteur plutôt que des défauts du fichier.",
    },
    {
      q: "Le formulaire ne fonctionne toujours pas après avoir changé d’application — que faire ensuite ?",
      a: "Retéléchargez un exemplaire neuf, mettez à jour votre logiciel PDF, et s’il reste récalcitrant, ajoutez votre texte directement par-dessus la page. Cette approche manuelle permet de compléter presque n’importe quel formulaire quelle que soit la cause.",
    },
    {
      q: "Comment empêcher mes réponses de disparaître ?",
      a: "Enregistrez avec un outil qui écrit les données des champs de formulaire, puis aplatissez le formulaire complété. L’aplatissement fusionne vos réponses dans la page pour qu’elles ne puissent pas être perdues à la réouverture, à l’impression, ou à l’envoi.",
    },
    {
      q: "Dois-je utiliser cette check-list ou diagnostiquer le problème précis ?",
      a: "Les deux fonctionnent. Cette check-list corrige la plupart des erreurs rapidement sans diagnostic. Si vous préférez identifier la cause exacte — champs manquants, enregistrement échoué, lecture seule — commencez plutôt par le diagnostic de dépannage des formulaires.",
    },
    {
      q: "Et si rien ici ne le corrige ?",
      a: "Le formulaire utilise peut-être des fonctions avancées que votre logiciel ne peut pas gérer. Consultez le guide sur la compatibilité, ou demandez à celui qui vous l’a envoyé un PDF standard ou une version non interactive imprimable que vous pourrez compléter.",
    },
  ],
  related: [
    { label: "Formulaire PDF qui ne fonctionne pas ?", path: "/guides/pdf-form-not-working" },
    {
      label: "Les champs d’un formulaire PDF ont disparu ?",
      path: "/guides/pdf-form-fields-missing",
    },
    {
      label: "Problèmes de compatibilité des formulaires PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    {
      label: "Pourquoi mon formulaire PDF ne s’enregistre-t-il pas ?",
      path: "/guides/why-pdf-form-wont-save",
    },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
