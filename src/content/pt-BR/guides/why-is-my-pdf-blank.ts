import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blank",
  h1: "Por que meu PDF está em branco? Causas reais e como recuperar",
  description:
    "Quando um PDF abre com páginas em branco, o conteúdo normalmente está lá — só escondido por falha de renderização, fonte ausente ou erro de digitalização. Como identificar e recuperar.",
  updated: "2026-05-29",
  intro: [
    "Abrir um PDF e encontrar uma página vazia é desconcertante. Você espera texto, gráficos, contratos assinados — e recebe nada. A boa notícia é que o conteúdo quase sempre continua dentro do arquivo. A má é que a causa pode ser uma entre várias, e você precisa identificar qual antes de resolver.",
    "PDFs em branco costumam vir de uma falha de renderização (o seu leitor engasgou com algo específico), de uma falha de fonte (o texto está tecnicamente lá, mas apontando para um glifo que ninguém consegue desenhar), de uma falha de digitalização ou captura (a origem gerou páginas vazias) ou de conteúdo em camadas e oculto. Em casos raros, o arquivo está mesmo vazio.",
    "Este guia percorre os diagnósticos na ordem em que são baratos de checar e depois indica a solução certa. A maioria dos PDFs em branco volta a ser legível com uma reexportação ou uma troca de leitor.",
  ],
  steps: [
    {
      title: "Abra o arquivo em outro leitor primeiro",
      body: "Teste o visualizador embutido do Chrome, o Pré-visualização do macOS ou um leitor de celular. Se um deles mostrar o conteúdo, você isolou o problema no seu leitor original — e o arquivo está bom.",
    },
    {
      title: "Compare o tamanho do arquivo com o esperado",
      body: "Um PDF genuinamente vazio é minúsculo — alguns KB. Um PDF que parece em branco e tem vários megabytes quase certamente tem conteúdo dentro que simplesmente não está sendo renderizado para você.",
    },
    {
      title: "Procure sinalizações de segurança ou permissão",
      body: "Alguns PDFs são exportados com uma marca de “modo protegido” ou de assinatura que faz certos leitores esconderem o conteúdo até a permissão ser concedida. Salvar uma cópia desprotegida a partir de um leitor permissivo costuma resolver.",
    },
    {
      title: "Reexporte o arquivo com imprimir em PDF",
      body: "Abra o arquivo em qualquer leitor que exiba o conteúdo e use “Imprimir → Salvar como PDF” (ou Microsoft Print to PDF no Windows). Isso reconstrói a renderização da página e resolve a maioria dos brancos causados por fonte.",
    },
    {
      title: "Se for digitalização, digitalize de novo com outro ajuste",
      body: "Páginas digitalizadas em branco costumam vir de um alimentador que puxou duas folhas, de um contraste claro demais ou de uma foto de celular focada no plano errado. O fluxo de Digitalizar para PDF com detecção de bordas evita a maior parte disso.",
    },
    {
      title: "Exporte páginas como imagem para confirmar",
      body: "A ferramenta PDF para imagens exporta cada página em PNG, no seu navegador. Se os PNGs mostrarem conteúdo, o problema é o seu leitor. Se estiverem realmente em branco, a página do arquivo está em branco mesmo.",
    },
  ],
  tips: [
    "Um PDF em branco com vários megabytes tem conteúdo em algum lugar — continue testando leitores e reexportações antes de considerá-lo perdido.",
    "Texto cinza-claro sobre branco pode aparecer como “em branco” em telas de celular sob sol forte. Aumente o brilho ou inverta as cores antes de concluir que a página está vazia.",
    "Arquivos exportados de programas com restrição de acessibilidade às vezes colocam tudo em uma única camada que leitores novos ignoram. Imprimir em PDF achata isso.",
    "Se você recebeu um contrato de volta com as páginas de assinatura em branco, quem assinou provavelmente usou uma ferramenta que sobrescreveu os campos reais com anotações vazias — peça uma nova via assinada com outro programa.",
    "Não continue editando ou juntando um arquivo que renderiza em branco antes de saber o motivo. Construir em cima de uma renderização quebrada gera um arquivo ainda mais quebrado.",
  ],
  mobileNote:
    "Leitores de celular às vezes são mais rígidos que os de computador. O app PDF Editor usa um renderizador permissivo, que tende a exibir o conteúdo mesmo quando outros leitores móveis ficam em branco, e permite salvar o documento de volta como uma cópia mais limpa.",
  faq: [
    {
      q: "Um PDF em branco está perdido para sempre?",
      a: "Raramente. Se o arquivo tem mais que alguns KB, o conteúdo quase certamente continua ali — teste outro leitor, uma reexportação por imprimir em PDF ou uma extração em imagem para confirmar.",
    },
    {
      q: "Por que o meu scanner produz PDFs em branco às vezes?",
      a: "Na maioria das vezes o alimentador puxou duas folhas grudadas e registrou só a segunda, ou o contraste estava baixo demais. Digitalizar de novo com contraste automático costuma resolver.",
    },
    {
      q: "Pode ser um problema de fonte?",
      a: "Pode. Quando um PDF referencia uma fonte que não está incorporada e o seu leitor não consegue substituí-la, o texto some mesmo continuando no arquivo. Reexportar incorpora uma fonte utilizável.",
    },
    {
      q: "Comprimir ou juntar um PDF em branco vai perder o conteúdo?",
      a: "Pode perder — as duas operações trabalham com o que o seu leitor consegue enxergar. Não processe um arquivo que renderiza em branco antes de confirmar que o conteúdo realmente está lá.",
    },
    {
      q: "Por que ele fica em branco no Acrobat e certo no Chrome?",
      a: "Interpretação diferente. O visualizador do Chrome costuma ser o mais tolerante; versões antigas do Acrobat são mais rígidas. O arquivo não está quebrado — o seu leitor é que está.",
    },
  ],
  related: [
    { label: "PDF para imagens — confirme se as páginas estão mesmo vazias", path: "/pdf-to-images" },
    { label: "Digitalizar para PDF — digitalizações limpas, sem páginas em branco", path: "/scan-to-pdf" },
    { label: "Por que meu PDF não abre?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Como consertar um PDF corrompido", path: "/guides/how-to-fix-a-corrupted-pdf" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
