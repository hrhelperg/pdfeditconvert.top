import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-android",
  h1: "Como diminuir o tamanho de um PDF no Android",
  description:
    "Comprima um PDF em qualquer Android com uma ferramenta de navegador que não exige instalação, ou com o app PDF Editor. Caiba nos limites de e-mail e de envio.",
  updated: "2026-05-23",
  intro: [
    "O Android lida com PDFs de formas diferentes conforme o celular — Samsung, Pixel e Xiaomi escondem os ajustes relevantes em lugares distintos —, mas a necessidade é universal: um PDF digitalizado ou cheio de foto está grande demais para mandar por e-mail ou enviar a um portal, e você quer reduzi-lo. A solução mais confiável não depende nem um pouco da marca do seu aparelho.",
    "Este guia usa a ferramenta gratuita Comprimir PDF, que roda no navegador de qualquer Android e processa o arquivo localmente — nada é enviado. Ele também cobre o app PDF Editor, para uso offline e para arquivos protegidos por senha, que o navegador não abre.",
    "Como o caminho pelo navegador é idêntico em todo celular Android, é o método que vale memorizar se você trocar de aparelho ou ajudar alguém com outra marca.",
  ],
  steps: [
    {
      title: "Localize o PDF",
      body: "Encontre o documento no app Arquivos, na pasta de downloads ou onde ele foi salvo — uma digitalização, um anexo guardado, um conjunto de fotos convertido.",
    },
    {
      title: "Abra a ferramenta Comprimir PDF",
      body: "Vá até a ferramenta Comprimir PDF no Chrome ou no navegador que você usa. Ela funciona igual em todo celular Android e processa o arquivo no seu aparelho — sem upload e sem conta.",
    },
    {
      title: "Escolha o PDF e um nível",
      body: "Selecione o arquivo e escolha um nível: Recomendado na maioria dos casos, Forte se precisar menor. O Baixo preserva mais detalhe.",
    },
    {
      title: "Comprima e confira",
      body: "Rode e veja o tamanho antes e depois. PDFs digitalizados e cheios de imagem costumam despencar em uma única passada.",
    },
    {
      title: "Salve ou compartilhe o resultado",
      body: "Salve o arquivo menor no aparelho ou compartilhe direto por e-mail ou app de mensagem. Guarde o original até confirmar que a cópia lê bem.",
    },
    {
      title: "Use o app em arquivos protegidos ou grandes",
      body: "O navegador não comprime PDFs protegidos por senha e pode penar com arquivos muito grandes. O app PDF Editor dá conta dos dois casos, offline.",
    },
  ],
  tips: [
    "O método pelo navegador se comporta igual em Samsung, Pixel, Xiaomi e no resto, então vale a pena memorizá-lo, independentemente do aparelho.",
    "Se um PDF está enorme, quase certamente são as páginas digitalizadas ou fotografadas. Elas são justamente o que melhor comprime.",
    "A compressão rasteriza as páginas, então a cópia menor perde o texto selecionável. Guarde o original se você precisar buscar ou copiar dele.",
    "Algumas câmeras Android salvam em HEIF no modo de alta eficiência; digitalizações em JPG padrão são mais fáceis de comprimir e de compartilhar em geral.",
    "Salve o PDF comprimido com um nome novo, para o original nítido continuar no aparelho.",
  ],
  mobileNote:
    "Comprimir no celular é o que quem usa Android realmente quer, e o app PDF Editor faz isso offline, sem upload, com suporte a arquivos protegidos por senha e compartilhamento direto para os seus apps. Para documentos que você reduz com frequência, é melhor que reabrir o navegador toda vez.",
  faq: [
    {
      q: "O método do navegador funciona em todo celular Android?",
      a: "Funciona. Como a ferramenta Comprimir PDF roda no navegador, ela se comporta igual em Samsung, Pixel, Xiaomi e qualquer outro Android — diferente dos recursos nativos, que variam por marca.",
    },
    {
      q: "Dá para comprimir um PDF no Android sem instalar nada?",
      a: "Dá. A ferramenta Comprimir PDF roda no seu navegador e processa o arquivo no aparelho, então nenhuma instalação é necessária.",
    },
    {
      q: "Meu arquivo é enviado?",
      a: "Não. A compressão acontece localmente no seu celular; nada é mandado para um servidor, o que importa em documentos pessoais.",
    },
    {
      q: "O texto continua selecionável?",
      a: "Não. As páginas são renderizadas como imagem durante a compressão, o que remove a camada de texto selecionável. Guarde o original se você precisar dela.",
    },
    {
      q: "Como comprimir um PDF protegido por senha no Android?",
      a: "O navegador não consegue processar arquivos protegidos. Use o app PDF Editor, que abre e comprime esses arquivos offline.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduza no navegador", path: "/compress-pdf" },
    { label: "Como diminuir o tamanho de um PDF no iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "Como reduzir o tamanho de um PDF para e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Como editar um PDF no Android", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
