(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.getElementById('mobile-menu');
  if (!menuButton || !nav) return;

  const labels = {
    de: { open: 'Menü öffnen', close: 'Menü schließen' },
    ru: { open: 'Открыть меню', close: 'Закрыть меню' },
    en: { open: 'Open menu', close: 'Close menu' },
    it: { open: 'Apri il menu', close: 'Chiudi il menu' }
  };
  const lang = document.documentElement.lang.toLowerCase().split('-')[0];
  const t = labels[lang] || labels.en;

  function toggleMenu(open) {
    nav.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? t.close : t.open);
  }

  menuButton.addEventListener('click', () => toggleMenu(nav.hidden));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleMenu(false);
  });
})();