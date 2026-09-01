import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-work-documents-as-pdf",
  h1: "İş Belgeleri PDF Olarak Nasıl Düzenlenir? (Klasör, İsim, Sürüm)",
  description:
    "İş PDF'leri için pratik bir adlandırma ve klasörleme kuralı — teklifler, brifingler, teslimler, arşivler — sürüm karmaşasını önler ve herkesin her şeyi hızlıca bulmasını sağlar.",
  updated: "2026-05-29",
  intro: [
    "İş PDF'leriyle ilgili sorun genelde PDF'lerin kendisi değildir. İzdir: bir indirilenler klasöründe benzer isimli otuz dosya, hizalanmayan sürümler, final olmayan finaller, teslim edilebilirlerle aynı görünen taslaklar. Format sorunsuzdur; formatın etrafındaki kural dağılan şeydir.",
    "İşe yarayan bir kural kısadır — bir klasör yapısı, bir adlandırma deseni ve finallerin nereye gideceğine dair bir alışkanlık. Bir kere yerine oturduğunda, “Mart'ta gönderdiğimiz sözleşmeyi” bulmak on dakika değil on saniye sürer ve sürüm çakışmaları çoğunlukla durur.",
    "Bu rehber, küçük ekiplerin benimseyip sürdürdüğünü gördüğümüz kuralı anlatıyor. İşe yarayan tek kural değil; yoğun bir çeyreği dağılmadan atlatacak kadar sağlam olan bir kural.",
  ],
  steps: [
    {
      title: "Bir kere üst düzey klasör yerleşimi seç",
      body: "Musteriler/SozlesmeAdi/, Dahili/, Sablonlar/, Arsiv/. Dört klasör çoğunu kapsar. Başta iki seviyeden fazla iç içe geçirme — derinlik seni kaybettirir.",
    },
    {
      title: "Dosya adı desenini standartlaştır",
      body: "MusteriAdi_BelgeTuru_vN_YYYY-AA-GG.pdf herhangi bir dosya tarayıcısında temiz okunur. Dosyaların kronolojik sıralanması için tarih en sonda; en güncelini bir bakışta görebilmen için sürüm satır içinde.",
    },
    {
      title: "Her proje içinde /taslaklar ve /final ayır",
      body: "Taslaklar projenin /taslaklar alt klasörüne gider; finaller FINAL olarak yeniden adlandırılıp /final ya da /teslimler'e taşınır. /final klasörü sadece gönderilmiş sürümleri içermelidir.",
    },
    {
      title: "Devir teslimde birleştirmek için PDF Birleştir kullan",
      body: "Bir teslim edilebilir aslında üç PDF'se (teklif + koşullar + fiyatlandırma), teslim için onları tek dosyada birleştir ve kaynak dosyaları proje klasöründe tut. Alıcı tek bir temiz dosya alır.",
    },
    {
      title: "Sadece teslimde sıkıştır ve yeniden adlandır",
      body: "Giden kopya için PDF Sıkıştır kullan; sıkıştırılmamış kaynağı tut. Teslim edilen dosya /final/'e gider, kaynak /taslaklar/'da kalır. Bunlar farklı eserlerdir.",
    },
    {
      title: "Tamamlanan projeleri bir programda arşivle",
      body: "Kapanan projeleri üç ayda bir /Arsiv/'e taşı. Aktif klasörler taranabilir kalır; arşiv, sonradan bir şey bulman gerektiğinde aranabilirdir.",
    },
  ],
  tips: [
    "Mümkünse dosya adlarında boşluktan kaçın — alt çizgi ya da tire, URL'lerde, e-posta iletmelerinde ve kabuk komutlarında daha kolaydır.",
    "YYYY-AA-GG tarih formatı herhangi bir araçta kronolojik sıralanır. 29.5.26 sıralanmaz.",
    "FINAL dosya adına sürüm numarası koyma. FINAL, FINAL'dir. Sonradan bir şey değişirse, FINAL-2'dir — ve bu, sürecin bozulduğunun bir işaretidir.",
    "Yeniden adlandırmaktan çekinme. Net bir dosya adı, özellikle göndermeden önce, bir dakikalık işe değer.",
    "Büyük projelerde her alt klasörde ne olduğunu listeleyen tek satırlık bir dizin dosyası (README.txt) tut. Altı ay sonra geri dönen gelecekteki sana yardımcı olur.",
  ],
  mobileNote:
    "Telefonda, dosya adı düzenleme zahmetli olduğu için düzen zorlaşır. PDF Editor uygulaması, PDF'leri mobilden yeniden adlandırmana, etiketlemene ve dosyalamana izin verir, böylece telefona gelen dosyalar İndirilenler klasöründe adsız yığılmaz.",
  faq: [
    {
      q: "En iyi dosya adı formatı nedir?",
      a: "MusteriAdi_BelgeTuru_vN_YYYY-AA-GG.pdf. Tarih en sonda kronolojik sıralar; sürüm satır içinde taslakları ayırt eder; müşteri ve belge türü dosyayı kendi kendini açıklar hale getirir.",
    },
    {
      q: "Klasör mü kullanmalıyım, etiket mi?",
      a: "Klasörler. Etiket sistemleri var ama cihazlar ve uygulamalar arasında parçalanır. Klasörler evrenseldir.",
    },
    {
      q: "Eski taslaklarla ne yapmalıyım?",
      a: "Proje kapanana kadar onları proje klasörünün /taslaklar/'ında tut, sonra her şeyi arşivle. Silme — önceki bir taslaktan bir sayı geri getirmen gerekebilir.",
    },
    {
      q: "FINAL dosyanın bir sürüm numarasına ihtiyacı var mı?",
      a: "Hayır. Bir dosya FINAL olduğunda, kanonik sürüm odur. Sonradan bir şey değişirse, kendi FINAL'ini alan yeni bir konuşmadasındır.",
    },
    {
      q: "Tutarsız adlandırma ile gelen müşteri dosyalarını nasıl ele alırım?",
      a: "Alındığında kendi kuralına uyacak şekilde yeniden adlandır. Yeniden adlandırmaya harcanan dakika, sonradan aramada kaybedeceğin zamandan kazandırır.",
    },
  ],
  related: [
    { label: "Ücretsiz PDF Araçları", path: "/pdf-tools" },
    { label: "PDF Birleştir — devir teslimde teslimleri birleştir", path: "/merge-pdf" },
    { label: "PDF Dosyaları Nasıl Düzenlenir? Pratik Bir İş Akışı", path: "/guides/how-to-organize-pdf-files" },
    { label: "Küçük İşletmeler İçin PDF İş Akışları (Teklif, Sözleşme, Kayıt)", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Ücretsiz PDF Araçları", path: "/pdf-tools" },
};

export default content;
