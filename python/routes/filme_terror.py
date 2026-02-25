from django.urls import path

from python.controllers.movie_controller import render_movie_page


def filme(request, slug: str):
    return render_movie_page(request, 'terror', slug)


urlpatterns = [
    path('filmes/terror/<slug:slug>', filme, name='filme_terror'),
]
