import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "sign-pdf",
  hero: {
    eyebrow: "Assinar PDF",
    h1: "Assine PDFs pelo celular em segundos.",
    highlight: "segundos",
    lead: "Coloque uma assinatura de próprio punho, o nome digitado ou a rubrica em qualquer PDF. Posicione, redimensione e exporte — sem imprimir, digitalizar nem mandar um arquivo para você mesmo.",
    primaryCta: { label: "Abrir o app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por que imprimir e digitalizar finalmente acabou",
    paragraphs: [
      "A velha rotina de assinatura — imprimir o PDF, assinar, digitalizar e mandar de volta — de algum jeito sobreviveu até 2026. A maioria das empresas aceita assinatura eletrônica, mas muitos contratos ainda chegam com um “assine e devolva” como se todo mundo tivesse impressora e scanner em casa.",
      "Os serviços públicos de assinatura eletrônica resolvem parte disso, mas trazem atrito de login, upload do documento, gestão de conta e planos pagos. Para uma assinatura em um único documento, é exagero e adiciona uma demora desnecessária.",
      "Um fluxo de assinatura nativo no celular tem o tamanho certo para a tarefa: abrir o PDF, desenhar ou digitar a assinatura, posicionar e enviar. A sequência inteira leva menos de um minuto e funciona sem conta, dentro de um avião ou no estacionamento.",
    ],
  },
  features: {
    heading: "Assine do jeito que o documento pede",
    items: [
      {
        icon: "Pencil",
        title: "Assinatura de próprio punho",
        body: "Desenhe com o dedo ou com uma caneta. Salve uma vez e reutilize em todos os documentos seguintes.",
      },
      {
        icon: "Type",
        title: "Assinatura digitada",
        body: "Digite o seu nome e escolha uma fonte manuscrita para assinaturas limpas e legíveis.",
      },
      {
        icon: "User",
        title: "Carimbo de rubrica",
        body: "Salve a sua rubrica separadamente para documentos que a exigem em todas as páginas.",
      },
      {
        icon: "Calendar",
        title: "Carimbo de data",
        body: "Insira a data com um toque, ao lado da assinatura, quando o contrato pedir.",
      },
      {
        icon: "Users",
        title: "Fluxo com vários signatários",
        body: "Passe o PDF entre as pessoas pela folha de compartilhamento. Cada assinatura fica no lugar.",
      },
      {
        icon: "ShieldCheck",
        title: "Exportação com dados de registro",
        body: "A via assinada inclui data, hora e metadados da assinatura para fins de arquivo.",
      },
    ],
  },
  steps: {
    heading: "Como assinar um PDF pelo celular",
    items: [
      {
        title: "Abra o PDF",
        body: "Importe o documento para o app PDF Editor pelo app Arquivos, pelo e-mail ou por qualquer app de compartilhamento.",
      },
      {
        title: "Toque na ferramenta Assinar",
        body: "Ela fica na barra de edição. Escolha entre assinatura de próprio punho, digitada ou rubrica.",
      },
      {
        title: "Desenhe ou digite a assinatura",
        body: "Só na primeira vez — a assinatura fica salva para os próximos usos. Você pode editar ou trocar quando quiser nos Ajustes.",
      },
      {
        title: "Posicione e redimensione",
        body: "Arraste a assinatura para o lugar certo. Redimensione pelas alças dos cantos. Adicione a data se for necessário.",
      },
      {
        title: "Exporte a via assinada",
        body: "Salve por cima do original ou como cópia nova. Compartilhe direto por e-mail ou por qualquer app de mensagens.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Assinar sem atrapalhar o dia",
    body: "A assinatura raramente é o gargalo — o gargalo é o tempo de achar uma impressora. Assinar pelo celular faz o contrato voltar para a outra parte dentro da hora, e não no dia seguinte. É especialmente útil para freelancers, donos de pequenos negócios e qualquer pessoa que trabalhe longe de uma mesa.",
  },
  faq: [
    {
      q: "A assinatura eletrônica tem validade jurídica?",
      a: "Na maioria dos países, sim — para a maior parte dos documentos comerciais. No Brasil, a MP 2.200-2/2001 e a Lei 14.063/2020 reconhecem assinaturas eletrônicas, e o regulamento eIDAS na União Europeia e o ESIGN Act nos Estados Unidos fazem o mesmo. Para documentos de alto valor ou juridicamente sensíveis, confira as regras locais e avalie uma assinatura qualificada, com certificado ICP-Brasil.",
    },
    {
      q: "Minha assinatura fica guardada em algum servidor?",
      a: "Não. As assinaturas salvas ficam no seu aparelho. Elas são aplicadas aos documentos localmente e nunca são enviadas para a nossa infraestrutura.",
    },
    {
      q: "Várias pessoas podem assinar o mesmo PDF?",
      a: "Podem. Passe o arquivo entre os signatários pela folha de compartilhamento, por AirDrop, e-mail ou qualquer app de mensagens. Cada assinatura é adicionada e salva no lugar.",
    },
    {
      q: "E se o PDF já tiver campos de assinatura?",
      a: "O app identifica os campos de assinatura existentes e permite tocar direto neles. A sua assinatura se ajusta ao tamanho e à posição corretos.",
    },
    {
      q: "Dá para usar com Apple Pencil ou S Pen?",
      a: "Dá. As duas produzem traços mais suaves do que assinar com o dedo, o que faz diferença real em contratos que passam por conferência visual.",
    },
  ],
  related: [
    {
      label: "Passo a passo: como assinar um PDF pelo celular",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "Proteger PDFs assinados com senha", path: "/pdf-security" },
    { label: "Fluxos de trabalho para freelancers", path: "/use-cases/freelancers" },
  ],
  appCta: {
    heading: "Assine PDFs de onde estiver.",
    sub: "Grátis no iOS e no Android. Sem precisar criar conta.",
  },
};

export default content;
