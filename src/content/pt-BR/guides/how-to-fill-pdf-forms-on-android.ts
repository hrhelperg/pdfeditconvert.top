import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-android",
  h1: "Como preencher formulários PDF no Android",
  description:
    "Preencha formulários PDF interativos e planos no Android. Por que o leitor nativo muitas vezes não deixa digitar, o caminho confiável por aplicativo e como as diferenças entre marcas afetam os formulários.",
  updated: "2026-06-01",
  intro: [
    "O Android não tem um preenchedor de formulários PDF nativo único, e é daí que vem quase toda a confusão. O leitor de PDF padrão de muitos celulares — normalmente dentro do Google Drive ou do Arquivos — mostra o formulário sem problema, mas nem sempre deixa digitar nos campos. Aí as pessoas acham que o formulário está com defeito quando, na verdade, só falta um aplicativo que lide direito com campos de formulário.",
    "O caminho confiável em qualquer celular Android é um app de PDF dedicado, que reconhece campos interativos e deixa posicionar texto em formulários planos. Como o hardware e o software do Android variam muito entre marcas, as opções nativas mudam de aparelho para aparelho — mas um app de PDF decente se comporta igual em todos, que é exatamente o que você quer em formulário.",
    "Este guia cobre por que o leitor padrão fica devendo, o fluxo confiável por aplicativo e os detalhes próprios do Android — compartilhar pela folha do sistema, tirar formulários do Gmail e do Drive — que deixam o preenchimento rápido.",
  ],
  steps: [
    {
      title: "Tire o formulário do leitor básico",
      body: "Se um formulário aberto pelo Gmail ou pelo Drive não deixa digitar, aquele leitor está ignorando os campos. Baixe o arquivo e abra em um app de PDF dedicado — é ali que os campos ganham vida.",
    },
    {
      title: "Abra no app PDF Editor",
      body: "Importe o PDF do Arquivos, do Drive ou pela folha de compartilhamento. O app procura campos interativos e os deixa tocáveis, para você digitar, marcar caixas de seleção e usar listas suspensas.",
    },
    {
      title: "Preencha formulários planos acrescentando texto",
      body: "Se o formulário não tem campos, use a ferramenta de texto para posicionar as respostas direto em cada linha. Aproxime o zoom antes para o texto cair certinho — teclado de Android com campo pequeno pede cuidado.",
    },
    {
      title: "Acrescente vistos, datas e assinatura",
      body: "Marque as caixas interativas ou posicione um visto nas planas, preencha as datas no formato mostrado e acrescente a assinatura na área indicada com a ferramenta de assinar.",
    },
    {
      title: "Exporte e devolva",
      body: "Salve uma cópia preenchida e mande pela folha de compartilhamento do Android — Gmail, Drive, WhatsApp, o que for. Achate antes se quiser travar as respostas para que não sejam apagadas.",
    },
  ],
  tips: [
    "Se você não consegue digitar em um formulário no Android, o culpado costuma ser o leitor básico — abra o arquivo em um app de PDF de verdade.",
    "Como cada marca de Android entrega um software diferente, não conte com um preenchedor nativo estar presente; um app dedicado é a escolha consistente.",
    "Aproxime o zoom em formulários planos antes de posicionar o texto, para campos pequenos receberem respostas do tamanho certo.",
    "Guarde o formulário em branco em uma pasta conhecida para preencher uma cópia limpa em vez de editar uma antiga.",
    "O comportamento dos formulários varia por aplicativo e aparelho, então exportar achatado é o jeito mais seguro de garantir que as respostas apareçam para quem recebe.",
  ],
  mobileNote:
    "O app PDF Editor para Android reconhece campos interativos e deixa posicionar texto em formulários planos, além de assinar e exportar — funcionando igual em qualquer marca de celular. Tudo acontece no aparelho, então a informação que você digita no formulário não é enviada.",
  faq: [
    {
      q: "Por que não consigo digitar em um formulário PDF no Android?",
      a: "O leitor padrão — muitas vezes o do Google Drive ou a pré-visualização do Arquivos do celular — costuma ignorar os campos. Baixe o formulário e abra em um app de PDF dedicado, e os campos passam a aceitar digitação. Formulários planos precisam de texto por cima.",
    },
    {
      q: "O Android tem um preenchedor de formulários PDF nativo?",
      a: "Não um universal. O que existe depende da marca e do software do seu celular. Para resultado consistente em qualquer aparelho Android, use um app de PDF dedicado.",
    },
    {
      q: "Como preencho um formulário digitalizado no Android?",
      a: "Um formulário digitalizado é plano, então acrescente o seu próprio texto e os vistos na página com um editor de PDF e exporte. Não há campos para tocar.",
    },
    {
      q: "Preencher formulário PDF no Android é privado?",
      a: "Com o app PDF Editor o preenchimento acontece no aparelho, então os seus dados não vão a lugar nenhum. Ferramentas de navegador que sobem o arquivo processam tudo em um servidor.",
    },
    {
      q: "Como devolvo o formulário preenchido?",
      a: "Exporte a cópia preenchida e use a folha de compartilhamento do Android para mandar por e-mail, Drive ou aplicativo de mensagem. Achate antes para travar as respostas.",
    },
  ],
  related: [
    { label: "Como preencher um formulário PDF", path: "/guides/how-to-fill-out-a-pdf-form" },
    { label: "Como preencher formulários PDF no iPhone", path: "/guides/how-to-fill-pdf-forms-on-iphone" },
    { label: "Como assinar um PDF no Android", path: "/guides/how-to-sign-pdf-on-android" },
    { label: "Melhor app de formulários PDF para Android", path: "/guides/best-pdf-form-app-for-android" },
    { label: "Fluxo de formulários PDF no celular", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
