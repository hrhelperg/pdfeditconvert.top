import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-wont-my-pdf-open",
  h1: "Por que meu PDF não abre? Causas e soluções práticas",
  description:
    "Um PDF que se recusa a abrir quase sempre é uma de cinco coisas. Como diagnosticar download corrompido, senha, falha do leitor e arquivo antigo — e o que resolve cada caso.",
  updated: "2026-05-29",
  intro: [
    "Você clica duas vezes em um PDF e não acontece nada. Ou o leitor mostra um erro, trava ou abre uma caixa de senha que você não esperava. PDFs deveriam simplesmente funcionar, e na maior parte do tempo funcionam — então, quando um não funciona, vale conhecer a lista curta de motivos.",
    "Na prática, existem poucas causas por trás de um PDF teimoso: o download ficou incompleto, o arquivo está protegido por senha, o leitor não combina com a versão do PDF, o arquivo veio de uma exportação com defeito, ou é um formato que só parece PDF. Cada uma tem uma solução específica e repetível.",
    "Este guia percorre os diagnósticos, um a um, na ordem em que vale checá-los, com a ferramenta certa para cada. A maior parte da solução é identificar qual problema você tem, e não aprender algum truque avançado.",
  ],
  steps: [
    {
      title: "Baixe o arquivo de novo antes de qualquer coisa",
      body: "Um download truncado é o motivo isolado mais comum de um PDF não abrir. Buscar o arquivo de novo resolve em segundos. Se ainda falhar, o tamanho bate com o da origem e a origem continua abrindo o arquivo, você descartou o download ruim.",
    },
    {
      title: "Veja se ele está protegido por senha",
      body: "Alguns leitores mostram um erro genérico em vez de pedir a senha. Se o arquivo veio de um banco, de um empregador ou de um escritório jurídico, presuma que há senha. Quem enviou vai saber qual é.",
    },
    {
      title: "Tente outro leitor de PDF",
      body: "Navegadores, o Pré-visualização do macOS, o Adobe Acrobat e leitores de celular interpretam PDFs de formas ligeiramente diferentes. Um arquivo que um leitor recusa costuma abrir bem em outro. Se a aba do navegador abre e o programa do computador não, o caso é incompatibilidade de versão do leitor, não arquivo quebrado.",
    },
    {
      title: "Confira o tipo real do arquivo",
      body: "Arquivos que chegam por e-mail ou chat às vezes têm extensão .pdf, mas são na verdade .docx, .html, uma imagem ou um ZIP. Abrir em um editor de texto comum revela os primeiros bytes. Um PDF de verdade começa com %PDF-. Qualquer outra coisa significa renomear ou pedir de novo.",
    },
    {
      title: "Repare com uma ida e volta de exportação",
      body: "Se o arquivo é válido, mas está sutilmente quebrado, abri-lo em um leitor que ainda o exibe e usar imprimir em PDF ou exportar de novo costuma gerar uma cópia limpa. Alguns objetos malformados são reescritos e o novo arquivo abre em todo lugar.",
    },
    {
      title: "Reduza o tamanho se o limite for de memória",
      body: "Em celulares antigos, PDFs enormes e cheios de digitalização podem simplesmente não abrir. A ferramenta Comprimir PDF reduz o arquivo no navegador; a cópia comprimida abre onde o original não abria.",
    },
  ],
  tips: [
    "Compare o tamanho do arquivo baixado com o que a origem informa. Uma diferença aponta direto para um download truncado.",
    "Se o navegador abre o PDF e o seu programa de computador não, deixe-o abrir no navegador por enquanto — você não perde nada e segue em frente.",
    "Um arquivo que abre no celular e falha no notebook (ou o contrário) normalmente é caso de versão do leitor, não de arquivo corrompido. Fique com o leitor que funciona.",
    "Quando PDFs anexados em e-mail falham repetidamente, tente baixar pela interface web do e-mail, e não pelo programa instalado — programas às vezes truncam anexos grandes.",
    "Guarde os originais antes de fazer reparos por reexportação. Uma reexportação ruim pode perder campos de formulário ou anotações que o original mantinha.",
  ],
  mobileNote:
    "No celular, o culpado mais comum é um download parcial em uma conexão instável. O app PDF Editor guarda os arquivos localmente e permite buscar de novo e abrir PDFs grandes sem depender do cache do navegador, que costuma ser onde a truncagem acontece.",
  faq: [
    {
      q: "Por que o meu PDF diz que está danificado se quem enviou garante que está bom?",
      a: "Quase sempre um download parcial. Baixe o arquivo de novo e confira se o tamanho em bytes bate com o que a pessoa compartilhou. Se a nova cópia abrir, a anterior estava incompleta.",
    },
    {
      q: "O meu leitor pede uma senha que eu não tenho. E agora?",
      a: "Só quem enviou pode passá-la. Não há como contornar com segurança uma senha real de PDF do lado de quem recebe, e ferramentas que prometem isso devem ser evitadas.",
    },
    {
      q: "Por que ele abre no Chrome e não no Acrobat?",
      a: "Leitores de computador mais antigos podem não dar suporte a recursos novos do PDF. Continue usando o leitor que funciona ou reexporte o arquivo com uma etapa de imprimir em PDF, para gerar uma cópia compatível.",
    },
    {
      q: "Existe alguma ferramenta que simplesmente “conserta” PDFs quebrados?",
      a: "Às vezes — passar o arquivo por uma reexportação (abrir, imprimir em PDF, salvar) resolve problemas estruturais menores. Mas PDFs gravemente corrompidos costumam ser irrecuperáveis.",
    },
    {
      q: "Comprimir ajuda em arquivos que não abrem?",
      a: "Só se a causa for memória: PDFs enormes e cheios de digitalização às vezes falham em celulares antigos. A ferramenta Comprimir PDF os deixa pequenos o bastante para carregar. Ela não conserta um arquivo estruturalmente quebrado.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduza arquivos grandes que não abrem", path: "/compress-pdf" },
    { label: "Ferramentas de PDF — lista completa no navegador", path: "/pdf-tools" },
    { label: "Como consertar um PDF corrompido", path: "/guides/how-to-fix-a-corrupted-pdf" },
    { label: "Como corrigir problemas de formatação em PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
