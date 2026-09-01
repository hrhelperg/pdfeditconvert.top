import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-contracts-as-pdf",
  h1: "Cara Mengirim Kontrak sebagai PDF (Tanda Tangan, Kunci, Kirim)",
  description:
    "Kontrak menuntut alur kerja PDF yang lebih ketat: mengunci isi, menerapkan tanda tangan, memberi watermark pada draf, dan menghasilkan file akhir yang bisa langsung ditandatangani balik pihak lain tanpa bolak-balik.",
  updated: "2026-05-29",
  intro: [
    "Kontrak adalah jenis dokumen di mana kesalahan penanganan PDF menyebabkan kerugian paling besar. Salinan bertanda tangan yang ternyata versi berbeda dari draf yang belum ditandatangani. Tanda tangan balik yang diterapkan pada file yang dikira penandatangan pertama sudah terkunci. Watermark draf yang terlupa masih ada di versi final. Tidak satu pun dari itu aneh; semuanya membawa orang ke sengketa sungguhan.",
    "Solusinya adalah alur kerja yang lebih ketat di sekitar tiga hal: mengunci isinya sebelum tanda tangan, menerapkan tanda tangan dalam urutan yang jelas, dan mengirim hasilnya sebagai file final yang pasti. Tidak satu pun butuh perangkat lunak kontrak yang mahal; yang dibutuhkan adalah penggunaan alat PDF dasar secara sengaja dan urutan yang jujur.",
    "Panduan ini membahas alur kerjanya seperti seharusnya berjalan — dari draf final lewat tanda tangan kedua pihak sampai ke PDF bertanda tangan balik yang bersih yang membuat pengacara senang. Panduan ini juga membahas apa yang harus dilakukan saat pihak lain ingin memakai platform tanda tangan mereka sendiri.",
  ],
  steps: [
    {
      title: "Finalkan isi kontraknya lebih dulu",
      body: "Semua negosiasi kembali ke sumbernya — Word, Pages, Docs. Jangan menandai perubahan langsung di PDF-nya. Ekspor ke PDF hanya saat kedua pihak sudah sepakat teksnya sudah terkunci.",
    },
    {
      title: "Hapus tanda draf dan watermark",
      body: "Hapus watermark DRAFT (Tambah Watermark ke PDF membiarkan Anda menghindari menambahkannya sejak awal pada versi final). PDF final seharusnya terlihat final.",
    },
    {
      title: "Tambahkan tanda tangan Anda lebih dulu",
      body: "Tanda Tangan PDF membiarkan Anda menambahkan tanda tangan yang diketik atau digambar di tempat yang tepat. Tandatangani dulu kalau Anda pihak yang memulai; pihak lain menandatangani balik PDF yang sudah punya tanda tangan Anda.",
    },
    {
      title: "Kunci file-nya sebelum dikirim",
      body: "Kalau alat Anda mendukungnya, terapkan pembatasan edit setelah menandatangani. Pihak lain bisa membaca dan menandatangani tapi tidak bisa mengubah isinya. Ini satu-satunya cara membekukan kontrak dengan percaya diri.",
    },
    {
      title: "Kirim dengan instruksi yang jelas",
      body: "Catatan pengantar singkat: 'Terlampir: kontrak bertanda tangan. Mohon tanda tangani balik di halaman 8 dan kirim kembali.' Satu kalimat menghemat bolak-balik pertanyaan.",
    },
    {
      title: "Terima file bertanda tangan balik dan arsipkan keduanya",
      body: "Saat PDF bertanda tangan balik tiba, simpan sebagai versi resmi. Simpan draf yang belum ditandatangani, salinan Anda yang bertanda tangan tunggal, dan salinan yang sudah lengkap ditandatangani dalam folder yang sama. Rantai versinya adalah jejak audit.",
    },
  ],
  tips: [
    "Jangan pakai PDF penandatanganan yang sama untuk kontrak kedua. Selalu mulai dengan ekspor baru untuk setiap kontrak baru — metadata bersih, tanda tangan bersih.",
    "Kalau pihak lain ingin memakai platform tanda tangan mereka (DocuSign, Adobe Sign, lainnya), ikuti punya mereka. Tidak sepadan bertengkar soal alat mana yang lebih rapi.",
    "Pastikan tanda tangan Anda terlihat khas. Nama yang diketik dalam huruf miring memang tanda tangan tapi terasa kurang disengaja dibanding yang digambar.",
    "Lembar sampul yang mencantumkan judul kontrak, tanggal, dan para pihak membuat pencarian kembali jauh lebih mudah daripada mengandalkan nama file saja.",
    "Beri watermark pada draf (DRAFT, NOT FOR SIGNATURE) selama negosiasi. Label yang terlihat mencegah tanda tangan balik yang tidak disengaja.",
  ],
  mobileNote:
    "Tanda tangan balik sering terjadi di HP — mitra yang meninjau di kereta, klien yang menandatangani di sela pertemuan. Aplikasi PDF Editor menangani ini dengan baik: tinjau kontraknya, tandatangani dengan jari di layar, kirim kembali tanpa harus memantul lewat desktop. File yang sudah ditandatangani keluar dari HP sebagai PDF yang bersih.",
  faq: [
    {
      q: "Apakah tanda tangan yang diketik pada PDF mengikat secara hukum?",
      a: "Di sebagian besar yurisdiksi, ya, untuk kontrak biasa. Sebagian kasus penggunaan khusus (akta yang dinotariskan, instrumen finansial tertentu) butuh lebih dari itu — periksa jenis kontraknya sebelum berasumsi.",
    },
    {
      q: "Haruskah kontraknya dilindungi kata sandi?",
      a: "Biasanya tidak. Kata sandi menambah hambatan tanpa banyak manfaat keamanan. Simpan kata sandi untuk lampiran yang sangat rahasia, bukan kontraknya sendiri.",
    },
    {
      q: "Bagaimana cara mengunci PDF setelah menandatangani?",
      a: "Banyak alat pengeditan, termasuk aplikasi PDF Editor, membiarkan Anda menerapkan pembatasan edit selama proses penandatanganan. Kunci setelah tanda tangan final, bukan selama negosiasi.",
    },
    {
      q: "Bagaimana kalau pihak lain mengedit PDF-nya setelah saya menandatangani?",
      a: "Mengunci file-nya sebelum dikirim membuat perubahan itu bisa terdeteksi. Bahkan tanpa penguncian, PDF bertanda tangan adalah versi resminya; pengeditan berikutnya membatalkan tanda tangannya.",
    },
    {
      q: "Haruskah saya selalu menandatangani lebih dulu?",
      a: "Kalau Anda pihak yang memulai, ya — itu menunjukkan Anda berkomitmen. Kalau Anda yang menandatangani balik, tandatangani file yang dikirim pihak lain daripada memulai dari awal.",
    },
  ],
  related: [
    { label: "Tanda Tangan PDF — tambahkan tanda tangan elektronik", path: "/sign-pdf" },
    { label: "Tambah Watermark ke PDF — beri label draf dengan jelas", path: "/add-watermark-to-pdf" },
    { label: "Cara membagikan PDF kepada klien", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Alur kerja PDF untuk bisnis kecil", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Tanda Tangan PDF — tanda tangan elektronik di mobile", path: "/sign-pdf" },
};

export default content;
