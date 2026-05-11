# Requirements Document

## Introduction

Website portofolio pribadi yang dibangun menggunakan HTML5, Tailwind CSS, dan Vanilla JavaScript. Website ini berfungsi sebagai media presentasi diri secara profesional, menampilkan identitas, keahlian, proyek-proyek yang pernah dikerjakan, dan informasi kontak. Website dirancang responsif untuk berbagai ukuran layar dan memberikan pengalaman pengguna yang baik.

## Glossary

- **Website**: Aplikasi web portofolio pribadi yang dibangun dengan HTML5, Tailwind CSS, dan Vanilla JavaScript
- **Visitor**: Pengguna yang mengakses website portofolio
- **Hero_Section**: Bagian utama halaman yang pertama kali terlihat saat website dibuka, berisi nama dan tagline
- **About_Section**: Bagian yang menampilkan informasi singkat tentang pemilik portofolio
- **Skills_Section**: Bagian yang menampilkan daftar keahlian teknis dan non-teknis
- **Projects_Section**: Bagian yang menampilkan kartu-kartu proyek yang pernah dikerjakan
- **Contact_Section**: Bagian yang menyediakan formulir kontak dan informasi kontak
- **Navbar**: Komponen navigasi di bagian atas halaman
- **Project_Card**: Komponen kartu yang menampilkan informasi ringkas sebuah proyek
- **Contact_Form**: Formulir yang memungkinkan Visitor mengirim pesan
- **Dark_Mode_Toggle**: Tombol untuk beralih antara tema terang dan gelap
- **Smooth_Scroll**: Perilaku scroll halus saat berpindah antar section

---

## Requirements

### Requirement 1: Navigasi dan Struktur Halaman

**User Story:** As a Visitor, I want to navigate between sections easily, so that I can quickly find the information I need.

#### Acceptance Criteria

1. THE Website SHALL menyediakan satu halaman (single-page) dengan section: Hero, About, Skills, Projects, dan Contact.
2. THE Navbar SHALL menampilkan tautan navigasi ke setiap section di halaman.
3. WHEN Visitor mengklik tautan navigasi, THE Website SHALL melakukan Smooth_Scroll ke section yang dituju.
4. WHILE Visitor melakukan scroll, THE Navbar SHALL tetap terlihat di bagian atas halaman (sticky/fixed).
5. WHEN Visitor membuka website di perangkat mobile (lebar layar < 768px), THE Navbar SHALL menampilkan tombol hamburger menu sebagai pengganti tautan navigasi horizontal.
6. WHEN Visitor mengklik tombol hamburger menu, THE Navbar SHALL menampilkan atau menyembunyikan menu navigasi vertikal.

---

### Requirement 2: Hero Section

**User Story:** As a Visitor, I want to see a compelling introduction when I first open the website, so that I immediately understand who the portfolio owner is.

#### Acceptance Criteria

1. THE Hero_Section SHALL menampilkan nama lengkap pemilik portofolio.
2. THE Hero_Section SHALL menampilkan tagline atau jabatan profesional pemilik portofolio.
3. THE Hero_Section SHALL menampilkan tombol Call-to-Action yang mengarahkan Visitor ke Projects_Section.
4. THE Hero_Section SHALL menampilkan tombol Call-to-Action kedua yang mengarahkan Visitor ke Contact_Section.
5. THE Hero_Section SHALL mengisi seluruh tinggi viewport (100vh) saat pertama kali halaman dibuka.

---

### Requirement 3: About Section

**User Story:** As a Visitor, I want to read a brief biography of the portfolio owner, so that I can understand their background and experience.

#### Acceptance Criteria

1. THE About_Section SHALL menampilkan deskripsi singkat tentang latar belakang dan pengalaman pemilik portofolio.
2. THE About_Section SHALL menampilkan foto atau avatar pemilik portofolio.
3. THE About_Section SHALL menampilkan tautan unduhan untuk file CV/resume dalam format PDF.
4. WHEN Visitor mengklik tautan unduhan CV, THE Website SHALL mengunduh file CV ke perangkat Visitor.

---

### Requirement 4: Skills Section

**User Story:** As a Visitor, I want to see the portfolio owner's skills, so that I can assess their technical capabilities.

#### Acceptance Criteria

1. THE Skills_Section SHALL menampilkan daftar keahlian teknis yang dikelompokkan berdasarkan kategori (contoh: Frontend, Backend, Tools).
2. THE Skills_Section SHALL menampilkan setiap keahlian beserta ikon atau label yang representatif.
3. THE Skills_Section SHALL menampilkan minimal 6 keahlian teknis.

---

### Requirement 5: Projects Section

**User Story:** As a Visitor, I want to browse the portfolio owner's projects, so that I can evaluate the quality and variety of their work.

#### Acceptance Criteria

1. THE Projects_Section SHALL menampilkan minimal 3 Project_Card.
2. THE Project_Card SHALL menampilkan judul proyek, deskripsi singkat, dan daftar teknologi yang digunakan.
3. THE Project_Card SHALL menampilkan tautan ke repositori kode (contoh: GitHub).
4. THE Project_Card SHALL menampilkan tautan ke demo langsung proyek (jika tersedia).
5. WHEN Visitor mengarahkan kursor ke Project_Card, THE Project_Card SHALL menampilkan efek visual hover.
6. WHERE fitur filter tersedia, THE Projects_Section SHALL memungkinkan Visitor memfilter proyek berdasarkan teknologi atau kategori.

---

### Requirement 6: Contact Section

**User Story:** As a Visitor, I want to send a message to the portfolio owner, so that I can reach out for collaboration or inquiries.

#### Acceptance Criteria

1. THE Contact_Section SHALL menampilkan Contact_Form dengan field: nama, alamat email, dan pesan.
2. WHEN Visitor mengklik tombol kirim pada Contact_Form, THE Contact_Form SHALL memvalidasi bahwa semua field telah diisi.
3. WHEN Visitor mengisi field email dengan format yang tidak valid, THE Contact_Form SHALL menampilkan pesan kesalahan yang deskriptif di bawah field email.
4. IF field wajib pada Contact_Form tidak diisi, THEN THE Contact_Form SHALL menampilkan pesan kesalahan yang deskriptif dan mencegah pengiriman formulir.
5. THE Contact_Section SHALL menampilkan tautan ke profil media sosial atau profesional pemilik (contoh: LinkedIn, GitHub).

---

### Requirement 7: Tema Terang dan Gelap (Dark Mode)

**User Story:** As a Visitor, I want to switch between light and dark themes, so that I can view the website comfortably in different lighting conditions.

#### Acceptance Criteria

1. THE Website SHALL menyediakan Dark_Mode_Toggle yang dapat diakses dari Navbar.
2. WHEN Visitor mengklik Dark_Mode_Toggle, THE Website SHALL beralih antara tema terang dan tema gelap.
3. WHEN Visitor memuat ulang halaman, THE Website SHALL mempertahankan preferensi tema yang terakhir dipilih menggunakan localStorage.
4. WHEN sistem operasi Visitor menggunakan preferensi tema gelap, THE Website SHALL secara otomatis menerapkan tema gelap saat pertama kali dibuka.

---

### Requirement 8: Responsivitas

**User Story:** As a Visitor, I want the website to display correctly on any device, so that I can access the portfolio from my phone, tablet, or desktop.

#### Acceptance Criteria

1. THE Website SHALL menampilkan tata letak yang sesuai pada lebar layar minimal 320px hingga 1920px.
2. THE Projects_Section SHALL menampilkan Project_Card dalam satu kolom pada layar mobile (< 768px), dua kolom pada layar tablet (768px–1023px), dan tiga kolom pada layar desktop (≥ 1024px).
3. THE Skills_Section SHALL menyesuaikan jumlah kolom tampilan keahlian berdasarkan lebar layar.
4. THE About_Section SHALL menampilkan foto dan teks secara vertikal pada layar mobile dan secara horizontal pada layar desktop.

---

### Requirement 9: Performa dan Aksesibilitas

**User Story:** As a Visitor, I want the website to load quickly and be accessible, so that I have a smooth and inclusive browsing experience.

#### Acceptance Criteria

1. THE Website SHALL memuat halaman utama dalam waktu kurang dari 3 detik pada koneksi broadband standar.
2. THE Website SHALL menyediakan atribut `alt` yang deskriptif pada setiap elemen gambar.
3. THE Website SHALL menggunakan elemen HTML5 semantik (contoh: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
4. THE Website SHALL memastikan rasio kontras warna teks terhadap latar belakang memenuhi standar WCAG 2.1 level AA (rasio minimal 4.5:1 untuk teks normal).
5. THE Website SHALL dapat dinavigasi menggunakan keyboard (tab navigation).
