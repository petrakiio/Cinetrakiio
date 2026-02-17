//Barra de pesquisa
const filmes = {
    "Acao": [
        { "id": 1, "nome": "Alerta Vermelho", "img": "../Imagens/ação/alerta vermelho.webp", "link": "./generosP/Ação/alertavermelho.html" },
        { "id": 2, "nome": "Até o Último Homem", "img": "../Imagens/ação/ate o ultimo homem.jpg", "link": "./generosP/Ação/ultimohomen.html" },
        { "id": 3, "nome": "Bad Boys", "img": "../Imagens/ação/bad boys.webp", "link": "./generosP/Ação/badboys.html" },
        { "id": 4, "nome": "Clube da Luta", "img": "../Imagens/ação/clube da luta.webp", "link": "./generosP/Ação/clube_luta.html" },
        { "id": 5, "nome": "Duro de Matar", "img": "../Imagens/ação/duro de matar.jpg", "link": "./generosP/Ação/durodematar.html" },
        { "id": 6, "nome": "Missão Impossível", "img": "../Imagens/ação/missão impossivel.jpg", "link": "./generosP/Ação/missaoimpossivel.html" },
        { "id": 7, "nome": "Exterminador do Futuro", "img": "../Imagens/ação/exterminador do futuro.webp", "link": "./generosP/Ação/exterminador.html" },
        { "id": 8, "nome": "Gladiador", "img": "../Imagens/ação/gladiador.jpg", "link": "./generosP/Ação/gladiador.html" },
        { "id": 9, "nome": "John Wick", "img": "../Imagens/ação/John Wick.webp", "link": "./generosP/Ação/johnwick.html" },
        { "id": 10, "nome": "Mad Max", "img": "../Imagens/ação/Mad Max.jpg", "link": "./generosP/Ação/madmax.html" },
        { "id": 11, "nome": "Mercenários", "img": "../Imagens/ação/mercenarios.jpg", "link": "./generosP/Ação/mercenarios.html" },
        { "id": 12, "nome": "O Protetor", "img": "../Imagens/ação/O protetor.webp", "link": "./generosP/Ação/protetor.html" }
    ],
    "Animacao": [
        { "id": 13, "nome": "A Noiva Cadáver", "img": "../Imagens/animação/a noiva cadaver.jpg", "link": "./generosP/Animação/noiva.html" },
        { "id": 14, "nome": "Castelo Animado", "img": "../Imagens/animação/castelo animado.jpg", "link": "./generosP/Animação/castelo.html" },
        { "id": 15, "nome": "Coraline", "img": "../Imagens/animação/coraline.jpg", "link": "./generosP/Animação/coraline.html" },
        { "id": 16, "nome": "Era do Gelo", "img": "../Imagens/animação/era do gelo.webp", "link": "./generosP/Animação/eradogelo.html" },
        { "id": 17, "nome": "Homem Aranha", "img": "../Imagens/animação/homem aranha.jpg", "link": "./generosP/Animação/spiderman.html" },
        { "id": 18, "nome": "Kung Fu Panda", "img": "../Imagens/animação/kung fu.jpg", "link": "./generosP/Animação/kungfupanda.html" },
        { "id": 19, "nome": "Lorax", "img": "../Imagens/animação/lorax.jpg", "link": "./generosP/Animação/lorax.html" },
        { "id": 20, "nome": "Os Incríveis", "img": "../Imagens/animação/os incriveis.jpg", "link": "./generosP/Animação/incriveis.html" },
        { "id": 21, "nome": "Os Pequeninos", "img": "../Imagens/animação/os pequeninos.webp", "link": "./generosP/Animação/ospequeninos.html" },
        { "id": 22, "nome": "Por Água Abaixo", "img": "../Imagens/animação/por agua abaixo.jpg", "link": "./generosP/Animação/poragua.html" },
        { "id": 23, "nome": "Ratatouille", "img": "../Imagens/animação/ratatuli.jpg", "link": "./generosP/Animação/ratatuli.html" },
        { "id": 24, "nome": "Up Altas Aventuras", "img": "../Imagens/animação/up altas aventuras.jpg", "link": "./generosP/Animação/upaltas.html" }
    ],
    "Brasileiro": [
        { "id": 25, "nome": "Bacurau", "img": "../Imagens/brasileiro/bacurau.jpg", "link": "./generosP/Braseleiro/bacurau.html" },
        { "id": 26, "nome": "Capitães da Areia", "img": "../Imagens/brasileiro/capitaes da areia.jpg", "link": "./generosP/Braseleiro/areia.html" },
        { "id": 27, "nome": "Carandiru", "img": "../Imagens/brasileiro/carandiru.jpg", "link": "./generosP/Braseleiro/carandiru.html" },
        { "id": 28, "nome": "Central do Brasil", "img": "../Imagens/brasileiro/cemtral brasil.jpg", "link": "./generosP/Braseleiro/central.html" },
        { "id": 29, "nome": "Cidade de Deus", "img": "../Imagens/brasileiro/cidade de deus.jpg", "link": "./generosP/Braseleiro/cidadeDeus.html" },
        { "id": 30, "nome": "Estômago", "img": "../Imagens/brasileiro/Estômago.jpg", "link": "./generosP/Braseleiro/estomago.html" },
        { "id": 31, "nome": "Maníaco do Parque", "img": "../Imagens/brasileiro/maniaco do parque.jpg", "link": "./generosP/Braseleiro/maniacoP.html" },
        { "id": 32, "nome": "Minha Mãe é uma Peça", "img": "../Imagens/brasileiro/Minha Mãe é uma Peça.jpg", "link": "./generosP/Braseleiro/maepeça.html" },
        { "id": 33, "nome": "O Palhaço", "img": "../Imagens/brasileiro/o palhaço.jpg", "link": "./generosP/Braseleiro/palhaço.html" },
        { "id": 34, "nome": "Reflexões de um Liquidificador", "img": "../Imagens/brasileiro/reflexoes de um liquidificador.jpg", "link": "./generosP/Braseleiro/reflexoesL.html" },
        { "id": 35, "nome": "Se Eu Fosse Você", "img": "../Imagens/brasileiro/Se Eu Fosse Você.jpg", "link": "./generosP/Braseleiro/sefossevc.html" },
        { "id": 36, "nome": "Sonhos Roubados", "img": "../Imagens/brasileiro/sonhos roubados.jpg", "link": "./generosP/Braseleiro/sonhoroubados.html" }
    ],
    "Comedia": [
        { "id": 37, "nome": "As Branquelas", "img": "../Imagens/comedia/As branquelas.jpeg", "link": "./generosP/Comedia/branquelas.html" },
        { "id": 38, "nome": "Click", "img": "../Imagens/comedia/Click.jpg", "link": "./generosP/Comedia/click.html" },
        { "id": 39, "nome": "Deadpool", "img": "../Imagens/comedia/DeadPool.png", "link": "./generosP/Comedia/deadpool.html" },
        { "id": 40, "nome": "Esposa de Mentirinha", "img": "../Imagens/comedia/esposa de mentirinhae.jpg", "link": "./generosP/Comedia/esposa.html" },
        { "id": 41, "nome": "Férias Frustradas", "img": "../Imagens/comedia/ferias frustadas.jpg", "link": "./generosP/Comedia/feriasfrustadas.html" },
        { "id": 42, "nome": "SuperBad", "img": "../Imagens/comedia/SuperBad.webp", "link": "./generosP/Comedia/superbad.html" },
        { "id": 43, "nome": "Gente Grande 2", "img": "../Imagens/comedia/gente grande 2.jpg", "link": "./generosP/Comedia/gentegrande2.html" },
        { "id": 44, "nome": "Debi e Loide", "img": "../Imagens/comedia/debi$loide.jfif", "link": "./generosP/Comedia/debiloide.html" },
        { "id": 45, "nome": "Jojo Rabbit", "img": "../Imagens/comedia/Jojo rabbit.webp", "link": "./generosP/Comedia/jojorabbit.html" },
        { "id": 46, "nome": "O Virgem aos 40", "img": "../Imagens/comedia/O virgem aos 40.webp", "link": "./generosP/Comedia/virgem40.html" },
        { "id": 47, "nome": "Os 6 Ridículos", "img": "../Imagens/comedia/Os 6 ridiculos.jpg", "link": "./generosP/Comedia/6ridiculos.html" },
        { "id": 48, "nome": "Segurança de Shopping", "img": "../Imagens/comedia/Segurança de guarda.webp", "link": "./generosP/Comedia/segurança.html" }
    ],
    "Ficcao": [
        { "id": 49, "nome": "Alien", "img": "../Imagens/ficção/alien.webp", "link": "./generosP/Ficção/alien.html" },
        { "id": 50, "nome": "Blade Runner", "img": "../Imagens/ficção/blade runner.jpg", "link": "./generosP/Ficção/bladerunner.html" },
        { "id": 51, "nome": "Guardiões", "img": "../Imagens/ficção/guardião.webp", "link": "./generosP/Ficção/guardioes.html" },
        { "id": 52, "nome": "Harry Potter", "img": "../Imagens/ficção/harry potter.jpg", "link": "./generosP/Ficção/harry.html" },
        { "id": 53, "nome": "Jurassic Park", "img": "../Imagens/ficção/jurassic park.jpg", "link": "./generosP/Ficção/jurasicpark.html" },
        { "id": 54, "nome": "Lugar Silencioso", "img": "../Imagens/ficção/lugar silencioso.webp", "link": "./generosP/Ficção/jurasicpark.html" },
        { "id": 55, "nome": "Matrix", "img": "../Imagens/ficção/matrix.jpg", "link": "./generosP/Ficção/matrix.html" },
        { "id": 56, "nome": "O Show de Truman", "img": "../Imagens/ficção/o show de trumam.webp", "link": "./generosP/Ficção/show.html" },
        { "id": 57, "nome": "Piratas do Caribe", "img": "../Imagens/ficção/pirata do caribe.jpg", "link": "./generosP/Ficção/piratas.html" },
        { "id": 58, "nome": "Star Wars", "img": "../Imagens/ficção/star wars.png", "link": "./generosP/Ficção/star.html" },
        { "id": 59, "nome": "Uncharted", "img": "../Imagens/ficção/uncharted.webp", "link": "./generosP/Ficção/uncharted.html" },
        { "id": 60, "nome": "Interstellar", "img": "../Imagens/ficção/interstellar.webp", "link": "./generosP/Ficção/interstelar.html" }
    ],
    "Romance": [
        { "id": 61, "nome": "Antes de Amanhecer", "img": "../Imagens/romance/Antes de amanhecer.webp", "link": "./generosP/Romance/antesdeamanhecer.html" },
        { "id": 62, "nome": "Azul é a Cor Mais Quente", "img": "../Imagens/romance/Azul é a cor mais quente.jpg", "link": "./generosP/Romance/Azuleacormaisquente.html" },
        { "id": 63, "nome": "Como Perder um Homem", "img": "../Imagens/romance/como perder um homem.webp", "link": "./generosP/Romance/comoperderumhomem.html" },
        { "id": 64, "nome": "Diário de uma Paixão", "img": "../Imagens/romance/Diario de uma paixão.jpg", "link": "./generosP/Romance/diariopaixão.html" },
        { "id": 65, "nome": "Doce Novembro", "img": "../Imagens/romance/Doce Novembro.jpg", "link": "./generosP/Romance/docenovembro.html" },
        { "id": 66, "nome": "Lembranças", "img": "../Imagens/romance/Lembranças.webp", "link": "./generosP/Romance/lembranças.html" },
        { "id": 67, "nome": "Me Chame Pelo Seu Nome", "img": "../Imagens/romance/Me chame pelo seu nome.webp", "link": "./generosP/Romance/mechamepelonome.html" },
        { "id": 68, "nome": "Na Natureza Selvagem", "img": "../Imagens/romance/Na Natureza Selvagem.jpg", "link": "./generosP/Romance/naturezaselvagem.html" },
        { "id": 69, "nome": "O Paciente Inglês", "img": "../Imagens/romance/O paciente inglês.jpg", "link": "./generosP/Romance/pacienteingles.html" },
        { "id": 70, "nome": "Orgulho e Preconceito", "img": "../Imagens/romance/Orgulho e preconceito.webp", "link": "./generosP/Romance/orgulho&preconceito.html" },
        { "id": 71, "nome": "P.S. Eu Te Amo", "img": "../Imagens/romance/P.S. Eu Te Amo.jpg", "link": "./generosP/Romance/iloveyou.html" },
        { "id": 72, "nome": "Retrato de uma Jovem em Chamas", "img": "../Imagens/romance/Retrato de uma Jovem em Chamas.webp", "link": "./generosP/Romance/retrato.html" }
    ],
    "Terror": [
        { "id": 73, "nome": "A Bruxa", "img": "../Imagens/terror/A bruxa.webp", "link": "./generosP/terror/abruxa.html" },
        { "id": 74, "nome": "A Entidade", "img": "../Imagens/terror/A entidade.jpg", "link": "./generosP/terror/entidade.html" },
        { "id": 75, "nome": "Atividade Paranormal", "img": "../Imagens/terror/Atividade Paranormal.webp", "link": "./generosP/terror/paranormal.html" },
        { "id": 76, "nome": "Corra!", "img": "../Imagens/terror/Corra!.webp", "link": "./generosP/terror/corra.html" },
        { "id": 77, "nome": "Hereditário", "img": "../Imagens/terror/Hereditario.jpg", "link": "./generosP/terror/hereditario.html" },
        { "id": 78, "nome": "Invocação do Mal", "img": "../Imagens/terror/invocação do mal.png", "link": "./generosP/terror/invocaçaõ.html" },
        { "id": 79, "nome": "It a Coisa", "img": "../Imagens/terror/it a coisa.webp", "link": "./generosP/terror/it.html" },
        { "id": 80, "nome": "Mama", "img": "../Imagens/terror/mama.jpg", "link": "./generosP/terror/mama.html" },
        { "id": 81, "nome": "Massacre da Serra Elétrica", "img": "../Imagens/terror/massacre da serra eletrica.webp", "link": "./generosP/terror/massacre.html" },
        { "id": 82, "nome": "O Culto de Chucky", "img": "../Imagens/terror/o culto de chuck.webp", "link": "./generosP/terror/chuck.html" },
        { "id": 83, "nome": "O Exorcista", "img": "../Imagens/terror/O exorcista.webp", "link": "./generosP/terror/exorcita.html" },
        { "id": 84, "nome": "O Iluminado", "img": "../Imagens/terror/O iluminado.jpg", "link": "./generosP/terror/iluminado.html" }
    ]
}


const campoBusca = document.getElementById('pesquisa');
const containerResultados = document.getElementById('resultados-busca');


const elementosParaEsconder = [
    document.querySelector('.sliderAutoTrakio'),
    document.querySelector('.gen'),
    document.querySelector('.generos'),
    ...document.querySelectorAll('.categoria'),
    ...document.querySelectorAll('.linha-filmes'),
    document.querySelector('footer')
];

campoBusca.addEventListener('input', () => {
    const termo = campoBusca.value.toLowerCase().trim();

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
        const filtro = filmes[genero].filter(f => f.nome.toLowerCase().includes(termo));
        achados = [...achados, ...filtro];
    }

    renderizarBusca(achados);
});

function renderizarBusca(lista) {
    if (lista.length === 0) {
        containerResultados.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 50vh; width: 100%; text-align: center;">
                <h2 style="color: white; font-family: sans-serif;">Não achamos seu filme 😕</h2>
            </div>`;
        return;
    }

    const cards = lista.map(f => {
        const imgPath = f.img.startsWith('../') ? f.img.substring(3) : f.img;
        const linkPath = f.link.replace('./', './HTML/');

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