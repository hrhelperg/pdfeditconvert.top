import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "free-browser-based-pdf-tools",
  h1: "Ferramentas de PDF gratuitas no navegador (sem instalar, sem upload)",
  description:
    "As ferramentas de PDF que rodam inteiramente no seu navegador — sem instalação, sem conta, sem upload. O que existe, o que elas cobrem e como verificar que rodam mesmo localmente.",
  updated: "2026-05-29",
  intro: [
    "As ferramentas de PDF no navegador mudaram o que “online” significa. O modelo antigo era: suba o seu arquivo, o servidor processa, você baixa o resultado. O modelo novo é: abra uma página, o seu navegador processa o arquivo localmente, você baixa o resultado. A diferença importa — velocidade, privacidade e o fato de a ferramenta poder continuar genuinamente gratuita.",
    "Rodar no navegador não é uma promessa de marketing; é uma arquitetura. O processamento acontece em JavaScript ou WebAssembly na sua máquina, dentro da aba. Nenhum servidor participa do manuseio do seu arquivo. A privacidade e a gratuidade vêm da arquitetura, não de uma política declarada.",
    "Este guia cobre o que existe hoje em ferramentas de PDF no navegador, as tarefas que elas resolvem bem, as que ainda não resolvem e como verificar que uma ferramenta é mesmo local antes de confiar nela.",
  ],
  steps: [
    {
      title: "Saiba o que existe em versão de navegador",
      body: "Compressão, junção, divisão, extração de páginas, reordenação, rotação, marca d'água, imagem para PDF, PDF para imagens, Word para PDF, PDF para Word e assinatura. O conjunto de navegador cobre quase todo o trabalho de PDF do dia a dia.",
    },
    {
      title: "Verifique se a ferramenta é mesmo local",
      body: "Ferramentas de desenvolvedor do navegador, aba de rede, solte um arquivo. Uma ferramenta genuína de navegador não mostra requisição grande de saída ao acrescentar o arquivo. A conferência leva segundos.",
    },
    {
      title: "Use Comprimir PDF para reduzir o tamanho",
      body: "Solte um PDF, escolha um nível de compressão e baixe. A operação inteira roda no seu navegador. Arquivos de digitalização pesada encolhem muito; arquivos só de texto quase não mudam.",
    },
    {
      title: "Use Juntar PDF para combinar arquivos",
      body: "Solte vários PDFs, arraste para reordenar e baixe o arquivo unido. A junção acontece localmente; o combinado é gerado na memória do seu navegador.",
    },
    {
      title: "Use Imagem para PDF e PDF para imagens nas conversões visuais",
      body: "A ferramenta Imagem para PDF combina JPG, PNG e WebP em um único PDF. PDF para imagens extrai cada página como PNG ou JPG. As duas rodam localmente.",
    },
    {
      title: "Use o app PDF Editor nos fluxos que nascem no celular",
      body: "Alguns fluxos (assinar, digitalizar, editar no telefone) funcionam melhor em um aplicativo dedicado que no navegador. O app PDF Editor é o complemento iOS/Android do conjunto de navegador — mesma postura de privacidade, mais adequado ao uso no celular.",
    },
  ],
  tips: [
    "Ferramentas de navegador funcionam offline depois que a página carrega. É uma boa confirmação de que são mesmo locais.",
    "Operações pesadas em arquivos muito grandes podem prender o processador da aba por alguns segundos — isso é normal, não travamento.",
    "Operações de várias páginas fluem em navegadores modernos — você não espera o arquivo inteiro subir porque nada está subindo.",
    "Guarde o endereço da ferramenta — como não existem contas, o link é o seu equivalente a um favorito.",
    "Não confie no rótulo “roda no navegador” sem conferir nas ferramentas de desenvolvedor. Algumas têm interface de navegador e ainda assim sobem o arquivo.",
  ],
  mobileNote:
    "Navegadores de celular também rodam ferramentas de PDF no navegador. O app PDF Editor usa a mesma arquitetura em uma embalagem nativa, com o mesmo processamento no aparelho — quem usa iPhone e Android ganha a mesma garantia de gratuidade e ausência de upload.",
  faq: [
    {
      q: "Quais tarefas de PDF rodam no navegador?",
      a: "Compressão, junção, divisão, extração de páginas, reordenação, rotação, marca d'água, conversão entre imagem e PDF, entre Word e PDF, e assinatura. Quase todo o trabalho do dia a dia cabe.",
    },
    {
      q: "O que ainda não roda no navegador?",
      a: "OCR de alta precisão em documentos longos, ocultação avançada e alguns fluxos especializados de pré-impressão ainda se beneficiam de processamento em servidor.",
    },
    {
      q: "Como sei se uma ferramenta roda mesmo no navegador?",
      a: "Ferramentas de desenvolvedor, aba de rede. Solte um arquivo. Se não aparecer requisição grande de saída, o processamento é local. Se aparecer um envio de vários MB, ela está subindo o arquivo.",
    },
    {
      q: "Rodar no navegador é mais lento que no servidor?",
      a: "É comparável na maioria das tarefas. Navegadores modernos e o WebAssembly são rápidos. Arquivos muito grandes podem demorar mais localmente, mas você economiza o tempo de upload e download.",
    },
    {
      q: "Por que as ferramentas de navegador costumam ser gratuitas?",
      a: "Porque o trabalho pesado acontece no seu aparelho, não nos servidores da ferramenta. O custo de hospedagem é mínimo; ela pode continuar gratuita sem pressão de assinatura.",
    },
  ],
  related: [
    { label: "Ferramentas de PDF — lista completa das ferramentas de navegador", path: "/pdf-tools" },
    { label: "Melhores ferramentas de PDF grátis", path: "/guides/best-free-pdf-tools" },
    { label: "Melhores ferramentas de PDF sem upload", path: "/guides/best-pdf-tools-without-upload" },
    { label: "Vantagens de processar documentos no navegador", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
