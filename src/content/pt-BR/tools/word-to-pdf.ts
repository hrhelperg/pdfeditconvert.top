import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "word-to-pdf",
  hero: {
    eyebrow: "Word para PDF",
    h1: "Converta Word em PDF — no seu navegador.",
    highlight: "no seu navegador",
    lead: "Transforme um arquivo .docx ou .txt em um PDF limpo e pronto para enviar. Roda inteiramente no seu aparelho — o documento nunca é enviado.",
  },
  privacyNote:
    "Seu arquivo é processado localmente, no seu navegador, e não é enviado aos nossos servidores. Nada sai do seu dispositivo.",
  howTo: {
    heading: "Como converter Word em PDF",
    steps: [
      {
        title: "Escolha o documento",
        body: "Arraste e solte um arquivo .docx ou .txt, ou clique para escolher um.",
      },
      {
        title: "Converta",
        body: "Clique em Converter para PDF. O texto é lido e diagramado em um PDF localmente, no seu navegador.",
      },
      { title: "Baixe", body: "Um PDF A4 limpo é baixado automaticamente." },
      {
        title: "Compartilhe",
        body: "Envie um formato que aparece igual em todo lugar e não é alterado por acidente.",
      },
    ],
  },
  useCases: {
    heading: "Quando esta é a ferramenta certa",
    items: [
      {
        title: "Enviar uma cópia não editável",
        body: "Compartilhe um rascunho em PDF para que ninguém mude o conteúdo sem querer.",
      },
      {
        title: "Enviar uma inscrição",
        body: "Muitos portais exigem PDF, não .docx — converta antes de enviar.",
      },
      {
        title: "Arquivar anotações simples",
        body: "Transforme registros ou anotações em .txt num PDF paginado e organizado.",
      },
      {
        title: "Entrega pronta para impressão",
        body: "Gere um PDF A4 consistente a partir de um documento simples.",
      },
    ],
  },
  limitations: {
    heading: "Limitações honestas",
    items: [
      {
        title: "Conversão focada no texto",
        body: "Extraímos e rediagramamos o texto do documento em um PDF limpo. Fontes originais, imagens, tabelas e o espaçamento exato do .docx não são reproduzidos.",
      },
      {
        title: "Sem .doc antigo",
        body: "Arquivos .doc binários antigos não podem ser lidos no navegador. Salve como .docx antes.",
      },
      {
        title: "Caracteres incomuns simplificados",
        body: "A fonte embutida no PDF cobre o alfabeto latino; alguns caracteres especiais são simplificados para a conversão nunca falhar.",
      },
    ],
  },
  related: [
    { label: "PDF para Word — o caminho inverso", path: "/pdf-to-word" },
    { label: "Imagem para PDF", path: "/image-to-pdf" },
    { label: "Juntar PDFs", path: "/merge-pdf" },
    { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
    {
      label: "Como converter Word em PDF",
      path: "/guides/how-to-convert-word-to-pdf",
    },
  ],
  faq: [
    {
      q: "Meu arquivo é enviado para algum servidor?",
      a: "Não. A conversão roda inteiramente no seu navegador. Seu documento nunca sai do seu dispositivo.",
    },
    {
      q: "O PDF vai ficar igualzinho ao meu arquivo do Word?",
      a: "Não — e não vamos afirmar que fica. Esta é uma conversão limpa, focada no texto: fontes, imagens, tabelas e espaçamento exato do .docx não são reproduzidos.",
    },
    {
      q: "Quais arquivos são aceitos?",
      a: "O .docx moderno do Word e o .txt simples. O .doc binário antigo não é aceito — salve como .docx antes.",
    },
    {
      q: "Existe limite de tamanho?",
      a: "Até 100 MB por arquivo, porque todo o processamento acontece na memória do seu navegador.",
    },
    {
      q: "Dá para converter o PDF de volta para Word?",
      a: "Dá — use PDF para Word para extrair o texto de volta em um .docx editável.",
    },
  ],
  appCta: {
    heading: "Precisa de ferramentas de PDF na correria?",
    sub: "O PDF Editor para iPhone e Android converte, assina e compartilha documentos direto do celular.",
  },
};

export default content;
