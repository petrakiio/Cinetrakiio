from flask import Blueprint

from python.controllers.movie_controller import render_movie_page

filme_animacao = Blueprint('filme_animacao', __name__)


@filme_animacao.route('/filmes/animacao/<slug>')
def filme(slug: str):
    return render_movie_page('animacao', slug)
