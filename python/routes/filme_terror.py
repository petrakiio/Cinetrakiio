from flask import Blueprint

from python.controllers.movie_controller import render_movie_page

filme_terror = Blueprint('filme_terror', __name__)


@filme_terror.route('/filmes/terror/<slug>')
def filme(slug: str):
    return render_movie_page('terror', slug)
