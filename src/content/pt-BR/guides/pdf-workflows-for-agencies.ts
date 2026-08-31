import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-agencies",
  h1: "Fluxos de PDF para agências (apresentações, briefings, aprovações)",
  description:
    "A corrente de PDFs de uma agência — apresentações, briefings de criação, aprovações de cliente, entregas — rápida e previsível, com ferramentas grátis, privadas e no navegador.",
  updated: "2026-05-29",
  intro: [
    "Agências processam mais PDFs do que percebem. Apresentações de proposta saem, briefings voltam, o trabalho de criação passa por aprovações, entregas seguem em lotes, retrospectivas caem em pastas compartilhadas. Cada um é um pedacinho de trabalho; juntos, são a artéria por onde a agência funciona.",
    "A maior parte dos movimentos de PDF de uma agência se repete: converter uma apresentação em um PDF enviável, juntar a versão do apresentador com os anexos, comprimir para portais de cliente, marcar rascunhos durante a revisão, assinar aprovações e arquivar ao encerrar o projeto. Com um ritmo proposital e um kit pequeno, isso fica leve. Sem ritmo, come horas.",
    "Este guia descreve o fluxo que vemos funcionar em agências pequenas. Nada aqui exige software pago de PDF; quase tudo roda em uma aba do navegador, sem subir material sensível de cliente.",
  ],
  steps: [
    {
      title: "Apresentação: exportar, comprimir, conferir a marca",
      body: "Apresentação → exportação em PDF → compressão para o e-mail do prospect. Confirme que as fontes foram incorporadas, para os títulos dos slides não serem substituídos do outro lado. Capa com o nome do prospect, título definido nos metadados e nome NomeDoProspect_Apresentacao_AAAA-MM-DD.pdf.",
    },
    {
      title: "Briefing de criação: junte o formulário com os materiais",
      body: "Documento de briefing mais os materiais do cliente (logotipos, exemplos, manual de marca) → a ferramenta Juntar PDF cria um único arquivo de trabalho para a equipe consultar. Guarde os originais; a versão combinada é para consulta rápida.",
    },
    {
      title: "Aprovações: PDF assinado, marcas de rascunho na revisão",
      body: "Os rascunhos circulam com a ferramenta Marca d'água em PDF carimbando RASCUNHO. Quando o cliente aprova, um PDF assinado formaliza a aprovação, com a ferramenta Assinar PDF registrando o aceite. As versões finais perdem a marca.",
    },
    {
      title: "Entregas: PDF de alta qualidade, separado dos arquivos de trabalho",
      body: "As entregas finais são exportadas em qualidade maior que as versões internas. A ferramenta Organizar páginas do PDF confirma a ordem; a Extrair páginas do PDF descarta o que não deve ir.",
    },
    {
      title: "Comprima para os portais de cliente",
      body: "A maioria dos portais corporativos limita entre 10 e 25 MB. A ferramenta Comprimir PDF leva as entregas para baixo do limite sem perda visível. O arquivo entregue é a cópia comprimida; o arquivo de origem, sem compressão, fica guardado.",
    },
    {
      title: "Arquive ao encerrar o projeto",
      body: "Mova a pasta do projeto para /Arquivo/[Ano]/[Cliente]/[NomeDoProjeto]/. A pasta ativa continua enxuta; o arquivo vira a fonte de casos para a próxima proposta.",
    },
  ],
  tips: [
    "Apresentações feitas para tela devem ser exportadas com menos compressão que as feitas para impressão — os artefatos visíveis incomodam menos na tela.",
    "Padronize a capa das apresentações. Logotipo, nome do prospect, data e contato da agência. Layouts diferentes a cada proposta passam inconsistência.",
    "Marque todos os rascunhos. No minuto em que um rascunho perde a marca no caminho, a responsabilidade se dilui.",
    "Aprovações moram em PDFs assinados, não em conversas de chat. O você do futuro vai precisar de um registro defensável.",
    "Monte antes uma pasta /Modelos/ com capa de apresentação, modelo de briefing e formulário de aprovação. Reaproveitar sempre ganha de recriar.",
  ],
  mobileNote:
    "A vida de agência acontece no celular durante produções, no trânsito e no cliente. O app PDF Editor cuida de rascunhos, assinaturas e reexportações rápidas pelo celular, então uma aprovação sai do celular em vez de esperar a volta ao notebook.",
  faq: [
    {
      q: "Qual deve ser o tamanho de um PDF de apresentação?",
      a: "Idealmente abaixo de 10 MB; sempre abaixo de 25 MB. Apresentações visuais comprimem menos que as de texto; fique de olho no tamanho conforme ela cresce.",
    },
    {
      q: "Devemos usar um único modelo em toda proposta?",
      a: "Sim para a estrutura, não para a criação. Quem lê deve reconhecer na hora que “isto é uma proposta da agência”; o conteúdo criativo é o que distingue cada uma.",
    },
    {
      q: "Como acompanhamos o estado de aprovação?",
      a: "Pelo estado da pasta: /rascunhos/, /aprovados/, /entregues/. O PDF de aprovação assinado é o artefato que confirma a passagem de uma pasta para outra.",
    },
    {
      q: "Precisamos de PDFs separados de trabalho e de entrega?",
      a: "Precisamos. Arquivos de trabalho não têm compressão e trazem anotações; entregas são comprimidas, limpas e finalizadas. Não mande o arquivo de trabalho por engano.",
    },
    {
      q: "Qual é o maior erro de PDF em uma agência?",
      a: "Enviar uma apresentação não finalizada. Marque os rascunhos, nomeie com clareza e mande ao cliente somente o arquivo que está em /aprovados/.",
    },
  ],
  related: [
    { label: "PDF para empresas — contratos e fluxos", path: "/pdf-for-business" },
    { label: "Juntar PDF — monte briefings e entregas", path: "/merge-pdf" },
    { label: "Fluxos de PDF para consultores", path: "/guides/pdf-workflows-for-consultants" },
    { label: "Melhor fluxo de PDF para equipes", path: "/guides/best-pdf-workflow-for-teams" },
  ],
  parentHub: { label: "PDF para empresas", path: "/pdf-for-business" },
};

export default content;
