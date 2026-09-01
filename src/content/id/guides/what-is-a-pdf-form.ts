import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "what-is-a-pdf-form",
  h1: "Apa Itu Formulir PDF? Formulir Interaktif dan Non-Interaktif Dijelaskan",
  description:
    "Formulir PDF adalah dokumen yang dibuat untuk mengumpulkan jawaban, kadang dengan kolom asli yang bisa Anda ketik, kadang berupa formulir non-interaktif yang Anda tulisi langsung di atasnya. Apa artinya dan cara membedakannya.",
  updated: "2026-06-01",
  intro: [
    "Formulir PDF adalah PDF apa pun yang dirancang untuk mengumpulkan informasi dari orang yang membukanya: lamaran kerja, dokumen pajak, lembar persetujuan, atau formulir pemesanan. Yang membedakan formulir dari PDF biasa adalah maksudnya, formulir mengharapkan Anda menambahkan jawaban, bukan sekadar membacanya. Bagian yang membingungkan, dua formulir bisa terlihat identik di layar tapi berperilaku sangat berbeda saat Anda mencoba mengisinya.",
    "Bedanya terletak pada ada tidaknya kolom interaktif. Formulir interaktif punya kolom yang sudah dibuat perancangnya langsung di dalam file, ketuk salah satunya dan kursor muncul, siap Anda ketik. Formulir non-interaktif tidak punya kolom sama sekali; pada dasarnya ini hanyalah gambar sebuah formulir, sering kali hasil pindaian dokumen kertas asli, di mana garis dan label adalah bagian dari gambar, bukan area aktif. Keduanya sama-sama formulir dan sama-sama bisa diisi, tapi caranya berbeda.",
    "Mengenali jenis formulir yang Anda hadapi hanya butuh waktu sekitar dua detik dan menghemat banyak rasa frustrasi. Panduan ini menjelaskan apa itu formulir PDF sebenarnya, dua jenis yang akan Anda temui, dan cara membedakannya sebelum mulai mengisi.",
  ],
  steps: [
    {
      title: "Kenali bahwa formulir dibuat untuk diselesaikan",
      body: "Berbeda dari laporan atau kontrak yang hanya Anda baca, formulir punya bagian kosong yang menunggu jawaban, baris nama, kotak centang, area tanda tangan. Maksud itulah yang menjadikannya formulir, apa pun cara pembuatannya.",
    },
    {
      title: "Kenali formulir interaktif",
      body: "Buka PDF-nya dan ketuk atau klik di tempat jawaban seharusnya diisi. Jika kursor teks muncul, kolom tersorot, atau kotak centang berubah saat diklik, berarti formulir itu punya kolom interaktif yang sengaja ditambahkan perancangnya.",
    },
    {
      title: "Kenali formulir non-interaktif",
      body: "Jika mengetuk bagian kosong tidak terjadi apa-apa, tidak ada kursor, tidak ada sorotan, berarti formulirnya non-interaktif. Garis dan labelnya sudah menyatu dengan gambar halaman, jadi tidak ada tempat untuk langsung mengetik.",
    },
    {
      title: "Periksa cara formulir dibuat",
      body: "Formulir yang diekspor dari software desain formulir cenderung interaktif. Formulir yang dicetak, ditandatangani tangan, lalu dipindai lagi hampir selalu non-interaktif. Mengetahui asal-usulnya membantu menebak jenisnya.",
    },
    {
      title: "Pilih cara pengisian yang tepat",
      body: "Formulir interaktif: ketuk lalu ketik. Formulir non-interaktif: tambahkan kotak teks dan tanda centang Anda sendiri di atas halaman. Editor PDF yang mumpuni bisa menangani keduanya dalam satu file yang sama.",
    },
  ],
  tips: [
    "Cara tercepat mengujinya adalah tes ketuk, sentuh sebuah baris kosong. Kursor muncul berarti interaktif; tidak ada reaksi berarti non-interaktif.",
    "Formulir bisa saja setengah interaktif: sebagian kolomnya asli, sebagian lagi tidak ada. Isi kolom yang asli, lalu tambahkan teks secara manual untuk bagian yang kosong.",
    "Formulir interaktif lebih mudah diisi dengan rapi, tapi formulir non-interaktif tetap sepenuhnya bisa dikerjakan, Anda hanya perlu menempatkan sendiri teksnya.",
    "Jika Anda merancang formulir untuk orang lain, buatlah interaktif sebisa mungkin; ini membuat penerima jauh lebih mudah menyelesaikannya.",
    "Tampilan formulir bisa berbeda antar aplikasi pembaca PDF, jadi kolom yang tampak begini di HP Anda bisa terlihat sedikit berbeda di komputer orang lain.",
  ],
  mobileNote:
    "Di HP, aplikasi PDF Editor memeriksa apakah sebuah formulir punya kolom interaktif begitu Anda membukanya: jika ada, Anda tinggal ketuk dan ketik; jika tidak, Anda menempatkan teks dan tanda centang di mana pun di halaman. Kedua caranya memungkinkan Anda menandatangani dan mengekspor salinan yang sudah selesai tanpa perlu mencetak.",
  faq: [
    {
      q: "Apakah setiap PDF adalah formulir?",
      a: "Tidak. PDF baru dianggap formulir kalau memang dibuat untuk mengumpulkan jawaban, kolom, kotak centang, baris tanda tangan. Laporan atau artikel adalah PDF, tapi bukan formulir.",
    },
    {
      q: "Bagaimana saya tahu formulir PDF saya interaktif atau non-interaktif?",
      a: "Ketuk atau klik bagian kosong tempat jawaban seharusnya diisi. Jika kursor muncul dan Anda bisa mengetik, berarti interaktif. Jika tidak terjadi apa-apa, berarti formulir non-interaktif dan Anda menambahkan teks di atasnya.",
    },
    {
      q: "Bisakah saya mengisi formulir PDF yang non-interaktif?",
      a: "Bisa. Formulir non-interaktif tidak punya kolom, tapi Anda bisa menempatkan teks dan tanda centang Anda sendiri di mana pun di halaman memakai editor PDF, lalu mengekspor file yang sudah selesai.",
    },
    {
      q: "Kenapa ada orang mengirim formulir non-interaktif, bukan yang interaktif?",
      a: "Biasanya karena formulir itu awalnya kertas lalu dipindai, atau karena alat yang membuatnya tidak menambahkan kolom. Ini bukan kesalahan, hanya butuh cara pengisian yang sedikit berbeda.",
    },
    {
      q: "Apakah formulir interaktif selalu lebih baik?",
      a: "Formulir interaktif lebih mudah diselesaikan dan terlihat lebih rapi, tapi kadang memakai fitur yang tidak didukung sebagian aplikasi pembaca. Formulir non-interaktif yang dibuat dengan baik tetap andal di mana saja, meski butuh sedikit lebih banyak usaha untuk mengisinya.",
    },
  ],
  related: [
    { label: "PDF yang bisa diedit atau formulir PDF yang bisa diisi", path: "/guides/editable-pdf-vs-fillable-pdf" },
    { label: "Cara kerja formulir PDF", path: "/guides/how-pdf-forms-work" },
    { label: "Cara mengisi formulir PDF", path: "/guides/how-to-fill-out-a-pdf-form" },
    { label: "PDF yang bisa diedit atau PDF berupa gambar", path: "/guides/editable-pdf-vs-flat-pdf" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
