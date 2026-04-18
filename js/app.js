// app.js — SPA logic for 快樂學習 iPAS 一次就過！

const POSTS_PER_PAGE = 8;

let state = {
  view: 'list',       // 'list' | 'post'
  currentPostId: null,
  filterLabel: null,
  filterArchive: null,
  searchQuery: '',
  page: 1,
};

// ===== Helpers =====
const $ = id => document.getElementById(id);
const qs = sel => document.querySelector(sel);

function filteredPosts() {
  let posts = [...POSTS];
  if (state.filterLabel) {
    posts = posts.filter(p => p.labels.includes(state.filterLabel));
  }
  if (state.filterArchive) {
    posts = posts.filter(p => p.date.startsWith(state.filterArchive));
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    posts = posts.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.labels.some(l => l.toLowerCase().includes(q))
    );
  }
  return posts;
}

function formatDate(d) {
  const [y, m] = d.split('-');
  const months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  return `${y} 年 ${months[parseInt(m)-1]} 月`;
}

// ===== Render: Post List =====
function renderList() {
  // Hero: show only on unfiltered homepage
  const hero = $('hero-section');
  if (hero) {
    const hasFilter = state.filterLabel || state.filterArchive || state.searchQuery;
    hero.style.display = hasFilter ? 'none' : '';
  }

  const posts = filteredPosts();
  const total = posts.length;
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
  if (state.page > totalPages) state.page = totalPages;

  const start = (state.page - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

  const postsGrid = $('posts-grid');

  if (pagePosts.length === 0) {
    postsGrid.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <p>找不到相關文章</p>
      </div>`;
    $('pagination').innerHTML = '';
    return;
  }

  postsGrid.innerHTML = pagePosts.map(post => `
    <article class="post-card" data-post-id="${post.id}" tabindex="0" role="article" aria-label="${post.title}">
      <div class="post-card-meta">
        <span class="date">${formatDate(post.date)}</span>
      </div>
      <h2 class="post-card-title">${post.title}</h2>
      <p class="post-card-excerpt">${post.excerpt}</p>
      <div class="post-card-footer">
        ${post.labels.map(l => `<span class="tag">${l}</span>`).join('')}
      </div>
    </article>
  `).join('');

  // Pagination
  if (totalPages <= 1) {
    $('pagination').innerHTML = '';
  } else {
    let paginationHTML = '';
    if (state.page > 1) {
      paginationHTML += `<button class="page-btn" data-page="${state.page - 1}">&#8249; 上頁</button>`;
    }
    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `<button class="page-btn ${i === state.page ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    if (state.page < totalPages) {
      paginationHTML += `<button class="page-btn" data-page="${state.page + 1}">下頁 &#8250;</button>`;
    }
    $('pagination').innerHTML = paginationHTML;
  }

  // Click handlers for cards
  postsGrid.querySelectorAll('.post-card').forEach(card => {
    const handler = () => openPost(card.dataset.postId);
    card.addEventListener('click', handler);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handler(); });
  });

  // Pagination click handlers
  $('pagination').querySelectorAll('.page-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.page = parseInt(btn.dataset.page);
      renderList();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// ===== Render: Post Detail =====
function openPost(postId) {
  const post = POSTS.find(p => p.id === postId);
  if (!post) return;

  state.view = 'post';
  state.currentPostId = postId;

  $('post-list-view').style.display = 'none';
  $('post-detail').style.display = 'block';

  $('post-detail-title').textContent = post.title;
  $('post-detail-date').textContent = formatDate(post.date);
  $('post-detail-labels').innerHTML = post.labels.map(l => `<span class="tag">${l}</span>`).join(' ');
  $('post-detail-body').innerHTML = post.content;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.pushState({ postId }, '', `#post-${postId}`);
}

function closePost() {
  state.view = 'list';
  state.currentPostId = null;
  $('post-list-view').style.display = 'block';
  $('post-detail').style.display = 'none';
  history.pushState({}, '', window.location.pathname);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== Render: Sidebar =====
function renderSidebar() {
  // Labels
  const labelList = $('label-list');
  labelList.innerHTML = ALL_LABELS.map(l => `
    <span class="label-chip ${state.filterLabel === l ? 'active' : ''}" data-label="${l}">${l}</span>
  `).join('');
  labelList.querySelectorAll('.label-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      if (state.filterLabel === chip.dataset.label) {
        state.filterLabel = null;
        chip.classList.remove('active');
      } else {
        state.filterLabel = chip.dataset.label;
        state.filterArchive = null;
        state.searchQuery = '';
        $('header-search-input').value = '';
      }
      state.page = 1;
      state.view = 'list';
      $('post-list-view').style.display = 'block';
      $('post-detail').style.display = 'none';
      renderList();
      renderSidebar();
    });
  });

  // Archive
  const archiveList = $('archive-list');
  const sortedArchive = Object.entries(ARCHIVE).sort((a, b) => b[0].localeCompare(a[0]));
  archiveList.innerHTML = sortedArchive.map(([key, count]) => `
    <li class="archive-item" data-archive="${key}">
      <span>${formatDate(key)}</span>
      <span class="count">${count}</span>
    </li>
  `).join('');
  archiveList.querySelectorAll('.archive-item').forEach(item => {
    item.addEventListener('click', () => {
      state.filterArchive = item.dataset.archive;
      state.filterLabel = null;
      state.searchQuery = '';
      $('header-search-input').value = '';
      state.page = 1;
      state.view = 'list';
      $('post-list-view').style.display = 'block';
      $('post-detail').style.display = 'none';
      renderList();
      renderSidebar();
    });
  });
}

// ===== Nav Tab Filter =====
function setupNav() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const filter = link.dataset.filter;
      if (filter === 'all') {
        state.filterLabel = null;
        state.filterArchive = null;
        state.searchQuery = '';
        $('header-search-input').value = '';
      } else {
        state.filterLabel = filter;
        state.filterArchive = null;
        state.searchQuery = '';
        $('header-search-input').value = '';
      }
      state.page = 1;
      state.view = 'list';
      $('post-list-view').style.display = 'block';
      $('post-detail').style.display = 'none';
      renderList();
      renderSidebar();
    });
  });
}

// ===== Search =====
function setupSearch() {
  const searchInput = $('header-search-input');
  const sidebarSearch = $('sidebar-search-input');
  const sidebarSearchBtn = $('sidebar-search-btn');

  function doSearch(query) {
    state.searchQuery = query.trim();
    state.filterLabel = null;
    state.filterArchive = null;
    state.page = 1;
    state.view = 'list';
    $('post-list-view').style.display = 'block';
    $('post-detail').style.display = 'none';
    renderList();
    renderSidebar();
  }

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch(searchInput.value);
  });

  sidebarSearchBtn.addEventListener('click', () => doSearch(sidebarSearch.value));
  sidebarSearch.addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch(sidebarSearch.value);
  });
}

// ===== Back button =====
function setupBackButton() {
  $('back-btn').addEventListener('click', closePost);
}

// ===== Scroll to top =====
function setupScrollTop() {
  const btn = $('scroll-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== Site logo / title click =====
function setupSiteTitle() {
  document.querySelector('.site-title').addEventListener('click', () => {
    state = { view: 'list', currentPostId: null, filterLabel: null, filterArchive: null, searchQuery: '', page: 1 };
    $('header-search-input').value = '';
    $('post-list-view').style.display = 'block';
    $('post-detail').style.display = 'none';
    document.querySelectorAll('.nav-link').forEach((l, i) => l.classList.toggle('active', i === 0));
    renderList();
    renderSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== Handle browser back/forward =====
window.addEventListener('popstate', e => {
  if (e.state && e.state.postId) {
    openPost(e.state.postId);
  } else {
    closePost();
  }
});

// ===== Handle URL hash on load =====
function handleInitialHash() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#post-')) {
    const postId = hash.replace('#post-', '');
    const post = POSTS.find(p => p.id === postId);
    if (post) {
      openPost(postId);
      return;
    }
  }
  renderList();
}

// ===== Hero card clicks =====
function setupHero() {
  document.querySelectorAll('.hero-card').forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.dataset.filter;
      state.filterLabel = filter;
      state.filterArchive = null;
      state.searchQuery = '';
      state.page = 1;
      state.view = 'list';
      $('header-search-input').value = '';
      $('post-list-view').style.display = 'block';
      $('post-detail').style.display = 'none';
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      renderList();
      renderSidebar();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  setupNav();
  setupSearch();
  setupBackButton();
  setupScrollTop();
  setupSiteTitle();
  setupHero();
  renderSidebar();
  handleInitialHash();
});
