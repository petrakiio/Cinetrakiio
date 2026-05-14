(function () {
  const container = document.getElementById("cards-procedural");
  if (!container) return;

  const sections = [
    {
      title: "Destaques de Ação",
      tag: "Ação",
      genre: "acao",
      pick: 4,
      movies: [
        { name: "John Wick", page: "../filmes/acao/johnwick.html", img: "../../assets/img/acao/John Wick.webp" },
        { name: "Gladiador", page: "../filmes/acao/gladiador.html", img: "../../assets/img/acao/gladiador.jpg" },
        { name: "Missão Impossível", page: "../filmes/acao/missaoimpossivel.html", img: "../../assets/img/acao/missão impossivel.jpg" },
        { name: "Mad Max", page: "../filmes/acao/madmax.html", img: "../../assets/img/acao/Mad Max.jpg" },
        { name: "Mercenários", page: "../filmes/acao/mercenarios.html", img: "../../assets/img/acao/mercenarios.jpg" },
        { name: "Duro de Matar", page: "../filmes/acao/durodematar.html", img: "../../assets/img/acao/duro de matar.jpg" },
      ],
    },
    {
      title: "Destaques de Comédia",
      tag: "Comédia",
      genre: "comedia",
      pick: 4,
      movies: [
        { name: "As Branquelas", page: "../filmes/comedia/branquelas.html", img: "../../assets/img/comedia/As branquelas.jpeg" },
        { name: "Click", page: "../filmes/comedia/click.html", img: "../../assets/img/comedia/Click.jpg" },
        { name: "Superbad", page: "../filmes/comedia/superbad.html", img: "../../assets/img/comedia/SuperBad.webp" },
        { name: "Gente Grande 2", page: "../filmes/comedia/gentegrande2.html", img: "../../assets/img/comedia/gente grande 2.jpg" },
        { name: "Deadpool", page: "../filmes/comedia/deadpool.html", img: "../../assets/img/comedia/DeadPool.png" },
        { name: "Jojo Rabbit", page: "../filmes/comedia/jojorabbit.html", img: "../../assets/img/comedia/Jojo rabbit.webp" },
      ],
    },
    {
      title: "Destaques de Ficção",
      tag: "Ficção",
      genre: "ficcao",
      pick: 4,
      movies: [
        { name: "Interestelar", page: "../filmes/ficcao/interstelar.html", img: "../../assets/img/ficcao/interstellar.webp" },
        { name: "Matrix", page: "../filmes/ficcao/matrix.html", img: "../../assets/img/ficcao/matrix.jpg" },
        { name: "Star Wars", page: "../filmes/ficcao/star.html", img: "../../assets/img/ficcao/star wars.png" },
        { name: "Jurassic Park", page: "../filmes/ficcao/jurasicpark.html", img: "../../assets/img/ficcao/jurassic park.jpg" },
        { name: "Alien", page: "../filmes/ficcao/alien.html", img: "../../assets/img/ficcao/alien.webp" },
        { name: "Blade Runner", page: "../filmes/ficcao/bladerunner.html", img: "../../assets/img/ficcao/blade runner.jpg" },
      ],
    },
  ];

  function pickRandomUnique(list, count) {
    const pool = [...list];
    const result = [];
    while (pool.length && result.length < count) {
      const index = Math.floor(Math.random() * pool.length);
      result.push(pool.splice(index, 1)[0]);
    }
    return result;
  }

  function cardTemplate(movie, tag) {
    return `
      <div class="filme">
        <a class="filme-card" href="${movie.page}">
          <img src="${encodeURI(movie.img)}" alt="${movie.name}">
          <div class="filme-info">
            <h3>${movie.name}</h3>
            <span>${tag}</span>
          </div>
        </a>
      </div>
    `;
  }

  const html = sections
    .map((section) => {
      const selected = pickRandomUnique(section.movies, section.pick);
      const cards = selected.map((movie) => cardTemplate(movie, section.tag)).join("");
      return `<h2 class="categoria">${section.title}</h2><div class="linha-filmes">${cards}</div>`;
    })
    .join("");

  container.innerHTML = html;
})();
