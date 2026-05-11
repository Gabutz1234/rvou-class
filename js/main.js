/**
 * main.js — Entry point untuk Portfolio Website
 *
 * Menginisialisasi semua modul JavaScript setelah DOM siap.
 * Urutan inisialisasi penting: darkMode harus pertama agar
 * tidak ada flash of unstyled content (FOUC).
 */

(function () {
  'use strict';

  /**
   * Inisialisasi semua modul aplikasi.
   * Setiap modul dibungkus try-catch agar error satu modul
   * tidak menghentikan modul lainnya.
   */
  function initApp() {
    // 1. Dark mode — harus pertama untuk mencegah FOUC
    try {
      if (typeof initDarkMode === 'function') {
        initDarkMode();
      }
    } catch (err) {
      console.error('[main] Gagal menginisialisasi dark mode:', err);
    }

    // 2. Navbar (sticky, hamburger, active link)
    try {
      if (typeof initNavbar === 'function') {
        initNavbar();
      }
    } catch (err) {
      console.error('[main] Gagal menginisialisasi navbar:', err);
    }

    // 3. Smooth scroll
    try {
      if (typeof initSmoothScroll === 'function') {
        initSmoothScroll();
      }
    } catch (err) {
      console.error('[main] Gagal menginisialisasi smooth scroll:', err);
    }

    // 4. Animasi scroll (Intersection Observer)
    try {
      if (typeof initAnimations === 'function') {
        initAnimations();
      }
    } catch (err) {
      console.error('[main] Gagal menginisialisasi animasi:', err);
    }

    // 5. Filter & render proyek
    try {
      if (typeof initFilter === 'function' && typeof projects !== 'undefined') {
        initFilter(projects);
      }
    } catch (err) {
      console.error('[main] Gagal menginisialisasi filter proyek:', err);
    }

    // 6. Formulir kontak
    try {
      if (typeof initContactForm === 'function') {
        initContactForm();
      }
    } catch (err) {
      console.error('[main] Gagal menginisialisasi formulir kontak:', err);
    }

    // 7. Tahun footer
    try {
      const yearEl = document.getElementById('footer-year');
      if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
      }
    } catch (err) {
      console.error('[main] Gagal mengatur tahun footer:', err);
    }
  }

  // Jalankan setelah DOM sepenuhnya dimuat
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    // DOM sudah siap (script dimuat dengan defer atau di akhir body)
    initApp();
  }
})();
