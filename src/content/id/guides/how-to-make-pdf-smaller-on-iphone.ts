import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-iphone",
  h1: "Cara Memperkecil PDF di iPhone",
  description:
    "Perkecil PDF di iPhone memakai alat browser atau aplikasi PDF Editor. Alasan hasil pindaian di iPhone jadi besar dan cara membuatnya masuk batas pengiriman.",
  updated: "2026-05-23",
  intro: [
    "iPhone menghasilkan file yang indah dan besar. Kamera dan pemindai beresolusi tinggi yang sama yang membuat dokumen Anda terlihat tajam juga membuat PDF-nya berat, beberapa halaman hasil pindaian saja bisa melampaui batas email sebelum Anda menambahkan apa pun lagi. Jadi \"perkecil PDF ini di iPhone saya\" adalah kebutuhan yang sangat umum dan sangat spesifik.",
    "Panduan ini membahas dua cara yang bisa diandalkan dan sama-sama berfungsi di iPhone. Yang pertama adalah alat gratis Kompres PDF di Safari, yang berjalan di perangkat Anda tanpa apa pun yang diunggah. Yang kedua adalah aplikasi PDF Editor, yang mengompres secara offline dan menangani file yang dilindungi kata sandi yang tidak bisa ditangani browser.",
    "Cara mana pun, tujuannya sama: file yang cukup kecil untuk dikirim lewat email atau diunggah tapi tetap terbaca bersih, tanpa mengirim dokumen Anda ke server milik orang lain untuk sampai ke sana.",
  ],
  steps: [
    {
      title: "Temukan PDF-nya di File",
      body: "Cari dokumennya di aplikasi File atau di mana pun tersimpan, hasil pindaian yang Anda buat, lampiran yang Anda simpan, kumpulan foto yang sudah dikonversi.",
    },
    {
      title: "Buka alat Kompres PDF di Safari",
      body: "Buka alat Kompres PDF. Alat ini berjalan di browser di iPhone Anda dan memproses filenya di perangkat, tidak ada yang diunggah.",
    },
    {
      title: "Tambahkan PDF-nya dan pilih tingkatnya",
      body: "Ketuk untuk memilih filenya, lalu pilih tingkatnya. \"Direkomendasikan\" cocok untuk sebagian besar kasus; pilih \"Kuat\" hanya jika Anda butuh yang lebih kecil lagi.",
    },
    {
      title: "Kompres dan periksa ukurannya",
      body: "Jalankan dan baca ukuran sebelum-sesudahnya. Hasil pindaian iPhone biasanya turun banyak dalam sekali proses karena penuh gambar.",
    },
    {
      title: "Simpan kembali ke File atau bagikan",
      body: "Gunakan ikon bagikan untuk menyimpan PDF yang lebih kecil ke File atau langsung mengirimkannya. Simpan aslinya sampai Anda memastikan hasilnya terbaca dengan baik.",
    },
    {
      title: "Untuk file terlindungi, gunakan aplikasinya",
      body: "Browser tidak bisa mengompres PDF yang dilindungi kata sandi. Aplikasi PDF Editor menangani itu secara offline, dan lebih cepat untuk file yang sering Anda kompres.",
    },
  ],
  tips: [
    "Hasil pindaian iPhone besar karena merupakan gambar beresolusi tinggi. Itu juga sebabnya mereka mengompres dengan sangat baik, penghematannya paling besar justru pada file semacam ini.",
    "Memotret dokumen dalam format \"Paling Kompatibel\" (Pengaturan → Kamera → Format) menghasilkan JPG yang lebih mudah dikompres dan dibagikan dibanding HEIC.",
    "Kompresi merasterisasi halaman, jadi salinan yang lebih kecil tidak akan punya teks yang bisa dipilih. Simpan aslinya jika Anda perlu mencari atau menyalin dari sana.",
    "Memori browser di HP lebih terbatas dibanding di laptop. Untuk PDF yang sangat besar, aplikasi PDF Editor adalah cara yang lebih bisa diandalkan.",
    "Selalu simpan file hasil kompresi dengan nama baru supaya aslinya yang tajam tetap utuh di perangkat.",
  ],
  mobileNote:
    "Ini tugas yang mengutamakan HP, dan aplikasi PDF Editor dibangun untuk itu: kompres offline, tanpa unggah, dukungan untuk file terlindungi, dan serah terima langsung ke Mail, Messages, atau menu bagikan. Untuk dokumen yang rutin Anda perkecil, ini lebih cepat daripada lewat browser setiap kali.",
  faq: [
    {
      q: "Kenapa PDF di iPhone saya begitu besar?",
      a: "Hasil pindaian dan foto iPhone adalah gambar beresolusi tinggi, dan PDF yang dibuat dari beberapa di antaranya pada dasarnya adalah tumpukan gambar besar. Itulah kenapa mereka melebihi batas email, dan kenapa mereka mengompres dengan sangat efektif.",
    },
    {
      q: "Bisakah saya mengompres PDF di iPhone tanpa aplikasi?",
      a: "Bisa. Alat Kompres PDF berjalan di Safari dan memproses filenya di perangkat Anda, jadi Anda bisa memperkecil PDF tanpa memasang apa pun.",
    },
    {
      q: "Apakah dokumen saya diunggah saat memakai alat browser?",
      a: "Tidak. Prosesnya terjadi secara lokal di iPhone Anda. Tidak ada yang dikirim ke server, penting untuk dokumen pribadi atau keuangan.",
    },
    {
      q: "Apakah teksnya masih bisa dipilih setelahnya?",
      a: "Tidak. Kompresi merender ulang halaman sebagai gambar, menghapus lapisan teks yang bisa dipilih. Simpan aslinya jika Anda butuh teks yang dapat dicari.",
    },
    {
      q: "Bagaimana dengan PDF yang dilindungi kata sandi?",
      a: "Browser tidak bisa memproses itu. Gunakan aplikasi PDF Editor, yang membuka dan mengompres file terlindungi secara offline.",
    },
  ],
  related: [
    { label: "Kompres PDF — perkecil di browser Anda", path: "/compress-pdf" },
    { label: "Cara memperkecil PDF di Android", path: "/guides/how-to-make-pdf-smaller-on-android" },
    { label: "Cara memperkecil ukuran file PDF untuk email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Cara mengedit PDF di iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Kompres PDF", path: "/compress-pdf" },
};

export default content;
