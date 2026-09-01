import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-android",
  h1: "Cara Mengisi Formulir PDF di Android (HP Apa Pun)",
  description:
    "Isi formulir PDF interaktif dan non-interaktif di Android. Alasan aplikasi pembaca bawaan sering tidak bisa dipakai mengetik, cara lewat aplikasi yang bisa diandalkan, dan bagaimana perbedaan antar merek HP memengaruhi formulir.",
  updated: "2026-06-01",
  intro: [
    "Android tidak punya satu pun pengisi formulir PDF bawaan, dan inilah akar dari sebagian besar kebingungannya. Aplikasi pembaca PDF bawaan di banyak HP, sering kali di dalam Google Drive atau Files, menampilkan formulirnya dengan baik tapi tidak selalu mengizinkan Anda mengetik ke kolomnya. Jadi orang menganggap formulirnya rusak, padahal mereka sebenarnya hanya butuh aplikasi yang menangani kolom formulir dengan benar.",
    "Cara yang andal di HP Android mana pun adalah aplikasi PDF khusus yang mendeteksi kolom interaktif dan membiarkan Anda menempatkan teks pada formulir non-interaktif. Karena perangkat keras dan software Android sangat bervariasi antar merek, opsi bawaan persisnya berbeda-beda di setiap HP, tapi aplikasi PDF yang sesungguhnya berperilaku sama di mana saja, dan itulah yang Anda inginkan untuk urusan formulir.",
    "Panduan ini membahas alasan aplikasi pembaca bawaan kurang memadai, alur kerja aplikasi yang bisa diandalkan, dan detail khas Android, membagikan lewat menu bagikan sistem, mengeluarkan formulir dari Gmail dan Drive, yang membuat pengisian formulir jadi cepat.",
  ],
  steps: [
    {
      title: "Keluarkan formulirnya dari aplikasi pembaca dasar",
      body: "Jika formulir yang dibuka dari Gmail atau Drive tidak mengizinkan Anda mengetik, aplikasi pembaca itu sedang mengabaikan kolomnya. Unduh filenya dan buka di aplikasi PDF khusus sebagai gantinya, di sanalah kolomnya jadi hidup.",
    },
    {
      title: "Buka di aplikasi PDF Editor",
      body: "Tambahkan PDF-nya dari Files, Drive, atau menu bagikan. Aplikasi ini memeriksa kolom interaktif dan membuatnya bisa diketuk sehingga Anda bisa mengetik, mencentang kotak centang, dan memakai menu dropdown.",
    },
    {
      title: "Isi formulir non-interaktif dengan menambahkan teks",
      body: "Jika formulirnya tidak punya kolom, gunakan alat teks untuk menempatkan jawaban langsung pada setiap baris. Perbesar tampilan dulu agar teksnya jatuh presisi, keyboard Android plus kolom yang kecil butuh sedikit kehati-hatian.",
    },
    {
      title: "Tambahkan tanda centang, tanggal, dan tanda tangan",
      body: "Centang kotak centang interaktif atau letakkan tanda centang pada yang non-interaktif, masukkan tanggal dalam format yang ditampilkan, dan tambahkan tanda tangan Anda di area tanda tangan memakai alat tanda tangan.",
    },
    {
      title: "Ekspor dan bagikan kembali",
      body: "Simpan salinan yang sudah selesai dan kirim lewat menu bagikan Android, Gmail, Drive, WhatsApp, apa pun. Kunci dulu jika Anda ingin jawabannya terkunci agar tidak bisa terhapus.",
    },
  ],
  tips: [
    "Jika Anda tidak bisa mengetik di formulir di Android, aplikasi pembaca dasar biasanya penyebabnya, buka filenya di aplikasi PDF yang sesungguhnya.",
    "Karena setiap merek Android membawa software yang berbeda, jangan mengandalkan adanya pengisi formulir bawaan; aplikasi khusus adalah pilihan yang konsisten.",
    "Perbesar tampilan pada formulir non-interaktif sebelum menempatkan teks agar kolom yang kecil mendapat jawaban dengan ukuran yang pas.",
    "Simpan formulir kosongnya di folder yang jelas agar Anda bisa mengisi ulang salinan yang bersih, bukan mengedit yang lama.",
    "Perilaku formulir bervariasi antar aplikasi dan perangkat, jadi ekspor yang terkunci adalah cara paling aman untuk memastikan jawabannya tampil bagi penerima.",
  ],
  mobileNote:
    "Aplikasi PDF Editor untuk Android mendeteksi kolom interaktif dan membiarkan Anda menempatkan teks pada formulir non-interaktif, lalu menandatangani dan mengekspor, bekerja dengan cara yang sama apa pun merek HP-nya. Semuanya berjalan di perangkat, jadi informasi yang Anda masukkan pada formulir tidak diunggah.",
  faq: [
    {
      q: "Kenapa saya tidak bisa mengetik di formulir PDF di Android?",
      a: "Aplikasi pembaca bawaan, sering kali milik Google Drive atau pratinjau Files di HP Anda, sering mengabaikan kolom formulir. Unduh formulirnya dan buka di aplikasi PDF khusus, dan kolomnya akan bisa diketik. Formulir non-interaktif butuh teks yang ditempatkan di atasnya.",
    },
    {
      q: "Apakah Android punya pengisi formulir PDF bawaan?",
      a: "Tidak ada yang universal. Apa yang tersedia bergantung pada merek dan software HP Anda. Untuk hasil yang konsisten di perangkat Android mana pun, gunakan aplikasi PDF khusus.",
    },
    {
      q: "Bagaimana cara mengisi formulir hasil pindaian di Android?",
      a: "Formulir hasil pindaian bersifat non-interaktif, jadi tambahkan teks dan tanda centang Anda sendiri di halaman memakai editor PDF, lalu ekspor. Tidak ada kolom untuk diketuk.",
    },
    {
      q: "Apakah mengisi formulir PDF di Android bersifat privat?",
      a: "Dengan aplikasi PDF Editor, pengisiannya berjalan di perangkat, jadi detail Anda tidak dikirim ke mana pun. Alat browser yang mengunggah file Anda justru memprosesnya di server.",
    },
    {
      q: "Bagaimana cara mengirim kembali formulir yang sudah diisi?",
      a: "Ekspor salinan yang sudah selesai dan gunakan menu bagikan Android untuk mengirimnya lewat email, Drive, atau aplikasi pesan. Kunci dulu untuk mengunci jawabannya.",
    },
  ],
  related: [
    { label: "Cara mengisi formulir PDF", path: "/guides/how-to-fill-out-a-pdf-form" },
    { label: "Cara mengisi formulir PDF di iPhone", path: "/guides/how-to-fill-pdf-forms-on-iphone" },
    { label: "Cara tanda tangan PDF di Android", path: "/guides/how-to-sign-pdf-on-android" },
    { label: "Aplikasi formulir PDF terbaik untuk Android", path: "/guides/best-pdf-form-app-for-android" },
    { label: "Alur kerja formulir PDF di HP", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
