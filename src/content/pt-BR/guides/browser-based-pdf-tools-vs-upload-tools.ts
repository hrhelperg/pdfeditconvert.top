import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "browser-based-pdf-tools-vs-upload-tools",
  h1: "Ferramentas de PDF no navegador ou com upload — a diferença",
  description:
    "Nem toda ferramenta “online” de PDF é igual. A diferença entre as que rodam no seu navegador e as que enviam o arquivo para um servidor — e como identificar cada uma.",
  updated: "2026-05-23",
  intro: [
    "Duas ferramentas de PDF podem parecer idênticas — mesma página web, mesma caixa de arrastar e soltar, mesmo botão de baixar — e fazer coisas completamente diferentes com o seu arquivo. Uma processa tudo dentro do seu navegador, no seu próprio aparelho. A outra sobe o arquivo para um servidor, faz o trabalho lá e devolve o resultado. De fora, muitas vezes não dá para distinguir, mas, em qualquer coisa sensível, essa diferença é tudo.",
    "Este guia explica essa distinção, por que ela importa e como saber qual delas você está usando. As ferramentas deste site são do primeiro tipo: rodam no seu navegador e o seu arquivo nunca sai do seu aparelho. Muitos serviços populares de “PDF online” são do segundo tipo, mesmo quando não deixam isso óbvio.",
    "Não é que as ferramentas com upload sejam inúteis — é que você deveria saber a qual delas está entregando o seu documento, e escolher de propósito.",
  ],
  steps: [
    {
      title: "Saiba o que “roda no navegador” significa de verdade",
      body: "Uma ferramenta realmente de navegador faz o processamento na própria página, usando o processador do seu aparelho. O arquivo é lido localmente e nunca é transmitido — o trabalho acontece onde o arquivo já está.",
    },
    {
      title: "Saiba o que uma ferramenta com upload faz",
      body: "Ela manda o seu arquivo para um servidor remoto, processa lá e devolve o resultado. O seu documento passa brevemente pela infraestrutura de outra pessoa, sujeito às políticas de retenção e privacidade dela.",
    },
    {
      title: "Fique atento aos sinais",
      body: "Uma ferramenta com upload costuma exibir uma barra de progresso que depende da sua internet, pode falhar offline e muitas vezes menciona arquivos “apagados depois de uma hora” — uma frase que só faz sentido se eles tiveram o seu arquivo em algum momento.",
    },
    {
      title: "Teste offline",
      body: "Carregue a ferramenta, desligue a conexão e tente usar. Uma ferramenta genuinamente de navegador continua funcionando; uma com upload não consegue, porque não tem para onde mandar o arquivo.",
    },
    {
      title: "Case a escolha ao documento",
      body: "Para arquivos públicos e não sensíveis, qualquer uma serve. Para contratos, documentos pessoais, extratos e trabalho de clientes, escolha uma ferramenta de navegador, para o documento nunca sair do seu aparelho.",
    },
    {
      title: "Use ferramentas no aparelho nas tarefas sensíveis",
      body: "As ferramentas deste site — juntar, dividir, comprimir, converter, girar e o resto — rodam no seu navegador. Recorra a elas quando a privacidade realmente importa.",
    },
  ],
  tips: [
    "“Online” não diz se um arquivo é enviado. A pergunta real é onde o processamento acontece — no seu aparelho ou no servidor deles.",
    "O teste offline é a verificação mais confiável: uma ferramenta de navegador continua funcionando com a conexão desligada; uma com upload, não.",
    "“Apagamos os seus arquivos depois de uma hora” só tranquiliza se você queria enviá-los. Uma ferramenta que nunca envia não tem nada a apagar.",
    "A velocidade é uma pista: ferramentas de navegador não têm espera de upload nem de download, então arquivos grandes costumam ser mais rápidos localmente do que dando a volta pelo servidor.",
    "Ferramentas com upload não são o demônio — para um panfleto público, tudo bem. Só não entregue a elas um contrato ou um documento pessoal sem pensar.",
  ],
  mobileNote:
    "No celular, uma ferramenta com upload ainda queima os seus dados e trava numa conexão fraca. O app PDF Editor processa tudo no aparelho e funciona totalmente offline — então você junta ou comprime um documento sensível dentro de um trem sem sinal, sem nada sair do seu celular.",
  faq: [
    {
      q: "Todas as ferramentas de PDF online são iguais?",
      a: "Não. Algumas processam o arquivo no navegador, no seu aparelho; outras o enviam para um servidor. Elas podem parecer idênticas, então a diferença passa fácil despercebida — mas é ela que determina se o seu documento sai do seu aparelho.",
    },
    {
      q: "Como sei se uma ferramenta envia o meu arquivo?",
      a: "Teste offline. Uma ferramenta de navegador continua funcionando com a conexão desligada; uma com upload, não, já que ela não tem para onde mandar o arquivo. Ferramentas com upload também tendem a mostrar barras de progresso dependentes da rede.",
    },
    {
      q: "As ferramentas deste site rodam no navegador?",
      a: "Rodam. Juntar, dividir, comprimir, converter, girar e as demais funcionam no seu navegador, usando o processador do seu aparelho. Os seus arquivos nunca são enviados.",
    },
    {
      q: "Alguma hora tudo bem usar uma ferramenta com upload?",
      a: "Em documentos públicos e não sensíveis, sim. A cautela vale para contratos, documentos pessoais, extratos financeiros e trabalho de clientes, em que uma ferramenta de navegador mantém o arquivo no seu aparelho.",
    },
    {
      q: "Por que as ferramentas de navegador às vezes são mais rápidas?",
      a: "Não há espera de upload nem de download. O arquivo já está no seu aparelho, então, em documentos grandes, o processamento local costuma ganhar da ida e volta ao servidor.",
    },
  ],
  related: [
    { label: "Todas as ferramentas de PDF grátis — no navegador, sem upload", path: "/pdf-tools" },
    { label: "Ferramentas de PDF que respeitam a privacidade", path: "/guides/privacy-first-pdf-tools" },
    { label: "App de PDF ou ferramentas online", path: "/compare/pdf-app-vs-online-pdf-tools" },
    { label: "Como comprimir um PDF online sem fazer upload", path: "/guides/how-to-compress-pdf-online" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
