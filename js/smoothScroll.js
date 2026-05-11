/**
 * smoothScroll.js — Smooth scroll ke section yang dituju saat tautan diklik
 *
 * Menggunakan CSS scroll-behavior: smooth (sudah diset di style.css)
 * dengan fallback JavaScript untuk browser lama.
 */

(function () {
  'use strict';

  /**
   * Melakukan smooth scroll ke elemen dengan ID yang diberikan.
   * Memperhitungkan tinggi navbar yang fixed.
   * @param {string} targetId - ID elemen tujuan (tanpa #)
   */
  function scrollToSection(targetId) {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    // Gunakan scrollTo dengan behavior smooth jika didukung
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    } else {
      // Fallback untuk browser lama
      window.scrollTo(0, targetTop);
    }
  }

  /**
   * Menginisialisasi smooth scroll:
   * Menambahkan event listener pada semua tautan navigasi yang mengarah ke section.
   */
  function initSmoothScroll() {
    // Tangkap semua tautan dengan href yang dimulai dengan #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;

        const targetId = href.slice(1); // Hapus karakter '#'
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
          event.preventDefault();
          scrollToSection(targetId);
        }
      });
    });
  }

  // Ekspos ke global scope
  window.initSmoothScroll = initSmoothScroll;
  window.scrollToSection  = scrollToSection;
})();
