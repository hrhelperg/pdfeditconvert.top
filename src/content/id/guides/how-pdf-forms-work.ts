import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-pdf-forms-work",
  h1: "Cara Kerja Formulir PDF, Kolom, AcroForm, dan Pindaian Non-Interaktif",
  description:
    "Di baliknya, formulir PDF adalah salah satu dari dua hal: sekumpulan kolom interaktif yang menumpuk di atas halaman, atau gambar non-interaktif tanpa kolom sama sekali. Cara masing-masing dibuat dan alasannya penting untuk pengisian.",
  updated: "2026-06-01",
  intro: [
    "Memahami apa yang sebenarnya terjadi di dalam formulir PDF sangat membantu, karena ini menjelaskan hampir semua keanehan yang akan Anda temui. Halaman PDF adalah tata letak yang tetap, teks, garis, dan gambar diletakkan pada koordinat yang pasti. Formulir menambahkan lapisan terpisah di atas tata letak itu: kolom interaktif, masing-masing berupa kotak kecil yang tahu dirinya adalah kolom teks, kotak centang, menu dropdown, atau area tanda tangan.",
    "Saat sebuah formulir punya lapisan kolom itu, aplikasi pembaca PDF Anda menggambar kotak-kotak yang bisa diedit persis di tempat yang ditentukan perancangnya. Anda mengetik, dan aplikasi pembaca menyimpan input Anda di kolom itu, bukan membakarnya ke halaman. Pemisahan inilah alasan jawaban yang sudah diisi kadang bisa terhapus, berubah, atau gagal tersimpan, jawaban itu hidup di lapisan kolom, bukan di halamannya sendiri, sampai Anda menguncinya.",
    "Formulir non-interaktif sama sekali tidak punya lapisan kolom. Mereka hanyalah gambar halaman, jadi tidak ada apa pun yang interaktif untuk diketik; Anda menambahkan objek teks Anda sendiri di atasnya. Panduan ini menjelaskan cara kedua jenis formulir dibuat, apa yang dilakukan proses mengunci, dan alasan formulir yang sama bisa berperilaku berbeda di aplikasi yang berbeda.",
  ],
  steps: [
    {
      title: "Lapisan halaman: tetap dan final",
      body: "Setiap PDF punya lapisan halaman dengan teks dan grafik yang terkunci pada posisi pastinya. Inilah yang membuat PDF terlihat identik di mana saja. Pada formulir non-interaktif, garis pertanyaan dan labelnya sepenuhnya berada di lapisan ini.",
    },
    {
      title: "Lapisan kolom: interaktif di atasnya",
      body: "Formulir interaktif menambahkan lapisan kolom formulir di atas halaman, kolom teks, kotak centang, tombol radio, menu dropdown, kolom tanda tangan. Setiap kolom punya nama dan jenis yang dikenali aplikasi pembaca.",
    },
    {
      title: "Pengisian: input tersimpan di kolom",
      body: "Saat Anda mengetik ke kolom interaktif, jawaban Anda tersimpan di kolom itu, bukan tergabung ke halaman. Itu sebabnya Anda bisa menghapus dan mengetik ulang, dan itu juga sebabnya aplikasi pembaca yang berbeda bisa menampilkannya sedikit berbeda.",
    },
    {
      title: "Menyimpan: mempertahankan nilai kolom",
      body: "Menyimpan formulir yang sudah diisi menyimpan nilai kolomnya di dalam file. Sebagian aplikasi pembaca dasar hanya mengizinkan Anda mencetak, bukan menyimpan datanya, inilah alasan klasik jawaban yang sudah diisi hilang saat Anda membuka kembali filenya.",
    },
    {
      title: "Mengunci: menggabungkan kolom ke halaman",
      body: "Mengunci mendorong nilai kolom turun ke lapisan halaman, mengubahnya menjadi isi halaman yang permanen. Setelah dikunci, jawaban tidak bisa diedit atau dihapus lagi, berguna tepat sebelum Anda mengirim kembali formulirnya.",
    },
  ],
  tips: [
    "Bayangkan formulir interaktif sebagai lembaran transparan berisi kotak-kotak yang bisa diedit, diletakkan di atas halaman tercetak. Mengunci merekatkan lembaran itu untuk selamanya.",
    "Karena nilai kolom terpisah dari halamannya, formulir yang sama bisa terlihat sedikit berbeda di berbagai aplikasi pembaca, font dan ukuran kolom tidak selalu identik.",
    "Jika jawaban terus menghilang, lapisan kolomnya tidak tersimpan. Gunakan alat yang benar-benar menulis nilai kolom ke dalam file, atau kunci formulirnya sebelum menutup.",
    "Sebagian formulir tingkat lanjut (sering disebut formulir XFA atau formulir dinamis) memakai struktur yang lebih kompleks dan tidak sepenuhnya didukung banyak aplikasi pembaca, jenis inilah yang paling sering bermasalah.",
    "Formulir non-interaktif sama sekali tidak punya lapisan kolom, jadi datanya tidak pernah hilang seperti formulir interaktif, teks yang Anda tambahkan begitu saja menempel di halaman.",
  ],
  mobileNote:
    "Aplikasi PDF Editor membaca lapisan kolom sebuah formulir begitu Anda membukanya, jadi kolom interaktif langsung bisa diketuk. Untuk formulir non-interaktif tanpa lapisan kolom, aplikasi ini memungkinkan Anda menambahkan teks dan tanda langsung ke halaman, lalu mengekspornya, dan Anda bisa mengunci hasilnya sehingga jawaban Anda terkunci sebelum dikirim.",
  faq: [
    {
      q: "Kolom formulir PDF terbuat dari apa?",
      a: "Kolom formulir adalah lapisan objek interaktif, kotak teks, kotak centang, tombol radio, menu dropdown, dan kolom tanda tangan, yang diletakkan di atas tata letak halaman yang tetap, masing-masing punya nama dan jenis yang dikenali aplikasi pembaca.",
    },
    {
      q: "Kenapa jawaban yang sudah saya isi kadang hilang?",
      a: "Nilai kolom tersimpan terpisah dari halamannya. Jika aplikasi pembaca Anda hanya mencetak, bukan menyimpan datanya, atau Anda tidak menyimpan dengan benar, lapisan kolom itu tidak tertulis ke dalam file dan jawabannya hilang.",
    },
    {
      q: "Apa artinya mengunci formulir PDF?",
      a: "Mengunci menggabungkan nilai kolom ke dalam halaman itu sendiri, membuatnya permanen. Formulirnya tidak lagi bisa diedit, tapi jawabannya akan tampil dan tercetak secara konsisten di mana saja.",
    },
    {
      q: "Apa itu AcroForm?",
      a: "AcroForm adalah jenis formulir PDF interaktif standar yang didukung secara luas. Ada juga jenis dinamis yang lebih kompleks (XFA) yang tidak ditangani dengan baik oleh banyak aplikasi pembaca, itu sebabnya sebagian formulir hanya berfungsi di software tertentu.",
    },
    {
      q: "Kenapa formulir yang sama terlihat berbeda di dua aplikasi?",
      a: "Karena setiap aplikasi pembaca menggambar sendiri lapisan kolomnya. Tampilan formulir bisa berbeda antar aplikasi pembaca PDF, terutama font dan ukuran kolomnya. Mengunci sebelum membagikannya menghindari kejutan semacam ini.",
    },
  ],
  related: [
    { label: "Apa itu formulir PDF?", path: "/guides/what-is-a-pdf-form" },
    { label: "Cara menyimpan formulir PDF yang sudah diisi", path: "/guides/how-to-save-a-filled-pdf-form" },
    { label: "Masalah kompatibilitas formulir PDF", path: "/guides/pdf-form-compatibility-problems" },
    { label: "PDF Editor — isi di HP", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
