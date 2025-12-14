    (function(){
      const intro = document.getElementById('intro');
      const logoWrap = document.getElementById('logoWrap');
      const skipBtn = document.getElementById('skip');

      function endIntro(){
        intro.style.transition = 'opacity .25s linear';
        intro.style.opacity='0';
        setTimeout(()=> intro.remove(), 260);
        document.body.style.overflow='auto';
      }

      skipBtn.addEventListener('click', ()=>{
        logoWrap.style.animation='none';
        logoWrap.style.transform='scale(0.08)';
        logoWrap.style.opacity='0';
        endIntro();
      });

      logoWrap.addEventListener('click', ()=> skipBtn.click());

      // fim natural: tempo total da animação = 0.9 + 0.35 + 0.55 = 1.8s
      setTimeout(endIntro, 1800);

      document.body.style.overflow='hidden';
    })();