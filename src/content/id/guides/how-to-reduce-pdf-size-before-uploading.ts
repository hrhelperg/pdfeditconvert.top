import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-size-before-uploading",
  h1: "Cara Memperkecil Ukuran PDF Sebelum Diunggah",
  description:
    "Portal unggahan menolak file besar lebih ketat daripada email. Cara membuat PDF masuk batas portal yang ketat tanpa mengorbankan keterbacaan yang mereka periksa.",
  updated: "2026-05-23",
  intro: [
    "Portal unggahan lebih ketat daripada email. Formulir pemerintah, sistem lamaran kerja, portal pajak atau SDM sering membatasi PDF hanya 2, 4, atau 5 MB dan menolak apa pun yang lebih besar dengan pesan error singkat tanpa kesempatan kedua. Yang lebih menyulitkan, ini biasanya dokumen hasil pindaian — justru file yang paling sering kebesaran.",
    "Panduan ini membahas cara masuk batas tersebut memakai alat gratis Kompres PDF, yang berjalan di browser Anda tanpa ada yang diunggah. Tantangan dengan portal adalah dokumennya juga harus tetap terbaca — unggahan yang ditolak dan yang tidak terbaca sama-sama gagal — jadi ini soal menyeimbangkan keduanya.",
    "Kita akan membahas cara mencapai target ukuran tertentu, apa yang harus dilakukan saat batas portal sangat rendah, dan cara menjaga dokumen tetap cukup terbaca untuk lolos pemeriksaan apa pun yang menanti di sisi lain.",
  ],
  steps: [
    {
      title: "Cari tahu batas pasti portal tersebut",
      body: "Baca keterangan kecil di kolom unggahan. Portal menetapkan batas keras — sering 2–5 MB — dan menolak apa pun di atasnya. Angka itulah target Anda.",
    },
    {
      title: "Buka alat Kompres PDF",
      body: "Buka alat Kompres PDF. Alat ini memproses file di perangkat Anda, yang penting karena unggahan portal biasanya berupa dokumen pribadi atau resmi.",
    },
    {
      title: "Kompres menuju batas tersebut",
      body: "Mulai dengan Direkomendasikan; untuk batas yang ketat, naikkan ke Kuat. Alat ini menampilkan ukuran hasilnya sehingga Anda bisa melihat apakah sudah masuk batas.",
    },
    {
      title: "Pastikan masih terbaca",
      body: "Buka file yang sudah dikompres. Portal menolak file yang terlalu besar dan peninjau menolak file yang tidak terbaca — dokumennya harus memenuhi keduanya. Periksa apakah teksnya masih nyaman dibaca.",
    },
    {
      title: "Kalau tidak bisa masuk batas, kurangi halaman",
      body: "Kalau kompresi saja tidak bisa membawa Anda di bawah batas yang sangat rendah, buang halaman yang tidak perlu dengan alat Ekstrak Halaman PDF, atau unggah bagian yang diperlukan secara terpisah kalau portal mengizinkannya.",
    },
    {
      title: "Unggah file dengan ukuran yang pas",
      body: "Kirim versi yang sudah dikompres. Simpan file asli berkualitas penuh Anda untuk berjaga-jaga kalau portal nanti meminta salinan yang lebih jelas.",
    },
  ],
  tips: [
    "Cari tahu batas pastinya sebelum mengompres. Mengompres tanpa target membuang usaha; batas yang tertera 4 MB memberi tahu Anda persis seberapa kuat harus menekan.",
    "Portal menuntut dua syarat sekaligus: cukup kecil untuk diunggah dan cukup jelas untuk dibaca. Kompresi kuat yang membuat formulir jadi buram akan gagal saat ditinjau meski berhasil diunggah.",
    "Dokumen lamaran hasil pindaian mengecil drastis, jadi bahkan batas 2 MB biasanya masih bisa dicapai — hampir semuanya data gambar.",
    "Kalau batasnya sangat rendah untuk dokumen hasil pindaian multihalaman, membuang halaman kosong atau yang tidak relevan lebih dulu mengurangi ukuran tanpa menyentuh kualitas.",
    "Simpan file aslinya. Peninjau yang tidak bisa membaca sebuah detail mungkin akan meminta salinan yang lebih jelas, dan Anda perlu file berkualitas penuh yang siap dipakai.",
  ],
  mobileNote:
    "Banyak unggahan portal dilakukan dari HP — memotret dokumen dan langsung mengirimkannya. Aplikasi PDF Editor mengompres secara offline dan memungkinkan Anda memeriksa keterbacaan sebelum mengunggah, jadi Anda tidak mengirim file yang terlalu besar atau terlalu buram untuk lolos.",
  faq: [
    {
      q: "Mengapa portal unggahan menolak PDF saya padahal email menerimanya?",
      a: "Portal menetapkan batas yang jauh lebih ketat — sering 2–5 MB dibanding ~25 MB milik email — dan menegakkannya secara ketat. File yang lancar terkirim lewat email bisa dengan mudah terlalu besar untuk portal.",
    },
    {
      q: "Bagaimana cara mencapai target ukuran tertentu?",
      a: "Kompres dan lihat ukuran hasilnya, naikkan tingkatnya bertahap sampai masuk batas. Alat ini menampilkan angka sebelum dan sesudah sehingga Anda bisa membidik dengan tepat.",
    },
    {
      q: "Bagaimana kalau kompresi Kuat pun belum cukup?",
      a: "Buang halaman yang tidak perlu dengan alat Ekstrak Halaman PDF, atau unggah bagian yang diperlukan secara terpisah kalau portal mengizinkannya. Cara ini memangkas ukuran tanpa merusak lebih jauh halaman yang tersisa.",
    },
    {
      q: "Apakah dokumen saya diunggah ke server Anda saat saya mengompres?",
      a: "Tidak. Alat Kompres PDF berjalan di browser Anda di perangkat Anda — hal ini penting karena dokumen portal biasanya bersifat pribadi atau resmi.",
    },
    {
      q: "Apakah kompresi berat bisa membuat portal menolaknya karena tidak terbaca?",
      a: "Bisa. Portal butuh file yang cukup kecil untuk diunggah dan cukup jelas untuk dibaca. Periksa keterbacaan setelah mengompres, dan simpan file asli untuk permintaan susulan mana pun.",
    },
  ],
  related: [
    { label: "Kompres PDF — masuk batas portal", path: "/compress-pdf" },
    { label: "Ekstrak Halaman PDF — buang halaman untuk menghemat ukuran", path: "/extract-pdf-pages" },
    { label: "Pengaturan kompresi PDF terbaik", path: "/guides/best-pdf-compression-settings" },
    { label: "Cara memperkecil ukuran file PDF untuk email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Kompres PDF", path: "/compress-pdf" },
};

export default content;
