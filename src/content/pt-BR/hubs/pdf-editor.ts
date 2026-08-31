import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-editor",
  hero: {
    eyebrow: "Editor de PDF",
    h1: "Edite PDFs em qualquer lugar, em qualquer celular.",
    highlight: "PDFs",
    lead: "Altere textos, troque imagens, reorganize páginas e assine documentos — direto no iPhone ou no Android. O PDF Editor transforma o celular em um editor de documentos de verdade, e não apenas num visualizador.",
    primaryCta: { label: "Abrir o app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por que editar PDF sempre foi um sofrimento",
    paragraphs: [
      "O PDF foi criado para ficar igual em todo lugar — e é exatamente isso que torna o formato difícil de editar. A maioria dos apps de celular só deixa visualizar ou anotar. Na hora de corrigir um erro de digitação, trocar um nome ou mover uma página, você é mandado de volta para o computador ou convidado a subir o arquivo em algum site aleatório.",
      "Esses sites de “sobe e reza” são um problema de privacidade. Eles guardam o seu arquivo por horas, costumam ser lentos e não dá para confiar no que fazem com contratos, notas e documentos pessoais. O resultado: a maioria das pessoas tira um print do trecho que quer corrigir, edita como imagem e manda por e-mail uma versão pior que a original.",
      "Um editor nativo no celular resolve isso sem meio-termo. As edições acontecem no próprio aparelho. O layout original é preservado. E você manda o resultado por e-mail um minuto depois de começar — sem subir nada para o servidor de um desconhecido.",
    ],
  },
  features: {
    heading: "O que dá para fazer de verdade",
    items: [
      {
        icon: "Type",
        title: "Editar o texto na própria página",
        body: "Corrija erros de digitação, troque nomes, mude datas — sem quebrar o layout. Funciona em PDFs com texto.",
      },
      {
        icon: "ImagePlus",
        title: "Inserir e trocar imagens",
        body: "Coloque um logotipo ou uma foto nova. Redimensione e reposicione sem sair da página.",
      },
      {
        icon: "Move",
        title: "Reorganizar páginas",
        body: "Arraste as miniaturas para reordenar. Exclua páginas, duplique-as ou insira uma nova em branco.",
      },
      {
        icon: "Pencil",
        title: "Assinaturas e rubricas",
        body: "Adicione uma assinatura de próprio punho ou digitada. Posicione onde quiser com um toque.",
      },
      {
        icon: "Highlighter",
        title: "Marcações e grifos",
        body: "Grife, sublinhe e risque. Escreva à mão livre ou deixe comentários adesivos.",
      },
      {
        icon: "FileText",
        title: "Preencher formulários",
        body: "Toque nos campos para preencher. Salve o formulário preenchido como um novo PDF.",
      },
    ],
  },
  steps: {
    heading: "Como editar um PDF pelo celular",
    items: [
      {
        title: "Abra o app PDF Editor",
        body: "Inicie o app pela tela inicial. Não precisa criar conta para começar.",
      },
      {
        title: "Escolha o PDF que quer editar",
        body: "Importe do app Arquivos, do iCloud Drive, do Google Drive ou do seu e-mail. Ou toque em um PDF em qualquer lugar e escolha o PDF Editor para abrir.",
      },
      {
        title: "Toque no que quer mudar",
        body: "Toque em um parágrafo para editar o texto, em uma imagem para trocá-la ou na miniatura de uma página para reordená-la.",
      },
      {
        title: "Faça as alterações",
        body: "As edições aparecem na hora, na página. Dê zoom com os dedos para mais precisão. Desfazer e refazer funcionam como você espera.",
      },
      {
        title: "Salve o resultado",
        body: "Salve por cima do original, salve como uma cópia nova ou compartilhe direto por e-mail, AirDrop ou qualquer app de mensagens.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Editando na correria",
    body: "A maioria das edições em PDF acontece no pior momento possível — cinco minutos antes de uma reunião, dentro do ônibus, entre uma aula e outra. Um editor pensado para o celular deixa você corrigir aquele nome escrito errado no contrato enquanto caminha até o escritório, ou carimbar a assinatura em um orçamento durante o cafezinho. Sem notebook, sem computador e sem esperar chegar em casa.",
  },
  faq: [
    {
      q: "O app PDF Editor é grátis?",
      a: "É. A edição principal — texto, imagens, reorganização de páginas, assinaturas e exportação — é gratuita. Alguns recursos avançados são liberados na versão Pro.",
    },
    {
      q: "Funciona sem internet?",
      a: "Funciona. A edição acontece inteiramente no aparelho. Você só precisa de conexão para buscar arquivos na nuvem ou compartilhar por serviços online.",
    },
    {
      q: "Dá para editar PDFs digitalizados?",
      a: "PDFs digitalizados são, tecnicamente, imagens. Você ainda pode anotar, assinar e reorganizar páginas. Editar o texto em si exige OCR antes, que o app consegue executar na maioria dos documentos.",
    },
    {
      q: "Existe limite de tamanho de arquivo?",
      a: "Não há limite artificial. PDFs muito grandes (centenas de MB com gráficos complexos) podem ficar mais lentos em celulares antigos, mas o app foi feito para dar conta de documentos do mundo real.",
    },
    {
      q: "Minhas alterações vão quebrar o layout original?",
      a: "Não. As edições são feitas na própria página. Fontes, margens e a formatação existente continuam intactas em PDFs com texto.",
    },
    {
      q: "Dá para exportar para Word?",
      a: "Dá. Você converte o PDF editado para Word e outros formatos no mesmo app.",
    },
  ],
  related: [
    {
      label: "Como editar um PDF no iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    {
      label: "Como editar um PDF no Android",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Assinar PDF pelo celular", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Edite PDFs pelo celular em segundos.",
    sub: "Grátis no iOS e no Android. Sem precisar criar conta para começar.",
  },
};

export default content;
