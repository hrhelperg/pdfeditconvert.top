import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-android",
  h1: "Cara Memperkecil PDF di Android",
  description:
    "Kompres PDF di HP Android mana pun memakai alat browser tanpa instalasi, atau aplikasi PDF Editor. Buat hasil pindaian masuk batas email dan unggahan.",
  updated: "2026-05-23",
  intro: [
    "Android menangani PDF secara berbeda tergantung HP-nya, Samsung, Pixel, dan Xiaomi semuanya menyembunyikan pengaturan terkait di tempat yang berbeda-beda, tapi kebutuhannya universal: PDF hasil pindaian atau penuh foto terlalu besar untuk dikirim lewat email atau diunggah, dan Anda ingin memperkecilnya. Perbaikan yang paling bisa diandalkan sama sekali tidak tergantung merek HP Anda.",
    "Panduan ini memakai alat gratis Kompres PDF, yang berjalan di browser Anda di perangkat Android mana pun dan memproses filenya secara lokal, tidak ada yang diunggah. Panduan ini juga membahas aplikasi PDF Editor untuk pemakaian offline dan untuk file yang dilindungi kata sandi yang tidak bisa disentuh browser.",
    "Karena cara berbasis browser identik di setiap HP Android, ini metode yang layak diingat jika Anda berganti perangkat atau membantu orang lain dengan merek berbeda.",
  ],
  steps: [
    {
      title: "Temukan PDF-nya",
      body: "Cari dokumennya di aplikasi File, Downloads, atau di mana pun ia tersimpan, sebuah hasil pindaian, lampiran yang tersimpan, kumpulan foto yang sudah dikonversi.",
    },
    {
      title: "Buka alat Kompres PDF",
      body: "Buka alat Kompres PDF di Chrome atau browser Anda. Alat ini berjalan sama di setiap HP Android dan memproses filenya di perangkat Anda, tanpa unggah, tanpa akun.",
    },
    {
      title: "Tambahkan PDF-nya dan pilih tingkatnya",
      body: "Pilih filenya dan tentukan tingkatnya: \"Direkomendasikan\" untuk sebagian besar kasus, \"Kuat\" jika Anda butuh yang lebih kecil. \"Rendah\" mempertahankan detail paling banyak.",
    },
    {
      title: "Kompres dan tinjau hasilnya",
      body: "Jalankan dan periksa ukuran sebelum-sesudahnya. PDF penuh gambar dan hasil pindaian biasanya turun drastis dalam sekali proses.",
    },
    {
      title: "Simpan atau bagikan hasilnya",
      body: "Simpan file yang lebih kecil ke perangkat Anda atau bagikan langsung ke email atau aplikasi obrolan. Simpan aslinya sampai Anda memastikan salinannya terbaca dengan baik.",
    },
    {
      title: "Gunakan aplikasinya untuk file terlindungi atau besar",
      body: "Browser tidak bisa mengompres PDF yang dilindungi kata sandi dan mungkin kesulitan dengan file yang sangat besar. Aplikasi PDF Editor menangani keduanya secara offline.",
    },
  ],
  tips: [
    "Metode browser berperilaku identik di Samsung, Pixel, Xiaomi, dan yang lain, jadi ini yang layak diingat lintas perangkat.",
    "Jika sebuah PDF sangat besar, hampir pasti karena halaman hasil pindaian atau yang difoto. Itu justru yang paling baik dikompres.",
    "Kompresi merasterisasi halaman, jadi salinan yang lebih kecil kehilangan teks yang bisa dipilih. Simpan aslinya jika Anda perlu mencari atau menyalin darinya.",
    "Beberapa kamera Android menyimpan HEIF dalam mode efisiensi tinggi; hasil pindaian JPG standar lebih mudah dikompres dan dibagikan secara luas.",
    "Simpan PDF hasil kompresi dengan nama baru supaya aslinya yang tajam tetap ada di perangkat.",
  ],
  mobileNote:
    "Mengompres di HP adalah yang benar-benar diinginkan pengguna Android, dan aplikasi PDF Editor melakukannya secara offline tanpa unggah, mendukung file yang dilindungi kata sandi, dan membagikan langsung ke aplikasi Anda. Untuk dokumen yang sering Anda perkecil, ini lebih baik daripada membuka browser setiap kali.",
  faq: [
    {
      q: "Apakah metode browser berfungsi di setiap HP Android?",
      a: "Ya. Karena alat Kompres PDF berjalan di browser, perilakunya sama di Samsung, Pixel, Xiaomi, dan perangkat Android lainnya, berbeda dari fitur bawaan yang bervariasi menurut merek.",
    },
    {
      q: "Bisakah saya mengompres PDF di Android tanpa memasang apa pun?",
      a: "Bisa. Alat Kompres PDF berjalan di browser Anda dan memproses filenya di perangkat Anda, jadi tidak perlu instalasi.",
    },
    {
      q: "Apakah file saya diunggah?",
      a: "Tidak. Kompresinya terjadi secara lokal di HP Anda; tidak ada yang dikirim ke server, penting untuk dokumen pribadi.",
    },
    {
      q: "Apakah teksnya tetap bisa dipilih?",
      a: "Tidak. Halaman dirender ulang sebagai gambar selama kompresi, menghapus lapisan teks yang bisa dipilih. Simpan aslinya jika Anda membutuhkannya.",
    },
    {
      q: "Bagaimana cara mengompres PDF yang dilindungi kata sandi di Android?",
      a: "Browser tidak bisa memproses file terlindungi. Gunakan aplikasi PDF Editor, yang membuka dan mengompresnya secara offline.",
    },
  ],
  related: [
    { label: "Kompres PDF — perkecil di browser Anda", path: "/compress-pdf" },
    { label: "Cara memperkecil PDF di iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "Cara memperkecil ukuran file PDF untuk email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Cara mengedit PDF di Android", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "Kompres PDF", path: "/compress-pdf" },
};

export default content;
