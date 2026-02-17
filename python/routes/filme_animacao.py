from flask import Blueprint, render_template

filme_animacao = Blueprint('filme_animacao', __name__)

FILMES_ANIMACAO = {
    'noiva': 'generosP/Animação/noiva.html',
    'castelo': 'generosP/Animação/castelo.html',
    'coraline': 'generosP/Animação/coraline.html',
    'era-do-gelo': 'generosP/Animação/eradogelo.html',
    'spiderman': 'generosP/Animação/spiderman.html',
    'kungfupanda': 'generosP/Animação/kungfupanda.html',
    'lorax': 'generosP/Animação/lorax.html',
    'incriveis': 'generosP/Animação/incriveis.html',
    'ospequeninos': 'generosP/Animação/ospequeninos.html',
    'poragua': 'generosP/Animação/poragua.html',
    'ratatuli': 'generosP/Animação/ratatuli.html',
    'upaltas': 'generosP/Animação/upaltas.html',
}


@filme_animacao.route('/filmes/animacao/<slug>')
def filme(slug: str):
    template = FILMES_ANIMACAO.get(slug)
    if not template:
        return render_template('aviso.html'), 404
    return render_template(template)
