import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "compress-pdf-without-losing-too-much-quality",
  h1: "Como comprimir um PDF sem perder qualidade demais",
  description:
    "Encontre o ponto de equilíbrio entre tamanho e qualidade. Como cada nível de compressão troca detalhe por espaço e como escolher o mais leve que ainda serve.",
  updated: "2026-05-23",
  intro: [
    "Existe uma tensão honesta no coração da compressão de PDF: arquivos menores significam menos detalhe. Qualquer ferramenta que prometa uma economia enorme com zero perda de qualidade está te vendendo alguma coisa. A meta realista não é “sem perda” — é “sem perda que você vá notar para este uso”. Um documento destinado à leitura na tela pode perder detalhe que uma impressão não pode.",
    "Este guia trata de achar esse ponto de equilíbrio com a ferramenta gratuita Comprimir PDF, que roda no navegador sem enviar nada e mostra a economia de tamanho em cada nível. Em vez de partir para a compressão máxima por reflexo, você aprende a escolher o nível mais leve que ainda fica bom.",
    "Acertar esse equilíbrio significa arquivos que saem por e-mail e passam nos portais sem reclamação, e que ainda ficam do jeito que você quer quando alguém abre.",
  ],
  steps: [
    {
      title: "Defina o que é “bom o bastante” para este documento",
      body: "Decida como o arquivo vai ser usado. A leitura na tela tolera mais compressão que a impressão; uma peça de portfólio precisa de mais detalhe que um recibo de despesa. O uso define o seu piso de qualidade.",
    },
    {
      title: "Abra a ferramenta Comprimir PDF",
      body: "Vá até a ferramenta Comprimir PDF. Ela processa o arquivo no seu aparelho e informa a economia de tamanho, para você julgar a troca diretamente.",
    },
    {
      title: "Comece pelo nível mais leve",
      body: "Teste Baixo ou Recomendado primeiro, não Forte. O instinto de maximizar a compressão costuma passar do ponto — muitas vezes você atinge a meta de tamanho com detalhe de sobra.",
    },
    {
      title: "Compare qualidade e tamanho",
      body: "Abra o resultado e olhe as páginas, principalmente as imagens e o texto miúdo. Anote quanto economizou. Se a qualidade está boa e você ficou abaixo do limite, está resolvido.",
    },
    {
      title: "Suba de nível só se precisar",
      body: "Ainda grande demais? Passe para um nível mais forte e confira de novo. Subir aos poucos encontra o ajuste mais leve que atinge a sua meta sem degradar demais.",
    },
    {
      title: "Guarde o original",
      body: "Salve a cópia comprimida com outro nome. A compressão é de mão única — o detalhe que ela remove não volta —, então o original intocado é a sua rede de segurança.",
    },
  ],
  tips: [
    "Comece pelo nível mais leve e suba só se for necessário. A maioria das pessoas comprime demais e degrada os arquivos mais do que a meta de tamanho exigia.",
    "Case a qualidade ao propósito: documentos só para tela sobrevivem a uma compressão pesada que arruinaria algo destinado à impressão.",
    "A compressão rasteriza as páginas, então o resultado perde o texto selecionável. Se você precisa mais de texto pesquisável que de um arquivo menor, esse é um motivo para guardar o original ou comprimir menos.",
    "PDFs cheios de texto quase não encolhem, seja qual for o nível, porque há pouca imagem — não force o nível esperando uma economia que não existe.",
    "Comprima uma vez só. Comprimir um arquivo já comprimido acumula perda sem ganho relevante de tamanho.",
  ],
  mobileNote:
    "Julgar a troca entre tamanho e qualidade é fácil no celular com o app PDF Editor: comprima offline, veja a prévia das páginas e suba ou desça o nível antes de compartilhar — sem upload e com suporte a arquivos protegidos.",
  faq: [
    {
      q: "Dá para comprimir um PDF sem nenhuma perda de qualidade?",
      a: "Não de forma relevante — a compressão útil tem perdas. O objetivo realista é não haver perda que você note para o propósito do documento. Níveis mais leves preservam mais detalhe; escolha o mais leve que ainda fica bom.",
    },
    {
      q: "Qual nível preserva mais qualidade?",
      a: "O Baixo preserva mais detalhe, depois o Recomendado, e o Forte é o menor e mais áspero. Comece leve e só suba se continuar acima da sua meta de tamanho.",
    },
    {
      q: "Por que as minhas imagens ficaram amaciadas depois de comprimir?",
      a: "A compressão de imagem descarta detalhe fino para economizar espaço, e os níveis mais fortes descartam mais. Volte para um nível mais leve se o amaciamento for perceptível para o seu uso.",
    },
    {
      q: "Comprimir remove o texto pesquisável?",
      a: "Remove — as páginas são renderizadas como imagem, o que elimina a camada de texto selecionável. Se o texto pesquisável importa mais que o tamanho, guarde o original ou comprima com menos força.",
    },
    {
      q: "Devo comprimir o arquivo mais de uma vez?",
      a: "Não. Uma segunda passada adiciona perda de qualidade por pouca economia extra. Comprima uma vez, no nível certo, e guarde o original.",
    },
  ],
  related: [
    { label: "Comprimir PDF — controle o nível", path: "/compress-pdf" },
    { label: "Melhores configurações de compressão de PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Como comprimir um PDF sem perder qualidade", path: "/guides/how-to-compress-pdf" },
    { label: "Por que meu PDF está tão grande?", path: "/guides/why-is-my-pdf-so-large" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
