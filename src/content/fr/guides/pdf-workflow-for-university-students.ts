import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflow-for-university-students",
  h1: "Organisation des PDF à l’université (notes, devoirs, rendus)",
  description:
    "Un rythme PDF qui tient tout un semestre, jusqu’aux partiels : notes de cours numérisées, devoirs rendus, dossiers de révision partagés. Dans le navigateur et gratuit.",
  updated: "2026-05-29",
  intro: [
    "Un semestre universitaire génère des centaines de PDF. Diapositives de cours, notes manuscrites numérisées, séries d’exercices, devoirs terminés, lectures complémentaires, dossiers de révision pour les examens. La plupart des étudiants s’en sortent en les entassant dans un dossier de téléchargements et en fouillant dedans. Ça fonctionne en semaine trois ; ça s’effondre en semaine dix ; à la semaine des partiels, c’est pire que de ne rien avoir du tout.",
    "Un rythme PDF qui tient tout le semestre est court et facile à maintenir. Des dossiers de notes hebdomadaires par cours, des devoirs nommés de façon cohérente, des dossiers de révision assemblés avant les examens, des archives en fin de semestre. Rien de tout cela ne demande d’outils coûteux ou d’applications que vous n’avez pas déjà, et la plupart des étapes peuvent se faire depuis un téléphone.",
    "Ce guide décrit ce rythme — quoi faire chaque semaine, quoi faire pour chaque devoir, quoi faire à mi-parcours et pendant les examens. Il part du principe que l’objectif est de retrouver n’importe quel document en cinq secondes, pas de construire un système de gestion des connaissances parfait.",
  ],
  steps: [
    {
      title: "Chaque semaine : capturez et fusionnez le contenu de cours",
      body: "En fin de semaine, pour chaque cours : rassemblez les notes tapées, les diapositives en PDF, les photos du tableau et les pages manuscrites numérisées. Fusionner le PDF les réunit en Semaine3_Dossier_AAAA-MM-JJ.pdf dans /Cours/[Cours]/cours/.",
    },
    {
      title: "Pour chaque devoir : produisez, nommez, rendez, archivez",
      body: "Word vers PDF pour le travail tapé, Numériser en PDF pour les pages manuscrites, Fusionner le PDF pour tout combiner, Compresser le PDF si le portail limite la taille. Rendez le devoir, gardez une copie dans /Cours/[Cours]/devoirs/rendus/.",
    },
    {
      title: "À mi-semestre : faites le ménage",
      body: "Vers la semaine 7, parcourez les dossiers de cours. Supprimez les doublons, corrigez les fichiers mal nommés, archivez ce qui est déjà terminé. Vingt minutes à mi-semestre font gagner des heures aux partiels.",
    },
    {
      title: "Avant les examens : construisez un dossier de révision",
      body: "Combinez les dossiers hebdomadaires pertinents en un seul Cours_DossierRevision_Final.pdf. Ajoutez une couverture avec les thèmes. Compressez pour un usage nomade sur tablette ou téléphone pendant la révision.",
    },
    {
      title: "Annotez le dossier de révision sur tablette ou téléphone",
      body: "L’annotation PDF sur tablette fonctionne mieux que le papier pour certains étudiants. Utilisez le surlignage, le commentaire et le soulignement ; les marques persistent pour une relecture ultérieure.",
    },
    {
      title: "Fin de semestre : archivez le cours",
      body: "Déplacez /Cours/[Cours]/ vers /Archivage/[Annee]/[Cours]/. Compressez tout dans l’archive. Le dossier actif reste propre pour le prochain semestre.",
    },
  ],
  tips: [
    "Ne fusionnez pas d’un cours à l’autre ni d’une semaine à l’autre. La plus petite unité utile est un PDF par semaine et par cours.",
    "Rendez vos devoirs en suivant exactement la convention de nommage exigée par chaque classe. « NomDeFamille_Prenom_Devoir3.pdf » est courant ; suivez-la précisément.",
    "Annotez les dossiers de révision numériquement. Des PDF annotés et consultables par recherche valent mieux que le papier pour réviser — vous retrouvez un thème précis rapidement.",
    "Compressez uniquement au moment du rendu et de l’archivage. Pendant l’utilisation active, optimisez pour la lisibilité.",
    "Synchronisez le dossier Cours avec un espace cloud. L’accès du téléphone à l’ordinateur pendant les partiels vaut plus que l’espace disque économisé.",
  ],
  mobileNote:
    "La majeure partie de la journée PDF d’un étudiant se passe sur téléphone — numériser une page manuscrite, photographier une diapositive, rendre un devoir. L’application PDF Editor gère toute la chaîne (numériser, fusionner, compresser, signer, partager) hors connexion sur iOS et Android, pour que la méthode ne dépende pas d’un accès à l’ordinateur.",
  faq: [
    {
      q: "Combien de temps prend ce rythme ?",
      a: "Dix minutes par semaine et par cours pour le dossier hebdomadaire. Deux minutes par devoir. Vingt minutes à mi-semestre. Le gain cumulé aux partiels se compte en heures.",
    },
    {
      q: "Et si j’ai beaucoup de cours ?",
      a: "Le rythme s’adapte — la même convention s’applique à chaque cours. Deux cours en parallèle doublent le temps ; la structure, elle, ne change pas.",
    },
    {
      q: "Le papier vaut-il encore la peine d’être conservé ?",
      a: "Les notes manuscrites originales, oui, comme sauvegarde. Une fois numérisées et intégrées au dossier hebdomadaire, le papier n’est plus qu’une référence.",
    },
    {
      q: "Faut-il appliquer l’OCR aux scans pour la recherche ?",
      a: "Si votre outil le propose, oui. Un support de révision consultable par recherche vaut bien plus qu’un support qui ne l’est pas au moment de l’examen.",
    },
    {
      q: "Qu’en est-il des lectures complémentaires ?",
      a: "Un dossier /lectures/ séparé par cours. Ne fusionnez pas les lectures avec les dossiers de cours ; elles grossissent séparément et servent un autre usage.",
    },
  ],
  related: [
    { label: "PDF pour étudiants — notes et fiches de révision", path: "/pdf-for-students" },
    { label: "Les meilleurs outils PDF gratuits pour étudiants", path: "/guides/best-pdf-tools-for-students" },
    { label: "Comment organiser ses supports de révision en PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Comment rendre un devoir en PDF", path: "/guides/how-to-submit-homework-as-pdf" },
  ],
  parentHub: { label: "PDF pour étudiants — notes, surlignages, fiches de révision", path: "/pdf-for-students" },
};

export default content;
