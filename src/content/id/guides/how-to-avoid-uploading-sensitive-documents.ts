import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-avoid-uploading-sensitive-documents",
  h1: "Cara Menghindari Mengunggah Dokumen Sensitif (Alternatif Praktis)",
  description:
    "Saat sebuah alur kerja menggoda Anda untuk mengunggah PDF sensitif, hampir selalu ada alternatif yang berjalan lokal. Kategori tugas dan alat tanpa unggah untuk masing-masing.",
  updated: "2026-05-29",
  intro: [
    "Setiap tugas PDF punya momen di mana tautan pertama dalam hasil pencarian ingin Anda mengunggah file. Kompres, gabung, bagi, konversi, tanda tangani — semuanya punya ratusan situs web yang dibangun di sekitar model unggah-dan-proses. Untuk file biasa itu tidak masalah. Untuk file yang sensitif (catatan keuangan, dokumen identitas, kontrak, berkas medis), itu risiko yang sebenarnya bisa dihindari.",
    "Menghindari unggahan bukan berarti menghindari alat-alat modern. Ini soal memilih alat yang berjalan di perangkat Anda — di browser, di aplikasi HP, di desktop Anda. Setiap tugas PDF umum punya setidaknya satu opsi yang hanya lokal, yang menyelesaikan pekerjaan tanpa file itu pernah menyentuh server pihak ketiga.",
    "Panduan ini adalah pengganti praktisnya: kategori-kategori tugas, alat yang hanya lokal untuk masing-masing, dan sekumpulan kecil kasus di mana pemrosesan lokal memang belum bisa mencukupi kebutuhannya.",
  ],
  steps: [
    {
      title: "Untuk kompresi, gunakan kompresor berbasis browser",
      body: "Kompres PDF di kumpulan alat situs ini berjalan secara lokal. Alat ini menangani file yang penuh hasil pindaian atau foto tanpa mengunggah. Verifikasi lewat devtools — tidak ada permintaan keluar berukuran besar saat Anda menambahkan file.",
    },
    {
      title: "Untuk menggabungkan, gunakan penggabung berbasis browser",
      body: "Gabungkan PDF menyatukan file secara lokal. File gabungannya ditulis kembali ke folder unduhan Anda; tidak ada salinan yang tersimpan di server. Arsitekturnya sama seperti kompresi — mengutamakan lokal.",
    },
    {
      title: "Untuk membagi dan mengekstrak, gunakan pembagi berbasis browser",
      body: "Bagi PDF dan Ekstrak Halaman PDF berjalan di perangkat Anda. Operasi tingkat halaman ini sifatnya mekanis dan sangat cocok untuk pemrosesan lokal.",
    },
    {
      title: "Untuk konversi, gunakan konverter berbasis browser",
      body: "PDF ke Word, Word ke PDF, Gambar ke PDF, PDF ke Gambar — semuanya tersedia sebagai versi berbasis browser yang tidak mengunggah. Konversinya terjadi langsung di tab browser Anda.",
    },
    {
      title: "Untuk tanda tangan, gunakan aplikasi tanda tangan lokal",
      body: "Tanda Tangan PDF di browser atau aplikasi PDF Editor di HP. Tanda tangan yang digambar, tanpa melibatkan platform tanda tangan cloud mana pun. File yang sudah ditandatangani tetap berada di perangkat Anda sampai Anda memilih untuk membagikannya.",
    },
    {
      title: "Untuk tugas yang benar-benar membutuhkan bantuan server, gunakan alat berbayar dengan jaminan eksplisit",
      body: "Sebagian alur kerja (OCR berat pada dokumen panjang, penyensoran tingkat lanjut) memang masih diuntungkan oleh pemrosesan server. Untuk itu, pilih alat berbayar dengan komitmen retensi dan penanganan data yang eksplisit — bukan alat gratis dengan bahasa yang samar-samar.",
    },
  ],
  tips: [
    "Hasil pencarian cenderung mengutamakan alat yang membayar untuk posisi teratas. Hasil pertama jarang menjadi yang paling privat; periksa apa yang sebenarnya Anda dapatkan.",
    "Alat yang hanya lokal berfungsi secara offline. Mencobanya secara offline adalah verifikasi cepat bahwa alat itu tidak membutuhkan akses jaringan untuk file Anda.",
    "Jangan terkecoh oleh alat yang 'tidak menyimpan file Anda' tapi tetap mengharuskan unggahan untuk memprosesnya. Jendela retensi yang singkat pun tetap merupakan paparan yang nyata untuk materi yang sangat sensitif.",
    "Aplikasi HP yang memproses secara lokal biasanya mudah dikenali — mereka tetap berfungsi tanpa internet setelah dipasang. Aplikasi PDF Editor mengikuti pola itu.",
    "Bangun kebiasaan itu. Begitu Anda terbiasa memakai alat yang hanya lokal, materi sensitif tetap lebih aman tanpa Anda harus memikirkannya setiap kali.",
  ],
  mobileNote:
    "Di HP, godaannya adalah memakai alat PDF apa pun yang direkomendasikan App Store — banyak di antaranya mengunggah. Aplikasi PDF Editor memproses semuanya langsung di perangkat, di iOS dan Android, sehingga dokumen sensitif bisa berpindah dari hasil jepretan kamera sampai menjadi hasil kerja bertanda tangan tanpa menyentuh server.",
  faq: [
    {
      q: "Bisakah saya benar-benar mengerjakan semua tugas PDF umum tanpa mengunggah?",
      a: "Bisa, untuk tugas sehari-hari: kompres, gabung, bagi, konversi, tanda tangan, watermark, urutkan ulang, ekstrak. Alat-alat di situs ini mencakup semuanya secara lokal. Sebagian operasi tingkat lanjut (OCR penuh pada dokumen panjang) kadang masih membutuhkan bantuan server.",
    },
    {
      q: "Bagaimana cara memverifikasi bahwa sebuah alat tidak mengunggah?",
      a: "Devtools browser, tab network, jatuhkan sebuah file. Jika Anda melihat permintaan POST keluar yang besar, berarti itu mengunggah. Jika tidak, berarti lokal. Perbedaannya terlihat jelas.",
    },
    {
      q: "Apakah alat lokal lebih lambat?",
      a: "Kadang-kadang. WebAssembly modern membuat pemrosesan lokal setara dengan pemrosesan server untuk sebagian besar tugas. Operasi berat pada file besar mungkin butuh waktu lebih lama secara lokal, tapi trade-off privasinya biasanya sepadan untuk materi yang sensitif.",
    },
    {
      q: "Bagaimana dengan OCR — bisakah itu berjalan secara lokal?",
      a: "OCR ringan bisa; OCR akurasi tinggi pada dokumen panjang sering masih memakai pemrosesan server. Jika OCR penting bagi Anda, pilih alat yang secara eksplisit menyatakan di mana pemrosesannya terjadi.",
    },
    {
      q: "Apakah ini berlebihan?",
      a: "Tidak, untuk materi yang sensitif. Model yang mengunggah segalanya secara default dulu berfungsi baik saat dokumen belum terlalu sensitif dan kebocoran data lebih jarang terjadi. Keduanya sudah berubah sekarang. Mengutamakan lokal kini menjadi standar dasar yang masuk akal.",
    },
  ],
  related: [
    {
      label: "Aplikasi PDF dibanding alat PDF online",
      path: "/compare/pdf-app-vs-online-pdf-tools",
    },
    { label: "PDF Security — lindungi dengan kata sandi dan enkripsi", path: "/pdf-security" },
    { label: "Cara melindungi file PDF yang sensitif", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Cara membagikan file PDF secara privat", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Alur kerja dokumen yang mengutamakan privasi", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "PDF Security — lindungi dengan kata sandi dan enkripsi", path: "/pdf-security" },
};

export default content;
