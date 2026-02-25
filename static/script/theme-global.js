(function () {
  const THEME_KEY = 'cinetrakio-theme';

  const styleId = 'theme-global-style';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .modo-toggle-global {
        position: fixed;
        right: 14px;
        bottom: 14px;
        z-index: 9998;
        border: 0;
        border-radius: 999px;
        padding: 0.6rem 0.95rem;
        background: linear-gradient(135deg, #e50914, #a60710);
        color: #fff;
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.2px;
        cursor: pointer;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
      }

      .modo-toggle-global:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
      }

      .modo-claro {
        --bg: #f4f7ff;
        --bg-soft: #e9efff;
        --surface: #ffffff;
        --surface-2: #f6f9ff;
        --text: #1d2436;
        --muted: #66708a;
        --border: #ced7eb;
        --shadow: 0 10px 24px rgba(25, 38, 66, 0.12);

        background: #f4f7ff !important;
        color: #1d2436 !important;
      }

      .modo-claro header,
      .modo-claro .tab,
      .modo-claro .container,
      .modo-claro .feedback-box,
      .modo-claro .loading-card,
      .modo-claro .filme-card,
      .modo-claro .filme,
      .modo-claro footer {
        background: #ffffff !important;
        color: #1d2436 !important;
        border-color: #ced7eb !important;
      }

      .modo-claro a,
      .modo-claro p,
      .modo-claro h1,
      .modo-claro h2,
      .modo-claro h3,
      .modo-claro li,
      .modo-claro strong,
      .modo-claro label {
        color: #1d2436 !important;
      }

      .modo-claro .categoria,
      .modo-claro #generos,
      .modo-claro .loading-logo {
        color: #cf101c !important;
      }

      .modo-claro input,
      .modo-claro textarea {
        background: #ffffff !important;
        color: #1d2436 !important;
        border-color: #cfd7eb !important;
      }

      .modo-claro .feedback-item,
      .modo-claro .question,
      .modo-claro .feed {
        background: #ffffff !important;
        border-color: #ced7eb !important;
      }

      .modo-claro .filme-info span,
      .modo-claro .button,
      .modo-claro #toggleButton,
      .modo-claro #toggle,
      .modo-claro #modoGlobal {
        background: linear-gradient(135deg, #d41420, #a60a14) !important;
        color: #fff !important;
      }

      .modo-claro .linha-filmes::-webkit-scrollbar-thumb {
        background-color: #bcc8e7 !important;
      }
    `;
    document.head.appendChild(style);
  }

  const body = document.body;

  function applyTheme(theme) {
    body.classList.toggle('modo-claro', theme === 'claro');
  }

  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme === 'claro' || storedTheme === 'escuro') {
    applyTheme(storedTheme);
  }

  function getOrCreateButton() {
    const existing = document.getElementById('modo');
    if (existing) {
      return existing;
    }

    let button = document.getElementById('modoGlobal');
    if (!button) {
      button = document.createElement('button');
      button.id = 'modoGlobal';
      button.type = 'button';
      button.className = 'modo-toggle-global';
      document.body.appendChild(button);
    }

    return button;
  }

  const themeButton = getOrCreateButton();

  function syncButtonText() {
    const isLight = body.classList.contains('modo-claro');
    themeButton.textContent = isLight ? 'Modo Escuro' : 'Modo Claro';
  }

  if (!themeButton.dataset.themeReady) {
    themeButton.addEventListener('click', () => {
      const nextTheme = body.classList.contains('modo-claro') ? 'escuro' : 'claro';
      localStorage.setItem(THEME_KEY, nextTheme);
      applyTheme(nextTheme);
      syncButtonText();
    });
    themeButton.dataset.themeReady = '1';
  }

  syncButtonText();

  // Em páginas de filme: se o botão "Voltar" for enviado via form,
  // prioriza voltar para a página anterior (ex.: resultado da busca).
  document.addEventListener('submit', (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    const submitBtn = form.querySelector('button[type="submit"].button');
    if (!submitBtn) return;

    const label = submitBtn.textContent?.trim().toLowerCase();
    if (label !== 'voltar') return;

    const hasHistory = window.history.length > 1;
    const hasSameOriginReferrer =
      !!document.referrer && new URL(document.referrer).origin === window.location.origin;

    if (hasHistory && hasSameOriginReferrer) {
      event.preventDefault();
      window.history.back();
    }
  });
})();
