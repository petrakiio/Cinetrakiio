from django.shortcuts import render

from python.models.movie_model import MOVIES_BY_GENRE
from python.models.page_model import HOME_TEMPLATES


def render_movie_page(request, genre_name: str, slug: str):
    template = MOVIES_BY_GENRE.get(genre_name, {}).get(slug)
    if not template:
        return render(request, HOME_TEMPLATES['aviso'], status=404)
    return render(request, template)
