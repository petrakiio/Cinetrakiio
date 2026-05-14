const THEME_KEY = 'cinetrakio-theme';

const btn = document.getElementById('modo');
const body = document.body;
const banner = document.getElementById('banner');

function applyTheme(theme) {
  const isLight = theme === 'claro';
  body.classList.toggle('modo-claro', isLight);

  if (banner) {
    banner.classList.toggle('claro', isLight);
  }

  if (btn) {
    btn.textContent = isLight ? 'Modo Escuro' : 'Modo Claro';
  }
}

const storedTheme = localStorage.getItem(THEME_KEY);
if (storedTheme === 'claro' || storedTheme === 'escuro') {
  applyTheme(storedTheme);
} else {
  applyTheme('escuro');
}

if (btn) {
  btn.addEventListener('click', () => {
    const nextTheme = body.classList.contains('modo-claro') ? 'escuro' : 'claro';
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}
