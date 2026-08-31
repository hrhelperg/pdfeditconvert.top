import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-study-materials-as-pdf",
  h1: "Comment organiser ses supports de révision en PDF (dossiers, noms, sommaire)",
  description:
    "Les PDF d’un semestre s’accumulent vite. Une convention simple de dossiers, de noms et de fusion qui garde tout retrouvable de la première semaine aux partiels.",
  updated: "2026-05-29",
  intro: [
    "À la quatrième semaine du semestre, votre dossier de téléchargements compte déjà cinquante PDF nommés « cours7.pdf », « version-finale-2.pdf », « Diapos_v3_corrige.pdf » et « Document.pdf ». À la dixième semaine, vous ne retrouvez plus rien. À la semaine des partiels, vous cherchez le même cours trois fois parce que vous ne savez plus quelle version contient la diapositive qu’il vous faut.",
    "La solution n’est ni un logiciel ni une application — c’est une convention. Une arborescence de dossiers courte, un nom de fichier cohérent, et l’habitude de fusionner chaque semaine. Une fois ces trois éléments en place, retrouver un cours précis deux mois plus tard prend cinq secondes au lieu de quinze minutes.",
    "Ce guide décrit la convention qui tient sur un semestre entier : à quoi doivent ressembler les dossiers, comment doivent se lire les noms de fichiers, quand fusionner, et ce qui se passe à la fin du trimestre.",
  ],
  steps: [
    {
      title: "Construisez un dossier de premier niveau par cours",
      body: "/Cours/[CodeCours]/. À l’intérieur : /cours/, /devoirs/, /lectures/, /examens/. Quatre dossiers couvrent l’essentiel de ce qui arrive. Ne dépassez pas deux niveaux d’imbrication.",
    },
    {
      title: "Standardisez le modèle de nom de fichier",
      body: "SemaineN_TypeDocument_AAAA-MM-JJ.pdf. Par exemple Semaine3_Cours_2026-09-15.pdf, Devoir2_Rendu_2026-09-20.pdf. La date en dernier trie chronologiquement ; la semaine en premier regroupe par thème.",
    },
    {
      title: "Fusionnez par semaine, pas par fichier",
      body: "En fin de semaine, Fusionner le PDF réunit les notes de cours, les diapositives et les photos du tableau de la semaine en un seul Semaine3_Cours_Complet_AAAA-MM-JJ.pdf. Un seul fichier par semaine est bien plus facile à retrouver plus tard.",
    },
    {
      title: "Ajoutez des pages de couverture aux dossiers fusionnés",
      body: "Une couverture tapée (cours, semaine, thèmes abordés) rend le dossier auto-descriptif au moment des partiels. Le vous qui parcourt douze semaines de dossiers remerciera le vous d’aujourd’hui.",
    },
    {
      title: "Archivez en fin de semestre",
      body: "Déplacez /Cours/[Cours]/ vers /Archivage/[Annee]/[Cours]/ à la fin du semestre. Les dossiers actifs restent légers ; les archives restent consultables pour réviser des prérequis plus tard.",
    },
    {
      title: "Compressez les archives, pas les fichiers actifs",
      body: "Compresser le PDF du contenu archivé pour économiser de l’espace disque. Ne compressez pas les fichiers de révision actifs — la lisibilité compte plus que la légèreté pendant le semestre.",
    },
  ],
  tips: [
    "Utilisez les dates au format AAAA-MM-JJ. Elles se trient correctement dans n’importe quel explorateur de fichiers. 15/09/26 ne le fait pas.",
    "Ne mettez pas de numéros de version dans les supports de révision. Le cours final est le cours ; un v2 signifie que l’enseignant a redéposé le document.",
    "Séparez la préparation aux examens dans des dossiers distincts — /examens/partiels/ et /examens/final/. C’est un mode de révision différent du suivi hebdomadaire.",
    "Ne fusionnez pas d’un cours à l’autre. Des PDF mélangeant plusieurs matières deviennent introuvables.",
    "Gardez un fichier README.txt d’une ligne dans chaque dossier de cours indiquant ce que contient chaque sous-dossier. Utile pour retrouver ses repères un semestre plus tard.",
  ],
  mobileNote:
    "La plupart des PDF de révision arrivent sur téléphone (via le portail de la classe, l’e-mail de l’enseignant ou votre propre scan). L’application PDF Editor permet de renommer, classer et fusionner directement depuis le mobile, pour que le fichier atterrisse au bon endroit au lieu de s’entasser dans les téléchargements.",
  faq: [
    {
      q: "Quel est le meilleur format de nom de fichier pour les supports de révision ?",
      a: "SemaineN_TypeDocument_AAAA-MM-JJ.pdf. Le préfixe de semaine regroupe par thème, le type de document clarifie le contenu, la date au format ISO trie chronologiquement.",
    },
    {
      q: "Faut-il fusionner chaque semaine ou garder des fichiers séparés ?",
      a: "Fusionnez chaque semaine. Un PDF par semaine et par cours est la bonne granularité — assez petit pour se charger vite, assez grand pour être autonome au moment de la révision.",
    },
    {
      q: "Jusqu’où doivent aller les dossiers ?",
      a: "Deux niveaux. /Cours/[Cours]/[type]/. Au-delà, on perd des fichiers.",
    },
    {
      q: "Faut-il un dossier d’archive séparé ?",
      a: "Oui. Sortez les semestres terminés de /Cours/ pour que le dossier actif reste facile à parcourir.",
    },
    {
      q: "Qu’en est-il de la synchronisation cloud ?",
      a: "Synchronisez le dossier /Cours/ avec au moins un espace cloud. L’accès du téléphone à l’ordinateur compte pendant les partiels ; la synchronisation s’en charge.",
    },
  ],
  related: [
    { label: "PDF pour étudiants — notes et fiches de révision", path: "/pdf-for-students" },
    { label: "Fusionner le PDF — assembler les dossiers hebdomadaires", path: "/merge-pdf" },
    { label: "Comment organiser ses fichiers PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Organisation des PDF à l’université", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF pour étudiants — notes, surlignages, fiches de révision", path: "/pdf-for-students" },
};

export default content;
