import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-best-practices",
  h1: "Boas práticas para formulários PDF",
  description:
    "Crie formulários que as pessoas realmente terminam: rótulos claros, espaço de verdade, campos sensatos, área de assinatura evidente e uma passada de achatamento. Regras práticas para quem cria e para quem envia.",
  updated: "2026-06-01",
  intro: [
    "A função de um formulário é ser completado com exatidão e devolvido sem atrito. A maioria dos formulários que fracassa fracassa por motivos banais e corrigíveis: campos apertados, rótulos ambíguos, falta de espaço para escrever ou um layout que desmonta assim que alguém abre no celular. Um bom projeto de formulário não é sobre parecer esperto — é sobre remover todo pequeno motivo para alguém desistir ou errar.",
    "Estas boas práticas valem tanto para formulários interativos quanto para modelos planos, e tanto para uma empresa coletando dados de cadastro quanto para qualquer pessoa mandando um formulário para preencher. Elas também cobrem o lado do envio: como distribuir um formulário de modo que ele continue preenchível e volte utilizável. Nada disso é complicado; é quase tudo disciplina.",
    "Trate esta página como a referência para a qual os outros guias de formulário apontam. Se você só adotar um punhado destas práticas, escolha rótulos claros, espaçamento generoso e achatamento na devolução — essas três evitam quase toda dor de cabeça.",
  ],
  steps: [
    {
      title: "Rotule cada campo sem ambiguidade",
      body: "Cada campo deve deixar claro o que entra nele, inclusive o formato quando isso importa (estilo de data, um caractere por caixa). Rótulos ambíguos geram respostas erradas que você depois vai ter que correr atrás.",
    },
    {
      title: "Dê espaço de verdade às respostas",
      body: "Campos subdimensionados são a reclamação número um sobre formulários. Deixe mais espaço do que você acha necessário, principalmente para nomes, endereços e respostas livres, para nada ficar apertado ou cortado.",
    },
    {
      title: "Peça só o que você precisa",
      body: "Cada campo a mais reduz a taxa de conclusão e acrescenta dados que você depois terá que tratar. Corte tudo que não é realmente necessário nesta etapa. Formulários curtos voltam mais rápido e mais completos.",
    },
    {
      title: "Deixe a área de assinatura evidente",
      body: "Se for preciso assinar, dê a isso uma área clara e bem posicionada, com um campo de data ao lado. As pessoas esquecem a assinatura mais que qualquer outro campo; uma área evidente evita a devolução.",
    },
    {
      title: "Distribua e receba do jeito certo",
      body: "Mande os formulários em branco sem achatar, para os campos sobreviverem, recomende um app de PDF confiável e peça as cópias de volta achatadas, para as respostas travarem e aparecerem iguais em todo lugar.",
    },
  ],
  tips: [
    "Preencha o seu próprio formulário uma vez no celular antes de enviar — você pega na hora todo campo apertado e todo rótulo confuso.",
    "Rótulos claros, espaçamento generoso e achatamento na devolução são os três hábitos que evitam a maioria dos problemas.",
    "Não achate um formulário em branco que você vai distribuir; achatar remove os campos de que quem recebe precisa.",
    "Case os formatos dos campos com o que você vai fazer com os dados — formatos consistentes de data e número poupam limpeza depois.",
    "Mantenha as expectativas honestas: a aparência dos formulários varia entre leitores, então um modelo plano ou uma devolução achatada é o mais confiável em geral.",
  ],
  mobileNote:
    "Como a maioria das pessoas preenche formulários no celular, teste o seu no app PDF Editor pelo celular antes de mandar: confirme que os campos são tocáveis, ou que um modelo plano tem espaço para texto digitado com o dedo, que a área de assinatura é alcançável e que a exportação achatada fica bonita.",
  faq: [
    {
      q: "O que torna um formulário PDF fácil de preencher?",
      a: "Rótulos claros e sem ambiguidade; espaço generoso para cada resposta; só os campos realmente necessários; e uma área de assinatura evidente. Depois teste você mesmo no celular, já que é ali que a maioria vai completar.",
    },
    {
      q: "Devo enviar formulários interativos ou planos?",
      a: "O interativo fica mais organizado quando você consegue construí-lo bem, mas um modelo plano limpo funciona em qualquer leitor. Escolha o que escolher, rótulos claros e espaçamento de verdade importam mais que o tipo de campo.",
    },
    {
      q: "Por que não devo achatar um formulário em branco antes de enviar?",
      a: "Achatar funde a camada de campos na página, removendo os campos interativos. Quem recebe não teria onde digitar. Só achate formulários preenchidos, na devolução.",
    },
    {
      q: "Como evito que as pessoas esqueçam a assinatura?",
      a: "Dê à assinatura uma área clara e bem posicionada, com um campo de data ao lado. Assinatura esquecida é a causa mais comum de formulários que voltam, e uma área evidente resolve boa parte.",
    },
    {
      q: "Quantos campos são demais?",
      a: "Qualquer campo desnecessário nesta etapa já é demais — cada um reduz a taxa de conclusão. Peça o mínimo agora e colete o resto depois, se você realmente precisar.",
    },
  ],
  related: [
    { label: "Como criar um PDF preenchível", path: "/guides/how-to-create-a-fillable-pdf" },
    { label: "Como preencher um formulário PDF", path: "/guides/how-to-fill-out-a-pdf-form" },
    { label: "Como compartilhar um formulário PDF", path: "/guides/how-to-share-a-pdf-form" },
    { label: "Problemas de formatação em formulários PDF", path: "/guides/pdf-form-formatting-issues" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
