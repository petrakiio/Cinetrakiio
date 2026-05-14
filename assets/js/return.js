(function () {
  const btn = document.getElementById('return');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const hasHistory = window.history.length > 1;
    const sameOriginReferrer =
      !!document.referrer && new URL(document.referrer).origin === window.location.origin;

    if (hasHistory && sameOriginReferrer) {
      window.history.back();
      return;
    }

    window.location.href = '/';
  });
})();
