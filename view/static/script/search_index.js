//Barra de pesquisa
const filmes = {
    "Acao": [
        { "id": 1, "nome": "Alerta Vermelho", "img": "../../static/img/ação/alerta vermelho.webp", "link": "../generos_filmes/Ação/alertavermelho.html" },
        { "id": 2, "nome": "Até o Último Homem", "img": "../../static/img/ação/ate o ultimo homem.jpg", "link": "../generos_filmes/Ação/ultimohomen.html" },
        { "id": 3, "nome": "Bad Boys", "img": "../../static/img/ação/bad boys.webp", "link": "../generos_filmes/Ação/badboys.html" },
        { "id": 4, "nome": "Clube da Luta", "img": "../../static/img/ação/clube da luta.webp", "link": "../generos_filmes/Ação/clube_luta.html" },
        { "id": 5, "nome": "Duro de Matar", "img": "../../static/img/ação/duro de matar.jpg", "link": "../generos_filmes/Ação/durodematar.html" },
        { "id": 6, "nome": "Missão Impossível", "img": "../../static/img/ação/missão impossivel.jpg", "link": "../generos_filmes/Ação/missaoimpossivel.html" },
        { "id": 7, "nome": "Exterminador do Futuro", "img": "../../static/img/ação/exterminador do futuro.webp", "link": "../generos_filmes/Ação/exterminador.html" },
        { "id": 8, "nome": "Gladiador", "img": "../../static/img/ação/gladiador.jpg", "link": "../generos_filmes/Ação/gladiador.html" },
        { "id": 9, "nome": "John Wick", "img": "../../static/img/ação/John Wick.webp", "link": "../generos_filmes/Ação/johnwick.html" },
        { "id": 10, "nome": "Mad Max", "img": "../../static/img/ação/Mad Max.jpg", "link": "../generos_filmes/Ação/madmax.html" },
        { "id": 11, "nome": "Mercenários", "img": "../../static/img/ação/mercenarios.jpg", "link": "../generos_filmes/Ação/mercenarios.html" },
        { "id": 12, "nome": "O Protetor", "img": "../../static/img/ação/O protetor.webp", "link": "../generos_filmes/Ação/protetor.html" }
    ],
    "Animacao": [
        { "id": 13, "nome": "A Noiva Cadáver", "img": "../../static/img/animação/a noiva cadaver.jpg", "link": "../generos_filmes/Animação/noiva.html" },
        { "id": 14, "nome": "Castelo Animado", "img": "../../static/img/animação/castelo animado.jpg", "link": "../generos_filmes/Animação/castelo.html" },
        { "id": 15, "nome": "Coraline", "img": "../../static/img/animação/coraline.jpg", "link": "../generos_filmes/Animação/coraline.html" },
        { "id": 16, "nome": "Era do Gelo", "img": "../../static/img/animação/era do gelo.webp", "link": "../generos_filmes/Animação/eradogelo.html" },
        { "id": 17, "nome": "Homem Aranha", "img": "../../static/img/animação/homem aranha.jpg", "link": "../generos_filmes/Animação/spiderman.html" },
        { "id": 18, "nome": "Kung Fu Panda", "img": "../../static/img/animação/kung fu.jpg", "link": "../generos_filmes/Animação/kungfupanda.html" },
        { "id": 19, "nome": "Lorax", "img": "../../static/img/animação/lorax.jpg", "link": "../generos_filmes/Animação/lorax.html" },
        { "id": 20, "nome": "Os Incríveis", "img": "../../static/img/animação/os incriveis.jpg", "link": "../generos_filmes/Animação/incriveis.html" },
        { "id": 21, "nome": "Os Pequeninos", "img": "../../static/img/animação/os pequeninos.webp", "link": "../generos_filmes/Animação/ospequeninos.html" },
        { "id": 22, "nome": "Por Água Abaixo", "img": "../../static/img/animação/por agua abaixo.jpg", "link": "../generos_filmes/Animação/poragua.html" },
        { "id": 23, "nome": "Ratatouille", "img": "../../static/img/animação/ratatuli.jpg", "link": "../generos_filmes/Animação/ratatuli.html" },
        { "id": 24, "nome": "Up Altas Aventuras", "img": "../../static/img/animação/up altas aventuras.jpg", "link": "../generos_filmes/Animação/upaltas.html" }
    ],
    "Brasileiro": [
        { "id": 25, "nome": "Bacurau", "img": "../../static/img/brasileiro/bacurau.jpg", "link": "../generos_filmes/Braseleiro/bacurau.html" },
        { "id": 26, "nome": "Capitães da Areia", "img": "../../static/img/brasileiro/capitaes da areia.jpg", "link": "../generos_filmes/Braseleiro/areia.html" },
        { "id": 27, "nome": "Carandiru", "img": "../../static/img/brasileiro/carandiru.jpg", "link": "../generos_filmes/Braseleiro/carandiru.html" },
        { "id": 28, "nome": "Central do Brasil", "img": "../../static/img/brasileiro/cemtral brasil.jpg", "link": "../generos_filmes/Braseleiro/central.html" },
        { "id": 29, "nome": "Cidade de Deus", "img": "../../static/img/brasileiro/cidade de deus.jpg", "link": "../generos_filmes/Braseleiro/cidadeDeus.html" },
        { "id": 30, "nome": "Estômago", "img": "../../static/img/brasileiro/Estômago.jpg", "link": "../generos_filmes/Braseleiro/estomago.html" },
        { "id": 31, "nome": "Maníaco do Parque", "img": "../../static/img/brasileiro/maniaco do parque.jpg", "link": "../generos_filmes/Braseleiro/maniacoP.html" },
        { "id": 32, "nome": "Minha Mãe é uma Peça", "img": "../../static/img/brasileiro/Minha Mãe é uma Peça.jpg", "link": "../generos_filmes/Braseleiro/maepeça.html" },
        { "id": 33, "nome": "O Palhaço", "img": "../../static/img/brasileiro/o palhaço.jpg", "link": "../generos_filmes/Braseleiro/palhaço.html" },
        { "id": 34, "nome": "Reflexões de um Liquidificador", "img": "../../static/img/brasileiro/reflexoes de um liquidificador.jpg", "link": "../generos_filmes/Braseleiro/reflexoesL.html" },
        { "id": 35, "nome": "Se Eu Fosse Você", "img": "../../static/img/brasileiro/Se Eu Fosse Você.jpg", "link": "../generos_filmes/Braseleiro/sefossevc.html" },
        { "id": 36, "nome": "Sonhos Roubados", "img": "../../static/img/brasileiro/sonhos roubados.jpg", "link": "../generos_filmes/Braseleiro/sonhoroubados.html" }
    ],
    "Comedia": [
        { "id": 37, "nome": "As Branquelas", "img": "../../static/img/comedia/As branquelas.jpeg", "link": "../generos_filmes/Comedia/branquelas.html" },
        { "id": 38, "nome": "Click", "img": "../../static/img/comedia/Click.jpg", "link": "../generos_filmes/Comedia/click.html" },
        { "id": 39, "nome": "Deadpool", "img": "../../static/img/comedia/DeadPool.png", "link": "../generos_filmes/Comedia/deadpool.html" },
        { "id": 40, "nome": "Esposa de Mentirinha", "img": "../../static/img/comedia/esposa de mentirinhae.jpg", "link": "../generos_filmes/Comedia/esposa.html" },
        { "id": 41, "nome": "Férias Frustradas", "img": "../../static/img/comedia/ferias frustadas.jpg", "link": "../generos_filmes/Comedia/feriasfrustadas.html" },
        { "id": 42, "nome": "SuperBad", "img": "../../static/img/comedia/SuperBad.webp", "link": "../generos_filmes/Comedia/superbad.html" },
        { "id": 43, "nome": "Gente Grande 2", "img": "../../static/img/comedia/gente grande 2.jpg", "link": "../generos_filmes/Comedia/gentegrande2.html" },
        { "id": 44, "nome": "Debi e Loide", "img": "../../static/img/comedia/debi$loide.jfif", "link": "../generos_filmes/Comedia/debiloide.html" },
        { "id": 45, "nome": "Jojo Rabbit", "img": "../../static/img/comedia/Jojo rabbit.webp", "link": "../generos_filmes/Comedia/jojorabbit.html" },
        { "id": 46, "nome": "O Virgem aos 40", "img": "../../static/img/comedia/O virgem aos 40.webp", "link": "../generos_filmes/Comedia/virgem40.html" },
        { "id": 47, "nome": "Os 6 Ridículos", "img": "../../static/img/comedia/Os6ridiculos.jpg", "link": "../generos_filmes/Comedia/6ridiculos.html" },
        { "id": 48, "nome": "Segurança de Shopping", "img": "../../static/img/comedia/Segurança de guarda.webp", "link": "../generos_filmes/Comedia/segurança.html" }
    ],
    "Ficcao": [
        { "id": 49, "nome": "Alien", "img": "../../static/img/ficção/alien.webp", "link": "../generos_filmes/Ficção/alien.html" },
        { "id": 50, "nome": "Blade Runner", "img": "../../static/img/ficção/blade runner.jpg", "link": "../generos_filmes/Ficção/bladerunner.html" },
        { "id": 51, "nome": "Guardiões", "img": "../../static/img/ficção/guardião.webp", "link": "../generos_filmes/Ficção/guardioes.html" },
        { "id": 52, "nome": "Harry Potter", "img": "../../static/img/ficção/harry potter.jpg", "link": "../generos_filmes/Ficção/harry.html" },
        { "id": 53, "nome": "Jurassic Park", "img": "../../static/img/ficção/jurassic park.jpg", "link": "../generos_filmes/Ficção/jurasicpark.html" },
        { "id": 54, "nome": "Lugar Silencioso", "img": "../../static/img/ficção/lugar silencioso.webp", "link": "../generos_filmes/Ficção/jurasicpark.html" },
        { "id": 55, "nome": "Matrix", "img": "../../static/img/ficção/matrix.jpg", "link": "../generos_filmes/Ficção/matrix.html" },
        { "id": 56, "nome": "O Show de Truman", "img": "../../static/img/ficção/o show de trumam.webp", "link": "../generos_filmes/Ficção/show.html" },
        { "id": 57, "nome": "Piratas do Caribe", "img": "../../static/img/ficção/pirata do caribe.jpg", "link": "../generos_filmes/Ficção/piratas.html" },
        { "id": 58, "nome": "Star Wars", "img": "../../static/img/ficção/star wars.png", "link": "../generos_filmes/Ficção/star.html" },
        { "id": 59, "nome": "Uncharted", "img": "../../static/img/ficção/uncharted.webp", "link": "../generos_filmes/Ficção/uncharted.html" },
        { "id": 60, "nome": "Interstellar", "img": "../../static/img/ficção/interstellar.webp", "link": "../generos_filmes/Ficção/interstelar.html" }
    ],
    "Romance": [
        { "id": 61, "nome": "Antes de Amanhecer", "img": "../../static/img/romance/Antes de amanhecer.webp", "link": "../generos_filmes/Romance/antesdeamanhecer.html" },
        { "id": 62, "nome": "Azul é a Cor Mais Quente", "img": "../../static/img/romance/Azul é a cor mais quente.jpg", "link": "../generos_filmes/Romance/Azuleacormaisquente.html" },
        { "id": 63, "nome": "Como Perder um Homem", "img": "../../static/img/romance/como perder um homem.webp", "link": "../generos_filmes/Romance/comoperderumhomem.html" },
        { "id": 64, "nome": "Diário de uma Paixão", "img": "../../static/img/romance/Diario de uma paixão.jpg", "link": "../generos_filmes/Romance/diariopaixão.html" },
        { "id": 65, "nome": "Doce Novembro", "img": "../../static/img/romance/Doce Novembro.jpg", "link": "../generos_filmes/Romance/docenovembro.html" },
        { "id": 66, "nome": "Lembranças", "img": "../../static/img/romance/Lembranças.webp", "link": "../generos_filmes/Romance/lembranças.html" },
        { "id": 67, "nome": "Me Chame Pelo Seu Nome", "img": "../../static/img/romance/Me chame pelo seu nome.webp", "link": "../generos_filmes/Romance/mechamepelonome.html" },
        { "id": 68, "nome": "Na Natureza Selvagem", "img": "../../static/img/romance/Na Natureza Selvagem.jpg", "link": "../generos_filmes/Romance/naturezaselvagem.html" },
        { "id": 69, "nome": "O Paciente Inglês", "img": "../../static/img/romance/O paciente inglês.jpg", "link": "../generos_filmes/Romance/pacienteingles.html" },
        { "id": 70, "nome": "Orgulho e Preconceito", "img": "../../static/img/romance/Orgulho e preconceito.webp", "link": "../generos_filmes/Romance/orgulho&preconceito.html" },
        { "id": 71, "nome": "P.S. Eu Te Amo", "img": "../../static/img/romance/P.S. Eu Te Amo.jpg", "link": "../generos_filmes/Romance/iloveyou.html" },
        { "id": 72, "nome": "Retrato de uma Jovem em Chamas", "img": "../../static/img/romance/Retrato de uma Jovem em Chamas.webp", "link": "../generos_filmes/Romance/retrato.html" }
    ],
    "Terror": [
        { "id": 73, "nome": "A Bruxa", "img": "../../static/img/terror/A bruxa.webp", "link": "../generos_filmes/terror/abruxa.html" },
        { "id": 74, "nome": "A Entidade", "img": "../../static/img/terror/A entidade.jpg", "link": "../generos_filmes/terror/entidade.html" },
        { "id": 75, "nome": "Atividade Paranormal", "img": "../../static/img/terror/Atividade Paranormal.webp", "link": "../generos_filmes/terror/paranormal.html" },
        { "id": 76, "nome": "Corra!", "img": "../../static/img/terror/Corra!.webp", "link": "../generos_filmes/terror/corra.html" },
        { "id": 77, "nome": "Hereditário", "img": "../../static/img/terror/Hereditario.jpg", "link": "../generos_filmes/terror/hereditario.html" },
        { "id": 78, "nome": "Invocação do Mal", "img": "../../static/img/terror/invocação do mal.png", "link": "../generos_filmes/terror/invocaçaõ.html" },
        { "id": 79, "nome": "It a Coisa", "img": "../../static/img/terror/it a coisa.webp", "link": "../generos_filmes/terror/it.html" },
        { "id": 80, "nome": "Mama", "img": "../../static/img/terror/mama.jpg", "link": "../generos_filmes/terror/mama.html" },
        { "id": 81, "nome": "Massacre da Serra Elétrica", "img": "../../static/img/terror/massacre da serra eletrica.webp", "link": "../generos_filmes/terror/massacre.html" },
        { "id": 82, "nome": "O Culto de Chucky", "img": "../../static/img/terror/o culto de chuck.webp", "link": "../generos_filmes/terror/chuck.html" },
        { "id": 83, "nome": "O Exorcista", "img": "../../static/img/terror/O exorcista.webp", "link": "../generos_filmes/terror/exorcita.html" },
        { "id": 84, "nome": "O Iluminado", "img": "../../static/img/terror/O iluminado.jpg", "link": "../generos_filmes/terror/iluminado.html" }
    ]
}

const campoBusca = document.getElementById('pesquisa');
const containerResultados = document.getElementById('resultados-busca');

function normalize(value) {
    return (value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

const elementosParaEsconder = [
    document.querySelector('.sliderAutoTrakio'),
    document.querySelector('.gen'),
    document.querySelector('.generos'),
    ...document.querySelectorAll('.categoria'),
    ...document.querySelectorAll('.linha-filmes'),
    document.querySelector('footer')
];

if (!campoBusca || !containerResultados) {
    console.warn('Busca não inicializada: #pesquisa ou #resultados-busca não encontrado.');
} else {
campoBusca.addEventListener('input', () => {
    const termo = normalize(campoBusca.value);

    if (termo === "") {
        elementosParaEsconder.forEach(el => { if(el) el.style.display = 'block'; });
        document.querySelectorAll('.linha-filmes').forEach(el => el.style.display = 'flex');
        containerResultados.innerHTML = "";
        return;
    }

    // Esconde o conteúdo original
    elementosParaEsconder.forEach(el => { if(el) el.style.display = 'none'; });

    let achados = [];
    for (let genero in filmes) {
        const filtro = filmes[genero].filter((f) => normalize(f.nome).includes(termo));
        achados = [...achados, ...filtro];
    }

    renderizarBusca(achados);
});
}

function renderizarBusca(lista) {
    if (lista.length === 0) {
        containerResultados.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 50vh; width: 100%; text-align: center;">
                <h2 style="color: white; font-family: sans-serif;">Não achamos seu filme 😕</h2>
            </div>`;
        return;
    }

    const cards = lista.map(f => {
        const imgPath = f.img;
        const linkPath = f.link;

        return `
            <div style="width: 180px; margin: 20px; text-align: center; transition: transform 0.3s;">
                <a href="${linkPath}" style="text-decoration: none; color: white;">
                    <img src="${imgPath}" style="width: 100%; border-radius: 8px; border: 2px solid #E50914; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                    <p style="margin-top: 10px; font-family: sans-serif; font-size: 14px;">${f.nome}</p>
                </a>
            </div>`;
    }).join('');

    containerResultados.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; width: 100%; padding: 40px 0;">
            <h2 style="color: white; font-family: sans-serif; margin-bottom: 30px; border-bottom: 2px solid #E50914; padding-bottom: 10px;">Encontramos seu filme! 🎬</h2>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; width: 100%;">
                ${cards}
            </div>
        </div>`;
}
