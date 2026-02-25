from django.urls import path

from python.controllers.movie_controller import render_movie_page


def filme(request, slug: str):
    return render_movie_page(request, 'acao', slug)


urlpatterns = [
    path('filmes/acao/<slug:slug>', filme, name='filme_acao'),
]
