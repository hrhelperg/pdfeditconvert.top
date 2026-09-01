import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-remove-unwanted-pages-from-pdf",
  h1: "PDF'ten İstenmeyen Sayfalar Nasıl Silinir?",
  description:
    "Boş sayfaları, kapak sayfalarını ya da gereksiz bölümleri tarayıcında PDF'ten çıkar, sadece istediğin sayfaları tut. Temiz dosyalar, gizliliği korunan bir işlem.",
  updated: "2026-05-23",
  intro: [
    "Birçok PDF, istemediğin sayfalarla gelir: bir faks kapak sayfası, tarayıcının eklediği boş bir sayfa, kimsenin istemediği bir şartlar ve koşullar eki ya da özensiz bir birleştirmeden kalan tekrarlanan sayfalar. Belgeyi bu karmaşa hâlâ eklenmişken göndermek özensiz görünür ve bazen paylaşmak istemeyeceğin bilgileri sızdırır.",
    "Tarayıcıda sayfaları kaldırmanın en temiz yolu, istediklerini tutmaktır. Bu rehber ücretsiz PDF Sayfalarını Çıkar aracını kullanıyor: istenmeyen sayfaları tek tek silmek yerine, tutulacak sayfaları listelersin ve geri kalan her şey basitçe yeni dosyanın dışında bırakılır. Tamamen cihazında çalışır — hiçbir şey yüklenmez.",
    "Sonuç, sadece ait olan sayfaları içeren derli toplu bir PDF'tir ve bir sayfa numarasını yanlış aldıysan diye orijinalin bozulmadan kalır.",
  ],
  steps: [
    {
      title: "Kaldırılacak sayfaları belirle",
      body: "PDF'i aç ve hangi sayfaların istenmediğini not et — boş 2. sayfa, kapak sayfası, sondaki tekrar. Sonra hangi sayfaları tutmak istediğini belirle.",
    },
    {
      title: "PDF Sayfalarını Çıkar aracını aç",
      body: "Tarayıcında PDF Sayfalarını Çıkar aracına git. Cihazında çalışır — yükleme ya da hesap yok.",
    },
    {
      title: "PDF'ini ekle",
      body: "Dosyayı bırakma alanına sürükle ya da seçmek için tıkla. Araç, hassas olabilmen için sayfa sayısını yükler.",
    },
    {
      title: "Tutmak istediğin sayfaları listele",
      body: "Tutulacak sayfaları ve aralıkları gir — örneğin 1, 3-7, 9. İstenmeyen sayfalar listelenmez, bu yüzden sonuçta görünmezler.",
    },
    {
      title: "Temizlenmiş PDF'i oluştur",
      body: "Çıkarmayı çalıştır. Araç, sadece tuttuğun sayfaları sırayla içeren yeni bir dosya oluşturur.",
    },
    {
      title: "Kontrol et ve kaydet",
      body: "Yeni PDF'i aç, istenmeyen sayfaların gittiğini ve onlarla birlikte önemli bir şeyin gitmediğini doğrula, sonra net bir adla kaydet.",
    },
  ],
  tips: [
    "Geri kalanını tutarak sayfaları kaldırmak, güvenilir tarayıcı yöntemidir — ne sileceğini değil, ne istediğini tanımlarsın, bu da sayma kaymalarını önler.",
    "Tarayıcılardan gelen boş sayfalara dikkat et. Bir belge besleyici genelde çift taraflı orijinaller arasına bir boş sayfa ekler; bunlar düşürmeyi unutmanın en kolay olduğu sayfalardır.",
    "Bir sayfayı kaldırmak aynı zamanda bir gizlilik adımıdır. Dahili notlar, paylaşmayı düşünmediğin fiyatlandırma ya da önceki bir alıcının bilgileri, göndermene gerek olmayan sayfalarda gizlenebilir.",
    "Sayfa numaralarını belgenin kendisine göre doğrula. Bir kapak sayfası sayımı kaydırabilir, böylece kafandaki \"5. sayfa\" dosyada 6. sayfa olabilir.",
    "Orijinali sakla. Kazara ihtiyacın olan bir sayfayı düşürürsen, yeniden yapmak için dokunulmamış kaynak hemen orada.",
  ],
  mobileNote:
    "Telefonundan bir belgeyi iletmeden önce başıboş bir sayfayı kırpmak, sayfaları doğrudan silen ve çevrimdışı çalışan PDF Editor uygulamasında birkaç dokunuştur — böylece kapak sayfası ya da boş sayfa gönderdiğin kopyaya hiç girmez.",
  faq: [
    {
      q: "Bir tarayıcı aracıyla sayfaları nasıl silerim?",
      a: "İstediğin sayfaları PDF Sayfalarını Çıkar aracıyla tut. Sadece tutulacak sayfaları listeleyerek, istenmeyenler yeni dosyanın dışında bırakılır — bir silme adımı olmadan sayfaları kaldırmanın temiz bir yolu.",
    },
    {
      q: "Orijinal dosyam değişecek mi?",
      a: "Hayır. Araç yeni bir PDF oluşturur ve kaynağa dokunmaz, bu yüzden bir hata yeniden başlayarak kolayca geri alınabilir.",
    },
    {
      q: "Dosya herhangi bir yere yükleniyor mu?",
      a: "Hayır. Her şey cihazındaki tarayıcında çalışır, bu da kaldırdığın sayfalar hassas bilgi içerdiğinde önem taşır.",
    },
    {
      q: "Ardışık olmayan sayfaları kaldırabilir miyim?",
      a: "Evet. Tekil sayfaların ve aralıkların bir karışımını tut, 1, 4, 8-10 gibi; listelemediğin her sayfa düşürülür.",
    },
    {
      q: "Bunun yerine doğrudan sayfaları silmek istersem?",
      a: "PDF Editor mobil uygulaması, belirli sayfalara dokunup silmene izin verir; bazı insanlar bunu istediğini-tut yaklaşımından daha sezgisel bulur.",
    },
  ],
  related: [
    { label: "PDF Sayfalarını Çıkar — sadece istediğini tut", path: "/extract-pdf-pages" },
    { label: "PDF Böl — bir dosyayı aralığa göre ayır", path: "/split-pdf" },
    { label: "PDF'ten sayfalar nasıl çıkarılır", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "PDF dosyaları nasıl düzenlenir", path: "/guides/how-to-organize-pdf-files" },
  ],
  parentHub: { label: "PDF Sayfalarını Çıkar", path: "/extract-pdf-pages" },
};

export default content;
