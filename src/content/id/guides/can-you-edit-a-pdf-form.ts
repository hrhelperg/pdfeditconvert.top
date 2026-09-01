import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "can-you-edit-a-pdf-form",
  h1: "Apakah Formulir PDF Bisa Diedit? Yang Bisa dan Tidak Bisa Diubah",
  description:
    "Mengedit pertanyaan pada formulir PDF berbeda dari mengisinya. Bagian mana yang bisa diedit, bagian mana yang terkunci, dan cara mengubah formulir yang hanya Anda punya dalam bentuk PDF jadi.",
  updated: "2026-06-01",
  intro: [
    "“Apakah formulir PDF bisa diedit?” biasanya menyembunyikan dua pertanyaan yang berbeda. Pertama: bisakah saya mengisinya, mengetik jawaban saya ke kolomnya? Hampir selalu bisa. Kedua: bisakah saya mengubah formulirnya sendiri, mengganti kata pada sebuah pertanyaan, menambah kolom, memperbaiki label? Itu sepenuhnya bergantung pada cara formulir itu dibuat dan apakah formulirnya sudah dikunci.",
    "Mengisi formulir adalah kasus sehari-hari dan jarang jadi masalah. Mengedit struktur formulir jauh lebih sulit, dan bisa tidaknya bergantung pada tiga hal: apakah file itu punya teks asli yang bisa diedit atau hanya hasil pindaian non-interaktif, apakah pembuatnya menerapkan keamanan yang memblokir perubahan, dan apakah Anda punya alat yang mampu mengedit kolom formulir, bukan sekadar mengisinya.",
    "Panduan ini memisahkan kedua pertanyaan itu dengan jelas, lalu membahas apa yang secara realistis mungkin dilakukan saat Anda hanya punya PDF jadinya, termasuk batasan yang sebenarnya, karena sebagian formulir memang sengaja dibuat agar tahan terhadap pengeditan.",
  ],
  steps: [
    {
      title: "Tentukan jenis pengeditan yang Anda maksud",
      body: "Mengisi jawaban adalah satu hal; mengubah kata-kata, tata letak, atau kolom formulir adalah hal lain. Yang pertama mudah dan memang diharapkan; yang kedua adalah yang biasanya dimaksud orang dengan “mengedit formulir”, dan ini jauh lebih terbatas.",
    },
    {
      title: "Periksa apakah teksnya bisa diedit atau hanya hasil pindaian non-interaktif",
      body: "Coba pilih teks asli formulirnya. Jika teksnya terseleksi, isinya asli dan berpotensi bisa diedit. Jika tidak ada yang terseleksi, berarti ini hasil pindaian non-interaktif, gambar sebuah formulir, dan mengeditnya berarti harus menjalankan OCR dulu atau membangun ulang tata letaknya.",
    },
    {
      title: "Periksa adanya pembatasan keamanan",
      body: "Sebagian formulir punya izin yang mengizinkan pengisian tapi memblokir pengeditan, bahkan melarang perubahan tanpa kata sandi. Jika editor PDF menampilkan alat pengeditan yang berwarna abu-abu (tidak bisa dipakai), file itu kemungkinan besar memang sengaja dibatasi.",
    },
    {
      title: "Gunakan editor yang mendukung formulir untuk kolom asli",
      body: "Alat pengisian hanya mengizinkan Anda menjawab kolom. Untuk menambah, memindahkan, mengganti nama, atau menghapus kolom, atau mengubah pertanyaan, Anda butuh editor yang membuka struktur formulirnya, tidak semua aplikasi bisa melakukan ini.",
    },
    {
      title: "Ketahui kapan harus meminta file sumbernya",
      body: "Jika Anda butuh perubahan yang besar, cara paling bersih biasanya adalah meminta dokumen asli yang bisa diedit (file Word atau sumber formulirnya) dari pembuatnya, daripada bersusah payah dengan PDF yang sudah dikunci.",
    },
  ],
  tips: [
    "Jika Anda hanya perlu menyelesaikan formulirnya, Anda sama sekali tidak perlu mengeditnya, cukup isi kolomnya atau tambahkan teks ke salinan non-interaktifnya.",
    "Mengedit formulir hasil pindaian berarti bekerja dengan sebuah gambar: Anda bisa menjalankan OCR untuk memulihkan teksnya, atau meletakkan teks dan kotak baru di atas yang lama.",
    "Mengganti nama atau menyusun ulang kolom formulir adalah pengeditan formulir yang sesungguhnya dan butuh alat yang dirancang untuk itu, aplikasi pembaca dasar tidak bisa melakukannya.",
    "Hormati formulir yang dikunci: pengaturan keamanan yang memblokir pengeditan biasanya memang pilihan sengaja dari pembuatnya, bukan gangguan yang perlu diakali.",
    "Simpan salinan yang belum dikunci jika Anda berencana merevisi jawaban Anda nanti; setelah formulir dikunci, jawabannya menjadi isi halaman yang tetap.",
  ],
  mobileNote:
    "Di HP, aplikasi PDF Editor memungkinkan Anda mengisi formulir apa pun dan mengedit isi dokumen selama filenya mengizinkan. Untuk formulir non-interaktif, Anda menambahkan teks langsung ke halaman, bukan mengedit kolom. Pengisian dan pengeditan ringan berjalan di perangkat, dengan file kosong aslinya tetap utuh untuk dipakai lagi.",
  faq: [
    {
      q: "Bisakah saya mengubah pertanyaan pada formulir PDF?",
      a: "Kadang bisa. Jika formulirnya punya teks asli yang bisa diedit dan tidak dikunci, editor yang mendukung formulir bisa mengubah kata-kata dan kolomnya. Jika itu hasil pindaian non-interaktif atau dibatasi keamanan, mengedit pertanyaannya jauh lebih sulit atau bahkan diblokir.",
    },
    {
      q: "Kenapa editor saya tidak mengizinkan saya mengubah formulir?",
      a: "Bisa karena filenya adalah gambar non-interaktif tanpa teks yang bisa diedit, atau karena izinnya mengizinkan pengisian tapi tidak mengizinkan pengeditan. Keduanya umum terjadi dan biasanya memang disengaja.",
    },
    {
      q: "Bisakah saya mengedit jawaban saya setelah mengisi formulir?",
      a: "Bisa, selama Anda menyimpannya sebagai formulir interaktif dan belum menguncinya. Setelah dikunci, jawabannya menyatu ke halaman dan menjadi tetap.",
    },
    {
      q: "Bagaimana cara mengedit formulir hasil pindaian yang tidak punya kolom?",
      a: "Perlakukan sebagai gambar. Jalankan OCR untuk memulihkan teks yang bisa diedit, atau cukup tempatkan teks dan tanda centang Anda sendiri di atasnya, untuk sekadar mengisinya, cara kedua ini biasanya sudah cukup.",
    },
    {
      q: "Lebih baik mengedit PDF-nya atau meminta file aslinya?",
      a: "Untuk perubahan besar, minta dokumen sumber dari pembuatnya jika memungkinkan. Mengedit PDF yang sudah jadi, dan mungkin sudah dikunci, selalu lebih terbatas dibanding bekerja dari file aslinya.",
    },
  ],
  related: [
    { label: "Apa itu formulir PDF?", path: "/guides/what-is-a-pdf-form" },
    { label: "PDF yang bisa diedit atau formulir PDF yang bisa diisi", path: "/guides/editable-pdf-vs-fillable-pdf" },
    { label: "Cara membuat formulir PDF yang bisa diisi", path: "/guides/how-to-create-a-fillable-pdf" },
    { label: "Mengapa saya tidak bisa mengedit PDF?", path: "/guides/why-cant-i-edit-a-pdf" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
