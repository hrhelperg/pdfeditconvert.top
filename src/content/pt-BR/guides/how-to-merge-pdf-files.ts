import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-merge-pdf-files",
  h1: "Como juntar arquivos PDF no celular ou no computador",
  description:
    "Combine vários PDFs em um único documento. Fluxo passo a passo pelo celular com o app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Juntar PDFs é uma das operações com documentos mais comuns para um pequeno negócio ou para quem estuda. Seja recibos digitalizados indo para a contabilidade, artigos reunidos antes de um prazo ou um orçamento costurado aos seus documentos de apoio, enviar um arquivo organizado é melhor que malabarismo com cinco anexos.",
    "Este guia mostra como juntar PDFs pelo celular com o app PDF Editor para iPhone ou Android. O fluxo é o mesmo nas duas plataformas: importar os arquivos, arrastá-los para a ordem desejada e exportar um PDF combinado. A operação inteira costuma levar menos de um minuto.",
    "Se você preferir juntar no computador, os princípios valem para a maioria das ferramentas de PDF atuais. O foco aqui é o fluxo no celular porque é onde a maior parte das junções acontece de verdade — entre reuniões, no cliente ou em trânsito.",
  ],
  steps: [
    {
      title: "Abra o app PDF Editor",
      body: "Inicie o app e toque no bloco Juntar na tela inicial. Não é preciso criar conta para começar.",
    },
    {
      title: "Adicione os arquivos que quer combinar",
      body: "Toque no botão +. Importe cada PDF do app Arquivos, do iCloud Drive, do Google Drive, do OneDrive ou compartilhando de qualquer outro app. Dá para misturar origens à vontade.",
    },
    {
      title: "Reordene a fila",
      body: "Mantenha o dedo em qualquer item da fila e arraste até a posição certa. A ordem da fila é a ordem do arquivo final. Confira a sequência antes de juntar.",
    },
    {
      title: "Gire as páginas deitadas",
      body: "Se alguns arquivos de origem foram digitalizados de lado, toque no ícone de girar ao lado de cada um para o documento final ficar legível.",
    },
    {
      title: "(Opcional) Adicione uma capa",
      body: "Toque em Adicionar capa para inserir uma página de rosto simples com data e um título de uma linha. Útil quando o documento combinado vai para um cliente.",
    },
    {
      title: "Toque em Juntar",
      body: "O app combina todos os arquivos em um único PDF e mostra o resultado para conferência. A junção acontece no aparelho, então até os arquivos protegidos por senha continuam privados.",
    },
    {
      title: "Confira o arquivo combinado",
      body: "Percorra tudo para garantir que as páginas estão na ordem certa e com a orientação correta. Use a visão de miniaturas para conferir rápido.",
    },
    {
      title: "Salve ou compartilhe",
      body: "Salve no app Arquivos, sincronize com a nuvem ou compartilhe direto por e-mail, AirDrop ou qualquer app de mensagens. Escolha um nome descritivo — “Contrato-com-Anexo-2026-05.pdf” é melhor que “Documento(3).pdf” quando o arquivo chega na caixa de entrada de alguém.",
    },
  ],
  tips: [
    "Adicione uma capa quando o documento combinado for para alguém de fora — isso faz o conjunto parecer intencional, e não improvisado.",
    "Gire as páginas digitalizadas de lado antes de juntar, e não depois — corrigir a orientação no final significa exportar o arquivo inteiro de novo.",
    "Se o PDF combinado vai por e-mail, passe pela ferramenta Comprimir depois para caber nos limites típicos de 25 MB de anexo.",
    "Marque as seções combinadas pela visão de páginas para quem recebe pular direto para a parte relevante de um documento longo.",
    "Guarde os arquivos de origem até confirmar que a junção ficou certa — nunca apague os originais na mesma sessão.",
  ],
  mobileNote:
    "Juntar pelo celular funciona especialmente bem quando é preciso combinar digitalizações com PDFs digitais — o app cuida dos dois na mesma fila, e você pode capturar uma digitalização nova ali mesmo para incluir na junção. Isso é desajeitado no computador e é um toque no celular.",
  faq: [
    {
      q: "Existe um número máximo de arquivos para juntar?",
      a: "Não há limite rígido. Lotes muito grandes (mais de 50 arquivos) demoram mais em celulares antigos, mas o app dá conta das junções do mundo real sem dificuldade. Se você notar lentidão, divida o trabalho em duas junções e combine os resultados.",
    },
    {
      q: "Dá para juntar um documento do Word com um PDF?",
      a: "Dá, de forma indireta. Converta o arquivo do Word em PDF primeiro, pelo bloco Converter, e depois adicione o resultado à fila de junção junto com os outros PDFs.",
    },
    {
      q: "O que acontece com arquivos de origem protegidos por senha?",
      a: "Digite a senha quando ela for pedida. O app cuida da descriptografia localmente; o arquivo combinado pode ficar sem proteção ou receber uma nova senha à sua escolha.",
    },
    {
      q: "A formatação original muda depois de juntar?",
      a: "Não. Cada página de origem é preservada exatamente. Só a ordem das páginas muda, e um PDF de envelope é construído em volta delas.",
    },
    {
      q: "Dá para desfazer uma junção?",
      a: "Dá. A ferramenta Dividir PDF quebra qualquer PDF — combinado ou original — de volta em páginas ou intervalos. Os originais nunca são alterados durante a junção.",
    },
  ],
  related: [
    { label: "Juntar PDF — grátis, no navegador", path: "/merge-pdf" },
    { label: "Dividir PDF — extraia páginas no navegador", path: "/split-pdf" },
    { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
    {
      label: "Como comprimir um PDF depois de juntar",
      path: "/guides/how-to-compress-pdf",
    },
  ],
  parentHub: { label: "Juntar PDF", path: "/merge-pdf" },
};

export default content;
