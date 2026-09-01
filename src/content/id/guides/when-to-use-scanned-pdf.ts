import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-scanned-pdf",
  h1: "Kapan Menggunakan PDF Hasil Pindaian (dan Kapan Tidak)",
  description:
    "PDF hasil pindaian menyelesaikan masalah spesifik, dari kertas ke digital. PDF jenis ini juga lebih besar, kurang bisa dicari, dan lebih sulit diedit. Kapan pertukaran itu sepadan.",
  updated: "2026-05-29",
  intro: [
    "PDF hasil pindaian menyelesaikan satu masalah spesifik: mengubah kertas menjadi file digital yang bisa dibagikan, diarsipkan, dan dilihat di perangkat apa pun. PDF jenis ini melakukan itu dengan baik. Tapi juga lebih besar dibanding PDF yang setara hasil ketikan, tidak bisa dicari tanpa OCR, lebih sulit diedit, dan sering kali beresolusi lebih rendah dari sumbernya. Memindai dokumen yang sudah ada dalam bentuk digital hampir selalu adalah langkah yang salah.",
    "Aturannya singkat. Pindai kertas yang memang tidak punya sumber digital. Jangan memindai apa pun yang sudah Anda punya sebagai dokumen Word, tangkapan layar, atau ekspor PDF. Godaan untuk mencetak-lalu-memindai demi 'mengunci' sebuah dokumen bisa dimengerti, tapi biasanya tidak perlu — ekspor PDF langsung melakukan hal yang sama dengan lebih baik.",
    "Panduan ini menjelaskan kapan sebaiknya memindai dan kapan tidak. Sebagian besar terasa intuitif begitu dijelaskan; masalahnya adalah godaan untuk memindai sering kali lebih kuat daripada kebutuhan sesungguhnya.",
  ],
  steps: [
    {
      title: "Gunakan PDF hasil pindaian saat satu-satunya sumber adalah kertas",
      body: "Kontrak lama, catatan tulisan tangan, struk kertas, dokumen yang dikirim lewat pos, formulir yang ditandatangani tangan. Apa pun yang ada secara fisik dan perlu menjadi digital. Pindai ke PDF di HP Anda atau scanner flatbed menghasilkan PDF yang bersih.",
    },
    {
      title: "Jangan memindai dokumen yang sudah Anda punya secara digital",
      body: "Jika Anda punya dokumen Word-nya, PDF sumbernya, atau hasil ekspornya, gunakan itu. Mencetak-lalu-memindai menghilangkan akurasi tampilan, membuat file lebih besar, dan menghilangkan kemampuan pencarian. Tidak ada manfaatnya.",
    },
    {
      title: "Jangan memindai hanya untuk 'mengunci' sebuah dokumen",
      body: "Mengekspor ulang dari sumbernya ke PDF sudah mengunci isinya. Memindai tidak menambah keamanan; justru menghilangkan kemampuan pencarian dan kualitas teks tanpa membuat filenya lebih sulit diubah.",
    },
    {
      title: "Gunakan OCR jika Anda memindai dan butuh kemampuan pencarian",
      body: "OCR mengubah gambar teks hasil pindaian menjadi teks yang bisa dicari di baliknya. Tanpa itu, PDF hasil pindaian hanyalah gambar dari kata-kata — bisa dibaca tapi tidak bisa dicari.",
    },
    {
      title: "Kompres hasil pindaian sebelum dibagikan",
      body: "PDF hasil pindaian adalah PDF terbesar yang akan Anda temui sehari-hari. Kompres PDF di browser Anda mengecilkannya secara drastis tanpa penurunan kualitas yang terlihat jelas, terutama untuk dokumen berisi teks saja.",
    },
    {
      title: "Pindai pada resolusi yang tepat",
      body: "200–300 DPI untuk dokumen yang akan dibaca di layar. 300 DPI untuk apa pun yang mungkin akan dicetak. 600 DPI setara kualitas foto dan memboroskan ruang untuk teks.",
    },
  ],
  tips: [
    "Sebagian besar momen 'aku perlu memindai ini' ternyata sebenarnya 'aku punya ini secara digital tapi lupa'. Cari dulu sumbernya.",
    "Ekspor PDF langsung lebih bersih daripada cetakan yang dipindai dalam segala aspek yang bisa diukur: lebih tajam, lebih kecil, dapat dicari, dapat diedit.",
    "Hasil pindaian HP kini setara kualitas flatbed untuk dokumen biasa berkat deteksi tepi dan penyesuaian kontras.",
    "Hasil pindaian yang sudah melalui OCR bisa dicari, tapi teksnya tidak sempurna. Perlakukan hasil OCR sebagai perkiraan, bukan yang pasti benar.",
    "Jangan memindai hanya agar file baru 'terlihat resmi'. Formatnya tetap sama; tidak ada yang peduli apakah itu hasil pindaian atau ekspor.",
  ],
  mobileNote:
    "HP adalah alat yang tepat untuk memindai sehari-hari — kameranya selalu ada di tangan Anda, deteksi tepi menghasilkan hasil yang bersih, dan PDF hasilnya langsung bisa dipakai. Fitur pemindaian di aplikasi PDF Editor dibuat untuk ini, dengan penangkapan multihalaman dan perapian langsung di perangkat.",
  faq: [
    {
      q: "Perlukah saya memindai dokumen yang sudah saya punya sebagai file Word?",
      a: "Tidak. Ekspor langsung ke PDF. Memindai menurunkan resolusi, membuat file lebih besar, dan menghilangkan kemampuan pencarian.",
    },
    {
      q: "Apakah PDF hasil pindaian lebih 'resmi' daripada hasil ekspor?",
      a: "Tidak. Keduanya sama-sama PDF. Keresmian datang dari tanda tangan dan isinya, bukan dari asal-usul apakah itu hasil pindaian.",
    },
    {
      q: "Kapan memindai benar-benar membantu?",
      a: "Saat sumbernya adalah kertas. Kontrak yang dikirim lewat pos, catatan tulisan tangan, formulir kertas dengan tulisan tangan. Memindai adalah satu-satunya cara untuk mendigitalkan itu semua.",
    },
    {
      q: "Perlukah saya menjalankan OCR pada setiap hasil pindaian?",
      a: "Ya, jika alat Anda mendukungnya. Hasil pindaian yang dapat dicari jauh lebih berguna dalam jangka panjang, dan OCR tidak mengubah tampilan visualnya.",
    },
    {
      q: "Seberapa besar seharusnya ukuran PDF hasil pindaian?",
      a: "Beberapa ratus KB sampai beberapa MB untuk dokumen biasa. Hasil pindaian yang jauh lebih besar dari itu diuntungkan dengan kompresi.",
    },
  ],
  related: [
    { label: "Pindai ke PDF — pemindaian kamera HP", path: "/scan-to-pdf" },
    { label: "Cara memindai dokumen ke PDF dengan HP", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Cara memperbaiki kualitas PDF hasil pindaian", path: "/guides/how-to-fix-scanned-pdf-quality" },
    { label: "PDF yang bisa diedit atau PDF berupa gambar", path: "/guides/editable-pdf-vs-flat-pdf" },
  ],
  parentHub: { label: "Pindai ke PDF — pemindaian kamera HP", path: "/scan-to-pdf" },
};

export default content;
