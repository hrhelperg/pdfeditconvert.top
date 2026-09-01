import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-android",
  h1: "Jak przekonwertować zdjęcia do PDF na Androidzie",
  description:
    "Zamień zdjęcia z Androida w jeden plik PDF za pomocą narzędzia w przeglądarce lub wbudowanej funkcji drukowania do PDF. Plus szybszy sposób pracy w aplikacji ze skanowaniem.",
  updated: "2026-05-23",
  intro: [
    "Android daje więcej niż jeden sposób na zamianę zdjęć w PDF, co jest zarówno błogosławieństwem, jak i źródłem zamieszania — kroki różnią się między Samsungiem, Pixelem, Xiaomi i resztą. Dobra wiadomość jest taka, że jest droga, która działa tak samo na każdym telefonie z Androidem: narzędzie w przeglądarce, które działa na Twoim urządzeniu i nie obchodzi go, kto jest producentem.",
    "Ten poradnik pokazuje tę uniwersalną drogę przez przeglądarkę z darmowym narzędziem Obraz do PDF, wbudowany trik „Drukuj do PDF” ukryty w menu udostępniania oraz aplikację PDF Editor, gdy chcesz mieć zdjęcia, skanowanie i podpisywanie w jednym miejscu.",
    "Zdjęcia na Androidzie są zwykle zapisywane jako JPG, więc zazwyczaj unikasz problemów z formatem, na jakie trafiają użytkownicy iPhone'a — ale wskażemy jeden wyjątek, o którym warto wiedzieć.",
  ],
  steps: [
    {
      title: "Otwórz narzędzie Obraz do PDF w przeglądarce",
      body: "Przejdź do narzędzia Obraz do PDF w Chrome albo wybranej przeglądarce. Działa na dowolnym telefonie z Androidem, niezależnie od marki, i przetwarza obrazy na Twoim urządzeniu — nic nie jest przesyłane.",
    },
    {
      title: "Dodaj swoje zdjęcia",
      body: "Dotknij, żeby wybrać zdjęcia z galerii albo plików. Działają zarówno JPG, jak i PNG; każdy obraz staje się jedną stroną.",
    },
    {
      title: "Ustaw kolejność stron",
      body: "Użyj strzałek, żeby ułożyć zdjęcia. Przy wielostronicowym dokumencie sprawdź dwa razy kolejność przed utworzeniem pliku.",
    },
    {
      title: "Utwórz i zapisz PDF",
      body: "Dotknij Utwórz PDF. Plik pobiera się na telefon; zapisz go w Plikach albo na wybranym dysku w chmurze, albo od razu udostępnij.",
    },
    {
      title: "Alternatywa: użyj Drukuj do PDF",
      body: "Otwórz zdjęcia w Google Photos albo swojej galerii, dotknij Udostępnij → Drukuj, a potem wybierz „Zapisz jako PDF” jako drukarkę. To zbiera wybrane obrazy w PDF bez żadnego narzędzia, choć masz mniejszą kontrolę nad kolejnością.",
    },
    {
      title: "Albo użyj aplikacji PDF Editor",
      body: "Aplikacja łączy zdjęcia z galerii w PDF, skanuje nowe strony z automatycznym wykrywaniem krawędzi i pozwala podpisywać — wszystko offline, wszystko na urządzeniu.",
    },
  ],
  tips: [
    "Droga przez przeglądarkę działa identycznie na Samsungu, Pixelu, Xiaomi i innych, więc warto ją zapamiętać, jeśli zmienisz telefon albo pomagasz komuś z innej marki.",
    "Trik Drukuj do PDF jest świetny w nagłych sytuacjach, ale daje mało kontroli nad kolejnością stron — użyj narzędzia Obraz do PDF, gdy kolejność ma znaczenie.",
    "Najpierw przytnij zdjęcia w galerii. Strony są dopasowane do rozmiaru obrazu, więc przycięcie daje czystszy dokument.",
    "Większość aparatów na Androidzie zapisuje JPG, ale niektóre zapisują HEIF/HEIC w trybie wysokiej wydajności. Jeśli zdjęcie się nie wczytuje, sprawdź ustawienia aparatu albo użyj aplikacji PDF Editor.",
    "Duże galerie zdjęć w wysokiej rozdzielczości dają wielkie pliki PDF. Skompresuj wynik, zanim wyślesz go mailem.",
  ],
  mobileNote:
    "Praca z dokumentami na Androidzie odbywa się na telefonie, a aplikacja PDF Editor trzyma ją właśnie tam: łączy zdjęcia z galerii, skanuje papier z wykrywaniem krawędzi, podpisuje i udostępnia — offline i bez przesyłania niczego. Przy powtarzalnych zadaniach jest za każdym razem szybsza niż przeglądarka.",
  faq: [
    {
      q: "Czy metoda przez przeglądarkę działa na każdym telefonie z Androidem?",
      a: "Tak. Ponieważ narzędzie działa w przeglądarce, zachowuje się tak samo na Samsungu, Pixelu, Xiaomi i każdym innym urządzeniu z Androidem — w przeciwieństwie do wbudowanych funkcji, które różnią się między producentami.",
    },
    {
      q: "Jaka jest różnica między Drukuj do PDF a narzędziem?",
      a: "Drukuj do PDF jest wbudowane w menu udostępniania Androida i nie wymaga żadnego narzędzia, ale daje mało kontroli nad kolejnością stron. Narzędzie Obraz do PDF pozwala precyzyjnie ustawić kolejność stron, co ma znaczenie przy wielostronicowych dokumentach.",
    },
    {
      q: "Czy moje zdjęcia są gdziekolwiek przesyłane?",
      a: "Nie. Zarówno narzędzie Obraz do PDF, jak i aplikacja PDF Editor przetwarzają zdjęcia na Twoim urządzeniu. Twoje obrazy pozostają prywatne.",
    },
    {
      q: "Moje zdjęcia nie wczytują się w narzędziu — dlaczego?",
      a: "Niektóre telefony z Androidem zapisują HEIF/HEIC w trybie wysokiej wydajności, którego narzędzia przeglądarkowe mogą nie odczytać. Przełącz aparat na standardowy JPG albo użyj aplikacji PDF Editor.",
    },
    {
      q: "Czy mogę zrobić PDF przeszukiwalnym?",
      a: "Zwykłe zdjęcie nie ma warstwy tekstowej. Żeby uzyskać przeszukiwalny tekst, zeskanuj dokument, korzystając z rozpoznawania tekstu w aplikacji PDF Editor, zamiast go po prostu fotografować.",
    },
  ],
  related: [
    {
      label: "Obraz do PDF — konwertuj zdjęcia w przeglądarce",
      path: "/image-to-pdf",
    },
    {
      label: "Skanuj do PDF — uchwyć papier aparatem",
      path: "/scan-to-pdf",
    },
    {
      label: "Jak przekonwertować zdjęcia do PDF na iPhonie",
      path: "/guides/how-to-convert-photos-to-pdf-on-iphone",
    },
    {
      label: "Jak przekonwertować JPG do PDF",
      path: "/guides/how-to-convert-jpg-to-pdf",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
