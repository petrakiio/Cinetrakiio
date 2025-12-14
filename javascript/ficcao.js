let ovnisAtivos = true;

function criarOvni() {
    if (!ovnisAtivos) return;

    const ovni = document.createElement("div");
    ovni.className = "ovni";
    ovni.textContent = "🛸"; // emoji de ovni
    ovni.style.left = Math.random() * 100 + "vw";
    ovni.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(ovni);

    setTimeout(() => {
        ovni.remove();
    }, parseFloat(ovni.style.animationDuration) * 1000);
}

const intervalID = setInterval(criarOvni, 300);

const btn = document.getElementById("toggleButton");
btn.addEventListener("click", () => {
    ovnisAtivos = !ovnisAtivos;
    btn.textContent = ovnisAtivos ? "Desativar Ovnis" : "Ativar Ovnis";
});