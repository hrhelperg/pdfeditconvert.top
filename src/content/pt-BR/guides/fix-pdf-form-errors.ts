import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "fix-pdf-form-errors",
  h1: "Corrigir erros de formulário PDF — lista rápida",
  description:
    "Os primeiros socorros universais para um formulário PDF rebelde: trocar de leitor, baixar de novo, atualizar, acrescentar texto por cima, achatar. Rode isso antes de investigar uma causa específica.",
  updated: "2026-06-01",
  intro: [
    "Quando um formulário dá trabalho e você só quer resolver, existe uma sequência curta de correções que dá conta da maioria dos problemas, seja qual for a causa exata. Esta é a lista de primeiros socorros — o que tentar em ordem antes de diagnosticar um problema específico. A maioria dos erros de formulário cede a um destes cinco movimentos, e rodar todos leva alguns minutos.",
    "Pense nisso como o complemento de diagnosticar o sintoma preciso. Se você preferir identificar se é campo sumido, problema de salvamento ou travamento somente leitura, o guia de triagem te encaminha. Mas muitas vezes o caminho mais rápido é simplesmente rodar estes passos universais e ver o formulário voltar a se comportar.",
    "Cada passo mira uma classe ampla de problema — desencontro de leitor, arquivo incompleto, software desatualizado, formulário bloqueado ou plano e salvamento inconsistente. Rode de cima para baixo e pare quando o formulário funcionar.",
  ],
  steps: [
    {
      title: "Abra em um app de PDF dedicado",
      body: "A correção de maior retorno. Pré-visualizações de e-mail, abas de navegador e leitores básicos causam a maioria dos erros de formulário ao ignorar a camada de campos. Um app de PDF completo resolve boa parte dos problemas sozinho.",
    },
    {
      title: "Baixe uma cópia nova",
      body: "Um download parcial ou interrompido pode gerar campos sumidos, páginas em branco ou erros de “arquivo danificado”. Baixe o formulário de novo na fonte e reabra a cópia completa antes de supor um defeito mais profundo.",
    },
    {
      title: "Atualize o seu programa de PDF",
      body: "Um leitor desatualizado pode não desenhar recursos mais novos de formulário. Atualizar para uma versão atual, ou passar para um app de PDF bem mantido, elimina erros de aparência de compatibilidade que nem são do arquivo.",
    },
    {
      title: "Acrescente o seu texto por cima",
      body: "Se o formulário é plano, está bloqueado ou simplesmente não colabora, posicione o seu próprio texto e os vistos direto na página com um editor de PDF. Essa saída universal completa quase qualquer formulário, seja qual for o problema por baixo.",
    },
    {
      title: "Salve direito e achate",
      body: "Para as respostas pararem de sumir, salve com uma ferramenta que grave dados de campo e depois achate o formulário preenchido. Achatar trava as respostas na página, para que apareçam, imprimam e cheguem sem falha em qualquer lugar.",
    },
  ],
  tips: [
    "Rode os passos em ordem e pare quando funcionar — a maioria dos formulários se acerta no primeiro ou no segundo.",
    "Abrir o arquivo em um app de PDF de verdade é o movimento isolado de maior retorno em quase qualquer erro de formulário.",
    "Acrescentar texto por cima é a saída de emergência universal quando o formulário não colabora e você só precisa terminar.",
    "Achatar no fim evita os problemas mais comuns depois do fato: respostas sumidas e impressões em branco.",
    "Se nada disso funcionar, o formulário pode usar recursos sem suporte — veja o guia de compatibilidade ou peça a quem emitiu uma versão padrão.",
  ],
  mobileNote:
    "No celular esta lista é rápida: abra o formulário no app PDF Editor em vez da pré-visualização do e-mail, preencha os campos ou acrescente texto por cima, achate e exporte. Só esses movimentos resolvem a maioria dos erros de formulário no celular, tudo no aparelho e sem upload.",
  faq: [
    {
      q: "Qual é o jeito mais rápido de consertar um formulário PDF rebelde?",
      a: "Abrir em um app de PDF dedicado, em vez de uma pré-visualização de e-mail ou do navegador. Isso resolve a maior parte dos erros de formulário, que normalmente são desencontros de leitor e não defeitos do arquivo.",
    },
    {
      q: "O formulário continua sem funcionar depois de trocar de aplicativo — e agora?",
      a: "Baixe uma cópia nova, atualize o seu programa de PDF e, se ele continuar teimoso, acrescente o seu texto direto por cima da página. Essa abordagem manual completa quase qualquer formulário, seja qual for a causa.",
    },
    {
      q: "Como evito que as minhas respostas sumam?",
      a: "Salve com uma ferramenta que grave os dados dos campos e depois achate o formulário preenchido. Achatar funde as respostas na página, para que não sejam descartadas ao reabrir, imprimir ou enviar.",
    },
    {
      q: "Uso esta lista ou diagnostico o problema específico?",
      a: "Os dois funcionam. Esta lista resolve a maioria dos erros rápido, sem diagnóstico. Se preferir identificar a causa exata — campos sumidos, não salva, somente leitura — comece pela triagem de problemas de formulário.",
    },
    {
      q: "E se nada aqui resolver?",
      a: "O formulário pode usar recursos avançados que o seu programa não suporta. Veja o guia de compatibilidade ou peça a quem enviou um PDF padrão ou uma versão plana para imprimir que você consiga completar.",
    },
  ],
  related: [
    { label: "Formulário PDF não funciona", path: "/guides/pdf-form-not-working" },
    { label: "Campos do formulário PDF sumiram", path: "/guides/pdf-form-fields-missing" },
    { label: "Problemas de compatibilidade de formulários PDF", path: "/guides/pdf-form-compatibility-problems" },
    { label: "Por que o formulário PDF não salva", path: "/guides/why-pdf-form-wont-save" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
