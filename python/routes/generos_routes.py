from django.urls import path

from python.controllers.page_controller import render_genre_page


def acao(request):
    return render_genre_page(request, 'acao')


def comedia(request):
    return render_genre_page(request, 'comedia')


def terror(request):
    return render_genre_page(request, 'terror')


def brasileiro(request):
    return render_genre_page(request, 'brasileiro')


def romance(request):
    return render_genre_page(request, 'romance')


def animacao(request):
    return render_genre_page(request, 'animacao')


def ficcao(request):
    return render_genre_page(request, 'ficcao')


urlpatterns = [
    path('acao', acao, name='acao'),
    path('comedia', comedia, name='comedia'),
    path('terror', terror, name='terror'),
    path('brasileiro', brasileiro, name='brasileiro'),
    path('romance', romance, name='romance'),
    path('animacao', animacao, name='animacao'),
    path('ficcao', ficcao, name='ficcao'),
]
