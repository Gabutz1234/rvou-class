/**
 * projects.js — Data proyek untuk Portfolio Website
 *
 * Berisi array objek proyek yang mengikuti data model Project.
 * File ini dimuat sebelum modul JS lainnya di index.html.
 *
 * @typedef {Object} Project
 * @property {string}      id          - Identifier unik proyek
 * @property {string}      title       - Judul proyek
 * @property {string}      description - Deskripsi singkat proyek
 * @property {string[]}    tags        - Daftar teknologi/kategori
 * @property {string}      repoUrl     - URL repositori kode
 * @property {string|null} demoUrl     - URL demo langsung, null jika tidak tersedia
 * @property {string}      imageUrl    - URL gambar thumbnail proyek
 */

// eslint-disable-next-line no-unused-vars
const projects = [
  {
    id: 'project-1',
    title: 'E-Commerce Dashboard',
    description:
      'Dashboard analitik untuk platform e-commerce dengan visualisasi data penjualan real-time, manajemen inventaris, dan laporan performa produk.',
    tags: ['JavaScript', 'Chart.js', 'REST API', 'CSS Grid'],
    repoUrl: 'https://github.com/username/ecommerce-dashboard',
    demoUrl: 'https://demo.example.com/ecommerce',
    imageUrl: 'assets/images/project-1.jpg',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description:
      'Aplikasi manajemen tugas berbasis web dengan fitur drag-and-drop, kolaborasi tim, notifikasi real-time, dan integrasi kalender.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    repoUrl: 'https://github.com/username/task-manager',
    demoUrl: 'https://demo.example.com/tasks',
    imageUrl: 'assets/images/project-2.jpg',
  },
  {
    id: 'project-3',
    title: 'Weather Forecast CLI',
    description:
      'Alat command-line untuk menampilkan prakiraan cuaca 7 hari menggunakan OpenWeatherMap API, dengan output berwarna dan format tabel.',
    tags: ['Python', 'REST API', 'CLI'],
    repoUrl: 'https://github.com/username/weather-cli',
    demoUrl: null,
    imageUrl: 'assets/images/project-3.jpg',
  },
  {
    id: 'project-4',
    title: 'Blog Platform API',
    description:
      'RESTful API untuk platform blog dengan autentikasi JWT, manajemen artikel, sistem komentar, dan fitur pencarian full-text.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'REST API'],
    repoUrl: 'https://github.com/username/blog-api',
    demoUrl: 'https://demo.example.com/blog-api',
    imageUrl: 'assets/images/project-4.jpg',
  },
  {
    id: 'project-5',
    title: 'UI Component Library',
    description:
      'Koleksi komponen UI yang dapat digunakan kembali, dibangun dengan React dan Tailwind CSS, dilengkapi dokumentasi Storybook.',
    tags: ['React', 'Tailwind CSS', 'Storybook', 'JavaScript'],
    repoUrl: 'https://github.com/username/ui-components',
    demoUrl: 'https://storybook.example.com',
    imageUrl: 'assets/images/project-5.jpg',
  },
];
