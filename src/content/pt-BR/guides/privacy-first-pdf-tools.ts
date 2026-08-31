import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "privacy-first-pdf-tools",
  h1: "Ferramentas de PDF que respeitam a privacidade: seus documentos no seu aparelho",
  description:
    "PDFs guardam alguns dos seus dados mais sensíveis. Como trabalhar com eles sem enviar nada — e o que “foco em privacidade” significa de verdade.",
  updated: "2026-05-23",
  intro: [
    "Pense no que está dentro dos seus PDFs: contratos, extratos bancários, declarações de imposto, cópias de documentos, laudos médicos, acordos assinados. São alguns dos arquivos mais sensíveis que você tem — e o hábito casual de jogá-los na primeira “ferramenta de PDF online grátis” para juntar ou comprimir significa entregar exatamente esses dados a um servidor sobre o qual você não sabe nada.",
    "Ferramentas de PDF com foco em privacidade adotam outra abordagem: o arquivo nunca sai do seu aparelho. O processamento acontece no seu navegador, ou no seu celular, usando o seu próprio hardware — então não há upload, não há cópia no servidor e não há política de retenção com que se preocupar, porque não há nada a reter. Este guia explica o que isso significa na prática e como colocar em uso.",
    "As ferramentas deste site são feitas assim, e o app PDF Editor estende isso ao celular e ao uso offline. Veja como manter os seus documentos seus.",
  ],
  steps: [
    {
      title: "Entenda o que “foco em privacidade” significa aqui",
      body: "Significa que o processamento acontece no seu aparelho, e não em um servidor. O arquivo é lido localmente, a operação roda no seu navegador ou no app e nada é transmitido — não há upload para vazar, interceptar ou reter.",
    },
    {
      title: "Use ferramentas de navegador no dia a dia",
      body: "Juntar, dividir, comprimir, converter, girar e extrair rodam todas no seu navegador aqui. Em documentos sensíveis, é a diferença entre uma operação privada e um upload.",
    },
    {
      title: "Fique offline nos arquivos mais sensíveis",
      body: "Para a cópia de um passaporte ou um contrato confidencial, a garantia mais forte é a mais simples: desconecte da internet e use uma ferramenta que continue funcionando. Se ela funciona, o arquivo realmente não vai a lugar nenhum.",
    },
    {
      title: "Acrescente proteção quando o documento pedir",
      body: "Privacidade no trajeto também é não compartilhar demais. Mande só as páginas necessárias e coloque senha nos documentos realmente confidenciais antes de eles saírem das suas mãos.",
    },
    {
      title: "Escolha o modo de compartilhar de propósito",
      body: "Transferências diretas como AirDrop ou Compartilhamento por Proximidade, ou um link na nuvem que você controla e pode revogar, mantêm você no comando de quem vê o arquivo — mais do que jogá-lo em um app de conversa.",
    },
    {
      title: "Reserve as ferramentas com upload a arquivos públicos",
      body: "Se um documento não é sensível — um panfleto público, um modelo em branco —, uma ferramenta com upload resolve. Guarde as ferramentas no aparelho para tudo que você não gostaria que um desconhecido lesse.",
    },
  ],
  tips: [
    "O teste offline comprova a privacidade: se a ferramenta continua funcionando com a conexão desligada, o seu arquivo não está sendo enviado.",
    "“Arquivos apagados depois de uma hora” ainda significa que o seu documento foi enviado. Uma ferramenta que processa no aparelho nunca o teve para apagar.",
    "Privacidade não é só sobre upload — mandar apenas as páginas necessárias, em vez do arquivo inteiro, limita o que você expõe.",
    "No celular, o processamento no aparelho também significa funcionar sem sinal e não gastar os seus dados — privacidade e praticidade no mesmo pacote.",
    "Ajuste o cuidado ao conteúdo. Um contrato ou documento pessoal merece uma ferramenta no aparelho; um documento público não precisa do mesmo zelo.",
  ],
  mobileNote:
    "O app PDF Editor é feito com foco em privacidade: ele processa documentos no seu celular e funciona totalmente offline, então você comprime um contrato ou digitaliza um documento pessoal em modo avião e nada sai do aparelho. Sem conta, sem upload e sem cópia em servidor.",
  faq: [
    {
      q: "O que faz uma ferramenta de PDF ter “foco em privacidade”?",
      a: "O arquivo é processado no seu aparelho em vez de enviado a um servidor. Não há transmissão, não há cópia remota e não há política de retenção em que confiar — porque o documento nunca sai do seu hardware.",
    },
    {
      q: "As ferramentas deste site têm foco em privacidade?",
      a: "Têm. Juntar, dividir, comprimir, converter, girar e extrair rodam todas no seu navegador, no seu aparelho. Os seus arquivos não são enviados.",
    },
    {
      q: "Como verifico que uma ferramenta não está enviando o meu arquivo?",
      a: "Carregue a ferramenta, fique offline e tente usar. Uma ferramenta genuína no aparelho continua funcionando; uma com upload não consegue, porque não tem para onde mandar o arquivo.",
    },
    {
      q: "Quais documentos mais precisam desse cuidado?",
      a: "Tudo que é sensível: contratos, extratos bancários, declarações de imposto, cópias de RG e passaporte, laudos médicos, acordos assinados. Para arquivos públicos, uma ferramenta com upload resolve.",
    },
    {
      q: "Foco em privacidade significa ferramentas piores?",
      a: "Não. Ferramentas no aparelho dão conta bem das tarefas do dia a dia e costumam ser mais rápidas, já que não há espera de upload nem de download. Trabalhos muito grandes ou especializados são onde a aceleração de hardware do app ajuda.",
    },
  ],
  related: [
    {
      label: "App de PDF ou ferramentas online",
      path: "/compare/pdf-app-vs-online-pdf-tools",
    },
    { label: "Todas as ferramentas de PDF grátis — sem upload e sem conta", path: "/pdf-tools" },
    { label: "Ferramentas de PDF no navegador ou com upload", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Segurança de PDF — proteja documentos", path: "/pdf-security" },
    { label: "Como proteger um arquivo PDF com senha", path: "/guides/how-to-protect-pdf-file" },
  ],
  parentHub: { label: "Segurança de PDF", path: "/pdf-security" },
};

export default content;
