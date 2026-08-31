import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-a-corrupted-pdf",
  h1: "Como consertar um PDF corrompido (o que funciona de verdade)",
  description:
    "A maioria dos PDFs “corrompidos” não está corrompida — são downloads incompletos, leitores incompatíveis ou gravações interrompidas. O checklist honesto de soluções, e quando o arquivo já era.",
  updated: "2026-05-29",
  intro: [
    "Quase todo PDF chamado de “corrompido” é algo menos dramático: um download que não terminou, um leitor que se recusa a ler um arquivo levemente fora do padrão, ou uma gravação interrompida antes de o arquivo ser fechado. Corrupção de verdade — em que os bytes dentro do arquivo estão realmente danificados — é mais rara do que se pensa e, quando acontece, a recuperação é parcial, na melhor das hipóteses.",
    "Isso importa porque as soluções para essas quatro causas são completamente diferentes. Baixar de novo leva segundos; trocar de leitor leva segundos; uma ida e volta de reexportação leva um minuto; recuperação byte a byte de verdade leva horas e muitas vezes é impossível. Saber em que categoria o seu arquivo cai economiza tempo real.",
    "Este guia percorre os diagnósticos do mais barato ao mais caro e depois explica o que fazer quando não há recuperação. A maioria dos arquivos volta à vida no terceiro passo.",
  ],
  steps: [
    {
      title: "Baixe ou receba o arquivo de novo",
      body: "Um download truncado parece corrupção do ponto de vista do leitor. Busque o arquivo novamente. Se a segunda cópia abrir, a primeira estava incompleta. Confira o tamanho em bytes contra a origem, se ele estiver informado.",
    },
    {
      title: "Teste pelo menos dois outros leitores",
      body: "Navegadores, o Pré-visualização, leitores de celular e programas de computador lidam com PDF de formas diferentes. Um arquivo que o Acrobat recusa às vezes abre bem no Chrome. Se pelo menos um leitor o lê, o arquivo não está realmente quebrado.",
    },
    {
      title: "Abra em um leitor que funcione e reexporte",
      body: "Imprimir em PDF (macOS, Windows, Linux) ou “Salvar como PDF” a partir do leitor que abriu reconstrói a estrutura do arquivo. A nova cópia costuma abrir em leitores que recusaram o original.",
    },
    {
      title: "Extraia as páginas com a ferramenta PDF para imagens",
      body: "Se nenhum leitor renderiza o arquivo inteiro, mas algum mostra parte do conteúdo, exporte cada página em PNG com a ferramenta PDF para imagens. Depois remonte um PDF novo a partir desses PNGs com a Imagem para PDF — você perde busca e edição, mas resgata o conteúdo.",
    },
    {
      title: "Confira o cabeçalho do arquivo em um editor simples",
      body: "Abra o arquivo no Bloco de Notas, no TextEdit ou no VS Code. Um PDF de verdade começa com %PDF- seguido de um número de versão. Se os primeiros bytes forem outra coisa, o arquivo não é um PDF — ele foi renomeado, rotulado errado ou substituído.",
    },
    {
      title: "Peça uma cópia nova à origem",
      body: "Se nada recuperar o arquivo, a origem ainda tem o original. Reexporte do Word, do Google Docs ou do que quer que o tenha gerado. Esse é o único caminho que devolve a qualidade cheia.",
    },
  ],
  tips: [
    "Não continue editando nem juntando um arquivo que está se comportando de forma estranha. Você vai embutir o defeito no arquivo novo.",
    "Guarde o original quebrado antes de qualquer tentativa de reparo. Ferramentas de reparo às vezes sobrescrevem, e o arquivo quebrado pode conter conteúdo parcial que você perderia.",
    "Arquivos que falham logo após uma gravação interrompida (queda de energia, encerramento forçado durante o salvamento) costumam ser irrecuperáveis — o índice estrutural do fim do arquivo nunca chegou a ser escrito.",
    "Evite sites de “reparo de PDF” que prometem milagres. Eles quase sempre fazem a mesma reexportação por imprimir em PDF que você faz sozinho, e ainda sobem o seu arquivo.",
    "PDFs recuperados por imagem perdem todo o texto real e a busca. Use esse caminho só quando o conteúdo importa mais que a fidelidade do arquivo.",
  ],
  mobileNote:
    "No celular, a causa habitual de um PDF “corrompido” é um download instável pela rede móvel. O app PDF Editor guarda os arquivos localmente e permite buscar e abrir de novo, o que resolve a truncagem sem precisar passar por um computador.",
  faq: [
    {
      q: "Qual é a causa mais comum de um PDF corrompido?",
      a: "Um download que não terminou. O arquivo está tecnicamente incompleto, e não corrompido, mas os leitores não conseguem distinguir. Baixar de novo resolve a maioria dos casos.",
    },
    {
      q: "Existem ferramentas de reparo de PDF de verdade?",
      a: "Algumas ferramentas comerciais afirmam reparar, mas boa parte do que fazem é a mesma reexportação por imprimir em PDF que você faz de graça. Reparo estrutural real de PDFs gravemente danificados é trabalho de especialista.",
    },
    {
      q: "Comprimir um PDF corrompido ajuda?",
      a: "Só se a ferramenta de compressão conseguir lê-lo. Se o seu leitor não abre, nenhum compressor abre. Compressão não é técnica de reparo.",
    },
    {
      q: "Por que o meu arquivo recuperado perde os campos de formulário?",
      a: "Imprimir em PDF achata os elementos interativos em pixels estáticos. Campos de formulário, anotações e assinaturas viram imagem. Se você precisa deles de volta, peça uma nova via à origem.",
    },
    {
      q: "A extração em imagem sempre resgata o conteúdo?",
      a: "Só se algum leitor conseguir renderizar as páginas. Se o arquivo está ilegível em todo lugar, até uma ferramenta de extração de imagem vai falhar.",
    },
  ],
  related: [
    { label: "PDF para imagens — extraia as páginas recuperáveis", path: "/pdf-to-images" },
    { label: "Imagem para PDF — remonte as páginas depois do resgate", path: "/image-to-pdf" },
    { label: "Por que meu PDF não abre?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Por que meu PDF está em branco?", path: "/guides/why-is-my-pdf-blank" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
