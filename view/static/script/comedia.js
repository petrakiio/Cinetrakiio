document.addEventListener("DOMContentLoaded", () => {
    let risadasAtivas = true;
    const emojis = ["😂", "😹", "😆"];

    function criarRiso() {
        if (!risadasAtivas) return;

        emojis.forEach(emoji => {
            const riso = document.createElement("div");
            riso.className = "riso";
            riso.textContent = emoji;
            riso.style.left = Math.random() * 100 + "vw";
            riso.style.animationDuration = (Math.random() * 3 + 3) + "s";
            document.body.appendChild(riso);

            setTimeout(() => {
                riso.remove();
            }, parseFloat(riso.style.animationDuration) * 1000);
        });
    }

    const intervalID = setInterval(criarRiso, 1000);

    const btn = document.getElementById("toggleButton");
    btn.addEventListener("click", () => {
        risadasAtivas = !risadasAtivas;
        btn.textContent = risadasAtivas ? "Desativar Risadas" : "Ativar Risadas";
    });
});