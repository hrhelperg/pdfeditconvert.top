import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-notes-to-pdf",
  h1: "Comment numériser ses notes manuscrites en PDF (net et consultable)",
  description:
    "Transformez des pages de notes de cours manuscrites en PDF nets de plusieurs pages, avec l’appareil photo du téléphone. Les réglages qui donnent une numérisation lisible du premier coup.",
  updated: "2026-05-29",
  intro: [
    "Les notes de cours manuscrites restent le moyen le plus rapide de capturer un cours, et la plupart des étudiants les laissent sur papier au lieu de les numériser — parce que le résultat est souvent raté. Pages de travers, scans grisâtres et délavés, fichiers trop lourds, et le temps perdu à refaire celles qui sont ratées. Sur un semestre, ça s’accumule, et c’est pour ça que les notes restent dans le cahier.",
    "Obtenir des scans nets depuis un téléphone dépend surtout de la technique et des réglages, pas de l’application. Lumière homogène, cadrage carré, contraste activé, niveaux de gris plutôt que couleur, et détection des bords si l’outil le propose. Une page bien capturée ressemble davantage à un scan à plat qu’à une photo prise à la volée.",
    "Ce guide détaille la technique de bout en bout — les conditions de la pièce qui donnent de bons scans, l’approche page par page, le flux multipage, et ce qu’il faut faire du PDF une fois obtenu. Il suppose que vous avez un téléphone et que vous voulez un PDF net et multipage sans acheter de scanner.",
  ],
  steps: [
    {
      title: "Posez la page sur un fond contrasté",
      body: "Papier ligné sur un bureau sombre. Papier blanc sur un tissu sombre. Tout ce qui rend le bord de la page évident pour l’appareil photo et le recadrage automatique. Évitez les reflets ; une lumière homogène vaut mieux qu’une lumière vive.",
    },
    {
      title: "Tenez le téléphone parallèle à la page",
      body: "L’appareil photo doit être bien au-dessus de la page, pas incliné. Une inclinaison produit une déformation trapézoïdale que la correction automatique peut rattraper, mais jamais aussi bien qu’une prise bien perpendiculaire.",
    },
    {
      title: "Utilisez une application de numérisation avec détection des bords",
      body: "Numériser en PDF ou le flux de numérisation de l’application PDF Editor détecte le bord de la page et recadre automatiquement. Une photo prise au hasard avec l’appareil photo ne fait pas ça ; une application de numérisation donne un résultat proche d’un scan à plat.",
    },
    {
      title: "Passez en mode niveaux de gris ou noir et blanc",
      body: "Les scans en couleur d’une encre noire sur papier blanc sont plus lourds, plus bruités et moins nets. Les niveaux de gris donnent des scans plus nets, plus légers et plus lisibles. Le noir et blanc est encore plus léger, mais moins souple par la suite.",
    },
    {
      title: "Capturez chaque page, puis fusionnez",
      body: "Les flux de numérisation multipage capturent page par page et les assemblent automatiquement en un seul PDF. Si vous avez capturé séparément, Fusionner le PDF les assemble dans l’ordre.",
    },
    {
      title: "Recadrez, faites pivoter et réorganisez lors du nettoyage",
      body: "Réorganiser les pages du PDF si une page a été capturée dans le mauvais ordre. Faire pivoter le PDF pour les prises de travers. Consacrez une minute au nettoyage ; le vous de demain remerciera le vous d’aujourd’hui.",
    },
  ],
  tips: [
    "Faites toutes les captures avant de commencer le nettoyage — changer de mode en permanence casse le rythme.",
    "Si la lumière est irrégulière, une simple feuille blanche tenue au-dessus de la page en réflecteur améliore nettement le contraste.",
    "Ne recadrez pas trop serré. Laisser une petite marge autour du bord de la page rend le document moins amateur.",
    "Compressez le PDF final avant l’archivage. Les notes riches en scans sont lourdes ; les versions compressées sont plus faciles à partager plus tard.",
    "Ajoutez une page de couverture (tapée, avec le nom du cours et la date) avant la fusion. La collection devient auto-descriptive dans vos archives.",
  ],
  mobileNote:
    "Numériser des notes est l’une des tâches où un téléphone fait réellement mieux qu’un scanner à plat pour un usage occasionnel. Le flux de numérisation de l’application PDF Editor fonctionne entièrement sur le téléphone — capture, détection des bords, contraste, fusion multipage — pour produire un PDF net sans aller-retour par un serveur.",
  faq: [
    {
      q: "Les notes manuscrites numérisées seront-elles consultables par recherche ?",
      a: "Seulement si l’outil applique l’OCR — la conversion de l’image de l’écriture en texte consultable. L’OCR sur l’écriture manuscrite est moins fiable que sur de l’imprimé ; la qualité dépend de l’écriture et du scan.",
    },
    {
      q: "Quel réglage d’appareil photo est le meilleur pour scanner des notes ?",
      a: "Utilisez le mode niveaux de gris ou noir et blanc de l’application de numérisation avec contraste automatique. Ne comptez pas sur l’application appareil photo standard — ses photos sont plus lourdes, moins contrastées et plus difficiles à lire.",
    },
    {
      q: "Combien de pages par session de numérisation ?",
      a: "Ce que vous avez écrit en une séance. Numériser chaque semaine ou après chaque cours est plus simple que de laisser un semestre entier s’accumuler.",
    },
    {
      q: "Faut-il numériser en couleur ?",
      a: "Seulement si vos notes utilisent la couleur (surligneurs, schémas). Sinon, les niveaux de gris ou le noir et blanc sont plus nets et plus légers.",
    },
    {
      q: "Que faire si la page est froissée ou tachée ?",
      a: "Le contraste automatique peut corriger la plupart des marques de vieillissement du papier. Un froissement important reste souvent visible ; envisagez de recommencer la prise ou d’accepter la page comme support d’étude personnel.",
    },
  ],
  related: [
    { label: "Numériser en PDF — capture par appareil photo avec détection des bords", path: "/scan-to-pdf" },
    { label: "Fusionner le PDF — combiner des scans multipages", path: "/merge-pdf" },
    { label: "Comment numériser des documents en PDF avec son téléphone", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Organisation des PDF à l’université", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "Numériser en PDF — numérisation par appareil photo", path: "/scan-to-pdf" },
};

export default content;
