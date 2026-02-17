(function () {
  const loadingScreen = document.getElementById('loadingScreen');
  const loadingBar = document.getElementById('loadingBar');
  const loadingPercent = document.getElementById('loadingPercent');

  if (!loadingScreen || !loadingBar || !loadingPercent) {
    return;
  }

  document.body.classList.add('lock-scroll');

  let progress = 0;
  let finished = false;

  const updateLoading = (value) => {
    progress = Math.min(value, 100);
    loadingBar.style.width = `${progress}%`;
    loadingPercent.textContent = `${Math.round(progress)}%`;
  };

  const fakeProgress = setInterval(() => {
    if (progress >= 92) {
      clearInterval(fakeProgress);
      return;
    }
    updateLoading(progress + Math.random() * 10 + 4);
  }, 120);

  const closeLoading = () => {
    if (finished) {
      return;
    }

    finished = true;
    clearInterval(fakeProgress);
    updateLoading(100);

    setTimeout(() => {
      loadingScreen.classList.add('hide');
      document.body.classList.remove('lock-scroll');

      setTimeout(() => {
        loadingScreen.remove();
      }, 360);
    }, 180);
  };

  window.addEventListener('load', () => {
    setTimeout(closeLoading, 240);
  });

  setTimeout(closeLoading, 3200);
})();
