from django.urls import path

from controllers.filmes_controller import (
    filme_acao,
    filme_animacao,
    filme_brasileiro,
    filme_comedia,
    filme_ficcao,
    filme_romance,
    filme_terror,
)

urlpatterns = [
    path('acao/<slug:slug>/', filme_acao, name='filme_acao'),
    path('comedia/<slug:slug>/', filme_comedia, name='filme_comedia'),
    path('terror/<slug:slug>/', filme_terror, name='filme_terror'),
    path('brasileiro/<slug:slug>/', filme_brasileiro, name='filme_brasileiro'),
    path('romance/<slug:slug>/', filme_romance, name='filme_romance'),
    path('animacao/<slug:slug>/', filme_animacao, name='filme_animacao'),
    path('ficcao/<slug:slug>/', filme_ficcao, name='filme_ficcao'),
]
