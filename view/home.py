from django.shortcuts import redirect, render
from django.urls import reverse


def index(request):
    return render(request, 'home/index.html')


def sobre(request):
    return render(request, 'home/sobre.html')


def aviso(request):
    return render(request, 'home/aviso.html')


def novidades(request):
    return render(request, 'home/novidades.html')


def legacy_html_page(request, pagina: str):
    page_to_route = {
        'acao': 'genero_acao',
        'animacao': 'genero_animacao',
        'aviso': 'aviso',
        'brasileiro': 'genero_brasileiro',
        'cadastro': 'cadastro',
        'comedia': 'genero_comedia',
        'ficcao': 'genero_ficcao',
        'index': 'index',
        'layout': 'index',
        'login': 'login',
        'novidades': 'novidades',
        'romance': 'genero_romance',
        'sobre': 'sobre',
        'terror': 'genero_terror',
    }

    route_name = page_to_route.get(pagina.lower())
    if not route_name:
        return render(request, 'home/aviso.html', status=404)
    return redirect(reverse(route_name))
