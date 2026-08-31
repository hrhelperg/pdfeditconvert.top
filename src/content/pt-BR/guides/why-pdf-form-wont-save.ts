import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-wont-save",
  h1: "Por que o formulário PDF não salva",
  description:
    "Preencheu o formulário e as respostas somem ao reabrir? Por que alguns leitores só imprimem em vez de salvar os dados dos campos e os jeitos confiáveis de fazer as respostas ficarem.",
  updated: "2026-06-01",
  intro: [
    "Você passa dez minutos preenchendo um formulário, salva, reabre depois e todos os campos estão em branco de novo. É de enlouquecer, e não é erro seu — acontece porque os valores dos campos moram em uma camada separada da página, e nem toda ferramenta grava essa camada de volta no arquivo quando você salva. Algumas só conseguem imprimir o formulário, nunca guardar o que você digitou.",
    "Existem duas correções confiáveis: usar uma ferramenta que salve dados de formulário de verdade, ou achatar o formulário para as respostas virarem conteúdo permanente da página, que nada consegue descartar. A escolha depende de você ainda precisar ou não editar as respostas depois. De qualquer forma, o problema das respostas sumidas tem solução completa.",
    "Este guia explica por que o salvamento falha, como confirmar se a ferramenta é o problema e os dois jeitos confiáveis de fazer as respostas preenchidas ficarem no lugar.",
  ],
  steps: [
    {
      title: "Confirme que as respostas realmente não estão salvando",
      body: "Preencha um campo, salve, feche o arquivo por completo e reabra. Se a resposta sumiu, os valores dos campos não estão sendo gravados — é um problema de salvamento, não algo que você fez errado.",
    },
    {
      title: "Use Salvar ou Exportar, nunca só Imprimir",
      body: "Escolha Salvar ou Exportar para gravar os valores dos campos no PDF. Um caminho só de impressão (comum em leitores básicos) gera saída, mas nunca guarda as respostas editáveis — a causa clássica dos dados sumidos.",
    },
    {
      title: "Troque por uma ferramenta que lide com formulários",
      body: "Se o seu aplicativo atual só imprime, leve o formulário para um app de PDF dedicado ou uma ferramenta de navegador que salve dados de formulário. Reabra o arquivo salvo para confirmar que as respostas ficaram.",
    },
    {
      title: "Achate para tornar as respostas permanentes",
      body: "Se você terminou de editar, achate o formulário. Achatar funde os valores na página, então não sobra camada separada para se perder e as respostas sobrevivem em qualquer lugar.",
    },
    {
      title: "Salve como cópia nova",
      body: "Exporte com um nome novo para você ficar com o formulário em branco e a versão preenchida — e nunca sobrescrever o modelo com um formulário vazio sem querer.",
    },
  ],
  tips: [
    "Se as respostas somem, a sua ferramenta só está imprimindo, não salvando a camada de campos — troque por uma que grave dados de formulário.",
    "Achatar é a correção mais garantida: depois de achatado, não sobra camada de campos para perder.",
    "Sempre reabra um formulário salvo antes de contar com ele; o teste de fechar e reabrir pega o problema na hora.",
    "Guarde o original em branco separado, para achatar a cópia preenchida nunca custar o modelo reutilizável.",
    "No celular, o atalho de “imprimir em PDF” normalmente achata — tudo bem se você já terminou, mas ele não mantém o formulário editável.",
  ],
  mobileNote:
    "O app PDF Editor grava as respostas preenchidas no arquivo e exporta uma cópia achatada quando você termina, então nada some ao reabrir nem do lado de quem recebe. Ele salva no aparelho, então os dados que você digitou continuam privados.",
  faq: [
    {
      q: "Por que o meu formulário PDF sempre salva em branco?",
      a: "Porque o seu leitor está imprimindo o formulário em vez de salvar os valores dos campos. As respostas moram em uma camada separada; se ela não é gravada no arquivo, reabrir mostra tudo em branco. Use uma ferramenta que salve dados de formulário, ou achate.",
    },
    {
      q: "Como faço as respostas do formulário ficarem?",
      a: "Salve ou exporte com uma ferramenta que lide com formulários, para os valores dos campos serem gravados no arquivo, e reabra para confirmar. Para um resultado permanente, achate o formulário e funda as respostas na página.",
    },
    {
      q: "O que achatar resolve no salvamento?",
      a: "Ele funde os valores preenchidos na própria página, sem deixar camada de campos separada para descartar. Depois de achatado, as respostas salvam e aparecem sem falha em qualquer leitor.",
    },
    {
      q: "Devo sobrescrever o original ou salvar uma cópia?",
      a: "Salve uma cópia com nome novo. Assim o modelo em branco e a sua versão preenchida ficam separados, e você nunca perde o modelo nem manda um formulário vazio por engano.",
    },
    {
      q: "Isso é a mesma coisa que um formulário somente leitura?",
      a: "Não. Um problema de salvamento significa que a ferramenta não guarda os dados dos campos. Um formulário somente leitura bloqueia a edição ativamente. Se você consegue digitar mas não consegue manter as respostas, é questão de salvamento, não de proteção.",
    },
  ],
  related: [
    { label: "Como salvar um formulário PDF preenchido", path: "/guides/how-to-save-a-filled-pdf-form" },
    { label: "Formulário PDF não funciona", path: "/guides/pdf-form-not-working" },
    { label: "Por que o formulário PDF é somente leitura", path: "/guides/why-pdf-form-is-read-only" },
    { label: "Como funcionam os formulários PDF", path: "/guides/how-pdf-forms-work" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
