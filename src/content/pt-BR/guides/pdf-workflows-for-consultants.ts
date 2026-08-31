import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-consultants",
  h1: "Fluxos de PDF para consultores (propostas, relatórios, cobranças)",
  description:
    "O ritmo de PDF de um consultor: propostas que fecham, relatórios que leem bem no celular e cobranças que saem em segundos. As ferramentas de navegador que mantêm tudo enxuto.",
  updated: "2026-05-29",
  intro: [
    "O trabalho de consultoria gira em torno de três documentos: a proposta que ganha o projeto, o relatório que o entrega e a cobrança que fecha o ciclo. Todo o resto — apresentações de abertura, notas de entrevista, relatos de andamento — ou é rascunho de um desses três ou é artefato de trabalho que não sai do projeto.",
    "Cada um dos três tem hábitos próprios de PDF. Propostas precisam parecer substanciais sem serem pesadas; relatórios precisam ler bem no celular, que é onde a maioria dos clientes abre primeiro; cobranças precisam sair no dia em que o trabalho termina. As ferramentas para fazer os três bem são quase todas gratuitas, e o fluxo não muda entre um cliente e outro.",
    "Este guia descreve esse ritmo — o que cada documento precisa, o que cada ferramenta faz e para onde vai o tempo. Apertar o ritmo ao longo de um ano de projetos economiza horas de verdade.",
  ],
  steps: [
    {
      title: "Proposta: enxuta, com a sua marca, rápida",
      body: "Monte no Word a partir do seu modelo. Limite a menos de 12 páginas — clientes passam o olho, não estudam. Exporte com a ferramenta Word para PDF. Capa, definição do problema, abordagem, entregas, cronograma, preços e condições. Comprima abaixo de 5 MB. Envie no mesmo dia.",
    },
    {
      title: "Contrato de prestação: PDF assinado e travado",
      body: "Assim que a proposta for aprovada, mande o contrato assinado com a ferramenta Assinar PDF. O cliente contra-assina e devolve. Guarde as duas vias assinadas em /Clientes/[Nome]/contratos/.",
    },
    {
      title: "Relatos de andamento: um PDF semanal",
      body: "Um PDF curto (uma página) enviado toda semana. Situação, travas e decisões necessárias. Trate como um mecanismo para pensar com clareza, não como uma entrega em si.",
    },
    {
      title: "Relatório final: estruturado para leitura rápida",
      body: "Resumo executivo na primeira página. Metodologia e detalhes no fim. Numere todas as páginas. Incorpore as fontes. Corpo de texto legível no celular. A maioria dos clientes lê no celular antes de ler no computador.",
    },
    {
      title: "Cobrança: no mesmo dia do encerramento",
      body: "Cobrança em modelo, numeração sequencial, exportada com a ferramenta Word para PDF e enviada em até 24 horas depois de fechar o projeto. Cobranças atrasadas envelhecem em pagamentos atrasados.",
    },
    {
      title: "Arquive o projeto",
      body: "Mova a pasta inteira do cliente para /Arquivo/[Ano]/[Cliente]/ quando o pagamento cair. A pasta ativa continua enxuta; o arquivo fica pesquisável para casos de sucesso e consultas futuras.",
    },
  ],
  tips: [
    "Não personalize o modelo a cada proposta. Personalize o conteúdo e mantenha a estrutura consistente — clientes reconhecem você entre projetos.",
    "Registre toda proposta enviada em uma planilha com data, cliente, valor e desfecho. A taxa de conversão diz se a sua oferta precisa de ajuste.",
    "Relatórios que leem bem no celular usam corpo de texto maior e parágrafos mais curtos que os pensados para impressão. Otimize para o aparelho que o cliente usa primeiro.",
    "Marque os rascunhos (RASCUNHO) durante o projeto, e nunca a versão final. A final parece final justamente pela ausência da marca.",
    "Mantenha uma pasta /casos/ com exemplos anonimizados de projetos anteriores. Eles são a prova mais forte nas propostas seguintes.",
  ],
  mobileNote:
    "Consultores vivem em trânsito. O app PDF Editor resolve compressões de proposta de última hora, assinaturas de contrato e envios de cobrança pelo celular — útil quando o projeto fecha dentro do ônibus e a cobrança precisa sair antes de o dia acabar.",
  faq: [
    {
      q: "Qual deve ser o tamanho de uma proposta?",
      a: "Menos de 12 páginas na maioria dos projetos. Clientes passam o olho. Quanto mais curta a proposta, mais ela é lida.",
    },
    {
      q: "Preciso de um contrato de prestação assinado?",
      a: "Precisa. A proposta é um documento comercial; o contrato é o acordo. Não comece o trabalho sem um.",
    },
    {
      q: "Com que frequência devo mandar relatos de andamento?",
      a: "Semanal é o padrão. Diário em projetos curtos e intensos. Mensal em projetos longos e lentos. A regularidade importa mais que o formato.",
    },
    {
      q: "Os relatórios precisam ser desenhados?",
      a: "Desenhados o bastante para parecerem profissionais, não a ponto de te atrasar. Um modelo tipográfico limpo envelhece melhor que um sobrecarregado.",
    },
    {
      q: "Quando a cobrança deve sair?",
      a: "No mesmo dia em que o projeto fecha. Cada dia de atraso tende a empurrar a data de pagamento em mais de um dia do outro lado.",
    },
  ],
  related: [
    { label: "PDF para empresas — contratos e fluxos", path: "/pdf-for-business" },
    { label: "Word para PDF — exportações de proposta e relatório", path: "/word-to-pdf" },
    { label: "O melhor fluxo de trabalho com PDF para freelancers", path: "/guides/best-pdf-workflow-for-freelancers" },
    { label: "Como enviar contratos em PDF", path: "/guides/how-to-send-contracts-as-pdf" },
  ],
  parentHub: { label: "PDF para empresas", path: "/pdf-for-business" },
};

export default content;
