from django.shortcuts import redirect, render
from django.urls import reverse

from models.navigation import LEGACY_PAGE_TO_ROUTE


def index(request):
    return render(request, 'home/index.html')


def sobre(request):
    return render(request, 'home/sobre.html')


def aviso(request):
    return render(request, 'home/aviso.html')


def novidades(request):
    return render(request, 'home/novidades.html')


def legacy_html_page(request, pagina: str):
    route_name = LEGACY_PAGE_TO_ROUTE.get(pagina.lower())
    if not route_name:
        return render(request, 'home/aviso.html', status=404)
    return redirect(reverse(route_name))

