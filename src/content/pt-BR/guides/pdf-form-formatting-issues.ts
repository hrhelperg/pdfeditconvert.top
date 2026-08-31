import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-formatting-issues",
  h1: "Problemas de formatação em formulários PDF",
  description:
    "Campos desalinhados, respostas transbordando, o formulário diferente na tela de outra pessoa? Os problemas de layout que variam por leitor e como conseguir um resultado consistente.",
  updated: "2026-06-01",
  intro: [
    "Um formulário pode ficar perfeito na sua tela e chegar torto na de outra pessoa — campos deslocados das linhas, respostas transbordando das caixas, caixas de seleção desalinhadas, o layout inteiro sutilmente movido. Como os campos de formulário são desenhados por cada leitor em vez de estarem fixados na página, a aparência exata pode variar, e é daí que vem a maioria das reclamações de formatação.",
    "Isso é diferente dos problemas gerais de formatação de PDF, que normalmente vêm das margens e do espaçamento do documento de origem. Problemas de formatação de formulário são sobre a camada de campos: como os campos se posicionam em relação à página, como as respostas cabem dentro deles e com que consistência tudo isso é desenhado em aplicativos diferentes. As soluções também são específicas de formulário.",
    "Este guia cobre os problemas comuns de layout de formulário, por que eles acontecem e a cura mais confiável — achatar — que faz o formulário aparecer igual em todo lugar.",
  ],
  steps: [
    {
      title: "Confirme que é diferença de leitor",
      body: "Abra o formulário em dois apps de PDF diferentes. Se o layout mudar entre eles, o problema é o desenho dos campos, não o arquivo — cada leitor está desenhando os campos de um jeito um pouco diferente.",
    },
    {
      title: "Resolva respostas que transbordam dos campos",
      body: "Se o texto passa da borda de um campo, o campo é pequeno demais ou a resposta é longa demais. Em um formulário que você controla, aumente o campo; ao preencher, mantenha as respostas dentro do espaço visível ou use o tamanho automático.",
    },
    {
      title: "Realinhe campos fora das linhas",
      body: "Campos que ficam acima ou abaixo dos rótulos normalmente significam que as posições dos campos não batem com a página por baixo. Se o formulário é seu, reposicione os campos; se não, acrescentar texto por cima pode ser mais confiável que brigar com o campo desalinhado.",
    },
    {
      title: "Achate para um resultado consistente",
      body: "Achatar funde os campos na página, fixando posição e aparência. Depois disso, o formulário aparece idêntico em qualquer leitor — a cura mais confiável para o layout que varia.",
    },
    {
      title: "Prefira um modelo plano quando a consistência é crítica",
      body: "Se um formulário precisa ficar igual para todo mundo, um modelo plano bem projetado (sem camada de campos interativa) evita por completo as diferenças de desenho entre leitores.",
    },
  ],
  tips: [
    "Abra o formulário em dois aplicativos para confirmar que o problema de layout é desenho do leitor, e não arquivo danificado.",
    "Achatar é a correção mais confiável — trava posição e aparência dos campos na página para todo leitor.",
    "Ao preencher um formulário com campos desalinhados, posicionar texto por cima costuma cair mais certeiro do que brigar com o campo.",
    "Se você está criando um formulário que precisa ficar idêntico em todo lugar, um modelo plano contorna as diferenças de desenho dos campos.",
    "A aparência dos formulários varia entre leitores de PDF por natureza, então “está errado na tela dele” normalmente é desenho, não corrupção.",
  ],
  mobileNote:
    "O app PDF Editor deixa você achatar um formulário preenchido para fixar o layout antes de enviar, então ele não se desloca na tela de quem recebe. Em formulários com campos desconfortáveis, também dá para posicionar texto com precisão na página e achatar — um resultado consistente em qualquer aparelho.",
  faq: [
    {
      q: "Por que o meu formulário PDF fica diferente na tela de outra pessoa?",
      a: "Os campos de formulário são desenhados por cada leitor, então a posição e a aparência podem variar entre aplicativos. Achatar o formulário funde os campos na página para ele ficar idêntico em todo lugar.",
    },
    {
      q: "Por que as minhas respostas transbordam das caixas dos campos?",
      a: "O campo é pequeno demais para a resposta, ou a resposta é longa demais. Aumente o campo em um formulário que você controla, mantenha as respostas dentro do espaço visível, ou conte com o tamanho automático para encaixá-las.",
    },
    {
      q: "Como corrijo campos que ficam fora das linhas?",
      a: "As posições dos campos não batem com a página por baixo. Reposicione os campos se o formulário for seu; se não for, posicionar o seu texto direto na página costuma ser mais confiável que o campo desalinhado.",
    },
    {
      q: "Qual é a forma mais confiável de manter o layout do formulário consistente?",
      a: "Achatar. Achatar fixa a aparência dos campos na página, então tudo é desenhado igual em qualquer leitor. Nos formulários que você cria, um modelo plano evita o problema desde o começo.",
    },
    {
      q: "Qual é a diferença em relação aos problemas gerais de formatação de PDF?",
      a: "Aqui o assunto é a camada de campos — alinhamento, transbordo, desenho pelo leitor. Problemas gerais de formatação de PDF normalmente vêm das margens e do espaçamento do documento de origem, não dos campos.",
    },
  ],
  related: [
    { label: "Como corrigir problemas de formatação em PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Problemas de fonte em formulários PDF", path: "/guides/pdf-form-font-problems" },
    { label: "Problemas de compatibilidade de formulários PDF", path: "/guides/pdf-form-compatibility-problems" },
    { label: "Boas práticas para formulários PDF", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
