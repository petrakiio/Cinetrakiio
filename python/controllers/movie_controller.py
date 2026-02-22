from flask import render_template

from python.models.movie_model import MOVIES_BY_GENRE
from python.models.page_model import HOME_TEMPLATES


def render_movie_page(genre_name: str, slug: str):
    template = MOVIES_BY_GENRE.get(genre_name, {}).get(slug)
    if not template:
        return render_template(HOME_TEMPLATES['aviso']), 404
    return render_template(template)
