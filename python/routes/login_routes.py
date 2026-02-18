from flask import Blueprint, render_template, request

login = Blueprint('login', __name__)


@login.route('/login', methods=['GET', 'POST'])
def login_page():
    if request.method == 'POST':
        pass
    return render_template('home/login.html')
