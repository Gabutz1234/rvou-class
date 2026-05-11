# Tasks

## Task List

- [x] 1. Setup Struktur Proyek dan Konfigurasi Dasar
  - [x] 1.1 Buat struktur direktori proyek (css/, js/, assets/images/, data/)
  - [x] 1.2 Buat file `index.html` dengan boilerplate HTML5, meta tags responsif, dan integrasi Tailwind CSS via CDN
  - [x] 1.3 Buat file `css/style.css` dengan variabel CSS kustom dan konfigurasi Tailwind dark mode (`darkMode: 'class'`)
  - [x] 1.4 Buat file `js/main.js` sebagai entry point yang mengimpor dan menginisialisasi semua modul
  - [x] 1.5 Buat file `data/projects.js` dengan minimal 3 objek proyek sesuai data model `Project`
  - [x] 1.6 Tambahkan placeholder `assets/images/` dan `assets/cv.pdf` untuk aset statis

- [x] 2. Implementasi Navbar dan Navigasi (Requirement 1)
  - [x] 2.1 Buat struktur HTML navbar di `index.html` dengan tautan ke semua section (Hero, About, Skills, Projects, Contact) dan tombol hamburger menu
  - [x] 2.2 Buat file `js/navbar.js` dengan fungsi `initNavbar()` untuk sticky behavior menggunakan CSS `position: sticky` atau scroll event
  - [x] 2.3 Implementasi fungsi `toggleMobileMenu()` untuk menampilkan/menyembunyikan menu vertikal pada layar < 768px
  - [x] 2.4 Implementasi fungsi `updateActiveLink(sectionId)` menggunakan IntersectionObserver untuk highlight tautan aktif saat scroll
  - [x] 2.5 Buat file `js/smoothScroll.js` dengan logika smooth scroll ke section yang dituju saat tautan diklik

- [x] 3. Implementasi Dark Mode (Requirement 7)
  - [x] 3.1 Buat file `js/darkMode.js` dengan fungsi `initDarkMode()` yang membaca preferensi dari localStorage dan `prefers-color-scheme`
  - [x] 3.2 Implementasi fungsi `toggleDarkMode()` yang mengubah class `dark` pada `<html>` dan menyimpan preferensi ke localStorage
  - [x] 3.3 Tambahkan tombol `Dark_Mode_Toggle` di navbar dengan ikon yang berubah sesuai tema aktif
  - [x] 3.4 Terapkan utility class Tailwind `dark:*` pada semua section untuk mendukung tema gelap

- [x] 4. Implementasi Hero Section (Requirement 2)
  - [x] 4.1 Buat struktur HTML Hero Section dengan nama lengkap, tagline/jabatan profesional, dan dua tombol CTA
  - [x] 4.2 Pastikan Hero Section mengisi seluruh tinggi viewport (`min-h-screen` atau `h-screen`)
  - [x] 4.3 Hubungkan tombol CTA pertama ke Projects Section dan tombol CTA kedua ke Contact Section menggunakan smooth scroll

- [x] 5. Implementasi About Section (Requirement 3)
  - [x] 5.1 Buat struktur HTML About Section dengan foto/avatar, deskripsi biografi, dan tautan unduhan CV
  - [x] 5.2 Implementasi layout responsif: vertikal pada mobile, horizontal pada desktop menggunakan Tailwind flex/grid
  - [x] 5.3 Pastikan tautan unduhan CV menggunakan atribut `download` HTML5 untuk memicu unduhan file PDF
  - [x] 5.4 Tambahkan atribut `alt` deskriptif pada elemen gambar foto profil

- [-] 6. Implementasi Skills Section (Requirement 4)
  - [ ] 6.1 Buat struktur HTML Skills Section dengan pengelompokan keahlian berdasarkan kategori (Frontend, Backend, Tools)
  - [ ] 6.2 Tampilkan minimal 6 keahlian teknis dengan ikon atau label representatif
  - [ ] 6.3 Implementasi layout responsif kolom menggunakan Tailwind grid yang menyesuaikan lebar layar

- [~] 7. Implementasi Projects Section (Requirement 5)
  - [ ] 7.1 Buat file `js/filter.js` dengan fungsi `initFilter(projects)` yang mengekstrak tag unik dan merender tombol filter
  - [ ] 7.2 Implementasi fungsi `filterProjects(tag)` yang menampilkan/menyembunyikan Project Card berdasarkan tag yang dipilih
  - [ ] 7.3 Implementasi fungsi `renderProjects(projects)` yang merender Project Card ke DOM dari data `projects.js`
  - [ ] 7.4 Buat template HTML Project Card yang menampilkan judul, deskripsi, daftar teknologi, tautan repo, dan tautan demo (jika ada)
  - [ ] 7.5 Tambahkan efek hover visual pada Project Card menggunakan Tailwind transition dan transform utilities
  - [ ] 7.6 Implementasi layout responsif: 1 kolom mobile, 2 kolom tablet, 3 kolom desktop menggunakan Tailwind grid

- [~] 8. Implementasi Contact Section (Requirement 6)
  - [ ] 8.1 Buat struktur HTML Contact Form dengan field nama, email, dan pesan beserta atribut validasi HTML5 (`required`, `type="email"`, `minlength`)
  - [ ] 8.2 Buat file `js/contactForm.js` dengan fungsi `initContactForm()` yang menambahkan event listener `submit`
  - [ ] 8.3 Implementasi fungsi `validateField(field)` menggunakan HTML5 Constraint Validation API
  - [ ] 8.4 Implementasi fungsi `showError(field, message)` dan `clearError(field)` untuk menampilkan pesan error inline di bawah field
  - [ ] 8.5 Tambahkan `aria-live="polite"` dan `aria-describedby` pada elemen pesan error untuk aksesibilitas screen reader
  - [ ] 8.6 Tambahkan tautan ke profil media sosial/profesional (LinkedIn, GitHub) di Contact Section
  - [ ] 8.7 Implementasi feedback sukses setelah form disubmit dengan data valid

- [~] 9. Implementasi Animasi (Requirement 9 - Performa)
  - [ ] 9.1 Buat file `js/animations.js` dengan fungsi `initAnimations()` menggunakan IntersectionObserver API
  - [ ] 9.2 Tambahkan class `animate-on-scroll` pada elemen-elemen yang perlu animasi fade-in saat masuk viewport
  - [ ] 9.3 Definisikan keyframe animasi di `css/style.css` untuk efek fade-in yang halus

- [~] 10. Aksesibilitas dan Semantik HTML (Requirement 9)
  - [ ] 10.1 Pastikan semua section menggunakan elemen HTML5 semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
  - [ ] 10.2 Tambahkan atribut `alt` deskriptif pada semua elemen gambar
  - [ ] 10.3 Pastikan semua elemen interaktif memiliki `aria-label` atau teks yang deskriptif
  - [ ] 10.4 Verifikasi navigasi keyboard (tab order) berfungsi dengan benar di seluruh halaman

- [~] 11. Pengujian Unit dan Property-Based Tests
  - [ ] 11.1 Setup Vitest dan fast-check sebagai dev dependencies (atau via CDN untuk testing)
  - [ ] 11.2 Tulis unit test untuk `darkMode.js`: inisialisasi dari localStorage, toggle mengubah class `dark`
  - [ ] 11.3 Tulis unit test untuk `contactForm.js`: field valid lolos, field kosong gagal, email tidak valid gagal
  - [ ] 11.4 Tulis unit test untuk `filter.js`: filter 'all' menampilkan semua, filter spesifik menyembunyikan yang tidak relevan
  - [ ] 11.5 Tulis property-based test untuk Property 1 (Dark Mode Round-Trip): untuk semua tema awal, toggle dua kali mengembalikan tema semula
  - [ ] 11.6 Tulis property-based test untuk Property 2 (Persistensi Tema): untuk semua preferensi tema, reload halaman mempertahankan tema
  - [ ] 11.7 Tulis property-based test untuk Property 3 (Validasi Form Input Kosong): untuk semua kombinasi field dengan minimal satu kosong, form ditolak
  - [ ] 11.8 Tulis property-based test untuk Property 4 (Validasi Email): untuk semua string tanpa `@`, validasi email mengembalikan false
  - [ ] 11.9 Tulis property-based test untuk Property 5 (Filter Proyek): untuk semua tag dan data proyek, hasil filter hanya berisi proyek dengan tag tersebut
  - [ ] 11.10 Tulis property-based test untuk Property 6 (Render Project Card): untuk semua objek Project valid, card yang dirender mengandung semua informasi wajib

- [~] 12. Verifikasi Responsivitas dan Pengujian Akhir (Requirement 8)
  - [ ] 12.1 Verifikasi tampilan pada lebar layar 320px, 768px, 1024px, dan 1920px
  - [ ] 12.2 Verifikasi layout Projects Section: 1 kolom mobile, 2 kolom tablet, 3 kolom desktop
  - [ ] 12.3 Verifikasi layout About Section: vertikal pada mobile, horizontal pada desktop
  - [ ] 12.4 Verifikasi hamburger menu muncul dan berfungsi pada layar < 768px
  - [ ] 12.5 Verifikasi dark mode toggle berfungsi dan preferensi tersimpan setelah reload
