import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-iphone",
  h1: "Comment signer un PDF sur iPhone (guide 2026)",
  description:
    "Signez un PDF sur iPhone avec Annotation ou l’application PDF Editor. Les limites de l’outil natif, et quand une application dédiée signe mieux.",
  updated: "2026-05-23",
  intro: [
    "Signer un PDF sur iPhone fait partie de ces tâches que iOS gère presque tout seul. L’outil intégré Annotation permet d’ajouter une signature en cas d’urgence, et pour une signature rapide et ponctuelle, c’est franchement suffisant. Mais dès que vous signez régulièrement — contrats, formulaires, accords qui reviennent semaine après semaine — ses limites apparaissent, et un outil dédié fait gagner un temps réel.",
    "Ce guide couvre les deux approches. D’abord la méthode native avec Annotation via l’application Fichiers, avec un regard honnête sur ses limites. Puis l’application PDF Editor, qui enregistre une signature réutilisable, détecte les champs de signature et garde tout sur l’appareil.",
    "Les signatures électroniques sont acceptées pour les documents professionnels courants dans la plupart des pays, donc signer sur votre iPhone n’est rarement qu’une simple commodité — c’est souvent parfaitement suffisant en soi.",
  ],
  steps: [
    {
      title: "Méthode rapide : ouvrez le PDF dans Fichiers",
      body: "Touchez le PDF dans l’application Fichiers pour l’ouvrir, puis touchez l’icône Annotation (pointe de stylo). C’est l’éditeur intégré d’iOS — pratique pour une signature ponctuelle, sans rien installer.",
    },
    {
      title: "Ajoutez une signature avec Annotation",
      body: "Touchez le bouton plus, choisissez Signature, et dessinez-en une avec votre doigt ou enregistrez-en une nouvelle. Placez-la sur la page et redimensionnez-la. Suffisant pour un document occasionnel.",
    },
    {
      title: "Sachez où Annotation atteint ses limites",
      body: "Annotation ne peut pas détecter les champs de signature d’un formulaire, gère mal les dates ou les paraphes, et redessiner ou retrouver votre signature à chaque fois devient vite lassant. Pour une signature fréquente, passez à un outil dédié.",
    },
    {
      title: "Meilleure méthode : ouvrez-le dans l’application PDF Editor",
      body: "Importez le PDF dans l’application depuis Fichiers, Mail ou n’importe quel menu de partage. L’outil Signer propose une signature manuscrite, tapée ou un paraphe.",
    },
    {
      title: "Dessinez votre signature une fois, réutilisez-la toujours",
      body: "Créez votre signature la première fois — au doigt ou à l’Apple Pencil — et elle est enregistrée sur votre appareil pour tous les documents suivants. Signer devient alors : ouvrir, toucher, placer, exporter.",
    },
    {
      title: "Placez, datez et exportez",
      body: "Déposez la signature là où elle doit aller, ajoutez un cachet de date ou un paraphe si le document en a besoin, puis exportez une copie signée. Enregistrez-la sous un nouveau nom pour que l’original non signé reste intact.",
    },
  ],
  tips: [
    "Utilisez un Apple Pencil si vous en avez un — le trait est nettement plus net qu’avec un doigt, ce qui compte pour des contrats destinés à des clients.",
    "Annotation est le bon outil pour une véritable ponctualité. Si vous signez plus d’une fois par mois, une signature enregistrée et réutilisable se rentabilise vite.",
    "Gardez l’original non signé à côté de la copie signée. Si une contrepartie veut une version propre ou que vous devez signer à nouveau avec une correction, vous l’aurez.",
    "Pour un document signé sensible, ajoutez un mot de passe avant de le partager — signer et protéger sont deux étapes distinctes.",
    "Une signature électronique convient aux documents professionnels courants, mais les accords à forte valeur ou réglementés peuvent exiger une signature qualifiée plus formelle — vérifiez les règles applicables.",
  ],
  mobileNote:
    "Signer sur iPhone signifie qu’un contrat repart en moins d’une heure, souvent en quelques minutes. L’application PDF Editor garde votre signature enregistrée sur l’appareil, détecte les champs de signature existants et n’envoie jamais le document sur un serveur — même les accords sensibles restent donc privés pendant que vous signez en déplacement.",
  faq: [
    {
      q: "Puis-je signer un PDF sur iPhone sans application ?",
      a: "Oui — ouvrez-le dans l’application Fichiers et utilisez Annotation pour ajouter une signature. C’est idéal pour une signature ponctuelle. Pour signer régulièrement, un outil dédié avec une signature enregistrée et réutilisable est bien plus rapide.",
    },
    {
      q: "Que ne peut pas faire l’outil intégré Annotation ?",
      a: "Il ne peut pas détecter les champs de signature d’un formulaire, gère maladroitement les dates et les paraphes, et vous oblige à replacer votre signature à chaque fois. Ces lacunes expliquent pourquoi les signataires fréquents passent à une application dédiée.",
    },
    {
      q: "Une signature électronique sur mon iPhone est-elle légalement valable ?",
      a: "Pour les contrats professionnels courants, dans la plupart des juridictions, oui. Les documents à forte valeur ou réglementés peuvent exiger une signature qualifiée plus formelle — vérifiez les règles applicables à votre cas.",
    },
    {
      q: "Mon document signé est-il envoyé quelque part ?",
      a: "Avec l’application PDF Editor, non — votre signature enregistrée et le document restent sur votre appareil. Rien n’est envoyé vers un serveur.",
    },
    {
      q: "Comment signer sur Android à la place ?",
      a: "La méthode est similaire mais les outils natifs diffèrent. Consultez le guide dédié sur la signature d’un PDF sur Android.",
    },
  ],
  related: [
    { label: "Signer un PDF — signatures électroniques sur mobile", path: "/sign-pdf" },
    { label: "Comment signer un PDF sur Android", path: "/guides/how-to-sign-pdf-on-android" },
    { label: "Comment signer un PDF sur son téléphone", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Comment modifier un PDF sur iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Signer un PDF", path: "/sign-pdf" },
};

export default content;
