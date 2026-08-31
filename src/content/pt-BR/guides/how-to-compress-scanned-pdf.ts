import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-scanned-pdf",
  h1: "Como comprimir um PDF digitalizado",
  description:
    "PDFs digitalizados são os mais fáceis de encolher e os maiores vilões de tamanho. Como comprimi-los de forma drástica e o que acontece com o texto pesquisável.",
  updated: "2026-05-23",
  intro: [
    "PDFs digitalizados são os pesos-pesados do mundo dos documentos. Cada página é uma imagem em resolução cheia, então um contrato digitalizado curto pesa mais que um relatório de texto de cem páginas. O outro lado é a boa notícia: como digitalizações são quase só imagem, elas comprimem de forma mais drástica que qualquer outro tipo de PDF — muitas vezes 70% ou mais.",
    "Este guia foca especificamente na compressão de digitalizações com a ferramenta gratuita Comprimir PDF, que roda no navegador sem enviar nada. Digitalizações são exatamente o caso em que a compressão no navegador brilha e em que a economia de tamanho mais vale a pena.",
    "Também vamos cobrir a única coisa a vigiar em documentos digitalizados — o texto pesquisável — para você não perder por acidente uma camada de texto que deu trabalho para criar.",
  ],
  steps: [
    {
      title: "Abra a ferramenta Comprimir PDF",
      body: "Vá até a ferramenta Comprimir PDF no navegador. Ela processa o arquivo no seu aparelho, então até um contrato digitalizado continua privado.",
    },
    {
      title: "Escolha o PDF digitalizado",
      body: "Arraste a digitalização até a área de soltar ou clique para escolhê-la. A ferramenta lê o arquivo localmente — nada é enviado.",
    },
    {
      title: "Escolha um nível — aqui dá para ir forte",
      body: "Digitalizações toleram bem a compressão forte porque são imagens, e não texto vetorial nítido. O Recomendado costuma bastar; o Forte ainda pode ficar perfeitamente legível em documentos do dia a dia.",
    },
    {
      title: "Comprima e confira a legibilidade",
      body: "Rode e abra o resultado. O teste-chave em uma digitalização é a legibilidade — você consegue ler o texto com conforto? Se sim em um nível forte, fique com a economia maior.",
    },
    {
      title: "Cuidado com a camada de texto pesquisável",
      body: "Se a sua digitalização passou por OCR para ficar pesquisável, comprimir no navegador renderiza as páginas como imagem e remove essa camada. Guarde o original pesquisável se você precisar dele.",
    },
    {
      title: "Salve a cópia menor",
      body: "Salve com um nome novo. Arquivos digitalizados rotineiramente ficam bem abaixo dos limites de e-mail e de envio em uma única passada.",
    },
  ],
  tips: [
    "Digitalizações comprimem melhor que qualquer outro PDF — se um documento está enorme por ser digitalizado, você está com sorte no quesito tamanho.",
    "Como digitalizações são imagens, normalmente dá para ir a um nível mais forte do que você ousaria em um documento diagramado, mantendo tudo legível.",
    "Se a sua digitalização tinha uma camada de texto pesquisável vinda do OCR, a compressão no navegador a remove. Rode o reconhecimento de texto de novo depois ou guarde o original pesquisável à parte.",
    "Digitalizar em resolução mais baixa (200 a 300 DPI) na origem gera arquivos menores desde o início e reduz o quanto você precisa comprimir depois.",
    "Digitalizações coloridas são maiores que as em tons de cinza. Se a cor não acrescenta nada ao documento, digitalizar em tons de cinza já reduz antes mesmo de comprimir.",
  ],
  mobileNote:
    "As digitalizações costumam começar no celular, e o app PDF Editor mantém o ciclo inteiro no aparelho: digitalize em uma qualidade sensata, comprima offline e — diferente das ferramentas de navegador — rode o reconhecimento de texto para o arquivo menor continuar pesquisável. Sem upload em nenhuma etapa.",
  faq: [
    {
      q: "Quanto um PDF digitalizado pode encolher?",
      a: "Muitas vezes 70% ou mais. Digitalizações são quase só dados de imagem, que é exatamente o alvo da compressão, então elas encolhem muito mais que PDFs baseados em texto.",
    },
    {
      q: "A digitalização continua legível depois de uma compressão forte?",
      a: "Normalmente sim, em documentos do dia a dia — digitalizações toleram compressão forte porque são imagens, e não texto vetorial nítido. Abra sempre o resultado e confirme a legibilidade.",
    },
    {
      q: "Comprimir remove o texto pesquisável de uma digitalização?",
      a: "Se a digitalização passou por OCR para ficar pesquisável, a compressão no navegador renderiza as páginas como imagem e remove essa camada. Guarde o original pesquisável ou rode o reconhecimento de texto novamente depois.",
    },
    {
      q: "Meu documento digitalizado é enviado?",
      a: "Não. A ferramenta Comprimir PDF roda no seu navegador, no seu aparelho, então digitalizações sensíveis como contratos e extratos continuam privadas.",
    },
    {
      q: "Dá para comprimir uma digitalização protegida por senha?",
      a: "No navegador, não. Remova a senha antes ou use o app PDF Editor, que comprime arquivos protegidos offline.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduza digitalizações no navegador", path: "/compress-pdf" },
    { label: "Como converter documentos digitalizados em PDF", path: "/guides/how-to-convert-scanned-documents-to-pdf" },
    { label: "Por que meu PDF está tão grande?", path: "/guides/why-is-my-pdf-so-large" },
    { label: "Como digitalizar documentos em PDF com o celular", path: "/guides/how-to-scan-documents-to-pdf" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
