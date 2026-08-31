import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-webp-to-pdf",
  h1: "Como converter WebP em PDF (imagens da web em documento)",
  description:
    "Transforme imagens WebP salvas da internet em um único PDF, no navegador. Por que o WebP é recusado por tantos sistemas e como a conversão resolve.",
  updated: "2026-05-23",
  intro: [
    "WebP é o formato de imagem que sobra quando você salva uma figura de um site atual. Ele é menor que JPG ou PNG com qualidade parecida, e por isso os sites adoram — mas também é o formato que os outros programas recusam em silêncio. Envie um WebP para um portal antigo, jogue em certos editores de documento ou mande para um colega com software legado, e o retorno costuma ser um seco “tipo de arquivo não suportado”.",
    "Converter WebP em PDF contorna esse problema. Um PDF abre em todo lugar, então envolver as suas imagens WebP em um deles as torna universalmente compartilháveis. Este guia usa a ferramenta gratuita Imagem para PDF, que aceita WebP e roda inteiramente no navegador — nada é enviado.",
    "É a decisão certa quando você reuniu imagens da web — fotos de produto, imagens de referência, infográficos salvos — e precisa delas em um formato que todo destinatário e todo sistema realmente aceitem.",
  ],
  steps: [
    {
      title: "Abra a ferramenta Imagem para PDF",
      body: "Vá até a ferramenta Imagem para PDF no navegador. Ela aceita WebP junto com JPG e PNG, e processa tudo no seu aparelho, sem upload e sem cadastro.",
    },
    {
      title: "Adicione os arquivos WebP",
      body: "Arraste as imagens WebP salvas até a área de soltar ou clique para escolhê-las. Cada imagem vira uma página do PDF final.",
    },
    {
      title: "Arrume a ordem",
      body: "Use as setas para cima e para baixo para sequenciar as imagens. Se forem fotos de referência ou uma série passo a passo, acerte a ordem aqui.",
    },
    {
      title: "Gere o PDF",
      body: "Clique em Converter para PDF. As suas imagens WebP são colocadas em páginas e combinadas em um único arquivo, localmente, no seu aparelho.",
    },
    {
      title: "Baixe e compartilhe",
      body: "O PDF é baixado automaticamente. Agora ele abre em qualquer aparelho ou portal que engasgava com os arquivos WebP originais.",
    },
    {
      title: "Comprima se o arquivo for grande",
      body: "O WebP é eficiente, mas uma pilha de imagens em alta resolução ainda soma. Passe o resultado pelo Comprimir PDF se ele precisar caber em um limite de anexo ou de envio.",
    },
  ],
  tips: [
    "A razão inteira de converter WebP em PDF é compatibilidade — o PDF é aceito onde o WebP não é, então você troca um formato chato por um universal.",
    "Se você só precisa das imagens em si em um formato mais comum (e não de um documento), talvez queira um conversor de imagem simples. Escolha o PDF quando o objetivo é um arquivo único, compartilhável e imprimível.",
    "O WebP pode ser com ou sem perdas, dependendo de como foi salvo; de qualquer forma, converter em PDF não devolve o detalhe que o site já descartou.",
    "A transparência de um WebP, como a de um PNG, é renderizada sobre branco assim que vira página de PDF.",
    "Navegadores muito antigos não decodificam WebP. Se a ferramenta não conseguir ler o seu arquivo, abra em um navegador atual ou use o app PDF Editor.",
  ],
  mobileNote:
    "Salvar imagens navegando pelo celular costuma deixar você com arquivos WebP que os outros apps recusam. O app PDF Editor os transforma em um PDF compartilhável na hora, então uma imagem que você achou na web fica pronta para enviar sem desvio pelo notebook.",
  faq: [
    {
      q: "Por que eu preciso converter WebP?",
      a: "Muitos apps, portais e sistemas antigos não aceitam WebP. Converter em PDF entrega um arquivo que abre em todo lugar, que é normalmente o motivo pelo qual as pessoas querem a conversão.",
    },
    {
      q: "Perde-se qualidade na conversão?",
      a: "Converter em PDF não adiciona perda, mas não recupera o detalhe que o site já removeu ao salvar o WebP. O PDF vai ficar tão bom quanto a imagem de origem.",
    },
    {
      q: "Minhas imagens são enviadas?",
      a: "Não. A conversão roda no seu navegador, no seu próprio aparelho, então as imagens continuam privadas.",
    },
    {
      q: "Dá para combinar WebP com JPG e PNG?",
      a: "Dá. A ferramenta aceita os três juntos, então você monta um único PDF a partir de imagens de origens diferentes.",
    },
    {
      q: "A ferramenta não lê o meu WebP — e agora?",
      a: "Use um navegador atualizado, já que os antigos não decodificam WebP. Como alternativa, o app PDF Editor dá conta da conversão.",
    },
  ],
  related: [
    { label: "Imagem para PDF — junte WebP no navegador", path: "/image-to-pdf" },
    { label: "Comprimir PDF — reduza o resultado", path: "/compress-pdf" },
    { label: "Como converter PNG em PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Como converter JPG em PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
