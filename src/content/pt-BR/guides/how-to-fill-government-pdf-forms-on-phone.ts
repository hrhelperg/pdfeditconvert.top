import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-government-pdf-forms-on-phone",
  h1: "Como preencher formulários PDF de órgãos públicos pelo celular",
  description:
    "Formulários de órgãos públicos costumam ser digitalizações planas com formatação rígida. Como completá-los pelo celular, lidar com os campos chatos e seguir as instruções do próprio órgão.",
  updated: "2026-06-01",
  intro: [
    "Formulários de órgãos públicos são uma categoria própria de chateação. Muitos são digitalizações planas de originais em papel, sem campos interativos, a formatação é rígida e as instruções de envio não se negociam. A boa notícia é que normalmente dá para completá-los inteiramente pelo celular — a má é que fazer isso com capricho pede um pouco mais de cuidado do que em um formulário interativo simpático.",
    "Alguns avisos honestos antes de começar: este guia explica como preencher esses formulários, não se um envio específico é válido ou aceito. Exigências de órgãos e repartições variam muito, alguns formulários usam recursos avançados que nem todo aplicativo suporta, e as instruções de quem emitiu sempre valem mais que um conselho geral. Na dúvida, siga o que o órgão diz.",
    "Com esse enquadramento, veja como completar um formulário público pelo celular — plano ou interativo —, posicionar as respostas com limpeza e prepará-lo para o método de envio que o órgão exigir.",
  ],
  steps: [
    {
      title: "Leia primeiro as instruções do órgão",
      body: "Formulários públicos normalmente vêm com regras de envio — formato, exigências de assinatura, para onde mandar. Leia antes de preencher, porque elas decidem se você achata, imprime ou envia pela internet, e como.",
    },
    {
      title: "Abra o formulário em um app de PDF competente",
      body: "Tire o formulário de qualquer pré-visualização de e-mail e leve para o app PDF Editor. Ele reconhece campos interativos quando o formulário os tem e deixa posicionar texto na página quando é uma digitalização plana.",
    },
    {
      title: "Preencha com cuidado e siga o formato",
      body: "Formulários públicos são exigentes com formato — datas, números de protocolo, uma caixinha por caractere. Aproxime o zoom, posicione o texto com precisão em cada linha e siga exatamente o formato pedido.",
    },
    {
      title: "Trate a assinatura como for instruído",
      body: "Acrescente uma assinatura eletrônica onde o formulário permitir. Se o órgão exigir especificamente uma via em papel assinada à mão, imprima, assine e digitalize de novo — siga a exigência em vez de presumir que uma assinatura digitada basta. Alguns processos no Brasil pedem certificado ICP-Brasil; confira o que o órgão exige.",
    },
    {
      title: "Prepare o envio que pediram",
      body: "Achate o formulário preenchido para as respostas não escorregarem e envie pelo método do órgão — portal seguro, e-mail ou impresso pelos Correios. Guarde a sua cópia e qualquer comprovante.",
    },
  ],
  tips: [
    "Deixe sempre as instruções do órgão ganharem das dicas gerais — regras de envio de formulários oficiais variam e importam.",
    "Muitos formulários públicos são digitalizações planas, então conte com posicionar texto na página em vez de digitar em campos.",
    "Aproxime o zoom em campos de caixinha (uma letra por quadrado) para cada caractere cair no lugar certo.",
    "Guarde uma cópia salva de tudo que você enviar, junto com qualquer número de protocolo ou comprovante.",
    "Se um formulário usa recursos dinâmicos avançados e não abre direito, tente outro app de PDF ou peça ao órgão um formato alternativo — não force.",
  ],
  mobileNote:
    "O app PDF Editor dá conta das digitalizações planas que os formulários públicos costumam ser: posicione texto e vistos exatamente onde eles pertencem, acrescente a assinatura onde for permitido, achate e exporte para enviar ou imprimir — tudo pelo celular, no próprio aparelho, mantendo dados pessoais sensíveis fora de servidores de terceiros.",
  faq: [
    {
      q: "Dá para preencher um formulário público em PDF pelo celular?",
      a: "Normalmente dá. A maioria pode ser completada pelo celular — os interativos digitando nos campos, as digitalizações planas posicionando texto na página. Siga sempre as instruções de envio do órgão que emitiu, que variam por formulário.",
    },
    {
      q: "Por que um formulário público não deixa eu digitar?",
      a: "Muitos formulários públicos são digitalizações planas de papel, sem campos interativos. Posicione as respostas na página com a ferramenta de texto de um editor de PDF. Alguns também podem estar bloqueados ou usar recursos que o seu leitor não suporta.",
    },
    {
      q: "Assinatura digitada é aceita em formulário público?",
      a: "Depende inteiramente do órgão e do formulário — as exigências variam. Alguns aceitam assinatura eletrônica; outros pedem uma via assinada à mão, e certos processos exigem certificado ICP-Brasil. Siga a exigência declarada em vez de presumir.",
    },
    {
      q: "Devo achatar um formulário público antes de enviar?",
      a: "Em geral sim, para as respostas não escorregarem nem serem apagadas. Mas siga primeiro as instruções de envio do órgão — alguns portais querem um formato específico.",
    },
    {
      q: "É seguro preencher formulários oficiais pelo celular?",
      a: "Preencher no aparelho com o app PDF Editor mantém os dados pessoais do formulário fora de servidores de terceiros. Para enviar, use o canal oficial e seguro do órgão em vez de um site qualquer.",
    },
  ],
  related: [
    { label: "Como preencher formulários PDF no iPhone", path: "/guides/how-to-fill-pdf-forms-on-iphone" },
    { label: "Como preencher formulários PDF no Android", path: "/guides/how-to-fill-pdf-forms-on-android" },
    { label: "Fluxo de formulários PDF no celular", path: "/guides/mobile-pdf-form-workflow" },
    { label: "Como enviar um formulário PDF preenchido", path: "/guides/how-to-send-a-completed-pdf-form" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
