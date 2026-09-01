import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-print-a-filled-pdf-form",
  h1: "Doldurulmuş Bir PDF Formu Cevaplarla Nasıl Yazdırılır?",
  description:
    "Formunu yazdırdın ve alanlar boş mu çıktı? Doldurulmuş değerlerin bazen neden yazdırılmadığı ve her cevabın göründüğü temiz bir kağıt kopya alma yöntemi.",
  updated: "2026-06-01",
  intro: [
    "Ekranda bir form dolduruyorsun, yazıcıya gönderiyorsun, ve kağıt tüm cevapların eksik çıkıyor — sadece boş form. Bu en yaygın ve en şaşırtıcı form sorunlarından biridir, ve belirli bir nedeni vardır: cevaplar formun alan katmanında yaşar, bazı yazdırma yolları bu katmanı tamamen atlayıp sadece altındaki sayfayı yazdırır.",
    "Çözüm genelde iki şeyden biridir — form alanı değerlerini yazdıran ayarı aç, ya da cevapların sayfanın bir parçası haline gelip asla dışarıda kalamaması için önce formu kilitle. Nedenini bildiğinde, her cevabın göründüğü temiz bir çıktı almak basittir.",
    "Bu kılavuz boş alanlar sorununu, bunu kontrol eden yazdırma ayarlarını ve doldurulmuş bir formu kağıtta düzgün gösteren daha geniş yazdırma kontrollerini (kenar boşlukları, ölçek) anlatıyor.",
  ],
  steps: [
    {
      title: "Sorunu bir yazdırma önizlemesiyle yeniden üret",
      body: "Herhangi bir şeyi yazıcıya göndermeden önce yazdırma iletişim kutusunu aç ve önizlemeye bak. Cevapların orada da eksikse, bu bir alan yazdırma sorunudur, yazıcı arızası değil.",
    },
    {
      title: "Form alanı değerlerinin yazdırılmasını etkinleştir",
      body: "“Form alanlarını yazdır” gibi bir yazdırma seçeneği ya da “belge ve işaretlemeler” olarak ayarlanmış bir yorumlar-ve-formlar ayarı ara. Bunu açmak, yazdırma yoluna alan katmanını cevaplarınla birlikte dahil etmesini söyler.",
    },
    {
      title: "Bu yoksa önce formu kilitle",
      body: "Kilitleme, doldurulmuş cevaplarını sayfanın kendisine birleştirir. Kilitlendikten sonra dışarıda bırakılacak ayrı bir alan katmanı kalmaz, yani her yazdırma yolu cevapları içerir. Bu en güvenilir çözümdür.",
    },
    {
      title: "Ölçeği ve kenar boşluklarını kontrol et",
      body: "Formun kırpılmaması ya da küçülmemesi için ölçeği özel bir yakınlaştırma yerine “sığdır” ya da %100 olarak ayarla. Hiçbir şeyin kenardan taşmaması için kağıt boyutunun formla eşleştiğini doğrula.",
    },
    {
      title: "Bir test sayfası yazdır",
      body: "Ayarları değiştirdikten sonra önce tek bir sayfa yazdır. Tüm belgeyi kağıda göndermeden önce cevapların, yerleşimin ve kenar boşluklarının doğru göründüğünü doğrula — özellikle çok sayfalı formlarda.",
    },
  ],
  tips: [
    "En hızlı evrensel çözüm formu kilitleyip sonra yazdırmaktır — kilitlenmiş bir form cevaplarını özel bir ayar gerekmeden her yerde yazdırır.",
    "Önizleme cevaplarını gösteriyor ama kağıt göstermiyorsa, sorun dosyada değil yazdırma ayarlarındadır — form alanı seçeneğini yeniden kontrol et.",
    "Ölçek ve kağıt boyutu sorunları boş alan sorunundan ayrıdır; bunları “sığdır”/%100 ve eşleşen kağıtla düzelt.",
    "Taranmış, etkileşimsiz bir formda bu sorun hiç yaşanmaz çünkü cevapları zaten sayfanın bir parçasıdır.",
    "Koyu ya da gölgeli formlarda, alan metninin arka plana karşı okunabilir bir renkte yazdırıldığını kontrol et.",
    "Yazdırma ayarları uygulamalar ve yazıcılar arasında farklılık gösterir, bu yüzden kesin seçenek adı değişir — form alanları ya da işaretlemelerden bahseden herhangi bir şeyi ara.",
  ],
  mobileNote:
    "Telefondan yazdırmanın da aynı tuzağı vardır — bazı yazdırma kısayolları alan değerlerini düşürür. PDF Editor uygulamasında, yazdırmadan ya da bir yazıcıyla paylaşmadan önce doldurulmuş formu kilitleyebilirsin, böylece her cevap sayfaya işlenir ve her seferinde çıkar.",
  faq: [
    {
      q: "Form cevaplarım yazdırırken neden boş çıkıyor?",
      a: "Çünkü cevaplar formun alan katmanındadır ve yazdırma yolun onu atlıyor. Form alanı değerlerini yazdırma seçeneğini aç ya da cevapların sayfanın bir parçası olup her zaman yazdırılması için formu kilitle.",
    },
    {
      q: "Kilitleme yazdırma için ne yapar?",
      a: "Kilitleme, doldurulmuş değerlerini sayfanın kendisine birleştirir. Bundan sonra dışarıda kalacak ayrı bir alan katmanı yoktur, yani cevaplar herhangi bir uygulama ya da yazıcıdan güvenilir şekilde yazdırılır.",
    },
    {
      q: "Cevaplar ekranda görünüyor ama kağıtta yok — neden?",
      a: "Görüntüleyicin alan katmanını gösteriyor ama yazdırma ayarları onu dışlıyor. Form alanları ya da 'belge ve işaretlemeler' hakkında bir yazdırma seçeneği ara ve etkinleştir, ya da yazdırmadan önce kilitle.",
    },
    {
      q: "Yazdırılmış formum neden kenarlardan kesiliyor?",
      a: "Bu, boş alan sorunundan ayrı bir ölçek ya da kağıt boyutu uyumsuzluğudur. Ölçeği sığdır ya da %100 olarak ayarla ve kağıt boyutunu formla eşleştir.",
    },
    {
      q: "Etkileşimsiz taranmış formlarda bu sorun olur mu?",
      a: "Hayır. Etkileşimsiz bir formun cevapları sayfa görüntüsünün bir parçasıdır, yani her zaman yazdırılır. Boş alan sorunu sadece ayrı bir alan katmanı olan etkileşimli formları etkiler.",
    },
  ],
  related: [
    {
      label: "Doldurulmuş bir PDF formu nasıl kaydedilir",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "PDF formu doğru yazdırılmıyor mu",
      path: "/guides/pdf-form-not-printing-correctly",
    },
    {
      label: "PDF yazdırma sorunları nasıl çözülür",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    {
      label: "Tamamlanmış bir PDF formu nasıl gönderilir",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
