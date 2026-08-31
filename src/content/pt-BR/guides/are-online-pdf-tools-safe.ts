import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "are-online-pdf-tools-safe",
  h1: "Ferramentas de PDF online são seguras? Uma análise honesta do risco",
  description:
    "A maioria das ferramentas “online” de PDF envia seu arquivo para um servidor. Algumas não. Os riscos reais, os tipos de ferramenta que tratam dados de formas diferentes e como distinguir.",
  updated: "2026-05-29",
  intro: [
    "“Ferramenta de PDF online” é uma expressão que esconde uma distinção grande. Algumas dessas ferramentas mandam o seu arquivo para o servidor delas, processam lá e devolvem o resultado. Outras rodam inteiramente no seu navegador — o arquivo nunca sai do seu aparelho. As duas às vezes são chamadas de “online”, e a diferença importa bastante em qualquer coisa sensível.",
    "A resposta honesta para “elas são seguras?” é: depende de qual você está usando e do que há no arquivo. Um extrato bancário passando por uma ferramenta que faz upload é um risco real, mesmo com política de retenção declarada. O mesmo extrato em uma ferramenta que processa localmente nunca toca a rede deles, então o perfil de risco é fundamentalmente outro.",
    "Este guia separa as categorias sem alarmismo. Ele explica onde estão os riscos de fato, como ler uma política de privacidade rápido e como saber se a ferramenta que você está considerando faz upload ou roda localmente — sem acreditar no texto de marketing.",
  ],
  steps: [
    {
      title: "Identifique em que categoria a ferramenta está",
      body: "Três categorias: (1) upload completo — o arquivo vai para o servidor e é processado lá; (2) navegador com sincronização opcional — roda localmente, mas oferece recursos de nuvem; (3) só navegador — nunca faz upload. A categoria determina o risco real.",
    },
    {
      title: "Confira a retenção na política de privacidade",
      body: "Procure palavras como “reter”, “armazenar”, “apagar depois de”. Uma política que diz “os arquivos são apagados em uma hora” diz que é categoria (1). Uma que diz “os arquivos não saem do seu aparelho” indica a (3). Políticas vagas são sinal de alerta.",
    },
    {
      title: "Observe o tráfego de rede para verificar",
      body: "Abra as ferramentas de desenvolvedor, aba de rede, e arraste o seu PDF. Se aparecer um upload (uma requisição grande de saída ao adicionar o arquivo), ela está enviando. Se não aparecer, está processando localmente. Essa é a verificação mais direta.",
    },
    {
      title: "Case a ferramenta à sensibilidade do arquivo",
      body: "Arquivos casuais (fotos de viagem em PDF) podem passar por qualquer categoria. Arquivos sensíveis (financeiros, jurídicos, médicos, pessoais) pedem a categoria (3) ou uma ferramenta paga com compromissos explícitos de tratamento de dados.",
    },
    {
      title: "Pense no que “seguro” significa no seu caso",
      body: "Às vezes o risco é corporativo (não vazar dados de cliente). Às vezes é regulatório (LGPD, GDPR). Às vezes é pessoal (evitar fraude de identidade). A ferramenta certa depende da ameaça que você está enfrentando de fato.",
    },
    {
      title: "Na dúvida, prefira ferramentas de navegador",
      body: "Ferramentas de navegador que não fazem upload são seguras por padrão — o arquivo não pode vazar de um servidor que nunca o recebeu. As ferramentas deste site estão nessa categoria.",
    },
  ],
  tips: [
    "Gratuita + faz upload + sem política de privacidade clara = evite em qualquer coisa sensível. A combinação é o perfil de maior risco.",
    "Mesmo ferramentas com upload e boas políticas têm uma superfície de ataque real — invasões de servidor, falhas de retenção, acesso de funcionários. O processamento local elimina essa superfície.",
    "Não confie em promessas de “não armazenamos” sem verificar. Observar o tráfego de rede é o único jeito de ter certeza.",
    "Ferramentas de navegador também têm limites — operações pesadas e OCR às vezes precisam de servidor. Conheça o limite e não prometa demais.",
    "Se um fluxo exigir mesmo um upload (é raro), escolha uma ferramenta com política de retenção declarada e use um arquivo novo, protegido por senha.",
  ],
  mobileNote:
    "As ferramentas de PDF para celular também se dividem entre as que fazem upload e as que rodam só localmente. O app PDF Editor processa tudo no aparelho, no iOS e no Android — sem upload, sem conta e sem sincronização, a menos que você ative. Em documentos sensíveis no celular, esse é o padrão certo.",
  faq: [
    {
      q: "Subir o meu PDF para uma ferramenta online é realmente arriscado?",
      a: "Depende do arquivo. Para um roteiro de viagem, risco baixíssimo. Para registros financeiros ou contratos, risco real — invasões de servidor e falhas de retenção acontecem. Case a ferramenta ao arquivo.",
    },
    {
      q: "Como sei se uma ferramenta faz upload ou processa localmente?",
      a: "Abra as ferramentas de desenvolvedor do navegador, na aba de rede, e solte um arquivo. Se disparar uma requisição grande de saída ao adicionar o arquivo, ela está enviando. Se não, está processando localmente.",
    },
    {
      q: "Ferramentas pagas são mais seguras que as gratuitas?",
      a: "Às vezes. Ferramentas pagas costumam ter compromissos explícitos de retenção e tratamento de dados. Algumas gratuitas (as deste site) rodam localmente e não precisam desses compromissos, porque nunca recebem o seu arquivo.",
    },
    {
      q: "E a criptografia de ponta a ponta?",
      a: "Ela é útil para compartilhar, mas não ajuda no processamento. Se um servidor precisa ler o seu arquivo para comprimi-lo, a criptografia em trânsito não muda o fato de que ele vê o conteúdo.",
    },
    {
      q: "Devo criptografar o PDF antes de fazer upload?",
      a: "Se você precisar mesmo enviar, sim. Um PDF protegido por senha chega ao servidor já protegido. Mas o melhor é evitar o upload por completo em material sensível.",
    },
  ],
  related: [
    { label: "Ferramentas de PDF — no navegador, sem upload", path: "/pdf-tools" },
    { label: "Ferramentas de PDF que respeitam a privacidade", path: "/guides/privacy-first-pdf-tools" },
    { label: "Ferramentas de PDF no navegador ou com upload", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Ferramentas de PDF online guardam seus arquivos?", path: "/guides/do-online-pdf-tools-store-files" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
