import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-class-documents-as-pdf",
  h1: "Ders Belgeleri PDF Olarak Nasıl Düzenlenir? (İşaretle, Vurgula, İmzala)",
  description:
    "Ders föyleri, alıştırma kağıtları ve izin formları genelde PDF olarak gelir. Onları yazdırmadan işaretleme, doldurma ve geri gönderme yöntemi — hepsi telefonda ya da dizüstü bilgisayarda.",
  updated: "2026-05-29",
  intro: [
    "Ders belgeleri artık başka hiçbir formattan daha çok PDF olarak karşına çıkıyor. İşaretlenecek föyler, doldurulacak alıştırma kağıtları, imzalanıp geri gönderilecek izin formları, gözden geçirilecek müfredatlar. Cazip olan her şeyi yazdırmak, elle doldurmak ve geri taramaktır. Bu işe yarar ama yavaştır ve PDF'i doğrudan düzenlemekten daha kötü görünen bir çıktı üretir.",
    "Modern PDF düzenleme dört durumu da iyi ele alır: okuma için vurgulama ve not alma, alıştırma kağıtları ve formlar için form doldurma, izin formları için imza ve bir sayfa eklemen gerektiğinde yapısal düzenlemeler. Çoğu, yazılım parası ödemeden bir tarayıcı sekmesinde ya da mobil uygulamada yapılabilir.",
    "Bu kılavuz her durumu anlatıyor — doğru araç ne, ne yapıp ne yapmıyor ve temiz, doldurulmuş bir kopyayı nasıl geri gönderirsin. Mümkünse hiçbir şey yazdırmak istemediğini varsayıyor.",
  ],
  steps: [
    {
      title: "Okuma ve not alma için: vurgula ve yorum yap",
      body: "Çoğu PDF okuyucusu (ve PDF Editor uygulaması) vurgulamayı, altını çizmeyi ve yapışkan not yorumlarını destekler. Bunları aktif okuma için kullan; notlar dosyayla birlikte kalır ve paylaşıma dayanır.",
    },
    {
      title: "Gerçek form alanları için: dokunup doldur",
      body: "Form olarak tasarlanmış PDF'lerin gerçek, etkileşimli alanları vardır. Her birine dokun, yaz, sonrakine geç. Çıktı, yazdırılıp elle doldurulmuş işle aynı görünür.",
    },
    {
      title: "Etkileşimsiz PDF'ler için (form alanı yok): metin kutusu ekle",
      body: "Gerçek alanı olmayan taranmış bir föy, boşlukların üzerine metin kutuları eklemeni gerektirir. PDF Editor uygulaması bunu destekler; sonuç, baskı üzerinde el yazısı cevaplardan daha düzenli görünür.",
    },
    {
      title: "İmzalar için: PDF İmzala",
      body: "PDF İmzala, formun üzerine doğrudan bir imza çizmene ya da yazmana izin verir. İzin formları ve rıza kağıtları için çizilmiş bir imza doğru seçimdir.",
    },
    {
      title: "Sayfa eklemek için: birleştir",
      body: "Cevabın föyün boşluklarının izin verdiğinden uzunsa PDF Birleştir ek sayfalar eklemene izin verir. Bunları doğru sırada tut; orijinal sayfalar bozulmadan kalır.",
    },
    {
      title: "Orijinalin üzerine değil, yeni bir dosya olarak kaydet",
      body: "Doldurulmuş sürümü yeni bir adla kaydet (Fiy3_Tamamlandi_Soyadin.pdf). Boş orijinal, yeniden yapman ya da bir çalışma arkadaşınla paylaşman gerekirse temiz kalır.",
    },
  ],
  tips: [
    "Önce PDF'in gerçek form alanları olup olmadığını test et. Boş bir satıra dokununca bir yazma imleci açılıyorsa gerçek bir formdur. Hiçbir şey olmuyorsa metin kutusu eklemen gerekir.",
    "Doldurulan cevaplar için tutarlı bir metin boyutu kullan — anlayabiliyorsan belgenin gövde boyutuna uy.",
    "Kesinlikle gerekmedikçe doldurmak için yazdırma. Geri taranan sürüm her zaman dijital doldurmadan daha az okunabilirdir.",
    "İmzalamadan önce kaydet. Bir imza genelde dosyanın bazı kısımlarını kilitler; imza öncesi sürüm düzenlenebilir kopyadır.",
    "Doldurulmuş formları imzaladıktan sonra PDF olarak dışa aktararak doğrula — bazı araçlar doldurulabilir durumu ayrı saklar ve dışa aktarılan PDF cevaplarını kilitler.",
  ],
  mobileNote:
    "Birçok ders belgesi telefona gelir ve aynı şekilde geri gitmesi gerekir. PDF Editor uygulaması iOS ve Android'de not alma, form doldurma, imza ve birleştirmeyi halleder; böylece bir föyün tamamlanmış olarak geri dönmesi dizüstü bilgisayar vaktini beklemez.",
  faq: [
    {
      q: "Bir PDF'i tarayıcıda düzenleyebilir miyim?",
      a: "Sınırlı durumlarda evet — form doldurma ve not alma birçok tarayıcıda çalışır. Metin düzenlemeleri ve yapısal değişiklikler için gerçek bir düzenleyici (tarayıcı tabanlı ya da uygulama) daha fazlasını yapar.",
    },
    {
      q: "Föyümde neden gerçek form alanları yok?",
      a: "Ya hoca bunları etkinleştirmeden dışa aktardı ya da dosya bir tarama. Boş satırların üzerine metin kutusu ekle.",
    },
    {
      q: "İmzalı PDF'ler ders formları için kabul ediliyor mu?",
      a: "Giderek daha çok evet. Bazı hukuki formlar (bazı bölgelerde özellikle imzalı izinler) hâlâ mürekkep imza isteyebilir — formun talimatlarını kontrol et.",
    },
    {
      q: "Her zaman yeni bir dosya olarak mı kaydetmeliyim?",
      a: "Ders işleri için evet. Boş orijinali korumak yeniden indirmeden tekrar denemene ya da paylaşmana izin verir.",
    },
    {
      q: "Doldurduğum bir PDF'e nasıl sayfa eklerim?",
      a: "Ek içeriğini ayrı bir PDF olarak yaz, sonra PDF Birleştir ile birleştir. Eklenen sayfayı mantıksal olarak ait olduğu yere yerleştir.",
    },
  ],
  related: [
    { label: "PDF Düzenleyici — mobilde metin ve görsel düzenle", path: "/pdf-editor" },
    { label: "PDF İmzala — elektronik imza ekle", path: "/sign-pdf" },
    { label: "Telefonda PDF formları nasıl doldurulur", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Mobilde PDF nasıl not alınıp işaretlenir", path: "/guides/how-to-annotate-pdf-on-mobile" },
  ],
  parentHub: { label: "PDF Düzenleyici — metin, görsel ve sayfa düzenle", path: "/pdf-editor" },
};

export default content;
