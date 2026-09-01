import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-online",
  h1: "Cara Mengompres PDF Online Tanpa Mengunggahnya",
  description:
    "Perkecil PDF langsung di browser, tanpa unggah, tanpa akun. Bedanya kompresi di perangkat dengan alat online pada umumnya, dan trade-off kualitasnya.",
  updated: "2026-05-23",
  intro: [
    "\"Kompres PDF online\" biasanya memunculkan gambaran yang sudah akrab dan sedikit tidak nyaman: unggah file Anda ke server milik orang asing, tunggu, unduh hasilnya, dan berharap dokumen yang baru saja Anda serahkan itu bukan sesuatu yang Anda pedulikan. Ada versi alur kerja yang lebih baik, yang berjalan langsung di tab browser itu sendiri, sehingga filenya tidak pernah meninggalkan perangkat Anda.",
    "Panduan ini memakai alat gratis Kompres PDF, yang mengerjakan tugasnya secara lokal memakai prosesor perangkat Anda sendiri. Ini \"online\" dalam artian Anda mengaksesnya lewat sebuah halaman web, tapi PDF Anda tidak pernah dikirim ke mana pun. Perbedaan itu paling penting untuk dokumen yang benar-benar sering dikompres orang: kontrak hasil pindaian, laporan keuangan, formulir lamaran.",
    "Kita akan membahas langkah-langkahnya, menjelaskan trade-off kualitasnya secara jujur, dan menandai jenis file di mana kompresi berbasis browser bersinar atau justru mentok.",
  ],
  steps: [
    {
      title: "Buka alat Kompres PDF",
      body: "Buka alat Kompres PDF di browser Anda. Alat ini dimuat di halamannya dan memproses file Anda di perangkat Anda, tanpa unggah, tanpa pendaftaran.",
    },
    {
      title: "Tambahkan PDF Anda",
      body: "Seret filenya ke zona unggah atau klik untuk memilihnya. Tidak ada yang dikirim; filenya dibaca secara lokal.",
    },
    {
      title: "Pilih tingkat kompresi",
      body: "\"Rendah\" mempertahankan detail paling banyak, \"Direkomendasikan\" menyeimbangkan ukuran dan kualitas, \"Kuat\" paling kecil. Untuk email dan unggahan, \"Direkomendasikan\" biasanya titik yang paling pas.",
    },
    {
      title: "Kompres",
      body: "Jalankan. Alat ini merender ulang dan menyandikan ulang halamannya secara lokal, lalu menampilkan ukuran sebelum-sesudah dan persentase yang dihemat.",
    },
    {
      title: "Periksa apakah hasilnya terlihat layak",
      body: "Buka file hasil kompresi dan lihat halamannya. Hasil pindaian seharusnya tetap terbaca; jika satu tingkat terlihat terlalu kasar, mundur ke tingkat yang lebih ringan.",
    },
    {
      title: "Unduh file yang lebih kecil",
      body: "Simpan sebagai file baru supaya aslinya tetap utuh. Salinan hasil kompresi siap dilampirkan atau diunggah.",
    },
  ],
  tips: [
    "\"Online\" di sini tidak berarti \"diunggah\". Filenya diproses di browser Anda, di perangkat Anda, cara yang lebih aman untuk mengompres apa pun yang sensitif.",
    "Kompresi bersifat lossy, tidak ada alat jujur yang mengklaim sebaliknya. Tingkat yang lebih rendah mempertahankan lebih banyak detail; pilih yang masih terlihat layak untuk kebutuhan Anda.",
    "Untuk mendapatkan penghematan yang nyata di browser, alat ini merender ulang halaman sebagai gambar, jadi teks di hasilnya tidak lagi bisa dipilih atau dicari. Simpan aslinya jika Anda butuh itu.",
    "PDF yang hanya berisi teks atau vektor nyaris tidak mengecil karena sedikit data gambar yang bisa dikompres, penghematan terbesar datang dari hasil pindaian dan file yang penuh foto.",
    "PDF yang dilindungi kata sandi tidak bisa diproses di browser. Hapus dulu kata sandinya, atau gunakan aplikasi PDF Editor, yang mendukung file terlindungi.",
  ],
  mobileNote:
    "Mengompres dokumen sensitif saat bepergian adalah tempat yang persis di mana pemrosesan di perangkat terbayar hasilnya. Aplikasi PDF Editor mengompres sepenuhnya offline, Anda bisa memperkecil sebuah kontrak dalam mode pesawat dan tidak satu byte pun meninggalkan HP Anda, dan aplikasi ini juga menangani file yang dilindungi kata sandi.",
  faq: [
    {
      q: "Apakah PDF saya benar-benar diunggah ke server?",
      a: "Tidak. Meski diakses lewat sebuah halaman web, alat Kompres PDF berjalan di browser Anda dan memproses file di perangkat Anda. Tidak ada yang dikirim, yang membuatnya aman untuk dokumen rahasia.",
    },
    {
      q: "Seberapa kecil file saya akan jadi?",
      a: "Tergantung isinya. PDF hasil pindaian dan yang penuh gambar sering mengecil 50–90%; PDF yang hanya berisi teks mungkin nyaris tidak berubah. Alat ini menampilkan ukuran pasti sebelum dan sesudah.",
    },
    {
      q: "Apakah kualitasnya akan turun?",
      a: "Ya, sedikit, ini kompresi lossy dan kami tidak berpura-pura sebaliknya. Tingkat yang lebih rendah mempertahankan lebih banyak detail. Pilih tingkat yang terlihat layak untuk bagaimana dokumennya akan dipakai.",
    },
    {
      q: "Kenapa saya tidak bisa memilih teksnya setelah dikompres?",
      a: "Untuk mencapai penghematan ukuran yang nyata di browser, setiap halaman dirasterisasi menjadi gambar, yang menghapus lapisan teks yang bisa dipilih. Jika Anda butuh teks yang dapat dicari, simpan aslinya atau gunakan pendekatan yang lebih ringan.",
    },
    {
      q: "Bisakah saya mengompres PDF yang terlindungi dengan cara ini?",
      a: "Tidak di browser. Hapus dulu kata sandinya, atau gunakan aplikasi mobile PDF Editor, yang bisa membuka dan mengompres file terlindungi.",
    },
  ],
  related: [
    { label: "Kompres PDF — perkecil di browser Anda", path: "/compress-pdf" },
    { label: "Cara mengompres PDF tanpa mengurangi kualitas", path: "/guides/how-to-compress-pdf" },
    { label: "Cara memperkecil ukuran file PDF untuk email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Alat PDF yang mengutamakan privasi", path: "/guides/privacy-first-pdf-tools" },
  ],
  parentHub: { label: "Kompres PDF", path: "/compress-pdf" },
};

export default content;
