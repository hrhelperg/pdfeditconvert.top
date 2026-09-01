import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-before-sharing",
  h1: "Cara Menyiapkan PDF Sebelum Dibagikan (Daftar Periksa)",
  description:
    "Daftar periksa sebelum mengirim PDF: rapikan halaman nyasar, perbaiki orientasi, perkecil ukuran, dan beri label draf. Kirim dokumen yang bersih, berukuran pas, dan sesuai maksud.",
  updated: "2026-05-23",
  intro: [
    "Semenit sebelum Anda menekan kirim adalah saat termurah untuk menangkap masalah pada sebuah PDF. Begitu masuk ke kotak masuk seseorang, halaman kosong, hasil pindaian yang miring, ukuran 40 MB, atau catatan internal yang lupa Anda hapus jadi masalah mereka juga, dan Anda yang harus meminta maaf. Pemeriksaan singkat dan disengaja sebelum mengirim mencegah hampir semuanya.",
    "Panduan ini adalah pemeriksaan itu: daftar periksa praktis yang hanya butuh beberapa menit dan memakai alat browser gratis, masing-masing berjalan di perangkat Anda tanpa apa pun yang diunggah. Ditujukan untuk dokumen yang benar-benar akan dikirim ke orang lain, penawaran, kontrak, lamaran, laporan.",
    "Semua ini bukan soal kerapian demi kerapian. Ini soal penerima membuka file Anda dan menemukan persis apa yang mereka harapkan, dengan ukuran yang benar-benar bisa mereka terima, tanpa ada yang menempel tanpa sengaja.",
  ],
  steps: [
    {
      title: "Pastikan ini versi yang benar dan final",
      body: "Buka filenya dan periksa apakah ini draf terbaru, sudah selesai diedit sepenuhnya. PDF adalah rekaman sesaat, memperbaiki salah ketik setelah dikirim berarti harus mengirim ulang.",
    },
    {
      title: "Hapus apa pun yang tidak seharusnya keluar",
      body: "Buang halaman kosong, halaman sampul, catatan internal, dan halaman untuk orang lain dengan hanya menyimpan yang seharusnya ada, memakai alat Ekstrak Halaman PDF.",
    },
    {
      title: "Perbaiki orientasi dan urutan",
      body: "Gunakan alat Putar PDF untuk halaman yang miring dan alat Urutkan Ulang Halaman PDF untuk apa pun yang urutannya salah, supaya dokumennya terbaca bersih dari awal sampai akhir.",
    },
    {
      title: "Buat ukurannya di bawah batas",
      body: "Jika filenya berat, hasil pindaian dan foto biasanya penyebabnya, jalankan lewat alat Kompres PDF agar masuk batas email dan portal yang umumnya 10–25 MB.",
    },
    {
      title: "Beri label statusnya jika belum final",
      body: "Jika Anda membagikan draf untuk ditinjau, tambahkan watermark DRAFT dengan alat Tambahkan Watermark ke PDF supaya tidak ada yang mengiranya sebagai versi yang sudah ditandatangani.",
    },
    {
      title: "Beri nama yang jelas dan kirim",
      body: "Beri nama file yang deskriptif dan bertanggal supaya jelas terlihat di kotak masuk penerima dan mudah ditemukan lagi nanti, lalu lampirkan atau unggah.",
    },
  ],
  tips: [
    "Kesalahan pra-kirim yang paling umum adalah halaman yang seharusnya tidak ada di sana, halaman kosong, duplikat, atau halaman berisi detail untuk orang lain. Periksa halaman demi halaman.",
    "Sesuaikan ukurannya dengan salurannya: email membatasi sekitar 25 MB, banyak portal unggahan jauh lebih rendah. Mengompres file yang penuh hasil pindaian biasanya solusinya.",
    "Watermark DRAFT atau RAHASIA menetapkan ekspektasi dan mencegah versi kerja diperlakukan sebagai final, asuransi murah untuk apa pun yang belum ditandatangani.",
    "Nama file yang jelas bagian dari menyiapkan dokumen. Itu hal pertama yang dilihat penerima dan yang akan Anda cari lagi nanti.",
    "Untuk apa pun yang benar-benar sensitif, pertimbangkan juga kata sandi, persiapan bukan hanya soal kerapian, tapi juga soal tidak membagikan berlebihan.",
  ],
  mobileNote:
    "Mengirim dokumen langsung dari HP Anda adalah tempat yang persis di mana pemeriksaan cepat ini terbayar. Aplikasi PDF Editor membiarkan Anda memangkas halaman, memutar, mengompres, membubuhkan watermark, dan mengubah nama di satu tempat sebelum dikirim, offline, tanpa apa pun yang diunggah.",
  faq: [
    {
      q: "Apa yang harus saya periksa sebelum mengirim PDF?",
      a: "Bahwa ini versi final, bebas dari halaman nyasar atau sensitif, orientasi dan urutannya benar, cukup kecil untuk salurannya, diberi label jika masih draf, dan diberi nama dengan jelas. Pemeriksaan dua menit sudah mencakup semuanya.",
    },
    {
      q: "Bagaimana saya memastikan tidak membagikan halaman yang salah?",
      a: "Simpan hanya halaman yang seharusnya ada memakai alat Ekstrak Halaman PDF, dan tinjau hasilnya halaman demi halaman. Catatan internal dan detail penerima lain sering tersembunyi di halaman yang tidak perlu Anda kirim.",
    },
    {
      q: "Kenapa ukuran file begitu penting?",
      a: "Layanan email menolak lampiran di atas kira-kira 25 MB dan banyak portal unggahan membatasi jauh lebih rendah. PDF yang penuh hasil pindaian dengan mudah melampaui itu, jadi mengompresnya mencegah pengiriman gagal atau unggahan ditolak.",
    },
    {
      q: "Apakah alat-alat persiapan ini privat?",
      a: "Ya. Alat ekstrak, putar, urutkan ulang, kompres, dan watermark semuanya berjalan di browser Anda, di perangkat Anda, tidak ada yang diunggah.",
    },
    {
      q: "Haruskah setiap PDF yang dibagikan dilindungi kata sandi?",
      a: "Tidak, hanya yang benar-benar sensitif. Kata sandi menambah hambatan bagi penerima, jadi simpan itu untuk dokumen yang isinya sungguh perlu dilindungi.",
    },
  ],
  related: [
    { label: "Kompres PDF — perkecil untuk email", path: "/compress-pdf" },
    { label: "Tambahkan Watermark ke PDF — beri label draf", path: "/add-watermark-to-pdf" },
    { label: "Cara memperkecil ukuran file PDF untuk email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Cara membagikan PDF dari HP Anda", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Semua alat PDF gratis", path: "/pdf-tools" },
};

export default content;
