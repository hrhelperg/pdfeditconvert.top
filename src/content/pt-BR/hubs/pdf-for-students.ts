import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-students",
  hero: {
    eyebrow: "PDF para estudantes",
    h1: "Ferramentas de PDF do jeito que estudante realmente estuda.",
    highlight: "realmente",
    lead: "Anote slides de aula, grife leituras, junte artigos, digitalize páginas de livro e assine formulários — pelo celular ou tablet que você já tem.",
    primaryCta: { label: "Abrir o app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por que o PDF fica no centro da rotina de estudo",
    paragraphs: [
      "Professores postam slides em PDF. As leituras chegam em PDF. Os enunciados de trabalho são PDF. O plano de ensino é PDF. E, mesmo assim, o visualizador padrão do celular não deixa grifar, anotar nem organizar direito — e a saída à qual a maioria recorre é tirar print das páginas e jogar no app de notas, o que perde a busca, a estrutura e a possibilidade de voltar à fonte.",
      "Um editor de PDF de verdade no celular permite tratar as leituras como se trataria um livro — grifos, anotações na margem, marcadores — mas com busca e possibilidade de compartilhar. As mesmas leituras anotadas abrem em qualquer aparelho, então o que você fez no ônibus está lá quando você senta na biblioteca.",
      "Com uma caneta em um tablet, esse arranjo substitui boa parte das anotações em papel para o material de aula. O custo é o preço do app (grátis para o básico) e o tempo de configurar tudo uma vez.",
    ],
  },
  features: {
    heading: "Feito para as sessões de estudo",
    items: [
      {
        icon: "Highlighter",
        title: "Grifar e anotar",
        body: "Grifos amarelos, escrita à mão livre, comentários adesivos, sublinhados — exatamente o que você faria no papel, mas pesquisável.",
      },
      {
        icon: "Bookmark",
        title: "Marcadores e sumário",
        body: "Marque os capítulos ou trechos a que vai voltar. Pule entre eles com um toque na hora de escrever o trabalho.",
      },
      {
        icon: "Combine",
        title: "Juntar as leituras",
        body: "Combine os textos da semana em um único documento para ler offline no ônibus, no avião ou no trajeto.",
      },
      {
        icon: "ScanLine",
        title: "Digitalizar páginas de livro",
        body: "Capture páginas de livros físicos em PDFs pesquisáveis. Útil para citar trechos em trabalhos quando você só tem o exemplar impresso.",
      },
      {
        icon: "FileSignature",
        title: "Assinar formulários na hora",
        body: "Formulários de bolsa, listas de presença, confirmações de matrícula — assine e devolva sem imprimir.",
      },
      {
        icon: "Layers",
        title: "Organizar por disciplina",
        body: "Agrupe os documentos por matéria. Leve-os ao longo do semestre sem perder as anotações.",
      },
    ],
  },
  steps: {
    heading: "Uma rotina de estudo simples",
    items: [
      {
        title: "Reúna as leituras da semana",
        body: "Baixe ou compartilhe cada PDF para o PDF Editor, vindo do portal da faculdade, do Moodle, do Classroom ou do e-mail.",
      },
      {
        title: "Junte tudo em um arquivo por semana e disciplina",
        body: "Use a ferramenta Juntar para criar “Semana 3 - leituras - Microeconomia.pdf” e ler offline.",
      },
      {
        title: "Anote enquanto lê",
        body: "Grife as passagens importantes, escreva na margem e deixe comentários onde tiver dúvidas. As anotações são salvas na própria página.",
      },
      {
        title: "Use os grifos ao escrever o trabalho",
        body: "Volte aos trechos grifados pelo painel de marcadores quando for citar as fontes. O texto sob o grifo continua selecionável e copiável.",
      },
      {
        title: "Digitalize e junte as anotações à mão",
        body: "Quando anotar no papel, digitalize tudo para a mesma biblioteca do PDF Editor, e o material fica em um único lugar pesquisável.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Estudando em qualquer lugar",
    body: "Sala de aula, biblioteca, ônibus, café — o lugar em que se estuda raramente é uma escrivaninha. Um editor de PDF pensado para o celular deixa a mesma cópia anotada na sua mão onde quer que você esteja. Aquela hora perdida esperando o ônibus vira tempo de leitura.",
  },
  faq: [
    {
      q: "O app é grátis para estudantes?",
      a: "É. Anotar, juntar, digitalizar e assinar são recursos gratuitos, sem limite diário. Alguns recursos Pro (OCR em lote, criptografia avançada) são pagos, mas a versão gratuita cobre tudo o que um estudante costuma precisar.",
    },
    {
      q: "Meus grifos sincronizam entre aparelhos?",
      a: "Se você salvar o arquivo no iCloud Drive, no Google Drive ou em qualquer serviço de nuvem, as edições aparecem onde quer que o mesmo arquivo seja aberto. Arquivos só locais ficam no aparelho em que foram editados.",
    },
    {
      q: "Posso digitalizar a página de um livro?",
      a: "Para estudo pessoal, na maioria dos países sim — no Brasil, a Lei de Direitos Autorais (9.610/98) permite a cópia de pequenos trechos para uso privado. Distribuir cópias digitalizadas é outra história e normalmente não é permitido.",
    },
    {
      q: "O app funciona bem em iPad e tablets Android?",
      a: "Funciona. Tablets com caneta (Apple Pencil, S Pen) deixam a anotação muito mais parecida com o papel do que celulares só com o dedo. Se você tem um tablet, use-o nas sessões de leitura.",
    },
    {
      q: "Dá para exportar as minhas anotações?",
      a: "Dá. O PDF anotado pode ser compartilhado como está (com as anotações embutidas) ou achatado em um PDF final. Você também pode extrair só o texto grifado para as citações.",
    },
  ],
  related: [
    {
      label: "Como compartilhar anotações de estudo em PDF",
      path: "/guides/how-to-share-study-notes-as-pdf",
    },
    {
      label: "Melhor app de PDF para estudantes",
      path: "/guides/best-pdf-app-for-students",
    },
    { label: "Digitalizar para PDF", path: "/scan-to-pdf" },
  ],
  appCta: {
    heading: "Estude com um kit de PDF de verdade.",
    sub: "Grátis no iOS e no Android. As anotações sincronizam pelo iCloud ou pelo Drive.",
  },
};

export default content;
