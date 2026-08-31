import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf",
  h1: "Como comprimir um PDF sem perder qualidade",
  description:
    "Reduza o tamanho do PDF para enviar por e-mail ou anexar em sistemas — passo a passo com o app PDF Editor no iPhone ou no Android.",
  updated: "2026-05-11",
  intro: [
    "Todo serviço de e-mail ainda tem limite de anexo. O Gmail para em 25 MB. O Outlook esbarra por volta de 20 MB. O Slack e a maioria dos apps de mensagem também recusam algo em torno de 25 MB. E PDFs do mundo real — orçamentos com fotos, contratos digitalizados, relatórios com gráficos — passam desses limites com facilidade.",
    "Existem dois jeitos de deixar um PDF menor. O jeito errado é imprimir em PDF com qualidade mais baixa, o que degrada o texto e as assinaturas de forma permanente. O jeito certo é recomprimir as imagens e recodificar as fontes dentro do arquivo, deixando o texto nítido e cortando de 60% a 90% do tamanho.",
    "Este guia mostra o jeito certo com o app PDF Editor no iPhone ou no Android. Os passos são os mesmos nas duas plataformas. Você termina com um arquivo pequeno o bastante para enviar e visualmente idêntico ao original em qualquer nível de zoom.",
  ],
  steps: [
    {
      title: "Abra o app PDF Editor",
      body: "Inicie o app pela tela inicial. Toque no bloco Comprimir.",
    },
    {
      title: "Importe o PDF",
      body: "Toque em Adicionar arquivo. Escolha em Arquivos / iCloud (iPhone) ou pelo seletor de arquivos (Android). Você também pode compartilhar um PDF de qualquer app para o PDF Editor.",
    },
    {
      title: "Escolha um nível de qualidade",
      body: "Três níveis cobrem quase todos os casos. O Equilibrado serve para a maioria dos arquivos. Escolha Pequeno para o que vai por e-mail ou envio. Escolha Alto quando o resultado precisar ir para a gráfica.",
    },
    {
      title: "Veja a prévia do resultado",
      body: "Toque em Prévia. O app mostra o tamanho original e o comprimido lado a lado, além das miniaturas das primeiras páginas. Dê zoom para conferir a nitidez do texto.",
    },
    {
      title: "Compare com o original",
      body: "Alterne entre as páginas original e comprimida. Se algo parecer degradado (raro no Equilibrado), teste outro nível.",
    },
    {
      title: "Salve ou compartilhe",
      body: "Salve o arquivo comprimido com um nome novo (assim o original fica intacto) ou compartilhe direto por e-mail, Drive ou qualquer app de mensagens.",
    },
  ],
  tips: [
    "Se o arquivo é dominado por páginas digitalizadas, o nível Pequeno pode gerar reduções acima de 90% sem perda visível de qualidade.",
    "Em PDFs quase só de texto, o ganho é menor (10% a 30%) — o arquivo já é eficiente.",
    "Dividir um PDF gigante antes de comprimir deixa a operação mais rápida em celulares antigos e dá mais flexibilidade no envio.",
    "Guarde sempre o original até confirmar que o arquivo comprimido ficou bom — depois de comprimir, a qualidade original não volta.",
    "PDFs comprimidos preservam o texto pesquisável e as assinaturas. A compressão age nas imagens e nas tabelas de fontes, não na camada de conteúdo.",
  ],
  mobileNote:
    "A compressão roda inteiramente no aparelho. Você consegue comprimir um contrato sigiloso dentro de um avião, com o modo avião ligado, sem que um único byte saia do seu celular.",
  faq: [
    {
      q: "Quanto o meu PDF vai diminuir?",
      a: "PDFs digitalizados ou cheios de imagem costumam encolher de 60% a 90%. PDFs com muito texto encolhem menos, geralmente de 10% a 30%. O app mostra o tamanho exato antes e depois.",
    },
    {
      q: "As imagens vão ficar borradas?",
      a: "Os níveis Equilibrado e Alto mantêm as imagens nítidas no zoom normal de leitura. O nível Pequeno aplica uma compressão mais forte — ótimo para e-mail, mas você percebe um leve amaciamento se der muito zoom.",
    },
    {
      q: "Dá para comprimir um PDF protegido por senha?",
      a: "Dá, depois de digitar a senha. O app cuida da descriptografia, comprime o conteúdo e pode reaplicar a proteção ao salvar.",
    },
    {
      q: "Qual é a diferença entre comprimir e compactar em ZIP?",
      a: "Compactar em ZIP coloca o PDF dentro de outro contêiner, mas raramente o encolhe — o PDF já usa compressão interna. A compressão de PDF de verdade reescreve as imagens e as fontes do arquivo, e é o único jeito de conseguir uma economia real.",
    },
    {
      q: "Dá para comprimir vários PDFs de uma vez?",
      a: "Dá. Adicione vários arquivos na mesma sessão e o app processa um depois do outro, aplicando o mesmo nível em todos.",
    },
  ],
  related: [
    { label: "Comprimir PDF — visão geral", path: "/compress-pdf" },
    { label: "Conversor de PDF", path: "/pdf-converter" },
    {
      label: "Como juntar arquivos PDF",
      path: "/guides/how-to-merge-pdf-files",
    },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
