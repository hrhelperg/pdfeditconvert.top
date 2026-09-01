import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-android",
  h1: "Android'de PDF Nasıl Küçültülür?",
  description:
    "Kurulum gerektirmeyen bir tarayıcı aracıyla ya da PDF Editor uygulamasıyla herhangi bir Android telefonda PDF'i sıkıştır. Taramaları e-posta ve yükleme limitlerinin altına indir.",
  updated: "2026-05-23",
  intro: [
    "Android, telefona bağlı olarak PDF'leri farklı şekilde ele alır — Samsung, Pixel ve Xiaomi ilgili ayarları farklı yerlere gömer — ama ihtiyaç evrenseldir: taranmış ya da görsel ağırlıklı bir PDF, e-postayla göndermek ya da yüklemek için çok büyüktür ve onu küçültmek istersin. En güvenilir çözüm, telefonunun markasına hiç bağlı değildir.",
    "Bu rehber, herhangi bir Android cihazda tarayıcında çalışan ve dosyayı yerel olarak işleyen ücretsiz PDF Sıkıştır aracını kullanıyor — hiçbir şey yüklenmez. Ayrıca çevrimdışı kullanım ve tarayıcının dokunamadığı şifre korumalı dosyalar için PDF Editor uygulamasını da ele alıyor.",
    "Tarayıcı yolu her Android telefonda birebir aynı olduğu için, cihaz değiştirirsen ya da farklı bir markada birine yardım edersen hatırlaman gereken yöntem budur.",
  ],
  steps: [
    {
      title: "PDF'i bul",
      body: "Belgeyi Dosyalar uygulamanda, İndirilenler'de ya da nereye kaydedildiyse orada bul — bir tarama, kaydedilmiş bir ek, dönüştürülmüş bir fotoğraf grubu.",
    },
    {
      title: "PDF Sıkıştır aracını aç",
      body: "Chrome'da ya da tarayıcında PDF Sıkıştır aracına git. Her Android telefonda aynı şekilde çalışır ve dosyayı cihazında işler — yükleme yok, hesap yok.",
    },
    {
      title: "PDF'i ekle ve bir düzey seç",
      body: "Dosyayı seç ve bir düzey seç: çoğu durum için Önerilen, daha küçük ihtiyacın varsa Güçlü. Düşük en fazla ayrıntıyı korur.",
    },
    {
      title: "Sıkıştır ve gözden geçir",
      body: "Çalıştır ve öncesi-sonrası boyutu kontrol et. Görsel ağırlıklı ve taranmış PDF'ler genelde tek geçişte çarpıcı şekilde düşer.",
    },
    {
      title: "Sonucu kaydet ya da paylaş",
      body: "Daha küçük dosyayı cihazına kaydet ya da doğrudan e-postaya ya da bir sohbet uygulamasına paylaş. Kopyanın iyi okunduğunu onaylayana kadar orijinali sakla.",
    },
    {
      title: "Korumalı ya da büyük dosyalar için uygulamayı kullan",
      body: "Tarayıcı, şifre korumalı PDF'leri sıkıştıramaz ve çok büyük olanlarla zorlanabilir. PDF Editor uygulaması ikisini de çevrimdışı halleder.",
    },
  ],
  tips: [
    "Tarayıcı yöntemi Samsung, Pixel, Xiaomi ve diğerlerinde birebir aynı davranır, bu yüzden cihazlar arasında hatırlamaya değer olan budur.",
    "Bir PDF devasaysa, neredeyse kesinlikle taranmış ya da fotoğraflanmış sayfalar yüzündendir. En iyi sıkışan tam olarak bunlardır.",
    "Sıkıştırma sayfaları görselleştirir, bu yüzden daha küçük kopya seçilebilir metnini kaybeder. Ondan arama yapman ya da kopyalaman gerekiyorsa orijinali sakla.",
    "Bazı Android kameraları yüksek verimlilik modunda HEIF kaydeder; standart JPG taramaları daha kolay sıkıştırılır ve geniş çapta paylaşılır.",
    "Keskin orijinalin cihazda kalması için sıkıştırılmış PDF'i yeni bir adla kaydet.",
  ],
  mobileNote:
    "Telefonda sıkıştırma, Android kullanıcılarının gerçekte istediği şeydir ve PDF Editor uygulaması bunu çevrimdışı ve yükleme olmadan yapar, şifre korumalı dosyaları destekler ve doğrudan uygulamalarına paylaşır. Sık küçülttüğün belgeler için, her seferinde tarayıcıyı yeniden açmaktan daha iyidir.",
  faq: [
    {
      q: "Tarayıcı yöntemi her Android telefonda çalışır mı?",
      a: "Evet. PDF Sıkıştır aracı tarayıcıda çalıştığı için Samsung, Pixel, Xiaomi ve diğer herhangi bir Android cihazda aynı şekilde davranır — markaya göre değişen yerleşik özelliklerin aksine.",
    },
    {
      q: "Android'de hiçbir şey kurmadan bir PDF'i sıkıştırabilir miyim?",
      a: "Evet. PDF Sıkıştır aracı tarayıcında çalışır ve dosyayı cihazında işler, bu yüzden kurulum gerekmez.",
    },
    {
      q: "Dosyam yükleniyor mu?",
      a: "Hayır. Sıkıştırma telefonunda yerel olarak gerçekleşir; hiçbir şey bir sunucuya gönderilmez; bu, kişisel belgeler için önem taşır.",
    },
    {
      q: "Metin seçilebilir kalır mı?",
      a: "Hayır. Sıkıştırma sırasında sayfalar görsel olarak yeniden işlenir ve seçilebilir metin katmanı kaldırılır. İhtiyacın varsa orijinali sakla.",
    },
    {
      q: "Android'de şifre korumalı bir PDF'i nasıl sıkıştırırım?",
      a: "Tarayıcı korumalı dosyaları işleyemez. Bunları çevrimdışı açan ve sıkıştıran PDF Editor uygulamasını kullan.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — tarayıcında küçült", path: "/compress-pdf" },
    { label: "iPhone'da PDF nasıl küçültülür", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "E-posta için PDF dosya boyutu nasıl küçültülür", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Android'de PDF nasıl düzenlenir", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "PDF Sıkıştır", path: "/compress-pdf" },
};

export default content;
