import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-pdf-files",
  h1: "Como organizar arquivos PDF (um fluxo que funciona)",
  description:
    "Ponha ordem na bagunça de PDFs: junte arquivos relacionados, reordene páginas, corte o excesso e nomeie tudo direito. Um fluxo repetível com ferramentas grátis.",
  updated: "2026-05-23",
  intro: [
    "“Organizar os meus PDFs” costuma significar uma de duas coisas: arrumar um único documento bagunçado ou domar uma pasta cheia de arquivos relacionados até virar algo coerente. Os dois casos se resumem aos mesmos poucos movimentos — combinar o que anda junto, colocar as páginas na ordem certa, remover o que não pertence e nomear tudo para você achar depois.",
    "Este guia apresenta um fluxo repetível montado com ferramentas grátis de navegador, cada uma rodando no seu aparelho e sem enviar nada. Nenhum passo isolado é complicado; o valor está em fazê-los na ordem certa, para você não refazer trabalho.",
    "Pense menos em uma ferramenta e mais em uma rotina que você aplica a qualquer pilha de documentos — uma pasta de impostos, a papelada de um projeto, um monte de digitalizações — para transformar o caos em algo que você entregaria sem vergonha.",
  ],
  steps: [
    {
      title: "Faça o inventário",
      body: "Liste os arquivos e o que cada um contém. Decida como o resultado final deve ficar — um documento combinado ou vários arquivos limpos — antes de mexer em qualquer coisa.",
    },
    {
      title: "Combine os arquivos que andam juntos",
      body: "Use a ferramenta Juntar PDF para unir documentos relacionados em um só, na ordem desejada. Um contrato e seus anexos, um relatório e seu apêndice — um arquivo para cada.",
    },
    {
      title: "Acerte a ordem das páginas",
      body: "Rode a ferramenta Organizar páginas do PDF em tudo que saiu fora de sequência — digitalizações invertidas, seções no lugar errado — até cada documento ler corretamente.",
    },
    {
      title: "Corte o excesso",
      body: "Descarte páginas em branco, folhas de rosto e duplicatas mantendo só as páginas que interessam, com a ferramenta Extrair páginas do PDF.",
    },
    {
      title: "Endireite as páginas deitadas",
      body: "Use a ferramenta Girar PDF nas páginas que foram digitalizadas na horizontal ou de cabeça para baixo, para o documento inteiro ler em pé.",
    },
    {
      title: "Nomeie e guarde com consistência",
      body: "Dê a cada arquivo um nome descritivo e datado — “Cobranca-Acme-2026-05.pdf” — e guarde em uma pasta sensata. Nomes consistentes são o que torna uma coleção pesquisável meses depois.",
    },
  ],
  tips: [
    "Faça nesta ordem: juntar, reordenar, remover, girar, nomear. Nomear primeiro e juntar depois significa renomear de novo; reordenar antes de remover é esforço gasto em páginas que você vai descartar.",
    "Adote uma convenção de nomes e mantenha. “Tipo-Quem-Data” (Cobranca-Acme-2026-05) ordena e busca muito melhor que nomes improvisados.",
    "Mantenha os originais em uma pasta separada até confirmar que as versões organizadas ficaram boas. Arrumar só é reversível se você não sobrescreveu a origem.",
    "Comprima no fim de tudo, se os arquivos forem para e-mail ou para um portal — não faz sentido comprimir um documento que você ainda vai reestruturar.",
    "A memória do navegador limita trabalhos muito grandes. Para centenas de páginas ou arquivos, o app PDF Editor dá conta do peso com mais folga.",
  ],
  mobileNote:
    "Boa parte da bagunça de documentos começa no celular — digitalizações, prints, anexos de e-mail. O app PDF Editor deixa você juntar, reordenar, aparar e renomear em um só lugar, offline, para manter tudo em ordem à medida que chega, em vez de encarar uma pilha depois.",
  faq: [
    {
      q: "Qual é a ordem certa para organizar um PDF bagunçado?",
      a: "Junte os arquivos relacionados primeiro, depois reordene as páginas, então remova o excesso, corrija a rotação e, por fim, nomeie e guarde. Trabalhar nessa ordem evita refazer etapas.",
    },
    {
      q: "Essas ferramentas são privadas?",
      a: "São. As ferramentas de juntar, reordenar, extrair e girar rodam todas no seu navegador, no seu aparelho — nada é enviado, o que importa em papelada pessoal ou financeira.",
    },
    {
      q: "Como devo nomear os arquivos PDF?",
      a: "Use um padrão consistente e descritivo com data, como “Tipo-Quem-Data.pdf”. A consistência é o que torna uma pasta pesquisável e ordenável depois.",
    },
    {
      q: "Dá para organizar um lote grande de uma vez?",
      a: "As ferramentas de navegador dão conta de volumes do dia a dia, mas lotes muito grandes podem forçar a memória. O app PDF Editor foi feito para trabalhos maiores e funciona offline.",
    },
    {
      q: "Devo comprimir enquanto organizo?",
      a: "Comprima por último, com o documento já finalizado e só se ele precisar caber em limites de e-mail ou de envio. Comprimir no meio do processo é desfeito pelas edições seguintes.",
    },
  ],
  related: [
    { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
    { label: "Juntar PDF — combine arquivos", path: "/merge-pdf" },
    { label: "Como reordenar as páginas de um PDF", path: "/guides/how-to-reorder-pdf-pages" },
    { label: "Como remover páginas indesejadas de um PDF", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
