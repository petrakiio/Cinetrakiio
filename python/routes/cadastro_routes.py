from flask import Blueprint,redirect,url_for,render_template,request

cadastro = Blueprint('Cadastro',__name__)

@cadastro.route('/cadastro',methods=['POST', 'GET'])
def cad():
    if request.method == 'POST':
        pass
    return render_template('cadastro.html')