import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-iphone",
  h1: "Como converter fotos em PDF no iPhone",
  description:
    "Transforme fotos do iPhone em um único PDF — incluindo a pegadinha do formato HEIC que trava tanta gente. O caminho pelo navegador e o caminho mais rápido pelo app.",
  updated: "2026-05-23",
  intro: [
    "Transformar fotos em PDF no iPhone é algo que as pessoas fazem o tempo todo — um contrato fotografado, uma pilha de recibos para prestação de contas, os dois lados de um documento para um formulário. A tarefa é simples, mas existe uma pegadinha específica do iPhone que causa quase toda a irritação: por padrão, o iPhone salva as fotos em HEIC, não em JPG, e muitas ferramentas não leem HEIC.",
    "Este guia cobre dois caminhos confiáveis. O primeiro usa a ferramenta gratuita Imagem para PDF no Safari, que funciona assim que as suas fotos estão em um formato aceito. O segundo usa o app PDF Editor, que lê HEIC direto da galeria e pula toda essa dança de formato.",
    "Escolha o que couber no momento — mas conheça primeiro o detalhe do HEIC, porque é ele que transforma uma tarefa de 30 segundos em uma confusão.",
  ],
  steps: [
    {
      title: "Decida o formato das suas fotos",
      body: "Abra Ajustes → Câmera → Formatos. “Alta eficiência” salva em HEIC; “Mais compatível” salva em JPG. Mudar para Mais compatível faz as fotos novas funcionarem em todo lugar, inclusive nas ferramentas de navegador.",
    },
    {
      title: "Converta as fotos HEIC que você já tem, se precisar",
      body: "Já fotografou em HEIC? Ou reexporte como JPG (abra em Fotos, compartilhe e escolha uma opção que gere JPG) ou vá direto para o caminho do app, mais abaixo, que lê HEIC sem conversão.",
    },
    {
      title: "Abra a ferramenta Imagem para PDF no Safari",
      body: "Vá até a ferramenta Imagem para PDF. Ela aceita JPG, PNG e WebP e roda inteiramente no seu aparelho — nada é enviado.",
    },
    {
      title: "Adicione as fotos e ordene",
      body: "Toque para escolher as fotos da sua biblioteca e use as setas para colocá-las na sequência certa. A ordem das páginas importa em documentos de várias páginas, como um contrato de duas folhas.",
    },
    {
      title: "Gere e salve o PDF",
      body: "Toque em Converter para PDF. Quando o arquivo baixar, use o ícone de compartilhar para salvá-lo no app Arquivos ou enviá-lo direto.",
    },
    {
      title: "Ou use o app PDF Editor para HEIC e digitalização",
      body: "O app lê fotos HEIC da sua galeria, transforma em PDF e ainda captura páginas novas com detecção de bordas — sem precisar converter formato nenhum.",
    },
  ],
  tips: [
    "A maior causa isolada de “minhas fotos não convertem” no iPhone é o HEIC. Mude para Mais compatível, ou use o app, e o problema desaparece.",
    "Recorte cada foto no app Fotos antes de converter — a página é dimensionada pela imagem, então aparar o fundo gera um documento mais organizado.",
    "Para recibos e documentos, fotografe sobre uma superfície escura e plana, com luz uniforme. Reflexo e sombra são mais difíceis de consertar do que de evitar.",
    "Uma foto virada PDF não é uma digitalização pesquisável. Se você precisa buscar o texto, use o recurso de digitalização do app, que reconhece as palavras.",
    "Se o PDF final ficar grande demais para o e-mail, passe pela ferramenta Comprimir PDF — fotos de celular geram páginas pesadas.",
  ],
  mobileNote:
    "Este fluxo inteiro vive no celular, que é justamente para o que o app PDF Editor foi feito: HEIC direto da galeria, conversão no aparelho sem enviar nada, além de digitalização e assinatura no mesmo lugar. Para qualquer coisa que você faça mais de uma vez, é o caminho mais rápido.",
  faq: [
    {
      q: "Por que as minhas fotos do iPhone não carregam no conversor?",
      a: "Elas estão salvas em HEIC, formato que a maioria das ferramentas de navegador não lê. Mude para “Mais compatível” em Ajustes → Câmera → Formatos para as fotos novas, ou use o app PDF Editor, que lê HEIC direto.",
    },
    {
      q: "Dá para juntar várias fotos em um só PDF?",
      a: "Dá. Adicione todas, arraste para a ordem certa e cada foto vira uma página de um único PDF.",
    },
    {
      q: "Minhas fotos são enviadas para um servidor?",
      a: "Não. A ferramenta de navegador processa tudo no seu aparelho, e o app também. As suas fotos continuam privadas — o que importa em documentos pessoais.",
    },
    {
      q: "O PDF vai ser pesquisável?",
      a: "A partir de uma foto simples, não — não há camada de texto. Use o recurso de digitalização do app PDF Editor para gerar um documento com texto reconhecido e pesquisável.",
    },
    {
      q: "O PDF ficou grande demais para o e-mail — o que faço?",
      a: "Fotos do iPhone em alta resolução geram páginas pesadas. Passe o arquivo pela ferramenta Comprimir PDF para caber no limite de anexo.",
    },
  ],
  related: [
    { label: "Imagem para PDF — converta fotos no navegador", path: "/image-to-pdf" },
    { label: "Digitalizar para PDF — capture papel com a câmera", path: "/scan-to-pdf" },
    { label: "Como converter fotos em PDF no Android", path: "/guides/how-to-convert-photos-to-pdf-on-android" },
    { label: "Como converter JPG em PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
