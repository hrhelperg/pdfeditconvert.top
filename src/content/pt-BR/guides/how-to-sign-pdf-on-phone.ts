import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-phone",
  h1: "Como assinar um PDF pelo celular",
  description:
    "Coloque assinaturas eletrônicas válidas em PDFs pelo iPhone ou Android. Guia prático com o app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Imprimir um PDF só para assinar e digitalizar de volta é um anacronismo. A maioria dos países aceita assinatura eletrônica em contratos comerciais comuns, acordos de confidencialidade, orçamentos e recibos. O seu celular dá conta de produzir uma assinatura limpa e juridicamente utilizável em menos de um minuto.",
    "Este guia mostra como assinar um PDF no iPhone ou no Android com o app PDF Editor. A assinatura que você salva serve para todos os documentos seguintes — você desenha uma vez só. Depois disso, assinar qualquer contrato é uma operação de quatro toques: abrir, tocar em Assinar, posicionar e exportar.",
    "Também vamos cobrir os casos em que assinar pelo celular é *melhor* que assinar na mesa: contratos que precisam voltar rápido, assinaturas durante uma viagem e fluxos com várias pessoas que passam de celular em celular. No final, você terá uma assinatura salva e pronta para todos os documentos futuros.",
  ],
  steps: [
    {
      title: "Abra o PDF",
      body: "Importe o documento para o app PDF Editor pelo app Arquivos, pela nuvem, pelo e-mail ou por qualquer app de compartilhamento. O fluxo de assinatura funciona independentemente de onde o PDF veio.",
    },
    {
      title: "Toque na ferramenta Assinar",
      body: "Ela fica na barra de edição. Escolha assinatura de próprio punho, digitada ou rubrica. A ferramenta detecta sozinha os campos de assinatura existentes, se o PDF foi feito para ser assinado.",
    },
    {
      title: "Desenhe ou digite a assinatura",
      body: "Só na primeira vez. Use o dedo, um Apple Pencil ou uma S Pen. O resultado é salvo no seu aparelho. Você pode editar ou trocar quando quiser nos ajustes.",
    },
    {
      title: "Posicione a assinatura",
      body: "Arraste até o ponto certo da página. Redimensione pelas alças dos cantos. A assinatura vira um objeto normal do PDF, então dá para movê-la depois de posicionar.",
    },
    {
      title: "Adicione data e rubrica, se precisar",
      body: "Muitos contratos pedem a data ao lado da assinatura e a rubrica em cada página. O carimbo de data com um toque e uma rubrica salva resolvem os dois casos.",
    },
    {
      title: "Exporte a via assinada",
      body: "Salve como um arquivo novo (recomendado — guarde o original sem assinatura) ou sobrescreva. O PDF exportado inclui os metadados da assinatura para fins de registro. Compartilhe por e-mail, AirDrop, Drive ou qualquer app de mensagens.",
    },
  ],
  tips: [
    "Use uma caneta em vez do dedo quando o documento for passar por conferência visual. O traço mais limpo faz diferença real em contratos que vão para clientes.",
    "Salve a sua assinatura uma vez e reutilize em todos os documentos seguintes — o app a guarda localmente no aparelho, sem enviar para lugar nenhum.",
    "Use a assinatura digitada em confirmações internas de rotina e a de próprio punho em contratos externos.",
    "Coloque senha nos documentos assinados mais sensíveis antes de compartilhar — a ferramenta Proteger roda depois da assinatura.",
    "Guarde o PDF original sem assinatura em uma pasta ao lado da versão assinada. Se a outra parte pedir uma via “limpa” ou você precisar reassinar com correções, ele estará lá.",
  ],
  mobileNote:
    "Assinar pelo celular faz o contrato voltar para a outra parte dentro da hora — às vezes em minutos. Essa vantagem de velocidade pesa muito quando você está longe da mesa: no cliente, entre reuniões ou em trânsito. O fluxo completo, de receber o contrato a devolvê-lo assinado, cabe tranquilamente num intervalo de café.",
  faq: [
    {
      q: "A assinatura eletrônica tem validade jurídica?",
      a: "Na maioria dos países, sim, para contratos comerciais comuns. No Brasil, a MP 2.200-2/2001 e a Lei 14.063/2020 reconhecem assinaturas eletrônicas; o regulamento eIDAS na União Europeia e o ESIGN Act nos Estados Unidos fazem o mesmo. Para documentos de alto valor ou regulados, confira as regras locais — pode ser exigida uma assinatura qualificada com certificado ICP-Brasil, que é um processo diferente e mais formal.",
    },
    {
      q: "Várias pessoas podem assinar o mesmo PDF?",
      a: "Podem. Passe o arquivo entre os signatários pela folha de compartilhamento, por AirDrop, e-mail ou qualquer app de mensagens. Cada assinatura é adicionada no lugar e as anteriores continuam intactas. O arquivo final mostra a assinatura de todo mundo nas posições corretas.",
    },
    {
      q: "A assinatura fica bonita numa tela de celular?",
      a: "Em celulares atuais, fica. Uma caneta produz traços visivelmente mais suaves que o dedo, o que importa em contratos que passam por conferência visual. Para confirmações de rotina, assinar com o dedo é perfeitamente aceitável.",
    },
    {
      q: "Minha assinatura fica guardada em algum servidor?",
      a: "Não. As assinaturas salvas ficam somente no seu aparelho. Elas são aplicadas aos documentos localmente e nunca são enviadas para a nossa infraestrutura nem para terceiros.",
    },
    {
      q: "E se o PDF já tiver campos de assinatura?",
      a: "O app detecta os campos de assinatura no estilo formulário e permite tocar direto neles. A sua assinatura se ajusta sozinha ao tamanho e à posição corretos — sem redimensionar na mão.",
    },
  ],
  related: [
    { label: "Assinar PDF — visão geral", path: "/sign-pdf" },
    {
      label: "Proteger PDFs assinados com senha",
      path: "/guides/how-to-protect-pdf-file",
    },
    {
      label: "Como editar um PDF no iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
  ],
  parentHub: { label: "Assinar PDF", path: "/sign-pdf" },
};

export default content;
