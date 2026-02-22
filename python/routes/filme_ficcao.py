from flask import Blueprint

from python.controllers.movie_controller import render_movie_page

filme_ficcao = Blueprint('filme_ficcao', __name__)


@filme_ficcao.route('/filmes/ficcao/<slug>')
def filme(slug: str):
    return render_movie_page('ficcao', slug)
