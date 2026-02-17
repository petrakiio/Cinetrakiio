from flask import Flask
from python.routes.home_routes import home
from python.routes.generos_routes import generos
from python.routes.filme_acao import filme_acao
from python.routes.filme_comedia import filme_comedia
from python.routes.filme_animacao import filme_animacao
from python.routes.filme_brasileiro import filme_brasileiro
from python.routes.filme_ficcao import filme_ficcao
from python.routes.filme_romance import filme_romance
from python.routes.filme_terror import filme_terror

app = Flask(__name__)

app.register_blueprint(home)
app.register_blueprint(generos)
app.register_blueprint(filme_acao)
app.register_blueprint(filme_comedia)
app.register_blueprint(filme_animacao)
app.register_blueprint(filme_brasileiro)
app.register_blueprint(filme_ficcao)
app.register_blueprint(filme_romance)
app.register_blueprint(filme_terror)

if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=5000)
