from flask import Blueprint

from python.controllers.movie_controller import render_movie_page

filme_brasileiro = Blueprint('filme_brasileiro', __name__)


@filme_brasileiro.route('/filmes/brasileiro/<slug>')
def filme(slug: str):
    return render_movie_page('brasileiro', slug)
