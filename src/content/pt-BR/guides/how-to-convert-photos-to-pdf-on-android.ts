import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-android",
  h1: "Como converter fotos em PDF no Android",
  description:
    "Transforme fotos do Android em um PDF usando uma ferramenta de navegador ou a função Imprimir em PDF do sistema. E o fluxo mais rápido pelo app, com digitalização.",
  updated: "2026-05-23",
  intro: [
    "O Android oferece mais de um jeito de transformar fotos em PDF, o que é ao mesmo tempo uma bênção e uma fonte de confusão — os passos mudam entre Samsung, Pixel, Xiaomi e o resto. A boa notícia é que existe um caminho que funciona igual em qualquer Android: uma ferramenta de navegador que roda no seu aparelho e não se importa com quem fabricou o celular.",
    "Este guia cobre esse caminho universal, com a ferramenta gratuita Imagem para PDF, o truque embutido de “Imprimir em PDF” que fica escondido no menu de compartilhamento e o app PDF Editor, para quando você quiser fotos, digitalização e assinatura no mesmo lugar.",
    "As fotos do Android costumam ser salvas em JPG, então você em geral escapa das dores de cabeça de formato que atingem quem usa iPhone — mas vamos apontar a exceção que vale conhecer.",
  ],
  steps: [
    {
      title: "Abra a ferramenta Imagem para PDF no navegador",
      body: "Vá até a ferramenta Imagem para PDF no Chrome ou no navegador que preferir. Ela funciona em qualquer Android, seja qual for a marca, e processa as imagens no seu aparelho — sem enviar nada.",
    },
    {
      title: "Adicione as fotos",
      body: "Toque para selecionar as fotos da galeria ou dos arquivos. JPG e PNG funcionam; cada imagem vira uma página.",
    },
    {
      title: "Ordene as páginas",
      body: "Use as setas para arrumar as fotos. Em um documento de várias páginas, confira a sequência antes de gerar o arquivo.",
    },
    {
      title: "Gere e salve o PDF",
      body: "Toque em Converter para PDF. O arquivo é baixado no celular; salve no app Arquivos ou na nuvem que preferir, ou compartilhe na hora.",
    },
    {
      title: "Alternativa: use Imprimir em PDF",
      body: "Abra as fotos no Google Fotos ou na galeria, toque em Compartilhar → Imprimir e escolha “Salvar como PDF” como impressora. Isso reúne as imagens selecionadas em um PDF sem ferramenta nenhuma, embora você tenha menos controle sobre a ordem.",
    },
    {
      title: "Ou use o app PDF Editor",
      body: "O app combina as fotos da galeria em um PDF, digitaliza páginas novas com detecção automática de bordas e permite assinar — tudo offline e no próprio aparelho.",
    },
  ],
  tips: [
    "O caminho pelo navegador se comporta igual em Samsung, Pixel, Xiaomi e outros, então é o que vale memorizar se você trocar de celular ou ajudar alguém com outra marca.",
    "O truque de Imprimir em PDF quebra um galho, mas dá pouco controle sobre a ordem das páginas — use a ferramenta Imagem para PDF quando a sequência importar.",
    "Recorte as fotos na galeria primeiro. As páginas são dimensionadas pela imagem, então aparar gera um documento mais limpo.",
    "A maioria das câmeras Android salva em JPG, mas algumas salvam HEIF/HEIC no modo de alta eficiência. Se uma foto não carregar, confira os ajustes da câmera ou use o app PDF Editor.",
    "Galerias grandes com fotos em alta resolução geram PDFs pesados. Comprima o resultado antes de mandar por e-mail.",
  ],
  mobileNote:
    "O trabalho com documentos no Android acontece no celular, e o app PDF Editor o mantém ali: combine fotos da galeria, digitalize papel com detecção de bordas, assine e compartilhe — offline e sem enviar nada. Para tarefas repetidas, é mais rápido que abrir o navegador toda vez.",
  faq: [
    {
      q: "O método pelo navegador funciona em todo Android?",
      a: "Funciona. Como a ferramenta roda no navegador, ela se comporta igual em Samsung, Pixel, Xiaomi e qualquer outro aparelho Android — diferente dos recursos nativos, que variam por fabricante.",
    },
    {
      q: "Qual é a diferença entre Imprimir em PDF e a ferramenta?",
      a: "O Imprimir em PDF é nativo do menu de compartilhamento do Android e não exige ferramenta, mas dá pouco controle sobre a ordem das páginas. A ferramenta Imagem para PDF deixa você sequenciar as páginas com precisão, o que importa em documentos de várias folhas.",
    },
    {
      q: "Minhas fotos são enviadas para algum lugar?",
      a: "Não. Tanto a ferramenta Imagem para PDF quanto o app PDF Editor processam as fotos no seu aparelho. As suas imagens continuam privadas.",
    },
    {
      q: "Minhas fotos não carregam na ferramenta — por quê?",
      a: "Alguns celulares Android salvam em HEIF/HEIC no modo de alta eficiência, formato que as ferramentas de navegador podem não ler. Mude a câmera para JPG padrão ou use o app PDF Editor.",
    },
    {
      q: "Dá para deixar o PDF pesquisável?",
      a: "Uma foto simples não tem camada de texto. Para conseguir texto pesquisável, digitalize o documento com o reconhecimento de texto do app PDF Editor em vez de apenas fotografá-lo.",
    },
  ],
  related: [
    { label: "Imagem para PDF — converta fotos no navegador", path: "/image-to-pdf" },
    { label: "Digitalizar para PDF — capture papel com a câmera", path: "/scan-to-pdf" },
    { label: "Como converter fotos em PDF no iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
    { label: "Como converter JPG em PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
