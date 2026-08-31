import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "compress-pdf",
  hero: {
    eyebrow: "Comprimir PDF",
    h1: "Deixe seus PDFs menores — direto no navegador.",
    highlight: "direto no navegador",
    lead: "Reduza um PDF para caber nos limites de e-mail e de envio. Escolha o nível de compressão, veja exatamente quanto economizou e baixe — o arquivo nunca sai do seu dispositivo.",
  },
  privacyNote:
    "Seu arquivo é processado localmente, no seu navegador, e não é enviado aos nossos servidores. Nada sai do seu dispositivo.",
  howTo: {
    heading: "Como comprimir um PDF",
    steps: [
      {
        title: "Escolha o PDF",
        body: "Arraste e solte um PDF ou clique para escolher um arquivo do seu dispositivo.",
      },
      {
        title: "Escolha o nível",
        body: "Baixo preserva mais detalhe; Recomendado equilibra tamanho e qualidade; Forte gera o menor arquivo.",
      },
      {
        title: "Comprima",
        body: "Clique em Comprimir PDF. As páginas são renderizadas e recodificadas localmente, no seu navegador.",
      },
      {
        title: "Baixe",
        body: "Veja o tamanho antes e depois, com a porcentagem de redução, e baixe o arquivo menor.",
      },
    ],
  },
  useCases: {
    heading: "Quando a compressão ajuda mais",
    items: [
      {
        title: "Limite de anexo do e-mail",
        body: "Faça um contrato digitalizado ou um catálogo caber no limite de 10 MB ou 25 MB de anexo.",
      },
      {
        title: "Formulários e portais de envio",
        body: "Sistemas de órgãos públicos e de RH costumam recusar arquivos de poucos megabytes — isso resolve.",
      },
      {
        title: "Documentos digitalizados",
        body: "Digitalizações feitas pelo celular são enormes. PDFs cheios de imagem encolhem muito com a compressão forte.",
      },
      {
        title: "Armazenamento e compartilhamento",
        body: "Mantenha o arquivo morto enxuto e faça os links baixarem mais rápido para quem recebe.",
      },
    ],
  },
  limitations: {
    heading: "Limitações honestas",
    items: [
      {
        title: "O texto vira imagem",
        body: "A compressão renderiza cada página como imagem, então o texto deixa de ser selecionável e pesquisável no resultado. Guarde o original se você precisar disso.",
      },
      {
        title: "PDFs só de texto encolhem pouco",
        body: "Se o PDF já é quase todo texto ou gráfico vetorial, há pouco a comprimir — nesse caso devolvemos o seu arquivo original em vez de entregar um maior.",
      },
      {
        title: "PDFs muito grandes ou bloqueados",
        body: "O navegador fica sem memória muito antes de um app nativo. PDFs protegidos por senha não podem ser processados no navegador — use o app PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Juntar PDFs", path: "/merge-pdf" },
    { label: "Dividir um PDF", path: "/split-pdf" },
    { label: "Extrair páginas do PDF", path: "/extract-pdf-pages" },
    { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
    { label: "Guia: como comprimir um PDF", path: "/guides/how-to-compress-pdf" },
  ],
  faq: [
    {
      q: "Meu arquivo é enviado para algum servidor?",
      a: "Não. A compressão roda inteiramente no seu navegador, usando o processador do seu aparelho. O arquivo nunca sai do seu dispositivo.",
    },
    {
      q: "Quanto o meu PDF vai diminuir?",
      a: "Depende do conteúdo. PDFs digitalizados e cheios de imagem costumam encolher de 50% a 90%. PDFs só de texto podem não encolher nada — nesse caso, devolvemos o seu original.",
    },
    {
      q: "A qualidade cai?",
      a: "Sim, um pouco — é uma compressão com perdas. Os níveis mais baixos preservam mais detalhe. Nunca prometemos “sem perda de qualidade”; escolha o nível que ficar aceitável para o seu uso.",
    },
    {
      q: "Por que o texto deixa de ser selecionável depois de comprimir?",
      a: "Para conseguir uma economia real de tamanho no navegador, cada página é rasterizada como imagem. Se você precisa do texto selecionável, guarde o original ou use um nível mais leve.",
    },
    {
      q: "Dá para comprimir um PDF protegido por senha?",
      a: "No navegador, não. Remova a senha antes ou use o app PDF Editor, que trabalha com arquivos protegidos.",
    },
  ],
  appCta: {
    heading: "Precisa de ferramentas de PDF na correria?",
    sub: "O PDF Editor para iPhone e Android comprime, assina e compartilha PDFs direto do celular.",
  },
};

export default content;
