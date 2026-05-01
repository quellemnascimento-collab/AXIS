/* ────────────────────────────────────────────────────────
   AXIS GESTÃO E PROCESSOS — main.js
   © 2026 Axis Gestão e Processos
   ──────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav scroll ─────────────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ── Nav active link ────────────────────────────── */
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === path || (path === '/' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Mobile menu ────────────────────────────────── */
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  /* ── Reveal on scroll ───────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => obs.observe(el));
  }

  /* ── Contato: WhatsApp form ─────────────────────── */
  const form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome    = form.querySelector('[name="nome"]').value.trim();
      const empresa = form.querySelector('[name="empresa"]').value.trim();
      const tel     = form.querySelector('[name="tel"]').value.trim();
      const msg     = form.querySelector('[name="msg"]').value.trim();
      const numero  = '5527998845482';
      const texto   = encodeURIComponent(
        `Olá, vim pelo site da AXIS!\n\n*Nome:* ${nome}\n*Empresa:* ${empresa}\n*Telefone:* ${tel}\n\n${msg}`
      );
      window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
    });
  }

  /* ── Bar animate (hero card) ────────────────────── */
  const bars = document.querySelectorAll('.bar-fill');
  if (bars.length) {
    const barObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          bars.forEach((b, i) => {
            setTimeout(() => b.style.transform = 'scaleX(1)', 500 + i * 180);
          });
          barObs.disconnect();
        }
      });
    }, { threshold: .3 });
    bars.forEach(b => barObs.observe(b));
  }

});
