import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-tools-without-upload",
  h1: "Melhores ferramentas de PDF sem upload (os arquivos ficam no seu aparelho)",
  description:
    "Quando você não quer que o seu PDF saia do aparelho, estas são as ferramentas que fazem o trabalho localmente. Compressão, junção, conversão — tudo com os arquivos na sua máquina.",
  updated: "2026-05-29",
  intro: [
    "Existe aquele momento em que você vai comprimir, juntar ou converter um PDF e hesita. O arquivo é sensível — um contrato, um extrato bancário, um documento digitalizado — e os três primeiros resultados de busca querem que você suba tudo para os servidores deles. O risco parece pequeno em cada caso isolado, mas se acumula ao longo de um ano de manuseio casual de documentos.",
    "Ferramentas de PDF sem upload tiram esse risco da mesa pela arquitetura. O processamento acontece no seu aparelho — na aba do navegador ou em um aplicativo de celular — e o arquivo nunca chega a um servidor de terceiros. A propriedade de privacidade é automática, em vez de depender de uma política de retenção declarada.",
    "Este guia lista as escolhas sem upload para as tarefas comuns com PDF. A preferência é por ferramentas de navegador, porque funcionam sem instalar nada; as escolhas em aplicativo complementam onde o celular é o aparelho melhor para o serviço.",
  ],
  steps: [
    {
      title: "Comprimir sem upload: Comprimir PDF no navegador",
      body: "Abra a página, solte o seu PDF, escolha um nível de compressão e baixe. O algoritmo roda no seu navegador; o arquivo é lido localmente, processado na memória e devolvido como um download novo.",
    },
    {
      title: "Juntar sem upload: Juntar PDF no navegador",
      body: "Solte vários PDFs, arraste para ordenar e baixe o arquivo combinado. A junção acontece localmente — os seus arquivos se unem na memória do navegador, sem nunca ir a um servidor.",
    },
    {
      title: "Dividir e extrair sem upload",
      body: "As ferramentas Dividir PDF e Extrair páginas do PDF resolvem operações de página no navegador. Informe as páginas e baixe o resultado. Útil quando você precisa mandar só algumas páginas de um documento sensível.",
    },
    {
      title: "Converter sem upload",
      body: "PDF para Word, Word para PDF, Imagem para PDF e PDF para imagens rodam todas no navegador. A conversão acontece localmente e o arquivo convertido volta para os seus downloads.",
    },
    {
      title: "Assinar sem upload",
      body: "A ferramenta Assinar PDF ou o app PDF Editor captura a assinatura no seu aparelho. O arquivo assinado fica local até você escolher compartilhar. Sem plataforma de assinatura no meio.",
    },
    {
      title: "Verifique a ausência de upload pelas ferramentas de desenvolvedor",
      body: "Abra as ferramentas de desenvolvedor, vá na aba de rede e solte um arquivo. Uma ferramenta genuinamente sem upload não mostra nenhuma requisição grande de saída. Se aparecer uma, ela está subindo o arquivo apesar do rótulo.",
    },
  ],
  tips: [
    "Ferramentas sem upload funcionam offline depois que a página carrega. Teste — desligue o wi-fi depois do carregamento. As genuinamente locais continuam funcionando.",
    "Arquivos sensíveis (financeiros, jurídicos, de saúde) deveriam ir por padrão para ferramentas sem upload. A redução de risco é real, mesmo que cada caso isolado seja baixo.",
    "Não confie em promessas de “não guardamos o seu arquivo” de ferramentas que fazem upload sem verificação. Arquitetura ganha de política.",
    "Aplicativos de celular que processam localmente costumam ser as escolhas sem upload no telefone. O app PDF Editor segue esse padrão no iOS e no Android.",
    "Ferramentas de navegador sem upload se verificam sozinhas, porque o processamento é visível nas ferramentas de desenvolvedor. Use isso ao avaliar novidades.",
  ],
  mobileNote:
    "O app PDF Editor é o equivalente para iOS e Android do padrão sem upload do navegador — todo o processamento acontece no aparelho, sem upload e sem conta. Útil quando o celular é o aparelho natural para o fluxo (assinar, digitalizar, editar rápido).",
  faq: [
    {
      q: "Por que não fazer upload importa?",
      a: "Porque uploads criam cópias do seu arquivo em servidores que você não controla. Mesmo com políticas fortes, vazamentos acontecem. Ferramentas sem upload eliminam o risco pela arquitetura.",
    },
    {
      q: "Ferramentas sem upload conseguem mesmo comprimir PDFs grandes?",
      a: "Conseguem. Navegadores modernos lidam com centenas de megabytes com folga. O processamento é feito por WebAssembly em velocidade quase nativa.",
    },
    {
      q: "Como confirmo que uma ferramenta não está fazendo upload?",
      a: "Ferramentas de desenvolvedor do navegador, aba de rede, arraste um arquivo. Nenhuma requisição grande de saída = nenhum upload. A verificação é direta e visível.",
    },
    {
      q: "Ferramentas sem upload são gratuitas?",
      a: "Normalmente sim. A economia delas é diferente das de servidor — custo mínimo de hospedagem —, então podem continuar gratuitas sem monetizar os seus dados.",
    },
    {
      q: "E se um fluxo exigir upload?",
      a: "Algumas tarefas especializadas (OCR de alta precisão em arquivos longos) ainda precisam de servidor. Nesses casos, escolha ferramentas pagas com compromissos explícitos de retenção e proteja o arquivo com senha antes.",
    },
  ],
  related: [
    { label: "Ferramentas de PDF — no navegador, sem upload", path: "/pdf-tools" },
    { label: "Melhores ferramentas de PDF grátis", path: "/guides/best-free-pdf-tools" },
    { label: "Ferramentas de PDF gratuitas no navegador", path: "/guides/free-browser-based-pdf-tools" },
    { label: "Como evitar enviar documentos sigilosos", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
