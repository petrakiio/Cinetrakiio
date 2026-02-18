from flask import Blueprint, render_template, request

cadastro = Blueprint('cadastro', __name__)


@cadastro.route('/cadastro', methods=['GET', 'POST'])
def cadastro_page():
    if request.method == 'POST':
        pass
    return render_template('home/cadastro.html')
