import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-png-to-pdf",
  h1: "Como converter PNG em PDF (prints e gráficos nítidos)",
  description:
    "Transforme prints de tela, diagramas e gráficos em PNG num único PDF, no navegador. Por que o PNG mantém o texto nítido e o que acontece com a transparência.",
  updated: "2026-05-23",
  intro: [
    "PNG é o formato que sai quando você tira um print, exporta um gráfico ou salva uma imagem com bordas definidas. Diferente do JPG, ele não tem perdas, então o texto e as linhas finas continuam nítidos em vez de serem borrados pela compressão. Isso faz do PNG o ponto de partida certo quando você quer reunir prints ou diagramas em um PDF que continue legível.",
    "Este guia usa a ferramenta gratuita Imagem para PDF para combinar arquivos PNG em um único documento, direto no navegador e sem enviar nada. Tarefas típicas: uma sequência de prints de interface para revisão, gráficos exportados para um relatório ou uma imagem que alguém precisa como arquivo imprimível e compartilhável, e não como uma imagem solta.",
    "Existe uma peculiaridade específica do PNG que vale conhecer — a transparência — e vamos cobrir o que acontece com ela quando um PNG vira página de PDF.",
  ],
  steps: [
    {
      title: "Abra a ferramenta Imagem para PDF",
      body: "Vá até a ferramenta Imagem para PDF no navegador. Ela lida com PNG, JPG e WebP e roda inteiramente no seu aparelho, sem upload e sem conta.",
    },
    {
      title: "Adicione os arquivos PNG",
      body: "Arraste os prints ou gráficos até a área de soltar, ou clique para selecioná-los. Cada PNG vira uma página do PDF resultante.",
    },
    {
      title: "Ordene as páginas",
      body: "Use as setas para cima e para baixo para arrumar os prints na sequência que conta a história — o passo um antes do passo dois.",
    },
    {
      title: "Gere o PDF",
      body: "Clique em Converter para PDF. A ferramenta coloca cada imagem em uma página do tamanho dela e monta o arquivo combinado localmente.",
    },
    {
      title: "Baixe o documento",
      body: "O PDF é baixado automaticamente. Renomeie de acordo com o conteúdo, para ficar fácil de achar e óbvio para quem abrir.",
    },
    {
      title: "Confira se as páginas ficaram nítidas",
      body: "Abra o PDF e dê zoom em algum texto. O PNG mantém as letras definidas, então prints de painéis, código ou termos devem continuar legíveis.",
    },
  ],
  tips: [
    "O PNG é a melhor escolha em vez do JPG sempre que a imagem tiver texto, interface ou linhas nítidas — a compressão do JPG amacia exatamente essas bordas.",
    "Áreas transparentes de um PNG não continuam transparentes numa página de PDF; elas são renderizadas sobre branco. Se você desenhou um logotipo com fundo transparente, ele vai aparecer sobre branco, o que normalmente está de bom tamanho.",
    "Prints de página inteira podem ficar altos e estreitos. Eles convertem bem, mas considere recortar a parte que importa para a página não ficar quase toda vazia.",
    "Arquivos PNG são maiores que JPGs para a mesma imagem. Uma sequência longa de prints em alta resolução gera um PDF pesado — comprima se for mandar por e-mail.",
    "Para um tamanho de página uniforme (tudo ajustado ao A4) em vez de páginas dimensionadas por imagem, o app PDF Editor oferece esse controle.",
  ],
  mobileNote:
    "Prints se acumulam no celular. O app PDF Editor transforma um lote deles em um único PDF em poucos toques e ainda deixa você anotar ou grifar a parte importante antes de compartilhar — prático para relatar problemas e fazer revisões rápidas em movimento.",
  faq: [
    {
      q: "Por que escolher PNG em vez de JPG para o PDF?",
      a: "O PNG não tem perdas, então texto, prints e diagramas continuam nítidos. O JPG tem perdas e amacia as bordas finas. Se as suas imagens têm letras ou interface, o PNG gera um PDF mais limpo.",
    },
    {
      q: "O que acontece com fundos transparentes?",
      a: "Uma página de PDF não é transparente, então as regiões transparentes são renderizadas sobre branco. Um logotipo ou ícone com fundo transparente simplesmente aparece sobre uma página branca.",
    },
    {
      q: "Meus arquivos são enviados?",
      a: "Não. Tudo roda no seu navegador, no seu aparelho. Os prints e gráficos nunca saem dele.",
    },
    {
      q: "Dá para misturar PNG e JPG no mesmo PDF?",
      a: "Dá. A ferramenta aceita PNG, JPG e WebP juntos, então você pode combinar um print, uma foto e um gráfico exportado em um único documento.",
    },
    {
      q: "O PDF ficou grande — o que fazer?",
      a: "Páginas em PNG são pesadas. Passe o arquivo pela ferramenta Comprimir PDF para caber nos limites de e-mail e de envio, aceitando uma pequena troca de qualidade.",
    },
  ],
  related: [
    { label: "Imagem para PDF — junte PNGs no navegador", path: "/image-to-pdf" },
    { label: "PDF para imagens — o caminho inverso", path: "/pdf-to-images" },
    { label: "Como converter JPG em PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Como converter WebP em PDF", path: "/guides/how-to-convert-webp-to-pdf" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
