from flask import Blueprint, render_template

generos = Blueprint('generos', __name__)


@generos.route('/acao')
def acao():
    return render_template('acao.html')


@generos.route('/comedia')
def comedia():
    return render_template('comedia.html')


@generos.route('/terror')
def terror():
    return render_template('terror.html')


@generos.route('/brasileiro')
def brasileiro():
    return render_template('brasileiro.html')


@generos.route('/romance')
def romance():
    return render_template('romance.html')


@generos.route('/animacao')
def animacao():
    return render_template('animacao.html')


@generos.route('/ficcao')
def ficcao():
    return render_template('ficcao.html')
