import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-pdf-forms-work",
  h1: "Como funcionam os formulários PDF",
  description:
    "Por dentro, um formulário PDF é um conjunto de campos interativos sobre a página ou uma imagem plana sem nenhum. Como cada um é construído e por que isso muda o preenchimento.",
  updated: "2026-06-01",
  intro: [
    "Ajuda muito entender o que acontece dentro de um formulário PDF, porque isso explica quase toda esquisitice que você vai encontrar. Uma página de PDF é um layout fixo — texto, linhas e imagens posicionados em coordenadas exatas. Um formulário acrescenta uma camada separada sobre esse layout: campos interativos, cada um deles uma caixinha que sabe se é um campo de texto, uma caixa de seleção, uma lista suspensa ou uma área de assinatura.",
    "Quando o formulário tem essa camada de campos, o seu leitor de PDF desenha caixas editáveis onde o autor as colocou. Você digita e o leitor guarda a sua resposta dentro do campo, em vez de gravá-la na página. É essa separação que explica por que as respostas preenchidas às vezes podem ser apagadas, editadas ou simplesmente não salvam — elas vivem na camada de campos, não na página, até você achatar tudo.",
    "Formulários planos não têm camada de campos nenhuma. São só a imagem da página, então não há nada interativo para digitar; você acrescenta os seus próprios objetos de texto por cima. Este guia percorre como os dois tipos são construídos, o que o achatamento faz e por que o mesmo formulário se comporta de formas diferentes em aplicativos diferentes.",
  ],
  steps: [
    {
      title: "A camada da página: fixa e definitiva",
      body: "Todo PDF tem uma camada de página com texto e gráficos travados em posições exatas. É isso que faz um PDF parecer idêntico em qualquer lugar. Em um formulário plano, as linhas das perguntas e os rótulos moram inteiramente aqui.",
    },
    {
      title: "A camada de campos: o interativo por cima",
      body: "Formulários interativos acrescentam uma camada de campos acima da página — entradas de texto, caixas de seleção, botões de opção, listas suspensas, campos de assinatura. Cada campo tem um nome e um tipo que o leitor entende.",
    },
    {
      title: "Preenchimento: a resposta guardada no campo",
      body: "Quando você digita em um campo interativo, a sua resposta fica guardada nele, não fundida à página. É por isso que dá para apagar e redigitar, e por isso que outro leitor pode exibir a resposta um pouco diferente.",
    },
    {
      title: "Salvar: preservar os valores dos campos",
      body: "Salvar um formulário preenchido guarda os valores dos campos dentro do arquivo. Alguns leitores básicos só deixam imprimir, não salvar os dados — o motivo clássico de as respostas sumirem quando você reabre o arquivo.",
    },
    {
      title: "Achatar: fundir os campos na página",
      body: "Achatar empurra os valores dos campos para dentro da camada da página, transformando-os em conteúdo permanente. Depois de achatado, nada disso pode ser editado ou apagado — útil logo antes de devolver o formulário.",
    },
  ],
  tips: [
    "Pense em um formulário interativo como uma folha transparente de caixas editáveis colocada sobre uma página impressa. Achatar cola essa folha de vez.",
    "Como os valores dos campos são separados da página, o mesmo formulário pode aparecer um pouco diferente em cada leitor — fontes e tamanhos de campo nem sempre batem.",
    "Se as respostas ficam sumindo, a camada de campos não está sendo salva. Use uma ferramenta que grave os valores no arquivo, ou achate antes de fechar.",
    "Alguns formulários avançados (os chamados XFA, ou formulários dinâmicos) usam uma estrutura mais complexa que muitos leitores não suportam por completo — são os que mais dão problema.",
    "Formulários planos não têm camada de campos nenhuma, então nunca perdem dados como os interativos podem perder — o seu texto simplesmente fica na página.",
  ],
  mobileNote:
    "O app PDF Editor lê a camada de campos do formulário ao abrir, então os campos interativos já ficam tocáveis. Em formulários planos, sem camada de campos, ele deixa você acrescentar texto e marcações direto na página e exportar — e dá para achatar o resultado, travando as respostas antes de enviar.",
  faq: [
    {
      q: "Do que são feitos os campos de um formulário PDF?",
      a: "São uma camada de objetos interativos — caixas de texto, caixas de seleção, botões de opção, listas suspensas e campos de assinatura — colocada sobre o layout fixo da página, cada um com nome e tipo que o leitor reconhece.",
    },
    {
      q: "Por que as minhas respostas às vezes somem?",
      a: "Os valores dos campos ficam guardados separados da página. Se o seu leitor só imprime em vez de salvar os dados, ou se você não salva direito, a camada de campos não é gravada no arquivo e as respostas se perdem.",
    },
    {
      q: "O que significa achatar um formulário PDF?",
      a: "Achatar funde os valores dos campos na própria página, tornando-os permanentes. O formulário deixa de ser editável, mas as respostas aparecem e imprimem igual em qualquer lugar.",
    },
    {
      q: "O que é um AcroForm?",
      a: "AcroForm é o tipo padrão e amplamente suportado de formulário PDF interativo. Existe também um tipo dinâmico mais complexo (XFA) que muitos leitores tratam mal, e é por isso que alguns formulários só funcionam em programas específicos.",
    },
    {
      q: "Por que o mesmo formulário fica diferente em dois aplicativos?",
      a: "Porque cada leitor desenha a camada de campos do seu jeito. A aparência do formulário pode variar entre leitores de PDF, principalmente nas fontes e no tamanho dos campos. Achatar antes de compartilhar evita surpresas.",
    },
  ],
  related: [
    { label: "O que é um formulário PDF?", path: "/guides/what-is-a-pdf-form" },
    { label: "Como salvar um formulário PDF preenchido", path: "/guides/how-to-save-a-filled-pdf-form" },
    { label: "Problemas de compatibilidade de formulários PDF", path: "/guides/pdf-form-compatibility-problems" },
    { label: "Editor de PDF — preencha no celular", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
