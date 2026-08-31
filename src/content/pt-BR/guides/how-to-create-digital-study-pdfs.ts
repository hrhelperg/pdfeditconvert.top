import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-digital-study-pdfs",
  h1: "Como criar PDFs de estudo digitais (flashcards, resumos, apostilas)",
  description:
    "Monte seus próprios PDFs de estudo a partir de anotações, slides e grifos — pesquisáveis, portáteis e prontos para anotar no tablet. A estrutura que os torna úteis na véspera da prova.",
  updated: "2026-05-29",
  intro: [
    "Um PDF de estudo feito por você é uma das melhores ferramentas de prova que existem. Ele é menor que o conjunto completo de anotações semanais, mais estruturado que uma conversa cheia de dicas de revisão e mais portátil que flashcards de papel. Abra no tablet num intervalo, no café, no notebook da biblioteca — o mesmo arquivo, as mesmas anotações, a mesma busca.",
    "Mas um PDF de estudo só se justifica se for estruturado. Despejar todas as aulas em um arquivo só é inutilizável; um pacote de resumo bem montado é o artefato que você realmente abre três vezes por semana antes da prova final. A diferença está em como você o constrói.",
    "Este guia percorre a estrutura que funciona: o que incluir, o que deixar de fora, como organizar para leitura rápida e para leitura profunda, e como manter o tamanho do arquivo administrável no tablet. Ele presume que você está montando a partir de anotações semanais, slides e grifos que já existem — e não do zero.",
  ],
  steps: [
    {
      title: "Defina o escopo antes de montar",
      body: "Um PDF de estudo por disciplina, um por prova (parcial, final) ou um por tema — escolha a granularidade que combina com o seu jeito real de estudar. PDFs menores e focados ganham de um pacote gigante.",
    },
    {
      title: "Monte uma capa clara e um sumário",
      body: "Código da disciplina, nome da prova, data e temas abordados. Um sumário de uma página no começo. Os dois são curtos — cinco minutos para escrever e triplicam a navegabilidade.",
    },
    {
      title: "Extraia os slides e as anotações principais",
      body: "A ferramenta Extrair páginas do PDF puxa só os slides e as páginas de anotação de que você realmente precisa dos pacotes semanais maiores. Não inclua o semestre inteiro — apenas o que importa para esta prova.",
    },
    {
      title: "Junte em uma ordem coerente",
      body: "A ferramenta Juntar PDF combina os extratos na ordem de estudo: cronológica, conceitual ou por peso na prova. Use a ordem em que você vai revisar.",
    },
    {
      title: "Anote com antecedência",
      body: "Grife antes os termos, as fórmulas e os conceitos principais. A anotação rende mais na revisão quando você não está grifando ao mesmo tempo.",
    },
    {
      title: "Comprima para o tablet",
      body: "A ferramenta Comprimir PDF deixa o pacote de estudo em um tamanho amigável ao tablet — normalmente abaixo de 20 MB. Arquivos menores carregam rápido, rolam suave e não drenam a bateria em sessões longas.",
    },
  ],
  tips: [
    "Não busque completude. O PDF de estudo complementa as anotações completas; ele não as substitui. Deixe o detalhe nos pacotes semanais.",
    "Inclua uma ou duas páginas de cola no fim, com fórmulas, datas e nomes — o que precisar de memória imediata no dia da prova.",
    "Espelhe a estrutura da prova. Se ela tem questões curtas e dissertativas, estruture o pacote do mesmo jeito, para o treino corresponder ao formato.",
    "Não comprima demais. Alguns defeitos no texto em compressão forte atrapalham a leitura em sessões longas. O nível médio costuma ser o equilíbrio certo.",
    "Reexporte depois de uma sessão grande de anotação, para as marcas ficarem como conteúdo legível, e não apenas como camadas sobrepostas.",
  ],
  mobileNote:
    "Tablets e celulares são onde os PDFs de estudo realmente são usados. O app PDF Editor aceita anotação, grifo e busca no arquivo que você montou — transformando o pacote de estudo em uma ferramenta de revisão interativa onde quer que você estude.",
  faq: [
    {
      q: "Qual deve ser o tamanho de um PDF de estudo?",
      a: "O que você conseguir reler em duas ou três sessões. Na maioria das disciplinas, algo entre 30 e 80 páginas. Acima de 100 e você vai pular metade.",
    },
    {
      q: "Devo incluir todos os slides ou só os principais?",
      a: "Os principais. Incluir tudo dilui o valor. Escolha os slides que explicam os conceitos em que você está mais fraco.",
    },
    {
      q: "Flashcards digitais são melhores que os de papel?",
      a: "Para a maioria das pessoas, sim. Eles são pesquisáveis, portáteis e sobrevivem a quedas e café derramado. Aplicativos de repetição espaçada acrescentam uma camada por cima.",
    },
    {
      q: "Devo compartilhar o meu PDF de estudo com o grupo?",
      a: "É opcional. Algumas pessoas estudam melhor com os próprios pacotes; outras se beneficiam de um compartilhado. Teste os dois e veja qual gera mais retenção.",
    },
    {
      q: "Com quanta antecedência devo montá-lo?",
      a: "De duas a três semanas antes da prova. Antes disso falta conteúdo; depois disso falta tempo para estudar.",
    },
  ],
  related: [
    { label: "PDF para estudantes — anotações e resumos", path: "/pdf-for-students" },
    { label: "Juntar PDF — monte os pacotes de estudo", path: "/merge-pdf" },
    { label: "Como organizar materiais de estudo em PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Fluxo de PDF para universitários", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF para estudantes", path: "/pdf-for-students" },
};

export default content;
