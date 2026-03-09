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
        { name: "John Wick", slug: "john-wick", img: "/static/img/ação/John Wick.webp" },
        { name: "Gladiador", slug: "gladiador", img: "/static/img/ação/gladiador.jpg" },
        { name: "Missão Impossível", slug: "missao-impossivel", img: "/static/img/ação/missão impossivel.jpg" },
        { name: "Mad Max", slug: "madmax", img: "/static/img/ação/Mad Max.jpg" },
        { name: "Mercenários", slug: "mercenarios", img: "/static/img/ação/mercenarios.jpg" },
        { name: "Duro de Matar", slug: "duro-de-matar", img: "/static/img/ação/duro de matar.jpg" },
      ],
    },
    {
      title: "Destaques de Comédia",
      tag: "Comédia",
      genre: "comedia",
      pick: 4,
      movies: [
        { name: "As Branquelas", slug: "as-branquelas", img: "/static/img/comedia/As branquelas.jpeg" },
        { name: "Click", slug: "click", img: "/static/img/comedia/Click.jpg" },
        { name: "Superbad", slug: "superbad", img: "/static/img/comedia/SuperBad.webp" },
        { name: "Gente Grande 2", slug: "gente-grande-2", img: "/static/img/comedia/gente grande 2.jpg" },
        { name: "Deadpool", slug: "deadpool", img: "/static/img/comedia/DeadPool.png" },
        { name: "Jojo Rabbit", slug: "jojorabbit", img: "/static/img/comedia/Jojo rabbit.webp" },
      ],
    },
    {
      title: "Destaques de Ficção",
      tag: "Ficção",
      genre: "ficcao",
      pick: 4,
      movies: [
        { name: "Interestelar", slug: "interstelar", img: "/static/img/ficção/interstellar.webp" },
        { name: "Matrix", slug: "matrix", img: "/static/img/ficção/matrix.jpg" },
        { name: "Star Wars", slug: "star", img: "/static/img/ficção/star wars.png" },
        { name: "Jurassic Park", slug: "jurasicpark", img: "/static/img/ficção/jurassic park.jpg" },
        { name: "Alien", slug: "alien", img: "/static/img/ficção/alien.webp" },
        { name: "Blade Runner", slug: "bladerunner", img: "/static/img/ficção/blade runner.jpg" },
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

  function cardTemplate(movie, genre, tag) {
    return `
      <div class="filme">
        <a class="filme-card" href="/filmes/${genre}/${movie.slug}/">
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
      const cards = selected.map((movie) => cardTemplate(movie, section.genre, section.tag)).join("");
      return `<h2 class="categoria">${section.title}</h2><div class="linha-filmes">${cards}</div>`;
    })
    .join("");

  container.innerHTML = html;
})();
