import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-from-phone",
  h1: "Como compartilhar um PDF pelo celular",
  description:
    "Compartilhe um PDF do iPhone ou do Android do jeito certo — e-mail, AirDrop, mensagem ou link — e prepare o tamanho para que ele realmente chegue.",
  updated: "2026-05-23",
  intro: [
    "Compartilhar um PDF pelo celular é uma ação de um toque só — até deixar de ser: o arquivo é grande demais para o e-mail, quem recebe não consegue abrir o link, ou você percebe tarde demais que mandou a versão com uma página que não deveria ter saído. Acertar tem menos a ver com o botão de compartilhar e mais com escolher o canal e preparar o arquivo antes de tocá-lo.",
    "Este guia cobre as principais formas de compartilhar de um iPhone ou Android — e-mail, AirDrop ou Compartilhamento por Proximidade, apps de mensagem e links na nuvem — e quando cada uma é a escolha certa. Ele também cobre o preparo rápido que evita um envio devolvido ou um vexame.",
    "A razão de existir de um celular é mandar coisas de onde você estiver. Um pouco de cuidado transforma isso de um toque esperançoso em um documento que chega de forma confiável, no tamanho certo e sem nada de extra anexado.",
  ],
  steps: [
    {
      title: "Prepare o arquivo antes de compartilhar",
      body: "Confirme que é a versão certa, descarte páginas que não devem sair e veja se o tamanho é razoável. Trinta segundos aqui evitam a maioria dos acidentes de compartilhamento.",
    },
    {
      title: "Abra a folha de compartilhamento",
      body: "Toque em Compartilhar no PDF — pelo app Arquivos, pelo app de e-mail ou pelo PDF Editor. O iOS e o Android mostram ali todos os destinos relevantes.",
    },
    {
      title: "E-mail para documentos formais",
      body: "Anexe a um e-mail quando houver um registro a manter — contratos, cobranças, inscrições. Atenção ao limite de cerca de 25 MB; comprima antes se o arquivo estiver pesado.",
    },
    {
      title: "AirDrop ou Compartilhamento por Proximidade para quem está perto",
      body: "Vai mandar para um aparelho na mesma sala? O AirDrop (iPhone) ou o Compartilhamento por Proximidade (Android) transferem o arquivo diretamente, rápido, sem limite de tamanho e sem internet.",
    },
    {
      title: "Apps de mensagem para envios rápidos e informais",
      body: "WhatsApp, Mensagens e afins resolvem envios casuais, mas alguns recomprimem ou limitam arquivos. Para qualquer coisa que precise chegar impecável, prefira e-mail ou link.",
    },
    {
      title: "Link na nuvem para arquivos grandes ou muitos destinatários",
      body: "Em um arquivo pesado ou para um público amplo, compartilhe um link de uma nuvem que você controla. Isso contorna os limites de tamanho e permite revogar o acesso depois.",
    },
  ],
  tips: [
    "Comprima antes de compartilhar se o arquivo for cheio de digitalização — um e-mail devolvido é pior que um arquivo um pouco menor.",
    "Confira as páginas antes de tocar em compartilhar. O arrependimento mais comum é mandar uma versão com uma anotação interna ou uma página destinada a outra pessoa.",
    "O AirDrop e o Compartilhamento por Proximidade são os heróis esquecidos do envio presencial: instantâneos, sem limite de tamanho, sem internet e sem upload.",
    "Apps de mensagem podem recomprimir documentos silenciosamente. Em arquivos em que a qualidade ou a fidelidade importa, use e-mail ou link na nuvem.",
    "Para documentos sensíveis por link, use um serviço em que você confie e desligue o acesso assim que a pessoa tiver o arquivo.",
  ],
  mobileNote:
    "O app PDF Editor compartilha direto pela folha de compartilhamento depois que você preparou o arquivo — comprimir, tirar uma página, assinar —, então o documento que sai do seu celular é o que você pretendia mandar, num tamanho que chega. Tudo antes do compartilhamento acontece no aparelho.",
  faq: [
    {
      q: "Qual é o melhor jeito de compartilhar um PDF pelo celular?",
      a: "Depende de quem recebe: e-mail para documentos formais, AirDrop ou Compartilhamento por Proximidade para alguém por perto, apps de mensagem para envios informais rápidos e link na nuvem para arquivos grandes ou muitos destinatários.",
    },
    {
      q: "Por que o meu PDF não sai por e-mail?",
      a: "Provavelmente ele passa do limite de cerca de 25 MB de anexo, normalmente por ser cheio de digitalização. Comprima antes ou compartilhe um link na nuvem.",
    },
    {
      q: "Apps de mensagem alteram o meu PDF?",
      a: "Alguns recomprimem ou limitam anexos, o que pode afetar a qualidade. Para documentos que precisam chegar exatamente como foram enviados, prefira e-mail ou link na nuvem.",
    },
    {
      q: "O AirDrop e o Compartilhamento por Proximidade são privados?",
      a: "São — o arquivo é transferido diretamente entre os aparelhos, sem passar por um servidor nem pela internet, o que os torna uma boa escolha para documentos sensíveis entregues presencialmente.",
    },
    {
      q: "Como evito compartilhar as páginas erradas?",
      a: "Revise o documento antes de tocar em compartilhar e remova as páginas que não devem sair. Veja o guia sobre preparar um PDF antes de compartilhar para um checklist completo.",
    },
  ],
  related: [
    { label: "Editor de PDF — prepare e compartilhe no celular", path: "/pdf-editor" },
    { label: "Como preparar um PDF antes de compartilhar", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Como enviar arquivos PDF grandes", path: "/guides/how-to-send-large-pdf-files" },
    { label: "Como diminuir o tamanho de um PDF no Android", path: "/guides/how-to-make-pdf-smaller-on-android" },
  ],
  parentHub: { label: "Editor de PDF", path: "/pdf-editor" },
};

export default content;
