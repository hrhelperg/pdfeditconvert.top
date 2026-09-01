import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-docx",
  h1: "PDF czy DOCX — porównanie funkcja po funkcji",
  description:
    "Porównaj PDF i DOCX pod względem edytowalności, wierności odwzorowania, podpisywania, bezpieczeństwa i udostępniania. Wybierz format odpowiedni do zadania.",
  intro: [
    "PDF i DOCX to dwa formaty, w których kończy większość dokumentów. Oba mają swoje zadanie — a wybór właściwego do konkretnej sytuacji pozwala uniknąć większości problemów z formatowaniem i udostępnianiem, które kojarzą się ludziom z dokumentami w ogóle.",
    "To porównanie jest praktyczne, nie akademickie. Każdy wiersz odzwierciedla to, jak oba formaty zachowują się w realnych sposobach pracy, a nie to, jak są opisane w dokumentach standaryzacyjnych. Skupiamy się na rzeczach, które zauważysz w pierwszym miesiącu intensywnego korzystania z jednego albo drugiego formatu.",
    "W skrócie: PDF wygrywa, gdy dokument jest gotowy, musi wyglądać identycznie u czytelnika albo zawiera podpis. DOCX wygrywa, gdy dokument jest wciąż roboczą wersją, recenzuje go kilka osób albo treść ma zostać wykorzystana gdzie indziej. Większość dokumentów w różnych etapach swojego istnienia styka się z oboma formatami.",
  ],
  leftLabel: "PDF",
  rightLabel: "DOCX",
  rows: [
    { feature: "Układ idealny co do piksela", left: "tak", right: "nie" },
    { feature: "Łatwa edycja tekstu", left: "Ograniczone", right: "tak" },
    { feature: "Uniwersalne wyświetlanie", left: "tak", right: "nie" },
    { feature: "Śledzenie zmian i komentarze", left: "Ograniczone", right: "tak" },
    { feature: "Ochrona hasłem (AES-256)", left: "tak", right: "tak" },
    { feature: "Niezawodne wyświetlanie po 10 latach", left: "tak", right: "nie" },
    { feature: "Wyświetlanie na telefonie bez dodatkowej aplikacji", left: "tak", right: "nie" },
    { feature: "Pola formularza", left: "tak", right: "Ograniczone" },
    { feature: "Wbudowana obsługa podpisu", left: "tak", right: "Dodatek" },
  ],
  whenLeft: [
    "Dokument jest ukończony i nie powinien być edytowany",
    "Potrzebujesz, aby wyglądał identycznie na każdym urządzeniu",
    "Odbiorca może nie mieć Microsoft Word",
    "Dokument będzie archiwizowany przez wiele lat",
    "Potrzebujesz formatu gotowego do druku i podpisu",
  ],
  whenRight: [
    "Dokument jest wciąż w fazie tworzenia",
    "Kilka osób recenzuje go lub współtworzy",
    "Śledzenie zmian i komentarze są ważne",
    "Musisz ponownie wykorzystać lub zmienić styl treści",
    "Dokument stanie się szablonem",
  ],
  faq: [
    {
      q: "Czy mogę konwertować między PDF a DOCX?",
      a: "Tak. Dobre narzędzia PDF konwertują w obie strony z wysoką wiernością w przypadku dokumentów zawierających tekst.",
    },
    {
      q: "Który format jest bezpieczniejszy?",
      a: "Oba obsługują szyfrowanie AES-256. To nie sam format decyduje o bezpieczeństwie, tylko hasło i sposób, w jaki je udostępniasz.",
    },
    {
      q: "Czy moje czcionki przetrwają konwersję?",
      a: "W większości przypadków tak. Jeśli dana czcionka nie jest dostępna na urządzeniu docelowym, zastępowana jest podobną. Trzymaj się popularnych czcionek (Calibri, Inter, Helvetica), aby ograniczyć takie zastępowanie.",
    },
  ],
  related: [
    { label: "Przewodnik: PDF czy DOCX", path: "/guides/pdf-vs-docx" },
    { label: "Konwerter PDF", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
};

export default content;
