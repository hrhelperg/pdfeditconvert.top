import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-so-large",
  h1: "Mengapa File PDF Saya Besar Sekali? Penyebab dan Solusinya",
  description:
    "Alasan sebenarnya sebuah PDF membengkak ukurannya, mulai dari hasil pindaian, foto tersemat, hingga font, dan solusi yang tepat untuk masing-masing, memakai alat browser gratis.",
  updated: "2026-05-23",
  intro: [
    "Dokumen sepuluh halaman tidak semestinya berukuran 60 MB, tapi PDF terus-menerus membengkak. Sebelum Anda buru-buru memakai alat kompresi, ada baiknya memahami dulu kenapa filenya bisa jadi sebesar itu, karena solusi yang tepat tergantung penyebabnya, dan solusi yang salah bisa merusak dokumen yang sebenarnya tidak perlu ditekan kualitasnya.",
    "Panduan ini adalah diagnosis singkat. Membahas penyebab-penyebab umum di balik PDF yang membengkak, cara mengenali mana yang sedang Anda hadapi, dan respons paling efektif untuk masing-masing. Sebagian besar solusinya memakai alat berbasis browser gratis di situs ini, yang semuanya berjalan di perangkat Anda tanpa apa pun yang diunggah.",
    "Di akhir panduan Anda akan tahu apakah file Anda butuh kompresi, penghapusan halaman, atau sekadar diekspor ulang dari sumbernya, dan Anda akan berhenti mengompres dokumen secara berlebihan hanya karena kebiasaan.",
  ],
  steps: [
    {
      title: "Curigai dulu halaman hasil pindaian",
      body: "Hasil pindaian adalah penyebab nomor satu. Setiap halaman hasil pindaian adalah gambar resolusi penuh, jadi beberapa saja sudah jauh lebih berat dari dokumen teks. Jika PDF Anda berasal dari pemindai atau kamera HP, ini hampir pasti penyebabnya.",
    },
    {
      title: "Periksa foto dan grafik tersemat",
      body: "Foto beresolusi tinggi, tangkapan layar, dan grafik yang ditempatkan dalam dokumen membawa serta seluruh data pikselnya. Sebuah laporan dengan selusin gambar besar bisa sangat besar meski teksnya singkat.",
    },
    {
      title: "Pertimbangkan font tersemat dan aset desain",
      body: "Dokumen yang menyematkan beberapa keluarga font lengkap, atau diekspor dari software desain yang berat, membawa bobot tambahan dari font dan aset vektor yang tidak terlihat dibutuhkan kontennya.",
    },
    {
      title: "Cari konten sisa atau tersembunyi",
      body: "Halaman duplikat dari penggabungan yang asal-asalan, sisipan kosong pemindai, atau riwayat revisi bisa membuat file jadi tebal. Menghapus halaman yang tidak Anda butuhkan kadang jadi cara paling sederhana menghemat ukuran.",
    },
    {
      title: "Terapkan solusi yang sesuai",
      body: "Untuk hasil pindaian dan foto, kompres dengan alat Kompres PDF. Untuk sampah, buang halaman dengan alat Ekstrak Halaman PDF. Untuk dokumen teks yang entah kenapa besar sekali, ekspor ulang dari aplikasi sumbernya.",
    },
    {
      title: "Periksa ulang ukurannya",
      body: "Pastikan filenya sudah sesuai kebutuhan Anda. Jika masih besar setelah mengompres file yang penuh hasil pindaian, tingkat yang lebih kuat atau membagi dokumennya adalah langkah berikutnya.",
    },
  ],
  tips: [
    "Cocokkan solusinya dengan penyebabnya: kompresi membantu file yang penuh gambar; hampir tidak berpengaruh untuk PDF yang hanya berisi teks tapi besar karena alasan lain.",
    "Dokumen yang hanya berisi teks tapi mengejutkan besarnya biasanya punya font tersemat atau objek tersembunyi, mengekspor ulang dari aplikasi sumbernya sering memperkecil lebih bersih daripada kompresi.",
    "Memindai di 600 DPI padahal 200–300 sudah cukup adalah penyebab umum dan bisa dihindari untuk file yang besar. Turunkan resolusi pindaian di sumbernya untuk dokumen yang akan Anda bagikan.",
    "Menghapus halaman yang tidak dibutuhkan bisa memangkas ukuran tanpa menyentuh kualitas sama sekali, layak diperiksa sebelum Anda mengompres.",
    "Jangan mengompres secara refleks. Jika sebuah file sudah berukuran wajar, mengompresnya hanya menurunkan kualitas tanpa manfaat nyata.",
  ],
  mobileNote:
    "Hasil pindaian HP adalah pelaku klasiknya, gambar beresolusi tinggi yang disimpan sebagai PDF. Aplikasi PDF Editor membiarkan Anda memindai pada resolusi yang masuk akal sejak awal dan mengompres secara offline, jadi dokumen tidak membengkak sejak awal dan mudah diperkecil saat memang terjadi.",
  faq: [
    {
      q: "Apa yang paling sering membuat PDF jadi besar?",
      a: "Halaman hasil pindaian dan foto tersemat. Masing-masing adalah gambar resolusi penuh, jadi beberapa saja sudah jauh lebih berat daripada laporan teks yang panjang.",
    },
    {
      q: "Kenapa PDF saya yang hanya berisi teks tetap besar?",
      a: "Kemungkinan besar font tersemat, objek tersembunyi, atau konten sisa dari pengeditan dan penggabungan. Mengekspor ulang dari aplikasi sumbernya, atau menghapus halaman yang tidak dibutuhkan, sering lebih membantu daripada kompresi.",
    },
    {
      q: "Apakah kompresi selalu memperkecil file saya?",
      a: "Tidak. Kompresi menyasar data gambar, jadi PDF yang penuh hasil pindaian dan foto sangat mengecil sementara file yang hanya teks atau vektor nyaris tidak berubah. Jika file teks besar sekali, penyebabnya ada di tempat lain.",
    },
    {
      q: "Apakah menghapus halaman mengurangi ukuran?",
      a: "Ya, terutama jika halaman yang dihapus adalah hasil pindaian atau gambar. Membuang sampah dengan alat Ekstrak Halaman PDF bisa memangkas ukuran tanpa memengaruhi kualitas sisanya.",
    },
    {
      q: "Bagaimana cara mencegah hasil pindaian jadi sebesar itu?",
      a: "Pindai di 200–300 DPI, bukan 600, untuk dokumen yang akan Anda bagikan, dan filenya langsung jauh lebih kecil sejak awal. Aplikasi PDF Editor membiarkan Anda mengontrol kualitas pindaian dari awal.",
    },
  ],
  related: [
    { label: "Kompres PDF — perkecil file yang penuh gambar", path: "/compress-pdf" },
    { label: "Ekstrak Halaman PDF — buang sampah", path: "/extract-pdf-pages" },
    { label: "Cara mengompres PDF hasil pindaian", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Pengaturan kompresi PDF terbaik", path: "/guides/best-pdf-compression-settings" },
  ],
  parentHub: { label: "Kompres PDF", path: "/compress-pdf" },
};

export default content;
