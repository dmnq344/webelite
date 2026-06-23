/* ==================================================================
   SPA SHOES — interactions & données (maquette)
   ------------------------------------------------------------------
   ⚠️ Contenu PROVISOIRE (roumain). Pour adapter :
     - SERVICES : titres / descriptions / icônes
     - PRICING  : catégories et prix (onglets)
     - WORKS    : vignettes de réalisations
   Tout fonctionne sans GSAP ; GSAP n'ajoute que du relief (parallax).
   ================================================================== */

/* ---------- Icônes (inline SVG) ---------- */
const ICONS = {
  sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>',
  brush:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 4l6 6-7 7-4 1 1-4z"/><path d="M5 21c1.5-3 3.5-4 5-4"/></svg>',
  hammer:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 6l4 4-2 2-4-4z"/><path d="M12 8L4 16l2 2 8-8"/><path d="M14 4l6 6"/></svg>',
  droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>',
  shoe:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 16h15c2 0 3-1 3-2 0-1-1-1.5-3-2-3-1-4-1.5-6-3l-1 2-2-1-1 2H4z"/><path d="M3 16v2h18"/></svg>',
  leaf:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z"/><path d="M5 19c4-4 7-6 10-7"/></svg>'
};

/* ---------- Données : Services ---------- */
const SERVICES = [
  { ico:'sparkle', t:'Curățare premium',        d:'Curățare în profunzime pentru orice material — eliminăm petele, murdăria și mirosurile.', p:'de la 60 lei' },
  { ico:'brush',   t:'Restaurare & vopsire',    d:'Reîmprospătăm culoarea pielii, acoperim zgârieturile și redăm strălucirea inițială.',  p:'de la 90 lei' },
  { ico:'hammer',  t:'Reparații & cizmărie',    d:'Tocuri, tălpi, cusături și lipire — reparații durabile, lucrate manual.',               p:'de la 50 lei' },
  { ico:'droplet', t:'Impermeabilizare',        d:'Protecție împotriva apei și a petelor, fără să modifice textura materialului.',          p:'de la 40 lei' },
  { ico:'shoe',    t:'Îngrijire sneakers',      d:'Tratament dedicat adidașilor: talpă albită, midsole curat, șireturi noi.',               p:'de la 70 lei' },
  { ico:'leaf',    t:'Piele întoarsă (suede)',  d:'Curățare delicată și revitalizarea nuanței pentru suede și nubuc.',                       p:'de la 80 lei' }
];

/* ---------- Données : Réalisations (placeholders) ---------- */
const WORKS = ['Sneakers albi','Cizme din piele','Pantofi business','Geantă din piele','Adidași sport','Cizme suede'];

/* ---------- Données : Process ---------- */
const STEPS = [
  { t:'Comanzi online',     d:'Alegi serviciul potrivit în câteva minute, de oriunde.' },
  { t:'Ridicăm de la tine', d:'Curierul vine la adresa și ora dorită — fără bătăi de cap.' },
  { t:'Livrăm impecabil',   d:'Îți aducem pantofii ca noi, în medie în 48 de ore.' }
];

/* ---------- Données : Prix (par catégories, onglets) ---------- */
const PRICING = {
  'Curățare': [
    ['Curățare standard pantofi','60 lei'], ['Curățare premium piele','90 lei'],
    ['Curățare sneakers','70 lei'], ['Curățare piele întoarsă','80 lei'],
    ['Curățare cizme','100 lei'], ['Albire talpă','40 lei'],
    ['Parfumare & dezinfectare','20 lei'], ['Șireturi noi','15 lei']
  ],
  'Restaurare': [
    ['Revitalizare culoare piele','90 lei'], ['Vopsire completă','140 lei'],
    ['Acoperire zgârieturi','50 lei'], ['Impermeabilizare','40 lei'],
    ['Tratament cu ceară','45 lei'], ['Restaurare piele întoarsă','110 lei']
  ],
  'Reparații — Damă': [
    ['Tocuri clasice','50 lei'], ['Înălțare tocuri cui','45 lei'],
    ['Flecuri','30 lei'], ['Talpă de protecție','90 lei'],
    ['Jumătate talpă','120 lei'], ['Branț nou','40 lei']
  ],
  'Reparații — Bărbați': [
    ['Tocuri','60 lei'], ['Talpă cauciuc','130 lei'],
    ['Jumătate talpă piele','150 lei'], ['Talpă Vibram completă','220 lei'],
    ['Refacere cusături','70 lei'], ['Lipire talpă','40 lei']
  ],
  'Diverse': [
    ['Fermoar nou','60 lei'], ['Elastic nou','30 lei'],
    ['Lărgire pantofi','45 lei'], ['Velcro nou','30 lei'],
    ['Curățare geantă din piele','120 lei'], ['Lucrări speciale','la cerere']
  ]
};

const MARQUEE = ['Curățare premium','Cizmărie','Vopsire & restaurare','Impermeabilizare','Îngrijire sneakers','Piele întoarsă','Ridicare & livrare'];

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ---- Rendu : Services ---- */
  document.getElementById('service-grid').innerHTML = SERVICES.map((s, i) => `
    <article class="service-card" data-anim>
      <span class="service-num">0${i + 1}</span>
      <div class="service-ico">${ICONS[s.ico] || ''}</div>
      <h3>${s.t}</h3>
      <p>${s.d}</p>
      <span class="service-price">${s.p}</span>
    </article>`).join('');

  /* ---- Rendu : Réalisations ---- */
  document.getElementById('works-grid').innerHTML = WORKS.map((w) => `
    <div class="work-tile" data-anim data-img><span>${w}</span></div>`).join('');

  /* ---- Rendu : Process ---- */
  document.getElementById('steps').innerHTML = STEPS.map((s, i) => `
    <li class="step" data-anim>
      <span class="step-n">0${i + 1}</span>
      <h3>${s.t}</h3>
      <p>${s.d}</p>
    </li>`).join('');

  /* ---- Rendu : Prix (onglets) ---- */
  const tabsEl = document.getElementById('price-tabs');
  const panelEl = document.getElementById('price-panel');
  const cats = Object.keys(PRICING);
  tabsEl.innerHTML = cats.map((c, i) =>
    `<button class="price-tab${i === 0 ? ' is-active' : ''}" role="tab" aria-selected="${i === 0}" data-cat="${c}">${c}</button>`).join('');
  function renderPanel(cat) {
    panelEl.innerHTML = PRICING[cat].map(([n, v]) => `
      <div class="price-row"><span class="pr-name">${n}</span><span class="pr-lead" aria-hidden="true"></span><span class="pr-val">${v}</span></div>`).join('');
  }
  renderPanel(cats[0]);
  tabsEl.addEventListener('click', (e) => {
    const b = e.target.closest('.price-tab'); if (!b) return;
    tabsEl.querySelectorAll('.price-tab').forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
    b.classList.add('is-active'); b.setAttribute('aria-selected', 'true');
    renderPanel(b.dataset.cat);
    if (window.gsap && !reduceMotion) gsap.fromTo(panelEl.children, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .4, stagger: .03, ease: 'power2.out' });
  });

  /* ---- Marquee ---- */
  const track = document.getElementById('marquee-track');
  const grp = '<div class="marquee-group">' + MARQUEE.map(w => `<span class="marquee-item">${w}</span>`).join('') + '</div>';
  track.innerHTML = grp + grp;

  /* ---- Menu mobile ---- */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('is-open'); navToggle.setAttribute('aria-expanded', 'false');
  }));

  /* ---- En-tête + barre de progression ---- */
  const header = document.querySelector('.site-header');
  const progress = document.getElementById('scroll-progress');
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
    const h = document.documentElement, max = h.scrollHeight - h.clientHeight;
    progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Révélations [data-anim] ---- */
  const animEls = document.querySelectorAll('[data-anim]');
  if ('IntersectionObserver' in window) {
    // Hero : révélé tout de suite (léger stagger)
    const heroEls = document.querySelectorAll('[data-anim="hero"], [data-anim="hero-visual"]');
    heroEls.forEach((el, i) => setTimeout(() => el.classList.add('is-in'), 90 * i));
    const io = new IntersectionObserver((ents, obs) => {
      ents.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); obs.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    animEls.forEach(el => { if (!el.classList.contains('is-in') && el.dataset.anim !== 'hero' && el.dataset.anim !== 'hero-visual') io.observe(el); });
  } else {
    animEls.forEach(el => el.classList.add('is-in'));
  }

  /* ---- Navigation active ---- */
  const links = Array.from(document.querySelectorAll('.main-nav a[href^="#"]'));
  const secs = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && secs.length) {
    const spy = new IntersectionObserver((ents) => {
      ents.forEach(en => { if (en.isIntersecting) { const id = '#' + en.target.id; links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === id)); } });
    }, { rootMargin: '-45% 0px -50% 0px' });
    secs.forEach(s => spy.observe(s));
  }

  /* ---- Compteurs ---- */
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10) || 0, suffix = el.dataset.suffix || '';
    const run = () => {
      if (reduceMotion) { el.textContent = target.toLocaleString('ro-RO') + suffix; return; }
      const dur = 1300, t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(e * target).toLocaleString('ro-RO') + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if ('IntersectionObserver' in window) {
      const o = new IntersectionObserver((es, ob) => es.forEach(en => { if (en.isIntersecting) { run(); ob.unobserve(en.target); } }), { threshold: .6 });
      o.observe(el);
    } else run();
  });

  /* ---- Comparateur avant / après ---- */
  initBeforeAfter();

  /* ---- Tilt 3D du visuel hero ---- */
  initTilt();

  /* ---- Enrichissement GSAP (parallax) ---- */
  if (window.gsap && !reduceMotion) {
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
    // Parallax doux des lueurs
    gsap.to('.aurora .a1', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: true } });
    gsap.to('.aurora .a2', { yPercent: -14, ease: 'none', scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: true } });
    // Léger flottement de la carte hero
    gsap.to('.hero-card', { y: -10, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }
});

/* ---------- Comparateur avant / après ---------- */
function initBeforeAfter() {
  const ba = document.getElementById('ba');
  const before = document.getElementById('ba-before');
  const handle = document.getElementById('ba-handle');
  if (!ba || !before || !handle) return;
  let dragging = false;
  function setPos(pct) {
    pct = Math.max(0, Math.min(100, pct));
    before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left = pct + '%';
    handle.setAttribute('aria-valuenow', Math.round(pct));
  }
  function fromEvent(e) {
    const r = ba.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
    setPos((x / r.width) * 100);
  }
  setPos(50);
  const start = (e) => { dragging = true; fromEvent(e); };
  const move  = (e) => { if (dragging) fromEvent(e); };
  const end   = () => { dragging = false; };
  ba.addEventListener('pointerdown', start);
  window.addEventListener('pointermove', move, { passive: true });
  window.addEventListener('pointerup', end);
  handle.addEventListener('keydown', (e) => {
    const cur = parseFloat(handle.getAttribute('aria-valuenow')) || 50;
    if (e.key === 'ArrowLeft') { setPos(cur - 4); e.preventDefault(); }
    if (e.key === 'ArrowRight') { setPos(cur + 4); e.preventDefault(); }
  });
}

/* ---------- Tilt 3D ---------- */
function initTilt() {
  const tilt = document.getElementById('hero-tilt');
  if (!tilt) return;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!fine || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const wrap = tilt.parentElement; // .hero-visual
  let raf = null, tx = 0, ty = 0;
  wrap.addEventListener('pointermove', (e) => {
    const r = wrap.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    tx = -py * 9; ty = px * 12;
    if (!raf) raf = requestAnimationFrame(apply);
  });
  wrap.addEventListener('pointerleave', () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(apply); });
  function apply() {
    raf = null;
    tilt.style.transform = `rotateX(${tx.toFixed(2)}deg) rotateY(${ty.toFixed(2)}deg)`;
  }
}
