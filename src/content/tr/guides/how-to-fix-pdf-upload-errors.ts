import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-upload-errors",
  h1: "PDF Yükleme Hataları Nasıl Çözülür? (Çok Büyük, Reddedildi, Takıldı)",
  description:
    "Portallar PDF'leri birkaç nedenle reddeder: dosya boyutu, sayfa sayısı, format katılığı ya da aksayan bir yükleme. Hangisinin seni etkilediğini belirleyip dosyayı bir sonraki denemede kabul ettirme yöntemi.",
  updated: "2026-05-29",
  intro: [
    "Yükleme portalları e-postadan daha katıdır. Çoğu 5 MB'ın üzerindeki her şeyi, bazıları 2 MB'ın üzerini reddeder, bazıları çok sayfalı dosyaları kabul etmez, diğerleri de tam uyumlu bir PDF/A olmayan her şeyde sessizce başarısız olur. Gösterdikleri hata mesajları nadiren spesifiktir — “dosya çok büyük”, “geçersiz format”, “yükleme başarısız” — ve çoğu söylediğinden farklı bir şey ifade eder.",
    "Gerçek nedenler genelde şu dördünden biridir: dosya portalın limitini aşıyor, dosyanın dahili formatı standart değil, bağlantın yükleme sırasında koptu ya da portal belirli bir PDF türü bekliyor (PDF/A, tek sayfa, düşük sürüm). Her birinin farklı bir çözümü var ve doğru çözüm hangisi olduğuna bağlı.",
    "Bu rehber, teşhisleri belirtiye göre ele alıyor ve her birini tarayıcında nasıl düzelteceğini gösteriyor. Gerçek nedeni ele aldığında başarısız yüklemelerin çoğu ikinci denemede başarılı olur.",
  ],
  steps: [
    {
      title: "Hata mesajını harfiyen oku",
      body: "“Dosya boyut limitini aşıyor” sıkıştırma demektir. “Geçersiz dosya” format demektir. “Yükleme başarısız” genelde ağ demektir. Kısa olsalar bile bu sözleri ilk kanıt parçası olarak ele al.",
    },
    {
      title: "Sorun boyutsa agresif şekilde sıkıştır",
      body: "Tarayıcındaki PDF Sıkıştır, dosyaları belirgin şekilde küçültür, özellikle tarama ağırlıklı olanları. Önce en güçlü sıkıştırmayı dene; kalite çok düşerse bir düzey geri çekil. Bazı portallar 2 MB ile sınırlıdır — çoğu sıkıştırıcı tipik bir belgeyi bunun oldukça altına indirir.",
    },
    {
      title: "Gerekirse büyük çok sayfalı bir PDF'i böl",
      body: "Portal birden fazla küçük dosyayı kabul ediyor ama tek büyük dosyayı reddediyorsa, PDF Böl ya da PDF Sayfalarını Çıkar dosyayı bölümlere ayırmanı sağlar. Alıcının onları yeniden birleştirebilmesi için parçaları dosya adında açıkça numaralandır.",
    },
    {
      title: "Format reddedildiyse standart PDF'e yeniden dışa aktar",
      body: "Bazı portallar sadece PDF 1.4 ya da PDF/A olarak kaydedilmiş dosyaları kabul eder. En basit çözüm dosyayı herhangi bir görüntüleyicide açıp yazdır-PDF'e uygulamaktır — ortaya çıkan kopya sade, standart ve genelde kabul edilir.",
    },
    {
      title: "Sayfa sayısını ve boyutları kontrol et",
      body: "Devlet ve eğitim portalları bazen sayfa sayısını ya da kağıt boyutunu sınırlar. Portal gereksinimleri listeliyorsa onlara uy: sadece Letter ya da A4, büyük boy sayfa yok, şeffaf arka plan yok. PDF Sayfalarını Çıkar, sınırı aşan her şeyi atar.",
    },
    {
      title: "Kararlı bir bağlantıda yeniden dene",
      body: "Yükleme sırasında Wi-Fi kopması bir reddedilmeyle aynı görünür. Dosyanın kendisinin sorun olduğunu varsaymadan önce ağ değiştir ya da farklı bir bağlantıda yeniden dene.",
    },
  ],
  tips: [
    "Bölmeden önce sıkıştır. Sıkıştırılmış tek bir dosya genelde limite sığar; hâlâ sığmıyorsa sıkıştırılmış kopyayı böl.",
    "Portallara yüklerken şifreleme ya da şifre korumasından kaçın — çoğu portal, altındaki içeriği kabul etse bile korumalı dosyaları engeller.",
    "Dosya adlarındaki gizli karakter limitlerine dikkat et. Bazı portallar boşluk, aksan ya da noktalama işareti içeren adları reddeder.",
    "Portal JPG kabul ediyor ama PDF'i reddediyorsa, PDF sayfalarını PDF'ten Görsele ile görsellere dönüştürüp onları yükleyebilirsin — kimlik gönderimi gibi sadece görsel kabul eden gereksinimler için kullanışlı.",
    "Başarılı bir yüklemenin gerçekten tamamlandığını her zaman doğrula (bazı portallar sessizce başarısız olur). Sadece hata olmadığını değil, alındı sayfasını yenileyip bir onay olduğunu kontrol et.",
  ],
  mobileNote:
    "Telefondan yüklemeler, bağlantı daha sık koptuğu için dizüstü bilgisayardan daha sık başarısız olur. PDF Editor uygulaması dosyaları çevrimdışı sıkıştırır ve böler, böylece yükleme adımının kendisi kısa olur — daha küçük bir dosya daha hızlı yüklenir ve düzensiz bir ağda hayatta kalır.",
  faq: [
    {
      q: "Çoğu portal hangi boyutla sınırlıyor?",
      a: "Yaygın üst sınırlar 2 MB, 5 MB ve 10 MB'dir. Devlet ve akademik portallar en katı olma eğilimindedir; ticari portallar daha esnektir. Baştan belirtilmemişse portalın yardım bölümünü kontrol et.",
    },
    {
      q: "Sıkıştırma her zaman bir boyut reddini çözer mi?",
      a: "Genelde evet, özellikle tarama ağırlıklı dosyalar için. 30 MB'lık bir tarama genelde temizce 5 MB'ın altına sıkıştırılır. Zaten küçük olan sadece metin içeren PDF'ler daha fazla sıkışmaz.",
    },
    {
      q: "Portal dosyamı neden “geçersiz” diye reddediyor?",
      a: "Ya dosya gerçekten bir PDF değildir (bazı indirmeler yanlış adlandırılmıştır), ya da portalın ayrıştırıcısının desteklemediği PDF özellikleri kullanır. Yazdır-PDF'e ile yeniden dışa aktarmak, neredeyse her zaman kabul edilen bir temel kopya üretir.",
    },
    {
      q: "Boyut limitini bir ZIP'e sarıp aşabilir miyim?",
      a: "Neredeyse hiç. PDF'leri sınırlayan portallar genelde toplam yükleme boyutunu da sınırlar ve ZIP'leri tamamen reddeder. Doğru yol PDF'in kendisini sıkıştırmaktır.",
    },
    {
      q: "Ya portal özellikle PDF/A istiyorsa?",
      a: "PDF/A arşivlik bir türdür. Microsoft Word ve Google Docs ona doğrudan dışa aktarabilir. Değilse, dosyayı aç, yazdır-PDF'e uygula ve dışa aktarma seçeneklerinde A-uyumlu bir ayara bak.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — portal limitlerine sığacak şekilde küçült", path: "/compress-pdf" },
    { label: "PDF Böl — büyük dosyaları kabul edilen parçalara ayır", path: "/split-pdf" },
    { label: "Yüklemeden Önce PDF Boyutu Nasıl Küçültülür?", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
    { label: "E-posta İçin PDF Dosya Boyutu Nasıl Küçültülür?", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "PDF Sıkıştır", path: "/compress-pdf" },
};

export default content;
