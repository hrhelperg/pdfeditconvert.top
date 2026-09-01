import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "freelancers",
  h1: "PDF Editor dla freelancerów",
  description:
    "Sposoby pracy, które kochają freelancerzy: oferty, podpisane umowy i faktury — wszystko z telefonu.",
  intro: [
    "Freelancerzy załatwiają większość spraw biznesowych z telefonu. Nie ma biura, nie ma działu IT, nie ma wspólnej drukarki. Ten sam sposób pracy z PDF, który w korporacyjnym zespole wymaga trzech aplikacji i subskrypcji podpisu elektronicznego, tutaj często musi zmieścić się w jednej aplikacji, szybko, między płatnymi godzinami pracy.",
    "Każda minuta spędzona na walce z narzędziami to minuta nieprzepracowana nad płatnym zleceniem. Edytor PDF, który po prostu działa — bez przesyłania plików na serwer, bez zakładania konta, bez miesięcznych opłat za narzędzie używane dwa razy w tygodniu — to jedna z tych cichych inwestycji, które zwracają się przez miesiące.",
    "To konkretne operacje, które sprawiają, że życie freelancera da się prowadzić z telefonu — szybko, prywatnie i bez kosztów subskrypcji.",
  ],
  workflows: [
    {
      title: "Wyślij dopracowaną ofertę jako PDF",
      body: "Wyeksportuj ofertę z Notion, Pages albo Google Docs do PDF. Podpisz ją, załącz do maila, wyślij. Odbiorca widzi dokładnie to, co miałeś na myśli.",
    },
    {
      title: "Podpisuj umowy z klientami na telefonie",
      body: "Narysuj podpis raz, korzystaj z niego w każdej kolejnej umowie. Koniec z „odezwę się, jak będę przy laptopie\".",
    },
    {
      title: "Skanuj paragony wydatków na bieżąco",
      body: "Spotkanie przy kawie, przejazd taksówką, zakup sprzętu — skanuj od razu. Powstałe pliki PDF są przeszukiwalne i przyjazne dla oprogramowania księgowego.",
    },
    {
      title: "Wystawiaj faktury w PDF, zawsze",
      body: "Niezależnie od narzędzia do fakturowania, przed wysłaniem eksportuj do PDF. Ogranicza to ryzyko edycji i wygląda bardziej profesjonalnie niż DOCX.",
    },
    {
      title: "Połącz materiały końcowe przy przekazaniu projektu",
      body: "Połącz ostateczny brief, podpisaną umowę i materiały pomocnicze w jeden archiwalny plik PDF przy zamykaniu projektu.",
    },
  ],
  appPitch:
    "PDF Editor to cichy koń roboczy freelancera — nie zastępuje narzędzi do projektowania czy fakturowania, po prostu sprawia, że warstwa dokumentowa przestaje wymagać wysiłku. Bezpłatny, natywny, działający na urządzeniu. Dostępny na iOS i Android.",
  related: [
    { label: "Podpisywanie PDF na telefonie", path: "/sign-pdf" },
    { label: "Sposoby pracy z PDF dla firm", path: "/pdf-for-business" },
    { label: "Przypadki użycia — praca zdalna", path: "/use-cases/remote-work" },
  ],
};

export default content;
