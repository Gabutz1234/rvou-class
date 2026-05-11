/**
 * filter.js — Filter dan render Project Cards
 *
 * Fungsi yang diekspor ke global scope:
 *   - initFilter(projects)
 *   - filterProjects(tag)
 *   - renderProjects(projects)
 */

(function () {
  'use strict';

  /** @type {import('../data/projects.js').Project[]} */
  let allProjects = [];

  /**
   * Merender semua Project Card ke dalam #projects-grid.
   * @param {Project[]} projectsToRender
   */
  function renderProjects(projectsToRender) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (projectsToRender.length === 0) {
      grid.innerHTML = '<p class="col-span-full text-center text-gray-500 dark:text-gray-400 py-12">Tidak ada proyek yang cocok dengan filter ini.</p>';
      return;
    }

    projectsToRender.forEach(function (project) {
      const card = createProjectCard(project);
      grid.appendChild(card);

      // Animasi masuk untuk card yang baru dirender
      if (typeof observeElement === 'function') {
        observeElement(card);
      }
    });
  }

  /**
   * Membuat elemen DOM untuk satu Project Card.
   * @param {Project} project
   * @returns {HTMLElement}
   */
  function createProjectCard(project) {
    const article = document.createElement('article');
    article.className = 'project-card';
    article.setAttribute('data-tags', JSON.stringify(project.tags));
    article.setAttribute('data-id', project.id);

    // Tautan demo (opsional)
    const demoLinkHtml = project.demoUrl
      ? `<a href="${escapeHtml(project.demoUrl)}" target="_blank" rel="noopener noreferrer"
            class="project-link" aria-label="Demo langsung proyek ${escapeHtml(project.title)} (membuka tab baru)">
           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
               d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
           </svg>
           Demo
         </a>`
      : '';

    // Tags HTML
    const tagsHtml = project.tags
      .map(function (tag) {
        return `<span class="project-tag">${escapeHtml(tag)}</span>`;
      })
      .join('');

    article.innerHTML = `
      <img
        src="${escapeHtml(project.imageUrl)}"
        alt="Thumbnail proyek ${escapeHtml(project.title)}"
        class="project-card-image"
        loading="lazy"
        onerror="this.style.display='none'"
      />
      <div class="project-card-body">
        <h3 class="project-card-title">${escapeHtml(project.title)}</h3>
        <p class="project-card-description">${escapeHtml(project.description)}</p>
        <div class="project-card-tags" aria-label="Teknologi yang digunakan">
          ${tagsHtml}
        </div>
        <div class="project-card-links">
          <a href="${escapeHtml(project.repoUrl)}" target="_blank" rel="noopener noreferrer"
             class="project-link" aria-label="Repositori kode proyek ${escapeHtml(project.title)} (membuka tab baru)">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Repo
          </a>
          ${demoLinkHtml}
        </div>
      </div>
    `;

    return article;
  }

  /**
   * Mengekstrak semua tag unik dari array proyek.
   * @param {Project[]} projectList
   * @returns {string[]}
   */
  function extractUniqueTags(projectList) {
    const tagSet = new Set();
    projectList.forEach(function (project) {
      project.tags.forEach(function (tag) {
        tagSet.add(tag);
      });
    });
    return Array.from(tagSet).sort();
  }

  /**
   * Merender tombol filter ke dalam #filter-container.
   * @param {string[]} tags
   */
  function renderFilterButtons(tags) {
    const container = document.getElementById('filter-container');
    if (!container) return;

    container.innerHTML = '';

    // Tombol "Semua"
    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.textContent = 'Semua';
    allBtn.setAttribute('data-filter', 'all');
    allBtn.setAttribute('aria-pressed', 'true');
    allBtn.addEventListener('click', function () {
      filterProjects('all');
    });
    container.appendChild(allBtn);

    // Tombol per tag
    tags.forEach(function (tag) {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.textContent = tag;
      btn.setAttribute('data-filter', tag);
      btn.setAttribute('aria-pressed', 'false');
      btn.addEventListener('click', function () {
        filterProjects(tag);
      });
      container.appendChild(btn);
    });
  }

  /**
   * Memfilter dan merender proyek berdasarkan tag yang dipilih.
   * Jika tag === 'all', tampilkan semua proyek.
   * @param {string} tag
   */
  function filterProjects(tag) {
    // Perbarui state tombol filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(function (btn) {
      const isActive = btn.getAttribute('data-filter') === tag;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    // Filter proyek
    const filtered = tag === 'all'
      ? allProjects
      : allProjects.filter(function (project) {
          return project.tags.includes(tag);
        });

    renderProjects(filtered);
  }

  /**
   * Menginisialisasi filter proyek:
   * - Menyimpan data proyek
   * - Merender tombol filter
   * - Merender semua proyek
   * @param {Project[]} projectsData
   */
  function initFilter(projectsData) {
    if (!Array.isArray(projectsData)) return;

    allProjects = projectsData;
    const tags = extractUniqueTags(allProjects);
    renderFilterButtons(tags);
    renderProjects(allProjects);
  }

  /**
   * Meng-escape karakter HTML untuk mencegah XSS.
   * @param {string} str
   * @returns {string}
   */
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Ekspos ke global scope
  window.initFilter      = initFilter;
  window.filterProjects  = filterProjects;
  window.renderProjects  = renderProjects;
  window.escapeHtml      = escapeHtml;
  window.createProjectCard = createProjectCard;
})();
