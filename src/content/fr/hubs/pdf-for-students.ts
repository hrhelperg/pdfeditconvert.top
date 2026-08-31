import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-students",
  hero: {
    eyebrow: "PDF pour les étudiants",
    h1: "PDF pour les étudiants — notes de cours, surlignage et fiches de révision",
    highlight: "fiches de révision",
    lead: "Annotez les diapositives de cours, surlignez vos lectures, fusionnez des articles de recherche, numérisez des pages de manuel et signez des formulaires — depuis le téléphone ou la tablette que vous avez déjà.",
    primaryCta: { label: "Ouvrir l’application", href: SITE.app.appStore },
  },
  problem: {
    heading: "Pourquoi le PDF reste au centre du travail des étudiants",
    paragraphs: [
      "Les enseignants publient leurs diapositives en PDF. Les recueils de textes arrivent en PDF. Les consignes de devoirs sont des PDF. Les plans de cours sont des PDF. Pourtant, la visionneuse par défaut du téléphone ne permet ni de surligner, ni d’annoter, ni d’organiser correctement ces documents — et la solution de repli la plus courante consiste à faire des captures d’écran dans une application de notes, ce qui fait perdre la recherche de texte, la structure et la possibilité de retrouver la source.",
      "Un vrai éditeur de PDF mobile permet de traiter ses lectures comme on traiterait un manuel — surlignages, notes en marge, signets — tout en gardant la possibilité de rechercher du texte et de partager le document. Les mêmes lectures annotées s’ouvrent sur tous les appareils : le travail fait dans le bus est encore là une fois installé à la bibliothèque.",
      "Associée à un stylet sur une tablette, cette méthode peut remplacer la plupart des prises de notes manuscrites sur les supports de cours. Le coût se limite au prix de l’application (gratuite pour l’essentiel) et au temps passé à la configurer, une seule fois.",
    ],
  },
  features: {
    heading: "Conçu pour les sessions de révision",
    items: [
      {
        icon: "Highlighter",
        title: "Surligner et annoter",
        body: "Surlignage jaune, notes à main levée, commentaires, soulignements — exactement ce que vous feriez sur papier, mais consultable par recherche.",
      },
      {
        icon: "Bookmark",
        title: "Signets et sommaire",
        body: "Marquez les chapitres ou les sections auxquels vous reviendrez. Passez de l’un à l’autre d’un simple toucher au moment de rédiger une dissertation.",
      },
      {
        icon: "Combine",
        title: "Fusionner les lectures",
        body: "Regroupez les articles de la semaine en un seul document pour les lire hors connexion dans le train, l’avion ou les transports.",
      },
      {
        icon: "ScanLine",
        title: "Numériser des pages de manuel",
        body: "Capturez des pages de livres physiques sous forme de PDF consultables. Utile pour citer un passage dans un devoir quand vous n’avez que l’exemplaire papier.",
      },
      {
        icon: "FileSignature",
        title: "Signer des formulaires instantanément",
        body: "Dossiers de bourse, feuilles de présence, confirmations d’inscription — signez et renvoyez sans imprimer.",
      },
      {
        icon: "Layers",
        title: "Organiser par matière",
        body: "Regroupez les documents par cours. Conservez-les tout au long du semestre sans perdre vos annotations.",
      },
    ],
  },
  steps: {
    heading: "Une méthode de travail simple",
    items: [
      {
        title: "Rassemblez les lectures de la semaine",
        body: "Téléchargez ou partagez chaque PDF vers PDF Editor depuis le portail de votre établissement, votre plateforme de cours ou votre messagerie.",
      },
      {
        title: "Fusionnez-les en un seul fichier par semaine et par cours",
        body: "Utilisez l’outil Fusionner pour créer « Semaine 3 — lectures microéconomie.pdf » et le lire hors connexion.",
      },
      {
        title: "Annotez au fil de la lecture",
        body: "Surlignez les passages importants, ajoutez des notes en marge, laissez des commentaires là où vous avez des questions. Les annotations s’enregistrent directement sur la page.",
      },
      {
        title: "Réutilisez vos surlignages en rédigeant",
        body: "Revenez aux passages surlignés depuis le panneau des signets au moment de citer vos sources. Le texte sous le surlignage reste sélectionnable et copiable.",
      },
      {
        title: "Numérisez et regroupez vos notes manuscrites",
        body: "Quand vous avez pris des notes sur papier, numérisez-les dans la même bibliothèque PDF Editor pour que tout se retrouve au même endroit, consultable par recherche.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Réviser n’importe où",
    body: "Amphi, bibliothèque, train, café — un étudiant lit rarement assis à un bureau. Un éditeur de PDF pensé pour le mobile veut dire que la même copie annotée est entre vos mains où que vous soyez. L’heure autrefois perdue à attendre un bus devient du temps de lecture productif.",
  },
  faq: [
    {
      q: "L’application est-elle gratuite pour les étudiants ?",
      a: "Oui. L’annotation, la fusion, la numérisation et la signature sont gratuites, sans limite quotidienne. Certaines fonctionnalités Pro (OCR par lot, chiffrement avancé) sont payantes, mais la version gratuite couvre tout ce dont un étudiant a généralement besoin.",
    },
    {
      q: "Mes surlignages se synchronisent-ils entre appareils ?",
      a: "Si vous enregistrez le fichier sur iCloud Drive, Google Drive ou tout autre service cloud, les modifications apparaissent partout où le même fichier est ouvert. Les fichiers enregistrés uniquement en local restent sur l’appareil où ils ont été modifiés.",
    },
    {
      q: "Puis-je numériser légalement une page de manuel ?",
      a: "Pour un usage d’étude personnel, c’est généralement le cas selon la réglementation applicable, qui autorise en principe de courts extraits à des fins d’étude. Soyez en revanche prudent avec la diffusion de copies numérisées — c’est une question différente, souvent non autorisée.",
    },
    {
      q: "L’application fonctionne-t-elle bien sur iPad et sur les tablettes Android ?",
      a: "Oui. Les tablettes compatibles avec un stylet (Apple Pencil, S Pen) rendent l’annotation bien plus proche du papier qu’un téléphone utilisé uniquement du bout du doigt. Si vous avez une tablette, réservez-la à vos sessions de lecture.",
    },
    {
      q: "Puis-je exporter mes annotations ?",
      a: "Oui. Le PDF annoté peut être partagé tel quel (annotations intégrées) ou aplati en PDF final. Vous pouvez aussi extraire uniquement le texte surligné pour vos citations.",
    },
  ],
  related: [
    {
      label: "Comment partager des notes de cours en PDF",
      path: "/guides/how-to-share-study-notes-as-pdf",
    },
    {
      label: "Meilleure application PDF pour les étudiants",
      path: "/guides/best-pdf-app-for-students",
    },
    { label: "Numériser en PDF", path: "/scan-to-pdf" },
  ],
  appCta: {
    heading: "Révisez avec une vraie boîte à outils PDF.",
    sub: "Gratuit sur iOS et Android. Les annotations se synchronisent via iCloud ou Drive.",
  },
};

export default content;
