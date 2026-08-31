import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-converter",
  hero: {
    eyebrow: "Conversor de PDF",
    h1: "Converta PDFs para o formato que você realmente precisa.",
    highlight: "realmente",
    lead: "PDF para Word quando é para editar. PDF para JPG quando é para mandar no WhatsApp. Word e imagens de volta para PDF quando é para arquivar. Um app, resultado rápido e nada enviado para servidores aleatórios.",
    primaryCta: { label: "Abrir o app", href: SITE.app.appStore },
  },
  problem: {
    heading: "A confusão de conversão em que quase todo mundo cai",
    paragraphs: [
      "PDF é ótimo até alguém pedir o arquivo em Word. Ou até um app de mensagem só aceitar JPG. Ou até você precisar juntar recibos (que são imagens) com um orçamento (que é PDF) em um único documento pronto para enviar.",
      "Os sites públicos de conversão resolvem a tarefa — e criam problemas novos. Eles sobem o seu arquivo, às vezes o guardam por horas, costumam cobrar acima de um certo tamanho e raramente entregam um DOCX limpo. A formatação escorrega, as fontes são trocadas e as tabelas se desfazem.",
      "Um conversor nativo faz o trabalho no seu aparelho. O mesmo motor que diagrama o PDF o reconstrói no formato de destino. As tabelas continuam alinhadas, as fontes são mapeadas com critério e você nunca entrega um contrato sigiloso a um site grátis que se sustenta com rede de anúncios.",
    ],
  },
  features: {
    heading: "Converta nos dois sentidos",
    items: [
      {
        icon: "FileText",
        title: "PDF → Word (DOCX)",
        body: "Documentos do Word editáveis que preservam layout, fontes, tabelas e imagens.",
      },
      {
        icon: "Image",
        title: "PDF → JPG e PNG",
        body: "Exporte uma página ou todas como imagens separadas, prontas para mensagens ou slides.",
      },
      {
        icon: "Sheet",
        title: "PDF → Excel",
        body: "Extraia tabelas para células XLSX de verdade em vez de colar prints.",
      },
      {
        icon: "FilePlus",
        title: "Word e imagens → PDF",
        body: "Transforme um DOCX, a foto de um recibo ou um print em um PDF limpo em segundos.",
      },
      {
        icon: "ScanText",
        title: "OCR para PDFs digitalizados",
        body: "Rode o reconhecimento de texto em documentos digitalizados para o resultado ficar selecionável e pesquisável.",
      },
      {
        icon: "Layers",
        title: "Conversão em lote",
        body: "Coloque vários arquivos na fila. O app processa tudo localmente, em segundo plano.",
      },
    ],
  },
  steps: {
    heading: "Como converter um PDF pelo celular",
    items: [
      {
        title: "Abra o app PDF Editor",
        body: "Toque no bloco Converter na tela inicial.",
      },
      {
        title: "Escolha o arquivo de origem",
        body: "Selecione um PDF, DOCX, imagem ou qualquer documento aceito pelo app.",
      },
      {
        title: "Escolha o formato de saída",
        body: "Word, Excel, JPG, PNG, PowerPoint — o que quem vai receber precisar.",
      },
      {
        title: "Toque em Converter",
        body: "A conversão acontece no aparelho. A maioria dos arquivos fica pronta em poucos segundos.",
      },
      {
        title: "Salve ou compartilhe",
        body: "Salve no app Arquivos, sincronize com o Drive ou o iCloud, ou compartilhe direto por e-mail ou mensagem.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Conversão enquanto você se desloca",
    body: "A conversão real do dia a dia não é “transformar este relatório anual num documento do Word”. É “transformar a foto deste recibo de hotel num PDF que eu possa anexar na prestação de contas” ou “tirar estas três tabelas do orçamento para colar numa planilha”. As duas acontecem no celular, no meio de outras coisas, e precisam ficar prontas agora.",
  },
  faq: [
    {
      q: "Quais formatos são aceitos?",
      a: "Nos dois sentidos: Word (DOCX), Excel (XLSX), PowerPoint (PPTX), JPG, PNG e texto simples. Word, imagens e alguns formatos comuns podem virar PDF.",
    },
    {
      q: "Qual é a precisão da conversão de PDF para Word?",
      a: "Bem alta em PDFs com texto — tabelas, listas e títulos passam bem. Layouts complexos de várias colunas podem precisar de um ajuste leve. PDFs digitalizados precisam de OCR antes.",
    },
    {
      q: "A conversão acontece sem internet?",
      a: "As conversões comuns rodam localmente. Alguns recursos avançados (OCR de alta qualidade em certos idiomas) podem usar a nuvem — o app avisa antes de enviar qualquer coisa.",
    },
    {
      q: "As minhas fontes sobrevivem à conversão?",
      a: "O app mapeia as fontes com critério. Se uma fonte não estiver instalada no aparelho de destino, ele usa a mais parecida, para o documento continuar legível.",
    },
    {
      q: "Dá para converter PDFs protegidos?",
      a: "Se o PDF tiver senha, você precisará digitá-la antes de converter. PDFs com restrição apenas de edição costumam converter normalmente quando a senha de abertura é conhecida.",
    },
  ],
  related: [
    { label: "PDF ou DOCX — qual usar", path: "/guides/pdf-vs-docx" },
    { label: "Comparação: PDF ou JPG", path: "/compare/pdf-vs-jpg" },
    { label: "Editar PDFs depois de converter", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Converta PDFs sem precisar enviá-los.",
    sub: "Grátis no iOS e no Android. As conversões rodam no próprio aparelho.",
  },
};

export default content;
