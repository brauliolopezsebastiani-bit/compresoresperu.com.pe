/* ============================================================================
   POWER S.A.C. — Google Analytics 4 (medición de visitas)
   Pega aquí el "ID de medición" de Google Analytics (empieza con G-).
   Mientras esté vacío, no se carga nada ni se mide nada.
   ============================================================================ */
(function () {
  'use strict';
  var GA_ID = '';

  if (!/^G-[A-Z0-9]+$/.test(GA_ID)) return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);

  /* Qué modelo está mirando la persona (si aplica) */
  function modeloActual() {
    var modal = document.getElementById('productModal');
    if (modal && !modal.hidden) return (document.getElementById('modalTitle') || {}).textContent || '';
    var h1 = document.querySelector('.pp-h1');
    return h1 ? h1.textContent.trim() : '';
  }

  /* Clics que importan para ventas */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (/wa\.me|whatsapp/i.test(href)) {
      gtag('event', 'clic_whatsapp', { modelo: modeloActual(), ubicacion: (a.closest('section,footer,header,[id]') || {}).id || '' });
    } else if (/^tel:/.test(href)) {
      gtag('event', 'clic_telefono');
    } else if (/^mailto:/.test(href)) {
      gtag('event', 'clic_correo');
    } else if (/maps\.app\.goo\.gl|google\.[a-z.]+\/maps/.test(href)) {
      gtag('event', 'clic_como_llegar', { sede: (a.closest('[data-sede]') || {dataset:{}}).dataset.sede || '' });
    } else if (/\.pdf$/i.test(href)) {
      gtag('event', 'clic_pdf', { archivo: href.split('/').pop() });
    }
  }, true);

  /* Solicitud enviada por el formulario (lo avisa main.js) */
  document.addEventListener('power:formulario-enviado', function () {
    gtag('event', 'generate_lead', { metodo: 'formulario_web' });
  });
})();
