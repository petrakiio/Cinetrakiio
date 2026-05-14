//Barra de pesquisa
const filmes = {
    "Acao": [
        { "id": 1, "nome": "Alerta Vermelho", "img": "../../assets/img/acao/alerta vermelho.webp", "link": "../filmes/acao/alertavermelho.html" },
        { "id": 2, "nome": "Até o Último Homem", "img": "../../assets/img/acao/ate o ultimo homem.jpg", "link": "../filmes/acao/ultimohomen.html" },
        { "id": 3, "nome": "Bad Boys", "img": "../../assets/img/acao/bad boys.webp", "link": "../filmes/acao/badboys.html" },
        { "id": 4, "nome": "Clube da Luta", "img": "../../assets/img/acao/clube da luta.webp", "link": "../filmes/acao/clube_luta.html" },
        { "id": 5, "nome": "Duro de Matar", "img": "../../assets/img/acao/duro de matar.jpg", "link": "../filmes/acao/durodematar.html" },
        { "id": 6, "nome": "Missão Impossível", "img": "../../assets/img/acao/missão impossivel.jpg", "link": "../filmes/acao/missaoimpossivel.html" },
        { "id": 7, "nome": "Exterminador do Futuro", "img": "../../assets/img/acao/exterminador do futuro.webp", "link": "../filmes/acao/exterminador.html" },
        { "id": 8, "nome": "Gladiador", "img": "../../assets/img/acao/gladiador.jpg", "link": "../filmes/acao/gladiador.html" },
        { "id": 9, "nome": "John Wick", "img": "../../assets/img/acao/John Wick.webp", "link": "../filmes/acao/johnwick.html" },
        { "id": 10, "nome": "Mad Max", "img": "../../assets/img/acao/Mad Max.jpg", "link": "../filmes/acao/madmax.html" },
        { "id": 11, "nome": "Mercenários", "img": "../../assets/img/acao/mercenarios.jpg", "link": "../filmes/acao/mercenarios.html" },
        { "id": 12, "nome": "O Protetor", "img": "../../assets/img/acao/O protetor.webp", "link": "../filmes/acao/protetor.html" }
    ],
    "Animacao": [
        { "id": 13, "nome": "A Noiva Cadáver", "img": "../../assets/img/animacao/a noiva cadaver.jpg", "link": "../filmes/animacao/noiva.html" },
        { "id": 14, "nome": "Castelo Animado", "img": "../../assets/img/animacao/castelo animado.jpg", "link": "../filmes/animacao/castelo.html" },
        { "id": 15, "nome": "Coraline", "img": "../../assets/img/animacao/coraline.jpg", "link": "../filmes/animacao/coraline.html" },
        { "id": 16, "nome": "Era do Gelo", "img": "../../assets/img/animacao/era do gelo.webp", "link": "../filmes/animacao/eradogelo.html" },
        { "id": 17, "nome": "Homem Aranha", "img": "../../assets/img/animacao/homem aranha.jpg", "link": "../filmes/animacao/spiderman.html" },
        { "id": 18, "nome": "Kung Fu Panda", "img": "../../assets/img/animacao/kung fu.jpg", "link": "../filmes/animacao/kungfupanda.html" },
        { "id": 19, "nome": "Lorax", "img": "../../assets/img/animacao/lorax.jpg", "link": "../filmes/animacao/lorax.html" },
        { "id": 20, "nome": "Os Incríveis", "img": "../../assets/img/animacao/os incriveis.jpg", "link": "../filmes/animacao/incriveis.html" },
        { "id": 21, "nome": "Os Pequeninos", "img": "../../assets/img/animacao/os pequeninos.webp", "link": "../filmes/animacao/ospequeninos.html" },
        { "id": 22, "nome": "Por Água Abaixo", "img": "../../assets/img/animacao/por agua abaixo.jpg", "link": "../filmes/animacao/poragua.html" },
        { "id": 23, "nome": "Ratatouille", "img": "../../assets/img/animacao/ratatuli.jpg", "link": "../filmes/animacao/ratatuli.html" },
        { "id": 24, "nome": "Up Altas Aventuras", "img": "../../assets/img/animacao/up altas aventuras.jpg", "link": "../filmes/animacao/upaltas.html" }
    ],
    "Brasileiro": [
        { "id": 25, "nome": "Bacurau", "img": "../../assets/img/brasileiro/bacurau.jpg", "link": "../filmes/brasileiro/bacurau.html" },
        { "id": 26, "nome": "Capitães da Areia", "img": "../../assets/img/brasileiro/capitaes da areia.jpg", "link": "../filmes/brasileiro/areia.html" },
        { "id": 27, "nome": "Carandiru", "img": "../../assets/img/brasileiro/carandiru.jpg", "link": "../filmes/brasileiro/carandiru.html" },
        { "id": 28, "nome": "Central do Brasil", "img": "../../assets/img/brasileiro/cemtral brasil.jpg", "link": "../filmes/brasileiro/central.html" },
        { "id": 29, "nome": "Cidade de Deus", "img": "../../assets/img/brasileiro/cidade de deus.jpg", "link": "../filmes/brasileiro/cidadeDeus.html" },
        { "id": 30, "nome": "Estômago", "img": "../../assets/img/brasileiro/Estômago.jpg", "link": "../filmes/brasileiro/estomago.html" },
        { "id": 31, "nome": "Maníaco do Parque", "img": "../../assets/img/brasileiro/maniaco do parque.jpg", "link": "../filmes/brasileiro/maniacoP.html" },
        { "id": 32, "nome": "Minha Mãe é uma Peça", "img": "../../assets/img/brasileiro/Minha Mãe é uma Peça.jpg", "link": "../filmes/brasileiro/maepeça.html" },
        { "id": 33, "nome": "O Palhaço", "img": "../../assets/img/brasileiro/o palhaço.jpg", "link": "../filmes/brasileiro/palhaço.html" },
        { "id": 34, "nome": "Reflexões de um Liquidificador", "img": "../../assets/img/brasileiro/reflexoes de um liquidificador.jpg", "link": "../filmes/brasileiro/reflexoesL.html" },
        { "id": 35, "nome": "Se Eu Fosse Você", "img": "../../assets/img/brasileiro/Se Eu Fosse Você.jpg", "link": "../filmes/brasileiro/sefossevc.html" },
        { "id": 36, "nome": "Sonhos Roubados", "img": "../../assets/img/brasileiro/sonhos roubados.jpg", "link": "../filmes/brasileiro/sonhoroubados.html" }
    ],
    "Comedia": [
        { "id": 37, "nome": "As Branquelas", "img": "../../assets/img/comedia/As branquelas.jpeg", "link": "../filmes/comedia/branquelas.html" },
        { "id": 38, "nome": "Click", "img": "../../assets/img/comedia/Click.jpg", "link": "../filmes/comedia/click.html" },
        { "id": 39, "nome": "Deadpool", "img": "../../assets/img/comedia/DeadPool.png", "link": "../filmes/comedia/deadpool.html" },
        { "id": 40, "nome": "Esposa de Mentirinha", "img": "../../assets/img/comedia/esposa de mentirinhae.jpg", "link": "../filmes/comedia/esposa.html" },
        { "id": 41, "nome": "Férias Frustradas", "img": "../../assets/img/comedia/ferias frustadas.jpg", "link": "../filmes/comedia/feriasfrustadas.html" },
        { "id": 42, "nome": "SuperBad", "img": "../../assets/img/comedia/SuperBad.webp", "link": "../filmes/comedia/superbad.html" },
        { "id": 43, "nome": "Gente Grande 2", "img": "../../assets/img/comedia/gente grande 2.jpg", "link": "../filmes/comedia/gentegrande2.html" },
        { "id": 44, "nome": "Debi e Loide", "img": "../../assets/img/comedia/debi$loide.jfif", "link": "../filmes/comedia/debiloide.html" },
        { "id": 45, "nome": "Jojo Rabbit", "img": "../../assets/img/comedia/Jojo rabbit.webp", "link": "../filmes/comedia/jojorabbit.html" },
        { "id": 46, "nome": "O Virgem aos 40", "img": "../../assets/img/comedia/O virgem aos 40.webp", "link": "../filmes/comedia/virgem40.html" },
        { "id": 47, "nome": "Os 6 Ridículos", "img": "../../assets/img/comedia/Os6ridiculos.jpg", "link": "../filmes/comedia/6ridiculos.html" },
        { "id": 48, "nome": "Segurança de Shopping", "img": "../../assets/img/comedia/Segurança de guarda.webp", "link": "../filmes/comedia/segurança.html" }
    ],
    "Ficcao": [
        { "id": 49, "nome": "Alien", "img": "../../assets/img/ficcao/alien.webp", "link": "../filmes/ficcao/alien.html" },
        { "id": 50, "nome": "Blade Runner", "img": "../../assets/img/ficcao/blade runner.jpg", "link": "../filmes/ficcao/bladerunner.html" },
        { "id": 51, "nome": "Guardiões", "img": "../../assets/img/ficcao/guardião.webp", "link": "../filmes/ficcao/guardioes.html" },
        { "id": 52, "nome": "Harry Potter", "img": "../../assets/img/ficcao/harry potter.jpg", "link": "../filmes/ficcao/harry.html" },
        { "id": 53, "nome": "Jurassic Park", "img": "../../assets/img/ficcao/jurassic park.jpg", "link": "../filmes/ficcao/jurasicpark.html" },
        { "id": 54, "nome": "Lugar Silencioso", "img": "../../assets/img/ficcao/lugar silencioso.webp", "link": "../filmes/ficcao/jurasicpark.html" },
        { "id": 55, "nome": "Matrix", "img": "../../assets/img/ficcao/matrix.jpg", "link": "../filmes/ficcao/matrix.html" },
        { "id": 56, "nome": "O Show de Truman", "img": "../../assets/img/ficcao/o show de trumam.webp", "link": "../filmes/ficcao/show.html" },
        { "id": 57, "nome": "Piratas do Caribe", "img": "../../assets/img/ficcao/pirata do caribe.jpg", "link": "../filmes/ficcao/piratas.html" },
        { "id": 58, "nome": "Star Wars", "img": "../../assets/img/ficcao/star wars.png", "link": "../filmes/ficcao/star.html" },
        { "id": 59, "nome": "Uncharted", "img": "../../assets/img/ficcao/uncharted.webp", "link": "../filmes/ficcao/uncharted.html" },
        { "id": 60, "nome": "Interstellar", "img": "../../assets/img/ficcao/interstellar.webp", "link": "../filmes/ficcao/interstelar.html" }
    ],
    "Romance": [
        { "id": 61, "nome": "Antes de Amanhecer", "img": "../../assets/img/romance/Antes de amanhecer.webp", "link": "../filmes/romance/antesdeamanhecer.html" },
        { "id": 62, "nome": "Azul é a Cor Mais Quente", "img": "../../assets/img/romance/Azul é a cor mais quente.jpg", "link": "../filmes/romance/Azuleacormaisquente.html" },
        { "id": 63, "nome": "Como Perder um Homem", "img": "../../assets/img/romance/como perder um homem.webp", "link": "../filmes/romance/comoperderumhomem.html" },
        { "id": 64, "nome": "Diário de uma Paixão", "img": "../../assets/img/romance/Diario de uma paixão.jpg", "link": "../filmes/romance/diariopaixão.html" },
        { "id": 65, "nome": "Doce Novembro", "img": "../../assets/img/romance/Doce Novembro.jpg", "link": "../filmes/romance/docenovembro.html" },
        { "id": 66, "nome": "Lembranças", "img": "../../assets/img/romance/Lembranças.webp", "link": "../filmes/romance/lembranças.html" },
        { "id": 67, "nome": "Me Chame Pelo Seu Nome", "img": "../../assets/img/romance/Me chame pelo seu nome.webp", "link": "../filmes/extras/mechamepelonome.html" },
        { "id": 68, "nome": "Na Natureza Selvagem", "img": "../../assets/img/romance/Na Natureza Selvagem.jpg", "link": "../filmes/romance/naturezaselvagem.html" },
        { "id": 69, "nome": "O Paciente Inglês", "img": "../../assets/img/romance/O paciente inglês.jpg", "link": "../filmes/romance/pacienteingles.html" },
        { "id": 70, "nome": "Orgulho e Preconceito", "img": "../../assets/img/romance/Orgulho e preconceito.webp", "link": "../filmes/romance/orgulho&preconceito.html" },
        { "id": 71, "nome": "P.S. Eu Te Amo", "img": "../../assets/img/romance/P.S. Eu Te Amo.jpg", "link": "../filmes/romance/iloveyou.html" },
        { "id": 72, "nome": "Retrato de uma Jovem em Chamas", "img": "../../assets/img/romance/Retrato de uma Jovem em Chamas.webp", "link": "../filmes/romance/retrato.html" }
    ],
    "Terror": [
        { "id": 73, "nome": "A Bruxa", "img": "../../assets/img/terror/A bruxa.webp", "link": "../filmes/terror/abruxa.html" },
        { "id": 74, "nome": "A Entidade", "img": "../../assets/img/terror/A entidade.jpg", "link": "../filmes/terror/entidade.html" },
        { "id": 75, "nome": "Atividade Paranormal", "img": "../../assets/img/terror/Atividade Paranormal.webp", "link": "../filmes/terror/paranormal.html" },
        { "id": 76, "nome": "Corra!", "img": "../../assets/img/terror/Corra!.webp", "link": "../filmes/terror/corra.html" },
        { "id": 77, "nome": "Hereditário", "img": "../../assets/img/terror/Hereditario.jpg", "link": "../filmes/terror/hereditario.html" },
        { "id": 78, "nome": "Invocação do Mal", "img": "../../assets/img/terror/invocação do mal.png", "link": "../filmes/terror/invocaçaõ.html" },
        { "id": 79, "nome": "It a Coisa", "img": "../../assets/img/terror/it a coisa.webp", "link": "../filmes/terror/it.html" },
        { "id": 80, "nome": "Mama", "img": "../../assets/img/terror/mama.jpg", "link": "../filmes/terror/mama.html" },
        { "id": 81, "nome": "Massacre da Serra Elétrica", "img": "../../assets/img/terror/massacre da serra eletrica.webp", "link": "../filmes/terror/massacre.html" },
        { "id": 82, "nome": "O Culto de Chucky", "img": "../../assets/img/terror/o culto de chuck.webp", "link": "../filmes/terror/chuck.html" },
        { "id": 83, "nome": "O Exorcista", "img": "../../assets/img/terror/O exorcista.webp", "link": "../filmes/terror/exorcita.html" },
        { "id": 84, "nome": "O Iluminado", "img": "../../assets/img/terror/O iluminado.jpg", "link": "../filmes/terror/iluminado.html" }
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
