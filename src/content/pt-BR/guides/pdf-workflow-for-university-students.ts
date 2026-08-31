import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflow-for-university-students",
  h1: "Fluxo de PDF para universitários (anotações, trabalhos, entregas)",
  description:
    "Um ritmo de PDF que aguenta o semestre inteiro: anotações de aula digitalizadas, trabalhos entregues, resumos compartilhados. Tudo no navegador e de graça.",
  updated: "2026-05-29",
  intro: [
    "Um semestre universitário gera centenas de PDFs. Slides de aula, anotações manuscritas digitalizadas, listas de exercícios, trabalhos entregues, leituras complementares, pacotes de revisão para prova. A maioria dos estudantes se vira empilhando tudo na pasta de downloads e vasculhando. Funciona na terceira semana; desmorona na décima; na semana de provas, é pior que não ter nada.",
    "Um ritmo de PDF para o semestre inteiro é curto e fácil de manter. Pacotes semanais por disciplina, entregas nomeadas com consistência, pacotes de revisão montados antes das provas e arquivamento no fim do período. Nada disso exige ferramentas caras nem apps que você ainda não tem, e quase tudo pode ser feito pelo celular.",
    "Este guia descreve o ritmo — o que fazer a cada semana, o que fazer por trabalho, o que fazer nas provas parciais e finais. Ele presume que a meta é achar qualquer documento em cinco segundos, e não construir um sistema pessoal de conhecimento perfeito.",
  ],
  steps: [
    {
      title: "Toda semana: capture e junte o material da aula",
      body: "No fim de cada semana, por disciplina: reúna as anotações digitadas, os PDFs de slides, as fotos do quadro e as páginas manuscritas digitalizadas. A ferramenta Juntar PDF combina tudo em Semana3_Pacote_AAAA-MM-DD.pdf, em /Disciplinas/[Disciplina]/aulas/.",
    },
    {
      title: "Por trabalho: produza, nomeie, entregue, arquive",
      body: "Ferramenta Word para PDF no que foi digitado, Digitalizar para PDF nas páginas manuscritas, Juntar PDF para combinar e Comprimir PDF se o portal tiver limite. Entregue e guarde uma cópia em /Disciplinas/[Disciplina]/trabalhos/entregues/.",
    },
    {
      title: "Meio do semestre: faça uma limpeza",
      body: "Lá pela sétima semana, passe pelas pastas das disciplinas. Descarte duplicatas, corrija arquivos mal nomeados e arquive o que já foi concluído. Vinte minutos no meio do semestre economizam horas na semana de provas.",
    },
    {
      title: "Antes da prova: monte um pacote de revisão",
      body: "Combine os pacotes semanais relevantes em um único Disciplina_Prova_Revisao.pdf. Acrescente uma capa com os temas. Comprima para usar de forma portátil no tablet ou no celular durante a revisão.",
    },
    {
      title: "Anote o pacote de revisão no tablet ou no celular",
      body: "Anotar PDF no tablet funciona melhor que papel para algumas pessoas. Use grifo, comentário e sublinhado; as marcas ficam para as próximas revisões.",
    },
    {
      title: "Fim do semestre: arquive a disciplina",
      body: "Mova /Disciplinas/[Disciplina]/ para /Arquivo/[Ano]/[Disciplina]/. Comprima tudo o que for para o arquivo. A pasta ativa fica limpa para o semestre seguinte.",
    },
  ],
  tips: [
    "Não junte disciplinas diferentes nem semanas diferentes. A menor unidade útil é um PDF por semana e por disciplina.",
    "Entregue usando exatamente a convenção de nome que cada disciplina exige. “Sobrenome_Nome_Trabalho3.pdf” é o padrão; siga à risca.",
    "Anote os pacotes de revisão digitalmente. PDFs anotados e pesquisáveis ganham do papel na revisão — você acha temas específicos rápido.",
    "Comprima apenas na entrega e no arquivamento. Durante o uso ativo, otimize para a legibilidade.",
    "Sincronize a pasta de disciplinas com uma nuvem. O acesso do celular ao computador durante as provas vale mais que o espaço em disco.",
  ],
  mobileNote:
    "A maior parte do dia de PDF de um estudante acontece no celular — digitalizar uma página manuscrita, fotografar um slide, entregar um trabalho. O app PDF Editor cuida da corrente inteira (digitalizar, juntar, comprimir, assinar, compartilhar) offline no iOS e no Android, então o fluxo não depende de ter um notebook por perto.",
  faq: [
    {
      q: "Quanto tempo esse ritmo consome?",
      a: "Dez minutos por semana e por disciplina para o pacote semanal. Dois minutos por trabalho. Vinte minutos no meio do semestre. A economia acumulada na semana de provas é de horas.",
    },
    {
      q: "E se eu tenho muitas disciplinas?",
      a: "O ritmo escala — a mesma convenção vale para todas. Duas disciplinas em paralelo dobram o tempo; a estrutura continua a mesma.",
    },
    {
      q: "Ainda vale guardar o papel?",
      a: "As anotações manuscritas originais, sim, como reserva. Depois de digitalizadas e incluídas no pacote semanal, o papel é só referência.",
    },
    {
      q: "Devo rodar OCR nas digitalizações para buscar?",
      a: "Se a sua ferramenta oferecer, sim. Material de estudo pesquisável na época das provas vale muito mais que material não pesquisável.",
    },
    {
      q: "E as leituras complementares?",
      a: "Pasta /leituras/ separada por disciplina. Não junte as leituras aos pacotes de aula; elas crescem de forma independente e servem a outro propósito.",
    },
  ],
  related: [
    { label: "PDF para estudantes — anotações e resumos", path: "/pdf-for-students" },
    { label: "Melhores ferramentas de PDF grátis para estudantes", path: "/guides/best-pdf-tools-for-students" },
    { label: "Como organizar materiais de estudo em PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Como entregar trabalhos em PDF", path: "/guides/how-to-submit-homework-as-pdf" },
  ],
  parentHub: { label: "PDF para estudantes", path: "/pdf-for-students" },
};

export default content;
