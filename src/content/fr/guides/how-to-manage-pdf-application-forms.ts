import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdf-application-forms",
  h1: "Comment gérer des formulaires de candidature en PDF (collecte et examen)",
  description:
    "Vous recevez des candidatures en PDF ? Comment les collecter, les examiner, les comparer et les archiver sans rien perdre de vue — un système simple pour traiter une pile de formulaires remplis.",
  updated: "2026-06-01",
  intro: [
    "Envoyer un formulaire est la partie facile ; gérer le flot de ceux qui reviennent complétés, c’est là que les choses se compliquent. Si vous collectez des candidatures en PDF — postulants à un emploi, fournisseurs, participants à un programme, membres — vous vous retrouvez vite avec un dossier plein de fichiers nommés « formulaire (3).pdf » sans moyen clair de les examiner ou de les comparer. La solution est un système léger appliqué avec constance, pas une base de données.",
    "Bien gérer des formulaires de candidature tient à trois choses : recevoir chaque dépôt dans un format exploitable et cohérent, pouvoir les examiner et les comparer sans ouvrir vingt fichiers à la fois, et les archiver pour pouvoir en retrouver n’importe lequel plus tard. Rien de tout cela ne demande de logiciel spécial — juste une convention de nommage, une structure de dossiers, et quelques habitudes PDF.",
    "Ce guide détaille ce système pour le côté réception des formulaires, le pendant de l’envoi de fiches client ou de formulaires de candidature. Il suppose un flux régulier ou un lot périodique, le volume réaliste que traitent la plupart des petites structures.",
  ],
  steps: [
    {
      title: "Exigez un format de retour cohérent",
      body: "Demandez aux candidats d’envoyer des PDF aplatis, pas des photos ni des fichiers modifiables. Un format cohérent signifie que chaque dépôt se lit de la même façon et que rien n’arrive à moitié rempli ou modifiable.",
    },
    {
      title: "Renommez dès l’arrivée",
      body: "Renommez chaque fichier dès qu’il arrive — nom du candidat, date, éventuellement une référence. « nom-prenom-2026-06.pdf » vaut toujours mieux que « scan_final.pdf » et rend le dossier immédiatement lisible d’un coup d’œil.",
    },
    {
      title: "Regroupez par lot d’examen",
      body: "Placez les candidatures de chaque session dans un seul dossier. Pour comparer, vous pouvez fusionner un lot en un seul PDF et le feuilleter, ou garder les fichiers séparés et les parcourir par nom.",
    },
    {
      title: "Suivez le statut simplement",
      body: "Une structure de sous-dossiers — reçues, présélectionnées, refusées — ou une courte mention dans chaque nom de fichier garde le statut visible sans outil particulier. Déplacez les fichiers à mesure que leur statut change.",
    },
    {
      title: "Archivez les sessions terminées",
      body: "Quand une session se termine, déplacez son dossier vers une archive et gardez le modèle de candidature vierge à part. Vous conservez ainsi un enregistrement propre et un modèle réutilisable pour la prochaine fois.",
    },
  ],
  tips: [
    "Renommer dès l’arrivée est l’habitude la plus rentable — elle évite le chaos du « formulaire (3).pdf » avant même qu’il ne commence.",
    "Fusionner un lot de candidatures en un seul PDF rend l’examen côte à côte bien plus rapide que de jongler avec de nombreux fichiers.",
    "Demandez des dépôts aplatis pour que les réponses ne puissent pas bouger et que chaque fichier se lise de façon cohérente.",
    "Une simple structure de dossiers reçues/présélectionnées/refusées suit le statut sans aucun logiciel supplémentaire.",
    "Gardez les données des candidats à l’écart des outils publics et suivez les règles d’archivage ou de conservation qui s’appliquent à vous.",
  ],
  mobileNote:
    "Les candidats peuvent compléter et vous renvoyer votre formulaire depuis un téléphone avec l’application PDF Editor, en envoyant une copie aplatie facile à classer. De votre côté, vous pouvez aussi examiner les dépôts et fusionner un lot pour comparaison sur téléphone — pratique quand les candidatures arrivent alors que vous êtes loin de votre bureau.",
  faq: [
    {
      q: "Comment garder les formulaires de candidature reçus organisés ?",
      a: "Renommez chaque fichier à son arrivée avec le nom du candidat et la date, regroupez chaque session dans un seul dossier, suivez le statut avec des sous-dossiers, et archivez les sessions closes. Une convention de nommage plus des dossiers suffisent — pas besoin de base de données.",
    },
    {
      q: "Comment comparer rapidement de nombreuses candidatures ?",
      a: "Fusionnez les PDF d’une session en un seul fichier et feuilletez-les, ou gardez-les séparés et parcourez-les grâce à des noms de fichiers cohérents. Les deux méthodes valent mieux que d’ouvrir vingt fichiers un par un.",
    },
    {
      q: "Dans quel format les candidats doivent-ils envoyer leurs formulaires ?",
      a: "Des PDF aplatis. Ils se lisent de façon cohérente, ne peuvent être ni altérés ni effacés, et se classent proprement. Découragez les photos de tirages papier et les fichiers modifiables qui arrivent de façon incohérente.",
    },
    {
      q: "Ai-je besoin d’un logiciel spécial pour gérer des formulaires de candidature ?",
      a: "Non. Une convention de nommage cohérente, une structure de dossiers sensée, et des outils PDF de base pour fusionner et examiner couvrent le volume réaliste que traitent la plupart des petites structures.",
    },
    {
      q: "Combien de temps dois-je garder les formulaires reçus ?",
      a: "Cela dépend de vos propres besoins d’archivage et des règles qui s’appliquent à vous — les exigences varient. Archivez les sessions closes à un endroit où vous pouvez les retrouver, et supprimez les données personnelles selon votre politique.",
    },
  ],
  related: [
    {
      label: "Comment envoyer une fiche client à remplir",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Collecter des documents en PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Les formulaires PDF dans une petite entreprise",
      path: "/guides/pdf-forms-for-small-business",
    },
    { label: "Comment fusionner des fichiers PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
