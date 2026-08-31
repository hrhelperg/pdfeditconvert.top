import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-private-pdf-tools",
  h1: "Melhores ferramentas de PDF privadas (quando o sigilo importa de verdade)",
  description:
    "Para contratos, registros financeiros e outros PDFs sensíveis, estas são as ferramentas que respeitam a privacidade pela arquitetura — não apenas pela política declarada.",
  updated: "2026-05-29",
  intro: [
    "“Privada” é aplicada a ferramentas de PDF do mesmo jeito que “natural” é aplicada a rótulo de alimento — com generosidade e pouca precisão. Muitas ferramentas prometem privacidade no texto enquanto sobem cada arquivo para os servidores delas e processam por lá. A privacidade fica sendo de política: “não guardamos o seu arquivo por mais de uma hora”. Melhor que nada, mas depende de a política se sustentar, o que depende de a empresa se sustentar, e isso não é garantia forte para material genuinamente sensível.",
    "Ferramentas de PDF privadas — as privadas de verdade — são privadas por arquitetura. O seu arquivo não chega ao servidor delas. O processamento acontece no seu navegador ou em um aplicativo local no celular. A privacidade não é política; é uma propriedade estrutural. É essa a régua a que vale submeter as ferramentas quando o arquivo importa.",
    "Este guia lista as escolhas privadas para as tarefas comuns com PDF. A arquitetura é o critério; o resto decorre daí.",
  ],
  steps: [
    {
      title: "Comprimir arquivos sensíveis: Comprimir PDF no navegador",
      body: "A ferramenta Comprimir PDF encolhe o arquivo localmente. Extratos bancários, documentos digitalizados e contratos comprimem sem sair do seu aparelho. Verifique nas ferramentas de desenvolvedor — nenhuma requisição de saída ao acrescentar o arquivo.",
    },
    {
      title: "Juntar arquivos sensíveis: Juntar PDF no navegador",
      body: "A ferramenta Juntar PDF combina contratos, anexos ou conjuntos assinados localmente. O arquivo unido é gerado na memória do navegador; as partes ficam na sua máquina o tempo todo.",
    },
    {
      title: "Extrair páginas específicas para compartilhar",
      body: "Se você precisa mandar só algumas páginas de um documento sensível, a ferramenta Extrair páginas do PDF gera um PDF novo apenas com elas — localmente, no seu navegador.",
    },
    {
      title: "Remoção de páginas no lugar de ocultação",
      body: "Ocultar texto de verdade é uma tarefa especializada; se você está removendo páginas inteiras ou substituindo por outras, as ferramentas de página do navegador resolvem sem expor o conteúdo a servidor nenhum.",
    },
    {
      title: "Assinar contratos: Assinar PDF ou o app PDF Editor",
      body: "A ferramenta Assinar PDF no navegador ou o app PDF Editor no celular mantêm o contrato no seu aparelho durante a assinatura. Nenhuma plataforma de assinatura vê o documento.",
    },
    {
      title: "Arquivos privados: armazenamento local criptografado",
      body: "Depois de processar, arquive os PDFs sensíveis em armazenamento criptografado — FileVault, BitLocker, discos externos criptografados ou backup em nuvem com conhecimento zero. Processar localmente não adianta se o arquivo final fica em texto aberto.",
    },
  ],
  tips: [
    "Privacidade por arquitetura ganha de privacidade por política. A arquitetura se verifica; a política depende de confiança.",
    "A aba de rede das ferramentas de desenvolvedor é o passo de verificação. Se você não consegue verificar, não confie.",
    "Não aceite cadastros em ferramentas genuinamente privadas — a conta é um dado que a ferramenta não teria de outro jeito.",
    "Ferramentas privadas de celular deveriam funcionar offline. Se um aplicativo “privado” exige rede constante, pergunte por quê.",
    "Combine ferramentas privadas com canais privados. Processar em sigilo e depois mandar o resultado por e-mail aberto anula o esforço.",
  ],
  mobileNote:
    "No celular, o app PDF Editor é a escolha privada — todo o processamento acontece no aparelho, sem upload e sem conta. Útil em contratos e digitalizações sensíveis, quando o celular é o aparelho natural mas o arquivo não deve passar pelo servidor de ninguém.",
  faq: [
    {
      q: "O que torna uma ferramenta de PDF realmente privada?",
      a: "A arquitetura — o arquivo não chega ao servidor da ferramenta. Políticas de retenção declaradas são mais fracas porque dependem de a empresa cumprir os compromissos dela.",
    },
    {
      q: "Ferramentas “privadas” pagas são melhores que as gratuitas privadas?",
      a: "Não necessariamente. Ferramentas gratuitas que rodam no seu navegador têm a mesma privacidade arquitetural das pagas sem upload. As pagas ganham em recursos avançados (fluxos regulados, litígio), não na privacidade de base.",
    },
    {
      q: "Dá para eu mesmo verificar a privacidade?",
      a: "Dá — ferramentas de desenvolvedor do navegador, aba de rede. Solte um arquivo e observe as requisições de saída. Nenhum upload visível significa que nenhum upload aconteceu.",
    },
    {
      q: "E a criptografia de ponta a ponta?",
      a: "É útil para compartilhar, mas não ajuda no processamento. Se uma ferramenta precisa ler o seu arquivo para processá-lo, a criptografia em trânsito não muda nada — o servidor continua vendo o conteúdo.",
    },
    {
      q: "Qual é a postura de privacidade mais forte para PDFs sensíveis?",
      a: "Processar localmente com ferramentas de navegador ou aplicativos locais. Arquivar em armazenamento criptografado. Compartilhar por canais com criptografia de ponta a ponta. Cada camada cobre uma superfície de ataque diferente.",
    },
  ],
  related: [
    { label: "Segurança de PDF — proteja com senha e criptografia", path: "/pdf-security" },
    { label: "Ferramentas de PDF — no navegador, sem upload", path: "/pdf-tools" },
    { label: "Ferramentas de PDF que respeitam a privacidade", path: "/guides/privacy-first-pdf-tools" },
    { label: "Como proteger arquivos PDF sigilosos", path: "/guides/how-to-protect-sensitive-pdf-files" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
