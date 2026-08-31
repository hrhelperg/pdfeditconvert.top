import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "split-pdf",
  hero: {
    eyebrow: "Dividir PDF",
    h1: "Extraia páginas de um PDF — com privacidade, no seu navegador.",
    highlight: "no seu navegador",
    lead: "Escolha um PDF e informe o intervalo de páginas que quer exportar. Use intervalos como 1-3,5,8-10 — o arquivo continua no seu dispositivo.",
  },
  privacyNote:
    "Seu arquivo é processado localmente, no seu navegador, e não é enviado aos nossos servidores. Nada sai do seu dispositivo.",
  howTo: {
    heading: "Como dividir um PDF",
    steps: [
      {
        title: "Escolha o PDF",
        body: "Arraste e solte um único PDF ou clique para escolher o arquivo.",
      },
      {
        title: "Informe os intervalos",
        body: "Digite páginas e intervalos separados por vírgula. Exemplo: 1-3,5,8-10.",
      },
      {
        title: "Divida",
        body: "Clique em Dividir PDF. Montamos um novo PDF só com essas páginas, localmente.",
      },
      {
        title: "Baixe",
        body: "O novo PDF é baixado automaticamente. Renomeie depois de salvar.",
      },
    ],
  },
  useCases: {
    heading: "Quando dividir é a escolha certa",
    items: [
      {
        title: "Mande só as páginas que importam",
        body: "Compartilhe apenas a cláusula do contrato que interessa, e não o documento inteiro.",
      },
      {
        title: "Separe um lote digitalizado",
        body: "Quebre uma digitalização de vários documentos de volta em arquivos individuais.",
      },
      {
        title: "Tire uma página de um relatório",
        body: "Extraia um gráfico ou uma tabela sem expor o resto do arquivo.",
      },
      {
        title: "Monte um anexo mais limpo",
        body: "Corte capa, páginas em branco e anexos antes de mandar por e-mail.",
      },
    ],
  },
  limitations: {
    heading: "Limitações",
    items: [
      {
        title: "PDFs protegidos por senha",
        body: "Arquivos bloqueados não podem ser divididos no navegador. Desbloqueie antes ou use o app PDF Editor.",
      },
      {
        title: "Arquivos muito grandes",
        body: "O navegador pode ficar sem memória em documentos com mais de algumas centenas de megabytes.",
      },
      {
        title: "Um arquivo por vez",
        body: "Esta ferramenta exporta um único PDF com as páginas escolhidas. Para gerar vários arquivos, rode-a mais de uma vez.",
      },
    ],
  },
  related: [
    { label: "Juntar PDF — o caminho inverso", path: "/merge-pdf" },
    { label: "Girar páginas do PDF", path: "/rotate-pdf" },
    { label: "PDF para imagens", path: "/pdf-to-images" },
    { label: "Comprimir um PDF", path: "/compress-pdf" },
    { label: "Extrair páginas do PDF", path: "/extract-pdf-pages" },
    { label: "Organizar páginas do PDF", path: "/reorder-pdf-pages" },
    { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Meus arquivos são enviados para algum servidor?",
      a: "Não. A divisão roda inteiramente no seu navegador; o arquivo nunca sai do seu dispositivo.",
    },
    {
      q: "Qual é a sintaxe do intervalo de páginas?",
      a: "Páginas e intervalos separados por vírgula. Exemplo: 1-3,5,8-10 mantém as páginas 1, 2, 3, 5, 8, 9 e 10.",
    },
    {
      q: "Dá para dividir um PDF protegido por senha?",
      a: "No navegador, não. Remova a senha antes ou use o app PDF Editor.",
    },
    {
      q: "O resultado mantém a qualidade original?",
      a: "Mantém — as páginas são copiadas byte a byte. Não há nova renderização nem perda de qualidade.",
    },
  ],
  appCta: {
    heading: "Dividindo PDF na correria?",
    sub: "O PDF Editor para iPhone e Android divide e junta PDFs direto do celular.",
  },
};

export default content;
