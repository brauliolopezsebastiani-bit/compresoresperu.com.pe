/* ============================================================================
   POWER S.A.C. — Páginas internas (fichas de producto y listado de compresores)
   Solo lo necesario: menú móvil, barra superior al hacer scroll, barra de progreso
   y botón "volver arriba". La página principal usa main.js.
   ============================================================================ */
(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Menú móvil */
  var menu = $('#mobileMenu'), burger = $('#hamburger'), close = $('#mobileClose');
  function setMenu(open) {
    menu.hidden = !open;
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    if (open) close.focus(); else burger.focus({ preventScroll: true });
  }
  if (menu && burger) {
    burger.addEventListener('click', function () { setMenu(true); });
    close.addEventListener('click', function () { setMenu(false); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) setMenu(false); });
  }

  /* Recuerda el modelo de esta ficha: se incluye en el correo si la persona llena el formulario */
  var h1 = $('.pp-h1');
  if (h1 && /\/compresores\/[^/]+\/?$/.test(location.pathname)) {
    try { sessionStorage.setItem('power:modelo', h1.textContent.replace(/^Compresor\s+/, '').replace('Atlas Copco ', '').trim()); } catch (_) {}
  }

  /* Scroll: barra superior, progreso y botón arriba */
  var navbar = $('#navbar'), bar = $('#scrollProgressBar'), top = $('#backToTop'), ticking = false;
  function onScroll() {
    var y = window.scrollY, max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (navbar) navbar.classList.toggle('scrolled', y > 20);
    if (bar) bar.style.width = Math.min(100, (y / max) * 100) + '%';
    if (top) top.classList.toggle('visible', y > 500);
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  if (top) top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }); });
  onScroll();
})();
