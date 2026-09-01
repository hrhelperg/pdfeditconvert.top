import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf",
  h1: "Cara Mengompres PDF (Tanpa Mengurangi Kualitas)",
  description:
    "Perkecil ukuran file PDF untuk email atau unggahan tanpa mengurangi kualitas. Tutorial ramah HP menggunakan aplikasi PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Setiap layanan email masih punya batas lampiran. Gmail mentok di 25 MB. Outlook menabrak batas sekitar 20 MB. Slack dan sebagian besar aplikasi pesan juga berhenti menerima di sekitar 25 MB. PDF di dunia nyata, penawaran dengan foto, kontrak hasil pindaian, laporan dengan grafik, dengan mudah melampaui batas-batas itu.",
    "Ada dua cara membuat PDF lebih kecil. Cara yang salah adalah mencetak-ke-PDF dengan kualitas rendah, yang merusak teks dan tanda tangan secara permanen. Cara yang benar adalah mengompres ulang gambar dan menyandikan ulang font di dalam file, sehingga teks tetap tajam sambil memangkas 60-90% ukuran file.",
    "Panduan ini menunjukkan cara yang benar memakai aplikasi PDF Editor di iPhone atau Android. Langkahnya sama di kedua platform. Anda akan mendapatkan file yang cukup kecil untuk dikirim, tapi tetap terlihat identik dengan aslinya pada tingkat zoom berapa pun.",
  ],
  steps: [
    {
      title: "Buka aplikasi PDF Editor",
      body: "Jalankan aplikasinya dari layar utama. Ketuk kotak \"Kompres\" di beranda.",
    },
    {
      title: "Tambahkan PDF-nya",
      body: "Ketuk \"Tambahkan File\". Pilih dari File / iCloud (iPhone) atau lewat pemilih file (Android). Anda juga bisa membagikan PDF dari aplikasi mana pun ke PDF Editor.",
    },
    {
      title: "Pilih tingkat kualitas",
      body: "Tiga preset mencakup hampir semua kasus. \"Seimbang\" cocok untuk kebanyakan file. Pilih \"Kecil\" untuk file yang akan Anda kirim lewat email atau unggah. Pilih \"Tinggi\" saat hasilnya harus siap cetak.",
    },
    {
      title: "Lihat pratinjau hasil kompresi",
      body: "Ketuk \"Pratinjau\". Aplikasi ini menampilkan perbandingan ukuran file asli dan hasil kompresi berdampingan, plus miniatur beberapa halaman pertama. Perbesar untuk memeriksa ketajaman teks.",
    },
    {
      title: "Bandingkan dengan aslinya",
      body: "Geser bolak-balik antara halaman asli dan hasil kompresi. Jika ada yang terlihat menurun kualitasnya (jarang terjadi dengan \"Seimbang\"), coba preset lain.",
    },
    {
      title: "Simpan atau bagikan",
      body: "Simpan file hasil kompresi dengan nama baru (agar file asli tetap utuh) atau bagikan langsung lewat email, Drive, atau aplikasi pesan apa pun.",
    },
  ],
  tips: [
    "Jika sebuah file didominasi halaman hasil pindaian, preset \"Kecil\" bisa menghasilkan pengurangan lebih dari 90% tanpa penurunan kualitas yang terlihat.",
    "Untuk PDF yang sebagian besar berisi teks, hasil kompresinya lebih kecil (10-30%), file jenis ini memang sudah efisien.",
    "Membagi PDF berukuran besar sebelum dikompres membuat prosesnya lebih cepat di HP lama dan memberi Anda lebih banyak fleksibilitas saat mengirim.",
    "Selalu simpan file aslinya sampai Anda memastikan hasil kompresi terlihat baik, setelah dikompres, kualitas asli tidak bisa dikembalikan.",
    "PDF hasil kompresi tetap mempertahankan teks yang dapat dicari dan tanda tangan. Kompresi menyasar gambar dan tabel font, bukan lapisan konten.",
  ],
  mobileNote:
    "Kompresi berjalan sepenuhnya di perangkat. Anda bisa mengompres kontrak yang sensitif di pesawat, dengan mode pesawat aktif, dan tidak satu byte pun meninggalkan HP Anda.",
  faq: [
    {
      q: "Seberapa besar PDF saya akan mengecil?",
      a: "PDF yang penuh gambar atau hasil pindaian biasanya mengecil 60-90%. PDF yang penuh teks mengecil lebih sedikit, sering kali hanya 10-30%. Aplikasi ini menampilkan ukuran pasti sebelum dan sesudah.",
    },
    {
      q: "Apakah gambarnya akan jadi buram?",
      a: "\"Seimbang\" dan \"Tinggi\" menjaga gambar tetap tajam pada zoom tampilan normal. \"Kecil\" menerapkan kompresi gambar yang lebih kuat, cocok untuk email, tapi Anda akan melihat sedikit penurunan ketajaman jika memperbesar jauh.",
    },
    {
      q: "Bisakah saya mengompres PDF yang dilindungi kata sandi?",
      a: "Bisa, setelah Anda memasukkan kata sandinya. Aplikasi ini menangani dekripsi, mengompres kontennya, dan bisa menerapkan kembali perlindungan saat disimpan.",
    },
    {
      q: "Apa bedanya mengompres dengan membuat file ZIP?",
      a: "File ZIP membungkus PDF dalam wadah lain tapi jarang memperkecilnya, PDF sudah memakai kompresi internal. Kompresi PDF yang sesungguhnya menulis ulang gambar dan font di dalam file itu sendiri, dan itu satu-satunya cara mendapatkan penghematan ukuran yang nyata.",
    },
    {
      q: "Bisakah saya mengompres beberapa PDF sekaligus?",
      a: "Bisa. Tambahkan beberapa file dalam satu sesi dan aplikasi ini akan memprosesnya satu per satu, menerapkan preset yang sama untuk masing-masing.",
    },
  ],
  related: [
    { label: "Kompres PDF — ikhtisar lengkap", path: "/compress-pdf" },
    { label: "Konverter PDF", path: "/pdf-converter" },
    {
      label: "Cara menggabungkan file PDF",
      path: "/guides/how-to-merge-pdf-files",
    },
  ],
  parentHub: { label: "Kompres PDF", path: "/compress-pdf" },
};

export default content;
