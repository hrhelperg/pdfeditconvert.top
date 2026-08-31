import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-font-problems",
  h1: "Problemas de fonte em formulários PDF",
  description:
    "Texto do campo grande demais, pequeno demais ou encolhendo enquanto você digita? As manias de fonte próprias dos campos de formulário — tamanho automático, substituição, corte — e como conseguir respostas legíveis.",
  updated: "2026-06-01",
  intro: [
    "Campos de formulário têm um comportamento de fonte próprio, separado do resto do PDF, e ele gera um conjunto específico de dores de cabeça. Texto que encolhe conforme você digita, respostas que ficam enormes em um campo e minúsculas no seguinte, caracteres cortados em cima ou embaixo do campo, ou uma fonte diferente da usada nos rótulos do formulário. São manias de fonte de campo, não problemas gerais de fonte em PDF — e a maioria tem a ver com a configuração do campo.",
    "O maior culpado é o tamanho automático. Muitos campos são configurados para encolher o texto sozinhos, para que respostas longas ainda caibam, e é por isso que o seu texto diminui quanto mais você escreve. Outros casos vêm de a fonte do campo não estar incorporada, o que faz alguns leitores substituí-la, ou de um campo simplesmente baixo demais para o tamanho da fonte, cortando os caracteres.",
    "Este guia cobre os problemas de fonte específicos de campos de formulário, como reconhecer cada um e o que mudar para conseguir respostas legíveis e consistentes. Para problemas de fonte no documento inteiro, e não nos campos, o guia geral de fontes em PDF vai mais longe.",
  ],
  steps: [
    {
      title: "Reconheça o encolhimento por tamanho automático",
      body: "Se o texto do campo diminui conforme você acrescenta caracteres, o campo usa tamanho automático para fazer tudo caber. É proposital, mas pode deixar respostas longas minúsculas. Seja conciso ou, se o formulário for seu, defina um tamanho fixo.",
    },
    {
      title: "Corrija tamanhos inconsistentes entre campos",
      body: "Respostas grandes em um campo e pequenas em outro normalmente significam que cada campo tem um tamanho de fonte diferente. Se o formulário é seu, padronize o tamanho da fonte dos campos para todas as respostas combinarem.",
    },
    {
      title: "Resolva caracteres cortados",
      body: "Se as letras estão cortadas em cima ou embaixo, o campo é baixo demais para o tamanho da fonte. Aumente o campo ou reduza a fonte (em um formulário que você controla), ou aceite um tamanho menor ao preencher um que não é seu.",
    },
    {
      title: "Lide com fontes substituídas",
      body: "Se o texto do campo aparece em uma fonte diferente da esperada, a fonte pretendida não está incorporada e o leitor substituiu por outra. Incorporar a fonte dos campos ao montar o formulário mantém tudo consistente entre leitores.",
    },
    {
      title: "Achate para travar a aparência",
      body: "Quando as suas respostas estiverem do jeito certo, achate o formulário. Achatar fixa o texto dos campos na página, então tamanho e fonte aparecem iguais em qualquer lugar, independente do leitor de quem recebe.",
    },
  ],
  tips: [
    "O tamanho automático é o motivo de sempre para o texto encolher enquanto você digita — respostas concisas continuam legíveis, ou defina um tamanho fixo nos formulários que você monta.",
    "Se você está criando o formulário, padronize os tamanhos de fonte dos campos para as respostas não saírem uma colcha de retalhos.",
    "Caracteres cortados significam que o campo é baixo demais para a fonte; redimensione o campo ou a fonte em um formulário que você controla.",
    "Achate antes de enviar para as fontes e os tamanhos dos campos não mudarem na tela de quem recebe.",
    "A aparência dos campos varia entre leitores, então um resultado fixo, com fonte incorporada e achatado é o mais consistente.",
  ],
  mobileNote:
    "No celular, o app PDF Editor deixa você posicionar texto em formulários planos no tamanho que escolher, contornando o tamanho automático por completo, e achatar o resultado para travar fonte e tamanho. Em campos interativos, respostas concisas evitam o encolhimento que deixa entradas longas difíceis de ler.",
  faq: [
    {
      q: "Por que o texto do meu formulário encolhe enquanto digito?",
      a: "O campo usa tamanho automático, que encolhe o texto para respostas longas ainda caberem. É um comportamento proposital. Seja conciso para manter a legibilidade, ou defina um tamanho fixo se o formulário for seu.",
    },
    {
      q: "Por que as minhas respostas aparecem em tamanhos diferentes?",
      a: "Provavelmente cada campo tem o seu próprio tamanho de fonte definido. Em um formulário que você montou, padronize o tamanho; em um que você não montou, os tamanhos já estão gravados nos campos.",
    },
    {
      q: "Por que os caracteres nos campos do formulário saem cortados?",
      a: "O campo é baixo demais para o tamanho da fonte e corta as letras. Aumente o campo ou reduza a fonte em um formulário que você controla, ou use um tamanho menor ao preencher um que não é seu.",
    },
    {
      q: "Por que a fonte do campo parece diferente da dos rótulos?",
      a: "A fonte pretendida do campo não está incorporada, então o seu leitor substituiu por outra. Incorporar a fonte dos campos ao criar o formulário mantém a consistência entre leitores diferentes.",
    },
    {
      q: "Qual é a diferença em relação aos problemas gerais de fonte em PDF?",
      a: "Aqui o assunto são as fontes dentro dos campos — tamanho automático, tamanho por campo, corte. O guia geral de fontes em PDF cobre fontes ausentes ou substituídas no documento inteiro.",
    },
  ],
  related: [
    { label: "Como resolver problemas de fonte em PDF", path: "/guides/how-to-fix-pdf-font-issues" },
    { label: "Problemas de formatação em formulários PDF", path: "/guides/pdf-form-formatting-issues" },
    { label: "Boas práticas para formulários PDF", path: "/guides/pdf-form-best-practices" },
    { label: "Corrigir erros de formulário PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
