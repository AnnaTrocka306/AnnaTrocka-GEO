(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.getElementById('mobile-menu');
  if (!menuButton || !nav) return;
  function toggleMenu(open) {
    nav.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open
      ? (document.documentElement.lang === 'de' ? 'Menü schließen' : 'Закрыть меню')
      : (document.documentElement.lang === 'de' ? 'Menü öffnen' : 'Открыть меню'));
  }
  menuButton.addEventListener('click', () => toggleMenu(nav.hidden));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleMenu(false); });
})();