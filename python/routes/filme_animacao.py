from flask import Blueprint, render_template

filme_animacao = Blueprint('filme_animacao', __name__)

FILMES_ANIMACAO = {
    'noiva': 'generos_filmes/Animação/noiva.html',
    'castelo': 'generos_filmes/Animação/castelo.html',
    'coraline': 'generos_filmes/Animação/coraline.html',
    'era-do-gelo': 'generos_filmes/Animação/eradogelo.html',
    'spiderman': 'generos_filmes/Animação/spiderman.html',
    'kungfupanda': 'generos_filmes/Animação/kungfupanda.html',
    'lorax': 'generos_filmes/Animação/lorax.html',
    'incriveis': 'generos_filmes/Animação/incriveis.html',
    'ospequeninos': 'generos_filmes/Animação/ospequeninos.html',
    'poragua': 'generos_filmes/Animação/poragua.html',
    'ratatuli': 'generos_filmes/Animação/ratatuli.html',
    'upaltas': 'generos_filmes/Animação/upaltas.html',
}


@filme_animacao.route('/filmes/animacao/<slug>')
def filme(slug: str):
    template = FILMES_ANIMACAO.get(slug)
    if not template:
        return render_template('home/aviso.html'), 404
    return render_template(template)
