import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-submit-homework-as-pdf",
  h1: "Comment rendre un devoir en PDF sans galérer avec le portail",
  description:
    "Les plateformes de rendu refusent les devoirs pour des raisons prévisibles : poids, nombre de pages, format. Le chemin le plus simple entre le devoir terminé et le dépôt accepté.",
  updated: "2026-05-29",
  intro: [
    "Deux minutes avant la date limite, c’est le pire moment pour découvrir que le portail de l’école refuse votre devoir. L’erreur est en général générique — « fichier invalide », « échec de l’envoi », « trop volumineux » — et la cause réelle est presque toujours l’une de ces quatre choses : le fichier dépasse la taille limite, le format n’est pas exactement celui attendu par le portail, le nombre de pages dépasse un plafond, ou votre capture depuis le téléphone n’est pas encore un vrai PDF.",
    "La solution est courte dans tous les cas, et elle peut se faire depuis un téléphone ou un ordinateur portable, dans un onglet de navigateur, sans rien envoyer à un tiers. L’astuce, c’est de savoir précisément ce que le portail attend et de produire exactement ce fichier-là du premier coup.",
    "Ce guide détaille le chemin entre le devoir terminé et le PDF accepté — y compris la bonne façon de traiter les scans de travail manuscrit, les exercices, et les rendus à formats mélangés comme « un document Word plus trois pages manuscrites ».",
  ],
  steps: [
    {
      title: "Vérifiez d’abord les exigences réelles du portail",
      body: "La plupart des portails de classe indiquent discrètement la limite — généralement 5 à 25 Mo, parfois un nombre de pages maximum, occasionnellement le format PDF/A en particulier. Vérifiez avant l’envoi plutôt qu’après le refus.",
    },
    {
      title: "Convertissez d’abord chaque élément en PDF",
      body: "Un document Word → Word vers PDF. Les pages manuscrites → Numériser en PDF depuis votre téléphone. Les captures d’écran ou photos du tableau → Image vers PDF. Tout devient un PDF avant toute autre étape.",
    },
    {
      title: "Fusionnez en un seul fichier dans l’ordre du rendu",
      body: "Fusionner le PDF réunit le travail tapé, le travail numérisé et les annotations éventuelles en un seul fichier ordonné. Les correcteurs préfèrent un seul fichier à trois.",
    },
    {
      title: "Vérifiez l’orientation et l’ordre",
      body: "Réorganiser les pages du PDF si la fusion a mis quelque chose dans le désordre. Faire pivoter le PDF si une page numérisée est arrivée de travers. Le correcteur ne devrait pas avoir à faire pivoter manuellement pour lire votre travail.",
    },
    {
      title: "Compressez pour tenir sous la limite du portail",
      body: "Compresser le PDF dans votre navigateur réduit le fichier. Les scans lourds baissent nettement ; le contenu tapé change à peine. Visez en dessous de la limite du portail avec une petite marge.",
    },
    {
      title: "Nommez le fichier comme la classe l’exige",
      body: "Beaucoup de classes imposent une convention de nommage : Nom_Prenom_Devoir3.pdf. Suivez-la exactement. Un mauvais nom coûte des points ou crée une confusion de classement.",
    },
  ],
  tips: [
    "Ne rendez pas un document Word à un portail qui accepte les PDF. Word s’affiche différemment sur la machine du correcteur ; un PDF fige son apparence.",
    "Les scans manuscrits doivent être en noir et blanc ou en niveaux de gris, pas en couleur. Plus légers, plus nets, plus lisibles.",
    "Compressez fortement les scans lourds, pas le travail tapé. Les pages tapées se compressent peu ; les scans se compressent beaucoup.",
    "Faites un envoi test d’une version brouillon pour confirmer que le portail accepte votre fichier avant la date limite.",
    "Enregistrez aussi le fichier rendu en local. Les copies déposées sur le portail ne sont pas toujours récupérables plus tard, et vous pourriez avoir besoin de revoir ce que vous avez rendu.",
  ],
  mobileNote:
    "Les rendus faits entièrement depuis un téléphone sont désormais courants. L’application PDF Editor gère toute la chaîne sur téléphone — numériser les pages manuscrites, fusionner avec le travail tapé, compresser, nommer, prêt à envoyer — sans avoir besoin de passer par un ordinateur portable.",
  faq: [
    {
      q: "Quelle taille la plupart des portails scolaires autorisent-ils ?",
      a: "Généralement 5 à 25 Mo. Certains portails du primaire et du secondaire plafonnent à 2 Mo. Les portails universitaires sont plus souples. Vérifiez les consignes de votre classe.",
    },
    {
      q: "Puis-je rendre un Word au lieu d’un PDF ?",
      a: "Seulement si le portail l’accepte explicitement. La plupart demandent un PDF précisément pour figer la mise en forme ; rendre un Word peut coûter des points ou être rejeté automatiquement.",
    },
    {
      q: "Faut-il tout fusionner en un seul fichier ?",
      a: "Oui, sauf si le portail accepte plusieurs envois. Les correcteurs préfèrent un seul fichier ; de toute façon, beaucoup de portails n’en acceptent qu’un.",
    },
    {
      q: "Quelle est la raison de refus la plus fréquente ?",
      a: "Le poids du fichier. Les scans font vite dépasser les plafonds des portails. Compressez avant de rendre et le refus disparaît presque toujours.",
    },
    {
      q: "Puis-je envoyer depuis mon téléphone ?",
      a: "Oui. La plupart des portails scolaires modernes fonctionnent dans les navigateurs mobiles et acceptent les PDF depuis le menu de partage. Les outils sur téléphone couvrent toute la chaîne.",
    },
  ],
  related: [
    { label: "PDF pour étudiants — notes et fiches de révision", path: "/pdf-for-students" },
    { label: "Numériser en PDF — capturer des pages manuscrites", path: "/scan-to-pdf" },
    { label: "Comment compresser un PDF pour un portail scolaire", path: "/guides/how-to-compress-pdf-for-school-portals" },
    { label: "Comment numériser ses notes manuscrites en PDF", path: "/guides/how-to-scan-notes-to-pdf" },
  ],
  parentHub: { label: "PDF pour étudiants — notes, surlignages, fiches de révision", path: "/pdf-for-students" },
};

export default content;
