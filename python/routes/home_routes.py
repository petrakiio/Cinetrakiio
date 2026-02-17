from flask import Blueprint, render_template

home = Blueprint('home', __name__)


@home.route('/')
@home.route('/index')
def index():
    return render_template('index.html')


@home.route('/sobre')
def sobre():
    return render_template('sobre.html')


@home.route('/novidades')
def novidades():
    return render_template('novidades.html')
