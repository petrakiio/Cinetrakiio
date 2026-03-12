from django.shortcuts import redirect, render
from django.urls import reverse
from django.templatetags.static import static

from catalog.models import Genero
from models.navigation import LEGACY_PAGE_TO_ROUTE


def index(request):
    generos = (
        Genero.objects
        .prefetch_related('filmes')
        .all()
    )

    sections = []
    for genero in generos:
        filmes = list(genero.filmes.all()[:4])
        if not filmes:
            continue
        sections.append({
            'titulo': f"Destaques de {genero.nome}",
            'genero': genero,
            'route_name': f"filme_{genero.slug}",
            'filmes': filmes,
        })

    context = {
        'sections': sections,
        'logo_url': static('img/Logos/Logo.png'),
    }
    return render(request, 'home/index.html', context)


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
