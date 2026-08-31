import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "merge-pdf",
  hero: {
    eyebrow: "Juntar PDF",
    h1: "Una vários PDFs em um só documento — no seu navegador.",
    highlight: "no seu navegador",
    lead: "Escolha dois ou mais arquivos PDF e combine tudo em um documento. Reordene antes de juntar — os arquivos ficam no seu dispositivo.",
  },
  privacyNote:
    "Seus arquivos são processados localmente, no seu navegador, e não são enviados aos nossos servidores. Nada sai do seu dispositivo.",
  howTo: {
    heading: "Como juntar PDFs",
    steps: [
      {
        title: "Escolha os PDFs",
        body: "Arraste e solte dois ou mais PDFs, ou clique para escolhê-los no seu dispositivo.",
      },
      {
        title: "Reordene se precisar",
        body: "Use as setas de cada linha para colocar os arquivos na sequência certa antes de juntar.",
      },
      {
        title: "Junte",
        body: "Clique em Juntar PDFs. Os arquivos são combinados localmente, no seu navegador.",
      },
      {
        title: "Baixe",
        body: "O PDF combinado é baixado automaticamente. Você pode renomeá-lo depois de salvar.",
      },
    ],
  },
  useCases: {
    heading: "Quando juntar é a escolha certa",
    items: [
      {
        title: "Mande um arquivo, não cinco",
        body: "Clientes, contadores e advogados preferem um documento único a uma sequência de anexos.",
      },
      {
        title: "Orçamento + contrato + cobrança",
        body: "Monte um único arquivo, fácil de auditar, a partir de documentos criados em ferramentas diferentes.",
      },
      {
        title: "Reúna páginas digitalizadas",
        body: "Combine digitalizações página a página de um documento de identidade ou contrato em um arquivo que o portal aceita.",
      },
      {
        title: "Monte um relatório",
        body: "Costure capa, corpo do texto e anexos de apoio em uma única entrega.",
      },
    ],
  },
  limitations: {
    heading: "Limitações",
    items: [
      {
        title: "PDFs protegidos por senha",
        body: "Arquivos bloqueados não podem ser juntados no navegador. Desbloqueie no app de origem antes ou use o app PDF Editor.",
      },
      {
        title: "Lotes muito grandes",
        body: "O navegador fica sem memória muito antes de um app nativo. Para mais de 50 arquivos ou digitalizações enormes, use o app PDF Editor.",
      },
      {
        title: "Marcadores e campos de formulário",
        body: "Algumas estruturas embutidas (campos de formulário, anotações) podem ser achatadas ao juntar. O app para celular preserva melhor.",
      },
    ],
  },
  related: [
    { label: "Dividir PDF — o caminho inverso", path: "/split-pdf" },
    { label: "Girar páginas do PDF", path: "/rotate-pdf" },
    { label: "Comprimir um PDF", path: "/compress-pdf" },
    { label: "Organizar páginas do PDF", path: "/reorder-pdf-pages" },
    { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
    { label: "Guia: como juntar PDFs", path: "/guides/how-to-merge-pdf-files" },
  ],
  faq: [
    {
      q: "Meus arquivos são enviados para algum servidor?",
      a: "Não. A junção roda inteiramente no seu navegador. Seus arquivos nunca saem do seu dispositivo.",
    },
    {
      q: "Existe limite de quantos PDFs posso juntar?",
      a: "Não há um limite rígido, mas recomendamos manter cada lote abaixo de 30 arquivos ou cerca de 500 MB no total, para o navegador continuar respondendo bem.",
    },
    {
      q: "Dá para juntar PDFs protegidos por senha?",
      a: "No navegador, não. Remova a senha antes ou use o app PDF Editor, que trabalha com arquivos protegidos.",
    },
    {
      q: "A formatação original muda?",
      a: "Não. Cada página de origem é preservada exatamente como está. O que muda é apenas a ordem das páginas e o documento que as envolve.",
    },
    {
      q: "Consigo separar tudo de novo depois?",
      a: "Sim. Use a ferramenta Dividir PDF para quebrar qualquer arquivo unido de volta em páginas ou intervalos.",
    },
  ],
  appCta: {
    heading: "Precisa de ferramentas de PDF na correria?",
    sub: "O PDF Editor para iPhone e Android junta, assina e digitaliza PDFs direto do celular.",
  },
};

export default content;
