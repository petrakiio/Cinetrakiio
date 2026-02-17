let fantasmasAtivos = true;

document.getElementById('toggleButton').addEventListener('click', () => {
    fantasmasAtivos = !fantasmasAtivos;
    document.getElementById('toggleButton').textContent = fantasmasAtivos ? 'Desativar fantasma' : 'Ativar fantasma';
});

function criarFantasma() {
    if (!fantasmasAtivos) return;

    const ghost = document.createElement('div');
    ghost.className = 'ghost';
    ghost.textContent = '👻';

    // Posição aleatória
    ghost.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    ghost.style.top = '-50px';

    // Coloca diretamente no body
    document.body.appendChild(ghost);

    // Duração aleatória da animação
    ghost.style.animationDuration = (2 + Math.random() * 3) + 's';

    // Remove após a animação terminar
    ghost.addEventListener('animationend', () => ghost.remove());
}

// Cria fantasmas a cada 500ms
setInterval(criarFantasma, 500);
