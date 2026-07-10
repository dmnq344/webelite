/* ============================================================
   EXPERT ISOLATION — Interactions
   Preloader, navigation, révélations au scroll, compteurs,
   jauges, témoignages, FAQ, formulaire, neige 2D (sous-pages).
   ============================================================ */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const done = () => preloader.classList.add('is-done');
    if (document.readyState === 'complete') {
      setTimeout(done, 350);
    } else {
      window.addEventListener('load', () => setTimeout(done, 450));
      // Filet de sécurité
      setTimeout(done, 3200);
    }
  }

  /* ---------- En-tête au scroll ---------- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Menu mobile ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (navToggle && mobileMenu) {
    const setOpen = (open) => {
      navToggle.classList.toggle('is-open', open);
      mobileMenu.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    navToggle.addEventListener('click', () => setOpen(!mobileMenu.classList.contains('is-open')));
    mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  /* ---------- Révélations au scroll (GSAP) ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (window.gsap && window.ScrollTrigger && !prefersReduced) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    revealEls.forEach((el) => {
      window.gsap.fromTo(el,
        { opacity: 0, y: 34 },
        {
          opacity: 1, y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }
      );
    });
  } else {
    revealEls.forEach((el) => { el.style.opacity = 1; });
  }

  /* ---------- Compteurs ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const fmt = new Intl.NumberFormat('fr-CA');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10) || 0;
        if (prefersReduced) { el.textContent = fmt.format(target); return; }
        const dur = 1600;
        const t0 = performance.now();
        (function step(now) {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt.format(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(step);
        })(t0);
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => io.observe(el));
  }

  /* ---------- Jauges thermiques ---------- */
  const gauges = document.querySelectorAll('[data-gauge]');
  if (gauges.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        const el = entry.target;
        setTimeout(() => { el.style.width = el.dataset.gauge + '%'; }, 250);
      });
    }, { threshold: 0.5 });
    gauges.forEach((el) => io.observe(el));
  }

  /* ---------- Lueur qui suit la souris (cartes) ---------- */
  document.querySelectorAll('.service-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });

  /* ---------- Témoignages ---------- */
  const track = document.getElementById('testimonialTrack');
  const dotsWrap = document.getElementById('testimonialDots');
  if (track && dotsWrap) {
    const slides = Array.from(track.querySelectorAll('.testimonial'));
    let index = 0;
    let timer = null;

    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', 'Témoignage ' + (i + 1));
      if (i === 0) b.classList.add('is-active');
      b.addEventListener('click', () => { go(i); restart(); });
      dotsWrap.appendChild(b);
    });
    const dots = Array.from(dotsWrap.children);

    function go(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, j) => s.classList.toggle('is-active', j === index));
      dots.forEach((d, j) => d.classList.toggle('is-active', j === index));
    }
    function restart() {
      if (timer) clearInterval(timer);
      if (!prefersReduced) timer = setInterval(() => go(index + 1), 6500);
    }
    restart();
  }

  /* ---------- FAQ ---------- */
  document.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-item__q');
    const a = item.querySelector('.faq-item__a');
    if (!q || !a) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      // Fermer les autres
      document.querySelectorAll('.faq-item.is-open').forEach((other) => {
        if (other !== item) {
          other.classList.remove('is-open');
          other.querySelector('.faq-item__a').style.maxHeight = '0px';
          other.querySelector('.faq-item__q').setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.toggle('is-open', !isOpen);
      a.style.maxHeight = isOpen ? '0px' : a.scrollHeight + 'px';
      q.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  /* ---------- Formulaire de soumission (démo) ---------- */
  document.querySelectorAll('form.quote-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const success = form.querySelector('.form-success');
      Array.from(form.children).forEach((child) => {
        if (!child.classList.contains('form-success')) child.style.display = 'none';
      });
      if (success) success.classList.add('is-visible');
    });
  });

  /* ---------- Année courante ---------- */
  document.querySelectorAll('#year').forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ---------- Neige 2D (sous-pages, léger) ---------- */
  const snowCanvas = document.getElementById('snow2d');
  if (snowCanvas && !prefersReduced) {
    const ctx = snowCanvas.getContext('2d');
    let w, h, flakes;
    const N = window.matchMedia('(max-width: 680px)').matches ? 60 : 130;

    function resize() {
      w = snowCanvas.width = window.innerWidth;
      h = snowCanvas.height = window.innerHeight;
    }
    function spawn() {
      flakes = Array.from({ length: N }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 1.8,
        v: 12 + Math.random() * 26,
        p: Math.random() * Math.PI * 2,
      }));
    }
    resize(); spawn();
    window.addEventListener('resize', () => { resize(); });

    let last = performance.now();
    let paused = false;
    document.addEventListener('visibilitychange', () => { paused = document.hidden; });

    (function frame(now) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!paused) {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = 'rgba(226, 238, 255, 0.85)';
        for (const f of flakes) {
          f.y += f.v * dt;
          f.x += Math.sin(now / 1400 + f.p) * 14 * dt + 6 * dt;
          if (f.y > h + 4) { f.y = -4; f.x = Math.random() * w; }
          if (f.x > w + 4) f.x = -4;
          ctx.globalAlpha = 0.35 + (f.r / 2.4) * 0.55;
          ctx.beginPath();
          ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }
      requestAnimationFrame(frame);
    })(last);
  }
})();
