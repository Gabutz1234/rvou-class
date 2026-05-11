/**
 * navbar.js — Logika navbar: sticky, hamburger menu, active link
 *
 * Fungsi yang diekspor ke global scope:
 *   - initNavbar()
 *   - toggleMobileMenu()
 *   - updateActiveLink(sectionId)
 */

(function () {
  'use strict';

  let isMenuOpen = false;

  /**
   * Menampilkan atau menyembunyikan menu navigasi mobile.
   */
  function toggleMobileMenu() {
    const mobileMenu   = document.getElementById('mobile-menu');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const iconHamburger = document.getElementById('icon-hamburger');
    const iconClose     = document.getElementById('icon-close');

    if (!mobileMenu) return;

    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('hidden', !isMenuOpen);

    // Perbarui aria-expanded dan aria-label
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute('aria-expanded', String(isMenuOpen));
      hamburgerBtn.setAttribute(
        'aria-label',
        isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'
      );
    }

    // Tukar ikon hamburger ↔ close
    if (iconHamburger && iconClose) {
      iconHamburger.classList.toggle('hidden', isMenuOpen);
      iconClose.classList.toggle('hidden', !isMenuOpen);
    }
  }

  /**
   * Menghapus class 'active' dari semua nav link,
   * lalu menambahkannya ke link yang sesuai dengan sectionId.
   * @param {string} sectionId
   */
  function updateActiveLink(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      const target = link.getAttribute('data-target');
      link.classList.toggle('active', target === sectionId);
    });
  }

  /**
   * Menginisialisasi navbar:
   * - Hamburger menu toggle
   * - Tutup menu saat tautan diklik (mobile)
   * - IntersectionObserver untuk highlight active link
   */
  function initNavbar() {
    // Hamburger button
    const hamburgerBtn = document.getElementById('hamburger-btn');
    if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', toggleMobileMenu);
    }

    // Tutup mobile menu saat tautan diklik
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (isMenuOpen) {
          toggleMobileMenu();
        }
      });
    });

    // IntersectionObserver untuk active link saat scroll
    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger saat section berada di tengah viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          updateActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // Ekspos ke global scope
  window.initNavbar        = initNavbar;
  window.toggleMobileMenu  = toggleMobileMenu;
  window.updateActiveLink  = updateActiveLink;
})();
