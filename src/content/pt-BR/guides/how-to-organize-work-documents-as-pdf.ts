import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-work-documents-as-pdf",
  h1: "Como organizar documentos de trabalho em PDF (pastas, nomes, versões)",
  description:
    "Uma convenção prática de nomes e pastas para PDFs de trabalho — orçamentos, briefings, entregas, arquivo morto — que evita o caos de versões e faz qualquer pessoa achar tudo rápido.",
  updated: "2026-05-29",
  intro: [
    "O problema dos PDFs de trabalho normalmente não são os PDFs. É o rastro: trinta arquivos com nomes parecidos na pasta de downloads, versões que não batem, “finais” que não são finais, rascunhos idênticos às entregas. O formato está bem; o que desmorona é a convenção em volta dele.",
    "Uma convenção funcional é curta — uma estrutura de pastas, um padrão de nomes e um hábito sobre onde as versões finais vão parar. Depois que ela existe, achar “o contrato que mandamos em março” leva dez segundos em vez de dez minutos, e os conflitos de versão praticamente somem.",
    "Este guia descreve a convenção que vemos equipes pequenas adotarem e manterem. Não é a única que funciona; é uma robusta o bastante para sobreviver a um trimestre corrido sem desabar.",
  ],
  steps: [
    {
      title: "Escolha uma estrutura de pastas de primeiro nível, de uma vez",
      body: "Clientes/NomeDoContrato/, Interno/, Modelos/, Arquivo/. Quatro pastas cobrem quase tudo. Não passe de dois níveis de aninhamento no começo — profundidade demais faz você se perder.",
    },
    {
      title: "Padronize o formato de nome",
      body: "NomeDoCliente_TipoDoDoc_vN_AAAA-MM-DD.pdf lê bem em qualquer gerenciador de arquivos. Data por último, para os arquivos se ordenarem cronologicamente; versão no meio, para você identificar a mais recente de relance.",
    },
    {
      title: "Separe /rascunhos e /final dentro de cada projeto",
      body: "Rascunhos vão para a subpasta /rascunhos do projeto; as versões finais são renomeadas para FINAL e movidas para /final ou /entregas. A pasta /final só deve conter versões efetivamente enviadas.",
    },
    {
      title: "Use a ferramenta Juntar PDF na hora do repasse",
      body: "Quando uma entrega são, na verdade, três PDFs (proposta + termos + preços), junte tudo em um só para entregar e mantenha os arquivos de origem na pasta do projeto. Quem recebe fica com um arquivo limpo.",
    },
    {
      title: "Comprima e renomeie só na entrega",
      body: "Use a ferramenta Comprimir PDF na cópia que sai; guarde a origem sem compressão. O arquivo entregue vai para /final/, a origem fica em /rascunhos/. São artefatos diferentes.",
    },
    {
      title: "Arquive projetos concluídos em um ritmo fixo",
      body: "Mova os projetos encerrados para /Arquivo/ a cada trimestre. As pastas ativas continuam navegáveis; o arquivo morto fica pesquisável quando você precisar achar algo depois.",
    },
  ],
  tips: [
    "Evite espaços nos nomes de arquivo se puder — sublinhados ou hifens são mais fáceis em URLs, encaminhamentos de e-mail e comandos de terminal.",
    "O formato de data AAAA-MM-DD ordena cronologicamente em qualquer ferramenta. 29/05/26 não ordena.",
    "Não coloque número de versão no nome do arquivo FINAL. FINAL é FINAL. Se algo mudar depois, vira FINAL-2 — e isso é um sinal de que o processo falhou.",
    "Não tenha medo de renomear. Um nome claro vale um minuto de trabalho, principalmente antes de enviar.",
    "Mantenha um arquivo de índice de uma linha (LEIA-ME.txt) em projetos grandes, listando o que há em cada subpasta. Ajuda o você do futuro, que volta seis meses depois.",
  ],
  mobileNote:
    "No celular, organizar fica mais difícil porque editar nome de arquivo é chato. O app PDF Editor permite renomear, marcar e arquivar PDFs pelo celular, para os arquivos que chegam ali não se acumularem sem nome na pasta de downloads.",
  faq: [
    {
      q: "Qual é o melhor formato de nome de arquivo?",
      a: "NomeDoCliente_TipoDoDoc_vN_AAAA-MM-DD.pdf. A data por último ordena cronologicamente; a versão no meio distingue os rascunhos; cliente e tipo de documento fazem o arquivo se explicar sozinho.",
    },
    {
      q: "Devo usar pastas ou etiquetas?",
      a: "Pastas. Sistemas de etiqueta existem, mas se fragmentam entre aparelhos e programas. Pastas são universais.",
    },
    {
      q: "O que faço com rascunhos antigos?",
      a: "Deixe-os em /rascunhos/, dentro da pasta do projeto, até o projeto encerrar, e então arquive o conjunto. Não apague — você pode precisar recuperar um número de um rascunho anterior.",
    },
    {
      q: "O arquivo FINAL precisa de número de versão?",
      a: "Não. Uma vez que um arquivo é FINAL, ele é a versão canônica. Se algo mudar depois, você está em uma nova conversa, que ganha o próprio FINAL.",
    },
    {
      q: "Como lidar com arquivos de clientes com nomes inconsistentes?",
      a: "Renomeie ao receber, seguindo a sua convenção. O minuto gasto renomeando economiza o tempo que você perderia procurando depois.",
    },
  ],
  related: [
    { label: "Ferramentas de PDF — lista completa no navegador", path: "/pdf-tools" },
    { label: "Juntar PDF — combine entregas no repasse", path: "/merge-pdf" },
    { label: "Como organizar arquivos PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Fluxos de PDF para pequenas empresas", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
