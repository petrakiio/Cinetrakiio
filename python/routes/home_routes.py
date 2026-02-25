from django.urls import path

from python.controllers.page_controller import render_home_page


def index(request):
    return render_home_page(request, 'index')


def sobre(request):
    return render_home_page(request, 'sobre')


def novidades(request):
    return render_home_page(request, 'novidades')


def aviso(request):
    return render_home_page(request, 'aviso')


urlpatterns = [
    path('', index, name='index'),
    path('index', index, name='index_alias'),
    path('sobre', sobre, name='sobre'),
    path('novidades', novidades, name='novidades'),
    path('aviso', aviso, name='aviso'),
]
