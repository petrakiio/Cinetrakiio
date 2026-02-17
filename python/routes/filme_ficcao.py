from flask import Blueprint, render_template

filme_ficcao = Blueprint('filme_ficcao', __name__)

FILMES_FICCAO = {
    'alien': 'generosP/Ficção/alien.html',
    'bladerunner': 'generosP/Ficção/bladerunner.html',
    'guardioes': 'generosP/Ficção/guardioes.html',
    'harry': 'generosP/Ficção/harry.html',
    'interstelar': 'generosP/Ficção/interstelar.html',
    'jurasicpark': 'generosP/Ficção/jurasicpark.html',
    'matrix': 'generosP/Ficção/matrix.html',
    'piratas': 'generosP/Ficção/piratas.html',
    'show': 'generosP/Ficção/show.html',
    'star': 'generosP/Ficção/star.html',
    'umdia': 'generosP/Ficção/umdia.html',
    'uncharted': 'generosP/Ficção/uncharted.html',
}


@filme_ficcao.route('/filmes/ficcao/<slug>')
def filme(slug: str):
    template = FILMES_FICCAO.get(slug)
    if not template:
        return render_template('aviso.html'), 404
    return render_template(template)
