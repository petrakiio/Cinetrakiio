(function () {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mainMenu');
  const closeButton = document.getElementById('menuClose');

  if (!toggle || !menu) return;

  function setState(open) {
    menu.classList.toggle('open', open);
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', () => {
    setState(!menu.classList.contains('open'));
  });

  if (closeButton) {
    closeButton.addEventListener('click', () => setState(false));
  }

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setState(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
      setState(false);
    }
  });
})();
