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
        { name: "John Wick", page: "../generos_filmes/Ação/johnwick.html", img: "../../static/img/ação/John Wick.webp" },
        { name: "Gladiador", page: "../generos_filmes/Ação/gladiador.html", img: "../../static/img/ação/gladiador.jpg" },
        { name: "Missão Impossível", page: "../generos_filmes/Ação/missaoimpossivel.html", img: "../../static/img/ação/missão impossivel.jpg" },
        { name: "Mad Max", page: "../generos_filmes/Ação/madmax.html", img: "../../static/img/ação/Mad Max.jpg" },
        { name: "Mercenários", page: "../generos_filmes/Ação/mercenarios.html", img: "../../static/img/ação/mercenarios.jpg" },
        { name: "Duro de Matar", page: "../generos_filmes/Ação/durodematar.html", img: "../../static/img/ação/duro de matar.jpg" },
      ],
    },
    {
      title: "Destaques de Comédia",
      tag: "Comédia",
      genre: "comedia",
      pick: 4,
      movies: [
        { name: "As Branquelas", page: "../generos_filmes/Comedia/branquelas.html", img: "../../static/img/comedia/As branquelas.jpeg" },
        { name: "Click", page: "../generos_filmes/Comedia/click.html", img: "../../static/img/comedia/Click.jpg" },
        { name: "Superbad", page: "../generos_filmes/Comedia/superbad.html", img: "../../static/img/comedia/SuperBad.webp" },
        { name: "Gente Grande 2", page: "../generos_filmes/Comedia/gentegrande2.html", img: "../../static/img/comedia/gente grande 2.jpg" },
        { name: "Deadpool", page: "../generos_filmes/Comedia/deadpool.html", img: "../../static/img/comedia/DeadPool.png" },
        { name: "Jojo Rabbit", page: "../generos_filmes/Comedia/jojorabbit.html", img: "../../static/img/comedia/Jojo rabbit.webp" },
      ],
    },
    {
      title: "Destaques de Ficção",
      tag: "Ficção",
      genre: "ficcao",
      pick: 4,
      movies: [
        { name: "Interestelar", page: "../generos_filmes/Ficção/interstelar.html", img: "../../static/img/ficção/interstellar.webp" },
        { name: "Matrix", page: "../generos_filmes/Ficção/matrix.html", img: "../../static/img/ficção/matrix.jpg" },
        { name: "Star Wars", page: "../generos_filmes/Ficção/star.html", img: "../../static/img/ficção/star wars.png" },
        { name: "Jurassic Park", page: "../generos_filmes/Ficção/jurasicpark.html", img: "../../static/img/ficção/jurassic park.jpg" },
        { name: "Alien", page: "../generos_filmes/Ficção/alien.html", img: "../../static/img/ficção/alien.webp" },
        { name: "Blade Runner", page: "../generos_filmes/Ficção/bladerunner.html", img: "../../static/img/ficção/blade runner.jpg" },
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
