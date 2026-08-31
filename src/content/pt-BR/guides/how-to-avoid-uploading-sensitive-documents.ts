import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-avoid-uploading-sensitive-documents",
  h1: "Como evitar enviar documentos sigilosos (alternativas práticas)",
  description:
    "Quando o fluxo te empurra a subir um PDF sigiloso, quase sempre existe uma alternativa que roda só no seu dispositivo. Os tipos de tarefa e a ferramenta sem upload para cada uma.",
  updated: "2026-05-29",
  intro: [
    "Toda tarefa de PDF tem um momento em que o primeiro link do resultado de busca quer que você suba o seu arquivo. Comprimir, juntar, dividir, converter, assinar — cada uma vem com centenas de sites construídos em torno do modelo de subir e processar. Em arquivos comuns, tudo bem. Em sensíveis (registros financeiros, documentos de identidade, contratos, laudos médicos), é um risco evitável.",
    "Evitar uploads não significa evitar ferramentas modernas. Significa escolher ferramentas que rodam no seu aparelho — no navegador, em um app de celular, no computador. Toda tarefa comum de PDF tem pelo menos uma opção só local que faz o trabalho sem o arquivo nunca tocar um servidor de terceiros.",
    "Este guia é a substituição prática: os tipos de tarefa, a ferramenta só local de cada um e o pequeno conjunto de casos em que o processamento local ainda não cobre a necessidade.",
  ],
  steps: [
    {
      title: "Para comprimir, use um compressor de navegador",
      body: "A ferramenta Comprimir PDF deste site roda localmente. Ela dá conta do arquivo típico cheio de digitalização ou de foto sem fazer upload. Verifique pelas ferramentas de desenvolvedor — nenhuma requisição grande de saída ao adicionar o arquivo.",
    },
    {
      title: "Para juntar, use uma ferramenta de junção no navegador",
      body: "A ferramenta Juntar PDF combina arquivos localmente. O arquivo combinado é gravado nos seus downloads; nenhuma cópia fica em servidor. Mesma arquitetura da compressão — local em primeiro lugar.",
    },
    {
      title: "Para dividir e extrair, use um divisor no navegador",
      body: "As ferramentas Dividir PDF e Extrair páginas do PDF rodam no seu aparelho. Operações de página são mecânicas e se encaixam perfeitamente no processamento local.",
    },
    {
      title: "Para converter, use um conversor no navegador",
      body: "PDF para Word, Word para PDF, Imagem para PDF, PDF para imagens — todas disponíveis em versões de navegador que não fazem upload. A conversão acontece na sua aba.",
    },
    {
      title: "Para assinar, use um app de assinatura local",
      body: "A ferramenta Assinar PDF no navegador ou o app PDF Editor no celular. Assinatura desenhada, sem plataforma de assinatura na nuvem envolvida. O arquivo assinado fica no seu aparelho até você decidir compartilhar.",
    },
    {
      title: "Em tarefas que realmente precisam de servidor, use uma ferramenta paga com garantias explícitas",
      body: "Alguns fluxos (OCR pesado em documentos longos, ocultação avançada) ainda ganham com processamento em servidor. Nesses casos, escolha uma ferramenta paga com compromissos explícitos de retenção e tratamento de dados — não uma gratuita com linguagem vaga.",
    },
  ],
  tips: [
    "Os resultados de busca favorecem ferramentas que pagam pela posição. O primeiro resultado raramente é o mais privado; confira o que você está usando de fato.",
    "Ferramentas só locais funcionam offline. Testar a ferramenta sem internet é uma verificação rápida de que ela não precisa de rede para o seu arquivo.",
    "Não caia em ferramentas que “não armazenam o seu arquivo” mas ainda exigem upload para processar. A janela breve de retenção continua sendo exposição real em material altamente sensível.",
    "Apps de celular que processam localmente costumam ser óbvios — eles funcionam sem internet depois de instalados. O app PDF Editor segue esse padrão.",
    "Crie o hábito. Uma vez que ferramentas só locais viram o seu padrão, o material sensível fica mais seguro sem você precisar pensar nisso toda vez.",
  ],
  mobileNote:
    "No celular, a tentação é usar a ferramenta de PDF que a loja de aplicativos recomenda — e muitas delas fazem upload. O app PDF Editor processa tudo no aparelho, no iOS e no Android, então um documento sigiloso vai da captura pela câmera até a entrega assinada sem tocar um servidor.",
  faq: [
    {
      q: "Dá mesmo para fazer todas as tarefas comuns de PDF sem upload?",
      a: "Dá, nas tarefas do dia a dia: comprimir, juntar, dividir, converter, assinar, marcar, reordenar e extrair. As ferramentas deste site cobrem tudo isso localmente. Algumas operações avançadas (OCR completo em documentos longos) às vezes ainda precisam de servidor.",
    },
    {
      q: "Como verifico que uma ferramenta não faz upload?",
      a: "Ferramentas de desenvolvedor do navegador, aba de rede, solte um arquivo. Se aparecer um POST grande de saída, ela está enviando. Se não, é local. A diferença é visível.",
    },
    {
      q: "Ferramentas locais são mais lentas?",
      a: "Às vezes. O WebAssembly moderno deixa o processamento local competitivo com o de servidor na maioria das tarefas. Operações pesadas em arquivos grandes podem demorar mais localmente, mas a troca por privacidade costuma valer a pena em material sensível.",
    },
    {
      q: "E o OCR — dá para rodar localmente?",
      a: "OCR leve, sim; OCR de alta precisão em documentos longos ainda costuma usar servidor. Se o OCR importa, escolha ferramentas que digam explicitamente onde o processamento acontece.",
    },
    {
      q: "Isso é paranoia?",
      a: "Não em material sensível. O modelo de subir tudo por padrão funcionava quando os documentos eram menos sensíveis e os vazamentos mais raros. As duas coisas mudaram. Local primeiro é uma base sensata hoje.",
    },
  ],
  related: [
    {
      label: "App de PDF ou ferramentas online",
      path: "/compare/pdf-app-vs-online-pdf-tools",
    },
    { label: "Segurança de PDF — proteja com senha e criptografia", path: "/pdf-security" },
    { label: "Como proteger arquivos PDF sigilosos", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Como compartilhar arquivos PDF com privacidade", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Fluxos de documentos com foco em privacidade", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "Segurança de PDF", path: "/pdf-security" },
};

export default content;
