from flask import Blueprint

from python.controllers.movie_controller import render_movie_page

filme_romance = Blueprint('filme_romance', __name__)


@filme_romance.route('/filmes/romance/<slug>')
def filme(slug: str):
    return render_movie_page('romance', slug)
