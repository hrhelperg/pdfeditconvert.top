import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-split-pdf-files",
  h1: "Como dividir um PDF em arquivos separados",
  description:
    "Quebre um PDF grande em arquivos menores por intervalo de páginas, no navegador. Quando dividir e quando extrair, e como manter o original seguro.",
  updated: "2026-05-23",
  intro: [
    "Dividir um PDF é o que se faz quando um arquivo está tentando ser vários documentos ao mesmo tempo: um lote digitalizado que na verdade é um contrato mais os anexos, um relatório de 200 páginas do qual você só precisa de um capítulo, ou um pacote combinado que precisa sair de novo em arquivos separados. Em vez de mandar tudo e pedir para a pessoa achar a parte dela, você divide.",
    "Este guia usa a ferramenta gratuita Dividir PDF, que separa um PDF por intervalo de páginas direto no navegador — nada é enviado. É um jeito rápido e privado de transformar um arquivo nas partes menores de que você realmente precisa para enviar ou guardar.",
    "Também vamos esclarecer uma confusão comum: a diferença entre dividir um PDF e extrair páginas, porque a ferramenta certa depende do que você quer ter no final.",
  ],
  steps: [
    {
      title: "Abra a ferramenta Dividir PDF",
      body: "Vá até a ferramenta Dividir PDF no navegador. Ela roda no seu aparelho — sem upload e sem conta.",
    },
    {
      title: "Escolha o PDF",
      body: "Arraste o arquivo até a área de soltar ou clique para escolhê-lo. A ferramenta lê o total de páginas para você dividir por intervalo.",
    },
    {
      title: "Decida onde o documento se separa",
      body: "Olhe os números das páginas e identifique os limites — por exemplo, as páginas 1 a 10 são o contrato e as 11 a 24 são o anexo. Planeje os intervalos antes de dividir.",
    },
    {
      title: "Informe o intervalo a separar",
      body: "Especifique o intervalo que deve virar um arquivo próprio. Repita para cada seção que você precisa destacar.",
    },
    {
      title: "Baixe cada parte",
      body: "A ferramenta gera um novo PDF para o intervalo escolhido. Salve cada um com um nome claro e específico da seção.",
    },
    {
      title: "Mantenha o original intacto",
      body: "Dividir não altera a origem — o seu PDF original continua inteiro no seu aparelho. Guarde-o até confirmar que todas as partes saíram certas.",
    },
  ],
  tips: [
    "Divida quando quiser vários documentos separados; extraia quando quiser reunir algumas páginas em um arquivo novo. Parecem a mesma coisa, mas produzem resultados diferentes.",
    "Anote os limites de página antes de começar. Dividir um relatório longo fica muito mais rápido quando você já sabe que a metodologia começa na página 31.",
    "Nomeie cada parte pelo conteúdo, não pelo intervalo — “Anexo-B.pdf” é mais útil para quem recebe do que “paginas-25-40.pdf”.",
    "Dividir um PDF enorme antes também acelera as outras operações: comprimir ou converter uma seção de 15 páginas é melhor do que brigar com o arquivo inteiro de 300.",
    "PDFs protegidos por senha não podem ser processados no navegador. Remova a senha antes ou use o app PDF Editor, que trabalha com arquivos protegidos.",
  ],
  mobileNote:
    "No celular, dividir costuma ser sobre mandar a fatia certa para a pessoa certa, de onde você estiver. O app PDF Editor divide, extrai e compartilha em poucos toques e funciona offline — útil quando você está no cliente e precisa devolver só as páginas assinadas.",
  faq: [
    {
      q: "Qual é a diferença entre dividir e extrair?",
      a: "Dividir quebra um PDF em vários arquivos separados por intervalo. Extrair reúne as páginas escolhidas em um único arquivo novo. Use dividir para separar um documento e extrair para juntar páginas específicas.",
    },
    {
      q: "Dividir altera o meu arquivo original?",
      a: "Não. O PDF de origem fica intocado — a ferramenta cria arquivos novos para os intervalos escolhidos. Guarde o original até conferir os resultados.",
    },
    {
      q: "Meu PDF é enviado?",
      a: "Não. A divisão roda no seu navegador, no seu aparelho, então o arquivo nunca sai dele — seguro para contratos e relatórios confidenciais.",
    },
    {
      q: "Em quantas partes dá para dividir um PDF?",
      a: "Quantas você precisar — repita a seleção de intervalo para cada seção. PDFs muito grandes podem forçar a memória do navegador; nesse caso, o app PDF Editor é a melhor opção.",
    },
    {
      q: "Dá para dividir um PDF protegido por senha?",
      a: "No navegador, não. Remova a senha antes ou use o app PDF Editor, que consegue abrir arquivos protegidos.",
    },
  ],
  related: [
    { label: "Dividir PDF — separe um arquivo no navegador", path: "/split-pdf" },
    { label: "Extrair páginas do PDF — leve páginas para um arquivo novo", path: "/extract-pdf-pages" },
    { label: "Como extrair páginas de um PDF", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "Como juntar arquivos PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Dividir PDF", path: "/split-pdf" },
};

export default content;
