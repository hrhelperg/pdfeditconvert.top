import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-invoices-as-pdf",
  h1: "Como organizar faturas em PDF (emitir, acompanhar, arquivar)",
  description:
    "Um fluxo de cobrança em PDF que não exige sistema contábil: gerar, numerar, enviar, acompanhar e arquivar — só com ferramentas grátis de navegador e uma estrutura de pastas limpa.",
  updated: "2026-05-29",
  intro: [
    "A maioria dos pequenos negócios não precisa de um sistema contábil para as cobranças. Precisa de um jeito limpo de gerar um PDF, numerá-lo com consistência, enviá-lo, acompanhar quando foi pago e arquivá-lo para a temporada de impostos. O trabalho é mecânico; as ferramentas são simples; o caos vem de pular a convenção.",
    "Um fluxo de cobrança tem quatro partes: emissão (de onde vem o PDF), acompanhamento (onde você registra o que foi enviado), pagamento (quando o dinheiro cai) e arquivo (onde ficam as vias pagas). Cada parte é curta e nenhuma exige assinatura de software, se você não quiser.",
    "Este guia percorre o fluxo do jeito que um freelancer ou uma equipe pequena consegue tocar de verdade — com o PDF gerado a partir de um modelo do Word, numeração sob o seu controle e um arquivo que sobrevive a uma fiscalização. Não é o único jeito; é o que não quebra.",
  ],
  steps: [
    {
      title: "Monte a cobrança no Word ou no Pages a partir de um modelo",
      body: "Um modelo de cobrança no Word entrega um layout já testado, com espaços para cliente, data, itens e total. Preencha as variáveis e exporte em PDF com a ferramenta Word para PDF. Nunca edite o valor final em outro lugar que não seja a origem.",
    },
    {
      title: "Use numeração sequencial",
      body: "FAT-2026-001, FAT-2026-002 e assim por diante. Reinicie a cada ano. Os números precisam ser únicos e sem buracos — a fiscalização estranha lacunas. Mantenha uma lista corrida em uma planilha ou em um arquivo de texto.",
    },
    {
      title: "Salve com um nome previsível",
      body: "NomeDoCliente_Fatura_FAT-2026-001_2026-05-29.pdf. O número no nome do arquivo bate com o número no documento. A pasta por cliente facilita a busca depois.",
    },
    {
      title: "Envie e registre na hora",
      body: "Mande o PDF por e-mail com um recado curto e registre o envio na sua planilha de controle: data, número, valor e vencimento. O dia em que você não registra é o dia em que você esquece.",
    },
    {
      title: "Marque PAGO quando o dinheiro cair",
      body: "A ferramenta Marca d'água em PDF carimba PAGO no arquivo, com a data. A via paga vai para /faturas/pagas/; a em aberto fica em /faturas/em-aberto/. Estado visual ganha de estado em planilha.",
    },
    {
      title: "Arquive por ano",
      body: "No fim do ano, mova /faturas/pagas/ para /Arquivo/Faturas/2026/. No Brasil, o prazo de guarda de documentos fiscais costuma ser de cinco anos, contados conforme a regra de cada tributo — confirme o prazo aplicável ao seu caso. O arquivo deve se explicar sozinho daqui a cinco anos, quando você já tiver esquecido a lógica original.",
    },
  ],
  tips: [
    "Nunca edite uma cobrança já enviada. Se o valor estiver errado, emita uma nota de crédito ou uma cobrança nova — a trilha de auditoria precisa ficar intacta.",
    "Faça o número no arquivo bater com o número no documento e com a linha na sua planilha de controle. Três lugares dizendo a mesma coisa.",
    "O PDF/A é o formato de arquivamento preferido por algumas autoridades fiscais. Se você atua em uma jurisdição assim, reexporte o conjunto do ano em PDF/A.",
    "Comprima as cobranças para arquivar — elas são texto simples, mas o arquivo acumula. Cópias comprimidas economizam espaço real ao longo dos anos.",
    "Não coloque senha nas cobranças, a menos que o cliente exija. É atrito sem benefício em um documento que é só números e nomes.",
  ],
  mobileNote:
    "Cobranças cada vez mais nascem no celular — um envio rápido do café depois de um serviço. O app PDF Editor permite preencher o modelo, carimbar o número e mandar o PDF por e-mail pelo celular, com uma cópia salva localmente para os seus registros.",
  faq: [
    {
      q: "Preciso de um sistema de cobrança?",
      a: "Não em volume baixo. Um modelo do Word, uma planilha de controle e uma estrutura de pastas dão conta de dezenas de cobranças por mês com limpeza. O software compensa quando você precisa de cobrança recorrente, várias moedas ou muitos clientes.",
    },
    {
      q: "Que formato de numeração devo usar?",
      a: "Sequencial, sem buracos, de preferência com o ano no prefixo. FAT-2026-001 é legível para humanos e amigável a uma fiscalização.",
    },
    {
      q: "Por quanto tempo devo guardar as cobranças?",
      a: "Varia conforme o país e o tributo; no Brasil, cinco anos é a referência mais comum para documentos fiscais. Confira a regra aplicável ao seu caso.",
    },
    {
      q: "Devo mandar as cobranças em Word ou em PDF?",
      a: "Sempre em PDF. PDFs travam o formato e o valor; documentos do Word convidam clientes bem-intencionados a “corrigir” alguma coisa.",
    },
    {
      q: "E a nota fiscal eletrônica?",
      a: "No Brasil, a nota fiscal eletrônica é emitida pelo sistema do município ou do estado e tem regras próprias de numeração e guarda. O fluxo acima organiza os PDFs (o DANFE, o recibo, a fatura de cobrança) em volta dela; ele não substitui a emissão oficial.",
    },
  ],
  related: [
    { label: "PDF para empresas — contratos e fluxos", path: "/pdf-for-business" },
    { label: "Word para PDF — exportações limpas de cobrança", path: "/word-to-pdf" },
    { label: "Marca d'água em PDF — carimbe PAGO nas cobranças quitadas", path: "/add-watermark-to-pdf" },
    { label: "Fluxos de PDF para pequenas empresas", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF para empresas", path: "/pdf-for-business" },
};

export default content;
