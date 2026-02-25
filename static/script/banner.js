let indiceAtual = 0;
const slides = document.querySelectorAll(".sliderAutoTrakio .slide");

function mostrarSlide(index) {
    slides.forEach((slide) => slide.classList.remove("ativo"));
    slides[index].classList.add("ativo");
}

function proximoSlide() {
    indiceAtual = (indiceAtual + 1) % slides.length;
    mostrarSlide(indiceAtual);
}

mostrarSlide(indiceAtual);

setInterval(proximoSlide, 4000);
