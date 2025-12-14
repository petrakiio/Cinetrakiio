let heartsAtivos = true; // controla se os corações aparecem

function criarCoracao() {
    if (!heartsAtivos) return; // se desativado, não cria

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw"; // posição horizontal aleatória
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s"; // duração aleatória
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// cria corações continuamente
const intervalID = setInterval(criarCoracao, 300);

// botão para ativar/desativar
const btn = document.getElementById("toggleButton");
btn.addEventListener("click", () => {
    heartsAtivos = !heartsAtivos;
    btn.textContent = heartsAtivos ? "Desativar Corações" : "Ativar Corações";
});
