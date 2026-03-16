/* ═══════════════════════════════════════════════════
   PAGE TRANSITION — AmpliFI Demo
   Included at the bottom of every screen's <body>
═══════════════════════════════════════════════════ */
(function () {
  /* ── Create the white veil overlay ── */
  const veil = document.createElement('div');
  veil.id = 'page-veil';
  document.body.appendChild(veil);

  /* ── Reveal: start opaque, fade out once DOM is ready ── */
  veil.style.opacity = '1';
  veil.style.transition = 'none';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      veil.style.transition = 'opacity 0.28s cubic-bezier(0.4, 0, 0.2, 1)';
      veil.style.opacity = '0';
    });
  });

  /* ── Navigate: fade to white, then follow the link ── */
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    /* skip: anchors, external, javascript:, mailto: */
    if (!href || href.startsWith('#') || href.startsWith('javascript')
        || href.startsWith('mailto') || href.startsWith('http')
        || href.startsWith('//')) return;

    e.preventDefault();
    veil.style.transition = 'opacity 0.22s cubic-bezier(0.4, 0, 0.2, 1)';
    veil.style.opacity = '1';
    setTimeout(() => { window.location.href = href; }, 230);
  }, true); /* capture phase so it fires before other handlers */
})();
