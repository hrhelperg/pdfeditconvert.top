import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-large-pdf-files",
  h1: "Cara Mengirim File PDF Berukuran Besar (5 Cara yang Bisa Diandalkan)",
  description:
    "Lima cara yang bisa diandalkan untuk mengirim PDF yang terlalu besar untuk email, mulai dari kompresi, pembagian file, tautan cloud, dan lainnya, plus cara memilih di antaranya.",
  updated: "2026-05-23",
  intro: [
    "Email adalah tempat PDF besar biasanya ditolak. Batasannya nyata dan tidak kenal ampun — 25 MB di Gmail, sekitar 20 MB di Outlook, kadang lebih kecil lagi di sisi penerima — dan dokumen yang penuh hasil pindaian dengan mudah melampauinya. Solusinya bukan satu trik saja; yang Anda butuhkan adalah mengetahui beberapa opsi yang bisa diandalkan dan mana yang cocok untuk file serta penerima Anda.",
    "Panduan ini menjabarkan jalur praktisnya, kurang lebih dalam urutan yang sebaiknya dicoba: perkecil, bagi, atau bagikan tautan. Dua di antaranya memakai alat gratis berbasis browser yang berjalan di perangkat Anda tanpa ada yang diunggah; yang ketiga soal memilih cara berbagi yang menghormati tingkat sensitivitas dokumen.",
    "Tujuannya adalah file yang sampai utuh dan terbaca, tanpa Anda merusak kualitasnya atau tanpa sengaja membagikannya secara berlebihan lewat layanan yang tidak Anda percaya.",
  ],
  steps: [
    {
      title: "Pertama, coba kompres dulu",
      body: "Proses file lewat alat Kompres PDF. Dokumen hasil pindaian dan yang penuh gambar sering langsung masuk di bawah batas email dalam satu kali proses, yang merupakan solusi paling sederhana.",
    },
    {
      title: "Kalau masih terlalu besar, bagi file-nya",
      body: "Gunakan alat Bagi PDF untuk mengirim dokumen sebagai dua atau tiga file yang lebih kecil. Dua bagian yang terbaca lebih baik daripada satu file yang dikompres sampai hancur.",
    },
    {
      title: "Untuk file yang sangat besar, bagikan tautan cloud",
      body: "Unggah ke penyimpanan cloud yang Anda kendalikan dan kirim tautannya. Cara ini sepenuhnya menghindari batas email dan memungkinkan Anda mencabut akses nanti — tapi pilih layanan yang Anda percaya untuk dokumen sensitif.",
    },
    {
      title: "Periksa batas penerima, bukan cuma batas Anda",
      body: "Penyedia email Anda mungkin mengizinkan kiriman 25 MB, sementara milik penerima menolak apa pun di atas 10 MB. Kalau ragu, targetkan ukuran kecil atau pakai tautan.",
    },
    {
      title: "Pastikan file yang Anda kirim ukurannya pas dan bersih",
      body: "Jalur apa pun yang Anda pilih, buka dulu file akhirnya — halaman benar, kualitas terbaca, tidak ada yang seharusnya tidak ada di situ.",
    },
  ],
  tips: [
    "Kerjakan berurutan: kompres, lalu bagi, lalu tautan. Setiap langkah lebih merepotkan dari sebelumnya, jadi berhenti begitu file bisa terkirim.",
    "Tautan cloud biasanya jawaban paling jujur untuk file yang benar-benar sangat besar — tapi untuk dokumen rahasia, pilih layanan yang Anda percaya dan cabut aksesnya kalau sudah tidak diperlukan lagi.",
    "Kompresi mengubah halaman menjadi gambar dan menghilangkan teks yang bisa dipilih. Kalau penerima perlu menyalin teksnya, kirim file asli lewat tautan, bukan lampiran yang dikompres berat.",
    "Membagi berdasarkan batas alami (bab, bagian, sudah ditandatangani vs belum) lebih berguna bagi penerima daripada membagi di halaman sembarang.",
    "Jangan mengirim dokumen sensitif ke layanan 'file besar' pihak ketiga gratis yang tidak pernah Anda dengar hanya demi mengakali batas ukuran — itu menukar sedikit ketidaknyamanan dengan risiko privasi yang nyata.",
  ],
  mobileNote:
    "Kalau file yang kebesaran itu ada di HP Anda, aplikasi PDF Editor mengompres dan membagi secara offline lalu menyerahkan hasilnya langsung ke aplikasi email atau pesan Anda — jadi Anda bisa mengirim hasil pindaian besar dari mana pun Anda berada tanpa mengunggahnya dulu ke layanan yang tidak dikenal.",
  faq: [
    {
      q: "Apa cara termudah mengirim PDF yang terlalu besar?",
      a: "Kompres dulu. Dokumen hasil pindaian dan yang penuh gambar sering langsung masuk di bawah batas email dalam satu kali proses, sehingga Anda tidak perlu membagi file atau memakai tautan sama sekali.",
    },
    {
      q: "Kapan sebaiknya saya membagi file, bukan mengompres?",
      a: "Saat kompresi saja tidak bisa membuat file cukup kecil tanpa merusak kualitasnya. Dua atau tiga file yang terbaca lebih baik daripada satu file yang kualitasnya menurun.",
    },
    {
      q: "Apakah tautan cloud aman untuk dokumen sensitif?",
      a: "Bisa aman, kalau Anda memakai layanan yang Anda percaya dan mencabut aksesnya setelah selesai. Hindari layanan 'file besar' gratis yang tidak dikenal untuk apa pun yang bersifat rahasia.",
    },
    {
      q: "Bagaimana saya tahu penerima bisa menerimanya?",
      a: "Batas milik mereka mungkin lebih kecil dari milik Anda. Kalau ragu, kompres jauh di bawah 10 MB atau kirim tautan daripada mengambil risiko file ditolak diam-diam.",
    },
    {
      q: "Apakah kompresi untuk pengiriman akan merusak dokumen?",
      a: "Kompresi bersifat lossy dan menghilangkan teks yang bisa dipilih. Untuk dokumen yang kualitas atau teks yang bisa dicari itu penting, bagikan aslinya lewat tautan, bukan memampatkannya jadi lampiran.",
    },
  ],
  related: [
    { label: "Kompres PDF — perkecil untuk dikirim", path: "/compress-pdf" },
    { label: "Bagi PDF — kirim dalam beberapa bagian", path: "/split-pdf" },
    { label: "Cara memperkecil ukuran file PDF untuk email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Cara membagikan PDF dari HP Anda", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Kompres PDF", path: "/compress-pdf" },
};

export default content;
