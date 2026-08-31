import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-iphone",
  h1: "Como assinar um PDF no iPhone",
  description:
    "Assine um PDF no iPhone com a Marcação do iOS ou com o app PDF Editor. Os limites do caminho nativo e quando um app dedicado assina melhor.",
  updated: "2026-05-23",
  intro: [
    "Assinar um PDF no iPhone é uma daquelas tarefas que o iOS quase resolve sozinho. A ferramenta Marcação, embutida no sistema, adiciona uma assinatura num aperto e, para uma assinatura pontual, funciona bem de verdade. Mas, no momento em que você passa a assinar com frequência — contratos, formulários, acordos que voltam toda semana —, os limites dela aparecem e uma ferramenta dedicada economiza tempo real.",
    "Este guia cobre os dois caminhos. Primeiro a Marcação nativa, pelo app Arquivos, com uma olhada honesta em onde ela fica devendo. Depois o app PDF Editor, que salva uma assinatura reutilizável, detecta campos de assinatura e mantém tudo no aparelho.",
    "Assinaturas eletrônicas são aceitas em documentos comerciais comuns na maioria dos lugares, então assinar pelo iPhone raramente é só comodidade — muitas vezes basta por si só.",
  ],
  steps: [
    {
      title: "Caminho rápido: abra o PDF no app Arquivos",
      body: "Toque no PDF no app Arquivos para abri-lo e depois no ícone de Marcação (a ponta de caneta). Este é o editor embutido do iOS — prático para uma assinatura pontual, sem instalar nada.",
    },
    {
      title: "Adicione a assinatura pela Marcação",
      body: "Toque no botão de mais, escolha Assinatura e desenhe uma com o dedo ou salve uma nova. Posicione na página e redimensione. Suficiente para documentos ocasionais.",
    },
    {
      title: "Saiba onde a Marcação para",
      body: "Ela não detecta campos de assinatura de formulário, não lida bem com datas e rubricas, e redesenhar ou reencontrar a assinatura toda vez cansa. Para assinar com frequência, passe para uma ferramenta dedicada.",
    },
    {
      title: "Caminho melhor: abra no app PDF Editor",
      body: "Importe o PDF para o app pelo Arquivos, pelo Mail ou por qualquer folha de compartilhamento. A ferramenta Assinar oferece as opções de próprio punho, digitada e rubrica.",
    },
    {
      title: "Desenhe a assinatura uma vez e reutilize sempre",
      body: "Crie a sua assinatura na primeira vez — com o dedo ou com o Apple Pencil — e ela fica salva no aparelho para todos os documentos seguintes. Assinar vira: abrir, tocar, posicionar, exportar.",
    },
    {
      title: "Posicione, date e exporte",
      body: "Coloque a assinatura onde ela deve ficar, adicione o carimbo de data ou a rubrica se o documento pedir e exporte uma via assinada. Salve como arquivo novo, para o original sem assinatura continuar intacto.",
    },
  ],
  tips: [
    "Use um Apple Pencil se tiver — o traço fica bem mais limpo que com o dedo, o que importa em contratos que vão para clientes.",
    "A Marcação é a ferramenta certa para um caso realmente pontual. Se você assina mais de uma vez por mês, uma assinatura salva e reutilizável se paga rápido.",
    "Guarde o original sem assinatura ao lado da via assinada. Se a outra parte quiser uma versão limpa ou você precisar reassinar com uma correção, ela estará lá.",
    "Em um documento assinado sensível, coloque uma senha antes de compartilhar — assinar e proteger são etapas separadas.",
    "A assinatura eletrônica serve para documentos comerciais comuns, mas acordos de alto valor ou regulados podem exigir uma assinatura qualificada mais formal, com certificado ICP-Brasil — confira as regras nesses casos.",
  ],
  mobileNote:
    "Assinar no iPhone faz um contrato voltar dentro da hora, muitas vezes em minutos. O app PDF Editor mantém a sua assinatura salva no aparelho, detecta campos de assinatura existentes e nunca envia o documento — então até acordos sensíveis continuam privados enquanto você assina em movimento.",
  faq: [
    {
      q: "Dá para assinar um PDF no iPhone sem instalar app?",
      a: "Dá — abra no app Arquivos e use a Marcação para adicionar uma assinatura. É ideal para um caso pontual. Para assinar com frequência, uma ferramenta dedicada, com assinatura salva e reutilizável, é bem mais rápida.",
    },
    {
      q: "O que a Marcação embutida não faz?",
      a: "Ela não detecta campos de assinatura de formulário, lida mal com datas e rubricas e obriga você a reposicionar a assinatura toda vez. São essas lacunas que levam quem assina muito a migrar para um app dedicado.",
    },
    {
      q: "Uma assinatura eletrônica feita no iPhone tem validade jurídica?",
      a: "Em contratos comerciais comuns, na maioria dos países, sim — no Brasil, a MP 2.200-2/2001 e a Lei 14.063/2020 dão essa base. Documentos de alto valor ou regulados podem exigir uma assinatura qualificada mais formal; confira as regras do seu caso.",
    },
    {
      q: "Meu documento assinado é enviado para algum lugar?",
      a: "Com o app PDF Editor, não — a sua assinatura salva e o documento ficam no seu aparelho. Nada é mandado para um servidor.",
    },
    {
      q: "Como faço para assinar no Android?",
      a: "O fluxo é parecido, mas as ferramentas nativas mudam. Veja o guia dedicado sobre assinar um PDF no Android.",
    },
  ],
  related: [
    { label: "Assinar PDF — assinatura eletrônica no celular", path: "/sign-pdf" },
    { label: "Como assinar um PDF no Android", path: "/guides/how-to-sign-pdf-on-android" },
    { label: "Como assinar um PDF pelo celular", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Como editar um PDF no iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Assinar PDF", path: "/sign-pdf" },
};

export default content;
