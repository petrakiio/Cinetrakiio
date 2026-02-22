from flask import Blueprint

from python.controllers.movie_controller import render_movie_page

filme_acao = Blueprint('filme_acao', __name__)


@filme_acao.route('/filmes/acao/<slug>')
def filme(slug: str):
    return render_movie_page('acao', slug)
