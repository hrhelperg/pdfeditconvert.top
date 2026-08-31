import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-so-large",
  h1: "Por que meu PDF está tão grande? (e como resolver)",
  description:
    "Os motivos reais de um PDF inchar — digitalizações, fotos embutidas, fontes e mais — e a solução certa para cada um, com ferramentas grátis de navegador.",
  updated: "2026-05-23",
  intro: [
    "Um documento de dez páginas não tem por que ter 60 MB, e ainda assim PDFs incham o tempo todo. Antes de partir para um compressor, vale entender por que o arquivo ficou tão grande — porque a solução certa depende da causa, e a solução errada pode destruir um documento que não precisava ser destruído.",
    "Este guia é um diagnóstico curto. Ele percorre os culpados de sempre por trás de um PDF inchado, como saber com qual você está lidando e a resposta mais eficaz para cada um. A maioria das soluções usa as ferramentas gratuitas deste site, que rodam no seu aparelho e não enviam nada.",
    "No final, você vai saber se o seu arquivo precisa de compressão, de remoção de páginas ou simplesmente de ser exportado de novo a partir da origem — e vai parar de comprimir documentos por hábito.",
  ],
  steps: [
    {
      title: "Suspeite primeiro das páginas digitalizadas",
      body: "Digitalizações são a causa número um. Cada página digitalizada é uma imagem em resolução cheia, então poucas delas superam um documento de texto inteiro. Se o seu PDF veio de um scanner ou da câmera do celular, é quase certamente por isso.",
    },
    {
      title: "Verifique fotos e gráficos embutidos",
      body: "Fotos, prints e gráficos em alta resolução inseridos em um documento carregam todos os seus pixels. Um relatório com uma dúzia de imagens grandes pode ficar enorme mesmo com pouco texto.",
    },
    {
      title: "Considere fontes embutidas e elementos de design",
      body: "Documentos que incorporam várias famílias de fontes completas, ou que foram exportados de programas de design pesados, carregam peso extra em fontes e elementos vetoriais que o conteúdo visivelmente não precisa.",
    },
    {
      title: "Procure conteúdo esquecido ou escondido",
      body: "Páginas duplicadas de uma junção malfeita, folhas em branco inseridas pelo scanner ou histórico de revisão podem inflar o arquivo. Remover páginas desnecessárias às vezes é a economia de tamanho mais simples.",
    },
    {
      title: "Aplique a solução correspondente",
      body: "Para digitalizações e fotos, comprima com a ferramenta Comprimir PDF. Para excesso de páginas, descarte com a Extrair páginas do PDF. Para um documento de texto misteriosamente enorme, exporte de novo a partir do programa de origem.",
    },
    {
      title: "Confira o tamanho de novo",
      body: "Verifique se o arquivo chegou onde você precisa. Se continuar grande depois de comprimir um arquivo cheio de digitalização, o próximo passo é um nível mais forte ou dividir o documento.",
    },
  ],
  tips: [
    "Case a solução com a causa: a compressão ajuda arquivos cheios de imagem; ela quase não faz nada por um PDF só de texto que está grande por outro motivo.",
    "Um documento só de texto surpreendentemente pesado geralmente tem fontes embutidas ou objetos ocultos — exportar de novo pelo programa de origem costuma reduzir mais e melhor que comprimir.",
    "Digitalizar em 600 DPI quando 200 ou 300 bastariam é uma causa comum e evitável de arquivos enormes. Baixe a resolução na origem em documentos que você vai compartilhar.",
    "Remover páginas desnecessárias pode cortar o tamanho sem tocar na qualidade — vale conferir antes de comprimir.",
    "Não comprima por reflexo. Se o arquivo já tem um tamanho razoável, comprimir só o degrada sem ganho real.",
  ],
  mobileNote:
    "As digitalizações de celular são o clássico vilão — imagens em alta resolução salvas como PDF. O app PDF Editor permite digitalizar em uma resolução sensata desde o começo e comprimir offline, então os documentos não incham para começo de conversa e encolhem com facilidade quando incham.",
  faq: [
    {
      q: "O que deixa um PDF grande na maioria das vezes?",
      a: "Páginas digitalizadas e fotos embutidas. Cada uma é uma imagem em resolução cheia, então um punhado delas pesa muitas vezes mais que um documento de texto longo.",
    },
    {
      q: "Por que o meu PDF só de texto continua grande?",
      a: "Provavelmente fontes embutidas, objetos ocultos ou conteúdo que sobrou de edições e junções. Exportar de novo pelo programa de origem, ou remover páginas desnecessárias, costuma ajudar mais que a compressão.",
    },
    {
      q: "A compressão sempre reduz o meu arquivo?",
      a: "Não. A compressão age sobre os dados de imagem, então PDFs cheios de digitalização e foto encolhem muito, enquanto arquivos só de texto ou vetoriais quase não mudam. Se um arquivo de texto está enorme, a causa é outra.",
    },
    {
      q: "Remover páginas reduz o tamanho?",
      a: "Reduz, principalmente se as páginas removidas forem digitalizações ou imagens. Descartar o excesso com a ferramenta Extrair páginas do PDF corta o tamanho sem afetar a qualidade do que fica.",
    },
    {
      q: "Como evitar que as digitalizações fiquem tão grandes?",
      a: "Digitalize em 200 a 300 DPI, em vez de 600, para documentos que você vai compartilhar, e os arquivos já começam bem menores. O app PDF Editor deixa você controlar a qualidade da digitalização desde o início.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduza arquivos cheios de imagem", path: "/compress-pdf" },
    { label: "Extrair páginas do PDF — remova o excesso", path: "/extract-pdf-pages" },
    { label: "Como comprimir um PDF digitalizado", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Melhores configurações de compressão de PDF", path: "/guides/best-pdf-compression-settings" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
