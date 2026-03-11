// ══════════════════════════════════════════════════════════════
//  BODY MAP
// ══════════════════════════════════════════════════════════════

function renderBodyMap() {
  const wrap = document.getElementById('body-svg-wrap');
  const isFront = currentView === 'front';
  const sel = selectedMuscle;

  wrap.innerHTML = `
  <svg viewBox="0 0 200 420" xmlns="http://www.w3.org/2000/svg">

    <!-- Силуэт тела -->
    <ellipse cx="100" cy="30"  rx="22" ry="26" class="body-fill" stroke="#3a3a48" stroke-width="1.5"/>
    <rect    x="91"  y="52"  width="18" height="18" rx="4" class="body-fill" stroke="#3a3a48" stroke-width="1"/>
    <path d="M62 68 L138 68 L148 180 L52 180 Z" class="body-fill" stroke="#3a3a48" stroke-width="1.5"/>
    <!-- Левая рука -->
    <path d="M62 68 L38 70 L28 160 L44 162 L54 90 L62 80 Z"  class="body-fill" stroke="#3a3a48" stroke-width="1.5"/>
    <!-- Правая рука -->
    <path d="M138 68 L162 70 L172 160 L156 162 L146 90 L138 80 Z" class="body-fill" stroke="#3a3a48" stroke-width="1.5"/>
    <!-- Предплечья -->
    <path d="M28 160 L22 240 L40 242 L44 162 Z"  class="body-fill" stroke="#3a3a48" stroke-width="1.5"/>
    <path d="M172 160 L178 240 L160 242 L156 162 Z" class="body-fill" stroke="#3a3a48" stroke-width="1.5"/>
    <!-- Ноги -->
    <path d="M74 180 L60 310 L86 312 L100 200 Z"  class="body-fill" stroke="#3a3a48" stroke-width="1.5"/>
    <path d="M126 180 L140 310 L114 312 L100 200 Z" class="body-fill" stroke="#3a3a48" stroke-width="1.5"/>
    <!-- Голени -->
    <path d="M60 310 L54 400 L80 402 L86 312 Z"  class="body-fill" stroke="#3a3a48" stroke-width="1.5"/>
    <path d="M140 310 L146 400 L120 402 L114 312 Z" class="body-fill" stroke="#3a3a48" stroke-width="1.5"/>

    ${isFront ? `
    <!-- ЗОНЫ — СПЕРЕДИ -->
    <!-- Грудь -->
    <ellipse cx="85"  cy="105" rx="20" ry="18" class="muscle-group ${sel==='chest'?'selected':''}"     data-id="chest"     onclick="selectMuscle('chest')"/>
    <ellipse cx="115" cy="105" rx="20" ry="18" class="muscle-group ${sel==='chest'?'selected':''}"     data-id="chest"     onclick="selectMuscle('chest')"/>
    <!-- Плечи -->
    <ellipse cx="56"  cy="80"  rx="14" ry="11" class="muscle-group ${sel==='shoulders'?'selected':''}" data-id="shoulders" onclick="selectMuscle('shoulders')"/>
    <ellipse cx="144" cy="80"  rx="14" ry="11" class="muscle-group ${sel==='shoulders'?'selected':''}" data-id="shoulders" onclick="selectMuscle('shoulders')"/>
    <!-- Бицепс -->
    <ellipse cx="32"  cy="112" rx="9"  ry="22" class="muscle-group ${sel==='biceps'?'selected':''}"    data-id="biceps"    onclick="selectMuscle('biceps')"/>
    <ellipse cx="168" cy="112" rx="9"  ry="22" class="muscle-group ${sel==='biceps'?'selected':''}"    data-id="biceps"    onclick="selectMuscle('biceps')"/>
    <!-- Пресс -->
    <ellipse cx="100" cy="148" rx="22" ry="20" class="muscle-group ${sel==='abs'?'selected':''}"       data-id="abs"       onclick="selectMuscle('abs')"/>
    <!-- Квадрицепс -->
    <ellipse cx="80"  cy="235" rx="18" ry="32" class="muscle-group ${sel==='quads'?'selected':''}"     data-id="quads"     onclick="selectMuscle('quads')"/>
    <ellipse cx="120" cy="235" rx="18" ry="32" class="muscle-group ${sel==='quads'?'selected':''}"     data-id="quads"     onclick="selectMuscle('quads')"/>
    <!-- Икры -->
    <ellipse cx="66"  cy="358" rx="12" ry="28" class="muscle-group ${sel==='calves'?'selected':''}"    data-id="calves"    onclick="selectMuscle('calves')"/>
    <ellipse cx="134" cy="358" rx="12" ry="28" class="muscle-group ${sel==='calves'?'selected':''}"    data-id="calves"    onclick="selectMuscle('calves')"/>
    ` : `
    <!-- ЗОНЫ — СЗАДИ -->
    <!-- Спина -->
    <ellipse cx="85"  cy="100" rx="20" ry="26" class="muscle-group ${sel==='back'?'selected':''}"      data-id="back"      onclick="selectMuscle('back')"/>
    <ellipse cx="115" cy="100" rx="20" ry="26" class="muscle-group ${sel==='back'?'selected':''}"      data-id="back"      onclick="selectMuscle('back')"/>
    <!-- Трапеции -->
    <ellipse cx="100" cy="72"  rx="24" ry="10" class="muscle-group ${sel==='traps'?'selected':''}"     data-id="traps"     onclick="selectMuscle('traps')"/>
    <!-- Трицепс -->
    <ellipse cx="32"  cy="115" rx="9"  ry="22" class="muscle-group ${sel==='triceps'?'selected':''}"   data-id="triceps"   onclick="selectMuscle('triceps')"/>
    <ellipse cx="168" cy="115" rx="9"  ry="22" class="muscle-group ${sel==='triceps'?'selected':''}"   data-id="triceps"   onclick="selectMuscle('triceps')"/>
    <!-- Широчайшие -->
    <ellipse cx="74"  cy="165" rx="22" ry="17" class="muscle-group ${sel==='lats'?'selected':''}"      data-id="lats"      onclick="selectMuscle('lats')"/>
    <ellipse cx="126" cy="165" rx="22" ry="17" class="muscle-group ${sel==='lats'?'selected':''}"      data-id="lats"      onclick="selectMuscle('lats')"/>
    <!-- Ягодицы -->
    <ellipse cx="80"  cy="205" rx="20" ry="20" class="muscle-group ${sel==='glutes'?'selected':''}"    data-id="glutes"    onclick="selectMuscle('glutes')"/>
    <ellipse cx="120" cy="205" rx="20" ry="20" class="muscle-group ${sel==='glutes'?'selected':''}"    data-id="glutes"    onclick="selectMuscle('glutes')"/>
    <!-- Бицепс бедра -->
    <ellipse cx="80"  cy="258" rx="16" ry="30" class="muscle-group ${sel==='hamstrings'?'selected':''}" data-id="hamstrings" onclick="selectMuscle('hamstrings')"/>
    <ellipse cx="120" cy="258" rx="16" ry="30" class="muscle-group ${sel==='hamstrings'?'selected':''}" data-id="hamstrings" onclick="selectMuscle('hamstrings')"/>
    `}
  </svg>`;
}

// ── Quick muscles grid ────────────────────────────────────────
function renderQuickMuscles() {
  const grid = document.getElementById('quick-muscles-grid');
  grid.innerHTML = MUSCLES.map(m => `
    <div class="qm-card ${selectedMuscle === m.id ? 'active' : ''}" onclick="selectMuscle('${m.id}')">
      <span class="qm-emoji">${m.emoji}</span>
      <span class="qm-name">${m.name}</span>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════════════════════
//  EXERCISES LIST
// ══════════════════════════════════════════════════════════════

function renderFilterChips() {
  const chips = document.getElementById('ex-filter-chips');
  chips.innerHTML = EQUIPMENT_FILTERS.map(f => `
    <button class="chip ${currentFilter === f ? 'active' : ''}" onclick="setFilter('${f}')">${f}</button>
  `).join('');
}

function renderExercises() {
  const search = document.getElementById('ex-search').value.toLowerCase().trim();
  let list = EXERCISES;

  if (muscleFilter) {
    list = list.filter(e => e.muscle === muscleFilter || e.secondary.includes(muscleFilter));
  }
  if (currentFilter !== 'Все') {
    list = list.filter(e => e.equipment === currentFilter);
  }
  if (search) {
    list = list.filter(e => {
      const muscleName = MUSCLES.find(m => m.id === e.muscle)?.name.toLowerCase() || '';
      return e.name.toLowerCase().includes(search) || muscleName.includes(search);
    });
  }

  const container = document.getElementById('exercises-list');

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 60px 0">
        <div class="empty-icon">🔍</div>
        <h3>Ничего не найдено</h3>
        <p>Попробуй другой запрос или сбрось фильтр</p>
      </div>`;
    return;
  }

  container.innerHTML = list.map(ex => buildExCard(ex)).join('');
}

function buildExCard(ex) {
  const muscle = MUSCLES.find(m => m.id === ex.muscle);
  return `
  <div class="ex-card" onclick="openDetail(${ex.id})">
    <div class="ex-thumb">${ex.emoji}</div>
    <div class="ex-info">
      <div class="ex-name">${ex.name}</div>
      <div class="ex-meta">
        <span class="ex-tag primary">${muscle?.name || ex.muscle}</span>
        <span class="ex-tag equip">${ex.equipment}</span>
        <span class="ex-tag">${ex.difficulty}</span>
      </div>
    </div>
    <svg class="ex-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  EXERCISE DETAIL
// ══════════════════════════════════════════════════════════════

function renderDetail(ex) {
  document.getElementById('detail-title').textContent = ex.name;

  // Video
  const vw = document.getElementById('detail-video-wrap');
  if (ex.video) {
    vw.innerHTML = `<video src="${ex.video}" autoplay loop muted playsinline></video>`;
  } else {
    vw.innerHTML = `
      <div class="video-placeholder">
        <div style="font-size:56px;margin-bottom:8px">${ex.emoji}</div>
        <div style="font-size:13px;color:var(--muted)">${ex.name}</div>
        <div style="font-size:11px;color:var(--muted);margin-top:4px;opacity:0.5">Видео не добавлено</div>
      </div>`;
  }

  // Tags
  const muscle = MUSCLES.find(m => m.id === ex.muscle);
  document.getElementById('detail-tags').innerHTML = `
    <span class="detail-tag muscle">${muscle?.name || ex.muscle}</span>
    <span class="detail-tag equip">🔧 ${ex.equipment}</span>
    <span class="detail-tag diff">⚡ ${ex.difficulty}</span>
  `;

  // Steps
  document.getElementById('detail-steps').innerHTML = ex.steps
    .map((s, i) => `
      <li>
        <span class="step-num">${i + 1}</span>
        <span>${s}</span>
      </li>`)
    .join('');

  // Muscles
  const allMuscles = [
    { id: ex.muscle, primary: true },
    ...ex.secondary.map(m => ({ id: m, primary: false })),
  ];
  document.getElementById('detail-muscles').innerHTML = allMuscles.map(m => {
    const info = MUSCLES.find(mu => mu.id === m.id);
    return `<span class="muscle-pill ${m.primary ? 'primary' : 'secondary'}">${m.primary ? '★ ' : ''}${info?.name || m.id}</span>`;
  }).join('');
}

// ══════════════════════════════════════════════════════════════
//  FAVORITES
// ══════════════════════════════════════════════════════════════

function renderFavorites() {
  const list = EXERCISES.filter(e => favorites.includes(e.id));
  const container = document.getElementById('favorites-list');

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔖</div>
        <h3>Нет сохранённых упражнений</h3>
        <p>Открой любое упражнение и нажми «Сохранить», чтобы добавить его сюда</p>
      </div>`;
    return;
  }

  container.innerHTML = list.map(ex => buildExCard(ex)).join('');
}

// ══════════════════════════════════════════════════════════════
//  PROFILE
// ══════════════════════════════════════════════════════════════

function renderProfile() {
  document.getElementById('stat-viewed').textContent  = viewedExercises.length;
  document.getElementById('stat-saved').textContent   = favorites.length;
  const uniqueMuscles = new Set(
    EXERCISES.filter(e => viewedExercises.includes(e.id)).map(e => e.muscle)
  );
  document.getElementById('stat-muscles').textContent = uniqueMuscles.size;
}

// ══════════════════════════════════════════════════════════════
//  FAV BUTTON STATE
// ══════════════════════════════════════════════════════════════

function updateFavBtn() {
  const isFav = favorites.includes(currentDetailId);
  const btn = document.getElementById('fav-btn');
  if (isFav) {
    btn.classList.add('saved');
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
      </svg>
      Сохранено`;
  } else {
    btn.classList.remove('saved');
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
      </svg>
      Сохранить упражнение`;
  }
}
