/**
 * contactForm.js — Validasi dan handling formulir kontak
 *
 * Menggunakan HTML5 Constraint Validation API dengan pesan error kustom.
 *
 * Fungsi yang diekspor ke global scope:
 *   - initContactForm()
 *   - validateField(field)
 *   - showError(field, message)
 *   - clearError(field)
 */

(function () {
  'use strict';

  /** Apakah form sudah pernah disubmit (untuk real-time validation) */
  let formSubmitted = false;

  /**
   * Menampilkan pesan error di bawah field.
   * @param {HTMLElement} field
   * @param {string} message
   */
  function showError(field, message) {
    const errorEl = document.getElementById(field.id + '-error');
    if (errorEl) {
      errorEl.textContent = message;
    }
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
  }

  /**
   * Menyembunyikan pesan error untuk field.
   * @param {HTMLElement} field
   */
  function clearError(field) {
    const errorEl = document.getElementById(field.id + '-error');
    if (errorEl) {
      errorEl.textContent = '';
    }
    field.classList.remove('error');
    field.setAttribute('aria-invalid', 'false');
  }

  /**
   * Menghasilkan pesan error yang ramah pengguna berdasarkan validity state.
   * @param {HTMLInputElement|HTMLTextAreaElement} field
   * @returns {string}
   */
  function getErrorMessage(field) {
    const validity = field.validity;
    const label = field.labels && field.labels[0]
      ? field.labels[0].textContent.replace('*', '').trim()
      : field.name;

    if (validity.valueMissing) {
      return `${label} wajib diisi.`;
    }
    if (validity.typeMismatch && field.type === 'email') {
      return 'Masukkan alamat email yang valid (contoh: nama@domain.com).';
    }
    if (validity.tooShort) {
      return `${label} minimal ${field.minLength} karakter.`;
    }
    if (validity.tooLong) {
      return `${label} maksimal ${field.maxLength} karakter.`;
    }
    return field.validationMessage || `${label} tidak valid.`;
  }

  /**
   * Memvalidasi satu field menggunakan HTML5 Constraint Validation API.
   * @param {HTMLInputElement|HTMLTextAreaElement} field
   * @returns {boolean} true jika valid
   */
  function validateField(field) {
    // Cek apakah nilai hanya whitespace (untuk field required)
    if (field.required && field.value.trim() === '') {
      field.setCustomValidity('Nilai tidak boleh hanya spasi.');
    } else {
      field.setCustomValidity(''); // Reset custom validity
    }

    if (field.checkValidity()) {
      clearError(field);
      return true;
    } else {
      showError(field, getErrorMessage(field));
      return false;
    }
  }

  /**
   * Memvalidasi semua field dalam form.
   * @param {HTMLFormElement} form
   * @returns {boolean} true jika semua field valid
   */
  function validateForm(form) {
    const fields = form.querySelectorAll('input, textarea');
    let isValid = true;

    fields.forEach(function (field) {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  /**
   * Menangani submit formulir.
   * @param {SubmitEvent} event
   */
  function handleSubmit(event) {
    event.preventDefault();
    formSubmitted = true;

    const form = event.target;
    const isValid = validateForm(form);

    if (!isValid) {
      // Fokus ke field pertama yang error
      const firstError = form.querySelector('.error');
      if (firstError) {
        firstError.focus();
      }
      return;
    }

    // Simulasi pengiriman (tidak ada backend)
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Mengirim...';
    }

    // Simulasi delay jaringan
    setTimeout(function () {
      // Tampilkan pesan sukses
      const successEl = document.getElementById('form-success');
      if (successEl) {
        successEl.classList.remove('hidden');
        successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Reset form
      form.reset();
      formSubmitted = false;

      // Kembalikan tombol
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Kirim Pesan';
      }

      // Sembunyikan pesan sukses setelah 5 detik
      setTimeout(function () {
        if (successEl) {
          successEl.classList.add('hidden');
        }
      }, 5000);
    }, 800);
  }

  /**
   * Menginisialisasi formulir kontak:
   * - Event listener submit
   * - Event listener input untuk real-time validation (setelah submit pertama)
   */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Submit handler
    form.addEventListener('submit', handleSubmit);

    // Real-time validation (aktif setelah submit pertama)
    const fields = form.querySelectorAll('input, textarea');
    fields.forEach(function (field) {
      field.addEventListener('input', function () {
        if (formSubmitted) {
          validateField(field);
        }
      });

      field.addEventListener('blur', function () {
        if (formSubmitted) {
          validateField(field);
        }
      });
    });
  }

  // Ekspos ke global scope
  window.initContactForm = initContactForm;
  window.validateField   = validateField;
  window.showError       = showError;
  window.clearError      = clearError;
})();
