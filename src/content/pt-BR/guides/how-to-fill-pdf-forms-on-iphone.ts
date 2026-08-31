import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-iphone",
  h1: "Como preencher formulários PDF no iPhone",
  description:
    "Preencha formulários PDF interativos e planos no iPhone — com o app Arquivos e a Marcação, ou com um app dedicado. Os passos do iOS, o caminho da folha de compartilhamento e onde a Marcação deixa a desejar.",
  updated: "2026-06-01",
  intro: [
    "O iPhone se sai bem com formulários PDF quando você conhece os dois caminhos do iOS. O nativo usa o app Arquivos e a Marcação, que dão conta de formulários planos e de uma assinatura no aperto. O caminho mais completo é um app de PDF dedicado, que reconhece campos interativos, digita neles do jeito certo e exporta uma cópia preenchida limpa — melhor no instante em que o formulário passa de duas ou três linhas.",
    "Os detalhes próprios do iOS é que derrubam as pessoas: um formulário aberto na pré-visualização do Mail muitas vezes não mostra os campos, a folha de compartilhamento é como você move o formulário entre aplicativos e a Marcação trata tudo como página plana, mesmo quando existem campos reais. Conhecendo essas manias, preencher formulário no iPhone vira serviço de 30 segundos.",
    "Este guia cobre os dois caminhos — o nativo, com Arquivos e Marcação e seus limites honestos, e o app PDF Editor para formulários interativos — para você escolher o certo para o formulário que tem na frente.",
  ],
  steps: [
    {
      title: "Tire o formulário da pré-visualização do Mail",
      body: "Se o formulário chegou por e-mail, toque para salvá-lo no Arquivos primeiro, ou abra pela folha de compartilhamento em um app de PDF de verdade. A pré-visualização rápida do Mail costuma ignorar os campos, e é por isso que parece impossível digitar ali.",
    },
    {
      title: "Tente Arquivos e Marcação em formulários planos",
      body: "Abra o PDF no Arquivos e toque na caneta da Marcação. Dá para acrescentar caixas de texto e uma assinatura em qualquer ponto da página — o suficiente para formulários planos e preenchimentos rápidos, embora a Marcação não entre nos campos interativos de verdade.",
    },
    {
      title: "Use um app de PDF para campos interativos",
      body: "Em formulários com campos reais, abra o arquivo no app PDF Editor. Ele reconhece os campos para você tocar e digitar, marcar caixas de seleção e andar entre os campos sem tropeço.",
    },
    {
      title: "Resolva formulários planos posicionando texto",
      body: "Quando o formulário não tem campos, use a ferramenta de texto do app para soltar as respostas exatamente em cada linha. Aproxime com os dedos para o texto cair no lugar em vez de flutuar acima da linha.",
    },
    {
      title: "Assine e exporte pela folha de compartilhamento",
      body: "Acrescente a assinatura na área indicada, exporte uma cópia preenchida e mande direto pela folha de compartilhamento — para o Mail, o Mensagens ou de volta a quem enviou.",
    },
  ],
  tips: [
    "Se você não consegue digitar em um formulário no iPhone, quase sempre está na pré-visualização do Mail — salve no Arquivos ou abra em um app de PDF primeiro.",
    "A Marcação é ótima para uma assinatura rápida ou um formulário plano, mas não preenche campos interativos de verdade como um app dedicado.",
    "Aproxime o zoom antes de posicionar texto em um formulário plano; o dedo é impreciso e, com zoom, o texto cai na linha.",
    "Guarde o original em branco no Arquivos para preencher uma cópia nova da próxima vez em vez de editar uma antiga.",
    "O iOS lida bem com HEIC e PDF, mas o comportamento dos formulários ainda varia por aplicativo — um app de PDF dedicado é o mais consistente.",
  ],
  mobileNote:
    "O app PDF Editor para iPhone reconhece os campos interativos onde eles existem e deixa você posicionar texto e marcações em formulários planos onde não existem, além de assinar e exportar — tudo no aparelho, então os dados pessoais do formulário não são enviados. É o caminho que evita o beco sem saída da pré-visualização do Mail.",
  faq: [
    {
      q: "Por que não consigo digitar em um formulário PDF no meu iPhone?",
      a: "Provavelmente você está vendo o arquivo na pré-visualização do Mail, que ignora os campos. Salve no Arquivos ou abra em um app de PDF dedicado e os campos ficam ativos. Formulários planos precisam de texto posicionado por cima.",
    },
    {
      q: "Dá para preencher um formulário PDF com a Marcação nativa?",
      a: "Dá, em formulários planos e preenchimentos rápidos — a Marcação acrescenta texto e assinatura em qualquer ponto da página. Mas ela trata o formulário como imagem plana, então não entra nos campos interativos de verdade. Para esses, use um app de PDF.",
    },
    {
      q: "Como preencho um formulário digitalizado no iPhone?",
      a: "Um formulário digitalizado é plano, então posicione o seu próprio texto e os vistos na página com a Marcação ou com o app PDF Editor e exporte. Não há campos para digitar.",
    },
    {
      q: "Preencher formulário no iPhone é privado?",
      a: "Com o app PDF Editor o formulário é preenchido no aparelho, então os dados que você digita não vão a lugar nenhum. A Marcação também é local. Ferramentas de preenchimento na web podem enviar o arquivo a um servidor.",
    },
    {
      q: "Como devolvo o formulário preenchido?",
      a: "Exporte a cópia preenchida e use a folha de compartilhamento do iOS para mandar pelo Mail, pelo Mensagens ou por qualquer aplicativo. Achate antes se quiser travar as respostas.",
    },
  ],
  related: [
    { label: "Como preencher um formulário PDF", path: "/guides/how-to-fill-out-a-pdf-form" },
    { label: "Como preencher formulários PDF no Android", path: "/guides/how-to-fill-pdf-forms-on-android" },
    { label: "Como assinar um PDF no iPhone", path: "/guides/how-to-sign-pdf-on-iphone" },
    { label: "Melhor app de formulários PDF para iPhone", path: "/guides/best-pdf-form-app-for-iphone" },
    { label: "Fluxo de formulários PDF no celular", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
