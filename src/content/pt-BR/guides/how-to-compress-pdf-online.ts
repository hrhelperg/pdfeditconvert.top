import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-online",
  h1: "Como comprimir um PDF online (sem fazer upload)",
  description:
    "Reduza um PDF direto no navegador — sem upload e sem conta. Como a compressão no dispositivo difere dos sites comuns, e qual é a troca de qualidade.",
  updated: "2026-05-23",
  intro: [
    "“Comprimir PDF online” costuma evocar uma cena familiar e um pouco desconfortável: subir o seu arquivo para o servidor de um desconhecido, esperar, baixar o resultado e torcer para que o documento que você acabou de entregar não fosse nada importante. Existe uma versão melhor desse fluxo — uma que roda na própria aba do navegador, com o arquivo nunca saindo do seu aparelho.",
    "Este guia usa a ferramenta gratuita Comprimir PDF, que faz o trabalho localmente usando o processador do seu aparelho. Ela é “online” no sentido de que você chega até ela por uma página web, mas o seu PDF nunca é enviado a lugar nenhum. Essa diferença pesa justamente nos documentos que as pessoas realmente comprimem: contratos digitalizados, extratos, inscrições.",
    "Vamos percorrer os passos, explicar a troca de qualidade com honestidade e apontar os tipos de arquivo em que a compressão no navegador brilha ou esbarra num limite.",
  ],
  steps: [
    {
      title: "Abra a ferramenta Comprimir PDF",
      body: "Vá até a ferramenta Comprimir PDF no navegador. Ela carrega na página e processa o seu arquivo no aparelho — sem upload e sem cadastro.",
    },
    {
      title: "Escolha o PDF",
      body: "Arraste o arquivo até a área de soltar ou clique para escolhê-lo. Nada é transmitido; o arquivo é lido localmente.",
    },
    {
      title: "Escolha um nível de compressão",
      body: "Baixo preserva mais detalhe, Recomendado equilibra tamanho e qualidade, Forte gera o menor arquivo. Para e-mail e envios, o Recomendado é o ponto certo na maioria das vezes.",
    },
    {
      title: "Comprima",
      body: "Rode a ferramenta. Ela renderiza e recodifica as páginas localmente e depois mostra o tamanho antes e depois, com a porcentagem economizada.",
    },
    {
      title: "Confira se o resultado ficou aceitável",
      body: "Abra o arquivo comprimido e olhe as páginas. Digitalizações devem continuar legíveis; se um nível ficar áspero demais, volte para um mais leve.",
    },
    {
      title: "Baixe o arquivo menor",
      body: "Salve como um arquivo novo, para o seu original ficar intacto. A cópia comprimida está pronta para anexar ou enviar.",
    },
  ],
  tips: [
    "“Online” aqui não significa “enviado”. O arquivo é processado no seu navegador, no seu aparelho, que é o jeito mais seguro de comprimir qualquer coisa sensível.",
    "A compressão tem perdas — nenhuma ferramenta honesta afirma o contrário. Os níveis mais baixos preservam mais detalhe; escolha o que ainda ficar aceitável para o seu uso.",
    "Para conseguir economia real no navegador, a ferramenta renderiza as páginas como imagem, então o texto do resultado deixa de ser selecionável e pesquisável. Guarde o original se você precisar disso.",
    "PDFs só de texto ou vetoriais quase não encolhem, porque há pouca imagem para comprimir — os maiores ganhos vêm de digitalizações e arquivos cheios de foto.",
    "PDFs protegidos por senha não podem ser processados no navegador. Remova a senha antes ou use o app PDF Editor, que trabalha com arquivos protegidos.",
  ],
  mobileNote:
    "Comprimir um documento sensível em movimento é exatamente onde o processamento no aparelho mostra o seu valor. O app PDF Editor comprime totalmente offline — você reduz um contrato em modo avião e nenhum byte sai do seu celular — e ainda dá conta de arquivos protegidos por senha.",
  faq: [
    {
      q: "Meu PDF é realmente enviado para um servidor?",
      a: "Não. Apesar de você chegar por uma página web, a ferramenta Comprimir PDF roda no seu navegador e processa o arquivo no seu aparelho. Nada é transmitido, o que a torna segura para documentos confidenciais.",
    },
    {
      q: "Quanto o meu arquivo vai diminuir?",
      a: "Depende do conteúdo. PDFs digitalizados e cheios de imagem costumam encolher de 50% a 90%; PDFs só de texto podem quase não mudar. A ferramenta mostra o tamanho exato antes e depois.",
    },
    {
      q: "A qualidade cai?",
      a: "Cai um pouco — a compressão tem perdas e não fingimos o contrário. Os níveis mais baixos preservam mais detalhe. Escolha o nível que ficar aceitável para o uso do documento.",
    },
    {
      q: "Por que não consigo selecionar o texto depois de comprimir?",
      a: "Para conseguir economia real de tamanho no navegador, cada página é rasterizada como imagem, o que remove a camada de texto selecionável. Se você precisa de texto pesquisável, guarde o original ou use uma abordagem mais leve.",
    },
    {
      q: "Dá para comprimir um PDF protegido por este caminho?",
      a: "No navegador, não. Remova a senha antes ou use o app PDF Editor, que abre e comprime arquivos protegidos.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduza no navegador", path: "/compress-pdf" },
    { label: "Como comprimir um PDF sem perder qualidade", path: "/guides/how-to-compress-pdf" },
    { label: "Como reduzir o tamanho de um PDF para e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Ferramentas de PDF que respeitam a privacidade", path: "/guides/privacy-first-pdf-tools" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
