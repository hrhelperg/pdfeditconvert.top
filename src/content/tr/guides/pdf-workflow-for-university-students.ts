import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflow-for-university-students",
  h1: "Üniversite Öğrencileri İçin PDF İş Akışı (Notlar, Ödevler, Teslimler)",
  description:
    "Final haftasını atlatan dönem boyu bir PDF ritmi: taranan ders notları, teslim edilen ödevler, paylaşılan çalışma paketleri. Tarayıcı tabanlı ve ücretsiz.",
  updated: "2026-05-29",
  intro: [
    "Üniversite dönemleri yüzlerce PDF üretir. Ders slaytları, taranmış el yazısı notlar, problem setleri, tamamlanmış ödevler, ek okumalar, sınav çalışma paketleri. Çoğu öğrenci bunları bir indirilenler klasörüne yığıp karıştırarak yönetir. Bu üçüncü haftada işe yarar; onuncu haftada dağılır; final zamanında onlara hiç sahip olmamaktan daha kötü hâle gelir.",
    "Dönem boyu bir PDF ritmi kısadır ve sürdürmesi kolaydır. Ders başına haftalık not paketleri, tutarlı adlandırılmış ödev teslimleri, sınavlardan önce derlenen çalışma paketleri, dönem sonunda arşivler. Hiçbiri pahalı araçlar ya da zaten sahip olmadığın uygulamalar gerektirmez ve çoğu telefondan yapılabilir.",
    "Bu kılavuz ritmi anlatıyor — her hafta ne yapman gerektiği, ödev başına ne yapman gerektiği, vize ve finalde ne yapman gerektiği. Amacın kusursuz bir kişisel bilgi sistemi kurmak değil, herhangi bir belgeyi beş saniyede bulmak olduğunu varsayıyor.",
  ],
  steps: [
    {
      title: "Haftalık: ders materyalini yakala ve birleştir",
      body: "Ders başına her hafta sonunda: yazılı notları, slayt PDF'lerini, tahta fotoğraflarını ve taranmış el yazısı sayfaları topla. PDF Birleştir bunları /Dersler/[Ders]/dersler/ altında Hafta3_Paket_YYYY-AA-GG.pdf olarak toplar.",
    },
    {
      title: "Ödev başına: üret, adlandır, teslim et, arşivle",
      body: "Yazılı iş için Word'den PDF'e, el yazısı sayfalar için PDF Tarama, birleştirmek için PDF Birleştir, portal sınırlıysa PDF Sıkıştır. Teslim et, /Dersler/[Ders]/odevler/teslim-edilen/ altında bir kopya tut.",
    },
    {
      title: "Dönem ortası: temizlik yap",
      body: "Yaklaşık 7. haftada ders klasörlerini gözden geçir. Kopyaları at, yanlış adlandırılmış dosyaları düzelt, tamamlananları arşivle. Dönem ortasındaki yirmi dakika finalde saatler kazandırır.",
    },
    {
      title: "Sınav öncesi: bir çalışma paketi oluştur",
      body: "İlgili haftalık paketleri tek bir Ders_Final_CalismaPaketi.pdf dosyasında birleştir. Konularla bir kapak ekle. Gözden geçirme sırasında tablet ya da telefonda taşınabilir kullanım için sıkıştır.",
    },
    {
      title: "Çalışma paketini tablette ya da telefonda işaretle",
      body: "Tablette PDF not alma bazı öğrenciler için kağıttan daha iyi çalışır. Vurgula, yorum yap ve altını çiz; işaretler sonraki tekrar için kalıcı kalır.",
    },
    {
      title: "Dönem sonu: dersi arşivle",
      body: "/Dersler/[Ders]/ klasörünü /Arsiv/[Yil]/[Ders]/ altına taşı. Arşivdeki her şeyi sıkıştır. Aktif klasör bir sonraki dönem için temiz kalır.",
    },
  ],
  tips: [
    "Dersler ya da haftalar arasında birleştirme yapma. En küçük kullanışlı birim, ders başına hafta başına bir PDF'tir.",
    "Her sınıfın istediği tam adlandırma kuralıyla teslim et. “Soyad_Ad_Odev3.pdf” standarttır; tam olarak uy.",
    "Çalışma paketlerini dijital olarak işaretle. Aranabilir, işaretlenmiş PDF'ler gözden geçirmede kağıdı geçer — belirli konuları hızlıca bulursun.",
    "Sadece teslim ve arşivde sıkıştır. Aktif kullanımda okunabilirlik için optimize et.",
    "Dersler klasörünü bir bulut sürücüsüyle senkronize et. Final sırasında telefon-dizüstü bilgisayar erişimi disk alanından daha değerlidir.",
  ],
  mobileNote:
    "Bir öğrencinin PDF gününün çoğu telefonda geçer — el yazısı bir sayfayı tara, bir slaydı fotoğrafla, bir ödev teslim et. PDF Editor uygulaması tüm zinciri (tarama, birleştirme, sıkıştırma, imzalama, paylaşma) iOS ve Android'de çevrimdışı halleder; böylece iş akışı dizüstü bilgisayar erişimine bağlı kalmaz.",
  faq: [
    {
      q: "Bu ritim ne kadar zaman alır?",
      a: "Haftalık paket için ders başına haftada on dakika. Ödev başına iki dakika. Dönem ortasında yirmi dakika. Final zamanındaki birikimli tasarruf saatler mertebesindedir.",
    },
    {
      q: "Çok sayıda dersim varsa ne olur?",
      a: "Ritim ölçeklenir — aynı kural her derse uygulanır. İki paralel ders süreyi ikiye katlar; yapı aynı kalır.",
    },
    {
      q: "Kağıt hâlâ saklamaya değer mi?",
      a: "Orijinal el yazısı notlar, yedek olarak evet. Taranıp haftalık pakete girdikten sonra kağıt sadece referanstır.",
    },
    {
      q: "Aramak için taramalara OCR uygulamalı mıyım?",
      a: "Aracın destekliyorsa evet. Sınav zamanında aranabilir çalışma materyali, aranamayandan çok daha değerlidir.",
    },
    {
      q: "Peki atıfta bulunulan okumalar?",
      a: "Ders başına ayrı bir /okumalar/ klasörü. Okumaları ders paketleriyle birleştirme; ayrı büyürler ve farklı bir amaca hizmet ederler.",
    },
  ],
  related: [
    { label: "Öğrenciler için PDF — notlar ve çalışma kılavuzları", path: "/pdf-for-students" },
    { label: "Öğrenciler için en iyi ücretsiz PDF araçları", path: "/guides/best-pdf-tools-for-students" },
    { label: "Ders materyalleri PDF olarak nasıl düzenlenir", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Ödev PDF olarak nasıl teslim edilir", path: "/guides/how-to-submit-homework-as-pdf" },
  ],
  parentHub: { label: "Öğrenciler için PDF — notlar, vurgulamalar, çalışma kılavuzları", path: "/pdf-for-students" },
};

export default content;
