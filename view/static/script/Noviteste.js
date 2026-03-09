document.querySelectorAll('.filme').forEach(filme => {
    const img = filme.querySelector('.mediaImg');
    const video = filme.querySelector('.mediaVideo');
    const btnToggle = filme.querySelector('.toggleMedia');
    const btnVoltar = filme.querySelector('.voltarMedia');

    let mostrandoVideo = false;
    let historico = [];

    function mostrarImagem() {
      img.classList.remove('oculto');
      img.classList.add('visivel');
      video.classList.add('oculto');
      video.classList.remove('visivel');
      // Reinicia o vídeo (importante!)
      const src = video.src;
      video.src = '';
      video.src = src;
      mostrandoVideo = false;
      btnToggle.textContent = 'Trailer';
      btnVoltar.disabled = historico.length === 0;
    }

    function mostrarVideo() {
      img.classList.add('oculto');
      img.classList.remove('visivel');
      video.classList.remove('oculto');
      video.classList.add('visivel');
      mostrandoVideo = true;
      btnToggle.textContent = 'Logo';
      btnVoltar.disabled = historico.length === 0;
    }

    btnToggle.addEventListener('click', () => {
      historico.push(mostrandoVideo ? 'video' : 'imagem');
      if (mostrandoVideo) {
        mostrarImagem();
      } else {
        mostrarVideo();
      }
    });

    btnVoltar.addEventListener('click', () => {
      if (historico.length === 0) return;
      const ultimo = historico.pop();
      if (ultimo === 'video') {
        mostrarVideo();
      } else {
        mostrarImagem();
      }
    });

    // Inicia mostrando imagem
    mostrarImagem();
  });