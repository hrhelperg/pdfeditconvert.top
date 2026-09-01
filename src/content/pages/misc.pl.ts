import type {
  ContactContent,
  GuidesIndexContent,
  LegalContent,
  ToolsIndexContent,
} from "@/types/content";
import { PRIVACY_UPDATED } from "@/content/legal/privacy";
import { TERMS_UPDATED } from "@/content/legal/terms";

export const TOOLS_INDEX_PL: ToolsIndexContent = {
  crumbLabel: "Darmowe narzędzia PDF",
  heroEyebrow: "Darmowe narzędzia PDF",
  heroH1: "Narzędzia PDF w przeglądarce – Twoje pliki nigdy nie opuszczają Twojego urządzenia.",
  heroHighlight: "nigdy nie opuszczają",
  heroLead:
    "Scalaj, dziel, obracaj, znakuj i konwertuj pliki PDF bez przesyłania czegokolwiek. Całe przetwarzanie odbywa się lokalnie, w Twojej przeglądarce, za darmo i bez rejestracji.",
  privacyNote:
    "Każde narzędzie na tej stronie przetwarza Twoje pliki lokalnie, w Twojej przeglądarce. Nic nie trafia na nasze serwery i nic nie jest przechowywane.",
  clusterHeading: "{count} poradników o pracy z PDF w przeglądarce",
  goingFurtherHeading: "Więcej możliwości pracy z PDF",
  goingFurtherBody:
    "Te narzędzia świetnie sprawdzają się do jednorazowych zadań w przeglądarce. Po sposoby pracy, które za nimi stoją – edycję, konwersję, podpisywanie, zabezpieczanie i skanowanie – zacznij od sekcji tematycznych poniżej.",
  hubs: [
    { id: "pdf-editor", label: "PDF Editor" },
    { id: "pdf-converter", label: "Konwerter PDF" },
    { id: "pdf-forms", label: "Formularze PDF" },
    { id: "sign-pdf", label: "Podpisz PDF" },
    { id: "pdf-security", label: "Bezpieczeństwo PDF" },
    { id: "scan-to-pdf", label: "Skanuj do PDF" },
    {
      id: "compare/pdf-app-vs-online-pdf-tools",
      label: "Aplikacja PDF czy narzędzia online",
    },
  ],
  appCtaHeading: "Potrzebujesz narzędzi PDF na telefonie?",
  appCtaSub: "Pobierz aplikację PDF Editor na iPhone i Android – za darmo.",
};

export const GUIDES_INDEX_PL: GuidesIndexContent = {
  h1: "Poradniki PDF",
  lead: "{count} praktycznych poradników zaprojektowanych z myślą o telefonie – o edycji, konwersji, kompresji, podpisywaniu i zabezpieczaniu plików PDF – pogrupowanych według narzędzia lub tematu.",
};

export const CONTACT_PL: ContactContent = {
  h1: "Skontaktuj się z nami",
  lead: "Pytania, współpraca, kontakt dla mediów lub opinie o aplikacji PDF Editor – czytamy każdą wiadomość.",
  emailLabel: "E-mail",
  officeLabel: "Siedziba",
  sections: [
    {
      heading: "Czego się spodziewać",
      body: "E-mail to nasz jedyny kanał kontaktu – nie ma systemu zgłoszeń ani chatbota. Odpowiedzi wysyła ten sam niewielki zespół, który tworzy aplikację, zwykle w ciągu dwóch dni roboczych. W sprawach dotyczących aplikacji podaj model urządzenia i wersję systemu; jeśli problem dotyczy konkretnego dokumentu, opisz sytuację zamiast załączać plik – nie chcemy ani nie potrzebujemy Twoich dokumentów.",
    },
    {
      heading: "Z czym nie możemy pomóc",
      body: "Narzędzia przeglądarkowe na tej stronie działają wyłącznie na Twoim urządzeniu, więc nic z tego, co przetwarzasz, nigdy do nas nie trafia. Oznacza to również, że nie możemy odzyskać przekonwertowanego pliku, ponownie wysłać pobrania ani niczego sprawdzić w Twoim imieniu – po naszej stronie nie ma żadnej kopii do wglądu. Jeśli narzędzie zawiodło przy konkretnym pliku PDF, napisz nam, jaki to był plik (zeskanowany, zabezpieczony hasłem, wypełniony formularz) i co zrobiło narzędzie.",
    },
    {
      heading: "Prywatność i sprawy prawne",
      body: "Pytania dotyczące ochrony danych, wnioski o usunięcie danych i pisma prawne trafiają na ten sam adres i docierają do hrhelperg s.r.o. pod podanym powyżej adresem siedziby.",
    },
  ],
  legalSentence:
    "Nasza {privacy} wyjaśnia, jakie dane zbieramy, a jakich nie, a {terms} określa zasady korzystania z witryny i narzędzi.",
  privacyLinkLabel: "polityka prywatności",
  termsLinkLabel: "regulamin",
  tryAppHeading: "Wypróbuj aplikację",
};

/**
 * Polish privacy policy.
 *
 * A translation, not a separate policy: the operator, the registered
 * office, the contact address, the analytics vendor and the legal basis are
 * the same facts the English version states, because the same company
 * processes the same data under the same law.
 *
 * The operator's name, registered address and email are reproduced exactly
 * as in the English source — "hrhelperg s.r.o.", "Husitská 502/36, Žižkov,
 * 130 00 Praha 3, Czech Republic" and "info@hrhelperg.com" are never
 * translated or reformatted.
 *
 * "RODO (GDPR)" replaces "GDPR" on first mention, per the terminology
 * policy: RODO (Rozporządzenie o Ochronie Danych Osobowych) is the
 * established Polish term readers already use for the same regulation,
 * which applies here because the controller is established in the EU.
 */
export const PRIVACY_PL: LegalContent = {
  h1: "Polityka prywatności",
  updated: PRIVACY_UPDATED,
  sections: [
    {
      heading: "Kto prowadzi ten serwis",
      body: [
        "Serwis pdfeditconvert.top jest prowadzony przez hrhelperg s.r.o., czeską spółkę z ograniczoną odpowiedzialnością z siedzibą pod adresem Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic. Możesz się z nami skontaktować pod adresem info@hrhelperg.com.",
      ],
    },
    {
      heading: "Co zbiera ta strona",
      body: [
        "Ta strona ma charakter informacyjny. Nie wymaga założenia konta, przesyłania dokumentów ani podawania danych osobowych, aby przeczytać którąkolwiek stronę.",
        "Korzystamy z przyjaznego dla prywatności narzędzia analitycznego (WebmasterID), aby sprawdzać, które strony są odwiedzane i jak czytelnicy nas znajdują. Zapisuje ono adres URL odwiedzanej strony, Twój przybliżony region i typ urządzenia oraz witrynę odsyłającą. Nie umieszcza plików cookie reklamowych i nie buduje Twojego profilu na innych stronach.",
      ],
    },
    {
      heading: "Co zbiera aplikacja mobilna",
      body: [
        "Aplikacja mobilna PDF Editor może przechowywać dane lokalnie na Twoim urządzeniu (otwierane pliki, Twoje ustawienia) i może synchronizować pliki z wybraną usługą chmurową (iCloud, Google Drive itd.), jeśli włączysz tę opcję. Pełną, oficjalną listę znajdziesz w informacjach o prywatności aplikacji w App Store i Google Play.",
      ],
    },
    {
      heading: "Pliki cookie",
      body: [
        "Używamy niewielkiej liczby plików cookie i podobnych technologii przechowywania danych do podstawowego działania strony oraz do analityki. Nie używamy plików cookie reklamowych.",
      ],
    },
    {
      heading: "Twoje prawa",
      body: [
        "Jeśli mieszkasz w UE lub EOG, przysługują Ci prawa wynikające z RODO (GDPR), w tym prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania i przenoszenia danych. Aby z nich skorzystać, napisz na adres info@hrhelperg.com.",
      ],
    },
    {
      heading: "Kontakt",
      body: [
        "Pytania dotyczące tej polityki możesz kierować na adres info@hrhelperg.com.",
      ],
    },
    {
      heading: "Zmiany",
      body: [
        "Możemy aktualizować tę politykę. Istotne zmiany zostaną zaznaczone na tej stronie wraz z nową datą aktualizacji.",
      ],
    },
  ],
};

/**
 * Polish terms of service — a translation of the same terms. The operator's
 * name and registered address stay in their English-source form, as in the
 * privacy policy above.
 */
export const TERMS_PL: LegalContent = {
  h1: "Regulamin",
  updated: TERMS_UPDATED,
  sections: [
    {
      heading: "O regulaminie",
      body: [
        "Niniejszy regulamin określa zasady korzystania z serwisu pdfeditconvert.top, prowadzonego przez hrhelperg s.r.o. (Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic).",
      ],
    },
    {
      heading: "Korzystanie z serwisu",
      body: [
        "Możesz czytać strony tego serwisu, linkować do nich i je udostępniać. Nie możesz pobierać masowo dużych fragmentów treści w celu ich ponownej publikacji ani korzystać z serwisu w sposób zakłócający działanie dla innych użytkowników.",
      ],
    },
    {
      heading: "O aplikacji mobilnej PDF Editor",
      body: [
        "PDF Editor to osobna aplikacja mobilna dystrybuowana przez Apple App Store i Google Play. Korzystanie z aplikacji podlega jej własnemu regulaminowi, przedstawianemu podczas instalacji.",
      ],
    },
    {
      heading: "Brak gwarancji",
      body: [
        "Treści na pdfeditconvert.top mają ogólny charakter informacyjny i nie stanowią porady prawnej, podatkowej ani finansowej. Podejmujemy rozsądne starania, aby były dokładne, ale nie gwarantujemy ich kompletności ani przydatności do konkretnego celu.",
      ],
    },
    {
      heading: "Odpowiedzialność",
      body: [
        "W maksymalnym zakresie dozwolonym przez prawo czeskie i prawo UE, hrhelperg s.r.o. nie ponosi odpowiedzialności za żadne szkody pośrednie lub wynikowe powstałe w związku z korzystaniem z tego serwisu.",
      ],
    },
    {
      heading: "Prawo właściwe",
      body: [
        "Niniejszy regulamin podlega prawu Republiki Czeskiej. Spory będą rozstrzygane przez właściwe sądy czeskie.",
      ],
    },
    {
      heading: "Kontakt",
      body: [
        "Pytania dotyczące niniejszego regulaminu możesz kierować na adres info@hrhelperg.com.",
      ],
    },
  ],
};
