import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-iphone",
  h1: "Como diminuir o tamanho de um PDF no iPhone",
  description:
    "Reduza um PDF no iPhone com uma ferramenta de navegador ou com o app PDF Editor. Por que digitalizações do iPhone ficam enormes e como caber nos limites de envio.",
  updated: "2026-05-23",
  intro: [
    "O iPhone produz arquivos lindos e enormes. A mesma câmera de alta resolução que deixa os seus documentos nítidos também deixa os PDFs pesados — poucas páginas digitalizadas já passam de um limite de e-mail antes de você acrescentar qualquer outra coisa. Por isso “diminuir este PDF no meu iPhone” é uma necessidade tão comum e tão específica.",
    "Este guia cobre dois caminhos confiáveis que funcionam no iPhone. O primeiro é a ferramenta gratuita Comprimir PDF no Safari, que roda no seu aparelho e não envia nada. O segundo é o app PDF Editor, que comprime offline e dá conta dos arquivos protegidos por senha que o navegador não abre.",
    "De qualquer forma, o objetivo é o mesmo: um arquivo pequeno o bastante para mandar por e-mail ou enviar a um portal, que ainda leia bem — sem mandar o seu documento para o servidor de outra pessoa por causa disso.",
  ],
  steps: [
    {
      title: "Encontre o PDF no app Arquivos",
      body: "Localize o documento no app Arquivos ou onde ele estiver — uma digitalização que você fez, um anexo que salvou, um conjunto de fotos convertido.",
    },
    {
      title: "Abra a ferramenta Comprimir PDF no Safari",
      body: "Vá até a ferramenta Comprimir PDF. Ela roda no navegador do seu iPhone e processa o arquivo no aparelho — nada é enviado.",
    },
    {
      title: "Escolha o PDF e o nível",
      body: "Toque para selecionar o arquivo e escolha um nível. O Recomendado atende à maioria dos casos; escolha o Forte só se precisar ainda menor.",
    },
    {
      title: "Comprima e confira o tamanho",
      body: "Rode e leia o tamanho antes e depois. Digitalizações do iPhone costumam cair muito numa passada só, porque são cheias de imagem.",
    },
    {
      title: "Salve de volta no Arquivos ou compartilhe",
      body: "Use o ícone de compartilhar para salvar o PDF menor no app Arquivos ou enviá-lo direto. Guarde o original até confirmar que o resultado lê bem.",
    },
    {
      title: "Para arquivos protegidos, use o app",
      body: "O navegador não comprime PDFs protegidos por senha. O app PDF Editor cuida deles offline e é mais rápido para arquivos que você comprime com frequência.",
    },
  ],
  tips: [
    "As digitalizações do iPhone são grandes porque são imagens em alta resolução. É também por isso que elas comprimem tão bem — a economia é maior justamente nesses arquivos.",
    "Fotografar documentos no formato “Mais compatível” (Ajustes → Câmera → Formatos) gera JPGs mais fáceis de comprimir e compartilhar que o HEIC.",
    "A compressão rasteriza as páginas, então a cópia menor não terá texto selecionável. Guarde o original se você precisar buscar ou copiar dele.",
    "A memória do navegador no celular é mais limitada que no computador. Para PDFs muito grandes, o app PDF Editor é o caminho mais confiável.",
    "Salve sempre o arquivo comprimido com um nome novo, para o seu original nítido continuar intacto no aparelho.",
  ],
  mobileNote:
    "Esta é uma tarefa que nasce no celular, e o app PDF Editor foi feito para ela: compressão offline, sem upload, suporte a arquivos protegidos e entrega direta para o Mail, as Mensagens ou a folha de compartilhamento. Para documentos que você reduz com frequência, é mais rápido que abrir o navegador toda vez.",
  faq: [
    {
      q: "Por que os meus PDFs do iPhone são tão grandes?",
      a: "As digitalizações e fotos do iPhone são imagens em alta resolução, e um PDF feito com várias delas é basicamente uma pilha de fotos grandes. É por isso que eles passam dos limites de e-mail — e também por isso que comprimem tão bem.",
    },
    {
      q: "Dá para comprimir um PDF no iPhone sem instalar app?",
      a: "Dá. A ferramenta Comprimir PDF roda no Safari e processa o arquivo no seu aparelho, então você reduz um PDF sem instalar nada.",
    },
    {
      q: "Meu documento é enviado quando eu uso a ferramenta do navegador?",
      a: "Não. Ele é processado localmente no seu iPhone. Nada é mandado para um servidor, o que importa em documentos pessoais ou financeiros.",
    },
    {
      q: "O texto continua selecionável depois?",
      a: "Não. A compressão renderiza as páginas como imagem e remove a camada de texto selecionável. Guarde o original se você precisar de texto pesquisável.",
    },
    {
      q: "E os PDFs protegidos por senha?",
      a: "O navegador não consegue processá-los. Use o app PDF Editor, que abre e comprime arquivos protegidos offline.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduza no navegador", path: "/compress-pdf" },
    { label: "Como diminuir o tamanho de um PDF no Android", path: "/guides/how-to-make-pdf-smaller-on-android" },
    { label: "Como reduzir o tamanho de um PDF para e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Como editar um PDF no iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
