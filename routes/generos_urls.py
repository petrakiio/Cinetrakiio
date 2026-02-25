from django.urls import path

from view.generos import acao, animacao, brasileiro, comedia, ficcao, romance, terror

urlpatterns = [
    path('acao/', acao, name='genero_acao'),
    path('comedia/', comedia, name='genero_comedia'),
    path('terror/', terror, name='genero_terror'),
    path('brasileiro/', brasileiro, name='genero_brasileiro'),
    path('romance/', romance, name='genero_romance'),
    path('animacao/', animacao, name='genero_animacao'),
    path('ficcao/', ficcao, name='genero_ficcao'),
]
