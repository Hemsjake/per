// ============================================================
// script.js — Wuthering Waves MBTI — Main Application Logic
// ============================================================

// === STATE ===
const state = {
  currentPage: 'home',
  currentQuestion: 0,
  answers: {}, // { questionId: direction }
  scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
  mbtiResult: null,
  audioPlaying: false,
  audioEl: null,
};

// === DOM HELPERS ===
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const ce = (tag, cls = '', html = '') => {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (html) el.innerHTML = html;
  return el;
};

// === PAGE NAVIGATION ===
function showPage(id) {
  $$('.page').forEach(p => p.classList.remove('active'));
  const page = $(`#page-${id}`);
  if (page) {
    page.classList.add('active');
    state.currentPage = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// === PARTICLE SYSTEM ===
function initParticles() {
  const canvas = $('#particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animFrame;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const spawnParticle = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: -Math.random() * 0.6 - 0.2,
    radius: Math.random() * 1.5 + 0.3,
    alpha: Math.random() * 0.5 + 0.1,
    hue: Math.random() > 0.5 ? 195 : 270, // cyan or purple
  });

  const init = () => {
    resize();
    particles = Array.from({ length: 120 }, spawnParticle);
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.0008;

      if (p.y < -10 || p.alpha <= 0) {
        particles[i] = spawnParticle();
        particles[i].y = canvas.height + 10;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.alpha})`;
      ctx.fill();
    });
    animFrame = requestAnimationFrame(draw);
  };

  window.addEventListener('resize', resize);
  init();
  draw();
}

// === AUDIO TOGGLE ===
function initAudio() {
  // We create a simple tone generator using Web Audio API as a fallback
  // since we can't host an actual audio file on GitHub Pages without adding one
  const btn = $('#audio-toggle');
  if (!btn) return;

  // Create oscillator-based ambient sound
  let audioCtx = null;
  let gainNode = null;
  let oscillators = [];

  const startAudio = () => {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 2);
    gainNode.connect(audioCtx.destination);

    // Create harmonic drone (atmospheric)
    const freqs = [55, 110, 164.81, 220, 329.63];
    freqs.forEach(freq => {
      const osc = audioCtx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.connect(gainNode);
      osc.start();
      oscillators.push(osc);
    });

    state.audioPlaying = true;
    btn.textContent = '♪ ON';
    btn.style.color = 'var(--accent-primary)';
  };

  const stopAudio = () => {
    if (gainNode) gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1);
    setTimeout(() => {
      oscillators.forEach(o => { try { o.stop(); } catch(e) {} });
      oscillators = [];
      if (audioCtx) audioCtx.close();
      audioCtx = null;
    }, 1100);
    state.audioPlaying = false;
    btn.textContent = '♪ OFF';
    btn.style.color = '';
  };

  btn.addEventListener('click', () => {
    if (state.audioPlaying) stopAudio();
    else startAudio();
  });
}

// === THEME TOGGLE ===
function initTheme() {
  const btn = $('#theme-toggle');
  if (!btn) return;
  const saved = localStorage.getItem('wuwa-theme');
  if (saved === 'light') document.body.classList.add('light-mode');

  btn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('wuwa-theme', isLight ? 'light' : 'dark');
    btn.textContent = isLight ? '☀ LIGHT' : '☾ DARK';
  });
}

// === TOAST NOTIFICATION ===
function showToast(msg, dur = 3000) {
  let toast = $('#toast');
  if (!toast) {
    toast = ce('div', 'toast', msg);
    toast.id = 'toast';
    document.body.appendChild(toast);
  } else {
    toast.textContent = msg;
  }
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });
  setTimeout(() => toast.classList.remove('show'), dur);
}

// === LOADING SCREEN ===
function showLoading(show) {
  const el = $('#loading-screen');
  if (el) el.classList.toggle('visible', show);
}

// ============================================================
// MBTI TEST ENGINE
// ============================================================

function startTest() {
  // Reset state
  state.currentQuestion = 0;
  state.answers = {};
  state.scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  showPage('test');
  renderQuestion();
}

function renderQuestion() {
  const q = mbtiQuestions[state.currentQuestion];
  const total = mbtiQuestions.length;
  const pct = Math.round((state.currentQuestion / total) * 100);

  // Progress
  const progressBar = $('#progress-bar');
  const progressText = $('#progress-text');
  if (progressBar) progressBar.style.width = `${pct}%`;
  if (progressText) progressText.textContent = `${state.currentQuestion + 1} / ${total}`;

  // Counter
  const counter = $('#question-counter');
  if (counter) counter.textContent = `QUESTION ${state.currentQuestion + 1} OF ${total}`;

  // Question
  const qNum = $('#question-number');
  const qText = $('#question-text');
  if (qNum) qNum.textContent = `Q${String(state.currentQuestion + 1).padStart(2, '0')} — ${q.axis === 'EI' ? 'ENERGY' : q.axis === 'SN' ? 'PERCEPTION' : q.axis === 'TF' ? 'JUDGMENT' : 'STRUCTURE'}`;
  if (qText) qText.textContent = q.text;

  // Answers — 5-point Likert scale
  const container = $('#answers-container');
  if (!container) return;
  container.innerHTML = '';

  const options = [
    { val: 3, dir: q.direction, label: 'Strongly Agree' },
    { val: 2, dir: q.direction, label: 'Agree' },
    { val: 0, dir: null,        label: 'Neutral' },
    { val: 2, dir: opposite(q.direction), label: 'Disagree' },
    { val: 3, dir: opposite(q.direction), label: 'Strongly Disagree' },
  ];

  options.forEach((opt, i) => {
    const btn = ce('button', 'answer-btn');
    btn.innerHTML = `
      <span class="label">${opt.label}</span>
    `;
    // Pre-select if already answered
    if (state.answers[q.id] !== undefined) {
      const saved = state.answers[q.id];
      if (saved.dir === opt.dir && saved.val === opt.val) btn.classList.add('selected');
      if (opt.val === 0 && saved.dir === null) btn.classList.add('selected');
    }
    btn.addEventListener('click', () => {
      // Record answer
      state.answers[q.id] = { dir: opt.dir, val: opt.val };
      // Highlight selection
      $$('.answer-btn', container).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      // Auto-advance after short delay
      setTimeout(() => {
        if (state.currentQuestion < total - 1) {
          state.currentQuestion++;
          renderQuestion();
        } else {
          computeResult();
        }
      }, 380);
    });
    container.appendChild(btn);
  });

  // Prev/Next buttons
  const prevBtn = $('#btn-prev');
  const nextBtn = $('#btn-next');
  if (prevBtn) {
    prevBtn.disabled = state.currentQuestion === 0;
    prevBtn.onclick = () => {
      if (state.currentQuestion > 0) { state.currentQuestion--; renderQuestion(); }
    };
  }
  if (nextBtn) {
    nextBtn.onclick = () => {
      if (state.answers[q.id] === undefined) {
        showToast('⚡ Please select an option to continue.');
        return;
      }
      if (state.currentQuestion < total - 1) {
        state.currentQuestion++;
        renderQuestion();
      } else {
        computeResult();
      }
    };
  }
}

function opposite(dir) {
  const map = { E:'I', I:'E', S:'N', N:'S', T:'F', F:'T', J:'P', P:'J' };
  return map[dir] || null;
}

function computeResult() {
  // Tally scores
  const scores = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };
  mbtiQuestions.forEach(q => {
    const ans = state.answers[q.id];
    if (ans && ans.dir) scores[ans.dir] += ans.val;
  });
  state.scores = scores;

  // Determine type
  const type = [
    scores.E >= scores.I ? 'E' : 'I',
    scores.S >= scores.N ? 'S' : 'N',
    scores.T >= scores.F ? 'T' : 'F',
    scores.J >= scores.P ? 'J' : 'P',
  ].join('');

  state.mbtiResult = type;
  showLoading(true);
  setTimeout(() => {
    showLoading(false);
    renderResult(type);
    showPage('result');
  }, 1400);
}

function renderResult(type) {
  const data = mbtiDescriptions[type];
  if (!data) return;

  // Main badge
  const badge = $('#result-type');
  const titleEl = $('#result-title-text');
  const tagline = $('#result-tagline');
  const desc = $('#result-description');
  if (badge) badge.textContent = type;
  if (titleEl) titleEl.textContent = data.title;
  if (tagline) tagline.textContent = data.tagline;
  if (desc) desc.textContent = data.description;

  // Apply accent color
  if (badge) badge.style.setProperty('--type-color', data.color);

  // Traits
  const traitsContainer = $('#result-traits');
  if (traitsContainer) {
    traitsContainer.innerHTML = '';
    data.strengths.forEach(s => {
      const pill = ce('span', 'trait-pill strength', s);
      traitsContainer.appendChild(pill);
    });
    data.weaknesses.forEach(w => {
      const pill = ce('span', 'trait-pill weakness', w);
      traitsContainer.appendChild(pill);
    });
  }

  // Axis bars
  const axes = [
    { id: 'axis-ei', labelA: 'EXTRAVERSION', labelB: 'INTROVERSION', a: state.scores.E, b: state.scores.I },
    { id: 'axis-sn', labelA: 'SENSING',      labelB: 'INTUITION',    a: state.scores.S, b: state.scores.N },
    { id: 'axis-tf', labelA: 'THINKING',     labelB: 'FEELING',      a: state.scores.T, b: state.scores.F },
    { id: 'axis-jp', labelA: 'JUDGING',      labelB: 'PERCEIVING',   a: state.scores.J, b: state.scores.P },
  ];

  axes.forEach(ax => {
    const total = ax.a + ax.b;
    const pct = total > 0 ? Math.round((ax.a / total) * 100) : 50;
    const container = $(`#${ax.id}`);
    if (container) {
      container.innerHTML = `
        <div class="axis-label"><span>${ax.labelA}</span><span>${ax.labelB}</span></div>
        <div class="axis-track">
          <div class="axis-fill" style="width: 0%" data-target="${pct}"></div>
        </div>
        <div class="axis-label" style="margin-top:6px;font-size:0.65rem;opacity:0.7">
          <span>${pct}%</span><span>${100 - pct}%</span>
        </div>
      `;
    }
  });

  // Animate bars
  setTimeout(() => {
    $$('.axis-fill').forEach(bar => {
      const target = bar.dataset.target;
      bar.style.width = target + '%';
    });
  }, 200);

  // Set result share button
  const shareBtn = $('#btn-share-result');
  if (shareBtn) {
    shareBtn.onclick = () => shareResult(type);
  }
}

// === SHARE RESULT ===
function shareResult(type) {
  const data = mbtiDescriptions[type];
  const text = `🎮 I just took the Wuthering Waves MBTI Test!\n\nMy personality type is ${type} — ${data.title}\n\n"${data.tagline}"\n\nFind out yours: ${window.location.href}`;

  if (navigator.share) {
    navigator.share({ title: 'My MBTI Result', text });
  } else {
    navigator.clipboard.writeText(text).then(() => showToast('✅ Result copied to clipboard!'));
  }
}

// ============================================================
// CHARACTER MATCH PAGE
// ============================================================

function goToCharacterPage() {
  showPage('character');
  renderMatchedCharacter();
  renderCharacterBrowser();
}

function renderMatchedCharacter() {
  const type = state.mbtiResult;
  if (!type) return;

  const primaryName = mbtiPrimaryCharacter[type];
  const char = wuwaCharacters.find(c => c.name === primaryName);
  if (!char) return;

  const section = $('#match-hero-section');
  if (!section) return;

  section.innerHTML = `
    <h2>YOUR WUTHERING WAVES MATCH: <span>${char.name.toUpperCase()}</span></h2>
    <p style="color:var(--text-muted);font-family:var(--font-mono);font-size:0.8rem;letter-spacing:0.12em;margin-top:6px;">
      YOU ARE ${type} · THEY ARE ${char.mbti}
    </p>
  `;

  const card = $('#match-featured-card');
  if (!card) return;

  card.innerHTML = `
    ${buildCharPortrait(char, 'char-portrait')}
    <div class="match-char-info">
      <div class="match-char-name">${char.name}</div>
      <div class="match-char-type">
        <span class="mbti-tag">${char.mbti}</span>
        <span style="color:var(--text-muted)">·</span>
        <span>${mbtiDescriptions[char.mbti]?.title || ''}</span>
      </div>
      <div class="match-tags">
        <span class="element-tag el-${char.element}">${char.element}</span>
        <span class="weapon-tag">${char.weapon}</span>
        <span class="role-tag">${char.role}</span>
        <span class="rarity-tag">★${char.rarity}</span>
        <span style="font-size:0.75rem;color:var(--text-muted);font-family:var(--font-mono);padding:5px 8px;">v${char.version}</span>
      </div>
      <p class="match-lore">${char.lore}</p>
      <div class="match-why">
        <strong>Why you match:</strong> ${char.whyMatch}
      </div>
      <ul class="funfacts">
        ${char.funFacts.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>
  `;
}

function buildCharPortrait(char, cls = '') {
  return `
    <div style="position:relative;width:100%;${cls === 'char-portrait' ? 'aspect-ratio:3/4;border-radius:16px;overflow:hidden;' : ''}">
      <img
        src="${char.image}"
        alt="${char.name}"
        class="${cls}"
        onerror="this.parentNode.innerHTML='<div class=\\'img-placeholder\\'><span>🎮</span>${char.name}</div>'"
        loading="lazy"
        style="${cls === 'char-portrait' ? 'width:100%;height:100%;object-fit:cover;' : 'width:100%;height:100%;object-fit:cover;border-radius:16px;'}"
      />
    </div>
  `;
}

// === CHARACTER BROWSER ===
function renderCharacterBrowser(filter = { search: '', element: '', mbti: '' }) {
  const grid = $('#char-browser-grid');
  if (!grid) return;

  let chars = [...wuwaCharacters];

  // Filter
  if (filter.search) {
    const q = filter.search.toLowerCase();
    chars = chars.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.element.toLowerCase().includes(q) ||
      c.mbti.toLowerCase().includes(q) ||
      c.role.toLowerCase().includes(q)
    );
  }
  if (filter.element) chars = chars.filter(c => c.element === filter.element);
  if (filter.mbti) chars = chars.filter(c => c.mbti === filter.mbti);

  grid.innerHTML = '';

  if (chars.length === 0) {
    grid.innerHTML = '<div class="no-results">// NO CHARACTERS FOUND \\\\</div>';
    return;
  }

  chars.forEach(char => {
    const isMatch = char.mbti === state.mbtiResult;
    const card = ce('div', `char-card${isMatch ? ' char-card--match' : ''}`);
    if (isMatch) {
      card.style.borderColor = 'var(--accent-gold)';
      card.style.boxShadow = 'var(--glow-gold)';
    }

    card.innerHTML = `
      <div style="position:relative;aspect-ratio:3/4;overflow:hidden;">
        <img
          src="${char.image}"
          alt="${char.name}"
          class="char-card-img"
          onerror="this.outerHTML='<div class=\\'char-card-img img-placeholder\\'><span>🎮</span></div>'"
          loading="lazy"
        />
        <div class="char-card-rarity ${char.rarity === 5 ? 'r5' : 'r4'}">★${char.rarity}</div>
        ${isMatch ? `<div style="position:absolute;top:10px;left:10px;background:var(--accent-gold);color:#000;font-family:var(--font-mono);font-size:0.6rem;padding:3px 8px;border-radius:6px;font-weight:700;">YOUR MATCH</div>` : ''}
      </div>
      <div class="char-card-body">
        <div class="char-card-name">${char.name}</div>
        <div class="char-card-tags">
          <span class="element-tag el-${char.element}" style="font-size:0.65rem;padding:3px 8px;">${char.element}</span>
          <span class="weapon-tag" style="font-size:0.65rem;padding:3px 8px;">${char.weapon}</span>
        </div>
        <div class="char-card-mbti">${char.mbti} · v${char.version}</div>
      </div>
    `;

    card.addEventListener('click', () => openCharModal(char));
    grid.appendChild(card);
  });
}

// === CHARACTER MODAL ===
function openCharModal(char) {
  const overlay = $('#modal-overlay');
  if (!overlay) return;

  const content = $('#modal-content');
  if (content) {
    content.innerHTML = `
      <div class="modal-img-col">
        <img
          src="${char.image}"
          alt="${char.name}"
          class="modal-char-img"
          onerror="this.outerHTML='<div class=\\'modal-char-img img-placeholder\\'><span>🎮</span><span>${char.name}</span></div>'"
        />
      </div>
      <div class="modal-info">
        <div class="match-char-name" style="font-size:1.6rem;margin-bottom:8px;">${char.name}</div>
        <div class="match-char-type" style="margin-bottom:20px;">
          <span class="mbti-tag">${char.mbti}</span>
          <span style="color:var(--text-muted)">·</span>
          <span>${mbtiDescriptions[char.mbti]?.title || char.mbti}</span>
        </div>
        <div class="match-tags" style="margin-bottom:20px;">
          <span class="element-tag el-${char.element}">${char.element}</span>
          <span class="weapon-tag">${char.weapon}</span>
          <span class="role-tag">${char.role}</span>
          <span class="rarity-tag">★${char.rarity}</span>
          <span style="font-size:0.75rem;color:var(--text-muted);font-family:var(--font-mono);padding:5px 8px;">Ver. ${char.version}</span>
        </div>

        <div class="section-title" style="font-size:0.85rem;">LORE</div>
        <p class="match-lore" style="margin-bottom:20px;">${char.lore}</p>

        <div class="section-title" style="font-size:0.85rem;">PERSONALITY MATCH</div>
        <div class="match-why" style="margin-bottom:20px;">${char.whyMatch}</div>

        <div class="section-title" style="font-size:0.85rem;">FUN FACTS</div>
        <ul class="funfacts">
          ${char.funFacts.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = $('#modal-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Particles
  initParticles();
  initAudio();
  initTheme();

  // Nav
  const logoBtn = $('#logo-btn');
  if (logoBtn) logoBtn.addEventListener('click', () => showPage('home'));

  // Home start button
  const startBtn = $('#btn-start-test');
  if (startBtn) startBtn.addEventListener('click', startTest);

  // Retake test
  const retakeBtn = $('#btn-retake');
  if (retakeBtn) retakeBtn.addEventListener('click', startTest);

  // Go to character page
  const matchBtn = $('#btn-find-match');
  if (matchBtn) matchBtn.addEventListener('click', goToCharacterPage);

  // Back from character page
  const backBtn = $('#btn-back-to-result');
  if (backBtn) backBtn.addEventListener('click', () => showPage('result'));

  // Modal close
  const closeBtn = $('#modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  const overlay = $('#modal-overlay');
  if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

  // Escape key
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Search
  const searchInput = $('#char-search');
  const elementFilter = $('#element-filter');
  const mbtiFilter = $('#mbti-filter');

  const applyFilters = () => {
    renderCharacterBrowser({
      search: searchInput?.value || '',
      element: elementFilter?.value || '',
      mbti: mbtiFilter?.value || '',
    });
  };

  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (elementFilter) elementFilter.addEventListener('change', applyFilters);
  if (mbtiFilter) mbtiFilter.addEventListener('change', applyFilters);

  // Show home page initially
  showPage('home');

  // Keyboard shortcut hint
  console.log('%c🎮 WUTHERING WAVES MBTI TEST', 'color:#00d4ff;font-size:1.2rem;font-family:monospace;');
  console.log('%cType startTest() to jump straight to the test!', 'color:#7b5ea7;font-family:monospace;');
});
