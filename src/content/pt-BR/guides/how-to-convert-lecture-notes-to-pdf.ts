import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-lecture-notes-to-pdf",
  h1: "Como converter anotações de aula em PDF (Word, fotos, slides)",
  description:
    "Anotações de aula chegam em todo formato — documento do Word, apresentação, print, foto do quadro. Como transformar cada uma em um PDF legível sem perder a estrutura.",
  updated: "2026-05-29",
  intro: [
    "No fim de uma semana, as anotações de uma única disciplina podem estar em cinco formatos diferentes: um documento do Word que você digitou durante a aula, uma apresentação que o professor compartilhou, uma foto do quadro, prints de uma gravação e algumas páginas manuscritas de quando a bateria do notebook acabou.",
    "Tudo isso pode — e deveria — terminar em um único PDF por tema ou por semana. PDFs lidam bem com todos esses formatos, abrem em qualquer aparelho e não se perdem do jeito que arquivos espalhados se perdem. O truque é produzir o PDF sem perder a estrutura de cada origem.",
    "Este guia percorre o caminho de conversão de cada formato e depois a estratégia de junção que gera um arquivo único e coerente. A meta é material de estudo que você realmente consiga usar na véspera da prova.",
  ],
  steps: [
    {
      title: "Converta as anotações do Word com a ferramenta Word para PDF",
      body: "Anotações digitadas em um documento do Word → ferramenta Word para PDF no navegador. Ela preserva títulos, formatação e prints embutidos. Exporte no tamanho cheio do documento; comprima depois.",
    },
    {
      title: "Exporte as apresentações em PDF",
      body: "PowerPoint e Keynote exportam direto em PDF. Use o menu de exportação, não prints. A versão em PDF mantém o texto selecionável e continua nítida em qualquer zoom.",
    },
    {
      title: "Converta fotos e prints com a ferramenta Imagem para PDF",
      body: "Fotos do quadro e prints de gravações → a ferramenta Imagem para PDF combina tudo em um PDF. Defina a ordem antes de importar; reordenar depois dá mais trabalho.",
    },
    {
      title: "Digitalize as páginas manuscritas",
      body: "A ferramenta Digitalizar para PDF no celular, em tons de cinza e com detecção de bordas, gera digitalizações limpas de várias páginas. Mais nítidas e menores que fotos aleatórias.",
    },
    {
      title: "Junte em um PDF por tema",
      body: "A ferramenta Juntar PDF combina todos os formatos em um arquivo ordenado. A ordem importa: cronologia da aula, ou estrutura lógica (slides de introdução → anotações → fotos do quadro → recapitulação). Escolha uma e mantenha.",
    },
    {
      title: "Acrescente capa e sumário",
      body: "Uma capa digitada (disciplina, semana, tema) faz o arquivo se explicar sozinho seis meses depois. Em PDFs compilados longos (mais de 30 páginas), inclua um sumário de uma página.",
    },
  ],
  tips: [
    "Resista a tirar print das apresentações. Use a exportação em PDF do próprio arquivo — fica mais nítido e o texto continua selecionável para busca.",
    "Fotografe o quadro de frente, não em ângulo. A correção automática resolve inclinações moderadas, mas uma foto quadrada é sempre mais limpa.",
    "Se uma gravação tem momentos-chave, tire print desses quadros específicos em vez do vídeo inteiro. O PDF continua administrável.",
    "Não junte semanas diferentes. Um PDF por semana mantém os arquivos navegáveis; um PDF por semestre é ilegível.",
    "Comprima o PDF combinado só depois de o semestre fechar. Durante o semestre, mantenha a cópia legível para o estudo ativo.",
  ],
  mobileNote:
    "Metade da conversão de anotações de aula acontece no celular — fotografar o quadro, digitalizar uma página manuscrita, tirar print de slides. O app PDF Editor cuida da conversão e da junção no celular, gerando um PDF semanal limpo antes de o arquivo sair do aparelho.",
  faq: [
    {
      q: "Devo manter as anotações no formato original ou converter?",
      a: "Os dois. Guarde os originais editáveis para revisar e produza uma cópia em PDF por tema para estudar. O PDF não substitui a origem — ele é um artefato de estudo.",
    },
    {
      q: "Qual é o melhor jeito de juntar?",
      a: "A ferramenta Juntar PDF no navegador. Defina a ordem antes de juntar; reordenar depois é tecnicamente possível, mas mais lento.",
    },
    {
      q: "Devo rodar OCR nas digitalizações manuscritas?",
      a: "Se a sua ferramenta oferecer, sim — anotações manuscritas pesquisáveis são muito mais úteis na véspera da prova. O OCR em letra à mão é imperfeito; trate o texto pesquisável como aproximado.",
    },
    {
      q: "Qual deve ser o tamanho dos PDFs semanais de anotações?",
      a: "O que a semana naturalmente produzir. Comprima no fim do semestre para arquivar; durante o semestre, priorize a legibilidade em vez do tamanho.",
    },
    {
      q: "Dá para fazer tudo isso no celular?",
      a: "Dá. O app PDF Editor lida com cada formato e junta tudo no aparelho. Útil quando você não quer que as anotações esperem a hora do notebook.",
    },
  ],
  related: [
    { label: "Conversor de PDF — conversões de Word, JPG e PNG", path: "/pdf-converter" },
    { label: "Imagem para PDF — fotos do quadro e prints", path: "/image-to-pdf" },
    { label: "Como digitalizar anotações à mão em PDF", path: "/guides/how-to-scan-notes-to-pdf" },
    { label: "Como organizar materiais de estudo em PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
