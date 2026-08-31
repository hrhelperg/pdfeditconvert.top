import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-save-a-filled-pdf-form",
  h1: "Como salvar um formulário PDF preenchido",
  description:
    "Preencheu o formulário e as respostas sumiram? Como salvar os dados do formulário de um jeito confiável, por que alguns leitores não salvam e quando achatar antes de enviar.",
  updated: "2026-06-01",
  intro: [
    "Poucos momentos com PDF irritam mais do que preencher um formulário longo, fechar, reabrir e encontrar todos os campos em branco de novo. O trabalho não se perdeu porque você errou alguma coisa — e sim porque as respostas moram na camada de campos do formulário, e nem toda ferramenta grava essa camada de volta no arquivo quando você salva.",
    "Salvar um formulário preenchido com segurança se resume a duas coisas: usar uma ferramenta que guarde os valores dos campos (não só uma que os imprima) e decidir se você mantém o formulário editável ou o achata para as respostas ficarem permanentes. Acertando esses dois pontos, as suas respostas ficam de pé sempre, em qualquer aparelho que abrir o arquivo depois.",
    "Este guia explica exatamente como salvar as respostas preenchidas, por que alguns leitores as descartam em silêncio e quando achatar é a decisão certa antes de devolver um formulário.",
  ],
  steps: [
    {
      title: "Preencha o formulário inteiro primeiro",
      body: "Responda tudo, marque as caixas de seleção e acrescente a assinatura antes de salvar. Salvar no meio do caminho não tem problema, mas uma passada final antes garante que você salve um arquivo pronto, não um pela metade.",
    },
    {
      title: "Use Salvar ou Exportar, não só Imprimir",
      body: "Escolha Salvar ou Exportar para gravar os valores dos campos no PDF. Alguns leitores básicos só oferecem Imprimir, o que gera papel ou uma cópia plana, mas nunca guarda as respostas editáveis — a causa clássica dos dados sumidos.",
    },
    {
      title: "Salve como uma cópia nova",
      body: "Exporte com um nome novo, como “inscricao-preenchida.pdf”, em vez de sobrescrever o formulário em branco. Assim você fica com um original limpo e uma versão preenchida lado a lado.",
    },
    {
      title: "Decida se vai achatar",
      body: "Se você ainda precisa mudar respostas, mantenha como formulário interativo. Se está enviando em definitivo, achate para os valores se fundirem à página e não poderem ser apagados nem editados.",
    },
    {
      title: "Reabra para confirmar que ficou",
      body: "Feche e reabra o arquivo salvo antes de enviar. Se as respostas continuarem lá, os valores dos campos foram gravados direito. Se sumiram, a ferramenta só imprimiu — troque por uma que salve dados de formulário.",
    },
  ],
  tips: [
    "Se as respostas somem sempre, a ferramenta não está gravando a camada de campos. Use um editor que lide com formulários e salve os valores de verdade.",
    "Achatar é o jeito mais confiável de garantir que as respostas apareçam em todo lugar — depois de achatado, não sobra camada de campos para se perder.",
    "Guarde o original em branco separado; achatar a sua cópia preenchida não deveria custar o modelo reutilizável.",
    "No celular, “compartilhar” ou “exportar” normalmente salva os dados; um atalho de imprimir em PDF pode achatar, o que não tem problema se você já terminou de editar.",
    "Nomeie os arquivos com clareza — em branco, rascunho e final — para nunca mandar o formulário vazio por engano.",
  ],
  mobileNote:
    "O app PDF Editor grava as respostas preenchidas no arquivo e exporta uma cópia achatada quando você está pronto para enviar, então nada é apagado do lado de quem recebe. Tudo acontece no aparelho, então os dados que você digita não são enviados a lugar nenhum.",
  faq: [
    {
      q: "Por que as respostas do meu formulário PDF somem depois de salvar?",
      a: "Porque a ferramenta imprimiu o formulário em vez de salvar os valores dos campos. As respostas moram em uma camada separada; se ela não é gravada no arquivo, reabrir mostra tudo em branco de novo. Use uma ferramenta que salve dados de formulário.",
    },
    {
      q: "Devo achatar um formulário antes de enviar?",
      a: "Se você terminou de editar, sim. Achatar funde as respostas na página, então elas não podem ser apagadas e aparecem igual em qualquer leitor. Guarde uma cópia não achatada só se puder precisar revisar.",
    },
    {
      q: "Como mantenho o formulário editável e ainda salvo as respostas?",
      a: "Salve ou exporte como PDF interativo, sem achatar. Uma ferramenta que lide com formulários guarda os valores dos campos para você reabrir e mudar depois.",
    },
    {
      q: "Salvar um formulário preenchido é privado?",
      a: "Depende da ferramenta. O app PDF Editor e as ferramentas locais de navegador salvam no seu aparelho, então os dados pessoais que você digitou não vão a lugar nenhum. Ferramentas com upload processam o arquivo em um servidor.",
    },
    {
      q: "Dá para salvar um formulário plano que preenchi com texto por cima?",
      a: "Dá. Como formulários planos não têm camada de campos, o texto que você acrescentou vira parte da página depois de exportado, então ele sempre salva e aparece direito.",
    },
  ],
  related: [
    { label: "Como preencher um formulário PDF", path: "/guides/how-to-fill-out-a-pdf-form" },
    { label: "Como funcionam os formulários PDF", path: "/guides/how-pdf-forms-work" },
    { label: "Por que o formulário PDF não salva", path: "/guides/why-pdf-form-wont-save" },
    { label: "Como enviar um formulário PDF preenchido", path: "/guides/how-to-send-a-completed-pdf-form" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
