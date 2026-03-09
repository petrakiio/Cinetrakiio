from django.http import HttpRequest, HttpResponse
from django.shortcuts import redirect, render
from django.urls import reverse

from models.movie_catalog import (
    get_movie_template,
    resolve_canonical_genre,
    resolve_slug_from_legacy_file,
)


def _render_movie(request, genre_name: str, slug: str):
    template_name = get_movie_template(genre_name, slug)
    if not template_name:
        return render(request, 'home/aviso.html', status=404)
    return render(request, template_name)


def filme_acao(request, slug: str):
    return _render_movie(request, 'acao', slug)


def filme_comedia(request, slug: str):
    return _render_movie(request, 'comedia', slug)


def filme_terror(request, slug: str):
    return _render_movie(request, 'terror', slug)


def filme_brasileiro(request, slug: str):
    return _render_movie(request, 'brasileiro', slug)


def filme_romance(request, slug: str):
    return _render_movie(request, 'romance', slug)


def filme_animacao(request, slug: str):
    return _render_movie(request, 'animacao', slug)


def filme_ficcao(request, slug: str):
    return _render_movie(request, 'ficcao', slug)


def filme_legado(request: HttpRequest, genero_atual: str, legacy_path: str) -> HttpResponse:
    parts = [part for part in legacy_path.split('/') if part]
    if len(parts) < 2:
        return render(request, 'home/aviso.html', status=404)

    legacy_genre, legacy_file = parts[-2], parts[-1]
    legacy_file = legacy_file.removesuffix('.html')

    canonical_genre = resolve_canonical_genre(legacy_genre, genero_atual)
    if not canonical_genre:
        return render(request, 'home/aviso.html', status=404)

    slug = resolve_slug_from_legacy_file(canonical_genre, legacy_file)
    if not slug:
        return render(request, 'home/aviso.html', status=404)

    return redirect(reverse(f'filme_{canonical_genre}', kwargs={'slug': slug}))

