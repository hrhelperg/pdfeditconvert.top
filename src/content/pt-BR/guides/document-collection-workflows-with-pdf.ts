import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "document-collection-workflows-with-pdf",
  h1: "Fluxos de coleta de documentos com PDF",
  description:
    "Precisa reunir arquivos e formulários assinados de clientes? Monte um fluxo repetível de coleta em PDF — uma lista, formatos consistentes e um jeito organizado de saber o que ainda falta.",
  updated: "2026-06-01",
  intro: [
    "Recolher documentos de outras pessoas é um projeto por si só. Cadastrar um cliente, processar uma inscrição, fechar um negócio — cada um costuma exigir um conjunto de arquivos e formulários assinados vindos de alguém, e o resultado de sempre é uma conversa de e-mail espalhada em que você nunca lembra direito o que ainda falta. Um fluxo repetível de coleta em PDF troca esse caos por uma lista e uma pasta.",
    "Isso é diferente de recolher respostas em um único formulário. Coleta de documentos é reunir vários itens — um contrato assinado, um documento de identidade, um comprovante, um questionário preenchido — de uma pessoa, e saber de bate-pronto o que chegou e o que ainda falta. O PDF é o formato comum natural porque tudo pode virar um.",
    "Este guia apresenta um fluxo que escala de um cliente para muitos: definir o pedido com precisão, facilitar a devolução dos itens, acompanhar a completude e montar o que foi coletado em algo organizado.",
  ],
  steps: [
    {
      title: "Defina o pedido como uma lista",
      body: "Liste exatamente o que você precisa — cada formulário, cada arquivo de apoio — com uma linha de descrição. Mande a lista junto com o pedido, para a outra pessoa conhecer o conjunto inteiro de cara, e não aos poucos.",
    },
    {
      title: "Padronize o formato de devolução",
      body: "Peça tudo em PDF: formulários achatados, digitalizações de documentos em PDF em vez de fotos soltas. Um formato consistente faz tudo arquivar junto e se ler do mesmo jeito.",
    },
    {
      title: "Torne a devolução realmente fácil",
      body: "Indique um app de PDF para as pessoas preencherem formulários, digitalizarem documentos em PDF e mandarem um conjunto organizado pelo celular. Quanto mais fácil devolver, mais rápido e mais completo tudo volta.",
    },
    {
      title: "Acompanhe o que entrou e o que falta",
      body: "Mantenha uma pasta por pessoa e vá marcando a lista conforme os itens chegam. Uma olhada mostra o que está pendente, então a sua cobrança fica específica — “ainda falta o contrato assinado” — em vez de vaga.",
    },
    {
      title: "Monte o conjunto completo",
      body: "Quando tudo chegar, renomeie com consistência e, se quiser, junte o conjunto em um único PDF por pessoa. Você termina com um pacote limpo e ordenado em vez de uma dúzia de arquivos soltos.",
    },
  ],
  tips: [
    "Mande a lista inteira de cara; pedidos fatiados são o principal motivo de a coleta se arrastar.",
    "Pedir PDFs (formulários achatados, documentos digitalizados em PDF) mantém o conjunto devolvido consistente e fácil de arquivar.",
    "Uma pasta por pessoa mais uma lista marcada torna as cobranças específicas em vez de “consegue mandar o resto?”.",
    "Juntar o conjunto completo em um único PDF te dá um pacote organizado por pessoa.",
    "Documentos coletados costumam ser sensíveis — mantenha em canais diretos ou em um drive privado, não em ferramentas públicas de upload.",
  ],
  mobileNote:
    "As pessoas de quem você coleta conseguem fazer a parte delas inteira no celular: digitalizar documentos em PDF, preencher e achatar formulários e mandar o conjunto com o app PDF Editor. Como ele funciona no aparelho, os arquivos sensíveis que elas devolvem não são enviados a um servidor de terceiros no caminho até você.",
  faq: [
    {
      q: "Como coleto documentos e formulários de clientes com eficiência?",
      a: "Defina o pedido inteiro como uma lista de cara, peça tudo em PDF, facilite a devolução por um app de PDF, marque as chegadas na lista e monte o conjunto completo em um pacote organizado.",
    },
    {
      q: "Qual é a diferença entre coleta de documentos e coleta de um formulário?",
      a: "Um formulário único reúne respostas em um arquivo. A coleta de documentos reúne vários itens — formulários mais arquivos de apoio — de uma pessoa, então o foco é a completude e o acompanhamento do que falta.",
    },
    {
      q: "Em que formato as pessoas devem mandar os documentos?",
      a: "Em PDF do começo ao fim: formulários achatados, documentos em papel digitalizados em PDF em vez de fotos soltas. A consistência faz tudo arquivar junto e se ler igual.",
    },
    {
      q: "Como acompanho o que ainda está pendente?",
      a: "Mantenha uma pasta por pessoa e uma lista, marcando os itens conforme chegam. Uma olhada mostra o que falta, então as cobranças ficam específicas em vez de vagas.",
    },
    {
      q: "Como mantenho os documentos coletados privados?",
      a: "Use canais diretos ou um drive privado em vez de sites públicos de upload. As pessoas podem digitalizar e preencher no aparelho com o app PDF Editor, então os arquivos delas não são enviados durante a devolução.",
    },
  ],
  related: [
    { label: "Como enviar fichas de cadastro para clientes", path: "/guides/how-to-send-client-intake-forms" },
    { label: "Como gerenciar formulários de inscrição em PDF", path: "/guides/how-to-manage-pdf-application-forms" },
    { label: "Como compartilhar um formulário PDF", path: "/guides/how-to-share-a-pdf-form" },
    { label: "Como digitalizar documentos em PDF", path: "/guides/how-to-scan-documents-to-pdf" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
