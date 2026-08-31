import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-business",
  hero: {
    eyebrow: "PDF para empresas",
    h1: "Fluxos de PDF para equipes pequenas.",
    highlight: "equipes pequenas",
    lead: "Contratos, cobranças, orçamentos, acordos assinados, recibos digitalizados — todos os documentos que fazem um pequeno negócio girar, resolvidos pelo celular, sem licença por usuário nem software corporativo.",
    primaryCta: { label: "Abrir o app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por que equipes pequenas continuam penando com PDF",
    paragraphs: [
      "Pequenos negócios vivem de PDF. O orçamento sai em PDF, o contrato volta assinado em PDF, a cobrança é PDF, os recibos são digitalizados em PDF, o acordo de confidencialidade é PDF. E, mesmo assim, as ferramentas que lidam com eles ou têm preço corporativo, ou vivem na web e são frágeis.",
      "Software corporativo de PDF pressupõe que você tem um departamento de TI e um processo de compras. Sites gratuitos pressupõem que você não se importa em subir contratos de clientes para o servidor de terceiros. Nenhum dos dois modelos serve para uma agência de cinco pessoas, um freelancer ou um pequeno negócio online que precisa tratar documentos rápido, sem burocracia.",
      "Um kit de PDF nativo, feito para o celular, encaixa melhor em equipes pequenas. Não há licenças para administrar, filas de upload para coordenar nem mensalidade por uma ferramenta usada poucas vezes por semana. Cada pessoa instala o app no próprio celular e produz já no primeiro dia.",
    ],
  },
  features: {
    heading: "As operações que importam para equipes pequenas",
    items: [
      {
        icon: "FileSignature",
        title: "Orçamento → contrato → assinatura",
        body: "Envie o orçamento em PDF, receba o aceite assinado e arquive o resultado. O ciclo inteiro cabe no celular.",
      },
      {
        icon: "Receipt",
        title: "Digitalizar recibos na hora",
        body: "Digitalize recibos de papel no momento em que os recebe. O nome automático e o OCR os deixam prontos para o sistema contábil.",
      },
      {
        icon: "ShieldCheck",
        title: "Proteger documentos sensíveis",
        body: "Coloque senha em contratos, folhas de pagamento e cópias de acordos antes de enviá-los para fora. AES-256, no próprio aparelho.",
      },
      {
        icon: "Combine",
        title: "Juntar e dividir entregas",
        body: "Una um orçamento ao seu escopo de trabalho; divida uma exportação longa por cliente. As duas coisas levam três toques.",
      },
      {
        icon: "Wand",
        title: "Ajustes rápidos, sem notebook",
        body: "Corrija um erro de digitação no orçamento, atualize a data de uma cobrança, troque o logotipo de um material — tudo pelo celular.",
      },
      {
        icon: "Globe",
        title: "Funciona com a sua nuvem atual",
        body: "Drive, iCloud, OneDrive, Dropbox — o app lê e grava onde a sua equipe já guarda os arquivos.",
      },
    ],
  },
  steps: {
    heading: "Um fluxo típico de pequeno negócio",
    items: [
      {
        title: "Receba um pedido",
        body: "Um cliente pede um orçamento. Você o redige no seu sistema de cobrança e exporta em PDF.",
      },
      {
        title: "Assine e date",
        body: "Abra o PDF no PDF Editor, assine com a sua assinatura salva e adicione o carimbo de data.",
      },
      {
        title: "Envie por e-mail ou mensagem",
        body: "Compartilhe o orçamento assinado direto do app, pela folha de compartilhamento do e-mail ou pelo mensageiro da equipe.",
      },
      {
        title: "Receba a via assinada de volta",
        body: "Quando o cliente devolver, abra o arquivo, arquive na sua nuvem e coloque uma senha se ele tiver cláusulas sensíveis.",
      },
      {
        title: "Emita a cobrança e junte ao contrato",
        body: "Exporte a cobrança do seu sistema contábil e use Juntar para reunir cobrança + contrato assinado em um único PDF de arquivo.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Tocando um negócio pelo celular",
    body: "Boa parte do trabalho com documentos em um pequeno negócio acontece no meio de outras coisas — no cliente, no táxi, entre um compromisso e outro. Ser nativo no celular significa que o fluxo não depende de estar sentado à mesa. Contratos que antes esperavam a noite e o notebook agora saem na mesma hora em que foram pedidos.",
  },
  faq: [
    {
      q: "O app serve para uma equipe de 5 a 20 pessoas?",
      a: "Serve para pessoas individuais dentro de uma equipe pequena — cada uma instala no próprio celular. Não existe console central de administração; é uma ferramenta por aparelho. Para organizações maiores que isso, um sistema corporativo de gestão de documentos pode ser mais adequado.",
    },
    {
      q: "Posso usar em contratos com valor jurídico?",
      a: "A maioria dos países aceita PDFs assinados para contratos comerciais comuns. No Brasil, a MP 2.200-2/2001 e a Lei 14.063/2020 reconhecem assinaturas eletrônicas; o eIDAS na União Europeia e o ESIGN Act nos Estados Unidos fazem o mesmo. Para acordos de alto valor, regulados ou internacionais, confira as regras locais e avalie uma assinatura qualificada com certificado ICP-Brasil.",
    },
    {
      q: "Integra com sistemas de contabilidade?",
      a: "O PDF Editor gera PDFs padrão, que qualquer sistema contábil aceita. Não é preciso integração especial — basta salvar o PDF na sua nuvem e o sistema o encontra.",
    },
    {
      q: "Como manter os arquivos dos clientes privados?",
      a: "Todas as operações rodam no aparelho. Os arquivos só saem do seu celular quando você os compartilha de propósito. Coloque senha nos documentos mais sensíveis antes de enviá-los para fora.",
    },
    {
      q: "E a trilha de auditoria?",
      a: "PDFs assinados incluem metadados da assinatura (data, hora e nome de quem assinou). Para setores regulados que exigem trilha de auditoria completa, complemente com uma plataforma dedicada de assinatura eletrônica — o PDF Editor dá conta dos contratos do dia a dia, não de fluxos regulados.",
    },
  ],
  related: [
    { label: "Segurança e criptografia de PDF", path: "/pdf-security" },
    {
      label: "Fluxos de PDF seguros para empresas",
      path: "/guides/secure-pdf-workflows-for-business",
    },
    { label: "Assinar PDF pelo celular", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Toque a rotina de documentos pelo celular.",
    sub: "Grátis para o uso comercial do dia a dia. Sem licença por usuário.",
  },
};

export default content;
