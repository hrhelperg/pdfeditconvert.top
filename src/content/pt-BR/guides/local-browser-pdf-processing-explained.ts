import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "local-browser-pdf-processing-explained",
  h1: "Processamento local de PDF no navegador, explicado",
  description:
    "Como uma ferramenta de PDF consegue rodar no navegador sem mandar o arquivo para lugar nenhum. A tecnologia, as limitações e como verificar se a ferramenta é mesmo local.",
  updated: "2026-05-29",
  intro: [
    "Surpreende as pessoas que uma aba do navegador consiga comprimir um PDF, juntar dois arquivos ou extrair páginas de um documento de 200 páginas — tudo sem subir nada para um servidor. O navegador parece uma janela para a internet, não um lugar onde trabalho pesado acontece. Mas navegadores modernos conseguem rodar bastante código na sua máquina, e o processamento de PDF acaba sendo exatamente o tipo de trabalho que se encaixa.",
    "A tecnologia por trás das ferramentas locais de PDF no navegador é JavaScript e WebAssembly rodando no seu navegador, trabalhando diretamente no arquivo que você fornece. O arquivo é lido pelo JavaScript, transformado na memória do navegador e gravado em um arquivo novo que você baixa — tudo sem nenhuma chamada de rede levando o conteúdo do seu arquivo.",
    "Este guia explica como isso funciona de fato, por que é seguro por padrão, quais são as limitações (existem algumas reais) e como verificar se a ferramenta que você está considerando é genuinamente local. Nada de exótico; a tecnologia é madura.",
  ],
  steps: [
    {
      title: "Entenda o fluxo básico",
      body: "Você arrasta um arquivo para a página. O JavaScript o lê para a memória do navegador. O JavaScript ou o WebAssembly o transformam (comprimem, juntam, dividem). O resultado é gravado em um arquivo novo que você baixa. Sem upload e sem contato com servidor para o arquivo em si.",
    },
    {
      title: "Saiba o que torna isso privado",
      body: "O servidor fornece o código JavaScript (a própria ferramenta), mas nunca vê os dados que o código processa. A mesma aba do navegador que baixa a ferramenta depois a executa localmente no seu arquivo. A arquitetura separa a entrega do código do tratamento dos dados.",
    },
    {
      title: "Verifique pelas ferramentas de desenvolvedor",
      body: "Abra as ferramentas de desenvolvedor, na aba de rede, e solte o seu arquivo. Uma ferramenta genuinamente local não mostra nenhuma requisição grande de saída ao adicionar o arquivo. Uma com upload manda o arquivo em uma requisição POST de vários megabytes. A diferença é visível.",
    },
    {
      title: "Reconheça as limitações com honestidade",
      body: "O processamento local é limitado pela memória e pelo processador do seu navegador. Arquivos muito grandes (centenas de páginas, gigabytes) podem engasgar; operações avançadas (OCR completo em documentos longos) às vezes precisam de servidor. Ferramentas de navegador são melhores no trabalho comum.",
    },
    {
      title: "Confira se nenhuma telemetria vaza dados",
      body: "Algumas ferramentas registram eventos de análise com metadados (número de páginas, tamanho do arquivo). Isso é diferente de vazar conteúdo — e a análise aparece na mesma aba de rede. Distinga conteúdo de metadado.",
    },
    {
      title: "Trate o navegador como uma fronteira de confiança",
      body: "Uma vez que o seu arquivo está na aba do navegador, ele ainda está no seu aparelho. As ferramentas deste site usam essa propriedade: fazem o trabalho na aba e nunca mandam o seu arquivo para fora, então a privacidade vem de graça.",
    },
  ],
  tips: [
    "O WebAssembly faz o trabalho pesado do processamento de PDF nos navegadores atuais — a velocidade é quase nativa, e é por isso que ferramentas locais alcançaram os aplicativos de computador em desempenho.",
    "Fechar a aba do navegador limpa o arquivo da memória. Ferramentas locais não deixam cópias para trás.",
    "Ferramentas locais funcionam offline depois que a página carrega — uma confirmação útil de que o arquivo não está sendo enviado.",
    "Promessas de privacidade deveriam ser verificáveis. As ferramentas de desenvolvedor são a verificação; você não precisa acreditar no texto de marketing.",
    "Rodar no navegador não é o mesmo que dispensar servidor. Algumas ferramentas “de navegador” ainda sobem o seu arquivo — só a interface está no navegador. Confira o tráfego de rede.",
  ],
  mobileNote:
    "Navegadores de celular rodam as mesmas ferramentas locais em JavaScript e WebAssembly que os de computador. O app PDF Editor usa uma arquitetura parecida: todo o processamento acontece no aparelho, sem upload, então quem usa iPhone e Android tem as mesmas garantias de privacidade.",
  faq: [
    {
      q: "Como o processamento de PDF acontece em um navegador?",
      a: "JavaScript e WebAssembly leem o seu arquivo para a memória da aba, o transformam e gravam o resultado em um download. O servidor fornece o código, mas nunca vê o arquivo.",
    },
    {
      q: "O processamento local no navegador é realmente privado?",
      a: "É, por arquitetura. O arquivo não sai da aba. A única forma de uma ferramenta local vazar seria por um defeito ou por um upload escondido — que as ferramentas de desenvolvedor mostrariam.",
    },
    {
      q: "Qual é o tamanho máximo de arquivo que dá para processar?",
      a: "Navegadores atuais dão conta confortavelmente de PDFs de até algumas centenas de megabytes. Acima disso, você pode esbarrar em limites de memória, conforme o aparelho.",
    },
    {
      q: "Isso funciona offline?",
      a: "Funciona, depois que a página carrega. O processamento acontece localmente; nenhuma rede é necessária. Esse é um bom teste de que a ferramenta é mesmo local.",
    },
    {
      q: "Por que nem toda ferramenta de PDF funciona assim?",
      a: "Algumas operações (OCR de verdade em documentos longos, certas compressões) ainda são mais rápidas em servidor. Muitas ferramentas também dependem do modelo de negócio no servidor. As de navegador viraram uma alternativa viável para quase todas as tarefas do dia a dia.",
    },
  ],
  related: [
    { label: "Ferramentas de PDF — no navegador, sem upload", path: "/pdf-tools" },
    { label: "Ferramentas de PDF no navegador ou com upload", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Vantagens de processar documentos no navegador", path: "/guides/browser-based-document-processing-benefits" },
    { label: "Ferramentas de PDF online são seguras?", path: "/guides/are-online-pdf-tools-safe" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
