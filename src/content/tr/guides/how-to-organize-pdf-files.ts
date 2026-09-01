import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-pdf-files",
  h1: "PDF Dosyaları Nasıl Düzenlenir? Pratik Bir İş Akışı",
  description:
    "Dağınık PDF'lere düzen getir: ilgili dosyaları birleştir, sayfaları yeniden sırala, gereksizleri at ve doğru şekilde adlandır. Ücretsiz tarayıcı araçlarıyla tekrarlanabilir bir yöntem.",
  updated: "2026-05-23",
  intro: [
    "\"PDF'lerimi düzenle\" genelde iki şeyden birini ifade eder: tek, dağınık bir belgeyi düzene sokmak ya da ilgili dosyalarla dolu bir klasörü tutarlı bir şeye dönüştürmek. İkisi de aynı birkaç harekete iner — birbirine ait olanları birleştir, sayfaları doğru sıraya getir, ait olmayanı kaldır ve her şeyi sonradan bulabileceğin şekilde adlandır.",
    "Bu rehber, her biri cihazında çalışan ve hiçbir şey yüklemeyen ücretsiz tarayıcı araçlarından oluşan, tekrarlanabilir bir iş akışı sunuyor. Tek tek adımların hiçbiri karmaşık değil; değer, işi tekrarlamaman için bunları doğru sırada yapmakta.",
    "Bunu tek bir araçtan çok, herhangi bir belge yığınına — bir vergi klasörüne, bir projenin evrakına, bir tarama yığınına — uygulayabileceğin bir rutin olarak düşün; kaosu, gönül rahatlığıyla teslim edebileceğin bir şeye dönüştürür.",
  ],
  steps: [
    {
      title: "Elinde ne olduğunun envanterini çıkar",
      body: "Dosyaları ve her birinin ne içerdiğini listele. Herhangi bir şeye dokunmadan önce, bitmiş sonucun neye benzemesi gerektiğine karar ver — tek bir birleşik belge mi, yoksa birkaç temiz dosya mı.",
    },
    {
      title: "Birbirine ait dosyaları birleştir",
      body: "İstediğin sırayla ilgili belgeleri tek bir dosyada birleştirmek için PDF Birleştir aracını kullan. Bir sözleşme ve ekleri, bir rapor ve eki — her biri tek bir dosya.",
    },
    {
      title: "Sayfa sırasını düzelt",
      body: "Sırası bozuk olan her şeyde — ters taramalar, yanlış yerdeki bölümler — her belge doğru okununcaya kadar PDF Sayfalarını Yeniden Sırala aracını çalıştır.",
    },
    {
      title: "Karmaşayı kaldır",
      body: "PDF Sayfalarını Çıkar aracıyla sadece istediğin sayfaları tutarak boş sayfaları, kapak sayfalarını ve tekrarları at.",
    },
    {
      title: "Yan sayfaları düzelt",
      body: "Tüm belge dik okunsun diye, yatay ya da baş aşağı taranmış sayfalarda PDF Döndür aracını kullan.",
    },
    {
      title: "Tutarlı bir şekilde adlandır ve sakla",
      body: "Her dosyaya açıklayıcı, tarihli bir ad ver — \"Fatura-Acme-2026-05.pdf\" — ve mantıklı bir klasöre kaydet. Tutarlı adlar, bir koleksiyonu aylar sonra aranabilir yapan şeydir.",
    },
  ],
  tips: [
    "Sırayla yap: birleştir, yeniden sırala, kaldır, döndür, adlandır. Önce adlandırıp sonra birleştirmek tekrar adlandırmak demektir; kaldırmadan önce yeniden sıralamak, atacağın sayfalarda çaba israf eder.",
    "Tek bir adlandırma kuralı benimse ve ona sadık kal. \"Tür-Kim-Tarih\" (Fatura-Acme-2026-05), rastgele adlardan çok daha iyi sıralanır ve aranır.",
    "Düzenlenmiş sürümlerin iyi olduğu onaylanana kadar orijinalleri ayrı bir klasörde tut. Düzenleme, kaynağın üzerine yazmadıysan geri alınabilir.",
    "Dosyalar e-postaya ya da bir portala gidecekse en sona sıkıştır — yeniden yapılandıracağın bir belgeyi sıkıştırmanın anlamı yok.",
    "Tarayıcı belleği çok büyük işleri sınırlar. Yüzlerce sayfa ya da dosya için PDF Editor uygulaması ağır işi daha rahat halleder.",
  ],
  mobileNote:
    "Birçok belge karmaşası telefonda başlar — taramalar, ekran görüntüleri, e-postayla gelen ekler. PDF Editor uygulaması, çevrimdışı olarak tek bir yerde birleştirmene, yeniden sıralamana, kırpmana ve yeniden adlandırmana izin verir, böylece sonra bir yığınla karşılaşmak yerine geldikçe düzenli tutabilirsin.",
  faq: [
    {
      q: "Dağınık bir PDF'i düzenlemenin doğru sırası nedir?",
      a: "Önce ilgili dosyaları birleştir, sonra sayfaları yeniden sırala, sonra karmaşayı kaldır, sonra döndürmeyi düzelt ve son olarak adlandırıp sakla. Bu sırayla çalışmak, adımları tekrarlamayı önler.",
    },
    {
      q: "Bu araçlar gizli mi?",
      a: "Evet. Birleştirme, yeniden sıralama, çıkarma ve döndürme araçlarının hepsi cihazındaki tarayıcında çalışır — hiçbir şey yüklenmez; bu, kişisel ya da mali evraklar için önem taşır.",
    },
    {
      q: "PDF dosyalarını nasıl adlandırmalıyım?",
      a: "\"Tür-Kim-Tarih.pdf\" gibi, tarihli, tutarlı ve açıklayıcı bir kalıp kullan. Tutarlılık, bir klasörü sonradan aranabilir ve sıralanabilir yapan şeydir.",
    },
    {
      q: "Büyük bir grubu tek seferde düzenleyebilir miyim?",
      a: "Tarayıcı araçları günlük hacimleri iyi halleder, ama çok büyük gruplar belleği zorlayabilir. PDF Editor uygulaması daha büyük işler için tasarlanmıştır ve çevrimdışı çalışır.",
    },
    {
      q: "Düzenlerken sıkıştırmalı mıyım?",
      a: "Sadece belge sonlandırıldıktan ve e-posta ya da yükleme sınırlarına sığması gerektiğinde en son sıkıştır. Süreç ortasında sıkıştırmak, sonraki düzenlemelerle boşa çıkar.",
    },
  ],
  related: [
    { label: "Tüm ücretsiz PDF araçları", path: "/pdf-tools" },
    { label: "PDF Birleştir — dosyaları birleştir", path: "/merge-pdf" },
    { label: "PDF sayfaları nasıl yeniden sıralanır", path: "/guides/how-to-reorder-pdf-pages" },
    { label: "PDF'ten istenmeyen sayfalar nasıl silinir", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "Tüm ücretsiz PDF araçları", path: "/pdf-tools" },
};

export default content;
