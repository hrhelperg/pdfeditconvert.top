import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-scanned-documents-to-pdf",
  h1: "Cara Mengonversi Dokumen Hasil Pindaian ke PDF",
  description:
    "Sudah punya gambar hasil pindaian atau foto kertas? Gabungkan semuanya jadi satu PDF di browser, plus penjelasan soal OCR dan alasan hasil pindaian butuh OCR agar bisa dicari.",
  updated: "2026-05-23",
  intro: [
    "Ada perbedaan penting antara memindai sebuah dokumen dan mengonversi dokumen yang sudah dipindai. Jika Anda punya tumpukan kertas baru, Anda butuh alur pemindaian. Tapi seringnya Anda sudah punya gambarnya, sebuah pemindai flatbed menghasilkan folder berisi file JPEG, rekan kerja mengirim foto formulir yang sudah ditandatangani lewat email, atau galeri HP Anda penuh gambar berkas kertas. Tugasnya sekarang adalah mengumpulkan semua itu menjadi satu PDF yang rapi.",
    "Panduan ini membahas persis itu: menggabungkan gambar hasil pindaian yang sudah Anda punya menjadi satu PDF memakai alat gratis Gambar ke PDF, yang berjalan di browser Anda tanpa apa pun yang diunggah. Panduan ini juga menjelaskan bagian yang sering salah dipahami orang, bahwa hasil pindaian yang dikonversi adalah gambar dari teks, bukan teks yang dapat dicari, dan apa yang harus dilakukan jika Anda butuh kata-katanya kembali.",
    "Jika Anda masih perlu menangkap kertasnya terlebih dahulu, lihat panduan pemindaian khusus; panduan ini mengasumsikan gambarnya sudah ada.",
  ],
  steps: [
    {
      title: "Kumpulkan gambar hasil pindaian Anda",
      body: "Kumpulkan file JPG atau PNG dari pemindai, email, atau galeri kamera Anda ke satu tempat supaya Anda bisa menambahkannya sekaligus.",
    },
    {
      title: "Buka alat Gambar ke PDF",
      body: "Buka alat Gambar ke PDF di browser Anda. Alat ini menerima JPG, PNG, dan WebP serta memproses semuanya di perangkat Anda, tanpa unggah, tanpa akun.",
    },
    {
      title: "Tambahkan gambar sesuai urutan dokumen",
      body: "Seret hasil pindaiannya ke zona unggah. Gunakan panah untuk menaruh halaman dalam urutan yang benar, halaman satu formulir sebelum halaman dua.",
    },
    {
      title: "Buat PDF-nya",
      body: "Klik \"Buat PDF\". Setiap pindaian menjadi satu halaman, dan alat ini menggabungkannya menjadi satu dokumen secara lokal.",
    },
    {
      title: "Kompres jika ukurannya besar",
      body: "Hasil pindaian penuh gambar dan PDF-nya bisa besar. Jalankan lewat Kompres PDF agar masuk batas email atau unggahan, konten hasil pindaian sangat menyusut ukurannya dengan kehilangan kualitas yang nyaris tidak terlihat.",
    },
    {
      title: "Tambahkan teks yang dapat dicari jika perlu",
      body: "Hasil pindaian yang dikonversi adalah gambar, jadi teksnya tidak bisa dicari. Untuk membuatnya dapat dicari, jalankan pengenalan teks (OCR) dengan aplikasi PDF Editor, yang menambahkan lapisan teks tak terlihat di atas hasil pindaian.",
    },
  ],
  tips: [
    "Luruskan dan potong setiap hasil pindaian sebelum digabungkan, halaman yang miring akan tetap miring setelah masuk ke PDF.",
    "Resolusi yang konsisten antar halaman menghasilkan dokumen yang lebih rapi. Ukuran gambar yang sangat berbeda-beda membuat halaman terlihat melompat-lompat skalanya.",
    "Alat berbasis browser bisa menggabungkan hasil pindaian tapi tidak bisa membaca teks di dalamnya. Jika Anda perlu mencari atau menyalin kata-katanya, itu tugas OCR, yang ditangani aplikasi PDF Editor.",
    "Simpan hasil pindaian berwarna untuk apa pun yang punya stempel, sorotan, atau tanda tangan; beralih ke skala abu-abu hanya saat warna tidak menambah apa pun, karena itu memperkecil ukuran file.",
    "Beri nama file sesuai isi dan tanggalnya. \"Sewa-ditandatangani-2026-05.pdf\" jauh lebih mudah ditemukan lagi nanti dibanding deretan angka dari pemindai.",
  ],
  mobileNote:
    "Jika \"hasil pindaian\" Anda sebenarnya foto di HP, aplikasi PDF Editor adalah jalan pintasnya: mengubah gambar dari galeri kamera menjadi PDF, bisa menangkap halaman baru dengan deteksi tepi, dan bisa menjalankan pengenalan teks agar hasilnya dapat dicari, semuanya tanpa mengunggah apa pun.",
  faq: [
    {
      q: "Apa bedanya ini dengan memindai?",
      a: "Memindai menangkap kertas menjadi gambar sejak awal. Panduan ini mengasumsikan Anda sudah punya gambar hasil pindaiannya dan hanya perlu menggabungkannya menjadi satu PDF. Jika Anda masih perlu menangkap kertasnya, gunakan alur pemindaian.",
    },
    {
      q: "Apakah teks di PDF hasil pindaian saya akan dapat dicari?",
      a: "Tidak hanya dari konversi saja, hasil pindaian adalah gambar, jadi tidak ada lapisan teks. Jalankan OCR (pengenalan teks) dengan aplikasi PDF Editor untuk menambahkan lapisan yang dapat dicari di atas hasil pindaiannya.",
    },
    {
      q: "Apakah hasil pindaian saya diunggah?",
      a: "Tidak. Alat Gambar ke PDF memproses file di browser Anda, di perangkat Anda, jadi dokumen sensitif tetap privat.",
    },
    {
      q: "Kenapa PDF hasil pindaian saya begitu besar?",
      a: "Hasil pindaian pada dasarnya adalah foto, dan beberapa halaman beresolusi tinggi cepat menumpuk. Kompres PDF-nya, hasil pindaian yang penuh gambar biasanya sangat menyusut dengan kehilangan kualitas yang nyaris tidak terlihat.",
    },
    {
      q: "Bisakah saya memperbaiki halaman yang hasil pindaiannya miring?",
      a: "Bisa. Gunakan alat Putar PDF untuk menegakkan halaman yang bermasalah setelah digabungkan, atau perbaiki orientasi gambar sumbernya sebelum dikonversi.",
    },
  ],
  related: [
    { label: "Gambar ke PDF — gabungkan hasil pindaian di browser Anda", path: "/image-to-pdf" },
    { label: "Pindai ke PDF — tangkap kertas dengan kamera Anda", path: "/scan-to-pdf" },
    { label: "Cara memindai dokumen ke PDF dengan HP", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Cara mengompres PDF hasil pindaian", path: "/guides/how-to-compress-scanned-pdf" },
  ],
  parentHub: { label: "Pindai ke PDF", path: "/scan-to-pdf" },
};

export default content;
