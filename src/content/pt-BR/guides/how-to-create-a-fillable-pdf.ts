import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-a-fillable-pdf",
  h1: "Como criar um PDF preenchível",
  description:
    "O que é preciso de fato para fazer um PDF que as pessoas consigam preencher — campos interativos ou um modelo plano simples — e qual caminho combina com as ferramentas que você tem.",
  updated: "2026-06-01",
  intro: [
    "Existem dois caminhos honestos para fazer um PDF que as pessoas consigam preencher, e eles são bem diferentes em esforço e resultado. O caminho caprichado é um formulário interativo de verdade: um PDF com campos reais — caixas de texto, caixas de seleção, listas suspensas — em que quem recebe toca e digita. O caminho simples é um modelo plano: um PDF limpo e bem espaçado, com linhas e rótulos claros, que as pessoas completam acrescentando texto por cima.",
    "Vale ser direto: construir campos interativos de verdade geralmente exige um programa dedicado à criação de formulários, e o resultado ainda pode se comportar de formas diferentes em cada leitor de PDF. Já um modelo plano pode ser feito em quase qualquer editor de documentos e funciona bem em todo lugar — ao custo de quem recebe ter um pouco mais de trabalho para posicionar as respostas.",
    "Este guia cobre as duas abordagens, quando cada uma faz sentido e como projetar qualquer uma delas para o formulário final ser fácil de completar. Ele não vai fingir que uma ferramenta de navegador conjura campos interativos complexos que ela não faz — em vez disso, aponta o método que combina com o que você realmente tem em mãos.",
  ],
  steps: [
    {
      title: "Comece com um layout limpo e bem espaçado",
      body: "Desenhe o formulário primeiro em um editor de documentos: rótulos claros, espaço generoso para as respostas, caixas de seleção evidentes e uma linha de assinatura. Um bom espaçamento importa tanto na versão interativa quanto na plana.",
    },
    {
      title: "Decida: campos interativos ou modelo plano",
      body: "Se as pessoas vão preencher com frequência e você quer a experiência organizada de tocar e digitar, mire nos campos interativos. Se precisa de algo rápido que funcione em qualquer leitor, o modelo plano é a escolha pragmática.",
    },
    {
      title: "Para um modelo plano, exporte em PDF",
      body: "Exporte o documento já diagramado direto em PDF. As linhas e os rótulos viram a página; quem recebe acrescenta o texto por cima com qualquer editor de PDF. Funciona a partir de quase qualquer ferramenta que você já usa.",
    },
    {
      title: "Para campos interativos, use um programa de criação de formulários",
      body: "Criar campos de texto, caixas de seleção e listas suspensas de verdade exige um programa feito para isso. Acrescente cada campo sobre o layout, dê um nome claro e defina o tipo. Conte com testar o resultado em mais de um leitor.",
    },
    {
      title: "Teste o formulário antes de distribuir",
      body: "Abra o formulário do jeito que as pessoas vão abrir — no celular e no computador. Preencha do começo ao fim você mesmo. Corrija qualquer campo pequeno demais, mal rotulado ou fora da linha antes de mandar.",
    },
  ],
  tips: [
    "Um modelo plano limpo que preenche bem em qualquer lugar costuma ganhar de um formulário interativo sofisticado que quebra em alguns leitores.",
    "Deixe mais espaço de resposta do que você acha necessário — campos apertados são a reclamação número um sobre formulários.",
    "Dê nomes significativos aos campos interativos; isso ajuda tanto no preenchimento quanto em qualquer processamento posterior das respostas.",
    "Evite recursos avançados de formulário dinâmico a menos que você saiba que os programas de quem recebe suportam — muitos leitores de PDF não suportam.",
    "Seja qual for o caminho, preencha o formulário você mesmo primeiro; assim você pega os detalhes desconfortáveis que nenhuma revisão de layout mostra.",
  ],
  mobileNote:
    "Quem recebe consegue completar o seu formulário no celular com o app PDF Editor, seja ele interativo ou plano — ele entra nos campos reais e deixa posicionar texto em modelos planos. Se você está montando um modelo plano, teste no app pelo celular para confirmar que os espaços de resposta cabem um dedo.",
  faq: [
    {
      q: "Dá para criar um PDF preenchível de graça?",
      a: "Dá para fazer um modelo plano preenchível de graça em quase qualquer editor de documentos, exportando em PDF — quem recebe acrescenta o texto por cima. Construir campos interativos de verdade normalmente exige um programa dedicado à criação de formulários.",
    },
    {
      q: "Qual é a diferença entre PDF preenchível interativo e plano?",
      a: "Um PDF interativo tem campos reais em que as pessoas tocam e digitam. Um modelo plano é uma página limpa em que cada um posiciona o próprio texto. O interativo fica mais organizado; o plano é mais simples de fazer e funciona em qualquer leitor.",
    },
    {
      q: "Formulários PDF interativos funcionam em todo lugar?",
      a: "Nem sempre. Campos padrão têm suporte amplo, mas a aparência do formulário e os recursos avançados podem variar entre leitores de PDF, e formulários dinâmicos podem nem abrir em alguns aplicativos. Teste antes de depender deles.",
    },
    {
      q: "Qual caminho eu escolho?",
      a: "Se o formulário vai ser muito reutilizado e você quer uma experiência caprichada, invista nos campos interativos. Se precisa de algo rápido e confiável, um modelo plano bem projetado é a aposta mais segura.",
    },
    {
      q: "Como deixo um modelo plano fácil de preencher?",
      a: "Use rótulos claros, bastante espaço em branco, linhas ou caixas visíveis para cada resposta e uma área de assinatura evidente. Depois preencha uma vez para confirmar que tudo tem espaço.",
    },
  ],
  related: [
    { label: "O que é um formulário PDF?", path: "/guides/what-is-a-pdf-form" },
    { label: "Como funcionam os formulários PDF", path: "/guides/how-pdf-forms-work" },
    { label: "Boas práticas para formulários PDF", path: "/guides/pdf-form-best-practices" },
    { label: "Como compartilhar um formulário PDF", path: "/guides/how-to-share-a-pdf-form" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
