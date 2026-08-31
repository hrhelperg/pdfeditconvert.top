import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-android",
  h1: "Como assinar um PDF no Android",
  description:
    "Assine um PDF no Android, onde não existe um assinador nativo universal. O caminho confiável pelo app, as opções que variam por fabricante e o básico da parte legal.",
  updated: "2026-05-23",
  intro: [
    "O Android não tem um jeito único e universal de assinar um PDF, como o iOS tem com a Marcação. O que você consegue depende do seu celular e dos apps que por acaso tem instalados — alguns visualizadores de fabricante e a prévia do Google Drive deixam rabiscar a página, outros não, e a experiência muda entre Samsung, Pixel e o resto. É justamente essa inconsistência que faz uma ferramenta dedicada de assinatura fazer sentido no Android.",
    "Este guia foca no caminho que funciona igual em qualquer celular Android: o app PDF Editor, que salva uma assinatura reutilizável, detecta campos de assinatura e mantém o documento no seu aparelho. Ele também comenta as opções nativas mais irregulares, para você saber o que esperar delas.",
    "Assinaturas eletrônicas são aceitas em documentos comerciais comuns na maioria dos países, então assinar pelo Android costuma ser tudo de que você precisa para devolver um contrato, devidamente assinado, em minutos.",
  ],
  steps: [
    {
      title: "Entenda primeiro as opções nativas",
      body: "Alguns visualizadores Android e a marcação do Google Drive permitem um traço à mão livre, mas a disponibilidade e a qualidade variam por aparelho, e a maioria não dá conta de campos de assinatura, datas ou de uma assinatura reutilizável.",
    },
    {
      title: "Abra o PDF no app PDF Editor",
      body: "Importe o documento do gerenciador de arquivos, do Gmail, do Drive ou de qualquer folha de compartilhamento. O app se comporta igual, seja qual for o celular Android.",
    },
    {
      title: "Escolha o tipo de assinatura",
      body: "Selecione de próprio punho, digitada ou rubrica. O app detecta automaticamente os campos de assinatura existentes, se o PDF foi feito para ser assinado.",
    },
    {
      title: "Crie a sua assinatura uma vez",
      body: "Desenhe com o dedo ou com uma S Pen na primeira vez; ela fica salva no aparelho para todos os documentos seguintes. Depois disso, assinar são poucos toques.",
    },
    {
      title: "Posicione e acrescente a data, se precisar",
      body: "Arraste a assinatura até o ponto certo e redimensione. Acrescente carimbo de data ou rubrica onde o documento exigir.",
    },
    {
      title: "Exporte a via assinada",
      body: "Salve como arquivo novo para manter o original sem assinatura e compartilhe pelo Gmail, Drive, WhatsApp ou qualquer app. O PDF assinado está pronto para enviar.",
    },
  ],
  tips: [
    "Uma S Pen (nos modelos Samsung Note e Ultra) produz uma assinatura visivelmente mais limpa que o dedo — vale usar em contratos que vão para clientes.",
    "Como as opções nativas do Android variam muito por marca, um app dedicado é a escolha confiável se você assina documentos com frequência ou troca de aparelho.",
    "Guarde o original sem assinatura ao lado da via assinada, caso a outra parte peça uma versão limpa ou você precise reassinar.",
    "Coloque senha nos documentos assinados mais sensíveis antes de compartilhar — proteger é uma etapa separada de assinar.",
    "As assinaturas eletrônicas cobrem documentos comerciais comuns na maioria dos lugares; acordos de alto valor ou regulados podem exigir uma assinatura qualificada mais formal.",
  ],
  mobileNote:
    "No Android, o app PDF Editor entrega a experiência consistente de assinatura que a própria plataforma não tem: assinatura salva, detecção de campos e um documento que nunca sai do seu aparelho. Um contrato pode chegar, ser assinado e voltar sem nunca tocar em um servidor.",
  faq: [
    {
      q: "O Android tem um assinador de PDF nativo?",
      a: "Não um universal. Alguns visualizadores de fabricante e o Google Drive permitem um traço à mão livre, mas isso varia por aparelho e a maioria não lida com campos de assinatura nem com assinatura reutilizável. Um app dedicado entrega uma experiência consistente.",
    },
    {
      q: "Dá para reutilizar a minha assinatura em vários documentos?",
      a: "Dá, com o app PDF Editor. Você desenha uma vez, ela fica salva no aparelho e todo documento seguinte leva poucos toques para assinar.",
    },
    {
      q: "Assinar no Android tem validade jurídica?",
      a: "Em contratos comerciais comuns, na maioria dos países, sim — no Brasil, a MP 2.200-2/2001 e a Lei 14.063/2020 dão essa base. Documentos de alto valor ou regulados podem exigir uma assinatura qualificada mais formal; confira as regras do seu caso.",
    },
    {
      q: "Meu documento é enviado quando eu assino?",
      a: "Com o app PDF Editor, não. A sua assinatura e o documento ficam no seu aparelho, o que importa em acordos confidenciais.",
    },
    {
      q: "Como isso muda no iPhone?",
      a: "O iPhone tem a ferramenta Marcação embutida para assinaturas pontuais. Veja o guia dedicado sobre assinar um PDF no iPhone.",
    },
  ],
  related: [
    { label: "Assinar PDF — assinatura eletrônica no celular", path: "/sign-pdf" },
    { label: "Como assinar um PDF no iPhone", path: "/guides/how-to-sign-pdf-on-iphone" },
    { label: "Como assinar um PDF pelo celular", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Como editar um PDF no Android", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "Assinar PDF", path: "/sign-pdf" },
};

export default content;
