import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "extract-pdf-pages",
  hero: {
    eyebrow: "Extrair páginas do PDF",
    h1: "Extraia páginas de um PDF — no seu navegador.",
    highlight: "no seu navegador",
    lead: "Escolha um PDF, digite as páginas ou os intervalos que quer e baixe um novo PDF só com elas. Tudo roda no seu aparelho.",
  },
  privacyNote:
    "Seu arquivo é processado localmente, no seu navegador, e não é enviado aos nossos servidores. Nada sai do seu dispositivo.",
  howTo: {
    heading: "Como extrair páginas de um PDF",
    steps: [
      {
        title: "Escolha o PDF",
        body: "Arraste e solte um PDF ou clique para escolher um. Mostramos o total de páginas do arquivo.",
      },
      {
        title: "Informe as páginas",
        body: "Digite páginas avulsas e intervalos, por exemplo 1-3,5,8-10. A contagem selecionada é atualizada enquanto você digita.",
      },
      {
        title: "Extraia",
        body: "Clique em Extrair páginas. Um novo PDF só com essas páginas é montado localmente.",
      },
      { title: "Baixe", body: "O PDF extraído é baixado automaticamente." },
    ],
  },
  useCases: {
    heading: "Quando extrair ajuda",
    items: [
      {
        title: "Compartilhar só o necessário",
        body: "Envie uma seção, um capítulo ou a página assinada em vez do documento inteiro.",
      },
      {
        title: "Tirar um formulário ou recibo",
        body: "Pegue a única página que o portal pede sem expor o resto.",
      },
      {
        title: "Separar um capítulo",
        body: "Crie um PDF enxuto a partir de um relatório longo ou de um livro, para estudo ou revisão.",
      },
      {
        title: "Montar um material sob medida",
        body: "Reordene a seleção listando as páginas na ordem que você quiser.",
      },
    ],
  },
  limitations: {
    heading: "Limitações honestas",
    items: [
      {
        title: "PDFs protegidos por senha",
        body: "Arquivos criptografados não podem ser abertos no navegador. Desbloqueie antes ou use o app PDF Editor.",
      },
      {
        title: "Páginas fora do intervalo",
        body: "Números de página maiores que o total do documento são ignorados; se nada válido for selecionado, você recebe um erro claro.",
      },
      {
        title: "PDFs muito grandes",
        body: "O navegador fica sem memória muito antes de um app nativo. Para arquivos enormes, use o app PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Dividir um PDF", path: "/split-pdf" },
    { label: "Organizar páginas do PDF", path: "/reorder-pdf-pages" },
    { label: "Comprimir um PDF", path: "/compress-pdf" },
    { label: "Juntar PDFs", path: "/merge-pdf" },
  ],
  faq: [
    {
      q: "Meus arquivos são enviados para algum servidor?",
      a: "Não. A extração roda inteiramente no seu navegador. Seu arquivo nunca sai do seu dispositivo.",
    },
    {
      q: "Que formatos de página posso digitar?",
      a: "Páginas avulsas e intervalos separados por vírgula: 1-3, 2,4,6 ou 1-2,5,8-10. Espaços não atrapalham.",
    },
    {
      q: "O que acontece com um intervalo inválido?",
      a: "Entradas inválidas são recusadas com uma mensagem clara; números fora do intervalo são ignorados. Se não sobrar nada válido, explicamos o motivo.",
    },
    {
      q: "Dá para repetir ou reordenar páginas?",
      a: "Dá. Liste as páginas na ordem que quiser; repetir uma página faz com que ela apareça mais de uma vez.",
    },
    {
      q: "Extrair muda a qualidade?",
      a: "Não. As páginas escolhidas são copiadas exatamente como estão — o texto continua selecionável e nada é recomprimido.",
    },
  ],
  appCta: {
    heading: "Precisa de ferramentas de PDF na correria?",
    sub: "O PDF Editor para iPhone e Android extrai, divide e assina PDFs direto do celular.",
  },
};

export default content;
