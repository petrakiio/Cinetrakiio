from flask import Blueprint

from python.controllers.page_controller import render_auth_page

cadastro = Blueprint('cadastro', __name__)


@cadastro.route('/cadastro', methods=['GET', 'POST'])
def cadastro_page():
    return render_auth_page('cadastro')
