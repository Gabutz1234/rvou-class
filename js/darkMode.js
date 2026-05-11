/**
 * darkMode.js — Logika dark mode toggle + localStorage
 *
 * Strategi: menambahkan/menghapus class `dark` pada elemen <html>.
 * Tailwind dikonfigurasi dengan darkMode: 'class'.
 *
 * localStorage key: 'portfolio-theme'
 * Nilai: 'dark' | 'light'
 *
 * @typedef {'dark' | 'light'} ThemePreference
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio-theme';
  const htmlEl = document.documentElement;

  /**
   * Membaca preferensi tema dari localStorage.
   * Jika tidak ada, membaca prefers-color-scheme dari sistem.
   * @returns {ThemePreference}
   */
  function getThemePreference() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    // Fallback ke preferensi sistem
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /**
   * Menerapkan tema ke DOM dan memperbarui ikon toggle.
   * @param {ThemePreference} theme
   */
  function applyTheme(theme) {
    if (theme === 'dark') {
      htmlEl.classList.add('dark');
    } else {
      htmlEl.classList.remove('dark');
    }
    updateToggleIcon(theme);
  }

  /**
   * Memperbarui ikon tombol dark mode toggle.
   * @param {ThemePreference} theme
   */
  function updateToggleIcon(theme) {
    const sunIcon  = document.getElementById('icon-sun');
    const moonIcon = document.getElementById('icon-moon');
    if (!sunIcon || !moonIcon) return;

    if (theme === 'dark') {
      // Tema gelap aktif → tampilkan ikon matahari (untuk beralih ke terang)
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    } else {
      // Tema terang aktif → tampilkan ikon bulan (untuk beralih ke gelap)
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  }

  /**
   * Mengubah tema antara terang dan gelap,
   * lalu menyimpan preferensi ke localStorage.
   */
  function toggleDarkMode() {
    const isDark = htmlEl.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, newTheme);
    applyTheme(newTheme);
  }

  /**
   * Menginisialisasi dark mode:
   * - Membaca preferensi dari localStorage / sistem
   * - Menerapkan tema
   * - Menambahkan event listener pada tombol toggle
   */
  function initDarkMode() {
    const preference = getThemePreference();
    applyTheme(preference);

    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleDarkMode);
    }
  }

  // Ekspos ke scope global agar dapat dipanggil dari main.js
  window.initDarkMode   = initDarkMode;
  window.toggleDarkMode = toggleDarkMode;
  window.getThemePreference = getThemePreference;
})();
