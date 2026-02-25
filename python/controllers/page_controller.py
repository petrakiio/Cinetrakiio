from django.shortcuts import render

from python.models.page_model import AUTH_TEMPLATES, GENRE_TEMPLATES, HOME_TEMPLATES


def render_home_page(request, page_name: str):
    template = HOME_TEMPLATES.get(page_name, HOME_TEMPLATES['aviso'])
    status_code = 200 if page_name in HOME_TEMPLATES else 404
    return render(request, template, status=status_code)


def render_auth_page(request, page_name: str):
    if page_name not in AUTH_TEMPLATES:
        return render(request, HOME_TEMPLATES['aviso'], status=404)

    if request.method == 'POST':
        # Reservado para lógica futura de autenticação/cadastro.
        pass

    return render(request, AUTH_TEMPLATES[page_name])


def render_genre_page(request, genre_name: str):
    template = GENRE_TEMPLATES.get(genre_name)
    if not template:
        return render(request, HOME_TEMPLATES['aviso'], status=404)
    return render(request, template)
