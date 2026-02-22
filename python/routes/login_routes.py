from flask import Blueprint

from python.controllers.page_controller import render_auth_page

login = Blueprint('login', __name__)


@login.route('/login', methods=['GET', 'POST'])
def login_page():
    return render_auth_page('login')
