import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-small-business",
  h1: "Fluxos de PDF para pequenas empresas (orçamentos, contratos, registros)",
  description:
    "Como uma pequena empresa toca o fluxo de documentos em PDF — orçamento sai, contrato volta, registro arquivado — sem comprar uma pilha de assinaturas para isso.",
  updated: "2026-05-29",
  intro: [
    "Uma pequena empresa movimenta mais PDFs do que quem a toca imagina. Orçamentos saem, contratos assinados voltam, cobranças são emitidas, extratos são arquivados, documentos fiscais se acumulam. Cada um é um pedacinho de trabalho, e cada um consome tempo quando o fluxo não é proposital.",
    "As pilhas caras de PDF compensam quando você tem um departamento jurídico. Para uma empresa de cinco pessoas com algumas dezenas de documentos por semana, ferramentas gratuitas de navegador e uma convenção limpa dão conta do mesmo trabalho sem uma linha de assinatura no orçamento. O truque é escrever o fluxo uma vez e seguir.",
    "Este guia descreve o fluxo para os quatro tipos de documento que pequenas empresas mais tocam em PDF: orçamentos, contratos, cobranças e registros. Cada seção é curta, cada uma é concreta e nada aqui exige algo pago.",
  ],
  steps: [
    {
      title: "Orçamentos: modelo do Word → Word para PDF → envio com marca",
      body: "Monte o orçamento a partir de um modelo do Word, preencha os dados do cliente e os itens, exporte em PDF com a ferramenta Word para PDF. Coloque a marca na capa, nomeie como NomeDoCliente_Orcamento_AAAA-MM-DD.pdf e envie.",
    },
    {
      title: "Contratos: PDF → Assinar PDF → travar → contra-assinar",
      body: "Finalize o texto na origem, exporte em PDF, assine com a ferramenta Assinar PDF, trave se a sua ferramenta permitir e envie para contra-assinatura. Guarde a via com uma assinatura e a totalmente assinada.",
    },
    {
      title: "Cobranças: numeração sequencial, marca d'água quando pago",
      body: "FAT-2026-001, FAT-2026-002. Registre em uma planilha. Quando o pagamento cair, a ferramenta Marca d'água em PDF carimba PAGO e o arquivo sai de /em-aberto/ para /pagas/.",
    },
    {
      title: "Registros: receber, comprimir, arquivar por ano",
      body: "Extratos bancários, notas de fornecedores, recibos de despesa. Receba em PDF, comprima para arquivar e organize por ano em /Registros/2026/. No Brasil, cinco anos é a referência mais comum de guarda para documentos fiscais; confirme o prazo do seu caso.",
    },
    {
      title: "Use uma estrutura de pastas compartilhada",
      body: "Pastas de primeiro nível para /Clientes/, /Registros/, /Interno/, /Modelos/ e /Arquivo/. No máximo dois níveis de aninhamento. A equipe inteira usa a mesma estrutura.",
    },
    {
      title: "Faça a conferência todo mês",
      body: "Uma vez por mês, passe pela pasta de cobranças /em-aberto/ e pelos projetos ativos em /clientes/. Acima de 30 dias, cobre. Acima de 90, escale. A pasta é a lista de tarefas.",
    },
  ],
  tips: [
    "Não reinvente o modelo a cada vez. Monte um modelo de orçamento, um de contrato e um de cobrança, e reutilize.",
    "Assine com uma assinatura de verdade, não com o nome digitado. As desenhadas se sustentam melhor em disputas.",
    "Comprima todo documento no momento do envio — arquivos que saem são sempre menores que os originais internos.",
    "Evite mandar arquivos vivos do Word para clientes. Uma vez em PDF, a versão está travada.",
    "Faça uma varredura trimestral de arquivo. Projetos encerrados vão para /Arquivo/; as pastas ativas continuam curtas e navegáveis.",
  ],
  mobileNote:
    "Quem toca uma pequena empresa faz metade do trabalho com PDF no celular — assinar um contrato entre reuniões, mandar uma cobrança do local do serviço, arquivar um recibo durante o dia. O app PDF Editor cuida dos quatro tipos de documento pelo celular, offline, para o trabalho não esperar a hora da mesa.",
  faq: [
    {
      q: "Preciso de um sistema contábil para cobranças?",
      a: "Não em volume baixo. Um modelo do Word, uma planilha de controle e uma estrutura de pastas funcionam bem para dezenas de cobranças por mês. O software compensa conforme você cresce.",
    },
    {
      q: "Como acompanho quais contratos estão pendentes?",
      a: "Pela estrutura de pastas: /Clientes/Ativos/[Nome]/contratos/enviados/ e .../assinados/. O estado da pasta é o status. Não precisa de planilha.",
    },
    {
      q: "E os backups?",
      a: "Sincronize a pasta de documentos com pelo menos uma nuvem (Dropbox, iCloud, Google Drive). Mantenha um backup externo periódico para os anos de guarda fiscal.",
    },
    {
      q: "Devo usar um único modelo por tipo de documento?",
      a: "Sim. Modelos consistentes deixam os documentos reconhecíveis e reduzem o esforço por documento. Personalize o conteúdo, não a estrutura.",
    },
    {
      q: "Quando uma pilha paga de PDF começa a fazer sentido?",
      a: "Quando você precisa de encaminhamento automático, assinatura eletrônica em massa ou trilhas de auditoria formais — normalmente a partir de umas 20 pessoas ou em fluxos regulados.",
    },
  ],
  related: [
    { label: "PDF para empresas — contratos e fluxos", path: "/pdf-for-business" },
    { label: "Assinar PDF — assinaturas eletrônicas", path: "/sign-pdf" },
    { label: "Como organizar faturas em PDF", path: "/guides/how-to-manage-invoices-as-pdf" },
    { label: "Melhores ferramentas de PDF grátis para pequenas empresas", path: "/guides/best-pdf-tools-for-small-business" },
  ],
  parentHub: { label: "PDF para empresas", path: "/pdf-for-business" },
};

export default content;
