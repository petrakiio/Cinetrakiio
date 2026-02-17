from flask import Blueprint,render_template,redirect,url_for,request
import os

login = Blueprint('Login',__name__)

@login.route('/login',methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        pass
    return render_template('login.html')
