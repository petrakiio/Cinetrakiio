from django.urls import path

from python.controllers.movie_controller import render_movie_page


def filme(request, slug: str):
    return render_movie_page(request, 'ficcao', slug)


urlpatterns = [
    path('filmes/ficcao/<slug:slug>', filme, name='filme_ficcao'),
]
