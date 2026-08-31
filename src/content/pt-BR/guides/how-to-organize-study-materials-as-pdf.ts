import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-study-materials-as-pdf",
  h1: "Como organizar materiais de estudo em PDF (pastas, nomes, índice)",
  description:
    "Os PDFs da faculdade acumulam rápido. Uma convenção simples de pastas, nomes e junção que mantém o material do semestre pesquisável da primeira semana até a prova final.",
  updated: "2026-05-29",
  intro: [
    "Na quarta semana de aula, a sua pasta de downloads tem cinquenta PDFs com nomes como “aula7.pdf”, “versao-final-2.pdf”, “Slides_v3_corrigido.pdf” e “Documento.pdf”. Na décima semana, você não acha mais nada. Na semana de provas, você procura a mesma aula três vezes porque não lembra qual versão de qual arquivo tem o slide de que você precisa.",
    "A solução não é software nem aplicativo — é uma convenção. Uma estrutura curta de pastas, um nome de arquivo consistente e o hábito de juntar semanalmente. Com essas três coisas no lugar, achar uma aula específica dois meses depois leva cinco segundos, em vez de quinze minutos.",
    "Este guia descreve a convenção que aguenta um semestre inteiro: como as pastas devem ficar, como os nomes devem ser lidos, quando juntar e o que acontece no fim do período.",
  ],
  steps: [
    {
      title: "Monte uma pasta de primeiro nível por disciplina",
      body: "/Disciplinas/[CodigoDaDisciplina]/. Dentro: /aulas/, /trabalhos/, /leituras/, /provas/. Quatro pastas cobrem quase tudo que chega. Não aninhe mais que dois níveis.",
    },
    {
      title: "Padronize o formato de nome",
      body: "SemanaN_TipoDoDoc_AAAA-MM-DD.pdf. Ou seja, Semana3_Aula_2026-09-15.pdf, Trabalho2_Entrega_2026-09-20.pdf. A data por último ordena cronologicamente; a semana na frente agrupa por tema.",
    },
    {
      title: "Junte por semana, não por arquivo",
      body: "No fim de cada semana, a ferramenta Juntar PDF combina as anotações, os slides e as fotos do quadro daquela semana em um Semana3_Pacote_AAAA-MM-DD.pdf. Um arquivo por semana é muito mais fácil de revisitar depois.",
    },
    {
      title: "Acrescente capas aos pacotes combinados",
      body: "Uma capa digitada (disciplina, semana, temas abordados) deixa o pacote autoexplicativo na época das provas. O você do futuro, folheando doze semanas de pacotes, vai agradecer.",
    },
    {
      title: "Arquive no fim do semestre",
      body: "Mova /Disciplinas/[Disciplina]/ para /Arquivo/[Ano]/[Disciplina]/ quando o semestre acabar. As pastas ativas continuam enxutas; os arquivos ficam pesquisáveis para revisar pré-requisitos depois.",
    },
    {
      title: "Comprima o arquivo morto, não os arquivos ativos",
      body: "Use a ferramenta Comprimir PDF no material arquivado para economizar espaço. Não comprima os arquivos de estudo ativo — a legibilidade importa mais que o tamanho durante o semestre.",
    },
  ],
  tips: [
    "Use datas no formato AAAA-MM-DD. Elas ordenam corretamente em qualquer gerenciador de arquivos. 15/09/26 não ordena.",
    "Não coloque número de versão em material de estudo. A aula final é a aula; um v2 significa que o professor reenviou.",
    "Separe a preparação para provas — /provas/parcial/ e /provas/final/. É um modo de estudo diferente da revisão semanal.",
    "Não junte disciplinas diferentes. PDFs que misturam matérias são impossíveis de achar.",
    "Mantenha um LEIA-ME.txt de uma linha em cada pasta de disciplina, dizendo o que há em cada subpasta. Ajuda quando você volta ao material um semestre depois.",
  ],
  mobileNote:
    "A maioria dos PDFs de estudo chega pelo celular (pelo portal da disciplina, por e-mail do professor ou pela sua própria digitalização). O app PDF Editor deixa você renomear, arquivar e juntar direto no celular, então o arquivo cai no lugar certo em vez de se acumular em Downloads.",
  faq: [
    {
      q: "Qual é o melhor formato de nome para material de estudo?",
      a: "SemanaN_TipoDoDoc_AAAA-MM-DD.pdf. O prefixo da semana agrupa por tema, o tipo de documento esclarece o conteúdo e a data em formato ISO ordena cronologicamente.",
    },
    {
      q: "Devo juntar por semana ou manter arquivos individuais?",
      a: "Junte por semana. Um PDF por semana e por disciplina é a granularidade certa — pequeno o bastante para carregar rápido, grande o bastante para se bastar na revisão.",
    },
    {
      q: "Quantos níveis de pasta devo usar?",
      a: "Dois. /Disciplinas/[Disciplina]/[tipo]/. Mais fundo que isso e você perde arquivos.",
    },
    {
      q: "Preciso de uma pasta de arquivo separada?",
      a: "Precisa. Tire os semestres encerrados de /Disciplinas/ para a pasta ativa continuar navegável.",
    },
    {
      q: "E a sincronização com a nuvem?",
      a: "Sincronize a pasta /Disciplinas/ com pelo menos um serviço de nuvem. O acesso do celular ao computador durante as provas importa; a sincronização resolve isso.",
    },
  ],
  related: [
    { label: "PDF para estudantes — anotações e resumos", path: "/pdf-for-students" },
    { label: "Juntar PDF — monte os pacotes semanais", path: "/merge-pdf" },
    { label: "Como organizar arquivos PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Fluxo de PDF para universitários", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF para estudantes", path: "/pdf-for-students" },
};

export default content;
