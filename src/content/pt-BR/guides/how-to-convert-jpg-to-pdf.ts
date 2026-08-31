import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-jpg-to-pdf",
  h1: "Como converter JPG em PDF (um arquivo, na ordem certa)",
  description:
    "Reúna uma ou várias fotos JPG em um único PDF no navegador. Ideal para recibos, documentos e papéis fotografados — com notas honestas sobre qualidade e o HEIC do iPhone.",
  updated: "2026-05-23",
  intro: [
    "JPG é o formato que a sua câmera e a maioria dos sites entregam, o que faz dele o ponto de partida mais comum para “transformar isto em PDF”. O motivo da conversão é quase sempre o mesmo: um JPG solto é desconfortável de enviar como documento. Vários JPGs são pior ainda — cinco fotos de recibo em um e-mail é algo que a contabilidade detesta em silêncio. Um PDF só, com as páginas na ordem, é o que as pessoas realmente querem receber.",
    "Este guia usa a ferramenta gratuita Imagem para PDF, que combina arquivos JPG em um único PDF direto no navegador — nada é enviado. É ideal para recibos, fotos de documentos, prints e imagens de papéis que você precisa reunir e mandar.",
    "O JPG é um formato de foto com perdas, então vale saber o que atravessa bem a conversão e o que não atravessa antes de contar com ele para algo que precisa ficar legível.",
  ],
  steps: [
    {
      title: "Abra a ferramenta Imagem para PDF",
      body: "Vá até a ferramenta Imagem para PDF no navegador. Ela aceita JPG, PNG e WebP e roda inteiramente no seu aparelho — sem upload e sem conta.",
    },
    {
      title: "Adicione os arquivos JPG",
      body: "Arraste as fotos até a área de soltar ou clique para escolhê-las. Adicione quantas precisar; cada imagem vira uma página do PDF.",
    },
    {
      title: "Coloque na ordem certa",
      body: "Use as setas para cima e para baixo de cada linha para sequenciar as páginas. Em um documento de várias páginas, esse é o passo que mais importa — a página dois do contrato depois da página um.",
    },
    {
      title: "Gere o PDF",
      body: "Clique em Converter para PDF. Cada imagem é colocada em uma página do tamanho da foto, e o arquivo combinado é gerado localmente.",
    },
    {
      title: "Baixe e renomeie",
      body: "O PDF é baixado automaticamente. Dê um nome descritivo antes de enviar — “Recibos-marco.pdf” é melhor que “IMG_4821.pdf” na caixa de entrada de alguém.",
    },
    {
      title: "Comprima se for por e-mail",
      body: "PDFs feitos de fotos ficam grandes rápido. Se o arquivo passar do limite típico de 25 MB de anexo, passe pela ferramenta Comprimir PDF antes de enviar.",
    },
  ],
  tips: [
    "Corte e endireite cada foto antes de converter. A ferramenta dimensiona a página conforme a imagem, então foto torta vira página torta.",
    "Luz boa e uniforme resolve melhor que qualquer filtro em fotos de documento. Evite a sombra da sua própria mão ou do celular caindo sobre o papel.",
    "O JPG comprime fotos muito bem, mas borra o texto miúdo e as bordas nítidas. Para prints ou qualquer coisa com letras definidas, o PNG mantém o texto mais limpo — veja o guia de PNG para PDF.",
    "Fotos do iPhone costumam ser salvas em HEIC, não em JPG. A ferramenta de navegador precisa de JPG, PNG ou WebP, então mude a câmera para “Mais compatível” nos Ajustes ou use o app PDF Editor, que lê HEIC direto.",
    "A foto de um documento não é uma digitalização pesquisável — não há camada de texto, então não dá para buscar nem copiar as palavras. Use um fluxo de digitalização se isso importa.",
  ],
  mobileNote:
    "A maioria dos JPGs nasce no celular, e é justamente aí que o app PDF Editor brilha: ele puxa as fotos direto da galeria (inclusive HEIC), transforma tudo em PDF e ainda digitaliza páginas novas com detecção de bordas — sem precisar passar pelo computador.",
  faq: [
    {
      q: "Dá para juntar vários JPGs em um só PDF?",
      a: "Dá — é justamente o uso principal. Adicione todas as imagens, coloque na ordem e elas viram páginas consecutivas de um único PDF.",
    },
    {
      q: "Minhas fotos são enviadas para algum lugar?",
      a: "Não. A conversão roda no seu navegador, no seu próprio aparelho. As imagens nunca saem dele, o que importa em documentos pessoais.",
    },
    {
      q: "Minhas fotos do iPhone não carregam — por quê?",
      a: "Elas provavelmente estão em HEIC, formato que a ferramenta de navegador não lê. Mude o formato da câmera para “Mais compatível” em Ajustes → Câmera → Formatos, ou use o app PDF Editor, que lida com HEIC.",
    },
    {
      q: "O PDF vai ser pesquisável?",
      a: "Não. Uma foto convertida é uma imagem sem camada de texto, então as palavras não podem ser buscadas nem selecionadas. Para um documento pesquisável, digitalize com reconhecimento de texto pelo app PDF Editor.",
    },
    {
      q: "Por que o meu PDF ficou tão grande?",
      a: "Fotos de celular em alta resolução são pesadas, e várias delas somam rápido. Passe o resultado pela ferramenta Comprimir PDF para caber nos limites de e-mail e de envio.",
    },
  ],
  related: [
    { label: "Imagem para PDF — junte JPGs no navegador", path: "/image-to-pdf" },
    { label: "Comprimir PDF — reduza o resultado para e-mail", path: "/compress-pdf" },
    { label: "Como converter PNG em PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Como converter fotos em PDF no iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
