from flask import Blueprint, render_template

home = Blueprint('home', __name__)


@home.route('/')
@home.route('/index')
def index():
    return render_template('home/index.html')


@home.route('/sobre')
def sobre():
    return render_template('home/sobre.html')


@home.route('/novidades')
def novidades():
    return render_template('home/novidades.html')


@home.route('/aviso')
def aviso():
    return render_template('home/aviso.html')
