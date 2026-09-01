import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-a-corrupted-pdf",
  h1: "Cara Memperbaiki File PDF yang Rusak (yang Benar-Benar Berhasil)",
  description:
    "Sebagian besar PDF yang “rusak” sebenarnya bukan rusak, melainkan unduhan terpotong, ketidakcocokan aplikasi pembaca, atau penulisan file yang tidak selesai. Daftar periksa jujur untuk memulihkan file, dan kapan file benar-benar hilang.",
  updated: "2026-05-29",
  intro: [
    "Hampir setiap PDF yang disebut 'rusak' sebenarnya sesuatu yang tidak sedramatis itu: unduhan yang belum selesai, aplikasi pembaca yang menolak membaca file yang sedikit tidak lazim, atau penulisan yang terputus sebelum file-nya selesai disegel. Kerusakan sungguhan — di mana byte di dalam file benar-benar rusak — lebih jarang daripada yang orang kira, dan saat itu terjadi, pemulihannya paling banter hanya sebagian.",
    "Alasan ini penting adalah karena solusi untuk keempat penyebab tadi sama sekali berbeda. Mengunduh ulang hanya butuh beberapa detik; berganti aplikasi pembaca juga hanya beberapa detik; ekspor ulang bolak-balik butuh semenit; pemulihan tingkat byte yang sesungguhnya butuh berjam-jam kerja dan sering kali mustahil. Mengetahui file Anda masuk kategori mana menghemat banyak waktu.",
    "Panduan ini membahas diagnosisnya dalam urutan dari yang paling murah dulu, lalu menjelaskan apa yang harus dilakukan saat file-nya memang tidak bisa dipulihkan. Sebagian besar file kembali hidup di langkah ketiga.",
  ],
  steps: [
    {
      title: "Unduh ulang atau terima ulang file-nya",
      body: "Unduhan yang terpotong terlihat identik dengan kerusakan dari sudut pandang aplikasi pembaca. Ambil file-nya lagi. Kalau salinan kedua terbuka, yang pertama tidak lengkap. Periksa ukuran byte-nya dibanding sumbernya kalau tercantum.",
    },
    {
      title: "Coba setidaknya dua aplikasi pembaca lain",
      body: "Browser, Preview, aplikasi pembaca mobile, dan aplikasi desktop semuanya menangani PDF dengan cara berbeda. File yang ditolak Acrobat kadang terbuka baik-baik saja di Chrome. Kalau bahkan satu aplikasi pembaca saja bisa membacanya, file-nya sebenarnya tidak rusak.",
    },
    {
      title: "Buka file-nya di aplikasi pembaca mana pun yang berhasil dan ekspor ulang",
      body: "Cetak-ke-PDF (macOS, Windows, Linux) atau 'Simpan sebagai PDF' dari aplikasi pembaca yang berhasil membangun ulang struktur file-nya. Salinan barunya sering terbuka di aplikasi pembaca yang menolak file aslinya.",
    },
    {
      title: "Lepas halaman satu per satu dengan PDF ke Gambar",
      body: "Kalau tidak ada aplikasi pembaca yang bisa merender seluruh file tapi sebagian menampilkan konten parsial, ekspor tiap halaman sebagai PNG lewat PDF ke Gambar. Anda kemudian bisa menyusun ulang PDF baru dari PNG-PNG itu dengan Gambar ke PDF — kehilangan pencarian dan kemampuan edit tapi menyelamatkan isinya.",
    },
    {
      title: "Periksa header file-nya di editor teks biasa",
      body: "Buka file-nya di TextEdit, Notepad, atau VS Code. PDF sungguhan dimulai dengan %PDF- diikuti nomor versi. Kalau byte pertamanya sesuatu yang lain, file-nya bukan PDF — sudah diganti namanya, dilabeli salah, atau diganti.",
    },
    {
      title: "Minta salinan baru dari sumbernya",
      body: "Kalau tidak ada yang berhasil memulihkan file-nya, sumbernya masih punya versi aslinya. Ekspor ulang dari Word, Google Docs, atau apa pun yang menghasilkannya. Ini satu-satunya jalan yang mengembalikan kualitas penuh.",
    },
  ],
  tips: [
    "Jangan terus mengedit atau menggabungkan file yang berperilaku aneh. Anda akan menanamkan kerusakannya ke dalam file baru.",
    "Simpan aslinya yang rusak dengan aman sebelum mencoba perbaikan apa pun. Alat perbaikan kadang menimpa, dan file yang rusak itu mungkin masih menyimpan sebagian konten yang akan Anda kehilangan.",
    "File yang gagal tepat setelah penulisan terputus (mati listrik, dipaksa keluar saat menyimpan) sering tidak bisa diselamatkan — indeks struktural di akhir file-nya tidak pernah selesai ditulis.",
    "Hindari situs 'perbaikan PDF' yang menjanjikan keajaiban. Kebanyakan cuma melakukan ekspor ulang cetak-ke-PDF yang bisa Anda lakukan sendiri, dan mereka mengunggah file Anda.",
    "PDF yang dipulihkan lewat gambar kehilangan semua teks dan kemampuan pencarian sungguhan. Gunakan cara itu hanya untuk file di mana isinya lebih penting daripada kesetiaan file-nya.",
  ],
  mobileNote:
    "Di HP, penyebab umum PDF yang 'rusak' adalah unduhan seluler yang tidak stabil. Aplikasi PDF Editor menyimpan file secara lokal dan membiarkan Anda mengambil ulang dan membuka kembali, yang membersihkan masalah pemotongan tanpa perlu bolak-balik ke desktop.",
  faq: [
    {
      q: "Apa penyebab paling umum PDF yang rusak?",
      a: "Unduhan yang belum selesai. File-nya secara teknis tidak lengkap, bukan rusak, tapi aplikasi pembaca tidak bisa membedakannya. Mengunduh ulang memperbaiki sebagian besar kasus.",
    },
    {
      q: "Apakah ada alat perbaikan PDF yang sungguhan?",
      a: "Sebagian alat komersial mengklaim bisa memperbaiki, tapi kebanyakan yang mereka lakukan sama dengan ekspor ulang cetak-ke-PDF yang bisa Anda lakukan sendiri secara gratis. Perbaikan struktural sungguhan untuk PDF yang rusak parah adalah pekerjaan spesialis.",
    },
    {
      q: "Apakah mengompres PDF yang rusak akan membantu?",
      a: "Hanya kalau alat kompresinya bisa membaca file-nya. Kalau aplikasi pembaca Anda tidak bisa membukanya, tidak ada alat kompresi yang bisa juga. Kompresi bukan teknik perbaikan.",
    },
    {
      q: "Mengapa file hasil pemulihan saya kehilangan kolom formulir?",
      a: "Cetak-ke-PDF meratakan elemen interaktif menjadi piksel statis. Kolom formulir, anotasi, dan tanda tangan berubah menjadi gambar. Kalau Anda membutuhkannya kembali, minta ulang dari sumbernya.",
    },
    {
      q: "Bisakah ekstraksi gambar selalu menyelamatkan isinya?",
      a: "Hanya kalau ada aplikasi pembaca yang bisa merender halamannya sama sekali. Kalau file-nya tidak terbaca di mana pun, bahkan alat ekstraksi gambar pun akan gagal.",
    },
  ],
  related: [
    { label: "PDF ke Gambar — ekstrak halaman yang masih bisa diselamatkan", path: "/pdf-to-images" },
    { label: "Gambar ke PDF — susun ulang halaman setelah penyelamatan", path: "/image-to-pdf" },
    { label: "Mengapa PDF saya tidak mau terbuka?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Mengapa PDF saya kosong?", path: "/guides/why-is-my-pdf-blank" },
  ],
  parentHub: { label: "Alat PDF — gratis, berbasis browser", path: "/pdf-tools" },
};

export default content;
