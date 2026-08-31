import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-working",
  h1: "Formulário PDF não funciona? Comece por aqui",
  description:
    "Um formulário PDF dando trabalho tem um punhado de causas de sempre. Uma triagem rápida para descobrir em qual você esbarrou — campos sumidos, não digita, não salva, somente leitura — e onde resolver.",
  updated: "2026-06-01",
  intro: [
    "“Meu formulário PDF não funciona” cobre muitos problemas diferentes, e a solução depende inteiramente de qual deles você tem. O formulário não deixa digitar, os campos sumiram, as respostas não salvam, ele abre somente leitura ou simplesmente se comporta de forma estranha. Cada um tem causa e solução específicas — o truque é nomear o sintoma primeiro.",
    "Esta página é uma triagem. Em vez de uma solução única gigante, ela ajuda você a identificar em segundos qual problema está enfrentando e aponta o guia que trata dele. A maioria dos problemas com formulários nem é defeito no arquivo; é um desencontro entre o formulário e o leitor em que você o abriu, ou um ajuste deliberado como a proteção somente leitura.",
    "Percorra as verificações rápidas abaixo. Elas vão dizer se você está diante de um formulário plano, de um problema de leitor, de um problema de salvamento, de uma proteção ou de uma questão de compatibilidade — e para onde ir depois.",
  ],
  steps: [
    {
      title: "Você consegue ver algum campo?",
      body: "Se os campos estão sumidos ou a página parece incompleta, é um problema de campos ausentes — normalmente um leitor que não desenha a camada de campos. Veja o guia de campos sumidos.",
    },
    {
      title: "Os campos estão lá, mas não dá para digitar?",
      body: "Se você toca em um campo e nada acontece, o formulário pode ser plano, estar aberto no leitor errado ou ser somente leitura. O guia de “não consigo digitar” ensina a diferenciar.",
    },
    {
      title: "As respostas somem depois de salvar?",
      body: "Se você preenche, salva, reabre e está tudo em branco de novo, os valores dos campos não estão sendo gravados no arquivo. O guia de “não salva” cobre como guardar dados de formulário com segurança.",
    },
    {
      title: "O formulário abre somente leitura ou bloqueado?",
      body: "Se tudo está apagado ou você vê um aviso de protegido, o formulário está protegido contra edição. O guia de somente leitura explica as suas opções sem burlar proteções que não devem ser burladas.",
    },
    {
      title: "Funciona em um aplicativo e não em outro?",
      body: "Se o formulário se comporta em um programa e quebra em outro, é questão de compatibilidade — possivelmente um tipo avançado de formulário. Veja o guia de compatibilidade ou a lista consolidada de correções.",
    },
  ],
  tips: [
    "Nomeie o sintoma antes de tentar soluções — a resposta certa depende inteiramente do problema que você tem.",
    "O teste isolado mais rápido para vários casos: abra o mesmo arquivo em um app de PDF dedicado. Isso separa na hora “formulário quebrado” de “leitor ruim”.",
    "Um formulário que não colabora raramente está realmente quebrado; a maioria das causas é desencontro de leitor ou ajuste deliberado.",
    "Se você só precisa terminar, posicionar texto sobre a página funciona em quase qualquer formulário, seja qual for o problema por baixo.",
    "A aparência e o comportamento dos formulários variam entre leitores de PDF, então “não funciona aqui” raramente significa “quebrado em todo lugar”.",
  ],
  mobileNote:
    "Muitos relatos de “formulário não funciona” são só uma pré-visualização de e-mail ou um leitor básico ignorando os campos. Abrir o arquivo no app PDF Editor ativa os campos interativos onde eles existem e deixa posicionar texto em formulários planos ou bloqueados onde não existem — no aparelho, sem upload.",
  faq: [
    {
      q: "Por que o meu formulário PDF não funciona?",
      a: "Quase sempre é uma de poucas coisas: o formulário é plano e não tem campos, o seu leitor não desenha os campos, as respostas não estão salvando, o formulário é somente leitura, ou ele usa recursos que o seu aplicativo não suporta. Identifique o sintoma e aplique a correção correspondente.",
    },
    {
      q: "O que tentar primeiro?",
      a: "Abra o mesmo arquivo em um app de PDF dedicado, em vez de uma pré-visualização de e-mail ou do navegador. Só esse passo resolve boa parte dos casos de “formulário não funciona”, que na verdade são desencontros de leitor.",
    },
    {
      q: "Como sei se o formulário está quebrado ou se é o meu aplicativo?",
      a: "Teste em outro app de PDF competente. Se funcionar lá, o problema era o leitor original. Se falhar em todos, pode ser um tipo avançado de formulário ou um arquivo realmente danificado.",
    },
    {
      q: "Só preciso preencher — qual é a saída universal?",
      a: "Posicione o seu próprio texto e os vistos por cima da página com um editor de PDF. Isso funciona em formulários planos, bloqueados e sem campos, seja qual for a causa por baixo.",
    },
    {
      q: "Onde encontro a solução do meu problema específico?",
      a: "Use as verificações acima para casar o seu sintoma — campos sumidos, não digita, não salva, somente leitura ou compatibilidade — e siga o guia indicado, ou a lista consolidada de correções.",
    },
  ],
  related: [
    { label: "Campos do formulário PDF sumiram", path: "/guides/pdf-form-fields-missing" },
    { label: "Por que não consigo digitar em um formulário PDF?", path: "/guides/why-cant-i-type-in-a-pdf-form" },
    { label: "Por que o formulário PDF não salva", path: "/guides/why-pdf-form-wont-save" },
    { label: "Problemas de compatibilidade de formulários PDF", path: "/guides/pdf-form-compatibility-problems" },
    { label: "Corrigir erros de formulário PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
