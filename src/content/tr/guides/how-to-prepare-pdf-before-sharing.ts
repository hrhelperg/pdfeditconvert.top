import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-before-sharing",
  h1: "Paylaşmadan Önce PDF Nasıl Hazırlanır? (Kontrol Listesi)",
  description:
    "PDF'ler için gönderim öncesi kontrol listesi: fazla sayfaları kırp, yönü düzelt, boyutu küçült ve taslakları etiketle. Temiz, doğru boyutlu, bilinçli bir belge gönder.",
  updated: "2026-05-23",
  intro: [
    "Gönder'e basmadan önceki dakika, bir PDF'teki bir sorunu yakalamanın en ucuz anıdır. Bir kez birinin gelen kutusuna girdiğinde, boş sayfa, yan tarama, 40 MB boyut ya da kaldırmayı unuttuğun dahili not artık onların da sorunudur — ve senin özür dileme sıran gelir. Kısa, bilinçli bir gönderim öncesi tur, bunların neredeyse hepsini önler.",
    "Bu rehber tam olarak o turdur: birkaç dakika süren ve her biri cihazında çalışan, hiçbir şey yüklemeyen ücretsiz tarayıcı araçlarını kullanan pratik bir kontrol listesi. Gerçekten başka insanlara giden belgeleri hedefliyor — teklifler, sözleşmeler, başvurular, raporlar.",
    "Bunların hiçbiri kendi başına cila içindir değildir. Bu, bir alıcının dosyanı açtığında tam olarak beklediğini bulması, gerçekten alabileceği bir boyutta olması ve ekstra hiçbir şeyin eklenmemesiyle ilgili.",
  ],
  steps: [
    {
      title: "Doğru, son sürüm olduğunu doğrula",
      body: "Dosyayı aç ve en son taslak olduğunu, tamamen düzenlendiğini kontrol et. Bir PDF, bir anlık görüntüdür — gönderdikten sonra bir yazım hatasını düzeltmek yeniden göndermek demektir.",
    },
    {
      title: "Gitmemesi gereken her şeyi kaldır",
      body: "PDF Sayfalarını Çıkar aracını kullanarak sadece ait olanı tutup boş sayfaları, kapak sayfalarını, dahili notları ve başkasına ait sayfaları at.",
    },
    {
      title: "Yönü ve sırayı düzelt",
      body: "Belgenin baştan sona temiz okunması için yan sayfalarda PDF Döndür aracını, sırası bozuk olan her şeyde PDF Sayfalarını Yeniden Sırala aracını kullan.",
    },
    {
      title: "Boyutu sınırın altına indir",
      body: "Dosya ağırsa — taramalar ve fotoğraflar bunu yapar — tipik 10-25 MB e-posta ve portal sınırlarına sığması için PDF Sıkıştır aracından geçir.",
    },
    {
      title: "Son hali değilse durumunu etiketle",
      body: "İnceleme için bir taslak paylaşıyorsan, kimsenin bunu imzalı sürümle karıştırmaması için PDF'e Filigran Ekle aracıyla bir TASLAK filigranı ekle.",
    },
    {
      title: "Net bir şekilde adlandır ve gönder",
      body: "Alıcının gelen kutusunda belli olması ve sonradan kolayca bulunması için açıklayıcı, tarihli bir dosya adı ver, sonra ekle ya da yükle.",
    },
  ],
  tips: [
    "En yaygın gönderim öncesi kaçırma, orada olmaması gereken bir sayfadır — bir boşluk, bir tekrar ya da başkasına ait detaylar içeren bir sayfa. Sayfa sayfa kontrol et.",
    "Kanala göre doğru boyutu ayarla: e-posta yaklaşık 25 MB'ta sınırlanır, birçok yükleme portalı çok daha düşük. Tarama ağırlıklı bir dosyayı sıkıştırmak genelde çözümdür.",
    "Bir TASLAK ya da GİZLİ filigranı beklentileri belirler ve çalışma sürümünün son hal olarak değerlendirilmesini önler — henüz imzalanmamış her şey için ucuz bir sigorta.",
    "Net bir dosya adı, belgeyi hazırlamanın bir parçasıdır. Alıcının gördüğü ilk şeydir ve sonradan arayacağın şeydir.",
    "Gerçekten hassas herhangi bir şey için bir şifreyi de düşün — hazırlık sadece derli topluluk değil, fazla paylaşmamaktır.",
  ],
  mobileNote:
    "Belgeleri doğrudan telefonundan göndermek, hızlı bir hazırlık turunun tam olarak işe yaradığı yerdir. PDF Editor uygulaması, belge gitmeden önce sayfaları kırpmana, döndürmene, sıkıştırmana, filigran eklemene ve yeniden adlandırmana tek bir yerde izin verir — çevrimdışı, hiçbir şey yüklenmeden.",
  faq: [
    {
      q: "Bir PDF göndermeden önce neyi kontrol etmeliyim?",
      a: "Son sürüm olduğunu, başıboş ya da hassas sayfalardan arınmış olduğunu, doğru yönde ve sırada olduğunu, kanal için yeterince küçük olduğunu, taslaksa etiketlendiğini ve net bir şekilde adlandırıldığını. İki dakikalık bir tur bunların hepsini kapsar.",
    },
    {
      q: "Yanlış sayfaları paylaşmadığımdan nasıl emin olurum?",
      a: "PDF Sayfalarını Çıkar aracını kullanarak sadece ait olan sayfaları tut ve sonucu sayfa sayfa gözden geçir. Dahili notlar ve diğer alıcıların bilgileri genelde göndermene gerek olmayan sayfalarda gizlenir.",
    },
    {
      q: "Dosya boyutu neden bu kadar önemli?",
      a: "E-posta servisleri yaklaşık 25 MB'ın üzerindeki ekleri reddeder ve birçok yükleme portalı çok daha düşük sınırlar koyar. Tarama ağırlıklı bir PDF bunları kolayca aşar, bu yüzden onu sıkıştırmak bir geri dönme ya da reddedilen bir yüklemeyi önler.",
    },
    {
      q: "Bu hazırlık araçları gizli mi?",
      a: "Evet. Çıkarma, döndürme, yeniden sıralama, sıkıştırma ve filigran araçlarının hepsi cihazındaki tarayıcında çalışır — hiçbir şey yüklenmez.",
    },
    {
      q: "Paylaşılan her PDF şifreyle korunmalı mı?",
      a: "Hayır — sadece gerçekten hassas olanlar. Bir şifre alıcı için sürtünme ekler, bu yüzden onu içeriğin gerçekten korunması gereken belgelere ayır.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — e-posta için küçült", path: "/compress-pdf" },
    { label: "PDF'e Filigran Ekle — taslakları etiketle", path: "/add-watermark-to-pdf" },
    { label: "E-posta için PDF dosya boyutu nasıl küçültülür", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Telefondan PDF nasıl paylaşılır", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Tüm ücretsiz PDF araçları", path: "/pdf-tools" },
};

export default content;
