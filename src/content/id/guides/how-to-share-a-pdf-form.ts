import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-a-pdf-form",
  h1: "Cara Membagikan Formulir PDF agar Bisa Diisi Orang Lain",
  description:
    "Mengirim formulir kosong untuk diisi berbeda dari mengirim dokumen jadi. Cara membagikan formulir agar penerima benar-benar bisa mengisinya, dan cara mengumpulkan hasilnya.",
  updated: "2026-06-01",
  intro: [
    "Membagikan formulir PDF kedengarannya sepele, lampirkan, kirim, tapi ada perbedaan antara membagikan formulir kosong untuk diisi orang lain dan mengirim dokumen untuk mereka baca. Saat Anda membagikan formulir, penerima harus bisa mengisinya di perangkat apa pun yang mereka punya, dan salinan yang sudah mereka isi harus kembali dalam keadaan yang benar-benar bisa Anda pakai.",
    "Dua hal yang biasanya salah. Formulir tiba dengan cara yang menghilangkan atau menyembunyikan kolomnya, sehingga penerima tidak bisa mengetik. Atau jawaban yang kembali tidak konsisten, sebagian sudah dikunci, sebagian masih bisa diedit, sebagian lagi berupa foto hasil cetakan. Sedikit kehati-hatian di tahap pengiriman mencegah keduanya, dan membuat pengumpulan jawaban jauh lebih tidak merepotkan.",
    "Panduan ini membahas cara membagikan formulir kosong agar tetap bisa diisi, cara memberi instruksi yang jelas kepada penerima, dan cara menangani salinan yang sudah selesai saat kembali, tanpa mengarahkan apa pun lewat layanan unggahan pihak ketiga jika isinya sensitif.",
  ],
  steps: [
    {
      title: "Pastikan formulir kosongnya bisa diisi sebelum dikirim",
      body: "Buka formulir Anda dan periksa sendiri. Jika interaktif, pastikan kolomnya aktif; jika non-interaktif, pastikan ada ruang yang jelas untuk jawaban. Jangan kunci formulir yang masih kosong, itu akan menghilangkan kolom yang dibutuhkan penerima.",
    },
    {
      title: "Kirim filenya, bukan tautan ke alat konversi",
      body: "Lampirkan PDF-nya langsung ke email atau pesan, atau bagikan lewat drive yang sudah dipakai penerima. Hindari mengarahkan formulir yang sensitif lewat alat unggahan publik kalau lampiran biasa saja sudah cukup.",
    },
    {
      title: "Beritahu penerima cara mengisinya",
      body: "Catatan singkat sangat membantu: “Ketuk kolomnya untuk mengetik, atau tambahkan teks di atasnya kalau aplikasi pembaca Anda tidak menampilkan kolom, lalu ekspor salinan yang sudah selesai.” Arahkan pengguna HP ke aplikasi PDF yang sesungguhnya, bukan pratinjau email.",
    },
    {
      title: "Minta salinan yang sudah selesai dalam bentuk yang bisa dipakai",
      body: "Minta orang mengirim kembali PDF yang sudah disimpan atau dikunci, bukan foto hasil cetakan. Salinan yang terkunci tampil secara konsisten dan lebih mudah diarsipkan serta dibaca.",
    },
    {
      title: "Kumpulkan dan rapikan jawabannya",
      body: "Saat salinannya kembali, beri nama ulang berdasarkan nama pengisi dan tanggal agar tidak tercampur aduk. Simpan master kosongnya secara terpisah agar Anda selalu punya template bersih untuk dikirim ulang.",
    },
  ],
  tips: [
    "Jangan pernah mengunci formulir kosong yang Anda bagikan, mengunci akan menghilangkan kolomnya dan tidak menyisakan apa pun untuk diisi penerima.",
    "Jika penerima terus mengirim foto hasil cetakan, instruksi Anda perlu diperjelas soal mengisi di layar dan mengekspornya.",
    "Untuk formulir yang sensitif, lebih baik memakai lampiran langsung atau drive privat daripada situs “isi online” publik.",
    "Beri nama file yang jelas seperti “formulir-intake-kosong.pdf” agar penerima bisa membedakan master dari salinan yang sudah mereka isi.",
    "Perilaku formulir bisa berbeda antar aplikasi pembaca, jadi menyarankan satu aplikasi tertentu yang andal mencegah sebagian besar balasan “saya tidak bisa mengetik”.",
  ],
  mobileNote:
    "Penerima di HP bisa mengisi formulir Anda di aplikasi PDF Editor, aplikasi ini mengaktifkan kolom interaktif dan membiarkan orang menambahkan teks ke formulir non-interaktif, lalu mengekspor salinan yang sudah selesai untuk langsung dikirim kembali. Menyarankannya dalam pesan Anda membantu orang yang kalau tidak begitu akan terjebak di pratinjau email yang mengabaikan kolom.",
  faq: [
    {
      q: "Bagaimana cara membagikan formulir PDF agar orang bisa mengisinya?",
      a: "Kirim PDF yang bisa diisi sebagai lampiran langsung atau lewat drive bersama, dan jangan menguncinya lebih dulu. Beritahu penerima untuk membukanya di aplikasi PDF yang sesungguhnya, mengisi kolomnya atau menambahkan teks, lalu mengekspor salinan yang sudah selesai.",
    },
    {
      q: "Kenapa penerima saya tidak bisa mengetik di formulir yang saya kirim?",
      a: "Mereka biasanya membukanya di pratinjau email atau aplikasi pembaca yang mengabaikan kolom formulir, atau formulirnya memang non-interaktif. Sarankan aplikasi PDF khusus, dan beri tahu mereka bisa menambahkan teks di atasnya jika tidak ada kolom yang muncul.",
    },
    {
      q: "Haruskah saya membagikan formulir lewat layanan pengisian online?",
      a: "Untuk formulir biasa, cara ini bisa saja praktis, tapi untuk apa pun yang sensitif, lampiran langsung atau drive privat menjaga isinya tidak singgah di server pihak ketiga. Sesuaikan salurannya dengan tingkat sensitivitas isinya.",
    },
    {
      q: "Bagaimana seharusnya formulir yang sudah selesai kembali ke saya?",
      a: "Minta PDF yang sudah disimpan atau dikunci, bukan foto hasil cetakan. Salinan yang terkunci terlihat sama di mana saja dan jauh lebih mudah diarsipkan serta diproses.",
    },
    {
      q: "Bagaimana cara menjaga jawaban tetap rapi?",
      a: "Beri nama ulang setiap file yang kembali berdasarkan nama pengisi dan tanggal, simpan di satu folder, dan jaga master kosongnya tetap terpisah agar Anda selalu bisa mengirim ulang template yang bersih.",
    },
  ],
  related: [
    { label: "Cara mengirim formulir PDF yang sudah selesai diisi", path: "/guides/how-to-send-a-completed-pdf-form" },
    { label: "Cara mengirim formulir intake klien", path: "/guides/how-to-send-client-intake-forms" },
    { label: "Alur kerja pengumpulan dokumen dengan PDF", path: "/guides/document-collection-workflows-with-pdf" },
    { label: "Cara membagikan PDF kepada klien", path: "/guides/how-to-share-pdfs-with-clients" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
