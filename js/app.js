// ══════════════════════════════════════════════════════════════
//  TELEGRAM INIT
// ══════════════════════════════════════════════════════════════

const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
  tg.setHeaderColor('#0d0d0f');
  tg.setBackgroundColor('#0d0d0f');

  const user = tg.initDataUnsafe?.user;
  if (user) {
    const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ');
    document.getElementById('profile-name').textContent = fullName || 'Пользователь';
    document.getElementById('profile-sub').textContent  = user.username ? `@${user.username}` : 'Добро пожаловать';
    const initials = (user.first_name?.[0] || '') + (user.last_name?.[0] || '');
    document.getElementById('profile-avatar').textContent = initials || 'MW';
  }
}

// ══════════════════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════════════════

let currentScreen    = 'home';
let prevScreen       = 'home';
let selectedMuscle   = null;
let currentFilter    = 'Все';
let muscleFilter     = null;
let currentGender    = 'male';
let currentView      = 'front';
let currentDetailId  = null;

let favorites       = JSON.parse(localStorage.getItem('mw_favs')   || '[]');
let viewedExercises = JSON.parse(localStorage.getItem('mw_viewed') || '[]');

// ══════════════════════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════════════════════

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  document.getElementById('screen-' + name).classList.add('active');
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');

  currentScreen = name;

  if (name === 'exercises') renderExercises();
  if (name === 'favorites') renderFavorites();
  if (name === 'profile')   renderProfile();
}

function openDetail(id) {
  const ex = EXERCISES.find(e => e.id === id);
  if (!ex) return;

  currentDetailId = id;
  prevScreen = currentScreen;

  // Track viewed
  if (!viewedExercises.includes(id)) {
    viewedExercises.push(id);
    localStorage.setItem('mw_viewed', JSON.stringify(viewedExercises));
  }

  renderDetail(ex);
  updateFavBtn();

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-detail').classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  currentScreen = 'detail';
}

function closeDetail() {
  const target = (prevScreen === 'detail' || !prevScreen) ? 'home' : prevScreen;
  showScreen(target);
}

// ══════════════════════════════════════════════════════════════
//  BODY MAP CONTROLS
// ══════════════════════════════════════════════════════════════

function setGender(g) {
  currentGender = g;
  document.querySelectorAll('.gender-btn').forEach((b, i) => {
    b.classList.toggle('active', (i === 0 && g === 'male') || (i === 1 && g === 'female'));
  });
  renderBodyMap();
}

function setView(v) {
  currentView = v;
  document.querySelectorAll('.view-btn').forEach((b, i) => {
    b.classList.toggle('active', (i === 0 && v === 'front') || (i === 1 && v === 'back'));
  });
  renderBodyMap();
}

function selectMuscle(id) {
  selectedMuscle = id;

  const muscle = MUSCLES.find(m => m.id === id);
  document.getElementById('selected-label').textContent = muscle ? muscle.name.toUpperCase() : '';

  renderBodyMap();
  renderQuickMuscles();

  // Haptic
  tg?.HapticFeedback?.selectionChanged?.();

  // Switch to exercises filtered by muscle
  setTimeout(() => {
    currentFilter = 'Все';
    muscleFilter  = id;
    renderFilterChips();
    showScreen('exercises');
  }, 180);
}

// ══════════════════════════════════════════════════════════════
//  EXERCISE FILTERS
// ══════════════════════════════════════════════════════════════

function setFilter(f) {
  currentFilter = f;
  muscleFilter  = null;
  renderFilterChips();
  renderExercises();
}

function filterExercises() {
  muscleFilter = null;
  renderExercises();
}

// ══════════════════════════════════════════════════════════════
//  FAVORITES
// ══════════════════════════════════════════════════════════════

function toggleFavorite() {
  if (!currentDetailId) return;

  const idx = favorites.indexOf(currentDetailId);
  if (idx === -1) {
    favorites.push(currentDetailId);
    showToast('✅ Добавлено в избранное');
  } else {
    favorites.splice(idx, 1);
    showToast('🗑 Удалено из избранного');
  }

  localStorage.setItem('mw_favs', JSON.stringify(favorites));
  updateFavBtn();

  tg?.HapticFeedback?.notificationOccurred?.('success');
}

// ══════════════════════════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════════════════════════

let toastTimer;

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

// ══════════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════════

(function init() {
  renderBodyMap();
  renderQuickMuscles();
  renderFilterChips();
})();
