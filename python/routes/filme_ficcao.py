from flask import Blueprint, render_template

filme_ficcao = Blueprint('filme_ficcao', __name__)

FILMES_FICCAO = {
    'alien': 'generos_filmes/Ficção/alien.html',
    'bladerunner': 'generos_filmes/Ficção/bladerunner.html',
    'guardioes': 'generos_filmes/Ficção/guardioes.html',
    'harry': 'generos_filmes/Ficção/harry.html',
    'interstelar': 'generos_filmes/Ficção/interstelar.html',
    'jurasicpark': 'generos_filmes/Ficção/jurasicpark.html',
    'matrix': 'generos_filmes/Ficção/matrix.html',
    'piratas': 'generos_filmes/Ficção/piratas.html',
    'show': 'generos_filmes/Ficção/show.html',
    'star': 'generos_filmes/Ficção/star.html',
    'umdia': 'generos_filmes/Ficção/umdia.html',
    'uncharted': 'generos_filmes/Ficção/uncharted.html',
}


@filme_ficcao.route('/filmes/ficcao/<slug>')
def filme(slug: str):
    template = FILMES_FICCAO.get(slug)
    if not template:
        return render_template('home/aviso.html'), 404
    return render_template(template)
