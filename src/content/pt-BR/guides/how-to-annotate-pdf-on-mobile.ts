import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-annotate-pdf-on-mobile",
  h1: "Como fazer anotações em um PDF pelo celular",
  description:
    "Grife, comente e desenhe em PDFs pelo celular ou tablet. As ferramentas de anotação que importam e como manter as marcações legíveis.",
  updated: "2026-05-23",
  intro: [
    "Anotar um PDF é o que transforma um documento de algo que você lê em algo a que você responde — grifando a cláusula que importa, deixando um comentário para um colega, circulando o número que está errado. No celular ou no tablet, com o dedo ou com uma caneta, isso costuma ser mais natural que na mesa, porque você marca a página do jeito que marcaria o papel.",
    "Este guia cobre as ferramentas de anotação que valem a pena no celular com o app PDF Editor: grifos, comentários, desenho à mão livre e formas. Ele roda no iPhone e no Android, funciona offline e mantém o documento no seu aparelho.",
    "O objetivo não é cobrir a página de tinta — é deixar marcações que a próxima pessoa (muitas vezes você mesmo, no futuro) consiga ler e usar.",
  ],
  steps: [
    {
      title: "Abra o PDF no app PDF Editor",
      body: "Importe o documento do app Arquivos, do e-mail, do Drive ou de qualquer folha de compartilhamento. As ferramentas de anotação ficam na barra de edição.",
    },
    {
      title: "Grife as passagens principais",
      body: "Escolha o marcador, selecione uma cor e arraste sobre o texto que quer destacar. Use a cor de propósito — uma cor por tipo de anotação lê muito melhor que um arco-íris.",
    },
    {
      title: "Adicione comentários para dar contexto",
      body: "Deixe um comentário adesivo onde um grifo precisa de explicação. Os comentários mantêm o seu raciocínio preso ao ponto certo sem poluir a página.",
    },
    {
      title: "Desenhe e circule à mão livre",
      body: "Use a caneta para circular um número, sublinhar uma linha ou esboçar uma correção. Uma caneta dá traços mais limpos que o dedo, se você tiver uma.",
    },
    {
      title: "Use formas ou setas quando ajudarem",
      body: "Uma seta apontando o problema ou uma caixa em volta de uma seção comunica mais rápido que palavras. Use com moderação, para elas se destacarem.",
    },
    {
      title: "Salve e compartilhe a cópia marcada",
      body: "Exporte uma cópia com as suas anotações e devolva. Guarde o original limpo se depois você precisar de uma versão sem marcações.",
    },
  ],
  tips: [
    "Atribua significado às cores — por exemplo, amarelo para dúvidas e verde para aprovações — e a sua marcação vira algo escaneável em vez de decorativo.",
    "Uma caneta (Apple Pencil ou S Pen) transforma a anotação à mão livre. Se você tem uma, a rejeição de palma e a pressão fazem parecer marcação em papel.",
    "Comentários são melhores que espremer anotações na margem. Eles se expandem ao toque e mantêm a página legível.",
    "Não exagere nas anotações. Uma página soterrada em tinta é tão inútil quanto uma sem marca nenhuma — grife o que importa, não tudo.",
    "Guarde um original sem marcações. Anotações são ótimas para revisão, mas a próxima pessoa pode querer uma cópia limpa para marcar ela mesma.",
  ],
  mobileNote:
    "Anotar é onde o celular ou o tablet realmente ganha da mesa: você marca a página diretamente, como faria no papel. O app PDF Editor aceita grifos, comentários, desenho e formas, com suporte a caneta, tudo offline e no aparelho — a sua marcação nunca sai das suas mãos.",
  faq: [
    {
      q: "Com o que dá para anotar um PDF no celular?",
      a: "Grifos, comentários adesivos, traços à mão livre e formas como setas e caixas. O app PDF Editor oferece tudo isso no iPhone e no Android.",
    },
    {
      q: "Preciso de uma caneta?",
      a: "Não, o dedo dá conta de grifar e de marcações simples. Mas uma caneta deixa o desenho à mão livre muito mais limpo, com rejeição de palma e sensibilidade à pressão nos tablets compatíveis.",
    },
    {
      q: "Minhas anotações continuam lá se eu enviar o arquivo?",
      a: "Continuam. As anotações exportadas fazem parte do PDF e aparecem para quem abrir. Guarde um original limpo à parte se depois precisar de uma cópia sem marcações.",
    },
    {
      q: "Minhas anotações são enviadas para algum lugar?",
      a: "Não. O app PDF Editor anota no seu aparelho, então as suas notas e o documento continuam privados.",
    },
    {
      q: "Dá para remover as anotações depois?",
      a: "Dá; dentro do app você edita ou apaga as suas anotações antes de exportar. Guardar o original também permite recomeçar do zero.",
    },
  ],
  related: [
    { label: "Editor de PDF — anote pelo celular", path: "/pdf-editor" },
    { label: "Como preencher formulários PDF pelo celular", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Como editar um PDF no iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "Melhores ferramentas de PDF para estudantes", path: "/guides/best-pdf-tools-for-students" },
  ],
  parentHub: { label: "Editor de PDF", path: "/pdf-editor" },
};

export default content;
