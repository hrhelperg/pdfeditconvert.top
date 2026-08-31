import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-edit-a-pdf",
  h1: "Pourquoi je ne peux pas modifier ce PDF ? Les vraies raisons",
  description:
    "Le PDF a été conçu pour résister à la modification, mais quelques éléments précis — numérisation, protections, limites du lecteur — rendent certains fichiers plus verrouillés que d’autres. Ce qui bloque le vôtre, et ce qui marche vraiment.",
  updated: "2026-05-29",
  intro: [
    "Les PDF ont été conçus pour paraître identiques partout, ce qui explique exactement pourquoi les modifier semble plus difficile que modifier un document Word. Le format traite le texte davantage comme une page imprimée qu’un flux de caractères — utile quand vous voulez un partage au pixel près, frustrant quand vous devez changer un nom sur un contrat.",
    "Mais tous les PDF ne sont pas verrouillés de la même façon. Il y a quatre raisons courantes qui empêchent d’en modifier un : c’est l’image numérisée d’un document sans vrai texte en dessous, le fichier porte un indicateur de sécurité qui bloque les modifications, votre lecteur est en lecture seule par conception, ou l’original a été exporté d’une façon qui a fragmenté le texte en formes. Chacune a une voie différente.",
    "Ce guide parcourt chaque cause en termes simples, avec le bon outil pour chacune. Aucune ne nécessite de logiciel coûteux, et la plupart des corrections fonctionnent dans un onglet de navigateur.",
  ],
  steps: [
    {
      title: "Confirmez si le PDF a du vrai texte ou des images numérisées",
      body: "Essayez de sélectionner du texte avec votre curseur ou votre doigt. Si la sélection fonctionne, le PDF a du vrai texte et la modification est possible. Si vous ne pouvez rien sélectionner, c’est une numérisation — des images de texte, pas du texte en tant que tel.",
    },
    {
      title: "Vérifiez la présence d’un indicateur de restriction de modification",
      body: "Les PDF peuvent porter des permissions qui autorisent l’affichage mais bloquent la modification, l’impression ou la copie. La plupart des lecteurs affichent une petite icône de cadenas ou un avis « protégé » quand c’est actif. L’auteur peut lever la restriction ; les destinataires ne peuvent pas la contourner en toute sécurité.",
    },
    {
      title: "Utilisez un vrai éditeur de PDF pour de vraies modifications",
      body: "Les navigateurs et les lecteurs basiques ne modifient pas le texte — ils l’affichent simplement. L’application PDF Editor apporte des modifications structurelles au texte, aux images et aux pages sans convertir hors du format PDF, ce qui préserve la mise en page.",
    },
    {
      title: "Convertissez en Word quand vous avez besoin d’une réécriture lourde",
      body: "Si vous devez réécrire des paragraphes plutôt qu’ajuster des mots, PDF vers Word extrait le texte dans un vrai éditeur. Vous perdez une mise en page stricte mais gagnez une vraie édition en flux — mieux pour les documents qui seront de toute façon republiés.",
    },
    {
      title: "Pour les PDF numérisés, attendez-vous aux limites de l’OCR",
      body: "Modifier une numérisation implique de d’abord convertir les images en texte (OCR). Certains outils le font en ligne, d’autres non, et la qualité varie énormément avec la résolution de la numérisation. Traitez le résultat de l’OCR comme un point de départ, pas une modification finie.",
    },
    {
      title: "Les changements au niveau des pages n’ont pas besoin de « modification »",
      body: "Si vous avez seulement besoin de supprimer, réorganiser, faire pivoter ou ajouter des pages, vous n’avez pas du tout besoin d’un éditeur de texte — les outils Extraire, Réorganiser et Faire pivoter un PDF gèrent les modifications structurelles sans déverrouiller la couche de texte.",
    },
  ],
  tips: [
    "Si vous avez seulement besoin d’ajouter une signature ou de remplir un formulaire, le fichier n’a probablement pas besoin de « modification » — les parcours Signer un PDF et de remplissage de formulaire laissent le texte original intact.",
    "Certains PDF exportent chaque caractère comme une petite forme plutôt que du texte. La sélection paraît fonctionner mais copier-coller produit du charabia. C’est le pire des cas pour la modification ; le document source est la seule voie de retour réaliste.",
    "Ne faites pas confiance aux sites qui promettent de casser des mots de passe pour lever des restrictions de modification. Ils sont soit inefficaces, soit malveillants, soit les deux.",
    "Si vous êtes l’auteur et voulez activer la modification sur un fichier envoyé plus tôt, la voie la plus propre est de le réexporter sans la restriction.",
    "Pour des modifications répétées sur le même document, modifiez la source (Word, Pages, outil de design) et réexportez, au lieu de rafistoler le PDF à chaque fois.",
  ],
  mobileNote:
    "Sur un téléphone, la plupart des lecteurs natifs sont volontairement en lecture seule. L’application PDF Editor gère les modifications de texte, les remplacements d’images et la réorganisation de pages sur iOS et Android sans aplatir le fichier, pour qu’une correction rapide n’ait pas à attendre que vous retrouviez un ordinateur portable.",
  faq: [
    {
      q: "Pourquoi puis-je voir le texte mais pas cliquer dedans ?",
      a: "Soit le PDF est une numérisation (image de texte, sans caractères sous-jacents), soit votre lecteur est en lecture seule. Un vrai éditeur de PDF — comme l’application PDF Editor — permet de cliquer dans du texte modifiable.",
    },
    {
      q: "Existe-t-il un moyen de retirer les restrictions de modification ?",
      a: "Seul l’auteur original peut lever proprement les restrictions de permission. Les outils qui promettent de les retirer ne fonctionnent pas ou compromettent le fichier. Demandez à l’expéditeur une copie sans restriction.",
    },
    {
      q: "Qu’est-ce que l’OCR et quand en ai-je besoin ?",
      a: "L’OCR est le processus qui transforme des images de texte en vrai texte — nécessaire pour modifier un PDF numérisé. La qualité dépend de la numérisation ; des numérisations propres et haute résolution donnent un bien meilleur OCR que des photos de téléphone floues.",
    },
    {
      q: "Dois-je convertir en Word pour modifier ?",
      a: "Seulement si vous avez besoin de gros changements de texte. La conversion perd en fidélité de mise en page. Pour de petites modifications, un vrai éditeur de PDF préserve davantage.",
    },
    {
      q: "Puis-je modifier des pages sans toucher au texte ?",
      a: "Oui. Réorganiser, faire pivoter, extraire et supprimer des pages sont des modifications structurelles qui ne nécessitent pas d’éditeur de texte. Les outils dans le navigateur de ce site les gèrent sans rien envoyer sur un serveur.",
    },
  ],
  related: [
    { label: "PDF Editor — modifier texte et images sur mobile", path: "/pdf-editor" },
    { label: "PDF vers Word — convertir pour une édition lourde", path: "/pdf-to-word" },
    { label: "Comment modifier un PDF sur iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "Comment modifier un PDF sur Android", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
