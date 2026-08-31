import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-app-vs-online-pdf-tools",
  h1: "App de PDF ou ferramentas online — qual compensa mais?",
  description:
    "Apps de PDF nativos e ferramentas de navegador comparados em velocidade, privacidade e acesso sem internet.",
  intro: [
    "Existem dois caminhos para trabalhar com PDF no celular ou no computador: instalar um app nativo ou usar uma das muitas ferramentas de PDF que rodam no navegador. Os dois funcionam — mas as trocas são bem diferentes, e elas pesam mais quando o documento é sensível.",
    "As ferramentas de navegador ganham na comodidade: um clique e você já está trabalhando. Os apps nativos ganham em velocidade, privacidade e uso sem internet. Para uma conversão pontual de um documento público, a ferramenta de navegador resolve. Para o trabalho de documentos do dia a dia — principalmente contratos, documentos pessoais e arquivos de clientes — o app nativo é a escolha padrão mais sensata.",
    "Esta comparação cobre velocidade, privacidade, uso offline, custo e os tipos de arquivo que cada opção resolve bem, para você escolher de propósito em vez de parar no primeiro resultado do Google.",
  ],
  leftLabel: "App de PDF nativo",
  rightLabel: "Ferramenta de PDF online",
  rows: [
    { feature: "Funciona sem internet", left: "sim", right: "não" },
    { feature: "Os arquivos ficam no seu aparelho", left: "sim", right: "não" },
    { feature: "Velocidade (sem espera de upload e download)", left: "sim", right: "não" },
    { feature: "Sem limite de tamanho de arquivo", left: "sim", right: "Limitado" },
    { feature: "Sem exigir conta", left: "sim", right: "Às vezes" },
    { feature: "Funciona em rede corporativa restrita", left: "sim", right: "Talvez" },
    { feature: "Praticidade no uso diário", left: "sim", right: "Limitada" },
    { feature: "Precisa instalar na primeira vez", left: "sim", right: "não" },
    { feature: "Links de colaboração entre aparelhos", left: "Limitado", right: "sim" },
  ],
  whenLeft: [
    "Você lida com documentos sensíveis (contratos, documentos pessoais, folha de pagamento)",
    "Você trabalha em lugares com internet instável",
    "Você edita PDFs com frequência suficiente para justificar a instalação",
    "Você quer a mesma ferramenta funcionando em modo avião",
    "A privacidade importa nos documentos que você processa",
  ],
  whenRight: [
    "Conversão ou junção pontual em um computador público",
    "Você não quer instalar nada",
    "O documento não é sensível",
    "Você precisa de um link de prévia para compartilhar",
    "Você está em um aparelho onde não pode instalar apps",
  ],
  faq: [
    {
      q: "Ferramentas de PDF online são seguras?",
      a: "Algumas são. A maioria tem políticas de privacidade que permitem guardar o seu arquivo por um tempo para processá-lo. Para documentos não sensíveis, tudo bem; para contratos e documentos pessoais, o app nativo é mais seguro.",
    },
    {
      q: "Por que o app nativo é mais rápido?",
      a: "Não há upload do arquivo, nem fila no servidor, nem download do resultado. A operação inteira acontece localmente.",
    },
    {
      q: "Dá para usar os dois?",
      a: "Dá. Muita gente usa o app nativo no trabalho do dia a dia e recorre a uma ferramenta de navegador no caso raro em que um colega precisa de um link de prévia para compartilhar.",
    },
  ],
  related: [
    { label: "Editor de PDF — visão geral", path: "/pdf-editor" },
    { label: "Segurança de PDF", path: "/pdf-security" },
    { label: "PDF para empresas", path: "/pdf-for-business" },
  ],
};

export default content;
