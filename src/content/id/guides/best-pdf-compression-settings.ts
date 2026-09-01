import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-compression-settings",
  h1: "Pengaturan Kompresi PDF Terbaik, Panduan Mengambil Keputusan",
  description:
    "Tingkat kompresi mana untuk email, cetak, arsip, atau web? Matriks praktis yang mencocokkan pengaturan dengan tujuan, lengkap dengan trade-off yang jujur.",
  updated: "2026-05-23",
  intro: [
    "Tidak ada satu pengaturan kompresi yang \"terbaik\" — yang ada hanyalah pengaturan terbaik untuk apa yang akan Anda lakukan dengan file itu. Tingkat yang sempurna untuk mengirim struk lewat email bisa merusak dokumen yang akan dicetak di percetakan. Jadi, alih-alih mencari angka ajaib, yang Anda butuhkan adalah cara cepat untuk mencocokkan pengaturan dengan tujuannya.",
    "Panduan ini adalah matriks keputusan itu. Panduan ini memetakan tingkat pada alat gratis Kompres PDF — Rendah, Direkomendasikan, dan Kuat — ke situasi yang cocok untuk masing-masing, serta menjelaskan trade-off di balik setiap pilihan. Alat ini berjalan di browser Anda tanpa ada yang diunggah, dan menampilkan penghematan ukuran sehingga Anda bisa memastikan pilihan Anda.",
    "Baca sekali dan Anda akan berhenti menebak-nebak — Anda akan langsung tahu tingkat mana yang harus dipilih begitu Anda melihat untuk apa dokumen itu digunakan.",
  ],
  steps: [
    {
      title: "Untuk lampiran email: Direkomendasikan",
      body: "Titik keseimbangan default. Untuk sebagian besar file, tingkat ini masuk di bawah batas 25 MB Gmail dan sekitar 20 MB Outlook, sambil menjaga dokumen tetap nyaman dibaca di layar.",
    },
    {
      title: "Untuk portal unggahan dengan batas ketat: Kuat",
      body: "Portal pemerintah dan SDM sering membatasi hanya beberapa megabyte. Tingkat Kuat membawa Anda ke sana. Dokumen hasil pindaian tahan dengan baik; untuk dokumen bertata letak, periksa apakah hasilnya masih layak.",
    },
    {
      title: "Untuk cetak atau arsip resmi: Rendah",
      body: "Saat file akan dicetak atau disimpan sebagai arsip berkualitas, gunakan tingkat Rendah untuk mempertahankan detail sebanyak mungkin. Kompres saja kalau file itu memang benar-benar perlu diperkecil.",
    },
    {
      title: "Untuk arsip jangka panjang: minimal atau tanpa kompresi",
      body: "Arsip harus mengutamakan kesetiaan terhadap aslinya dibanding ukuran. Kompres seringan mungkin, kalau memang perlu, dan simpan selalu salinan asli yang tidak dikompres — Anda selalu bisa memperkecil salinannya nanti, tapi Anda tidak bisa mengembalikan detail yang sudah hilang.",
    },
    {
      title: "Untuk web dan tampilan layar saja: Direkomendasikan hingga Kuat",
      body: "Dokumen yang hanya akan dibaca di layar dapat menoleransi kompresi yang lebih berat. Condongkan ke Kuat saat Anda butuh unduhan web yang cepat dan kualitas cetak tidak relevan.",
    },
    {
      title: "Pastikan dengan ukuran sebelum dan sesudah",
      body: "Apa pun yang Anda pilih, alat ini menampilkan penghematannya. Kalau tingkat yang lebih ringan sudah mencapai target Anda, cukupkan di situ — tidak ada hadiah untuk kompresi berlebihan.",
    },
  ],
  tips: [
    "Tujuan dulu, baru pengaturan. Tentukan apa yang akan terjadi pada file itu, baru pilih tingkatnya — bukan sebaliknya.",
    "Dokumen hasil pindaian menoleransi pengaturan yang lebih kuat dibanding dokumen bertata letak. Tingkat Kuat yang cocok untuk formulir hasil pindaian bisa membuat brosur penuh foto jadi terlalu lembut.",
    "Setiap tingkat mengubah halaman menjadi gambar dan menghilangkan teks yang bisa dipilih. Kalau dokumen harus tetap dapat dicari, hal ini memengaruhi pilihan Anda sama pentingnya dengan ukuran file.",
    "PDF yang penuh teks dan elemen vektor hampir tidak mengecil pada pengaturan apa pun — data gambarnya sedikit untuk dikompres, jadi jangan berharap keajaiban dari tingkat Kuat.",
    "Simpan salinan asli yang tidak dikompres untuk apa pun yang penting. Kompresi bersifat satu arah; salinan asli memungkinkan Anda menghasilkan ukuran apa pun yang Anda butuhkan nanti.",
  ],
  mobileNote:
    "Aplikasi PDF Editor memudahkan Anda mencocokkan pengaturan dengan tujuan bahkan saat bepergian: kompres secara offline, lihat pratinjau hasilnya, dan atur tingkatnya sebelum membagikan. Aplikasi ini juga mendukung file terproteksi dan menyimpan semuanya di perangkat.",
  faq: [
    {
      q: "Apa pengaturan kompresi terbaik secara keseluruhan?",
      a: "Tidak ada satu jawaban tunggal — tergantung tujuannya. Direkomendasikan cocok untuk email, Kuat cocok untuk batas unggahan yang ketat dan file khusus layar, dan Rendah (atau tanpa kompresi) cocok untuk cetak dan arsip.",
    },
    {
      q: "Pengaturan mana yang terbaik untuk mengirim PDF lewat email?",
      a: "Direkomendasikan. Untuk sebagian besar file, tingkat ini masuk di bawah batas email umum 20–25 MB sambil menjaga dokumen tetap terbaca. Pindah ke Kuat hanya jika masih melebihi batas.",
    },
    {
      q: "Apa yang harus saya gunakan untuk dokumen yang akan saya cetak?",
      a: "Rendah, atau tanpa kompresi sama sekali. Cetak membutuhkan detail, jadi pertahankan kualitas dan perkecil file hanya kalau memang benar-benar terlalu besar untuk ditangani.",
    },
    {
      q: "Apakah pengaturan yang lebih kuat menghilangkan teks yang dapat dicari?",
      a: "Semua tingkat merender ulang halaman sebagai gambar, sehingga menghilangkan teks yang bisa dipilih. Kalau dokumen harus tetap dapat dicari, simpan file aslinya terlepas dari tingkat yang Anda pilih.",
    },
    {
      q: "Mengapa tingkat Kuat tidak banyak memperkecil PDF berisi teks saya?",
      a: "Kompresi menyasar data gambar. PDF yang hanya berisi teks atau vektor punya sedikit yang bisa dikompres, jadi bahkan Kuat pun hanya menghasilkan penghematan kecil. File itu besar karena alasan lain.",
    },
  ],
  related: [
    { label: "Kompres PDF — pilih tingkat Anda", path: "/compress-pdf" },
    { label: "Cara mengompres PDF tanpa mengurangi kualitas", path: "/guides/compress-pdf-without-losing-too-much-quality" },
    { label: "Cara mengompres PDF hasil pindaian", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Cara memperkecil ukuran PDF sebelum diunggah", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Kompres PDF", path: "/compress-pdf" },
};

export default content;
