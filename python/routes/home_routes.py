from flask import Blueprint

from python.controllers.page_controller import render_home_page

home = Blueprint('home', __name__)


@home.route('/')
@home.route('/index')
def index():
    return render_home_page('index')


@home.route('/sobre')
def sobre():
    return render_home_page('sobre')


@home.route('/novidades')
def novidades():
    return render_home_page('novidades')


@home.route('/aviso')
def aviso():
    return render_home_page('aviso')
