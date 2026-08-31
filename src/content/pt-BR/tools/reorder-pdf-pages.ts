import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "reorder-pdf-pages",
  hero: {
    eyebrow: "Organizar páginas do PDF",
    h1: "Reorganize as páginas de um PDF — no seu navegador.",
    highlight: "no seu navegador",
    lead: "Escolha um PDF, veja a prévia de cada página, coloque tudo na ordem que você quer e baixe o arquivo reorganizado. Nada é enviado a um servidor.",
  },
  privacyNote:
    "Seu arquivo é processado localmente, no seu navegador, e não é enviado aos nossos servidores. Nada sai do seu dispositivo.",
  howTo: {
    heading: "Como reorganizar as páginas de um PDF",
    steps: [
      {
        title: "Escolha o PDF",
        body: "Arraste e solte um PDF ou clique para escolher um arquivo do seu dispositivo.",
      },
      {
        title: "Confira as prévias",
        body: "Cada página vira uma miniatura, para você ver exatamente o que está movendo.",
      },
      {
        title: "Mova as páginas",
        body: "Use as setas para cima e para baixo de cada página para adiantá-la ou atrasá-la no documento.",
      },
      {
        title: "Gere e baixe",
        body: "Clique em Reorganizar PDF. O arquivo reorganizado é montado localmente e baixado automaticamente.",
      },
    ],
  },
  useCases: {
    heading: "Quando reorganizar ajuda",
    items: [
      {
        title: "Corrigir a ordem da digitalização",
        body: "Apps de digitalização costumam capturar as páginas fora de sequência — acerte tudo antes de compartilhar.",
      },
      {
        title: "Mover capa ou anexo",
        body: "Traga a capa para o início ou empurre o material de apoio para o final.",
      },
      {
        title: "Remontar um arquivo unido",
        body: "Depois de juntar documentos, encaixe as páginas na ordem de leitura que você precisa.",
      },
      {
        title: "Preparar para impressão",
        body: "Organize as páginas para folhetos, apostilas ou impressão frente e verso.",
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
        title: "PDFs muito grandes",
        body: "Gerar uma miniatura para cada página consome memória. Centenas de páginas podem ficar lentas ou esbarrar nos limites do navegador.",
      },
      {
        title: "As prévias levam um instante",
        body: "As miniaturas são geradas página a página no seu aparelho, então PDFs grandes precisam de alguns segundos antes de você reorganizar.",
      },
    ],
  },
  related: [
    { label: "Juntar PDFs", path: "/merge-pdf" },
    { label: "Dividir um PDF", path: "/split-pdf" },
    { label: "Girar páginas do PDF", path: "/rotate-pdf" },
    { label: "Extrair páginas do PDF", path: "/extract-pdf-pages" },
  ],
  faq: [
    {
      q: "Meus arquivos são enviados para algum servidor?",
      a: "Não. O PDF é renderizado e remontado inteiramente no seu navegador. Seu arquivo nunca sai do seu dispositivo.",
    },
    {
      q: "Dá para arrastar as páginas para reordenar?",
      a: "A reorganização usa botões claros de subir e descer em cada página. Isso funciona de forma confiável no celular e no computador, sem alças de arrastar minúsculas para acertar.",
    },
    {
      q: "O conteúdo ou a qualidade das páginas muda?",
      a: "Não. As páginas são copiadas exatamente como estão — só a ordem muda. O texto continua selecionável.",
    },
    {
      q: "Por que demora um instante depois de escolher o arquivo?",
      a: "Cada página é renderizada em uma miniatura localmente, para você ver o que está movendo. PDFs maiores demoram um pouco mais.",
    },
    {
      q: "Dá para reorganizar um PDF protegido por senha?",
      a: "No navegador, não. Remova a senha antes ou use o app PDF Editor, que trabalha com arquivos protegidos.",
    },
  ],
  appCta: {
    heading: "Precisa de ferramentas de PDF na correria?",
    sub: "O PDF Editor para iPhone e Android organiza, junta e assina PDFs direto do celular.",
  },
};

export default content;
