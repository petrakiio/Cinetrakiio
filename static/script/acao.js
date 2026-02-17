let balasAtivas = true;

document.getElementById('toggle').addEventListener('click', () => {
  balasAtivas = !balasAtivas;
  document.getElementById('toggle').textContent = balasAtivas ? "Desativar Balas" : "Ativar Balas";
});

// Função para criar uma bala
function criarBala() {
  if (!balasAtivas) return; // não cria se desativado

  const bala = document.createElement('div');
  bala.className = 'bala';
  bala.textContent = '✏'; // emoji de sniper

  // Posição vertical aleatória
  bala.style.top = Math.random() * (window.innerHeight - 30) + 'px';
  
  // Velocidade aleatória
  const velocidade = Math.random() * 5 + 2; // entre 2 e 7 pixels por frame

  // Adiciona a bala no body
  document.body.appendChild(bala);

  function moverBala() {
    const posAtual = parseFloat(bala.style.left) || -50;
    if (posAtual > window.innerWidth) {
      bala.remove(); // remove quando sai da tela
      return;
    }
    bala.style.left = posAtual + velocidade + 'px';
    requestAnimationFrame(moverBala);
  }

  moverBala();
}

// Criar balas a cada 500ms
setInterval(criarBala, 500);
