import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "scan-to-pdf",
  hero: {
    eyebrow: "Digitalizar para PDF",
    h1: "Transforme papel em PDFs limpos e pesquisáveis.",
    highlight: "limpos",
    lead: "Use a câmera do celular para digitalizar recibos, documentos de identidade, contratos e arquivos de várias páginas. Detecção automática de bordas, correção de perspectiva e OCR — em segundos, no próprio aparelho.",
    primaryCta: { label: "Abrir o app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por que a foto de um documento fica ruim",
    paragraphs: [
      "Fotografar um contrato com a câmera comum gera um JPG estourado pela luz do teto, torto por causa do ângulo em que você segurou o celular e mostrando a mesa atrás da folha. Está na forma errada, com o contraste errado, e não é pesquisável. Quem recebe precisa apertar os olhos.",
      "Mande um JPG assim para a contabilidade e você recebe um pedido educado de “um PDF de verdade”. E o motivo é real: JPG de recibo não é indexado, não passa pelo OCR do sistema contábil e muitas vezes não é aceito pelos validadores de envio de documento.",
      "Um app de digitalização reconstrói a foto no formato que ela deveria ter: retangular, com contraste corrigido, sem distorção e salva como PDF, com o texto escondido por trás. Documentos de várias páginas viram um arquivo único, e não doze JPGs na galeria.",
    ],
  },
  features: {
    heading: "Digitalize como um scanner de verdade",
    items: [
      {
        icon: "ScanLine",
        title: "Detecção automática de bordas",
        body: "O app encontra as bordas do documento sozinho e captura quando o enquadramento está certo.",
      },
      {
        icon: "Maximize",
        title: "Correção de perspectiva",
        body: "Ângulos tortos são endireitados. O resultado parece ter sido fotografado diretamente de cima.",
      },
      {
        icon: "Layers",
        title: "Digitalização de várias páginas",
        body: "Capture uma página atrás da outra em sequência. O app costura tudo em um único PDF.",
      },
      {
        icon: "ScanText",
        title: "OCR (texto pesquisável)",
        body: "Reconheça as palavras dentro das páginas digitalizadas para o PDF final ficar pesquisável e copiável.",
      },
      {
        icon: "Sun",
        title: "Filtros inteligentes",
        body: "Filtros coloridos, em preto e branco ou otimizados para documento, para lidar com problemas de iluminação.",
      },
      {
        icon: "Tag",
        title: "Nome automático",
        body: "O app sugere nomes de arquivo a partir do conteúdo — recibos, contratos, documentos.",
      },
    ],
  },
  steps: {
    heading: "Como digitalizar um documento em PDF",
    items: [
      {
        title: "Abra o scanner",
        body: "Toque no bloco Digitalizar na tela inicial do app PDF Editor.",
      },
      {
        title: "Aponte para o documento",
        body: "Segure o celular mais ou menos acima da folha. O app encontra as bordas e pisca quando está pronto.",
      },
      {
        title: "Deixe capturar sozinho",
        body: "Ou toque para capturar manualmente. O registro é instantâneo.",
      },
      {
        title: "Ajuste os cantos se precisar",
        body: "Refine as bordas detectadas antes de a perspectiva ser corrigida.",
      },
      {
        title: "Adicione mais páginas",
        body: "Toque no contador de páginas para continuar. O app costura tudo na ordem.",
      },
      {
        title: "Salve como PDF",
        body: "Escolha um nome (ou aceite a sugestão automática) e salve. O OCR roda em segundo plano.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Digitalizar onde você estiver",
    body: "Recibo se digitaliza na mesa do restaurante, contrato na sala de reunião, documento no balcão do aeroporto. A questão é justamente que você não carrega um scanner de mesa na mochila. Um digitalizador no celular é o substituto mais próximo e, para as necessidades do dia a dia, é totalmente suficiente.",
  },
  faq: [
    {
      q: "A qualidade da digitalização é igual à de um scanner de mesa?",
      a: "Para documentos do dia a dia — recibos, contratos, documentos de identidade, formulários — é. Para digitalização de fotos de arquivo ou letras miúdas em papel brilhante, o scanner de mesa continua melhor.",
    },
    {
      q: "A digitalização de várias páginas é confiável?",
      a: "Muito. O app continua capturando até você parar, e dá para reordenar ou excluir páginas antes de salvar.",
    },
    {
      q: "Quais idiomas o OCR reconhece?",
      a: "Todos os principais idiomas de alfabeto latino, além de cirílico, grego, árabe, chinês, japonês e coreano. A qualidade do reconhecimento varia conforme a iluminação e o estado do papel.",
    },
    {
      q: "Dá para digitalizar RG, CNH e passaporte?",
      a: "Dá. O app gera uma digitalização limpa e sem distorção que você pode salvar ou compartilhar. Por segurança, guarde documentos pessoais em uma pasta protegida ou coloque senha no PDF gerado.",
    },
    {
      q: "Funciona sem internet?",
      a: "A digitalização e a detecção de bordas rodam no aparelho. O OCR de alguns idiomas menos comuns pode exigir conexão no primeiro uso, para baixar o modelo.",
    },
  ],
  related: [
    {
      label: "Passo a passo: como digitalizar documentos em PDF",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    { label: "Editar o PDF digitalizado depois", path: "/pdf-editor" },
    {
      label: "PDF para empresas",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Digitalize documentos direto da câmera.",
    sub: "Grátis no iOS e no Android. As digitalizações ficam no seu aparelho.",
  },
};

export default content;
