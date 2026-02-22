from flask import Blueprint

from python.controllers.page_controller import render_genre_page

generos = Blueprint('generos', __name__)


@generos.route('/acao')
def acao():
    return render_genre_page('acao')


@generos.route('/comedia')
def comedia():
    return render_genre_page('comedia')


@generos.route('/terror')
def terror():
    return render_genre_page('terror')


@generos.route('/brasileiro')
def brasileiro():
    return render_genre_page('brasileiro')


@generos.route('/romance')
def romance():
    return render_genre_page('romance')


@generos.route('/animacao')
def animacao():
    return render_genre_page('animacao')


@generos.route('/ficcao')
def ficcao():
    return render_genre_page('ficcao')
