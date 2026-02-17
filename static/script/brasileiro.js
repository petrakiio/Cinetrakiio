const coresFundo = ["#009739", "#FFDF00", "#002776"];
    const coresTexto = ["#FFDF00", "#009739","#002776", "#FFFFFF"];
    let indice = 0;

    function mudar() {
      const text = document.getElementById("text");

      // Fade out
      text.style.opacity = 0.7;

      setTimeout(() => {
        // Troca cores enquanto está invisível
        document.body.style.backgroundColor = coresFundo[indice];
        text.style.color = coresTexto[indice];

        // Fade in
        text.style.opacity = 1;

        // Próximo índice
        indice = (indice + 1) % coresFundo.length;
      }, 1000); // tempo do fade out
    }

    setInterval(mudar, 2500); // intervalo maior que o fade para dar tempo de ver