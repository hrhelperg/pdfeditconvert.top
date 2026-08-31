import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-file-size-for-email",
  h1: "Como reduzir o tamanho de um PDF para enviar por e-mail",
  description:
    "Deixe o PDF abaixo do limite de anexo do Gmail e do Outlook. Os limites reais, por que digitalizações estouram tudo e como encolher o arquivo para ele sair.",
  updated: "2026-05-23",
  intro: [
    "Os limites de anexo de e-mail quase não mudaram nos últimos anos, mas os documentos que anexamos ficam cada vez mais pesados. O Gmail te para em 25 MB. O Outlook traça a linha por volta de 20 MB. E o servidor de quem recebe pode limitar ainda mais. Então você anexa um contrato digitalizado ou um relatório cheio de foto, aperta enviar e ele volta — ou, pior, falha em silêncio.",
    "Este guia trata de deixar um PDF pequeno o bastante para realmente sair. Ele usa a ferramenta gratuita Comprimir PDF, que roda no seu navegador sem enviar nada, e cobre as decisões práticas: qual nível de compressão, quando comprimir e quando dividir, e o que fazer quando nem a compressão basta.",
    "A boa notícia é que os arquivos com mais chance de voltar — digitalizações e PDFs cheios de imagem — são justamente os que mais encolhem.",
  ],
  steps: [
    {
      title: "Veja o quanto você está acima do limite",
      body: "Anote o tamanho do arquivo e a sua meta. O Gmail para em 25 MB, o Outlook em torno de 20 MB e alguns servidores corporativos em menos. Saber a diferença indica o quanto ser agressivo.",
    },
    {
      title: "Abra a ferramenta Comprimir PDF",
      body: "Vá até a ferramenta Comprimir PDF no navegador. Ela processa o arquivo no seu aparelho — nada é enviado, o que importa em documentos que você vai mandar por e-mail.",
    },
    {
      title: "Escolha o PDF e um nível",
      body: "Comece pelo Recomendado. Ele equilibra tamanho e qualidade e basta para a maioria dos arquivos. Vá para o Forte só se você continuar acima do limite.",
    },
    {
      title: "Comprima e leia o novo tamanho",
      body: "Rode e confira os números antes e depois. Documentos digitalizados costumam cair bem abaixo de 25 MB numa passada só.",
    },
    {
      title: "Se ainda estiver grande, divida",
      body: "Quando um único documento não consegue ficar pequeno o bastante, use a ferramenta Dividir PDF para enviá-lo em dois ou três arquivos menores — muitas vezes mais prático que destruir a qualidade.",
    },
    {
      title: "Anexe e envie",
      body: "Anexe o arquivo comprimido (ou dividido). Abra uma vez antes para confirmar que ele continua legível no nível escolhido.",
    },
  ],
  tips: [
    "O nível Recomendado resolve a maioria dos limites de e-mail com folga de qualidade. Reserve o Forte para arquivos que continuam acima depois da primeira passada.",
    "Digitalizações e PDFs cheios de foto encolhem mais; um documento só de texto já é pequeno, então, se ele estiver enorme, procure imagens ou fontes embutidas como causa.",
    "Se só a compressão não resolver, dividir o documento é melhor que degradá-lo até ficar ilegível — duas metades legíveis valem mais que um inteiro ruim.",
    "A compressão rasteriza as páginas, então a cópia enviada não terá texto selecionável. Se quem recebe precisa copiar o texto, mande o original por outro caminho e uma prévia comprimida por e-mail.",
    "Quando até o arquivo comprimido é grande demais, um link na nuvem é a resposta honesta — veja o guia sobre enviar arquivos PDF grandes.",
  ],
  mobileNote:
    "A maioria dos anexos que voltam acontece quando você dispara um documento pelo celular no meio de outras coisas. O app PDF Editor comprime offline e compartilha direto com o app de e-mail, então uma digitalização grande demais vira um arquivo enviável sem você sair da caixa de entrada.",
  faq: [
    {
      q: "Qual é o limite real de anexo de e-mail?",
      a: "O Gmail para em 25 MB, o Outlook em torno de 20 MB e alguns servidores corporativos em menos. Mire confortavelmente abaixo do limite de quem recebe, e não apenas do seu.",
    },
    {
      q: "Por que o meu PDF ficou grande demais para o e-mail?",
      a: "Quase sempre por páginas digitalizadas ou fotos embutidas. Cada página digitalizada é essencialmente uma imagem em alta resolução, e um punhado delas passa de 25 MB rapidinho.",
    },
    {
      q: "Que nível de compressão usar para e-mail?",
      a: "Comece pelo Recomendado — ele resolve a maioria dos limites mantendo o documento legível. Passe para o Forte só se continuar acima depois da primeira passada.",
    },
    {
      q: "Meu arquivo é enviado quando eu comprimo?",
      a: "Não. A ferramenta Comprimir PDF roda no seu navegador, no seu aparelho, então o documento continua privado mesmo enquanto você o prepara para enviar.",
    },
    {
      q: "E se a compressão ainda não bastar?",
      a: "Divida o PDF em arquivos menores ou compartilhe um link na nuvem em vez de anexar. As duas opções são melhores que comprimir um documento até ele ficar ilegível.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduza para e-mail", path: "/compress-pdf" },
    { label: "Como enviar arquivos PDF grandes", path: "/guides/how-to-send-large-pdf-files" },
    { label: "Como comprimir um PDF online sem fazer upload", path: "/guides/how-to-compress-pdf-online" },
    { label: "Como dividir um PDF em arquivos separados", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
