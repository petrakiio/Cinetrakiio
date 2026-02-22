from flask import Blueprint

from python.controllers.movie_controller import render_movie_page

filme_comedia = Blueprint('filme_comedia', __name__)


@filme_comedia.route('/filmes/comedia/<slug>')
def filme(slug: str):
    return render_movie_page('comedia', slug)
