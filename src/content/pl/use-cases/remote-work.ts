import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "remote-work",
  h1: "PDF Editor do pracy zdalnej",
  description:
    "Pracuj z dokumentami w ruchu: skanuj, podpisuj i udostępniaj pliki PDF z dowolnego urządzenia, z dowolnego miejsca.",
  intro: [
    "Praca zdalna odrywa biuro od pracy. Wadą jest to, że operacje na dokumentach, które kiedyś odbywały się przy drukarce, skanerze czy na dysku sieciowym, teraz muszą odbywać się na dowolnym urządzeniu, z jakiego akurat korzystasz — często w pociągu, w kawiarni albo u klienta. Natywny mobilny edytor PDF zamyka tę lukę.",
    "Minimum, jakiego wymaga się od narzędzia do pracy zdalnej, to działanie przy słabym WiFi, działanie offline, gdy trzeba, brak konieczności przesyłania wrażliwych dokumentów do zewnętrznej firmy oraz działanie na dowolnym urządzeniu, z jakiego akurat się korzysta. PDF Editor spełnia wszystkie cztery warunki, bo wszystkie najważniejsze operacje odbywają się na urządzeniu.",
    "To konkretne sposoby pracy, które zamieniają telefon w przenośne biuro dokumentów — bez zależności od konkretnego biurka, kraju czy połączenia internetowego.",
  ],
  workflows: [
    {
      title: "Podpisuj dokumenty w podróży",
      body: "Podpisz umowę w samolocie albo w pociągu. Podpis zapisywany jest na urządzeniu; plik jest szyfrowany przy zapisie.",
    },
    {
      title: "Skanuj, gdy nie masz skanera",
      body: "Pokoje hotelowe, centra konferencyjne, biura klientów — aparat telefonu w połączeniu z automatyczną korektą wystarcza do każdego dokumentu biznesowego.",
    },
    {
      title: "Łącz pliki przy zdalnym przekazaniu",
      body: "Scal dokumenty potrzebne współpracownikowi w jeden plik PDF, udostępnij przez Drive albo Slack — gotowe.",
    },
    {
      title: "Kompresuj przed przesłaniem w wolnych sieciach",
      body: "Hotelowe WiFi sprawia, że ogromne załączniki są udręką. Najpierw skompresuj, potem prześlij — zaoszczędzisz godzinę.",
    },
    {
      title: "Wprowadzaj drobne poprawki bez uruchamiania laptopa",
      body: "Literówka w szkicu, zła data na wycenie — popraw to na telefonie w 60 sekund i idź dalej.",
    },
  ],
  appPitch:
    "PDF Editor naturalnie łączy się z resztą narzędzi do pracy zdalnej — Drive, iCloud, Notion, Slack, Linear, GitHub. To warstwa, która zajmuje się operacjami na dokumentach bez konieczności posiadania biurka czy stabilnego połączenia.",
  related: [
    { label: "PDF dla firm", path: "/pdf-for-business" },
    { label: "Przypadki użycia — freelancerzy", path: "/use-cases/freelancers" },
    { label: "Skanowanie do PDF", path: "/scan-to-pdf" },
  ],
};

export default content;
