/**
 * animations.js — Animasi fade-in menggunakan Intersection Observer API
 *
 * Elemen dengan class `animate-on-scroll` akan mendapat class `is-visible`
 * saat masuk ke dalam viewport, memicu transisi CSS yang didefinisikan
 * di style.css.
 *
 * Strategi performa:
 * - Menggunakan satu instance IntersectionObserver yang dibagi (shared observer)
 *   agar tidak membuat observer baru per elemen.
 * - Setelah animasi dipicu, elemen di-unobserve untuk membebaskan memori.
 * - Fallback graceful untuk browser yang tidak mendukung IntersectionObserver.
 */

(function () {
  'use strict';

  /** @type {IntersectionObserver|null} Instance observer yang dibagi */
  var sharedObserver = null;

  /**
   * Membuat atau mengembalikan shared IntersectionObserver.
   * @returns {IntersectionObserver|null}
   */
  function getObserver() {
    if (sharedObserver) return sharedObserver;

    if (!('IntersectionObserver' in window)) return null;

    sharedObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Berhenti mengobservasi setelah animasi dipicu (satu kali)
          sharedObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px', // Trigger sedikit sebelum elemen sepenuhnya terlihat
      threshold: 0.1,
    });

    return sharedObserver;
  }

  /**
   * Menginisialisasi IntersectionObserver untuk animasi scroll.
   * Mengobservasi semua elemen dengan class `animate-on-scroll`.
   */
  function initAnimations() {
    var elements = document.querySelectorAll('.animate-on-scroll');

    // Jika browser tidak mendukung IntersectionObserver, tampilkan semua elemen
    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = getObserver();
    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /**
   * Menambahkan elemen tunggal ke shared observer.
   * Berguna untuk elemen yang dirender secara dinamis (misal: project cards).
   * @param {HTMLElement} element
   */
  function observeElement(element) {
    if (!element) return;

    // Tambahkan class animate-on-scroll jika belum ada
    if (!element.classList.contains('animate-on-scroll')) {
      element.classList.add('animate-on-scroll');
    }

    // Jika browser tidak mendukung IntersectionObserver, langsung tampilkan
    if (!('IntersectionObserver' in window)) {
      element.classList.add('is-visible');
      return;
    }

    var observer = getObserver();
    observer.observe(element);
  }

  // Ekspos ke global scope
  window.initAnimations = initAnimations;
  window.observeElement = observeElement;
})();
