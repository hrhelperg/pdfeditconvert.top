import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "freelancers",
  h1: "PDF Editor pour les freelances — devis et documents signés",
  description:
    "Les méthodes que les freelances adoptent : propositions, contrats signés et factures, entièrement depuis un téléphone.",
  intro: [
    "Un freelance gère l’essentiel de son activité depuis un téléphone. Pas de bureau, pas de service informatique, pas d’imprimante partagée. Le même flux de travail PDF qui mobilise trois applications et un abonnement de signature électronique dans une équipe classique doit souvent tenir dans une seule application, rapidement, entre deux heures facturables.",
    "Chaque minute perdue à se battre avec un outil est une minute qui ne sera pas facturée. Un éditeur de PDF qui fonctionne tout simplement — sans envoi de fichier, sans création de compte, sans abonnement mensuel pour un outil utilisé deux fois par semaine — fait partie de ces investissements discrets qui se rentabilisent sur la durée.",
    "Voici les opérations précises qui rendent le mode de vie du freelance tenable depuis un téléphone : rapides, confidentielles, et sans le poids d’un abonnement.",
  ],
  workflows: [
    {
      title: "Envoyer une proposition soignée en PDF",
      body: "Exportez votre proposition depuis Notion, Pages ou Google Docs en PDF. Signez-la, joignez-la à votre e-mail, envoyez. Le destinataire voit exactement ce que vous avez voulu montrer.",
    },
    {
      title: "Signer les contrats clients depuis son téléphone",
      body: "Dessinez votre signature une fois, puis réutilisez-la sur tous les contrats suivants. Fini le « je vous réponds quand je serai devant mon ordinateur ».",
    },
    {
      title: "Numériser ses reçus de dépenses au fil de l’eau",
      body: "Café d’affaires, course en taxi, achat de matériel — numérisez sur le moment. Les PDF obtenus sont consultables par recherche et compatibles avec les logiciels de comptabilité.",
    },
    {
      title: "Facturer en PDF, systématiquement",
      body: "Quel que soit votre outil de facturation, exportez en PDF avant d’envoyer. Cela réduit le risque de modification et fait plus professionnel qu’un DOCX.",
    },
    {
      title: "Regrouper les livrables à la clôture d’un projet",
      body: "Réunissez le brief final, l’accord signé et les recherches complémentaires dans un seul PDF d’archive à la fin d’un projet.",
    },
  ],
  appPitch:
    "PDF Editor est le cheval de bataille discret du freelance — il ne remplace pas vos outils de design ou de facturation, il rend simplement la couche documentaire sans effort. Gratuit, natif, sur l’appareil. Disponible sur iOS et Android.",
  related: [
    { label: "Signer un PDF depuis son téléphone", path: "/sign-pdf" },
    { label: "Méthodes PDF pour l’entreprise", path: "/pdf-for-business" },
    { label: "Cas d’usage — télétravail", path: "/use-cases/remote-work" },
  ],
};

export default content;
